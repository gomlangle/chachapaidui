/**
 * app主入口
 * Created by guominglong on 2017/12/13.
 */
class AppDelegate{
    static get app(){
        if(!window.app)
            window.app = new AppDelegate();
        return window.app;
    }

    constructor(){
        this.dataBuffer = "";
        this.packageSize = 500;//数据包的最大长度
        this.minWidth = 1000;//界面最小宽度
        this.welcomePanel = document.getElementById("welcome");
        //测试用
        this.selfVideoDivID = "";
        this.nickName = "";//用户登录名称
        this.roomCode = "";//教室邀请码
        this.roomInfo = null;//教室信息
        this.videoStreamPoolArr = [];//视频流集合
    }

    /**
     * 启动
     * */
    init(){
        //设置清晰度为1倍屏,不要设置2倍白板会有问题
        ScreenManager.main.quilaty = 1;
        //初始化音频播放器
        this.bgAudio = new GMLAudio();
        this.bgAudio.preload = true;
        //this.bgAudio.src = "./gameResource/bg.mp3"

        //初始化视频播放器
        this.bgVideo = new GMLVideo();
        this.bgVideo.preload = true;
        //this.bgAudio.src = "./gameResource/bg.mp4"

        //初始化白板区域
        this.whiteBoard = document.getElementById("whiteBoard");
        this.whiteBoard.style.display = "none";

        //初始化右侧面板
        this.rightPanel = document.getElementById("rightPanel");
        this.rightPanel.style.display = "none";
        this.masterVideo = document.getElementsByClassName("masterVideo")[0];
        this.subVideoContainer = document.getElementById("subVideoContainer")
    }

    /**
     * 开始游戏
     * */
    startClass(_nickName,_roomCode = "testchanel_1"){
        if(OSManager.OS == "IOS" || OSManager.OS == "Android")
        {
            window.addEventListener("touchstart",function(evt){
                if(evt.targetTouches.length >0){
                    //点击位移方式
                    let t = evt.targetTouches[0];
                    let me = new GMLMouseEvent()
                    me.data = {"globelX":t.pageX,"globelY": t.pageY}
                    AppDelegate.app.ongMouseDown(me)
                }
            })
            window.addEventListener("touchend",function(evt){
                if(evt.targetTouches.length >0){
                    //点击位移方式
                    let t = evt.targetTouches[0];
                    let me = new GMLMouseEvent()
                    me.data = {"globelX":t.pageX,"globelY": t.pageY}
                    AppDelegate.app.ongMouseUp(me)
                }
            })
            window.addEventListener("touchmove",function(evt){
                if(evt.targetTouches.length >0){
                    //点击位移方式
                    let t = evt.targetTouches[0];
                    let me = new GMLMouseEvent()
                    me.data = {"globelX":t.pageX,"globelY": t.pageY}
                    AppDelegate.app.ongMouseMove(me)
                }
            })
        }else{
            window.addEventListener("mousedown",function(evt){
                let me = new GMLMouseEvent()
                me.data = {"globelX": evt.target.x,"globelY": evt.target.y};
                AppDelegate.app.ongMouseDown(me)
            })
        }

        this.nickName = _nickName.length > 17 ? _nickName.substr(0,17) : _nickName;
        this.roomCode = _roomCode;
        this.bgAudio.play();
        this.bgAudio.loop = true;
        this.bgVideo.play();
        this.bgVideo.loop = true;
        //this.fullScreen();//默认全屏

        //链接socket
        this.ws = new WebSocketHandler("wss://39.106.135.11:443/gmlws",[]);//https的请求格式
        //this.ws = new WebSocketHandler("ws://39.106.135.11:31111",[]);//http的请求格式
        //this.ws = new WebSocketHandler("ws://localhost:31111",[]);//本地http服务的请求格式
        this.ws.addEventListener(WebSocketEvent.SOCKET_CLOSE,this.onSocketClose,this)
        this.ws.addEventListener(WebSocketEvent.SOCKET_DATA,this.onSocketData,this);
        this.ws.addEventListener(WebSocketEvent.SOCKET_ERROR,this.onSocketError,this)
        this.ws.addEventListener(WebSocketEvent.SOCKET_CONNECTED,this.onSocketConnected,this)

        //长连接心跳 30秒发一次
        setInterval(function(){
            if(AppDelegate.app.ws.isOpen){
                let req = {"cmd":0x00FF0001,"seq":0,"lt":0};
                AppDelegate.app.sendDataToServer(JSON.stringify(req))
            }
        },30000)
    }

    /**
     * 拆包发送,保证每个包都能正常送达到服务器
     * */
    sendDataToServer(jsonStr){
        var waitSendStr = "<gmlb>" + jsonStr + "<gmle>";
        var result = "";
        //拆包发送，  如果要发送的内容长度大于500 则拆成N个包，发送
        while(waitSendStr.length > this.packageSize){
            result = waitSendStr.substring(0,this.packageSize);
            this.ws.sendData(result);
            waitSendStr = waitSendStr.substring(this.packageSize,waitSendStr.length);
        }
        this.ws.sendData(waitSendStr);
    }

    ongMouseDown(evt){
        let wX = evt.data.globelX;//全局坐标
        let wY = evt.data.globelY;
        console.log("mouseDown,wX="+wX + ",wY=" + wY);
    }

    ongMouseUp(evt){
        let wX = evt.data.globelX;//全局坐标
        let wY = evt.data.globelY;
        console.log("mouseUp,wX="+wX + ",wY=" + wY);
    }

    ongMouseMove(evt){
        let wX = evt.data.globelX;//全局坐标
        let wY = evt.data.globelY;
        //console.log("mouseMove,wX="+wX + ",wY=" + wY);
    }

    onSocketClose(e){
        console.log("socket断开")
    }
    onSocketData(e){
        this.dataBuffer = this.dataBuffer + e.data;
        var tempStr = this.dataBuffer;
        var pkgHeadIdx = tempStr.indexOf("<gmlb>");//取包头
        var pkgEndIdx = tempStr.indexOf("<gmle>");//取包尾
        var waitJSONStr = "";
        while(pkgHeadIdx >= 0 && pkgEndIdx > 0){
            if(pkgEndIdx > pkgHeadIdx){
                //可以读出一个数据包
                waitJSONStr = tempStr.substring(pkgHeadIdx + 6,pkgEndIdx);
                //清空pkgEndIdx以前的所有数据
                tempStr = tempStr.substring(pkgEndIdx+6,tempStr.length);
                this.jiexiData(waitJSONStr);
            }else{
                //清空pkgHeadIdx以前的所有数据
                tempStr = tempStr.substring(pkgHeadIdx,tempStr.length);
            }
            this.dataBuffer = tempStr;
            pkgHeadIdx = tempStr.indexOf("<gmlb>");//重新取包头
            pkgEndIdx = tempStr.indexOf("<gmle>");//重新取包尾
        }
    }

    onSocketError(e){
        console.log("socket发生错误");
    }

    onSocketConnected(e){
        //开始登陆
        let req = {"cmd":0x00FF0003,"seq":0,"ln":this.nickName};
        this.sendDataToServer(JSON.stringify(req));
    }

    /**
     *
     * 正式开始*/
    _trueBegin(){
        AppDelegate.app.whiteBoard.style.display = "block";
        AppDelegate.app.rightPanel.style.display = "block";
        AppDelegate.app.welcomePanel.style.display = "none";

        //初始化白板数据
        AppDelegate.app.h5Init();

        //根据用户列表创建 视频容器
        let userArr = this.roomInfo.ua;
        let ownnerUID = this.roomInfo.ownnerUID
        $('div#video').empty();//移除所有子元素
        userArr.forEach(function(item){
            //如果Item不是主讲,则创建新的学生视频窗口
            if(ownnerUID != item.uid)
                $('div#subVideoContainer').append('<div id="stu_'+item.uid+'" style="float:left; width:160px;height:120px;display:inline-block;"></div>');
        });
        //启动媒体引擎
        AgoraMediaProxy.instance.start(this.userinfo.uid,this.roomInfo.rn);//自己是主讲
    }

    //上报给服务器,让其他人知道我的媒体ID
    upLoadMediaUserChange(clientUID,mediaId){
        this.roomInfo.mediaMap[clientUID] = mediaId;
        let req = {
            "cmd":0x00FF0020,
            "uid":clientUID,
            "rid":this.roomInfo.rid,
            "mid":mediaId
        };
        this.sendDataToServer(JSON.stringify(req))
    }

    getUIDbyMediaId(mediaId){
        let tempmap = this.roomInfo.mediaMap;
        let resultUid = -1;
        for(var key in tempmap){
            if(tempmap[key] == mediaId)
            {
                resultUid = key;
                break;
            }
        }
        return resultUid;
    }

    //添加视频流
    addStream(stream){
        let streamID = stream.getId();
        let clientUID = this.getUIDbyMediaId(streamID);
        if(clientUID == -1)
            return;//如果为寻找到对应的uid,则return
        let arr = this.videoStreamPoolArr;
        let j = arr.length;
        //遍历视频流集合,去重
        for(var i=0;i<j;i++){
            if(arr[i].getId() == streamID){
                //移除相同mediaID的stream
                this.videoStreamPoolArr.slice(i,1);
                break;
            }
        }

        //添加
        this.videoStreamPoolArr.push(stream);

        //刷新视频
        this.refreshVideo(clientUID,streamID);
    }

    //移除视频流
    removeStream(stream){
        let streamID = stream.getId();
        let clientUID = this.getUIDbyMediaId(streamID);
        if(clientUID == -1)
            return;//如果为寻找到对应的uid,则return
        this.roomInfo.mediaMap[clientUID] = -1;
        let arr = this.videoStreamPoolArr;
        let j = arr.length;
        //遍历视频流集合,删除视频流
        for(var i=0;i<j;i++){
            if(arr[i].getId() == streamID){
                //移除相同mediaID的stream
                this.videoStreamPoolArr.slice(i,1);
                break;
            }
        }
        //停止视频
        stream.stop()
    }

    //刷新视频
    refreshVideo(clientUID,mediaId){
        let divId = this.makeVideoDivId(clientUID);
        let arr = this.videoStreamPoolArr;
        let j = arr.length;
        //遍历视频流集合
        for(var i=0;i<j;i++){
            if(arr[i].getId() == mediaId){
                //开始渲染
                arr[i].play(divId);
                break;
            }
        }
    }

    //根据uid生成对应的渲染视频用的div的ID
    makeVideoDivId(clientUID){
        if(this.roomInfo.ownnerUID == clientUID)
            return "mainVideo";
        else
            return "stu_" + clientUID;
    }

    h5Init(){
        let isTeacher = this.roomInfo.ownnerUID == this.userinfo.uid;
        //测试代码
        let course_H5Entity = new H5Entity_course_simple();
        course_H5Entity.data["courserole"] = isTeacher ? 1 : 0;
        course_H5Entity.data["coursestyle"] = 0;
        course_H5Entity.data["metrialtype"] = 0;//1比1的教材比例
        course_H5Entity.data["startedTime"] = parseInt(new Date().valueOf() / 1000);
        course_H5Entity.data["CanTurnPage"] = 1;//可以翻页

        let user_H5Entity = new H5Entity_user_simple();
        user_H5Entity.data["usergroup"] = 1;
        user_H5Entity.data["userid"] = this.userinfo.uid;
        user_H5Entity.data["userrole"] = isTeacher ? 1 : 0;
        user_H5Entity.data["usertype"] = isTeacher ? 1 : 2;//self.teacherRole() ? 1 : 2;//gmlok

        //构建pdf下载地址
        let urlInfo = new H5Entity_url_simple();
        //加载网络pdf资源
        let headUrlBeforeBase64 = this.roomInfo.teachingMaterialPath;//"../../4b7598199953ffe850ed9d672991ccc6.pdf";
        var headUrl = window.MyBase64.encode(headUrlBeforeBase64);
        headUrl = headUrl || "";
        urlInfo.data["pdf"] = headUrl;

        let hostInfo = new H5Entity_host_simple();
        hostInfo.data["language"] = "cn";
        hostInfo.data["showtype"] = "normal"//成人还是青少
        let whiteConfigDic = this.createWhiteConfigDic();
        hostInfo.data["toolsconf"] = whiteConfigDic;

        let courseAll = new H5Entity_courseAll();
        courseAll.data["courseTypeEx"] = 0;

        //开始初始化H5PdfLoader
        this.callH5(courseAll.key,courseAll.toJSStr());
        this.callH5(course_H5Entity.key,course_H5Entity.toJSStr());
        this.callH5(user_H5Entity.key,user_H5Entity.toJSStr());
        this.callH5(urlInfo.key,urlInfo.toJSStr());
        this.callH5(hostInfo.key,hostInfo.toJSStr());

    }

    /**
     * 调用 白板的各种协议接口
     * */
    callH5(type,JSONStrValue){
        window.comm_type_get(type,JSONStrValue);
    }

    createWhiteConfigDic(){
        return {
            "back":true,/*回退*/
            "clear":true,/*清空*/
            "draft":false,/*拖拽*/
            "newrub":false,/*新橡皮擦*/
            "pen":true,/*画笔*/
            "rec":true,/*矩形*/
            "rub":true,/*旧版橡皮擦*/
            "signpen":true,/*荧光笔*/
            "text":true/*文本*/
        }
    }

    /**
     * 解析服务器返回的数据
     * */
    jiexiData(data){
        try{
            let jsonObj = JSON.parse(data);
            switch(jsonObj.cmd){
                case 0x00FF0004:
                    //登陆信息回调
                    this.userinfo = jsonObj;//设置全局用户信息
                    if(jsonObj.code == 0){
                        //进入教室
                        let req = {
                            "cmd":0x00FF0014,
                            "seq":0,
                            "rc":this.roomCode,
                            "uid":this.userinfo.uid,
                            "nn":this.userinfo.nn,
                            "hi":this.userinfo.hi,
                            "sex":this.userinfo.sex,
                            "ca":{x:34,y:387},//{x:parseInt(this.scene.width/2+Math.random()*100),y:parseInt(this.scene.height/2+Math.random()*100)},
                            "rp":this.userinfo.resourcePath.toString().replace("resource","gameResource")/*这个替换只是临时解决方案,真正的解决办法要从服务器入手,下发资源ID,本地根据资源ID动态算资源地址*/
                        };
                        this.sendDataToServer(JSON.stringify(req));
                    }else{
                        console.log("登录失败")
                    }

                    break;
                case 0x00FF0007:
                    //掉线通知
                    console.log("掉线了");
                    break;
                case 0x00FF0015:
                    //进入教室回调
                    if(jsonObj.code == 0){
                        this.roomInfo = jsonObj;
                        console.log("进入教室成功");
                        this._trueBegin();
                    }else{
                        console.log("进入教室失败");
                    }
                    break;
                case 0x00FF0017:
                    //其它用户数据变更
                    let arr = jsonObj.ua;
                    arr.forEach(function(obj,idx){
                        if(obj.type == 1){
                            //新用户进入
                            AppDelegate.app.userIn(obj)
                        }else{
                            //老用户退出
                            AppDelegate.app.userOut(obj)
                        }
                    })
                    break;
                case 0x00FF0021:
                    //其它用户的mediaId变更
                    let trueData = jsonObj.data
                    let tempUid = trueData.suid;
                    let tempMediaId = trueData.mediaId;
                    this.roomInfo.mediaMap[tempUid] = tempMediaId;
                    this.refreshVideo(tempUid,tempMediaId);//刷新视频
                    break;
            }
        }catch(err){
            console.log("数据不是json",data)
        }
    }

    //其它用户进入
    userIn(item){
        let divID = this.makeVideoDivId(item.uid);
        let tempDiv = document.getElementById(divID)
        //如果视频DIV不存在,则创建视频div
        if(!divID)
            $('div#subVideoContainer').append('<div id=' + divID + ' style="float:left; width:160px;height:120px;display:inline-block;"></div>');
        console.log("其他人进入教室:"+item)
    }

    //其它用户退出
    userOut(item){
        //停止视频渲染
        let divID = this.makeVideoDivId(item.uid);
        let mediaId = this.roomInfo.mediaMap[item.uid] || -1;
        if(mediaId == -1){
            return;
        }
        let arr = this.videoStreamPoolArr;
        let j = arr.length;
        for(var i=0;i<j;i++){
            if(arr[i].getId() == mediaId){
                arr[i].stop();
                this.videoStreamPoolArr.slice(i,1);
                break;
            }
        }

        console.log("其他人离开教室:"+item)
    }


    /**
     * 尺寸变更
     * */
    resize(w,h){
        w = w < AppDelegate.app.minWidth ? AppDelegate.app.minWidth : w;
        BaseScene.main.resize(w,h)
        if(AppDelegate.app.whiteBoard)
        {
            AppDelegate.app.whiteBoard.style.width = (w - 320) + "px";
            AppDelegate.app.subVideoContainer.style.height = (h - 240) + "px";
        }
    }

    /**
     * 停止
     * */
    stop(){
        BaseScene.main.stop();
    }

    /**
     * 进入全屏
     * */
    fullScreen(){
        let el = document.documentElement;
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
    }

    /**
     * 退出全屏
     * */
    exitScreen(){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

//  socket数据封装解析工具
//  GMLSocketDataTool.swift
//  chacha
//
//  Created by guominglong on 2017/9/15.
//  Copyright © 2017年 SSdk. All rights reserved.
//

import Foundation
class GMLSocketDataTool{
    static var instance:GMLSocketDataTool{
        get{
            struct GMLSocketDataToolStruct{
                static var _ins:GMLSocketDataTool = GMLSocketDataTool();
            }
            return GMLSocketDataToolStruct._ins;
        }
    }
    
    fileprivate func dataConvertToJSONObj(_ data: Data) -> NSDictionary?{
        do{
            let result = try JSONSerialization.jsonObject(with: data, options: JSONSerialization.ReadingOptions.mutableLeaves) as? NSDictionary;
            return result;
        }catch{
            print("data转换Dictionary失败,error:\(error.localizedDescription)");
        }
        return nil;
    }
    
    /**
     字节数据转数据包
     */
    open func dataConvertToPackage(_ data: Data)->BaseSocketModel?{
        var model:BaseSocketModel? = nil;
        if let dic = dataConvertToJSONObj(data){
            let cmd = DataFactory.toUint32Value(dic.value(forKey: "cmd"), def: GMLSocketCMD.normal.rawValue);
            switch cmd {
            case GMLSocketCMD.s_res_c_heartbeat.rawValue:
                model = Model_HeartBeat_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_logout.rawValue:
                model = Model_logout_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_login.rawValue:
                model = Model_login_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_delRoom.rawValue:
                model = Model_deleteRoom_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_joinRoom.rawValue:
                model = Model_joinRoom_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_createRoom.rawValue:
                model = Model_createRoom_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_getUserInfo.rawValue:
                model = Model_getUserInfo_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_updateUserInfo.rawValue:
                model = Model_updateUserInfo_s2c(dic);
                break;
            case GMLSocketCMD.s_res_c_getRoomsInfoByUser.rawValue:
                model = Model_getRoomsInfoByUser_s2c(dic);
                break;
            default:
                //
                print("无法解析的数据包")
                break;
            }
        }
        return model;
    }
    
    /**
     数据包转字节数据
     */
    open func packageConvertToData(_ model:BaseSocketModel_c2s) -> Data?{
        var data:Data? = nil;
        do{
            data = try JSONSerialization.data(withJSONObject: model.toDic(), options: JSONSerialization.WritingOptions.prettyPrinted)
        }catch{
            print("JSON转换失败")
        }
        return data;
    }
}

//MARK:Socket 通讯 数据包命令ID定义
enum GMLSocketCMD:UInt32{
    case normal = 0;
    //心跳服务
    case c_req_s_heartbeat = 0x00FF0001;
    case s_res_c_heartbeat = 0x00FF0002;
    
    //登录服务
    case c_req_s_login = 0x00FF0003;
    case s_res_c_login = 0x00FF0004;
    
    //登出服务
    case c_req_s_logout = 0x00FF0005;
    case s_res_c_logout = 0x00FF0006;
    
    //掉线通知
    case s_notify_c_offline = 0x00FF0007;
    
    //获取用户信息
    case c_req_s_getUserInfo = 0x00FF0008;
    case s_res_c_getUserInfo = 0x00FF0009;
    
    //更新用户信息
    case c_req_s_updateUserInfo = 0x00FF000A;
    case s_res_c_updateUserInfo = 0x00FF000B;
    
    //创建教室
    case c_req_s_createRoom = 0x00FF000C;
    case s_res_c_createRoom = 0x00FF000D;
    
    //获取用户创建的教室信息
    case c_req_s_getRoomsInfoByUser = 0x00FF000E;
    case s_res_c_getRoomsInfoByUser = 0x00FF000F;
    
    //删除教室
    case c_req_s_delRoom = 0x00FF0011;
    case s_res_c_delRoom = 0x00FF0012;
    
    //教室状态变更通知
    case s_notify_c_roomStateChange = 0x00FF0013;
    
    //进入教室
    case c_req_s_joinRoom = 0x00FF0014;
    case s_res_c_joinRoom = 0x00FF0015;
    
    //离开教室
    case c_req_s_leaveRoom = 0x00FF0016;
    
    //其他人状态信息变更通知
    case s_notify_c_otherUserStateChange = 0x00FF0017;
    
    //发送文本消息
    case c_req_s_sendChat = 0x00FF0018;
    
    //文本消息通知
    case s_notify_c_chat = 0x00FF0019;
    
    //发送管理员命令
    case c_req_s_sendAdminCMD = 0x00FF001A;
    
    //管理员命令通知
    case s_notify_c_adminCMD = 0x00FF001B;
    
    //发送通用教学命令
    case c_req_s_sendCurrentCMD = 0x00FF001C;
    
    //通用教学命令通知
    case s_notify_c_currentCMD = 0x00FF001D;
    
    //更新用户状态
    case c_req_s_updateUserState = 0x00FF001E;

}







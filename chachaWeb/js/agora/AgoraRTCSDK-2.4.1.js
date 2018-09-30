!
function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t()
} (this,
function() {
	return function(e) {
		function t(n) {
			if (i[n]) return i[n].exports;
			var r = i[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(r.exports, r, r.exports, t),
			r.l = !0,
			r.exports
		}
		var i = {};
		return t.m = e,
		t.c = i,
		t.d = function(e, i, n) {
			t.o(e, i) || Object.defineProperty(e, i, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		},
		t.n = function(e) {
			var i = e && e.__esModule ?
			function() {
				return e.
			default
			}:
			function() {
				return e
			};
			return t.d(i, "a", i),
			i
		},
		t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		t.p = "",
		t(t.s = 15)
	} ([function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		},
		r = i(16),
		o = i(8),
		a = i(1),
		s = i(2),
		d = 0,
		c = "free",
		u = [],
		l = !1;
		setInterval(function() {
			p.info("console log upload")
		},
		9e5);
		var p = function() {
			var e, t, i, p, f, m, g, v, _ = 0;
			e = function(e) {
				e > 4 ? e = 4 : e < 0 && (e = 0),
				_ = e
			},
			g = function() {
				l = !0
			},
			v = function() {
				l = !1
			};
			var S = function(e, t, i) {
				try { (0, o.post)(a.LOG_UPLOAD_SERVER, {
						sdk_version: a.VERSION,
						process_id: (0, s.getProcessId)(),
						log_item_id: d++,
						log_level: e.log_level,
						payload_str: e.payload
					},
					function(e) {
						"OK" === e ? t && t(e) : i && i(e)
					},
					function(e) {
						i && i(e)
					},
					{
						withCredentials: !0
					})
				} catch(e) {
					i && i(e)
				}
			},
			E = function e(t) {
				c = "uploading",
				S(t,
				function() {
					0 !== u.length ? e(u.shift()) : c = "free"
				},
				function() {
					0 !== u.length ? e(u.shift()) : c = "free"
				})
			},
			h = function(e, t) {
				if (l) try {
					var t = Array.prototype.slice.call(t),
					i = "";
					t.forEach(function(e) {
						"object" === (void 0 === e ? "undefined": n(e)) && (e = JSON.stringify(e)),
						i = i + e + " "
					});
					var r = {
						payload: i,
						log_level: e
					};
					"uploading" === c ? u.push(r) : E(r)
				} catch(e) {}
			};
			return t = function() {
				var e = arguments[0],
				t = arguments;
				if (! (e < _)) switch (e) {
				case 0:
					t[0] = (0, r.getTimestamp)() + " Agora-SDK [DEBUG]:",
					h("DEBUG", t),
					console.log.apply(console, t);
					break;
				case 1:
					t[0] = (0, r.getTimestamp)() + " Agora-SDK [INFO]:",
					h("INFO", t),
					console.log.apply(console, t);
					break;
				case 2:
					t[0] = (0, r.getTimestamp)() + " Agora-SDK [WARN]:",
					h("WARN", t),
					console.warn.apply(console, t);
					break;
				case 3:
					t[0] = (0, r.getTimestamp)() + " Agora-SDK [ERROR]:",
					h("ERROR", t),
					console.error.apply(console, t);
					break;
				default:
					return t[0] = (0, r.getTimestamp)() + " Agora-SDK [DEFAULT]:",
					h("DEFAULT", t),
					void console.log.apply(console, t)
				}
			},
			i = function() {
				for (var e = [0], i = 0; i < arguments.length; i++) e.push(arguments[i]);
				t.apply(this, e)
			},
			p = function() {
				for (var e = [1], i = 0; i < arguments.length; i++) e.push(arguments[i]);
				t.apply(this, e)
			},
			f = function() {
				for (var e = [2], i = 0; i < arguments.length; i++) e.push(arguments[i]);
				t.apply(this, e)
			},
			m = function() {
				for (var e = [3], i = 0; i < arguments.length; i++) e.push(arguments[i]);
				t.apply(this, e)
			},
			{
				DEBUG: 0,
				INFO: 1,
				WARNING: 2,
				ERROR: 3,
				NONE: 4,
				enableLogUpload: g,
				disableLogUpload: v,
				setLogLevel: e,
				log: t,
				debug: i,
				info: p,
				warning: f,
				error: m
			}
		} ();
		t.
	default = p
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = ["ap-web-1.agora.io", "ap-web-2.agora.io"],
		r = ["ap-web-3.agora.io", "ap-web-4.agora.io"],
		o = {
			"90p_1": [160, 90],
			"120p_1": [160, 120],
			"120p_3": [120, 120],
			"120p_4": [212, 120],
			"180p_1": [320, 180],
			"180p_3": [180, 180],
			"180p_4": [240, 180],
			"240p_1": [320, 240],
			"240p_3": [240, 240],
			"240p_4": [424, 240],
			"360p_1": [640, 360],
			"360p_3": [360, 360],
			"360p_4": [640, 360],
			"360p_6": [360, 360],
			"360p_7": [480, 360],
			"360p_8": [480, 360],
			"360p_9": [640, 360],
			"360p_10": [640, 360],
			"360p_11": [640, 360],
			"480p_1": [640, 480],
			"480p_2": [640, 480],
			"480p_3": [480, 480],
			"480p_4": [640, 480],
			"480p_6": [480, 480],
			"480p_8": [848, 480],
			"480p_9": [848, 480],
			"480p_10": [640, 480],
			"720p_1": [1280, 720],
			"720p_2": [1280, 720],
			"720p_3": [1280, 720],
			"720p_5": [960, 720],
			"720p_6": [960, 720],
			"1080p_1": [1920, 1080],
			"1080p_2": [1920, 1080],
			"1080p_3": [1920, 1080],
			"1080p_5": [1920, 1080],
			"1440p_1": [2560, 1440],
			"1440p_2": [2560, 1440],
			"4k_1": [3840, 2160],
			"4k_3": [3840, 2160]
		};
		t.GIT_VERSION = "v2.4.1",
		t.VERSION = "2.4.1",
		t.WEBCS_DOMAIN = n,
		t.WEBCS_DOMAIN_BACKUP_LIST = r,
		t.EVENT_REPORT_DOMAIN = "webcollector-1.agora.io",
		t.EVENT_REPORT_BACKUP_DOMAIN = "webcollector-2.agora.io",
		t.WEBCS_BACKUP_CONNECT_TIMEOUT = 6e3,
		t.HTTP_CONNECT_TIMEOUT = 5e3,
		t.SUPPORT_RESOLUTION_LIST = o,
		t.LOG_UPLOAD_SERVER = "https://logservice.agora.io/upload"
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.getProcessId = t.SUBSCRIBE = t.PUBLISH = t.JOIN_GATEWAY = t.JOIN_CHOOSE_SERVER = t.SESSION_INIT = t.report = void 0;
		var r = i(1),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t.
		default = e,
			t
		} (r),
		a = i(0),
		s = n(a),
		d = i(8),
		c = i(10),
		u = n(c),
		l = {
			type: null,
			sid: null,
			lts: null,
			succ: null,
			cname: null,
			uid: null,
			peerid: null,
			cid: null,
			elaps: null,
			extend: null,
			vid: 0
		},
		p = null,
		f = function() {
			return p || (p = "process-" + (0, u.
		default)(), s.
		default.info("processId: " + p)),
			p
		},
		m = function() {
			var e = {};
			return e.list = {},
			e.url = (0, d.shouldUseHttps)() ? "https://" + o.EVENT_REPORT_DOMAIN + ":6443/events/report": "http://" + o.EVENT_REPORT_DOMAIN + ":6080/events/report",
			e.urlBackup = (0, d.shouldUseHttps)() ? "https://" + o.EVENT_REPORT_BACKUP_DOMAIN + ":6443/events/report": "http://" + o.EVENT_REPORT_BACKUP_DOMAIN + ":6080/events/report",
			e.setProxyServer = function(t) {
				t && (e.url = (0, d.shouldUseHttps)() ? "https://" + t + "/rs/?h=" + o.EVENT_REPORT_DOMAIN + "&p=6443&d=events/report": "http://" + t + "/rs/?h=" + o.EVENT_REPORT_DOMAIN + "&p=6080&d=events/report", e.urlBackup = (0, d.shouldUseHttps)() ? "https://" + t + "/rs/?h=" + o.EVENT_REPORT_BACKUP_DOMAIN + "&p=6443&d=events/report": "http://" + t + "/rs/?h=" + o.EVENT_REPORT_BACKUP_DOMAIN + "&p=6080&d=events/report", s.
			default.debug("reportProxyServerURL: " + e.url), s.
			default.debug("reportProxyServerBackupURL: " + e.urlBackup))
			},
			e.sessionInit = function(t, i) {
				i.sid = t;
				var n = Object.assign({},
				l),
				r = Object.assign(n, i);
				e.list[t] || (r.startTime = +new Date);
				var a = Object.assign({},
				r);
				delete r.appid,
				delete r.mode,
				e.list[t] = r,
				a.extend = null,
				a.ver = o.VERSION,
				a.type = "session_init",
				a.browser = navigator.userAgent,
				a.lts = +new Date,
				a.elaps = a.lts - a.startTime,
				a.process = f(),
				e.send(a)
			},
			e.joinChooseServer = function(t, i, n) {
				var r;
				r = n ? Object.assign(e.list[t], i) : Object.assign({},
				e.list[t], i),
				r.type = "join_choose_server";
				var o = +new Date;
				r.ev_elaps = o - r.lts,
				r.elaps = o - r.startTime,
				r.lts = o,
				r.serverList = JSON.stringify(r.serverList),
				e.send(r)
			},
			e.joinGateway = function(t, i) {
				var n = Object.assign(e.list[t], i);
				n.type = "join_gateway";
				var r = +new Date;
				n.ev_elaps = r - n.lts,
				n.elaps = r - n.startTime,
				n.lts = r,
				e.send(n)
			},
			e.publish = function(t, i) {
				var n = Object.assign({},
				e.list[t], i);
				n.type = "publish";
				var r = +new Date;
				n.ev_elaps = r - n.lts,
				n.elaps = r - n.startTime,
				n.lts = r,
				e.send(n)
			},
			e.subscribe = function(t, i) {
				var n = Object.assign({},
				e.list[t], i);
				n.type = "subscribe";
				var r = +new Date;
				n.ev_elaps = r - n.lts,
				n.elaps = r - n.startTime,
				n.lts = r,
				e.send(n)
			},
			e.firstRemoteFrame = function(t, i) {
				var n = Object.assign({},
				e.list[t], i);
				n.type = "first_remote_frame",
				n.lts = +new Date,
				n.elaps = n.lts - n.startTime,
				e.send(n)
			},
			e.streamSwitch = function(t, i) {
				var n = Object.assign({},
				e.list[t], i);
				n.type = "stream_switch",
				n.isdual = i.isdual,
				n.lts = +new Date,
				n.elaps = n.lts - n.startTime,
				e.send(n)
			},
			e.audioSendingStopped = function(t, i) {
				var n = Object.assign({},
				e.list[t], i);
				n.type = "audio_sending_stopped",
				n.lts = +new Date,
				n.elaps = n.lts - n.startTime,
				e.send(n)
			},
			e.videoSendingStopped = function(t, i) {
				var n = Object.assign({},
				e.list[t], i);
				n.type = "video_sending_stopped",
				n.lts = +new Date,
				n.elaps = n.lts - n.startTime,
				e.send(n)
			},
			e.send = function(t) {
				try { (0, d.post)(e.url, t, null,
					function(i) { (0, d.post)(e.urlBackup, t, null,
						function(e) {},
						{
							timeout: 1e4
						})
					},
					{
						timeout: 1e4
					})
				} catch(e) {}
			},
			e
		} ();
		t.report = m,
		t.SESSION_INIT = "session_init",
		t.JOIN_CHOOSE_SERVER = "join_choose_server",
		t.JOIN_GATEWAY = "join_gateway",
		t.PUBLISH = "publish",
		t.SUBSCRIBE = "subscribe",
		t.getProcessId = f
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return new Promise(function(t, i) {
				o(e, t, i)
			})
		}
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		},
		o = null,
		a = null,
		s = null,
		d = null,
		c = null,
		u = null,
		l = null,
		p = null,
		f = null,
		m = null,
		g = {
			addStream: null
		},
		v = {
			log: function() {},
			extractVersion: function(e, t, i) {
				var n = e.match(t);
				return n && n.length >= i && parseInt(n[i])
			}
		};
		if ("object" == ("undefined" == typeof window ? "undefined": r(window)) ? (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype ? (p = function(e, t) {
			e.srcObject = t
		},
		f = function(e) {
			return e.srcObject
		}) : (p = function(e, t) {
			"mozSrcObject" in e ? e.mozSrcObject = t: (e._srcObject = t, e.src = t ? URL.createObjectURL(t) : null)
		},
		f = function(e) {
			return "mozSrcObject" in e ? e.mozSrcObject: e._srcObject
		}), o = window.navigator && window.navigator.getUserMedia) : (p = function(e, t) {
			e.srcObject = t
		},
		f = function(e) {
			return e.srcObject
		}), a = function(e, t) {
			p(e, t)
		},
		s = function(e, t) {
			p(e, f(t))
		},
		"undefined" != typeof window && window.navigator) if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
			v.log("This appears to be Firefox"),
			d = "firefox",
			c = v.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1),
			u = 31,
			m = mozRTCPeerConnection;
			for (var _ in g) g[_] = m.prototype[_];
			if (l = function(e, t) {
				if (c < 38 && e && e.iceServers) {
					for (var i = [], n = 0; n < e.iceServers.length; n++) {
						var r = e.iceServers[n];
						if (r.hasOwnProperty("urls")) for (var o = 0; o < r.urls.length; o++) {
							var a = {
								url: r.urls[o]
							};
							0 === r.urls[o].indexOf("turn") && (a.username = r.username, a.credential = r.credential),
							i.push(a)
						} else i.push(e.iceServers[n])
					}
					e.iceServers = i
				}
				var s = new m(e, t);
				for (var d in g) s[d] = g[d];
				return s
			},
			window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), o = function(e, t, i) {
				var n = function(e) {
					if ("object" !== (void 0 === e ? "undefined": r(e)) || e.require) return e;
					var t = [];
					return Object.keys(e).forEach(function(i) {
						if ("require" !== i && "advanced" !== i && "mediaSource" !== i) {
							var n = e[i] = "object" === r(e[i]) ? e[i] : {
								ideal: e[i]
							};
							if (void 0 === n.min && void 0 === n.max && void 0 === n.exact || t.push(i), void 0 !== n.exact && ("number" == typeof n.exact ? n.min = n.max = n.exact: e[i] = n.exact, delete n.exact), void 0 !== n.ideal) {
								e.advanced = e.advanced || [];
								var o = {};
								"number" == typeof n.ideal ? o[i] = {
									min: n.ideal,
									max: n.ideal
								}: o[i] = n.ideal,
								e.advanced.push(o),
								delete n.ideal,
								Object.keys(n).length || delete e[i]
							}
						}
					}),
					t.length && (e.require = t),
					e
				};
				return c < 38 && (v.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = n(e.audio)), e.video && (e.video = n(e.video)), v.log("ff37: " + JSON.stringify(e))),
				navigator.mozGetUserMedia(e, t, i)
			},
			navigator.getUserMedia = o, navigator.mediaDevices || (navigator.mediaDevices = {
				getUserMedia: n,
				addEventListener: function() {},
				removeEventListener: function() {}
			}), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices ||
			function() {
				return new Promise(function(e) {
					e([{
						kind: "audioinput",
						deviceId: "default",
						label: "",
						groupId: ""
					},
					{
						kind: "videoinput",
						deviceId: "default",
						label: "",
						groupId: ""
					}])
				})
			},
			c < 41) {
				var S = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
				navigator.mediaDevices.enumerateDevices = function() {
					return S().then(void 0,
					function(e) {
						if ("NotFoundError" === e.name) return [];
						throw e
					})
				}
			}
		} else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
			v.log("This appears to be Chrome"),
			d = "chrome",
			c = v.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2),
			u = 38,
			m = webkitRTCPeerConnection;
			for (var _ in g) g[_] = m.prototype[_];
			l = function(e, t) {
				e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
				var i = new m(e, t);
				for (var n in g) i[n] = g[n];
				var r = i.getStats.bind(i);
				return i.getStats = function(e, t, i) {
					var n = this,
					o = arguments;
					if (arguments.length > 0 && "function" == typeof e) return r(e, t);
					var a = function(e) {
						var t = {};
						return e.result().forEach(function(e) {
							var i = {
								id: e.id,
								timestamp: e.timestamp,
								type: e.type
							};
							e.names().forEach(function(t) {
								i[t] = e.stat(t)
							}),
							t[i.id] = i
						}),
						t
					};
					if (arguments.length >= 2) {
						var s = function(e) {
							o[1](a(e))
						};
						return r.apply(this, [s, arguments[0]])
					}
					return new Promise(function(t, i) {
						1 === o.length && null === e ? r.apply(n, [function(e) {
							t.apply(null, [a(e)])
						},
						i]) : r.apply(n, [t, i])
					})
				},
				i
			},
			["createOffer", "createAnswer"].forEach(function(e) {
				var t = webkitRTCPeerConnection.prototype[e];
				webkitRTCPeerConnection.prototype[e] = function() {
					var e = this;
					if (arguments.length < 1 || 1 === arguments.length && "object" === r(arguments[0])) {
						var i = 1 === arguments.length ? arguments[0] : void 0;
						return new Promise(function(n, r) {
							t.apply(e, [n, r, i])
						})
					}
					return t.apply(this, arguments)
				}
			}),
			["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
				var t = webkitRTCPeerConnection.prototype[e];
				webkitRTCPeerConnection.prototype[e] = function() {
					var e = arguments,
					i = this;
					return new Promise(function(n, r) {
						t.apply(i, [e[0],
						function() {
							n(),
							e.length >= 2 && e[1].apply(null, [])
						},
						function(t) {
							r(t),
							e.length >= 3 && e[2].apply(null, [t])
						}])
					})
				}
			});
			var E = function(e) {
				if ("object" !== (void 0 === e ? "undefined": r(e)) || e.mandatory || e.optional) return e;
				var t = {};
				return Object.keys(e).forEach(function(i) {
					if ("require" !== i && "advanced" !== i && "mediaSource" !== i) {
						var n = "object" === r(e[i]) ? e[i] : {
							ideal: e[i]
						};
						void 0 !== n.exact && "number" == typeof n.exact && (n.min = n.max = n.exact);
						var o = function(e, t) {
							return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId": t
						};
						if (void 0 !== n.ideal) {
							t.optional = t.optional || [];
							var a = {};
							"number" == typeof n.ideal ? (a[o("min", i)] = n.ideal, t.optional.push(a), a = {},
							a[o("max", i)] = n.ideal, t.optional.push(a)) : (a[o("", i)] = n.ideal, t.optional.push(a))
						}
						void 0 !== n.exact && "number" != typeof n.exact ? (t.mandatory = t.mandatory || {},
						t.mandatory[o("", i)] = n.exact) : ["min", "max"].forEach(function(e) {
							void 0 !== n[e] && (t.mandatory = t.mandatory || {},
							t.mandatory[o(e, i)] = n[e])
						})
					}
				}),
				e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
				t
			};
			if (o = function(e, t, i) {
				return e.audio && (e.audio = E(e.audio)),
				e.video && (e.video = E(e.video)),
				v.log("chrome: " + JSON.stringify(e)),
				navigator.webkitGetUserMedia(e, t, i)
			},
			navigator.getUserMedia = o, navigator.mediaDevices || (navigator.mediaDevices = {
				getUserMedia: n,
				enumerateDevices: function() {
					return new Promise(function(e) {
						var t = {
							audio: "audioinput",
							video: "videoinput"
						};
						return MediaStreamTrack.getSources(function(i) {
							e(i.map(function(e) {
								return {
									label: e.label,
									kind: t[e.kind],
									deviceId: e.id,
									groupId: ""
								}
							}))
						})
					})
				}
			}), navigator.mediaDevices.getUserMedia) {
				var h = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
				navigator.mediaDevices.getUserMedia = function(e) {
					return v.log("spec:   " + JSON.stringify(e)),
					e.audio = E(e.audio),
					e.video = E(e.video),
					v.log("chrome: " + JSON.stringify(e)),
					h(e)
				}
			} else navigator.mediaDevices.getUserMedia = function(e) {
				return n(e)
			};
			void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
				v.log("Dummy mediaDevices.addEventListener called.")
			}),
			void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
				v.log("Dummy mediaDevices.removeEventListener called.")
			}),
			a = function(e, t) {
				c >= 43 ? p(e, t) : void 0 !== e.src ? e.src = t ? URL.createObjectURL(t) : null: v.log("Error attaching stream to element.")
			},
			s = function(e, t) {
				c >= 43 ? p(e, f(t)) : e.src = t.src
			}
		} else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (v.log("This appears to be Edge"), d = "edge", c = v.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), u = 12) : v.log("Browser does not appear to be WebRTC-capable");
		else v.log("This does not appear to be a browser"),
		d = "not a browser";
		var I = {};
		try {
			Object.defineProperty(I, "version", {
				set: function(e) {
					c = e
				}
			})
		} catch(e) {}
		var R;
		l ? R = l: "undefined" != typeof window && (R = window.RTCPeerConnection),
		e.exports = {
			RTCPeerConnection: R,
			getUserMedia: o,
			attachMediaStream: a,
			reattachMediaStream: s,
			setSrcObject: p,
			getSrcObject: f,
			webrtcDetectedBrowser: d,
			webrtcDetectedVersion: c,
			webrtcMinimumVersion: u,
			webrtcTesting: I,
			webrtcUtils: v
		}
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			var e = {};
			return e.dispatcher = {},
			e.dispatcher.eventListeners = {},
			e.addEventListener = function(t, i) {
				void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []),
				e.dispatcher.eventListeners[t].push(i)
			},
			e.hasListeners = function(t) {
				return ! (!e.dispatcher.eventListeners[t] || !e.dispatcher.eventListeners[t].length)
			},
			e.on = e.addEventListener,
			e.removeEventListener = function(t, i) {
				var n; - 1 !== (n = e.dispatcher.eventListeners[t].indexOf(i)) && e.dispatcher.eventListeners[t].splice(n, 1)
			},
			e.dispatchEvent = function(t) {
				var i;
				for (i in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(i) && "function" == typeof e.dispatcher.eventListeners[t.type][i] && e.dispatcher.eventListeners[t.type][i](t)
			},
			e.dispatchSocketEvent = function(t) {
				var i;
				for (i in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type].hasOwnProperty(i) && "function" == typeof e.dispatcher.eventListeners[t.type][i] && e.dispatcher.eventListeners[t.type][i](t.msg)
			},
			e
		},
		r = function(e) {
			var t = {};
			return t.type = e.type,
			t
		},
		o = function(e) {
			var t = r(e);
			return t.stream = e.stream,
			t.reason = e.reason,
			t.msg = e.msg,
			t
		},
		a = function(e) {
			var t = r(e);
			return t.uid = e.uid,
			t.attr = e.attr,
			t.stream = e.stream,
			t
		},
		s = function(e) {
			var t = r(e);
			return t.msg = e.msg,
			t
		},
		d = function(e) {
			var t = r(e);
			return t.url = e.url,
			t.reason = e.reason,
			t
		};
		t.EventDispatcher = n,
		t.StreamEvent = o,
		t.ClientEvent = a,
		t.MediaEvent = s,
		t.LiveStreamingEvent = d
	},
	function(e, t, i) {
		"use strict";
		function n(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, o = (r = {
			FAILED: "FAILED",
			INVALID_KEY: "INVALID_KEY",
			INVALID_CLIENT_MODE: "INVALID_CLIENT_MODE",
			INVALID_CLIENT_CODEC: "INVALID_CLIENT_CODEC",
			CLIENT_MODE_CODEC_MISMATCH: "CLIENT_MODE_CODEC_MISMATCH",
			WEB_API_NOT_SUPPORTED: "WEB_API_NOT_SUPPORTED",
			INVALID_PARAMETER: "INVALID_PARAMETER",
			INVALID_OPERATION: "INVALID_OPERATION"
		},
		n(r, "INVALID_PARAMETER", "INVALID_PARAMETER"), n(r, "INVALID_LOCAL_STREAM", "INVALID_LOCAL_STREAM"), n(r, "INVALID_REMOTE_STREAM", "INVALID_REMOTE_STREAM"), n(r, "INVALID_DYNAMIC_KEY", "INVALID_DYNAMIC_KEY"), n(r, "DYNAMIC_KEY_TIMEOUT", "DYNAMIC_KEY_TIMEOUT"), n(r, "NO_VOCS_AVAILABLE", "NO_VOCS_AVAILABLE"), n(r, "NO_VOS_AVAILABLE", "ERR_NO_VOS_AVAILABLE"), n(r, "JOIN_CHANNEL_TIMEOUT", "ERR_JOIN_CHANNEL_TIMEOUT"), n(r, "NO_AVAILABLE_CHANNEL", "NO_AVAILABLE_CHANNEL"), n(r, "LOOKUP_CHANNEL_TIMEOUT", "LOOKUP_CHANNEL_TIMEOUT"), n(r, "LOOKUP_CHANNEL_REJECTED", "LOOKUP_CHANNEL_REJECTED"), n(r, "OPEN_CHANNEL_TIMEOUT", "OPEN_CHANNEL_TIMEOUT"), n(r, "OPEN_CHANNEL_REJECTED", "OPEN_CHANNEL_REJECTED"), n(r, "REQUEST_DEFERRED", "REQUEST_DEFERRED"), n(r, "STREAM_ALREADY_PUBLISHED", "STREAM_ALREADY_PUBLISHED"), n(r, "STREAM_NOT_YET_PUBLISHED", "STREAM_NOT_YET_PUBLISHED"), n(r, "JOIN_TOO_FREQUENT", "JOIN_TOO_FREQUENT"), n(r, "SOCKET_ERROR", "SOCKET_ERROR"), n(r, "SOCKET_DISCONNECTED", "SOCKET_DISCONNECTED"), n(r, "PEERCONNECTION_FAILED", "PEERCONNECTION_FAILED"), n(r, "CONNECT_GATEWAY_ERROR", "CONNECT_GATEWAY_ERROR"), n(r, "SERVICE_NOT_AVAILABLE", "SERVICE_NOT_AVAILABLE"), n(r, "JOIN_CHANNEL_FAILED", "JOIN_CHANNEL_FAILED"), n(r, "PUBLISH_STREAM_FAILED", "PUBLISH_STREAM_FAILED"), n(r, "UNPUBLISH_STREAM_FAILED", "UNPUBLISH_STREAM_FAILED"), n(r, "SUBSCRIBE_STREAM_FAILED", "SUBSCRIBE_STREAM_FAILED"), n(r, "UNSUBSCRIBE_STREAM_FAILED", "UNSUBSCRIBE_STREAM_FAILED"), n(r, "NO_SUCH_REMOTE_STREAM", "NO_SUCH_REMOTE_STREAM"), n(r, "ERR_FAILED", "1"), n(r, "ERR_INVALID_VENDOR_KEY", "101"), n(r, "ERR_INVALID_CHANNEL_NAME", "102"), n(r, "WARN_NO_AVAILABLE_CHANNEL", "103"), n(r, "WARN_LOOKUP_CHANNEL_TIMEOUT", "104"), n(r, "WARN_LOOKUP_CHANNEL_REJECTED", "105"), n(r, "WARN_OPEN_CHANNEL_TIMEOUT", "106"), n(r, "WARN_OPEN_CHANNEL_REJECTED", "107"), n(r, "WARN_REQUEST_DEFERRED", "108"), n(r, "ERR_DYNAMIC_KEY_TIMEOUT", "109"), n(r, "ERR_INVALID_DYNAMIC_KEY", "110"), n(r, "ERR_NO_VOCS_AVAILABLE", "2000"), n(r, "ERR_NO_VOS_AVAILABLE", "2001"), n(r, "ERR_JOIN_CHANNEL_TIMEOUT", "2002"), n(r, "IOS_NOT_SUPPORT", "IOS_NOT_SUPPORT"), n(r, "WECHAT_NOT_SUPPORT", "WECHAT_NOT_SUPPORT"), n(r, "SHARING_SCREEN_NOT_SUPPORT", "SHARING_SCREEN_NOT_SUPPORT"), n(r, "STILL_ON_PUBLISHING", "STILL_ON_PUBLISHING"), n(r, "LOW_STREAM_ALREADY_PUBLISHED", "LOW_STREAM_ALREADY_PUBLISHED"), n(r, "LOW_STREAM_NOT_YET_PUBLISHED", "LOW_STREAM_ALREADY_PUBLISHED"), n(r, "HIGH_STREAM_NOT_VIDEO_TRACE", "HIGH_STREAM_NOT_VIDEO_TRACE"), n(r, "NOT_FIND_DEVICE_BY_LABEL", "NOT_FIND_DEVICE_BY_LABEL"), n(r, "ENABLE_DUALSTREAM_FAILED", "ENABLE_DUALSTREAM_FAILED"), n(r, "DISABLE_DUALSTREAM_FAILED", "DISABLE_DUALSTREAM_FAILED"), n(r, "PLAYER_NOT_FOUND", "PLAYER_NOT_FOUND"), n(r, "ELECTRON_NOT_SUPPORT_SHARING_SCREEN", "ELECTRON_NOT_SUPPORT_SHARING_SCREEN"), n(r, "BAD_ENVIRONMENT", "BAD_ENVIRONMENT"), r),
		a = {
			101100 : "NO_FLAG_SET",
			101101 : "FLAG_SET_BUT_EMPTY",
			101102 : "INVALID_FALG_SET",
			101203 : "NO_SERVICE_AVIABLE",
			0 : "OK_CODE",
			5 : "INVALID_VENDOR_KEY",
			7 : "INVALID_CHANNEL_NAME",
			8 : "INTERNAL_ERROR",
			9 : "NO_AUTHORIZED",
			10 : "DYNAMIC_KEY_TIMEOUT",
			11 : "NO_ACTIVE_STATUS",
			13 : "DYNAMIC_KEY_EXPIRED",
			14 : "STATIC_USE_DYANMIC_KEY",
			15 : "DYNAMIC_USE_STATIC_KEY"
		},
		s = {
			2000 : "ERR_NO_VOCS_AVAILABLE",
			2001 : "ERR_NO_VOS_AVAILABLE",
			2002 : "ERR_JOIN_CHANNEL_TIMEOUT",
			2003 : "WARN_REPEAT_JOIN",
			2004 : "ERR_JOIN_BY_MULTI_IP",
			101 : "ERR_INVALID_VENDOR_KEY",
			102 : "ERR_INVALID_CHANNEL_NAME",
			103 : "WARN_NO_AVAILABLE_CHANNEL",
			104 : "WARN_LOOKUP_CHANNEL_TIMEOUT",
			105 : "WARN_LOOKUP_CHANNEL_REJECTED",
			106 : "WARN_OPEN_CHANNEL_TIMEOUT",
			107 : "WARN_OPEN_CHANNEL_REJECTED",
			108 : "WARN_REQUEST_DEFERRED",
			109 : "ERR_DYNAMIC_KEY_TIMEOUT",
			110 : "ERR_NO_AUTHORIZED",
			111 : "ERR_VOM_SERVICE_UNAVAILABLE",
			112 : "ERR_NO_CHANNEL_AVAILABLE_CODE",
			113 : "ERR_TOO_MANY_USERS",
			114 : "ERR_MASTER_VOCS_UNAVAILABLE",
			115 : "ERR_INTERNAL_ERROR",
			116 : "ERR_NO_ACTIVE_STATUS",
			117 : "ERR_INVALID_UID",
			118 : "ERR_DYNAMIC_KEY_EXPIRED",
			119 : "ERR_STATIC_USE_DYANMIC_KE",
			120 : "ERR_DYNAMIC_USE_STATIC_KE",
			2 : "K_TIMESTAMP_EXPIRED",
			3 : "K_CHANNEL_PERMISSION_INVALID",
			4 : "K_CERTIFICATE_INVALID",
			5 : "K_CHANNEL_NAME_EMPTY",
			6 : "K_CHANNEL_NOT_FOUND",
			7 : "K_TICKET_INVALID",
			8 : "K_CHANNEL_CONFLICTED",
			9 : "K_SERVICE_NOT_READY",
			10 : "K_SERVICE_TOO_HEAVY",
			14 : "K_UID_BANNED",
			15 : "K_IP_BANNED",
			16 : "K_CHANNEL_BANNED"
		},
		d = ["ERR_NO_VOCS_AVAILABLE", "ERR_NO_VOS_AVAILABLE", "ERR_JOIN_CHANNEL_TIMEOUT", "WARN_LOOKUP_CHANNEL_TIMEOUT", "WARN_OPEN_CHANNEL_TIMEOUT", "ERR_VOM_SERVICE_UNAVAILABLE", "ERR_TOO_MANY_USERS", "ERR_MASTER_VOCS_UNAVAILABLE", "ERR_INTERNAL_ERROR"],
		c = ["NO_SERVICE_AVIABLE"];
		t.
	default = o,
		t.APErrorCode = a,
		t.GatewayErrorCode = s,
		t.JOIN_GS_TRYNEXT_LIST = d,
		t.JOIN_CS_RETRY_LIST = c
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			var e = v();
			return e.name && "Chrome" === e.name
		},
		r = function() {
			var e = v();
			return e.name && "Safari" === e.name
		},
		o = function() {
			var e = v();
			return e.name && "Firefox" === e.name
		},
		a = function() {
			var e = v();
			return e.name && "OPR" === e.name
		},
		s = function() {
			var e = v();
			return e.name && "QQBrowser" === e.name
		},
		d = function() {
			var e = v();
			return e.name && "MicroMessenger" === e.name
		},
		c = function() {
			var e = p();
			return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows")
		},
		u = function() {
			var e = p();
			return "Android" === e || "iOS" === e
		},
		l = function() {
			return v().version
		},
		p = function() {
			return v().os
		},
		f = function() {
			return !! navigator.userAgent.match(/chrome\/[\d]./i)
		},
		m = function() {
			var e = navigator.userAgent,
			t = e.match(/chrome\/[\d]./i);
			return t && t[0] && t[0].split("/")[1]
		},
		g = function() {
			var e, t = navigator.userAgent,
			i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			"Chrome" === i[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (i = e),
			"Safari" === i[1] && null != (e = t.match(/version\/(\d+)/i)) && (i[2] = e[1]),
			~t.toLowerCase().indexOf("qqbrowser") && null != (e = t.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (i = e),
			~t.toLowerCase().indexOf("micromessenger") && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (i = e),
			~t.toLowerCase().indexOf("edge") && null != (e = t.match(/(edge(?=\/))\/?(\d+)/i)) && (i = e),
			~t.toLowerCase().indexOf("trident") && null != (e = /\brv[ :]+(\d+)/g.exec(t) || []) && (i = [null, "IE", e[1]]);
			var n = void 0,
			r = [{
				s: "Windows 10",
				r: /(Windows 10.0|Windows NT 10.0)/
			},
			{
				s: "Windows 8.1",
				r: /(Windows 8.1|Windows NT 6.3)/
			},
			{
				s: "Windows 8",
				r: /(Windows 8|Windows NT 6.2)/
			},
			{
				s: "Windows 7",
				r: /(Windows 7|Windows NT 6.1)/
			},
			{
				s: "Windows Vista",
				r: /Windows NT 6.0/
			},
			{
				s: "Windows Server 2003",
				r: /Windows NT 5.2/
			},
			{
				s: "Windows XP",
				r: /(Windows NT 5.1|Windows XP)/
			},
			{
				s: "Windows 2000",
				r: /(Windows NT 5.0|Windows 2000)/
			},
			{
				s: "Windows ME",
				r: /(Win 9x 4.90|Windows ME)/
			},
			{
				s: "Windows 98",
				r: /(Windows 98|Win98)/
			},
			{
				s: "Windows 95",
				r: /(Windows 95|Win95|Windows_95)/
			},
			{
				s: "Windows NT 4.0",
				r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
			},
			{
				s: "Windows CE",
				r: /Windows CE/
			},
			{
				s: "Windows 3.11",
				r: /Win16/
			},
			{
				s: "Android",
				r: /Android/
			},
			{
				s: "Open BSD",
				r: /OpenBSD/
			},
			{
				s: "Sun OS",
				r: /SunOS/
			},
			{
				s: "Linux",
				r: /(Linux|X11)/
			},
			{
				s: "iOS",
				r: /(iPhone|iPad|iPod)/
			},
			{
				s: "Mac OS X",
				r: /Mac OS X/
			},
			{
				s: "Mac OS",
				r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
			},
			{
				s: "QNX",
				r: /QNX/
			},
			{
				s: "UNIX",
				r: /UNIX/
			},
			{
				s: "BeOS",
				r: /BeOS/
			},
			{
				s: "OS/2",
				r: /OS\/2/
			},
			{
				s: "Search Bot",
				r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
			}];
			for (var o in r) {
				var a = r[o];
				if (a.r.test(navigator.userAgent)) {
					n = a.s;
					break
				}
			}
			return {
				name: i[1],
				version: i[2],
				os: n
			}
		},
		v = function() {
			var e = g();
			return function() {
				return e
			}
		} ();
		t.getBrowserInfo = v,
		t.getBrowserVersion = l,
		t.getBrowserOS = p,
		t.isChrome = n,
		t.isSafari = r,
		t.isFireFox = o,
		t.isOpera = a,
		t.isQQBrowser = s,
		t.isWeChatBrowser = d,
		t.isSupportedPC = c,
		t.isSupportedMobile = u,
		t.getChromeKernelVersion = m,
		t.isChromeKernel = f
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		function r() {
			return (0, l.
		default)().replace(/-/g, "").toUpperCase()
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.popBanTip = t.random = t.safeCall = t.is32Uint = t.vsResHack = t.audioLevelHelper = t.generateSessionId = t.isLiveTranscodingValid = t.checkSystemRequirements = void 0;
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		},
		a = i(6),
		s = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t.
		default = e,
			t
		} (a),
		d = i(0),
		c = n(d),
		u = i(10),
		l = n(u),
		p = i(20),
		f = i(3),
		m = function() {
			var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
			t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
			i = window.WebSocket,
			n = !!e && !!t && !!i,
			r = !1;
			return c.
		default.debug(s.getBrowserInfo(), "isAPISupport:" + n),
			s.isChrome() && s.getBrowserVersion() >= 58 && "iOS" !== s.getBrowserOS() && (r = !0),
			s.isFireFox() && s.getBrowserVersion() >= 56 && (r = !0),
			s.isOpera() && s.getBrowserVersion() >= 45 && (r = !0),
			s.isSafari() && s.getBrowserVersion() >= 11 && (r = !0),
			(s.isWeChatBrowser() || s.isQQBrowser()) && "iOS" !== s.getBrowserOS() && (r = !0),
			s.isSupportedPC() || s.isSupportedMobile() || (r = !1),
			n && r
		},
		g = function() {
			var e = arguments[0];
			if ("function" == typeof e) {
				var t = Array.prototype.slice.call(arguments, 1);
				e.apply(null, t)
			}
		},
		v = function(e) {
			if ((0, p.GetAudioContext)()) return this.audioContext = (0, p.GetAudioContext)(),
			this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e),
			this.analyser = this.audioContext.createAnalyser(),
			this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount),
			this.sourceNode.connect(this.analyser),
			this.getAudioLevel = function() {
				if (this.analyser) {
					this.analyser.getByteTimeDomainData(this.timeDomainData);
					for (var e = 0,
					t = 0; t < this.timeDomainData.length; t++) e = Math.max(e, Math.abs(this.timeDomainData[t] - 128));
					return e / 128
				}
				return c.
			default.warning("can't find analyser in audioLevelHelper"),
				0
			},
			this
		},
		_ = function(e, t, i) {
			try {
				var n = document.createElement("video");
				n.setAttribute("autoplay", ""),
				n.setAttribute("muted", ""),
				n.setAttribute("playsinline", ""),
				n.setAttribute("style", "position: absolute; top: 0; left: 0; width:1px; high:1px;"),
				document.body.appendChild(n),
				n.addEventListener("playing",
				function(e) {
					s.isFireFox() ? n.videoWidth && (t(n.videoWidth, n.videoHeight), document.body.removeChild(n)) : (t(n.videoWidth, n.videoHeight), document.body.removeChild(n))
				}),
				(0, f.setSrcObject)(n, e)
			} catch(e) {
				i(e)
			}
		},
		S = function(e) {
			return !! (0 <= e && e <= 4294967295)
		},
		E = function(e) {
			var t = ["lowLatency", "userConfigExtraInfo", "transcodingUsers"];
			for (var i in e) if ("lowLatency" === i && "boolean" != typeof e[i] || "userConfigExtraInfo" === i && "object" !== o(e[i]) || "transcodingUsers" === i && !h(e[i]) || !~t.indexOf(i) && "number" != typeof e[i]) throw new Error("Param [" + i + "] is inVaild");
			return ! 0
		},
		h = function(e) {
			for (var t = 0; t < e.length; t++) for (var i in e[t]) if ("number" != typeof e[t][i]) throw new Error("Param user[" + t + "] - [" + i + "] is inVaild");
			return ! 0
		},
		I = function(e) {
			isNaN(e) && (e = 1e3);
			var t = +new Date;
			t = (9301 * t + 49297) % 233280;
			var i = t / 233280;
			return Math.ceil(i * e)
		},
		R = function() {
			if (!document.getElementById("agora-ban-tip")) {
				var e = document.createElement("div");
				e.id = "agora-ban-tip",
				e.style = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff;",
				document.querySelector("body").prepend(e);
				var t = document.createElement("div");
				t.style = "background: #000; width: 346px; height: 116px; z-index: 100000; opacity: 0.6; border-radius: 10px; box-shadow: 0 2px 4px #000;",
				e.append(t);
				var i = document.createElement("div");
				i.style = "height: 76px; display: flex; justify-content: center; align-items: center;";
				var n = document.createElement("span");
				n.style = "height: 28px; width: 28px; color: #000; text-align: center; line-height: 30px; background: #fff; border-radius: 50%; font-weight: 600; font-size: 20px;margin-right: 5px;",
				n.innerText = "!";
				var r = document.createElement("span");
				r.innerText = "This browser does not support webRTC",
				i.append(n),
				i.append(r);
				var o = document.createElement("div");
				o.style = "height: 38px; display: flex; border-top: #fff 1px solid; justify-content: center; align-items: center;",
				o.innerText = "OK",
				t.append(i),
				t.append(o),
				o.onclick = function() {
					var e = document.getElementById("agora-ban-tip");
					e.parentNode.removeChild(e)
				}
			}
		};
		t.checkSystemRequirements = m,
		t.isLiveTranscodingValid = E,
		t.generateSessionId = r,
		t.audioLevelHelper = v,
		t.vsResHack = _,
		t.is32Uint = S,
		t.safeCall = g,
		t.random = I,
		t.popBanTip = R
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.shouldUseHttps = t.post = void 0;
		var n = i(1),
		r = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t.
		default = e,
			t
		} (n),
		o = function(e, t, i, n, o) {
			var a = new XMLHttpRequest;
			if (a.timeout = t.timeout || r.HTTP_CONNECT_TIMEOUT, a.open("POST", e, !0), a.setRequestHeader("Content-type", "application/json; charset=utf-8"), o) for (var s in o)"withCredentials" == s ? a.withCredentials = !0 : a.setRequestHeader(s, o[s]);
			a.onload = function(e) {
				i && i(a.responseText)
			},
			a.onerror = function(t) {
				n && n(t, e)
			},
			a.ontimeout = function(t) {
				n && n(t, e)
			},
			a.send(JSON.stringify(t))
		},
		a = function() {
			return "https:" == document.location.protocol
		};
		t.post = o,
		t.shouldUseHttps = a
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.getDevices = t.createStream = t.Stream = void 0;
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		},
		o = i(21),
		a = n(o),
		s = i(11),
		d = i(4),
		c = i(0),
		u = n(c),
		l = i(6),
		p = i(29),
		f = i(7),
		m = i(2),
		g = i(5),
		v = n(g),
		_ = function(e) {
			function t() {
				return null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35
			}
			function i() {
				return null !== window.navigator.userAgent.match("Firefox")
			}
			function n(e, t) {
				return {
					width: {
						ideal: e
					},
					height: {
						ideal: t
					}
				}
			}
			var o = (0, d.EventDispatcher)();
			if (o.params = Object.assign({},
			e), o.stream = e.stream, o.url = e.url, o.onClose = void 0, o.local = !1, o.videoSource = e.videoSource, o.audioSource = e.audioSource, o.video = !!e.video, o.audio = !!e.audio, o.screen = !!e.screen, o.screenAttributes = {
				width: 1920,
				height: 1080,
				maxFr: 5,
				minFr: 1
			},
			o.videoSize = e.videoSize, o.player = void 0, o.audioLevelHelper = null, e.attributes = e.attributes || {},
			o.attributes = e.attributes, o.videoEnabled = !0, o.audioEnabled = !0, o.lowStream = null, o.videoWidth = 0, o.videoHeight = 0, o.streamId = null, o.streamId = e.streamID, o.userId = null, o.mirror = !1 !== e.mirror, o.DTX = e.audioProcessing && e.audioProcessing.DTX, o.audioProcessing = e.audioProcessing, o.highQuality = !1, o.stereo = !1, o.speech = !1, !(void 0 === o.videoSize || o.videoSize instanceof Array && 4 === o.videoSize.length)) throw Error("Invalid Video Size");
			o.videoSize = [640, 480, 640, 480],
			void 0 !== e.local && !0 !== e.local || (o.local = !0),
			o.initialized = !o.local,
			o.on("collectStats",
			function(e) {
				e.promises.push(o._getPCStats()),
				e.promises.push(new Promise(function(e) {
					var t = {};
					o.pc && o.pc.isSubscriber ? i() && ((0, p.setStat)(t, "videoReceiveResolutionHeight", o.videoHeight), (0, p.setStat)(t, "videoReceiveResolutionWidth", o.videoWidth)) : o.pc && !o.pc.isSubscriber && (((0, l.isSafari)() || (0, l.isFireFox)()) && ((0, p.setStat)(t, "videoSendResolutionHeight", o.videoHeight), (0, p.setStat)(t, "videoSendResolutionWidth", o.videoWidth)), ((0, l.isSafari)() || (0, l.isFireFox)()) && o.uplinkStats && (0, p.setStat)(t, "videoSendPacketsLost", o.uplinkStats.uplink_cumulative_lost)),
					e(t)
				})),
				e.promises.push(new Promise(function(e) {
					var t = {};
					return o.traffic_stats && o.pc && o.pc.isSubscriber ? ((0, p.setStat)(t, "accessDelay", o.traffic_stats.access_delay), (0, p.setStat)(t, "endToEndDelay", o.traffic_stats.e2e_delay), (0, p.setStat)(t, "videoReceiveDelay", o.traffic_stats.video_delay), (0, p.setStat)(t, "audioReceiveDelay", o.traffic_stats.audio_delay)) : o.traffic_stats && o.pc && !o.pc.isSubscriber && (0, p.setStat)(t, "accessDelay", o.traffic_stats.access_delay),
					e(t)
				}))
			});
			var c = {
				true: !0,
				unspecified: !0,
				"90p_1": n(160, 90),
				"120p_1": n(160, 120),
				"120p_3": n(120, 120),
				"120p_4": n(212, 120),
				"180p_1": n(320, 180),
				"180p_3": n(180, 180),
				"180p_4": n(240, 180),
				"240p_1": n(320, 240),
				"240p_3": n(240, 240),
				"240p_4": n(424, 240),
				"360p_1": n(640, 360),
				"360p_3": n(360, 360),
				"360p_4": n(640, 360),
				"360p_6": n(360, 360),
				"360p_7": n(480, 360),
				"360p_8": n(480, 360),
				"360p_9": n(640, 360),
				"360p_10": n(640, 360),
				"360p_11": n(640, 360),
				"480p_1": n(640, 480),
				"480p_2": n(640, 480),
				"480p_3": n(480, 480),
				"480p_4": n(640, 480),
				"480p_6": n(480, 480),
				"480p_8": n(848, 480),
				"480p_9": n(848, 480),
				"480p_10": n(640, 480),
				"720p_1": n(1280, 720),
				"720p_2": n(1280, 720),
				"720p_3": n(1280, 720),
				"720p_5": n(960, 720),
				"720p_6": n(960, 720),
				"1080p_1": n(1920, 1080),
				"1080p_2": n(1920, 1080),
				"1080p_3": n(1920, 1080),
				"1080p_5": n(1920, 1080),
				"1440p_1": n(2560, 1440),
				"1440p_2": n(2560, 1440),
				"4k_1": n(3840, 2160),
				"4k_3": n(3840, 2160)
			};
			return o.unmuteAudio = void 0,
			o.muteAudio = void 0,
			o.unmuteVideo = void 0,
			o.muteVideo = void 0,
			o.setVideoResolution = function(t) {
				return t += "",
				void 0 !== c[t] && (e.video = c[t], e.attributes = e.attributes || {},
				e.attributes.resolution = t, !0)
			},
			o.setVideoFrameRate = function(t) {
				return ! (0, l.isFireFox)() && ("object" === (void 0 === t ? "undefined": r(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {},
				e.attributes.minFrameRate = t[0], e.attributes.maxFrameRate = t[1], !0))
			},
			o.setVideoBitRate = function(t) {
				return "object" === (void 0 === t ? "undefined": r(t)) && t instanceof Array && t.length > 1 && (e.attributes = e.attributes || {},
				e.attributes.minVideoBW = t[0], e.attributes.maxVideoBW = t[1], !0)
			},
			o.setScreenProfile = function(e) {
				if ("string" == typeof e && o.screen) {
					switch (e) {
					case "480p_1":
						o.screenAttributes.width = 640,
						o.screenAttributes.height = 480,
						o.screenAttributes.maxFr = 5,
						o.screenAttributes.minFr = 1;
						break;
					case "480p_2":
						o.screenAttributes.width = 640,
						o.screenAttributes.height = 480,
						o.screenAttributes.maxFr = 30,
						o.screenAttributes.minFr = 25;
						break;
					case "720p_1":
						o.screenAttributes.width = 1280,
						o.screenAttributes.height = 720,
						o.screenAttributes.maxFr = 5,
						o.screenAttributes.minFr = 1;
						break;
					case "720p_2":
						o.screenAttributes.width = 1280,
						o.screenAttributes.height = 720,
						o.screenAttributes.maxFr = 30,
						o.screenAttributes.minFr = 25;
						break;
					case "1080p_1":
						o.screenAttributes.width = 1920,
						o.screenAttributes.height = 1080,
						o.screenAttributes.maxFr = 5,
						o.screenAttributes.minFr = 1;
						break;
					case "1080p_2":
						o.screenAttributes.width = 1920,
						o.screenAttributes.height = 1080,
						o.screenAttributes.maxFr = 30,
						o.screenAttributes.minFr = 25
					}
					return ! 0
				}
				return ! 1
			},
			o.setVideoProfileCustom = function(e) {
				o.setVideoResolution(e[0]),
				o.setVideoFrameRate([e[1], e[1]]),
				o.setVideoBitRate([e[2], e[2]])
			},
			o.setVideoProfileCustomPlus = function(t) {
				console.log(t),
				e.video = n(t.width, t.height),
				e.attributes = e.attributes || {},
				e.attributes.resolution = t.width + "x" + t.height,
				o.setVideoFrameRate([t.framerate, t.framerate]),
				o.setVideoBitRate([t.bitrate, t.bitrate])
			},
			o.setVideoProfile = function(e) {
				if (o.profile = e, "string" == typeof e && o.video) {
					switch (e) {
					case "120p":
					case "120P":
					case "120p_1":
					case "120P_1":
						o.setVideoResolution("120p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 65]);
						break;
					case "120p_3":
					case "120P_3":
						o.setVideoResolution("120p_3"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 50]);
						break;
					case "180p":
					case "180P":
					case "180p_1":
					case "180P_1":
						o.setVideoResolution("180p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 140]);
						break;
					case "180p_3":
					case "180P_3":
						o.setVideoResolution("180p_3"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 100]);
						break;
					case "180p_4":
					case "180P_4":
						o.setVideoResolution("180p_4"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 120]);
						break;
					case "240p":
					case "240P":
					case "240p_1":
					case "240P_1":
						o.setVideoResolution("240p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 200]);
						break;
					case "240p_3":
					case "240P_3":
						o.setVideoResolution("240p_3"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 140]);
						break;
					case "240p_4":
					case "240P_4":
						o.setVideoResolution("240p_4"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([10, 220]);
						break;
					case "360p":
					case "360P":
					case "360p_1":
					case "360P_1":
						o.setVideoResolution("360p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 400]);
						break;
					case "360p_3":
					case "360P_3":
						o.setVideoResolution("360p_3"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 260]);
						break;
					case "360p_4":
					case "360P_4":
						o.setVideoResolution("360p_4"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 600]);
						break;
					case "360p_6":
					case "360P_6":
						o.setVideoResolution("360p_6"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 400]);
						break;
					case "360p_7":
					case "360P_7":
						o.setVideoResolution("360p_7"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 320]);
						break;
					case "360p_8":
					case "360P_8":
						o.setVideoResolution("360p_8"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 490]);
						break;
					case "360p_9":
					case "360P_9":
						o.setVideoResolution("360p_9"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 800]);
						break;
					case "360p_10":
					case "360P_10":
						o.setVideoResolution("360p_10"),
						o.setVideoFrameRate([24, 24]),
						o.setVideoBitRate([20, 800]);
						break;
					case "360p_11":
					case "360P_11":
						o.setVideoResolution("360p_11"),
						o.setVideoFrameRate([24, 24]),
						o.setVideoBitRate([20, 1e3]);
						break;
					case "480p":
					case "480P":
					case "480p_1":
					case "480P_1":
						o.setVideoResolution("480p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 500]);
						break;
					case "480p_2":
					case "480P_2":
						o.setVideoResolution("480p_2"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 1e3]);
						break;
					case "480p_3":
					case "480P_3":
						o.setVideoResolution("480p_3"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 400]);
						break;
					case "480p_4":
					case "480P_4":
						o.setVideoResolution("480p_4"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 750]);
						break;
					case "480p_6":
					case "480P_6":
						o.setVideoResolution("480p_6"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 600]);
						break;
					case "480p_8":
					case "480P_8":
						o.setVideoResolution("480p_8"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 610]);
						break;
					case "480p_9":
					case "480P_9":
						o.setVideoResolution("480p_9"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([20, 930]);
						break;
					case "480p_10":
					case "480P_10":
						o.setVideoResolution("480p_10"),
						o.setVideoFrameRate([10, 10]),
						o.setVideoBitRate([20, 400]);
						break;
					case "720p":
					case "720P":
					case "720p_1":
					case "720P_1":
						o.setVideoResolution("720p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([30, 1130]);
						break;
					case "720p_2":
					case "720P_2":
						o.setVideoResolution("720p_2"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([30, 2e3]);
						break;
					case "720p_3":
					case "720P_3":
						o.setVideoResolution("720p_3"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([30, 1710]);
						break;
					case "720p_5":
					case "720P_5":
						o.setVideoResolution("720p_5"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([30, 910]);
						break;
					case "720p_6":
					case "720P_6":
						o.setVideoResolution("720p_6"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([30, 1380]);
						break;
					case "1080p":
					case "1080P":
					case "1080p_1":
					case "1080P_1":
						o.setVideoResolution("1080p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([50, 2080]);
						break;
					case "1080p_2":
					case "1080P_2":
						o.setVideoResolution("1080p_2"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([50, 3e3]);
						break;
					case "1080p_3":
					case "1080P_3":
						o.setVideoResolution("1080p_3"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([50, 3150]);
						break;
					case "1080p_5":
					case "1080P_5":
						o.setVideoResolution("1080p_5"),
						o.setVideoFrameRate([60, 60]),
						o.setVideoBitRate([50, 4780]);
						break;
					case "1440p":
					case "1440P":
					case "1440p_1":
					case "1440P_1":
						o.setVideoResolution("1440p_1"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([50, 4850]);
						break;
					case "1440p_2":
					case "1440P_2":
						o.setVideoResolution("1440p_2"),
						o.setVideoFrameRate([60, 60]),
						o.setVideoBitRate([50, 7350]);
						break;
					case "4k":
					case "4K":
					case "4k_1":
					case "4K_1":
						o.setVideoResolution("4k_1"),
						o.setVideoFrameRate([30, 30]),
						o.setVideoBitRate([50, 8910]);
						break;
					case "4k_3":
					case "4K_3":
						o.setVideoResolution("4k_3"),
						o.setVideoFrameRate([60, 60]),
						o.setVideoBitRate([50, 13500]);
						break;
					default:
						o.setVideoResolution("480p_1"),
						o.setVideoFrameRate([15, 15]),
						o.setVideoBitRate([20, 500])
					}
					return ! 0
				}
				return ! 1
			},
			o.setAudioProfile = function(e) {
				if (o.audioProfile = e, "string" == typeof e && o.audio) {
					switch (e) {
					case "speech_standard":
						o.highQuality = !1,
						o.stereo = !1,
						o.speech = !0;
						break;
					case "music_standard":
						o.highQuality = !1,
						o.stereo = !1,
						o.speech = !1;
						break;
					case "standard_stereo":
						o.highQuality = !1,
						o.stereo = !0,
						o.speech = !1;
						break;
					case "high_quality":
						o.highQuality = !0,
						o.stereo = !1,
						o.speech = !1;
						break;
					case "high_quality_stereo":
						o.highQuality = !0,
						o.stereo = !0,
						o.speech = !1;
						break;
					default:
						o.highQuality = !1,
						o.stereo = !1,
						o.speech = !1
					}
					return ! 0
				}
				return ! 1
			},
			o.getId = function() {
				return o.streamId
			},
			o.getUserId = function() {
				return o.userId
			},
			o.setUserId = function(e) {
				o.userId && u.
			default.warning("Stream.userId " + o.userId + " => " + e),
				o.userId = e
			},
			o.getAttributes = function() {
				return e.screen ? o.screenAttributes: e.attributes
			},
			o.hasAudio = function() {
				return o.audio
			},
			o.hasVideo = function() {
				return o.video
			},
			o.hasScreen = function() {
				return o.screen
			},
			o.isVideoOn = function() {
				return (o.hasVideo() || o.hasScreen()) && o.videoEnabled
			},
			o.isAudioOn = function() {
				return o.hasAudio() && o.audioEnabled
			},
			o.init = function(i, n) {
				var a = ((new Date).getTime(), arguments[2]);
				if (void 0 === a && (a = 2), !0 === o.initialized) return void("function" == typeof n && n({
					type: "warning",
					msg: "STREAM_ALREADY_INITIALIZED"
				}));
				if (!0 !== o.local) return void("function" == typeof n && n({
					type: "warning",
					msg: "STREAM_NOT_LOCAL"
				}));
				if (o.videoSource || o.audioSource) {
					var d = new MediaStream;
					return o.videoSource && (u.
				default.debug("Added videoSource"), d.addTrack(o.videoSource), o.video = !0),
					o.audioSource && (u.
				default.debug("Added audioSource"), d.addTrack(o.audioSource), o.audio = !0),
					o.hasVideo() ? (0, f.vsResHack)(d,
					function(e, t) {
						u.
					default.info("Video Source width " + e + " height " + t),
						o.stream = d,
						o.initialized = !0,
						i && i()
					},
					function(e) {
						u.
					default.warning("Failed to get width & height from video source", e),
						o.stream = d,
						o.initialized = !0,
						i && i()
					}) : (o.stream = d, o.initialized = !0, i && i())
				}
				try {
					if ((e.audio || e.video || e.screen) && void 0 === e.url) {
						u.
					default.debug("Requested access to local media");
						var c = e.video;
						if (e.screen) var p = {
							video: c,
							audio: !1,
							screen: !0,
							data: !0,
							extensionId: e.extensionId,
							attributes: o.screenAttributes,
							fake: e.fake,
							mediaSource: e.mediaSource
						};
						else {
							var p = {
								video: c,
								audio: e.audio,
								fake: e.fake
							};
							if (!t()) {
								var m = 30,
								g = 30;
								if (void 0 !== e.attributes.minFrameRate && (m = e.attributes.minFrameRate), void 0 !== e.attributes.maxFrameRate && (g = e.attributes.maxFrameRate), !0 === p.audio) {
									p.audio = !e.microphoneId || {
										deviceId: {
											exact: e.microphoneId
										}
									};
									var v = {};
									o.audioProcessing && (void 0 !== o.audioProcessing.AGC && ((0, l.isFireFox)() ? v.autoGainControl = o.audioProcessing.AGC: (0, l.isChrome)() && (v.googAutoGainControl = o.audioProcessing.AGC, v.googAutoGainControl2 = o.audioProcessing.AGC)), void 0 !== o.audioProcessing.AEC && (v.echoCancellation = o.audioProcessing.AEC), void 0 !== o.audioProcessing.ANS && ((0, l.isFireFox)() ? v.noiseSuppression = o.audioProcessing.ANS: (0, l.isChrome)() && (v.googNoiseSuppression = o.audioProcessing.ANS))),
									o.stereo && (0, l.isChrome)() && (v.googAutoGainControl = !1, v.googAutoGainControl2 = !1, v.echoCancellation = !1, v.googNoiseSuppression = !1),
									0 !== Object.keys(v).length && (!0 === p.audio ? p.audio = {
										mandatory: v
									}: p.audio = Object.assign(p.audio, v))
								} ! 0 === p.video ? (p.video = {
									width: {
										ideal: o.videoSize[0]
									},
									height: {
										ideal: o.videoSize[1]
									},
									frameRate: {
										ideal: m,
										max: g
									}
								},
								o.setVideoBitRate([500, 500]), p.video.deviceId = e.cameraId ? {
									exact: e.cameraId
								}: void 0) : "object" === r(p.video) && (p.video.frameRate = {
									ideal: m,
									max: g
								},
								p.video.deviceId = e.cameraId ? {
									exact: e.cameraId
								}: void 0)
							}
						}
						u.
					default.debug(p);
						var _ = Object.assign({},
						p);
						if ((0, s.GetUserMedia)(_,
						function(t) {
							o.screenAudioTrack && t.addTrack(o.screenAudioTrack);
							var r = t.getVideoTracks().length > 0,
							a = t.getAudioTracks().length > 0;
							return _.video && !r && _.audio && !a ? (u.
						default.error("Media access: NO_CAMERA_MIC_PERMISSION"), n && n("NO_CAMERA_MIC_PERMISSION")) : _.video && !r ? (u.
						default.error("Media access: NO_CAMERA_PERMISSION"), n && n("NO_CAMERA_PERMISSION")) : _.screen && !r ? (u.
						default.error("Media access: NO_SCREEN_PERMISSION"), n && n("NO_SCREEN_PERMISSION")) : _.audio && !a ? (u.
						default.error("Media access: NO_MIC_PERMISSION"), n && n("NO_MIC_PERMISSION")) : (u.
						default.debug("User has granted access to local media"), o.dispatchEvent({
								type: "accessAllowed"
							}), o.stream = t, o.initialized = !0, e.screen && e.audio && !o.screenAudioTrack || i && i(), o.hasVideo() && (0, f.vsResHack)(t,
							function(e, t) {
								o.videoWidth = e,
								o.videoHeight = t
							},
							function(e) {
								u.
							default.warning("vsResHack failed:" + e)
							}), void(e.screen && (0, l.isChrome)() && o.stream && o.stream.getVideoTracks()[0] && (o.stream.getVideoTracks()[0].onended = function() {
								o.dispatchEvent({
									type: "stopScreenSharing"
								})
							})))
						},
						function(e) {
							var t = {
								type: "error",
								msg: e.name || e
							};
							switch (t.msg) {
							case "Starting video failed":
							case "TrackStartError":
								if (o.videoSize = void 0, a > 0) return void setTimeout(function() {
									o.init(i, n, a - 1)
								},
								1);
								t.msg = "MEDIA_OPTION_INVALID";
								break;
							case "DevicesNotFoundError":
								t.msg = "DEVICES_NOT_FOUND";
								break;
							case "NotSupportedError":
								t.msg = "NOT_SUPPORTED";
								break;
							case "PermissionDeniedError":
								t.msg = "PERMISSION_DENIED",
								o.dispatchEvent({
									type: "accessDenied"
								});
								break;
							case "PERMISSION_DENIED":
								o.dispatchEvent({
									type:
									"accessDenied"
								});
								break;
							case "InvalidStateError":
								t.msg = "PERMISSION_DENIED",
								o.dispatchEvent({
									type: "accessDenied"
								});
								break;
							case "NotAllowedError":
								o.dispatchEvent({
									type:
									"accessDenied"
								});
								break;
							case "ConstraintNotSatisfiedError":
								t.msg = "CONSTRAINT_NOT_SATISFIED";
								break;
							default:
								t.msg || (t.msg = "UNDEFINED")
							}
							u.
						default.error("Media access:", t.msg),
							"function" == typeof n && n(t)
						}), e.screen && e.audio) {
							var S = !e.microphoneId || {
								deviceId: {
									exact: e.microphoneId
								}
							},
							v = {};
							o.audioProcessing && (void 0 !== o.audioProcessing.AGC && ((0, l.isFireFox)() ? v.autoGainControl = o.audioProcessing.AGC: (0, l.isChrome)() && (v.googAutoGainControl = o.audioProcessing.AGC, v.googAutoGainControl2 = o.audioProcessing.AGC)), void 0 !== o.audioProcessing.AEC && (v.echoCancellation = o.audioProcessing.AEC), void 0 !== o.audioProcessing.ANS && ((0, l.isFireFox)() ? v.noiseSuppression = o.audioProcessing.ANS: (0, l.isChrome)() && (v.googNoiseSuppression = o.audioProcessing.ANS))),
							o.stereo && (0, l.isChrome)() && (v.googAutoGainControl = !1, v.googAutoGainControl2 = !1, v.echoCancellation = !1, v.googNoiseSuppression = !1),
							0 !== Object.keys(v).length && (S = !0 === S ? {
								mandatory: v
							}: Object.assign(S, v));
							var E = {
								video: !1,
								audio: S
							};
							u.
						default.debug(E),
							(0, s.GetUserMedia)(E,
							function(e) {
								u.
							default.info("User has granted access to auxiliary local media."),
								o.dispatchEvent({
									type: "accessAllowed"
								});
								var t = e.getAudioTracks()[0];
								o.stream ? (o.stream.addTrack(t), i && i()) : o.screenAudioTrack = t
							},
							function(e) {
								var t = {
									type: "error",
									msg: e.name || e
								};
								switch (t.msg) {
								case "Starting video failed":
								case "TrackStartError":
									if (o.videoSize = void 0, a > 0) return void setTimeout(function() {
										o.init(i, n, a - 1)
									},
									1);
									t.msg = "MEDIA_OPTION_INVALID";
									break;
								case "DevicesNotFoundError":
									t.msg = "DEVICES_NOT_FOUND";
									break;
								case "NotSupportedError":
									t.msg = "NOT_SUPPORTED";
									break;
								case "PermissionDeniedError":
								case "InvalidStateError":
									t.msg = "PERMISSION_DENIED",
									o.dispatchEvent({
										type: "accessDenied"
									});
									break;
								case "PERMISSION_DENIED":
								case "NotAllowedError":
									o.dispatchEvent({
										type:
										"accessDenied"
									});
									break;
								case "ConstraintNotSatisfiedError":
									t.msg = "CONSTRAINT_NOT_SATISFIED";
									break;
								default:
									t.msg || (t.msg = "UNDEFINED")
								}
								u.
							default.error("Media access:", t.msg),
								"function" == typeof n && n(t)
							})
						}
					} else "function" == typeof n && n({
						type: "warning",
						msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES"
					})
				} catch(e) {
					u.
				default.error("Stream init:", e),
					"function" == typeof n && n({
						type: "error",
						msg: e.message || e
					})
				}
			},
			o.close = function() {
				if (u.
			default.debug("Close stream with id", o.streamId), void 0 !== o.stream) {
					var e = o.stream.getTracks();
					for (var t in e) e.hasOwnProperty(t) && e[t].stop();
					o.stream = void 0
				}
				o.initialized = !1,
				o.unmuteAudio = void 0,
				o.muteAudio = void 0,
				o.unmuteVideo = void 0,
				o.muteVideo = void 0,
				o.lowStream && o.lowStream.close()
			},
			o.enableAudio = function() {
				return u.
			default.debug("Enable audio stream with id", o.streamId),
				!(!o.hasAudio() || !o.initialized || void 0 === o.stream || !0 === o.stream.getAudioTracks()[0].enabled) && (void 0 !== o.unmuteAudio && o.unmuteAudio(), o.audioEnabled = !0, o.stream.getAudioTracks()[0].enabled = !0, !0)
			},
			o.disableAudio = function() {
				return u.
			default.debug("Disable audio stream with id", o.streamId),
				!!(o.hasAudio() && o.initialized && void 0 !== o.stream && o.stream.getAudioTracks()[0].enabled) && (void 0 !== o.muteAudio && o.muteAudio(), o.audioEnabled = !1, o.stream.getAudioTracks()[0].enabled = !1, o.sid && m.report.audioSendingStopped(o.sid, {
					succ: !0,
					reason: "muteAudio"
				}), !0)
			},
			o.enableVideo = function() {
				return u.
			default.debug("Enable video stream with id", o.streamId),
				!(!o.initialized || void 0 === o.stream || !o.stream.getVideoTracks().length || !0 === o.stream.getVideoTracks()[0].enabled) && (void 0 !== o.unmuteVideo && o.unmuteVideo(), o.pc && (o.pc.isVideoMute = !1), o.videoEnabled = !0, o.stream.getVideoTracks()[0].enabled = !0, o.lowStream && o.lowStream.enableVideo(), !0)
			},
			o.disableVideo = function() {
				return u.
			default.debug("Disable video stream with id", o.streamId),
				!!(o.initialized && void 0 !== o.stream && o.stream.getVideoTracks().length && o.stream.getVideoTracks()[0].enabled) && (void 0 !== o.muteVideo && o.muteVideo(), o.pc && (o.pc.isVideoMute = !0), o.videoEnabled = !1, o.stream.getVideoTracks()[0].enabled = !1, o.lowStream && o.lowStream.disableVideo(), o.sid && m.report.videoSendingStopped(o.sid, {
					succ: !0,
					reason: "muteVideo"
				}), !0)
			},
			o.setAudioOutput = function(e, t, i) {
				return "string" != typeof e ? (u.
			default.error("setAudioOutput Invalid Parameter", e), i && i(v.
			default.INVALID_PARAMETER)):
				(o.audioOutput = e, o.player ? void o.player.setAudioOutput(e, t, i) : t && t())
			},
			o.play = function(e, t) {
				o.isPlaying() ? u.
			default.error("Stream.play(): Stream is already playing"):
				!o.local || o.video || o.screen ? void 0 !== e && (o.player = new a.
			default({
					id:
					o.getId(),
					stream: o,
					elementID: e,
					options: void 0,
					url: t
				})) : o.hasAudio() && (o.player = new a.
			default({
					id:
					o.getId(),
					stream: o,
					elementID: e,
					options: void 0,
					url: t
				})),
				o.audioOutput && o.player.setAudioOutput(o.audioOutput)
			},
			o.stop = function() {
				u.
			default.debug("Stop stream player with id", o.streamId),
				o.player ? (o.player.destroy(), delete o.player) : u.
			default.error("Stream.stop(): Stream is not playing")
			},
			o.isPlaying = function() {
				return !! o.player
			},
			o.setAudioVolume = function(e) {
				o.player && o.player.setAudioVolume(e)
			},
			o.getStats = function(e, t) {
				var i = {
					type: "collectStats",
					promises: []
				};
				o.dispatchEvent(i),
				Promise.all(i.promises).then(function(t) {
					var i = Object.assign.apply(Object, t);
					e && setTimeout(e.bind(o, i), 0)
				}).
				catch(function(e) {
					t ? setTimeout(t.bind(o, e), 0) : u.
				default.error("Stream.getStats", e)
				})
			},
			o._getPCStats = function() {
				return new Promise(function(e, t) {
					if (!o.pc || "established" !== o.pc.state || !o.pc.getStats) {
						return t("PEER_CONNECTION_NOT_ESTABLISHED")
					}
					o.pc.getStats(function(i) {
						if (!o.pc || "established" !== o.pc.state || !o.pc.getStats) {
							return t("PEER_CONNECTION_STATE_CHANGE")
						}
						var n = o.pc.isSubscriber ? (0, p.subscribeStatsFilter)(i) : (0, p.publishStatsFilter)(i);
						return e(n)
					})
				}).then(function(e) {
					return o.pc.isSubscriber ? (0, l.isFireFox)() && ((0, p.setStat)(e, "videoReceiveResolutionHeight", o.videoHeight), (0, p.setStat)(e, "videoReceiveResolutionWidth", o.videoWidth)) : (((0, l.isSafari)() || (0, l.isFireFox)()) && ((0, p.setStat)(e, "videoSendResolutionHeight", o.videoHeight), (0, p.setStat)(e, "videoSendResolutionWidth", o.videoWidth)), ((0, l.isSafari)() || (0, l.isFireFox)()) && o.uplinkStats && (0, p.setStat)(e, "videoSendPacketsLost", o.uplinkStats.uplink_cumulative_lost)),
					Promise.resolve(e)
				})
			},
			o.getAudioLevel = function() {
				return o.audioLevelHelper ? o.audioLevelHelper.getAudioLevel() : o.stream ? 0 !== o.stream.getAudioTracks().length ? (o.audioLevelHelper = new f.audioLevelHelper(o.stream), o.audioLevelHelper.getAudioLevel()) : void u.
			default.warning("can't get audioLevel beacuse no audio trace in stream"):
				(u.
			default.warning("can't get audioLevel beacuse no stream exist"), 0)
			},
			o
		},
		S = function(e) {
			return u.
		default.debug("Create stream"),
			_(e)
		},
		E = function(e, t) {
			navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(t) {
				return e(t)
			}).
			catch(function(e) {
				return t && t(e.name + ": " + e.message)
			}) : (u.
		default.warning("enumerateDevices() not supported."), t && t("enumerateDevices() not supported"))
		};
		t.Stream = _,
		t.createStream = S,
		t.getDevices = E
	},
	function(e, t, i) {
		function n(e, t, i) {
			var n = t && i || 0;
			"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null),
			e = e || {};
			var a = e.random || (e.rng || r)();
			if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) for (var s = 0; s < 16; ++s) t[n + s] = a[s];
			return t || o(a)
		}
		var r = i(17),
		o = i(19);
		e.exports = n
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.GetUserMedia = t.Connection = void 0;
		var r = i(23),
		o = n(r),
		a = i(24),
		s = n(a),
		d = i(25),
		c = n(d),
		u = i(26),
		l = n(u),
		p = i(27),
		f = n(p),
		m = i(0),
		g = n(m),
		v = i(28),
		_ = n(v),
		S = i(5),
		E = 103,
		h = function(e) {
			var t = {};
			if (e.session_id = E += 1, "undefined" != typeof window && window.navigator) if (null !== window.navigator.userAgent.match("Firefox")) t.browser = "mozilla",
			t = (0, f.
		default)(e);
			else if (window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) g.
		default.debug("Safari"),
			t = (0, c.
		default)(e),
			t.browser = "safari";
			else if (window.navigator.userAgent.indexOf("MSIE ")) t = (0, s.
		default)(e),
			t.browser = "ie";
			else if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] >= 26) t = (0, s.
		default)(e),
			t.browser = "chrome-stable";
			else {
				if (! (window.navigator.userAgent.toLowerCase().indexOf("chrome") >= 40)) throw t.browser = "none",
				"WebRTC stack not available";
				t = (0, o.
			default)(e),
				t.browser = "chrome-canary"
			} else g.
		default.error("Publish/subscribe video/audio streams not supported yet"),
			t = (0, l.
		default)(e);
			return t
		},
		I = function(e, t, i) {
			if ({}.config = e, navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.screen) {
				var n = null;
				try {
					n = window.require("electron")
				} catch(e) {}
				if (n) return void(n.desktopCapturer ? new _.
			default(e, t, i).shareScreen(n) : i(S.ErrorCodes.ELECTRON_NOT_SUPPORT_SHARING_SCREEN));
				if (g.
			default.debug("Screen access requested"), null !== window.navigator.userAgent.match("Firefox")) {
					if (!~ ["screen", "window", "application"].indexOf(e.mediaSource)) return i && i("Invalid mediaSource, mediaSource should be one of [screen, window, application]");
					if (!e.attributes) return i && i("Share screen attributes is null");
					var r = {};
					r.video = {
						frameRate: {
							ideal: e.attributes.mxaFr,
							max: e.attributes.mxaFr
						},
						height: {
							ideal: e.attributes.height
						},
						width: {
							ideal: e.attributes.width
						},
						mediaSource: e.mediaSource
					},
					navigator.getMedia(r, t, i)
				} else if (null !== window.navigator.userAgent.match("Chrome")) {
					if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void i({
						code: "This browser does not support screen sharing"
					});
					var o = "okeephmleflklcdebijnponpabbmmgeo";
					e.extensionId && (g.
				default.debug("extensionId supplied, using " + e.extensionId), o = e.extensionId),
					g.
				default.debug("Screen access on chrome stable, looking for extension");
					try {
						chrome.runtime.sendMessage(o, {
							getStream: !0
						},
						function(n) {
							if (void 0 === n) return g.
						default.debug("Access to screen denied"),
							void i({
								code: "Access to screen denied"
							});
							var o = n.streamId,
							a = e.attributes.width,
							s = e.attributes.height,
							d = e.attributes.maxFr,
							c = e.attributes.minFr;
							r = {
								video: {
									mandatory: {
										chromeMediaSource: "desktop",
										chromeMediaSourceId: o,
										maxHeight: s,
										maxWidth: a,
										maxFrameRate: d,
										minFrameRate: c
									}
								}
							},
							navigator.getMedia(r, t, i)
						})
					} catch(e) {
						g.
					default.debug("AgoraRTC screensharing plugin is not accessible");
						var a = {
							code: "no_plugin_present"
						};
						return void i(a)
					}
				} else g.
			default.debug("This browser does not support screenSharing")
			} else window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? navigator.mediaDevices.getUserMedia(e).then(t).
			catch(i) : "undefined" != typeof navigator && navigator.getMedia ? navigator.getMedia(e, t, i) : g.
		default.error("Video/audio streams not supported yet")
		};
		t.Connection = h,
		t.GetUserMedia = I
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = ["live", "rtc", "web", "interop", "h264_interop", "web-only"],
		r = ["vp8", "h264"],
		o = ["aes-128-xts", "aes-256-xts", "aes-128-ecb"];
		t.AUDIO_SAMPLE_RATE_32000 = 32e3,
		t.AUDIO_SAMPLE_RATE_44100 = 44100,
		t.AUDIO_SAMPLE_RATE_48000 = 48e3,
		t.VIDEO_CODEC_PROFILE_BASELINE = 66,
		t.VIDEO_CODEC_PROFILE_MAIN = 77,
		t.VIDEO_CODEC_PROFILE_HIGH = 100,
		t.REMOTE_VIDEO_STREAM_HIGH = 0,
		t.REMOTE_VIDEO_STREAM_LOW = 1,
		t.REMOTE_VIDEO_STREAM_MEDIUM = 2,
		t.CLIENT_MODE_LIVE = "live",
		t.CLIENT_MODE_RTC = "rtc",
		t.CLIENT_MODE_WEB = "web",
		t.CLIENT_MODE_INTEROP = "interop",
		t.CLIENT_MODE_H264_INTEROP = "h264_interop",
		t.CLIENT_MODE_WEBONLY = "web-only",
		t.CLIENT_MODES = n,
		t.CLIENT_CODEC_VP8 = "vp8",
		t.CLIENT_CODEC_H264 = "h264",
		t.CLIENT_CODECS = r,
		t.ENCRYPTION_MODES = o,
		t.ENCRYPTION_MODE_AES128XTS = "aes-128-xts",
		t.ENCRYPTION_MODE_AES256XTS = "aes-256-xts",
		t.ENCRYPTION_MODE_AES128ECB = "aes-128-ecb",
		t.ENCRYPTION_MODE_NONE = "none"
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function(e) {
			e && e.apply(this, [].slice.call(arguments, 1))
		};
		t.
	default = n
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.getGatewayList = void 0;
		var n = i(1),
		r = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t.
		default = e,
			t
		} (n),
		o = i(0),
		a = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (o),
		s = i(8),
		d = i(2),
		c = i(5),
		u = function(e, t, i, n) {
			var r = (new Date).getTime(),
			o = "";
			t.multiIP && t.multiIP.gateway_ip && (o = {
				vocs_ip: [t.multiIP.uni_lbs_ip],
				vos_ip: [t.multiIP.gateway_ip]
			});
			var u = {
				flag: 4,
				ts: +new Date,
				key: t.appId,
				cname: t.cname,
				detail: {},
				uid: t.uid || 0
			};
			o && (u.detail[5] = JSON.stringify(o)),
			(0, s.post)(e, u,
			function(o) {
				try {
					var s = JSON.parse(o).res,
					u = s.code
				} catch(e) {
					var l = "requestChooseServer failed with unexpected body " + o;
					return a.
				default.error(l),
					n(l)
				}
				if (u) {
					var p = c.APErrorCode[s.code] || u;
					return d.report.joinChooseServer(t.sid, {
						lts: r,
						succ: !1,
						csAddr: e,
						serverList: null,
						ec: p
					}),
					n("Get server node failed [" + p + "]", e, p)
				}
				var f = [];
				if (s.addresses.forEach(function(e) {
					var t;
					e.ip && e.port ? (e.ip.match(/^[\.\:\d]+$/) ? t = "webrtc-" + e.ip.replace(/[^\d]/g, "-") + ".agora.io:" + e.port: (a.
				default.info("Cannot recognized as IP address " + e.ip + ". Used As Host instead"), t = e.ip + ":" + e.port), f.push(t)) : a.
				default.error("Invalid address format ", e)
				}), !f.length) {
					a.
				default.error("Empty Address response", s);
					var p = "EMPTY_ADDRESS_RESPONSE";
					return d.report.joinChooseServer(t.sid, {
						lts: r,
						succ: !1,
						csAddr: e,
						serverList: null,
						ec: p
					}),
					n("Get server node failed [" + p + "]", e, p)
				}
				var m = {
					gateway_addr: f,
					uid: s.uid,
					cid: s.cid,
					uni_lbs_ip: s.detail
				};
				return i(m, e)
			},
			function(e, i) {
				"timeout" === e.type ? (d.report.joinChooseServer(t.sid, {
					lts: r,
					succ: !1,
					csAddr: i,
					serverList: null,
					ec: "timeout"
				}), n("Connect choose server timeout", i)) : d.report.joinChooseServer(t.sid, {
					lts: r,
					succ: !1,
					csAddr: i,
					serverList: null,
					ec: "server_wrong"
				})
			},
			{
				"X-Packet-Service-Type": 0,
				"X-Packet-URI": 44
			})
		},
		l = function(e, t, i) {
			for (var n = (new Date).getTime(), o = !1, s = !0, l = function(i, r) {
				if (o) d.report.joinChooseServer(e.sid, {
					lts: n,
					succ: !0,
					csAddr: r,
					serverList: i.gateway_addr,
					cid: i.cid + "",
					uid: i.uid + "",
					ec: null
				},
				!1);
				else {
					if (clearTimeout(_), o = !0, a.
				default.debug("Get gateway address:", i.gateway_addr), e.proxyServer) {
						for (var s = i.gateway_addr,
						c = 0; c < s.length; c++) {
							var u = s[c].split(":");
							i.gateway_addr[c] = e.proxyServer + "/ws/?h=" + u[0] + "&p=" + u[1]
						}
						a.
					default.debug("Get gateway address:", i.gateway_addr)
					}
					t(i),
					d.report.joinChooseServer(e.sid, {
						lts: n,
						succ: !0,
						csAddr: r,
						serverList: i.gateway_addr,
						cid: i.cid + "",
						uid: i.uid + "",
						ec: null
					},
					!0)
				}
			},
			p = function(e, t, n) {
				s && (a.
			default.error(e, t, n), n && !c.JOIN_CS_RETRY_LIST.includes(n) && (s = !1, i(n)))
			},
			f = r.WEBCS_DOMAIN, m = 0; m < f.length; ++m) {
				var g;
				if ("string" == typeof f[m]) {
					var v = f[m];
					g = e.proxyServer ? "https://" + e.proxyServer + "/ap/?url=" + v + "/api/v1": "https://" + v + "/api/v1",
					a.
				default.debug("Connect to choose_server: " + g),
					u(g, e, l, p)
				} else a.
			default.error("Invalid Host", f[m])
			}
			var _ = setTimeout(function() {
				if (!o) for (var t = r.WEBCS_DOMAIN_BACKUP_LIST,
				i = 0; i < t.length; ++i) {
					if ("string" == typeof t[i]) {
						var n = t[i];
						g = e.proxyServer ? "https://" + e.proxyServer + "/ap/?url=" + n + "/api/v1": "https://" + n + "/api/v1",
						a.
					default.debug("Connect to backup_choose_server: " + g),
						u(g, e, l, p)
					} else a.
				default.error("Invalid Host", t[i])
				}
			},
			1e3);
			setTimeout(function() { ! o && s && i()
			},
			r.WEBCS_BACKUP_CONNECT_TIMEOUT)
		},
		p = function(e, t, i) {
			var n = !1,
			r = null,
			o = 1; !
			function i() {
				n || l(e,
				function(e) {
					n = !0,
					clearTimeout(r),
					t(e)
				},
				function(e) {
					if (e) return void a.
				default.info("Join failed: " + e);
					a.
				default.debug("Request gateway list will be restart in " + o + "s"),
					r = setTimeout(function() {
						i()
					},
					1e3 * o),
					o = o >= 3600 ? 3600 : 2 * o
				})
			} ()
		};
		t.getGatewayList = p
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(1),
		r = i(0),
		o = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (r),
		a = i(7),
		s = i(9),
		d = i(12),
		c = i(30);
		t.
	default = {
			TranscodingUser: c.TranscodingUser,
			LiveTranscoding: c.LiveTranscoding,
			createClient: c.createClient,
			createStream: s.createStream,
			Logger: o.
		default,
			getDevices: s.getDevices,
			checkSystemRequirements: a.checkSystemRequirements,
			VERSION: n.VERSION,
			AUDIO_SAMPLE_RATE_32000: d.AUDIO_SAMPLE_RATE_32000,
			AUDIO_SAMPLE_RATE_44100: d.AUDIO_SAMPLE_RATE_44100,
			AUDIO_SAMPLE_RATE_48000: d.AUDIO_SAMPLE_RATE_48000,
			VIDEO_CODEC_PROFILE_BASELINE: d.VIDEO_CODEC_PROFILE_BASELINE,
			VIDEO_CODEC_PROFILE_MAIN: d.VIDEO_CODEC_PROFILE_MAIN,
			VIDEO_CODEC_PROFILE_HIGH: d.VIDEO_CODEC_PROFILE_HIGH,
			REMOTE_VIDEO_STREAM_HIGH: d.REMOTE_VIDEO_STREAM_HIGH,
			REMOTE_VIDEO_STREAM_LOW: d.REMOTE_VIDEO_STREAM_LOW,
			REMOTE_VIDEO_STREAM_MEDIUM: d.REMOTE_VIDEO_STREAM_MEDIUM
		}
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			var e = new Date;
			return e.toTimeString().split(" ")[0] + ":" + e.getMilliseconds()
		};
		t.getTimestamp = n
	},
	function(e, t, i) { (function(t) {
			var i, n = t.crypto || t.msCrypto;
			if (n && n.getRandomValues) {
				var r = new Uint8Array(16);
				i = function() {
					return n.getRandomValues(r),
					r
				}
			}
			if (!i) {
				var o = new Array(16);
				i = function() {
					for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()),
					o[t] = e >>> ((3 & t) << 3) & 255;
					return o
				}
			}
			e.exports = i
		}).call(t, i(18))
	},
	function(e, t) {
		var i;
		i = function() {
			return this
		} ();
		try {
			i = i || Function("return this")() || (0, eval)("this")
		} catch(e) {
			"object" == typeof window && (i = window)
		}
		e.exports = i
	},
	function(e, t) {
		function i(e, t) {
			var i = t || 0,
			r = n;
			return r[e[i++]] + r[e[i++]] + r[e[i++]] + r[e[i++]] + "-" + r[e[i++]] + r[e[i++]] + "-" + r[e[i++]] + r[e[i++]] + "-" + r[e[i++]] + r[e[i++]] + "-" + r[e[i++]] + r[e[i++]] + r[e[i++]] + r[e[i++]] + r[e[i++]] + r[e[i++]]
		}
		for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
		e.exports = i
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = window.AudioContext || webkitAudioContext,
		r = null,
		o = function() {
			return ! r && n && (r = new n),
			r
		},
		a = function() {
			return !! n
		};
		t.GetAudioContext = o,
		t.checkAudioContext = a
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = i(22),
		o = n(r),
		a = i(0),
		s = n(a),
		d = i(3),
		c = i(5),
		u = n(c),
		l = function(e) {
			var t = (0, o.
		default)({});
			if (t.id = e.id, t.url = e.url, t.stream = e.stream.stream, t.elementID = e.elementID, t.setAudioOutput = function(e, i, n) {
				var r = t.video || t.audio;
				return r ? r.setSinkId ? void r.setSinkId(e).then(function() {
					return s.
				default.debug("video " + t.id + " setAudioOutput " + e + " SUCCESS"),
					r == t.video && t.audio ? t.audio.setSinkId(e) : Promise.resolve()
				}).then(function() {
					return s.
				default.debug("audio " + t.id + " setAudioOutput " + e + " SUCCESS"),
					i && i()
				}).
				catch(function(e) {
					return s.
				default.error("VideoPlayer.setAudioOutput", e),
					n && n(e)
				}) : (s.
			default.error(u.
			default.WEB_API_NOT_SUPPORTED), n && n(u.
			default.WEB_API_NOT_SUPPORTED)):
				(s.
			default.error(u.
			default.PLAYER_NOT_FOUND), n && n(u.
			default.PLAYER_NOT_FOUND))
			},
			t.destroy = function() { (0, d.setSrcObject)(t.video, null),
				(0, d.setSrcObject)(t.audio, null),
				t.video.pause(),
				delete t.resizer,
				document.getElementById(t.div.id) && t.parentNode.contains(t.div) && t.parentNode.removeChild(t.div)
			},
			t.div = document.createElement("div"), t.div.setAttribute("id", "player_" + t.id), e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), t.video = document.createElement("video"), t.video.setAttribute("id", "video" + t.id), e.stream.local && !e.stream.screen ? e.stream.mirror ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);object-fit: cover;") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;object-fit: cover;") : e.stream.video ? (t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;"), window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && t.video.setAttribute("controls", "")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute;object-fit: cover;") : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none;object-fit: cover;"), t.video.setAttribute("autoplay", ""), t.video.setAttribute("muted", ""), t.video.setAttribute("playsinline", ""), e.stream.local && (t.video.volume = 0, t.video.setAttribute("muted", "")), t.audio = document.createElement("audio"), t.audio.setAttribute("id", "audio" + t.id), t.audio.setAttribute("autoplay", ""), e.stream.local && (t.audio.volume = 0, t.audio.setAttribute("muted", "")), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode, t.video.addEventListener("playing",
			function(e) { !
				function e() {
					if (t.video.videoWidth * t.video.videoHeight > 4) return void s.
				default.debug("video dimensions:", t.video.videoWidth, t.video.videoHeight);
					setTimeout(e, 50)
				} ()
			}), e.stream.hasVideo() || e.stream.hasScreen()) t.div.appendChild(t.video),
			t.div.appendChild(t.audio),
			(0, d.attachMediaStream)(t.video, e.stream.stream),
			(0, d.attachMediaStream)(t.audio, e.stream.stream);
			else if (!e.stream.local && t.video.removeAttribute("muted"), t.div.appendChild(t.video), window.MediaStream) {
				var i = new MediaStream(e.stream.stream.getAudioTracks()); (0, d.setSrcObject)(t.video, i)
			} else(0, d.setSrcObject)(t.video, e.stream.stream);
			return t.setAudioVolume = function(e) {
				var i = parseInt(e) / 100;
				isFinite(i) && (i < 0 ? i = 0 : i > 1 && (i = 1), t.video && (t.video.volume = i), t.audio && (t.audio.volume = i))
			},
			t
		};
		t.
	default = l
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(4),
		r = function(e) {
			var t = (0, n.EventDispatcher)(e);
			return t.url = ".",
			t
		};
		t.
	default = r
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(0),
		r = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (n),
		o = (i(3),
		function(e) {
			var t = {},
			i = webkitRTCPeerConnection;
			t.pc_config = {
				iceServers: []
			},
			t.con = {
				optional: [{
					DtlsSrtpKeyAgreement: !0
				}]
			},
			e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
				"string" == typeof e && "" !== e && t.pc_config.iceServers.push({
					url: e
				})
			}) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
				url: e.stunServerUrl
			})), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
				"string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
					username: e.username,
					credential: e.password,
					url: e.url
				})
			}) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.password,
				url: e.turnServer.url
			}))),
			void 0 === e.audio && (e.audio = !0),
			void 0 === e.video && (e.video = !0),
			t.mediaConstraints = {
				mandatory: {
					OfferToReceiveVideo: e.video,
					OfferToReceiveAudio: e.audio
				}
			},
			t.roapSessionId = 103,
			t.peerConnection = new i(t.pc_config, t.con),
			t.peerConnection.onicecandidate = function(e) {
				e.candidate ? t.iceCandidateCount += 1 : (r.
			default.debug("PeerConnection State: " + t.peerConnection.iceGatheringState), void 0 === t.ices && (t.ices = 0), t.ices = t.ices + 1, t.ices >= 1 && t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()))
			};
			var n = function(t) {
				var i, n;
				return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), r.
			default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
				e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)),
				t
			};
			return t.processSignalingMessage = function(e) {
				var i, r = JSON.parse(e);
				t.incomingMessage = r,
				"new" === t.state ? "OFFER" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "answer"
				},
				i.sdp = n(i.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "pr-answer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
			},
			t.addStream = function(e) {
				t.peerConnection.addStream(e),
				t.markActionNeeded()
			},
			t.removeStream = function() {
				t.markActionNeeded()
			},
			t.close = function() {
				t.state = "closed",
				t.peerConnection.close()
			},
			t.markActionNeeded = function() {
				t.actionNeeded = !0,
				t.doLater(function() {
					t.onstablestate()
				})
			},
			t.doLater = function(e) {
				window.setTimeout(e, 1)
			},
			t.onstablestate = function() {
				var e;
				if (t.actionNeeded) {
					if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
						if (e.sdp = n(e.sdp), r.
					default.debug("Changed", e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
						t.state = "preparing-offer",
						void t.markActionNeeded();
						r.
					default.debug("Not sending a new offer")
					},
					function(e) {
						r.
					default.debug("peer connection create offer failed ", e)
					},
					t.mediaConstraints);
					else if ("preparing-offer" === t.state) {
						if (t.moreIceComing) return;
						t.prevOffer = t.peerConnection.localDescription.sdp,
						t.sendMessage("OFFER", t.prevOffer),
						t.state = "offer-sent"
					} else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
						if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
						var i = new Date;
						r.
					default.debug(i.getTime() + ": Starting ICE in responder"),
						t.iceStarted = !0
					},
					function(e) {
						r.
					default.debug("peer connection create answer failed ", e)
					},
					t.mediaConstraints);
					else if ("offer-received-preparing-answer" === t.state) {
						if (t.moreIceComing) return;
						e = t.peerConnection.localDescription.sdp,
						t.sendMessage("ANSWER", e),
						t.state = "established"
					} else t.error("Dazed and confused in state " + t.state + ", stopping here");
					t.actionNeeded = !1
				}
			},
			t.sendOK = function() {
				t.sendMessage("OK")
			},
			t.sendMessage = function(e, i) {
				var n = {};
				n.messageType = e,
				n.sdp = i,
				"OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq),
				t.onsignalingmessage(JSON.stringify(n))
			},
			t.error = function(e) {
				throw "Error in RoapOnJsep: " + e
			},
			t.sessionId = t.roapSessionId += 1,
			t.sequenceNumber = 0,
			t.actionNeeded = !1,
			t.iceStarted = !1,
			t.moreIceComing = !0,
			t.iceCandidateCount = 0,
			t.onsignalingmessage = e.callback,
			t.peerConnection.onopen = function() {
				t.onopen && t.onopen()
			},
			t.peerConnection.onaddstream = function(e) {
				t.onaddstream && t.onaddstream(e)
			},
			t.peerConnection.onremovestream = function(e) {
				t.onremovestream && t.onremovestream(e)
			},
			t.peerConnection.oniceconnectionstatechange = function(e) {
				t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
			},
			t.onaddstream = null,
			t.onremovestream = null,
			t.state = "new",
			t.markActionNeeded(),
			t
		});
		t.
	default = o
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(0),
		r = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (n),
		o = i(3),
		a = function(e) {
			var t = {},
			i = o.RTCPeerConnection;
			t.uid = e.uid,
			t.isVideoMute = e.isVideoMute,
			t.isSubscriber = e.isSubscriber,
			t.pc_config = {
				iceServers: [{
					url: "stun:webcs.agora.io:3478"
				}]
			},
			t.con = {
				optional: [{
					DtlsSrtpKeyAgreement: !0
				}]
			},
			e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
				"string" == typeof e && "" !== e && t.pc_config.iceServers.push({
					url: e
				})
			}) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
				url: e.stunServerUrl
			})), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
				"string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
					username: e.username,
					credential: e.password,
					url: e.url
				})
			}) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.credential,
				credentialType: "password",
				urls: "turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"
			}), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.credential,
				credentialType: "password",
				urls: "turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"
			}), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay")))),
			void 0 === e.audio && (e.audio = !0),
			void 0 === e.video && (e.video = !0),
			t.mediaConstraints = {
				mandatory: {
					OfferToReceiveVideo: e.video,
					OfferToReceiveAudio: e.audio
				}
			},
			t.roapSessionId = 103,
			t.peerConnection = new i(t.pc_config, t.con),
			t.peerConnection.onicecandidate = function(e) {
				var i, n, o, a;
				i = t.peerConnection.localDescription.sdp,
				n = i.match(/a=candidate:.+typ\ssrflx.+\r\n/),
				o = i.match(/a=candidate:.+typ\shost.+\r\n/),
				a = i.match(/a=candidate:.+typ\srelay.+\r\n/),
				0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
					t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
				},
				1e3)),
				null === n && null === o && null === a || void 0 !== t.ice || (r.
			default.debug("srflx candidate : " + n + " relay candidate: " + a + " host candidate : " + o), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()),
				t.iceCandidateCount = t.iceCandidateCount + 1
			},
			r.
		default.debug('Created webkitRTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".');
			var n = function(t) {
				return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")),
				t
			},
			a = function(t) {
				var i, n;
				return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), r.
			default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
				e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)),
				t
			};
			return t.processSignalingMessage = function(e) {
				var i, r = JSON.parse(e);
				t.incomingMessage = r,
				"new" === t.state ? "OFFER" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "answer"
				},
				i.sdp = n(i.sdp), i.sdp = a(i.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.sendOK(), t.state = "established") : "pr-answer" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "pr-answer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))) : "offer" === r.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === r.messageType ? (i = {
					sdp: r.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + r.messageType + " in state " + t.state))
			},
			t.getVideoRelatedStats = function(e) {
				t.peerConnection.getStats(null,
				function(i) {
					Object.keys(i).forEach(function(n) {
						var r = i[n];
						t.isSubscriber ? "video" === r.mediaType && r.id && ~r.id.indexOf("recv") && e && e({
							mediaType: "video",
							peerId: t.uid,
							isVideoMute: t.isVideoMute,
							frameRateReceived: r.googFrameRateReceived,
							frameRateDecoded: r.googFrameRateDecoded
						}) : "video" === r.mediaType && r.id && ~r.id.indexOf("send") && e && e({
							mediaType: "video",
							isVideoMute: t.isVideoMute,
							frameRateInput: r.googFrameRateInput,
							frameRateSent: r.googFrameRateSent
						})
					})
				})
			},
			t.getStatsRate = function(e) {
				t.getStats(function(t) {
					e(t)
				})
			},
			t.getStats = function(e) {
				t.peerConnection.getStats(null,
				function(i) {
					var n = [],
					r = [],
					o = null;
					Object.keys(i).forEach(function(e) {
						var t = i[e];
						r.push(t),
						"ssrc" !== t.type && "VideoBwe" !== t.type || (o = t.timestamp, n.push(t))
					}),
					n.push({
						id: "time",
						startTime: t.connectedTime,
						timestamp: o || new Date
					}),
					e(n, r)
				})
			},
			t.addStream = function(e) {
				t.peerConnection.addStream(e),
				t.markActionNeeded()
			},
			t.removeStream = function() {
				t.markActionNeeded()
			},
			t.close = function() {
				t.state = "closed",
				t.peerConnection.close()
			},
			t.markActionNeeded = function() {
				t.actionNeeded = !0,
				t.doLater(function() {
					t.onstablestate()
				})
			},
			t.doLater = function(e) {
				window.setTimeout(e, 1)
			},
			t.onstablestate = function() {
				var e;
				if (t.actionNeeded) {
					if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
						if (e.sdp = a(e.sdp), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
						t.state = "preparing-offer",
						void t.markActionNeeded();
						r.
					default.debug("Not sending a new offer")
					},
					function(e) {
						r.
					default.debug("peer connection create offer failed ", e)
					},
					t.mediaConstraints);
					else if ("preparing-offer" === t.state) {
						if (t.moreIceComing) return;
						t.prevOffer = t.peerConnection.localDescription.sdp,
						t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),
						t.sendMessage("OFFER", t.prevOffer),
						t.state = "offer-sent"
					} else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
						if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
						var i = new Date;
						r.
					default.debug(i.getTime() + ": Starting ICE in responder"),
						t.iceStarted = !0
					},
					function(e) {
						r.
					default.debug("peer connection create answer failed ", e)
					},
					t.mediaConstraints);
					else if ("offer-received-preparing-answer" === t.state) {
						if (t.moreIceComing) return;
						e = t.peerConnection.localDescription.sdp,
						t.sendMessage("ANSWER", e),
						t.state = "established"
					} else t.error("Dazed and confused in state " + t.state + ", stopping here");
					t.actionNeeded = !1
				}
			},
			t.sendOK = function() {
				t.sendMessage("OK")
			},
			t.sendMessage = function(e, i) {
				var n = {};
				n.messageType = e,
				n.sdp = i,
				"OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq),
				t.onsignalingmessage(JSON.stringify(n))
			},
			t.error = function(e) {
				throw "Error in RoapOnJsep: " + e
			},
			t.sessionId = t.roapSessionId += 1,
			t.sequenceNumber = 0,
			t.actionNeeded = !1,
			t.iceStarted = !1,
			t.moreIceComing = !0,
			t.iceCandidateCount = 0,
			t.onsignalingmessage = e.callback,
			t.peerConnection.ontrack = function(e) {
				t.onaddstream && (t.onaddstream(e, "ontrack"), t.peerConnection.onaddstream = null)
			},
			t.peerConnection.onaddstream = function(e) {
				t.onaddstream && (t.onaddstream(e, "onaddstream"), t.peerConnection.ontrack = null)
			},
			t.peerConnection.onremovestream = function(e) {
				t.onremovestream && t.onremovestream(e)
			},
			t.peerConnection.oniceconnectionstatechange = function(e) {
				"connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date),
				t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
			},
			t.onaddstream = null,
			t.onremovestream = null,
			t.state = "new",
			t.markActionNeeded(),
			t
		};
		t.
	default = a
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(0),
		r = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (n),
		o = i(3),
		a = function(e) {
			var t = {};
			o.RTCPeerConnection;
			t.uid = e.uid,
			t.isVideoMute = e.isVideoMute,
			t.isSubscriber = e.isSubscriber,
			t.pc_config = {
				iceServers: [{
					urls: ["stun:72.251.224.27:3478", "stun:stun.l.google.com:19302"]
				}],
				bundlePolicy: "max-bundle"
			},
			t.con = {
				optional: [{
					DtlsSrtpKeyAgreement: !0
				}]
			},
			e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
				"string" == typeof e && "" !== e && t.pc_config.iceServers.push({
					url: e
				})
			}) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
				url: e.stunServerUrl
			})), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
				"string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
					username: e.username,
					credential: e.password,
					url: e.url
				})
			}) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.credential,
				credentialType: "password",
				urls: ["turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"]
			}), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.credential,
				credentialType: "password",
				urls: ["turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"]
			}), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay")))),
			void 0 === e.audio && (e.audio = !0),
			void 0 === e.video && (e.video = !0),
			t.mediaConstraints = {
				mandatory: {
					OfferToReceiveVideo: e.video,
					OfferToReceiveAudio: e.audio
				}
			},
			t.roapSessionId = 103,
			t.peerConnection = new o.RTCPeerConnection(t.pc_config),
			r.
		default.debug('safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'),
			t.peerConnection.onicecandidate = function(e) {
				var i, n, o, a;
				i = t.peerConnection.localDescription.sdp,
				n = i.match(/a=candidate:.+typ\ssrflx.+\r\n/),
				o = i.match(/a=candidate:.+typ\shost.+\r\n/),
				a = i.match(/a=candidate:.+typ\srelay.+\r\n/),
				0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
					t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
				},
				1e3)),
				null === n && null === o && null === a || void 0 !== t.ice || (r.
			default.debug("srflx candidate : " + n + " relay candidate: " + a + " host candidate : " + o), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()),
				t.iceCandidateCount = t.iceCandidateCount + 1
			};
			var i = function(t) {
				return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")),
				t
			},
			n = function(t) {
				var i, n;
				return e.minVideoBW && e.maxVideoBW && (i = t.match(/m=video.*\r\n/), n = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", t = t.replace(i[0], n), r.
			default.debug("Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
				e.maxAudioBW && (i = t.match(/m=audio.*\r\n/), n = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", t = t.replace(i[0], n)),
				t
			};
			t.processSignalingMessage = function(e) {
				var r, o = JSON.parse(e);
				t.incomingMessage = o,
				"new" === t.state ? "OFFER" === o.messageType ? (r = {
					sdp: o.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (r = {
					sdp: o.sdp,
					type: "answer"
				},
				r.sdp = i(r.sdp), r.sdp = n(r.sdp), r.sdp = r.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (r = {
					sdp: o.sdp,
					type: "pr-answer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(r))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (r = {
					sdp: o.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
			};
			var a = {
				id: "",
				type: "",
				mediaType: "",
				googCodecName: "opus",
				aecDivergentFilterFraction: "0",
				audioInputLevel: "0",
				bytesSent: "0",
				packetsSent: "0",
				googEchoCancellationReturnLoss: "0",
				googEchoCancellationReturnLossEnhancement: "0"
			},
			s = {
				id: "",
				type: "",
				mediaType: "",
				googCodecName: "h264" === e.codec ? "H264": "VP8",
				bytesSent: "0",
				packetsLost: "0",
				packetsSent: "0",
				googAdaptationChanges: "0",
				googAvgEncodeMs: "0",
				googEncodeUsagePercent: "0",
				googFirsReceived: "0",
				googFrameHeightSent: "0",
				googFrameHeightInput: "0",
				googFrameRateInput: "0",
				googFrameRateSent: "0",
				googFrameWidthSent: "0",
				googFrameWidthInput: "0",
				googNacksReceived: "0",
				googPlisReceived: "0",
				googRtt: "0",
				googFramesEncoded: "0"
			},
			d = {
				id: "",
				type: "",
				mediaType: "",
				audioOutputLevel: "0",
				bytesReceived: "0",
				packetsLost: "0",
				packetsReceived: "0",
				googAccelerateRate: "0",
				googCurrentDelayMs: "0",
				googDecodingCNG: "0",
				googDecodingCTN: "0",
				googDecodingCTSG: "0",
				googDecodingNormal: "0",
				googDecodingPLC: "0",
				googDecodingPLCCNG: "0",
				googExpandRate: "0",
				googJitterBufferMs: "0",
				googJitterReceived: "0",
				googPreemptiveExpandRate: "0",
				googPreferredJitterBufferMs: "0",
				googSecondaryDecodedRate: "0",
				googSpeechExpandRate: "0"
			},
			c = {
				id: "",
				type: "",
				mediaType: "",
				googTargetDelayMs: "0",
				packetsLost: "0",
				googDecodeMs: "0",
				googMaxDecodeMs: "0",
				googRenderDelayMs: "0",
				googFrameWidthReceived: "0",
				googFrameHeightReceived: "0",
				googFrameRateReceived: "0",
				googFrameRateDecoded: "0",
				googFrameRateOutput: "0",
				googFramesDecoded: "0",
				googFrameReceived: "0",
				googJitterBufferMs: "0",
				googCurrentDelayMs: "0",
				googMinPlayoutDelayMs: "0",
				googNacksSent: "0",
				googPlisSent: "0",
				googFirsSent: "0",
				bytesReceived: "0",
				packetsReceived: "0"
			},
			u = {
				id: "bweforvideo",
				type: "VideoBwe",
				googAvailableSendBandwidth: "0",
				googAvailableReceiveBandwidth: "0",
				googActualEncBitrate: "0",
				googRetransmitBitrate: "0",
				googTargetEncBitrate: "0",
				googBucketDelay: "0",
				googTransmitBitrate: "0"
			},
			l = 0,
			p = 0,
			f = 0;
			return t.getVideoRelatedStats = function(i) {
				t.peerConnection.getStats().then(function(n) {
					n.forEach(function(n) {
						if (t.isSubscriber) {
							if ("track" === n.type && ~n.id.indexOf("video")) {
								if (!t.lastReport) return void(t.lastReport = n);
								i && i({
									peerId: t.uid,
									mediaType: "video",
									isVideoMute: t.isVideoMute,
									frameRateReceived: n.framesReceived - t.lastReport.framesReceived + "",
									frameRateDecoded: n.framesDecoded - t.lastReport.framesDecoded + ""
								}),
								t.lastReport = n
							}
						} else if ("outbound-rtp" === n.type && "video" === n.mediaType) {
							if (!t.lastReport) return void(t.lastReport = n);
							i && i({
								mediaType: "video",
								isVideoMute: t.isVideoMute,
								frameRateInput: e.maxFrameRate + "",
								frameRateSent: n.framesEncoded - t.lastReport.framesEncoded + ""
							}),
							t.lastReport = n
						}
					})
				})
			},
			t.getStatsRate = function(e) {
				t.getStats(function(t) {
					t.forEach(function(e) {
						"outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - l) / 3).toString(), l = e.googFramesEncoded),
						"inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - f) / 3).toString(), f = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - p) / 3).toString(), p = e.googFramesDecoded))
					}),
					e(t)
				})
			},
			t.getStats = function(e) {
				var i = [];
				t.peerConnection.getStats().then(function(n) {
					n.forEach(function(e) {
						i.push(e),
						"outbound-rtp" === e.type && "audio" === e.mediaType && (a.id = e.id, a.type = e.type, a.mediaType = e.mediaType, a.bytesSent = e.bytesSent ? e.bytesSent + "": "0", a.packetsSent = e.packetsSent ? e.packetsSent + "": "0"),
						"outbound-rtp" === e.type && "video" === e.mediaType && (s.id = e.id, s.type = e.type, s.mediaType = e.mediaType, s.bytesSent = e.bytesSent ? e.bytesSent + "": "0", s.packetsSent = e.packetsSent ? e.packetsSent + "": "0", s.googPlisReceived = e.pliCount ? e.pliCount + "": "0", s.googNacksReceived = e.nackCount ? e.nackCount + "": "0", s.googFirsReceived = e.firCount ? e.firCount + "": "0", s.googFramesEncoded = e.framesEncoded ? e.framesEncoded + "": "0"),
						"inbound-rtp" === e.type && -1 != e.id.indexOf("44444") && (d.id = e.id, d.type = e.type, d.mediaType = "audio", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "": "0", d.bytesReceived = e.bytesReceived ? e.bytesReceived + "": "0", d.packetsLost = e.packetsLost ? e.packetsLost + "": "0", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "": "0", d.googJitterReceived = e.jitter ? e.jitter + "": "0"),
						"inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (c.id = e.id, c.type = e.type, c.mediaType = "video", c.packetsReceived = e.packetsReceived ? e.packetsReceived + "": "0", c.bytesReceived = e.bytesReceived ? e.bytesReceived + "": "0", c.packetsLost = e.packetsLost ? e.packetsLost + "": "0", c.googJitterBufferMs = e.jitter ? e.jitter + "": "0", c.googNacksSent = e.nackCount ? e.nackCount + "": "0", c.googPlisSent = e.pliCount ? e.pliCount + "": "0", c.googFirsSent = e.firCount ? e.firCount + "": "0"),
						"track" === e.type && -1 != e.id.indexOf("55543") && (c.googFrameWidthReceived = e.frameWidth ? e.frameWidth + "": "0", c.googFrameHeightReceived = e.frameHeight ? e.frameHeight + "": "0", c.googFrameReceived = e.framesReceived ? e.framesReceived + "": "0", c.googFramesDecoded = e.framesDecoded ? e.framesDecoded + "": "0"),
						"track" === e.type && -1 != e.id.indexOf("44444") && (d.audioOutputLevel = e.audioLevel + "", a.audioInputLevel = e.audioLevel + ""),
						"candidate-pair" === e.type && (0 == e.availableIncomingBitrate ? u.googAvailableSendBandwidth = e.availableOutgoingBitrate + "": u.googAvailableReceiveBandwidth = e.availableIncomingBitrate + "")
					});
					var r = [u, a, s, d, c];
					r.push({
						id: "time",
						startTime: t.connectedTime,
						timestamp: new Date
					}),
					e(r, i)
				}).
				catch(function(e) {
					console.error(e)
				})
			},
			t.addStream = function(e) {
				window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function(i) {
					return t.peerConnection.addTrack(i, e)
				}) : t.peerConnection.addStream(e),
				t.markActionNeeded()
			},
			t.removeStream = function() {
				t.markActionNeeded()
			},
			t.close = function() {
				t.state = "closed",
				t.peerConnection.close()
			},
			t.markActionNeeded = function() {
				t.actionNeeded = !0,
				t.doLater(function() {
					t.onstablestate()
				})
			},
			t.doLater = function(e) {
				window.setTimeout(e, 1)
			},
			t.onstablestate = function() {
				var i;
				if (t.actionNeeded) {
					if ("new" === t.state || "established" === t.state) {
						if (e.isSubscriber && window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome")) {
							var o = t.peerConnection.addTransceiver("audio"),
							a = t.peerConnection.addTransceiver("video");
							o.setDirection("recvonly"),
							a.setDirection("recvonly")
						}
						t.peerConnection.createOffer(t.mediaConstraints).then(function(i) {
							if (i.sdp = n(i.sdp), e.isSubscriber || (i.sdp = i.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, "")), i.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(i),
							t.state = "preparing-offer",
							void t.markActionNeeded();
							r.
						default.debug("Not sending a new offer")
						}).
						catch(function(e) {
							r.
						default.debug("peer connection create offer failed ", e)
						})
					} else if ("preparing-offer" === t.state) {
						if (t.moreIceComing) return;
						t.prevOffer = t.peerConnection.localDescription.sdp,
						t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),
						t.sendMessage("OFFER", t.prevOffer),
						t.state = "offer-sent"
					} else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
						if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
						var i = new Date;
						r.
					default.debug(i.getTime() + ": Starting ICE in responder"),
						t.iceStarted = !0
					},
					function(e) {
						r.
					default.debug("peer connection create answer failed ", e)
					},
					t.mediaConstraints);
					else if ("offer-received-preparing-answer" === t.state) {
						if (t.moreIceComing) return;
						i = t.peerConnection.localDescription.sdp,
						t.sendMessage("ANSWER", i),
						t.state = "established"
					} else t.error("Dazed and confused in state " + t.state + ", stopping here");
					t.actionNeeded = !1
				}
			},
			t.sendOK = function() {
				t.sendMessage("OK")
			},
			t.sendMessage = function(e, i) {
				var n = {};
				n.messageType = e,
				n.sdp = i,
				"OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq),
				t.onsignalingmessage(JSON.stringify(n))
			},
			t.error = function(e) {
				throw "Error in RoapOnJsep: " + e
			},
			t.sessionId = t.roapSessionId += 1,
			t.sequenceNumber = 0,
			t.actionNeeded = !1,
			t.iceStarted = !1,
			t.moreIceComing = !0,
			t.iceCandidateCount = 0,
			t.onsignalingmessage = e.callback,
			t.peerConnection.ontrack = function(e) {
				t.onaddstream && t.onaddstream(e, "ontrack")
			},
			t.peerConnection.onremovestream = function(e) {
				t.onremovestream && t.onremovestream(e)
			},
			t.peerConnection.oniceconnectionstatechange = function(e) {
				"connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date),
				t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
			},
			t.onaddstream = null,
			t.onremovestream = null,
			t.state = "new",
			t.markActionNeeded(),
			t
		};
		t.
	default = a
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			var e = {};
			return e.addStream = function() {},
			e
		};
		t.
	default = n
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(0),
		r = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (n),
		o = i(3),
		a = function(e) {
			var t = {},
			i = (mozRTCPeerConnection, mozRTCSessionDescription),
			n = !1;
			t.uid = e.uid,
			t.isVideoMute = e.isVideoMute,
			t.isSubscriber = e.isSubscriber,
			t.pc_config = {
				iceServers: []
			},
			e.iceServers instanceof Array ? e.iceServers.map(function(e) {
				0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({
					url: e.url
				})
			}) : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
				"string" == typeof e && "" !== e && t.pc_config.iceServers.push({
					url: e
				})
			}) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
				url: e.stunServerUrl
			})), e.turnServer && "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.credential,
				credentialType: "password",
				urls: "turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"
			}), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
				username: e.turnServer.username,
				credential: e.turnServer.credential,
				credentialType: "password",
				urls: "turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"
			}), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay"))),
			void 0 === e.audio && (e.audio = !0),
			void 0 === e.video && (e.video = !0),
			t.mediaConstraints = {
				offerToReceiveAudio: e.audio,
				offerToReceiveVideo: e.video,
				mozDontOfferDataChannel: !0
			},
			t.roapSessionId = 103,
			t.peerConnection = new o.RTCPeerConnection(t.pc_config),
			r.
		default.debug('safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'),
			t.peerConnection.onicecandidate = function(e) {
				var i, n, o, a;
				i = t.peerConnection.localDescription.sdp,
				n = i.match(/a=candidate:.+typ\ssrflx.+\r\n/),
				o = i.match(/a=candidate:.+typ\shost.+\r\n/),
				a = i.match(/a=candidate:.+typ\srelay.+\r\n/),
				0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
					t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
				},
				1e3)),
				null === n && null === o && null === a || void 0 !== t.ice || (r.
			default.debug("srflx candidate : " + n + " relay candidate: " + a + " host candidate : " + o), clearTimeout(t.timeout), t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()),
				t.iceCandidateCount = t.iceCandidateCount + 1
			},
			t.checkMLineReverseInSDP = function(e) {
				return ! (!~e.indexOf("m=audio") || !~e.indexOf("m=video")) && e.indexOf("m=audio") > e.indexOf("m=video")
			},
			t.reverseMLineInSDP = function(e) {
				var t = e.split("m=audio"),
				i = t[1].split("m=video"),
				n = "m=video" + i[1],
				r = "m=audio" + i[0];
				return e = t[0] + n + r
			},
			t.processSignalingMessage = function(e) {
				var n, o = JSON.parse(e);
				t.incomingMessage = o,
				"new" === t.state ? "OFFER" === o.messageType ? (o.sdp = l(o.sdp), n = {
					sdp: o.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new i(n),
				function() {
					r.
				default.debug("setRemoteDescription succeeded")
				},
				function(e) {
					r.
				default.info("setRemoteDescription failed: " + e.name)
				}), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (o.sdp = l(o.sdp), o.sdp = o.sdp.replace(/ generation 0/g, ""), o.sdp = o.sdp.replace(/ udp /g, " UDP "), o.sdp = o.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), o.sdp = o.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), o.sdp = o.sdp.replace(/a=mid:video/, "a=mid:sdparta_1"), t.isMLineReverseInSDP && (o.sdp = t.reverseMLineInSDP(o.sdp)), n = {
					sdp: o.sdp,
					type: "answer"
				},
				t.peerConnection.setRemoteDescription(new i(n),
				function() {
					r.
				default.debug("setRemoteDescription succeeded")
				},
				function(e) {
					r.
				default.info("setRemoteDescription failed: " + e)
				}), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (n = {
					sdp: o.sdp,
					type: "pr-answer"
				},
				t.peerConnection.setRemoteDescription(new i(n),
				function() {
					r.
				default.debug("setRemoteDescription succeeded")
				},
				function(e) {
					r.
				default.info("setRemoteDescription failed: " + e.name)
				})) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (n = {
					sdp: o.sdp,
					type: "offer"
				},
				t.peerConnection.setRemoteDescription(new i(n),
				function() {
					r.
				default.debug("setRemoteDescription succeeded")
				},
				function(e) {
					r.
				default.info("setRemoteDescription failed: " + e.name)
				}), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
			};
			var a = {
				id: "",
				type: "",
				mediaType: "opus",
				googCodecName: "opus",
				aecDivergentFilterFraction: "0",
				audioInputLevel: "0",
				bytesSent: "0",
				packetsSent: "0",
				googEchoCancellationReturnLoss: "0",
				googEchoCancellationReturnLossEnhancement: "0"
			},
			s = {
				id: "",
				type: "",
				mediaType: "",
				googCodecName: "h264" === e.codec ? "H264": "VP8",
				bytesSent: "0",
				packetsLost: "0",
				packetsSent: "0",
				googAdaptationChanges: "0",
				googAvgEncodeMs: "0",
				googEncodeUsagePercent: "0",
				googFirsReceived: "0",
				googFrameHeightSent: "0",
				googFrameHeightInput: "0",
				googFrameRateInput: "0",
				googFrameRateSent: "0",
				googFrameWidthSent: "0",
				googFrameWidthInput: "0",
				googNacksReceived: "0",
				googPlisReceived: "0",
				googRtt: "0"
			},
			d = {
				id: "",
				type: "",
				mediaType: "",
				audioOutputLevel: "0",
				bytesReceived: "0",
				packetsLost: "0",
				packetsReceived: "0",
				googAccelerateRate: "0",
				googCurrentDelayMs: "0",
				googDecodingCNG: "0",
				googDecodingCTN: "0",
				googDecodingCTSG: "0",
				googDecodingNormal: "0",
				googDecodingPLC: "0",
				googDecodingPLCCNG: "0",
				googExpandRate: "0",
				googJitterBufferMs: "0",
				googJitterReceived: "0",
				googPreemptiveExpandRate: "0",
				googPreferredJitterBufferMs: "0",
				googSecondaryDecodedRate: "0",
				googSpeechExpandRate: "0"
			},
			c = {
				id: "",
				type: "",
				mediaType: "",
				googTargetDelayMs: "0",
				packetsLost: "0",
				googDecodeMs: "0",
				googMaxDecodeMs: "0",
				googRenderDelayMs: "0",
				googFrameWidthReceived: "0",
				googFrameHeightReceived: "0",
				googFrameRateReceived: "0",
				googFrameRateDecoded: "0",
				googFrameRateOutput: "0",
				googJitterBufferMs: "0",
				googCurrentDelayMs: "0",
				googMinPlayoutDelayMs: "0",
				googNacksSent: "0",
				googPlisSent: "0",
				googFirsSent: "0",
				bytesReceived: "0",
				packetsReceived: "0",
				googFramesDecoded: "0"
			},
			u = 0;
			t.getVideoRelatedStats = function(e) {
				t.peerConnection.getStats().then(function(i) {
					Object.keys(i).forEach(function(n) {
						var r = i[n];
						if (t.isSubscriber) {
							if ("inboundrtp" === r.type && "video" === r.mediaType) {
								if (!t.lastReport) return void(t.lastReport = r);
								e && e({
									browser: "firefox",
									mediaType: "video",
									peerId: t.uid,
									isVideoMute: t.isVideoMute,
									frameRateReceived: r.framerateMean + "",
									frameRateDecoded: r.framesDecoded - t.lastReport.framesDecoded + ""
								}),
								t.lastReport = r
							}
						} else if ("outboundrtp" === r.type && "video" === r.mediaType) {
							if (!t.lastReport) return void(t.lastReport = r);
							e && e({
								mediaType: "video",
								isVideoMute: t.isVideoMute,
								frameRateInput: r.framerateMean + "",
								frameRateSent: r.framesEncoded - t.lastReport.framesEncoded + ""
							}),
							t.lastReport = r
						}
					})
				})
			},
			t.getStatsRate = function(e) {
				t.getStats(function(t) {
					t.forEach(function(e) {
						"inboundrtp" === e.type && "video" === e.mediaType && e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - u) / 3).toString(), u = e.googFramesDecoded)
					}),
					e(t)
				})
			},
			t.getStats = function(e) {
				t.peerConnection.getStats().then(function(i) {
					var n = [];
					Object.keys(i).forEach(function(e) {
						var t = i[e];
						n.push(t),
						"outboundrtp" === t.type && "video" === t.mediaType && (s.id = t.id, s.type = t.type, s.mediaType = t.mediaType, s.bytesSent = t.bytesSent ? t.bytesSent + "": "0", s.packetsSent = t.packetsSent ? t.packetsSent + "": "0", s.googPlisReceived = t.pliCount ? t.pliCount + "": "0", s.googNacksReceived = t.nackCount ? t.nackCount + "": "0", s.googFirsReceived = t.firCount ? t.firCount + "": "0", s.googFrameRateSent = t.framerateMean ? t.framerateMean + "": "0"),
						"outboundrtp" === t.type && "audio" === t.mediaType && (a.id = t.id, a.type = t.type, a.mediaType = t.mediaType, a.bytesSent = t.bytesSent ? t.bytesSent + "": "0", a.packetsSent = t.packetsSent ? t.packetsSent + "": "0"),
						"inboundrtp" !== t.type || "audio" !== t.mediaType || t.isRemote || (d.id = t.id, d.type = t.type, d.mediaType = t.mediaType, d.bytesReceived = t.bytesReceived ? t.bytesReceived + "": "0", d.packetsLost = t.packetsLost ? t.packetsLost + "": "0", d.packetsReceived = t.packetsReceived ? t.packetsReceived + "": "0", d.googJitterReceived = t.jitter ? t.jitter + "": "0"),
						"inboundrtp" !== t.type || "video" !== t.mediaType || t.isRemote || (c.id = t.id, c.type = t.type, c.mediaType = t.mediaType, c.bytesReceived = t.bytesReceived ? t.bytesReceived + "": "0", c.googFrameRateReceived = t.framerateMean ? t.framerateMean + "": "0", c.googFramesDecoded = t.framesDecoded ? t.framesDecoded + "": "0", c.packetsLost = t.packetsLost ? t.packetsLost + "": "0", c.packetsReceived = t.packetsReceived ? t.packetsReceived + "": "0", c.googJitterBufferMs = t.jitter ? t.jitter + "": "0", c.googNacksSent = t.nackCount ? t.nackCount + "": "0", c.googPlisSent = t.pliCount ? t.pliCount + "": "0", c.googFirsSent = t.firCount ? t.firCount + "": "0"),
						-1 !== t.id.indexOf("outbound_rtcp_video") && (s.packetsLost = t.packetsLost ? t.packetsLost + "": "0")
					});
					var r = [s, a, d, c];
					r.push({
						id: "time",
						startTime: t.connectedTime,
						timestamp: new Date
					}),
					e(r, n)
				},
				function(e) {
					r.
				default.error(e)
				})
			},
			t.addStream = function(e) {
				n = !0,
				t.peerConnection.addStream(e),
				t.markActionNeeded()
			},
			t.removeStream = function() {
				t.markActionNeeded()
			},
			t.close = function() {
				t.state = "closed",
				t.peerConnection.close()
			},
			t.markActionNeeded = function() {
				t.actionNeeded = !0,
				t.doLater(function() {
					t.onstablestate()
				})
			},
			t.doLater = function(e) {
				window.setTimeout(e, 1)
			},
			t.onstablestate = function() {
				if (t.actionNeeded) {
					if ("new" === t.state || "established" === t.state) {
						n && (t.mediaConstraints = void 0),
						function() {
							t.peerConnection.createOffer(function(e) {
								if (e.sdp = l(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
								t.isMLineReverseInSDP = t.checkMLineReverseInSDP(e.sdp),
								t.state = "preparing-offer",
								void t.markActionNeeded();
								r.
							default.debug("Not sending a new offer")
							},
							function(e) {
								r.
							default.debug("Ups! create offer failed ", e)
							},
							t.mediaConstraints)
						} ()
					} else if ("preparing-offer" === t.state) {
						if (t.moreIceComing) return;
						t.prevOffer = t.peerConnection.localDescription.sdp,
						t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),
						t.sendMessage("OFFER", t.prevOffer),
						t.state = "offer-sent"
					} else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
						if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) return void t.markActionNeeded();
						var i = new Date;
						r.
					default.debug(i.getTime() + ": Starting ICE in responder"),
						t.iceStarted = !0
					},
					function() {
						r.
					default.debug("Ups! Something went wrong")
					});
					else if ("offer-received-preparing-answer" === t.state) {
						if (t.moreIceComing) return;
						var e = t.peerConnection.localDescription.sdp;
						t.sendMessage("ANSWER", e),
						t.state = "established"
					} else t.error("Dazed and confused in state " + t.state + ", stopping here");
					t.actionNeeded = !1
				}
			},
			t.sendOK = function() {
				t.sendMessage("OK")
			},
			t.sendMessage = function(e, i) {
				var n = {};
				n.messageType = e,
				n.sdp = i,
				"OFFER" === e ? (n.offererSessionId = t.sessionId, n.answererSessionId = t.otherSessionId, n.seq = t.sequenceNumber += 1, n.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (n.offererSessionId = t.incomingMessage.offererSessionId, n.answererSessionId = t.sessionId, n.seq = t.incomingMessage.seq),
				t.onsignalingmessage(JSON.stringify(n))
			},
			t.error = function(e) {
				throw "Error in RoapOnJsep: " + e
			},
			t.sessionId = t.roapSessionId += 1,
			t.sequenceNumber = 0,
			t.actionNeeded = !1,
			t.iceStarted = !1,
			t.moreIceComing = !0,
			t.iceCandidateCount = 0,
			t.onsignalingmessage = e.callback,
			t.peerConnection.ontrack = function(e) {
				t.onaddstream && t.onaddstream(e, "ontrack")
			},
			t.peerConnection.onremovestream = function(e) {
				t.onremovestream && t.onremovestream(e)
			},
			t.peerConnection.oniceconnectionstatechange = function(e) {
				"connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date),
				t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
			};
			var l = function(t) {
				if (e.video && e.maxVideoBW) {
					var i = t.match(/m=video.*\r\n/);
					if (null == i && (i = t.match(/m=video.*\n/)), i && i.length > 0) {
						var n = i[0] + "b=TIAS:" + 1e3 * e.maxVideoBW + "\r\n";
						t = t.replace(i[0], n)
					}
				}
				if (e.audio && e.maxAudioBW) {
					var i = t.match(/m=audio.*\r\n/);
					if (null == i && (i = t.match(/m=audio.*\n/)), i && i.length > 0) {
						var n = i[0] + "b=TIAS:" + 1e3 * e.maxAudioBW + "\r\n";
						t = t.replace(i[0], n)
					}
				}
				return t
			};
			return t.onaddstream = null,
			t.onremovestream = null,
			t.state = "new",
			t.markActionNeeded(),
			t
		};
		t.
	default = a
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function(e, t, i) {
			var n = {};
			return n.callback = t,
			n.config = e,
			n.error = i,
			n.selectSource = function(e, t, i) {
				var n = document.createElement("div");
				n.innerText = "share screen",
				n.setAttribute("style", "text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;");
				var r = document.createElement("div");
				r.setAttribute("style", "width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;");
				var o = document.createElement("div");
				o.innerText = "Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you'd like to share.",
				o.setAttribute("style", "height: 12%;");
				var a = document.createElement("div");
				a.setAttribute("style", "width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;");
				var s = document.createElement("div");
				s.setAttribute("style", "text-align: right; padding: 16px 0;");
				var d = document.createElement("button");
				d.innerHTML = "cancel",
				d.setAttribute("style", "width: 85px;"),
				d.onclick = function() {
					document.body.removeChild(c),
					i && i("NotAllowedError")
				},
				s.appendChild(d),
				r.appendChild(o),
				r.appendChild(a),
				r.appendChild(s);
				var c = document.createElement("div");
				c.setAttribute("style", "position: absolute; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);"),
				c.appendChild(n),
				c.appendChild(r),
				document.body.appendChild(c),
				e.map(function(e) {
					if (e.id) {
						var i = document.createElement("div");
						i.setAttribute("style", "width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;"),
						i.innerHTML = '<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src=' + e.thumbnail.toDataURL() + ' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + e.name + "</span>",
						i.onclick = function() {
							document.body.removeChild(c),
							t && t(e.id)
						},
						a.appendChild(i)
					}
				})
			},
			n.getShareScreenStream = function(e) {
				var t = n.config.attributes.width,
				i = n.config.attributes.height,
				r = n.config.attributes.maxFr,
				o = n.config.attributes.minFr,
				a = {
					audio: !1,
					video: {
						mandatory: {
							chromeMediaSource: "desktop",
							chromeMediaSourceId: e,
							maxHeight: i,
							maxWidth: t,
							maxFrameRate: r,
							minFrameRate: o
						}
					}
				};
				navigator.webkitGetUserMedia(a, n.callback, n.error)
			},
			n.shareScreen = function(e) {
				try {
					var t = window.require("electron_share_screen_ui")
				} catch(e) {}
				t ? t(function(e) {
					n.getShareScreenStream(e)
				},
				n.error) : e.desktopCapturer.getSources({
					types: ["window", "screen"]
				},
				function(e, t) {
					if (e) throw e;
					n.selectSource(t,
					function(e) {
						n.getShareScreenStream(e)
					},
					n.error)
				})
			},
			n
		};
		t.
	default = n
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.subscribeStatsFilter = t.publishStatsFilter = t.setStat = void 0;
		var n = i(0),
		r = (function(e) {
			e && e.__esModule
		} (n),
		function(e, t, i) {
			if (["accessDelay", "audioSendBytes", "audioSendPackets", "videoSendBytes", "videoSendPackets", "videoSendPacketsLost", "videoSendFrameRate", "audioSendPacketsLost", "videoSendResolutionWidth", "videoSendResolutionHeight", "audioReceiveBytes", "audioReceivePackets", "audioReceivePacketsLost", "videoReceiveBytes", "videoReceivePackets", "videoReceivePacketsLost", "videoReceiveFrameRate", "videoReceiveDecodeFrameRate", "videoReceiveResolutionWidth", "videoReceiveResolutionHeight", "endToEndDelay", "videoReceiveDelay", "audioReceiveDelay"].indexOf(t) > -1 && (i || "number" == typeof i)) return e[t] = "" + i
		}),
		o = function(e) {
			var t = {};
			return e.forEach(function(e) {
				e.id && ( - 1 === e.id.indexOf("send") && -1 === e.id.indexOf("outbound_rtp") && -1 === e.id.indexOf("OutboundRTP") || ("audio" === e.mediaType ? (r(t, "audioSendBytes", e.bytesSent), r(t, "audioSendPackets", e.packetsSent), r(t, "audioSendPacketsLost", e.packetsLost)) : (r(t, "videoSendBytes", e.bytesSent), r(t, "videoSendPackets", e.packetsSent), r(t, "videoSendPacketsLost", e.packetsLost), r(t, "videoSendFrameRate", e.googFrameRateSent), r(t, "videoSendResolutionWidth", e.googFrameWidthSent), r(t, "videoSendResolutionHeight", e.googFrameHeightSent))))
			}),
			t
		},
		a = function(e) {
			var t = {};
			return e.forEach(function(e) {
				e.id && ( - 1 === e.id.indexOf("recv") && -1 === e.id.indexOf("inbound_rtp") && -1 === e.id.indexOf("InboundRTP") || ("audio" === e.mediaType ? (r(t, "audioReceiveBytes", e.bytesReceived), r(t, "audioReceivePackets", e.packetsReceived), r(t, "audioReceivePacketsLost", e.packetsLost)) : (r(t, "videoReceiveBytes", e.bytesReceived), r(t, "videoReceivePacketsLost", e.packetsLost), r(t, "videoReceivePackets", e.packetsReceived), r(t, "videoReceiveFrameRate", e.googFrameRateReceived), r(t, "videoReceiveDecodeFrameRate", e.googFrameRateDecoded), r(t, "videoReceiveResolutionWidth", e.googFrameWidthReceived), r(t, "videoReceiveResolutionHeight", e.googFrameHeightReceived))))
			}),
			t
		};
		t.setStat = r,
		t.publishStatsFilter = o,
		t.subscribeStatsFilter = a
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.LiveTranscoding = t.TranscodingUser = t.createLiveClient = t.createRtcClient = t.createClient = void 0;
		var r = i(31),
		o = n(r),
		a = i(0),
		s = n(a),
		d = i(5),
		c = n(d),
		u = i(7),
		l = i(14),
		p = i(2),
		f = i(6),
		m = i(35),
		g = i(9),
		v = i(1),
		_ = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t.
		default = e,
			t
		} (v),
		S = i(4),
		E = i(12),
		h = function(e) {
			var t = {};
			t.key = void 0,
			t.highStream = null,
			t.lowStream = null,
			t.lowStreamParameter = null,
			t.isDualStream = !1,
			t.highStreamState = 2,
			t.lowStreamState = 2,
			t.proxyServer = null,
			t.turnServer = {};
			var e = Object.assign({},
			e);
			return t.aespassword = null,
			t.aesmode = E.ENCRYPTION_MODE_NONE,
			t.hasPublished = !1,
			t.renewToken = function(e, i, n) {
				t.gatewayClient || (s.
			default.error("renewToken Failed. GatewayClient not Exist"), (0, u.safeCall)(n, c.
			default.INVALID_OPERATION)),
				t.key ? (t.key = e, t.gatewayClient.renewToken(e, i, n)) : (s.
			default.error("renewToken should not be called before user join"), (0, u.safeCall)(n, c.
			default.INVALID_OPERATION))
			},
			t.setLowStreamParameter = function(e) {
				t.lowStreamParameter = e
			},
			t._getVideoCameraIdByLabel = function(e, t, i) { (0, g.getDevices)(function(n) {
					var r = !0,
					o = !1,
					a = void 0;
					try {
						for (var s, d = n[Symbol.iterator](); ! (r = (s = d.next()).done); r = !0) {
							var u = s.value;
							if (u.label === e && "videoinput" === u.kind) return t && t(u.deviceId)
						}
					} catch(e) {
						o = !0,
						a = e
					} finally {
						try { ! r && d.
							return && d.
							return ()
						} finally {
							if (o) throw a
						}
					}
					return i && i(c.
				default.NOT_FIND_DEVICE_BY_LABEL)
				},
				i)
			},
			t.init = function(t, i, n) {
				if ("string" != typeof t) throw new Error("Param appId should be string");
				if ((0, f.isChromeKernel)() && (0, f.getChromeKernelVersion)() <= 48) return void(n ? n(c.
			default.BAD_ENVIRONMENT):
				(0, u.popBanTip)());
				s.
			default.info("Initializing AgoraRTC client, appId: " + t + "."),
				e.appId = t,
				e.sessionId = (0, u.generateSessionId)(),
				i && i()
			},
			t.setTurnServer = function(e, i, n) {
				var r = e.turnServerURL,
				o = e.username,
				a = e.password,
				d = e.udpport,
				c = e.forceturn,
				u = e.tcpport;
				if (!r) throw new Error("Do not set the turnServerURL parameter as empty");
				if (!o) throw new Error("Do not set the username parameter as empty");
				if (!a) throw new Error("Do not set the password parameter as empty");
				if (!d) throw new Error("Do not set the udpport parameter as empty");
				t.turnServer.url = r,
				t.turnServer.udpport = d,
				t.turnServer.username = o,
				t.turnServer.credential = a,
				t.turnServer.forceturn = c || !1,
				u && (t.turnServer.tcpport = u, s.
			default.info("Set turnserver tcpurl." + t.turnServer.url + ":" + t.turnServer.tcpport)),
				s.
			default.info("Set turnserver udpurl." + t.turnServer.url + ":" + t.turnServer.udpport + ",username:" + t.turnServer.uername + ",password:" + t.turnServer.credential)
			},
			t.setProxyServer = function(e) {
				if (!e) throw new Error("Do not set the proxyServer parameter as empty");
				t.proxyServer = e,
				p.report.setProxyServer(e)
			},
			t.setEncryptionSecret = function(e) {
				if (!e || "string" != typeof e) throw new Error("Invalid secret");
				t.aespassword = e
			},
			t.setEncryptionMode = function(e) {
				if ("string" != typeof e) throw new Error("Invalid encryptionMode");
				E.ENCRYPTION_MODES.includes(e) || (e = E.ENCRYPTION_MODE_NONE),
				t.aesmode = e
			},
			t.configPublisher = function(e) {
				t.gatewayClient.configPublisher(e)
			},
			t.enableDualStream = function(i, n) {
				return "iOS" === (0, f.getBrowserOS)() ? (p.report.streamSwitch(e.sessionId, {
					lts: (new Date).getTime(),
					isdual: !0,
					succ: !1
				}), n && n(c.
			default.IOS_NOT_SUPPORT)):
				(0, f.isWeChatBrowser)() ? (p.report.streamSwitch(e.sessionId, {
					lts: (new Date).getTime(),
					isdual: !0,
					succ: !1
				}), n && n(c.
			default.WECHAT_NOT_SUPPORT)):
				(p.report.streamSwitch(e.sessionId, {
					lts: (new Date).getTime(),
					isdual: !0,
					succ: !0
				}), t.isDualStream = !0, void(0 === t.highStreamState ? t._publishLowStream(i,
				function(e) {
					s.
				default.warning(e),
					n && n(c.
				default.ENABLE_DUALSTREAM_FAILED)
				}):
				1 === t.highStreamState ? n && n(c.
			default.STILL_ON_PUBLISHING):
				i && i()))
			},
			t.disableDualStream = function(i, n) {
				p.report.streamSwitch(e.sessionId, {
					lts: (new Date).getTime(),
					isdual: !1,
					succ: !0
				}),
				t.isDualStream = !1,
				0 === t.highStreamState ? t._unpublishLowStream(i,
				function(e) {
					s.
				default.warning(e),
					n && n(c.
				default.DISABLE_DUALSTREAM_FAILED)
				}):
				1 === t.highStreamState ? n && n(c.
			default.STILL_ON_PUBLISHING):
				i && i()
			},
			t._createLowStream = function(e, i) {
				if (!t.highStream || !t.highStream.stream) return void(i && i(c.
			default.HIGH_STREAM_NOT_VIDEO_TRACE));
				var n = Object.assign({},
				t.highStream.params);
				if (n.streamID += 1, n.audio = !1, !n.video) return void(i && i(c.
			default.HIGH_STREAM_NOT_VIDEO_TRACE));
				var r = t.highStream.stream.getVideoTracks()[0];
				if (!r) return void(i && i(c.
			default.HIGH_STREAM_NOT_VIDEO_TRACE));
				t._getVideoCameraIdByLabel(r.label,
				function(o) {
					n.cameraId = o;
					var a = new g.Stream(n);
					if (a.streamId = t.highStream.getId() + 1, t.lowStreamParameter) {
						var d = Object.assign({},
						t.lowStreamParameter);
						if (!d.width || !d.height) {
							var c = (0, m.simMap)(t.highStream.profile),
							u = _.SUPPORT_RESOLUTION_LIST[c[0]];
							d.width = u[0],
							d.height = u[1]
						}
						if (d.framerate = d.framerate || 5, d.bitrate = d.bitrate || 50, (0, f.isSafari)() || (0, f.isOpera)()) {
							s.
						default.debug("Shimming lowStreamParameter");
							var u = _.SUPPORT_RESOLUTION_LIST[t.highStream.profile];
							d.width = u[0],
							d.height = u[1]
						}
						a.setVideoProfileCustomPlus(d)
					} else a.setVideoProfileCustom((0, m.simMap)(t.highStream.profile));
					a.init(function() {
						t.highStream.lowStream = a,
						r.enabled || a.disableVideo(),
						e && e(a)
					},
					i)
				},
				i)
			},
			t._getLowStream = function(e, i) {
				t.lowStream ? e(t.lowStream) : t._createLowStream(function(i) {
					t.lowStream = i,
					e(t.lowStream)
				},
				i)
			},
			t._publishLowStream = function(e, i) {
				return 2 !== t.lowStreamState ? i && i(c.
			default.LOW_STREAM_ALREADY_PUBLISHED):
				t.highStream && t.highStream.hasScreen() ? i && i(c.
			default.SHARING_SCREEN_NOT_SUPPORT):
				void t._getLowStream(function(n) {
					t.lowStreamState = 1,
					t.gatewayClient.publish(n,
					function() {
						t.lowStreamState = 0,
						e && e()
					},
					function(e) {
						s.
					default.debug("publish low stream failed"),
						i && i(e)
					})
				},
				i)
			},
			t._unpublishLowStream = function(e, i) {
				if (0 !== t.lowStreamState) return i && i(c.
			default.LOW_STREAM_NOT_YET_PUBLISHED);
				t.lowStream && (t.gatewayClient.unpublish(t.lowStream,
				function() {},
				function(e) {
					s.
				default.debug("unpublish low stream failed"),
					i && i(e)
				}), t.lowStream.close(), t.lowStream = null, t.lowStreamState = 2, e && e())
			},
			t.join = function(i, n, r, a, d) {
				if (i && "string" != typeof i) return s.
			default.warning("Param channelKey should be string"),
				d && d(c.
			default.INVALID_PARAMETER);
				if ("string" != typeof n) return s.
			default.warning("Param channel should be string"),
				d && d(c.
			default.INVALID_PARAMETER);
				if (r && ("number" != typeof r || !(0, u.is32Uint)(r))) return s.
			default.warning("Param uid should be number"),
				d && d(c.
			default.INVALID_PARAMETER);
				t.highStream = null,
				t.lowStream = null,
				t.lowStreamParameter = null,
				t.isDualStream = !1,
				t.highStreamState = 2,
				t.lowStreamState = 2;
				var f = {
					appId: e.appId,
					sid: e.sessionId,
					cname: n,
					uid: r,
					turnServer: t.turnServer,
					proxyServer: t.proxyServer
				};
				if (t.aespassword && t.aesmode !== E.ENCRYPTION_MODE_NONE && Object.assign(f, {
					aespassword: t.aespassword,
					aesmode: t.aesmode
				}), p.report.sessionInit(e.sessionId, {
					lts: (new Date).getTime(),
					cname: n,
					appid: e.appId,
					mode: e.mode,
					succ: !0
				}), t.onSuccess = a, t.onFailure = d, t.channel = n, t.gatewayClient.state !== o.
			default.DISCONNECTED) return s.
			default.error("Client already in connecting/connected state"),
				d && d(c.
			default.INVALID_OPERATION),
				void p.report.joinGateway(f.sid, {
					lts: Date.now(),
					succ: !1,
					ec: c.
				default.INVALID_OPERATION,
					addr: null
				});
				t.gatewayClient.state = o.
			default.CONNECTING,
				(0, l.getGatewayList)(f,
				function(r) {
					s.
				default.info("Joining channel: " + n),
					t.key = i || e.appId,
					f.cid = r.cid,
					f.uid = r.uid,
					r.uni_lbs_ip && r.uni_lbs_ip[1] && (f.uni_lbs_ip = r.uni_lbs_ip[1]),
					f.gatewayAddr = r.gateway_addr,
					t.joinInfo = f,
					t.gatewayClient.join(f, t.key,
					function(e) {
						s.
					default.info("Join channel " + n + " success, join with uid: " + e + "."),
						t.onSuccess = null,
						a && a(e)
					},
					d)
				},
				d)
			},
			t.renewChannelKey = function(e, i, n) {
				void 0 === t.key ? (s.
			default.error("renewChannelKey should not be called before user join"), (0, u.safeCall)(n, c.
			default.INVALID_OPERATION)):
				(t.key = e, t.gatewayClient.key = e, t.gatewayClient.rejoin(), (0, u.safeCall)(i))
			},
			t.leave = function(e, i) {
				s.
			default.info("Leaving channel"),
				t.gatewayClient.leave(e, i)
			},
			t._publish = function(i, n, r) {
				if (2 !== t.highStreamState) return s.
			default.warning("Can't publish stream when stream already publish", i.getId()),
				r && r(c.
			default.STREAM_ALREADY_PUBLISHED);
				s.
			default.info("Publishing stream, uid: ", i.getId()),
				t.highStream = i,
				t.highStreamState = 1,
				t.highStream.streamId = t.joinInfo.uid,
				t.hasPublished = !1,
				t.gatewayClient.publish(i,
				function() {
					i.sid = e.sessionId,
					t.highStreamState = 0,
					s.
				default.info("Publish success, uid:", i.getId()),
					t.isDualStream ? t._publishLowStream(function() {
						n && n()
					},
					function() {
						n && n()
					}) : n && n()
				},
				r)
			},
			t._unpublish = function(e, i, n) {
				if (0 !== t.highStreamState) return s.
			default.warning("Can't unpublish stream when stream not publish"),
				n && n(c.
			default.STREAM_NOT_YET_PUBLISHED);
				s.
			default.info("Unpublish stream, uid: ", e.getId()),
				t.isDualStream && t.lowStream ? (t._unpublishLowStream(null, n), t.gatewayClient.unpublish(e, null, n), t.highStreamState = 2, s.
			default.info("Unpublish stream success, uid:", e.getId())) : (t.gatewayClient.unpublish(e, null, n), t.highStreamState = 2, s.
			default.info("Unpublish stream success, uid:", e.getId())),
				i && i()
			},
			t.publish = function(e, i) {
				if (2 !== t.highStreamState) return void(i && i(c.
			default.STREAM_ALREADY_PUBLISHED));
				t._publish(e, null, i)
			},
			t.unpublish = function(e, i) {
				if (0 !== t.highStreamState) return void(i && i(c.
			default.STREAM_NOT_YET_PUBLISHED));
				t._unpublish(e, null, i)
			},
			t.subscribe = function(e, i) {
				s.
			default.info("Subscribe stream, uid: ", e.getId()),
				t.gatewayClient.subscribe(e, null, i)
			},
			t.unsubscribe = function(e, i) {
				s.
			default.info("Unsubscribe stream, uid: ", e.getId()),
				t.gatewayClient.unsubscribe(e, null, i)
			},
			t.setRemoteVideoStreamType = function(e, i) {
				t.gatewayClient.setRemoteVideoStreamType(e, i)
			},
			t.setStreamFallbackOption = function(e, i) {
				t.gatewayClient.setStreamFallbackOption(e, i)
			},
			t.startLiveStreaming = function(e, i) {
				t.gatewayClient.startLiveStreaming(e, i)
			},
			t.stopLiveStreaming = function(e) {
				t.gatewayClient.stopLiveStreaming(e)
			},
			t.setLiveTranscoding = function(e) {
				Object.assign(R, e),
				t.gatewayClient.setLiveTranscoding(R)
			},
			t.enableAudioVolumeIndicator = function(e, i) {
				e = e || 2e3,
				i = i || 3,
				t.audioVolumeIndication = t.audioVolumeIndication || {
					enabled: !0
				},
				t.audioVolumeIndication.interval = e,
				t.audioVolumeIndication.smooth = i,
				t.audioVolumeIndication = {
					interval: e,
					smooth: i
				},
				s.
			default.info("enableAudioVolumeIndicator interval " + e + " smooth " + i),
				t.gatewayClient.enableAudioVolumeIndicator(e, i)
			},
			t.gatewayClient = (0, o.
		default)(e),
			t.on = t.gatewayClient.on,
			e && e.turnServer && t.setTurnServer(e.turnServer),
			e && e.proxyServer && t.setProxyServer(e.proxyServer),
			t.on("onMultiIP",
			function(e) {
				t.gatewayClient.closeGateway(),
				t.gatewayClient.socket = void 0,
				t.gatewayClient.hasChangeBGPAddress = !0,
				t.joinInfo.multiIP = e.arg.option,
				t.gatewayClient.state = o.
			default.CONNECTING,
				(0, l.getGatewayList)(t.joinInfo,
				function(e) {
					s.
				default.info("Joining channel: " + t.channel),
					t.joinInfo.cid = e.cid,
					t.joinInfo.uid = e.uid,
					t.joinInfo.uni_lbs_ip = e.uni_lbs_ip,
					t.joinInfo.gatewayAddr = e.gateway_addr,
					t.onSuccess ? t.gatewayClient.join(t.joinInfo, t.key,
					function(e) {
						s.
					default.info("Join channel " + t.channel + " success");
						var i = t.onSuccess;
						t.onSuccess = null,
						t.onFailure = null,
						i(e)
					},
					t.onFailure) : (t.gatewayClient.joinInfo = Object.assign({},
					t.joinInfo), t.gatewayClient.rejoin())
				},
				t.onFailure)
			}),
			t.on("rejoin",
			function() {
				var e = 2 === t.highStreamState ? 2 : 0;
				t.highStream && 0 === e && (s.
			default.info("publish after rejoin"), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream,
				function(e) {
					e && s.
				default.info(e)
				}))
			}),
			t.on("streamPublished",
			function(e) {
				t.hasPublished || (t.hasPublished = !0, t.gatewayClient.dispatchEvent((0, S.StreamEvent)({
					type: "stream-published",
					stream: e.stream
				})))
			}),
			t.on("pubP2PLost",
			function(e) {
				s.
			default.debug("Start reconnect local peerConnection :", t.highStream.getId()),
				t.gatewayClient.dispatchEvent({
					type: "stream-reconnect-start",
					id: t.highStream.getId()
				}),
				1 === t.highStreamState && (t.highStreamState = 0, t.lowStreamState = 0),
				t._unpublish(t.highStream,
				function() {
					t._publish(t.highStream,
					function() {
						s.
					default.debug("Reconnect local peerConnection success:", t.highStream.getId()),
						t.gatewayClient.dispatchEvent({
							type: "stream-reconnect-end",
							id: t.highStream.getId()
						})
					},
					function(e) {
						s.
					default.debug("Reconnect local peerConnection failed:" + e),
						t.gatewayClient.dispatchEvent({
							type: "stream-reconnect-end",
							id: t.highStream.getId()
						})
					})
				},
				function(e) {
					s.
				default.debug("Reconnect local peerConnection failed:" + e),
					t.gatewayClient.dispatchEvent({
						type: "stream-reconnect-end",
						id: t.highStream.getId()
					})
				})
			}),
			t.on("subP2PLost",
			function(e) {
				s.
			default.debug("Start reconnect remote peerConnection :", e.stream.getId()),
				t.gatewayClient.dispatchEvent({
					type: "stream-reconnect-start",
					id: e.stream.getId()
				}),
				t.gatewayClient.unsubscribe(e.stream,
				function() {
					t.gatewayClient.subscribe(e.stream,
					function() {
						s.
					default.debug("Reconnect remote peerConnection success:", e.stream.getId()),
						t.gatewayClient.dispatchEvent({
							type: "stream-reconnect-end",
							id: e.stream.getId()
						})
					},
					function(i) {
						s.
					default.debug("Reconnect remote peerConnection failed:" + i),
						t.gatewayClient.dispatchEvent({
							type: "stream-reconnect-end",
							id: e.stream.getId()
						})
					})
				},
				function(i) {
					s.
				default.debug("Reconnect remote peerConnection failed:" + i),
					t.gatewayClient.dispatchEvent({
						type: "stream-reconnect-end",
						id: e.stream.getId()
					})
				})
			}),
			t
		},
		I = {
			uid: 0,
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			zOrder: 0,
			alpha: 1
		},
		R = {
			width: 640,
			height: 360,
			videoBitrate: 400,
			videoFramerate: 15,
			lowLatency: !1,
			audioSampleRate: E.AUDIO_SAMPLE_RATE_48000,
			audioBitrate: 48,
			audioChannels: 1,
			videoGop: 30,
			videoCodecProfile: E.VIDEO_CODEC_PROFILE_HIGH,
			userCount: 0,
			userConfigExtraInfo: {},
			backgroundColor: 0,
			transcodingUsers: []
		},
		b = function(e) {
			switch (e) {
			case E.CLIENT_MODE_H264_INTEROP:
				return E.CLIENT_CODEC_H264;
			default:
				return E.CLIENT_CODEC_VP8
			}
		},
		y = function(e) {
			return E.CLIENT_MODES.includes(e.mode) ? E.CLIENT_CODECS.includes(e.codec) ? e.mode == E.CLIENT_MODE_H264_INTEROP && e.codec !== E.CLIENT_CODEC_H264 && c.
		default.CLIENT_MODE_CODEC_MISMATCH:
			c.
		default.INVALID_CLIENT_CODEC:
			c.
		default.INVALID_CLIENT_MODE
		},
		A = function(e) {
			switch (e.mode) {
			case E.CLIENT_MODE_INTEROP:
			case E.CLIENT_MODE_H264_INTEROP:
				e.mode = E.CLIENT_MODE_LIVE;
				break;
			case E.CLIENT_MODE_WEBONLY:
				e.mode = E.CLIENT_MODE_RTC
			}
		},
		C = function(e) {
			e = Object.assign({},
			e || {}),
			e.codec || (e.codec = b(e.mode));
			var t = y(e);
			if (t) throw s.
		default.error("Invalid parameter setting MODE : " + e.mode + " CODEC : " + e.codec + " ERROR " + t),
			new Error(t);
			return s.
		default.info("Creating client , MODE : " + e.mode + " CODEC : " + e.codec),
			A(e),
			h(e)
		},
		O = function() {
			return s.
		default.info("Creating client , MODE : rtc"),
			s.
		default.warning("createRtcClient is deprecated."),
			h({
				mode: "rtc"
			})
		},
		T = function(e) {
			var t = "host";
			return e && "audience" === e.role && (t = e.role),
			s.
		default.info("Creating client , MODE : live"),
			s.
		default.warning("createLiveClient is deprecated."),
			h({
				mode: "live",
				role: t
			})
		};
		t.createClient = C,
		t.createRtcClient = O,
		t.createLiveClient = T,
		t.TranscodingUser = I,
		t.LiveTranscoding = R
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		},
		o = i(9),
		a = i(32),
		s = n(a),
		d = i(11),
		c = i(4),
		u = i(0),
		l = n(u),
		p = i(5),
		f = n(p),
		m = i(13),
		g = n(m),
		v = i(14),
		_ = i(1),
		S = i(2),
		E = i(7),
		h = i(6),
		I = i(34),
		R = n(I),
		b = function e(t) {
			var i = !1,
			n = function() {
				return {
					_type: "ping"
				}
			},
			a = function(e) {
				return {
					_type: "signal_stats",
					message: e
				}
			},
			u = function() {
				return {
					_type: "join1",
					message: {
						appId: t.appId,
						key: Y.key,
						channel: Y.joinInfo.cname,
						uid: Y.uid,
						version: _.VERSION,
						browser: navigator.userAgent,
						mode: t.mode,
						codec: t.codec,
						role: t.role,
						config: Y.config
					}
				}
			},
			m = function() {
				return {
					_type: "leave"
				}
			},
			I = function(e) {
				return {
					_type: "control",
					message: e
				}
			},
			b = function(e) {
				var t = e;
				return e.uni_lbs_ip && (t = Object.assign(e, {
					wanip: e.uni_lbs_ip,
					hasChange: Y.hasChangeBGPAddress
				})),
				{
					_type: "token",
					message: t
				}
			},
			A = function(e) {
				return {
					_type: "unpublish",
					message: e
				}
			},
			C = function(e) {
				return {
					_type: "unsubscribe",
					message: e
				}
			},
			O = function(e, t) {
				return {
					_type: "switchVideoStream",
					message: {
						id: e,
						type: t
					}
				}
			},
			T = function(e, t) {
				return {
					_type: "setFallbackOption",
					message: {
						id: e,
						type: t
					}
				}
			},
			N = function(e) {
				return {
					_type: "renew_token",
					message: {
						token: e
					}
				}
			},
			w = function(e) {
				return {
					_type: "publish_related_stats",
					options: e
				}
			},
			D = function(e) {
				return {
					_type: "publish_related_stats_low",
					options: e
				}
			},
			L = function(e) {
				return {
					_type: "subscribe_related_stats",
					options: e
				}
			},
			P = function(e, t, i) {
				return {
					_type: "publish",
					options: e,
					sdp: t,
					p2pid: i
				}
			},
			M = function(e) {
				return {
					_type: "publish_stats",
					options: {
						stats: e
					},
					sdp: null
				}
			},
			k = function(e) {
				return {
					_type: "publish_stats_low",
					options: {
						stats: e
					},
					sdp: null
				}
			},
			V = function(e, t, i) {
				return {
					_type: "subscribe",
					options: e,
					sdp: t,
					p2pid: i
				}
			},
			F = function(e, t) {
				return {
					_type: "subscribe_stats",
					options: {
						id: e,
						stats: t
					},
					sdp: null
				}
			},
			x = function(e, t) {
				return {
					_type: "start_live_streaming",
					message: {
						url: e,
						transcodingEnabled: t
					}
				}
			},
			U = function(e) {
				return {
					_type: "stop_live_streaming",
					message: {
						url: e
					}
				}
			},
			B = function(e) {
				return {
					_type: "set_live_transcoding",
					message: {
						transcoding: e
					}
				}
			},
			j = function() {
				return {
					_type: "traffic_stats"
				}
			},
			H = e.DISCONNECTED,
			W = e.CONNECTING,
			G = e.CONNECTED,
			K = e.DISCONNECTING,
			Y = (0, c.EventDispatcher)(t);
			Y.socket = void 0,
			Y.state = H,
			Y.mode = t.mode,
			Y.role = t.role,
			Y.codec = t.codec,
			Y.config = {},
			Y.timers = {},
			Y.timer_counter = {},
			Y.localStreams = {},
			Y.remoteStreams = {},
			Y.attemps = 1,
			Y.p2p_attemps = 1,
			Y.audioLevel = {},
			Y.activeSpeaker = void 0,
			Y.reconnectMode = "retry",
			Y.rejoinAttempt = 0,
			Y.hasChangeBGPAddress = !1,
			Y.p2ps = new Map,
			Y.firstFrameTimer = new Map,
			Y.liveStreams = new Map,
			Y.remoteStreamsInChannel = new Set;
			var J = g.
		default;
			Y.p2pCounter = (0, E.random)(1e5),
			Y.generateP2PId = function() {
				return++Y.p2pCounter
			},
			Y.remoteVideoStreamTypes = {
				REMOTE_VIDEO_STREAM_HIGH: 0,
				REMOTE_VIDEO_STREAM_LOW: 1,
				REMOTE_VIDEO_STREAM_MEDIUM: 2
			},
			Y.streamFallbackTypes = {
				STREAM_FALLBACK_OPTION_DISABLED: 0,
				STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW: 1,
				STREAM_FALLBACK_OPTION_AUDIO_ONLY: 2
			},
			Y.configPublisher = function(e) {
				Y.config = e
			},
			Y.join = function(e, t, i, r) {
				var o = (new Date).getTime(),
				s = e.uid;
				if (Y.state !== W) return l.
			default.error("GatewayClient.join Failed: state ", Y.state),
				r && r(f.
			default.INVALID_OPERATION),
				void S.report.joinGateway(e.sid, {
					lts: o,
					succ: !1,
					ec: f.
				default.INVALID_OPERATION,
					addr: null
				});
				if (null !== s && void 0 !== s && parseInt(s) !== s) return l.
			default.error("Input uid is invalid"),
				Y.state = H,
				r && r(f.
			default.INVALID_PARAMETER),
				void S.report.joinGateway(e.sid, {
					lts: o,
					succ: !1,
					ec: f.
				default.INVALID_PARAMETER,
					addr: null
				});
				var d = y.register(Y, {
					uid: s,
					cname: e && e.cname
				});
				if (d) return Y.state = H,
				r && r(d),
				void S.report.joinGateway(e.sid, {
					lts: o,
					succ: !1,
					ec: d,
					addr: null
				});
				Y.joinInfo = Object.assign({},
				e),
				Y.uid = s,
				Y.key = t,
				ie(e,
				function(t) {
					Y.state = G,
					l.
				default.debug("Connected to gateway server"),
					Y.pingTimer = setInterval(function() {
						var e = Date.now();
						ne(n(),
						function() {
							var t = Date.now() - e;
							ne(a({
								pingpongElapse: t
							}),
							function() {},
							function(e) {})
						},
						function(e) {})
					},
					3e3),
					ne(u(),
					function(t) {
						if (S.report.joinGateway(e.sid, {
							lts: o,
							succ: !0,
							ec: null,
							vid: t.vid,
							addr: Y.socket.getURL()
						}), Y.rejoinAttempt = 0, i && i(Y.uid), Y.leaveOnConnected) {
							l.
						default.info("Calling Leave() once joined");
							var n = Y.leaveOnConnected;
							Y.leaveOnConnected = null,
							Y.leave(n.onSuccess, n.onFailure)
						}
					},
					function(t) {
						if (l.
					default.error("User join failed [" + t + "]"), R.
					default[t] && Y.rejoinAttempt < 4) {
							if (Y._doWithAction(R.
						default[t], i, r), Y.leaveOnConnected) {
								l.
							default.error("Calling Leave() once joined: Join Failed");
								var n = Y.leaveOnConnected;
								Y.leaveOnConnected = null,
								n.onFailure(f.
							default.JOIN_CHANNEL_FAILED)
							}
						} else r && r(t);
						S.report.joinGateway(e.sid, {
							lts: o,
							succ: !1,
							ec: t,
							addr: Y.socket.getURL()
						})
					})
				},
				function(t) {
					l.
				default.error("User join failed [" + t + "]"),
					r && r(t),
					S.report.joinGateway(e.sid, {
						lts: o,
						succ: !1,
						ec: t,
						addr: Y.socket.getURL()
					})
				}),
				clearInterval(Y.timers.trafficStats),
				Y.timers.trafficStats = setInterval(function() {
					ne(j(),
					function(e) {
						var t = Y.localStreams[s];
						t && (t.traffic_stats = {
							access_delay: e.access_delay
						}),
						e.peer_delay && e.peer_delay.forEach(function(t) {
							var i = Y.remoteStreams[t.peer_uid];
							i && (i.traffic_stats = {
								access_delay: e.access_delay,
								e2e_delay: t.e2e_delay,
								audio_delay: t.audio_delay,
								video_delay: t.video_delay
							})
						})
					})
				},
				3e3),
				Y.resetAudioVolumeIndication()
			},
			Y.leave = function(e, t) {
				switch (Y.state) {
				case H:
					return l.
				default.debug("Client Already in DISCONNECTED status"),
					void J(e);
				case K:
					return l.
				default.error("Client Already in DISCONNECTING status"),
					void J(t, f.
				default.INVALID_OPERATION);
				case W:
					return Y.leaveOnConnected ? (l.
				default.error("Client.leave() already called"), void J(t, f.
				default.INVALID_OPERATION)):
					(l.
				default.debug("Client connecting. Waiting for Client Fully Connected(And leave)"), void(Y.leaveOnConnected = {
						onSuccess: e,
						onFailure: t
					}))
				}
				var i = y.unregister(Y);
				if (i) return void l.
			default.error(i);
				Y.state = K,
				clearInterval(Y.pingTimer);
				for (var n in Y.timers) Y.timers.hasOwnProperty(n) && clearInterval(Y.timers[n]);
				ne(m(),
				function(t) {
					Y.socket.close(),
					Y.socket = void 0,
					l.
				default.info("Leave channel success"),
					Y.state = H,
					e && e(t)
				},
				function(e) {
					l.
				default.error("Leave Channel Failed", e),
					Y.state = G,
					t && t(e)
				});
				for (var n in Y.localStreams) if (Y.localStreams.hasOwnProperty(n)) {
					var r = Y.localStreams[n];
					delete Y.localStreams[n],
					void 0 !== r.pc && (r.pc.close(), r.pc = void 0)
				}
				ae()
			},
			Y.publish = function(e, t, i) {
				var n = (new Date).getTime(),
				o = !1;
				if (e.publishLTS = n, "object" !== (void 0 === e ? "undefined": r(e)) || null === e) return l.
			default.error("Invalid local stream"),
				i && i(f.
			default.INVALID_LOCAL_STREAM),
				void S.report.publish(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					ec: f.
				default.INVALID_LOCAL_STREAM
				});
				if (null === e.stream && void 0 === e.url) return l.
			default.error("Invalid local media stream"),
				i && i(f.
			default.INVALID_LOCAL_STREAM),
				void S.report.publish(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					ec: f.
				default.INVALID_LOCAL_STREAM
				});
				if (Y.state !== G) return l.
			default.error("User is not in the session"),
				i && i(f.
			default.INVALID_OPERATION),
				void S.report.publish(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					ec: f.
				default.INVALID_OPERATION
				});
				var a = e.getAttributes() || {};
				if (e.local && void 0 === Y.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen())) {
					var s = Y.generateP2PId();
					if (Y.p2ps.set(s, e), e.p2pId = s, void 0 !== e.url) re(P({
						state: "url",
						audio: e.hasAudio(),
						video: e.hasVideo(),
						attributes: e.getAttributes(),
						mode: Y.mode
					},
					e.url),
					function(t, i) {
						"success" === t ? (e.setUserId(i), Y.localStreams[i] = e, e.onClose = function() {
							Y.unpublish(e)
						}) : l.
					default.error("Publish local stream failed", t)
					});
					else {
						Y.localStreams[e.getId()] = e,
						e.pc = (0, d.Connection)({
							callback: function(r) {
								l.
							default.debug("SDP exchange in publish : send offer --  ", JSON.parse(r)),
								re(P({
									state: "offer",
									id: e.getId(),
									audio: e.hasAudio(),
									video: e.hasVideo() || e.hasScreen(),
									attributes: e.getAttributes(),
									dtx: e.DTX,
									hq: e.highQuality,
									stereo: e.stereo,
									speech: e.speech,
									mode: Y.mode,
									codec: Y.codec,
									p2pid: s,
									turnip: Y.joinInfo.turnServer.url,
									turnport: Number(Y.joinInfo.turnServer.udpport),
									turnusername: Y.joinInfo.turnServer.username,
									turnpassword: Y.joinInfo.turnServer.credential
								},
								r),
								function(a, d) {
									if ("error" === a) return l.
								default.error("Publish local stream failed"),
									i && i(f.
								default.PUBLISH_STREAM_FAILED),
									void S.report.publish(Y.joinInfo.sid, {
										lts: n,
										succ: !1,
										localSDP: r,
										ec: f.
									default.PUBLISH_STREAM_FAILED
									});
									e.pc.onsignalingmessage = function(t) {
										e.pc.onsignalingmessage = function() {},
										re(P({
											state: "ok",
											id: e.getId(),
											audio: e.hasAudio(),
											video: e.hasVideo(),
											screen: e.hasScreen(),
											attributes: e.getAttributes(),
											mode: Y.mode
										},
										t)),
										e.setUserId(d.id),
										l.
									default.info("Local stream published with uid", d.id),
										e.onClose = function() {
											Y.unpublish(e)
										},
										e.unmuteAudio = function() {
											ne(I({
												action: "audio-out-on",
												streamId: e.getId()
											}),
											function() {},
											function() {})
										},
										e.unmuteVideo = function() {
											ne(I({
												action: "video-out-on",
												streamId: e.getId()
											}),
											function() {},
											function() {})
										},
										e.muteAudio = function() {
											ne(I({
												action: "audio-out-off",
												streamId: e.getId()
											}),
											function() {},
											function() {})
										},
										e.muteVideo = function() {
											ne(I({
												action: "video-out-off",
												streamId: e.getId()
											}),
											function() {},
											function() {})
										},
										e.getId() === e.getUserId() && (e.isAudioOn() || e.hasAudio() && (l.
									default.debug("local stream audio mute"), e.muteAudio()), e.isVideoOn() || (e.hasVideo() || e.hasScreen()) && (l.
									default.debug("local stream video mute"), e.muteVideo()))
									},
									e.pc.oniceconnectionstatechange = function(r) {
										if ("failed" === r) {
											if (void 0 != Y.timers[e.getId()] && (clearInterval(Y.timers[e.getId()]), clearInterval(Y.timers[e.getId()] + "_RelatedStats")), l.
										default.error("Publisher connection is lost -- streamId: " + e.getId() + " p2pId: " + s), Y.p2ps.delete(s), l.
										default.debug("publish p2p failed: ", Y.p2ps), !o) return o = !0,
											S.report.publish(Y.joinInfo.sid, {
												lts: n,
												succ: !1,
												ec: f.
											default.PEERCONNECTION_FAILED
											}),
											Y.dispatchEvent((0, c.ClientEvent)({
												type: "pubP2PLost",
												stream: e
											})),
											i && i(f.
										default.PEERCONNECTION_FAILED);
											Y.dispatchEvent((0, c.ClientEvent)({
												type: "pubP2PLost",
												stream: e
											}))
										} else if ("connected" === r && (l.
									default.debug("publish p2p connected: ", Y.p2ps), !o)) return o = !0,
										S.report.publish(Y.joinInfo.sid, {
											lts: n,
											succ: !0,
											ec: null
										}),
										t && t()
									},
									l.
								default.debug("SDP exchange in publish : receive answer --  ", JSON.parse(a)),
									e.pc.processSignalingMessage(a)
								})
							},
							audio: e.hasAudio(),
							video: e.hasVideo(),
							screen: e.hasScreen(),
							isSubscriber: !1,
							stunServerUrl: Y.stunServerUrl,
							turnServer: Y.joinInfo.turnServer,
							maxAudioBW: a.maxAudioBW,
							minVideoBW: a.minVideoBW,
							maxVideoBW: a.maxVideoBW,
							mode: Y.mode,
							codec: Y.codec,
							isVideoMute: !e.videoEnabled,
							maxFrameRate: e.attributes.maxFrameRate
						}),
						e.pc.addStream(e.stream),
						l.
					default.debug("PeerConnection add stream :", e.stream),
						Y.timers[e.getId()] = setInterval(function() {
							e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(t) {
								t.forEach(function(t) {
									t && t.id && (/_recv$/.test(t.id) || /^time$/.test(t.id) || e.getUserId() && ( - 1 === t.id.indexOf("outbound_rtp") && -1 === t.id.indexOf("OutboundRTP") || "video" !== t.mediaType || (t.googFrameWidthSent = e.videoWidth + "", t.googFrameHeightSent = e.videoHeight + ""), e.getId() == e.getUserId() ? ne(M(t), null, null) : ne(k(t), null, null)))
								})
							})
						},
						3e3);
						var u = function() {
							e && e.pc && e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function(t) {
								e.getId() === e.getUserId() ? ne(w(t), null, null) : ne(D(t), null, null)
							})
						};
						u(),
						Y.timers[e.getId() + "_RelatedStats"] = setInterval(u, 1e3)
					}
				}
			},
			Y.unpublish = function(e, t, i) {
				return "object" !== (void 0 === e ? "undefined": r(e)) || null === e ? (l.
			default.error("Invalid local stream"), void J(i, f.
			default.INVALID_LOCAL_STREAM)):
				Y.state !== G ? (l.
			default.error("User not in the session"), void J(i, f.
			default.INVALID_OPERATION)):
				(void 0 != Y.timers[e.getId()] && (clearInterval(Y.timers[e.getId()]), clearInterval(Y.timers[e.getId() + "_RelatedStats"])), void(void 0 !== Y.socket ? e.local && void 0 !== Y.localStreams[e.getId()] ? (delete Y.localStreams[e.getId()], ne(A(e.getUserId())), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e.unmuteAudio = void 0, e.muteAudio = void 0, e.unmuteVideo = void 0, e.muteVideo = void 0, Y.p2ps.delete(e.p2pId), t && t()) : (l.
			default.error("Invalid local stream"), J(i, f.
			default.INVALID_LOCAL_STREAM)):
				(l.
			default.error("User not in the session"), J(i, f.
			default.INVALID_OPERATION))))
			},
			Y.subscribe = function(e, t, i) {
				var n = (new Date).getTime();
				e.subscribeLTS = n;
				var o = !1;
				if ("object" !== (void 0 === e ? "undefined": r(e)) || null === e) return l.
			default.error("Invalid remote stream"),
				i && i(f.
			default.INVALID_REMOTE_STREAM),
				void S.report.subscribe(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					peerid: e.getId() + "",
					ec: f.
				default.INVALID_REMOTE_STREAM
				});
				if (Y.state !== G && (l.
			default.error("User is not in the session"), !o)) return o = !0,
				S.report.subscribe(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					peerid: e.getId() + "",
					ec: f.
				default.INVALID_OPERATION
				}),
				i && i(f.
			default.INVALID_OPERATION);
				if (!e.local && Y.remoteStreams.hasOwnProperty(e.getId())) if (e.hasAudio() || e.hasVideo() || e.hasScreen()) {
					var a = Y.generateP2PId();
					Y.p2ps.set(a, e),
					e.p2pId = a,
					e.pc = (0, d.Connection)({
						callback: function(t) {
							l.
						default.debug("SDP exchange in subscribe : send offer --  ", JSON.parse(t)),
							re(V({
								streamId: e.getId(),
								audio: !0,
								video: !0,
								mode: Y.mode,
								codec: Y.codec,
								p2pid: a,
								turnip: Y.joinInfo.turnServer.url,
								turnport: Number(Y.joinInfo.turnServer.udpport),
								turnusername: Y.joinInfo.turnServer.username,
								turnpassword: Y.joinInfo.turnServer.credential
							},
							t),
							function(t) {
								if ("error" === t) return l.
							default.error("Subscribe remote stream failed, closing stream ", e.getId()),
								e.close(),
								i && i(f.
							default.SUBSCRIBE_STREAM_FAILED),
								void S.report.subscribe(Y.joinInfo.sid, {
									lts: n,
									succ: !1,
									peerid: e.getId() + "",
									ec: f.
								default.SUBSCRIBE_STREAM_FAILED
								});
								l.
							default.debug("SDP exchange in subscribe : receive answer --  ", JSON.parse(t)),
								e.pc.processSignalingMessage(t)
							})
						},
						nop2p: !0,
						audio: !0,
						video: !0,
						screen: e.hasScreen(),
						isSubscriber: !0,
						stunServerUrl: Y.stunServerUrl,
						turnServer: Y.joinInfo.turnServer,
						isVideoMute: !e.videoEnabled,
						uid: e.getId()
					}),
					e.pc.onaddstream = function(t, i) {
						if ("ontrack" === i && "video" === t.track.kind || "onaddstream" === i) {
							if (l.
						default.info("Remote stream subscribed with uid ", e.getId()), Y.remoteStreams[e.getId()].stream = "onaddstream" === i ? t.stream: t.streams[0], Y.remoteStreams[e.getId()].hasVideo()) {
								if ((0, h.isFireFox)()) {
									var n = Y.remoteStreams[e.getId()].stream; (0, E.vsResHack)(n,
									function(t, i) {
										e.videoWidth = t,
										e.videoHeight = i
									},
									function(e) {
										return l.
									default.warning("vsResHack failed:" + e)
									})
								}
							} else Y.remoteStreams[e.getId()].disableVideo();
							var r = (0, c.StreamEvent)({
								type: "stream-subscribed",
								stream: Y.remoteStreams[e.getId()]
							});
							Y.dispatchEvent(r)
						}
						e.unmuteAudio = function() {
							ne(I({
								action: "audio-in-on",
								streamId: e.getId()
							}),
							function() {},
							function() {})
						},
						e.muteAudio = function() {
							ne(I({
								action: "audio-in-off",
								streamId: e.getId()
							}),
							function() {},
							function() {})
						},
						e.unmuteVideo = function() {
							ne(I({
								action: "video-in-on",
								streamId: e.getId()
							}),
							function() {},
							function() {})
						},
						e.muteVideo = function() {
							ne(I({
								action: "video-in-off",
								streamId: e.getId()
							}),
							function() {},
							function() {})
						}
					},
					Y.timers[e.getId()] = setInterval(function() {
						e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(t) {
							t.forEach(function(t) {
								if (t && t.id) {
									if (/_send$/.test(t.id) || /^time$/.test(t.id) || /^bweforvideo$/.test(t.id)) return; - 1 !== t.id.indexOf("inbound_rtp") && "video" === t.mediaType && (t.googFrameWidthReceived = e.videoWidth + "", t.googFrameHeightReceived = e.videoHeight + ""),
									re(F(e.getId(), t), null, null)
								} else;
							})
						})
					},
					3e3),
					Y.timers[e.getId() + "_RelatedStats"] = setInterval(function() {
						e && e.pc && e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function(e) {
							ne(L(e), null, null)
						})
					},
					1e3),
					Y.audioLevel[e.getId()] = 0,
					Y.timers[e.getId() + "audio"] = setInterval(function() {
						Y.hasListeners("active-speaker") && e && e.pc && "established" === e.pc.state && e.pc.getStats && e.pc.getStats(function(t) {
							t.forEach(function(t) {
								if ("audio" === t.mediaType) {
									if (t.audioOutputLevel > 5e3) {
										Y.audioLevel[e.getId()] < 20 && (Y.audioLevel[e.getId()] += 1);
										for (var i in Y.audioLevel) parseInt(i) !== e.getId() && Y.audioLevel[i] > 0 && (Y.audioLevel[i] -= 1)
									}
									var n = Object.keys(Y.audioLevel),
									r = n.sort(function(e, t) {
										return Y.audioLevel[t] - Y.audioLevel[e]
									});
									if (Y.activeSpeaker !== r[0]) {
										var o = (0, c.ClientEvent)({
											type: "active-speaker",
											uid: r[0]
										});
										Y.dispatchEvent(o),
										Y.activeSpeaker = r[0],
										l.
									default.debug("Update active speaker:" + Y.activeSpeaker)
									}
								}
							})
						})
					},
					50),
					e.pc.oniceconnectionstatechange = function(r) {
						if ("failed" === r) void 0 != Y.timers[e.getId()] && (clearInterval(Y.timers[e.getId()]), clearInterval(Y.timers[e.getId()] + "audio")),
						l.
					default.error("Subscriber connection is lost -- streamId: " + e.getId() + " p2pId: " + a),
						l.
					default.debug("subscribe p2p failed: ", Y.p2ps),
						o || (o = !0, i && i(f.
					default.PEERCONNECTION_FAILED), S.report.subscribe(Y.joinInfo.sid, {
							lts: n,
							succ: !1,
							peerid: e.getId() + "",
							ec: f.
						default.PEERCONNECTION_FAILED
						})),
						Y.remoteStreams[e.getId()] && Y.p2ps.has(a) && (Y.p2ps.delete(a), Y.dispatchEvent((0, c.ClientEvent)({
							type: "subP2PLost",
							stream: e
						})));
						else if ("connected" === r && (l.
					default.debug("subscribe p2p connected: ", Y.p2ps), !o)) return o = !0,
						S.report.subscribe(Y.joinInfo.sid, {
							lts: n,
							succ: !0,
							peerid: e.getId() + "",
							ec: null
						}),
						Y.firstFrameTimer.set(e.getId(), setInterval(function() {
							e.pc ? e.pc.getStats(function(t) {
								t.forEach(function(t) { - 1 === t.id.indexOf("recv") && -1 === t.id.indexOf("inbound_rtp") && -1 === t.id.indexOf("InboundRTP") || "video" === t.mediaType && (t.framesDecoded > 0 || t.googFramesDecoded > 0) && (clearInterval(Y.firstFrameTimer.get(e.getId())), Y.firstFrameTimer.delete(e.getId()), S.report.firstRemoteFrame(Y.joinInfo.sid, {
										lts: (new Date).getTime(),
										peerid: e.getId() + "",
										succ: !0,
										width: +t.googFrameWidthReceived,
										height: +t.googFrameHeightReceived
									}))
								})
							}) : (clearInterval(Y.firstFrameTimer.get(e.getId())), Y.firstFrameTimer.delete(e.getId()))
						},
						100)),
						t && t()
					}
				} else l.
			default.error("Invalid remote stream"),
				o || (o = !0, i && i(f.
			default.INVALID_REMOTE_STREAM), S.report.subscribe(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					peerid: e.getId() + "",
					ec: f.
				default.INVALID_REMOTE_STREAM
				}));
				else l.
			default.error("No such remote stream"),
				o || (o = !0, i && i(f.
			default.NO_SUCH_REMOTE_STREAM), S.report.subscribe(Y.joinInfo.sid, {
					lts: n,
					succ: !1,
					peerid: e.getId() + "",
					ec: f.
				default.NO_SUCH_REMOTE_STREAM
				}))
			},
			Y.unsubscribe = function(e, t, i) {
				return "object" !== (void 0 === e ? "undefined": r(e)) || null === e ? (l.
			default.error("Invalid remote stream"), void J(i, f.
			default.INVALID_REMOTE_STREAM)):
				Y.state !== G ? (l.
			default.error("User is not in the session"), void J(i, f.
			default.INVALID_OPERATION)):
				(void 0 != Y.timers[e.getId()] && (clearInterval(Y.timers[e.getId()]), clearInterval(Y.timers[e.getId()] + "audio")), void 0 != Y.audioLevel[e.getId()] && delete Y.audioLevel[e.getId()], void 0 != Y.timer_counter[e.getId()] && delete Y.timer_counter[e.getId()], Y.remoteStreams.hasOwnProperty(e.getId()) ? Y.socket ? e.local ? (l.
			default.error("Invalid remote stream"), void J(i, f.
			default.INVALID_REMOTE_STREAM)):
				(e.close(), void ne(C(e.getId()),
				function(n) {
					if ("error" === n) return l.
				default.error("Unsubscribe remote stream failed", e.getId()),
					void J(i, f.
				default.UNSUBSCRIBE_STREAM_FAILED);
					void 0 !== e.pc && (e.pc.close(), e.pc = void 0),
					e.onClose = void 0,
					e.unmuteAudio = void 0,
					e.muteAudio = void 0,
					e.unmuteVideo = void 0,
					e.muteVideo = void 0,
					Y.p2ps.delete(e.p2pId),
					l.
				default.info("Unsubscribe stream success"),
					t && t()
				},
				i)) : (l.
			default.error("User is not in the session"), void J(i, f.
			default.INVALID_OPERATION)):
				void J(i, f.
			default.NO_SUCH_REMOTE_STREAM))
			},
			Y.setRemoteVideoStreamType = function(e, t) {
				if (l.
			default.debug("Switching remote video stream " + e.getId() + " to " + t), "object" !== (void 0 === e ? "undefined": r(e)) || null === e) return void l.
			default.error("Invalid remote stream");
				if (Y.state !== G) return void l.
			default.error("User is not in the session");
				if (!e.local) {
					switch (t) {
					case Y.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
					case Y.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
					case Y.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
						break;
					default:
						return
					}
					ne(O(e.getId(), t), null, null)
				}
			},
			Y.renewToken = function(e, t, i) {
				e ? Y.key ? Y.state !== G ? (l.
			default.debug("Client is not connected. Trying to rejoin"), Y.key = e, Y.rejoin(), t && t()) : (l.
			default.debug("renewToken from " + Y.key + " to " + e), ne(N(e), t, i)) : (l.
			default.error("Client is previously joined without token"), i && i(f.
			default.INVALID_PARAMETER)):
				(l.
			default.error("Invalid Token " + e), i && i(f.
			default.INVALID_PARAMETER))
			},
			Y.setStreamFallbackOption = function(e, t) {
				if (l.
			default.debug("Set stream fallback option " + e.getId() + " to " + t), "object" !== (void 0 === e ? "undefined": r(e)) || null === e) return void l.
			default.error("Invalid remote stream");
				if (Y.state !== G) return void l.
			default.error("User is not in the session");
				if (!e.local) {
					switch (t) {
					case Y.streamFallbackTypes.STREAM_FALLBACK_OPTION_DISABLED:
					case Y.streamFallbackTypes.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:
					case Y.streamFallbackTypes.STREAM_FALLBACK_OPTION_AUDIO_ONLY:
						break;
					default:
						return
					}
					ne(T(e.getId(), t), null, null)
				}
			},
			Y.startLiveStreaming = function(e, t) {
				if (Y.liveStreams.set(e, t), l.
			default.debug("Start live streaming " + e + " transcodingEnabled " + t), Y.state !== G) return void l.
			default.error("User is not in the session");
				ne(x(e, t), null, null)
			},
			Y.stopLiveStreaming = function(e) {
				if (l.
			default.debug("Stop live streaming " + e), Y.state !== G) return void l.
			default.error("User is not in the session");
				Y.liveStreams.delete(e),
				ne(U(e), null, null)
			},
			Y.setLiveTranscoding = function(e) {
				if ((0, E.isLiveTranscodingValid)(e)) {
					if (Y.transcoding = e, l.
				default.debug("Set live transcoding ", e), Y.state !== G) return void l.
				default.error("User is not in the session");
					ne(B(e), null, null)
				}
			},
			Y.enableAudioVolumeIndicator = function(e, t) {
				Y.audioVolumeIndication = Y.audioVolumeIndication || {
					enabled: !0
				},
				Y.audioVolumeIndication.interval = e,
				Y.audioVolumeIndication.smooth = t,
				Y.resetAudioVolumeIndication()
			},
			Y.resetAudioVolumeIndication = function() {
				if (clearInterval(Y.timers.audioVolumeIndication), clearInterval(Y.timers.audioVolumeSampling), Y.audioVolumeIndication && Y.audioVolumeIndication.enabled && Y.audioVolumeIndication.interval) {
					var e = Math.floor(1e3 * Y.audioVolumeIndication.smooth / 100);
					Y.timers.audioVolumeSampling = setInterval(function() {
						Y.audioVolumeSampling || (Y.audioVolumeSampling = {});
						var t = {};
						for (var i in Y.remoteStreams) {
							var n = Y.remoteStreams[i];
							if (n.stream && n.hasAudio()) {
								var r = n.getAudioLevel();
								r > 0 && r < 1 && (r *= 100);
								var o = Y.audioVolumeSampling[i] || [];
								for (o.push(r); o.length > e;) o.shift();
								t[i] = o
							}
						}
						Y.audioVolumeSampling = t
					},
					100),
					Y.timers.audioVolumeIndication = setInterval(function() {
						var e = [];
						for (var t in Y.remoteStreams) if (Y.audioVolumeSampling && Y.audioVolumeSampling[t]) {
							var i = Y.audioVolumeSampling[t],
							n = 0;
							i.forEach(function(e) {
								n += e
							});
							var r = {
								uid: t,
								level: Math.floor(n / i.length)
							};
							r.level && e.push(r)
						}
						var o = e.sort(function(e, t) {
							return e.level - t.level
						});
						l.
					default.debug("volume-indicator", JSON.stringify(o));
						var a = (0, c.ClientEvent)({
							type: "volume-indicator",
							attr: o
						});
						Y.dispatchEvent(a)
					},
					Y.audioVolumeIndication.interval)
				}
			},
			Y.closeGateway = function() {
				l.
			default.debug("close gateway"),
				Y.state = H,
				Y.socket.close(),
				Z()
			};
			var z = function(e) {
				return 1e3 * Math.min(30, Math.pow(2, e) - 1)
			},
			q = function(e, t) {
				l.
			default.debug("Connect next gateway"),
				Y.state = H,
				Y.socket.close(),
				Z(),
				Y.reconnectMode = "tryNext",
				ee(e, t)
			},
			Q = function(e, t) {
				l.
			default.debug("Reconnect gateway"),
				Y.state = H,
				Y.socket.close(),
				Z(),
				Y.reconnectMode = "retry",
				ee(e, t)
			},
			X = function() {
				l.
			default.debug("quit gateway"),
				Y.state = H,
				Y.socket.close(),
				Z()
			},
			$ = function() {
				l.
			default.debug("Reconnect gateway"),
				Y.state = H,
				Y.socket.close(),
				Z(),
				Y.reconnectMode = "recover",
				ee()
			},
			Z = function() {
				for (var e in Y.timers) Y.timers.hasOwnProperty(e) && clearInterval(Y.timers[e]);
				for (var e in Y.remoteStreams) if (Y.remoteStreams.hasOwnProperty(e)) {
					var t = Y.remoteStreams[e],
					i = (0, c.ClientEvent)({
						type: "stream-removed",
						uid: t.getId(),
						stream: t
					});
					Y.dispatchEvent(i)
				}
				Y.p2ps.clear(),
				ae(),
				oe(),
				clearInterval(Y.pingTimer)
			};
			Y.rejoin = function() {
				Y.socket && (clearInterval(Y.pingTimer), Y.socket.close(), Y.socket = void 0),
				Y.state = W,
				ee()
			};
			var ee = function(e, t) {
				e = e ||
				function(e) {
					l.
				default.info("User " + e + " is re-joined to " + Y.joinInfo.cname),
					Y.dispatchEvent((0, c.ClientEvent)({
						type: "rejoin"
					})),
					Y.liveStreams && Y.liveStreams.size && Y.liveStreams.forEach(function(e, t) {
						e && Y.setLiveTranscoding(Y.transcoding),
						Y.startLiveStreaming(t, e)
					})
				},
				t = t ||
				function(e) {
					l.
				default.error("Re-join to channel failed [" + e + "]"),
					Y.dispatchEvent((0, c.StreamEvent)({
						type: "error",
						reason: e
					}))
				},
				Y.key ? (++Y.rejoinAttempt, Y.join(Y.joinInfo, Y.key, e, t)) : l.
			default.error("Connection recover failed [Invalid channel key]")
			},
			te = function(e) {
				Y.socket = (0, s.
			default)(e, {
					sid: Y.joinInfo.sid
				})
			},
			ie = function(e, t, n) {
				Y.onConnect = t,
				void 0 !== Y.socket ? "retry" === Y.reconnectMode ? (l.
			default.debug("Retry current gateway"), Y.socket.reconnect()) : "tryNext" === Y.reconnectMode ? (l.
			default.debug("Try next gateway"), Y.socket.connectNext()) : "recover" === Y.reconnectMode && (l.
			default.debug("Recover gateway"), l.
			default.debug("Try to reconnect choose server and get gateway list again "), (0, v.getGatewayList)(Y.joinInfo,
				function(e) {
					Y.socket.replaceHost(e.gateway_addr)
				})) : (te(e.gatewayAddr), Y.socket.on("onUplinkStats",
				function(e) {
					Y.localStreams[Y.uid] && (Y.localStreams[Y.uid].uplinkStats = e)
				}), Y.socket.on("connect",
				function() {
					Y.attemps = 1,
					ne(b(e), Y.onConnect, n)
				}), Y.socket.on("recover",
				function() {
					Y.state = W,
					l.
				default.debug("Try to reconnect choose server and get gateway list again "),
					(0, v.getGatewayList)(Y.joinInfo,
					function(e) {
						Y.socket.replaceHost(e.gateway_addr)
					})
				}), Y.socket.on("disconnect",
				function(e) {
					if (Y.state !== H) {
						Y.state = H;
						var t = (0, c.StreamEvent)({
							type: "error",
							reason: f.
						default.SOCKET_DISCONNECTED
						});
						if (Y.dispatchEvent(t), 0 === Y.p2ps.size ? Y.reconnectMode = "tryNext": Y.reconnectMode = "retry", Z(), 1 != i) {
							var n = z(Y.attemps);
							l.
						default.error("Disconnect from server [" + e + "], attempt to recover [#" + Y.attemps + "] after " + n / 1e3 + " seconds");
							setTimeout(function() {
								Y.attemps++,
								Y.state = W,
								ee()
							},
							n)
						}
					}
				}), Y.socket.on("onAddAudioStream",
				function(e) {
					if (l.
				default.info("Newly added audio stream with uid", e.id), Y.remoteStreamsInChannel.has(e.id) || Y.remoteStreamsInChannel.add(e.id), void 0 === Y.remoteStreams[e.id]) {
						var t = (0, o.Stream)({
							streamID: e.id,
							local: !1,
							audio: e.audio,
							video: e.video,
							screen: e.screen,
							attributes: e.attributes
						});
						Y.remoteStreams[e.id] = t;
						var i = (0, c.StreamEvent)({
							type: "stream-added",
							stream: t
						});
						Y.dispatchEvent(i)
					}
				}), Y.socket.on("onAddVideoStream",
				function(e) {
					if (l.
				default.info("Newly added remote stream with uid" + e.id + "."), Y.remoteStreamsInChannel.has(e.id) || Y.remoteStreamsInChannel.add(e.id), void 0 === Y.remoteStreams[e.id]) {
						var t = (0, o.Stream)({
							streamID: e.id,
							local: !1,
							audio: e.audio,
							video: e.video,
							screen: e.screen,
							attributes: e.attributes
						});
						Y.remoteStreams[e.id] = t;
						var i = (0, c.StreamEvent)({
							type: "stream-added",
							stream: t
						});
						Y.dispatchEvent(i)
					} else {
						var n = Y.remoteStreams[e.id];
						if (void 0 !== n.stream) {
							var t = Y.remoteStreams[e.id];
							if (t.video = !0, t.enableVideo(), l.
						default.info("Stream changed: enable video " + e.id), t.isPlaying()) {
								var r = t.player.elementID;
								t.stop(),
								t.play(r)
							}
						} else if (n.p2pId) Y.remoteStreams[e.id].video = !0;
						else {
							var t = (0, o.Stream)({
								streamID: e.id,
								local: !1,
								audio: !0,
								video: !0,
								screen: !1,
								attributes: e.attributes
							});
							Y.remoteStreams[e.id] = t,
							l.
						default.info("Stream changed: modify video " + e.id)
						}
					}
				}), Y.socket.on("onRemoveStream",
				function(e) {
					Y.remoteStreamsInChannel.has(e.id) && Y.remoteStreamsInChannel.delete(e.id);
					var t = Y.remoteStreams[e.id];
					if (!t) return void console.log("ERROR stream ", e.id, " not found onRemoveStream ", e);
					delete Y.remoteStreams[e.id];
					var i = (0, c.StreamEvent)({
						type: "stream-removed",
						stream: t
					});
					Y.dispatchEvent(i),
					t.close(),
					void 0 !== t.pc && (t.pc.close(), t.pc = void 0, Y.p2ps.delete(t.p2pId))
				}), Y.socket.on("onPublishStream",
				function(e) {
					var t = Y.localStreams[e.id],
					i = (0, c.StreamEvent)({
						type: "streamPublished",
						stream: t
					});
					Y.dispatchEvent(i)
				}), Y.socket.on("mute_audio",
				function(e) {
					l.
				default.info("rcv peer mute audio:" + e.peerid);
					var t = (0, c.ClientEvent)({
						type: "mute-audio",
						uid: e.peerid
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("unmute_audio",
				function(e) {
					l.
				default.info("rcv peer unmute audio:" + e.peerid);
					var t = (0, c.ClientEvent)({
						type: "unmute-audio",
						uid: e.peerid
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("mute_video",
				function(e) {
					l.
				default.info("rcv peer mute video:" + e.peerid);
					var t = (0, c.ClientEvent)({
						type: "mute-video",
						uid: e.peerid
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("unmute_video",
				function(e) {
					l.
				default.info("rcv peer unmute video:" + e.peerid);
					var t = (0, c.ClientEvent)({
						type: "unmute-video",
						uid: e.peerid
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("user_banned",
				function(e) {
					l.
				default.info("user banned uid:" + e.id + "error:" + e.errcode);
					var t = (0, c.ClientEvent)({
						type: "client-banned",
						uid: e.id,
						attr: e.errcode
					});
					Y.dispatchEvent(t),
					i = !0,
					leave()
				}), Y.socket.on("stream_fallback",
				function(e) {
					l.
				default.info("stream fallback uid:" + e.id + " peerId:" + e.peerid + " type:" + e.type);
					var t = (0, c.ClientEvent)({
						type: "stream-fallback",
						uid: e.id,
						stream: e.peerid,
						attr: e.type
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("stream_recover",
				function(e) {
					l.
				default.info("stream recover uid:" + e.id + "peerId:" + e.peerid + " type:" + e.type);
					var t = (0, c.ClientEvent)({
						type: "stream-recover",
						uid: e.id,
						stream: e.peerid,
						attr: e.type
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("onP2PLost",
				function(e) {
					if (l.
				default.debug("p2plost:", e, "p2ps:", Y.p2ps), "publish" === e.event) {
						var t = Y.localStreams[e.uid];
						t && S.report.publish(Y.joinInfo.sid, {
							lts: t.publishLTS,
							succ: !1,
							ec: "DTLS failed"
						})
					}
					if ("subscribe" === e.event) {
						var i = Y.remoteStreams[e.uid];
						i && S.report.subscribe(Y.joinInfo.sid, {
							lts: i.subscribeLTS,
							succ: !1,
							peerid: e.uid + "",
							ec: "DTLS failed"
						})
					}
					l.
				default.debug("p2plost:", e.p2pid);
					var n = Y.p2ps.get(e.p2pid);
					n && (Y.p2ps.delete(e.p2pid), n.local ? Y.dispatchEvent((0, c.ClientEvent)({
						type: "pubP2PLost",
						stream: n
					})) : Y.remoteStreams[n.getId()] && Y.dispatchEvent((0, c.ClientEvent)({
						type: "subP2PLost",
						stream: n
					})))
				}), Y.socket.on("onTokenPrivilegeWillExpire",
				function(e) {
					l.
				default.debug("Received Message onTokenPrivilegeWillExpire"),
					Y.dispatchEvent((0, c.ClientEvent)({
						type: "onTokenPrivilegeWillExpire"
					}))
				}), Y.socket.on("onTokenPrivilegeDidExpire",
				function() {
					l.
				default.warning("Received Message onTokenPrivilegeDidExpire, please get new token and join again"),
					Y.dispatchEvent((0, c.ClientEvent)({
						type: "onTokenPrivilegeDidExpire"
					})),
					Y.closeGateway()
				}), Y._doWithAction = function(e, t, i) {
					"tryNext" === e ? q(t, i) : "retry" === e ? Q(t, i) : "quit" === e ? X() : "recover" === e && $()
				},
				Y.socket.on("notification",
				function(e) {
					if (l.
				default.debug("Receive notification: ", e), "ERR_JOIN_BY_MULTI_IP" === p.GatewayErrorCode[e.code]) return Y.dispatchEvent({
						type: "onMultiIP",
						arg: e
					});
					e.detail ? Y._doWithAction(R.
				default[p.GatewayErrorCode[e.code]]):
					e.action && Y._doWithAction(e.action)
				}), Y.socket.on("onPeerLeave",
				function(e) {
					var t = (0, c.ClientEvent)({
						type: "peer-leave",
						uid: e.id
					});
					if (Y.remoteStreamsInChannel.has(e.id) && Y.remoteStreamsInChannel.delete(e.id), Y.remoteStreams.hasOwnProperty(e.id) && (t.stream = Y.remoteStreams[e.id]), Y.dispatchEvent(t), Y.remoteStreams.hasOwnProperty(e.id)) {
						l.
					default.info("closing stream on peer leave", e.id);
						var i = Y.remoteStreams[e.id];
						i.close(),
						delete Y.remoteStreams[e.id],
						void 0 !== i.pc && (i.pc.close(), i.pc = void 0, Y.p2ps.delete(i.p2pId))
					}
					Y.timers.hasOwnProperty(e.id) && (clearInterval(Y.timers[e.id]), clearInterval(Y.timers[e.id] + "_RelatedStats"), delete Y.timers[e.id]),
					void 0 != Y.audioLevel[e.id] && delete Y.audioLevel[e.id],
					void 0 != Y.timer_counter[e.id] && delete Y.timer_counter[e.id]
				}), Y.socket.on("onUplinkStats",
				function(e) {}), Y.socket.on("liveStreamingStarted",
				function(e) {
					var t = (0, c.LiveStreamingEvent)({
						type: "liveStreamingStarted",
						url: e.url
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("liveStreamingFailed",
				function(e) {
					var t = (0, c.LiveStreamingEvent)({
						type: "liveStreamingFailed",
						url: e.url
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("liveStreamingStopped",
				function(e) {
					var t = (0, c.LiveStreamingEvent)({
						type: "liveStreamingStopped",
						url: e.url
					});
					Y.dispatchEvent(t)
				}), Y.socket.on("liveTranscodingUpdated",
				function(e) {
					var t = (0, c.LiveStreamingEvent)({
						type: "liveTranscodingUpdated",
						reason: e.reason
					});
					Y.dispatchEvent(t)
				}))
			},
			ne = function(e, t, i) {
				if (void 0 === Y.socket) return l.
			default.error("No socket available"),
				void J(i, f.
			default.INVALID_OPERATION);
				try {
					Y.socket.emitSimpleMessage(e,
					function(e, n) {
						"success" === e ? "function" == typeof t && t(n) : "function" == typeof i && i(p.GatewayErrorCode[n] || n)
					})
				} catch(t) {
					l.
				default.error("Socket emit message failed" + JSON.stringify(e)),
					l.
				default.error(t),
					J(i, f.
				default.SOCKET_ERROR)
				}
			},
			re = function(e, t) {
				if (void 0 === Y.socket) return void l.
			default.error("Error in sendSimpleSdp [socket not ready]");
				try {
					Y.socket.emitSimpleMessage(e,
					function(e, i) {
						t && t(e, i)
					})
				} catch(e) {
					l.
				default.error("Error in sendSimpleSdp [" + e + "]")
				}
			},
			oe = function() {
				for (var e in Y.localStreams) if (void 0 !== Y.localStreams[e]) {
					var t = Y.localStreams[e];
					delete Y.localStreams[e],
					void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
				}
			},
			ae = function() {
				Y.remoteStreamsInChannel.clear();
				for (var e in Y.remoteStreams) if (Y.remoteStreams.hasOwnProperty(e)) {
					var t = Y.remoteStreams[e];
					t.stop(),
					t.close(),
					delete Y.remoteStreams[e],
					void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
				}
			};
			return Y
		},
		y = {
			_gatewayClients: {},
			register: function(e, t) {
				var i = this;
				if (!t.uid) {
					var n = "NO_UID_PROVIDED";
					return l.
				default.error(n, t),
					n
				}
				if (t.cname) {
					if (i._gatewayClients[t.cname] && i._gatewayClients[t.cname][t.uid] && i._gatewayClients[t.cname][t.uid] !== e) {
						var n = "UID_CONFLICT";
						return l.
					default.error(n, t),
						n
					}
					return l.
				default.debug("register client Channel", t.cname, "Uid", t.uid),
					i._gatewayClients[t.cname] || (i._gatewayClients[t.cname] = {}),
					i._gatewayClients[t.cname][t.uid] = e,
					null
				}
				var n = "NO_CHANNEL_PROVIDED";
				return l.
			default.error(n, t),
				n
			},
			unregister: function(e) {
				var t = this,
				i = e && e.uid,
				n = e.joinInfo && e.joinInfo.cname;
				if (!i || !n) {
					var r = "INVALID_GATEWAYCLIENT";
					return l.
				default.error(r),
					r
				}
				if (t._gatewayClients[n] && t._gatewayClients[n][i]) {
					if (t._gatewayClients[n][i] !== e) {
						var r = "GATEWAYCLIENT_UID_CONFLICT";
						return l.
					default.error(r),
						r
					}
					return l.
				default.debug("unregister client ", e.uid),
					delete t._gatewayClients[n][i],
					null
				}
				var r = "GATEWEAY_CLIENT_UNREGISTERED";
				l.
			default.error(r)
			}
		};
		b.DISCONNECTED = 0,
		b.CONNECTING = 1,
		b.CONNECTED = 2,
		b.DISCONNECTING = 3,
		t.
	default = b
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = i(33),
		r = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (n),
		o = i(4),
		a = function(e, t) {
			var i = {};
			return i.connect = function() {
				t.host = e,
				i.signal = (0, r.
			default)(t),
				i.on = i.signal.on,
				i.dispatchEvent = i.signal.dispatchEvent,
				i.signal.on("onopen",
				function(e) {
					i.signal.onEvent = function(e) {
						i.dispatchEvent((0, o.MediaEvent)({
							type: e.event,
							msg: e
						}))
					},
					i.dispatchEvent((0, o.MediaEvent)({
						type: "connect",
						msg: e
					}))
				}),
				i.signal.on("onError",
				function(e) {
					var t = e.msg;
					onError(t.code, "error")
				})
			},
			i.disconnect = function() {
				i.signal.disconnect()
			},
			i.close = function() {
				i.signal.close()
			},
			i.getURL = function() {
				return i.signal.getURL()
			},
			i.reconnect = function() {
				i.signal.reconnect()
			},
			i.connectNext = function() {
				i.signal.connectNext()
			},
			i.replaceHost = function(e) {
				i.signal.replaceHost(e)
			},
			i.emitSimpleMessage = function(e, t) {
				i.signal.sendSignalCommand(e, t)
			},
			i.connect(),
			i
		};
		t.
	default = a
	},
	function(e, t, i) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = i(4),
		o = i(13),
		a = n(o),
		s = i(0),
		d = n(s),
		c = i(2),
		u = function(e) {
			var t = (0, r.EventDispatcher)(e);
			return t.needReconnect = !0,
			t.isTimeout = !1,
			t.isInit = !0,
			t.hostIndex = 0,
			t.requestID = 0,
			e.host instanceof Array ? t.host = e.host: t.host = [e.host],
			t.getURL = function() {
				return t.connection.url
			},
			t.reconnect = function() {
				t.isInit = !0,
				t.creatConnection()
			},
			t.connectNext = function() {
				t.isInit = !0,
				++t.hostIndex,
				d.
			default.debug("Gateway length:" + t.host.length + " current index:" + t.hostIndex),
				t.hostIndex >= t.host.length ? t.dispatchEvent((0, r.MediaEvent)({
					type: "recover"
				})) : t.creatConnection()
			},
			t.replaceHost = function(e) {
				t.host = e || t.host,
				t.hostIndex = 0,
				t.creatConnection()
			},
			t.creatConnection = function() {
				d.
			default.debug("start connect:" + t.host[t.hostIndex]),
				t.lts = (new Date).getTime(),
				t.connection = new WebSocket("wss://" + t.host[t.hostIndex]),
				t.connection.onopen = function(e) {
					d.
				default.debug("websockect opened: " + t.host[t.hostIndex]),
					t.needReconnect = !0,
					t.isTimeout = !1,
					t.isInit = !1,
					clearTimeout(t.timeoutCheck),
					t.dispatchEvent((0, r.MediaEvent)({
						type: "onopen",
						event: e,
						socket: t
					}))
				},
				t.connection.onmessage = function(e) {
					var i = JSON.parse(e.data);
					i.hasOwnProperty("_id") ? t.dispatchEvent((0, r.MediaEvent)({
						type: i._id,
						msg: i
					})) : i.hasOwnProperty("_type") && t.dispatchSocketEvent((0, r.MediaEvent)({
						type: i._type,
						msg: i.message
					}))
				},
				t.connection.onclose = function(i) {
					t.needReconnect ? t.isTimeout || t.isInit ? (d.
				default.debug("websockect connect timeout"), c.report.joinGateway(e.sid, {
						lts: t.lts,
						succ: !1,
						ec: "timeout",
						addr: t.connection.url
					}), t.connectNext()) : t.dispatchEvent((0, r.MediaEvent)({
						type: "disconnect",
						event: i
					})) : (d.
				default.debug("websockect closeed"), (0, a.
				default)(e.onFailure, i), clearTimeout(t.timeoutCheck), t.dispatchEvent((0, r.MediaEvent)({
						type: "close",
						event: i
					})), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0)
				},
				t.connection.onerror = function(e) {};
				setTimeout(function() {
					t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close())
				},
				5e3)
			},
			t.creatConnection(),
			t.sendMessage = function(e, i) {
				t.connection && t.connection.readyState == WebSocket.OPEN ? t.connection.send(JSON.stringify(e)) : i({
					error: "Gateway not connected"
				})
			},
			t.disconnect = function() {
				t.needReconnect = !0,
				t.connection.close()
			},
			t.close = function() {
				t.needReconnect = !1,
				t.connection.onclose = void 0,
				t.connection.close()
			},
			t.sendSignalCommand = function(e, i) {
				e._id = "_request_" + t.requestID,
				t.requestID += 1,
				"publish_stats" !== e._type && "subscribe_stats" !== e._type && "publish_stats_low" !== e._type && t.on(e._id,
				function(n) {
					n.msg && i && i(n.msg._result, n.msg.message),
					delete t.dispatcher.eventListeners[e._id]
				}),
				t.sendMessage(e,
				function(e) {
					e.reason = "NOT_CONNECTED",
					i && i(e.reason, e)
				})
			},
			t
		};
		t.
	default = u
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = {
			ERR_NO_VOCS_AVAILABLE: "tryNext",
			ERR_NO_VOS_AVAILABLE: "tryNext",
			ERR_JOIN_CHANNEL_TIMEOUT: "tryNext",
			WARN_REPEAT_JOIN: "quit",
			ERR_JOIN_BY_MULTI_IP: "recover",
			WARN_LOOKUP_CHANNEL_TIMEOUT: "tryNext",
			WARN_OPEN_CHANNEL_TIMEOUT: "tryNext",
			ERR_VOM_SERVICE_UNAVAILABLE: "tryNext",
			ERR_TOO_MANY_USERS: "tryNext",
			ERR_MASTER_VOCS_UNAVAILABLE: "tryNext",
			ERR_INTERNAL_ERROR: "tryNext",
			notification_test_recover: "recover",
			notification_test_tryNext: "tryNext",
			notification_test_retry: "retry"
		};
		t.
	default = n
	},
	function(e, t, i) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.simMap = void 0;
		var n = i(6),
		r = function(e) {
			var t;
			switch (e) {
			case "120p":
			case "120p_1":
				t = ["120p_1", "120p_1", "120p_1"];
				break;
			case "120p_3":
				t = ["120p_3", "120p_3", "120p_3"];
				break;
			case "180p":
			case "180p_1":
				t = ["90p_1", "90p_1", "180p_1"];
				break;
			case "180p_3":
				t = ["120p_3", "120p_3", "180p_3"];
				break;
			case "180p_4":
				t = ["120p_1", "120p_1", "180p_4"];
				break;
			case "240p":
			case "240p_1":
				t = ["120p_1", "120p_1", "240p_1"];
				break;
			case "240p_3":
				t = ["120p_3", "120p_3", "240p_3"];
				break;
			case "240p_4":
				t = ["120p_4", "120p_4", "240p_4"];
				break;
			case "360p":
			case "360p_1":
			case "360p_4":
			case "360p_9":
			case "360p_10":
			case "360p_11":
				t = ["90p_1", "90p_1", "360p_1"];
				break;
			case "360p_3":
			case "360p_6":
				t = ["120p_3", "120p_3", "360p_3"];
				break;
			case "360p_7":
			case "360p_8":
				t = ["120p_1", "120p_1", "360p_7"];
				break;
			case "480p":
			case "480p_1":
			case "480p_2":
			case "480p_4":
			case "480p_10":
				t = ["120p_1", "120p_1", "480p_1"];
				break;
			case "480p_3":
			case "480p_6":
				t = ["120p_3", "120p_3", "480p_3"];
				break;
			case "480p_8":
			case "480p_9":
				t = ["120p_4", "120p_4", "480p_8"];
				break;
			case "720p":
			case "720p_1":
			case "720p_2":
			case "720p_3":
				t = ["90p_1", "90p_1", "720p_1"];
				break;
			case "720p_5":
			case "720p_6":
				t = ["120p_1", "120p_1", "720p_5"];
				break;
			case "1080p":
			case "1080p_1":
			case "1080p_2":
			case "1080p_3":
			case "1080p_5":
				t = ["90p_1", "90p_1", "1080p_1"];
				break;
			case "1440p":
			case "1440p_1":
			case "1440p_2":
				t = ["90p_1", "90p_1", "1440p_1"];
				break;
			case "4k":
			case "4k_1":
			case "4k_3":
				t = ["90p_1", "90p_1", "4k_1"];
				break;
			default:
				t = ["120p_1", "120p_1", "360p_7"]
			}
			return (0, n.isOpera)() ? [e, 15, 50] : (0, n.isFireFox)() ? [t[1], 15, 100] : (0, n.isSafari)() ? [t[2], 15, 50] : [t[0], 15, 50]
		};
		t.simMap = r
	}]).
default
});
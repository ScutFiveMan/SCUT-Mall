(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"20hc":function(e,t,a){"use strict"
var n=a("TqRt"),u=n(a("o0o1")),r=n(a("yXPU")),d=n(a("q1tI")),p=n(a("i8i4")),l=a("XkTy"),s=a("tajm"),f=n(a("NkXT")),o=window,m=o.$,w=o.MB,h=o.md5,c=o.SharingRunner,v=w.localStorageDelegate,g=function(){return!!window.MBData},b=/\/embed\b/.test(location.pathname)
w.f.inSharing=!0
var k=function(e,t){return t||new URLSearchParams(location.search).get("password")||v.getItem("".concat(e,"_pwd"))}
w.load=function(){var t=(0,r.default)(u.default.mark(function e(t){var a,n,r,s,o,c,i,l
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.token,n=t.isPasswordRequired,r=t.encryptedPassword,s=t.installerProject,w.webpackInterface.renderPreviewAlert(),o=k(a,r),c=!w.isStandAlone()&&!w.isInApp&&w.isMobile()&&!g()&&!b,w.supportedBrowser()){e.next=8
break}return m("#splash").hide(),m("#loading").hide(),e.abrupt("return")
case 8:if(i=w.isMac()?"mac":w.isWindows()?"windows":"other-os",m("html").addClass(i),(w.isStandAlone()||w.isIOSClient())&&m("html").addClass("is-full-screen"),c)return e.next=14,N({token:a,isPasswordRequired:n,savedEncryptedPassword:o,shouldGetData:!1})
e.next=17
break
case 14:return m("#loading").hide(),e.next=17,new Promise(function(e){p.default.render(d.default.createElement(f.default,{project:s,loadProject:e,encryptedPassword:k(a,r)}),document.getElementById("workspace"))})
case 17:return e.next=19,N({token:a,isPasswordRequired:n,savedEncryptedPassword:k(a,r)})
case 19:return l=e.sent,e.abrupt("return",g()?y(l):l?M(l):null)
case 21:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
var P=function(){var t=(0,r.default)(u.default.mark(function e(t){var a,n,r,s,o,c,i
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.token,n=t.encryptedPassword,r=t.shouldGetData,s=void 0===r||r,o=window.MBData,!g()){e.next=6
break}if(o.project.password&&n!==o.project.password)throw new Error("Wrong password!")
e.next=5
break
case 5:return e.abrupt("return",o)
case 6:if(s){e.next=14
break}return e.next=9,fetch("/app/".concat(a,"/checkpassword?password=").concat(n))
case 9:if(c=e.sent,c.ok){e.next=13
break}throw new Error("Wrong password!")
case 13:return e.abrupt("return",!0)
case 14:return i="/app/".concat(a,".json?").concat((new Date).valueOf()).concat(n?"&password=".concat(n):""),e.abrupt("return",E(i))
case 16:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),N=function(){var t=(0,r.default)(u.default.mark(function e(t){var a,n,r,s,o,c,i
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,n=t.isPasswordRequired,r=t.savedEncryptedPassword,s=t.shouldGetData,o=void 0===s||s,e.prev=1,e.next=4,P({token:a,shouldGetData:o,encryptedPassword:r})
case 4:c=e.sent,e.next=11
break
case 7:e.prev=7,e.t0=e.catch(1),console.log("Invalid saved password: ".concat(e.t0,". Will retry with prompt.")),v.removeItem("".concat(a,"_pwd"))
case 11:if(c){e.next=33
break}if(e.prev=12,n)return e.t1=h,e.next=17,(0,l.promptGetPasswordAsync)()
e.next=25
break
case 17:return e.t2=e.sent,i=(0,e.t1)(e.t2),e.next=21,P({token:a,shouldGetData:o,encryptedPassword:i})
case 21:c=e.sent,v.setItem("".concat(a,"_pwd"),i),e.next=26
break
case 25:(0,l.alertAsync)({desc:I18N.no_permission_to_app})
case 26:e.next=33
break
case 28:return e.prev=28,e.t3=e.catch(12),console.log("Invalid prompt password:",e.t3),setTimeout(function(){return(0,l.alertAsync)({desc:n?I18N.invalid_credential:"Failed to load this app."})},320),e.abrupt("return",null)
case 33:return e.abrupt("return",c)
case 34:case"end":return e.stop()}},e,this,[[1,7],[12,28]])}))
return function(e){return t.apply(this,arguments)}}(),E=function(e){return new Promise(function(t,n){return m.getJSON(e,function(e){return t(e)}).fail(function(e,t,a){return n(a)})})},M=function(e){m(".indicator").css("height","100%"),setTimeout(function(){return i(e)},300)},y=function(e){e.project.splash="images/splash.png",e.screens.forEach(function(e){e.bgimage&&(e.bgimage=e.bgimage.replace(/^.+uploads.*?\//,""))}),e.widgets.forEach(function(e){e.image&&(e.image=e.image.replace(/^.+uploads.*?\//,""))}),
e.widgetstates.forEach(function(e){e.image&&(e.image=e.image.replace(/^.+uploads.*?\//,""))}),m(".indicator").css("height","100%"),setTimeout(function(){return i(e)},300)},i=function(e){var t=e.project.template?new Template:e.project.combo?new Combo:new Project
t.load(e.project),t.lsave(!1),w.currentProject=t,Template.refresh(e.templates),Screen.refresh(e.screens),Widget.refreshWidgetAfterDecompress(e.widgets),Link.refresh(e.links),Panel.refresh(e.panels),Screenstate.refresh(e.screenstates),Widgetstate.refreshWidgetstateAfterDecompress(e.widgetstates),Panelstate.refresh(e.panelstates),Collaborator.refresh(e.collaborators),CommentThread.refresh(e.threads),Comment.refresh(e.comments),Team.refresh(e.teams),w.user=m("#workspace").data("user")||{},w.isMobile()||(0,
s.patchGlobalAutoSaverPusher)(),(new Image).src=w.staticMap(),m("title").html(t.name),m("#loading").hide(),!t.validated&&w.isMobile()&&(0,l.alertAsync)({title:I18N.reminder,desc:I18N.fraud_warning,confirmText:I18N.fraud_confirm,isHTML:!0}),w.checkFA(function(){m(".box").hide(),w.currentProject=t,w.webpackInterface.init(),w.Pusher&&w.user.id&&"guest"!==w.webpackInterface.store.getState().model.current.userRole&&w.Pusher.enableSocketChannel(t.cid),w.runner=new c(t),w.runner.render()})}},3:function(e,t,a){a(
"55Il"),e.exports=a("Z3xQ")},KUpD:function(e,t,a){e.exports={"install-page-wrapper":"_2145f6w_gvAx5jbCLSvNm1","install-page":"_1ucR52TRm2uhcZJhUjsxqG"}},NkXT:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),s=r(a("W8MJ")),c=r(a("a1gu")),i=r(a("Nsbk")),l=r(a("7W2i")),u=r(a("PJYZ")),d=r(a("lSNA")),p=r(a("o0o1")),f=r(a("yXPU")),m=a("17x9"),w=n(a("q1tI")),h=r(a("PeD6")),v=r(a("KUpD")),g=r(a("UbMB")),b=a("t3Un"),k=g.default.bind(v.default),P=function(){var t=(0,f.default)(p.default.mark(function e(t){var a,n,r
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return MB.event("移动端: 点击下载 APK","运行页"),e.next=3,(0,b.requestJSON)("/app/".concat(t,"/build/apk.json"),null,{method:"PUT"})
case 3:return e.next=6,N(5e3)
case 6:return e.next=8,(0,b.requestJSON)("/app/".concat(t,"/status/apk.json"))
case 8:if(a=e.sent,n=a.progress,r=a.link,100!==n)return e.abrupt("continue",3)
e.next=13
break
case 13:return window.location=r,e.abrupt("return")
case 17:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),N=function(t){return new Promise(function(e){return setTimeout(e,t)})},E=function(e){function t(){var s
return(0,o.default)(this,t),s=(0,c.default)(this,(0,i.default)(t).call(this)),(0,d.default)((0,u.default)((0,u.default)(s)),"handleView",function(e){e.preventDefault(),s.props.loadProject()}),(0,d.default)((0,u.default)((0,u.default)(s)),"handleInstall",function(e){e.preventDefault()
var t=s.props.project,a=t.accessToken,n=t.userPlan,r=t.exportable
MB.isWechat()?s.setState({isCoverShow:!0}):MB.isiPad()||MB.isIOS()?s.setState({isCoverShow:!0}):r?(s.setState({isCoverShow:!0}),P(a).then(function(){return s.setState({isCoverShow:!1})}).catch(function(e){})):MB.promptRenew("exportable",{format:"apk",role:"project",plan:n})}),(0,d.default)((0,u.default)((0,u.default)(s)),"handleDownload",function(e){var t=s.props.encryptedPassword
MB.isWechat()?s.setState({isCoverShow:!0}):MB.isIOS()?function(e,t){MB.event("移动端: 点击下载 iOS 客户端","运行页")
var a=window.location,n=a.hostname,r=a.pathname,s="modao://".concat(n).concat(r,"?password=").concat(t)
setTimeout(function(){window.location=e},25),window.location=s}(e,t):MB.isAndroid()&&function(e,t){MB.event("移动端: 点击下载安卓客户端","运行页")
var a=window.location,n=a.hostname,r=a.pathname,s=navigator.userAgent.toLowerCase(),o=document.createElement("iframe")
if(document.body.appendChild(o),o.style.cssText="display:none;width=0;height=0",setTimeout(function(){window.location=e},200),console.log("userAgent",s),s.includes("chrome")&&s.includes("android")&&!s.includes("ucbrowser")&&!s.includes("quark")){var c="intent://".concat(n).concat(r,"?password=").concat(t,"#Intent;package=com.mockingbot;scheme=mockingbot;S.browser_fallback_url=").concat(e,";end")
o.src=c}else{var i="mockingbot://".concat(n).concat(r,"?password=").concat(t)
window.open(i)}}(e,t)}),(0,d.default)((0,u.default)((0,u.default)(s)),"handleCloseCover",function(){s.setState({isCoverShow:!1})}),s.state={isCoverShow:!1},s}return(0,l.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){$("#splash").hide(),$("#workspace").show(),$.timeago.settings.lang=window.MBLocale,$(".timeago").timeago()}},{key:"render",value:function(){var e=this,t=this.props.project,a=t.name,n=t.iconUrl,r=t.updatedAt,s=t.ios_client_url,o=t.android_client_url,
c=this.state.isCoverShow,i=MB.isAndroid(),l=i?o:s,u=i?I18N.download_android_apk:I18N.add_to_home_screen
return w.default.createElement("div",{className:k("install-page-wrapper")},w.default.createElement("div",{className:k("install-page",{"is-wechat":MB.isWechat()})},w.default.createElement("div",{className:"app-inner"},w.default.createElement("img",{className:"app-icon",src:n}),w.default.createElement("h1",{className:"app-name"},a),w.default.createElement("div",{className:"app-update-time"},w.default.createElement("time",{className:"timeago",dateTime:r}),I18N.update),w.default.createElement("div",{
className:"install-btns"},w.default.createElement("a",{className:"install-btn primary",onClick:function(){return e.handleDownload(l)}},I18N.open_in_client),w.default.createElement("a",{className:"install-btn",onClick:this.handleView},I18N.view_app)),w.default.createElement("a",{className:"download-btn",onClick:this.handleInstall},w.default.createElement("span",null,u),w.default.createElement("i",{className:"fa fa-angle-right"}))),w.default.createElement(h.default,{show:c,onClose:this.handleCloseCover})))}}]
),t}(w.PureComponent)
t.default=E,(0,d.default)(E,"propTypes",{project:m.PropTypes.object,loadProject:m.PropTypes.func,encryptedPassword:m.PropTypes.string})},PeD6:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),c=r(a("W8MJ")),i=r(a("a1gu")),l=r(a("Nsbk")),u=r(a("7W2i")),d=r(a("PJYZ")),p=r(a("lSNA")),s=a("17x9"),f=n(a("q1tI")),m=r(a("ldhK")),w="/images/sharing/wechat_".concat(window.MBLocale,".png"),h="/images/sharing/ios_".concat(window.MBLocale,".png"),v=function(e){function s(){var e,t;(0,o.default)(this,s)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,i.default)(this,(e=(0,l.default)(s)).call.apply(e,[this].concat(n))),(0,p.default)((0,d.default)((0,d.default)(t)),"handleClick",function(){t.props.onClose()}),t}return(0,u.default)(s,e),(0,c.default)(s,[{key:"render",value:function(){var e=this.props.show,t=MB.isWechat(),a=!t&&MB.isIOS(),n=MB.isiPad(),r=!(t||a),s={display:e?"":"none"}
return f.default.createElement("div",{className:m.default.covers,style:s,onClick:this.handleClick},t&&f.default.createElement("div",{className:"cover wechat"},f.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),f.default.createElement("img",{className:"tips",src:w}),"s",f.default.createElement("div",{className:"arrow"})),a&&!n&&f.default.createElement("div",{className:"cover ios"},f.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),
f.default.createElement("img",{className:"tips",src:h}),f.default.createElement("div",{className:"arrow"})),n&&f.default.createElement("div",{className:"cover ipad"},f.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),f.default.createElement("img",{className:"tips",src:h}),f.default.createElement("div",{className:"arrow"})),r&&f.default.createElement("div",{className:"cover building"},f.default.createElement("div",{className:"tip-wrapper"},f.default.createElement("p",{
className:"tip"},I18N.building_apk),f.default.createElement("div",{className:"spinner"}))))}}]),s}(f.PureComponent);(t.default=v).propTypes={show:s.PropTypes.bool,onClose:s.PropTypes.func}},Z3xQ:function(e,t,a){"use strict"
var n=a("TqRt"),r=n(a("zkrS"))
a("KKmY"),a("P3rE"),a("dppN"),a("T7iu")
var s=n(a("7eYF")),o=n(a("aqSL")),c=a("lw2U"),i=a("+Cau"),l=a("rbsZ"),u=a("abHt")
a("RJdT"),a("20hc"),MB.COMPONENTS=u.componentMap
try{r.default.MB.webpackInterface=(0,s.default)(o.default),r.default.MB.setRunnerExtra=c.setRunnerExtra,r.default.MB.renewMsg=l.getRenewMessage,r.default.MB.promptRenew=l.openRenewModal,r.default.MB.messageBucket=(0,i.createMessageBucket)(i.receiverMap)}catch(e){console.warn("[UI:Preview] Failed to init:",e.stack||e)}},ldhK:function(e,t,a){e.exports={covers:"_2fva7dqNrMTA3qQj2Sag2u"}}},[[3,0,1,2]]])

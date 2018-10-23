(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+Cau":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiverMap=t.createMessageBucket=void 0
var a=r(n("MVZn")),c=r(n("zkrS")),u=n("upRB")
t.createMessageBucket=function(o){var i=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"*"
return e&&window.parent.postMessage(JSON.stringify({event:e,payload:t}),n)},e=function(t){if(t.source!==window&&!t.origin.includes("qiyukf")&&t.data&&"string"==typeof t.data)try{var e=JSON.parse(t.data),n=e.event,r=e.payload,a=void 0===r?{}:r
o[n]&&o[n](i,{type:n,payload:a,event:t})}catch(e){console.warn("[receive] error message data",e,t)}}
return window.addEventListener("message",e),{send:i,clear:function(){return window.removeEventListener("message",e)}}}
var o={"message:get:preview-state":function(e){var t=s(),n=t.state,r=t.isHighlight
e("message:data:preview-state",(0,a.default)({},n.model.current,{isHighlight:r}))},"message:set:preview-state":function(e,t){var n=t.payload,r=n.isHighlight,a=n.screenCid,o=s(),i=o.state.model,c=i.current,u=i.screens,l=o.dispatch
if(void 0!==r&&l({type:"reducer:preview-toolbar:update:highlight",payload:{isHighlight:r}}),c.screenCid&&void 0!==a&&a!==c.screenCid){if(!u.find(function(e){return e.cid===a}))return console.warn("[message:set:preview-state] invalid screenCid")
l({type:"entry:sync-runner:set-screen",payload:{cid:a}})}},"message:get:screen-list":function(e){var t=c.default.MB.webpackInterface.store.getState().model,n=t.current
e("message:data:screen-list",t.screens.filter(function(e){return e.project_cid===n.projectCid}).map(function(e){return{cid:e.cid,name:e.name,position:e.position,parent_cid:e.parent_cid,project_cid:e.project_cid}}))},"message:get:notification-state":function(e){var t=(c.default.MB.notification&&c.default.MB.notification.store&&c.default.MB.notification.store.getState()||{}).notifications
e("message:data:notification-state",{unreadCount:t?t.notifications.unreadNum:0})},"message:get:notification-list":function(e){var t=(c.default.MB.notification&&c.default.MB.notification.store&&c.default.MB.notification.store.getState()||{}).notifications
e("message:data:notification-list",t?t.notifications.notifications:[])}}
t.receiverMap=o
var s=function(){var e=c.default.MB.webpackInterface.store,t=e.getState,n=e.dispatch,r=t(),a=(0,u.getIsHighlight)(r),o=r.model.current.projectCid,i=o&&r.model.projects.find(function(e){return e.cid===o})
return{getState:t,dispatch:n,state:r,project:i,isHighlight:a}}},"+c4W":function(e,t,n){var r=n("711d"),a=n("4/ic"),o=n("9ggG"),i=n("9Nap")
e.exports=function(e){return o(e)?r(i(e)):a(e)}},"/5+U":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.immutableTransformCache=function(e){var t,n
return function(){return function(e,t){if(!e||e.length!==t.length)return!1
for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1
return!0}(n,arguments)||(t=e.apply(null,arguments),n=arguments),t}},t.delRecentColor=t.saveRecentColor=t.getHistoryColor=t.isChinese=t.isEnglish=t.downloadFail=t.setTimeoutAsync=t.getMinBoundingRect=t.save2Digital=t.downloadWithATag=t.adjustImageRect=t.adapterScreen=t.numberBetween=t.unescapeHTML=t.muteEvent=void 0
t.muteEvent=function(t){return function(e){return e&&e.preventDefault(),e&&e.stopPropagation(),t&&t(e)}}
var r={"&amp;":"&","&lt;":"<","&gt;":">"},a=function(e){return r[e]||e}
t.unescapeHTML=function(e){return e&&e.replace(/(&amp;|&lt;|&gt;)/g,a)}
t.numberBetween=function(e,t,n){return Math.min(Math.max(e,t),n)}
t.adapterScreen=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0
return Number(parseFloat((1/t*e).toFixed(2)))+n}
t.adjustImageRect=function(e){var t=e.image,n=e.adjust,r=t.naturalWidth
t.naturalHeight<=r?t.style.maxWidth=n+"px":t.style.maxHeight=n+"px"}
t.downloadWithATag=function(e){var t=e.url,n=e.name,r=e.type,a=document.createElement("a"),o=function(e){if(e)return e.replace(/\s|<|>|《|》|:|：|？|\?|\\|\/|"|”|\||\./g,"_")}(n)||"未命名",i="".concat(encodeURIComponent(o))
a.href=r?"".concat(t,"?attname=").concat(i,".").concat(r):(a.setAttribute("download",i),"".concat(t)),a.click()}
t.save2Digital=function(e){return Number(e.toFixed(2))}
t.getMinBoundingRect=function(e){var t=e.width,n=e.height,r=e.left,a=e.top,o=e.rotate,i=void 0===o?0:o
if(0===i)return[a,r,t,n]
var c=MB.atan2(t,n),u=c-i,l=u-2*c,s=u+180,d=l+180,f=r+t/2,p=a+n/2,h=MB.hypotenuse(t/2,n/2),m=1/0,v=1/0,g=-1/0,y=-1/0
return[u,l,s,d].forEach(function(e){var t=Math.round(f+h*MB.cos(e)),n=Math.round(p+h*MB.sin(e))
t<m&&(m=t),n<v&&(v=n),g<t&&(g=t),y<n&&(y=n)}),[v,m,g-m,y-v]}
t.setTimeoutAsync=function(t){return new Promise(function(e){return setTimeout(e,t)})}
t.downloadFail=function(){return console.error("下载失败")}
t.isChinese=function(e){var t="".concat(e).charCodeAt(0)
return 19968<=t&&t<=40869}
t.isEnglish=function(e){return/\w/.test(e)}
var o=function(){try{var e=MB.localStorageDelegate.getItem("user_pick_color")
return JSON.parse(e||"[]")}catch(e){return[]}}
t.getHistoryColor=o
t.saveRecentColor=function(e){var t=o()
return t.includes(e)?{history:t,focusColor:e}:(t.unshift(e),40<t.length&&t.pop(),MB.localStorageDelegate.setItem("user_pick_color",JSON.stringify(t)),{history:t,focusColor:null})}
t.delRecentColor=function(e){var t=o(),n=t.indexOf(e)
return t.splice(n,1),MB.localStorageDelegate.setItem("user_pick_color",JSON.stringify(t)),t}},"/9aa":function(e,t){e.exports=function(){return!1}},"/MKq":function(e,t){function u(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function n(c){return function(){var e=this,i=arguments
return new Promise(function(t,n){var r=c.apply(e,i)
function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var r,a=(r=n(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.join("").replace(/<br>/g,"<br/>").replace(/&nbsp;/g," ").replace(c,""))
case 1:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})
t.prepareHTMLString=a
var o,i=(o=n(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","<style>".concat(l).concat(t.join(""),"</style>").replace(/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,"").replace(/#iefix&/g,"").replace(c,""))
case 1:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})
t.prepareCSSString=i
var c=/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,l='\ninput[type="radio"] { -webkit-appearance: radio; -moz-appearance: radio; }\ninput[type="checkbox"] { -webkit-appearance: checkbox; -moz-appearance: checkbox; }\ninput[type="radio"], input[type="checkbox"] { box-sizing: border-box; max-width: 20px; max-height: 20px; }\ninput { -webkit-appearance: textfield; -moz-appearance: textfield; }\nselect { -webkit-appearance: menulist; -moz-appearance: menulist; }\n'
t.prepareSVGString=function(e){var t=e.domString,n=e.width,r=e.height
return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="'.concat(n,'" height="').concat(r,'">\n<switch>\n  <foreignObject width="').concat(n,'" height="').concat(r,'">\n    <body xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px">').concat(t,'</body>\n  </foreignObject>\n  <text font-size="24">\n    <tspan x="').concat(n/2,'" y="').concat(r/2,'" text-anchor="middle">Feature not supported</tspan>\n  </text>\n</switch>\n</svg>')},
t.prepareImageElement=function(e){var r=e.svgDataUrl,a=e.width,o=e.height
return new Promise(function(e,t){var n=document.createElement("img")
n.addEventListener("error",t),n.addEventListener("load",function(){return e(n)}),n.crossOrigin="anonymous",n.width=a,n.height=o,n.src=r})},t.prepareCanvasElement=function(e){var n=e.imageElement,r=e.width,a=e.height
return new Promise(function(e){var t=document.createElement("canvas")
t.width=r,t.height=a,setTimeout(function(){t.getContext("2d").drawImage(n,0,0),e(t)},0)})}},"/N2d":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"collectScreenVariantData",{enumerable:!0,get:function(){return i.collectScreenVariantData}}),Object.defineProperty(t,"collectScreenVariantBaseData",{enumerable:!0,get:function(){return i.collectScreenVariantBaseData}}),t.getScreenThumbnailZoom=t.doRenderScreenToCanvasElement=t.doRenderScreenToHTMLString=t.renderScreenToCanvasElement=t.renderScreenToHTMLString=t.collectScreenModelData=void 0
var s=r(n("o0o1")),a=r(n("yXPU")),h=r(n("q1tI")),m=r(n("KAy6")),d=n("t5S/"),o=n("87hQ"),v=r(n("zkrS")),i=n("wUZt"),g=r(n("BQOF"));(0,o.setFetchOption)({method:"GET",cache:"default",mode:"no-cors",credentials:"same-origin"})
var f=function(e){var t=e.canvasData.canvasZoom,n=e.screen,r=e.screenState,a=[],o=v.default.Global.$("body"),i=o.data("scale"),c=n.hh,u=n.fh,l=r?r.cid:"default"
o.data("scale",100),n.hh=0,n.fh=0,n.lsave(!1)
var s="background-color: ".concat(n.bg(),";"),d=n.bgimage?"background-image: url(".concat(n.getRealBgImage(),"); background-size: 100% auto;"):"",f="canvas ".concat(n.cp().device," ").concat(n.cp().model," ").concat(n.orient()),p="width: ".concat(n.width,"px; height: ").concat(n.height,"px; transform: scale(").concat(t,"); transform-origin: top left; position: relative; z-index: 1; ").concat(s).concat(d)
return a.push('<div class="'.concat(f,'" style="').concat(p,'">')),a.push(m.default.renderToString(h.default.createElement(g.default,{screen:n,state_cid:l,isSnapshot:!0}))),a.push("</div>"),o.data("scale",i),n.hh=c,n.fh=u,n.lsave(!1),a}
t.collectScreenModelData=f
var u=function(e){var t=e.canvasData,n=e.screen,r=e.screenState
return f({canvasData:t,screen:n,screenState:r}).join("")}
t.renderScreenToHTMLString=u
var p=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a,o,i,c,u,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.canvasData,r=t.screen,a=t.screenState,n.canvasZoom,o=n.canvasWidth,i=n.canvasHeight,c=f({canvasData:n,screen:r,screenState:a}),e.next=5,(0,d.createSnapshotFromHTMLSourceList)({htmlSourceList:c,width:o,height:i})
case 5:return u=e.sent,u.svgString,u.imageElement,l=u.canvasElement,e.abrupt("return",l)
case 11:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.renderScreenToCanvasElement=p
t.doRenderScreenToHTMLString=function(e){var t=e.screenCid,n=e.screenStateCid,r=e.canvasZoom,a=y(t,n,r),o=a.canvasData,i=a.screen,c=a.screenState
return{canvasData:o,htmlString:u({canvasData:o,screen:i,screenState:c})}}
var c=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a,o,i,c,u,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.screenCid,r=t.screenStateCid,a=t.canvasZoom,o=y(n,r,a),i=o.canvasData,c=o.screen,u=o.screenState,e.next=4,p({canvasData:i,screen:c,screenState:u})
case 4:return l=e.sent,e.abrupt("return",{canvasData:i,canvasElement:l})
case 6:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doRenderScreenToCanvasElement=c
var y=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default",e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=v.default.SpineModel.Screen.all().find(function(e){return e.cid===t}),a=v.default.SpineModel.Screenstate.all().find(function(e){return e.cid===n})
return{canvasData:(0,i.collectScreenVariantBaseData)(r,a,e),screen:r,screenState:a}}
t.getScreenThumbnailZoom=function(e,t){return Number((128/Math.max(e,t)).toFixed(2))}},"/OM1":function(e,t,n){e.exports={scroll_bar_container:"ADUwX5JJyFih8zxwAzh8H"}},"/Q2I":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),w=r(n("q1tI")),f=a(n("17x9")),S=n("i8i4"),p=a(n("Y+p1")),E=a(n("i6OX"))
n("NYM8")
var h=[],m=Object.assign(document.createElement("div"),{className:"modal-portal"}),C=function(e){return e.stopPropagation()},v=function(e){function a(){var e,b;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return b=(0,c.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,s.default)((0,s.default)(b)),"onOpen",function(){h.unshift((0,s.default)((0,s.default)(b))),setTimeout(function(){return b.portal.classList.add("is-open")},50),b.focusOnConfirmBtn(),b.reassignPosiY()}),(0,d.default)((0,s.default)((0,s.default)(b)),"onClose",function(){var e=h.indexOf((0,s.default)((0,s.default)(b)))
setTimeout(function(){return h.splice(e,1)}),setTimeout(function(){return b.portal.classList.remove("is-open")},50),setTimeout(function(){return(0,S.render)(w.default.createElement("div",null),b.portal)},500)}),(0,d.default)((0,s.default)((0,s.default)(b)),"focusOnConfirmBtn",function(){return setTimeout(function(){var e=b.portal.querySelector("footer .confirm-btn")
e&&e.focus()},50)}),(0,d.default)((0,s.default)((0,s.default)(b)),"listenToKey",function(e){var t=e.key,n=e.target,r=b.props,a=r.isOpen,o=r.canCloseOnEsc,i=r.onClose,c=r.canConfirmOnEnter,u=r.onConfirm,l=r.isOnConfirmDisabled
"Escape"===t&&!n.matches("input, textarea, [type=select]")&&a&&o&&i&&(0,s.default)((0,s.default)(b))===h[0]&&i(),"Enter"===t&&!n.matches("textarea")&&a&&c&&u&&!l&&(0,s.default)((0,s.default)(b))===h[0]&&u()}),(0,d.default)((0,s.default)((0,s.default)(b)),"reassignPosiY",function(){return setTimeout(function(){var e=b.props.type,t=b.portal.querySelector(".modal-mask > div")
if(t&&"alert"!==e){var n=window.innerHeight,r=t.offsetHeight,a=n<=r||(n-r)/2<.2*n?"add":"remove"
t.classList[a]("is-posi-centered")}},50)}),(0,d.default)((0,s.default)((0,s.default)(b)),"renderRealModal",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:b.props,t=e.type,n=e.title,r=e.className,a=e.maskClassName,o=e.children,i=e.onClose,c=e.canCloseOnClickMask,u=e.onConfirm,l=e.confirmText,s=e.isOnConfirmDisabled,d=e.onCancel,f=e.cancelText,p=e.isOnCancelDisabled,h=e.onDone,m=e.doneText,v=e.isOnDoneDisabled,g="alert"===t||d||u||h,y=w.default.createElement("div",{
className:"modal-mask ".concat(a," ").concat(c?"can-close":""),onClick:c?i:null},w.default.createElement("div",{className:"".concat(t,"-modal ").concat(r),onClick:C},w.default.createElement("header",null,n,i&&w.default.createElement("button",{className:"close-btn",onClick:i},w.default.createElement(E.default,{name:"times"}))),w.default.createElement("div",{className:"content"},o),g&&w.default.createElement("footer",null,d&&w.default.createElement("button",{className:"cancel-btn",onClick:d,disabled:p},f),
u&&w.default.createElement("button",{className:"confirm-btn",onClick:u,disabled:s},l),h&&w.default.createElement("button",{className:"done-btn",onClick:h,disabled:v},m))));(0,S.render)(y,b.portal)}),b}return(0,l.default)(a,e),(0,i.default)(a,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){var e=this.props,t=e.isOpen,n=e.portalClassName
Object.assign(this,{portal:m.cloneNode()}),document.body.appendChild(this.portal),this.portal.className+=" ".concat(n),window.addEventListener("resize",this.reassignPosiY),document.addEventListener("keydown",this.listenToKey),t&&(this.renderRealModal(),this.onOpen())}},{key:"componentWillReceiveProps",value:function(e){(0,p.default)(this.props,e)||this.renderRealModal(e)
var t=e.isOpen,n=this.props.isOpen
!n&&t?this.onOpen():n&&!t&&this.onClose()}},{key:"componentWillUnmount",value:function(){(0,S.unmountComponentAtNode)(this.portal),this.portal&&this.portal.remove(),document.removeEventListener("keydown",this.listenToKey),window.removeEventListener("resize",this.reassignPosiY)}}]),a}(w.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{isOpen:f.default.bool,type:f.default.oneOf(["alert","functional","display"]),title:f.default.any,className:f.default.string,maskClassName:f.default.string,portalClassName:f.default.string,children:f.default.any,onClose:f.default.func,onCloseText:f.default.string,canCloseOnClickMask:f.default.bool,canCloseOnEsc:f.default.bool,canConfirmOnEnter:f.default.bool,onConfirm:f.default.func,confirmText:f.default.string,isOnConfirmDisabled:f.default.bool,
onCancel:f.default.func,isOnCancelDisabled:f.default.bool,cancelText:f.default.string,onDone:f.default.func,isOnDoneDisabled:f.default.bool,doneText:f.default.string}),(0,d.default)(v,"defaultProps",{isOpen:!1,type:"functional",className:"",maskClassName:"",portalClassName:"",onClose:function(){return null},canCloseOnClickMask:!0,canCloseOnEsc:!0,canConfirmOnEnter:!0,onCloseText:I18N.close,confirmText:I18N.confirm,isOnConfirmDisabled:!1,cancelText:I18N.cancel,isOnCancelDisabled:!1,doneText:I18N.done,
isOnDoneDisabled:!1})},"/TnQ":function(e,t,n){"use strict"
var r=n("ANjH").compose
t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}},"/cyv":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"container:modal:open":return(0,a.default)({},r,{isOpen:!0})
case"container:modal:close":return(0,a.default)({},e,{isOpen:!1})}return e}
var a=r(n("MVZn")),o={isOpen:!1,type:"alert",alertType:"alert",title:"",desc:"",onClose:function(){return null},onCancel:null,onConfirm:null,cancelText:void 0,confirmText:void 0,canCancel:!0,canConfirm:!0,canClose:!0}},"/wDc":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var re=r(n("J4zp")),a=r(n("17x9")),ae=r(n("q1tI")),oe=n("/5+U")
n("fIwL")
var ie=function(e,t,n){return e<n&&n<t},o=function(e){var t=e.activeLayer,n=e.enteredLayer,r=e.currentScreen,o=e.unit,i=e.ratio
if(!t||!n||t.id===n.id)return null
var a=(0,oe.getMinBoundingRect)({width:t.width,height:t.height,top:t.top,left:t.left,rotate:t.kind?0:t.rotation||0}),c=(0,re.default)(a,4),u=c[0],l=c[1],s=c[2],d=c[3],f=(0,oe.getMinBoundingRect)({width:n.width,height:n.height,left:n.left,top:n.top,rotate:n.kind?0:n.rotation||0}),p=(0,re.default)(f,4),h=p[0],m=p[1],v=p[2],g=p[3],y={horizontal:{line1:[{display:l,src:t.src_left},{display:l+s,src:t.src_left+t.src_width}],line2:[{display:m,src:n.src_left},{display:m+v,src:n.src_left+n.src_width}]},vertical:{
line1:[{display:u,src:t.src_top},{display:u+d,src:t.src_top+t.src_height}],line2:[{display:h,src:n.src_top},{display:h+g,src:n.src_top+n.src_height}]}},b={horizontal:[],vertical:[]},w={horizontal:{},vertical:{}}
for(var S in y)for(var E=y[S].line1,C=y[S].line2,_=0;_<E.length;_++)for(var x=0;x<C.length;x++){var k=E[_].display>C[x].display?{start:C[x],end:E[_]}:{start:E[_],end:C[x]},M=k.start,T=k.end
ie(M.display,T.display,E[1-_].display)||ie(M.display,T.display,C[1-x].display)||!(0<T.display-M.display)||M.display===E[0].display&&T.display===E[1].display||M.display===C[0].display&&T.display===C[1].display||w[S][M.display]||(w[S][T.display]=!0,b[S].push({start:M,end:T}))}var R,N,O,I,P,A,L,j,D,B,U,F,q,W,H,z,V,Y,Z=[],J=r.width,X=r.height,G=(R=t,N=n,O=(0,oe.getMinBoundingRect)({width:R.width,height:R.height,top:R.top,left:R.left,rotate:R.ro}),I=(0,re.default)(O,4),P=I[0],A=I[1],L=I[2],j=I[3],D=N.width,
B=N.left,U=N.top,F=A+L,q=B+D,W=P+j,H=U+N.height,Y=V=z=!1,(A<=B&&q<=F&&P<=U&&H<=W||B<=A&&A<=q&&U<=P&&W<=H)&&(Y=!0),(B<=A&&A<=q||A<=B&&B<=F)&&(z=!0),(P<=U&&U<=W||U<=P&&P<=H)&&(V=!0),{ifHorizontal:z,ifVertical:V,ifAllWraped:Y}),K=G.ifHorizontal,Q=G.ifVertical,$=G.ifAllWraped,ee=function(e){switch(e){case"horizontal":case"vertical":return delete b[e]
case"all":return delete b.horizontal,void delete b.vertical
default:return}}
!$&&K&&!Q&&ee("horizontal"),!$&&Q&&!K&&ee("vertical"),!$&&K&&Q&&ee("all")
var te=function(a){Z.push(b[a].map(function(e,t){var n
n="horizontal"===a?{left:"".concat(e.start.display/J*100,"%"),width:"".concat((e.end.display-e.start.display)/J*100,"%"),top:"".concat((d/2+u)/X*100,"%")}:{top:"".concat(e.start.display/X*100,"%"),height:"".concat((e.end.display-e.start.display)/X*100,"%"),left:"".concat((s/2+l)/J*100,"%")},Object.assign(n,{zIndex:Math.pow(2,31)})
var r=(0,oe.adapterScreen)(e.end.src-e.start.src,i)
return ae.default.createElement("li",{key:"".concat(a).concat(t),className:"LayerDistance LayerDistance--".concat(a),"data-length":e.end.src-e.start.src,style:n},ae.default.createElement("span",null,"".concat(r).concat(o)))}))}
for(var ne in b)te(ne)
return ae.default.createElement("ul",{className:"LayerDistances"},Array.prototype.concat.apply([],Z))}
o.propTypes={activeLayer:a.default.object,enteredLayer:a.default.object,currentScreen:a.default.object,unit:a.default.string,ratio:a.default.number}
var i=o
t.default=i},"0/XF":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("i6OX")),m=a(n("nc5A")),v=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleChange",function(e){t.props.onChange(e.target.value)}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleClear",function(e){e.preventDefault(),t.props.onChange("")}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.placeholder
return p.default.createElement("div",{type:"search",className:m.default.search},p.default.createElement(h.default,{type:"dora",name:"scale",className:"search-icon"}),p.default.createElement("input",{type:"text",value:t,placeholder:n,onChange:this.handleChange}),0<t.length&&p.default.createElement(h.default,{type:"dora",name:"times_fc",className:"clear-icon",onClick:this.handleClear}))}}]),o}(p.PureComponent);(t.default=v).propTypes={value:o.default.string,placeholder:o.default.string,onChange:o.default.func
}},"0JQy":function(e,t){var n="\\ud800-\\udfff",r="["+n+"]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",i="[^"+n+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+a+"|"+o+")"+"?",s="[\\ufe0e\\ufe0f]?",d=s+l+("(?:\\u200d(?:"+[i,c,u].join("|")+")"+s+l+")*"),f="(?:"+[i+a+"?",a,c,u,r].join("|")+")",p=RegExp(o+"(?="+o+")|"+f+d,"g")
e.exports=function(e){return e.match(p)||[]}},"0L8M":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,c.getModalElement)()
i.default.render(o.default.createElement(e,(0,a.default)({},t,{onClose:function(){return setTimeout(function(){i.default.unmountComponentAtNode(n),document.body.removeChild(n)})}})),n)}
var a=r(n("pVnL")),o=r(n("q1tI")),i=r(n("i8i4")),c=n("6x+O")},"0ZTe":function(e,t,n){var o=n("wy8a"),i=n("quyA"),c=n("Em2t"),u=n("dt0z")
e.exports=function(a){return function(e){e=u(e)
var t=i(e)?c(e):void 0,n=t?t[0]:e.charAt(0),r=t?o(t,1).join(""):e.slice(1)
return n[a]()+r}}},"0k54":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getNewItems=t.getTreeBoundingRect=t.mapItemsToTrees=t.getParentWidgetsWithGroups=t.getSubWidgetsWithGroups=t.getSubWidgets=t.findNodeByCid=t.updateIn=void 0
var u=r(n("RIqP")),l=r(n("MVZn")),w=n("l0oT"),S=n("DdHt")
t.updateIn=function e(t,n,r){var a=(0,l.default)({},n)
if(0===t.length)r(a)
else{var o=t.shift(),i=a.children.findIndex(function(e){return e.cid===o}),c=a.children[i].widget.z
a.children=(0,u.default)(a.children),a.children[i]=e(t,a.children[i],r),a.children[i].widget.z!==c&&a.children.sort(function(e,t){var n=e.widget,r=t.widget
return n.z-r.z||n.timestamp-r.timestamp})}return a}
var E=function e(t,n){for(var r=0;r<n.children.length;r++){var a=n.children[r]
if(a.cid===t)return a
var o=e(t,a)
if(o)return o}}
t.findNodeByCid=E
t.getSubWidgets=function t(e){var n=[],r=e.type,a=e.widget,o=e.children
return"group"===r?o.forEach(function(e){return n.push.apply(n,(0,u.default)(t(e)))}):n.push(a),n}
t.getSubWidgetsWithGroups=function t(e){var n=[],r=e.type,a=e.widget,o=e.children
return n.push(a),"group"===r&&o.forEach(function(e){return n.push.apply(n,(0,u.default)(t(e)))}),n}
t.getParentWidgetsWithGroups=function e(t,n){var r=[],a=n[t]
return a&&r.push(a),a&&a.gid&&r.push.apply(r,(0,u.default)(e(a.gid,n))),r}
t.mapItemsToTrees=function(e){var t={},n={root:[]}
return e.forEach(function(e){(t[e.cid]=e).gid?(n[e.gid]=n[e.gid]||[],n[e.gid].push(e)):n.root.push(e)}),n.root.map(function(e){return{cid:e.cid,widget:e,children:n[e.cid]||[]}})}
t.getTreeBoundingRect=function(e){return"group"===e.type?o(e):a(e.widget)}
var a=function(e){var t=e.t(),n=e.l(),r=e.r(),a=e.b()
return{minX:Math.min(n,r),minY:Math.min(t,a),maxX:Math.max(n,r),maxY:Math.max(t,a)}},o=function n(e){var r=1/0,a=1/0,o=-1/0,i=-1/0
if("group"===e.type)e.children.forEach(function(e){var t=n(e)
r=Math.min(r,t.minX),a=Math.min(a,t.minY),o=Math.max(o,t.maxX),i=Math.max(i,t.maxY)})
else{var t=e.widget.rect()
r=t.left,a=t.top,o=t.right,i=t.bottom}return{minX:r,minY:a,maxX:o,maxY:i}}
t.getNewItems=function(e,t){if(e.every(function(e){return e.gid})){var n,r,a=E(e[0].gid,t),o=a.widget.ro,i=a.children.map(function(e){return e.widget}),c=(0,S.itemsGetRect)(i),u=c.left,l=c.top,s=c.bottom,d=c.right,f={},p=e.map(function(e){return f[e.cid]=e.dup(),e.cid}),h=i.map(function(e){return p.includes(e.cid)?f[e.cid]:e.dup()}),m=(0,S.itemsGetRect)(h),v=m.left,g=m.top,y=m.bottom,b=m.right
return v===u&&g===l&&b===d&&y===s||((n=u-v)&&h.forEach(function(e){e.top-=Math.round(n/2*(0,w.sin)(o)),e.left+=Math.round(n/2-n/2*(0,w.cos)(o))}),(r=l-g)&&h.forEach(function(e){e.left+=Math.round(r/2*(0,w.sin)(o)),e.top+=Math.round(r/2-r/2*(0,w.cos)(o))}),(r=y-s)&&h.forEach(function(e){e.left-=Math.round(r/2*(0,w.sin)(o)),e.top-=Math.round(r/2-r/2*(0,w.cos)(o))}),(n=b-d)&&h.forEach(function(e){e.top+=Math.round(n/2*(0,w.sin)(o)),e.left-=Math.round(n/2-n/2*(0,w.cos)(o))})),h}return e}},"1Uxz":function(e,t,n
){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ImageInfo=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),o=a(n("17x9")),h=n("RUem"),m=a(n("sEfC")),v=n("/5+U"),g=function(e){function o(){var e,r;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(r)),"imageRef",function(e){return r.$image=e}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleClick",function(){var e=r.props,t=e.imageSetZip,n=e.name;(0,v.downloadWithATag)({url:t,name:n,type:"zip"})}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleOnload",function(){(0,v.adjustImageRect)({image:r.$image,adjust:38}),r.setState({imageLoad:!0})}),(0,f.default)((0,d.default)((
0,d.default)(r)),"handleError",function(){console.error("image info error")}),(0,f.default)((0,d.default)((0,d.default)(r)),"debounceClick",(0,m.default)(r.handleClick,500,{leading:!0})),r}return(0,s.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this.props,t=e.imageSet,n=e.name,r=t[0].src,a={background:"url(".concat(y,") left top"),backgroundSize:"cover"}
return p.default.createElement(h.WrapComponent,null,p.default.createElement("div",{className:"slice-title"},I18N.preview_panel.export,p.default.createElement("span",{onClick:this.debounceClick},I18N.preview_panel.download_single)),p.default.createElement("div",{className:"slice-panel"},p.default.createElement("div",{className:"slice-item-wrap",style:a},p.default.createElement("img",{src:r,alt:n,ref:this.imageRef,onLoad:this.handleOnload,onError:this.handleError})),p.default.createElement("p",{
className:"slice-item-name"},n)))}}]),o}(p.PureComponent)
t.ImageInfo=g,(0,f.default)(g,"propTypes",{imageSetZip:o.default.string,imageSet:o.default.array,name:o.default.string})
var y="/images/preview/slice-bg.png"},"1hJj":function(e,t,n){var r=n("Z0cm")
e.exports=function(){if(!arguments.length)return[]
var e=arguments[0]
return r(e)?e:[e]}},"1iCU":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SHELL_TYPE_LIST_WITHOUT_DEVICE=t.SHELL_TYPE_LIST=t.TOOLBAR_TRAKING_CONFIG=t.PREVIEW_OFFLINE_ICON_LIST=t.PREVIEW_ICON_LIST=t.PREVIEW_CONFIG=t.COMMENT=t.PREVIEW=t.INSPECT=void 0
var r="inspect"
t.INSPECT=r
var a="preview",o="comment",i=[t.PREVIEW=a,r,t.COMMENT=o]
t.PREVIEW_CONFIG=i
var c=[{label:I18N.preview.preview,icon:a},{label:I18N.preview_panel.developer_mode,icon:r},{label:I18N.preview_panel.comment,icon:o}],u=(t.PREVIEW_ICON_LIST=c).slice(0,2)
t.PREVIEW_OFFLINE_ICON_LIST=u
t.TOOLBAR_TRAKING_CONFIG={preview:"打开了预览界面",inspect:"切换到标注页面",comment:"切换到评论页面"}
var l=[{value:"device",label:I18N.device_shell},{value:"default",label:I18N.default_shell},{value:"none",label:I18N.none_shell}],s=(t.SHELL_TYPE_LIST=l).concat().splice(1,2)
t.SHELL_TYPE_LIST_WITHOUT_DEVICE=s},"1mjR":function(e,t,n){},"2AqR":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("H27A")),h=n("upRB"),i=(0,a.connect)(function(e){var t=e.model,n=t.current.screenCid,r=t.unreadComment.unreadCountScreenMap,a=e.container,o=a.common.scale,i=a.previewSetting,c=i.toolbarActiveItem,u=i.loadSliceUrl,l=(0,h.getCurrentProject)(e),s=(0,h.getIsScrollable)(e),d=(0,h.getIsHighlight)(e),f=(0,h.getIsStickyShow)(e),p=(0,h.getShellType)(e)
return{scale:o,project:l,toolbarActiveItem:c,existUnreadComment:!!r[n],loadSliceUrl:u,isScrollable:s,isHighlight:d,isStickyShow:f,shellType:p}})(o.default)
t.default=i},"2b0G":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("6XO9")
n("mxnB")
var h=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement("span",{className:"last-screen","data-action":"last",onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"left-arrow",name:"angle_bracket_left"})),f.default.createElement("span",{className:"next-screen","data-action":"next",
onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"right-arrow",name:"angle_bracket_right"})))}}]),t}(f.PureComponent)
t.default=h,(0,s.default)(h,"propTypes",{onClick:d.default.func})},"2eJi":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var y=r(n("J4zp")),a=r(n("MVZn")),b=n("upRB"),o=n("4daP"),w=n("Gbs1"),i=(0,a.default)({},o.playSettingEntry,{"entry:init:preview:scale":function(e){var t=e.getState,n=e.dispatch,r=t(),a=(0,b.getCurrentProject)(r)
if(MB.isUIChina()&&"geely_center_control"===a.model)n({type:"preview:set:scale",payload:{scale:40}})
else{var o,i=a.cid,c=(o=i,Number(MB.localStorageDelegate.getItem("preview_scale_".concat(o))))
c&&!MB.isForum()?n({type:"preview:set:scale",payload:{scale:c}}):n({type:"entry:auto-fit:preview:scale"})}},"entry:auto-fit:preview:scale":function(e){var t=e.getState,n=e.dispatch,r=t(),a=r.container.previewSetting.isFullScreenMode,o=(0,b.getCurrentProject)(r),i=(0,b.getCurrentScreen)(r),c=(0,b.getShellType)(r),u=(0,w.getProjectShell)(o,c),l="landscape"===i.orientation?[u.height,u.width]:[u.width,u.height],s=(0,y.default)(l,2),d=s[0],f=s[1],p=o.template?.8:1,h=a||MB.isForum()?0:500,m=window.innerWidth*p-h,
v=window.innerHeight*p-56,g=100*Math.min((v-40)/f,(m-40)/d)
n({type:"preview:set:scale",payload:{scale:Math.min(Math.max(g,20),100)}})},"entry:preview:set:scale":function(e,t){var n,r,a=e.dispatch,o=e.getState,i=t.payload.scale,c=o(),u=c.model.current.projectCid
!c.container.previewSetting.isFullScreenMode&&(n=u,r=i,MB.localStorageDelegate.setItem("preview_scale_".concat(n),r)),a({type:"preview:set:scale",payload:{scale:i}})},"entry:update:screen:state":function(e,t){var n=e.dispatch,r=t.payload,a=r.screen,o=r.stateCid,i=a.dup()
i.state_cid=o,n({type:"screens:update-local",payload:i})},"entry:preview:set:canvas:offset":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload.offset,o=n(),i=(0,b.getCurrentScreen)(o),c=(0,b.getCurrentScale)(o),u=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),l=u.width,s=u.height,d=Math.max(3.5*l,i.width*c/100*2),f=Math.max(3.5*s,i.height*c/100*2),p=a.x,h=a.y
r({type:"preview:set:canvas:offset",payload:{offset:{x:p=-Math.max(Math.min(-p,d/2),-d/2),y:h=-Math.max(Math.min(-h,f/2),-f/2)}}})},"entry:update:scrollbar:viewport":function(e){var t=e.dispatch,n=document.querySelector("#preview_scrollBar_viewport")
if(n){var r=n.getBoundingClientRect()
t({type:"preview:scrollbar:viewport",payload:{width:r.width,height:r.height}})}}})
t.entryMap=i},"2g7H":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("MVZn")),c=n("upRB"),u={useTransform:!1,disableTouch:!1,disablePointer:!0,preventDefault:!0,ignoreEventException:function(e){var t=$(e.target).closest(".widget")
if(t.length){if(t.hasClass("webpage"))return!0
if(t.hasClass("map_view"))return!0
if(t.find("input").length)return!0}var n=$(e.target).closest(".ppanel")
if(n.length){var r=Panel.find(n.data("cid")),a=r.getState(MB.currentScreen.state_cid),o=r.mainState()
if(o.height>a.height||o.width>a.width)return!0}return!1}},l=(0,i.default)({},u,{probeType:3,scrollbars:!0,mouseWheel:!0,disableMouse:!1,interactiveScrollbars:!0,shrinkScrollbars:"scale",fadeScrollbars:!0}),s=function(){function e(){(0,a.default)(this,e),this.iScrollMap={}}return(0,o.default)(e,[{key:"clear",value:function(){this.destroyScrollBar()}},{key:"setObjectUrl",value:function(e,t){e&&(e.contentWindow?e.contentWindow.location.replace(t):e.setAttribute("src",t))}},{key:"deviceOrient",value:function(){
return $(window).width()>$(window).height()?"landscape":"portrait"}},{key:"initScrollBar",value:function(e){if(!this.iScrollMap[e]){var n=document.querySelector("#pscreen".concat(e," .screen-content"))
if(n){var t=MB.isMobile()?u:l,r=new window.IScroll(n,t),a=document.querySelector("#sticky-container")
a&&(r.on("scroll",function(e){var t=n.querySelector(".widgets")
a.querySelector("#stickies").style.marginTop=t.style.top}),$(n).on("wheel",function(e){n.offsetHeight!==n.scrollHeight&&e.stopPropagation()})),this.iScrollMap[e]=r}}}},{key:"toggleScrollBar",value:function(t){Object.values(this.iScrollMap).forEach(function(e){t?e.enable():e.disable()})}},{key:"refreshScrollBar",value:function(e){this.iScrollMap[e]&&this.iScrollMap[e].refresh()}},{key:"resetScreenScrollState",value:function(e){var t=this.iScrollMap[e]
t&&t.scrollTo(0,0)
var n=document.querySelector("#stickies")
n&&(n.style.marginTop=0)}},{key:"destroyScrollBar",value:function(){Object.values(this.iScrollMap).forEach(function(e){$(e.wrapper).off("wheel"),e.destroy()}),this.iScrollMap={}}},{key:"resetScrollState",value:function(){Object.values(this.iScrollMap).forEach(function(e){return e.scrollTo(0,0)})
var e=document.querySelector("#stickies")
e&&(e.style.marginTop=0)}},{key:"setScreenBg",value:function(e){var t=Screen.find(e.data("cid"))
e.css({"background-color":t.bg(),"background-image":t.bgimage?"url(".concat(t.getRealBgImage(),")"):""})}},{key:"setupSplash",value:function(e,t){e.w()>e.dH()?(t.css("top",0-e.dW()),t.width(e.dH()),t.height(e.dW())):(t.css("top",0),t.width(e.dW()),t.height("101%"))}},{key:"screenPreview",value:function(e){return'\n      <div id="pscreen'.concat(e.cid,'" class="pcanvas ').concat(e.orient(),'" data-cid="').concat(e.cid,'" data-orientation="').concat(e.orient(),
'">\n        <div class="screen-header"></div>\n        <div class="screen-content">\n          <div class="widgets">\n            <div class="scontainer"></div>\n          </div>\n        </div>\n        <div class="screen-footer"></div>\n      </div>\n    ')}},{key:"getIsHighlight",value:function(){return(0,c.getIsHighlight)(MB.webpackInterface.store.getState())}},{key:"getIsScreenExpanded",value:function(){return(0,c.getIsScreenExpanded)(MB.webpackInterface.store.getState())}}]),e}()
t.default=s},"2qqa":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.footerFilter=t.headerFilter=t.generateItems=t.getItemsWithPrevData=void 0
var a=r(n("MVZn")),o=n("0k54"),u=n("IB8Z")
t.getItemsWithPrevData=function(r,a){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,t=3<arguments.length?arguments[3]:void 0,i=[];(0,u.getWidgetsByScreenCid)(r.cid,t).forEach(function(e){if("sticky"!==e.name){var t=Widgetstate.find(a+e.cid)||e,n=Widgetstate.find(o+e.cid)||e
Object.assign(t,{z:n.z,gid:n.gid,timestamp:n.timestamp}),t.cid=e.cid,t.screen_cid=r.cid,i.push(t)}})
var c=new Set,e=r.cpanels().map(function(e){c.add(e.template_cid)
var t=Panelstate.find(a+e.cid)||e,n=Panelstate.find(o+e.cid)||e
return Object.assign(t,{z:n.z,gid:n.gid,timestamp:n.timestamp}),t.cid=e.cid,t.template_cid=e.template_cid,t.screen_cid=r.cid,t})
return c.forEach(function(e){Template.find(e).cscreens().forEach(function(e){(0,u.getWidgetsByScreenCid)(e.cid,t).forEach(function(e){"sticky"!==e.name&&i.push(e)})})}),e.concat(i)}
t.generateItems=function(n,r,t){var a=[];(0,u.getWidgetsByScreenCid)(n.cid,t).forEach(function(e){if("sticky"!==e.name){var t=Widgetstate.find(r+e.cid)||e
t.cid=e.cid,t.screen_cid=n.cid,a.push(t)}})
var o=new Set,e=n.cpanels().map(function(e){o.add(e.template_cid)
var t=Panelstate.find(r+e.cid)||e
return t.cid=e.cid,t.template_cid=e.template_cid,t.screen_cid=n.cid,t})
return o.forEach(function(e){Template.find(e).cscreens().forEach(function(e){(0,u.getWidgetsByScreenCid)(e.cid,t).forEach(function(e){"sticky"!==e.name&&a.push(e)})})}),e.concat(a)}
t.headerFilter=function(e,t){var n=e.children.filter(function(e){return 0===e.widget.primary_fixed&&("group"!==e.type?e.widget.t()<t:(0,o.getTreeBoundingRect)(e).minY<t)})
return(0,a.default)({},e,{children:n})}
t.footerFilter=function(e,n,r){var t=e.children.filter(function(e){if(0!==e.widget.primary_fixed)return!1
var t=n-e.widget.b()
return"group"!==e.type?t<r:n-(0,o.getTreeBoundingRect)(e).maxY<r})
return(0,a.default)({},e,{children:t})}},"2rXa":function(e,t,n){},"2s0x":function(e,t,n){e.exports={"slice-container":"yWKU8qVPbqrRIRSJ_TjGi","slice-load-wrap":"_3WsSTJxbz12iOHZ8ntxQf8","slice-item":"_2vvvzR2E0SoIZOD3DAqHza",active:"_2WpARMx4pqMBHK1KM0kjLj",download:"_1hNQ5s7ZGKL2NIxtApkdLY","icon-download":"_2Bxe5XoVHVItE0i88jpN6d","no-slice":"_2d9jp1Mvca7Pr9eZSIevfN",spinner:"_1u-FVwfgZb3ahxMGw1-PnC","rotate-infinite":"_3nSb5BvCbI3mKp-n2u4hun","download-slice-load":"_3tq61brpxkFdCxReM8KHY-"}},
"3X8Y":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){return(new Date).getTime()},c=function(){function e(){(0,a.default)(this,e),this.mouseState={down:!1,moved:!1},this.scrollState={x:null,y:null,left:null,top:null,target:null},this.coolDownTime=i(),this.coolDownInterval=200}return(0,o.default)(e,[{key:"isCoolDown",value:function(){var e=i()-this.coolDownTime
return this.coolDownTime+=e,e>this.coolDownInterval}},{key:"resetCoolDown",value:function(){this.coolDownTime-=this.coolDownInterval}},{key:"bindMobile",value:function(e){var t=e.onOrientationChange
window.onorientationchange&&window.addEventListener("orientationchange",t),window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&t()})}},{key:"bindDesktop",value:function(e){var t=this,n=e.onAppMouseDown,r=e.onAppMouseMove
$("body").on("mousedown","#simulator",function(e){if(n(e,t.scrollState,t.mouseState))return!0
t.mouseState.down=!0,t.mouseState.moved=!1,t.scrollState.x=e.clientX,t.scrollState.y=e.clientY}).on("mousemove","#simulator",function(e){if(r(e,t.scrollState,t.mouseState))return!0
t.mouseState.moved=!0}),window.addEventListener("mouseup",function(){t.mouseState.down=!1,t.mouseState.moved=!1})}}]),e}()
t.default=c},"3caq":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createWorkspacePusher=void 0
var u,w=r(n("o0o1")),l=r(n("yXPU")),s=r(n("MVZn")),d=n("Hmy9"),f=n("Clcl"),p=n("LPEl"),h=n("RrAf"),m=n("qYFl"),v=window.MB
t.createWorkspacePusher=function(e){var n=e.filterStaleData,t=(0,s.default)({},h.initialSocketState,{projectCidList:[]}),a=(0,h.createSocketStore)(t)
a.openSocket({userId:v.user.id})
var c=a.getState().userSocket
c.on("broadcast:user:notification",function(e){return a.dispatchEvent({type:"socket:broadcast:user:notification",payload:e})}),c.on("broadcast:user:data",function(e){return a.dispatchEvent({type:"socket:broadcast:user:data",payload:e})}),c.on("broadcast:project:data",function(e){return a.dispatchEvent({type:"socket:broadcast:project:data",payload:e})}),c.on("broadcast:project:batch-save",function(e){return a.dispatchEvent({type:"socket:broadcast:project:batch-save",payload:e})})
var r=(i=(0,l.default)(w.default.mark(function e(t){var n,r
return w.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState(),r=n.projectCidList,e.abrupt("return",!r.includes(t)&&c.emitAsync("join:projects",{projectCidList:[t]}).then(function(e){console.log("userSocket joined project",e),a.setState({projectCidList:(0,p.arrayMatchPush)(r,t)})},f.REPORT_ERROR))
case 2:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)}),o=function(){var e=a.getState().projectCidList
return c.emitAsync("leave:projects",{projectCidList:e}).then(function(e){console.log("userSocket left all project",e),a.setState({projectCidList:[]})},f.REPORT_ERROR)},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],i=a.getServerTimestamp(),t=e.reduce(function(e,t){var n=t.object,r=n.cid,a=n.mtime,o=void 0===a?i:a
return e[r]=o,e},{})
return n(t)}
var i
return a.addEventListener("socket:open",(0,l.default)(w.default.mark(function e(){var t,n,r
return w.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.getState(),n=t.userSocket,r=t.projectCidList,e.t0=r.length,e.t0)return e.next=5,n.emitAsync("join:projects",{projectCidList:r}).catch(f.REPORT_ERROR)
e.next=5
break
case 5:case"end":return e.stop()}},e,this)}))),a.addEventListener("socket:broadcast:user:notification",function(e){var t=e.type,n=e.payload
console.log("[SocketBroadcastData]",t,n),u&&(0,d.handleNotification)(n,u)}),a.addEventListener("socket:broadcast:user:data",function(e){var t=e.type,n=e.payload
console.log("[SocketBroadcastData]",t,n)
var r=b(n).remoteStaleCidSet,a=!0,o=!1,i=void 0
try{for(var c,u=n[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var l=c.value,s=l.action,d=l.className,f=l.object
y(r,d,s,f)}}catch(e){o=!0,i=e}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}}),a.addEventListener("socket:broadcast:project:data",function(e){var p=e.type,h=e.payload
return a.queueAsync((0,l.default)(w.default.mark(function e(){var t,n,r,a,o,i,c,u,l,s,d,f
return w.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[SocketBroadcastData]",p,h),t=b(h),n=t.remoteStaleCidSet,a=!(r=!0),o=void 0,e.prev=5,i=h[Symbol.iterator]()
case 7:if(r=(c=i.next()).done){e.next=14
break}return u=c.value,l=u.action,s=u.className,d=u.object,f=u.extraInfo,e.next=11,S(n,s,l,d,f)
case 11:r=!0,e.next=7
break
case 14:e.next=20
break
case 16:e.prev=16,e.t0=e.catch(5),a=!0,o=e.t0
case 20:e.prev=20,e.prev=21,r||null==i.return||i.return()
case 23:if(e.prev=23,a)throw o
e.next=26
break
case 26:return e.finish(23)
case 27:return e.finish(20)
case 28:case"end":return e.stop()}},e,this,[[5,16,20,28],[21,,23,27]])})))}),a.addEventListener("socket:broadcast:project:batch-save",function(e){var g=e.type,y=e.payload
return a.queueAsync((0,l.default)(w.default.mark(function e(){var t,n,r,a,o,i,c,u,l,s,d,f,p,h,m,v
return w.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[SocketBroadcastData]",g,y),t=y.fromUser,n=y.rootProjectCid,r=y.batchSaveQueue,a=(void 0===r?[]:r).map(function(e){var t=e.method,n=e.body,r=e.extraInfo
return{className:r.className,action:"PUT"===t?"update":"DELETE"===t?"destroy":"POST"===t?"create":"",object:n?JSON.parse(n):{cid:r.cid},extraInfo:r}}),o=b(a),i=o.remoteStaleCidSet,u=!(c=!0),l=void 0,e.prev=7,s=a[Symbol.iterator]()
case 9:if(c=(d=s.next()).done){e.next=16
break}return f=d.value,p=f.className,h=f.action,m=f.object,v=f.extraInfo,e.next=13,S(i,p,h,m,v,n,t)
case 13:c=!0,e.next=9
break
case 16:e.next=22
break
case 18:e.prev=18,e.t0=e.catch(7),u=!0,l=e.t0
case 22:e.prev=22,e.prev=23,c||null==s.return||s.return()
case 25:if(e.prev=25,u)throw l
e.next=28
break
case 28:return e.finish(25)
case 29:return e.finish(22)
case 30:case"end":return e.stop()}},e,this,[[7,18,22,30],[23,,25,29]])})))}),(0,s.default)({},a,{requestBatchSave:function(e){var t=e.batchSaveQueue,n=void 0===t?[]:t,r=e.rootProjectCid,a=void 0===r?"":r,o=e.fromUser,i=void 0===o?{}:o
return c.emitAsync("request:project:batch-save",{batchSaveQueue:n,rootProjectCid:a,fromUser:i})},joinProject:r,leaveProject:function(t){var n=a.getState().projectCidList
return n.includes(t)&&c.emitAsync("leave:projects",{projectCidList:[t]}).then(function(e){console.log("userSocket left project",e),a.setState({projectCidList:(0,p.arrayMatchDelete)(n,t)})},f.REPORT_ERROR)},leaveAllProject:o,enableSocketChannel:r,resetSocketChannel:o,enableNotifier:g})}
var g=function(){u=u||(0,d.createNotifier)()},y=function(e,t,n,r){e.has(r.cid)||(0,m.isRemoteMtimeStale)(t,r.cid,r.mtime)||("Team"===t?(0,m.updateTeam)(n,r):"Project"===t?(0,m.updateProject)(n,r):"Collaborator"===t&&(0,m.updateCollaborator)(n,r))},S=function(){var i=(0,l.default)(w.default.mark(function e(t,n,r,a,o,i){var c,u,l,s,d=arguments
return w.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=6<d.length&&void 0!==d[6]?d[6]:{},t.has(a.cid)||(0,m.isRemoteMtimeStale)(n,a.cid,a.mtime))return e.abrupt("return")
e.next=3
break
case 3:if("Asset"===n)return e.abrupt("return",(0,m.updateAsset)(r,a))
e.next=5
break
case 5:if("PointComments::Comment"===n||"Comment"===n)return e.abrupt("return",v.webpackInterface&&v.webpackInterface.pushData("comments",r,a))
e.next=7
break
case 7:if("PointComments::Thread"===n||"CommentThread"===n)return e.abrupt("return",v.webpackInterface&&v.webpackInterface.pushData("comment-threads",r,a))
e.next=9
break
case 9:if(v.f.inSharing||!v.currentProject)return e.abrupt("return")
e.next=11
break
case 11:if(e.t0=m.updateWorkspaceMap[n],e.t0)return e.next=15,m.updateWorkspaceMap[n](r,a,o)
e.next=15
break
case 15:c.id&&(!(u="Screen"===n?a.cid:a.screen_cid)&&a.screenstate_cid&&(l=Screenstate.find(a.screenstate_cid))&&(u=l.screen_cid),(s=CoWorker.find(c.id)||new CoWorker({cid:c.id,name:c.name,avatar:c.avatar})).screen_cid=u,s.last_seen=new Date,s.save(),v.renderCoWorkers&&v.renderCoWorkers())
case 16:case"end":return e.stop()}},e,this)}))
return function(e,t,n,r,a,o){return i.apply(this,arguments)}}()},"3jXG":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("b6l+"),h=a(n("oJEp")),m=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.treeData,n=e.top,r=e.left,a=e.isSnapshot,o=t.widget,i=o.v&&Link.find(o.link_cids),c=i?i.cid:"",u=i&&"tap"!==i.gesture?i.gesture:"",l=o.mainState().cid,
s="ppanel panel".concat(i?" clickable":""),d=(0,p.getPanelStyle)(o,!0,n,r)
return f.default.createElement("div",{"data-cid":o.cid,"data-link_cid":c,className:s,id:"panel".concat(o.cid,"p"),style:d},t.children.map(function(e){return f.default.createElement(v,{key:e.cid,panel_cid:o.cid,treeData:e,isActive:e.cid===l,isSnapshot:a})}),f.default.createElement("div",{className:"region gesture ".concat(u)}))}}]),t}(f.PureComponent)
t.default=m,(0,s.default)(m,"propTypes",{treeData:d.default.object,top:d.default.number,left:d.default.number,isSnapshot:d.default.bool})
var v=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.treeData,n=e.panel_cid,r=e.isActive,a=e.isSnapshot,o=t.widget,i="state".concat(n).concat(o.cid,"p"),c=r?"pstate state active":"pstate state",u=o.bgimage?"url(".concat(o.getRealBgImage(),")"):"",l={backgroundColor:o.bgcolor,width:o.w(),height:o.h(),backgroundImage:u}
return f.default.createElement("div",{id:i,className:c,"data-cid":o.cid,style:l},f.default.createElement("div",{className:"pwidgets"},f.default.createElement("div",{className:"pscontainer"},t.children.map(function(e){return f.default.createElement(h.default,{key:e.cid,treeData:e,offSetX:0,offSetY:0,isSnapshot:a})}))))}}]),t}(f.PureComponent);(0,s.default)(v,"propTypes",{treeData:d.default.object,panel_cid:d.default.string,isActive:d.default.bool,isSnapshot:d.default.bool})},"4/ic":function(e,t,n){var r=n(
"ZWtO")
e.exports=function(t){return function(e){return r(e,t)}}},"4MIG":function(e,t,n){},"4Nrh":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("WVP6"),d=n("IT1M"),h=r(n("zkrS"))
function m(e){return JSON.parse(h.default.Storage.getItem("".concat(e,"_commentTick"))||"{}")}function v(e,t){h.default.Storage.setItem("".concat(e,"_commentTick"),JSON.stringify(t))}function f(e,t){var n=m(e)
n[t]=Math.ceil(.001*Date.now()+2),v(e,n)}function g(e,t,n){0!==n&&(e[t]=(e[t]||0)+n)}var o=(0,a.createStateStore)({projectCid:null,unreadCommentMap:{},unreadCountThreadMap:{},unreadCountScreenMap:{}}),i=o.getState,c=o.setState,u=o.wrapEntry,l={entryMap:{"unread-comment:init-for-project":u(function(e,t,n){var r=t.dispatch,a=n.payload,o=a.projectCid,i=a.commentThreadList,c=a.commentList,u=m(o),l={},s={}
i.forEach(function(e){var t=e.cid,n=e.screen_cid
s[t]=n,l[n]=u[n]})
var d={},f={},p={}
c.forEach(function(e){var t=e.cid,n=e.thread_cid,r=e.updated_at;(l[s[n]]||0)>=r||(d[t]=!0,g(f,n,1))}),i.forEach(function(e){var t=e.cid,n=e.screen_cid
return g(p,n,f[t]||0)}),v(o,l),function(){for(var i=.001*Date.now()-2592e3,c=[],e=function(e,t){var n=h.default.Storage.key(e)
if(!n.endsWith("_commentTick"))return"continue"
var r=JSON.parse(h.default.Storage.getItem(n)||"{}"),a=Object.keys(r)
a.forEach(function(e){r[e]<=i&&delete r[e]})
var o=Object.keys(r)
0===o.length?c.push(n):a.length!==o.length&&h.default.Storage.setItem(n,JSON.stringify(r))},t=0,n=h.default.Storage.length;t<n;t++)e(t)
c.forEach(function(e){return h.default.Storage.removeItem(e)})}(),r({type:"reducer:unread-comment:update",payload:{projectCid:o,unreadCommentMap:d,unreadCountThreadMap:f,unreadCountScreenMap:p}})}),"unread-comment:set-unread":u(function(e,t,n){var r=t.dispatch,a=n.payload,o=a.commentCid,i=a.threadCid,c=a.screenCid,u=e.unreadCommentMap,l=e.unreadCountThreadMap,s=e.unreadCountScreenMap
u[o]||(r({type:"reducer:unread-comment:update",payload:d.Operation.objectMerge(e,{unreadCommentMap:d.Operation.objectSet(u,o,!0),unreadCountThreadMap:d.Operation.objectSet(l,i,(l[i]||0)+1),unreadCountScreenMap:d.Operation.objectSet(s,c,(s[c]||0)+1)})}),f(e.projectCid,c))}),"unread-comment:set-read":u(function(e,t,n){var r=t.dispatch,a=n.payload.screenCid,o=e.unreadCountScreenMap
r({type:"reducer:unread-comment:update",payload:d.Operation.objectMerge(e,{unreadCountScreenMap:d.Operation.objectDelete(o,a)})}),f(e.projectCid,a)})},getState:i,setState:c}
t.default=l},"4QcC":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("M8nv")),h=a(n("17x9")),m=n("6XO9"),v=a(n("Lyer")),g=a(n("EDI8")),y=a(n("UbMB")).default.bind(g.default),b=MB.config.SCALES,w=function(e){function t(){var a
return(0,o.default)(this,t),a=(0,c.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(a)),"handleZoomIn",function(){var e=a.props,t=e.scale,n=e.dispatch
e.fromFullScreen&&MB.event("全屏模式缩放","运行页")
var r=b.findIndex(function(e){return t<e})
n({type:"entry:preview:set:scale",payload:{scale:b[r]||b[b.length-1]}})}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleZoomOut",function(){var e=a.props,t=e.scale,n=e.dispatch
e.fromFullScreen&&MB.event("全屏模式缩放","运行页")
var r=b.findIndex(function(e){return t<=e})
n({type:"entry:preview:set:scale",payload:{scale:b[r-1]||b[0]}})}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleResetScale",function(){(0,a.props.dispatch)({type:"entry:preview:set:scale",payload:{scale:100}})}),(0,d.default)((0,s.default)((0,s.default)(a)),"handleKeyDown",function(e){S(e,a.handleZoomIn,a.handleZoomOut,a.handleResetScale)}),a.state={isGuideShow:!1},a}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this
this.props.fromFullScreen||(this.openGuideTimer=setTimeout(function(){e.setState({isGuideShow:!0})},600))}},{key:"componentWillUnmout",value:function(){clearTimeout(this.openGuideTimer)}},{key:"render",value:function(){var e=this.props,t=e.scale,n=e.project,r=this.state.isGuideShow,a=t<400,o=20<t
return f.default.createElement(v.default,{id:"preview-zoom",localeKey:"zoom",X:"left",isOpen:r,gotItBtn:!0,noCloseBtn:!0},f.default.createElement("div",{className:y("zoom-count","preview-zoom-btn",{template:n.template})},f.default.createElement("a",{id:"zoomout",disabled:!o,title:I18N.zoomout,onClick:this.handleZoomOut,className:"fs-16"},f.default.createElement(m.SVG,{name:"scale_reduce"})),f.default.createElement("span",null,"".concat(Math.round(t),"%")),f.default.createElement("a",{id:"zoomin",
disabled:!a,title:I18N.zoomin,onClick:this.handleZoomIn,className:"fs-16"},f.default.createElement(m.SVG,{name:"scale_enlarge"})),f.default.createElement(p.default,{onKeyDown:this.handleKeyDown})))}}]),t}(f.PureComponent)
t.default=w,(0,d.default)(w,"propTypes",{scale:h.default.number,project:h.default.object,dispatch:h.default.func,fromFullScreen:h.default.bool}),(0,d.default)(w,"defaultProps",{fromFullScreen:!1})
var S=function(e,t,n,r){(e.ctrlKey||e.metaKey)&&(187==e.keyCode&&(e.preventDefault(),t()),189==e.keyCode&&(e.preventDefault(),n()),48==e.keyCode&&(e.preventDefault(),r()))}},"4WDG":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var N=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),c=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),O=r(n("q1tI")),I=a(n("M8nv")),P=a(n("foKU")),A=a(n("tBsX")),L=n("oose"),j=a(n("dYO+")),D=a(n("DdUa")),B=a(n("kJQk")),U=a(n("9ZUU")),F=a(n("TSYQ"))
n("fSKh")
var p=function(e){function t(e){var c
return(0,o.default)(this,t),c=(0,u.default)(this,(0,l.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(c)),"getContentElementRef",function(){return document.querySelector("#simulator-container")}),(0,d.default)((0,s.default)((0,s.default)(c)),"handleKeyDown",function(e){var t=c.props.dispatch,n=e.target.matches("input")||e.target.matches("textarea")
32===e.keyCode&&!n&&(e.preventDefault(),t({type:"preview:set:key:flags",payload:{isSpaceDown:!0}})),(e.ctrlKey||e.metaKey)&&13===e.keyCode&&(MB.event("全屏模式开启","运行页"),t({type:"entry:preview:select",payload:{toolbarActiveItem:"preview"}}),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!0}}),t({type:"entry:auto-fit:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:-28}}}))}),(0,d.default)((0,s.default)((0,s.default)(c)),"handleKeyUp",function(e){
c.props.dispatch({type:"preview:reset:key:flags"})}),(0,d.default)((0,s.default)((0,s.default)(c)),"handleMouseDown",function(e){c.props.isSpaceDown&&c.handleDrag(e)}),(0,d.default)((0,s.default)((0,s.default)(c)),"handleDrag",function(e){var n=e.clientX,r=e.clientY,t=c.props.canvasOffset,a=t.x,o=t.y,i=function(e){var t={x:a+(e.clientX-n),y:o+(e.clientY-r)}
c.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:t}})}
document.addEventListener("mousemove",i),document.addEventListener("mouseup",function e(t){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)})}),(0,d.default)((0,s.default)((0,s.default)(c)),"handleScaleChange",function(e){c.props.dispatch({type:"entry:preview:set:scale",payload:{scale:e}})}),(0,d.default)((0,s.default)((0,s.default)(c)),"handleOffsetChange",function(e,t){c.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:{x:e,y:t}}})}),c}return(0,
c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var r=this,e=this.props,t=e.scale,n=e.canvasOffset,a=e.project,o=e.screen,i=e.isSpaceDown,c=e.isStickyShow,u=e.isScrollable,l=e.shellType,s=e.isLayerActive,d=e.isCommentActive,f=e.isColorPickerActive,p=e.isFullScreenMode,h=n.x,m=n.y,v="landscape"===o.orientation,g=s||d,y=g||!u?"none":l,b=a.width,w=a.height,S=v?[w,b]:[b,w],E=(0,N.default)(S,2),C=E[0],_=E[1],x={width:C,height:_,minWidth:C,minHeight:_,transform:"matrix(1, 0, 0, 1, ".concat(h,", "
).concat(m,")")},k={transform:"scale(".concat(t/100,")")},M={width:"".concat(t,"%"),height:"".concat(t,"%")},T={width:o.width*t/100,height:o.height*t/100},R=(0,F.default)({"wait-drag":i,"is-immersive":g,"is-layer-active":s,"is-screen-expanded":g||!u})
return O.default.createElement(P.default,{x:h,y:m,scale:t,id:"simulator-container",className:R,onMouseDown:this.handleMouseDown,onScaleChange:this.handleScaleChange,onOffsetChange:this.handleOffsetChange},function(e,t,n){return O.default.createElement("div",{key:"1",className:(0,F.default)("screen-viewport",{"is-fullscreen":p,"is-geely":"geely_center_control"===a.model}),style:x},O.default.createElement("div",{className:"zoom-area",style:k},O.default.createElement(D.default,null),
!g&&O.default.createElement(j.default,{project:a,shellType:y,isLandscape:v}),c&&O.default.createElement(U.default,null)),O.default.createElement("div",{className:"no-zoom-area-wrapper",style:M},O.default.createElement("div",{className:"no-zoom-area",style:T},O.default.createElement("div",{id:"ui-layers",className:"ui-layers ".concat(s?"is-active":"")},f&&O.default.createElement(B.default,null),s&&!f&&O.default.createElement(A.default,null)),O.default.createElement("div",{id:"ui-comment-marker-panel"},
O.default.createElement(L.CommentMarkerPanelContainer,{getContentElement:r.getContentElementRef})))))},O.default.createElement(I.default,{onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}))}}]),t}(O.PureComponent);(t.default=p).propTypes={scale:f.default.number,canvasOffset:f.default.object,screen:f.default.object,project:f.default.object,shellType:f.default.string,isStickyShow:f.default.bool,isScrollable:f.default.bool,isSpaceDown:f.default.bool,isLayerActive:f.default.bool,
isCommentActive:f.default.bool,isColorPickerActive:f.default.bool,dispatch:f.default.func,isFullScreenMode:f.default.bool}},"4YeV":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.ProjectAlike,o=(0,r.createStateStore)([]),i=o.getState,c=o.setState,u=o.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:projects:update",payload:o(e,a,i)})})},s={entryMap:{"projects:refresh":l(a.refreshStateList,!1),"projects:add":l(a.addState,!1),"projects:add-local":l(a.addState,!0),"projects:update":l(a.updateState,!1),"projects:update-local":l(a.updateState,!0),"projects:delete":l(a.deleteState,!1),"projects:delete-local":l(a.deleteState,!0)},getState:i,setState:c}
t.default=s},"4daP":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.playSettingEntry=void 0
var i=n("upRB"),c=n("7Qib"),u="preview-is-scrollable",l="preview-is-stickyshow",s="preview-is-highlight",d="preview-shell-type",r={"entry:init:preview-setting":function(e){var t=e.getState,n=e.dispatch,r=t(),a=(0,i.getCurrentProject)(r),o=(0,c.localStorageGetItem)(d)?(0,c.localStorageGetItem)(d):a.shell_type
n({type:"reducer:preview-toolbar:update",payload:{isScrollable:"false"!==(0,c.localStorageGetItem)(u),isStickyShow:"false"!==(0,c.localStorageGetItem)(l),isHighlight:(0,c.localStorageGetItem)(s)?"false"!==(0,c.localStorageGetItem)(s):a.highlight,shellType:o}})},"entry:preview-setting:update:is-highlight":function(e,t){var n=e.dispatch,r=t.payload.isHighlight;(0,c.localStorageSetItem)(s,r),n({type:"reducer:preview-toolbar:update",payload:{isHighlight:r}})},"entry:preview-setting:update:shell-type":function(e
,t){var n=e.dispatch,r=t.payload.shellType;(0,c.localStorageSetItem)(d,r),n({type:"reducer:preview-toolbar:update",payload:{shellType:r}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-scrollable":function(e,t){var n=e.dispatch,r=t.payload.isScrollable;(0,c.localStorageSetItem)(u,r),n({type:"reducer:preview-toolbar:update",payload:{isScrollable:r}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-sticky-show":function(e,t){var n=e.dispatch,
r=t.payload.isStickyShow;(0,c.localStorageSetItem)(l,r),n({type:"reducer:preview-toolbar:update",payload:{isStickyShow:r}})}}
t.playSettingEntry=r},"4dyd":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("UJpD")),m=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleResize",function(){var e=t.elem.getBoundingClientRect()
t.props.onResize(e)}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentDidMount",value:function(){this.elem.contentWindow.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){var e=this.elem.contentWindow
e&&e.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var t=this
return p.default.createElement("iframe",{ref:function(e){return t.elem=e},className:h.default.detector})}}]),o}(p.PureComponent);(t.default=m).propTypes={onResize:o.default.func.isRequired}},"4sCl":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),m=r(n("q1tI")),v=a(n("TSYQ")),g=a(n("SFPg")),p=n("/5+U"),y=n("veUc")
n("oKLx")
var h=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"state",{ifHideLayer:!1}),(0,f.default)((0,d.default)((0,d.default)(t)),"onMouseLeave",function(){"number"==typeof t.props.activeLayerID?t.props.enterLayer("artboard-base"):t.props.enterLayer(t.props.currentScreen.cid)}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentWillReceiveProps",value:function(e){var t=e.currentScreen,n=e.activeLayerID,r=this.props,
a=r.currentScreen,o=r.enterLayer
t!=a&&o(-1),-1!==n&&n?this.setState({ifHideLayer:!1}):this.setState({ifHideLayer:!0})}},{key:"render",value:function(){var e=this.props,t=e.isShowLayerList,n=e.layers,r=e.currentScreen,a=e.unit,o=e.ratio,i=e.activeLayerID,c=e.enteredLayerID,u=e.enterLayer,l=e.requestSelectLayer,s=e.handleShowlayerInfo,d=this.state.ifHideLayer,f=(0,y.transformLayersFormat)(n),p=b(a,o,u,i,c,l,s),h={top:0,left:0,width:r.width,height:r.height}
return m.default.createElement("div",{className:(0,v.default)("LayerList",{hiddenLayer:d&&t}),onMouseLeave:this.onMouseLeave},f.map(function(e){return m.default.createElement(g.default,{key:e.id,layer:e,parentRect:h,treeProps:p})}))}}]),o}(m.Component)
t.default=h,(0,f.default)(h,"propTypes",{isSpaceDown:o.default.bool,layers:o.default.array,requestSelectLayer:o.default.func,resetLayer:o.default.func,artboard:o.default.object,enterLayer:o.default.func,handleShowlayerInfo:o.default.func,currentScreen:o.default.object,activeLayerID:o.default.oneOfType([o.default.number,o.default.string]),enteredLayerID:o.default.oneOfType([o.default.number,o.default.string]),isShowLayerList:o.default.bool,unit:o.default.string,ratio:o.default.number,dispatch:o.default.func}
)
var b=(0,p.immutableTransformCache)(function(e,t,n,r,a,o,i){return{unit:e,ratio:t,enterLayer:n,activeLayerID:r,enteredLayerID:a,requestSelectLayer:o,handleShowlayerInfo:i}})},"4sDh":function(e,t,n){var c=n("4uTw"),u=n("03A+"),l=n("Z0cm"),s=n("wJg7"),d=n("shjB"),f=n("9Nap")
e.exports=function(e,t,n){for(var r=-1,a=(t=c(t,e)).length,o=!1;++r<a;){var i=f(t[r])
if(!(o=null!=e&&n(e,i)))break
e=e[i]}return o||++r!=a?o:!!(a=null==e?0:e.length)&&d(a)&&s(i,a)&&(l(e)||u(e))}},"4uTw":function(e,t,n){var r=n("Z0cm"),a=n("9ggG"),o=n("GNiM"),i=n("dt0z")
e.exports=function(e,t){return r(e)?e:a(e,t)?[e]:o(i(e))}},"4vJh":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:preview-panel:search":return(0,a.default)({},e,r)
case"reducer:preview-panel:reset":return o
default:return e}}
var a=r(n("MVZn")),o={screenSearch:""}},"4x8W":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case"event-sign-up:close:modal":return(0,a.default)({open:!1},e)
case"event-sign-up:set:event":return t.payload
default:return e}}
var a=r(n("MVZn")),o={open:!1,event:{}}},"6PGs":function(e,t,n){e.exports={"screen-info":"_2v9yoyzXbIx0ZN2HixE5HA"}},"6ZRU":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("MVZn")),o=n("/MKj"),i=r(n("/cyv")),c=r(n("HfeQ")),u={Alert:(0,o.connect)(function(e){return(0,a.default)({},e.container.alert)})(c.default)},l={reducers:i.default,containers:u}
t.default=l},"6acW":function(e,t,n){var r=n("dt0z"),a=n("gQMU")
e.exports=function(e){return a(r(e).toLowerCase())}},"6cfl":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=n("/MKj"),m=a(n("bNtH")),v=a(n("4dyd")),g=a(n("/OM1")),y=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleResize",function(){return t.props.dispatch({type:"entry:update:scrollbar:viewport"})}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleScroll",function(e){return t.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:e}})}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,n=e.screen,r=e.scale,
a=e.viewport,o=a.width,i=a.height,c={x:Math.max(3.5*o,n.width*r/100*2),y:Math.max(3.5*i,n.height*r/100*2)}
return p.default.createElement("div",{className:g.default.scroll_bar_container,id:"preview_scrollBar_viewport"},p.default.createElement(m.default,{canvasOffset:t,viewportWidth:o,viewportHeight:i,canvasRange:c,onScroll:this.handleScroll}),p.default.createElement(v.default,{onResize:this.handleResize}))}}]),o}(p.PureComponent);(0,f.default)(y,"propTypes",{canvasOffset:o.default.object,dispatch:o.default.func,scale:o.default.number,screen:o.default.object,viewport:o.default.object})
var b=(0,h.connect)(function(e){var t=e.container.common,n=t.offset,r=t.scale,a=t.viewport,o=e.model,i=o.current.screenCid
return{canvasOffset:n,scale:r,screen:o.screens.find(function(e){return e.cid===i}),viewport:a}})(y)
t.default=b},"6gQ3":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("rESR")),i=n("/5+U"),c=(0,a.connect)(function(e){var t=e.model,n=t.user,r=t.current.projectCid,a=t.projects,o=t.screens,i=e.container,c=i.common.offset,u=i.previewSetting.toolbarActiveItem,l=!!n.id,s=Boolean(c.x||c.y),d=h(a,r),f=p.has(d.access_token)
return{isLoggedIn:l,isDisplaced:s,screensCount:o.reduce(function(e,t){return t.project_cid===r?e+1:e},0),project:d,isDemo:f,toolbarActiveItem:u}})(o.default)
t.default=c
var p=new Set(["demo","cS1AXKF5jtrJePbEKiYcdcHosQPdzrk","workout","sI3GY2tDz76RrZ4MGFiIcZTZpAHyluC","UMQzYmknxWeHNvvVyeyJDuSkgyvi6Xw","9Py1L5RdC8ZPRSmnWEt4uuUUSDUAxkM"]),h=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})})},"6nK8":function(e,t,n){var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),i=n("9NmV")
e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?i(e):r(e):e.match(t)||[]}},"6x+O":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getModalElement=function(){var e=document.createElement("div")
return document.body.appendChild(e),e},t.getDomInfo=function(){var e=document.querySelector(".mb-viewport").getBoundingClientRect()
return{screenTop:e.top,screenLeft:e.left,screenWidth:e.width,screenHeight:e.height}},t.elementsFromPoint=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.body
if("function"==typeof document.elementsFromPoint)return document.elementsFromPoint(e,t)
if("function"==typeof document.msElementsFromPoint)return document.msElementsFromPoint(e,t)
var r=[],a=[],o=0,i=document.elementFromPoint(e,t)
for(;i&&i!==n&&i!==document.body&&!(5<o++);)console.log(i),r.push(i),a.push(i.style.pointerEvents),i.style.pointerEvents="none",i=document.elementFromPoint(e,t)
for(var c=0;c<a.length;c++)r[c].style.pointerEvents=a[c]
return r},t.isVisible=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.right,o=t.bottom,i=document.elementFromPoint((r+a)/2,(n+o)/2)
return e.contains(i)},t.getSelectionAttributes=function(){var e=document.getSelection()
if(!(0<e.rangeCount))return{}
var t=e.getRangeAt(0),n={},r=t.commonAncestorContainer
for(;r&&"P"!==r.nodeName&&"text_editor"!==r.id;){if(1===r.nodeType)switch(r.nodeName){case"I":n.italic=!0
break
case"B":n.bold=!0
break
case"U":n.underline=!0
break
case"STRIKE":n.lineThrough=!0
break
case"FONT":n.tc=r.color
var a=r.style.backgroundColor
a&&(n.bg=MB.rgb2hex(a))
break
case"SPAN":n.bg=MB.rgb2hex(r.style.backgroundColor)}r=r.parentNode}return n},t.stopReactEventPropagation=void 0
t.stopReactEventPropagation=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},"6xEa":function(e,t,n){var r,a=function(){var g=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={}
function o(e,t){if(!a[e]){a[e]={}
for(var n=0;n<e.length;n++)a[e][e.charAt(n)]=n}return a[e][t]}var i={compressToBase64:function(e){if(null==e)return""
var t=i._compress(e,6,function(e){return n.charAt(e)})
switch(t.length%4){default:case 0:return t
case 1:return t+"==="
case 2:return t+"=="
case 3:return t+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,function(e){return o(n,t.charAt(e))})},compressToUTF16:function(e){return null==e?"":i._compress(e,15,function(e){return g(e+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(e){for(var t=i.compress(e),n=new Uint8Array(2*t.length),r=0,a=t.length;r<a;r++){var o=t.charCodeAt(r)
n[2*r]=o>>>8,n[2*r+1]=o%256}return n},decompressFromUint8Array:function(e){if(null==e)return i.decompress(e)
for(var t=new Array(e.length/2),n=0,r=t.length;n<r;n++)t[n]=256*e[2*n]+e[2*n+1]
var a=[]
return t.forEach(function(e){a.push(g(e))}),i.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,function(e){return r.charAt(e)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,function(e){return o(r,t.charAt(e))}))},compress:function(e){return i._compress(e,16,function(e){return g(e)})},_compress:function(e,t,n){if(null==e)return""
var r,a,o,i={},c={},u="",l="",s="",d=2,f=3,p=2,h=[],m=0,v=0
for(o=0;o<e.length;o+=1)if(u=e.charAt(o),Object.prototype.hasOwnProperty.call(i,u)||(i[u]=f++,c[u]=!0),l=s+u,Object.prototype.hasOwnProperty.call(i,l))s=l
else{if(Object.prototype.hasOwnProperty.call(c,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)m<<=1,v==t-1?(v=0,h.push(n(m)),m=0):v++
for(a=s.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}else{for(a=1,r=0;r<p;r++)m=m<<1|a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a=0
for(a=s.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}0==--d&&(d=Math.pow(2,p),p++),delete c[s]}else for(a=i[s],r=0;r<p;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1
0==--d&&(d=Math.pow(2,p),p++),i[l]=f++,s=String(u)}if(""!==s){if(Object.prototype.hasOwnProperty.call(c,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)m<<=1,v==t-1?(v=0,h.push(n(m)),m=0):v++
for(a=s.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}else{for(a=1,r=0;r<p;r++)m=m<<1|a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a=0
for(a=s.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1}0==--d&&(d=Math.pow(2,p),p++),delete c[s]}else for(a=i[s],r=0;r<p;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1
0==--d&&(d=Math.pow(2,p),p++)}for(a=2,r=0;r<p;r++)m=m<<1|1&a,v==t-1?(v=0,h.push(n(m)),m=0):v++,a>>=1
for(;;){if(m<<=1,v==t-1){h.push(n(m))
break}v++}return h.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(e,t,n){var r,a,o,i,c,u,l,s=[],d=4,f=4,p=3,h="",m=[],v={val:n(0),position:t,index:1}
for(r=0;r<3;r+=1)s[r]=r
for(o=0,c=Math.pow(2,2),u=1;u!=c;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
switch(o){case 0:for(o=0,c=Math.pow(2,8),u=1;u!=c;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
l=g(o)
break
case 1:for(o=0,c=Math.pow(2,16),u=1;u!=c;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
l=g(o)
break
case 2:return""}for(a=s[3]=l,m.push(l);;){if(v.index>e)return""
for(o=0,c=Math.pow(2,p),u=1;u!=c;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
switch(l=o){case 0:for(o=0,c=Math.pow(2,8),u=1;u!=c;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
s[f++]=g(o),l=f-1,d--
break
case 1:for(o=0,c=Math.pow(2,16),u=1;u!=c;)i=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=n(v.index++)),o|=(0<i?1:0)*u,u<<=1
s[f++]=g(o),l=f-1,d--
break
case 2:return m.join("")}if(0==d&&(d=Math.pow(2,p),p++),s[l])h=s[l]
else{if(l!==f)return null
h=a+a.charAt(0)}m.push(h),s[f++]=a+h.charAt(0),a=h,0==--d&&(d=Math.pow(2,p),p++)}}}
return i}()
void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)},"711d":function(e,t){e.exports=function(t){return function(e){return null==e?void 0:e[t]}}},"740n":function(e,t,n){e.exports={scrollbar:"_1Su5P8hkspcsNxxqlCFN8Z"}},"79/T":function(e,t,n){var r=n("sgoq")(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})
e.exports=r},"7GkX":function(e,t,n){var r=n("kekF")(Object.keys,Object)
e.exports=r},"7Qib":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setHidden=function(e){return e?{hidden:!0}:{}},t.camelizeKeys=function(e){return Object.entries(e).reduce(function(e,t){var n=(0,i.default)(t,2),r=n[0],a=n[1]
return Object.assign(e,(0,o.default)({},(0,c.default)(r),a))},{})},t.snakizeKeys=function(e){return Object.entries(e).reduce(function(e,t){var n=(0,i.default)(t,2),r=n[0],a=n[1]
return Object.assign(e,(0,o.default)({},(0,u.default)(r),a))},{})},Object.defineProperty(t,"requestJSON",{enumerable:!0,get:function(){return a.requestJSON}}),Object.defineProperty(t,"submitForm",{enumerable:!0,get:function(){return a.submitForm}}),Object.defineProperty(t,"post",{enumerable:!0,get:function(){return a.post}}),t.localStorageSetItem=t.localStorageGetItem=void 0
var o=r(n("lSNA")),i=r(n("J4zp")),c=r(n("u6S6")),u=r(n("79/T")),a=n("t3Un")
t.localStorageGetItem=function(e){return MB.localStorageDelegate.getItem(e)}
t.localStorageSetItem=function(e,t){return MB.localStorageDelegate.setItem(e,t)}},"7bO/":function(e,t,n){"use strict"
n.r(t)
var r={}
n.r(r),n.d(r,"TASK",function(){return H.e}),n.d(r,"SAGA_ACTION",function(){return H.c}),n.d(r,"noop",function(){return H.u}),n.d(r,"is",function(){return H.q}),n.d(r,"deferred",function(){return H.l}),n.d(r,"arrayOfDeffered",function(){return H.g}),n.d(r,"createMockTask",function(){return H.j}),n.d(r,"cloneableGenerator",function(){return H.i}),n.d(r,"asEffect",function(){return Y.d}),n.d(r,"CHANNEL_END",function(){return X})
var H=n("Ev6p"),z=n("92lH"),V=n("udQi"),Y=n("tw9P"),Z=n("mbVZ"),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var w="proc first argument (Saga function result) must be an iterator",X={toString:function(){return"@@redux-saga/CHANNEL_END"}},G={toString:function(){return"@@redux-saga/TASK_CANCEL"}},o={wildcard:function(){return H.r},default:function(t){return"symbol"===(void 0===t?"undefined":a(t))?function(e){return e.type===t}:function(e){return e.type===String(t)}},array:function(e){return function(t){return e.some(function(e){return K(e)(t)})}},predicate:function(t){return function(e){return t(e)}}}
function K(e){return("*"===e?o.wildcard:H.q.array(e)?o.array:H.q.stringableFunc(e)?o.default:H.q.func(e)?o.predicate:o.default)(e)}var Q=function(e){return{fn:e}}
function S(r){var M=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){return H.u},T=2<arguments.length&&void 0!==arguments[2]?arguments[2]:H.u,R=3<arguments.length&&void 0!==arguments[3]?arguments[3]:H.u,e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},l=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{},a=6<arguments.length&&void 0!==arguments[6]?arguments[6]:0,N=7<arguments.length&&void 0!==arguments[7]?arguments[7]:"anonymous",t=arguments[8]
Object(H.h)(r,H.q.iterator,w)
var n="[...effects]",O=Object(H.n)(W,Object(H.z)(n,"all("+n+")")),I=l.sagaMonitor,o=l.logger,i=l.onError,c=o||H.s,P=function(e){var t=e.sagaStack
!t&&e.stack&&(t=-1!==e.stack.split("\n")[0].indexOf(e.message)?e.stack:"Error: "+e.message+"\n"+e.stack),c("error","uncaught at "+N,t||e.message||e)},A=Object(z.f)(M),L=Object.create(e)
y.cancel=H.u
var u,s,d,f,p,h,m,j=(u=a,s=N,f=t,(d=r)._deferredEnd=null,(h={})[H.e]=!0,h.id=u,h.name=s,(m={})[p="done"]=m[p]||{},m[p].get=function(){if(d._deferredEnd)return d._deferredEnd.promise
var e=Object(H.l)()
return d._deferredEnd=e,d._isRunning||(d._error?e.reject(d._error):e.resolve(d._result)),e.promise},h.cont=f,h.joiners=[],h.cancel=g,h.isRunning=function(){return d._isRunning},h.isCancelled=function(){return d._isCancelled},h.isAborted=function(){return d._isAborted},h.result=function(){return d._result},h.error=function(){return d._error},h.setContext=function(e){Object(H.h)(e,H.q.object,Object(H.k)("task",e)),H.v.assign(L,e)},function(e,t){for(var n in t){var r=t[n]
r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n,r)}}(h,m),h),D={name:N,cancel:function(){D.isRunning&&!D.isCancelled&&(D.isCancelled=!0,y(G))},isRunning:!0},v=function(e,r,a){var o=[],i=void 0,c=!1
function u(e){n(),a(e,!0)}function t(n){o.push(n),n.cont=function(e,t){c||(Object(H.w)(o,n),n.cont=H.u,t?u(e):(n===r&&(i=e),o.length||(c=!0,a(i))))}}function n(){c||(c=!0,o.forEach(function(e){e.cont=H.u,e.cancel()}),o=[])}return t(r),{addTask:t,cancelAll:n,abort:u,getTasks:function(){return o},taskNames:function(){return o.map(function(e){return e.name})}}}(0,D,b)
function g(){r._isRunning&&!r._isCancelled&&(r._isCancelled=!0,v.cancelAll(),b(G))}return t&&(t.cancel=g),r._isRunning=!0,y(),j
function y(e,t){if(!D.isRunning)throw new Error("Trying to resume an already finished generator")
try{var n=void 0;(n=t?r.throw(e):e===G?(D.isCancelled=!0,y.cancel(),H.q.func(r.return)?r.return(G):{done:!0,value:G}):e===X?H.q.func(r.return)?r.return():{done:!0}:r.next(e)).done?(D.isMainRunning=!1,D.cont&&D.cont(n.value)):B(n.value,a,"",y)}catch(e){D.isCancelled&&P(e),D.isMainRunning=!1,D.cont(e,!0)}}function b(t,n){r._isRunning=!1,A.close(),n?(t instanceof Error&&Object.defineProperty(t,"sagaStack",{value:"at "+N+" \n "+(t.sagaStack||t.stack),configurable:!0}),j.cont||(t instanceof Error&&i?i(t):P(t)),
r._error=t,r._isAborted=!0,r._deferredEnd&&r._deferredEnd.reject(t)):(r._result=t,r._deferredEnd&&r._deferredEnd.resolve(t)),j.cont&&j.cont(t,n),j.joiners.forEach(function(e){return e.cb(t,n)}),j.joiners=null}function B(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],a=Object(H.y)()
I&&I.effectTriggered({effectId:a,parentEffectId:t,label:n,effect:e})
var o=void 0
function i(e,t){o||(o=!0,r.cancel=H.u,I&&(t?I.effectRejected(a,e):I.effectResolved(a,e)),r(e,t))}i.cancel=H.u,r.cancel=function(){if(!o){o=!0
try{i.cancel()}catch(e){P(e)}i.cancel=H.u,I&&I.effectCancelled(a)}}
var c,u,l,s,d,f,p,h,m,v,g,y,b,w,S,E,C,_,x,k=void 0
return H.q.promise(e)?U(e,i):H.q.helper(e)?q(Q(e),a,i):H.q.iterator(e)?F(e,a,N,i):H.q.array(e)?O(e,a,i):(k=Y.d.take(e))?function(e,t){var n=e.channel,r=e.pattern,a=e.maybe
n=n||A
var o=function(e){return e instanceof Error?t(e,!0):Object(z.e)(e)&&!a?t(X):t(e)}
try{n.take(o,K(r))}catch(e){return t(e,!0)}t.cancel=o.cancel}(k,i):(k=Y.d.put(e))?(E=i,C=(S=k).channel,_=S.action,x=S.resolve,void Object(V.a)(function(){var e=void 0
try{e=(C?C.put:T)(_)}catch(e){if(C||x)return E(e,!0)
P(e)}if(!x||!H.q.promise(e))return E(e)
U(e,E)})):(k=Y.d.all(e))?W(k,a,i):(k=Y.d.race(e))?(m=k,v=a,g=i,y=void 0,b=Object.keys(m),w={},b.forEach(function(a){var e=function(e,t){if(!y)if(t)g.cancel(),g(e,!0)
else if(!Object(z.e)(e)&&e!==X&&e!==G){var n
g.cancel(),y=!0
var r=((n={})[a]=e,n)
g(H.q.array(m)?[].slice.call(J({},r,{length:b.length})):r)}}
e.cancel=H.u,w[a]=e}),g.cancel=function(){y||(y=!0,b.forEach(function(e){return w[e].cancel()}))},void b.forEach(function(e){y||B(m[e],v,e,w[e])})):(k=Y.d.call(e))?function(e,t,n){var r=e.context,a=e.fn,o=e.args,i=void 0
try{i=a.apply(r,o)}catch(e){return n(e,!0)}return H.q.promise(i)?U(i,n):H.q.iterator(i)?F(i,t,a.name,n):n(i)}(k,a,i):(k=Y.d.cps(e))?function(e,n){var t=e.context,r=e.fn,a=e.args
try{var o=function(e,t){return H.q.undef(e)?n(t):n(e,!0)}
r.apply(t,a.concat(o)),o.cancel&&(n.cancel=function(){return o.cancel()})}catch(e){return n(e,!0)}}(k,i):(k=Y.d.fork(e))?q(k,a,i):(k=Y.d.join(e))?function(e,t){if(e.isRunning()){var n={task:j,cb:t}
t.cancel=function(){return Object(H.w)(e.joiners,n)},e.joiners.push(n)}else e.isAborted()?t(e.error(),!0):t(e.result())}(k,i):(k=Y.d.cancel(e))?function(e,t){e===H.d&&(e=j)
e.isRunning()&&e.cancel()
t()}(k,i):(k=Y.d.select(e))?function(e,t){var n=e.selector,r=e.args
try{var a=n.apply(void 0,[R()].concat(r))
t(a)}catch(e){t(e,!0)}}(k,i):(k=Y.d.actionChannel(e))?(d=i,f=(s=k).pattern,p=s.buffer,(h=K(f)).pattern=f,void d(Object(z.d)(M,p||Z.a.fixed(),h))):(k=Y.d.flush(e))?(l=i,void k.flush(l)):(k=Y.d.cancelled(e))?void i(!!D.isCancelled):(k=Y.d.getContext(e))?void i(L[k]):(k=Y.d.setContext(e))?(c=k,u=i,H.v.assign(L,c),void u()):i(e)}function U(e,t){var n=e[H.a]
H.q.func(n)?t.cancel=n:H.q.func(e.abort)&&(t.cancel=function(){return e.abort()}),e.then(t,function(e){return t(e,!0)})}function F(e,t,n,r){S(e,M,T,R,L,l,t,n,r)}function q(e,t,n){var r=e.context,a=e.fn,o=e.args,i=e.detached,c=function(e){var t=e.context,n=e.fn,r=e.args
if(H.q.iterator(n))return n
var a,o,i=void 0,c=void 0
try{i=n.apply(t,r)}catch(e){c=e}return H.q.iterator(i)?i:c?Object(H.t)(function(){throw c}):Object(H.t)((a=void 0,o={done:!1,value:i},function(e){return a?{done:!0,value:e}:(a=!0,o)}))}({context:r,fn:a,args:o})
try{Object(V.c)()
var u=S(c,M,T,R,L,l,t,a.name,i?null:H.u)
i?n(u):c._isRunning?(v.addTask(u),n(u)):c._error?v.abort(c._error):n(u)}finally{Object(V.b)()}}function W(r,t,a){var o=Object.keys(r)
if(!o.length)return a(H.q.array(r)?[]:{})
var i=0,c=void 0,u={},l={}
o.forEach(function(n){var e=function(e,t){c||(t||Object(z.e)(e)||e===X||e===G?(a.cancel(),a(e,t)):(u[n]=e,++i===o.length&&(c=!0,a(H.q.array(r)?H.f.from(J({},u,{length:o.length})):u))))}
e.cancel=H.u,l[n]=e}),a.cancel=function(){c||(c=!0,o.forEach(function(e){return l[e].cancel()}))},o.forEach(function(e){return B(r[e],t,e,l[e])})}}var v="runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!"
function s(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
var o=void 0
H.q.iterator(e)?(o=e,e=t):(Object(H.h)(t,H.q.func,v),o=t.apply(void 0,r),Object(H.h)(o,H.q.iterator,v))
var i=e,c=i.subscribe,u=i.dispatch,l=i.getState,s=i.context,d=i.sagaMonitor,f=i.logger,p=i.onError,h=Object(H.y)()
d&&(d.effectTriggered=d.effectTriggered||H.u,d.effectResolved=d.effectResolved||H.u,d.effectRejected=d.effectRejected||H.u,d.effectCancelled=d.effectCancelled||H.u,d.actionDispatched=d.actionDispatched||H.u,d.effectTriggered({effectId:h,root:!0,parentEffectId:0,effect:{root:!0,saga:t,args:r}}))
var m=S(o,c,Object(H.A)(u),l,s,{sagaMonitor:d,logger:f,onError:p},h,t.name)
return d&&d.effectResolved(h,m),m}var i=n("q09E"),c=n("oZtI")
n.d(t,"runSaga",function(){return s}),n.d(t,"END",function(){return z.a}),n.d(t,"eventChannel",function(){return z.d}),n.d(t,"channel",function(){return z.b}),n.d(t,"buffers",function(){return Z.a}),n.d(t,"takeEvery",function(){return i.a}),n.d(t,"takeLatest",function(){return i.c}),n.d(t,"throttle",function(){return i.e}),n.d(t,"delay",function(){return H.m}),n.d(t,"CANCEL",function(){return H.a}),n.d(t,"detach",function(){return Y.i}),n.d(t,"effects",function(){return c}),n.d(t,"utils",function(){return r
})
t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.context,a=void 0===t?{}:t,o=function(e,t){var n={}
for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n}(e,["context"]),i=o.sagaMonitor,c=o.logger,u=o.onError
if(H.q.func(o))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead")
if(c&&!H.q.func(c))throw new Error("`options.logger` passed to the Saga middleware is not a function!")
if(u&&!H.q.func(u))throw new Error("`options.onError` passed to the Saga middleware is not a function!")
if(o.emitter&&!H.q.func(o.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!")
function l(e){var t=e.getState,n=e.dispatch,r=Object(z.c)()
return r.emit=(o.emitter||H.o)(r.emit),l.run=s.bind(null,{context:a,subscribe:r.subscribe,dispatch:n,getState:t,sagaMonitor:i,logger:c,onError:u}),function(n){return function(e){i&&i.actionDispatched&&i.actionDispatched(e)
var t=n(e)
return r.emit(e),t}}}return l.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")},l.setContext=function(e){Object(H.h)(e,H.q.object,Object(H.k)("sagaMiddleware",e)),H.v.assign(a,e)},l}},"7bR1":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setVisibilityScreen=v,t.default=_
var l=r(n("o0o1")),y=r(n("MVZn")),a=r(n("J2m7")),s=n("oZtI"),d=n("upRB"),f=n("JfQ8"),u=n("Kkl0"),b=n("jvRN"),p=n("7q5O"),h=l.default.mark(v),o=l.default.mark(g),m=l.default.mark(S),i=l.default.mark(E),c=l.default.mark(_),w=[]
function v(e){var t,n,r,a,o,v,g,i,c,u
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.select)()
case 2:if(t=e.sent,n=t.container.layers,r=n.resourceByScreen,a=n.visibilityScreenID,o=t.model.widgets,v=(0,d.getCurrentScreen)(t),r[a]&&!r[a].error){e.next=26
break}if(w.includes(a)){e.next=26
break}return w.push(a),e.prev=8,e.next=11,(0,s.call)(p.getLayerData,v,o)
case 11:return g=e.sent,i=(0,b.getMockingBotWidgets)(t),c=[{type:"screen",id:v.cid,name:v.name,top:0,left:0,width:v.width,height:v.height,src_left:0,src_top:0,src_width:g.artboard.width,src_height:g.artboard.height,bg_colors:[{value:(0,b.checkColor)(v.bgcolor)}]}].concat(g.layers).concat(i).reduce(function(e,t){var n=t.id,r=t.top,a=t.left,o=t.width,i=t.height
if("group"===t.name)return e.push(t),e
var c=(0,b.isSketchLayer)(n)?g.artboard.widgetWidth/g.artboard.width:1,u=r*c,l=a*c,s=o*c,d=i*c,f=Math.min(Math.max(l,0),v.width),p=Math.min(Math.max(l+s,0),v.width),h=Math.min(Math.max(u,0),v.height),m=Math.min(Math.max(u+d,0),v.height)
return p-f!=0&&m-h!=0&&e.push((0,y.default)({},t,{left:f,top:h,width:p-f,height:m-h,src_top:Number(parseFloat(Math.max(r,0)).toFixed(2)),src_left:Number(parseFloat(Math.max(a,0)).toFixed(2)),src_width:Number(parseFloat(Math.min(a+o,g.artboard.width)-Math.max(a,0)).toFixed(2)),src_height:Number(parseFloat(Math.min(r+i,g.artboard.height)-Math.max(r,0)).toFixed(2))})),e},[]),u=(0,y.default)({},g,{layers:c}),w.splice(w.indexOf(a),1),e.next=18,(0,s.put)((0,f.receiveResourceSuccess)(a,u))
case 18:e.next=26
break
case 20:return e.prev=20,e.t0=e.catch(8),console.log(e.t0.stack),w.splice(w.indexOf(a),1),e.next=26,(0,s.put)((0,f.receiveResourceError)(a,e.t0.message))
case 26:case"end":return e.stop()}},h,this,[[8,20]])}function g(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)(f.SET_VISIBILITY_SCREEN,v)
case 2:case"end":return e.stop()}},o,this)}function S(t){var n,r,a,o,i,c
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload.layerID,e.next=3,(0,s.select)()
case 3:return r=e.sent,a=r.container.layers,o=a.resourceByScreen,i=a.visibilityScreenID,c=C(o[i].layers,n),e.next=9,(0,s.put)((0,u.selectLayer)(c))
case 9:return e.next=11,(0,s.put)((0,u.activateLayer)(c))
case 11:case"end":return e.stop()}},m,this)}function E(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)(u.REQUEST_SELECT_LAYER,S)
case 2:case"end":return e.stop()}},i,this)}var C=function(e,t){var n=(0,a.default)(e,{id:t})
if(!n||!n.parent||n.image_set_zip)return t
for(;n;){var r=(0,a.default)(e,{id:n.parent})
if(!r||!r.image_set_zip||!r.parent)return t
if(r.image_set_zip)return n.parent
n=r.parent}}
function _(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[g(),E()]
case 2:case"end":return e.stop()}},c,this)}},"7eYF":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=r(n("RIqP")),l=r(n("MVZn")),d=r(n("o0o1")),f=n("ANjH"),p=n("WVP6"),h=r(n("7bO/")),a=n("/TnQ"),s=n("IV71"),m=n("mreW"),v=n("nU12"),g=(0,a.composeWithDevTools)({})
t.default=function(e){var t=e.viewMap,n=e.containerReducerMap,r=e.sagaMap,a=e.extendCallback,o=new s.WebpackInterface
if(t)for(var i in t)o.setView(i,t[i])
var c=function(e){var n,t=e.entryMap,r=e.reducerMap,a=e.sagaMap,o=(0,p.createReduxEntry)(),i=o.middleware;(0,o.setEntryMap)(t)
var c=[i]
a&&(n=(0,h.default)(),c.push(n))
var u=(0,f.createStore)((0,f.combineReducers)(r),g(f.applyMiddleware.apply(void 0,c)))
if(a){var l=function(t){n.run(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a[t]()
case 3:e.next=0
break
case 5:case"end":return e.stop()}},e,this)}))}
for(var s in a)l(s)}return{store:u}}({initialState:{model:{},container:{}},entryMap:(0,l.default)({},v.entryMap,m.entryMap,{"entry:webpack-interface:view:call":function(e,t){var n=t.payload
setTimeout(function(){return o.callViewMethod.apply(o,[n.name,n.method].concat((0,u.default)(n.args||{})))},0)}}),reducerMap:{model:(0,f.combineReducers)(v.reducerMap),container:(0,f.combineReducers)(n)},sagaMap:r}).store
return o.setStore(c),a&&a(o),o}},"7q5O":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getLayerData=void 0
var c=r(n("o0o1")),a=r(n("yXPU")),u=n("t3Un"),o=function(){var n=(0,a.default)(c.default.mark(function e(r,a){var o,i
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=r.artboard_id&&a.find(function(e){return e.screen_cid===r.cid&&"image_view"===e.name&&e.image&&-1!==e.image.indexOf(String("/".concat(r.artboard_asset_id,"/")))}))){e.next=13
break}if(!window.MBArtboards){e.next=6
break}n=r.cid,i=window.MBArtboards[n],e.next=9
break
case 6:return e.next=8,t=r.artboard_id,(0,u.requestJSON)("".concat("/apis/sketch","/artboards/").concat(t,".json"))
case 8:i=e.sent
case 9:s(i,o),l(i),e.next=14
break
case 13:i={artboard:{top:0,left:0,width:r.width,height:r.height},layers:[],document:{document_colors:[],text_styles:[],global_colors:[]}}
case 14:return e.abrupt("return",i)
case 15:case"end":return e.stop()}var t,n},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()
t.getLayerData=o
var l=function(e){e.layers.some(function(e){return e.z})?e.layers.sort(function(e,t){return e.z-t.z}):e.layers.sort(function(e,t){return parseInt(t.width)*parseInt(t.height)-parseInt(e.width)*parseInt(e.height)})},s=function(e,t){Object.assign(e.artboard,{widgetZ:t.z,widgetTop:t.top,widgetLeft:t.left,widgetWidth:t.width,widgetHeight:t.height}),e.layers.push({id:"artboard-base",name:e.artboard.name,type:"screen",top:0,left:0,z:t.z,width:e.artboard.width,height:e.artboard.height,bg_colors:[{value:t.bg}],
timestamp:t.timestamp+1})}},"7tbW":function(e,t,n){var r=n("LGYb")
e.exports=function(e){return e&&e.length?r(e):[]}},"80la":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:slice:success":return(0,a.default)({},e,r,{loading:!1})
case"reducer:slice:fail":return(0,a.default)({},e,r,{error:!0})
default:return e}}
var a=r(n("MVZn")),o={slices:[],loading:!0,error:!1}},"87hQ":function(e,t){function u(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function n(c){return function(){var e=this,i=arguments
return new Promise(function(t,n){var r=c.apply(e,i)
function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var r,a=window,o=a.fetch,i=a.FileReader,c=a.URL,l=(r=n(regeneratorRuntime.mark(function e(t){var n,r
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t)
case 2:return n=e.sent,e.next=5,n.blob()
case 5:return r=e.sent,e.abrupt("return",c.createObjectURL(r))
case 7:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})
t.dataUrlToBlobUrl=l
var s=function(n){return new Promise(function(e){var t=new i
t.addEventListener("load",function(){return e(t.result)},!1),t.readAsDataURL(n)})}
t.blobToDataUrl=s
var d={method:"GET",cache:"default",mode:"cors",credentials:"same-origin"}
t.setFetchOption=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
d=Object.assign({},d,e)}
var f={},p={}
t.resetFetchCache=function(){f={},p={}},t.fetchTextWithCache=function(e){return f[e]||(f[e]=o(e,d).then(function(e){return e.text()})),f[e]}
var h=function(e){return p[e]||(p[e]=o(e,d).then(function(e){return e.blob()})),p[e]}
t.fetchBlobWithCache=h
var m,v=(m=n(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,h(t)
case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1))
case 5:case"end":return e.stop()}},e,this)})),function(e){return m.apply(this,arguments)})
t.fetchDataUrlWithCache=v},"8Fba":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),h=r(n("q1tI")),m=a(n("M8nv")),p=a(n("17x9")),v=n("/5+U")
n("v8PR")
var g="hidden",y=function(e){function n(e){var s;(0,o.default)(this,n),s=(0,c.default)(this,(0,l.default)(n).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(s)),"cancelColorPicker",function(e){s.imageCanvas.contains(e.target)||s.cancelPickerMode()}),(0,f.default)((0,d.default)((0,d.default)(s)),"cancelPickerMode",function(){return s.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1}})}),(0,f.default)((0,d.default)((0,d.default)(s)),"renderImageCanvas",function(){
var e=s.imageCanvas.getBoundingClientRect(),t=e.width,n=e.height
s.lastCanvasRect={width:t,height:n},s.imageCanvas.width=t,s.imageCanvas.height=n,s.imageCtx.drawImage(s.image,0,0,t,n)}),(0,f.default)((0,d.default)((0,d.default)(s)),"calculateCenterPoint",function(e){var t=s.image.getBoundingClientRect(),n=t.left,r=t.top
s.centerPoint={centerX:Math.floor(e.clientX-n),centerY:Math.floor(e.clientY-r)}}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleMove",function(e){s.image.complete&&s.state.visibility===g&&s.setState({visibility:"visible"}),s.calculateCenterPoint(e)
var t=s.props,n=t.glassHeight,r=t.glassWidth,a=t.scale,o=s.centerPoint,i=o.centerX,c=o.centerY,u=Math.floor(i-r/2),l=Math.floor(c-n/2)
s.setState({glassLeft:u,glassTop:l}),c<0&&s.clearGlassRect(),s.glassCtx.clearRect(0,0,r,n),a<1&&console.warn("Can't make the galss scale less than 1, It will make bed invision"),_(s.glassCtx,!1),s.glassCtx.drawImage(s.imageCanvas,Math.floor(i-r/2/s.finallyScale),Math.floor(c-n/2/s.finallyScale),Math.floor(r/s.finallyScale),Math.floor(n/s.finallyScale),-5,-5,r,n),C(s.glassCtx,"lightgray",10,10),x(s.glassCtx),k(s.glassCtx,"black",Math.floor((r-10)/2),Math.floor((n-10)/2),10,10),s.getColor()}),(0,f.default)((0
,d.default)((0,d.default)(s)),"getColor",function(){var e=s.centerPoint,t=e.centerX,n=e.centerY,r=s.imageCtx.getImageData(t,n,1,1).data,a=b(r),o=a.rgba,i=a.R,c=a.G,u=a.B
s.setState({color:o,R:i,G:c,B:u}),s.color=o}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleClick",function(){s.getColor()
var e=s.color,t=(0,v.saveRecentColor)(e),n=t.history,r=t.focusColor
clearTimeout(s.timeoutToken),s.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:n,focusColor:r}}),s.timeoutToken=setTimeout(function(){s.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:n,focusColor:null}})},1e3)}),(0,f.default)((0,d.default)((0,d.default)(s)),"clearGlassRect",function(){var e=s.props,t=e.glassHeight,n=e.glassWidth
s.glassCtx.clearRect(0,0,n,t),s.setState({visibility:g})}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleMouseLeave",function(){s.clearGlassRect()}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleKeyDown",function(e){"escape"===e.key.toLowerCase()&&(s.clearGlassRect(),s.cancelPickerMode())}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleLoad",function(){s.renderImageCanvas()}),(0,f.default)((0,d.default)((0,d.default)(s)),"handleError",function(){s.cancelPickerMode()})
var t=s.props.scale
return s.iamgeContainerRef=function(e){return s.image=e},s.getImageCanvasRef=function(e){return s.imageCanvas=e},s.glassCanvasRef=function(e){return s.glassCanvas=e},s.finallyScale=10*(t<1?1:t),s.state={visibility:g,glassLeft:0,glassTop:0,color:"#fff",R:0,G:0,B:0},s}return(0,s.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){this.imageCtx=this.imageCanvas.getContext("2d"),this.glassCtx=this.glassCanvas.getContext("2d")}},{key:"componentDidCatch",value:function(e){console.log(e),
this.cancelPickerMode()}},{key:"componentDidUpdate",value:function(){if(this.imageCanvas){var e=this.imageCanvas.getBoundingClientRect(),t=e.width,n=e.height,r=this.lastCanvasRect||{width:0,height:0},a=r.width,o=r.height
a==t&&o==n||(this.clearGlassRect(),this.renderImageCanvas())}else this.handleError()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,r=e.glassWidth,a=e.glassHeight,o=e.src,i=this.state,c=i.visibility,u=i.glassLeft,l=i.glassTop,s=i.color,d=i.R,f=i.G,p=i.B
return h.default.createElement("div",{className:"mb-picker-container"},h.default.createElement("img",{ref:this.iamgeContainerRef,className:"mb-picker-image",width:t,height:n,src:o,onLoad:this.handleLoad,onError:this.handleError}),h.default.createElement("canvas",{ref:this.getImageCanvasRef,onMouseMove:this.handleMove,onMouseLeave:this.handleMouseLeave,onClick:this.handleClick,style:{width:t,height:n,opacity:0}}),h.default.createElement("div",{className:"mb-glass",style:{width:r,height:a,visibility:c,left:u,
top:l}},h.default.createElement("div",{className:"shadow"}),h.default.createElement("canvas",{ref:this.glassCanvasRef,width:r,height:a,style:{width:r,height:a}}),h.default.createElement("div",{style:{top:a/2+15},className:"mb-glass-text"},h.default.createElement("div",{className:"mb-rgba-color"},"R:".concat(d," G:").concat(f," B:").concat(p," ").concat(String(S(s).hex).toUpperCase())))),h.default.createElement(m.default,{onKeyDown:this.handleKeyDown,onClick:this.cancelColorPicker}))}}]),n}(h.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{src:p.default.string,width:p.default.oneOfType([p.default.string,p.default.number]),height:p.default.oneOfType([p.default.string,p.default.number]),glassHeight:p.default.number,glassWidth:p.default.number,scale:p.default.number,dispatch:p.default.func}),(0,f.default)(y,"defaultProps",{src:"/sec3.png",width:1300,height:769,glassWidth:200,glassHeight:200,scale:1,pickColor:function(e){return console.log(e)}})
var b=function(e){return e[3]=parseFloat(e[3]/255),{rgba:"rgba(".concat(e.join(", "),")"),R:e[0],G:e[1],B:e[2]}},w=/rgba?\((\d+),(\d+),(\d+),?(\d+)?/,S=function(e){var t=w.exec(e.replace(/ /g,"").toLowerCase())
if(!t||!t[3])return e
var n=(0,u.default)(t,5),r=n[1],a=n[2],o=n[3],i=n[4],c=void 0===i?"1":i
return{hex:"#".concat(E(r)).concat(E(a)).concat(E(o)),o:Number(c)}},E=function(e){var t=parseInt(e,10).toString(16)
return 1===t.length?"0".concat(t):t},C=function(e,t,n,r){e.strokeStyle=t,e.lineWidth=.5
for(var a=n+5.5;a<e.canvas.width-n;a+=n)e.beginPath(),e.moveTo(a,0),e.lineTo(a,e.canvas.height),e.stroke()
for(var o=r+5.5;o<e.canvas.height-n;o+=r)e.beginPath(),e.moveTo(0,o),e.lineTo(e.canvas.width,o),e.stroke()},_=function(e,t){e.mozImageSmoothingEnabled=t,e.webkitImageSmoothingEnabled=t,e.msImageSmoothingEnabled=t,e.imageSmoothingEnabled=t},x=function(e){e.beginPath(),e.strokeStyle="#8D9EA7",e.lineWidth=8,e.arc(100,100,96,0,2*Math.PI),e.stroke(),e.strokeStyle="#D4D7DC",e.lineWidth=5,e.arc(100,100,96,0,2*Math.PI),e.stroke()},k=function(e,t,n,r,a,o){e.beginPath(),n+=.5,r+=.5,e.strokeStyle=t,e.lineWidth=1,
e.moveTo(n,r),e.lineTo(n+a,r),e.lineTo(n+a,r+o),e.lineTo(n,r+o),e.lineTo(n,r),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="white",e.moveTo(n-1,r-1),e.lineTo(n+a+1,r-1),e.lineTo(n+a+1,r+1+o),e.lineTo(n-1,r+o+1),e.lineTo(n-1,r-1),e.stroke()}},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(a[n]=e[n])
return a}},"8jgF":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("MVZn")),c=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("6XO9"),v=a(n("i6OX")),g=n("zAG7"),y=n("7Qib")
n("oSKl")
var b=function(e){function a(){var e,o;(0,c.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return o=(0,u.default)(this,(e=(0,l.default)(a)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(o)),"state",{formData:{name:"",email:"",pwd:""},submitErrMsg:"",submitted:!1}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleFormDataChange",function(t){return function(e){return o.setState({formData:(0,i.default)({},o.state.formData,(0,f.default)({},t,e))})}}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleEmailChange",function(e){return o.setState({formData:(0,i.default)(
{},o.state.formData,{email:e})})}),(0,f.default)((0,d.default)((0,d.default)(o)),"resetSubmitErrMsg",function(){return o.setState({submitErrMsg:""})}),(0,f.default)((0,d.default)((0,d.default)(o)),"verifyEmail",function(e){return g.EMAIL_REG.test(e)}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleSignUp",function(){var e=o.props.event,t=o.state.formData,n=t.name,r=t.email,a=t.pwd
if(o.resetSubmitErrMsg(),!o.verifyEmail(r))return o.setState({submitErrMsg:"请输入正确的 Email 地址"});(0,y.post)("/events/sign_up.json",{username:n,email:r,password:a,locale:"zh-CN",event:e.name}).then(function(){return(0,y.post)("/sessions.json",{email:r,password:a}).then(function(){return o.setState({submitted:!0})})},function(e){return o.setState({submitErrMsg:e.detail})})}),o}return(0,s.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.inMobile,n=e.isOpen,r=e.event,a=this.state
,o=a.formData,i=o.name,c=o.email,u=o.pwd,l=a.submitErrMsg,s=a.submitted,d=!!i&&!!c&&!!u
return p.default.createElement(m.Modal,{className:"sign-up-modal ".concat(t?"modal-in-mobile":""),maskClassName:"modal-mask",title:"注册墨刀帐户",isOpen:n},s?p.default.createElement("div",{className:"award-view"},p.default.createElement("img",{className:"award",src:"/images/event/award.png"}),p.default.createElement("p",{className:"success-tip"},r.successTip)):p.default.createElement("div",{className:"sign-up-view"},p.default.createElement("p",{className:"event-desc"},r.desc),p.default.createElement("div",{
className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"user"}),p.default.createElement(m.Input,{className:"input",placeholder:"姓名",defaultValue:i,onChange:this.handleFormDataChange("name")})),p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"mail"}),p.default.createElement(m.InputEmail,{className:"input",placeholder:"Email 地址",defaultValue:c,onChange:this.handleEmailChange})),
p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"lock"}),p.default.createElement(m.Input,{className:"input",placeholder:"密码",type:"password",defaultValue:u,onChange:this.handleFormDataChange("pwd")})),!!l&&p.default.createElement("p",{className:"error-msg"},"* ".concat(l)),p.default.createElement(m.Button,{className:"primary-button",type:"primary",isDisabled:!d,onClick:this.handleSignUp},"注册"),p.default.createElement("p",{
className:"agree-terms"},"点击「注册」按钮将视为您同意墨刀",p.default.createElement("a",{href:"/tos",target:"_blank"},"使用条款"))))}}]),a}(p.PureComponent);(t.default=b).propTypes={event:h.default.object,isOpen:h.default.bool,inMobile:h.default.bool}},"92lH":function(e,t,n){"use strict"
n.d(t,"a",function(){return l}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"f",function(){return m})
var c=n("Ev6p"),u=n("mbVZ"),r=n("udQi"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="@@redux-saga/CHANNEL_END",l={type:o},i=function(e){return e&&e.type===o}
function s(){var a=[]
return{subscribe:function(e){return a.push(e),function(){return Object(c.w)(a,e)}},emit:function(e){for(var t=a.slice(),n=0,r=t.length;n<r;n++)t[n](e)}}}var d="invalid buffer passed to channel factory function",f="Saga was provided with an undefined action"
function p(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u.a.fixed(),a=!1,o=[]
function i(){if(a&&o.length)throw Object(c.p)("Cannot have a closed channel with pending takers")
if(o.length&&!r.isEmpty())throw Object(c.p)("Cannot have pending takers with non empty buffer")}return Object(c.h)(r,c.q.buffer,d),{take:function(e){i(),Object(c.h)(e,c.q.func,"channel.take's callback must be a function"),a&&r.isEmpty()?e(l):r.isEmpty()?(o.push(e),e.cancel=function(){return Object(c.w)(o,e)}):e(r.take())},put:function(e){if(i(),Object(c.h)(e,c.q.notUndef,f),!a){if(!o.length)return r.put(e)
for(var t=0;t<o.length;t++){var n=o[t]
if(!n[c.b]||n[c.b](e))return o.splice(t,1),n(e)}}},flush:function(e){i(),Object(c.h)(e,c.q.func,"channel.flush' callback must be a function"),a&&r.isEmpty()?e(l):e(r.flush())},close:function(){if(i(),!a&&(a=!0,o.length)){var e=o
o=[]
for(var t=0,n=e.length;t<n;t++)e[t](l)}},get __takers__(){return o},get __closed__(){return a}}}function h(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:u.a.none(),n=arguments[2]
2<arguments.length&&Object(c.h)(n,c.q.func,"Invalid match function passed to eventChannel")
var r=p(t),a=function(){r.__closed__||(o&&o(),r.close())},o=e(function(e){i(e)?a():n&&!n(e)||r.put(e)})
if(r.__closed__&&o(),!c.q.func(o))throw new Error("in eventChannel: subscribe should return a function to unsubscribe")
return{take:r.take,flush:r.flush,close:a}}function m(e){var n=h(function(t){return e(function(e){e[c.c]?t(e):Object(r.a)(function(){return t(e)})})})
return a({},n,{take:function(e,t){1<arguments.length&&(Object(c.h)(t,c.q.func,"channel.take's matcher argument must be a function"),e[c.b]=t),n.take(e)}})}},"9DAG":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=a(n("oJEp")),h=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.widgetTreeData,n=e.isSnapshot
return t.children.map(function(e){return f.default.createElement(p.default,{key:e.cid,treeData:e,offSetX:0,offSetY:0,isSnapshot:n})})}}]),t}(f.PureComponent)
t.default=h,(0,s.default)(h,"propTypes",{widgetTreeData:d.default.object,isSnapshot:d.default.bool})},"9Nap":function(e,t){e.exports=function(e){return e}},"9NmV":function(e,t){var n="\\ud800-\\udfff",r="\\u2700-\\u27bf",a="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",
i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="["+i+"]",u="\\d+",l="["+r+"]",s="["+a+"]",d="[^"+n+i+u+r+a+o+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+o+"]",m="(?:"+s+"|"+d+")",v="(?:"+h+"|"+d+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",
b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",w="[\\ufe0e\\ufe0f]?",S=w+b+("(?:\\u200d(?:"+["[^"+n+"]",f,p].join("|")+")"+w+b+")*"),E="(?:"+[l,f,p].join("|")+")"+S,C=RegExp([h+"?"+s+"+"+g+"(?="+[c,h,"$"].join("|")+")",v+"+"+y+"(?="+[c,h+m,"$"].join("|")+")",h+"?"+m+"+"+g,h+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,E].join("|"),"g")
e.exports=function(e){return e.match(C)||[]}},"9ZUU":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("Hrzm")),i=n("upRB"),c=(0,a.connect)(function(e){return{screen:(0,i.getCurrentScreen)(e)}})(o.default)
t.default=c},"9ggG":function(e,t,n){var r=n("Z0cm"),a=n("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/
e.exports=function(e,t){if(r(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||i.test(e)||!o.test(e)||null!=t&&e in Object(t)}},"9gsH":function(e,t,n){},An9T:function(e,t,n){e.exports={shell:"xQWL5y1StSdX9vRfMCP2i"}},B3BZ:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createNotifierWrap=void 0
var l=function(){return"Notification"in window},r="neverAskForNotificationPermission"
t.createNotifierWrap=function(e){var u=!1,t=function(){return Notification.requestPermission(function(e){"granted"===e&&(u=!0)})}
return{init:function(){if(l())if("granted"===Notification.permission)u=!0
else if("denied"!==Notification.permission){if(MB.localStorageDelegate.getItem(r))return
e(t,function(){return MB.localStorageDelegate.setItem(r,!0)})}},requestPermission:t,notify:function(e){var t=e.title,n=e.opts,r=e.duration,a=e.onClick,o=e.onError,i=e.onNotSupport
if(l()&&u){var c=new Notification(t,n)
return setTimeout(c.close.bind(c),r||3e3),c.onclick=function(e){return a&&a(e,function(){return c.close()})},c.onerror=o,c}i&&i()}}}},BQOF:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=a(n("9DAG")),h=n("IB8Z"),m=n("2qqa"),v=n("gCaL"),g=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.screen,n=e.state_cid,r=e.isSnapshot,a=(0,h.getScreenWidgetsMap)(Widget.irecords),o=(0,m.generateItems)(t,n,a),i=(0,
v.generateTreeData)(o,t.cid).widgetTreeData
return f.default.createElement(p.default,{widgetTreeData:i,isSnapshot:r})}}]),t}(f.PureComponent)
t.default=g,(0,s.default)(g,"propTypes",{screen:d.default.object,state_cid:d.default.string,isSnapshot:d.default.bool})},CLzH:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.AvatarInformation=t.ReplyTextarea=t.EditableSpan=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=r(n("q1tI")),f=a(n("i8i4")),p=a(n("17x9")),h=n("6XO9"),m=n("/5+U"),v=a(n("zkrS")),g=a(n("Ku8Y")),y=g.default["editable-span"],b=g.default["reply-textarea"],w=function(e){function n(e){var t
return(0,o.default)(this,n),(t=(0,c.default)(this,(0,u.default)(n).call(this,e))).getEditableTextAreaRef=function(e){return t.textarea=e&&e.querySelector("textarea")},t.focusTextarea=function(){if(t.textarea){t.textarea.focus&&t.textarea.focus()
var e=t.textarea.value.length
t.textarea.setSelectionRange(e,e)}},t}return(0,l.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){this.focusTextarea()}},{key:"render",value:function(){var e=this.props,t=e.editingValue,n=e.placeholder,r=e.btnSureClass
return d.default.createElement("div",{ref:this.getEditableTextAreaRef,className:g.default.container},d.default.createElement(h.Textarea,{className:"".concat(y," textarea"),value:t,placeholder:n||"",onChange:this.props.onEditUpdate,onKeyDown:this.props.onEditKeyPress}),d.default.createElement("div",{className:g.default["btn-sort"]},d.default.createElement(h.Button,{className:g.default["btn-cancel"],onClick:this.props.toggleEdit},v.default.I18N.preview.comment.cancelEdit),d.default.createElement(h.Button,{
className:r,onClick:this.props.onEditFinish},v.default.I18N.preview.comment.updateEdit)))}}]),n}(d.PureComponent);(0,s.default)(w,"propTypes",{editingValue:p.default.string,placeholder:p.default.string,toggleEdit:p.default.func,btnSureClass:p.default.string,onEditUpdate:p.default.func,onEditKeyPress:p.default.func,onEditFinish:p.default.func})
var S=function(e){function n(e){var t
return(0,o.default)(this,n),(t=(0,c.default)(this,(0,u.default)(n).call(this,e))).toggleEditing=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0]
t.setState({isEditing:e,editingValue:t.props.getValue()}),e&&setTimeout(t.focusTextarea,0)},t.startEditing=function(){return t.toggleEditing(!0)},t.onEditUpdate=function(e){return t.setState({editingValue:e})},t.onEditKeyPress=function(e){return C(e)&&(!t.props.isMultiLine||!e.shiftKey)&&t.onEditFinish()},t.onEditFinish=function(){var e=t.state.editingValue.trim()
e!==(t.props.getValue()||"")&&t.props.onValueChange(e),t.props.toggleEdit()},t.state={isEditing:e.isEditing,editingValue:""},e.initEditing&&setTimeout(t.startEditing,50),t}return(0,l.default)(n,e),(0,i.default)(n,[{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.isEditLocked,r=e.getValue,a=e.toggleEdit,o=this.state,i=o.isEditing,c=o.editingValue,u=r()||"",l="".concat(g.default["btn-sure"]," ").concat(c.length&&g.default.active)
return n?d.default.createElement("span",{className:"".concat(y," span")},u):i?d.default.createElement(w,{editingValue:c,placeholder:t,toggleEdit:a,btnSureClass:l,onEditUpdate:this.onEditUpdate,onEditKeyPress:this.onEditKeyPress,onEditFinish:this.onEditFinish}):d.default.createElement("span",{className:"".concat(y," span")},u)}}]),n}(d.PureComponent)
t.EditableSpan=S,(0,s.default)(S,"propTypes",{onValueChange:p.default.func,getValue:p.default.func,placeholder:p.default.string,isMultiLine:p.default.bool,initEditing:p.default.bool,isEditLocked:p.default.bool,isEditing:p.default.bool,toggleEdit:p.default.func})
var E=function(e){function t(e){var r
return(0,o.default)(this,t),(r=(0,c.default)(this,(0,u.default)(t).call(this,e))).onEditUpdate=function(e){var t=e,n=r.props.handleActive
t.length?n(!0):n(!1),!r.props.isEditLocked&&r.setState({editingValue:t})},r.onEditKeyPress=function(e){return C(e)&&(!r.props.isMultiLine||!e.shiftKey)&&r.onEditFinish(e)},r.onEditFinish=(0,m.muteEvent)(function(){var e=r.getEditingValue()
e&&r.props.onValueChange(e),r.setState(function(){return{editingValue:""}},function(){r.props.handleActive(!1)}),setTimeout(function(){return r.setState({editingValue:""})})}),r.getEditingValue=function(){return(r.state.editingValue||"").trim()},r.focus=function(){r.setState({disabled:!1}),r.textarea&&r.textarea.focus()},r.disabledEdit=function(){return r.setState({disabled:!0})},r.textarea=null,r.state={editingValue:"",disabled:!1},r}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",
value:function(){var e=f.default.findDOMNode(this)
this.textarea=e.querySelector("textarea"),this.focus()}},{key:"componentDidUpdate",value:function(){if(this.props.isAutoHeight&&this.textarea){this.textarea.style.height="auto"
var e=Math.max(this.textarea.scrollHeight+2,this.textarea.offsetHeight,this.props.minHeight)
this.textarea.style.height="".concat(e,"px")}}},{key:"render",value:function(){var e=this.props.placeholder,t=void 0===e?"":e,n=this.state,r=n.editingValue,a=n.disabled
return d.default.createElement(h.Textarea,{disabled:a,rows:1,className:b,value:r,placeholder:t,onChange:this.onEditUpdate,onKeyDown:this.onEditKeyPress})}}]),t}(d.PureComponent)
t.ReplyTextarea=E,(0,s.default)(E,"propTypes",{onValueChange:p.default.func,placeholder:p.default.string,handleActive:p.default.func,isMultiLine:p.default.bool,isEditLocked:p.default.bool,isAutoHeight:p.default.bool,minHeight:p.default.number})
var C=function(e){return"Enter"===e.key||13===e.which||13===e.keyCode},_=function(e){var t=e.avatar,n=e.width,r=e.height,a=e.name,o=e.index
e.isDot
return d.default.createElement("div",{className:g.default.avatarInform},d.default.createElement("img",{className:g.default.avatar,src:t,width:n,height:r}),d.default.createElement("div",{className:g.default["avatar-slide"]},o&&d.default.createElement("span",{className:g.default.index},"#".concat(o," ")),d.default.createElement("span",{className:"name"},a)))};(t.AvatarInformation=_).propTypes={avatar:p.default.string.isRequired,width:p.default.number,height:p.default.number,name:p.default.string,
index:p.default.number,isDot:p.default.bool},_.defaultProps={width:24,height:24}},CMye:function(e,t,n){var r=n("GoyQ")
e.exports=function(e){return e==e&&!r(e)}},CUi3:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.arrayActMap=t.objectActMap=t.ArrayOf=t.ObjectAs=void 0
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("JGuq"),o=n("OBS2"),i=a.Operation.objectSet,c=a.Operation.objectDelete,u=a.Operation.objectMerge,l=a.Operation.arraySet,s=a.Operation.arrayDelete,d=a.Operation.arrayInsert,f=a.Operation.arrayPush,p=a.Operation.arrayUnshift,h=a.Operation.arrayPop,m=a.Operation.arrayShift,v=a.Operation.arrayConcat,g=a.Operation.arrayMatchPush,y=a.Operation.arrayMatchDelete,b=a.Operation.arrayMatchMove,w=a.Operation.arrayFindPush,
S=a.Operation.arrayFindDelete,E=a.Operation.arrayFindMove,C=a.Operation.arrayFindSet,_={set:function(e,t){var n=t.key,r=t.value
return i(e,n,r)},delete:function(e,t){var n=t.key
return c(e,n)},merge:function(e,t){var n=t.merge
return u(e,n)}},x={set:function(e,t){var n=t.index,r=t.value
return l(e,n,r)},delete:function(e,t){var n=t.index
return s(e,n)},insert:function(e,t){var n=t.index,r=t.value
return d(e,n,r)},push:function(e,t){var n=t.value
return f(e,n)},pop:function(e,t){return h(e)},shift:function(e,t){return m(e)},unshift:function(e,t){var n=t.value
return p(e,n)},concat:function(e,t){var n=t.concat
return v(e,n)},matchPush:function(e,t){var n=t.value
return g(e,n)},matchDelete:function(e,t){var n=t.value
return y(e,n)},matchMove:function(e,t){var n=t.index,r=t.value
return b(e,n,r)},findPush:function(e,t){var n=t.find,r=t.value
return w(e,n,r)},findDelete:function(e,t){var n=t.find
return S(e,n)},findMove:function(e,t){var n=t.find,r=t.index
return E(e,n,r)},findSet:function(e,t){var n=t.find,r=t.value
return C(e,n,r)}}
t.ObjectAs=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
return new o.ObjectScheme(e,r({},t),r({},_,n))},t.ArrayOf=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
return new o.ArrayScheme(e,[t],r({},x,n))},t.objectActMap=_,t.arrayActMap=x},Clcl:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.NUKE=t.REPORT_ERROR=t.SETUP_REPORT_INTERVAL=t.POST_REPORT=void 0
var a=r(n("MVZn")),o=n("os03"),i=function(){if(MB.user&&MB.user.id){var e=MB.user
return{id:e.id,name:e.name,email:e.email,current_plan:e.current_plan,paid:e.paid,next_billing_on:e.next_billing_on,login_times:e.login_times}}},u=function(e){return(0,o.fetchLikeRequest)("/api/v2/reports",{timeout:1e4,method:"POST",body:JSON.stringify((0,a.default)({href:window.parent.location.href,userAgent:navigator.userAgent,user:i(),currentProjectCid:MB.currentProject&&MB.currentProject.cid||"",currentScreenCid:MB.currentScreen&&MB.currentScreen.cid||""},e))})}
t.POST_REPORT=u
t.SETUP_REPORT_INTERVAL=function(e){var t=e.timeInterval,n=void 0===t?6e5:t,r=e.type,a=void 0===r?"DEFAULT":r,o=e.getReportObject
if(n&&o){var i=(new Date).toISOString(),c=Date.now()
return setInterval(function(){return u({timeInit:i,timeDelta:Date.now()-c,type:a,state:o()}).then(function(){c=Date.now()},function(e){return console.warn("[Error] report ".concat(a," failed:"),e)})},n)}}
var c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t[0]instanceof Error&&t.shift()||new Error("DEFAULT_ERROR"),a=t.map(function(t){try{return JSON.stringify(t)}catch(e){return t.toString()}}).join("\n")
console.warn("[REPORT_ERROR]",a,r)
var o=i()
return window.Raven&&window.Raven.isSetup()&&(window.Raven.setUserContext(o),window.Raven.captureException(r,{extra:{message:a},tags:{report_version:"v1",origin:location.origin,user_current_plan:o&&o.current_plan}})),MB.ga&&MB.ga("send","event","report-error",a,r.stack||r.toString()),{error:r,message:a}}
t.REPORT_ERROR=c
t.NUKE=function(){var e=c.apply(void 0,arguments),t=e.error,n=e.message
console.warn("[NUKE]",n,t),setInterval(function(){window.alert([window.I18N&&I18N.error_happened,n,t].join("\n")),location.reload()},5e3)}},DJvY:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("4WDG")),l=n("upRB"),i=(0,a.connect)(function(e){var t=e.container,n=t.common,r=n.offset,a=n.keyFlags.isSpaceDown,o=t.previewSetting,i=o.toolbarActiveItem,c=o.isShowColorPicker,u=o.isFullScreenMode
return{scale:(0,l.getCurrentScale)(e),canvasOffset:r,screen:(0,l.getCurrentScreen)(e),project:(0,l.getCurrentProject)(e),shellType:(0,l.getShellType)(e),isSpaceDown:a,isStickyShow:(0,l.getIsStickyShow)(e),isScrollable:(0,l.getIsScrollable)(e),isLayerActive:"inspect"==i,isCommentActive:"comment"==i,isFullScreenMode:u,isColorPickerActive:c}})(o.default)
t.default=i},DR1i:function(e,t,n){var r
window,r=function(){return function(n){var r={}
function a(e){if(r[e])return r[e].exports
var t=r[e]={i:e,l:!1,exports:{}}
return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var n=Object.create(null)
if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r))
return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=22)}([function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a
a=function(){return this}()
try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(a=window)}e.exports=a},function(r,o,a){"use strict";(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e(){var e
try{e=o.storage.debug}catch(e){}return!e&&void 0!==t&&"env"in t&&(e=t.env.DEBUG),e}(o=r.exports=a(26)).log=function(){return"object"===("undefined"==typeof console?"undefined":n(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},o.formatArgs=function(e){var t=this.useColors
if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),t){var n="color: "+this.color
e.splice(1,0,n,"color: inherit")
var r=0,a=0
e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,n)}},o.save=function(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(e){}},o.load=e,o.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(
"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},
o.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF",
"#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],o.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message
}},o.enable(e())}).call(this,a(25))},function(e,t,n){"use strict"
function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t]
return e}(e)}(e.exports=r).prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},
this
var n,r=this._callbacks["$"+e]
if(!r)return this
if(1==arguments.length)return delete this._callbacks["$"+e],this
for(var a=0;a<r.length;a++)if((n=r[a])===t||n.fn===t){r.splice(a,1)
break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{}
var t=[].slice.call(arguments,1),n=this._callbacks["$"+e]
if(n)for(var r=0,a=(n=n.slice(0)).length;r<a;++r)n[r].apply(this,t)
return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,v,r){"use strict";(function(l){var a,e=r(33),o=r(15),f=r(39),c=r(40),i=r(41)
l&&l.ArrayBuffer&&(a=r(43))
var t="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),n="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),u=t||n
v.protocol=3
var s=v.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},d=e(s),p={type:"error",data:"parser error"},h=r(44)
function m(e,t,n){for(var a=new Array(e.length),r=c(e.length,n),o=function(n,e,r){t(e,function(e,t){a[n]=t,r(e,a)})},i=0;i<e.length;i++)o(i,e[i],r)}v.encodePacket=function(e,c,t,n){"function"==typeof c&&(n=c,c=!1),"function"==typeof t&&(n=t,t=null)
var r,a=void 0===e.data?void 0:e.data.buffer||e.data
if(l.ArrayBuffer&&a instanceof ArrayBuffer)return function(e,t,n){if(!c)return v.encodeBase64Packet(e,n)
var r=e.data,a=new Uint8Array(r),o=new Uint8Array(1+r.byteLength)
o[0]=s[e.type]
for(var i=0;i<a.length;i++)o[i+1]=a[i]
return n(o.buffer)}(e,0,n)
if(h&&a instanceof l.Blob)return function(e,t,n){if(!t)return v.encodeBase64Packet(e,n)
if(u)return function(e,t,n){if(!t)return v.encodeBase64Packet(e,n)
var r=new FileReader
return r.onload=function(){e.data=r.result,v.encodePacket(e,t,!0,n)},r.readAsArrayBuffer(e.data)}(e,t,n)
var r=new Uint8Array(1)
return r[0]=s[e.type],n(new h([r.buffer,e.data]))}(e,c,n)
if(a&&a.base64)return r=e,n("b"+v.packets[r.type]+r.data.data)
var o=s[e.type]
return void 0!==e.data&&(o+=t?i.encode(String(e.data),{strict:!1}):String(e.data)),n(""+o)},v.encodeBase64Packet=function(t,n){var r,a="b"+v.packets[t.type]
if(h&&t.data instanceof l.Blob){var o=new FileReader
return o.onload=function(){var e=o.result.split(",")[1]
n(a+e)},o.readAsDataURL(t.data)}try{r=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var i=new Uint8Array(t.data),c=new Array(i.length),u=0;u<i.length;u++)c[u]=i[u]
r=String.fromCharCode.apply(null,c)}return a+=l.btoa(r),n(a)},v.decodePacket=function(e,t,n){if(void 0===e)return p
if("string"==typeof e){if("b"===e.charAt(0))return v.decodeBase64Packet(e.substr(1),t)
if(n&&!1===(e=function(e){try{e=i.decode(e,{strict:!1})}catch(e){return!1}return e}(e)))return p
var r=e.charAt(0)
return Number(r)==r&&d[r]?1<e.length?{type:d[r],data:e.substring(1)}:{type:d[r]}:p}r=new Uint8Array(e)[0]
var a=f(e,1)
return h&&"blob"===t&&(a=new h([a])),{type:d[r],data:a}},v.decodeBase64Packet=function(e,t){var n=d[e.charAt(0)]
if(!a)return{type:n,data:{base64:!0,data:e.substr(1)}}
var r=a.decode(e.substr(1))
return"blob"===t&&h&&(r=new h([r])),{type:n,data:r}},v.encodePayload=function(e,t,n){"function"==typeof t&&(n=t,t=null)
var r=o(e)
return t&&r?h&&!u?v.encodePayloadAsBlob(e,n):v.encodePayloadAsArrayBuffer(e,n):e.length?void m(e,function(e,n){v.encodePacket(e,!!r&&t,!1,function(e){var t
n(null,(t=e).length+":"+t)})},function(e,t){return n(t.join(""))}):n("0:")},v.decodePayload=function(e,t,n){if("string"!=typeof e)return v.decodePayloadAsBinary(e,t,n)
var r
if("function"==typeof t&&(n=t,t=null),""===e)return n(p,0,1)
for(var a,o,i="",c=0,u=e.length;c<u;c++){var l=e.charAt(c)
if(":"===l){if(""===i||i!=(a=Number(i)))return n(p,0,1)
if(i!=(o=e.substr(c+1,a)).length)return n(p,0,1)
if(o.length){if(r=v.decodePacket(o,t,!1),p.type===r.type&&p.data===r.data)return n(p,0,1)
if(!1===n(r,c+a,u))return}c+=a,i=""}else i+=l}return""!==i?n(p,0,1):void 0},v.encodePayloadAsArrayBuffer=function(e,r){if(!e.length)return r(new ArrayBuffer(0))
m(e,function(e,t){v.encodePacket(e,!0,!0,function(e){return t(null,e)})},function(e,t){var n=t.reduce(function(e,t){var n
return e+(n="string"==typeof t?t.length:t.byteLength).toString().length+n+2},0),i=new Uint8Array(n),c=0
return t.forEach(function(e){var t="string"==typeof e,n=e
if(t){for(var r=new Uint8Array(e.length),a=0;a<e.length;a++)r[a]=e.charCodeAt(a)
n=r.buffer}i[c++]=t?0:1
var o=n.byteLength.toString()
for(a=0;a<o.length;a++)i[c++]=parseInt(o[a])
for(i[c++]=255,r=new Uint8Array(n),a=0;a<r.length;a++)i[c++]=r[a]}),r(i.buffer)})},v.encodePayloadAsBlob=function(e,n){m(e,function(e,c){v.encodePacket(e,!0,!0,function(e){var t=new Uint8Array(1)
if(t[0]=1,"string"==typeof e){for(var n=new Uint8Array(e.length),r=0;r<e.length;r++)n[r]=e.charCodeAt(r)
e=n.buffer,t[0]=0}var a=(e instanceof ArrayBuffer?e.byteLength:e.size).toString(),o=new Uint8Array(a.length+1)
for(r=0;r<a.length;r++)o[r]=parseInt(a[r])
if(o[a.length]=255,h){var i=new h([t.buffer,o.buffer,e])
c(null,i)}})},function(e,t){return n(new h(t))})},v.decodePayloadAsBinary=function(e,n,r){"function"==typeof n&&(r=n,n=null)
for(var t=e,a=[];0<t.byteLength;){for(var o=new Uint8Array(t),i=0===o[0],c="",u=1;255!==o[u];u++){if(310<c.length)return r(p,0,1)
c+=o[u]}t=f(t,2+c.length),c=parseInt(c)
var l=f(t,0,c)
if(i)try{l=String.fromCharCode.apply(null,new Uint8Array(l))}catch(e){var s=new Uint8Array(l)
for(l="",u=0;u<s.length;u++)l+=String.fromCharCode(s[u])}a.push(l),t=f(t,c)}var d=a.length
a.forEach(function(e,t){r(v.decodePacket(e,n,!0),t,d)})}}).call(this,r(0))},function(e,t,n){"use strict"
t.encode=function(e){var t=""
for(var n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
return t},t.decode=function(e){for(var t={},n=e.split("&"),r=0,a=n.length;r<a;r++){var o=n[r].split("=")
t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}},function(e,t,n){"use strict"
e.exports=function(e,t){var n=function(){}
n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,c,t){"use strict"
var u=t(1)("socket.io-parser"),n=t(2),o=t(28),l=t(10),r=t(11)
function a(){}c.protocol=4,c.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],c.CONNECT=0,c.DISCONNECT=1,c.EVENT=2,c.ACK=3,c.ERROR=4,c.BINARY_EVENT=5,c.BINARY_ACK=6,c.Encoder=a,c.Decoder=d
var i=c.ERROR+'"encode error"'
function s(e){var t=""+e.type
if(c.BINARY_EVENT!==e.type&&c.BINARY_ACK!==e.type||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data){var n=function(e){try{return JSON.stringify(e)}catch(e){return!1}}(e.data)
if(!1===n)return i
t+=n}return u("encoded %j as %s",e,t),t}function d(){this.reconstructor=null}function f(e){this.reconPack=e,this.buffers=[]}function p(e){return{type:c.ERROR,data:"parser error: "+e}}a.prototype.encode=function(e,t){var n,a
u("encoding packet %j",e),c.BINARY_EVENT===e.type||c.BINARY_ACK===e.type?(n=e,a=t,o.removeBlobs(n,function(e){var t=o.deconstructPacket(e),n=s(t.packet),r=t.buffers
r.unshift(n),a(r)})):t([s(e)])},n(d.prototype),d.prototype.add=function(e){var t
if("string"==typeof e)t=function(e){var t=0,n={type:Number(e.charAt(0))}
if(null==c.types[n.type])return p("unknown packet type "+n.type)
if(c.BINARY_EVENT===n.type||c.BINARY_ACK===n.type){for(var r="";"-"!==e.charAt(++t)&&(r+=e.charAt(t),t!=e.length););if(r!=Number(r)||"-"!==e.charAt(t))throw new Error("Illegal attachments")
n.attachments=Number(r)}if("/"===e.charAt(t+1))for(n.nsp="";++t;){if(","===(o=e.charAt(t)))break
if(n.nsp+=o,t===e.length)break}else n.nsp="/"
var a=e.charAt(t+1)
if(""!==a&&Number(a)==a){for(n.id="";++t;){var o
if(null==(o=e.charAt(t))||Number(o)!=o){--t
break}if(n.id+=e.charAt(t),t===e.length)break}n.id=Number(n.id)}if(e.charAt(++t)){var i=function(e){try{return JSON.parse(e)}catch(e){return!1}}(e.substr(t))
if(!(!1!==i&&(n.type===c.ERROR||l(i))))return p("invalid payload")
n.data=i}return u("decoded %s as %j",e,n),n}(e),c.BINARY_EVENT===t.type||c.BINARY_ACK===t.type?(this.reconstructor=new f(t),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",t)):this.emit("decoded",t)
else{if(!r(e)&&!e.base64)throw new Error("Unknown type: "+e)
if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(t=this.reconstructor.takeBinaryData(e))&&(this.reconstructor=null,this.emit("decoded",t))}},d.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},f.prototype.takeBinaryData=function(e){if(this.buffers.push(e),this.buffers.length!==this.reconPack.attachments)return null
var t=o.reconstructPacket(this.reconPack,this.buffers)
return this.finishedReconstruction(),t},f.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(e,t,n){"use strict";(function(a){var o=n(31)
e.exports=function(e){var t=e.xdomain,n=e.xscheme,r=e.enablesXDR
try{if("undefined"!=typeof XMLHttpRequest&&(!t||o))return new XMLHttpRequest}catch(e){}try{if("undefined"!=typeof XDomainRequest&&!n&&r)return new XDomainRequest}catch(e){}if(!t)try{return new(a[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(e){}}}).call(this,n(0))},function(e,t,n){"use strict"
var r=n(3)
function a(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1,this.socket=e.socket,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.forceNode=e.forceNode,this.extraHeaders=e.extraHeaders,
this.localAddress=e.localAddress}n(2)((e.exports=a).prototype),a.prototype.onError=function(e,t){var n=new Error(e)
return n.type="TransportError",n.description=t,this.emit("error",n),this},a.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},a.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},a.prototype.send=function(e){if("open"!==this.readyState)throw new Error("Transport not open")
this.write(e)},a.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},a.prototype.onData=function(e){var t=r.decodePacket(e,this.socket.binaryType)
this.onPacket(t)},a.prototype.onPacket=function(e){this.emit("packet",e)},a.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(e,t,n){"use strict"
var c=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,u=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"]
e.exports=function(e){var t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length))
for(var a=c.exec(e||""),o={},i=14;i--;)o[u[i]]=a[i]||""
return-1!=n&&-1!=r&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o}},function(e,t,n){"use strict"
var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,n){"use strict";(function(t){e.exports=function(e){return n&&t.Buffer.isBuffer(e)||r&&(e instanceof t.ArrayBuffer||a(e))}
var n="function"==typeof t.Buffer&&"function"==typeof t.Buffer.isBuffer,r="function"==typeof t.ArrayBuffer,a=r&&"function"==typeof t.ArrayBuffer.isView?t.ArrayBuffer.isView:function(e){return e.buffer instanceof t.ArrayBuffer}}).call(this,n(0))},function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=n(29),o=n(19),a=n(2),i=n(6),l=n(20),c=n(21),s=n(1)("socket.io-client:manager"),d=n(18),f=n(49),p=Object.prototype.hasOwnProperty
function h(e,t){if(!(this instanceof h))return new h(e,t)
e&&"object"===r(e)&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.nsps={},this.subs=[],this.opts=t,this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(t.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(
null==t.timeout?2e4:t.timeout),this.readyState="closed",this.uri=e,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[]
var n=t.parser||i
this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=!1!==t.autoConnect,this.autoConnect&&this.open()}(e.exports=h).prototype.emitAll=function(){for(var e in this.emit.apply(this,arguments),this.nsps)p.call(this.nsps,e)&&this.nsps[e].emit.apply(this.nsps[e],arguments)},h.prototype.updateSocketIds=function(){for(var e in this.nsps)p.call(this.nsps,e)&&(this.nsps[e].id=this.generateId(e))},h.prototype.generateId=function(e){return("/"===e?"":e+"#")+this.engine.id},a(h.prototype),
h.prototype.reconnection=function(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection},h.prototype.reconnectionAttempts=function(e){return arguments.length?(this._reconnectionAttempts=e,this):this._reconnectionAttempts},h.prototype.reconnectionDelay=function(e){return arguments.length?(this._reconnectionDelay=e,this.backoff&&this.backoff.setMin(e),this):this._reconnectionDelay},h.prototype.randomizationFactor=function(e){return arguments.length?(this._randomizationFactor=e,
this.backoff&&this.backoff.setJitter(e),this):this._randomizationFactor},h.prototype.reconnectionDelayMax=function(e){return arguments.length?(this._reconnectionDelayMax=e,this.backoff&&this.backoff.setMax(e),this):this._reconnectionDelayMax},h.prototype.timeout=function(e){return arguments.length?(this._timeout=e,this):this._timeout},h.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},h.prototype.open=h.prototype.connect=function(
n,e){if(s("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this
s("opening %s",this.uri),this.engine=u(this.uri,this.opts)
var t=this.engine,r=this
this.readyState="opening",this.skipReconnect=!1
var a=l(t,"open",function(){r.onopen(),n&&n()}),o=l(t,"error",function(e){if(s("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),n){var t=new Error("Connection error")
t.data=e,n(t)}else r.maybeReconnectOnOpen()})
if(!1!==this._timeout){var i=this._timeout
s("connect attempt will timeout after %d",i)
var c=setTimeout(function(){s("connect attempt timed out after %d",i),a.destroy(),t.close(),t.emit("error","timeout"),r.emitAll("connect_timeout",i)},i)
this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(a),this.subs.push(o),this},h.prototype.onopen=function(){s("open"),this.cleanup(),this.readyState="open",this.emit("open")
var e=this.engine
this.subs.push(l(e,"data",c(this,"ondata"))),this.subs.push(l(e,"ping",c(this,"onping"))),this.subs.push(l(e,"pong",c(this,"onpong"))),this.subs.push(l(e,"error",c(this,"onerror"))),this.subs.push(l(e,"close",c(this,"onclose"))),this.subs.push(l(this.decoder,"decoded",c(this,"ondecoded")))},h.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},h.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},h.prototype.ondata=function(e){this.decoder.add(e)},
h.prototype.ondecoded=function(e){this.emit("packet",e)},h.prototype.onerror=function(e){s("error",e),this.emitAll("error",e)},h.prototype.socket=function(e,t){var n=this.nsps[e]
if(!n){n=new o(this,e,t),this.nsps[e]=n
var r=this
n.on("connecting",a),n.on("connect",function(){n.id=r.generateId(e)}),this.autoConnect&&a()}function a(){~d(r.connecting,n)||r.connecting.push(n)}return n},h.prototype.destroy=function(e){var t=d(this.connecting,e)
~t&&this.connecting.splice(t,1),this.connecting.length||this.close()},h.prototype.packet=function(n){s("writing packet %j",n)
var r=this
n.query&&0===n.type&&(n.nsp+="?"+n.query),r.encoding?r.packetBuffer.push(n):(r.encoding=!0,this.encoder.encode(n,function(e){for(var t=0;t<e.length;t++)r.engine.write(e[t],n.options)
r.encoding=!1,r.processPacketQueue()}))},h.prototype.processPacketQueue=function(){if(0<this.packetBuffer.length&&!this.encoding){var e=this.packetBuffer.shift()
this.packet(e)}},h.prototype.cleanup=function(){s("cleanup")
for(var e=this.subs.length,t=0;t<e;t++)this.subs.shift().destroy()
this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},h.prototype.close=h.prototype.disconnect=function(){s("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},h.prototype.onclose=function(e){s("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()},
h.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this
var t=this
if(this.backoff.attempts>=this._reconnectionAttempts)s("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1
else{var e=this.backoff.duration()
s("will wait %dms before reconnect attempt",e),this.reconnecting=!0
var n=setTimeout(function(){t.skipReconnect||(s("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(s("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(s("reconnect success"),t.onreconnect())}))},e)
this.subs.push({destroy:function(){clearTimeout(n)}})}},h.prototype.onreconnect=function(){var e=this.backoff.attempts
this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",e)}},function(e,t,n){"use strict";(function(i){var c=n(7),u=n(32),l=n(45),e=n(46)
t.polling=function(e){var t=!1,n=!1,r=!1!==e.jsonp
if(i.location){var a="https:"===location.protocol,o=location.port
o||(o=a?443:80),t=e.hostname!==location.hostname||o!==e.port,n=e.secure!==a}if(e.xdomain=t,e.xscheme=n,"open"in new c(e)&&!e.forceJSONP)return new u(e)
if(!r)throw new Error("JSONP disabled")
return new l(e)},t.websocket=e}).call(this,n(0))},function(e,t,n){"use strict"
var r=n(8),a=n(4),o=n(3),i=n(5),c=n(17),u=n(1)("engine.io-client:polling")
e.exports=s
var l=null!=new(n(7))({xdomain:!1}).responseType
function s(e){var t=e&&e.forceBase64
l&&!t||(this.supportsBinary=!1),r.call(this,e)}i(s,r),s.prototype.name="polling",s.prototype.doOpen=function(){this.poll()},s.prototype.pause=function(e){var t=this
function n(){u("paused"),t.readyState="paused",e()}if(this.readyState="pausing",this.polling||!this.writable){var r=0
this.polling&&(u("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){u("pre-pause polling complete"),--r||n()})),this.writable||(u("we are currently writing - waiting to pause"),r++,this.once("drain",function(){u("pre-pause writing complete"),--r||n()}))}else n()},s.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},s.prototype.onData=function(e){var r=this
u("polling got data %s",e),o.decodePayload(e,this.socket.binaryType,function(e,t,n){if("opening"===r.readyState&&r.onOpen(),"close"===e.type)return r.onClose(),!1
r.onPacket(e)}),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},s.prototype.doClose=function(){var e=this
function t(){u("writing close packet"),e.write([{type:"close"}])}"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},s.prototype.write=function(e){var t=this
this.writable=!1
var n=function(){t.writable=!0,t.emit("drain")}
o.encodePayload(e,this.supportsBinary,function(e){t.doWrite(e,n)})},s.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",n=""
return!1!==this.timestampRequests&&(e[this.timestampParam]=c()),this.supportsBinary||e.sid||(e.b64=1),e=a.encode(e),this.port&&("https"===t&&443!==Number(this.port)||"http"===t&&80!==Number(this.port))&&(n=":"+this.port),e.length&&(e="?"+e),t+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+e}},function(t,e,n){"use strict";(function(o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=n(38),e=Object.prototype.toString,u="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===e.call(Blob),l="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===e.call(File)
t.exports=function e(t){if(!t||"object"!==i(t))return!1
if(c(t)){for(var n=0,r=t.length;n<r;n++)if(e(t[n]))return!0
return!1}if("function"==typeof o&&o.isBuffer&&o.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||u&&t instanceof Blob||l&&t instanceof File)return!0
if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return e(t.toJSON(),!0)
for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return!0
return!1}}).call(this,n(34).Buffer)},function(t,e){(function(e){t.exports=e}).call(this,{})},function(e,t,n){"use strict"
var r,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),o=64,i={},c=0,u=0
function l(e){for(var t="";t=a[e%o]+t,0<(e=Math.floor(e/o)););return t}function s(){var e=l(+new Date)
return e!==r?(c=0,r=e):e+"."+l(c++)}for(;u<o;u++)i[a[u]]=u
s.encode=l,s.decode=function(e){var t=0
for(u=0;u<e.length;u++)t=t*o+i[e.charAt(u)]
return t},e.exports=s},function(e,t,n){"use strict"
var r=[].indexOf
e.exports=function(e,t){if(r)return e.indexOf(t)
for(var n=0;n<e.length;++n)if(e[n]===t)return n
return-1}},function(e,t,n){"use strict"
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(6),o=n(2),i=n(48),c=n(20),u=n(21),l=n(1)("socket.io-client:socket"),s=n(4),d=n(15)
e.exports=h
var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},p=o.prototype.emit
function h(e,t,n){this.io=e,this.nsp=t,(this.json=this).ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}o(h.prototype),h.prototype.subEvents=function(){if(!this.subs){var e=this.io
this.subs=[c(e,"open",u(this,"onopen")),c(e,"packet",u(this,"onpacket")),c(e,"close",u(this,"onclose"))]}},h.prototype.open=h.prototype.connect=function(){return this.connected||(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting")),this},h.prototype.send=function(){var e=i(arguments)
return e.unshift("message"),this.emit.apply(this,e),this},h.prototype.emit=function(e){if(f.hasOwnProperty(e))return p.apply(this,arguments),this
var t=i(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:d(t))?a.BINARY_EVENT:a.EVENT,data:t,options:{}}
return n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof t[t.length-1]&&(l("emitting packet with ack id %d",this.ids),this.acks[this.ids]=t.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},h.prototype.packet=function(e){e.nsp=this.nsp,this.io.packet(e)},h.prototype.onopen=function(){if(l("transport is open - connecting"),"/"!==this.nsp)if(this.query){var e="object"===r(this.query)?s.encode(this.query):this.query
l("sending connect packet with query %s",e),this.packet({type:a.CONNECT,query:e})}else this.packet({type:a.CONNECT})},h.prototype.onclose=function(e){l("close (%s)",e),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",e)},h.prototype.onpacket=function(e){var t=e.nsp===this.nsp,n=e.type===a.ERROR&&"/"===e.nsp
if(t||n)switch(e.type){case a.CONNECT:this.onconnect()
break
case a.EVENT:case a.BINARY_EVENT:this.onevent(e)
break
case a.ACK:case a.BINARY_ACK:this.onack(e)
break
case a.DISCONNECT:this.ondisconnect()
break
case a.ERROR:this.emit("error",e.data)}},h.prototype.onevent=function(e){var t=e.data||[]
l("emitting event %j",t),null!=e.id&&(l("attaching ack callback to event"),t.push(this.ack(e.id))),this.connected?p.apply(this,t):this.receiveBuffer.push(t)},h.prototype.ack=function(t){var n=this,r=!1
return function(){if(!r){r=!0
var e=i(arguments)
l("sending ack %j",e),n.packet({type:d(e)?a.BINARY_ACK:a.ACK,id:t,data:e})}}},h.prototype.onack=function(e){var t=this.acks[e.id]
"function"==typeof t?(l("calling ack %s with %j",e.id,e.data),t.apply(this,e.data),delete this.acks[e.id]):l("bad ack %s",e.id)},h.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},h.prototype.emitBuffered=function(){var e
for(e=0;e<this.receiveBuffer.length;e++)p.apply(this,this.receiveBuffer[e])
for(this.receiveBuffer=[],e=0;e<this.sendBuffer.length;e++)this.packet(this.sendBuffer[e])
this.sendBuffer=[]},h.prototype.ondisconnect=function(){l("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},h.prototype.destroy=function(){if(this.subs){for(var e=0;e<this.subs.length;e++)this.subs[e].destroy()
this.subs=null}this.io.destroy(this)},h.prototype.close=h.prototype.disconnect=function(){return this.connected&&(l("performing disconnect (%s)",this.nsp),this.packet({type:a.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},h.prototype.compress=function(e){return this.flags.compress=e,this},h.prototype.binary=function(e){return this.flags.binary=e,this}},function(e,t,n){"use strict"
e.exports=function(e,t,n){return e.on(t,n),{destroy:function(){e.removeListener(t,n)}}}},function(e,t,n){"use strict"
var r=[].slice
e.exports=function(e,t){if("string"==typeof t&&(t=e[t]),"function"!=typeof t)throw new Error("bind() requires a function")
var n=r.call(arguments,2)
return function(){return t.apply(e,n.concat(r.call(arguments)))}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createUserSocket=void 0
var r,u=(r=n(23))&&r.__esModule?r:{default:r}
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s={transports:["websocket"],reconnectionDelay:2e3,reconnectionDelayMax:1e4}
t.createUserSocket=function(e){var t=e.userId,n=e.socketUrl,r=e.socketPath,a=void 0===r?"/S":r,o=e.extraHeaders,i=(0,u.default)(n,function(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o)
"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r
t=a,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return a}({},s,{path:a,query:{userId:t,fromURL:p().slice(0,128)},extraHeaders:o}))
i.emitAsync=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return new Promise(function(e){return i.emit.apply(i,t.concat([e]))}).then(function(e){var t=e.error,n=e.result
if(t)throw Object.assign(new Error("object"===("undefined"==typeof value?"undefined":l(value))&&t.message||"DEFAULT_USER_SOCKET_ERROR"),t)
return n})}
var c=0
return i.getServerTimestamp=function(){return f(d()+c)},i.calibrateTimestampOffsetAsync=function(){var n=d()
return i.emitAsync("request:timestamp").then(function(e){var t=d()
c=Number(e)-.5*(n+t)})},i}
var d=function(){return.001*Date.now()},f=function(e){return Math.round(100*e)/100},p=function(){try{return window.location.href}catch(e){return"UNKNOWN"}}},function(e,t,n){"use strict"
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=n(24),r=n(6),s=n(12),d=n(1)("socket.io-client")
e.exports=t=a
var f=t.managers={}
function a(e,t){"object"===u(e)&&(t=e,e=void 0),t=t||{}
var n,r=l(e),a=r.source,o=r.id,i=r.path,c=f[o]&&i in f[o].nsps
return n=t.forceNew||t["force new connection"]||!1===t.multiplex||c?(d("ignoring socket cache for %s",a),s(a,t)):(f[o]||(d("new io instance for %s",a),f[o]=s(a,t)),f[o]),r.query&&!t.query&&(t.query=r.query),n.socket(r.path,t)}t.protocol=r.protocol,t.connect=a,t.Manager=n(12),t.Socket=n(19)},function(e,t,n){"use strict";(function(a){var o=n(9),i=n(1)("socket.io-client:url")
e.exports=function(e,t){var n=e
t=t||a.location,null==e&&(e=t.protocol+"//"+t.host),"string"==typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?t.protocol+e:t.host+e),/^(https?|wss?):\/\//.test(e)||(i("protocol-less url %s",e),e=void 0!==t?t.protocol+"//"+e:"https://"+e),i("parse %s",e),n=o(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/"
var r=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host
return n.id=n.protocol+"://"+r+":"+n.port,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}}).call(this,n(0))},function(e,t,n){"use strict"
var r,a,o=e.exports={}
function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0)
if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0)
try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{a="function"==typeof clearTimeout?clearTimeout:c}catch(e){a=c}}()
var l,s=[],d=!1,f=-1
function p(){d&&l&&(d=!1,l.length?s=l.concat(s):f=-1,s.length&&h())}function h(){if(!d){var e=u(p)
d=!0
for(var t=s.length;t;){for(l=s,s=[];++f<t;)l&&l[f].run()
f=-1,t=s.length}l=null,d=!1,function(t){if(a===clearTimeout)return clearTimeout(t)
if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t)
try{a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1)
if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
s.push(new m(e,t)),1!==s.length||d||u(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error(
"process.chdir is not supported")},o.umask=function(){return 0}},function(e,u,t){"use strict"
function n(e){var r
function c(){if(c.enabled){var a=c,e=+new Date,t=e-(r||e)
a.diff=t,a.prev=r,a.curr=e,r=e
for(var o=new Array(arguments.length),n=0;n<o.length;n++)o[n]=arguments[n]
o[0]=u.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O")
var i=0
o[0]=o[0].replace(/%([a-zA-Z%])/g,function(e,t){if("%%"===e)return e
i++
var n=u.formatters[t]
if("function"==typeof n){var r=o[i]
e=n.call(a,r),o.splice(i,1),i--}return e}),u.formatArgs.call(a,o),(c.log||u.log||console.log.bind(console)).apply(a,o)}}return c.namespace=e,c.enabled=u.enabled(e),c.useColors=u.useColors(),c.color=function(e){var t,n=0
for(t in e)n=(n<<5)-n+e.charCodeAt(t),n|=0
return u.colors[Math.abs(n)%u.colors.length]}(e),c.destroy=a,"function"==typeof u.init&&u.init(c),u.instances.push(c),c}function a(){var e=u.instances.indexOf(this)
return-1!==e&&(u.instances.splice(e,1),!0)}(u=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},u.disable=function(){u.enable("")},u.enable=function(e){var t
u.save(e),u.names=[],u.skips=[]
var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length
for(t=0;t<r;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?u.skips.push(new RegExp("^"+e.substr(1)+"$")):u.names.push(new RegExp("^"+e+"$")))
for(t=0;t<u.instances.length;t++){var a=u.instances[t]
a.enabled=u.enabled(a.namespace)}},u.enabled=function(e){if("*"===e[e.length-1])return!0
var t,n
for(t=0,n=u.skips.length;t<n;t++)if(u.skips[t].test(e))return!1
for(t=0,n=u.names.length;t<n;t++)if(u.names[t].test(e))return!0
return!1},u.humanize=t(27),u.instances=[],u.names=[],u.skips=[],u.formatters={}},function(e,t,n){"use strict"
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{}
var n,r,a=o(e)
if("string"===a&&0<e.length)return function(e){if(!(100<(e=String(e)).length)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(t){var n=parseFloat(t[1])
switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*n
case"days":case"day":case"d":return 864e5*n
case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*n
case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*n
case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*n
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n
default:return}}}}(e)
if("number"===a&&!1===isNaN(e))return t.long?i(r=e,864e5,"day")||i(r,36e5,"hour")||i(r,6e4,"minute")||i(r,1e3,"second")||r+" ms":864e5<=(n=e)?Math.round(n/864e5)+"d":36e5<=n?Math.round(n/36e5)+"h":6e4<=n?Math.round(n/6e4)+"m":1e3<=n?Math.round(n/1e3)+"s":n+"ms"
throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,n,r){"use strict";(function(e){function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=r(10),f=r(11),t=Object.prototype.toString,p="function"==typeof e.Blob||"[object BlobConstructor]"===t.call(e.Blob),
h="function"==typeof e.File||"[object FileConstructor]"===t.call(e.File)
n.deconstructPacket=function(e){var t=[],n=e.data,r=e
return r.data=function e(t,n){if(!t)return t
if(f(t)){var r={_placeholder:!0,num:n.length}
return n.push(t),r}if(d(t)){for(var a=new Array(t.length),o=0;o<t.length;o++)a[o]=e(t[o],n)
return a}if("object"!==s(t)||t instanceof Date)return t
a={}
for(var i in t)a[i]=e(t[i],n)
return a}(n,t),r.attachments=t.length,{packet:r,buffers:t}},n.reconstructPacket=function(e,t){return e.data=function e(t,n){if(!t)return t
if(t&&t._placeholder)return n[t.num]
if(d(t))for(var r=0;r<t.length;r++)t[r]=e(t[r],n)
else if("object"===s(t))for(var a in t)t[a]=e(t[a],n)
return t}(e.data,t),e.attachments=void 0,e},n.removeBlobs=function(e,c){var u=0,l=e
!function e(t,n,r){if(!t)return t
if(p&&t instanceof Blob||h&&t instanceof File){u++
var a=new FileReader
a.onload=function(){r?r[n]=this.result:l=this.result,--u||c(l)},a.readAsArrayBuffer(t)}else if(d(t))for(var o=0;o<t.length;o++)e(t[o],o,t)
else if("object"===s(t)&&!f(t))for(var i in t)e(t[i],i,t)}(l),u||c(l)}}).call(this,r(0))},function(e,t,n){"use strict"
e.exports=n(30),e.exports.parser=n(3)},function(t,e,n){"use strict";(function(r){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(13),e=n(2),d=n(1)("engine.io-client:socket"),i=n(18),c=n(3),u=n(9),l=n(4)
function f(e,t){if(!(this instanceof f))return new f(e,t)
t=t||{},e&&"object"===a(e)&&(t=e,e=null),e?(e=u(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=u(t.host).host),this.secure=null!=t.secure?t.secure:r.location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.agent=t.agent||!1,this.hostname=t.hostname||(r.location?location.hostname:"localhost"),this.port=t.port||(r.location&&location.port?location.port:this.secure?443:80),
this.query=t.query||{},"string"==typeof this.query&&(this.query=l.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.jsonp=!1!==t.jsonp,this.forceBase64=!!t.forceBase64,this.enablesXDR=!!t.enablesXDR,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.transportOptions=t.transportOptions||{},this.readyState="",this.writeBuffer=[],
this.prevBufferLen=0,this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades,this.perMessageDeflate=!1!==t.perMessageDeflate&&(t.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=t.pfx||null,this.key=t.key||null,this.passphrase=t.passphrase||null,this.cert=t.cert||null,
this.ca=t.ca||null,this.ciphers=t.ciphers||null,this.rejectUnauthorized=void 0===t.rejectUnauthorized||t.rejectUnauthorized,this.forceNode=!!t.forceNode
var n="object"===(void 0===r?"undefined":a(r))&&r
n.global===n&&(t.extraHeaders&&0<Object.keys(t.extraHeaders).length&&(this.extraHeaders=t.extraHeaders),t.localAddress&&(this.localAddress=t.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}(t.exports=f).priorWebsocketSuccess=!1,e(f.prototype),f.protocol=c.protocol,(f.Socket=f).Transport=n(8),f.transports=n(13),f.parser=n(3),f.prototype.createTransport=function(e){d('creating transport "%s"',e)
var t=function(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}(this.query)
t.EIO=c.protocol,t.transport=e
var n=this.transportOptions[e]||{}
return this.id&&(t.sid=this.id),new o[e]({query:t,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,
pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0})},
f.prototype.open=function(){var e
if(this.rememberUpgrade&&f.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket"
else{if(0===this.transports.length){var t=this
return void setTimeout(function(){t.emit("error","No transports available")},0)}e=this.transports[0]}this.readyState="opening"
try{e=this.createTransport(e)}catch(e){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)},f.prototype.setTransport=function(e){d("setting transport %s",e.name)
var t=this
this.transport&&(d("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),(this.transport=e).on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},f.prototype.probe=function(n){d('probing transport "%s"',n)
var r=this.createTransport(n,{probe:1}),a=!1,o=this
function e(){if(o.onlyBinaryUpgrades){var e=!this.supportsBinary&&o.transport.supportsBinary
a=a||e}a||(d('probe transport "%s" opened',n),r.send([{type:"ping",data:"probe"}]),r.once("packet",function(e){if(!a)if("pong"===e.type&&"probe"===e.data){if(d('probe transport "%s" pong',n),o.upgrading=!0,o.emit("upgrading",r),!r)return
f.priorWebsocketSuccess="websocket"===r.name,d('pausing current transport "%s"',o.transport.name),o.transport.pause(function(){a||"closed"===o.readyState||(d("changing transport and sending upgrade packet"),s(),o.setTransport(r),r.send([{type:"upgrade"}]),o.emit("upgrade",r),r=null,o.upgrading=!1,o.flush())})}else{d('probe transport "%s" failed',n)
var t=new Error("probe error")
t.transport=r.name,o.emit("upgradeError",t)}}))}function i(){a||(a=!0,s(),r.close(),r=null)}function t(e){var t=new Error("probe error: "+e)
t.transport=r.name,i(),d('probe transport "%s" failed because of error: %s',n,e),o.emit("upgradeError",t)}function c(){t("transport closed")}function u(){t("socket closed")}function l(e){r&&e.name!==r.name&&(d('"%s" works - aborting "%s"',e.name,r.name),i())}function s(){r.removeListener("open",e),r.removeListener("error",t),r.removeListener("close",c),o.removeListener("close",u),o.removeListener("upgrading",l)}f.priorWebsocketSuccess=!1,r.once("open",e),r.once("error",t),r.once("close",c),this.once("close"
,u),this.once("upgrading",l),r.open()},f.prototype.onOpen=function(){if(d("socket open"),this.readyState="open",f.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){d("starting upgrade probes")
for(var e=0,t=this.upgrades.length;e<t;e++)this.probe(this.upgrades[e])}},f.prototype.onPacket=function(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(d('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data))
break
case"pong":this.setPing(),this.emit("pong")
break
case"error":var t=new Error("server error")
t.code=e.data,this.onError(t)
break
case"message":this.emit("data",e.data),this.emit("message",e.data)}else d('packet received with socket readyState "%s"',this.readyState)},f.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},
f.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer)
var t=this
t.pingTimeoutTimer=setTimeout(function(){"closed"!==t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},f.prototype.setPing=function(){var e=this
clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){d("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},f.prototype.ping=function(){var e=this
this.sendPacket("ping",function(){e.emit("ping")})},f.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),(this.prevBufferLen=0)===this.writeBuffer.length?this.emit("drain"):this.flush()},f.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(d("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},
f.prototype.write=f.prototype.send=function(e,t,n){return this.sendPacket("message",e,t,n),this},f.prototype.sendPacket=function(e,t,n,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress
var a={type:e,data:t,options:n}
this.emit("packetCreate",a),this.writeBuffer.push(a),r&&this.once("flush",r),this.flush()}},f.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing"
var e=this
this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}function t(){e.onClose("forced close"),d("socket closing - telling transport to close"),e.transport.close()}function n(){e.removeListener("upgrade",n),e.removeListener("upgradeError",n),t()}function r(){e.once("upgrade",n),e.once("upgradeError",n)}return this},f.prototype.onError=function(e){d("socket error %j",e),f.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},
f.prototype.onClose=function(e,t){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(d('socket close with reason: "%s"',e),clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)},f.prototype.filterUpgrades=function(e){for(var t=[],n=0,r=e.length;n<r;n++
)~i(this.transports,e[n])&&t.push(e[n])
return t}}).call(this,n(0))},function(e,t,n){"use strict"
try{e.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){e.exports=!1}},function(s,e,d){"use strict";(function(a){var o=d(7),r=d(14),e=d(2),t=d(5),i=d(1)("engine.io-client:polling-xhr")
function n(){}function c(e){if(r.call(this,e),this.requestTimeout=e.requestTimeout,this.extraHeaders=e.extraHeaders,a.location){var t="https:"===location.protocol,n=location.port
n||(n=t?443:80),this.xd=e.hostname!==a.location.hostname||n!==e.port,this.xs=e.secure!==t}}function u(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.xs=!!e.xs,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.agent=e.agent,this.isBinary=e.isBinary,this.supportsBinary=e.supportsBinary,this.enablesXDR=e.enablesXDR,this.requestTimeout=e.requestTimeout,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,
this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders,this.create()}function l(){for(var e in u.requests)u.requests.hasOwnProperty(e)&&u.requests[e].abort()}s.exports=c,s.exports.Request=u,t(c,r),c.prototype.supportsBinary=!0,c.prototype.request=function(e){return(e=e||{}).uri=this.uri(),e.xd=this.xd,e.xs=this.xs,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,e.enablesXDR=this.enablesXDR,e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,
e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,e.requestTimeout=this.requestTimeout,e.extraHeaders=this.extraHeaders,new u(e)},c.prototype.doWrite=function(e,t){var n="string"!=typeof e&&void 0!==e,r=this.request({method:"POST",data:e,isBinary:n}),a=this
r.on("success",t),r.on("error",function(e){a.onError("xhr post error",e)}),this.sendXhr=r},c.prototype.doPoll=function(){i("xhr poll")
var e=this.request(),t=this
e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},e(u.prototype),u.prototype.create=function(){var e={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR}
e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized
var t=this.xhr=new o(e),n=this
try{i("xhr open %s: %s",this.method,this.uri),t.open(this.method,this.uri,this.async)
try{if(this.extraHeaders)for(var r in t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&&t.setRequestHeader(r,this.extraHeaders[r])}catch(e){}if("POST"===this.method)try{this.isBinary?t.setRequestHeader("Content-type","application/octet-stream"):t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{t.setRequestHeader("Accept","*/*")}catch(e){}"withCredentials"in t&&(t.withCredentials=!0),this.requestTimeout&&(
t.timeout=this.requestTimeout),this.hasXDR()?(t.onload=function(){n.onLoad()},t.onerror=function(){n.onError(t.responseText)}):t.onreadystatechange=function(){if(2===t.readyState)try{var e=t.getResponseHeader("Content-Type")
n.supportsBinary&&"application/octet-stream"===e&&(t.responseType="arraybuffer")}catch(e){}4===t.readyState&&(200===t.status||1223===t.status?n.onLoad():setTimeout(function(){n.onError(t.status)},0))},i("xhr data %s",this.data),t.send(this.data)}catch(e){return void setTimeout(function(){n.onError(e)},0)}a.document&&(this.index=u.requestsCount++,u.requests[this.index]=this)},u.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},u.prototype.onData=function(e){this.emit("data",e),
this.onSuccess()},u.prototype.onError=function(e){this.emit("error",e),this.cleanup(!0)},u.prototype.cleanup=function(e){if(void 0!==this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,e)try{this.xhr.abort()}catch(e){}a.document&&delete u.requests[this.index],this.xhr=null}},u.prototype.onLoad=function(){var e
try{var t
try{t=this.xhr.getResponseHeader("Content-Type")}catch(e){}e="application/octet-stream"===t&&this.xhr.response||this.xhr.responseText}catch(e){this.onError(e)}null!=e&&this.onData(e)},u.prototype.hasXDR=function(){return void 0!==a.XDomainRequest&&!this.xs&&this.enablesXDR},u.prototype.abort=function(){this.cleanup()},u.requestsCount=0,u.requests={},a.document&&(a.attachEvent?a.attachEvent("onunload",l):a.addEventListener&&a.addEventListener("beforeunload",l,!1))}).call(this,d(0))},function(e,t,n){
"use strict"
e.exports=Object.keys||function(e){var t=[],n=Object.prototype.hasOwnProperty
for(var r in e)n.call(e,r)&&t.push(r)
return t}},function(e,j,t){"use strict";(function(e){var c=t(35),o=t(36),i=t(37)
function n(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(e,t){if(n()<t)throw new RangeError("Invalid typed array length")
return d.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=d.prototype:(null===e&&(e=new d(t)),e.length=t),e}function d(e,t,n){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(e,t,n)
if("number"!=typeof e)return r(this,e,t,n)
if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return a(this,e)}function r(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
return t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),d.TYPED_ARRAY_SUPPORT?(e=t).__proto__=d.prototype:e=s(e,t),e}(e,t,n,r):"string"==typeof t?function(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!d.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|p(t,n),a=(e=u(e,r)).write(t,n)
return a!==r&&(e=e.slice(0,a)),e}(e,t,n):function(e,t){if(d.isBuffer(t)){var n=0|f(t.length)
return 0===(e=u(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(r=t.length)!=r?u(e,0):s(e,t)
if("Buffer"===t.type&&i(t.data))return s(e,t.data)}var r
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}function a(e,t){if(l(t),e=u(e,t<0?0:0|f(t)),!d.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0
return e}function s(e,t){var n=t.length<0?0:0|f(t.length)
e=u(e,n)
for(var r=0;r<n;r+=1)e[r]=255&t[r]
return e}function f(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes")
return 0|e}function p(e,t){if(d.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var n=e.length
if(0===n)return 0
for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return P(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return A(e).length
default:if(r)return P(e).length
t=(""+t).toLowerCase(),r=!0}}function h(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function m(e,t,n,r,a){if(0===e.length)return-1
if("string"==typeof n?(r=n,n=0):2147483647<n?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1
n=e.length-1}else if(n<0){if(!a)return-1
n=0}if("string"==typeof t&&(t=d.from(t,r)),d.isBuffer(t))return 0===t.length?-1:v(e,t,n,r,a)
if("number"==typeof t)return t&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,r,a)
throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,r,a){var o,i=1,c=e.length,u=t.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1
c/=i=2,u/=2,n/=2}function l(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(a){var s=-1
for(o=n;o<c;o++)if(l(e,o)===l(t,-1===s?0:o-s)){if(-1===s&&(s=o),o-s+1===u)return s*i}else-1!==s&&(o-=o-s),s=-1}else for(c<n+u&&(n=c-u),o=n;0<=o;o--){for(var d=!0,f=0;f<u;f++)if(l(e,o+f)!==l(t,f)){d=!1
break}if(d)return o}return-1}function g(e,t,n,r){n=Number(n)||0
var a=e.length-n
r?(r=Number(r))>a&&(r=a):r=a
var o=t.length
if(o%2!=0)throw new TypeError("Invalid hex string")
o/2<r&&(r=o/2)
for(var i=0;i<r;++i){var c=parseInt(t.substr(2*i,2),16)
if(isNaN(c))return i
e[n+i]=c}return i}function y(e,t,n,r){return L(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n))
return t}(t),e,n,r)}function b(e,t,n){n=Math.min(e.length,n)
for(var r=[],a=t;a<n;){var o,i,c,u,l=e[a],s=null,d=239<l?4:223<l?3:191<l?2:1
if(a+d<=n)switch(d){case 1:l<128&&(s=l)
break
case 2:128==(192&(o=e[a+1]))&&127<(u=(31&l)<<6|63&o)&&(s=u)
break
case 3:o=e[a+1],i=e[a+2],128==(192&o)&&128==(192&i)&&2047<(u=(15&l)<<12|(63&o)<<6|63&i)&&(u<55296||57343<u)&&(s=u)
break
case 4:o=e[a+1],i=e[a+2],c=e[a+3],128==(192&o)&&128==(192&i)&&128==(192&c)&&65535<(u=(15&l)<<18|(63&o)<<12|(63&i)<<6|63&c)&&u<1114112&&(s=u)}null===s?(s=65533,d=1):65535<s&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),a+=d}return function(e){var t=e.length
if(t<=w)return String.fromCharCode.apply(String,e)
for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=w))
return n}(r)}j.Buffer=d,j.SlowBuffer=function(e){return+e!=e&&(e=0),d.alloc(+e)},j.INSPECT_MAX_BYTES=50,d.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),j.kMaxLength=n(),d.poolSize=8192,d._augment=function(e){return e.__proto__=d.prototype,e},d.from=function(e,t,n){return r(null,e,t,n)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&d[Symbol.species]===d&&Object.defineProperty(d,Symbol.species,{
value:null,configurable:!0})),d.alloc=function(e,t,n){return a=t,o=n,l(r=e),r<=0?u(null,r):void 0!==a?"string"==typeof o?u(null,r).fill(a,o):u(null,r).fill(a):u(null,r)
var r,a,o},d.allocUnsafe=function(e){return a(null,e)},d.allocUnsafeSlow=function(e){return a(null,e)},d.isBuffer=function(e){return!(null==e||!e._isBuffer)},d.compare=function(e,t){if(!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var n=e.length,r=t.length,a=0,o=Math.min(n,r);a<o;++a)if(e[a]!==t[a]){n=e[a],r=t[a]
break}return n<r?-1:r<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},d.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return d.alloc(0)
var n
if(void 0===t)for(n=t=0;n<e.length;++n)t+=e[n].length
var r=d.allocUnsafe(t),a=0
for(n=0;n<e.length;++n){var o=e[n]
if(!d.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers')
o.copy(r,a),a+=o.length}return r},d.byteLength=p,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)h(this,t,t+1)
return this},d.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4)h(this,t,t+3),h(this,t+1,t+2)
return this},d.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8)h(this,t,t+7),h(this,t+1,t+6),h(this,t+2,t+5),h(this,t+3,t+4)
return this},d.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?b(this,0,e):function(e,t,n){var r,a,o,i=!1
if((void 0===t||t<0)&&(t=0),t>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(t>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return C(this,t,n)
case"utf8":case"utf-8":return b(this,t,n)
case"ascii":return S(this,t,n)
case"latin1":case"binary":return E(this,t,n)
case"base64":return r=this,o=n,0===(a=t)&&o===r.length?c.fromByteArray(r):c.fromByteArray(r.slice(a,o))
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,n)
default:if(i)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),i=!0}}.apply(this,arguments)},d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){var e="",t=j.INSPECT_MAX_BYTES
return 0<this.length&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},d.prototype.compare=function(e,t,n,r,a){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),t<0||n>e.length||r<0||a>this.length)throw new RangeError("out of range index")
if(a<=r&&n<=t)return 0
if(a<=r)return-1
if(n<=t)return 1
if(this===e)return 0
for(var o=(a>>>=0)-(r>>>=0),i=(n>>>=0)-(t>>>=0),c=Math.min(o,i),u=this.slice(r,a),l=e.slice(t,n),s=0;s<c;++s)if(u[s]!==l[s]){o=u[s],i=l[s]
break}return o<i?-1:i<o?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},d.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0
else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var a=this.length-t
if((void 0===n||a<n)&&(n=a),0<e.length&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o,i,c,u,l,s,d,f,p,h=!1;;)switch(r){case"hex":return g(this,e,t,n)
case"utf8":case"utf-8":return f=t,p=n,L(P(e,(d=this).length-f),d,f,p)
case"ascii":return y(this,e,t,n)
case"latin1":case"binary":return y(this,e,t,n)
case"base64":return u=this,l=t,s=n,L(A(e),u,l,s)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i=t,c=n,L(function(e,t){for(var n,r,a,o=[],i=0;i<e.length&&!((t-=2)<0);++i)r=(n=e.charCodeAt(i))>>8,a=n%256,o.push(a),o.push(r)
return o}(e,(o=this).length-i),o,i,c)
default:if(h)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),h=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var w=4096
function S(e,t,n){var r=""
n=Math.min(e.length,n)
for(var a=t;a<n;++a)r+=String.fromCharCode(127&e[a])
return r}function E(e,t,n){var r=""
n=Math.min(e.length,n)
for(var a=t;a<n;++a)r+=String.fromCharCode(e[a])
return r}function C(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r)
for(var a,o="",i=t;i<n;++i)o+=(a=e[i])<16?"0"+a.toString(16):a.toString(16)
return o}function _(e,t,n){for(var r=e.slice(t,n),a="",o=0;o<r.length;o+=2)a+=String.fromCharCode(r[o]+256*r[o+1])
return a}function x(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(n<e+t)throw new RangeError("Trying to access beyond buffer length")}function k(e,t,n,r,a,o){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(a<t||t<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>e.length)throw new RangeError("Index out of range")}function M(e,t,n,r){t<0&&(t=65535+t+1)
for(var a=0,o=Math.min(e.length-n,2);a<o;++a)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function T(e,t,n,r){t<0&&(t=4294967295+t+1)
for(var a=0,o=Math.min(e.length-n,4);a<o;++a)e[n+a]=t>>>8*(r?a:3-a)&255}function R(e,t,n,r,a,o){if(n+r>e.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function N(e,t,n,r,a){return a||R(e,0,n,4),o.write(e,t,n,r,23,4),n+4}function O(e,t,n,r,a){return a||R(e,0,n,8),o.write(e,t,n,r,52,8),n+8}d.prototype.slice=function(e,t){var n,r=this.length
if((e=~~e)<0?(e+=r)<0&&(e=0):r<e&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):r<t&&(t=r),t<e&&(t=e),d.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=d.prototype
else{var a=t-e
n=new d(a,void 0)
for(var o=0;o<a;++o)n[o]=this[o+e]}return n},d.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||x(e,t,this.length)
for(var r=this[e],a=1,o=0;++o<t&&(a*=256);)r+=this[e+o]*a
return r},d.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||x(e,t,this.length)
for(var r=this[e+--t],a=1;0<t&&(a*=256);)r+=this[e+--t]*a
return r},d.prototype.readUInt8=function(e,t){return t||x(e,1,this.length),this[e]},d.prototype.readUInt16LE=function(e,t){return t||x(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUInt16BE=function(e,t){return t||x(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUInt32LE=function(e,t){return t||x(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUInt32BE=function(e,t){return t||x(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])
},d.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||x(e,t,this.length)
for(var r=this[e],a=1,o=0;++o<t&&(a*=256);)r+=this[e+o]*a
return r>=(a*=128)&&(r-=Math.pow(2,8*t)),r},d.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||x(e,t,this.length)
for(var r=t,a=1,o=this[e+--r];0<r&&(a*=256);)o+=this[e+--r]*a
return o>=(a*=128)&&(o-=Math.pow(2,8*t)),o},d.prototype.readInt8=function(e,t){return t||x(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){t||x(e,2,this.length)
var n=this[e]|this[e+1]<<8
return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){t||x(e,2,this.length)
var n=this[e+1]|this[e]<<8
return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return t||x(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return t||x(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readFloatLE=function(e,t){return t||x(e,4,this.length),o.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return t||x(e,4,this.length),o.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return t||x(e,8,
this.length),o.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return t||x(e,8,this.length),o.read(this,e,!1,52,8)},d.prototype.writeUIntLE=function(e,t,n,r){e=+e,t|=0,n|=0,r||k(this,e,t,n,Math.pow(2,8*n)-1,0)
var a=1,o=0
for(this[t]=255&e;++o<n&&(a*=256);)this[t+o]=e/a&255
return t+n},d.prototype.writeUIntBE=function(e,t,n,r){e=+e,t|=0,n|=0,r||k(this,e,t,n,Math.pow(2,8*n)-1,0)
var a=n-1,o=1
for(this[t+a]=255&e;0<=--a&&(o*=256);)this[t+a]=e/o&255
return t+n},d.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,1,255,0),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},d.prototype.writeUInt32LE=function(e,t,n){
return e=+e,t|=0,n||k(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):T(this,e,t,!0),t+4},d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):T(this,e,t,!1),t+4},d.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var a=Math.pow(2,8*n-1)
k(this,e,t,n,a-1,-a)}var o=0,i=1,c=0
for(this[t]=255&e;++o<n&&(i*=256);)e<0&&0===c&&0!==this[t+o-1]&&(c=1),this[t+o]=(e/i>>0)-c&255
return t+n},d.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var a=Math.pow(2,8*n-1)
k(this,e,t,n,a-1,-a)}var o=n-1,i=1,c=0
for(this[t+o]=255&e;0<=--o&&(i*=256);)e<0&&0===c&&0!==this[t+o+1]&&(c=1),this[t+o]=(e/i>>0)-c&255
return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,1,127,-128),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},
d.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):T(this,e,t,!0),t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||k(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):T(this,e,t,!1),t+4},d.prototype.writeFloatLE=function(e,t,n){return N(this,e,t,!0,n)},
d.prototype.writeFloatBE=function(e,t,n){return N(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return O(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return O(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),0<r&&r<n&&(r=n),r===n)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n)
var a,o=r-n
if(this===e&&n<t&&t<r)for(a=o-1;0<=a;--a)e[a+t]=this[a+n]
else if(o<1e3||!d.TYPED_ARRAY_SUPPORT)for(a=0;a<o;++a)e[a+t]=this[a+n]
else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t)
return o},d.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var a=e.charCodeAt(0)
a<256&&(e=a)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!d.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index")
if(n<=t)return this
var o
if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e
else{var i=d.isBuffer(e)?e:P(new d(e,r).toString()),c=i.length
for(o=0;o<n-t;++o)this[o+t]=i[o%c]}return this}
var I=/[^+\/0-9A-Za-z-_]/g
function P(e,t){var n
t=t||1/0
for(var r=e.length,a=null,o=[],i=0;i<r;++i){if(55295<(n=e.charCodeAt(i))&&n<57344){if(!a){if(56319<n){-1<(t-=3)&&o.push(239,191,189)
continue}if(i+1===r){-1<(t-=3)&&o.push(239,191,189)
continue}a=n
continue}if(n<56320){-1<(t-=3)&&o.push(239,191,189),a=n
continue}n=65536+(a-55296<<10|n-56320)}else a&&-1<(t-=3)&&o.push(239,191,189)
if(a=null,n<128){if((t-=1)<0)break
o.push(n)}else if(n<2048){if((t-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function A(e){return c.toByteArray(function(e){if((e=(t=e,t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")).replace(I,"")).length<2)return""
for(var t;e.length%4!=0;)e+="="
return e}(e))}function L(e,t,n,r){for(var a=0;a<r&&!(a+n>=t.length||a>=e.length);++a)t[a+n]=e[a]
return a}}).call(this,t(0))},function(e,t,n){"use strict"
t.byteLength=function(e){var t=d(e),n=t[0],r=t[1]
return 3*(n+r)/4-r},t.toByteArray=function(e){for(var t,n=d(e),r=n[0],a=n[1],o=new s(3*(r+a)/4-a),i=0,c=0<a?r-4:r,u=0;u<c;u+=4)t=l[e.charCodeAt(u)]<<18|l[e.charCodeAt(u+1)]<<12|l[e.charCodeAt(u+2)]<<6|l[e.charCodeAt(u+3)],o[i++]=t>>16&255,o[i++]=t>>8&255,o[i++]=255&t
return 2===a&&(t=l[e.charCodeAt(u)]<<2|l[e.charCodeAt(u+1)]>>4,o[i++]=255&t),1===a&&(t=l[e.charCodeAt(u)]<<10|l[e.charCodeAt(u+1)]<<4|l[e.charCodeAt(u+2)]>>2,o[i++]=t>>8&255,o[i++]=255&t),o},t.fromByteArray=function(e){for(var t,n=e.length,r=n%3,a=[],o=0,i=n-r;o<i;o+=16383)a.push(u(e,o,i<o+16383?i:o+16383))
return 1===r?(t=e[n-1],a.push(c[t>>2]+c[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],a.push(c[t>>10]+c[t>>4&63]+c[t<<2&63]+"=")),a.join("")}
for(var c=[],l=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,o=r.length;a<o;++a)c[a]=r[a],l[r.charCodeAt(a)]=a
function d(e){var t=e.length
if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4")
var n=e.indexOf("=")
return-1===n&&(n=t),[n,n===t?0:4-n%4]}function u(e,t,n){for(var r,a,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(c[(a=r)>>18&63]+c[a>>12&63]+c[a>>6&63]+c[63&a])
return o.join("")}l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63},function(e,t,n){"use strict"
t.read=function(e,t,n,r,a){var o,i,c=8*a-r-1,u=(1<<c)-1,l=u>>1,s=-7,d=n?a-1:0,f=n?-1:1,p=e[t+d]
for(d+=f,o=p&(1<<-s)-1,p>>=-s,s+=c;0<s;o=256*o+e[t+d],d+=f,s-=8);for(i=o&(1<<-s)-1,o>>=-s,s+=r;0<s;i=256*i+e[t+d],d+=f,s-=8);if(0===o)o=1-l
else{if(o===u)return i?NaN:1/0*(p?-1:1)
i+=Math.pow(2,r),o-=l}return(p?-1:1)*i*Math.pow(2,o-r)},t.write=function(e,t,n,r,a,o){var i,c,u,l=8*o-a-1,s=(1<<l)-1,d=s>>1,f=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,h=r?1:-1,m=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(c=isNaN(t)?1:0,i=s):(i=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-i))<1&&(i--,u*=2),2<=(t+=1<=i+d?f/u:f*Math.pow(2,1-d))*u&&(i++,u/=2),s<=i+d?(c=0,i=s):1<=i+d?(c=(t*u-1)*Math.pow(2,a),i+=d):(c=t*Math.pow(2,d-1)*Math.pow(2,a),i=0));8<=a;e[n+p]=255&c,p+=h,c/=256,a-=8);for(i=i<<a|c,l+=a;0<l;e[n+p]=255&i,p+=h,i/=256,l-=8);e[n+p-h]|=128*m}},function(e,t,n){"use strict"
var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,n){"use strict"
var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,n){"use strict"
e.exports=function(e,t,n){var r=e.byteLength
if(t=t||0,n=n||r,e.slice)return e.slice(t,n)
if(t<0&&(t+=r),n<0&&(n+=r),r<n&&(n=r),r<=t||n<=t||0===r)return new ArrayBuffer(0)
for(var a=new Uint8Array(e),o=new Uint8Array(n-t),i=t,c=0;i<n;i++,c++)o[c]=a[i]
return o.buffer}},function(e,t,n){"use strict"
function i(){}e.exports=function(e,n,r){var a=!1
return r=r||i,0===(o.count=e)?n():o
function o(e,t){if(o.count<=0)throw new Error("after called too many times");--o.count,e?(a=!0,n(e),n=r):0!==o.count||a||n(null,t)}}},function(e,S,E){"use strict";(function(g,y){var b
function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t="object"==w(S)&&S,n="object"==w(g)&&g&&g.exports==t&&g,r="object"==(void 0===y?"undefined":w(y))&&y
r.global!==r&&r.window!==r||(e=r)
var o,i,c,u=String.fromCharCode
function l(e){for(var t,n,r=[],a=0,o=e.length;a<o;)55296<=(t=e.charCodeAt(a++))&&t<=56319&&a<o?56320==(64512&(n=e.charCodeAt(a++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),a--):r.push(t)
return r}function a(e,t){if(55296<=e&&e<=57343){if(t)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")
return!1}return!0}function s(e,t){return u(e>>t&63|128)}function d(e,t){if(0==(4294967168&e))return u(e)
var n=""
return 0==(4294965248&e)?n=u(e>>6&31|192):0==(4294901760&e)?(a(e,t)||(e=65533),n=u(e>>12&15|224),n+=s(e,6)):0==(4292870144&e)&&(n=u(e>>18&7|240),n+=s(e,12),n+=s(e,6)),n+u(63&e|128)}function f(){if(i<=c)throw Error("Invalid byte index")
var e=255&o[c]
if(c++,128==(192&e))return 63&e
throw Error("Invalid continuation byte")}function p(e){var t,n
if(i<c)throw Error("Invalid byte index")
if(c==i)return!1
if(t=255&o[c],c++,0==(128&t))return t
if(192==(224&t)){if(128<=(n=(31&t)<<6|f()))return n
throw Error("Invalid continuation byte")}if(224==(240&t)){if(2048<=(n=(15&t)<<12|f()<<6|f()))return a(n,e)?n:65533
throw Error("Invalid continuation byte")}if(240==(248&t)&&65536<=(n=(7&t)<<18|f()<<12|f()<<6|f())&&n<=1114111)return n
throw Error("Invalid UTF-8 detected")}var h={version:"2.1.2",encode:function(e,t){for(var n=!1!==(t=t||{}).strict,r=l(e),a=r.length,o=-1,i="";++o<a;)i+=d(r[o],n)
return i},decode:function(e,t){var n=!1!==(t=t||{}).strict
o=l(e),i=o.length,c=0
for(var r,a=[];!1!==(r=p(n));)a.push(r)
return function(e){for(var t,n=e.length,r=-1,a="";++r<n;)65535<(t=e[r])&&(a+=u((t-=65536)>>>10&1023|55296),t=56320|1023&t),a+=u(t)
return a}(a)}}
if("object"==w(E(16))&&E(16))void 0!==(b=function(){return h}.call(S,E,S,g))&&(g.exports=b)
else if(t&&!t.nodeType)if(n)n.exports=h
else{var m={}.hasOwnProperty
for(var v in h)m.call(h,v)&&(t[v]=h[v])}else e.utf8=h}(void 0)}).call(this,E(42)(e),E(0))},function(e,t,n){"use strict"
e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict"
!function(){for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=new Uint8Array(256),e=0;e<o.length;e++)d[o.charCodeAt(e)]=e
t.encode=function(e){var t,n=new Uint8Array(e),r=n.length,a=""
for(t=0;t<r;t+=3)a+=o[n[t]>>2],a+=o[(3&n[t])<<4|n[t+1]>>4],a+=o[(15&n[t+1])<<2|n[t+2]>>6],a+=o[63&n[t+2]]
return r%3==2?a=a.substring(0,a.length-1)+"=":r%3==1&&(a=a.substring(0,a.length-2)+"=="),a},t.decode=function(e){var t,n,r,a,o,i=.75*e.length,c=e.length,u=0
"="===e[e.length-1]&&(i--,"="===e[e.length-2]&&i--)
var l=new ArrayBuffer(i),s=new Uint8Array(l)
for(t=0;t<c;t+=4)n=d[e.charCodeAt(t)],r=d[e.charCodeAt(t+1)],a=d[e.charCodeAt(t+2)],o=d[e.charCodeAt(t+3)],s[u++]=n<<2|r>>4,s[u++]=(15&r)<<4|a>>2,s[u++]=(3&a)<<6|63&o
return l}}()},function(i,e,t){"use strict";(function(e){var a=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,t=function(){try{return 2===new Blob(["hi"]).size}catch(e){return!1}}(),n=t&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(e){return!1}}(),r=a&&a.prototype.append&&a.prototype.getBlob
function o(e){for(var t=0;t<e.length;t++){var n=e[t]
if(n.buffer instanceof ArrayBuffer){var r=n.buffer
if(n.byteLength!==r.byteLength){var a=new Uint8Array(n.byteLength)
a.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=a.buffer}e[t]=r}}}i.exports=t?n?e.Blob:function(e,t){return o(e),new Blob(e,t||{})}:r?function(e,t){t=t||{}
var n=new a
o(e)
for(var r=0;r<e.length;r++)n.append(e[r])
return t.type?n.getBlob(t.type):n.getBlob()}:void 0}).call(this,t(0))},function(i,e,c){"use strict";(function(n){var r=c(14),e=c(5)
i.exports=t
var a,l=/\n/g,s=/\\n/g
function o(){}function t(e){r.call(this,e),this.query=this.query||{},a||(n.___eio||(n.___eio=[]),a=n.___eio),this.index=a.length
var t=this
a.push(function(e){t.onData(e)}),this.query.j=this.index,n.document&&n.addEventListener&&n.addEventListener("beforeunload",function(){t.script&&(t.script.onerror=o)},!1)}e(t,r),t.prototype.supportsBinary=!1,t.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),r.prototype.doClose.call(this)},t.prototype.doPoll=function(){var t=this,e=document.createElement(
"script")
this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)}
var n=document.getElementsByTagName("script")[0]
n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e,"undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent)&&setTimeout(function(){var e=document.createElement("iframe")
document.body.appendChild(e),document.body.removeChild(e)},100)},t.prototype.doWrite=function(e,t){var n=this
if(!this.form){var r,a=document.createElement("form"),o=document.createElement("textarea"),i=this.iframeId="eio_iframe_"+this.index
a.className="socketio",a.style.position="absolute",a.style.top="-1000px",a.style.left="-1000px",a.target=i,a.method="POST",a.setAttribute("accept-charset","utf-8"),o.name="d",a.appendChild(o),document.body.appendChild(a),this.form=a,this.area=o}function c(){u(),t()}function u(){if(n.iframe)try{n.form.removeChild(n.iframe)}catch(e){n.onError("jsonp polling iframe removal error",e)}try{var e='<iframe src="javascript:0" name="'+n.iframeId+'">'
r=document.createElement(e)}catch(e){(r=document.createElement("iframe")).name=n.iframeId,r.src="javascript:0"}r.id=n.iframeId,n.form.appendChild(r),n.iframe=r}this.form.action=this.uri(),u(),e=e.replace(s,"\\\n"),this.area.value=e.replace(l,"\\n")
try{this.form.submit()}catch(e){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===n.iframe.readyState&&c()}:this.iframe.onload=c}}).call(this,c(0))},function(d,e,f){"use strict";(function(i){var t,n=f(8),c=f(3),r=f(4),e=f(5),a=f(17),u=f(1)("engine.io-client:websocket"),o=i.WebSocket||i.MozWebSocket
if("undefined"==typeof window)try{t=f(47)}catch(e){}var l=o
function s(e){e&&e.forceBase64&&(this.supportsBinary=!1),this.perMessageDeflate=e.perMessageDeflate,this.usingBrowserWebSocket=o&&!e.forceNode,this.protocols=e.protocols,this.usingBrowserWebSocket||(l=t),n.call(this,e)}l||"undefined"!=typeof window||(l=t),e(d.exports=s,n),s.prototype.name="websocket",s.prototype.supportsBinary=!0,s.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate}
n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress)
try{this.ws=this.usingBrowserWebSocket?t?new l(e,t):new l(e):new l(e,t,n)}catch(e){return this.emit("error",e)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},s.prototype.addEventListeners=function(){var t=this
this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},s.prototype.write=function(e){var r=this
this.writable=!1
for(var a=e.length,t=0,n=a;t<n;t++)!function(n){c.encodePacket(n,r.supportsBinary,function(e){if(!r.usingBrowserWebSocket){var t={}
n.options&&(t.compress=n.options.compress),r.perMessageDeflate&&("string"==typeof e?i.Buffer.byteLength(e):e.length)<r.perMessageDeflate.threshold&&(t.compress=!1)}try{r.usingBrowserWebSocket?r.ws.send(e):r.ws.send(e,t)}catch(e){u("websocket closed before onclose event")}--a||o()})}(e[t])
function o(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}},s.prototype.onClose=function(){n.prototype.onClose.call(this)},s.prototype.doClose=function(){void 0!==this.ws&&this.ws.close()},s.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",n=""
return this.port&&("wss"===t&&443!==Number(this.port)||"ws"===t&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=a()),this.supportsBinary||(e.b64=1),(e=r.encode(e)).length&&(e="?"+e),t+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+e},s.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===s.prototype.name)}}).call(this,f(0))},function(e,t){},function(e,t,n){"use strict"
e.exports=function(e,t){for(var n=[],r=(t=t||0)||0;r<e.length;r++)n[r-t]=e[r]
return n}},function(e,t,n){"use strict"
function r(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=0<e.jitter&&e.jitter<=1?e.jitter:0,this.attempts=0}(e.exports=r).prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++)
if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e)
e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(e){this.ms=e},r.prototype.setMax=function(e){this.max=e},r.prototype.setJitter=function(e){this.jitter=e}}])},e.exports=r()},DdHt:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.itemsGetGids=function(e){var t=[]
return e.forEach(function(e){return e.gid&&!t.includes(e.gid)&&t.push(e.gid)}),t},t.itmesGetLinkCids=function(e){var t=new Set
return e.forEach(function(e){return e.link_cids&&t.add(e.link_cids)}),Array.from(t)},t.itemsGetIds=o,t.itemsGetNames=function(e){return e.map(function(e){return"panel"===e.name?e.display_name||Template.find(e.template_cid).name:e.display_name})},t.itemsGetRect=f,t.itemsCanGroup=function(e){return!e.some(function(e){return"sticky"===e.name||"pg"===e.name})&&1<o(e).length},t.itemsCanUngroup=function(e){return e.some(function(e){return"group"===e.name})},t.itemsCanDistribute=function(e){return 2<o(e).length},
t.itemsCanSetWidth=function(e){return 0!==e.length&&(1!==e.length||!e[0].locked&&/w|e/.test(e[0].zoomable))},t.itemsGroupByGid=function(e){var n={}
return e.forEach(function(e){var t=e.gid||e.cid
n[t]||(n[t]=[]),n[t].push(e)}),n},t.itemsGetAttr=function e(t,n){if(0===t.length)return""
var r=n.split(":"),a=(0,s.default)(r),o=a[0],i=a.slice(1)
if(d.includes(o)&&1<t.length)return f(t)[o]
var c=t.find(function(e){return e.inspectables().includes(o)})
if(!c)return
var u
if(0<i.length){var l=JSON.parse(e([c],o))
u=i.reduce(function(e,t){return e[t]},l)}else u=c[o]
return u||0===u?u:p(t,o)}
var s=r(n("SA+Z")),i=r(n("cl8F")),a=n("ZXhj"),d=["top","left","width","height"]
function o(e){var n=[]
return e.forEach(function(e){var t=e.gid||e.cid
n.includes(t)||n.push(t)}),n}function f(e){var t=e.map(function(e){return e.rect()})
return(0,a.getTotalRect)(t)}function p(e,t){var n=e[0]
if(n){var r="".concat(n.name,"_").concat(MB.currentProject.device),a=n.name,o=i.default[r]||i.default[a]
if(o&&o[t])return o[t]}return i.default[t]||""}},DdUa:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var m=r(n("J4zp")),a=n("/MKj"),v=n("1iCU"),g=n("upRB"),o=r(n("m/Xg")),i=(0,a.connect)(function(e){var t=(0,g.getCurrentMode)(e),n=(0,g.getCurrentScreen)(e),r=(0,g.getCurrentProject)(e),a=(0,g.getIsScrollable)(e),o=t==v.INSPECT,i=t==v.COMMENT,c=MB.isFullScreen(),u=o||i||!a||c,l=MB.isMobile(),s=MB.isEmbedded(),d=l||s&&!c,f=s&&"landscape"===Project.find(r.cid).homeScreen().orientation?[r.height,r.width]:[r.width,r.height],p=s?f:[window.innerWidth,window.innerHeight],h=(0,m.default)(p,2)
return{screen:n,project:r,isLite:d,isScreenExpanded:u,viewportWidth:h[0],viewportHeight:h[1]}})(o.default)
t.default=i},DqDi:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationBar=t.NavItem=t.default=void 0
var i=a(n("PJYZ")),c=a(n("lSNA")),u=a(n("lwsE")),o=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("17x9")),h=r(n("q1tI")),m=a(n("M8nv")),v=a(n("i6OX")),p=a(n("UbMB")),g=a(n("G916")),y=p.default.bind(g.default)
var b=function(e){function t(){return(0,u.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t,n,r,a,o=this.props,i=o.activeIndex,c=o.hideBorder,u=o.className,l=o.children,s=o.onTabChange,d=(e=i,t=h.Children.count(l),n=c,r=0===e,a=e===t-1,{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:n&&r?"transparent":"",borderRightColor:n&&a?"transparent":""})
return h.default.createElement("ol",{className:y("nav",u)},h.Children.map(l,function(e,t){var n={index:t,active:t===i,BgStyle:0===t?d:null,onClick:s}
return h.default.cloneElement(e,n)}))}}]),t}(h.Component);(t.default=b).propTypes={className:f.default.string,activeIndex:f.default.number,hideBorder:f.default.bool,children:f.default.array,onTabChange:f.default.func},b.defaultProps={hideBorder:!1,activeIndex:0}
var w=function(e){function t(e){var o
return(0,u.default)(this,t),o=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,c.default)((0,i.default)((0,i.default)(o)),"handleClick",function(e){var t=o.props,n=t.index,r=t.active,a=t.onClick
r?o.toggleDropDown(e):a(n)}),(0,c.default)((0,i.default)((0,i.default)(o)),"toggleDropDown",function(e){e.stopPropagation()
var t=o.body.getBoundingClientRect()
o.setState({dropDownOpen:!o.state.dropDownOpen,top:t.bottom,left:(t.left+t.right)/2})}),(0,c.default)((0,i.default)((0,i.default)(o)),"handleDocClick",function(e){o.state.dropDownOpen&&o.body&&!o.body.contains(e.target)&&o.setState({dropDownOpen:!1})}),(0,c.default)((0,i.default)((0,i.default)(o)),"handleClose",function(){o.setState({dropDownOpen:!1})}),o.state={dropDownOpen:!1},o}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var t=this,e=this.props,n=e.index,r=e.active,a=e.icon,
o=e.label,i=e.title,c=e.BgStyle,u=e.DropDown,l=this.state,s=l.dropDownOpen,d=l.top,f=l.left,p=Boolean(u)
return h.default.createElement("li",{ref:function(e){return t.body=e},className:y("nav-item",{active:r}),title:i,onClick:this.handleClick},0===n&&h.default.createElement("div",{className:"background-cube",style:c}),h.default.createElement("div",{className:"nav-icon"},"string"==typeof a?h.default.createElement(v.default,{type:"dora",name:a}):a,p&&h.default.createElement("i",{className:"fa fa-caret-down",type:"dropdown-arrow",onClick:this.toggleDropDown})),o&&h.default.createElement("span",{
className:"nav-label"},o),p&&s&&h.default.createElement(u,{top:d,left:f,onClose:this.handleClose}),p&&h.default.createElement(m.default,{onClick:this.handleDocClick}))}}]),t}(h.Component);(t.NavItem=w).propTypes={index:f.default.number,icon:f.default.oneOfType([f.default.string,f.default.object]),title:f.default.string,label:f.default.string,active:f.default.bool,BgStyle:f.default.object,onClick:f.default.func,DropDown:f.default.func}
var S=function(e){var t=e.tabs,n=e.activeIndex,r=e.onChange,a=e.className,o=e.hideBorder,i=e.BgStyle
return h.default.createElement(b,{activeIndex:n,hideBorder:o,onTabChange:r,className:a},t.map(function(e){var t=e.label,n=e.icon
return h.default.createElement(w,{key:t,icon:n,label:t,BgStyle:i})}))};(t.NavigationBar=S).propTypes={tabs:f.default.array,activeIndex:f.default.number,onChange:f.default.func,className:f.default.string,hideBorder:f.default.bool,BgStyle:f.default.object}},EDI8:function(e,t,n){e.exports={"zoom-count":"_2nN0xGcLm4nwqxIkoQCnMF"}},ER7e:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("6XO9")
n("peLG")
var h=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"top-right-action"},f.default.createElement("div",{className:"mode"},f.default.createElement(p.SVG,{name:"preview/daynight"}),f.default.createElement("span",{className:"light","data-mode":"light",onClick:this.props.onClickMode}),f.default.createElement("span",{
className:"dark","data-mode":"dark",onClick:this.props.onClickMode})),f.default.createElement("div",{className:"exit-full-screen",onClick:this.props.onClickExit},f.default.createElement(p.SVG,{name:"preview/exit"})))}}]),t}(f.PureComponent)
t.default=h,(0,s.default)(h,"propTypes",{onClickMode:d.default.func,onClickExit:d.default.func})},Ehhz:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.MODEL_OPERATION_MAP=void 0
var s=r(n("MVZn")),a=r(n("RIqP")),d=n("IT1M"),f=r(n("zkrS")),i=f.default.SpineModel,o={Team:"t",Project:"p",Combo:"c",Template:"t",Screen:"s",Collaborator:"co",Comment:"cm",CommentThread:"cmth",Widget:"w"},c=Object.keys(o),p=c.reduce(function(e,t){return e[t]=i[t].attributes,e},{})
p.Widget=(0,a.default)(p.Widget).concat(["id"])
var u=c.reduce(function(e,t){var u=i[t],r=p[t],l=o[t],c=function(e,t){var n=e.find(function(e){return e.cid===t}),r=u.findByAttribute("cid",t)
return{dataState:n,dataModel:r}}
return e[t]={refreshStateList:function(e){return u.all().map(function(e){return function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
return r.forEach(function(e){return n[e]=t[e]}),n}(e,{})})},saveState:function(e,t,n){var r=t.cid,a=c(e,r),o=a.dataState,i=a.dataModel
return o&&i&&(i.lsave(!n),!n&&f.default.SpineModel.queueSave()),e},addState:function(e,t,n){var r,a,o,i=t.cid||f.default.SpineModel.requestCid(l)
r=i,a=e.find(function(e){return e.cid===r}),o=u.findByAttribute("cid",r),Boolean(a||o)&&(i=f.default.SpineModel.requestCid(l))
var c=(0,s.default)({},t,{cid:i})
return new u(c).lsave(!n),!n&&f.default.SpineModel.queueSave(),d.Operation.arrayPush(e,c)},updateState:function(e,t,n){var r=t.cid,a=c(e,r),o=a.dataState,i=a.dataModel
return o&&i?(o=(0,s.default)({},o,t),Object.assign(i,o),i.lsave(!n),!n&&f.default.SpineModel.queueSave(),d.Operation.arrayFindSet(e,function(e){return e.cid===r},o)):e},deleteState:function(e,t,n){var r=t.cid,a=c(e,r),o=a.dataState,i=a.dataModel
return o&&i?(i.ldestroy(!n),!n&&f.default.SpineModel.queueSave(),d.Operation.arrayFindDelete(e,function(e){return e.cid===r})):e}},e},{}),l=function(o){return function(e,t,n){var r=t.cid,a=i.Project.findByAttribute("cid",r)?"Project":i.Template.findByAttribute("cid",r)?"Template":i.Combo.findByAttribute("cid",r)?"Combo":null
return u[a][o](e,t,n)}};(t.MODEL_OPERATION_MAP=u).ProjectAlike={refreshStateList:function(e){return(0,a.default)(u.Project.refreshStateList()).concat((0,a.default)(u.Template.refreshStateList()),(0,a.default)(u.Combo.refreshStateList()))},saveState:l("saveState"),addState:l("addState"),updateState:l("updateState"),deleteState:l("deleteState")}},Em2t:function(e,t,n){var r=n("bahg"),a=n("quyA"),o=n("0JQy")
e.exports=function(e){return a(e)?o(e):r(e)}},Emwt:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Screen,o=(0,r.createStateStore)([]),i=o.getState,c=o.setState,u=o.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:screens:update",payload:o(e,a,i)})})},s={entryMap:{"screens:refresh":l(a.refreshStateList,!1),"screens:add":l(a.addState,!1),"screens:add-local":l(a.addState,!0),"screens:update":l(a.updateState,!1),"screens:update-local":l(a.updateState,!0),"screens:delete":l(a.deleteState,!1),"screens:delete-local":l(a.deleteState,!0)},getState:i,setState:c}
t.default=s},Ev6p:function(e,t,n){"use strict"
n.d(t,"x",function(){return o}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"r",function(){return p}),n.d(t,"u",function(){return h}),n.d(t,"o",function(){return m}),n.d(t,"h",function(){return v}),n.d(t,"q",function(){return b}),n.d(t,"v",function(){return w}),n.d(t,"w",function(){return S}),n.d(t,"f",function(){return E}),n.d(t,"l",function(){return C}),n.d(t,"g",function(){return _}),
n.d(t,"m",function(){return x}),n.d(t,"j",function(){return k}),n.d(t,"y",function(){return T}),n.d(t,"t",function(){return O}),n.d(t,"s",function(){return I}),n.d(t,"n",function(){return P}),n.d(t,"z",function(){return A}),n.d(t,"p",function(){return L}),n.d(t,"k",function(){return j}),n.d(t,"A",function(){return D}),n.d(t,"i",function(){return B})
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return"@@redux-saga/"+e},i=o("TASK"),c=o("HELPER"),u=o("MATCH"),l=o("CANCEL_PROMISE"),s=o("SAGA_ACTION"),d=o("SELF_CANCELLATION"),f=function(e){return function(){return e}},p=f(!0),h=function(){},m=function(e){
return e}
function v(e,t,n){if(!t(e))throw I("error","uncaught at check",n),new Error(n)}var g=Object.prototype.hasOwnProperty
function y(e,t){return b.notUndef(e)&&g.call(e,t)}var b={undef:function(e){return null==e},notUndef:function(e){return null!=e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},string:function(e){return"string"==typeof e},array:Array.isArray,object:function(e){return e&&!b.array(e)&&"object"===(void 0===e?"undefined":a(e))},promise:function(e){return e&&b.func(e.then)},iterator:function(e){return e&&b.func(e.next)&&b.func(e.throw)},iterable:function(e){
return e&&b.func(Symbol)?b.func(e[Symbol.iterator]):b.array(e)},task:function(e){return e&&e[i]},observable:function(e){return e&&b.func(e.subscribe)},buffer:function(e){return e&&b.func(e.isEmpty)&&b.func(e.take)&&b.func(e.put)},pattern:function(e){return e&&(b.string(e)||"symbol"===(void 0===e?"undefined":a(e))||b.func(e)||b.array(e))},channel:function(e){return e&&b.func(e.take)&&b.func(e.close)},helper:function(e){return e&&e[c]},stringableFunc:function(e){return b.func(e)&&y(e,"toString")}},w={
assign:function(e,t){for(var n in t)y(t,n)&&(e[n]=t[n])}}
function S(e,t){var n=e.indexOf(t)
0<=n&&e.splice(n,1)}var E={from:function(e){var t=Array(e.length)
for(var n in e)y(e,n)&&(t[n]=e[n])
return t}}
function C(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=r({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t})
return n.promise=t,n}function _(e){for(var t=[],n=0;n<e;n++)t.push(C())
return t}function x(t){var n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],r=void 0,e=new Promise(function(e){r=setTimeout(function(){return e(n)},t)})
return e[l]=function(){return clearTimeout(r)},e}function k(){var e,t=!0,n=void 0,r=void 0
return(e={})[i]=!0,e.isRunning=function(){return t},e.result=function(){return n},e.error=function(){return r},e.setRunning=function(e){return t=e},e.setResult=function(e){return n=e},e.setError=function(e){return r=e},e}function M(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0
return function(){return++e}}var T=M(),R=function(e){throw e},N=function(e){return{value:e,done:!0}}
function O(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],a={name:n,next:e,throw:t,return:N}
return r&&(a[c]=!0),"undefined"!=typeof Symbol&&(a[Symbol.iterator]=function(){return a}),a}function I(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:""
"undefined"==typeof window?console.log("redux-saga "+e+": "+t+"\n"+(n&&n.stack||n)):console[e](t,n)}function P(e,t){return function(){return e.apply(void 0,arguments)}}var A=function(e,t){return e+" has been deprecated in favor of "+t+", please update your code"},L=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")},j=function(e
,t){return(e?e+".":"")+"setContext(props): argument "+t+" is not a plain object"},D=function(t){return function(e){return t(Object.defineProperty(e,s,{value:!0}))}},B=function o(i){return function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]
var r=[],a=i.apply(void 0,n)
return{next:function(e){return r.push(e),a.next(e)},clone:function(){var t=o(i).apply(void 0,n)
return r.forEach(function(e){return t.next(e)}),t},return:function(e){return a.return(e)},throw:function(e){return a.throw(e)}}}}},FJlG:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:preview-toolbar:update":return(0,a.default)({},e,r)
case"reducer:preview-toolbar:active-item:init":return(0,a.default)({},e,{toolbarActiveItem:o.PREVIEW})
case"reducer:preview-toolbar:fullscreen":return(0,a.default)({},e,{isFullScreenMode:r.isFullScreenMode})
case"reducer:preview-toolbar:update:highlight":return(0,a.default)({},e,{isHighlight:r.isHighlight})
default:return e}}
var a=r(n("MVZn")),o=n("1iCU"),i=n("/5+U"),c={ratio:1,emPixel:16,unit:"px",colorUnit:"hex",language:"css",toolbarActiveItem:o.PREVIEW,isShowColorPicker:!1,isSelectLayer:!1,userPickColor:(0,i.getHistoryColor)(),focusColor:null,loadSliceUrl:"",isFullScreenMode:!1,isScrollable:!0,isStickyShow:!0,isHighlight:!0,shellType:"device"}},FkXu:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getFontWeightStrDepandOnBoldType=t.getFontWeightNumDepandOnBoldType=t.getFontWeightStr=t.getFontFamilyAndWeightText=t.getTypeWeightList=t.WESTERN_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=void 0
var a=r(n("RIqP")),o=r(n("yl0K")),i=o.default.HOSTED_COMMERCIAL_FANGZHENG_LIST,c=o.default.HOSTED_COMMON_LIST,u=o.default.WESTERN_COMMON_LIST,l=(0,a.default)(i).concat((0,a.default)(c),(0,a.default)(u)),s=function(e){return{label:e.label,value:e.family,limitedDevices:e.limitedDevices}},d=i.map(s)
t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=d
var f=c.map(s)
t.HOSTED_COMMON_FONT_FAMILY_LIST=f
var p=u.map(s)
t.WESTERN_COMMON_FONT_FAMILY_LIST=p
var h={regular:400,light:300,bold:700},m={regular:I18N.rich_text_settings.weight.regular,light:I18N.rich_text_settings.weight.light,bold:I18N.rich_text_settings.weight.bold}
t.getTypeWeightList=function(t){var e=l.find(function(e){return e.family===t})
return e?e.typeList.map(function(e){return{label:m[e],value:e}}):[]}
t.getFontFamilyAndWeightText=function(t,e){var n=i.find(function(e){return e.family===t})
return n?"".concat(n.label,"-").concat(m[e]):"".concat(t,"-").concat(e)}
var v=function(t){return h[t]?t:Object.keys(h).find(function(e){return String(h[e])===String(t)})||"regular"}
t.getFontWeightStr=v
t.getFontWeightNumDepandOnBoldType=function(e,t){var n=h[e]
return Number(t)?700:n}
t.getFontWeightStrDepandOnBoldType=function(e,t,n){var r=v(e)
return Number(n)?t:r}},G3NE:function(e,t,n){"use strict"
n.r(t),n.d(t,"getRichTextAttr",function(){return b}),n.d(t,"getHTML",function(){return j}),n.d(t,"setAttrForParas",function(){return Se}),n.d(t,"checkIsAttrManagedInsideEditor",function(){return xe}),n.d(t,"configureEditor",function(){return h}),n.d(t,"editorBridge",function(){return Me})
var r=n("q1tI"),a=n.n(r),o=n("17x9"),i=n.n(o),l="--mb--rich-text-editor",M="--mb--rich-text",c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t},T=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)},p={defaultStyle:{fontFamily:"Arial",fontSize:16,fontWeight:"regular",color:"#101010",letterSpacing:0,fontStyle:"normal",textDecoration:"none"},getStyleStr:{},clipboard:{stripOutsidePastedStyle:!0}},h=function(e){Object.entries(e).forEach(function(e){var t=T(e,2),n=t[0],r=t[1]
p[n]=E({},p[n],r)})}
function m(e,t){var n="NORMAL_LINE_HEIGHT_MEASURE_NODE",r=document.getElementById(n)
return r||((r=document.createElement("div")).id=n,document.body.appendChild(r)),r.style.whiteSpace="pre",r.style.lineHeight="normal",e&&(r.style.fontFamily=e),t&&(r.style.fontSize=t+"px"),r.innerHTML=" ",r.getBoundingClientRect().height}var v=p.defaultStyle,g=["fontFamily","fontWeight","fontSize","color","fontStyle","textDecoration","letterSpacing","lineHeight"],R=function e(t,n){if("fontFamily"===n)return t.fontFamily||v.fontFamily
if("fontWeight"===n)return t.fontWeight||v.fontWeight
if("boldType"===n)return Number(t.boldType)?1:0
if("fontSize"===n)return t.fontSize||v.fontSize
if("color"===n)return t.color||v.color
if("fontStyle"===n)return t.fontStyle||v.fontStyle
if("textDecoration"===n)return t.textDecoration||v.textDecoration
if("letterSpacing"===n)return t.letterSpacing||v.letterSpacing
if("lineHeight"===n){var r=t.lineHeight
return r&&"normal"!==r?r:Math.ceil(m(e(t,"fontFamily"),e(t,"fontSize")))}},y=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments[2],r=t[0],a=t[1],o=e[r].children[a]
return R(o,n)},b=function(e,t,n){if(!e)return null
var r={fontFamily:y(e,t,"fontFamily"),fontWeight:y(e,t,"fontWeight"),boldType:y(e,t,"boldType"),fontSize:y(e,t,"fontSize"),color:y(e,t,"color"),fontStyle:y(e,t,"fontStyle"),textDecoration:y(e,t,"textDecoration"),letterSpacing:y(e,t,"letterSpacing"),lineHeight:y(e,t,"lineHeight"),paraSpacing:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[0]
if("paraSpacing"===arguments[2])return e[t[0]].paraSpacing}(e,t,"paraSpacing")}
return n?r[n]:r},w={regular:400,light:300,bold:700},S=function(t){return w[t]?t:Object.keys(w).find(function(e){return String(w[e])===String(t)})||"regular"},_=function(e){return"marginTop"===e?"paraSpacing":e},x=function(i,c,e){var t,n,r,a,u={}
return g.forEach(function(e){var t,n,r,a,o=(n=i[t=e],r=_(t),a=n.replace(/'|"/g,""),["fontSize","lineHeight","letterSpacing","paraSpacing"].includes(r)&&"px"===a.slice(-2)&&(a=Number(a.slice(0,-2))),a||c[e])
u[e]=o}),u.fontFamily=(u.fontFamily||"").split(",")[0].trim(),u.fontWeight=(t=u.fontWeight,n=c.fontWeight,r=e,a=S(t),Number(r)?n:a),u},k=function(e,u){var t=Array.from(e.getElementsByTagName("p"))
return 0===t.length?[{paraSpacing:u.paraSpacing,children:[E({},u.child,{text:""})]}]:t.map(function(e,t,n){var r,a,o,i=void 0,c=Array.from(e.getElementsByTagName("span"))
return i=0===c.length?[E({},u.child,{text:""})]:c.map(function(e){return E({text:e.innerText.replace(/(\r\n|\n|\r)/gm,""),boldType:Number(e.dataset.boldtype)?1:0},x(e.style,u.child,Number(e.dataset.boldtype)))}),{paraSpacing:(r=t,a=n,o=r===a.length-1&&1<a.length?r-1:r,Number(a[o].style.marginBottom.replace("px",""))),children:i}})},N=[["&","&amp;"],["<","&lt;"],[">","&gt;"]],O=[].concat(N).reverse(),I=function(e){var a=e
return N.forEach(function(e){var t=T(e,2),n=t[0],r=t[1]
return a=a.replace(new RegExp(n,"g"),r)}),a},P=p.getStyleStr,A=function(e){return Object.entries(e).map(function(e){var t=T(e,2),n=t[0],r=t[1]
return n.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})+":"+r+";"}).join(" ")},L=function(e){var t,n,r,a,o=R(e,"fontFamily"),i=R(e,"fontWeight"),c=R(e,"boldType")
return{fontFamily:(a=o,P.fontFamily?P.fontFamily(a):a),fontWeight:(t=i,n=c,r=w[t],Number(n)?700:r),fontSize:R(e,"fontSize")+"px",color:R(e,"color"),fontStyle:R(e,"fontStyle"),letterSpacing:R(e,"letterSpacing")+"px",lineHeight:R(e,"lineHeight")+"px",textDecoration:R(e,"textDecoration")}},j=function(e,t,n){for(var r="",a=t||{start:[0,0,0],end:[]},o=T(a.start,3),i=o[0],c=o[1],u=o[2],l=T(a.end,3),s=l[0],d=l[1],f=l[2],p=[],h=i;;h++){for(var m=e[h],v=[],g=h===i,y=h===s,b=h===i?c:0;;b++){var w=g&&b===c,S=y&&b===d,
E=m.children[b],C=E.text.slice(w?u:0,S?f:E.text.length),_=I(C)
if(v.push('<span class="'+M+'" data-boldtype="'+R(E,"boldType")+'" style="'+A(L(E))+'">'+(""===E.text?"<br>":_)+"</span>"),n&&(r+=C),b===(S?d:m.children.length-1))break}var x=v.join("")
if(p.push('<p style="'+A({lineHeight:0,marginBottom:m.paraSpacing+"px"})+'">'+x+"</p>"),n&&h!==s&&(r+="\n"),h===(y?s:e.length-1))break}var k=p.join("")
return n?{text:r,HTML:k}:k},D=function(e){var t=e.parentNode
return Array.from(t.childNodes).indexOf(e)},B=function(e){var t=[],n=window.getSelection(),r=void 0,a=void 0
"focus"===e?(r=n.focusNode,a=n.focusOffset):"anchor"===e&&(r=n.anchorNode,a=n.anchorOffset)
var o="#text"===r.nodeName?r.parentNode:r,i=o.closest("."+l+" span"),c=o.closest("."+l+" p")
if(c){if(!i&&c)t=[D(c),0,a]
else if(i&&c){for(var u=o;"P"!==u.parentNode.nodeName;)u=u.parentNode
t=[D(c),D(u),a]}}else t=[0,0,a]
return t},U=function(e){var t=e.start,n=e.end
return t.every(function(e,t){return e===n[t]})},F=function(e){for(var t=e.start,n=e.end,r=0;r<t.length;r++){if(t[r]>n[r])return"backwards"
if(t[r]<n[r])return"forwards"}return"forwards"},q=function(e,t){var n=F(e),r="object"===(void 0===t?"undefined":c(t))?F(t):t
return r&&r!==n?{start:e.end,end:e.start}:E({},e)},W=function(e){return{start:[0,0,0],end:[e.length-1,e[e.length-1].children.length-1,e[e.length-1].children[e[e.length-1].children.length-1].text.length]}},H=function(e,t){var n=T(t,3),r=(n[0],n[1]),a=n[2],o=[],i=[]
return e.children.forEach(function(e,t){t<r&&o.push(E({},e)),r<t&&i.push(E({},e)),t===r&&0!==a&&o.push(E({},e,{text:e.text.slice(0,a)})),t===r&&a!==e.text.length&&i.push(E({},e,{text:e.text.slice(a)}))}),{before:o,after:i}},z=function(e,t,n){var d=n.start,f=n.end,p=t.replace(/[\r\n\t\v\f]+/g,"\n").split(/\n/),r=1===p.length&&""===p[0],a=T(d,2),h=a[0],o=a[1],i=T(f,2),m=i[0],c=i[1],v=[],g=[]
return e.forEach(function(u,e,l){if(e<h||m<e)v.push(E({},u))
else if(e===h)if(r){var t=H(l[h],d).before,n=H(l[m],f).after
v.push({paraSpacing:u.paraSpacing,children:t.length+n.length===0?[E({},l[m].children[c],{text:""})]:[].concat(C(t),C(n))}),g[0]=h,g[1]=t.length?t.length-1:0,g[2]=t.length?t[t.length-1].text.length:0}else{var s=l[h].children[o]
p.forEach(function(e,t){var n=E({},s,{text:e}),r={paraSpacing:u.paraSpacing,children:[]}
if(0===t){var a,o=H(l[h],d).before
if(0<o.length)o[o.length-1].text+=e,(a=r.children).push.apply(a,C(o))
else r.children.push(n)}if(0<t&&r.children.push(n),t===p.length-1){var i
g[0]=h+p.length-1,g[1]=r.children.length-1,g[2]=r.children[r.children.length-1].text.length
var c=H(l[m],f).after
0<c.length&&(i=r.children).push.apply(i,C(c))}v.push(r)})}}),{paras:v,selection:{start:g,end:g}}},V=p.defaultStyle,Y=function(e){for(var t,n,r=(t=e,(n=[]).push.apply(n,[function(e){return e.replace(/<!--.*?-->/g,"")},function(e){return/<body>([^]*?)<\/body>/.test(e)?e.match(/<body>([^]*?)<\/body>/)[1]:e},function(e){return e.trim()},function(e){return e.replace(/[\r\n\t\v\f]/g,pe)}]),n.reduce(function(e,t){return t(e)},t)),a=0,c=[],u=[],l=0;a!==r.length;){var o=X(r,a),i=T(o,5),s=i[1],d=i[2],f=i[3],p=i[4]
if(s){var h=Z(s)
if(de.includes(h)){a+=s.length
continue}if(se.includes(h)&&!u[l]){var m=G(s)
u[l]={paraSpacing:m,children:[]}}var v=K(s,c)
c.push(v)}if(d)!function(){var o=le(c),i=d.split(pe)
i.forEach(function(e,t){var a,n=(a=e,O.forEach(function(e){var t=T(e,2),n=t[0],r=t[1]
return a=a.replace(new RegExp(r,"g"),n)}),a),r=E({text:n},o)
u[l]||(u[l]={paraSpacing:0,children:[]}),u[l].children.push(r),t<i.length-1&&(l+=1)})}()
else if(s&&Z(s)===fe&&p){var g=le(c),y=E({text:""},g)
u[l]||(u[l]={paraSpacing:0,children:[]}),u[l].children.push(y)}if(p){var b=Z(f)
se.includes(b)?c.length=0:c.pop(),se.includes(b)&&u[l]&&u[l].children.length&&(l+=1)}if(!s&&f&&de.includes(Z(f)))a+=f.length
else{var w=(s?s.length:0)+(d?d.length:0)+(p?f.length:0)
if(0===w){console.warn("RichTextEditor: manually break infinite loop while parsing pasted HTML")
break}a+=w}}return u[u.length-1]&&!u[u.length-1].children.length&&u.pop(),u},Z=function(e){return e.match(/<\/??([^/]*?(?=\s|>))/)[1]},J=new RegExp(/(<(?!\/).*?>)?(.*?)(<(\/?).*?>)/),X=function(e,t){return e.slice(t).match(J)},G=function(e){var t=Z(e),n=e.match(new RegExp("margin"+Q.source))||e.match(new RegExp("margin-bottom"+Q.source))
if(n){var r=n[1].split(" "),a=r.length<3?0:2
return Number(r[a].replace(/px$/,""))}return!n&&/^h\d$/.test(t)?ue(t):0},K=function(e,t){var n=ne(e,t)
return{fontFamily:ee(e),fontWeight:te(e),fontSize:n,textDecoration:re(e),color:ae(e),lineHeight:oe(e,n),letterSpacing:ie(e)}},Q=/:\s?(.*?);/,$=/="(.*?)"/,ee=function(e){var t=Z(e),n=void 0
return(n="font"===t?e.replace(/&quot;/g,"").match(new RegExp("family"+$.source)):e.replace(/&quot;/g,"").match(new RegExp("font-family"+Q.source)))||"pre"!==t?n?n[1].split(",")[0].trim():void 0:"Courier New"},te=function(e){var t=Z(e)
if("b"===t||"strong"===t)return"bold"
var n=e.match(new RegExp("font-weight"+Q.source))
return n?S(n[1]):/^h\d$/.test(t)?"bold":void 0},ne=function(e,t){var n,r=0<t.length?t[t.length-1].fontSize:V.fontSize,a=Z(e),o=void 0
if(!(o="font"===a?e.match(new RegExp("size"+$.source)):e.match(new RegExp("font-size"+Q.source))))return/^h\d$/.test(a)?ce(a):r
if(/px$/.test(o[1]))return parseInt(o[1].replace(/px$/,""))
if(isNaN(o[1])){if(/rem$/.test(o[1])){var i=V.fontSize
return Math.round(i*o[1].replace(/rem$/,""))}return/em$/.test(o[1])?Math.round(r*o[1].replace(/em$/,"")):r}return 1==(n=o[1])?10:2==n?13:3==n?16:4==n?18:5==n?24:6==n?32:7==n?48:void 0},re=function(e){var t=Z(e)
if("u"===t)return"underline"
if("s"===t)return"line-through"
var n=e.match(new RegExp("text-decoration"+Q.source))||e.match(new RegExp("text-decoration-line"+Q.source))
return n?/underline/.test(n[1])?"underline":/line-through/.test(n[1])?"line-through":"none":"none"},ae=function(e){var t=e.match(/((?!-).{1}|^)color:\s?(.*?);/)
return t?t[2]:void 0},oe=function(e,t){var n=e.match(new RegExp("line-height"+Q.source))
if(n){if(/px$/.test(n[1]))return Number(n[1].replace(/px$/,""))
if(!isNaN(n[1])){var r=t
return Math.round(r*n[1])}}},ie=function(e){var t=e.match(new RegExp("letter-spacing"+Q.source))
if(t)return/px$/.test(t[1])?Number(t[1].replace(/px$/,"")):"normal"===t[1]?0:void 0},ce=function(e){var t=V.fontSize
return"h1"===e?parseInt(2*t):"h2"===e?parseInt(1.5*t):"h3"===e?parseInt(1.17*t):"h4"===e?parseInt(1*t):"h5"===e?parseInt(.83*t):"h6"===e?parseInt(.67*t):void 0},ue=function(e){var t=V.fontSize
return"h1"===e?parseInt(.67*t):"h2"===e?parseInt(.83*t):"h3"===e?parseInt(1*t):"h4"===e?parseInt(1.33*t):"h5"===e?parseInt(1.67*t):"h6"===e?parseInt(2.33*t):void 0},le=function(e){return e.reduce(function(a,e){return Object.entries(e).forEach(function(e){var t=T(e,2),n=t[0],r=t[1]
void 0!==r&&(a[n]=r)}),a},{})},se=["div","ul","li","p","h1","h2","h3","h4","h5","h6","address","article","aside","blockquote","dd","dl","dt","table","tfoot","footer","header","hgroup","hr","main","nav","pre","section"],de=["img","input"],fe="br",pe="__MB__NL__2349639398"
var he=function(e,r,a){var t=e.children.reduce(function(e,t,n){return n!==r?e.push(E({},t)):e.push.apply(e,[E({},t,{text:t.text.slice(0,a)}),E({},t,{text:t.text.slice(a)})]),e},[])
return{paraSpacing:e.paraSpacing,children:t}},me=function(e,t){var n=T(e,3),r=n[0],a=n[1],o=n[2],i=t[r].children[a].text
return"<br>"!==i&&(0<o&&o<i.length)},ve=["fontFamily","fontSize"],ge=["fontStyle","textDecoration"],ye=function(e){var t,n,r,a,o=e.span,i=e.attr,c=e.value,u=E({},o)
return ve.includes(i)&&(n=u.fontFamily,r=u.fontSize,a=u.lineHeight,Math.ceil(m(n,r))===a)?(u[i]=c,u.lineHeight=Math.ceil(m(u.fontFamily,u.fontSize))):ge.includes(i)?u[i]=c===o[i]?"fontStyle"===(t=i)?"normal":"textDecoration"===t?"none":void 0:c:u[i]=c,"fontFamily"==i&&(u.fontWeight="regular"),u},be=function(e){var t=e.paras,p=e.boundary,h=e.attr,m=e.value,v=void 0,n=void 0
if(p){var r=function(e,t,n){var r=[].concat(C(n)),a=[].concat(C(e)),o=[].concat(C(t)),i=me(a,r)
if(i){var c=T(a,3),u=c[0],l=c[1],s=c[2],d=he(r[u],l,s)
r[u]=d,a=[u,l+1,0]}if(i&&(e[0]===t[0]&&(o[1]+=1),e[0]===t[0]&&e[1]===t[1]&&(o[2]-=e[2])),me(o,r)){var f=T(o,3),p=f[0],h=f[1],m=f[2],v=he(r[p],h,m)
r[p]=v}return{boundary:{start:a,end:o},paras:r}}(p.start,p.end,t)
v=r.boundary,n=r.paras}return{paras:(n||t).map(function(e,f){var t=e.children.map(function(e,t){return!p||(n=f,r=t,o=T((a=v).start,2),i=o[0],c=o[1],u=T(a.end,2),l=u[0],s=u[1],d=Math.max(r,c,s)+1,i*d+c<=n*d+r&&n*d+r<=l*d+s)?ye({span:e,attr:h,value:m}):E({},e)
var n,r,a,o,i,c,u,l,s,d})
return{paraSpacing:e.paraSpacing,children:t}}),boundary:v}},we=function(e,t){var n=T(t.start,1)[0],r=T(t.end,1)[0]
return n<=e&&e<=r},Se=function(e){var t,n,r,a,o,i,c,u,l,s,d,f=e.paras,p=e.boundary,h=e.attr,m=e.value,v=void 0,g=void 0
if(Ee.includes(h)){if(p&&(s=(l=p).start,d=l.end,s.every(function(e,t){return e===d[t]})))return
var y=be({paras:f,boundary:p,attr:h,value:m})
v=y.paras,g=y.boundary}else h===Ce?(i=(o={paras:f,boundary:p,value:m}).paras,c=o.boundary,u=o.value,v=i.map(function(e,n){var t=e.children.map(function(e,t){return!c||we(n,c)?ye({span:e,attr:"lineHeight",value:u}):E({},e)})
return{paraSpacing:e.paraSpacing,children:t}})):h===_e&&(n=(t={paras:f,boundary:p,value:m}).paras,r=t.boundary,a=t.value,v=n.map(function(e,t){return{paraSpacing:!r||we(t,r)?a:e.paraSpacing,children:e.children}}))
return{paras:v,boundary:g||p}},Ee=["fontFamily","fontWeight","boldType","fontSize","color","fontStyle","textDecoration","letterSpacing"],Ce="lineHeight",_e="paraSpacing",xe=function(e){return["text"].concat(Ee,[Ce,_e]).includes(e)}
!function(e,t){void 0===t&&(t={})
var n=t.insertAt
if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style")
a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".--mb--rich-text-editor {\n  outline: none;\n  border-color: transparent;\n  user-select: text;\n}\n\n  .--mb--rich-text-editor p:last-child {\n    margin-bottom: 0 !important;\n  }\n")
var ke=function(e){function t(e){u(this,t)
var S=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
return S.getInitialSelection=function(e){var t=e.paras
return e.selection||W(t)},S.getPresentState=function(){return S.state.present},S.pushPresentState=function(i){return new Promise(function(e,t){var n=S.state,r=n.past,a=n.present,o=[].concat(C(r),[a])
50<o.length+1&&o.shift(),S.setState({past:o,present:i,future:[]},e)})},S.buildEditorBridge=function(e){return e(S.getPresentState,S.handleSetRichAttr)},S.manuallyUpdate=function(){return S.$editor.innerHTML=j(S.getPresentState().paras)},S.restoreSelection=function(){return new Promise(function(e,t){var n=S.getPresentState().selection,r=T(n.start,3),a=r[0],o=r[1],i=r[2],c=T(n.end,3),u=c[0],l=c[1],s=c[2],d=S.$editor.childNodes[a].childNodes[o],f="#text"===d.childNodes[0].nodeName?d.childNodes[0]:d,
p=S.$editor.childNodes[u].childNodes[l],h="#text"===p.childNodes[0].nodeName?p.childNodes[0]:p,m=document.createRange()
m.setStart(f,i)
var v=window.getSelection()
v.removeAllRanges(),v.addRange(m),v.extend(h,s),e()})},S.handleSetRichAttr=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"add",r=S.state,a=r.past,o=r.present,i=o.paras,c=o.selection,u=q(c,"forwards"),l=Se({attr:e,value:t,paras:i,boundary:u})
if(l){var s=void 0
"add"===n?50<(s=[].concat(C(a),[o])).length+1&&s.shift():"replaceLast"===n&&(s=a)
var d=q(l.boundary,c)
S.setState({past:s,present:{paras:l.paras,selection:d},future:[]})}},S.handleSelectionChange=function(e){if(!S.isInputtingComposition){var t=S.getSelection()
S.setSelection(t),S.recordlastFocusStyle()}},S.getSelection=function(){return{start:B("anchor"),end:B("focus")}},S.setSelection=function(e){S.setState(E({},S.state,{present:E({},S.state.present,{selection:e})}))},S.recordlastFocusStyle=function(){var e=window.getSelection(),t=void 0
if("SPAN"===e.focusNode.nodeName)t=e.focusNode
else if("#text"===e.focusNode.nodeName)t=e.focusNode.parentNode
else{if("P"!==e.focusNode.nodeName)return S.lastFocusStyle={paraSpacing:0,child:{}}
t=e.focusNode.childNodes[0]}var n=t.parentNode,r=D(n),a=D(t),o=S.getPresentState().paras
S.lastFocusStyle={paraSpacing:o[r].paraSpacing,child:E({},o[r].children[a],{text:void 0})}},S.popSelectionChange=function(){S.props.onSelectionChange&&S.props.onSelectionChange(S.getPresentState())},S.handleInput=function(e){if(!S.isInputtingComposition){var t=k(e.target,S.lastFocusStyle),n=S.getSelection()
S.setParasAndSelection(t,n)}},S.handleCompositionStart=function(e){S.toggleCompositionFlag()},S.handleCompositionEnd=function(e){S.toggleCompositionFlag()
var t=k(e.target,S.lastFocusStyle),n=S.getSelection()
S.setParasAndSelection(t,n)},S.toggleCompositionFlag=function(){return S.isInputtingComposition=!S.isInputtingComposition},S.setParasAndSelection=function(e,t){S.pushPresentState({paras:e,selection:t}).then(S.popContentChange)},S.popContentChange=function(){S.props.onContentChange&&S.props.onContentChange(S.getPresentState())},S.handleKeyDown=function(e){var t
return" "===e.key&&((t=e).stopPropagation(),t.nativeEvent.stopImmediatePropagation()),"a"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),S.setSelection(W(S.getPresentState().paras))),"z"===e.key&&(e.ctrlKey||e.metaKey)?(e.preventDefault(),S.handleUndo()):"y"===e.key&&(e.ctrlKey||e.metaKey)?(e.preventDefault(),S.handleRedo()):void 0},S.handleUndo=function(){var e=S.state,t=e.past,n=e.present,r=e.future
if(0!==t.length){var a=t[t.length-1],o=t.slice(0,t.length-1),i=[n].concat(C(r))
50<1+o.length+i.length&&i.pop(),S.setState({past:o,present:a,future:i})}},S.handleRedo=function(){var e=S.state,t=e.past,n=e.present,r=e.future
if(0!==r.length){var a=r[0],o=r.slice(1),i=[].concat(C(t),[n])
50<1+i.length+o.length&&i.shift(),S.setState({past:i,present:a,future:o})}},S.handleCopy=function(e){var t=S.getPresentState(),n=t.paras,r=t.selection
if(!U(r)){var a=q(r,"forwards"),o=j(n,a,!0),i=o.HTML,c=o.text
e.clipboardData.setData("text/html",i),e.clipboardData.setData("text/plain",c),e.preventDefault()}},S.handleCut=function(e){var t=S.getPresentState(),n=t.paras,r=t.selection
if(!U(r)){var a=q(r,"forwards"),o=j(n,a)
e.clipboardData.setData("text/html",o)
var i=z(n,"",a),c=i.paras,u=i.selection
S.setParasAndSelection(c,u),e.preventDefault()}},S.handlePaste=function(e){e.preventDefault()
var t,n=p.clipboard.stripOutsidePastedStyle,r=e.clipboardData.getData("text/html").replace(/^<meta.*?>/,""),a=(t=r,new RegExp(M).test(t))
n&&!a?S.insertPastedAsPlainText(e):S.insertPastedAsHTML(e)},S.insertPastedAsHTML=function(e){var t=S.getPresentState(),n=t.paras,r=t.selection,a=q(r,"forwards"),o=e.clipboardData.getData("text/html").replace(/^<meta.*?>/,"")
if(o){var i,s,c,d,f,p,u,h,m,v,g,l=Y(o),y=(i=n,s=l,d=(c=a).start,f=c.end,p=d[0],u=T(f,2),h=u[0],m=u[1],v=[],g=[],i.forEach(function(u,e,l){if(e<p||h<e)v.push(E({},u))
else if(e===p)if(0===s.length){var t=H(l[p],d).before,n=H(l[h],f).after
v.push({paraSpacing:u.paraSpacing,children:t.length+n.length===0?[E({},l[h].children[m],{text:""})]:[].concat(C(t),C(n))}),g[0]=p,g[1]=t.length?t.length-1:0,g[2]=t.length?t[t.length-1].text.length:0}else s.forEach(function(e,t){var n,r={paraSpacing:void 0!==e.paraSpacing?e.paraSpacing:u.paraSpacing,children:[]}
if(0===t){var a,o=H(l[p],d).before
0<o.length&&(a=r.children).push.apply(a,C(o))}if((n=r.children).push.apply(n,C(e.children)),t===s.length-1){var i
g[0]=p+s.length-1,g[1]=r.children.length-1,g[2]=e.children[e.children.length-1].text.length
var c=H(l[h],f).after
0<c.length&&(i=r.children).push.apply(i,C(c))}v.push(r)})}),{paras:v,selection:{start:g,end:g}}),b=y.paras,w=y.selection
S.setParasAndSelection(b,w)}},S.insertPastedAsPlainText=function(e){var t=S.getPresentState(),n=t.paras,r=t.selection,a=q(r,"forwards"),o=e.clipboardData.getData("text/plain"),i=z(n,o,a),c=i.paras,u=i.selection
S.setParasAndSelection(c,u)},S.lastFocusStyle=null,S.isInputtingComposition=!1,S.state={past:[],present:{paras:e.store.paras,selection:S.getInitialSelection(e.store)},future:[]},S}return d(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this
this.buildEditorBridge(this.props.editorBridgeBuilder),setTimeout(function(){return e.restoreSelection().then(e.popSelectionChange)},0)}},{key:"componentDidUpdate",value:function(){var t=this
0===this.$editor.childNodes.length&&this.manuallyUpdate(),this.restoreSelection().catch(function(e){console.warn(e),t.manuallyUpdate()}).then(this.popSelectionChange)}},{key:"render",value:function(){var t=this,e=this.getPresentState().paras
return a.a.createElement("div",{contentEditable:!0,dangerouslySetInnerHTML:{__html:j(e)},ref:function(e){return t.$editor=e},className:l,style:this.props.style,onKeyDown:this.handleKeyDown,onCompositionStart:this.handleCompositionStart,onCompositionEnd:this.handleCompositionEnd,onInput:this.handleInput,onSelect:this.handleSelectionChange,onCopy:this.handleCopy,onCut:this.handleCut,onPaste:this.handlePaste})}}]),t}(a.a.Component)
ke.propTypes={style:i.a.object,store:i.a.object,onSelectionChange:i.a.func,onContentChange:i.a.func,editorBridgeBuilder:i.a.func}
var Me={getStore:function(){},setAttr:function(){}},Te=function(e,t){var n,r
Me.getStore=(n=e,function(){return n()}),Me.setAttr=(r=t,function(e,t,n){return r(e,t,n)})},Re=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),s(t,[{key:"render",value:function(){return a.a.createElement(ke,E({},this.props,{editorBridgeBuilder:Te}))}}]),t}(a.a.Component)
t.default=Re},G4qV:function(e,t,n){"use strict"
function a(e,t){return e===t}function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:a,n=null,r=null
return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1
for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1
return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}function o(u){for(var e=arguments.length,l=Array(1<e?e-1:0),t=1;t<e;t++)l[t-1]=arguments[t]
return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=0,a=t.pop(),o=function(e){var t=Array.isArray(e[0])?e[0]:e
if(t.every(function(e){return"function"==typeof e}))return t
var n=t.map(function(e){return typeof e}).join(", ")
throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}(t),i=u.apply(void 0,[function(){return r++,a.apply(null,arguments)}].concat(l)),c=u(function(){for(var e=[],t=o.length,n=0;n<t;n++)e.push(o[n].apply(null,arguments))
return i.apply(null,e)})
return c.resultFunc=a,c.dependencies=o,c.recomputations=function(){return r},c.resetRecomputations=function(){return r=0},c}}n.r(t),n.d(t,"defaultMemoize",function(){return r}),n.d(t,"createSelectorCreator",function(){return o}),n.d(t,"createSelector",function(){return i}),n.d(t,"createStructuredSelector",function(){return c})
var i=o(r)
function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i
if("object"!=typeof t)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof t)
var r=Object.keys(t)
return e(r.map(function(e){return t[e]}),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.reduce(function(e,t,n){return e[r[n]]=t,e},{})})}},G916:function(e,t,n){e.exports={nav:"xnJdrPjsJoJrp1VupFyUM","nav-item":"_3UspVqDrjxaWG9BSMdj9jf"}},GDhZ:function(e,t,n){var a=n("wF/u"),o=n("mwIZ"),i=n("hgQt"),c=n("9ggG"),u=n("CMye"),l=n("IOzZ"),s=n("9Nap")
e.exports=function(n,r){return c(n)&&u(r)?l(s(n),r):function(e){var t=o(e,n)
return void 0===t&&t===r?i(e,n):a(r,t,3)}}},GEF2:function(e,t,n){e.exports={"preview-panel-wrapper":"_3NbQHmHCb3fdbejXqycbnR","preview-panel":"_972Atke01Y16jEOOPRt5R",expand:"_33UQXp4eOmuoqfuCsfYqsu"}},GNiM:function(e,t,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(e){var a=[]
return 46===e.charCodeAt(0)&&a.push(""),e.replace(o,function(e,t,n,r){a.push(n?r.replace(i,"$1"):t||e)}),a})
e.exports=a},Gbs1:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getProjectShell=t.getProjectShellSizeWithOrientation=t.canSetDeviceShell=void 0
var a=r(n("MVZn")),d=r(n("J4zp"))
t.canSetDeviceShell=function(e){return!["customize","desktop"].includes(e.model)}
t.getProjectShellSizeWithOrientation=function(e,t,n){var r,a,o=f(e,t),i="landscape"===n
if("device"===t&&o.bg){var c=i?[o.height,o.width]:[o.width,o.height],u=(0,d.default)(c,2)
r=u[0],a=u[1]}else{var l=i?[e.height,e.width]:[e.width,e.height],s=(0,d.default)(l,2)
r=s[0],a=s[1]}return{width:r,height:a}}
var f=function(e,t){return o(e,t)||i(e,t)}
t.getProjectShell=f
var o=function(e,t){var n=e.device,r=e.model
return["customize","Meizu"].includes(r)||"device"!==t?null:MB.SHELLS[r]||MB.SHELLS[n]?(0,a.default)({},MB.SHELLS[r]||MB.SHELLS[n]):null},i=function(e,t){var n=e.template,r=e.combo,a=e.device,o=e.model,i="none"===t?0:12,c=e.width+2*i,u=e.height+2*i,l=n||r||"customize"===o||"web"===a?[c,u]:[Math.min(c,u),Math.max(c,u)],s=(0,d.default)(l,2)
return{device:"default",top:i,left:i,width:s[0],height:s[1]}}},H27A:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=a(n("o0o1")),o=a(n("yXPU")),i=a(n("lwsE")),c=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),g=r(n("q1tI")),h=a(n("17x9")),y=n("DqDi"),b=a(n("i6OX")),w=a(n("4QcC")),S=a(n("Ur7v")),E=a(n("lCKy")),C=a(n("iX79")),m=n("/5+U"),_=n("1iCU"),v=n("t3Un"),x=n("Gbs1"),k=a(n("rtgd")),M=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(r)),"handleTabChange",function(e){var t=r.props.dispatch,n=_.PREVIEW_CONFIG[e]
t({type:"entry:preview:select",payload:{toolbarActiveItem:_.PREVIEW_CONFIG[e]}}),MB.event("".concat(_.TOOLBAR_TRAKING_CONFIG[n]),"运行页")}),e.dispatch({type:"reducer:preview-toolbar:active-item:init"}),O()&&r.props.dispatch({type:"entry:preview:select",payload:{toolbarActiveItem:_.INSPECT}}),r}return(0,d.default)(t,e),(0,c.default)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.toolbarActiveItem,n=e.loadSliceUrl
t!=this.props.toolbarActiveItem&&this.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1,isSelectLayer:!1}}),n!=this.props.loadSliceUrl&&N(n)}},{key:"render",value:function(){var e=this.props,t=e.scale,n=e.project,r=e.dispatch,a=e.toolbarActiveItem,o=e.existUnreadComment,i=e.isScrollable,c=e.isHighlight,u=e.isStickyShow,l=e.shellType,s=_.PREVIEW_CONFIG.indexOf(a)||0,d=a!=_.PREVIEW,f=n.name||"",p=!R(),h=MB.isHTMLZip()?_.PREVIEW_OFFLINE_ICON_LIST:_.PREVIEW_ICON_LIST,
m=!MB.isHTMLZip()&&o,v=g.default.createElement(w.default,{scale:t,project:n,dispatch:r})
return n.template?v:g.default.createElement("header",{className:k.default["preview-toolbar"]},g.default.createElement("div",{className:"toolbar-left"},!p&&g.default.createElement("a",{title:I18N.back,onClick:T},g.default.createElement(b.default,{name:"back_fc",type:"dora",className:"fs-16"})),g.default.createElement("span",{className:"project-name",title:f},f)),g.default.createElement("div",{className:"toolbar-main"},v,g.default.createElement("div",{className:"toolbar-main-wrapper"},g.default.createElement(
y.NavigationBar,{tabs:h,activeIndex:s,onChange:this.handleTabChange,className:"preview-toolbar-nav",hideBorder:!0}),m&&g.default.createElement("span",{className:"unread"}))),g.default.createElement("div",{className:"toolbar-right"},g.default.createElement(E.default,{canSetDeviceShell:(0,x.canSetDeviceShell)(n),disabled:d,isScrollable:i,isHighlight:c,isStickyShow:u,shellType:l,dispatch:r}),g.default.createElement("span",{className:"line"}),g.default.createElement(S.default,{dispatch:r}),
g.default.createElement("span",{className:"line"}),g.default.createElement(C.default,{dispatch:r})))}}]),t}(g.PureComponent)
t.default=M,(0,p.default)(M,"propTypes",{scale:h.default.number,project:h.default.object,toolbarActiveItem:h.default.string,existUnreadComment:h.default.bool,loadSliceUrl:h.default.string,isScrollable:h.default.bool,isHighlight:h.default.bool,isStickyShow:h.default.bool,shellType:h.default.string,dispatch:h.default.func})
var T=function(){R()&&MB.designer.backDesign()},R=function(){return!MB.f.inSharing&&"file:"!==window.location.protocol},N=function(){var t=(0,o.default)(u.default.mark(function e(n){var r,a,o,i,c
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,o=1
case 2:if(r)return e.next=5,(0,m.setTimeoutAsync)(Math.min(2e3*o++,1e4))
e.next=16
break
case 5:return e.next=7,t=n,(0,v.requestJSON)(t,null,{method:"POST"})
case 7:if(i=e.sent,c=i.url,"ok"===i.status&&(r=!1,a=c),20<o)return(0,m.downloadFail)(),e.abrupt("return",!1)
e.next=14
break
case 14:e.next=2
break
case 16:return(0,m.downloadWithATag)({url:"/".concat(a),name:name,type:"zip"}),e.abrupt("return",!0)
case 18:case"end":return e.stop()}var t},e,this)}))
return function(e){return t.apply(this,arguments)}}(),O=function(){return new URLSearchParams(location.search).has("inspect")}},H5Dy:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.setProjectCommentPermission=t.getProjectCommentPermission=t.getPermission=void 0
var d=[0,1,2,3,4,5,6,7].map(function(e){return{create:!!(1&e),update:!!(2&e),delete:!!(4&e)}}),f={owner:!0,admin:!0,editor:!0,viewer:!0},p={owner:!0,admin:!0},h={allowComment:!1,denyMessage:""}
t.getProjectCommentPermission=function(){return h}
t.setProjectCommentPermission=function(e){var t=e.allowComment,n=e.denyMessage
return Object.assign(h,{allowComment:t,denyMessage:n})}
t.getPermission=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"INVALID_ID_0",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"INVALID_ID_1",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,a=4<arguments.length?arguments[4]:void 0,o=h.allowComment,i=a&&"owner"===a.role,c=n===t,u="owner"===e,l=o&&f[e]||!1,s=o&&l&&c
return d[(l?1:0)+(s?2:0)+((null===r?o&&(s||p[e])||c:o&&(i?u:"admin"===e)||c||u)?4:0)]}},HDyB:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},HFhh:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),b=n("IT1M"),a={id:null,name:"",email:"",avatar:"",plan:{state:"",type:"free",rawType:"free",collaboratorLimitation:0,daysLeft:""}},o=(0,r.createStateStore)(a),i=o.getState,c=o.setState,u=o.wrapEntry
var l={entryMap:{"user:set":u(function(e,t,n){var r,a,o,i,c,u,l=t.dispatch,s=n.payload,d=s.id,f=void 0===d?null:d,p=s.name,h=void 0===p?"":p,m=s.email,v=void 0===m?"":m,g=s.avatar,y=void 0===g?"":g
l({type:"reducer:user:update",payload:b.Operation.objectMerge(e,{id:f,name:h,email:v,avatar:y,plan:(r=s,a=r.plan,o=r.state,i=r.limitation,c=r.days_left,u="active"===o,{state:o||"",type:u&&a||"free",rawType:a||"free",collaboratorLimitation:u&&i||0,daysLeft:c||""})})})}),"user:clear":u(function(e,t,n){(0,t.dispatch)({type:"reducer:user:update",payload:a})})},getState:i,setState:c}
t.default=l},HLqo:function(e,t,n){},HfeQ:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),S=r(n("q1tI")),E=n("6XO9")
n("wfO3")
var f=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.isOpen,r=e.type,a=e.alertType,o=e.title,i=e.desc,c=void 0===i?o:i,u=e.isHTML,l=e.onClose,s=void 0===l?function(){return t({type:"container:modal:close"})}:l,d=e.onCancel,f=void 0===d?function(){return null}:d,p=e.onConfirm,h=e.canClose,m=e.canCancel,v=e.canConfirm,g=e.cancelText,
y=e.confirmText,b=m?function(){f&&f(),s&&s()}:void 0,w=v?function(){p&&p(),s&&s()}:void 0
return S.default.createElement(E.Modal,{isOpen:n,type:r,portalClassName:"global-alert-portal",title:o!==c&&o?o:I18N.reminder,onClose:function(){"function"==typeof f&&f(),s()},canClose:h,onCancel:b,onConfirm:w,cancelText:g,confirmText:y},u?S.default.createElement("p",{className:"desc",dangerouslySetInnerHTML:{__html:c}}):S.default.createElement("div",{className:"desc"},c),"prompt"===a&&S.default.createElement(E.FormLabel,{name:I18N.password},S.default.createElement(E.Input,{type:"password",
className:"prompt-pwd"})))}}]),t}(S.PureComponent)
t.default=f,(0,s.default)(f,"propTypes",{dispatch:d.default.func,isOpen:d.default.bool,type:d.default.string,alertType:d.default.oneOf(["confirm","alert","prompt"]),onClose:d.default.func,onCancel:d.default.func,onConfirm:d.default.func,canClose:d.default.bool,canCancel:d.default.bool,canConfirm:d.default.bool,confirmText:d.default.string,cancelText:d.default.string,title:d.default.string,desc:d.default.any,isHTML:d.default.bool}),(0,s.default)(f,"defaultProps",{type:"alert"})},Hlt7:function(e,t,n){
"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.scrollParent=t.checkInvision=t.checkOverflowVisbile=t.filterSearch=void 0
var s=r(n("MVZn")),d=r(n("J4zp")),p=r(n("i8i4"))
t.filterSearch=function(e,t,n){for(var r=[],a=0,o=Object.entries(e),i=0;i<o.length;i++){var c=(0,d.default)(o[i],2),u=c[0],l=c[1]
t&&0<t.length&&l.toLowerCase().includes(t)&&r.push((0,s.default)({},n[u],{index:a++}))}return r}
var a=function(e){if(!e)return document.documentElement
for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement
var a=window.getComputedStyle(r),o=a.position,i=a.overflow,c=a["overflow-x"],u=a["overflow-y"]
if("static"===o&&t&&(r=r.parentNode),n.test(i)&&n.test(c)&&n.test(u))return r
r=r.parentNode}return e.ownerDocument||e.documentElement||document.documentElement}
t.scrollParent=a
var h=0,m=0,o=function(e,t){var n,r,a=p.default.findDOMNode(e)
try{var o=t.getBoundingClientRect()
n=o.top,r=o.height}catch(e){n=h,r=m}var i,c,u=window.innerHeight||document.documentElement.clientHeight,l=Math.max(n,0),s=Math.min(u,n+r)-l
try{var d=a.getBoundingClientRect()
i=d.top,c=d.height}catch(e){i=h,c=m}var f=i-l
return f<=s&&0<=f+c}
t.checkOverflowVisbile=o
t.checkInvision=function(e){var t=p.default.findDOMNode(e),n=a(t)
return!!o(e,n)}},Hmy9:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createNotifier=t.notifyFallback=t.handleNotification=void 0
var a=r(n("i8i4")),o=n("B3BZ"),i=window,c=i.$,u=i.MB
t.handleNotification=function(r,e){if("new_thread_comment"!==r.event_type||!u.commentModeOn){e.notify({title:I18N.got_message,opts:{body:r.message,icon:"/images/mockingbot-logo80x80.png"},duration:1e4,onClick:function(e,t){e.preventDefault(),t()
var n=window
n.focus(),u.notification.markRead(r.id,function(){return u.notification.gotoDataUrl(r.url,n,r.need_reload,r.need_new_win)})},onNotSupport:function(){return l(r)}})
var t=c("#header .notifications-dropdown")[0]
t&&(a.default.unmountComponentAtNode(t),u.renderNotifications(t))}}
var l=function(t){c("#notification").addClass("active"),setTimeout(function(){return c("#notification").removeClass("active")},1e4),c("#notification .request_permission_message").hide()
var e=c("#notification .message")
e.text(t.message),t.url&&(e.off("click"),e.on("click",function(e){e.preventDefault(),u.notification.markRead(t.id,function(){return u.notification.gotoDataUrl(t.url,window,t.need_reload,t.need_new_win)})}))}
t.notifyFallback=l
var s=function(e,t){var n=c("#notification")
n.find(".message").text(""),n.append(['<span class="request_permission_message">',I18N.notifications.request_permission,"<ul>",'<li><button class="request_permission">'.concat(I18N.notifications.enable_notification,"</button>"),'<li><button class="ask_later">'.concat(I18N.notifications.ask_later,"</button>"),'<li><button class="never_ask">'.concat(I18N.notifications.never_ask_again,"</button>"),"</ul>","</span>"].join("\n"))
var r=function(){n.find(".request_permission").remove(),n.removeClass("active"),c("body").removeClass("notification-show")}
n.on("click",".icon-times, .ask_later",r),n.on("click",".request_permission",function(){r(),e()}),n.on("click",".never_ask",function(){r(),t()}),c("body").addClass("notification-show")}
t.createNotifier=function(){var e=(0,o.createNotifierWrap)(s)
return e.init(),e}},Hrzm:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("PJYZ")),c=a(n("lSNA")),u=a(n("lwsE")),l=a(n("W8MJ")),s=a(n("a1gu")),d=a(n("Nsbk")),f=a(n("7W2i")),o=a(n("17x9")),p=r(n("q1tI")),h=n("uavl"),m=n("JTWS")
n("dAiO")
var v=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.screen,t=e.cid,n=e.state_cid,r=Widget.select(function(e){return"sticky"===e.name&&e.screen_cid===t}).map(function(e){var t=e.dup()
return t.setState(n),t})
return p.default.createElement("div",{id:"sticky-container",onClick:this.handleClick},p.default.createElement("div",{id:"stickies"},r.map(function(e){return p.default.createElement(g,{key:e.cid,sticky:e})})))}}]),t}(p.PureComponent);(t.default=v).propTypes={screen:o.default.object}
var g=function(e){function o(){var e,n;(0,u.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,s.default)(this,(e=(0,d.default)(o)).call.apply(e,[this].concat(r))),(0,c.default)((0,i.default)((0,i.default)(n)),"handleClick",function(e){var t=n.props.sticky
Link.find(t.link_cids)&&MB.runner.pj(e,"tap")}),n}return(0,f.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e=this.props.sticky,t=(0,m.getWidgetClassName)(e,"p"),n=(0,m.getWidgetStyle)(e,"p"),r=Link.find(e.link_cids)?e.link_cids:""
return p.default.createElement("div",{key:e.cid,"data-cid":e.cid,"data-link_cid":r,id:"widget".concat(e.cid,"p"),className:t,style:n,onClick:this.handleClick},(0,h.getWidgetContent)(e))}}]),o}(p.PureComponent)
g.propTypes={sticky:o.default.object}},I01J:function(e,t){e.exports=function(e){return e}},IB8Z:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getWidgetsByScreenCid=t.getScreenWidgetsMap=void 0
t.getScreenWidgetsMap=function(e){var t={}
for(var n in e){var r=e[n]
t[r.screen_cid]?t[r.screen_cid].push(r):t[r.screen_cid]=[r]}return t}
t.getWidgetsByScreenCid=function(e,t){return(t[e]||[]).map(function(e){return e.clone()})}},IDhZ:function(e,t,n){"use strict"
var y=n("MgzW"),b=n("q1tI")
function w(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1])
!function(e,t,n,r,a,o,i,c){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var u=[n,r,a,o,i,c],l=0;(e=Error(t.replace(/%s/g,function(){return u[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for(
"react.provider"):60109,l=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.placeholder"):60113
function h(e){if(null==e)return null
if("function"==typeof e)return e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case s:return"AsyncMode"
case o:return"Fragment"
case a:return"Portal"
case c:return"Profiler"
case i:return"StrictMode"
case f:return"Placeholder"}if("object"==typeof e){switch(e.$$typeof){case l:return"Context.Consumer"
case u:return"Context.Provider"
case d:var t=e.render
return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")}if("function"==typeof e.then&&(e=1===e._reactStatus?e._reactResult:null))return h(e)}return null}
var p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m=Object.prototype.hasOwnProperty,v={},g={}
function S(e){return!!m.call(g,e)||!m.call(v,e)&&(p.test(e)?g[e]=!0:!(v[e]=!0))}function E(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e)
default:return!1}}(e,t,n,r))return!0
if(r)return!1
if(null!==n)switch(n.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||t<1}return!1}function C(e,t,n,r,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t}var _={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new C(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0]
_[t]=new C(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new C(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new C(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new C(e,3,!1,
e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new C(e,3,!0,e,null)}),["capture","download"].forEach(function(e){_[e]=new C(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){_[e]=new C(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){_[e]=new C(e,5,!1,e.toLowerCase(),null)})
var x=/[\-:]([a-z])/g
function k(e){return e[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(
" ").forEach(function(e){var t=e.replace(x,k)
_[t]=new C(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,k)
_[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,k)
_[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),_.tabIndex=new C("tabIndex",1,!1,"tabindex",null)
var M=/["'&<>]/
function T(e){if("boolean"==typeof e||"number"==typeof e)return""+e
e=""+e
var t=M.exec(e)
if(t){var n,r="",a=0
for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;"
break
case 38:t="&amp;"
break
case 39:t="&#x27;"
break
case 60:t="&lt;"
break
case 62:t="&gt;"
break
default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}var R="http://www.w3.org/1999/xhtml"
function N(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}var O={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},I=y({menuitem:!0},O),P={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,
gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A=["Webkit","ms","Moz","O"]
Object.keys(P).forEach(function(t){A.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),P[e]=P[t]})})
var L=/([A-Z])/g,j=/^ms-/,D=b.Children.toArray,B={listing:!0,pre:!0,textarea:!0},U=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,F={},q={}
var W={}
var H=Object.prototype.hasOwnProperty,z={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null}
function V(e,t){void 0===e&&w("152",h(t)||"Component")}function Y(f,p){function e(e,t){var n=function(e,t){if(e=e.contextTypes){var n,r={}
for(n in e)r[n]=t[n]
t=r}else t=W
return t}(t,p),r=[],a=!1,o={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===r)return null},enqueueReplaceState:function(e,t){a=!0,r=[t]},enqueueSetState:function(e,t){if(null===r)return null
r.push(t)}},i=void 0
if(t.prototype&&t.prototype.isReactComponent){if(i=new t(e.props,n,o),"function"==typeof t.getDerivedStateFromProps){var c=t.getDerivedStateFromProps.call(null,e.props,i.state)
null!=c&&(i.state=y({},i.state,c))}}else if(null==(i=t(e.props,n,o))||null==i.render)return void V(f=i,t)
if(i.props=e.props,i.context=n,i.updater=o,void 0===(o=i.state)&&(i.state=o=null),"function"==typeof i.UNSAFE_componentWillMount||"function"==typeof i.componentWillMount)if("function"==typeof i.componentWillMount&&"function"!=typeof t.getDerivedStateFromProps&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&"function"!=typeof t.getDerivedStateFromProps&&i.UNSAFE_componentWillMount(),r.length){o=r
var u=a
if(r=null,a=!1,u&&1===o.length)i.state=o[0]
else{c=u?o[0]:i.state
var l=!0
for(u=u?1:0;u<o.length;u++){var s=o[u]
null!=(s="function"==typeof s?s.call(i,c,e.props,n):s)&&(l?(l=!1,c=y({},c,s)):y(c,s))}i.state=c}}else r=null
if(V(f=i.render(),t),e=void 0,"function"==typeof i.getChildContext&&"object"==typeof(n=t.childContextTypes))for(var d in e=i.getChildContext())d in n||w("108",h(t)||"Unknown",d)
e&&(p=y({},p,e))}for(;b.isValidElement(f);){var t=f,n=t.type
if("function"!=typeof n)break
e(t,n)}return{child:f,context:p}}var Z=function(){function n(e,t){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function")
e=b.isValidElement(e)?e.type!==o?[e]:(e=e.props.children,b.isValidElement(e)?[e]:D(e)):D(e),this.stack=[{type:null,domNamespace:R,children:e,childIndex:0,context:W,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return n.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=n._currentValue
this.contextStack[t]=n,this.contextValueStack[t]=r,n._currentValue=e.props.value},n.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e]
this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t._currentValue=n},n.prototype.read=function(e){if(this.exhausted)return null
for(var t="";t.length<e;){if(0===this.stack.length){this.exhausted=!0
break}var n=this.stack[this.stack.length-1]
if(n.childIndex>=n.children.length){var r=n.footer
t+=r,""!==r&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===n.type?this.currentSelectValue=null:null!=n.type&&null!=n.type.type&&n.type.type.$$typeof===u&&this.popProvider(n.type)}else r=n.children[n.childIndex++],t+=this.render(r,n.context,n.domNamespace)}return t},n.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?T(n):this.previousWasTextNode?"\x3c!-- --\x3e"+T(n):(this.previousWasTextNode=!0,T(n))
if(e=(t=Y(e,t)).child,t=t.context,null===e||!1===e)return""
if(!b.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var r=e.$$typeof
r===a&&w("257"),w("258",r.toString())}return e=D(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(r=e.type))return this.renderDOM(e,t,n)
switch(r){case i:case s:case c:case o:return e=D(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("object"==typeof r&&null!==r)switch(r.$$typeof){case d:return e=D(r.render(e.props,e.ref)),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""
case u:return n={type:e,domNamespace:n,children:r=D(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),""
case l:return r=D(e.props.children(e.type._currentValue)),this.stack.push({type:e,domNamespace:n,children:r,childIndex:0,context:t,footer:""}),""}w("130",null==r?r:typeof r,"")},n.prototype.renderDOM=function(e,t,n){var r=e.type.toLowerCase()
n===R&&N(r),F.hasOwnProperty(r)||(U.test(r)||w("65",r),F[r]=!0)
var a=e.props
if("input"===r)a=y({type:void 0},a,{defaultChecked:void 0,defaultValue:void 0,value:null!=a.value?a.value:a.defaultValue,checked:null!=a.checked?a.checked:a.defaultChecked})
else if("textarea"===r){var o=a.value
if(null==o){o=a.defaultValue
var i=a.children
null!=i&&(null!=o&&w("92"),Array.isArray(i)&&(i.length<=1||w("93"),i=i[0]),o=""+i),null==o&&(o="")}a=y({},a,{value:void 0,children:""+o})}else if("select"===r)this.currentSelectValue=null!=a.value?a.value:a.defaultValue,a=y({},a,{value:void 0})
else if("option"===r){i=this.currentSelectValue
var c=function(e){if(null==e)return e
var t=""
return b.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(a.children)
if(null!=i){var u=null!=a.value?a.value+"":c
if(o=!1,Array.isArray(i)){for(var l=0;l<i.length;l++)if(""+i[l]===u){o=!0
break}}else o=""+i===u
a=y({selected:void 0,children:void 0},a,{selected:o,children:c})}}for(g in(o=a)&&(I[r]&&(null!=o.children||null!=o.dangerouslySetInnerHTML)&&w("137",r,""),null!=o.dangerouslySetInnerHTML&&(null!=o.children&&w("60"),"object"==typeof o.dangerouslySetInnerHTML&&"__html"in o.dangerouslySetInnerHTML||w("61")),null!=o.style&&"object"!=typeof o.style&&w("62","")),o=a,i=this.makeStaticMarkup,c=1===this.stack.length,u="<"+e.type,o)if(H.call(o,g)){var s=o[g]
if(null!=s){if("style"===g){l=void 0
var d="",f=""
for(l in s)if(s.hasOwnProperty(l)){var p=0===l.indexOf("--"),h=s[l]
if(null!=h){var m=l
if(q.hasOwnProperty(m))m=q[m]
else{var v=m.replace(L,"-$1").toLowerCase().replace(j,"-ms-")
m=q[m]=v}d+=f+m+":",f=l,d+=p=null==h||"boolean"==typeof h||""===h?"":p||"number"!=typeof h||0===h||P.hasOwnProperty(f)&&P[f]?(""+h).trim():h+"px",f=";"}}s=d||null}l=null
e:if(p=r,h=o,-1===p.indexOf("-"))p="string"==typeof h.is
else switch(p){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":p=!1
break e
default:p=!0}p?z.hasOwnProperty(g)||(l=S(l=g)&&null!=s?l+'="'+T(s)+'"':""):(p=g,l=s,s=_.hasOwnProperty(p)?_[p]:null,(h="style"!==p)&&(h=null!==s?0===s.type:2<p.length&&("o"===p[0]||"O"===p[0])&&("n"===p[1]||"N"===p[1])),l=h||E(p,l,s,!1)?"":null!==s?(p=s.attributeName,3===(s=s.type)||4===s&&!0===l?p+'=""':p+'="'+T(l)+'"'):S(p)?p+'="'+T(l)+'"':""),l&&(u+=" "+l)}}i||c&&(u+=' data-reactroot=""')
var g=u
o="",O.hasOwnProperty(r)?g+="/>":(g+=">",o="</"+e.type+">")
e:{if(null!=(i=a.dangerouslySetInnerHTML)){if(null!=i.__html){i=i.__html
break e}}else if("string"==typeof(i=a.children)||"number"==typeof i){i=T(i)
break e}i=null}return null!=i?(a=[],B[r]&&"\n"===i.charAt(0)&&(g+="\n"),g+=i):a=D(a.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?N(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:r,children:a,childIndex:0,context:t,footer:o}),this.previousWasTextNode=!1,g},n}(),J={renderToString:function(e){return new Z(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new Z(e,!0).read(1/0)},renderToNodeStream:function(
){w("207")},renderToStaticNodeStream:function(){w("208")},version:"16.5.2"},X=J
e.exports=X.default||X},IOzZ:function(e,t){e.exports=function(t,n){return function(e){return null!=e&&e[t]===n&&(void 0!==n||t in Object(e))}}},IT1M:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n("JGuq")
Object.defineProperty(t,"Operation",{enumerable:!0,get:function(){return r.Operation}})
var a=n("OBS2")
Object.defineProperty(t,"Scheme",{enumerable:!0,get:function(){return a.Scheme}}),Object.defineProperty(t,"ObjectScheme",{enumerable:!0,get:function(){return a.ObjectScheme}}),Object.defineProperty(t,"ArrayScheme",{enumerable:!0,get:function(){return a.ArrayScheme}})
var o=n("CUi3")
Object.defineProperty(t,"ObjectAs",{enumerable:!0,get:function(){return o.ObjectAs}}),Object.defineProperty(t,"ArrayOf",{enumerable:!0,get:function(){return o.ArrayOf}}),Object.defineProperty(t,"objectActMap",{enumerable:!0,get:function(){return o.objectActMap}}),Object.defineProperty(t,"arrayActMap",{enumerable:!0,get:function(){return o.arrayActMap}})},IV71:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WebpackInterface",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"mixConfig",{enumerable:!0,get:function(){return o.default}}),t.default=void 0
var a=r(n("jeLk")),o=r(n("JPxj")),i=a.default
t.default=i},Ibie:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.patchWidgetSize=void 0
t.patchWidgetSize=function(e,t){var n,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:20
switch(e.name){case"status_bar":n=0
break
case"keyboard":case"tab_bar":n=t.height-e.height
break
case"navigation_bar":n=r
break
default:n=e.top}return e.top=n,a(e.name)&&(e.width=t.width),e}
var a=function(e){return["status_bar","keyboard","tab_bar"].includes(e)}},Ij3M:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ColorInfo=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=n("6XO9"),m=n("XrEr"),v=a(n("UbMB")),g=a(n("mfFm")),y=v.default.bind(g.default),b=function(e){function n(e){var t
return(0,o.default)(this,n),t=(0,c.default)(this,(0,u.default)(n).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(t)),"handleClick",function(){t.setState(function(e){return{activeColor:e.colorList[e.index%4],index:e.index+1}})}),t.state={index:0,activeColor:e.stateColor,colorList:"transparent"===e.rgbaColor?Array(4).fill("transparent"):w(e.rgbaColor)||[]},t}return(0,l.default)(n,e),(0,i.default)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.stateColor
this.setState(function(e){return{activeColor:t}})}},{key:"render",value:function(){var e=this.state.activeColor,t=this.props,n=t.title,r=t.rgbaColor,a=y("panel","panel-bottom-8")
return f.default.createElement("div",{className:a,"data-value":n},f.default.createElement("div",{className:"panel-item panel-item-color item-flex-1"},f.default.createElement(h.Tooltip,{className:"panel-item-value textEllipsis",content:{click:I18N.preview_panel.copied},"data-type":"copy",arrowed:!1,"data-clipboard-text":e},e),f.default.createElement("div",{className:"panel-item-color-block",style:{backgroundColor:r},onClick:this.handleClick})))}}]),n}(f.PureComponent)
t.ColorInfo=b
var w=function(e){if(e)return[(0,m.getColorFromUnit)(e,"rgba"),(0,m.getColorFromUnit)(e,"rgb"),(0,m.getColorFromUnit)(e,"argb"),(0,m.getColorFromUnit)(e,"hex")]}
b.propTypes={rgbaColor:p.default.string.isRequired,stateColor:p.default.string,title:p.default.string}},Iusu:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.Base=void 0
var v=r(n("q1tI")),a=r(n("17x9")),g=n("6XO9"),y=n("RUem"),b=n("XrEr"),o=r(n("UbMB")),i=r(n("mfFm")),w=o.default.bind(i.default),c=function(e){var t=e.title,n=e.dataValue,r=void 0===n?[]:n,a=e.data,o=void 0===a?[]:a,i=e.text,c=e.color,u=e.className,l=e.colorUnit,s=e.first,d=(0,b.getColorFromUnit)(c,"rgba"),f=(0,b.getColorFromUnit)(c,l),p=0<r.length,h=4===r.length,m=w("panel","".concat(u),{"panel-bottom-8":!p,"panel-item-text":!!i,"shadow-panel":h})
return c?v.default.createElement(y.ColorInfo,{title:t,rgbaColor:d,stateColor:f}):v.default.createElement("div",{className:m,"data-value":t},i?v.default.createElement(g.Tooltip,{arrowed:!1,className:"panel-item item-flex-1",content:{click:I18N.preview_panel.copied},duration:1e3},v.default.createElement("pre",{"data-type":"copy","data-placement":"top","data-clipboard-text":i,className:"panel-item-value text-content",dangerouslySetInnerHTML:{__html:i}})):v.default.createElement("div",{className:"".concat(
o.length<2?"single-panel-box":"mult-panel-box")},(s?o.slice(0,1):o).map(function(e,t){return v.default.createElement(g.Tooltip,{key:t,arrowed:!1,content:{click:I18N.preview_panel.copied},duration:1e3,className:"panel-item","data-value":r[t]},v.default.createElement("div",{"data-type":"copy","data-clipboard-text":e,className:"panel-item-value"},e))})))};(t.Base=c).propTypes={title:a.default.string,data:a.default.array,dataValue:a.default.array,text:a.default.string,color:a.default.string,
colorUnit:a.default.string,first:a.default.bool,className:a.default.string}},J2m7:function(e,t,n){var r=n("XKAG")(n("UfWW"))
e.exports=r},JGuq:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}var r={objectSet:function(e,t,n){return e[t]!==n?i({},e,(o=n,(a=t)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r)):e
var r,a,o},objectDelete:function(e,t){if(!(t in e))return e
var n=i({},e)
return delete n[t],n},objectMerge:function(e,t){for(var n in t){var r=t[n]
if(e[n]!==r)return i({},e,t)}return e},arraySet:function(e,t,n){if(e[t]===n)return e
var r=[].concat(o(e))
return r[t]=n,r},arrayDelete:function(e,t){return 0<=t&&t<=e.length-1?[].concat(o(e.slice(0,t)),o(e.slice(t+1))):e},arrayInsert:function(e,t,n){return t=Math.min(Math.max(t,0),e.length),[].concat(o(e.slice(0,t)),[n],o(e.slice(t)))},arrayPush:function(e,t){return[].concat(o(e),[t])},arrayUnshift:function(e,t){return[t].concat(o(e))},arrayPop:function(e){if(0===e.length)return e
var t=[].concat(o(e))
return t.pop(),t},arrayShift:function(e){if(0===e.length)return e
var t=[].concat(o(e))
return t.shift(),t},arrayConcat:function(e,t){return t&&t.length?[].concat(o(e),o(t)):e},arrayMatchPush:function(e,t){return e.includes(t)?e:[].concat(o(e),[t])},arrayMatchDelete:function(e,t){var n=e.indexOf(t)
return~n?[].concat(o(e.slice(0,n)),o(e.slice(n+1))):e},arrayMatchMove:function(e,t,n){t=Math.min(Math.max(t,0),e.length-1)
var r=e.indexOf(n)
return~r&&r!==t?r<t?[].concat(o(e.slice(0,r)),o(e.slice(r+1,t+1)),[n],o(e.slice(t+1))):[].concat(o(e.slice(0,t)),[n],o(e.slice(t,r)),o(e.slice(r+1))):e},arrayFindPush:function(e,t,n){return void 0===e.find(t)?[].concat(o(e),[n]):e},arrayFindDelete:function(e,t){var n=e.findIndex(t)
return~n?[].concat(o(e.slice(0,n)),o(e.slice(n+1))):e},arrayFindMove:function(e,t,n){var r=e.findIndex(t),a=e[r]
return~r&&r!==n?r<n?[].concat(o(e.slice(0,r)),o(e.slice(r+1,n+1)),[a],o(e.slice(n+1))):[].concat(o(e.slice(0,n)),[a],o(e.slice(n,r)),o(e.slice(r+1))):e},arrayFindSet:function(e,t,n){var r=e.findIndex(t)
if(!~r||e[r]===n)return e
var a=[].concat(o(e))
return a[r]=n,a}}
t.Operation=r},JPxj:function(e,t,n){"use strict"
function r(e,t,n){return n?t?e(t,n):n:t}function a(e,t){var n={}
function r(e,t){n[e]=t}for(var a in e)r(a,e[a])
for(var o in t)r(o,t[o])
return n}function o(e,t){return function(){return e.apply(void 0,arguments),t.apply(void 0,arguments)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={containerReducerMap:{},viewMap:{},sagaMap:{},extendCallback:null}
return e.forEach(function(e){t.containerReducerMap=r(a,t.containerReducerMap,e.containerReducerMap),t.viewMap=r(a,t.viewMap,e.viewMap),t.extendCallback=r(o,t.extendCallback,e.extendCallback),t.sagaMap=r(a,t.sagaMap,e.sagaMap)}),t}},JTWS:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getWidgetClassName=t.getWidgetStyle=void 0
t.getWidgetStyle=function(t){var e,n,r,a,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=t.inspectables(),c={}
if(" "!=t.zoomable&&(e=t.w(),n=t.h(),"mtooltip"==t.name&&("top"==t.tt_placement||"bottom"==t.tt_placement?n-=t.arrowSize():e-=t.arrowSize()),t.isFullWidth()||(c.width=e),c.height=n),"mtooltip"==t.name){var u=["top","right","bottom","left"].map(function(e){return e===t.tt_placement?t.arrowSize()+"px":0})
c.margin=u.join(" ")}return"pg"==t.name&&o||(c.left=t.l(),t.primary_fixed&&o?(c.position="fixed",t.primary_fixed===Widget.FIXED_TYPE.bottom?c.bottom=t.cs().height-t.b():c.top=t.t()):c.top=t.t()),c.zIndex=t.z,t.tc&&-1!=i.indexOf("tc")&&(c.color=t.tc),t.bg&&-1!=i.indexOf("bg")&&(c.backgroundColor=t.bg),t.bc&&-1!=i.indexOf("bc")&&(c.borderColor=t.bc),-1!=i.indexOf("box_shadow")&&t.box_shadow&&"line"!==t.name&&(c.boxShadow=l(JSON.parse(t.box_shadow))),-1!=i.indexOf("text_shadow")&&t.text_shadow?c.textShadow=s(
JSON.parse(t.text_shadow)):0<t.ts&&(c.textShadow="0 0 ".concat(t.ts," ").concat(t.tsc)),-1!=i.indexOf("border_radius")&&t.border_radius&&(c.borderRadius=t.borderRadiusStr()),-1!=i.indexOf("ro")&&t.ro&&(c.transform="rotate(".concat(t.ro,"deg)"),c.WebkitTransform="rotate(".concat(t.ro,"deg)")),t.clip&&-1!=i.indexOf("clip")&&(c.clipPath=t.clip,c.WebkitClipPath=t.clip),-1!=i.indexOf("fs")&&0<t.fS()&&(c.fontSize=t.fS()+"px"),-1!=i.indexOf("padding")&&"mtextarea"!=t.name&&(c.padding=t.paddingS()),-1!=i.indexOf(
"bs")&&"line"!==t.name&&(c.borderWidth=t.bS()),-1!=i.indexOf("ls")&&"line"!==t.name&&(c.borderStyle=t.lineStyle()),-1!=i.indexOf("ha")&&"label"!==t.name&&(c.textAlign=t.ha),-1!=i.indexOf("lh")&&(c.lineHeight=t.lH()+"px"),c.fontWeight=t.bo?"bold":"normal",c.fontStyle=t.i?"italic":"normal",!MB.isPhantom()&&"none"!==t.ani_name&&o&&(t.ani_delay&&"0"!=t.ani_delay&&(c.animationDelay=t.ani_delay),c.animationIterationCount=t.ani_count,t.ani_duration&&"0"!=t.ani_duration&&(c.animationDuration=t.ani_duration)),
r=t.v?-1!=i.indexOf("o")?t.o/100:"":o?0:.4,!t.v&&o&&(a="none"),""!==r&&(c.opacity=r),a&&(c.pointerEvents=a),t.transition&&(c.transition=t.transition),c}
t.getWidgetClassName=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n="widget ".concat(e.name);-1!=e.inspectables().indexOf("ha")&&(n+=" h".concat(e.ha)),-1!=e.inspectables().indexOf("va")&&(n+=" v".concat(e.va)),"normal"!=e.td&&(n+=" td".concat(e.td)),"pg"==e.name&&(n+=" s".concat(e.icon)),"switch"==e.name&&e.checked&&(n+=" checked"),t&&(Link.find(e.link_cids)&&e.v&&(n+=" clickable"),!MB.isPhantom()&&"none"!=e.ani_name&&e.v&&(n+=" animated "+e.ani_name))
return"sticky"==e.name&&(n+=160<e.l()?" rsticky":" lsticky",n+=e.slt<20?" tsticky":e.slt>e.height-20?" bsticky":""),"rich_text"===e.name&&0==e.size_type&&(n+=" auto"),n}
var l=function(e){return e.reduce(function(e,t){return e+=" ".concat(1===t[0]?"inset ":"").concat(t[1],"px ").concat(t[2],"px ").concat(t[3],"px ").concat(t[4],"px ").concat(t[5])},"")},s=function(e){return e.reduce(function(e,t){return e+=" ".concat(t[0],"px ").concat(t[1],"px ").concat(t[2],"px ").concat(t[3])},"")}},JXIg:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=(0,n("WVP6").createStateStore)({teamCid:null,projectCid:null,screenCid:null,userRole:"guest"}),a=r.getState,o=r.setState,i={"current:set":(0,r.wrapEntry)(function(e,t,n){var r,a=t.dispatch,o=n.payload,i=o.project,c=o.screen,u=o.userCollaborator
a({type:"reducer:current:update",payload:{teamCid:i&&i.team_cid||null,projectCid:i&&i.cid||null,screenCid:c&&c.cid||null,userRole:(r=u&&u.role,l.has(r)?r:"guest")}})})},l=new Set(["owner","admin","editor","viewer"])
var c={entryMap:i,getState:a,setState:o}
t.default=c},JfQ8:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiveResourceError=t.RECEIVE_RESOURCE_ERROR=t.receiveResourceSuccess=t.RECEIVE_RESOURCE_SUCCESS=t.SET_VISIBILITY_SCREEN=void 0
var o=r(n("MVZn"))
t.SET_VISIBILITY_SCREEN="SET_VISIBILITY_SCREEN"
var i="RECEIVE_RESOURCE_SUCCESS"
t.RECEIVE_RESOURCE_SUCCESS=i
t.receiveResourceSuccess=function(e,t){var n=t.document,r=t.layers,a=t.artboard
return{type:i,payload:(0,o.default)({screenID:e},n,{layers:r,artboard:a})}}
var a="RECEIVE_RESOURCE_ERROR"
t.RECEIVE_RESOURCE_ERROR=a
t.receiveResourceError=function(e,t){return{type:a,payload:{screenID:e,error:t}}}},Juji:function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},KAy6:function(e,t,n){"use strict"
e.exports=n("IDhZ")},KHYK:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("17x9")),i=r(n("q1tI")),c=r(n("NBU0")),u=r(n("/wDc"))
n("9gsH")
var o=function(e){var t=e.activeLayer,n=e.enteredLayer,r=e.currentScreen,a=e.unit,o=e.ratio
return i.default.createElement("div",{className:"MeasuresContainer"},n&&n!=t&&i.default.createElement(c.default,{layer:n,currentScreen:r,unit:a,ratio:o}),i.default.createElement(u.default,{activeLayer:t,enteredLayer:n,currentScreen:r,unit:a,ratio:o}))}
o.propTypes={activeLayer:a.default.object,enteredLayer:a.default.object,currentScreen:a.default.object,unit:a.default.string,ratio:a.default.number}
var l=o
t.default=l},KKmY:function(e,t,n){},Kkl0:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.enterLayer=t.ENTER_LAYER=t.activateLayer=t.ACTIVATE_LAYER=t.selectLayer=t.SELECT_LAYER=t.requestSelectLayer=t.REQUEST_SELECT_LAYER=void 0
var r="REQUEST_SELECT_LAYER"
t.REQUEST_SELECT_LAYER=r
t.requestSelectLayer=function(e){!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
return{type:r,payload:{layerID:e}}}
var a="SELECT_LAYER"
t.SELECT_LAYER=a
t.selectLayer=function(e){return{type:a,payload:{layerID:e}}}
var o="ACTIVATE_LAYER"
t.ACTIVATE_LAYER=o
t.activateLayer=function(e){return MB.event("点击了 Layer 元素","运行页"),{type:o,payload:{layerID:e}}}
var i="ENTER_LAYER"
t.ENTER_LAYER=i
t.enterLayer=function(e){return{type:i,payload:{layerID:e}}}},Ku8Y:function(e,t,n){e.exports={"editable-span":"_3kZ6Tt9vKO7jl4aGylRTa6","reply-textarea":"_2MMdtZStiVFrqpPWeqIzKH","btn-sort":"_3U9vAHumYl9Ansn9gzYs05","btn-cancel":"_1whvmqsHCmt8iyBc4KMnAF","btn-sure":"_3cG_7EkzOzZEovmV1UHoBq",container:"_1qDeu3cpB7cYXe6lqzlO5Q",avatarInform:"_11prqogEAAMMYQDJ2WNa86",avatar:"xGJm0OmgYp2ExjB9P_BYP","avatar-slide":"_1C_8aOGkoIAasZipcKGlxM",index:"_6wvUm87_ziDGV5DTBxNih",name:"_1Px7EkIhdlrwi7as8ggVbs"}},
Kurm:function(e,t,n){e.exports={"full-screen-actions":"kbJl1VYgaCmw8Z46GFG6z"}},KwMD:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o
return-1}},KxBF:function(e,t){e.exports=function(e,t,n){var r=-1,a=e.length
t<0&&(t=a<-t?0:a+t),(n=a<n?a:n)<0&&(n+=a),a=n<t?0:n-t>>>0,t>>>=0
for(var o=Array(a);++r<a;)o[r]=e[r+t]
return o}},L0cU:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("4dyd")),m=a(n("xtk/")),v=n("/N2d"),g=a(n("p7Sh")),y=a(n("UbMB")).default.bind(g.default),b=function(e){function t(e){var n
return(0,o.default)(this,t),n=(0,c.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(n)),"setContainerRef",function(e){return n.$container=e}),(0,d.default)((0,s.default)((0,s.default)(n)),"updateContainerRect",function(){return n.setState({containerRect:n.$container.getBoundingClientRect()})}),(0,d.default)((0,s.default)((0,s.default)(n)),"handleScroll",function(){return n.updateContainerRect()}),(0,d.default)((0,s.default)((0,s.default)(n)),"handleResize",function(){
return n.updateContainerRect()}),(0,d.default)((0,s.default)((0,s.default)(n)),"handleScrollIntoView",function(e){var t=n.state.containerRect
n.$container.scrollTop+=e.top-t.top}),n.state={containerRect:null},n}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.updateContainerRect()}},{key:"render",value:function(){var n=this,e=this.props,t=e.screenList,r=e.projectToken,a=e.activeScreenCid,o=e.className,i=e.screenTimestampMap,c=e.onClickScreenItem,u=e.treeProps,l=this.state.containerRect
return p.default.createElement("div",{ref:this.setContainerRef,className:y("thumbnail-container",o),onScroll:this.handleScroll},p.default.createElement("ol",{className:"thumbnail-list"},0===t.length&&p.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match),t.map(function(e,t){return p.default.createElement(m.default,{key:e.cid,index:t,screenCid:e.cid,screenName:e.name,projectToken:r,version:i[e.cid],canvasZoom:(0,v.getScreenThumbnailZoom)(e.width,e.height),isActive:e.cid===a,
containerRect:l,onActivate:c,scrollIntoView:n.handleScrollIntoView,treeProps:u})})),p.default.createElement(h.default,{onResize:this.handleResize}))}}]),t}(p.PureComponent);(t.default=b).propTypes={className:f.default.string,screenList:f.default.array,projectToken:f.default.string,activeScreenCid:f.default.string,screenTimestampMap:f.default.object,onClickScreenItem:f.default.func,treeProps:f.default.object},b.defaultProps={screenTimestampMap:{}}},LGYb:function(e,t,n){var p=n("1hJj"),h=n("jbM+"),m=n("Xt/L")
,v=n("xYSL"),g=n("dQpi"),y=n("rEGp")
e.exports=function(e,t,n){var r=-1,a=h,o=e.length,i=!0,c=[],u=c
if(n)i=!1,a=m
else if(200<=o){var l=t?null:g(e)
if(l)return y(l)
i=!1,a=v,u=new p}else u=t?[]:c
e:for(;++r<o;){var s=e[r],d=t?t(s):s
if(s=n||0!==s?s:0,i&&d==d){for(var f=u.length;f--;)if(u[f]===d)continue e
t&&u.push(d),c.push(s)}else a(u,d,n)||(u!==c&&u.push(d),c.push(s))}return c}},LPEl:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createStateStore=t.arrayMatchDelete=t.arrayMatchPush=t.objectMerge=void 0
var a=r(n("RIqP")),c=r(n("MVZn")),u=r(n("J4zp")),o=function(e,t){for(var n=Object.entries(t),r=0;r<n.length;r++){var a=(0,u.default)(n[r],2),o=a[0],i=a[1]
if(e[o]!==i)return(0,c.default)({},e,t)}return e}
t.objectMerge=o
var i=function(e,t){return e.includes(t)?e:(0,a.default)(e).concat([t])}
t.arrayMatchPush=i
var l=function(e,t){var n=e.indexOf(t)
return~n?(0,a.default)(e.slice(0,n)).concat((0,a.default)(e.slice(n+1))):e}
t.arrayMatchDelete=l
t.createStateStore=function(n){var r=[]
return{subscribe:function(e){r=i(r,e)},unsubscribe:function(e){r=l(r,e)},getState:function(){return n},setState:function(e){if((e=o(n,e))===n)return n
var t=n
return n=e,r.forEach(function(e){return e(n,t)}),n}}}},LVRM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.BasicAttributes=void 0
var u=r(n("q1tI")),a=r(n("17x9")),l=n("RUem"),o=function(e){var t=e.adapterLeft,n=e.adapterTop,r=e.adapterWidth,a=e.adapterHeight,o=e.opacity,i=e.radius,c=e.rotate
return u.default.createElement(l.WrapComponent,null,I18N.preview_panel.basic_attribute,t&&u.default.createElement(l.Base,{title:I18N.preview_panel.position,dataValue:[I18N.preview_panel._x,I18N.preview_panel._y],data:[t,n]}),r&&u.default.createElement(l.Base,{title:I18N.preview_panel.size,dataValue:[I18N.preview_panel.width,I18N.preview_panel.height],data:[r,a]}),c&&u.default.createElement(l.Base,{title:I18N.preview_panel.rotation,data:[c]}),i&&u.default.createElement(l.Base,{
title:I18N.preview_panel.border_radius,data:[i]}),o&&u.default.createElement(l.Base,{title:I18N.preview_panel.opacity,data:[o]}))};(t.BasicAttributes=o).propTypes={adapterLeft:a.default.string,adapterHeight:a.default.string,adapterTop:a.default.string,adapterWidth:a.default.string,opacity:a.default.oneOfType([a.default.string,a.default.bool]),rotate:a.default.oneOfType([a.default.string,a.default.bool]),radius:a.default.oneOfType([a.default.string,a.default.number])}},Lyer:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=a(n("pVnL")),p=a(n("QILm")),i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),h=a(n("lSNA")),o=a(n("17x9")),m=r(n("q1tI")),v=n("6XO9"),g=a(n("rwIS")),y=function(e){return MB.localStorageDelegate.setItem("guide_closed_".concat(e),!0)},b=function(e){function o(){var e,a;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(n))),(0,h.default)((0,d.default)((0,d.default)(a)),"setGuideRef",function(e){return a.guide=e}),(0,h.default)((0,d.default)((0,d.default)(a)),"handleCloseGuideManually",function(){y(a.props.id)}),(0,h.default)((0,d.default)((0,d.default)(a)),"autoClose",function(){var e=a.props,t=e.duration,n=e.autoClose,r=e.id
e.isOpen&&t&&(a.timer=setTimeout(function(){n(),y(r)},t))}),a}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentDidUpdate",value:function(e){e.isOpen!==this.props.isOpen&&this.autoClose()}},{key:"componentWillUnmout",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e,t=this.props,n=t.id,r=t.isOpen,a=t.children,o=t.localeKey,i=t.position,c=t.className,u=(0,p.default)(t,["id","isOpen","children","localeKey","position","className"])
if(e=n,"true"===MB.localStorageDelegate.getItem("guide_closed_".concat(e)))return a
var l=I18N.guide_base[o||n],s=l.header,d=l.content
return m.default.createElement(v.Guide,(0,f.default)({ref:this.setGuideRef,isOpen:r,position:i,onClose:this.handleCloseGuideManually,className:"".concat(g.default["guide-button"]," ").concat(c),header:s,guide:m.default.createElement("div",{dangerouslySetInnerHTML:{__html:d}}),X:"right"},u),a)}}]),o}(m.PureComponent);(t.default=b).propTypes={id:o.default.string.isRequired,isOpen:o.default.bool,duration:o.default.number,localeKey:o.default.string,children:o.default.element,autoClose:o.default.func,
className:o.default.string,position:o.default.string},b.defaultProps={gotItText:I18N.guide_base.got_it}},M8nv:function(e,t,n){e.exports=n("eaeY")},Mn07:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("RIqP")),p=a(n("17x9")),h=r(n("q1tI")),m=a(n("L0cU")),v=function(e){function t(e){var a
return(0,o.default)(this,t),a=(0,c.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(a)),"handleActivateScreen",function(e){var t=a.props,n=t.activeCid,r=t.dispatch
e!==n&&r({type:"entry:sync-runner:set-screen",payload:{cid:e}})}),a.treeProps={renderItem:e.renderCommentIcon},a}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.activeCid,n=function r(e,a,o){var i=o[e]?[o[e]]:[]
return a[e]&&a[e].forEach(function(e){var t=e.cid,n=r(t,a,o)
i.push.apply(i,(0,f.default)(n))}),i}("root",e.screenTreeMap,e.screenDataMap)
return h.default.createElement(m.default,{screenList:n,projectToken:MB.currentProject.access_token,activeScreenCid:t,onClickScreenItem:this.handleActivateScreen,treeProps:this.treeProps})}}]),t}(h.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{activeCid:p.default.string,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},NBU0:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var E=r(n("J4zp")),a=r(n("17x9")),C=r(n("q1tI")),_=n("/5+U")
n("UZR7")
var o=function(e){var t=e.layer,n=t.top,r=t.left,a=t.width,o=t.height,i=t.rotation,c=void 0===i?0:i,u=t.kind,l=e.currentScreen,s=(0,_.getMinBoundingRect)({width:a,height:o,left:r,top:n,rotate:u?0:c}),d=(0,E.default)(s,4),f=d[0],p=d[1],h=d[2],m=d[3],v=l.width,g=l.height,y={top:"".concat(f/g*100,"%")},b={left:"calc(".concat((p+h)/v*100,"% - 1px)")},w={top:"calc(".concat((f+m)/g*100,"% - 1px)")},S={left:"".concat(p/v*100,"%")}
return C.default.createElement("ul",{className:"LayerBoundings"},C.default.createElement("li",{className:"LayerBounding LayerBounding--top",style:y}),C.default.createElement("li",{className:"LayerBounding LayerBounding--right",style:b}),C.default.createElement("li",{className:"LayerBounding LayerBounding--bottom",style:w}),C.default.createElement("li",{className:"LayerBounding LayerBounding--left",style:S}))}
o.propTypes={layer:a.default.object,currentScreen:a.default.object}
var i=o
t.default=i},NYM8:function(e,t,n){},NZ2w:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=r(n("17x9")),h=r(n("q1tI")),m=r(n("i8i4")),v=r(n("9DAG")),g=n("IB8Z"),y=n("gCaL"),b=n("2qqa"),c=function(){function e(){(0,a.default)(this,e)}return(0,o.default)(e,null,[{key:"updateScreenContentHeight",value:function(e){var t=document.querySelector("#pscreen".concat(e.cid)),n=t.querySelector(".widgets"),r=t.querySelector(".scontainer"),a=t.querySelector(".screen-header"),o=t.querySelector(".screen-footer"),i=e.headerHeight(),c=e.footerHeight()
return a.style.height=i+"px",o.style.height=c+"px",n.style.height=e.height-(i+c)+"px",Object.assign(r.style,{height:e.height+"px",marginTop:-i+"px"}),{$screen:t,$sheader:a,$sfooter:o,$scontainer:r}}},{key:"renderScreenContent",value:function(e,t){var n=this.updateScreenContentHeight(e),r=n.$screen,a=n.$sheader,o=n.$sfooter,i=n.$scontainer,c=(0,g.getScreenWidgetsMap)(Widget.irecords)
Array.from(r.querySelectorAll(".widget, .group, .panel")).forEach(function(e){return e.style.transition=""})
var u=(0,b.generateItems)(e,t,c),l=(0,y.generateTreeData)(u,e.cid).widgetTreeData
m.default.render(h.default.createElement(v.default,{widgetTreeData:l}),i),m.default.render(h.default.createElement(w,{treeData:l,headerHeight:e.headerHeight()}),a),m.default.render(h.default.createElement(S,{treeData:l,footerHeight:e.footerHeight(),screenHeight:e.height}),o)}},{key:"renderScreenContentWithTransition",value:function(e,t,n,r){var a=this.updateScreenContentHeight(e),o=a.$screen,i=a.$sheader,c=a.$sfooter,u=a.$scontainer,l=(0,g.getScreenWidgetsMap)(Widget.irecords),s=(0,b.getItemsWithPrevData)(e
,n,t,l),d=(0,y.generateTreeData)(s,e.cid).widgetTreeData;(m.default.render(h.default.createElement(v.default,{widgetTreeData:d}),u),m.default.render(h.default.createElement(w,{treeData:d,headerHeight:e.headerHeight()}),i),m.default.render(h.default.createElement(S,{treeData:d,footerHeight:e.footerHeight(),screenHeight:e.height}),c),r)&&Array.from(o.querySelectorAll(".widget, .group, .panel")).forEach(function(e){return e.style.transition=r})
o.offsetWidth
var f=(0,b.generateItems)(e,t,l),p=(0,y.generateTreeData)(f,e.cid).widgetTreeData
m.default.render(h.default.createElement(v.default,{widgetTreeData:p}),u),m.default.render(h.default.createElement(w,{treeData:p,headerHeight:e.headerHeight()}),i),m.default.render(h.default.createElement(S,{treeData:p,footerHeight:e.footerHeight(),screenHeight:e.height}),c)}}]),e}()
t.default=c
var w=function(e){var t=e.treeData,n=e.headerHeight,r=(0,b.headerFilter)(t,n)
return h.default.createElement(v.default,{widgetTreeData:r})}
w.propTypes={treeData:i.default.object,headerHeight:i.default.number}
var S=function(e){var t=e.treeData,n=e.footerHeight,r=e.screenHeight,a=(0,b.footerFilter)(t,r,n)
return h.default.createElement("div",{className:"footer-widgets",style:{marginTop:n-r}},h.default.createElement(v.default,{widgetTreeData:a}))}
S.propTypes={treeData:i.default.object,footerHeight:i.default.number,screenHeight:i.default.number}},Nu6V:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSliceZip=t.default=void 0
var r=n("t3Un"),a="/api/v2/projects"
t.default=function(e){return(0,r.requestJSON)("".concat(a,"/").concat(e,"/sketch_slices.json"))}
t.fetchSliceZip=function(e){return(0,r.requestJSON)("".concat(a,"/").concat(e,"/build/slices_zips.json"),null,{method:"POST"})}},NyBV:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return MB.localStorageDelegate.getItem(m)?null:p.default.createElement(o,e)}
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),h=n("6XO9")
n("bTYh")
var o=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"state",{isOpen:!0}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.setState({isOpen:!1}),MB.localStorageDelegate.setItem(m,!0)},4e3)}},{key:"render",value:function(){var e=this.state.isOpen
return p.default.createElement(h.Guide,{className:"commercial-font-tip",isOpen:e,noCloseBtn:!0,guide:I18N.commercial_font_tip_preview,X:"center",Y:"top"})}}]),o}(p.Component)
var m="commercialFontTipShownInPreview"},NyG0:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("MVZn")),i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("6XO9"),v=a(n("m48X")),g=a(n("i6OX")),y=a(n("UbMB")),b=a(n("a1Ia")),w=y.default.bind(b.default),S=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,u.default)(this,(0,l.default)(t).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(r)),"updateSubToolbar",function(e){r.props.dispatch({type:"reducer:preview-toolbar:update",payload:(0,o.default)({},e)})}),(0,f.default)((0,d.default)((0,d.default)(r)),"pickColor",function(e){e.nativeEvent.stopImmediatePropagation(),MB.event("在标注模式中使用了自定义取色","运行页"),r.updateSubToolbar({isShowColorPicker:!0,showLayerList:!1,isSelectLayer:!1})}),(0,f.default)((0,d.default)((0,d.default)(r)
),"updateDeviceUnit",function(e){var t=r.props.emPixel,n=N(e,t)
r.updateSubToolbar(n?{unit:e,ratio:n}:{unit:e}),MB.event("在".concat(e,"下切换倍率为").concat(n),"运行页")}),(0,f.default)((0,d.default)((0,d.default)(r)),"updateLanguage",function(e){MB.event("代码切换".concat(e),"运行页"),r.updateSubToolbar({language:e})}),(0,f.default)((0,d.default)((0,d.default)(r)),"updateColorUnit",function(e){r.updateSubToolbar({colorUnit:e})}),(0,f.default)((0,d.default)((0,d.default)(r)),"updateEmPixel",function(e){var t=Number(e)
r.updateSubToolbar({emPixel:t,ratio:t}),r.setState({customEmPixel:""})
var n=r.props.unit
MB.event("在".concat(n,"下切换倍率为").concat(t),"运行页")}),(0,f.default)((0,d.default)((0,d.default)(r)),"onTypingEmPixel",function(e){if(e){r.setState({customEmPixel:e}),r.updateSubToolbar({emPixel:e,ratio:e})
var t=r.props.unit
MB.event("在".concat(t,"在设置自定义倍率").concat(e),"运行页")}}),(0,f.default)((0,d.default)((0,d.default)(r)),"handleMobileChange",function(e){var t=r.props.unit
r.updateSubToolbar({ratio:Number(e)}),MB.event("在".concat(t,"下切换倍率为").concat(e),"运行页")}),r.state={showLogin:!1,customEmPixel:""},r}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.unit
this.props.unit!==t&&t===E&&this.updateSubToolbar({ratio:1})}},{key:"render",value:function(){var e=this.props,t=e.unit,n=e.emPixel,r=e.ratio,a=e.language,o=e.isShowColorPicker,i=e.colorUnit,c=e.isLogin,u=this.state.customEmPixel,l=t===_||t===C,s=t===E,d=t===_?R:T,f=[{value:10,label:"10px"},{value:12,label:"12px"},{value:14,label:"14px"},{value:16,label:"16px"},{value:n,label:"".concat(n,"px")},p.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},p.default.createElement(
m.InputNumber,{size:"small",min:1,max:99,precision:0,value:u,placeholder:I18N.custom,onChange:this.onTypingEmPixel}))]
return p.default.createElement("div",{className:w("sub-toolbar","preview-sub-toolbar")},p.default.createElement("div",{className:"mode"},p.default.createElement(g.default,{name:"cursor",type:"dora",className:(0,m.trimList)(["cursor",!o&&"is-active"])}),p.default.createElement(m.Tooltip,{arrowed:!0,position:"bottom",duration:1500,className:(0,m.trimList)(["picker",o&&"is-active"]),tipClassName:"marign-top-20",content:{click:c?null:I18N.preview.guide_login,hover:I18N.preview.color_picker}},
p.default.createElement(g.default,{name:"tube",type:"dora",onClick:this.pickColor}))),p.default.createElement("div",{className:"param"},p.default.createElement(v.default,{className:"color-unit",menuClassName:"PreviewSubToolbarSelectMenu",value:i,optionList:M,onChange:this.updateColorUnit}),p.default.createElement(v.default,{menuClassName:"PreviewSubToolbarSelectMenu",placeholder:" ",optionList:k,value:a,onChange:this.updateLanguage}),p.default.createElement(v.default,{className:"device-unit",
menuClassName:"PreviewSubToolbarSelectMenu",optionList:x,value:t,onChange:this.updateDeviceUnit}),l?p.default.createElement(v.default,{menuClassName:"PreviewSubToolbarSelectMenu",optionList:d,value:r,onChange:this.handleMobileChange}):s?p.default.createElement("span",{className:"px-ratio"},"@1x"):p.default.createElement(v.default,{className:"em-pixel",menuClassName:"PreviewSubToolbarSelectMenu scale-select-menu",optionList:f,value:n,onChange:this.updateEmPixel})))}}]),t}(p.PureComponent)
t.default=S,(0,f.default)(S,"propTypes",{unit:h.default.string,language:h.default.string,ratio:h.default.number,colorUnit:h.default.string,isShowColorPicker:h.default.bool,emPixel:h.default.number,isLogin:h.default.bool,dispatch:h.default.func})
var E="px",C="pt",_="dp",x=[E,"em","rem",_,C],k=[{value:"swift",label:"Swift"},{value:"android",label:"Android"},{value:"css",label:"CSS"},{value:"less",label:"Less"},{value:"sass",label:"Sass"},{value:"stylus",label:"Stylus"}],M=[{value:"hex",label:"Hex"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"argb",label:"ARGB"}],T=[1,2,3].map(function(e){return{value:e,label:"@".concat(e,"x")}}),R=[.75,1,1.5,2,3,4].map(function(e){return{value:e,label:"@".concat(e,"x")}}),N=function(e,t){
return"em"===e||"rem"===e?t:1}},O7RO:function(e,t,n){var o=n("CMye"),i=n("7GkX")
e.exports=function(e){for(var t=i(e),n=t.length;n--;){var r=t[n],a=e[r]
t[n]=[r,a,o(a)]}return t}},OBS2:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}()
function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function(t,n){return n.forEach(function(e){t.has(e)&&console.error("duplicate name in set",t,n,e),t.add(e)}),t},o=function(e){return n="toStructJSON",(t=e)instanceof Object&&n in t?e.toStructJSON():e
var t,n},c=function(e,t){return console.error("DEFAULT_REDUCER",e,t),e},m=function(){function r(e,t,n){p(this,r),this.name=e,this.struct=t,this.actMap=n,this.initialState=null,this.acceptNameSet=null,this.actionReducer=null,this.structReducer=null,this.reducer=null}return a(r,[{key:"getActionReducer",value:function(){var o=this.actMap
return function(e,t){var n=t.type,r=t.payload,a=o[n]
return a?a(e,r):e}}},{key:"getReducer",value:function(){var n=this.name,r=this.initialState,a=this.acceptNameSet,o=this.actionReducer,i=this.structReducer,c=function(e,t){return void 0!==t.type&&t.name===n?o(e,t):i(e,t)}
return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1]
return a.has(t.name)?void 0!==t.batch&&t.name===n?t.batch.reduce(c,e):c(e,t):e}}},{key:"toStructJSON",value:function(){return o(this.struct)}}]),r}(),i=function(e){function s(e,t,n){p(this,s)
var r=f(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,t,n)),a={},o=new Set
o.add(r.name)
var i=[]
for(var c in r.struct)if(r.struct.hasOwnProperty(c)){var u=r.struct[c],l=u instanceof m
a[c]=l?u.initialState:u,l&&(h(o,u.acceptNameSet),i.push(c))}return r.initialState=a,r.acceptNameSet=o,r.structReducer=s.getStructReducer(i,r.struct),r.actionReducer=r.getActionReducer(),r.reducer=r.getReducer(),r}return r(s,m),a(s,[{key:"toStructJSON",value:function(){return function(e,t){var n={}
for(var r in e)n[r]=t(e[r],r)
return n}(this.struct,o)}}],[{key:"getStructReducer",value:function(l,s){return function(e,t){for(var n=!1,r={},a=0;a<l.length;a++){var o=l[a],i=s[o],c=e[o],u=i.reducer(c,t)
r[o]=u,n=n||u!==c}return n?d({},e,r):e}}}]),s}(),u=function(e){function l(e,t,n){p(this,l)
var r=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e,t,n)),a=r.struct[0],o=a instanceof m,i=new Set
return i.add(r.name),r.initialState=[],r.acceptNameSet=i,r.structReducer=o?l.getStructReducer(a):c,r.actionReducer=r.getActionReducer(),r.reducer=r.getReducer(),r}return r(l,m),a(l,[{key:"toStructJSON",value:function(){return this.struct.map(o)}}],[{key:"getStructReducer",value:function(u){return function(a,n){var o=!1,i=null
function r(e,t,n){var r=u.reducer(e,t)
e!==r&&(o||(i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(a))),i[n]=r,o=!0)}if(void 0!==n.index)r(a[n.index],n.payload,n.index)
else if(void 0!==n.filter){var c=l.getFilter(n.filter)
c&&a.forEach(function(e,t){return c(e,t)&&r(e,n.payload,t)})}return o?i:a}}},{key:"getFilter",value:function(e){switch(e.type){case"key-value":var n=e.key,r=e.value
return function(e,t){return e[n]===r}}return null}}]),l}()
t.Scheme=m,t.ObjectScheme=i,t.ArrayScheme=u},OVdA:function(e,t,n){e.exports={"text-wrapper":"uauh7BEsBr6RNi8rM4QkK"}},P3rE:function(e,t,n){},PYuP:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=a(n("o0o1")),o=a(n("yXPU")),i=a(n("pVnL")),c=a(n("MVZn")),s=a(n("lwsE")),l=a(n("W8MJ")),d=a(n("a1gu")),f=a(n("Nsbk")),p=a(n("7W2i")),h=a(n("PJYZ")),m=a(n("lSNA")),v=r(n("q1tI")),g=a(n("17x9")),y=n("6XO9"),b=n("wCGR"),w=n("7Qib"),S=n("nLLt"),E=n("XkTy"),C=n("rbsZ"),_=n("zAG7")
n("mnpx")
var x=I18N.open_parenthesis+I18N.pending+I18N.close_parenthesis,k={user:0,owner:1,admin:2,editor:3,viewer:4},M=function(e){var t=e.host,n=e.userRole
return(t.isTeam()&&(0,S.PermissionCheck)("team-collaborator-update","admin",n)?["viewer","editor","admin"]:["viewer","editor"]).map(function(e){return{value:e,label:"".concat(I18N.roles[e]).concat(I18N.colon).concat(I18N.roles[e+"_desc"])}})},T=function(e,t){var n=k[e.user_id===MB.user.id?"user":e.role],r=k[t.user_id===MB.user.id?"user":t.role]
return n!==r?n-r:e.name&&t.name?e.name.localeCompare(t.name):!e.name&&t.name?1:e.name&&!t.name?-1:e.email.localeCompare(t.email)},R=function(e){function o(){var e,t;(0,s.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,d.default)(this,(e=(0,f.default)(o)).call.apply(e,[this].concat(r))),(0,m.default)((0,h.default)((0,h.default)(t)),"onChangeRole",function(e){t.props.onChangeRole({collaborator:t.props.collaborator,role:e}),t.forceUpdate()}),(0,m.default)((0,h.default)((0,h.default)(t)),"onDeleteCollaborator",function(){return t.props.onDeleteCollaborator(t.props.collaborator)}),t}return(0,p.default)(o,e),(0,l.default)(o,[{key:"render",value:function(){var e,t,n,r,a=this.props,o=a.collaborator,i=a.host,
c=a.userRole,u=o.avatar,l=o.name,s=o.email,d=o.role,f=M({host:i,userRole:c}),p=(t=(e={host:i,collaborator:o,userRole:c}).host,n=e.collaborator,r=e.userRole,(0,S.PermissionCheck)(t.isTeam()&&"team","collaborator-update",n.role,r))
return v.default.createElement("li",{className:"collaborator"},v.default.createElement("div",{className:"user"},v.default.createElement("img",{className:"avatar",src:u}),v.default.createElement("span",{className:"user-name"},l||s),!l&&v.default.createElement("span",{className:"pending"},x)),p?v.default.createElement(y.Select,{unstyled:!0,size:"small",optionList:f,value:d,onChange:this.onChangeRole}):v.default.createElement("span",{className:"role"},I18N.roles[d]),p&&v.default.createElement(y.Button,{
type:"text",size:"small",className:"delete",onClick:this.onDeleteCollaborator},I18N.delete))}}]),o}(v.PureComponent);(0,m.default)(R,"propTypes",{dispatch:g.default.func,host:g.default.object,userRole:g.default.any,collaborator:g.default.object,onChangeRole:g.default.func,onDeleteCollaborator:g.default.func})
var N=function(e){function a(e){var l;(0,s.default)(this,a),l=(0,d.default)(this,(0,f.default)(a).call(this,e)),(0,m.default)((0,h.default)((0,h.default)(l)),"errorMsg",function(){var e=l.props.host,t=""
if(e&&e.collaborators().length>=e.limitation.collaborators+1){var n=e.limitation.collaborators?"collaborators":"cant_invite",r=e.owner_id==MB.user.id?"user":e.isTeam()?"team":"project",a=e.isTeam()?"renew":"upgrade"
t=MB.renewMsg&&MB.renewMsg(n,{role:r,action:a,collaborators:e.limitation.collaborators,plan:e.owner_plan})}return t}),(0,m.default)((0,h.default)((0,h.default)(l)),"updateComponent",function(){l.forceUpdate(),MB.webpackInterface&&MB.webpackInterface.refreshAll(),MB.AutoSaver&&MB.AutoSaver.triggerSave()}),(0,m.default)((0,h.default)((0,h.default)(l)),"focusOnInput",function(){return setTimeout(function(){var e=document.querySelector('.collaborator-modal input[type="email"]')
e&&e.focus()},100)}),(0,m.default)((0,h.default)((0,h.default)(l)),"updateEmail",function(e){var t=e.target.value
return l.updatePromptList(t.trim().toLowerCase())}),(0,m.default)((0,h.default)((0,h.default)(l)),"updateRole",function(n){return l.setState(function(e){var t=e.formData
return{formData:(0,c.default)({},t,{role:n})}})}),(0,m.default)((0,h.default)((0,h.default)(l)),"updatePromptList",function(n){if(n!==l.state.email){l.promptMapCached||(l.dedupEmailSetCached=new Set(l.props.host.collaborators().map(function(e){return e.email.toLowerCase()})),l.promptMapCached=Collaborator.all().filter(function(e){var t=e.cid,n=e.user_id,r=e.email
return!(n===MB.user.id||t.startsWith("co_MOCK_c")||t.startsWith("co_MOCK_t")&&!t.startsWith("co_MOCK_te")||l.dedupEmailSetCached.has(r.toLowerCase()))}).reduce(function(e,t){return t.name&&(e[t.name.toLowerCase()]=t),t.email&&(e[t.email.toLowerCase()]=t),e},{}))
var e=n&&new RegExp(n,"i"),t=new Set(l.dedupEmailSetCached),r=new Set
for(var a in l.promptMapCached){if(10<=r.size)break
var o=l.promptMapCached[a],i=o.email.toLowerCase()
e&&!e.test(a)||!i||t.has(i)||(t.add(i),r.add(o))}l.setState(function(e){var t=e.formData
return{formData:(0,c.default)({},t,{email:n}),isPromptListOpen:!0,promptList:Array.from(r)}})}}),(0,m.default)((0,h.default)((0,h.default)(l)),"showPromptList",function(){return l.updatePromptList(l.state.formData.email)}),(0,m.default)((0,h.default)((0,h.default)(l)),"hidePromptList",function(){return setTimeout(function(){l.dedupEmailSetCached=null,l.promptMapCached=null,l.setState({isPromptListOpen:!1})},100)}),(0,m.default)((0,h.default)((0,h.default)(l)),"createOnClickPromptListItemHandler",function(n
){return function(){return l.setState(function(e){var t=e.formData
return{formData:(0,c.default)({},t,{email:n}),promptList:[]}})}}),(0,m.default)((0,h.default)((0,h.default)(l)),"renderPromptList",function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=l.state.promptList
return e=e||0===t.length,v.default.createElement("ul",(0,i.default)({className:"prompt-list"},(0,w.setHidden)(e)),t.map(function(e){return v.default.createElement("li",{key:e.email,onMouseDown:l.createOnClickPromptListItemHandler(e.email)},v.default.createElement("img",{className:"avatar",src:e.avatar}),v.default.createElement("span",{className:"user-name"},e.name||e.email),e.name?v.default.createElement("span",{className:"user-email"},e.email):v.default.createElement("span",{className:"pending"},x))}))}),(
0,m.default)((0,h.default)((0,h.default)(l)),"onInvite",function(){var e=l.props.host,t=l.state.formData,n=t.email,r=t.role
MB.event("我的团队-邀请团队成员",{"成员类型":r,"邮箱":n})
var a=e.limitation,o=void 0===a?MB.user.limitation:a,i=e.collaborators(),c=void 0!==i.find(function(e){return e.email===n}),u=n&&_.EMAIL_REG.test(n)?n===MB.user.email?I18N.cant_invite_yourself:c?I18N.already_invited:i.length>o.collaborators?l.errorMsg():null:I18N.invalid_email
u?(l.focusOnInput(),l.setState({errorMsg:u,promptPricing:i.length>o.collaborators})):(l.createCollaborator({email:n,role:r}),l.setState({formData:{email:"",role:"viewer"},promptPricing:!0}))}),(0,m.default)((0,h.default)((0,h.default)(l)),"createCollaborator",function(e){var t=e.email,n=e.role,r=l.props.host,a=r.isTeam(),o=new Collaborator({email:t,role:n,cid:"co".concat(Math.uuid(10,16)).concat((new Date).valueOf()),avatar:"/images/avatar.png"})
Object.assign(o,{team_cid:a&&r.cid,project_cid:!a&&r.cid}),o.lsave(),l.updateComponent()}),(0,m.default)((0,h.default)((0,h.default)(l)),"onChangeRole",function(e){var t=e.collaborator,n=e.role,r=l.props,a=r.host,o=r.userRole,i=a.isTeam()
!(0,S.PermissionCheck)(i&&"team","collaborator-update",[t.role,n],o)||(Object.assign(t,{role:n}),t.lsave(),l.updateComponent())}),(0,m.default)((0,h.default)((0,h.default)(l)),"onDeleteCollaborator",function(){var t=(0,o.default)(u.default.mark(function e(t){var n,r,a,o,i,c
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.props,r=n.host,a=n.userRole,o=n.openAccountConfirmAsync,i=r.isTeam(),!(0,S.PermissionCheck)(i&&"team","collaborator-delete",t.role,a))return e.abrupt("return")
e.next=5
break
case 5:return c=v.default.createElement(b.ConfirmMsg,{variableMap:{verb:"delete",noun:"teamMember",ugn:v.default.createElement(y.User,{name:t.name||t.email,withQuote:!0,withQuestionMark:"en"===window.MBLocale})}}),e.next=8,(o||E.confirmAsync)({title:I18N.del_collaborator_title,desc:c})
case 8:if(!e.sent){e.next=12
break}t.ldestroy(),l.updateComponent(),l.setState({errorMsg:null})
case 12:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()),l.dedupEmailSetCached=null,l.promptMapCached=null
var t=!(0,S.PermissionCheck)(e.host.isTeam()&&"team","collaborator-create","viewer",e.userRole),n=t?I18N.owner_only:l.errorMsg(),r=!t
return l.state={formData:{email:"",role:"viewer"},promptList:[],isPromptListOpen:!1,errorMsg:n,promptPricing:r},l}return(0,p.default)(a,e),(0,l.default)(a,[{key:"componentDidUpdate",value:function(e){!e.isOpen&&this.props.isOpen&&this.focusOnInput()}},{key:"render",value:function(){var e,t,n,r,a=this,o=this.props,i=o.isOpen,c=o.onClose,u=o.host,l=o.userRole,s=this.state,d=s.formData,f=s.errorMsg,p=s.isPromptListOpen,h=s.promptPricing,m=M({host:u,userRole:l})
return v.default.createElement(y.Modal,{isOpen:i,title:I18N.manage_collaborators,className:"collaborator-modal",onClose:c},(t=(e={host:u,userRole:l,collaborator:{role:"viewer"}}).host,n=e.collaborator,r=e.userRole,(0,S.PermissionCheck)(t.isTeam()&&"team","collaborator-create",n.role,r)&&v.default.createElement("div",{className:"add-via-email"},v.default.createElement("input",{type:"email",placeholder:I18N.email_placeholder,onChange:this.updateEmail,onClick:this.showPromptList,onBlur:this.hidePromptList,
value:d.email,autoComplete:"off"}),v.default.createElement(y.Select,{unstyled:!0,size:"small",optionList:m,value:d.role,onChange:this.updateRole}),v.default.createElement(y.Button,{type:"primary",size:"small",isDisabled:!d.email,onClick:this.onInvite},I18N.invite),this.renderPromptList(!p))),f&&v.default.createElement("div",{className:"error-msg ".concat(h?"has-prompt-pricing-btn":"")},v.default.createElement("span",null,f),h&&v.default.createElement("button",{onClick:C.goToPricingPage},I18N.check_pricing))
,v.default.createElement("ul",{className:"collaborator-list"},u.collaborators().sort(T).map(function(e){return v.default.createElement(R,{key:e.email,host:u,userRole:l,collaborator:e,onChangeRole:a.onChangeRole,onDeleteCollaborator:a.onDeleteCollaborator})})))}}]),a}(v.PureComponent)
t.default=N,(0,m.default)(N,"propTypes",{isOpen:g.default.bool,onClose:g.default.func.isRequired,host:g.default.object,userRole:g.default.any,openAccountConfirmAsync:g.default.func})},PqLM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.lineIsParallelWithAxis=t.getLineAttrsAfterRotate=t.getLineAttrsAsWidget=t.getLineAttrsAfterUngroup=t.getVectorInOtherSystem=t.degreeToRadians=t.getLength=t.getAngle=t.getLineAngle=t.getLineGeneralInfo=void 0
var R=r(n("J4zp")),_=function(e){e.top,e.left
var t=e.width,n=e.height,r=e.bs,a=e.points,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=Math.sqrt(t*t+n*n),c=r,u=JSON.parse(a).map(function(e){return e.point}),l=s(t,n,u)
return{length:o?Math.round(i):i,angle:o?Math.round(l)%360:l,thickness:c}}
t.getLineGeneralInfo=_
var s=function(e,t,n){var r=(0,R.default)(n,2),a=r[0],o=r[1],i=(o[0]-a[0])*e,c=(o[1]-a[1])*t
return u(i,c)}
t.getLineAngle=s
var u=function(e,t){var n=a(e,t)
return 0===n?0:0<=e?(360+o(Math.asin(t/n)))%360:180-o(Math.asin(t/n))}
t.getAngle=u
var a=function(e,t){return Math.sqrt(e*e+t*t)}
t.getLength=a
var o=function(e){return 180*e/Math.PI},x=function(e){return e/180*Math.PI}
t.degreeToRadians=x
var N=function(e,t){var n=(0,R.default)(e,2),r=n[0],a=n[1],o=x(t)
return[Math.cos(o)*r+Math.sin(o)*a,-Math.sin(o)*r+Math.cos(o)*a]}
t.getVectorInOtherSystem=N
t.getLineAttrsAfterUngroup=function(e,t,n,r){var a=(0,R.default)(e,2),o=a[0],i=a[1],c=(0,R.default)(t,2),u=c[0],l=c[1],s=r.top,d=r.left,f=r.width,p=r.height,h=r.points,m=JSON.parse(h).map(function(e){return e.point}),v=(0,R.default)(m,2),g=(0,R.default)(v[0],2),y=g[0],b=g[1],w=(0,R.default)(v[1],2),S=w[0],E=w[1],C=[d-u,s-l],_=[C[0]+S*f,C[1]+E*p],x=N([C[0]+y*f,C[1]+b*p],-n),k=N(_,-n),M=[o+x[0],i+x[1]],T=[o+k[0],i+k[1]]
return O(M,T)}
var O=function(e,t){var n=(0,R.default)(e,2),r=n[0],a=n[1],o=(0,R.default)(t,2),i=o[0],c=o[1],u=Math.min(a,c),l=Math.min(r,i),s=Math.abs(i-r),d=Math.abs(c-a),f=[[0===s?.5:(r-l)/s,0===d?.5:(a-u)/d],[0===s?.5:(i-l)/s,0===d?.5:(c-u)/d]].map(function(e){return{point:e}})
return{top:Math.round(u),left:Math.round(l),width:Math.max(Math.round(s),1),height:Math.max(Math.round(d),1),points:JSON.stringify(f)}}
t.getLineAttrsAsWidget=O
t.getLineAttrsAfterRotate=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,r=x(t),a=e.top,o=e.left,i=e.width,c=e.height,u=e.points,l=JSON.parse(u).map(function(e){return e.point}),s=(0,R.default)(l,2),d=(0,R.default)(s[0],2),f=d[0],p=d[1],h=(0,R.default)(s[1],2),m=h[0],v=h[1],g=_(e).length,y=[o+i*f,a+c*p],b=[o+i*m,a+c*v],w=[y[0]+(b[0]-y[0])*n,y[1]+(b[1]-y[1])*n],S=[y[0]+g*Math.cos(r),y[1]+g*Math.sin(r)],E=[y[0]+(S[0]-y[0])*n,y[1]+(S[1]-y[1])*n],C=[w[0]-E[0],w[1]-E[1]]
return O([y[0]+C[0],y[1]+C[1]],[S[0]+C[0],S[1]+C[1]])}
t.lineIsParallelWithAxis=function(e){var t=(0,R.default)(e,2),n=(0,R.default)(t[0],2),r=n[0],a=n[1],o=(0,R.default)(t[1],2),i=o[0],c=o[1]
return.5===r&&.5===i||.5===a&&.5===c}},QILm:function(e,t,n){var i=n("8OQS")
e.exports=function(e,t){if(null==e)return{}
var n,r,a=i(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},QIyF:function(e,t,n){var r=n("Kz5y")
e.exports=function(){return r.Date.now()}},QdB0:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=i.find(function(e){var t=e.checker
return t()})
return e?e.info:null}
var a=r(n("ThAd")),o={info:{name:"lisankebook",desc:"李三科送给你的专属福利，现在注册墨刀即可享受一个月个人版会员",successTip:"注册成功，恭喜你获得墨刀一个月个人版会员"},checker:function(){return(0,a.default)().utm_source===o.info.name}},i=[o]},QlAn:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalAttributes=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),m=r(n("q1tI")),o=n("/MKj"),p=a(n("17x9")),h=n("6XO9"),v=a(n("i6OX")),g=n("RUem"),y=n("XrEr"),b=n("/5+U"),w=a(n("mfFm")),S=a(n("UbMB")).default.bind(w.default),E=function(){return m.default.createElement("div",null,"Error in GlobalAttributes")},C=function(e){function o(){var e,n;(0,i.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(n)),"handleDelColor",function(e){var t=(0,b.delRecentColor)((0,y.getColorFromUnit)(e,"rgba"))
n.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:t}}),MB.event("删除了自选颜色","运行页")}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleClick",function(e){var t=e.target.dataset.clickReason
t&&MB.event("复制".concat(t),"运行页")}),n}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentDidCatch",value:function(e,t){return console.log(e,t),m.default.createElement(E,null)}},{key:"render",value:function(){var e=this.props,t=e.adapterWidth,n=e.adapterHeight,r=e.screenColor,a=void 0===r?[]:r,o=e.documentColor,i=void 0===o?[]:o,c=e.globalText,u=void 0===c?[]:c,l=e.globalColor,s=void 0===l?[]:l,d=e.userPickColor,f=void 0===d?[]:d,p=e.colorUnit,h=i.concat(s)
return m.default.createElement("div",{className:S("global-attributes"),onClick:this.handleClick},m.default.createElement("div",{className:S("container","global-layer")},m.default.createElement(g.Base,{title:I18N.preview_panel.size,dataValue:[I18N.preview_panel.width,I18N.preview_panel.height],data:[t,n]})),m.default.createElement(g.WrapComponent,null,I18N.preview_panel.color_title,m.default.createElement(k,{title:I18N.preview_panel.pick_color,handleDelColor:this.handleDelColor,colorBlockMap:f,colorUnit:p,
canDel:!0}),m.default.createElement(x,{title:I18N.preview_panel.screen_color,handleDelColor:this.handleDelColor,colorBlockMap:a,colorUnit:p}),m.default.createElement(x,{title:I18N.preview_panel.sketch_color,handleDelColor:this.handleDelColor,colorBlockMap:h,colorUnit:p,fromSketch:!0})),0<u.length&&m.default.createElement(g.WrapComponent,null,I18N.preview_panel.font_title,m.default.createElement(_,{globalText:u})))}}]),o}(m.PureComponent);(t.GlobalAttributes=C).propTypes={
adapterWidth:p.default.string.isRequired,adapterHeight:p.default.string.isRequired,colorUnit:p.default.string.isRequired,screenColor:p.default.array,userPickColor:p.default.array,documentColor:p.default.array,globalText:p.default.array,globalColor:p.default.array,dispatch:p.default.func}
var _=function(e){return e.globalText.map(function(e){return m.default.createElement(g.Base,{key:e,className:"global-font",data:[e]})})}
_.propTypes={globalText:p.default.array}
var x=function(e){var a=e.title,t=e.colorBlockMap,o=e.fromSketch,i=e.handleDelColor,c=e.canDel,u=e.colorUnit,l=e.focusColor
return m.default.createElement("div",null,m.default.createElement("span",{className:"second-title"},a),m.default.createElement("div",{className:"panel-row"},t.length?t.map(function(e,t){var n=M(o,e,"rgba"),r=(0,y.getColorFromUnit)(n,u)
return m.default.createElement(T,{key:"".concat(t).concat(e),canDel:c,title:a,handleDelColor:i,color:r,rgbaColor:n,colorUnit:u,focusColor:l})}):m.default.createElement(R,null)))}
x.propTypes={title:p.default.string.isRequired,colorBlockMap:p.default.array.isRequired,handleDelColor:p.default.func.isRequired,fromSketch:p.default.bool,canDel:p.default.bool,colorUnit:p.default.string,focusColor:p.default.string}
var k=(0,o.connect)(function(e){var t=e.container.previewSetting
return{userPickColor:t.userPickColor,focusColor:t.focusColor}})(x),M=function(e,t,n){return(0,y.getColorFromUnit)(e?(0,y.parseSketchColor2rgba)(t):t,n)},T=function(e){var t=e.color,n=e.rgbaColor,r=e.colorUnit,a=(e.index,e.handleDelColor),o=e.canDel,i=e.title,c=e.focusColor,u=t===(0,y.getColorFromUnit)(c,r)
return m.default.createElement(h.Dropdown,{shouldOpenOnHover:!0,className:S("color-dropdown",{"is-focus":u}),opener:m.default.createElement(h.Tooltip,{arrowed:!1,"data-type":"copy","data-click-reason":i,"data-clipboard-text":t,className:"row-item color-block",style:{background:n},duration:1e3,content:{click:I18N.preview_panel.copied}}),inflexible:!0,arrowed:!0,menuX:"left",menuY:"top",menu:m.default.createElement(N,{color:t,rgbaColor:n,canDel:o,handleDelColor:a}),menuClassName:(0,h.trimList)([
"palette-dropdown-menu",r])})}
T.propTypes={color:p.default.string.isRequired,title:p.default.string,handleDelColor:p.default.func,index:p.default.number,colorUnit:p.default.string,rgbaColor:p.default.string,canDel:p.default.bool,focusColor:p.default.string}
var R=function(){return m.default.createElement("div",{className:"forbid-color"},m.default.createElement("div",{className:"transparent"}))},N=function(e){function o(){var e,r;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a]
return r=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(r)),"handleClick",function(e){var t=r.props,n=t.rgbaColor;(0,t.handleDelColor)(n)}),r}return(0,s.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.canDel
return m.default.createElement("div",null,m.default.createElement("span",null,t),n&&m.default.createElement(v.default,{type:"dora",name:"trash",className:"trash",onClick:this.handleClick}))}}]),o}(m.PureComponent)
N.propTypes={color:p.default.string.isRequired,rgbaColor:p.default.string,handleDelColor:p.default.func.isRequired,canDel:p.default.bool}},QoRX:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0
return!1}},QqLw:function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},"R/W3":function(e,t){e.exports=function(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r
return-1}},RJdT:function(e,t,n){"use strict"
var r=n("xI34"),a=n("aFF0"),o=n("t77w"),i=n("Clcl")
window.MB=window.MB||{},MB.widgetMigrator=r.widgetMigrator,MB.panelMigrator=r.panelMigrator,MB.setScreenStateGlobally=a.setScreenStateGlobally,MB.saveWidgetByDefaultState=a.saveWidgetByDefaultState,Widget.refreshWidgetAfterDecompress=function(e,t){var r=[]
return e.forEach(function(t){var n=(0,o.decompressRichText)(t)
if("rich_text"===t.name)try{JSON.parse(n.text)}catch(e){return(0,i.REPORT_ERROR)(e,t.cid,t.text,n.text),void new Widget(n).ldestroy()}r.push(n)}),Widget.refresh.call(this,r,t)},Widgetstate.refreshWidgetstateAfterDecompress=function(e,t){var r=[]
return e.forEach(function(t){var n=(0,o.decompressRichText)(t)
if("rich_text"===t.name)try{JSON.parse(n.text)}catch(e){return(0,i.REPORT_ERROR)(e,t.cid,t.text,n.text),void new Widgetstate(n).ldestroy()}r.push(n)}),Widgetstate.refresh.call(this,r,t)}},RNpe:function(e,t,n){var r=n("87hQ")
function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(e,t){if(l.exec(e))return e
var n,r,a=(n=l.exec(t)||[""],r=1,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}())[0],o="/"!==e[0]?u(t.split("/").slice(0,-1)).concat(u(e.split("/"))):[a.slice(0,-1)].concat(u(e.split("/").slice(1))),i=[]
return o.forEach(function(e){return".."===e?i.pop():i.push(e)}),i.join("/")}
t.getAbsoluteUrl=a
var l=/((https?:)?\/\/)?[-\w@:%._+~#=]{2,256}\.[a-z]{2,63}(:\d{1,5})?\//,m=function(e,t){if(e.startsWith("data:"))return e
if(e.startsWith("blob:"))return(0,r.fetchDataUrlWithCache)(e)
t&&(e=a(e,t))
var n=i.exec(e)
return n&&d[n[1].toLowerCase()]?(0,r.fetchDataUrlWithCache)(e):""}
t.convertDataUrl=m
var o,s,i=/\.([0-9a-z]{3,5})(?:[?#]|$)/i,d={woff2:"font/woff2",woff:"font/woff",ttf:"font/ttf",otf:"font/otf",svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",ico:"image/x-icon"},f=(s=regeneratorRuntime.mark(function e(t){var n,r,a,o,i,c,u,l,s,d,f,p
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.urlMap,r=void 0===n?{}:n,a=t.fragList,o=void 0===a?[]:a,i=Object.values(r),c=0
case 3:if(!(c<i.length)){e.next=20
break}if(u=i[c],l=u.urlString,s=u.originUrl,!u.isIgnore){e.next=10
break}e.t0=l,e.next=16
break
case 10:return e.next=12,m(l,s)
case 12:if(e.t1=e.sent,e.t1){e.next=15
break}e.t1=""
case 15:e.t0=e.t1
case 16:u.dataUrl=e.t0
case 17:c++,e.next=3
break
case 20:for(d=0,f=o.length;d<f;d++)"object"===h(p=o[d])&&(o[d]=p.dataUrl)
return e.abrupt("return",o)
case 22:case"end":return e.stop()}},e,this)}),o=function(){var e=this,i=arguments
return new Promise(function(t,n){var r=s.apply(e,i)
function a(e){c(r,t,n,a,o,"next",e)}function o(e){c(r,t,n,a,o,"throw",e)}a(void 0)})},function(e){return o.apply(this,arguments)})
t.convertFragListWithUrlMap=f},RUem:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Base",{enumerable:!0,get:function(){return r.Base}}),Object.defineProperty(t,"ColorInfo",{enumerable:!0,get:function(){return a.ColorInfo}}),Object.defineProperty(t,"TextLayerInfo",{enumerable:!0,get:function(){return o.TextLayerInfo}}),Object.defineProperty(t,"BasicAttributes",{enumerable:!0,get:function(){return i.BasicAttributes}}),Object.defineProperty(t,"GlobalAttributes",{enumerable:!0,get:function(){return c.GlobalAttributes}})
,Object.defineProperty(t,"CodeBox",{enumerable:!0,get:function(){return u.CodeBox}}),Object.defineProperty(t,"ImageInfo",{enumerable:!0,get:function(){return l.ImageInfo}}),Object.defineProperty(t,"CopyBtn",{enumerable:!0,get:function(){return s.CopyBtn}}),Object.defineProperty(t,"Shadows",{enumerable:!0,get:function(){return d.Shadows}}),Object.defineProperty(t,"Fills",{enumerable:!0,get:function(){return d.Fills}}),Object.defineProperty(t,"LayerName",{enumerable:!0,get:function(){return d.LayerName}}),
Object.defineProperty(t,"BorderInfo",{enumerable:!0,get:function(){return d.BorderInfo}}),Object.defineProperty(t,"Loading",{enumerable:!0,get:function(){return d.Loading}}),Object.defineProperty(t,"WrapComponent",{enumerable:!0,get:function(){return d.WrapComponent}})
var r=n("Iusu"),a=n("Ij3M"),o=n("wQP3"),i=n("LVRM"),c=n("QlAn"),u=n("bekf"),l=n("1Uxz"),s=n("h9XN"),d=n("WyLE")},Ro3d:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transfromProptype=void 0
var D=r(n("lSNA")),a=n("XrEr"),B=n("qOCw")
t.transfromProptype=function(e){var t=e.attr,n=e.language,r=e.unit,a=(0,B.selectWithlanguageUnit)(n),o=t.width,i=t.height,c=t.lineHeight,u=t.opacity,l=t.borderRadius,s=t.borderWidth,d=t.borderColor,f=t.backgroundColor,p=t.color,h=t.fontSize,m=t.fontFamily,v=t.fontStyle,g=t.boxShadow,y=t.textAlign,b=t.x,w=t.y,S=b&&(0,D.default)({},F[a].x,U(b,r,a)),E=w&&(0,D.default)({},F[a].y,U(w,r,a)),C=o&&(0,D.default)({},F[a].width,U(o,r,a)),_=i&&(0,D.default)({},F[a].height,U(i,r,a)),x=c&&(0,D.default)({},F[a].lineHeight
,U(c,r,a)),k=u&&(0,D.default)({},F[a].opacity,U(u,r,a)),M=l&&(0,D.default)({},F[a].borderRadius,U(l,r,a)),T=f&&(0,D.default)({},F[a].backgroundColor,U(f,r,a,!0)),R=p&&(0,D.default)({},F[a].color,U(p,r,a,!0)),N=h&&(0,D.default)({},F[a].fontSize,U(h,r,a)),O=m&&(0,D.default)({},F[a].fontFamily,U(m,r,a)),I=v&&(0,D.default)({},F[a].fontStyle,U(v,r,a)),P=g&&(0,D.default)({},F[a].shadows,g),A=s&&(0,D.default)({},F[a].borderWidth,U(s,r,a)),L=d&&(0,D.default)({},F[a].borderColor,U(d,r,a,!0)),j=y&&(0,D.default)({},
F[a].textAlign,y)
return Object.assign({},S,E,C,_,x,k,M,A,L,T,R,N,I,j,P,O)}
var U=function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3]
return e=e.toString(),"pt"!==n?e.replace(t,n):r?(0,a.getUIColor)(e):e.replace(t,"")},F={px:{x:"left",y:"top",width:"width",height:"height",lineHeight:"line-height",opacity:"opacity",border:"border",borderRadius:"border-radius",borderColor:"border-color",borderWidth:"border-width",backgroundColor:"background-color",color:"color",fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",textAlign:"text-align",shadows:"box-shadow",innerShadows:"inner-shadow"},dp:{x:"left",y:"top",
width:"layout_width",height:"layout_height",border:"border",opacity:"opacity",color:"textColor",fontSize:"textSize",fontFamily:"font-family",fontStyle:"font-style",textAlign:"gravity",backgroundColor:"background",borderRadius:"radius",borderColor:"border-color",lineHeight:"line-height",borderWidth:"border-width",shadows:"box-shadow",innerShadows:"inner-shadow"},pt:{x:"x",y:"y",width:"width",height:"height",opacity:"opacity",border:"border",backgroundColor:"backgroundColor",color:"text-color",
textAlign:"alignment",fontSize:"fontSize",fontFamily:"fontFamily",fontStyle:"font-style",borderRadius:"cornerRadius",borderColor:"borderColor",borderWidth:"border-width",lineHeight:"lineSpacing"}}},RrAf:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createSocketStore=t.initialSocketState=void 0
var l=r(n("MVZn")),s=r(n("o0o1")),d=r(n("yXPU")),f=n("DR1i"),p=n("os03"),h=n("LPEl"),m=function(){},v=function(e){console.error("ERROR",e)},g={userSocket:null}
t.initialSocketState=g
t.createSocketStore=function(){var n,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:g,e=(0,p.createEventTarget)(),r=e.clear,a=e.addEventListener,o=e.removeEventListener,i=e.dispatchEvent,c=(0,h.createStateStore)(t),u=function(){var e=c.getState().userSocket
e&&e.close(),r(),n=Promise.resolve("HEAD"),c.setState(t)}
return(0,l.default)({},c,{clear:u,queueAsync:function(e){var t=n.then(e)
return n=t.then(m,v),t},getIsOpen:function(){var e=c.getState().userSocket
return Boolean(e&&e.connected)},getServerTimestamp:function(){var e=c.getState().userSocket
return e?e.getServerTimestamp():Date.now()},openSocket:function(e){var t=e.userId
u(),t||console.warn("[SocketStore][openSocket] use dummy socket")
var n,r=t?(0,f.createUserSocket)({userId:t,socketUrl:location.origin,socketPath:"/imock-socket"}):{DUMMY_SOCKET:"DUMMY_SOCKET",connected:!1,close:function(){},on:function(){},emitAsync:(n=(0,d.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),getServerTimestamp:function(){return.001*Date.now()}}
r.on("error",function(e){console.log("socket error",e)}),r.on("connect",(0,d.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("user socket connected"),e.next=3,r.calibrateTimestampOffsetAsync()
case 3:i({type:"socket:open",payload:{userSocket:r}}),console.log("user socket open")
case 6:case"end":return e.stop()}},e,this)}))),c.setState({userSocket:r})},dispatchEvent:i,addEventListener:a,removeEventListener:o})}},RtVw:function(e,t,n){e.exports={fullscreen:"_3YRMjyxR7LqBuoCfeQbKFK"}},S7Zs:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchArtboardsByProjectCid=void 0
var r=n("t3Un")
t.fetchArtboardsByProjectCid=function(e){return window.MBArtboards?{artboards:Object.values(window.MBArtboards).map(function(e){return e.artboard})}:(0,r.requestJSON)("".concat("/api/v2/projects/").concat(e,"/artboards.json"))}},S8MF:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var y=a(n("RIqP")),o=a(n("o0o1")),c=a(n("yXPU")),u=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),b=r(n("q1tI")),h=a(n("17x9")),w=n("rbsZ"),m=n("t3Un"),v=n("XkTy"),S=n("Gbs1"),E=n("1iCU"),C=n("6XO9"),_=a(n("PYuP"))
n("cWnZ")
var g=window.MBServer,x="file:"===location.protocol?"https://".concat(g):"https://".concat(location.host),k=[{value:"highlight",label:I18N.highlight_clickable},{value:"wechat",label:I18N.view_in_browser}],M=function(e){function t(e){var i
return(0,u.default)(this,t),i=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(i)),"updateEmbeddedHTML",function(){var o=i.props.app
if(o.homeScreen()){var e=(0,S.getProjectShellSizeWithOrientation)(o,o.shell_type,o.homeScreen().orientation),t=80+e.width,n=80+e.height
i.setState({embeddedHTML:'<iframe src="'.concat(x,"/app/").concat(o.access_token,'/embed" ')+'width="'.concat(t,'" height="').concat(n,'" ')+'allowTransparency="true" frameborder="0"></iframe>'})}else(0,m.requestJSON)("/api/v2/projects/orientations.json",{}).then(function(e){var t=e.projects.find(function(e){return e.cid===o.cid}).orientation,n=(0,S.getProjectShellSizeWithOrientation)(o,o.shell_type,t),r=80+n.width,a=80+n.height
i.setState({embeddedHTML:'<iframe src="'.concat(x,"/app/").concat(o.access_token,'/embed" ')+'width="'.concat(r,'" height="').concat(a,'" ')+'allowTransparency="true" frameborder="0"></iframe>'})})}),(0,p.default)((0,f.default)((0,f.default)(i)),"setQRCodeRef",function(e){return i.$qrcode=e}),(0,p.default)((0,f.default)((0,f.default)(i)),"refreshQRCode",function(){return $(i.$qrcode).empty().qrcode({text:i.state.sharingURL+"?via=qrcode",width:100,height:100})}),(0,p.default)((0,f.default)((0,f.default)(i)),
"handleSelectAll",function(e){return e.target.select()}),(0,p.default)((0,f.default)((0,f.default)(i)),"generateSharingURL",function(e){return i.setState({sharingURL:"https://".concat(MB.isHTMLZip()?window.MBServer:location.host,"/app/").concat(e)})}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleRefresh",(0,c.default)(o.default.mark(function e(){var t
return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.confirmAsync)({title:I18N.regenerate_url_title,desc:I18N.regenerate_url_desc})
case 2:if(!e.sent){e.next=6
break}t=Math.uuid(31),i.generateSharingURL(t),i.setAttr("access_token",t)
case 6:case"end":return e.stop()}},e,this)}))),(0,p.default)((0,f.default)((0,f.default)(i)),"handleUpdateShell",function(e){var t=i.props.app
t.shell_type=e,t.lsave(MB.user.id===t.owner_id),MB.AutoSaver&&MB.AutoSaver.triggerSave(),i.props.dispatch({type:"entry:preview-setting:update:shell-type",payload:{shellType:t.shell_type}}),i.forceUpdate()}),(0,p.default)((0,f.default)((0,f.default)(i)),"handlePasswordChange",function(e){return i.setAttr("password",e)}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleAccess",function(e){var t=e.value
"restricted"===t&&(i.props.app.password=""),i.setAttr("access",t)}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleCollaborators",function(){i.setState({isCollaboratorModalOpen:!0})}),(0,p.default)((0,f.default)((0,f.default)(i)),"handlePreviewSettings",function(e){var t=e.idxList,n=i.props.app,r=new Set(t)
Object.assign(n,{highlight:r.has(0),wechat:r.has(1)}),n.lsave(),MB.AutoSaver&&MB.AutoSaver.triggerSave(),i.props.dispatch({type:"entry:preview-setting:update:is-highlight",payload:{isHighlight:n.highlight}}),i.forceUpdate()}),(0,p.default)((0,f.default)((0,f.default)(i)),"handleSlackWebHook",function(e){return i.setAttr("slack_web_hook_url",e.target.value)}),(0,p.default)((0,f.default)((0,f.default)(i)),"onCloseCollaboratorModal",function(){return i.setState({isCollaboratorModalOpen:!1})}),i.state={
sharingURL:"",embeddedHTML:"en"===window.MBLocale?"generating code…":"正在生成…",isCollaboratorModalOpen:!1},i}return(0,d.default)(t,e),(0,i.default)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props.app
this.generateSharingURL(e.access_token)}},{key:"componentDidMount",value:function(){this.updateEmbeddedHTML(),setTimeout(this.refreshQRCode,50)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.app,n=e.isOpen,r=this.props.isOpen
r&&!n?(this.setState({sharingURL:"",embeddedHTML:"en"===window.MBLocale?"generating code…":"正在生成…"}),$(this.$qrcode).empty()):!r&&n&&(this.updateEmbeddedHTML(),this.generateSharingURL(t.access_token))}},{key:"componentDidUpdate",value:function(e,t){var n=e.isOpen,r=t.sharingURL,a=this.props.isOpen,o=this.state.sharingURL;(!n&&a||r!==o)&&setTimeout(this.refreshQRCode,50)}},{key:"setAttr",value:function(e,t){this.props.app[e]=t,this.props.app.lsave(),MB.AutoSaver&&MB.AutoSaver.triggerSave(),this.forceUpdate()
}},{key:"render",value:function(){var e=this.props,t=e.isOpen,n=e.onClose,r=e.app,a=e.dispatch,o=this.state,i=o.sharingURL,c=o.embeddedHTML,u=o.isCollaboratorModalOpen,l=/edge.modao.cc/.test(location.href),s=r.owner_id===MB.user.id,d=s||r.canAdmin(),f=s||r.canEdit(),p=!/^\/app\//i.test(location.pathname),h=[{value:"restricted",label:b.default.createElement("span",{className:"restricted-access"},b.default.createElement("span",null,I18N.restricted_intro),"restricted"===r.access&&b.default.createElement(
C.Button,{type:"text",className:"manage-collaborators",onClick:this.handleCollaborators},I18N.manage))},{value:"private",label:b.default.createElement("span",null,I18N.private_intro,b.default.createElement("p",null,"private"===r.access&&(MB.user.id&&MB.user.limitation.encryptable?b.default.createElement(C.Input,{placeholder:I18N.sharing_password,value:r.password||"",onChange:this.handlePasswordChange,readOnly:!d}):b.default.createElement(C.Button,{type:"text",className:"renew",onClick:w.goToPricingPage},
I18N.password_protection))))}],m=k.reduce(function(e,t,n){return r[t.value]?(0,y.default)(e).concat([t.value]):e},[]),v=r.team_cid?r.cteam():r,g=(0,S.canSetDeviceShell)(r)?E.SHELL_TYPE_LIST:E.SHELL_TYPE_LIST_WITHOUT_DEVICE
return b.default.createElement(C.Modal,{isOpen:t,className:"sharing-modal",title:I18N.share,onClose:n},b.default.createElement("section",{className:"qrcode",ref:this.setQRCodeRef}),b.default.createElement("section",{className:"sharing-url"},b.default.createElement(C.Input,{readOnly:!0,value:i,onClick:this.handleSelectAll}),d&&b.default.createElement(C.Button,{type:"primary",onClick:this.handleRefresh},I18N.regenerate)),b.default.createElement("section",{className:"sharing-code"},b.default.createElement("p",
null,I18N.embed_tips),b.default.createElement(C.Textarea,{readOnly:!0,onClick:this.handleSelectAll,value:c})),p&&b.default.createElement("section",null,b.default.createElement(C.FormEntry,{name:I18N.access_permission},b.default.createElement(C.RadioGroup,{isDisabled:!d,optionList:h,onChange:this.handleAccess,value:r.access}))),f&&b.default.createElement("section",null,b.default.createElement(C.FormLabel,{name:I18N.default_shell_field},b.default.createElement(C.Select,{optionList:g,value:r.shell_type,
onChange:this.handleUpdateShell}))),d&&b.default.createElement("section",null,b.default.createElement(C.FormEntry,{name:I18N.preview_settings},b.default.createElement(C.CheckGroup,{optionList:k,onChange:this.handlePreviewSettings,valueList:m}))),l&&b.default.createElement(C.FormEntry,{name:"Slack Web Hook"},b.default.createElement("input",{type:"text",value:r.slack_web_hook_url||"",onBlur:this.handleSlackWebHook})),b.default.createElement(_.default,{isOpen:u,onClose:this.onCloseCollaboratorModal,dispatch:a,
host:v,userRole:v.owner_id===MB.user.id?"owner":v.roleByUid(MB.user.id)}))}}]),t}(b.PureComponent)
t.default=M,(0,p.default)(M,"propTypes",{dispatch:h.default.func.isRequired,isOpen:h.default.bool,onClose:h.default.func,app:h.default.object})},"SA+Z":function(e,t,n){var r=n("wTVA"),a=n("EbDI"),o=n("wkBT")
e.exports=function(e){return r(e)||a(e)||o()}},SFPg:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var C=a(n("pVnL")),_=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),x=r(n("q1tI")),k=a(n("vmbo")),M=n("/5+U"),f=function(e){function E(){return(0,o.default)(this,E),(0,c.default)(this,(0,u.default)(E).apply(this,arguments))}return(0,l.default)(E,e),(0,i.default)(E,[{key:"render",value:function(){var e=this.props,t=e.layer,n=e.parentRect,r=e.treeProps,a=t.width,o=t.height,i=t.top,c=t.left,u=t.z,l=t.childrenLayers
if(!1===t.v)return null
var s="layer"===t.kind?0:t.rotation||0,d=(0,M.getMinBoundingRect)({width:a,height:o,rotate:s,top:i,left:c}),f=(0,_.default)(d,4),p=f[0],h=f[1],m=f[2],v=f[3],g={top:i,left:c,width:a,height:o},y=h,b=m,w=v,S={top:(p-n.top)/n.height*100+"%",left:(y-n.left)/n.width*100+"%",width:b/n.width*100+"%",height:w/n.height*100+"%",zIndex:u||0}
return x.default.createElement("div",{"data-id":t.id,className:"layer-tree-node",style:S},x.default.createElement(k.default,(0,C.default)({layer:t},r)),l&&0<l.length&&l.map(function(e){return x.default.createElement(E,{key:e.id,layer:e,parentRect:g,treeProps:r})}))}}]),E}(x.Component)
t.default=f,(0,s.default)(f,"propTypes",{layer:d.default.object,parentRect:d.default.object,treeProps:d.default.object})},Sxd8:function(e,t){e.exports=function(e){return e}},T7iu:function(e,t,n){"use strict"
n("edRh"),n("Xgir"),n("fRjM"),n("4MIG"),n("rXnp"),n("HLqo"),n("2rXa"),n("dSX7")},TKrE:function(e,t){e.exports=function(e){return e}},TSYQ:function(e,t,n){var r
!function(){"use strict"
var i={}.hasOwnProperty
function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t]
if(n){var r=typeof n
if("string"===r||"number"===r)e.push(n)
else if(Array.isArray(n)&&n.length){var a=c.apply(null,n)
a&&e.push(a)}else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}void 0!==e&&e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},TZdj:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Comment,o=(0,r.createStateStore)([]),i=o.getState,c=o.setState,u=o.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:comments:update",payload:o(e,a,i)})})},s={entryMap:{"comments:refresh":l(a.refreshStateList,!1),"comments:add":l(a.addState,!1),"comments:add-local":l(a.addState,!0),"comments:update":l(a.updateState,!1),"comments:update-local":l(a.updateState,!0),"comments:delete":l(a.deleteState,!1),"comments:delete-local":l(a.deleteState,!0)},getState:i,setState:c}
t.default=s},ThAd:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=location.search
0===e.indexOf("?")&&(e=e.substr(1))
var o={}
return e.split("&").forEach(function(e){var t=e.split("="),n=(0,i.default)(t,2),r=n[0],a=n[1]
r&&(o[r]=!a||decodeURIComponent(a))}),o}
var i=r(n("J4zp"))},UJpD:function(e,t,n){e.exports={detector:"p677pQqCIRS-SsEhJWgV4"}},UZR7:function(e,t,n){},UbMB:function(e,t,n){var r
!function(){"use strict"
var o={}.hasOwnProperty
function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t]
if(n){var r=typeof n
if("string"===r||"number"===r)e.push(this&&this[n]||n)
else if(Array.isArray(n))e.push(i.apply(this,n))
else if("object"===r)for(var a in n)o.call(n,a)&&n[a]&&e.push(this&&this[a]||a)}}return e.join(" ")}void 0!==e&&e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},UfWW:function(e,t,n){var o=n("KwMD"),i=n("ut/Y"),c=n("Sxd8"),u=Math.max
e.exports=function(e,t,n){var r=null==e?0:e.length
if(!r)return-1
var a=null==n?0:c(n)
return a<0&&(a=u(r+a,0)),o(e,i(t,3),a)}},Ur7v:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=n("6XO9"),m=a(n("i6OX")),v=a(n("S8MF")),g=function(e){function t(){var e
return(0,o.default)(this,t),e=(0,c.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(e)),"handleShare",function(){e.setState({isSharingModalOpen:!0}),MB.event("点击了分享按钮","运行页")}),(0,d.default)((0,s.default)((0,s.default)(e)),"onCloseSharingModal",function(){return e.setState({isSharingModalOpen:!1})}),e.state={isSharingModalOpen:!1},e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.dispatch,t=this.state.isSharingModalOpen
return p.default.createElement(h.Tooltip,{position:"bottom",duration:1e3,content:{hover:I18N.preview.share},tipClassName:"marign-top-20"},p.default.createElement(m.default,{type:"dora",name:"share",className:"share-icon",onClick:this.handleShare}),p.default.createElement(v.default,{dispatch:e,isOpen:t,onClose:this.onCloseSharingModal,app:MB.project()}))}}]),t}(p.PureComponent);(t.default=g).propTypes={dispatch:f.default.func}},Vk5q:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.onFallbackError=t.doFallbackSaveItem=t.onSocketError=t.doSocketBatchSave=t.getSaveItemInfo=t.processSaveQueue=void 0
var s=r(n("o0o1")),a=r(n("yXPU")),u=n("t77w"),d=n("os03"),f=n("ycqN"),p=window.MB
t.processSaveQueue=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r={},a=[]
e.forEach(function(e){var t=e.record,n="".concat(t.constructor.className,"-").concat(t.cid)
void 0===r[n]&&(r[n]=a.length),a[r[n]]=e})
var n=new Set
a.forEach(function(e){var t=e.record
return e.isDelete&&["Widget","Panel"].includes(t.constructor.className)&&n.add(t.cid)})
var t=a.filter(function(e){var t=e.record
return!("Widgetstate"===t.constructor.className&&n.has(t.widget_cid)||"Panelstate"===t.constructor.className&&n.has(t.panel_cid))})
return t.map(function(e){var t=e.record,n=e.isDelete,r=t.constructor.className,a=n?"DELETE":"Asset"===r?"POST":"PUT",o="POST"===a?"/".concat(r.toLowerCase(),"s"):"/".concat(r.toLowerCase(),"s/").concat(encodeURIComponent(t.id)),i=JSON.stringify("DELETE"===a?{cid:t.cid,mtime:t.mtime}:(0,u.compressRichText)(t.toJSON())),c={className:r,cid:t.cid}
return"Panel"===r&&Template.find(t.template_cid),{url:o,method:a,body:i,extraInfo:c}})}
t.getSaveItemInfo=function(e){var t=e.url,n=e.method,r=e.body
return JSON.stringify({url:t,method:n,bodyLength:r?r.length:0})}
var o=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.saveChunk,t.attempt,t.timeout,r=p.project()?p.project().template?p.project().project_cid:p.project().cid:"",a={id:p.user.id,name:p.user.name,avatar:p.user.avatar},e.next=5,p.Pusher.requestBatchSave({batchSaveQueue:n,rootProjectCid:r,fromUser:a})
case 5:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doSocketBatchSave=o
var i=function(){var n=(0,a.default)(s.default.mark(function e(t,n){var r,a
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.saveChunk,n.attempt,a=n.timeout,t.message&&t.message.toLowerCase().includes("timeout"))return p.ga("send","event","batch-saving","batch saving timeout","(".concat(r.length,")(").concat(a,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=7,(0,d.setTimeoutAsync)(5e3)
e.next=9
break
case 7:e.next=12
break
case 9:return p.ga("send","event","batch-saving","batch saving error: ".concat(t.status),"[".concat(t.status,"] ").concat(t.message||t,": (").concat(r.length,"item|").concat(a,"ms)(").concat(p.user.email,")")),e.next=12,(0,f.SAVE_NUKE_SEQUENCE)(t,t.status)
case 12:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()
t.onSocketError=i
var c=function(){var t=(0,a.default)(s.default.mark(function e(t){var n,r,a,o,i,c,u,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.saveItem,r=n.url,a=n.method,o=n.body,i=t.attempt,c=t.timeout,e.next=3,(0,d.fetchLikeRequest)(r,{headers:{"Content-Type":"application/json"},method:a,body:o,timeout:c})
case 3:if(u=e.sent,200!==(l=u.status))return p.ga("send","event","saving","saving error: ".concat(l),"".concat(l,": ").concat(r,"(").concat(a,"|x").concat(i,"|").concat(c,"ms)(").concat(p.user.email,")")),e.next=9,(0,f.SAVE_NUKE_SEQUENCE)(new Error("fallback saving error: ".concat(l)),l)
e.next=9
break
case 9:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doFallbackSaveItem=c
var l=function(){var n=(0,a.default)(s.default.mark(function e(t,n){var r,a,o,i,c
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.saveItem,a=r.url,o=r.method,i=n.attempt,c=n.timeout,p.ga("send","event","saving","fallback saving error: ".concat(t.message||t),"".concat(t.message||t,": ").concat(a,"(").concat(o,"|x").concat(i,"|").concat(c,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=6,(0,d.setTimeoutAsync)(5e3)
case 6:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()
t.onFallbackError=l},WVP6:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
t.createReduxEntry=function(){var a=null,o={},n=function(e,t){if("string"!=typeof e)throw new Error("[ReduxEntry][setEntry] non-string actionType: "+e)
if("function"!=typeof t)throw new Error("[ReduxEntry][setEntry] non-function entryFunction: "+e+", "+t)
o[e]&&console.warn("[ReduxEntry][setEntry] possible unexpected entry overwrite: "+e),o[e]=t}
return{middleware:function(e){if("function"!=typeof e.getState||"function"!=typeof e.dispatch)throw new Error("[ReduxEntry][middleware] invalid reduxMiddlewareStore")
if(null!==a)throw new Error("[ReduxEntry][middleware] already set reduxMiddlewareStore")
return a=e,function(r){return function(e){return!0===((n=o[(t=e).type])&&n(a,t))||r(e)
var t,n}}},setEntry:n,setEntryMap:function(t){return Object.keys(t).forEach(function(e){return n(e,t[e])})}}},t.createStateStore=function(r){if(void 0===r)throw new Error("[ReduxEntry][createStateStore] initialState expected")
return{getState:function(){return r},setState:function(e){return r=e},wrapEntry:function(n){return function(e,t){return n(r,e,t)}}}},t.createStateStoreReducer=function(a,e){var o=e.getState,i=e.setState
return function(e,t){var n=t.type,r=t.payload
return n===a&&i(r),o()}},t.createStateStoreMergeReducer=function(a,e){var o=e.getState,i=e.setState
return function(e,t){var n=t.type,r=t.payload
return n===a&&i(c({},o(),r)),o()}}},WcC0:function(e,t,n){},WyLE:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.WrapComponent=t.Loading=t.BorderInfo=t.Shadows=t.GradientColor=t.Fills=t.LayerName=void 0
var y=r(n("q1tI")),a=r(n("17x9")),b=n("RUem"),o=r(n("mfFm")),i=r(n("UbMB")),w=n("/5+U"),S=n("XrEr"),c=i.default.bind(o.default),u=function(e){var t=e.value
return y.default.createElement("div",{className:"".concat(c("container")," ").concat(c("layer-name"))},y.default.createElement(b.Base,{title:I18N.preview_panel.layer_name,data:[t]}))};(t.LayerName=u).propTypes={value:a.default.string}
var l=function(e){var l=e.colorUnit,t=e.backgroundColorSort
return y.default.createElement(h,null,I18N.preview_panel.fills,t.map(function(e,t){var n=e.value,r=e.type,a=void 0===r?"color":r,o=e.opacity,i=e.gradient,c=(0,S.getNormalRgbaColor)(n),u=c&&(0,S.getColorFromUnit)(c,l)
return"color"===a?y.default.createElement(b.ColorInfo,{stateColor:u,rgbaColor:c,title:I18N.preview_panel.color,key:t}):y.default.createElement(f,{gradient:i,colorUnit:l,opacity:o,key:t})}))};(t.Fills=l).propTypes={backgroundColorSort:a.default.array,colorUnit:a.default.string}
var f=function(e){var t=e.gradient,n=t.color_stops,r=void 0===n?[]:n,a=(t.from,t.to,t.type),o=e.opacity,i=e.colorUnit
return y.default.createElement("div",null,0<r.length&&r.map(function(e,t){var n=e.color
e.position
return y.default.createElement("div",{key:"".concat(n).concat(t)},y.default.createElement(b.Base,{colorUnit:i,color:(0,S.getNormalRgbaColor)(n),title:0==t?I18N.preview_panel.gradient:""}))}),o&&y.default.createElement(b.Base,{title:I18N.preview_panel.opacity,data:["".concat(100*o,"%")]}),a&&y.default.createElement(b.Base,{data:[a],title:I18N.preview_panel.type}))};(t.GradientColor=f).propTypes={gradient:a.default.object.isRequired,opacity:a.default.number,colorUnit:a.default.string.isRequired}
var s=function(e){var t=e.shadows,n=void 0===t?[]:t,r=e.isInnerShaow,a=void 0!==r&&r,o=e.unit,i=e.ratio,c=e.colorUnit,u=e.textShadows,l=void 0===u?[]:u
return y.default.createElement(h,null,a?I18N.preview_panel.inner_shadow:I18N.preview_panel.shadow,0<n.length&&y.default.createElement(d,{shadows:n,unit:o,ratio:i,colorUnit:c}),0<l.length&&y.default.createElement(d,{shadows:l,unit:o,ratio:i,colorUnit:c}))};(t.Shadows=s).propTypes={shadows:a.default.array,textShadows:a.default.array,isInnerShaow:a.default.bool,unit:a.default.string.isRequired,ratio:a.default.number.isRequired,colorUnit:a.default.string.isRequired}
var d=function(e){var t=e.shadows,m=e.unit,v=e.ratio,g=e.colorUnit
return t.map(function(e,t){var n=e.color,r=e.offset_x,a=void 0===r?0:r,o=e.offset_y,i=void 0===o?0:o,c=e.blur_radius,u=void 0===c?0:c,l=e.spread,s=void 0===l?0:l,d=(0,w.adapterScreen)(a,v,m),f=(0,w.adapterScreen)(i,v,m),p=(0,w.adapterScreen)(u,v,m),h=(0,w.adapterScreen)(s,v,m)
return y.default.createElement("div",{className:"shadow-item-gap",key:t},n&&y.default.createElement(b.Base,{title:I18N.preview_panel.color,color:(0,S.getNormalRgbaColor)(n),colorUnit:g}),y.default.createElement(b.Base,{data:[d,f,p,h],dataValue:[I18N.preview_panel._x,I18N.preview_panel._y,I18N.preview_panel.blur,I18N.preview_panel.spread]}))})}
d.propTypes={shadows:a.default.array,unit:a.default.string,ratio:a.default.number,colorUnit:a.default.string}
var p=function(e){var l=e.colorUnit,t=e.borderSort,s=e.unit,d=e.ratio,n=e.isStroke
return y.default.createElement(h,null,n?I18N.preview_panel.stroke:I18N.preview_panel.borders,t.reverse().map(function(e,t){var n=e.position,r=void 0===n?"inside":n,a=e.color,o=e.thickness,i=e.gradient,c=a&&(0,S.getNormalRgbaColor)(a),u=o&&(0,w.adapterScreen)(o,d,s)
return[a?y.default.createElement(b.Base,{key:"".concat(t).concat(c),color:c,title:I18N.preview_panel.color,colorUnit:l}):y.default.createElement(f,{gradient:i,colorUnit:l}),r&&y.default.createElement(b.Base,{key:"".concat(t).concat(r),title:I18N.preview_panel.position,data:[r]}),u&&y.default.createElement(b.Base,{key:"".concat(t).concat(u),title:I18N.preview_panel.thickness,data:[u]})]}))};(t.BorderInfo=p).propTypes={isStroke:a.default.bool,borderSort:a.default.array.isRequired,
colorUnit:a.default.string.isRequired,unit:a.default.string.isRequired,ratio:a.default.number.isRequired}
t.Loading=function(){return y.default.createElement("div",{className:c("layer-load")},y.default.createElement("span",{className:c("spinner")}))}
var h=function(e){var t=e.children
return y.default.createElement("section",null,y.default.createElement("div",{className:c("header")},t[0]),y.default.createElement("div",{className:c("container")},t.slice(1)))};(t.WrapComponent=h).propTypes={children:a.default.array}},XKAG:function(e,t,n){var c=n("ut/Y"),u=n("MMmD"),l=n("7GkX")
e.exports=function(i){return function(e,t,n){var r=Object(e)
if(!u(e)){var a=c(t,3)
e=l(e),t=function(e){return a(r[e],e,r)}}var o=i(e,t,n)
return-1<o?r[a?e[o]:o]:void 0}}},Xgir:function(e,t,n){},XkTy:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.promptGetPasswordAsync=t.alertAsyncBlocked=t.alertAsyncWide=t.alertAsync=t.confirmAsync=void 0
var r=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText,o=e.cancelText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"alert",alertType:"confirm",canClose:!0,canCancel:!0,canConfirm:!0,cancelText:o,confirmText:a,onCancel:function(){return e(!1)},onConfirm:function(){return e(!0)}}})})}
t.confirmAsync=r
var a=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"alert",alertType:"alert",canClose:!0,canCancel:!1,canConfirm:!0,confirmText:a,onConfirm:function(){return e()}}})})}
t.alertAsync=a
t.alertAsyncWide=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"functional",alertType:"alert",canClose:!0,canCancel:!1,canConfirm:!0,confirmText:a,onConfirm:function(){return e()}}})})}
t.alertAsyncBlocked=function(e){var t=e.title,n=e.desc,r=e.isHTML,a=e.confirmText
return new Promise(function(e){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{title:t,desc:n,isHTML:r,type:"alert",alertType:"alert",canClose:!1,canCancel:!1,canConfirm:!0,confirmText:a,onConfirm:function(){return e()}}})})}
t.promptGetPasswordAsync=function(){return new Promise(function(t,n){return MB.webpackInterface.store.dispatch({type:"container:modal:open",payload:{type:"form",desc:I18N.credential_required,alertType:"prompt",canClose:!1,canCancel:!1,canConfirm:!0,onCancel:n,onConfirm:function(){var e=(document.querySelector(".global-alert-portal .prompt-pwd input")||{}).value
return e?t(e):n()}}})})},MB.confirmAsync=r,MB.alertAsync=a},XpKX:function(e,t,n){e.exports={"adjust-container":"_2767PBbPLOHyCg-9kbwJq7","is-offline-mode":"_2Rn4b7GJxlQ8HllhNCcowW","is-uichina":"VXUfuoQkv54ubWe5VFlrv"}},XrEr:function(module,exports,__webpack_require__){"use strict"
var _interopRequireDefault=__webpack_require__("TqRt")
Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEFAULT_COLOR=exports.getUIColor=exports.getColorFromUnit=exports.checkColorUnit=exports.parseSketchColor2rgba=exports.getNormalRgbaColor=exports.rgba2hexWithA=void 0
var _slicedToArray2=_interopRequireDefault(__webpack_require__("J4zp")),_round=_interopRequireDefault(__webpack_require__("tpxX")),_utils__=__webpack_require__("/5+U"),rgba2hexWithA=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2hexWithA"),e
var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d+)?)[\s+]?/i)
return t&&4<=t.length?{hex:("#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2)).toUpperCase(),o:Number((+t[4]).toFixed(2))}:e}
exports.rgba2hexWithA=rgba2hexWithA
var getNormalRgbaColor=function(e){if(!e)return DEFAULT_COLOR
var t=parseSketchColor2rgba(e)
return t?getColorFromUnit(t,RGBA):e}
exports.getNormalRgbaColor=getNormalRgbaColor
var parseSketchColor2rgba=function parseSketchColor2rgba(rgbaFuncStr){var colorType=checkColorUnit(rgbaFuncStr)
if(colorType!==RGBA)return getColorFromUnit(rgbaFuncStr,RGBA)
function rgba(){var e=arguments[0],t=arguments[1],n=arguments[2],r=arguments[3]
return e<=1&&t<=1&&n<=1?{r:parseInt((0,_round.default)(255*e),10),g:parseInt((0,_round.default)(255*t),10),b:parseInt((0,_round.default)(255*n),10),a:Number(Number(r).toFixed(2))}:{r:e,g:t,b:n,a:void 0===r?1:r}}var _eval=eval(rgbaFuncStr),r=_eval.r,g=_eval.g,b=_eval.b,a=_eval.a
return"rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")}
exports.parseSketchColor2rgba=parseSketchColor2rgba
var checkColorUnit=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:DEFAULT_COLOR
return e.includes(RGBA)?RGBA:e.includes(RGB)?RGB:e.includes("#")&&9===e.length?ARGB:e.includes("#")?HEX:!!e.includes(TRANSPARENT)&&TRANSPARENT}
exports.checkColorUnit=checkColorUnit
var getColorFromUnit=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:RGBA
if(!e)return DEFAULT_COLOR
var n=checkColorUnit(e)
if(!n)return DEFAULT_COLOR
switch(n){case RGBA:if(t===n)return e
if(t===RGB)return rgba2rgb(e)
if(t===HEX)return rgba2hex(e)
if(t===ARGB)return rgba2argb(e)
break
case RGB:if(t===n)return e
if(t===RGBA)return rgb2rgba(e)
if(t===HEX)return rgb2hex(e)
if(t===ARGB)return rgb2argb(e)
break
case HEX:if(t===n)return e
if(t===RGBA)return hex2rgba(e)
if(t===RGB)return hex2rgb(e)
if(t===ARGB)return hex2argb(e)
break
case ARGB:if(t===n)return e
if(t===RGBA)return argb2rgba(e)
if(t===RGB)return argb2rgbWithA(e)
if(t===HEX)return argb2hexWithA(e)
break
case TRANSPARENT:if(t===RGBA)return RGBA_FOR_TRANSPARENT
if(t===RGB)return rgba2rgb(RGBA_FOR_TRANSPARENT)
if(t===HEX)return rgba2hex(RGBA_FOR_TRANSPARENT)
if(t===ARGB)return rgba2argb(RGBA_FOR_TRANSPARENT)
break
default:return e}}
exports.getColorFromUnit=getColorFromUnit
var rgba2rgbWithA=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2rgbWithA"),e
var t=rgba2hexWithA(e),n=t.hex,r=t.o
return n?{rgb:hex2rgb(n),o:r}:DEFAULT_COLOR},hex2rgb=function(e){if(checkColorUnit(e)!==HEX)return console.warn("Not hexcolor but use hex2rgb"),e
if(3===(e=e.replace("#","")).length){var t=e.split(""),n=(0,_slicedToArray2.default)(t,3),r=n[0],a=n[1],o=n[2]
e="".concat(r).concat(r).concat(a).concat(a).concat(o).concat(o)}var i=parseInt(e.substring(0,2),16),c=parseInt(e.substring(2,4),16),u=parseInt(e.substring(4,6),16)
return"rgb(".concat(i,", ").concat(c,", ").concat(u,")")},rgba2rgb=function(e){var t=rgba2rgbWithA(e),n=t.rgb,r=t.o
return n?"".concat(n," ").concat(Math.round(100*r),"%"):e},rgba2hex=function(e){var t=rgba2hexWithA(e),n=t.hex,r=t.o
return n?"".concat(n.toUpperCase()," ").concat(Math.round(100*r),"%"):e},rgba2argb=function(e){if(checkColorUnit(e)!==RGBA)return console.warn("Not rgbacolor but use rgba2argb"),e
var t=rgba2hexWithA(e),n=t.hex,r=t.o
if(!n)return e
var a=("0"+parseInt(255*r,10).toString(16)).slice(-2).toUpperCase()
return"#".concat(a).concat(n.slice(1))},rgb2rgba=function(e){return checkColorUnit(e)!==RGB?(console.warn("Not rgbcolor but use rgb2rgba"),e):"rgba(".concat(e.slice(4,-1),", 1)")},rgb2hex=function(e){if(checkColorUnit(e)!==RGB)return console.warn("Not rgbcolor but use rgb2hex"),e
var t=e.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
if(t&&4===t.length){var n=("0"+parseInt(t[1],10).toString(16)).slice(-2),r=("0"+parseInt(t[2],10).toString(16)).slice(-2),a=("0"+parseInt(t[3],10).toString(16)).slice(-2)
return"#".concat(n).concat(r).concat(a).toUpperCase()}},rgb2argb=function(e){return checkColorUnit(e)!==RGB?(console.warn("Not rgbcolor but use rgb2argb"),e):hex2argb(rgb2hex(e))},hex2argb=function(e){return checkColorUnit(e)!==HEX?(console.warn("Not hexcolor but use hex2argb"),e):"#FF".concat(e.slice(1))},hex2rgba=function(e){return checkColorUnit(e)!==HEX?(console.warn("Not hexcolor but use hex2rgba"),e):rgb2rgba(hex2rgb(e))},argb2rgba=function(e){if(checkColorUnit(e)!==ARGB)return console.warn(
"Not argbcolor but use argb2rgba"),e
for(var t=[],n=1;n<e.length;n+=2)t.push(e.slice(n,n+2))
var r=t[0],a=t[1],o=t[2],i=t[3]
return a=parseInt(a,16),o=parseInt(o,16),i=parseInt(i,16),r=Number((parseInt(r,16)/255).toString().slice(0,4)),"rgba(".concat(a,", ").concat(o,", ").concat(i,", ").concat(r,")")},argb2rgbWithA=function(e){if(checkColorUnit(e)!==ARGB)return console.warn("Not argbcolor but use argb2rgbWithA"),e
var t=argb2rgba(e),n=rgba2rgbWithA(t),r=n.rgb,a=n.o
return r?"".concat(r," ").concat(Math.round(100*a),"%"):e},argb2hexWithA=function(e){if(checkColorUnit(e)!==ARGB)return console.warn("Not argbcolor but use argb2hexWithA"),e
var t=argb2rgba(e),n=rgba2hexWithA(t),r=n.hex,a=n.o
return r?"".concat(r.toUpperCase()," ").concat(Math.round(100*a),"%"):e},getUIColor=function getUIColor(color){if(!color)return DEFAULT_COLOR
var rgbaColor=getColorFromUnit(color,"rgba")
function rgba(){return{r:arguments[0],g:arguments[1],b:arguments[2],a:arguments[3]}}var _eval2=eval(rgbaColor),r=_eval2.r,g=_eval2.g,b=_eval2.b,a=_eval2.a
return r=(0,_utils__.save2Digital)(r/255),g=(0,_utils__.save2Digital)(g/255),b=(0,_utils__.save2Digital)(b/255),"UIColor(red:".concat(r,", green:").concat(g,", blue:").concat(b,", alpha:").concat(a,")")}
exports.getUIColor=getUIColor
var RGBA="rgba",ARGB="argb",RGB="rgb",HEX="hex",TRANSPARENT="transparent",RGBA_FOR_TRANSPARENT="rgba(255, 255, 255, 0)",DEFAULT_COLOR="#FFFFFF"
exports.DEFAULT_COLOR=DEFAULT_COLOR},"Xt/L":function(e,t){e.exports=function(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0
return!1}},"Y+p1":function(e,t,n){var r=n("wF/u")
e.exports=function(e,t){return r(e,t)}},ZCpW:function(e,t,n){var r=n("lm/5"),a=n("O7RO"),o=n("IOzZ")
e.exports=function(t){var n=a(t)
return 1==n.length&&n[0][2]?o(n[0][0],n[0][1]):function(e){return e===t||r(e,t,n)}}},ZS4k:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("4sCl")),i=n("Kkl0"),c=(0,a.connect)(function(e){var t=e.container,n=t.common.keyFlags.isSpaceDown,r=t.layers,a=r.resourceByScreen,o=r.visibilityScreenID,i=r.activeLayerID,c=r.enteredLayerID,u=t.previewSetting,l=u.unit,s=u.ratio,d=u.isShowColorPicker,f=e.model,p=f.current.screenCid,h=f.screens.find(function(e){return e.cid===p})
return{isSpaceDown:n,layers:a[o]&&a[o].layers||[],artboard:a[o]&&a[o].artboard,currentScreen:h,activeLayerID:i,enteredLayerID:c,isShowLayerList:!d,unit:l,ratio:s}},function(t){return{requestSelectLayer:function(e){t((0,i.requestSelectLayer)(e))},enterLayer:function(e){t((0,i.enterLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(o.default)
t.default=c},ZWtO:function(e,t,n){var a=n("4uTw"),o=n("9Nap")
e.exports=function(e,t){for(var n=0,r=(t=a(t,e)).length;null!=e&&n<r;)e=e[o(t[n++])]
return n&&n==r?e:void 0}},ZXhj:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getTotalRect=function(e){var t=1/0,n=1/0,r=-1/0,a=-1/0
return e.forEach(function(e){t=Math.min(e.top,t),n=Math.min(e.left,n),r=Math.max(e.left+e.width,r),a=Math.max(e.top+e.height,a)}),{top:t,left:n,right:r,bottom:a,width:r-n,height:a-t}},t.mapClientVectorToWidgetVector=function(e,t){var n=document.querySelector("#canvas").getBoundingClientRect(),r=document.querySelector("#screens").getBoundingClientRect(),a=n.left-r.left,o=n.top-r.top
return i=e,c={offsetX:a,offsetY:o,ratio:100/t},u=i.startX,l=i.startY,s=i.endX,d=i.endY,f=c.offsetX,p=c.offsetY,h=c.ratio,{startX:Math.round((u-f)*h),startY:Math.round((l-p)*h),endX:Math.round((s-f)*h),endY:Math.round((d-p)*h)}
var i,c,u,l,s,d,f,p,h},t.snapVectorByUnitAndOffset=function(e){var t=e.startX,n=e.startY,r=e.endX,a=e.endY,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:90,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,c=Math.atan2(a-n,r-t)/Math.PI*180,u=Math.hypot(r-t,a-n),l=i+o*Math.round((c-i)/o),s=u*Math.cos((c-l)/180*Math.PI)
return{startX:t,startY:n,endX:t+Math.round(s*Math.cos(l/180*Math.PI).toFixed(2)),endY:n+Math.round(s*Math.sin(l/180*Math.PI).toFixed(2))}},t.mapVectorToRect=function(e){var t=e.startX,n=e.startY,r=e.endX,a=e.endY,o=Math.min(n,a),i=Math.min(t,r),c=Math.abs(r-t),u=Math.abs(a-n)
return{top:Math.round(o),left:Math.round(i),width:Math.round(c),height:Math.round(u)}}},ZY2Q:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"container:comment:focus":return(0,a.default)({},e,{focus:r.focus,from:r.from})
case"container:comment:select":return(0,a.default)({},e,{focus:r.select&&e.focus,select:r.select,from:r.from})}return e}
var a=r(n("MVZn")),o={focus:null,select:null,from:null}},"Zu+4":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),v=r(n("q1tI")),f=a(n("17x9")),p=a(n("i6OX")),h=a(n("QdB0")),g=a(n("6cfl")),y=a(n("DJvY")),b=a(n("DdUa")),w=a(n("l4l/")),S=a(n("2AqR")),E=a(n("6gQ3")),C=a(n("zgSj")),_=n("oose"),x=a(n("nQhf")),k=a(n("xUDz")),M=a(n("NyBV")),T=n("1iCU"),m=a(n("XpKX")),R=a(n("UbMB")).default.bind(m.default),N=window,O=N.MB,I=N.I18N,P=new Set(["ai@mockingbot.com","ethantw@me.com"]),A=function(e){function r(e){var t;(0,
o.default)(this,r),t=(0,c.default)(this,(0,u.default)(r).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(t)),"handleClick",function(){U(),t.setState({showLoadtip:!1})})
var n=e.dispatch
return n({type:"entry:init:preview:scale"}),n({type:"reducer:artboards:init"}),n({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),j(e),n({type:"entry:unread-comment:init"}),n({type:"entry:init:preview-setting"}),t.state={showLoadtip:!0},t}return(0,l.default)(r,e),(0,i.default)(r,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"entry:preview:clear"})}},{key:"componentDidMount",value:function(){var e=(0,h.default)()
if(e){var t={open:!0,event:e}
this.props.dispatch({type:"event-sign-up:set:event",payload:t})}}},{key:"UNSAFE_componentWillUpdate",value:function(e){this.props.project!==e.project&&j(e)}},{key:"render",value:function(){var e=this.props,t=e.isLite,n=e.project,r=n.owner_email,a=n.master,o=e.previewSetting,i=e.isProjectFromOtherFreeUser,c=this.state.showLoadtip
if(t)return v.default.createElement(v.default.Fragment,null,v.default.createElement(b.default,null),v.default.createElement(x.default,null))
var u=o.toolbarActiveItem,l=o.isFullScreenMode,s=u==T.PREVIEW,d=u==T.INSPECT,f=u==T.COMMENT,p=!O.isElectron()&&!O.isHTMLZip()&&d&&c&&B(),h=!a&&s&&(P.has(r)||i),m=R({"is-offline-mode":O.isHTMLZip(),"is-uichina":O.isUIChina()||O.isForum(),"full-screen":l})
return v.default.createElement("div",{className:m},v.default.createElement(S.default,null),l&&v.default.createElement(k.default,null),d&&v.default.createElement(w.default,null),v.default.createElement("div",{className:R("adjust-container","preview-content-container")},f&&v.default.createElement(_.CommentContainer,null),d&&v.default.createElement(C.default,null),v.default.createElement(y.default,null),v.default.createElement(g.default,null),v.default.createElement(E.default,null)),h||O.isUIChina(
)&&v.default.createElement("a",{className:"powered-by",href:"/",target:"_blank"},v.default.createElement("img",{className:"zh",src:"/images/preview/watermark_zh.svg",alt:I.preview.powered_by_modao}),v.default.createElement("img",{className:"en",src:"/images/preview/watermark_en.svg",alt:I.preview.powered_by_modao})),v.default.createElement(L,{isActive:p,onClick:this.handleClick}),s&&v.default.createElement(M.default,null),v.default.createElement(x.default,null))}}]),r}(v.Component)
t.default=A,(0,d.default)(A,"propTypes",{isLite:f.default.bool,project:f.default.object,previewSetting:f.default.object,isProjectFromOtherFreeUser:f.default.bool,dispatch:f.default.func})
var L=function(e){var t=e.isActive,n=e.onClick
return t?v.default.createElement("div",{className:"download-client-tip"},v.default.createElement(p.default,{type:"fa",name:"info-circle",className:"download-client-tip-icon"}),v.default.createElement("span",{className:"download-text"},v.default.createElement("a",{href:"/downloads",rel:"noopener noreferrer",target:"_blank"},I.preview.client_load_a)," ",I.preview.client_load_tip),v.default.createElement(p.default,{type:"dora",name:"times_fc",className:"download-client-close-icon",onClick:n})):null}
L.propTypes={isActive:f.default.bool.isRequired,onClick:f.default.func.isRequired}
var j=function(e){var t=e.project,n=e.isProjectFromOtherFreeUser
return(0,_.setProjectCommentPermission)({allowComment:!(t.combo||t.template)&&t.limitation.commentable,denyMessage:O.renewMsg("cant_comment",{role:n?t.team_cid?"team":"project":"user"})})},D="close_client_load_tip",B=function(){return!O.localStorageDelegate.getItem(D)},U=function(){return O.localStorageDelegate.setItem(D,"true")}},a1Ia:function(e,t,n){e.exports={"sub-toolbar":"_1_GW4ZPKsACMqmFUgNIiea","select-input":"_1z2tl9KzoQhfo9Vd0AnQNl"}},aFF0:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.saveWidgetByDefaultState=t.setScreenStateGlobally=void 0
t.setScreenStateGlobally=function(e,t,n){var r={}
for(var a in n.forEach(function(e){r[e]=t[e]}),t.restore(e),r)t[a]=r[a]
"default"===t.screenstate_cid?(t.lsave(!1),o(e,t)):t.lsave()}
var o=function(e,t){var n=e.dup()
n.restore(t),MB.AutoSaver&&MB.AutoSaver.add({record:n})}
t.saveWidgetByDefaultState=o},aYzi:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("Zu+4")),u=n("1iCU"),i=n("/5+U"),l=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),s=(0,i.immutableTransformCache)(function(e,t){return t!==e.owner_id&&e.expired}),c=(0,a.connect)(function(e){var t=e.model,n=t.current,r=t.projects,a=e.container.previewSetting,o=a.toolbarActiveItem,i=l(r,n.projectCid),c=MB.isMobile()||MB.isEmbedded()
return{isLayerActive:o===u.INSPECT,isCommentActive:o===u.COMMENT,previewSetting:a,isProjectFromOtherFreeUser:s(i,n.userId),isLite:c,project:i}})(o.default)
t.default=c},abHt:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compactModeComponentList=t.componentMap=t.componentList=void 0
var r=[{name:"rich_text",icon_text:"文字",text:I18N.w.rich_text_placeholder,tb_text:"文字",icon_name:"text",fs:14,z:5,ha:"left",va:"top",size_type:0},{name:"label",icon_text:"文字",text:I18N.w.label,tb_text:"文字",icon_name:"text",width:33,height:23,fs:14,border_radius:"",bs:0,ha:"center",va:"middle",z:5,lh:1.45,hide:!0},{name:"text_view",icon_text:"多行文字",text:I18N.w.text_view_placeholder,tb_text:"多行文字",icon_name:"paragraph",width:200,height:65,fs:14,border_radius:"",bs:0,ha:"left",va:"top",z:5,lh:1.45,hide:!0},{
name:"rounded_rect",icon_text:"矩形",text:"",icon_name:"rectangle",width:200,height:100,border_radius:"",bs:1,fs:14,ha:"center",va:"middle",lh:1.45,z:5},{name:"circle_rect",icon_text:"圆形",text:"",icon_name:"circle",width:100,height:100,bs:1,fs:14,ha:"center",va:"middle",lh:1.45,z:5},{name:"triangleb",icon_text:"三角",text:"",icon_name:"triangle-top",width:40,height:30,z:5},{name:"triangletl",icon_text:"三角",text:"",icon_name:"triangle-left-bottom",width:40,height:40,z:5},{name:"hr",icon_text:"线条",text:"",
icon_name:"horizontal-line",width:150,height:10,z:5,zoomable:"w,e,n",hide:!0},{name:"line",icon_name:"horizontal-line",icon_text:"线条",width:150,height:1,points:JSON.stringify([{point:[0,.5]},{point:[1,.5]}]),bs:1,bc:"rgba(187, 187, 187, 1)"},{name:"ve",icon_text:"线条",text:"",icon_name:"vertical-line",width:10,height:150,z:5,zoomable:"n,s,w",hide:!0},{name:"button",icon_text:"按钮",text:I18N.w.button,tb_text:"按钮",icon_name:"btn",width:80,height:30,fs:14,border_radius:"4",bs:1,ha:"center",va:"middle",z:5,
icon:"",is:14},{name:"image_view",icon_text:"图片",text:"",icon_name:"img",width:200,height:120,border_radius:"",bs:0,z:5},{name:"icon_button",icon_text:"图标",text:"",icon:"star",icon_name:"smile",width:24,height:24,border_radius:"",bs:0,is:24,z:5,hide:!0},{name:"tab_item",icon_text:"标签",text:I18N.w.tab_item,tb_text:"标签",icon_name:"icon-label",icon:"home",width:80,height:45,fs:12,is:24,z:5,ha:"center",zoomable:"w,e"},{name:"lr",icon_text:"链接区域",tb_text:"链接区域",icon_name:"link",width:45,height:45,bs:0,z:7},{
icon_text:"网页",name:"webpage",text:"about:blank",tb_text:"网页",icon_name:"webpage",width:"100%",height:400,z:5,ha:"center"},{name:"pg",icon_text:"全局手势",icon_name:"gesture",icon:"tap",width:40,height:40,bs:0,z:7,zoomable:" "},{name:"sticky",icon_text:"批注",tb_text:"批注",icon_name:"sticker",width:204,height:170,padding:24,fs:12,lh:1.67,z:10},{name:"mtext_input",icon_text:"单行输入",text:I18N.w.mtext_input,tb_text:"单行输入",icon_name:"input",width:200,height:30,fs:14,border_radius:"",bs:1,ha:"left",va:"middle",z:5,
padding:8},{name:"mtextarea",icon_text:"多行输入",text:I18N.w.mtextarea,tb_text:"多行输入",icon_name:"textarea",width:280,height:100,fs:14,lh:1.45,border_radius:"",bs:1,ha:"left",z:5,padding:8},{name:"mselect",icon_text:"下拉框",text:"1\n2\n3",tb_text:"下拉框",icon_name:"select",width:200,height:30,fs:14,bs:1,z:5,lh:1.45,padding:8},{name:"mfile_input",icon_text:"选择文件",tb_text:"文件选择",icon_name:"file",width:200,height:30,z:5,padding:8},{name:"mtooltip",icon_text:"聊天气泡",text:I18N.w.mtooltip,tb_text:"聊天气泡",
icon_name:"tooltip",width:220,height:40,fs:14,border_radius:"5",ha:"left",va:"top",z:5,lh:1.45,bg:"#8DFA69",bs:1,padding:10},{name:"map_view",icon_text:"地图",text:"",icon_name:"map",width:"100%",height:230,z:4},{name:"mcheckbox2",icon_text:"复选框",icon_name:"checkbox",width:30,height:30,z:5,checked:!1,hide:!0},{name:"mradiobutton",icon_text:"单选框",icon_name:"radio",width:30,height:30,z:5,checked:!1,hide:!0},{name:"ios_check",icon_text:"多选框",width:22,height:22,z:5,checked:!0,hide:!0},{name:"android_check",
icon_text:"多选框",width:18,height:18,z:5,checked:!0,hide:!0},{name:"android_radio",icon_text:"单选框",width:20,height:20,z:5,checked:!0,hide:!0},{name:"switch",icon_text:"开关按钮",text:"",icon_name:"toggle",width:50,height:30,bs:0,z:5,zoomable:" ",checked:!0,hide:!0},{name:"ios_switch",icon_text:"开关按钮",text:"",icon_name:"toggle",width:50,height:30,bs:0,z:5,checked:!0,hide:!0},{name:"android_switch",icon_text:"开关按钮",text:"",icon_name:"toggle",width:37,height:20,bs:0,z:5,checked:!0,hide:!0},{name:"navigation_bar",
icon_text:"标题栏",text:I18N.w.navbar_title,tb_text:"标题栏",icon_name:"header",width:"100%",height:55,fs:18,z:4,ha:"center",top:23,hide:!0},{name:"nav_bar",icon_text:"标题栏",text:I18N.w.navbar_title,tb_text:"标题栏",icon_name:"header",width:"100%",height:55,fs:18,z:4,ha:"center",top:23},{name:"tab_bar",icon_text:"底栏",text:"",tb_text:"底栏",icon_name:"footer",width:"100%",height:45,bc:"transparent",z:4,zoomable:"n"},{name:"rectangle",icon_text:"空白通栏",text:"",icon_name:"bar",width:"100%",height:100,z:5,zoomable:"n,s",
hide:!0},{name:"search_bar",icon_text:"搜索框",text:I18N.w.search,tb_text:"搜索",icon_name:"search-input",width:"100%",height:45,fs:14,ha:"left",z:5,zoomable:"w,e",hide:!0},{name:"keyboard",icon_text:"键盘",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,zoomable:" ",numeric:!1,hide:!0},{name:"iphone_keyboard",icon_text:"键盘",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,numeric:!1,hide:!0},{name:"ipad_keyboard",icon_text:"键盘",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,numeric:!1,
hide:!0},{name:"android_keyboard",icon_text:"键盘",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,numeric:!1,hide:!0},{name:"status_bar",icon_text:"状态栏",text:I18N.w.carrier,tb_text:"中国移动",icon_name:"battery",width:"100%",height:23,z:3,zoomable:" ",hide:!0},{name:"ios_status_bar",icon_text:"状态栏",icon_name:"battery",width:"100%",height:20,z:3,hide:!0},{name:"iphone_x_status_bar",icon_text:"iPhone X 状态栏",icon_name:"battery",width:"100%",height:44,z:3,hide:!0},{name:"android_status_bar",icon_text:"状态栏",
icon_name:"battery",width:"100%",height:23,z:3,hide:!0}],a=(t.componentList=r).reduce(function(e,t){return e[t.name]=t,e},{})
t.componentMap=a
var o=["lr","rich_text","image_view","rounded_rect","circle_rect","pg","sticky"].map(function(e){return a[e]})
t.compactModeComponentList=o},aqSL:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("q1tI")),o=r(n("i8i4")),c=n("/MKj"),u=n("q3nj"),l=n("6x+O"),s=r(n("6ZRU")),i={containerReducerMap:u.reducerMap,sagaMap:u.sagaMap,extendCallback:function(i){i.renderPreview=function(e){var t=i.store
t.dispatch({type:"entry:refresh:project-related"}),o.default.render(a.default.createElement(c.Provider,{store:t},a.default.createElement(u.PreviewContainer,null)),e)},i.renderPreviewAlert=function(){o.default.render(a.default.createElement(s.default.containers.Alert,{store:i.store}),(0,l.getModalElement)())},i.pushData=function(e,t,n){i.store.dispatch({type:"entry:state:push-data",payload:{pushType:e,action:t,data:n}})},i.checkLocationHash=function(){var e=window.location.hash||"",t=i.store,n=t.getState,
r=t.dispatch
if(e.startsWith("#thread=")){var a=e.substr("#thread=".length),o=n().model.commentThreads.find(function(e){return e.cid===a})
if(!o)return console.warn("[checkLocationHash] missing commentThread: ".concat(a))
r({type:"entry:sync-runner:set-screen",payload:{cid:o.screen_cid}}),r({type:"entry:comment:set:active",payload:{isActive:!0}}),r({type:"container:comment:select",payload:{select:o.cid}})}},i.updateCurrentScreenRunner=function(e){if(!e)return console.warn("[updateCurrentScreenRunner] missing currentScreen")
i.store.dispatch({type:"entry:current:set-screen",payload:e}),window.location.hash="#screen=".concat(e.cid)}}}
t.default=i},asDA:function(e,t){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length
for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e)
return n}},"b6l+":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getPanelStyle=function(e,t,n,r){var a={left:r,width:e.width,height:e.height,zIndex:e.z}
if(t){if(e.primary_fixed?(a.position="fixed",e.primary_fixed===Widget.FIXED_TYPE.bottom?a.bottom=e.cs().height-(n+e.height):a.top=n):a.top=n,e.v){var o=e.mainState()
a.pointerEvents=e.width<o.width||e.height<o.height?"auto":"",a.opacity=1}else a.pointerEvents="none",a.opacity=0
a.overflow=MB.isPhantom()?"hidden":""}else a.top=e.top,a.left=e.left,a.opacity=e.v?1:.4,a.overflow="hidden"
return a}},bNtH:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),v=r(n("q1tI")),g=a(n("740n")),p=function(e){function t(){var y
return(0,o.default)(this,t),y=(0,c.default)(this,(0,u.default)(t).call(this)),(0,d.default)((0,s.default)((0,s.default)(y)),"handleScroll",function(e){e.stopPropagation()
var a=e.target.dataset.axis,o=e.clientX,i=e.clientY,t=y.props,n=t.canvasOffset,c=n.x,u=n.y,r=t.viewportHeight,l=t.viewportWidth,s=t.canvasRange,d=t.onScroll,f="x"===a?l:r,p=function(e){var t=e.clientY,n=e.clientX,r="x"===a?n-o:t-i
r=r/(f-f/s[a]*f)*s[a],d("x"===a?{x:c-r,y:u}:{x:c,y:u-r})}
document.addEventListener("mousemove",p),document.addEventListener("mouseup",function e(t){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",e)})}),(0,d.default)((0,s.default)((0,s.default)(y)),"handleClickTrack",function(e){var d=e.target.dataset.axis,f=e.clientX,p=e.clientY,t=y.props,h=t.onScroll,m=t.canvasRange,n=t.viewportHeight,r=t.viewportWidth,a=y.scrollbarX.getBoundingClientRect(),o=a.top,i=a.bottom,c=a.left,u=a.right,v="x"===d?y.scrollbarX:y.scrollbarY,g="x"===d?r:n
,l=function(){var e=v.getBoundingClientRect(),t=e.top,n=e.bottom,r=e.left,a=e.right,o=y.props.canvasOffset,i=o.x,c=o.y,u="x"===d?a<f:n<p,l="x"===d?f<r:p<t,s=(l?-1:u?1:0)*Math.min(m[d]/10,g);(u||l)&&h("x"===d?{x:i-s,y:c}:{x:i,y:c-s})};(("x"===d?u<f:i<p)||("x"===d?f<c:p<o))&&(v.style.transition="all 0.1s linear",l(),y.timer=setTimeout(function(){return y.timeInterval=setInterval(l,100)},500))
document.addEventListener("mouseup",function e(t){v.style.transition="",clearTimeout(y.timer),clearInterval(y.timeInterval),document.removeEventListener("mouseup",e)})}),y.setRefY=function(e){return y.scrollbarY=e},y.setRefX=function(e){return y.scrollbarX=e},y}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,n=t.x,r=t.y,a=e.canvasRange,o=e.viewportWidth,i=e.viewportHeight,c=e.showRuler,u=o/a.x,l=(a.x/2-n)*(a.x-o)/(a.x*a.x)
l=Math.min(Math.max(l,0),(a.x-o)/a.x)
var s=i/a.y,d=(a.y/2-r)*(a.y-i)/(a.y*a.y)
d=Math.min(Math.max(d,0),(a.y-i)/a.y)
var f={width:"".concat(100*u,"%"),left:"".concat(100*l,"%")},p={height:"".concat(100*s,"%"),top:"".concat(100*d,"%")},h=c?null:{left:0},m=c?null:{top:0}
return v.default.createElement("div",{className:g.default.scrollbar},v.default.createElement("div",{"data-axis":"x",className:"x_track",style:h,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefX,className:"x_handler","data-axis":"x",onMouseDown:this.handleScroll,style:f},v.default.createElement("div",{className:"x_scroll_bar"}))),v.default.createElement("div",{"data-axis":"y",className:"y_track",style:m,onMouseDown:this.handleClickTrack},v.default.createElement("div",{
ref:this.setRefY,className:"y_handler","data-axis":"y",onMouseDown:this.handleScroll,style:p},v.default.createElement("div",{className:"y_scroll_bar"}))))}}]),t}(v.PureComponent);(0,d.default)(p,"propTypes",{canvasOffset:f.default.object,canvasRange:f.default.object,viewportWidth:f.default.number,viewportHeight:f.default.number,showRuler:f.default.bool,onScroll:f.default.func}),(0,d.default)(p,"defaultProps",{showRuler:!1})
var h=p
t.default=h},bTYh:function(e,t,n){},bahg:function(e,t){e.exports=function(e){return e.split("")}},bekf:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CodeBox=void 0
var i=a(n("J4zp")),c=a(n("lwsE")),u=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=r(n("q1tI")),o=a(n("17x9")),m=n("RUem"),v=n("qOCw"),g=function(e){function o(){var e,a;(0,c.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,l.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(n))),(0,p.default)((0,f.default)((0,f.default)(a)),"renderCode",function(e){return{px:a.renderCss,dp:a.renderAndroidCode,pt:a.renderIos}[(0,v.selectWithlanguageUnit)(e)]()}),(0,p.default)((0,f.default)((0,f.default)(a)),"renderIos",function(){var e=a.props,t=e.code,n=e.language,r=e.text
return h.default.createElement(b,{code:t,language:n,text:r})}),(0,p.default)((0,f.default)((0,f.default)(a)),"renderCss",function(){var e=a.props,t=e.code,n=e.language
return h.default.createElement(y,{language:n,code:t})}),(0,p.default)((0,f.default)((0,f.default)(a)),"renderAndroidCode",function(){var e=a.props,t=e.whichAndView,n=e.code,r=e.text
return h.default.createElement(w,{code:n,text:r,whichAndView:t})}),a}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props.language
return h.default.createElement(m.WrapComponent,null,h.default.createElement("div",null,e.toUpperCase(),h.default.createElement(m.CopyBtn,{text:"#code-content"})),h.default.createElement("div",{className:"code-content",id:"code-content"},this.renderCode(e)))}}]),o}(h.PureComponent)
t.CodeBox=g,(0,p.default)(g,"propTypes",{code:o.default.object,whichAndView:o.default.string,language:o.default.string,text:o.default.string})
var y=function(e){var t=e.language,n=e.code,a=S(t),o=E(t),r=_(n)
return Object.entries(r).map(function(e){var t=(0,i.default)(e,2),n=t[0],r=t[1]
return h.default.createElement("div",{key:n},"".concat(n).concat(o).concat(r).concat(a))})}
y.propTypes={code:o.default.object.isRequired,language:o.default.string}
var b=function(e){var t=e.code,n=e.text
return C({code:t,text:n}).map(function(e){return h.default.createElement("div",{key:e},e)})}
b.propTypes={code:o.default.object.isRequired,text:o.default.string}
var w=function(e){var t=e.code,n=e.text,r=e.whichAndView
return h.default.createElement("div",null,h.default.createElement("div",{className:"highlight-row"},"<".concat(r)),Object.entries(t).map(function(e){var t=(0,i.default)(e,2),n=t[0],r=t[1]
return h.default.createElement("div",{key:n},"android:".concat(n,'="').concat(r,'"'))}),0<n.length&&h.default.createElement("div",null,'android:text="'.concat(n,'"')),h.default.createElement("div",{className:"highlight-row"},"/>"))}
w.propTypes={code:o.default.object.isRequired,text:o.default.string,whichAndView:o.default.string}
var S=function(e){switch(e){case"stylus":case"sass":return""
default:return";"}},E=function(e){switch(e){case"stylus":return" "
default:return": "}},C=function(e){var t=e.code,n=e.text,r=t.width,a=t.height,o=t.x,i=t.y,c=t.fontFamily,u=t.cornerRadius,l=t.fontSize,s=t.opacity,d=t.borderWidth,f=t.borderColor,p=t.alignment,h=t.backgroundColor,m=n?"textLayer":"layer",v=n?"UILabel":"UIView",g=[]
return g.push("let ".concat(m," = ").concat(v,"(frame: CGRect(x: ").concat(o,", y:").concat(i,", width: ").concat(r,", height: ").concat(a,"))")),h&&g.push("".concat(m,".backgroundColor = ").concat(h)),s&&g.push("".concat(m,".alpha = ").concat(s)),u&&g.push("layer.layer.cornerRadius = ".concat(u)),d&&g.push("layer.layer.borderWidth = ".concat(d)),f&&g.push("layer.layer.borderColor = ".concat(f,".cgColor")),n&&(g.push('let textContent = "'.concat(n,'"')),g.push(
'let textString = NSMutableAttributedString(string: textContent, attributes: [\n      NSAttributedStringKey.font: UIFont(name: "'.concat(c,'", size: ').concat(l,")!\n      ])")),g.push("let textRange = NSRange(location:0, length: textString.length)"),g.push("let paragraphStyle = NSMutableParagraphStyle()"),g.push("paragraphStyle.alignment = .".concat(p)),g.push("textString.addAttribute(NSAttributedStringKey.paragraphStyle, value: paragraphStyle, range: textRange)"),g.push(
"textLayer.attributedText = textString")),g},_=function(e){if(e["border-color"]&&e["border-width"]){var t={border:"".concat(e["border-width"]," solid ").concat(e["border-color"])}
return delete e["border-color"],delete e["border-width"],Object.assign(e,t)}return e}},cAqp:function(e,t,n){e.exports={"comment-marker":"_2DdCe4X_4uBwFVlS753YET"}},cQH5:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("MVZn")),o=r(n("4vJh")),i=r(n("FJlG")),c=r(n("vRqJ")),u=n("80la"),l=n("oose"),s=n("tBsX"),d=r(n("4x8W")),f=r(n("6ZRU")),p={isSpaceDown:!1},h={offset:{x:0,y:0},scale:100,keyFlags:p,viewport:{width:0,height:0}}
var m={alert:f.default.reducers,common:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:h,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"preview:set:canvas:offset":return(0,a.default)({},e,{offset:r.offset})
case"preview:set:scale":return(0,a.default)({},e,{scale:r.scale})
case"preview:set:key:flags":return(0,a.default)({},e,{keyFlags:(0,a.default)({},p,r)})
case"preview:reset:key:flags":return(0,a.default)({},e,{keyFlags:p})
case"preview:scrollbar:viewport":return(0,a.default)({},e,{viewport:r})
default:return e}},comment:l.reducer,layers:s.reducers,slices:u.reducer,screens:o.default,artboards:c.default,previewSetting:i.default,eventSignUpModal:d.default}
t.default=m},cTU2:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.loadImageAsync=t.createAsyncTaskQueue=void 0
t.createAsyncTaskQueue=function(){var n=Promise.resolve("QUEUE_HEAD")
return{pushTask:function(e){var t=n.then(e).catch(console.log)
return n=t}}}
t.loadImageAsync=function(t,n){return new Promise(function(e){t.src=n,t.onload=function(){return e(t)},t.onerror=e})}},cWnZ:function(e,t,n){},cl8F:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r={tc:"#101010",bg:"transparent",bc:"#bbbbbb",sc:"#aaaaaa",box_shadow:JSON.stringify([[0,0,0,0,0,"#aaaaaa"]]),text_shadow:JSON.stringify([[0,0,0,"#aaaaaa"]]),sticky:{bg:"#FFFBBA"},status_bar:{bg:"#f8f8f8"},status_bar_android:{bg:"#555555"},ios_status_bar:{bg:"#f8f8f8"},iphone_x_status_bar:{bg:"#f8f8f8"},android_status_bar:{bg:"#f8f8f8"},image_view:{bg:"#e5e5e5",tc:"#bec2c9"},rounded_rect:{bg:"#FFFFFF"},circle_rect:{bg:"#FFFFFF"},triangleb:{tc:"#e5e5e5"},triangletl:{tc:"#e5e5e5"},button:{bg:"#ffffff"},
navigation_bar:{bg:"#f8f8f8"},nav_bar:{bg:"#f8f8f8",bc:"transparent"},tab_bar:{bg:"#f8f8f8",bc:"transparent"},rectangle:{bg:"#ffffff"},mtext_input:{bg:"#ffffff",tc:"#888888"},mtextarea:{bg:"#ffffff",tc:"#888888"}}
t.default=r},ctY3:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=a(n("M8nv")),m=a(n("OVdA")),v=a(n("UbMB")).default.bind(m.default),g=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleFocus",function(){t.props.onFocus()}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleChange",function(e){(0,t.props.onChange)(e.target.value)}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleBlur",function(){t.props.onBlur()}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleKeyDown",function(e){"Enter"===e.key?(e.preventDefault(),t.handleBlur()
):"Escape"===e.key&&(t.props.onChange(t.cacheValue),t.cacheValue=null,t.handleBlur())}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleDocDown",function(e){t.props.editing&&t.textarea&&t.textarea.contains(e.target)||t.props.onBlur()}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentDidMount",value:function(){this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"componentDidUpdate",value:function(e,t){!e.editing&&this.props.editing&&(
this.cacheValue=this.props.value,this.textarea.select())}},{key:"render",value:function(){var t=this,e=this.props,n=e.editing,r=e.value,a=e.className
return n?p.default.createElement("div",{className:v("text-wrapper",a)},p.default.createElement("textarea",{ref:function(e){return t.textarea=e},value:r,onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown}),p.default.createElement(h.default,{onMouseDown:this.handleDocDown})):p.default.createElement("span",null,r)}}]),o}(p.Component);(t.default=g).propTypes={editing:o.default.bool,value:o.default.string,className:o.default.string,onFocus:o.default.func,
onBlur:o.default.func,onChange:o.default.func},g.defaultProps={onFocus:function(){},onChange:function(){}}},d89S:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var m=r(n("MVZn")),a=n("/MKj"),v=r(n("J2m7")),o=r(n("KHYK")),i=(0,a.connect)(function(e){return(0,m.default)({},(n=(t=e).container,r=n.layers,a=r.resourceByScreen,o=r.visibilityScreenID,i=r.activeLayerID,c=r.enteredLayerID,u=n.previewSetting,l=u.ratio,s=u.unit,d=t.model,f=d.current.screenCid,p=d.screens,(h=a[o])?{activeLayer:(0,v.default)(h.layers,function(e){return e.id===i}),enteredLayer:(0,v.default)(h.layers,function(e){return e.id===c}),currentScreen:p.find(function(e){return e.cid===f}),ratio:l,unit:s
}:{activeLayer:{},enteredLayer:{},currentScreen:{}}))
var t,n,r,a,o,i,c,u,l,s,d,f,p,h})(o.default)
t.default=i},dAiO:function(e,t,n){},dQpi:function(e,t){e.exports=function(){}},dSX7:function(e,t,n){},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
e.exports=function(e){return e.match(n)||[]}},"dYO+":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var d=a(n("J4zp")),o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("17x9")),f=r(n("q1tI")),p=n("Gbs1"),h=a(n("An9T")),m=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.shellType,r=function(e,t,n){switch(e){case"device":var r=(0,p.getProjectShell)(t,e)
if(!r.bg)return null
var a=n?"".concat(r.bg,"_land"):r.bg,o=n?[-r.left,-r.top,r.height,r.width]:[-r.top,-r.left,r.width,r.height],i=(0,d.default)(o,4),c=i[0],u=i[1],l=i[2],s=i[3]
return{top:c,left:u,width:l,height:s,backgroundImage:"url(".concat(MB.isHTMLZip()?".":"","/images/devices/").concat(a,".png)")}
case"default":case"none":return null}}(n,t,e.isLandscape),a="device"===n&&null===r?"none":n
return f.default.createElement("div",{className:"".concat(h.default.shell," ").concat(a),style:r})}}]),t}(f.PureComponent);(t.default=m).propTypes={project:s.default.object,shellType:s.default.string,isLandscape:s.default.bool}},deeV:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),g=r(n("q1tI")),f=a(n("17x9")),p=a(n("zkrS")),h=n("6XO9"),m=n("CLzH"),v=n("H5Dy"),y=n("/5+U"),b=a(n("qES3")),w=n("hkZD"),S=a(n("UbMB")),E=a(n("mquD")),C=S.default.bind(E.default),_=function(e){function r(e){var l;(0,o.default)(this,r),l=(0,c.default)(this,(0,u.default)(r).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(l)),"autoTextareaFocus",function(){return setTimeout(function(){
return l.replyTextareaRef&&l.replyTextareaRef.focus()},200)}),(0,d.default)((0,s.default)((0,s.default)(l)),"checkIsNewCreateComment",function(){var e=l.props
return!e.commentListMap[e.commentContainer.select]}),(0,d.default)((0,s.default)((0,s.default)(l)),"doReply",function(e){l.replyTextareaRef&&l.replyTextareaRef.onEditFinish(e),l.scrollRef&&T(l.scrollRef)}),(0,d.default)((0,s.default)((0,s.default)(l)),"doCreateCommentThread",function(e){e&&(l.props.dispatch({type:"entry:comment-threads:add",payload:{top:0,left:0,message:e,cancelSelect:!0}}),T(l.scrollRef))}),(0,d.default)((0,s.default)((0,s.default)(l)),"doCreateComment",function(e){
l.commentOperations.doCreateComment(e),T(l.scrollRef)}),(0,d.default)((0,s.default)((0,s.default)(l)),"renderContentReply",function(e){if(!(0,v.getProjectCommentPermission)().allowComment)return null
var t=l.checkIsNewCreateComment(),n=l.props,r=n.userId,a=n.currentState,o=l.state,i=o.backgroundColor,c=o.disabled,u=(0,w.getUserStatus)(r,a)
return g.default.createElement("div",{className:C("content-reply")},u===w.COLLABORATOR&&g.default.createElement(m.ReplyTextarea,{ref:l.setReplyTextareaRef,onValueChange:e&&t?l.doCreateComment:l.doCreateCommentThread,placeholder:p.default.I18N.preview.comment.comment_placeholder,handleActive:l.handleActive,minHeight:20,isMultiLine:!0,isAutoHeight:!0}),u===w.COLLABORATOR&&g.default.createElement(h.Button,{onClick:l.doReply,style:{backgroundColor:i,cursor:c?"not-allowed":"pointer"},disabled:c},
p.default.I18N.preview.comment.thread_create),"not_signin"===u&&g.default.createElement(h.Button,{className:E.default.login,onClick:x},p.default.I18N.preview.comment.tip_signin),"not_collaborator"===u&&g.default.createElement("span",null,p.default.I18N.preview.comment.tip_not_collaborator))})
var t=l.props,n=t.currentState.screenCid
return(0,t.dispatch)({type:"unread-comment:set-read",payload:{screenCid:n}}),l.commentOperations={cancelSelect:function(){l.props.dispatch({type:"container:comment:select",payload:{select:null}})},getPermission:function(e){var t=l.commentOperations.getCollaborator(e)
return(0,v.getPermission)(l.props.currentState.userRole,l.props.userId,e,l.props.currentState.teamCid,t)},getCollaborator:function(e){var t=l.props,n=t.collaboratorsState,r=t.currentState,a=r.projectCid,o=r.teamCid
return R(n,a,o)[e]||{name:k,avatar:M}},setFocusCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return l.props.dispatch({type:"container:comment:focus",payload:{focus:e,from:"comment"}})},toggleSelectCommentThread:function(e){(0,l.props.dispatch)({type:"container:comment:select",payload:{select:e||null}})},doDeleteCommentThread:function(e){l.props.dispatch({type:"entry:comment-threads:delete",payload:{cid:e}})},doDeleteComment:function(e){return l.props.dispatch({type:"comments:delete",payload:e})},doUpdateComment:function(e){return l.props.dispatch({type:"entry:comments:update",payload:e})},
doCreateComment:function(e,t){var n=l.props,r=n.selectCommentThread,a=n.dispatch,o=t||r.cid
e&&o&&a({type:"entry:comments:add",payload:{thread_cid:o,message:e}})},renderEmptyCommentList:function(){return g.default.createElement(w.EmptyCommentList,{hasUser:"not_signin"===(0,w.getUserStatus)(l.props.userId,l.props.currentState),hasSelectCommentThread:Boolean(l.props.selectCommentThread)})}},l.setReplyTextareaRef=function(e){l.replyTextareaRef=e},l.setScrollRef=function(e){return l.scrollRef=e},l.replyTextareaRef=null,l.scrollRef=null,l.state={backgroundColor:w.blurBtnColor,disabled:!0},
l.handleActive=function(e){l.state.disabled===e&&l.setState({backgroundColor:e?w.focusBtnColor:w.blurBtnColor,disabled:!e})},l}return(0,l.default)(r,e),(0,i.default)(r,[{key:"componentWillReceiveProps",value:function(e){var t=e.unreadCommentState.unreadCountScreenMap,n=e.currentState.screenCid,r=e.dispatch
t[n]&&r({type:"unread-comment:set-read",payload:{screenCid:n}})}},{key:"render",value:function(){var l=this,e=this.props,t=e.commentThreadList,s=e.commentListMap,n=e.currentScreenName,r=e.commentContainer,d=r.focus,f=r.select,p=r.from,a=e.selectCommentThread,h=e.unreadCommentState.unreadCountThreadMap,o=this.props,m=o.userId,v=o.currentState,i=t.length
return g.default.createElement("div",{className:C("comment-panel")},i?[g.default.createElement("div",{key:"title",className:C("comment-title")},"".concat(n," (").concat(i,") ")),g.default.createElement("div",{key:"comment",ref:this.setScrollRef,className:C("comment-thread"),id:"comment-thread"},t.map(function(e,t){var n=e.cid,r=e.user_id,a=s[n]||[],o=h[n]||0,i=l.commentOperations.getPermission(r),c=t+1,u="comment"===p
return g.default.createElement(b.default,{key:n,commentThreadCid:n,commentMarkerIndex:c,focusCid:d,selectCid:f,fromComment:u,unreadCount:o,commentOperations:l.commentOperations,userId:m,permission:i,currentState:v,commentList:a,scrollRef:l.scrollRef})}))]:this.commentOperations.renderEmptyCommentList(),this.renderContentReply(a))}}]),r}(g.PureComponent)
t.default=_,(0,d.default)(_,"propTypes",{commentContainer:f.default.object,currentState:f.default.object,collaboratorsState:f.default.array,unreadCommentState:f.default.object,commentThreadList:f.default.array,selectCommentThread:f.default.object,commentListMap:f.default.object,currentScreenName:f.default.string,userId:f.default.number,dispatch:f.default.func})
var x=function(){window.location.href="/signin?next=".concat(window.location.pathname)},k="用户已退出协作",M="/images/avatar.png",T=function(e){return e&&setTimeout(function(){return e.scrollTop=e.scrollHeight-e.offsetHeight},0)},R=(0,y.immutableTransformCache)(function(e,n,r){return e.reduce(function(e,t){return t.project_cid!==n&&t.team_cid!==r||(e[t.user_id]=t),e},{})})},dppN:function(e,t,n){},dt0z:function(e,t){e.exports=function(e){return e}},e5cp:function(e,t,n){var g=n("fmRc"),y=n("or5M"),b=n("HDyB"),w=n(
"seXi"),S=n("QqLw"),E=n("Z0cm"),C=n("DSRE"),_=n("c6wG"),x="[object Arguments]",k="[object Array]",M="[object Object]",T=Object.prototype.hasOwnProperty
e.exports=function(e,t,n,r,a,o){var i=E(e),c=E(t),u=i?k:S(e),l=c?k:S(t),s=(u=u==x?M:u)==M,d=(l=l==x?M:l)==M,f=u==l
if(f&&C(e)){if(!C(t))return!1
s=!(i=!0)}if(f&&!s)return o||(o=new g),i||_(e)?y(e,t,n,r,a,o):b(e,t,u,n,r,a,o)
if(!(1&n)){var p=s&&T.call(e,"__wrapped__"),h=d&&T.call(t,"__wrapped__")
if(p||h){var m=p?e.value():e,v=h?t.value():t
return o||(o=new g),a(m,v,n,r,o)}}return!!f&&(o||(o=new g),w(e,t,n,r,a,o))}},eNKG:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.visibilityScreenID=i,t.resourceByScreen=u,t.default=void 0
var a=r(n("lSNA")),o=n("JfQ8")
function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"-1",t=1<arguments.length?arguments[1]:void 0
switch(t.type){case o.SET_VISIBILITY_SCREEN:return t.payload.screenID
default:return e}}var c={"-1":{isFetching:!1,layers:[],error:""}}
function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case o.RECEIVE_RESOURCE_SUCCESS:case o.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,(0,a.default)({},t.payload.screenID,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,layers:[],error:""},t=1<arguments.length?arguments[1]:void 0
switch(t.type){case o.RECEIVE_RESOURCE_SUCCESS:return Object.assign({},e,{isFetching:!1,layers:t.payload.layers,error:void 0,artboard:t.payload.artboard,documentColor:t.payload.document_colors,globalColor:t.payload.global_colors,globalText:t.payload.text_styles})
case o.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,{isFetching:!1,layers:[],error:t.payload.error})
default:return e}}(e[t.payload],t)))
case"container:layers:clear":return c
default:return e}}var l={visibilityScreenID:i,resourceByScreen:u}
t.default=l},eaeY:function(e,t,n){"use strict"
var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}()
var a=n("q1tI")
n("17x9")
var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.enabled&&this.bindHandlers()}},{key:"componentWillUnmount",value:function(){this.unbindHandlers()}},{key:"componentWillReceiveProps",value:function(e){this.props.enabled&&!e.enabled?this.unbindHandlers():!this.props.enabled&&e.enabled&&this.bindHandlers()}},{
key:"getKeys",value:function(){this.props.target,window
return Object.keys(this.props).filter(function(e){return"on"===e.slice(0,2)}).map(function(e){return[e,e.slice(2).toLowerCase()]})}},{key:"getTarget",value:function(){var e=this.props,t="function"==typeof e.target?e.target():e.target
return t||(t=this.node&&this.node.ownerDocument),t}},{key:"bindHandlers",value:function(){this._adjustHandlers(i)}},{key:"unbindHandlers",value:function(){this._adjustHandlers(c)}},{key:"_adjustHandlers",value:function(t){var n=this.props,r=this.getTarget()
if(r){var a=u?{passive:n.passive,capture:n.capture}:n.capture
this.getKeys().forEach(function(e){t(r,e[1],n[e[0]],a)})}}},{key:"render",value:function(){var t=this
return this.props.target?null:a.createElement("noscript",{ref:function(e){t.node=e}})}}]),t}()
function i(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}function c(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}o.displayName="DocumentEvents",o.defaultProps={capture:!1,enabled:!0,passive:!1}
var u=function(){try{var e=!1
return document.createElement("div").addEventListener("test",function(){},{get passive(){e=!0}}),e}catch(e){return!1}}()
e.exports=o},edRh:function(e,t,n){},ee4a:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("Kkl0"),a=n("JfQ8")
var o={selectedLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case r.SELECT_LAYER:return t.payload.layerID===e?-1:t.payload.layerID
case a.SET_VISIBILITY_SCREEN:return-1
default:return e}},activeLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case r.ACTIVATE_LAYER:return t.payload.layerID
case a.SET_VISIBILITY_SCREEN:return-1
default:return e}},enteredLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case r.ENTER_LAYER:return t.payload.layerID
default:return e}}}
t.default=o},fB0Y:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarker=void 0
var d=a(n("pVnL")),o=a(n("MVZn")),u=a(n("lwsE")),i=a(n("W8MJ")),s=a(n("a1gu")),f=a(n("Nsbk")),c=a(n("7W2i")),l=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("/5+U"),v=a(n("cAqp")).default["comment-marker"],g=function(e){function r(e){var l;(0,u.default)(this,r),l=(0,s.default)(this,(0,f.default)(r).call(this,e))
var i={isDragging:!1,position:{left:0,top:0}},t=(0,o.default)({},b,{mousemove:(0,m.muteEvent)(function(e){var t,n,r,a,o=l.props,i=o.offsetLeft,c=o.offsetTop,u=(0,o.markerOperations.getMarkerPosition)(e);(l.state.isDragging||(t=c,r=i-(n=u).left,a=t-n.top,w<=r*r+a*a))&&l.setState({isDragging:!0,position:u})}),mouseup:(0,m.muteEvent)(function(e){if(c(),l.state.isDragging){var t=l.props,n=t.commentThreadCid,r=t.markerOperations,a=r.doUpdateCommentThread,o=(0,r.getMarkerPosition)(e)
a({cid:n,left:o.left,top:o.top})}else setTimeout(function(){var e=l.props,t=e.isSelect,n=e.commentThreadCid;(0,e.markerOperations.setSelectCommentThreadCid)(t?null:n)},0)
l.setState(i)}),mouseleave:function(){c(),l.props.markerOperations.setFocusCommentThreadCid(null),l.setState(i)}}),n=(0,o.default)({},b,{mouseup:t.mouseup}),c=function(){return l.props.markerOperations.removeContainerEventListener(l.props.isEditable?t:n)}
return l.markerListenerMap={onMouseDown:(0,m.muteEvent)(function(){return l.props.markerOperations.addContainerEventListener(l.props.isEditable?t:n)}),onMouseEnter:(0,m.muteEvent)(function(){return l.props.markerOperations.setFocusCommentThreadCid(l.props.commentThreadCid)}),onMouseLeave:(0,m.muteEvent)(function(){return l.props.markerOperations.setFocusCommentThreadCid(null)}),onMouseUp:y,onDoubleClick:y,onClick:y},l.isFocused=!1,l.setElementRef=function(e){return l.elementRef=e},l.elementRef=null,
l.state=i,l}return(0,c.default)(r,e),(0,i.default)(r,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.isFocus,n=e.markerOperations.doFocusAtElement
t&&!this.isFocused&&n(this.elementRef),this.isFocused=t}},{key:"render",value:function(){var e=this.props,t=e.offsetLeft,n=e.offsetTop,r=e.isFocus,a=e.isFade,o=e.commentMarkerIndex,i=this.state,c=i.isDragging,u=i.position,l=r?"focus":!r&&a?"fade":"",s=c?u:{left:"".concat(t,"px"),top:"".concat(n,"px")}
return p.default.createElement("div",{className:"".concat(v," ").concat(l),style:s},p.default.createElement("span",(0,d.default)({ref:this.setElementRef,tabIndex:o},this.markerListenerMap),o))}}]),r}(p.PureComponent)
t.CommentMarker=g,(0,l.default)(g,"propTypes",{commentMarkerIndex:h.default.number,commentThreadCid:h.default.string,offsetLeft:h.default.number,offsetTop:h.default.number,isEditable:h.default.bool,isSelect:h.default.bool,isFocus:h.default.bool,isFade:h.default.bool,markerOperations:h.default.object})
var y=(0,m.muteEvent)(),b={mouseup:y,mousedown:y,mousemove:y,mouseleave:y,mouseout:y,click:y,dblclick:y},w=225},fIwL:function(e,t,n){},fRjM:function(e,t,n){},fSKh:function(e,t,n){},flWF:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Widget,o=(0,r.createStateStore)([]),i=o.getState,c=o.setState,u=o.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:widgets:update",payload:o(e,a,i)})})},s={entryMap:{"widgets:refresh":l(a.refreshStateList,!1),"widgets:add":l(a.addState,!1),"widgets:add-local":l(a.addState,!0),"widgets:update":l(a.updateState,!1),"widgets:update-local":l(a.updateState,!0),"widgets:delete":l(a.deleteState,!1),"widgets:delete-local":l(a.deleteState,!0)},getState:i,setState:c}
t.default=s},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
e.exports=function(e){return n.test(e)}},foKU:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("pVnL")),c=a(n("QILm")),o=a(n("lwsE")),u=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=a(n("17x9")),m=r(n("q1tI")),v=MB.config.SCALES[0],g=MB.config.SCALES[MB.config.SCALES.length-1],y=function(e){function a(){var e,h;(0,o.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return h=(0,l.default)(this,(e=(0,s.default)(a)).call.apply(e,[this].concat(n))),(0,p.default)((0,f.default)((0,f.default)(h)),"setElementRef",function(e){return h.$elem=e}),(0,p.default)((0,f.default)((0,f.default)(h)),"handleWheel",function(e){e.preventDefault()
var t=h.props,n=t.x,r=t.y,a=t.scale,o=t.onOffsetChange,i=Math.max(-1,Math.min(e.deltaY,1))
if(e.ctrlKey||e.metaKey){var c=h.$elem.getBoundingClientRect(),u=c.top,l=(c.left+c.right)/2,s=(u+c.bottom)/2,d=a<=100?a-5*i:a-a*i*.05,f=e.pageX-l,p=e.pageY-s
h.handleZoom(d,f,p)}else o(n-e.deltaX,r-e.deltaY)}),h}return(0,d.default)(a,e),(0,u.default)(a,[{key:"handleZoom",value:function(e,t,n){var r=this.props,a=r.x,o=r.y,i=r.scale,c=r.onOffsetChange,u=r.onScaleChange,l=(e=Math.min(Math.max(e,v),g))/i
1!==l&&(c(t+l*(a-t),n+l*(o-n)),u(e))}},{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,r=e.scale,a=e.children,o=(e.onOffsetChange,e.onScaleChange,(0,c.default)(e,["x","y","scale","children","onOffsetChange","onScaleChange"]))
return m.default.createElement("div",(0,i.default)({},o,{ref:this.setElementRef,onWheel:this.handleWheel}),a.map(function(e){return"function"==typeof e?e(t,n,r):e}))}}]),a}(m.PureComponent);(t.default=y).propTypes={x:h.default.number,y:h.default.number,scale:h.default.number,children:h.default.array,onScaleChange:h.default.func,onOffsetChange:h.default.func}},gCaL:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.updateWidgets=function(e,r,t,n){var a=(0,i.default)({},e),o=t
return n.forEach(function(e){if(e){var t=e.dup()
a[e.cid]=t
var n=u(e,r)
o=(0,c.updateIn)(n,o,function(e){return e.widget=t})}}),{widgetMap:a,widgetTreeData:o}},t.buildWidgetTree=t.generateTreeData=t.getNodePath=void 0
var s=r(n("J4zp")),i=r(n("MVZn")),c=n("0k54")
var u=function(e,t){for(var n=[e.cid];e.gid;)n.unshift(e.gid),e=t[e.gid]
return n}
t.getNodePath=u
t.generateTreeData=function(e){var t=function(e,o){var i={},t={},c={}
e.forEach(function(e){i[e.cid]=e,c[e.screen_cid]=c[e.screen_cid]||[],e.gid?(t[e.gid]=t[e.gid]||{gid:e.gid,screen_cid:e.screen_cid,children:[]},t[e.gid].children.push(e)):c[e.screen_cid].push(e)})
var u={root:{cid:"root",children:[]}}
Object.values(t).forEach(function(e){var t=e.gid,n=e.screen_cid,r=e.children
r.sort(f)
var a=i[t]
if(!a){if(1===r.length)return r[0].gid="",void c[n].push(r[0])
a=d(t,n,r),i[a.cid]=a,c[n].push(a)}u[t]={cid:t,gid:a.gid,widget:a,children:r.map(function(e){return e.cid})}}),Object.entries(c).forEach(function(e){var t=(0,s.default)(e,2),n=t[0],r=t[1],a=n===o?"root":n
u[a]={cid:a,children:r.sort(f).map(function(e){return e.cid})}})
var n=[]
for(var r in i)"group"===i[r].name&&void 0===u[r]&&(delete i[r],n.push(r))
for(var a in u){var l=u[a].children
u[a].children=l.filter(function(e){return!n.includes(e)})}return{widgetMap:i,groupMap:u}}(e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:MB.currentScreen.cid),n=t.widgetMap,r=t.groupMap,a={cid:"root",children:[]}
return r.root.children.forEach(function(e){return a.children.push(o(e,r,n))}),{widgetMap:n,groupMap:r,widgetTreeData:a}}
var d=function(e,t,n){var r=n[n.length-1],a=r.primary_fixed
return a!==Widget.FIXED_TYPE.not_fixed&&n.forEach(function(e){return e.primary_fixed=Widget.FIXED_TYPE.not_fixed}),new Widget({cid:e,name:"group",link_cids:e,screen_cid:t,z:r.z,primary_fixed:a})},f=function(e,t){return e.z-t.z||e.timestamp-t.timestamp}
var o=function n(e,r,a){var t=a[e]
if("group"===t.name){var o=r[e]||{children:[]}
return{cid:t.cid,type:"group",widget:t,children:o.children.map(function(e){return n(e,r,a)})}}if("panel"!==t.name)return{cid:t.cid,type:"widget",widget:t,children:[]}
var i=t.ct().cscreens()
return{cid:t.cid,type:"panel",widget:t,children:i.map(function(e){var t=r[e.cid]?r[e.cid].children:[]
return{cid:e.cid,widget:e,type:"panel-screen",children:t.map(function(e){return n(e,r,a)})}})}}
t.buildWidgetTree=o},gQMU:function(e,t,n){var r=n("0ZTe")("toUpperCase")
e.exports=r},gSgL:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.SliceContainer=void 0
var u=a(n("o0o1")),o=a(n("yXPU")),c=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),h=a(n("17x9")),m=r(n("q1tI")),v=n("/MKj"),g=a(n("sEfC")),y=n("6XO9"),b=a(n("i6OX")),w=a(n("prTy")),S=a(n("UbMB")),E=a(n("2s0x")),C=n("/5+U"),_=n("Nu6V"),x=S.default.bind(E.default),k=!1,M=function(e){function a(e){var i;(0,c.default)(this,a),i=(0,l.default)(this,(0,s.default)(a).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(i)),"handleActiveLayer",function(e){
i.setState({activeLayerId:e})}),(0,p.default)((0,f.default)((0,f.default)(i)),"downloadSlice",(0,o.default)(u.default.mark(function e(){var t,n,r,a,o
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.props,n=t.projectCid,r=t.projectName,a=t.isLogin,!0!==i.state.download&&a){e.next=3
break}return e.abrupt("return")
case 3:return i.startLoadSlice(),e.next=6,A(n,r)
case 6:o=e.sent,i.endLoadSlice(o)
case 8:case"end":return e.stop()}},e,this)}))),(0,p.default)((0,f.default)((0,f.default)(i)),"startLoadSlice",function(){i.startTime=Date.now(),i.setState({download:!0}),MB.event("点击下载全部切图","运行页")}),(0,p.default)((0,f.default)((0,f.default)(i)),"endLoadSlice",function(e){e&&(MB.event("下载全部切图时长".concat(Date.now()-i.startTime),"运行页"),i.setState({download:!1}))}),(0,p.default)((0,f.default)((0,f.default)(i)),"requestLayer",function(e){var t=i.props.dispatch
t({type:"REQUEST_SELECT_LAYER",payload:{layerID:e}}),t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:!0}})}),k=!1,i.state={download:!1,activeLayerId:null}
var t=i.props,n=t.loading,r=t.dispatch
return n&&r({type:"reducer:slice:init"}),i}return(0,d.default)(a,e),(0,i.default)(a,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.projectCid,n=e.dispatch,r=this.state.download,a="/api/v2/projects/".concat(t,"/build/slices_zips.json")
r&&(k=!0,n({type:"reducer:preview-toolbar:update",payload:{loadSliceUrl:a}}))}},{key:"render",value:function(){var i=this,e=this.state,t=e.download,c=e.activeLayerId,n=this.props,r=n.slicesMap,a=n.loading,o=n.error,u=n.currentScreenCid,l=n.isLogin
return o||a?m.default.createElement(I,null):0===r.length?m.default.createElement(P,null):m.default.createElement("div",{className:x("slice-container")},r.map(function(e){var t=e.name,n=e.id,r=e.screen_cid,a=e.image,o=e.image_set
return m.default.createElement(T,{key:n,src:a,name:t,currentScreenCid:u,id:n,imageSet:o,screenCid:r,requestLayer:i.requestLayer,activeLayer:i.handleActiveLayer,activeLayerId:c})}),m.default.createElement(R,{onClick:this.downloadSlice,isLoading:t,isLogin:l}))}}]),a}(m.PureComponent)
M.propTypes={slicesMap:h.default.array.isRequired,loading:h.default.bool,error:h.default.bool,currentScreenCid:h.default.string,isLogin:h.default.bool,projectCid:h.default.string,projectName:h.default.string,dispatch:h.default.func}
var T=function(e){function t(){var r
return(0,c.default)(this,t),r=(0,l.default)(this,(0,s.default)(t).call(this)),(0,p.default)((0,f.default)((0,f.default)(r)),"isIncurrentScreen",function(){return r.props.screenCid===r.props.currentScreenCid}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleClick",function(){var e=r.props,t=e.id,n=e.requestLayer;(0,e.activeLayer)(t),r.isIncurrentScreen()?n(t):console.warn("Not in current Screen")}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleOnload",function(){r.setState({imageLoad:!0})}),(0,
p.default)((0,f.default)((0,f.default)(r)),"handleError",function(){throw new Error("image load fail")}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleMouseEnter",function(){r.setState({loadSingleSlice:!0})}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleMouseLeave",function(){r.setState({loadSingleSlice:!1})}),(0,p.default)((0,f.default)((0,f.default)(r)),"handleSingleDownload",function(e){e.persist(),e.stopPropagation(),r.delaySingleDownload()}),r.state={imageLoad:!1,loadSingleSlice:!1},
r.imageRef=function(e){return r.$image=e},r.delaySingleDownload=(0,g.default)(function(){var e=r.props,t=e.imageSet,n=e.name;(0,C.downloadWithATag)({url:t,name:n,type:"zip"}),MB.event("在切图列表中下载单张切图","运行页")},500,{leading:!0}),r}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.src,r=e.activeLayerId,a=e.id,o=this.state,i=o.imageLoad,c=o.loadSingleSlice,u=i?"opacity-1":"opacity-0",l={display:i?"block":"none"},s=x("slice-item",{active:r===a})
return m.default.createElement(y.Tooltip,{type:"block",content:{click:this.isIncurrentScreen()?null:I18N.preview_panel.not_incurrent_screen}},m.default.createElement("div",{className:s,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},m.default.createElement("div",{className:"slice-item-wrap",style:{background:"url(/images/preview/slice-bg.png) left top",backgroundSize:"cover"}},!i&&m.default.createElement("img",{src:"/images/preview/image-load-gif.gif",
alt:"Loading..."}),m.default.createElement(w.default,{style:l,src:n,alt:t,adjustImage:38,className:"".concat(u),onLoad:this.handleOnload,onError:this.handleError})),m.default.createElement("div",{className:"slice-item-content"},m.default.createElement("span",{className:"slice-item-name textEllipsis"},t),c&&m.default.createElement(b.default,{name:"export",type:"dora",onClick:this.handleSingleDownload}))))}}]),t}(m.PureComponent)
T.propTypes={name:h.default.string,src:h.default.string.isRequired,id:h.default.number.isRequired,imageSet:h.default.string.isRequired,screenCid:h.default.string.isRequired,requestLayer:h.default.func.isRequired,activeLayer:h.default.func,activeLayerId:h.default.number,currentScreenCid:h.default.string.isRequired}
var R=function(e){var t=e.onClick,n=e.isLoading,r=e.isLogin?null:I18N.preview.guide_login
return m.default.createElement(y.Tooltip,{content:{click:r},type:"block",position:"top",arrowed:!1,className:x("download"),onClick:t},I18N.preview_panel.download,n?m.default.createElement(O,null):m.default.createElement(b.default,{type:"dora",name:"export",className:x("icon-download")}))}
R.propTypes={onClick:h.default.func,isLoading:h.default.bool,isLogin:h.default.bool}
var N=function(){return m.default.createElement("div",{className:x("layer-load")},m.default.createElement("span",{className:x("spinner")}))},O=function(){return m.default.createElement("div",{className:x("download-slice-load")},m.default.createElement(N,null))},I=function(){return m.default.createElement("div",{className:x("slice-load-wrap")},m.default.createElement(N,null))},P=function(){return m.default.createElement("div",{className:x("no-slice")},m.default.createElement("img",{
src:"/images/preview/no-slice@2x.png"}),m.default.createElement("span",null,I18N.preview_panel.no_slice),m.default.createElement("span",null,I18N.preview_panel.slice_in_sketch),m.default.createElement("a",{href:"https://s3.cn-north-1.amazonaws.com.cn/modao/sketch/MockingBot.sketchplugin.zip"},m.default.createElement("img",{src:"/images/preview/ic_sketch@2x.png",alt:"sketch"}),I18N.preview_panel.download_sketch))},A=function(){var n=(0,o.default)(u.default.mark(function e(t,n){var r,a,o,i,c
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,o=1
case 2:if(!r){e.next=22
break}if(k)return e.abrupt("return")
e.next=5
break
case 5:return e.next=7,(0,_.fetchSliceZip)(t)
case 7:if(i=e.sent,c=i.url,"ok"!==i.status){e.next=15
break}r=!1,a=c,e.next=17
break
case 15:return e.next=17,(0,C.setTimeoutAsync)(Math.min(2e3*o++,1e4))
case 17:if(20<o)return(0,C.downloadFail)(),e.abrupt("return",!1)
e.next=20
break
case 20:e.next=2
break
case 22:return(0,C.downloadWithATag)({url:"/".concat(a),name:n,type:"zip"}),e.abrupt("return",!0)
case 24:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}(),L=(0,v.connect)(function(e){var t=e.model,n=t.current,r=n.screenCid,a=n.projectCid,o=t.user,i=e.container.slices
return{slicesMap:i.slices,loading:i.loading,error:i.error,isLogin:!!o.id,projectCid:a,currentScreenCid:r}})(M)
t.SliceContainer=L},gX9a:function(e,t,n){e.exports={"play-setting-menu":"_1FA8P7EgiQtr3ukFbj9cuo"}},gXld:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=n("6XO9"),m=a(n("i6OX")),v=a(n("ctY3")),g=n("6x+O"),y=a(n("ujtX")),b=a(n("UbMB")).default.bind(y.default),w=function(e){function o(){var e,n;(0,i.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(n)),"setElementRef",function(e){return n.item=e}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleExpand",function(e){n.props.handleScreenItemActions.handleExpand(e,n.props.screen)}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleActivate",function(e){n.props.handleScreenItemActions.handleActivate(e,n.props.screen)}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleDown",
function(e){var t=n.props.handleScreenItemActions.handleDown
t&&t(e,n.props.screen)}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleNameChange",function(e){var t=n.props.handleScreenItemActions.handleNameChange
t&&t(e,n.props.screen)}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleEdit",function(){var e=n.props.handleScreenItemActions.handleEdit
e&&e(n.props.screen)}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleBlur",function(){n.props.handleScreenItemActions.handleBlur(n.props.screen)}),n}return(0,s.default)(o,e),(0,c.default)(o,[{key:"componentDidMount",value:function(){if(this.props.isActive&&!(0,g.isVisible)(this.item)){var e=document.querySelector(".rn-content-body"),t=e.getBoundingClientRect(),n=this.item.getBoundingClientRect().bottom
e.scrollTop+=n-t.bottom+20}}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,t=e.screen,n=e.depth,r=e.isActive,a=e.isEditing,o=e.showExpander,i=e.renderItem,c=14*(n+1),u=!e.collapseKeySet.has(t.cid)?"caret-down":"caret-right"
return p.default.createElement(h.Tooltip,{content:{hover:t.name},type:"block",duration:1e3,style:{width:"100%"}},p.default.createElement("div",{type:"linkable",ref:this.setElementRef,"data-cid":t.cid,onClick:this.handleActivate,onMouseDown:this.handleDown,onDoubleClick:this.handleEdit,style:{paddingLeft:c},className:b("rn-list-item",{active:r})},o&&p.default.createElement("a",{className:"expander",onClick:this.handleExpand,onDoubleClick:this.stopPropagation},p.default.createElement("i",{className:"fa fa-"+u
})),p.default.createElement("div",{className:"screen-name"},p.default.createElement(m.default,{type:"dora",name:"file"}),p.default.createElement(v.default,{editing:a,className:"editable-span",value:MB.unescape(t.name),onChange:this.handleNameChange,onBlur:this.handleBlur})),!a&&i&&i(t)))}}]),o}(p.PureComponent);(t.default=w).propTypes={depth:o.default.number,screen:o.default.object,isActive:o.default.bool,isEditing:o.default.bool,showExpander:o.default.bool,renderItem:o.default.func,
handleScreenItemActions:o.default.shape({handleEdit:o.default.func,handleExpand:o.default.func,handleActivate:o.default.func,handleBlur:o.default.func,handleDown:o.default.func,handleNameChange:o.default.func,setAttr:o.default.func}),collapseKeySet:o.default.object}},h2Vm:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=r(n("q1tI")),i=a(n("17x9")),h=n("6XO9"),m=a(n("i6OX")),v=a(n("0/XF")),g=a(n("tfo6")),y=a(n("Mn07")),b=a(n("sEfC")),w=n("Hlt7"),S=n("1iCU"),E=a(n("naIL")),C=function(e){function i(e){var n;(0,c.default)(this,i),n=(0,u.default)(this,(0,l.default)(i).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(n)),"handleSearch",function(e){n.debounceSearch(e.toLowerCase()),n.setState({keyword:e})}),(0,
f.default)((0,d.default)((0,d.default)(n)),"debounceSearch",(0,b.default)(function(e){MB.event("使用了页面搜索","运行页"),n.props.dispatch({type:"reducer:preview-panel:search",payload:{screenSearch:e}})},300)),(0,f.default)((0,d.default)((0,d.default)(n)),"handleListView",function(){var e=n.props.toolbarActiveItem
MB.event("在".concat(S.TOOLBAR_TRAKING_CONFIG[e],",点击了列表"),"运行页"),n.setState({imageMode:!1})}),(0,f.default)((0,d.default)((0,d.default)(n)),"handleThumbnailView",function(){var e=n.props.toolbarActiveItem
MB.event("在".concat(S.TOOLBAR_TRAKING_CONFIG[e],",点击了缩略图"),"运行页"),n.setState({imageMode:!0})}),(0,f.default)((0,d.default)((0,d.default)(n)),"renderCommentIcon",function(e){var t=n.props.screenCommentThreadCountMap
if(1<=(t&&t[e.cid]||0)&&!MB.isHTMLZip())return p.default.createElement("span",{className:"toggle-comment"},p.default.createElement(m.default,{type:"dora",name:"comment"}))})
var t=e.screenTreeData,r=t.nodeMap,a=t.screenNameCidMap,o=e.screenSearch
return n.state={keyword:"",imageMode:e.isDemo,searchScreenKeyMap:(0,w.filterSearch)(a,o,r)||[]},n}return(0,s.default)(i,e),(0,o.default)(i,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.screenSearch,n=this.props,r=n.screenTreeData,a=r.nodeMap,o=r.screenNameCidMap
if(t!=n.screenSearch){var i=(0,w.filterSearch)(o,t,a)||[]
this.setState({searchScreenKeyMap:i})}}},{key:"render",value:function(){var e=this.props,t=e.screenTreeData,n=e.currentScreenCid,r=e.screenSearch,a=e.dispatch,o=this.state,i=o.imageMode,c=o.keyword,u=o.searchScreenKeyMap,l=0<r.length,s=l?{root:u}:t.childListMap
return p.default.createElement("div",{className:E.default["screen-panel"]},p.default.createElement("div",{className:"search-box"},p.default.createElement(v.default,{value:c,placeholder:I18N.preview.search,onChange:this.handleSearch}),p.default.createElement("div",{className:"screen-mode-tab"},p.default.createElement(h.Tooltip,{className:"view-mode-icon",content:{hover:I18N.preview.list_mode},duration:1e3,position:"bottom",tipClassName:"marign-top-20"},p.default.createElement(m.default,{type:"dora",
name:"list",className:i?"fs-color-gray":"",onClick:this.handleListView})),p.default.createElement(h.Tooltip,{className:"view-mode-icon",content:{hover:I18N.preview.image_mode},duration:1e3,position:"bottom",tipClassName:"marign-top-20"},p.default.createElement(m.default,{type:"dora",name:"cover",className:i?"":"fs-color-gray",onClick:this.handleThumbnailView})))),p.default.createElement("div",{className:"screen-list-container rn-content-body"},i?p.default.createElement(y.default,{activeCid:n,
screenTreeMap:s,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:a}):p.default.createElement(g.default,{activeCid:n,isSearching:l,screenTreeData:t,screenTreeMap:s,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:a})))}}]),i}(p.PureComponent)
t.default=C,(0,f.default)(C,"propTypes",{screenTreeData:i.default.object,screenCommentThreadCountMap:i.default.object,currentScreenCid:i.default.string,screenNameCidMap:i.default.object,screenSearch:i.default.string,toolbarActiveItem:i.default.string,isDemo:i.default.bool,noSearch:i.default.bool,dispatch:i.default.func})},h9XN:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CopyBtn=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=a(n("sxGJ")),m=n("6XO9"),v=n("/5+U"),g=a(n("mfFm")),y=function(e){function t(){var e
return(0,o.default)(this,t),(e=(0,c.default)(this,(0,u.default)(t).call(this))).onClipboardEvent=e.onClipboardEvent.bind((0,s.default)((0,s.default)(e))),e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.target,r=e.text
this.clipboard=r?new h.default(this.$copyBtn,{text:function(){return(0,v.unescapeHTML)(document.querySelector(r).innerText)}}):new h.default(this.$copyBtn,{target:function(){return document.querySelector(n)}}),this.clipboard.on("success",function(e){t.error=!1,window.getSelection().removeAllRanges(),t.onClipboardEvent()}),this.clipboard.on("error",function(e){t.error=!0,t.onClipboardEvent()})}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"onClipboardEvent",value:function(){
MB.event("使用了代码复制","运行页")}},{key:"render",value:function(){var t=this
return f.default.createElement(m.Tooltip,{arrowed:!1,content:{click:I18N.preview_panel.copied},duration:1e3,className:g.default.copyBtn},f.default.createElement("span",{ref:function(e){return t.$copyBtn=e}},I18N.copy))}}]),t}(f.Component)
t.CopyBtn=y,(0,d.default)(y,"propTypes",{target:p.default.string,text:p.default.string})},hgQt:function(e,t,n){var r=n("Juji"),a=n("4sDh")
e.exports=function(e,t){return null!=e&&a(e,t,r)}},hkUU:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){function e(){(0,a.default)(this,e),this.timeoutMap=new Map}return(0,o.default)(e,[{key:"setTimeout",value:function(r){function e(e,t,n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(e,t,n){var r=this,a=setTimeout(function(){t(),r.clearTimeout(e,t)},n)
return this.setToken(e,t,a),a})},{key:"clearTimeout",value:function(n){function e(e,t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(e,t){var n=this.getToken(e,t)
void 0!==n&&(clearTimeout(n),this.clearToken(e,t))})},{key:"clearTimeoutByKey",value:function(n){var r=this,e=this.timeoutMap.get(n)
void 0!==e&&(e.forEach(function(e,t){return r.clearTimeout(n,t)}),this.timeoutMap.delete(n))}},{key:"clear",value:function(){var n=this
this.timeoutMap.forEach(function(e,t){return n.clearTimeoutByKey(t)})}},{key:"setToken",value:function(e,t,n){var r=this.timeoutMap.get(e)
void 0===r&&(r=new Map,this.timeoutMap.set(e,r)),r.set(t,n)}},{key:"getToken",value:function(e,t){var n=this.timeoutMap.get(e)
if(n)return n.get(t)}},{key:"clearToken",value:function(e,t){var n=this.timeoutMap.get(e)
n&&n.delete(t)}}]),e}()
t.default=i},hkZD:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfMessageOverflow=t.EmptyCommentList=t.ReplyDropdown=t.ContentMessage=t.ContentHeader=t.ifCanReply=t.getUserStatus=t.focusBtnColor=t.blurBtnColor=t.COLLABORATOR=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=n("CLzH"),m=n("6XO9"),v=a(n("i6OX")),g=a(n("zkrS")),y=n("H5Dy"),b=a(n("mquD")),w=a(n("UbMB")).default.bind(b.default),S=function(e){var t=e.onDelete
return f.default.createElement(m.Tooltip,{content:{hover:I18N.preview.comment.modify_delete},duration:1e3},f.default.createElement(m.Dropdown,{opener:f.default.createElement(v.default,{type:"dora",name:"trash",className:b.default.modify}),menuList:[I18N.preview.comment.modify_delete],menuX:"left",menuClassName:"comment-delete",arrowed:!0,onSelect:t}))}
S.propTypes={onDelete:p.default.func.isRequired}
var E=function(e){var t=e.onSelect
return f.default.createElement(m.Tooltip,{content:{hover:I18N.preview.setting},duration:1e3},f.default.createElement(m.Dropdown,{opener:f.default.createElement(v.default,{name:"cog",type:"dora",className:b.default.edit}),menuList:[I18N.preview.comment.modify_edit],menuX:"left",arrowed:!0,menuClassName:"comment-setting",onSelect:t}))}
E.propTypes={onSelect:p.default.func.isRequired}
var C=function(e){var t=e.hasUser,n=e.hasSelectCommentThread
return f.default.createElement("div",{className:w("content-empty")},f.default.createElement("img",{src:"".concat("/images/preview/no-comment@2x.png")}),f.default.createElement("h3",{className:w("add-comment")},I18N.preview.comment.add_comment),f.default.createElement("span",null,(0,y.getProjectCommentPermission)().allowComment?t?g.default.I18N.preview.comment.thread_none_tip_signin:n?g.default.I18N.preview.comment.reply_none_tip:g.default.I18N.preview.comment.thread_none_tip:(0,y.getProjectCommentPermission
)().denyMessage))};(t.EmptyCommentList=C).propTypes={hasUser:p.default.bool,hasSelectCommentThread:p.default.bool}
var _="#8D9EA7"
t.blurBtnColor=_
t.focusBtnColor="#5B6B73"
var x=function(e){function n(){var t
return(0,o.default)(this,n),t=(0,c.default)(this,(0,u.default)(n).call(this)),(0,d.default)((0,s.default)((0,s.default)(t)),"unMountShow",function(){t.setState({animate:!1})}),(0,d.default)((0,s.default)((0,s.default)(t)),"handleAnimateEnd",function(){t.props.isReply||t.setState({show:!1})}),t.state={backgroundColor:_,disabled:!0,show:!1,animate:!1},t.handleActive=function(e){t.setState({backgroundColor:e?"#5B6B73":_,disabled:!e})},t}return(0,l.default)(n,e),(0,i.default)(n,[{
key:"componentWillReceiveProps",value:function(e){var t=this
if(!e.isReply)return this.unMountShow()
this.setState({show:!0}),setTimeout(function(){t.setState({animate:!0})},0)}},{key:"componentDidUpdate",value:function(e,t){this.props.isReply&&t.show===this.state.show&&N(this.containerRef)}},{key:"render",value:function(){var t=this,e=this.props,n=e.setReplyTextareaRef,r=e.onValueChange,a=e.doReply,o=this.state,i=o.backgroundColor,c=o.disabled,u=o.show,l=o.animate,s=w("dropdown-reply",{"dropdown-on":l,"dropdown-off":!l})
return u?f.default.createElement("div",{className:s,onTransitionEnd:this.handleAnimateEnd,ref:function(e){return t.containerRef=e}},f.default.createElement(h.ReplyTextarea,{ref:n,onValueChange:r,handleActive:this.handleActive,placeholder:g.default.I18N.preview.comment.comment_placeholder,minHeight:60,isMultiLine:!0,isAutoHeight:!0}),f.default.createElement(m.Button,{onClick:a,style:{backgroundColor:i,cursor:c?"not-allowed":"pointer"},disabled:c},g.default.I18N.preview.comment.comment_create)):null}}]),n}(
f.PureComponent);(t.ReplyDropdown=x).propTypes={setReplyTextareaRef:p.default.func.isRequired,onValueChange:p.default.func.isRequired,doReply:p.default.func.isRequired,isReply:p.default.bool.isRequired}
var k=function(e){var t=e.permission,n=(e.comment,e.isFolded),r=e.setEditableSpanComponent,a=e.onValueChange,o=e.getValue,i=e.isEdit,c=e.toggleEdit
return f.default.createElement("div",{className:w("comment-content",{folded:n})},f.default.createElement(h.EditableSpan,{ref:r,onValueChange:a,getValue:o,placeholder:g.default.I18N.preview.comment.comment_placeholder,isEditLocked:!t.update,isEditing:i,toggleEdit:c,isMultiLine:!0}))};(t.ContentMessage=k).propTypes={permission:p.default.object,comment:p.default.object,isFolded:p.default.bool,isEdit:p.default.bool,setEditableSpanComponent:p.default.func,onValueChange:p.default.func,getValue:p.default.func,
toggleEdit:p.default.func,handleActive:p.default.func}
var M=function(e){var t=e.markIndex,n=e.information,r=e.onSelect,a=e.onDelete,o=e.permission,i=e.ifShowBtn,c=e.className,u=void 0===c?"":c,l=e.showByEnter,s=n.avatar,d=n.name
return f.default.createElement("div",{className:"".concat(w("header-container")," ").concat(u)},f.default.createElement("div",{className:w("header-info")},f.default.createElement(h.AvatarInformation,{avatar:s,name:d,index:t})),(o.update||o.delete)&&i&&l&&f.default.createElement("div",{className:w("header-tool")},o.update&&f.default.createElement(E,{onSelect:r}),o.delete&&f.default.createElement(S,{onDelete:a})))};(t.ContentHeader=M).propTypes={markIndex:p.default.number,information:p.default.object,
permission:p.default.object,onSelect:p.default.func,onDelete:p.default.func,ifShowBtn:p.default.bool,className:p.default.string,showByEnter:p.default.bool}
var T="collaborator"
t.COLLABORATOR=T
var R=function(e,t){return e?"guest"===t.userRole?"not_collaborator":T:"not_signin"}
t.getUserStatus=R
t.ifCanReply=function(e){var t=e.userId,n=e.currentState,r=e.permission
return R(t,n)===T&&r.create}
t.checkIfMessageOverflow=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:120
return e.length>t}
var N=function(e){if(e){var t=e.getBoundingClientRect().bottom+O,n=document.getElementById("comment-thread"),r=n.scrollTop
n.scrollHeight<t+r?setTimeout(function(){return n.scrollTop=r+O},300):I<t&&(n.scrollTop=r+O)}},O=120,I=window.innerHeight},iETn:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.ReplyEntry=t.CommentReplyEntry=void 0
var o=a(n("MVZn")),i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),m=r(n("q1tI")),p=a(n("17x9")),v=a(n("i6OX")),g=a(n("zkrS")),y=n("hkZD"),b=a(n("mquD")),w=a(n("UbMB")).default.bind(b.default),h=function(e){var t=e.replyList,c=e.commentOperations,u=(e.current,e.currentState),l=e.doCreateComment
return t.map(function(e,t){var n=e.user_id,r=e.cid,a=c.getCollaborator(n),o=a.name,i=a.avatar
return m.default.createElement(S,{key:r,name:o,avatar:i,comment:e,permission:c.getPermission(n),currentState:u,commentOperations:c,doCreateComment:l})})};(t.CommentReplyEntry=h).propTypes={replyList:p.default.array,commentOperations:p.default.object,permission:p.default.object,current:p.default.object,currentState:p.default.object,doCreateComment:p.default.func}
var S=function(e){function a(e){var t;(0,i.default)(this,a),t=(0,u.default)(this,(0,l.default)(a).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(t)),"doCreateComment",function(e){t.props.doCreateComment(e,!0),t.state.isReply&&t.toggleReply()}),(0,f.default)((0,d.default)((0,d.default)(t)),"getCommentMessage",function(){return t.props.comment&&t.props.comment.message}),(0,f.default)((0,d.default)((0,d.default)(t)),"handleSetting",function(e){0===Number(e)&&(t.toggleEditing(),MB.event("二次编辑","运行页"))}
),(0,f.default)((0,d.default)((0,d.default)(t)),"toggleEditing",function(){t.toggleEditState(),t.editableSpanComponent&&t.editableSpanComponent.toggleEditing(!t.state.isEdit)})
var n=e.commentOperations,r=e.comment
return t.editableSpanComponent=null,t.setEditableSpanComponent=function(e){return t.editableSpanComponent=e},t.setReplyTextareaRef=function(e){return t.replyTextareaRef=e},t.doReply=function(e){t.replyTextareaRef&&t.replyTextareaRef.onEditFinish(e)},t.doUpdateComment=function(e){return n.doUpdateComment((0,o.default)({},r,{message:e}))},t.doDeleteComment=function(){return n.doDeleteComment(r)},t.toggleReply=function(){return t.setState(function(e){return{isReply:!e.isReply}})},t.toggleFolded=function(){
return t.setState(function(e){return{isFolded:!e.isFolded}})},t.toggleEditState=function(){return t.setState(function(e){return{isEdit:!e.isEdit}})},t.state={isReply:!1,isFolded:!1,isEdit:!1,showByEnter:!0},t}return(0,s.default)(a,e),(0,c.default)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.nextComment,n=t&&(0,y.checkIfMessageOverflow)(t.message)
n!=this.state.isFolded&&this.setState({isFolded:n})}},{key:"render",value:function(){var e=this.props,t=e.comment,n=e.name,r=e.avatar,a=e.permission,o=e.currentState,i=t.message,c=t.updated_at,u=t.user_id,l=this.state,s=l.isReply,d=l.isFolded,f=l.isEdit,p=l.showByEnter,h=(0,y.ifCanReply)({userId:u,currentState:o,permission:a})
return m.default.createElement("div",{className:"".concat(w("container-reply"),"  ").concat(f&&w("remove-background"))},m.default.createElement(y.ContentHeader,{onDelete:this.doDeleteComment,onSelect:this.handleSetting,permission:a,information:{avatar:r,name:n},className:w("reply-header"),ifShowBtn:!f,showByEnter:p}),m.default.createElement("div",{className:"".concat(w("container-main")," ").concat(w("reply-content"))},i&&m.default.createElement(y.ContentMessage,{permission:a,
onValueChange:this.doUpdateComment,getValue:this.getCommentMessage,setEditableSpanComponent:this.setEditableSpanComponent,isEdit:f,toggleEdit:this.toggleEditing,comment:t,isFolded:d})),!this.state.isEdit&&m.default.createElement("div",{className:w("container-bottom")},m.default.createElement("div",{className:b.default.time},g.default.L10N.parseTimeAgo(1e3*c)),h&&m.default.createElement("div",{className:w("reply-sort"),onClick:this.toggleReply},m.default.createElement(v.default,{type:"dora",name:"reply",
className:w("btn-reply")}),s?g.default.I18N.preview.comment.cancel_reply:g.default.I18N.preview.comment.comment_create)),m.default.createElement(y.ReplyDropdown,{isReply:s,setReplyTextareaRef:this.setReplyTextareaRef,onValueChange:this.doCreateComment,doReply:this.doReply}))}}]),a}(m.PureComponent)
t.ReplyEntry=S,(0,f.default)(S,"propTypes",{comment:p.default.object,commentOperations:p.default.object,currentState:p.default.object,name:p.default.string,avatar:p.default.string,permission:p.default.object,doCreateComment:p.default.func,nextComment:p.default.object})},iKZC:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.doSaveWithSocketAndFallback=t.createAutoSaveQueue=void 0
var b=r(n("o0o1")),w=r(n("MVZn")),S=r(n("yXPU")),E=n("os03"),C=n("Clcl")
t.createAutoSaveQueue=function(e){var t=e.doSave,n=e.onError,r=e.delay,a=(0,E.createEventTarget)(),o=a.clear,i=a.addEventListener,c=a.removeEventListener,u=a.dispatchEvent,l=(0,E.createSaveQueue)({beforeSave:function(){return u({type:"beforesave"})},afterSave:function(){return u({type:"aftersave"})},doSave:t,onError:n}),s=l.clear,d=l.add,f=l.save,p=l.filter,h=l.getLength,m=l.getIsSaving,v=l.getSavingState,g=(0,E.createTimer)({func:f,delay:r}),y=g.start,b=g.stop
return{reset:function(){b(),o(),s()},add:function(e){d(e),y()},getState:function(){return{pendingLength:h(),isSaving:m(),savingState:v()}},getIsEmpty:function(){return!m()&&!h()},getIsSaving:m,filterSaveQueue:p,triggerSave:f,afterCurrentSave:function(t){if(!m())return t()
i("aftersave",function e(){c("aftersave",e),t()})},addEventListener:i,removeEventListener:c}}
var a=function(){var t=(0,S.default)(b.default.mark(function e(t){var l,s,n,d,f,p,h,m,v,g,y,r,a,o
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l=t.setSavingState,s=t.getAutoSaveQueueState,n=t.saveChunkList,d=t.saveQueueLength,f=t.getSaveItemInfo,p=t.isSocketAvailable,h=t.doSocketBatchSave,m=t.onSocketError,v=t.doFallbackSaveItem,g=t.onFallbackError,y=0,r=b.default.mark(function e(a,o){var u,i,t
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u=n[a],i=0,t=b.default.mark(function e(){var c,t,n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c={chunkIndex:a,chunkIndexMax:o,saveChunkFirstInfo:f(u[0]),saveChunkLength:u.length,chunkAttempt:i,saveQueueIndex:y,saveQueueLength:d},e.prev=1,p())return e.next=5,(0,E.withTimeoutRetry)({retry:2,timeout:6e4,task:function(){var t=(0,S.default)(b.default.mark(function e(t){var n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.attempt,r=t.timeout,l((0,w.default)({type:"socket-batch-save",attempt:n,timeout:r},c)),e.next=4,h({saveChunk:u,attempt:n,timeout:r})
case 4:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var n=(0,S.default)(b.default.mark(function e(t,n){var r,a
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.attempt,a=n.timeout,l((0,w.default)({type:"socket-batch-save-retry",error:t.toString(),attempt:r,timeout:a},c)),e.next=4,m(t,{saveChunk:u,attempt:r,timeout:a})
case 4:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()})
e.next=6
break
case 5:return e.abrupt("return","break")
case 6:e.next=11
break
case 8:e.prev=8,e.t0=e.catch(1),(0,C.REPORT_ERROR)(e.t0,"[AutoSaveQueue][doSave] failed to save with socket",s())
case 11:e.prev=11,t=b.default.mark(function e(t,n){var o,i
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=u[t],i=(0,w.default)({index:t,indexMax:n,saveItem:f(o)},c,{saveQueueIndex:y+t}),e.next=4,(0,E.withTimeoutRetry)({retry:4,timeout:1e5,task:function(){var t=(0,S.default)(b.default.mark(function e(t){var n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.attempt,r=t.timeout,l((0,w.default)({type:"fallback-save-item",attempt:n,timeout:r},i)),e.next=4,v({saveItem:o,attempt:n,timeout:r})
case 4:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var n=(0,S.default)(b.default.mark(function e(t,n){var r,a
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.attempt,a=n.timeout,l((0,w.default)({type:"fallback-save-item-retry",error:t.toString(),attempt:r,timeout:a},i)),e.next=4,g(t,{saveItem:o,attempt:r,timeout:a})
case 4:case"end":return e.stop()}},e,this)}))
return function(e,t){return n.apply(this,arguments)}}()})
case 4:case"end":return e.stop()}},e,this)}),n=0,r=u.length
case 14:if(n<r)return e.delegateYield(t(n,r),"t1",16)
e.next=19
break
case 16:n++,e.next=14
break
case 19:return e.abrupt("return","break")
case 22:e.prev=22,e.t2=e.catch(11),(0,C.REPORT_ERROR)(e.t2,"[AutoSaveQueue][doSave] failed to save with fetch fallback",s())
case 25:i++
case 26:case"end":return e.stop()}},e,this,[[1,8],[11,22]])})
case 3:return e.delegateYield(t(),"t0",5)
case 5:if("break"===e.t0)return e.abrupt("break",10)
e.next=8
break
case 8:e.next=3
break
case 10:y+=u.length
case 11:case"end":return e.stop()}},e,this)}),a=0,o=n.length
case 4:if(a<o)return e.delegateYield(r(a,o),"t0",6)
e.next=9
break
case 6:a++,e.next=4
break
case 9:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.doSaveWithSocketAndFallback=a},iScx:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),o=n("Ehhz").MODEL_OPERATION_MAP.Collaborator,a=(0,r.createStateStore)([]),i=a.getState,c=a.setState,u=a.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:collaborators:update",payload:o(e,a,i)})})},s={entryMap:{"collaborators:refresh":u(function(e,t,n){var r=t.dispatch,a=n&&n.payload;(e=o.refreshStateList(e,a,!1)).forEach(function(e){e.avatar||(e.avatar="/images/avatar.png")}),r({type:"reducer:collaborators:update",payload:e})}),"collaborators:add":l(o.addState,!1),"collaborators:add-local":l(o.addState,!0),"collaborators:update":l(o.updateState,!1),"collaborators:update-local":l(o.updateState,!0),"collaborators:delete":l(o.deleteState,!1),
"collaborators:delete-local":l(o.deleteState,!0)},getState:i,setState:c}
t.default=s},iX79:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),p=r(n("q1tI")),h=n("6XO9"),m=n("1iCU"),v=a(n("RtVw")),g=function(e){function o(){var e,t;(0,i.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,d.default)((0,d.default)(t)),"handleFullScreen",function(){MB.event("全屏模式开启","运行页")
var e=t.props.dispatch
e({type:"entry:preview:select",payload:{toolbarActiveItem:m.PREVIEW}}),e({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!0}}),e({type:"entry:auto-fit:preview:scale"}),e({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:-28}}})}),t}return(0,s.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){return p.default.createElement(h.Tooltip,{position:"bottom",tipClassName:"margin-top-20",duration:1e3,content:I18N.preview.fullscreen,style:{lineHeight:0,cursor:"pointer"}},
p.default.createElement("div",{className:v.default.fullscreen,onClick:this.handleFullScreen},p.default.createElement(h.SVG,{name:"preview/fullscreen"})))}}]),o}(p.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{dispatch:o.default.func})},inTe:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var Ie=r(n("MVZn")),a=r(n("17x9")),Pe=r(n("q1tI")),Ae=n("qOCw"),Le=n("Ro3d"),je=n("PqLM"),De=n("RUem"),o=function(e){var t=e.layer,n=e.unit,r=e.ratio,a=e.showGlobal,o=e.userPickColor,i=void 0===o?[]:o,c=e.globalColor,u=void 0===c?[]:c,l=e.globalText,s=void 0===l?[]:l,d=e.documentColor,f=void 0===d?[]:d,p=e.screenColor,h=void 0===p?[]:p,m=e.language,v=e.colorUnit,g=e.dispatch,y=t.src_left,b=t.src_top,w=t.src_width,S=t.src_height,E=t.origin_width,C=t.origin_height,_=t.bd_radius,x=t.line_height,k=t.bg_colors,
M=void 0===k?[]:k,T=t.borders,R=void 0===T?[]:T,N=t.i,O=t.display_name,I=t.padding,P=void 0===I?0:I,A=t.hiddSpacing,L=void 0!==A&&A,j=t.text_styles,D=void 0===j?[]:j,B=t.alignment,U=t.vertical_alignment,F=t.image,q=t.text,W=t.letter_spacing,H=t.image_set_zip,z=t.shadows,V=void 0===z?[]:z,Y=t.inner_shadows,Z=void 0===Y?[]:Y,J=t.rotation,X=t.textShadows,G=void 0===X?[]:X,K=t.image_set,Q=void 0===K?[]:K,$=t.name,ee=0<R.length,te=0<M.length,ne=!!F,re=0<D.length&&q&&(0,Ae.getTextContent)(t).length,
ae=0<V.length||0<G.length,oe=0<Z.length,ie=H,ce={left:y,top:b,width:E||w,height:C||S,borderRadius:_,opacity:t.o,rotation:J,ratio:r,unit:n}
if("line"===$){var ue=(0,je.getLineGeneralInfo)(t,!0),le=ue.length,se=ue.thickness,de=ue.angle
ce.width=le,ce.height=se,ce.rotation=de}var fe=(0,Ae.getBaseAttributes)(ce),pe=fe.adapterTop,he=fe.adapterLeft,me=fe.adapterWidth,ve=fe.adapterHeight,ge=fe.radius,ye=fe.opacity,be=fe.rotate,we={lineHeight:x,letterSpacing:W,unit:n,ratio:r},Se=(0,Ae.getTextAttributes)(we),Ee=Se.lineHeight,Ce=Se.letterSpacing,_e="number"==typeof N?N?"italic":"normal":void 0,xe={textStyles:D,background:M,borders:R,shadows:V,innerShadows:Z,colorUnit:v,ratio:r,unit:n},ke=(0,Ae.getCodeAttributes)(xe),Me=t.o&&100!=t.o?t.o/100:null,
Te=(0,Le.transfromProptype)({attr:(0,Ie.default)({x:he,y:pe,width:me,height:ve,lineHeight:Ee,textAlign:B,opacity:Me,borderRadius:ge},ke),language:m,unit:n}),Re=ne?"ImageView":re?"TextView":"View",Ne="screen"===t.type||t.kind?t.name:O,Oe="line"===t.name
return a?Pe.default.createElement(De.GlobalAttributes,{adapterWidth:me,adapterHeight:ve,documentColor:f,globalText:s,globalColor:u,screenColor:h,userPickColor:i,colorUnit:v,dispatch:g}):Pe.default.createElement("div",null,Pe.default.createElement(De.LayerName,{value:Ne}),Pe.default.createElement(De.BasicAttributes,{adapterTop:pe,adapterLeft:he,adapterWidth:me,adapterHeight:ve,rotate:be,radius:ge,opacity:ye,unit:n,colorUnit:v}),re&&Pe.default.createElement(De.TextLayerInfo,{textStyles:D,alignment:B,
vertical_alignment:U,lineHeight:Ee,letterSpacing:Ce,ratio:r,unit:n,o:t.o,padding:P,fontStyle:_e,colorUnit:v,hiddSpacing:L,text:(0,Ae.getTextContent)(t)}),te&&Pe.default.createElement(De.Fills,{backgroundColorSort:M,colorUnit:v}),ee&&Pe.default.createElement(De.BorderInfo,{isStroke:Oe,borderSort:R,ratio:r,unit:n,colorUnit:v}),ae&&Pe.default.createElement(De.Shadows,{shadows:V,textShadows:G,colorUnit:v,unit:n,ratio:r}),oe&&Pe.default.createElement(De.Shadows,{shadows:Z,colorUnit:v,unit:n,ratio:r,
isInnerShaow:!0}),ie&&Pe.default.createElement(De.ImageInfo,{imageSetZip:H,name:t.display_name,imageSet:Q}),Pe.default.createElement(De.CodeBox,{code:Te,whichAndView:Re,language:m,text:(0,Ae.getTextContent)(t)||""}))}
o.propTypes={userPickColor:a.default.array,screenColor:a.default.array,documentColor:a.default.array,globalText:a.default.array,globalColor:a.default.array,colorUnit:a.default.string,layer:a.default.object,getLayerRef:a.default.func,showGlobal:a.default.bool,unit:a.default.string,ratio:a.default.number,language:a.default.string,dispatch:a.default.func}
var i=o
t.default=i},"j+XH":function(e){e.exports={"// PLATFORM_DEFAULT_FONT":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",PLATFORM_DEFAULT_FONT:{"zh-CN":{iphone:"PingFangSC",ipad:"PingFangSC",apple_watch:"PingFangSC",android:"SourceHanSansSC",customize:"SourceHanSansSC",web:"SourceHanSansSC"},en:{iphone:"SFUIText",ipad:"SFUIText",apple_watch:"SFUIText",android:"Roboto",customize:"Arial",web:"Arial"}},
"// WESTERN_ONLY_FONT_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",WESTERN_ONLY_FONT_LIST:["SFUIText","Roboto","Arial","Courier New","Helvetica","Times New Roman"]}},j1JO:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=d,t.watchFetchSlices=f,t.fetchSliceData=p
var i=r(n("MVZn")),c=r(n("o0o1")),u=n("oZtI"),l=r(n("Nu6V")),a=c.default.mark(d),o=c.default.mark(f),s=c.default.mark(p)
function d(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.all)([f()])
case 2:case"end":return e.stop()}},a,this)}function f(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)("reducer:slice:init",p)
case 2:case"end":return e.stop()}},o,this)}function p(e){var t,n,r,a,o
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.select)()
case 2:if(t=e.sent,n=t.model.current.projectCid,e.prev=4,n)return e.next=8,(0,u.call)(l.default,n)
e.next=14
break
case 8:r=e.sent,a=r.slices,o=a.filter(h),r.slices=o,e.next=15
break
case 14:r={slices:[{id:1,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",src:"ssss",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:2,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:3,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"}]}
case 15:return e.next=17,(0,u.put)({type:"reducer:slice:success",payload:(0,i.default)({},r)})
case 17:e.next=24
break
case 19:return e.prev=19,e.t0=e.catch(4),console.log(e.t0.stack),e.next=24,(0,u.put)({type:"reducer:slice:fail"})
case 24:case"end":return e.stop()}},s,this,[[4,19]])}var h=function(e){var t=e.width,n=void 0===t?1:t,r=e.height
return 0<n&&0<(void 0===r?1:r)}},"jbM+":function(e,t,n){var r=n("R/W3")
e.exports=function(e,t){return!(null==e||!e.length)&&-1<r(e,t,0)}},jeLk:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){function e(){(0,a.default)(this,e),this.store=null,this.viewMap={},this.observerMap={}}return(0,o.default)(e,[{key:"setStore",value:function(e){this.store=e}},{key:"callObserver",value:function(e){for(var t,n=arguments.length,r=new Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a]
return this.observerMap[e]&&(t=this.observerMap)[e].apply(t,[e].concat(r))}},{key:"setObserver",value:function(e,t){this.observerMap[e]=t}},{key:"setView",value:function(e,t){this.viewMap[e]=t}},{key:"callViewMethod",value:function(e,t){for(var n,r=this.viewMap[e],a=arguments.length,o=new Array(2<a?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i]
return r&&r[t]?(this.callObserver("view:".concat(e,":").concat(t)),r[t].apply(r,[this.store].concat(o))):(n=console).warn.apply(n,["[WebpackInterface][callViewMethod] missed",e,t].concat(o))}},{key:"init",value:function(){this.callObserver("init"),this.store&&this.store.dispatch({type:"entry:state:init"})}},{key:"clear",value:function(){this.store&&this.store.dispatch({type:"entry:state:clear"}),this.callObserver("clear")}}]),e}()
t.default=i},jl5L:function(e,t,n){var o=n("Sxd8"),i=n("tLB3"),c=n("dt0z"),u=Math.min
e.exports=function(e){var a=Math[e]
return function(e,t){if(e=i(e),t=null==t?0:u(o(t),292)){var n=(c(e)+"e").split("e"),r=a(n[0]+"e"+(+n[1]+t))
return+((n=(c(r)+"e").split("e"))[0]+"e"+(+n[1]-t))}return a(e)}}},jvRN:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getMockingBotWidgets=t.isSketchLayer=t.checkColor=void 0
var m=r(n("MVZn")),s=n("G3NE"),i=r(n("cl8F")),c=n("Ibie"),d=n("FkXu"),o=n("/5+U"),u=n("upRB"),y=/\\\w+/gi,b=function(e){return e?e.replace(y,"").trim():i.default}
t.checkColor=b
t.isSketchLayer=function(e){return Number.isInteger(e)||"artboard-base"===e}
t.getMockingBotWidgets=function(e){var t=e.model.widgets,n=(0,u.getCurrentProject)(e).device,r=(0,u.getCurrentScreen)(e),a=l(r.cid),o=t.concat(a),i=0
return o.filter(function(e){return i||e.screen_cid!==r.cid||"status_bar"!==e.name||(i=e.height),!(e.screen_cid!==r.cid||["pg","lr","sticky"].includes(e.name)||"image_view"===e.name&&e.width===r.width&&e.height===r.height)}).map(function(e){return(0,c.patchWidgetSize)(e,r,i)}).map(function(e){return f(e,n)}).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})}
var l=function(h){var e=window.Screen
return e?e.find(h).cpanels().reduce(function(e,s){var d=s.top,f=s.left,p=s.cid,t=s.mainState().cwidgets()
return e.concat([s.__proto__]).concat(t.map(function(e){var t=e.__proto__,n=t.left,r=t.top,a=t.width,o=t.height,i=Math.min(Math.max(n,0),s.width)+f,c=Math.min(Math.max(n+a,0),s.width)+f,u=Math.min(Math.max(r,0),s.height)+d,l=Math.min(Math.max(r+o,0),s.height)+d
return(0,m.default)({},t,{z:t.z,top:u,left:i,width:c-i,height:l-u,screen_cid:h,panel_cid:p,id:"".concat(p,"-").concat(t.id)})}))},[]):[]},f=function(e,t){var n,r={},a=e.name,o=e.ro,i=e.border_radius,c=e.bs,u=e.ha,l=e.va,s=e.lh,d=e.box_shadow,f=e.text_shadow,p=e.sc,h=e.ds,m=e.text
if(m&&(n=w(m.replace(/<p>/g,"").replace(/<\/p>/g,"\n")),r.text_styles="rich_text"===e.name?[E(JSON.parse(e.text))]:[{font_size:e.fs,color:b(e.tc||S(a,"tc",t)),length:n.length,font_face:C(m,t)}],r.text=n),u&&(r.alignment=u),l&&(r.vertical_alignment=l),s&&(r.line_height=s),i&&(r.bd_radius=i),o&&(r.rotation=o),r.bc=b(e.bc||S(a,"bc",t)),c&&(r.borders=[{thickness:c,color:b(r.bc)}]),e.bg&&(r.bg_colors=[{value:b(e.bg)}]),"triangleb"!==a&&"triangletl"!==a&&"icon_button"!==a||(r.bg_colors=[{value:b(e.tc||S(a,"tc"))}
]),d){var v=JSON.parse(d)[0]
r.shadows=[{offset_x:v[1],offset_y:v[2],blur_radius:v[3],spread:v[4],color:b(v[5].replace(y,""))}]}else p&&h&&(r.shadows=[{color:b(p.replace(y,"")),blur_radius:h}])
if(f){var g=JSON.parse(f)[0]
r.textShadows=[{offset_x:g[0],offset_y:g[1],blur_radius:g[2],color:b(g[3].replace(y,""))}]}else e.ts&&(r.textShadows=[{color:b(e.tsc.replace(y,"")),blur_radius:e.ts}])
return"label"!==a&&"text_view"!==a||(r.hiddSpacing=!0),Object.assign({},e,r)},a=/<[^>]+>/gi,w=function(e){return!!e&&e.replace(a,"")},S=function(e,t,n){var r="".concat(e,"_").concat(n),a=e,o=i.default[r]||i.default[a]
return o&&o[t]?o[t]:i.default[t]},E=function(e){var t=(0,s.getRichTextAttr)(e),n=t.fontFamily,r=t.fontWeight,a=t.fontSize,o=t.color,i=t.fontStyle,c=t.letterSpacing,u=t.lineHeight,l=t.paraSpacing
return{font_face:"".concat((0,d.getFontFamilyAndWeightText)(n,r)),font_size:a,color:o,fontStyle:i,letterSpacing:c,lineHeight:u,paraSpacing:l}},C=function(e,t){var n=(0,o.isChinese)(e)?"chinese":"english",r="iphone"===t||"ipad"===t?"ios":t,a=p()?"mac":"windows"
return h[a][r][n]},p=function(){return/Mac|iPod|iPhone|iPad/.test(navigator.platform)},h={mac:{ios:{chinese:"PingFang SC",english:"-apple-system"},android:{chinese:"PingFang SC",english:"Roboto"},web:{chinese:"PingFang SC",english:"Roboto"}},windows:{ios:{chinese:"Microsoft Yahei",english:"Arial"},android:{chinese:"Microsoft Yahei",english:"Roboto"},web:{chinese:"Microsoft Yahei",english:"Roboto"}}}},jybS:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=n("uavl"),h=n("JTWS"),m=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.widget,n=e.postfix,r=e.top,a=e.left,o=(0,h.getWidgetClassName)(t,n),i=t.top,c=t.left
Object.assign(t,{top:r,left:a})
var u=(0,h.getWidgetStyle)(t,"p")
Object.assign(t,{top:i,left:c})
var l=t.v&&Link.find(t.link_cids),s=l?l.cid:"",d=l&&"tap"!==l.gesture?l.gesture:""
return n&&"pg"===t.name&&!l?null:f.default.createElement("div",{"data-cid":t.cid,"data-link_cid":s,className:o,id:"widget".concat(t.cid).concat(n),style:u},(0,p.getWidgetContent)(t,!0),"line"!==t.name&&f.default.createElement("div",{className:"region gesture ".concat(d)}))}}]),t}(f.PureComponent)
t.default=m,(0,s.default)(m,"propTypes",{widget:d.default.object,postfix:d.default.string,top:d.default.number.isRequired,left:d.default.number.isRequired})},kJQk:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("8Fba")),i=(0,n("/5+U").immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),c=(0,a.connect)(function(e){var t=e.model,n=t.current,r=t.projects,a=i(r,n.projectCid),o=u(a.access_token,n.screenCid)
return{scale:1,width:"100%",height:"100%",src:"".concat(o,"&").concat(Date.now())}})(o.default)
t.default=c
var u=function(e,t){return"".concat("/snapshot.png","?access-token=").concat(e,"&screen-cid=").concat(t,"&mode=zoom-1.00")}},kUAk:function(e,t){function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n=function(e){var u,l,s,d=e.extractorList,f=e.trimComment,t=function(){var e={fragList:u,urlMap:l,fontInfo:s}
return u=[],l={},s={fontFaceMap:{},fontFamilySet:new Set},e}
return t(),{getOutput:t,collect:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=2<arguments.length&&void 0!==arguments[2]&&arguments[2]
if(e&&f&&(e=f(e)),e){var a=function(e){return void 0===l[e]&&(l[e]={urlString:e,originUrl:t,dataUrl:""}),l[e]},r=d.reduce(function(e,n){return e.reduce(function(e,t){return n(e,t,a)},[])},[e])
if(u=u.concat(r),!n&&v.test(e)){for(var o,i=function(e){var t=p(g(e),1)[0],n=[]
if(t&&_([],e,function(e){return n.push(a(e))}),n.length){var r="".concat(t,"|").concat(y(e),"|").concat(b(e))
void 0===s.fontFaceMap[r]?s.fontFaceMap[r]=new Set(n):h(s.fontFaceMap[r],n)}},c=0;o=m.exec(e);)i(p(o,1)[0]),h(s.fontFamilySet,g(e.slice(c,o.index))),c=m.lastIndex
h(s.fontFamilySet,g(e.slice(c)))}}}}}
t.createFragCollector=n
var h=function(e,t){return t.forEach(e.add,e)},r=function(s,d){if(!s.global)throw new Error("[createUrlExtractor] global expected for regexpSearchBlock: ".concat(s))
if(d.global)throw new Error("[createUrlExtractor] non-global expected for regexpExtractUrl: ".concat(d))
return function(e,t,n){if("object"===f(t))return e.push(t),e
for(var r,a=0;null!==(r=s.exec(t));){var o=r[0],i=d.exec(o),c=i&&i[1]
if(c){var u=r.index+i.index+i[0].indexOf(c),l=t.slice(a,u)
e.push(l),e.push(n(c)),a=u+c.length}}return e.push(t.substr(a)),e}}
t.createUrlExtractor=r
var a=/<!--([\s\S]*?)-->/g,o=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,i=r(/<img [^>]*>/g,/src=['"]([^'"]*)['"]/),c=/url\(['"]?([^)'"]*)['"]?\)/,u=r(/style=['"].*url\([^)]*\).*['"]/g,c),m=/@font-face\s+{[^}]+font-family[^}]+}/g,v=/font(-family)?\s*:/,l=/font(-family)?\s*:\s*([^;}>]+)\s*[;}>]?/g,g=function(e){for(var n,a=[],t=function(){var e=p(n,3),r=e[1],t=e[2]
t&&t.split(",").forEach(function(e,t){0!==t||r||(e=(e=e.trim()).split(/["']$/.test(e)?/["']/:" ").filter(Boolean).pop())
var n=S(e)
n&&a.push(n)})};n=l.exec(e);)t()
return a},s=/font-style\s*:\s*(\w+)/,y=function(e){return(s.exec(e)||[])[1]||"normal"},d=/font-weight\s*:\s*(\w+)/,b=function(e){var t=(d.exec(e)||[])[1]
return"normal"===t?t="400":"bold"===t&&(t="700"),t||"400"},w=/^["'](.*)["']$/,S=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").trim().replace(w,"$1")}
t.createHTMLFragCollector=function(){return n({extractorList:[i,u],trimComment:function(e){return e.replace(a,"")}})}
var E=/url\([^)]*\)/g,C=r(E,c),_=r(E,/(\/?(\.?\.\/)*\b[-\w@:%_+.~#?&\/=]+.(woff2|woff|ttf|svg))([?#][-\w%._#=]{1,256})?/)
t.createCSSFragCollector=function(){return n({extractorList:[C,_],trimComment:function(e){return e.replace(o,"")}})}},knB1:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
t.default={prefixAgo:null,prefixFromNow:"从现在开始",suffixAgo:"之前",suffixFromNow:null,seconds:"不到 1 分钟",minute:"大约 1 分钟",minutes:"%d 分钟",hour:"大约 1 小时",hours:"大约 %d 小时",day:"1 天",days:"%d 天",month:"大约 1 个月",months:"%d 月",year:"大约 1 年",years:"%d 年",numbers:[],wordSeparator:""}},l0oT:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.degToRadian=t.getAngle=t.getLength=t.scrollTo=t.rotate=t.sin=t.cos=void 0
t.cos=function(e){return Math.cos(e*Math.PI/180)}
t.sin=function(e){return Math.sin(e*Math.PI/180)}
t.rotate=function(e,t,n){var r=t*Math.PI/180,a={x:n.x-e.x,y:n.y-e.y},o=a.x,i=a.y,c=o*Math.cos(r)-i*Math.sin(r),u=i*Math.cos(r)+o*Math.sin(r)
return{x:c+e.x,y:u+e.y}}
t.scrollTo=function(n,e,r){var a,o=n.scrollTop,i=e-o
a=0
!function e(){var t=c(a+=20,o,i,r)
n.scrollTop=t,a<r&&setTimeout(e,20)}()}
var c=function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}
t.getLength=function(e,t){return Math.sqrt(e*e+t*t)}
t.getAngle=function(e,t){var n=e.x,r=e.y,a=t.x,o=t.y,i=n*a+r*o,c=n*o-r*a
return(Math.atan2(c,i)/Math.PI*180+360)%360}
t.degToRadian=function(e){return e*Math.PI/180}},"l4l/":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=n("/MKj"),o=r(n("NyG0")),i=(0,a.connect)(function(e){var t=e.model.user,n=e.container.previewSetting
return{isLogin:Boolean(t.id),unit:n.unit,emPixel:n.emPixel,ratio:n.ratio,language:n.language,isShowColorPicker:n.isShowColorPicker,colorUnit:n.colorUnit}})(o.default)
t.default=i},lCKy:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("PJYZ")),c=a(n("lwsE")),u=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("lSNA")),p=r(n("q1tI")),o=a(n("17x9")),h=n("6XO9"),m=a(n("i6OX")),v=n("1iCU"),g=a(n("UbMB")),y=a(n("gX9a")),b=g.default.bind(y.default),w=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,n=e.isScrollable,r=e.isHighlight,a=e.isStickyShow,
o=e.shellType,i=e.disabled,c=e.dispatch,u=p.default.createElement(h.Tooltip,{position:"bottom",tipClassName:"marign-top-20",duration:1e3,content:{hover:i?null:I18N.preview.setting}},p.default.createElement(m.default,{name:"cog",type:"dora"}))
return p.default.createElement(h.Dropdown,{disabled:i,menuClassName:b("play-setting-menu"),opener:u,menuX:"right",menu:p.default.createElement(S,{canSetDeviceShell:t,isScrollable:n,isHighlight:r,isStickyShow:a,shellType:o,dispatch:c})})}}]),t}(p.PureComponent)
t.default=w,(0,f.default)(w,"propTypes",{canSetDeviceShell:o.default.bool,isScrollable:o.default.bool,isHighlight:o.default.bool,isStickyShow:o.default.bool,shellType:o.default.string,disabled:o.default.bool,dispatch:o.default.func})
var S=function(e){function o(){var e,n;(0,c.default)(this,o)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return n=(0,l.default)(this,(e=(0,s.default)(o)).call.apply(e,[this].concat(r))),(0,f.default)((0,i.default)((0,i.default)(n)),"handleToggleScrollable",function(e){n.props.dispatch({type:"entry:preview-setting:update:is-scrollable",payload:{isScrollable:e}})}),(0,f.default)((0,i.default)((0,i.default)(n)),"handleToggleHighlight",function(e){n.props.dispatch({type:"entry:preview-setting:update:is-highlight",payload:{isHighlight:e}})}),(0,f.default)((0,i.default)((0,i.default)(n)),"handleToggleSticky",
function(e){n.props.dispatch({type:"entry:preview-setting:update:is-sticky-show",payload:{isStickyShow:e}})}),(0,f.default)((0,i.default)((0,i.default)(n)),"handleUpdateShellType",function(e){var t=e.value
n.props.dispatch({type:"entry:preview-setting:update:shell-type",payload:{shellType:t}})}),n}return(0,d.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,n=e.isScrollable,r=e.isHighlight,a=e.isStickyShow,o=e.shellType,i=t?v.SHELL_TYPE_LIST:v.SHELL_TYPE_LIST_WITHOUT_DEVICE,c=n?o:"none"
return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.content_scrollable),p.default.createElement(h.Switch,{isChecked:n,onChange:this.handleToggleScrollable})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.highlight_clickable),p.default.createElement(h.Switch,{isChecked:r,onChange:this.handleToggleHighlight})),p.default.createElement("div",{className:"line"},
p.default.createElement("label",null,I18N.sticky_visible),p.default.createElement(h.Switch,{isChecked:a,onChange:this.handleToggleSticky})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.shell_type),p.default.createElement(h.RadioGroup,{size:"small",isDisabled:!n,value:c,optionList:i,onChange:this.handleUpdateShellType})))}}]),o}(p.PureComponent);(0,f.default)(S,"propTypes",{canSetDeviceShell:o.default.bool,isScrollable:o.default.bool,isHighlight:o.default.bool,
isStickyShow:o.default.bool,shellType:o.default.oneOf(["device","default","none"]),dispatch:o.default.func})},lDl7:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenByWidgetLike=void 0
t.getScreenByWidgetLike=function(e){var t
if(e.panel_cid){var n=Panel.find(e.panel_cid)
t=n&&n.screen_cid}else if(e.widget_cid){var r=Widget.find(e.widget_cid)
t=r&&r.screen_cid}else t=e.screen_cid
return Screen.find(t)}},"lm/5":function(e,t,n){var p=n("fmRc"),h=n("wF/u")
e.exports=function(e,t,n,r){var a=n.length,o=a,i=!r
if(null==e)return!o
for(e=Object(e);a--;){var c=n[a]
if(i&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){var u=(c=n[a])[0],l=e[u],s=c[1]
if(i&&c[2]){if(void 0===l&&!(u in e))return!1}else{var d=new p
if(r)var f=r(l,s,u,e,t,d)
if(!(void 0===f?h(s,l,3,r,d):f))return!1}}return!0}},lw2U:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setRunnerExtra=function(e){e.Hammer=a.default,e.TimeoutBucket=o.default,e.EventBucket=i.default,e.RunnerUtil=c.default,e.TransitionUtil=u.default,e.ScreenRenderer=l.default}
var a=r(n("yLV6")),o=r(n("hkUU")),i=r(n("3X8Y")),c=r(n("2g7H")),u=r(n("n/3D")),l=r(n("NZ2w"))},lwmc:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),b=r(n("q1tI")),w=a(n("gXld")),f=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,n=e.treeProps,r=e.isSearching,a=e.editingCid,o=e.activeCid,i=e.screenTreeMap,c=e.screenDataMap,u=e.collapseKeySet
return b.default.createElement("ol",{className:"screen-list"},0===i.root.length?b.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match):i.root.map(function(e){var t=e.cid
return b.default.createElement(p,{key:t,cid:t,depth:0,collapseKeySet:u,isSearching:r,editingCid:a,activeCid:o,screenDataMap:c,screenTreeMap:i,treeProps:n})}))}}]),t}(b.PureComponent)
t.default=f,(0,s.default)(f,"propTypes",{treeProps:d.default.object,isSearching:d.default.bool,editingCid:d.default.string,activeCid:d.default.string,screenTreeMap:d.default.object,screenDataMap:d.default.object,collapseKeySet:d.default.object})
var p=function(e){function y(){return(0,o.default)(this,y),(0,c.default)(this,(0,u.default)(y).apply(this,arguments))}return(0,l.default)(y,e),(0,i.default)(y,[{key:"render",value:function(){var e=this.props,t=e.cid,n=e.treeProps,r=e.depth,a=e.activeCid,o=e.editingCid,i=e.isSearching,c=e.screenTreeMap,u=e.screenDataMap,l=e.collapseKeySet,s=n.renderItem,d=n.handleScreenItemActions,f=u[t],p=!l.has(t),h=c[t],m=f.cid===a,v=f.cid===o,g=Boolean(!i&&h)
return b.default.createElement("li",{className:"rn-content-item"},b.default.createElement(w.default,{depth:r,screen:f,isActive:m,isEditing:v,showExpander:g,renderItem:s,collapseKeySet:l,handleScreenItemActions:d}),h&&p&&b.default.createElement("ol",{type:"screen-list",className:"child-screens"},h.map(function(e){var t=e.cid
return b.default.createElement(y,{key:t,cid:t,depth:r+1,collapseKeySet:l,isSearching:i,editingCid:o,activeCid:a,screenDataMap:u,screenTreeMap:c,treeProps:n})})))}}]),y}(b.PureComponent);(0,s.default)(p,"propTypes",{cid:d.default.string,treeProps:d.default.object,depth:d.default.number,isSearching:d.default.bool,editingCid:d.default.string,activeCid:d.default.string,screenTreeMap:d.default.object,screenDataMap:d.default.object,collapseKeySet:d.default.object})},"m/Xg":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("17x9")),f=r(n("q1tI")),p=n("xQM3"),d=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.screen,r=e.isLite,a=e.isScreenExpanded,o=e.viewportWidth,i=e.viewportHeight,c=t.splash,u=void 0===c?"":c,l={width:o,height:i},s=(0,p.getScreenContainerStyle)(n,t,l,r,a),
d="".concat(n.orientation," ").concat(t.device," ").concat(t.model)
return f.default.createElement("div",{id:"simulator",className:d,style:s},f.default.createElement("div",{id:"app"}),f.default.createElement("div",{className:"splash"},u&&f.default.createElement("img",{src:u}),f.default.createElement("div",{className:"loading"},f.default.createElement("div",{className:"spinner"}))))}}]),t}(f.PureComponent);(t.default=d).propTypes={screen:s.default.object,project:s.default.object,isLite:s.default.bool,isScreenExpanded:s.default.bool,viewportWidth:s.default.number,
viewportHeight:s.default.number,dispatch:s.default.func}},"m/km":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.DROPDOWN=t.CAROUSEL=t.IOS_BATTERY=t.IOS_WIFI=t.IOS_SIGNAL=void 0
t.IOS_SIGNAL='<svg xmlns="http://www.w3.org/2000/svg" width="17" height="12"><path d="M1.25 6.5h1a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1zM5.75 5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4.5-2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.5-2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" fill-rule="evenodd"/></svg>'
t.IOS_WIFI='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12"><path d="M8.007 2.787a8.64 8.64 0 0 1 5.953 2.379c.12.118.314.116.433-.004l1.156-1.166a.322.322 0 0 0-.003-.456 10.897 10.897 0 0 0-15.08 0 .322.322 0 0 0-.003.456L1.62 5.162c.119.12.312.122.433.004a8.641 8.641 0 0 1 5.954-2.379zm0 3.796c1.217 0 2.391.452 3.294 1.27a.31.31 0 0 0 .433-.006l1.155-1.167a.322.322 0 0 0-.005-.459 7.16 7.16 0 0 0-9.752 0 .322.322 0 0 0-.005.46l1.155 1.166a.31.31 0 0 0 .433.006 4.907 4.907 0 0 1 3.292-1.27zm2.219 2.784a.314.314 0 0 0-.01-.457 3.422 3.422 0 0 0-4.42 0 .314.314 0 0 0-.009.457l1.998 2.016a.312.312 0 0 0 .443 0l1.998-2.016z" fill-rule="nonzero"/></svg>'

t.IOS_BATTERY='<svg xmlns="http://www.w3.org/2000/svg" width="25" height="12"><path d="M2.667 1.333C1.747 1.333 1 2.08 1 3v6c0 .92.746 1.667 1.667 1.667h16.666C20.253 10.667 21 9.92 21 9V3c0-.92-.746-1.667-1.667-1.667H2.667zm0-1h16.666A2.667 2.667 0 0 1 22 3v6a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 9V3A2.667 2.667 0 0 1 2.667.333z" opacity=".35"/><path d="M23 4v4a2.17 2.17 0 0 0 0-4" opacity=".4"/><rect x="2" y="2.333" width="18" height="7.333" rx="1.333"/></svg>'
t.CAROUSEL='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 30 19"><g fill="#5B6B73"><path d="M26.5 15L26 15 26 15.5 26 15 26.5 15ZM26 15.5L26 16 26 15.5ZM26.5 15L29 15 29 4 27 4 26 4 26.5 3.5 26 3 27 3 29 3C29.6 3 30 3.4 30 4L30 15C30 15.6 29.6 16 29 16L26.8 16 27 16 27 15 26.5 15ZM26.8 16L26.5 16 26.8 16ZM27 4L27 4 26.5 3.5 27 3 27 3 27 4ZM29 5L29 4 28 4 26 4 26 3 29 3C29.6 3 30 3.4 30 4L30 15C30 15.6 29.6 16 29 16L26 16 26 15 29 15 29 5Z"/><path d="M-1.5 5.5L-2 5.5-2 6-2 5.5-1.5 5.5ZM-2 6L-2 6.5-2 6ZM-1.5 5.5L1 5.5 1-5.5-1-5.5-2-5.5-1.5-6-2-6.5-1-6.5 1-6.5C1.6-6.5 2-6.1 2-5.5L2 5.5C2 6.1 1.6 6.5 1 6.5L-1.5 6.5-1 6.5-1 5.5-1.5 5.5ZM-1-6.5L-1-5.5-1-5.5-1.5-6-1-6.5-1-6.5ZM1-4.5L1-5.5 0-5.5-2-5.5-2-6.5 1-6.5C1.6-6.5 2-6.1 2-5.5L2 5.5C2 6.1 1.6 6.5 1 6.5L-2 6.5-2 5.5 1 5.5 1-4.5Z" transform="translate(2 9.5)scale(-1 1)"/><path d="M6 1L6 18 24 18 24 1 6 1ZM6 0L24 0C24.6 0 25 0.4 25 1L25 18C25 18.6 24.6 19 24 19L6 19C5.4 19 5 18.6 5 18L5 1C5 0.4 5.4 0 6 0Z"/><polygon points="7.4 15.4 6.6 14.6 10.9 10.4 13.9 12.3 19 6.3 23.4 10.6 22.6 11.4 19 7.7 14.1 13.7 11.1 11.6"/><path d="M10.5 8.5C9.4 8.5 8.5 7.6 8.5 6.5 8.5 5.4 9.4 4.5 10.5 4.5 11.6 4.5 12.5 5.4 12.5 6.5 12.5 7.6 11.6 8.5 10.5 8.5ZM10.5 7.5C11.1 7.5 11.5 7.1 11.5 6.5 11.5 5.9 11.1 5.5 10.5 5.5 9.9 5.5 9.5 5.9 9.5 6.5 9.5 7.1 9.9 7.5 10.5 7.5Z"/></g></svg>'

t.DROPDOWN='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><g fill="#5B6B73"><path d="M13.4 11L1 11 1 21 21 21 21 11 17.6 11 15.5 9.3 13.4 11ZM1 10L13 10 15.5 8 18 10 21 10C21.6 10 22 10.4 22 11L22 21C22 21.6 21.6 22 21 22L1 22C0.4 22 0 21.6 0 21L0 11C0 10.4 0.4 10 1 10Z"/><path d="M15.5 6C16.9 6 18 4.9 18 3.5 18 2.1 16.9 1 15.5 1 14.1 1 13 2.1 13 3.5 13 4.9 14.1 6 15.5 6ZM15.5 7C13.6 7 12 5.4 12 3.5 12 1.6 13.6 0 15.5 0 17.4 0 19 1.6 19 3.5 19 5.4 17.4 7 15.5 7Z"/><path d="M15 3L15 2 16 2 16 3 17 3 17 4 16 4 16 5 15 5 15 4 14 4 14 3 15 3Z"/><polygon points="3 16.5 3 15.5 19 15.5 19 16.5"/></g></svg>'
},m48X:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("pVnL")),i=a(n("QILm")),c=a(n("lwsE")),u=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("lSNA")),p=r(n("q1tI")),h=a(n("17x9")),m=n("6XO9")
n("WcC0")
var v=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.menuClassName,r=(0,i.default)(e,["className","menuClassName"])
return p.default.createElement(m.Select,(0,o.default)({className:(0,m.trimList)(["ToolbarSelect",t]),menuClassName:(0,m.trimList)(["ToolbarSelectMenu",n])},r,{placeholder:" ",unstyled:!0,size:"small",menuX:"center"}))}}]),t}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{className:h.default.string,menuClassName:h.default.string})},mbVZ:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=n("Ev6p"),a={isEmpty:r.r,put:r.u,take:r.u}
function o(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10,r=arguments[1],a=new Array(n),o=0,i=0,c=0,u=function(e){a[i]=e,i=(i+1)%n,o++},t=function(){if(0!=o){var e=a[c]
return a[c]=null,o--,c=(c+1)%n,e}},l=function(){for(var e=[];o;)e.push(t())
return e}
return{isEmpty:function(){return 0==o},put:function(e){if(o<n)u(e)
else{var t=void 0
switch(r){case 1:throw new Error("Channel's Buffer overflow!")
case 3:a[i]=e,c=i=(i+1)%n
break
case 4:t=2*n,a=l(),o=a.length,i=a.length,c=0,a.length=t,n=t,u(e)}}},take:t,flush:l}}var i={none:function(){return a},fixed:function(e){return o(e,1)},dropping:function(e){return o(e,2)},sliding:function(e){return o(e,3)},expanding:function(e){return o(e,4)}}},mfFm:function(e,t,n){e.exports={"global-attributes":"_2WW4d3N_h0ptLMSIJiNVZb","layer-name":"lHQ2gR47fywCXPyoNOQt-",header:"_3jioi4K2B2yOsbmLPodNyM",panel:"YjFkC1l7Pq0gsLgl2dq1C",container:"_3_XaUvUOzD1MeTPSGbtmJY",
copyBtn:"M4cHnCN2XUVYXQ2Ez48Vk _2TAID7TnzAXoGA-jTBc04W","layer-load":"_3f1x0LwZiq_7c8_TaXvySo",spinner:"xKsPnP6rU53wBVIz85ai_","rotate-infinite":"_2ch38-nvB58TUdWQkKGJJo"}},mnpx:function(e,t,n){},mquD:function(e,t,n){e.exports={"comment-panel":"_2dY-aWly_WWZi-IGQ1xR4-","comment-title":"YqyjN9C59bWFJEndyU0x9","comment-thread":"_2JvGmMk3y1PjWCGDPVg4a3","content-reply":"_3VE5NwR9zvovJS1MW0BZbq",login:"_3t2Lcd3f0_H-u_GDe-KBQH",comment:"_2VqB6xZz3ZMhBswl_nFEOz","comment-content":"_2v8U22g6c4LkqK5BL4vOFl",
edited:"_1unY7SoIkJpoCKI6YJj0dE","container-bottom":"_3z71HOTNMRJiMUXUxvQLa6",time:"dqXdK9pZPQyb9a-WoxDNQ","reply-sort":"_2bgB1qJyRonhAvn0gkm7vp","btn-reply":"_2CrlxaEt8G-J3ewI5c7TJD","header-container":"_1-DcnhePZGe-xicn8UM249","header-tool":"_3xcyCaTVLHlRdVbQjfMz9E","container-reply":"_2ApZU5bkYTTCyGA9Q2EwqQ",expand:"TuQgu47qydj8ZTQmbo3DZ","container-main":"_2OH87H-fOvv_HWhtjy1Arh","content-empty":"_3ICZ7qT9DBPhbMD02jZj25","add-comment":"_9237vxHyzd4yQZU3S8N9b","dropdown-reply":"_233Za55WRs0z9Ihd8UD-Rt",
"dropdown-on":"_6n2zhtMRn75CqBn6WWw3_","dropdown-off":"_3PfmWXeb9PKYb5ow8kDTMe","comment-focus":"hlPioZEAv4Td4VsmcHhIc","comment-noFocus":"_2j-cKmNGnUn_tT7eJlcXxe","reply-header":"xUcJzT-vOVVhL37FQnaC-","reply-content":"_1GkaiuxL0rWoniFDn2WBfK","remove-background":"e3k5YtTFT1_zohcDsL8Zv"}},mreW:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var a=r(n("MVZn")),l=r(n("zkrS")),o=n("2eJi"),s=n("H5Dy"),i=(0,a.default)({},o.entryMap,{"entry:state:init":function(e){var t=e.dispatch
t({type:"user:set",payload:l.default.MB.user||null}),t({type:"teams:refresh"}),t({type:"widgets:refresh"}),t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"comments:refresh"}),t({type:"comment-threads:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:l.default.MB.currentProject,screen:l.default.MB.currentScreen}})},"entry:state:clear":function(e){e.dispatch},"entry:sync-runner:set-screen":function(e,t){
var n=e.dispatch,r=e.getState,a=t.payload.cid
n({type:"entry:current:set-screen",payload:{cid:a}}),"inspect"==r().container.previewSetting.toolbarActiveItem&&n({type:"SET_VISIBILITY_SCREEN",payload:{screenID:a}}),l.default.MB.runner.loadScreen(a)},"entry:refresh:team-related":function(e){var t=e.dispatch
t({type:"teams:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:l.default.MB.currentProject,screen:l.default.MB.currentScreen}})},"entry:refresh:project-related":function(e){var t=e.dispatch
t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"widgets:refresh"}),t({type:"comments:refresh"}),t({type:"comment-threads:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:l.default.MB.currentProject,screen:l.default.MB.currentScreen}})},"entry:listpage:toggle:order":function(e){var t,n=e.dispatch,r=e.getState,a=l.default.MB.preference(),o=r().container.listpage.ui.order
o?(t="asc"===o?"desc":"asc",a.app_order=t,a.lsave(),l.default.SpineModel.queueSave()):t=a.app_order,n({type:"container:listpage:set:order",payload:{order:t}})},"entry:focus-element":function(e,t){e.dispatch
var n=t.payload,r=n.focusType,a=n.element
return a&&setTimeout(function(){switch(r){case"normal":case"external":return a.focus&&a.focus()}},100),!0},"entry:preview:select":function(e,t){var n=e.dispatch,r=e.getState,a=t.payload.toolbarActiveItem,o=r(),i=o.container.previewSetting,c=o.model.user
if(a!=i.activeItem){var u="comment"==a||"inspect"==a?"immersive":"default"
"comment"==a&&((0,s.getProjectCommentPermission)().allowComment||MB.promptRenew("cant_comment",{role:l.default.MB.currentProject.owner_id!==c.id?l.default.MB.currentProject.team_cid?"team":"project":"user"})),"inspect"==a&&n({type:"SET_VISIBILITY_SCREEN",payload:{screenID:l.default.MB.currentScreen.cid}}),u!==l.default.MB.runner.mode&&(l.default.MB.runner.mode=u,setTimeout(function(){l.default.MB.runner.reload()})),n({type:"reducer:preview-toolbar:update",payload:{toolbarActiveItem:a}})}},
"container:comment:select":function(e,t){var n=e.dispatch,r=e.getState,a=t.payload.select,o=r(),i=o.model,c=i.comments,u=i.commentThreads,l=o.container,s=u.find(function(e){return e.cid===l.comment.select})
s&&a!==l.comment.select&&!c.find(function(e){return e.thread_cid===s.cid})&&n({type:"entry:comment-threads:delete",payload:s})},"entry:preview:clear":function(e,t){var n=e.dispatch
l.default.MB.runner.mode="default",n({type:"reducer:preview-panel:reset"}),n({type:"container:layers:clear"})}})
t.entryMap=i},mwIZ:function(e,t,n){var a=n("ZWtO")
e.exports=function(e,t,n){var r=null==e?void 0:a(e,t)
return void 0===r?n:r}},mxnB:function(e,t,n){},"n/3D":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(){function e(){(0,a.default)(this,e)}return(0,o.default)(e,[{key:"activeWidth",value:function(){return"portrait"===MB.currentScreen.orientation?MB.currentProject.width:MB.currentProject.height}},{key:"activeHeight",value:function(){return"portrait"===MB.currentScreen.orientation?MB.currentProject.height:MB.currentProject.width}},{key:"hideScreen",value:function(e){$(e).hide(),$(e).find(".iframe").each(function(e,t){MB.runner.runnerUtil.setObjectUrl(t,
"about:blank")})}},{key:"doTransition",value:function(e,t,n,r){var a=this
n.enableTransition(r.delay()),t.enableTransition(r.delay()),(0===parseFloat(r.delay())||r.template&&-1!==e.indexOf("menu"))&&(e="none"),$.nextTick(function(){a[e](t,n,r)})}},{key:"none",value:function(e,t,n){t.addClass("active"),e.removeClass("active top"),this.hideScreen(e),MB.runner.doneTransition(t)}},{key:"slideIn",value:function(e,t,n,r,a,o){var i=this
e.transitionEnd(function(){e.removeClass("active"),t.addClass("active top"),i.hideScreen(e),MB.runner.doneTransition(t)}),e[n](r),t[n](a)}},{key:"slidebottom",value:function(e,t,n){this.slideIn(e,t,"translateY",0-this.activeHeight(),0,n)}},{key:"slideleft",value:function(e,t,n){this.slideIn(e,t,"translateX",0-this.activeWidth(),0,n)}},{key:"slidetop",value:function(e,t,n){this.slideIn(e,t,"translateY",this.activeHeight(),0,n)}},{key:"slideright",value:function(e,t,n){this.slideIn(e,t,"translateX",
this.activeWidth(),0,n)}},{key:"slideMenu",value:function(e,t,n,r,a){t.zindex("2"),e.css("z-index","101"),e.transitionEnd(function(){MB.runner.doneTransition(t)}),e[n](r)}},{key:"leftmenu",value:function(e,t,n){this.slideMenu(e,t,"translateX",this.activeWidth()*n.menu_offset/100,n)}},{key:"rightmenu",value:function(e,t,n){this.slideMenu(e,t,"translateX",0-this.activeWidth()*n.menu_offset/100,n)}},{key:"fixedIn",value:function(e,t,n,r,a){var o=this
t.addClass("top"),t.css("z-index","101"),t.transitionEnd(function(){0===r&&(e.removeClass("active"),t.addClass("active"),o.hideScreen(e)),MB.runner.doneTransition(t),0!==r&&t.css("z-index","101")}),t[n](r)}},{key:"topin",value:function(e,t,n){this.fixedIn(e,t,"translateY",0,n)}},{key:"popin",value:function(e,t,n){this.fixedIn(e,t,"translateY",0,n)}},{key:"slideleft2",value:function(e,t,n){this.fixedIn(e,t,"translateX",0,n)}},{key:"slideright2",value:function(e,t,n){this.fixedIn(e,t,"translateX",0,n)}},{
key:"leftdrawer",value:function(e,t,n){this.fixedIn(e,t,"translateX",this.activeWidth()*(n.menu_offset-100)/100,n)}},{key:"rightdrawer",value:function(e,t,n){this.fixedIn(e,t,"translateX",this.activeWidth()*(100-n.menu_offset)/100,n)}},{key:"fixedOut",value:function(e,t,n,r,a){var o=this
t.zindex("2"),e.transitionEnd(function(){e.removeClass("active"),t.addClass("active"),o.hideScreen(e),MB.runner.doneTransition(t)}),e[n](r)}},{key:"leftout",value:function(e,t,n){this.fixedOut(e,t,"translateX",0-this.activeWidth(),n)}},{key:"rightout",value:function(e,t,n){this.fixedOut(e,t,"translateX",this.activeWidth(),n)}},{key:"topout",value:function(e,t,n){this.fixedOut(e,t,"translateY",0-this.activeHeight(),n)}},{key:"popout",value:function(e,t,n){this.fixedOut(e,t,"translateY",this.activeHeight(),n)
}},{key:"transitionHandler",value:function(e,t,n,r,a){switch("leftmenu"===e&&t.addClass("menu lmenu"),"rightmenu"===e&&t.addClass("menu rmenu"),"leftdrawer"===e&&n.addClass("drawer ldrawer"),"rightdrawer"===e&&n.addClass("drawer rdrawer"),e){case"popin":case"slidebottom":n.translate(0,a)
break
case"topin":case"slidetop":n.translate(0,0-a)
break
case"popout":case"none":case"leftout":case"rightout":case"topout":case"leftmenu":case"rightmenu":n.translate(0,0)
break
case"slideright":case"slideleft2":case"leftdrawer":n.translate(0-r,0)
break
case"slideleft":case"slideright2":case"rightdrawer":n.translate(r,0)}n[0].offsetHeight}}]),e}()
t.default=i},nLLt:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionCheck=t.PermissionSet=t.Permission=void 0
var a=r(n("lwsE")),o=r(n("W8MJ")),i=function(e){return e.reduce(function(e,t){var n,r=(n=t)instanceof Array?n:n?[n]:[]
return r.length?e.reduce(function(t,n){return r.forEach(function(e){return t.push("".concat(n,"-").concat(e))}),t},[]):e},["@"])},c=function(){function e(){(0,a.default)(this,e),this.permissionMap={}}return(0,o.default)(e,[{key:"set",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
i(n).forEach(function(e){return t.permissionMap[e]=!0})}},{key:"check",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
var a=i(n)
return!!a.length&&a.every(function(e){return t.permissionMap[e]})}}]),e}(),u=["owner","admin","editor","viewer","guest"],l=u.reduce(function(e,t,n){return e[t]=n,e},{}),s=function(n){return u.filter(function(e,t){return l[e]<=l[n]})},d=new c,f=(t.Permission=d).set.bind(d)
t.PermissionSet=f
var p=d.check.bind(d)
t.PermissionCheck=p,f("project",["delete","create"],s("owner")),f("project-update",s("editor")),f("project-read-whitelist",s("viewer")),f("project-read",s("guest")),f("team-project-delete",s("admin")),f("team-project-create",s("editor")),f("team-project-read-whitelist",s("viewer")),f("team-project-read",s("guest")),f("collaborator",["delete","create","update"],["editor","viewer"],s("owner")),f("collaborator-read",["editor","viewer"],s("viewer")),f("team-collaborator",["delete","create","update"],["admin"],
s("owner")),f("team-collaborator",["delete","create","update"],["editor","viewer"],s("admin")),f("team-collaborator-read",["admin","editor","viewer"],s("viewer"))},nQhf:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("MVZn")),i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=r(n("q1tI")),f=a(n("17x9")),p=n("/MKj"),h=a(n("8jgF")),m=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.event,r=e.loggedIn,a=e.inMobile,o=e.dispatch
return d.default.createElement("div",null,t&&!r&&d.default.createElement(h.default,{inMobile:a,event:n,isOpen:t,onClose:function(){return o("event-sign-up:close:modal")}}))}}]),t}(d.PureComponent)
m.propTypes={open:f.default.bool,inMobile:f.default.bool,event:f.default.object,loggedIn:f.default.bool,dispatch:f.default.func}
var v=(0,p.connect)(function(e){return(0,o.default)({},e.container.eventSignUpModal,{loggedIn:!!e.model.user.id,inMobile:MB.isMobile()})})(m)
t.default=v},nU12:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducerMap=t.entryMap=void 0
var a=r(n("MVZn")),u=r(n("q1tI")),o=n("WVP6"),l=n("wCGR"),s=n("6XO9"),f=r(n("iScx")),d=r(n("TZdj")),p=r(n("uW4e")),h=r(n("4YeV")),m=r(n("Emwt")),c=r(n("ni9f")),i=r(n("flWF")),v=r(n("HFhh")),g=r(n("JXIg")),y=r(n("4Nrh")),b=r(n("zkrS")),w=n("upRB"),S=(0,a.default)({},f.default.entryMap,d.default.entryMap,p.default.entryMap,h.default.entryMap,m.default.entryMap,c.default.entryMap,i.default.entryMap,v.default.entryMap,g.default.entryMap,y.default.entryMap,{"entry:add-mock-collaborator":function(e){
var r=e.dispatch,t=c.default.getState(),n=h.default.getState(),a=f.default.getState(),o=new Set(a.map(function(e){return e.cid})),i=function(e,t){var n="co_MOCK_".concat(e.cid)
o.has(n)||(r({type:"collaborators:add-local",payload:{cid:n,role:"owner",user_id:e.owner_id,name:e.owner_name,email:e.owner_email||"email_MOCK_".concat(e.owner_id),avatar:e.owner_avatar,team_cid:t?e.cid:null,project_cid:t?null:e.cid}}),0)}
t.forEach(function(e){return i(e,!0)}),n.forEach(function(e){return i(e,!1)})},"entry:current:set":function(e,t){var n,r,a,o=e.dispatch,i=t.payload,c=i.project,u=i.screen,l=g.default.getState(),s=c&&c.cid||l.projectCid,d=u&&u.cid||l.screenCid
o({type:"current:set",payload:{project:c=h.default.getState().find(function(e){return e.cid===s}),screen:u=m.default.getState().find(function(e){return e.cid===d}),userCollaborator:c&&(n=c.cid,r=c.team_cid,(a=v.default.getState())&&f.default.getState().find(function(e){return e.user_id===a.id&&(e.project_cid===n||e.team_cid===r)}))}})},"entry:current:set-screen":function(e,t){var n=e.dispatch,r=t.payload.cid,a=m.default.getState().find(function(e){return e.cid===r})
if(!a)return console.warn("[entry:current:set-screen] non exist screen with cid: ".concat(r))
n({type:"entry:current:set",payload:{screen:a}})},"entry:unread-comment:init":function(e,t){var n=e.dispatch,r=g.default.getState(),a=r.userRole,o=r.projectCid
"guest"!==a&&n({type:"unread-comment:init-for-project",payload:{projectCid:o,commentThreadList:p.default.getState(),commentList:d.default.getState()}})},"entry:comment-threads:add":function(e,t){var n=e.getState,r=e.dispatch,a=t.payload,o=a.top,i=a.left,c=a.message,u=a.cancelSelect,l=v.default.getState(),s=g.default.getState().screenCid,d=100/(0,w.getCurrentScale)(n()),f=.001*Date.now(),p=b.default.SpineModel.requestCid("cmth")
r({type:c?"comment-threads:add":"comment-threads:add-local",payload:{cid:p,top:Math.round(o*d),left:Math.round(i*d),screen_cid:s,user_id:l.id,created_at:f,updated_at:f}}),c&&r({type:"comments:add",payload:{thread_cid:p,message:c,user_id:l.id,created_at:f,updated_at:f}}),r({type:"container:comment:select",payload:{select:u?null:p}})},"entry:comment-threads:update":function(e,t){var n=e.dispatch,r=e.getState,a=t.payload,o=a.cid,i=a.top,c=a.left,u=void 0===d.default.getState().find(function(e){
return e.thread_cid===o}),l=.001*Date.now(),s=100/(0,w.getCurrentScale)(r())
n({type:u?"comment-threads:update-local":"comment-threads:update",payload:{cid:o,top:Math.round(i*s),left:Math.round(c*s),updated_at:l}})},"entry:comment-threads:delete":function(e,t){var n=e.dispatch,r=t.payload.cid
n({type:"comment-threads:delete",payload:{cid:r}}),d.default.getState().forEach(function(e){return e.thread_cid===r&&n({type:"comments:delete-local",payload:e})})},"entry:comments:add":function(e,t){var n=e.dispatch,r=t.payload,a=r.thread_cid,o=r.message,i=v.default.getState(),c=.001*Date.now()
n({type:"comment-threads:save",payload:{cid:a}}),n({type:"comments:add",payload:{thread_cid:a,message:o,user_id:i.id,created_at:c,updated_at:c}}),n({type:"container:comment:select",payload:{select:null}})},"entry:comments:update":function(e,t){var n=e.dispatch,r=t.payload
n({type:"comments:update",payload:{cid:r.cid,message:r.message,updated_at:.001*Date.now()}})},"entry:state:push-data":function(e,t){var n=e.dispatch,r=t.payload,a=r.pushType,o=r.action,i=r.data
switch(a){case"comment-threads":var c=p.default.getState().find(function(e){return e.cid===i.cid})
"update"!==o||c?"update"===o&&c?n({type:"comment-threads:update-local",payload:i}):"destroy"===o&&c&&(n({type:"comment-threads:delete-local",payload:i}),d.default.getState().forEach(function(e){return e.thread_cid===i.cid&&n({type:"comments:delete-local",payload:e})})):n({type:"comment-threads:add-local",payload:i})
break
case"comments":var u=d.default.getState().find(function(e){return e.cid===i.cid})
"update"!==o||u?"update"===o&&u?n({type:"comments:update-local",payload:i}):"destroy"===o&&u&&n({type:"comments:delete-local",payload:i}):n({type:"comments:add-local",payload:i})
var l=g.default.getState().screenCid,s=p.default.getState().find(function(e){return e.cid===i.thread_cid})
s&&s.screen_cid===l&&n({type:"unread-comment:set-unread",payload:{commentCid:i.cid,threadCid:s.cid,screenCid:l}})}},"entry:projects:delete":function(e,t){var n=e.dispatch,r=t.payload,a=v.default.getState(),o=r.owner_id===a.id||r.canAdmin()&&r.team_cid,i=o?I18N.del_app_title:I18N.exit_app_title,c=[u.default.createElement("p",{key:"1"},u.default.createElement(l.ConfirmMsg,{variableMap:{verb:o?"delete":"leave",noun:"app",ugn:u.default.createElement(s.AppName,{name:r.name,withQuote:!0,
withQuestionMark:"en"===window.MBLocale})}})),o&&u.default.createElement("p",{key:"2",className:"desc tertiary",dangerouslySetInnerHTML:{__html:I18N.del_app_desc_more}})]
n({type:"container:modal:open",payload:{title:i,desc:c,canCancel:!0,canConfirm:!0,onConfirm:function(){if(o)n({type:"projects:delete",payload:r})
else{var e=f.default.getState().find(function(e){return e.project_cid===r.cid&&e.user_id===a.id})
n({type:"collaborators:delete",payload:e}),n({type:"projects:delete-local",payload:r})}b.default.SpineModel.queueSave()}}})},"entry:teams:delete":function(e,t){var n=e.dispatch,r=t.payload,a=v.default.getState(),o=r.owner_id===a.id
if(o&&0<r.cprojects().length)return n({type:"container:modal:open",payload:{title:I18N.warning,desc:I18N.delete_projects_first,canCancel:!1,canConfirm:!0}})
var i=u.default.createElement(l.ConfirmMsg,{variableMap:{verb:o?"delete":"leave",noun:"team",ugn:u.default.createElement(s.TeamName,{name:r.name,withQuote:!0,withQuestionMark:"en"===window.MBLocale})}})
n({type:"container:modal:open",payload:{title:o?I18N.del_team_title:I18N.exit_team_title,desc:i,canCancel:!0,canConfirm:!0,onConfirm:function(){if(o)n({type:"teams:delete",payload:r})
else{var e=f.default.getState().find(function(e){return e.team_cid===r.cid&&e.user_id===a.id})
n({type:"collaborators:delete",payload:e}),n({type:"teams:delete-local",payload:r})}}}})}})
function E(n,e){var r=e.getState,a=e.setState,o=r()
return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0
return t.type!==n?e:(a(t.payload||e),r())}}t.entryMap=S
var C={collaborators:E("reducer:collaborators:update",f.default),comments:E("reducer:comments:update",d.default),commentThreads:E("reducer:comment-threads:update",p.default),projects:E("reducer:projects:update",h.default),screens:E("reducer:screens:update",m.default),teams:E("reducer:teams:update",c.default),widgets:E("reducer:widgets:update",i.default),user:(0,o.createStateStoreReducer)("reducer:user:update",v.default),current:(0,o.createStateStoreReducer)("reducer:current:update",g.default),
unreadComment:(0,o.createStateStoreReducer)("reducer:unread-comment:update",y.default)}
t.reducerMap=C},naIL:function(e,t,n){e.exports={"screen-panel":"_2acqq9r0j1_EMjnbcJAZI7"}},nc5A:function(e,t,n){e.exports={search:"WRZ4Gj-rorUUJi1xYvpVR"}},ni9f:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.Team,o=(0,r.createStateStore)([]),i=o.getState,c=o.setState,u=o.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:teams:update",payload:o(e,a,i)})})},s={entryMap:{"teams:refresh":l(a.refreshStateList,!1),"teams:add":l(a.addState,!1),"teams:add-local":l(a.addState,!0),"teams:update":l(a.updateState,!1),"teams:update-local":l(a.updateState,!0),"teams:delete":l(a.deleteState,!1),"teams:delete-local":l(a.deleteState,!0)},getState:i,setState:c}
t.default=s},"o/90":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("M8nv")),m=a(n("p2ZH")),v=a(n("2b0G")),g=a(n("4QcC")),y=a(n("ER7e")),b=a(n("Kurm")),w=a(n("TSYQ")),S=function(e){var t=document.querySelector(".full-screen header"),n=document.querySelector(".full-screen .preview-content-container > div:last-child"),r=document.querySelector(".x_handler"),a=document.querySelector(".y_handler"),o=document.querySelector(".x_track"),
i=document.querySelector(".y_track"),c=document.querySelector("#simulator-container"),u=[t,n,r,a,o,i]
"hide"===e?(c.style.overflow="visible",u.forEach(function(e){return e.style.opacity=0}),setTimeout(function(){return u.forEach(function(e){return e.style.pointerEvents="none"})},300)):"show"===e&&(c.style.overflow="hidden ",u.forEach(function(e){return e.style.pointerEvents="auto"}),setTimeout(function(){return u.forEach(function(e){return e.style.opacity=1})},300))},E=function(e){function t(e){var i
return(0,o.default)(this,t),i=(0,c.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(i)),"handleExitFullScreen",function(){var e=i.props.dispatch
MB.event("全屏模式关闭","运行页"),e({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),e({type:"entry:init:preview:scale"}),e({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}),(0,d.default)((0,s.default)((0,s.default)(i)),"setMode",function(e){var t=i.state.isDarkMode,n=e.target.dataset.mode
"light"===n&&t&&i.setState({isDarkMode:!1}),"dark"!==n||t||(MB.event("全屏模式暗色背景","运行页"),i.setState({isDarkMode:!0}))}),(0,d.default)((0,s.default)((0,s.default)(i)),"goToLastScreen",function(){var e=i.props,t=e.screen,n=e.screenInOrder,r=e.dispatch,a=t.cid,o=n.findIndex(function(e){return e===a})
0<o&&(r({type:"entry:sync-runner:set-screen",payload:{cid:n[o-1]}}),i.setState({shouldTextShow:!0,reachFirstScreen:!1,reachLastScreen:!1}))
0===o&&i.setState({shouldTextShow:!0,reachFirstScreen:!0})}),(0,d.default)((0,s.default)((0,s.default)(i)),"goToNextScreen",function(){var e=i.props,t=e.screen,n=e.screenInOrder,r=e.dispatch,a=t.cid,o=n.findIndex(function(e){return e===a})
o<n.length-1&&(r({type:"entry:sync-runner:set-screen",payload:{cid:n[o+1]}}),i.setState({shouldTextShow:!0,reachFirstScreen:!1,reachLastScreen:!1}))
o===n.length-1&&i.setState({shouldTextShow:!0,reachLastScreen:!0})}),(0,d.default)((0,s.default)((0,s.default)(i)),"handleKeyDown",function(e){27===e.keyCode&&i.handleExitFullScreen(),37===e.keyCode&&i.goToLastScreen(),39===e.keyCode&&i.goToNextScreen()}),(0,d.default)((0,s.default)((0,s.default)(i)),"handleNavigate",function(e){var t=e.currentTarget.dataset.action
"last"===t?i.goToLastScreen():"next"===t&&i.goToNextScreen()}),i.state={isDarkMode:!1,shouldTextShow:!1,reachFirstScreen:!1,reachLastScreen:!1},i}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){S("hide")}},{key:"componentWillUnmount",value:function(){S("show")}},{key:"componentDidUpdate",value:function(e){var t=this
if(this.state.shouldTextShow&&(clearTimeout(this.timer),this.timer=setTimeout(function(){return t.setState({shouldTextShow:!1})},1500)),this.props.screen!==e.screen){var n=this.props,r=n.screen,a=n.screenInOrder,o=r.cid,i=a.findIndex(function(e){return e===o})
0!==i&&this.setState({reachFirstScreen:!1}),i!==a.length-1&&this.setState({reachLastScreen:!1})}}},{key:"render",value:function(){var e=this.state,t=e.isDarkMode,n=e.shouldTextShow,r=e.reachFirstScreen,a=e.reachLastScreen,o=this.props,i=o.screen,c=o.screenInOrder,u=o.dispatch,l=o.scale
return p.default.createElement("div",{className:(0,w.default)(b.default["full-screen-actions"],{"dark-mode":t})},p.default.createElement("div",{className:(0,w.default)("zoom-wrapper",{"is-Iniframe":MB.isUIChina()||MB.isForum()})},p.default.createElement(g.default,{dispatch:u,scale:l,project:Project.find(i.project_cid),fromFullScreen:!0})),p.default.createElement(y.default,{onClickMode:this.setMode,onClickExit:this.handleExitFullScreen}),p.default.createElement(m.default,{screen:i,screenInOrder:c,
shouldTextShow:n,reachFirstScreen:r,reachLastScreen:a}),p.default.createElement(v.default,{onClick:this.handleNavigate}),p.default.createElement(h.default,{onKeyDown:this.handleKeyDown}))}}]),t}(p.PureComponent)
t.default=E,(0,d.default)(E,"propTypes",{dispatch:f.default.func,screen:f.default.object,screenInOrder:f.default.array,scale:f.default.number})},oJEp:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var R=a(n("MVZn")),o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),N=r(n("q1tI")),O=n("0k54"),I=a(n("jybS")),P=a(n("3jXG")),A=new Set(["pg","sticky","lr","webpage"]),f=function(e){function T(){return(0,o.default)(this,T),(0,c.default)(this,(0,u.default)(T).apply(this,arguments))}return(0,l.default)(T,e),(0,i.default)(T,[{key:"render",value:function(){var e=this.props,t=e.treeData,n=e.offSetX,r=e.offSetY,a=e.isSnapshot,o=t.cid,i=t.type,c=t.children,
u=t.widget
if(a&&A.has(u.name))return null
var l=(0,O.getTreeBoundingRect)(t),s=l.minX,d=l.minY,f=l.maxX,p=l.maxY,h=d-r,m=s-n
if("group"!==i)return"panel"===i?N.default.createElement(P.default,{treeData:t,top:h,left:m,isSnapshot:a}):N.default.createElement(I.default,{widget:u,postfix:"p",top:h,left:m})
var v,g,y,b,w,S,E=u.primary_fixed===Widget.FIXED_TYPE.bottom,C=(0,R.default)({left:m,top:E?"":h,bottom:E?u.cs().height-p:"",width:f-s,height:p-d},(y=u,!MB.isPhantom()&&"none"!=y.ani_name&&y.v&&(w=y.ani_count,y.ani_delay&&"0"!=y.ani_delay&&(b=y.ani_delay),y.ani_duration&&"0"!=y.ani_duration&&(S=y.ani_duration)),{position:y.primary_fixed?"fixed":"absolute",zIndex:y.z,opacity:y.v?y.o/100:0,transform:y.ro?"rotate(".concat(y.ro,"deg)"):"",animationDelay:b,animationDuration:S,animationIterationCount:w})),_=(v=u,
g="group",!MB.isPhantom()&&"none"!=v.ani_name&&v.v&&(g+=" animated ".concat(v.ani_name)),Link.exists(v.link_cids)&&(g+=" clickable"),v.v||(g+=" invisible"),g),x=Link.exists(u.link_cids)?u.link_cids:"",k=u.v&&Link.find(u.link_cids),M=k&&"tap"!==k.gesture?k.gesture:""
return N.default.createElement("div",{"data-cid":o,"data-link_cid":x,className:_,style:C},c.map(function(e){return N.default.createElement(T,{key:e.cid,treeData:e,offSetX:s,offSetY:d,isSnapshot:a})}),N.default.createElement("div",{className:"region gesture ".concat(M)}))}}]),T}(N.PureComponent)
t.default=f,(0,s.default)(f,"propTypes",{treeData:d.default.object,offSetX:d.default.number,offSetY:d.default.number,isSnapshot:d.default.bool})},oKLx:function(e,t,n){},oSKl:function(e,t,n){},oZtI:function(e,t,n){"use strict"
n.r(t)
var i=n("tw9P"),c=n("q09E")
function r(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
return i.k.apply(void 0,[c.b,e,t].concat(r))}function a(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
return i.k.apply(void 0,[c.d,e,t].concat(r))}function o(e,t,n){for(var r=arguments.length,a=Array(3<r?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o]
return i.k.apply(void 0,[c.f,e,t,n].concat(a))}n.d(t,"take",function(){return i.s}),n.d(t,"takem",function(){return i.t}),n.d(t,"put",function(){return i.n}),n.d(t,"all",function(){return i.b}),n.d(t,"race",function(){return i.o}),n.d(t,"call",function(){return i.e}),n.d(t,"apply",function(){return i.c}),n.d(t,"cps",function(){return i.h}),n.d(t,"fork",function(){return i.k}),n.d(t,"spawn",function(){return i.r}),n.d(t,"join",function(){return i.m}),n.d(t,"cancel",function(){return i.f}),n.d(t,"select",
function(){return i.p}),n.d(t,"actionChannel",function(){return i.a}),n.d(t,"cancelled",function(){return i.g}),n.d(t,"flush",function(){return i.j}),n.d(t,"getContext",function(){return i.l}),n.d(t,"setContext",function(){return i.q}),n.d(t,"takeEvery",function(){return r}),n.d(t,"takeLatest",function(){return a}),n.d(t,"throttle",function(){return o})},oose:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return c.reducer}}),Object.defineProperty(t,"setProjectCommentPermission",{enumerable:!0,get:function(){return u.setProjectCommentPermission}}),t.CommentContainer=t.CommentMarkerPanelContainer=void 0
var a=n("/MKj"),o=n("/5+U"),i=n("ubZ9"),c=n("ZY2Q"),u=n("H5Dy"),l=r(n("deeV")),s=(0,a.connect)(function(e){var t=e.model,n=t.commentThreads,r=t.screens,a=t.comments,o=t.user,i=t.current,c=t.collaborators,u=t.unreadComment,l=e.container
return{commentContainer:l.comment,currentState:i,collaboratorsState:c,unreadCommentState:u,commentThreadList:d(n,i.screenCid),selectCommentThread:f(n,i.screenCid,l.comment.select),commentListMap:p(a),currentScreenName:h(r,i.screenCid),userId:o.id}})(l.default)
t.CommentContainer=s
var d=(0,o.immutableTransformCache)(function(e,t){return e.filter(function(e){return e.screen_cid===t})}),f=(0,o.immutableTransformCache)(function(e,t,n){return n&&e.find(function(e){return e.cid===n&&e.screen_cid===t})||null}),p=(0,o.immutableTransformCache)(function(e){return e.reduce(function(e,t){return void 0===e[t.thread_cid]?e[t.thread_cid]=[t]:e[t.thread_cid].push(t),e},{})}),h=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid==t}).name}),m=(0,a.connect)(function(e){
var t=e.model,n=t.current,r=t.user,a=t.commentThreads,o=e.container
return{queryCurrentScreenContainerElement:v(n.screenCid),scale:o.common.scale/100,isActive:"comment"==o.previewSetting.toolbarActiveItem,commentContainer:o.comment,commentThreadList:d(a,n.screenCid),currentUserRole:n.userRole,userId:r.id}})(i.CommentMarkerPanel)
t.CommentMarkerPanelContainer=m
var v=(0,o.immutableTransformCache)(function(e){return function(){return document.querySelector("#pscreen".concat(e," .scontainer"))}})},or5M:function(e,t,n){var v=n("1hJj"),g=n("QoRX"),y=n("xYSL")
e.exports=function(e,t,n,r,a,o){var i=1&n,c=e.length,u=t.length
if(c!=u&&!(i&&c<u))return!1
var l=o.get(e)
if(l&&o.get(t))return l==t
var s=-1,d=!0,f=2&n?new v:void 0
for(o.set(e,t),o.set(t,e);++s<c;){var p=e[s],h=t[s]
if(r)var m=i?r(h,p,s,t,e,o):r(p,h,s,e,t,o)
if(void 0!==m){if(m)continue
d=!1
break}if(f){if(!g(t,function(e,t){if(!y(f,t)&&(p===e||a(p,e,n,r,o)))return f.push(t)})){d=!1
break}}else if(p!==h&&!a(p,h,n,r,o)){d=!1
break}}return o.delete(e),o.delete(t),d}},os03:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLikeRequest=t.withTimeoutRetry=t.setTimeoutAsync=t.arraySplitChunk=t.catchAsync=t.createSaveQueue=t.createEventTarget=t.createTimer=void 0
var h=r(n("J4zp")),m=r(n("MVZn")),v=r(n("SA+Z")),p=r(n("o0o1")),g=r(n("yXPU"))
t.createTimer=function(e){var t=e.func,n=e.delay,r=e.queueTask,a=void 0===r?setTimeout:r,o=e.cancelTask,i=void 0===o?clearTimeout:o,c=null,u=function e(){c&&(c=a(e,n),t())}
return{start:function(){c||(c=a(u,n))},stop:function(){c&&(i(c),c=null)},isActive:function(){return Boolean(c)}}}
t.createEventTarget=function(){var r,e={setMap:r=new Map,clear:function(){return r.clear()},addListener:function(e,t){var n=r.get(e)
n?n.add(t):r.set(e,new Set([t]))},removeListener:function(e,t){var n=r.get(e)
n&&n.delete(t),n&&0===n.size&&r.delete(e)}},n=e.setMap
return{clear:e.clear,addEventListener:e.addListener,removeEventListener:e.removeListener,dispatchEvent:function(t){var e=n.get(t.type)
e&&e.forEach(function(e){return e(t)})}}}
var y=function(){}
t.createSaveQueue=function(e){var t=e.onError,a=e.doSave,n=e.beforeSave,o=void 0===n?y:n,r=e.afterSave,i=void 0===r?y:r,c=[],u=!1,l={},s=function(e){l=e},d=(f=(0,g.default)(p.default.mark(function e(){var t,n,r
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(),t=c,c=[],u=!0,e.next=6,b(a,t,s)
case 6:if(n=e.sent,r=n.error,u=!1,l={},r&&console.error("[Error][saveAsync] savingDataQueue: ".concat(t.length,", dataQueue: ").concat(c.length),r),r)throw r
e.next=13
break
case 13:i()
case 14:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)})
var f
return{clear:function(){c=[]},add:function(e){return c.push(e)},save:function(){!u&&c.length&&d().catch(t)},filter:function(e){c=c.filter(e)},getLength:function(){return c.length},getIsSaving:function(){return u},getSavingState:function(){return l}}}
var b=function(){var t=(0,g.default)(p.default.mark(function e(t){var n,r,a,o,i,c=arguments
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=c.length,o=new Array(1<a?a-1:0),i=1;i<a;i++)o[i-1]=c[i]
return e.next=4,t.apply(void 0,o)
case 4:n=e.sent,e.next=10
break
case 7:e.prev=7,e.t0=e.catch(0),r=e.t0
case 10:return e.abrupt("return",{result:n,error:r})
case 11:case"end":return e.stop()}},e,this,[[0,7]])}))
return function(e){return t.apply(this,arguments)}}()
t.catchAsync=b
t.arraySplitChunk=function(e,t){for(var n=[],r=0,a=e.length;r<a;r+=t)n.push(e.slice(r,r+t))
return n}
t.setTimeoutAsync=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0
return new Promise(function(e){return setTimeout(e,t)})}
var a=function(){var t=(0,g.default)(p.default.mark(function e(t){var n,r,a,o,i,c
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.task,r=t.onError,a=t.timeout,o=t.retry,i=void 0===o?8:o,c=0
case 2:return e.prev=3,e.next=6,Promise.race([n({attempt:c,timeout:a}),new Promise(function(e,t){return setTimeout(function(){return t(new Error("[TIMEOUT] timeout after ".concat(a)))},a)})])
case 6:return e.abrupt("return",e.sent)
case 9:if(e.prev=9,e.t0=e.catch(3),i<=c)throw e.t0
e.next=13
break
case 13:return e.next=15,r(e.t0,{attempt:c,timeout:a})
case 15:c++
case 16:e.next=2
break
case 18:case"end":return e.stop()}},e,this,[[3,9]])}))
return function(e){return t.apply(this,arguments)}}()
t.withTimeoutRetry=a
t.fetchLikeRequest=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.method,r=void 0===t?"GET":t,u=e.headers,l=e.body,a=e.timeout,s=void 0===a?6e4:a,d=e.credentials,f=e.onUploadProgress,p=e.onDownloadProgress
return new Promise(function(a,o){var i=function(e,t){return Object.assign(new Error(e),{status:t,url:n,method:r})},c=new XMLHttpRequest
c.onerror=function(){return o(i("NETWORK_ERROR",-1))},c.ontimeout=function(){return o(i("NETWORK_TIMEOUT",-1))},c.onreadystatechange=function(){var e=c.readyState,t=c.status
if(2===e){if(0===t)return c.abort(),o(i("HEADER_STATUS_ERROR",-1))
var n=c.getAllResponseHeaders().split(/[\r\n]+/).reduce(function(e,t){var n=t.split(":"),r=(0,v.default)(n),a=r[0],o=r.slice(1)
return o.length&&(e[a.trim().toLowerCase()]=o.join(":").trim()),e},{}),r=200<=t&&t<300
a((0,m.default)({headers:n,status:t,ok:r},w(c,i)))}},f&&c.upload&&(c.upload.onprogress=f),p&&(c.onprogress=p),c.open(r,n),u&&Object.entries(u).forEach(function(e){var t=(0,h.default)(e,2),n=t[0],r=t[1]
return c.setRequestHeader(n,r)}),c.responseType="text",c.timeout=s||0,c.withCredentials="include"===d,c.send(l||null)})}
var w=function(n,r){var e,t=!1
setTimeout(function(){e||(n.abort(),t=!0)})
var a=function(){if(void 0===e){if(t)throw r("PAYLOAD_ALREADY_DROPPED",-1)
e=new Promise(function(e,t){n.onerror=function(){return t(r("PAYLOAD_ERROR",-1))},n.ontimeout=function(){return t(r("PAYLOAD_TIMEOUT",-1))},n.onreadystatechange=function(){if(4===n.readyState)return 0===n.status?t(r("PAYLOAD_STATUS_ERROR",-1)):void e(n.response)}})}return e}
return{text:a,json:function(){return a().then(function(e){return JSON.parse(e)})}}}},p2ZH:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),d=a(n("17x9")),f=r(n("q1tI")),p=a(n("6PGs")),h=a(n("TSYQ")),m=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.screen,r=t.screenInOrder,a=t.shouldTextShow,o=t.reachFirstScreen,i=t.reachLastScreen,c=r.findIndex(function(e){return e===n.cid})
return e=o?I18N.preview.firstScreen:i?I18N.preview.lastScreen:"".concat(c+1," / ").concat(r.length),f.default.createElement("div",{className:(0,h.default)(p.default["screen-info"],{show:a})},f.default.createElement("div",null,e),f.default.createElement("span",{className:"dot"}),f.default.createElement("div",{className:"screen-name"},n.name))}}]),t}(f.PureComponent)
t.default=m,(0,s.default)(m,"propTypes",{screen:d.default.object,screenInOrder:d.default.array,shouldTextShow:d.default.bool,reachFirstScreen:d.default.bool,reachLastScreen:d.default.bool})},p7Sh:function(e,t,n){e.exports={"thumbnail-container":"_1iU7yzdbdyvTcm4cDCjwwm"}},peLG:function(e,t,n){},prTy:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("pVnL")),c=a(n("QILm")),u=a(n("o0o1")),l=a(n("yXPU")),s=a(n("lwsE")),d=a(n("W8MJ")),f=a(n("a1gu")),p=a(n("Nsbk")),h=a(n("7W2i")),m=a(n("PJYZ")),v=a(n("lSNA")),g=r(n("q1tI")),o=a(n("17x9")),y=n("cTU2"),b=n("/5+U"),w=(0,y.createAsyncTaskQueue)().pushTask,S=function(e){function o(){var e,t;(0,s.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,f.default)(this,(e=(0,p.default)(o)).call.apply(e,[this].concat(r))),(0,v.default)((0,m.default)((0,m.default)(t)),"getElementRef",function(e){return t.imageRef=e}),t}return(0,h.default)(o,e),(0,d.default)(o,[{key:"componentDidMount",value:function(){var o=this
w((0,l.default)(u.default.mark(function e(){var t,n,r,a
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.props,n=t.src,r=t.adjustImage,e.next=3,(0,y.loadImageAsync)(o.imageRef,n)
case 3:a=e.sent,r&&a&&(0,b.adjustImageRect)({image:a,adjust:r})
case 5:case"end":return e.stop()}},e,this)}))).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.props,t=(e.src,e.adjustImage,(0,c.default)(e,["src","adjustImage"]))
return g.default.createElement("img",(0,i.default)({alt:"",ref:this.getElementRef},t))}}]),o}(g.PureComponent);(t.default=S).propTypes={src:o.default.string,adjustImage:o.default.number}},q09E:function(e,t,n){"use strict"
var f=n("Ev6p"),l={done:!0,value:void 0},p={}
function h(e){return f.q.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function m(i,e){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"iterator",c=void 0,u=e
function n(e,t){if(u===p)return l
if(t)throw u=p,t
c&&c(e)
var n=i[u](),r=n[0],a=n[1],o=n[2]
return c=o,(u=r)===p?l:a}return Object(f.t)(n,function(e){return n(null,e)},t,!0)}var v=n("tw9P"),g=n("92lH")
function r(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
var o={done:!1,value:Object(v.s)(e)},i=void 0,c=function(e){return i=e}
return m({q1:function(){return["q2",o,c]},q2:function(){return i===g.a?[p]:["q1",(e=i,{done:!1,value:v.k.apply(void 0,[t].concat(r,[e]))})]
var e}},"q1","takeEvery("+h(e)+", "+t.name+")")}function a(e,t){for(var n=arguments.length,r=Array(2<n?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a]
var o={done:!1,value:Object(v.s)(e)},i=function(e){return{done:!1,value:v.k.apply(void 0,[t].concat(r,[e]))}},c=void 0,u=void 0,l=function(e){return c=e},s=function(e){return u=e}
return m({q1:function(){return["q2",o,s]},q2:function(){return u===g.a?[p]:c?["q3",(e=c,{done:!1,value:Object(v.f)(e)})]:["q1",i(u),l]
var e},q3:function(){return["q1",i(u),l]}},"q1","takeLatest("+h(e)+", "+t.name+")")}var y=n("mbVZ")
function o(e,t,n){for(var r=arguments.length,a=Array(3<r?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o]
var i=void 0,c=void 0,u={done:!1,value:Object(v.a)(t,y.a.sliding(1))},l={done:!1,value:Object(v.e)(f.m,e)},s=function(e){return i=e},d=function(e){return c=e}
return m({q1:function(){return["q2",u,d]},q2:function(){return["q3",{done:!1,value:Object(v.s)(c)},s]},q3:function(){return i===g.a?[p]:["q4",(e=i,{done:!1,value:v.k.apply(void 0,[n].concat(a,[e]))})]
var e},q4:function(){return["q2",l]}},"q1","throttle("+h(t)+", "+n.name+")")}n.d(t,"a",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"f",function(){return o})
var i=function(e){return"import { "+e+" } from 'redux-saga' has been deprecated in favor of import { "+e+" } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."},c=Object(f.n)(r,i("takeEvery")),u=Object(f.n)(a,i("takeLatest")),s=Object(f.n)(o,i("throttle"))},q3nj:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducerMap",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"PreviewContainer",{enumerable:!0,get:function(){return u.default}}),t.sagaMap=void 0
var a=r(n("j1JO")),o=r(n("yOnP")),i=n("tBsX"),c=r(n("cQH5")),u=r(n("aYzi")),l={layerSaga:i.saga,sliceSaga:a.default,artboardsSaga:o.default}
t.sagaMap=l},qES3:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var _=a(n("pVnL")),c=a(n("MVZn")),u=a(n("lwsE")),o=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("PJYZ")),p=a(n("lSNA")),x=r(n("q1tI")),i=a(n("17x9")),k=a(n("i6OX")),M=a(n("zkrS")),T=n("hkZD"),R=n("iETn"),N=a(n("mquD")),h=a(n("UbMB")),m=n("l0oT"),O=h.default.bind(N.default),v=function(e){function i(e){var a;(0,u.default)(this,i),a=(0,l.default)(this,(0,s.default)(i).call(this,e)),(0,p.default)((0,f.default)((0,f.default)(a)),"handleSetting",function(e){0==Number(e)&&(a.toggleEditing(),
MB.event("二次编辑","运行页"))}),(0,p.default)((0,f.default)((0,f.default)(a)),"toggleSelect",function(){var e=a.props,t=e.selectCid,n=e.commentOperations,r=e.commentThreadCid
t||n.setFocusCommentThreadCid(r)}),(0,p.default)((0,f.default)((0,f.default)(a)),"cancelSelect",function(){var e=a.props,t=e.selectCid,n=e.commentOperations
t||a.state.isEdit||n.cancelSelect()}),(0,p.default)((0,f.default)((0,f.default)(a)),"doUpdateComment",function(e){var t=a.props,n=t.commentOperations,r=t.commentList[0]
r&&n.doUpdateComment((0,c.default)({},r,{message:e}))}),(0,p.default)((0,f.default)((0,f.default)(a)),"doCreateComment",function(e,t){var n=a.props,r=n.commentThreadCid
n.commentOperations.doCreateComment(e,r),!t&&a.toggleReply()}),(0,p.default)((0,f.default)((0,f.default)(a)),"getCommentMessage",function(){return a.props.commentList[0]&&a.props.commentList[0].message}),(0,p.default)((0,f.default)((0,f.default)(a)),"handleRenderMoreComments",function(e){e.stopPropagation(),a.toggleRenderMore(),MB.event("展开评论","运行页")})
var t=a.props,n=t.commentOperations,r=t.commentThreadCid,o=t.commentList[0]
return a.setReplyTextareaRef=function(e){return a.replyTextareaRef=e},a.setCommentRef=function(e){return a.commentRef=e},a.doReply=function(e){a.replyTextareaRef&&a.replyTextareaRef.onEditFinish(e)},a.doDeleteThread=function(){return n.doDeleteCommentThread(r)},a.toggleEditing=function(){a.toggleEditState(),a.editableSpanComponent&&a.editableSpanComponent.toggleEditing(!a.state.isEdit)},a.setEditableSpanComponent=function(e){return a.editableSpanComponent=e},a.editableSpanComponent=null,
a.toggleFolded=function(){return a.setState(function(e){return{isFolded:!e.isFolded}})},a.toggleReply=function(){return a.setState(function(e){return{isReply:!e.isReply}})},a.toggleEditState=function(){return a.setState(function(e){return{isEdit:!e.isEdit}})},a.toggleRenderMore=function(){return a.setState(function(e){return{renderMore:!e.renderMore}})},a.state={isFolded:o&&(0,T.checkIfMessageOverflow)(o.message)||!1,isReply:!1,renderMore:!1,isEdit:!1,showByEnter:!0},a}return(0,d.default)(i,e),(0,o.default
)(i,[{key:"componentWillReceiveProps",value:function(e){var t=e.commentList,n=t[0]&&(0,T.checkIfMessageOverflow)(t[0].message)
n!=this.state.isFolded&&this.setState({isFolded:n})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.focusCid===e.commentThreadCid
if(!this.props.fromComment&&t&&this.commentRef){var n=document.querySelector("#comment-thread"),r=n.getBoundingClientRect().top,a=n.scrollTop+this.commentRef.getBoundingClientRect().top-r;(0,m.scrollTo)(n,a,20)}}},{key:"render",value:function(){var e=this.props,t=e.commentList,n=e.userId,r=e.currentState,a=e.commentThreadCid,o=e.permission,i=e.commentMarkerIndex,c=e.commentOperations,u=e.focusCid,l=e.fromComment,s=this.state,d=s.isReply,f=s.renderMore,p=s.isFolded,h=s.isEdit,m=s.showByEnter,v=u===a,
g=t[0]||null,y=g&&c.getCollaborator(g.user_id),b=t.slice(1)||[],w=2<b.length,S=t.length,E="".concat(N.default.comment," thread-initial entry ").concat(l?"":null==u?"":O(v?"comment-focus":"comment-noFocus")),C=(0,T.ifCanReply)({userId:n,currentState:r,permission:o})
return 0==S?null:x.default.createElement("div",{ref:this.setCommentRef,className:E,onMouseEnter:this.toggleSelect,onMouseLeave:this.cancelSelect},x.default.createElement("div",null,x.default.createElement(T.ContentHeader,{markIndex:i,onSelect:this.handleSetting,onDelete:this.doDeleteThread,permission:o,information:y,ifShowBtn:!h,showByEnter:m}),x.default.createElement("div",{className:O("container-main")},g&&x.default.createElement(T.ContentMessage,{permission:o,comment:g,isFolded:p,isEdit:h,
toggleEdit:this.toggleEditing,getValue:this.getCommentMessage,setEditableSpanComponent:this.setEditableSpanComponent,onValueChange:this.doUpdateComment}),!this.state.isEdit&&x.default.createElement("div",{className:"".concat(O("container-bottom"))},g&&x.default.createElement("div",{className:N.default.time},M.default.L10N.parseTimeAgo(1e3*g.updated_at)),C&&x.default.createElement("div",{className:O("reply-sort"),onClick:this.toggleReply},x.default.createElement(k.default,{type:"dora",name:"reply",
className:O("btn-reply")}),d?M.default.I18N.preview.comment.cancel_reply:M.default.I18N.preview.comment.comment_create)))),x.default.createElement(T.ReplyDropdown,{isReply:d,doReply:this.doReply,onValueChange:this.doCreateComment,setReplyTextareaRef:this.setReplyTextareaRef}),w?x.default.createElement(R.CommentReplyEntry,(0,_.default)({doCreateComment:this.doCreateComment,replyList:b.slice(0,2)},this.props)):x.default.createElement(R.CommentReplyEntry,(0,_.default)({doCreateComment:this.doCreateComment,
replyList:b},this.props)),f&&x.default.createElement(R.CommentReplyEntry,(0,_.default)({doCreateComment:this.doCreateComment,replyList:b.slice(2)},this.props)),w&&x.default.createElement("div",{className:N.default.expand,onClick:this.handleRenderMoreComments},f?I18N.preview.comment.fold:I18N.preview.comment.unfold))}}]),i}(x.PureComponent)
t.default=v,(0,p.default)(v,"propTypes",{focusCid:i.default.oneOfType([i.default.string,i.default.object]),selectCid:i.default.oneOfType([i.default.string,i.default.object]),permission:i.default.object,fromComment:i.default.bool,commentList:i.default.array,commentMarkerIndex:i.default.number,commentThreadCid:i.default.string,commentOperations:i.default.object,userId:i.default.number,scrollRef:i.default.object,commentThreadList:i.default.array,currentState:i.default.object})},qOCw:function(e,t,n){
"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.selectWithlanguageUnit=t.reduceTextLayer=t.getCodeAttributes=t.sortScreenLayers=t.getTextAttributes=t.getBaseAttributes=t.getTextContent=void 0
var m=r(n("RIqP")),a=r(n("wig9")),o=r(n("7tbW")),k=n("/5+U"),M=n("XrEr")
t.getTextContent=function(e){return"rich_text"===e.name?(n=e.text,JSON.parse(n).reduce(function(e,t,n,r){return e+(0===n?"":"\n")+t.children.reduce(function(e,t,n){return e+t.text},"")},"")):!!(t=e.text)&&t.replace(/<[^>]+>/gi,"")
var t,n}
t.getBaseAttributes=function(e){var t=e.width,n=e.height,r=e.left,a=e.top,o=e.opacity,i=e.borderRadius,c=e.rotation,u=e.ratio,l=e.unit,s=(0,k.adapterScreen)(r,u,l),d=(0,k.adapterScreen)(a,u,l),f=(0,k.adapterScreen)(t,u,l),p=(0,k.adapterScreen)(n,u,l),h=i?String(i).split(",").map(function(e){return(0,k.adapterScreen)(parseInt(e)||0,u,l)}).join(" "):null,m=v(c)?null:"".concat(c,"°")
return{adapterLeft:s,adapterTop:d,adapterWidth:f,adapterHeight:p,radius:h,opacity:v(o)?null:"".concat(o,"%"),rotate:m}}
var v=function(e){return null===e||isNaN(e)||0===e}
t.getTextAttributes=function(e){var t=e.lineHeight,n=e.letterSpacing,r=e.unit,a=e.ratio
return{lineHeight:t=v(t)?null:(0,k.adapterScreen)(t,a,r),letterSpacing:n=v(n)?null:(0,k.adapterScreen)(n,a,r)}}
t.sortScreenLayers=function(e){var p=[],h=[]
return e.forEach(function(e){var t=e.bg_colors,n=void 0===t?[]:t,r=e.borders,a=void 0===r?[]:r,o=e.text_styles,i=void 0===o?[]:o,c=0<i.length?i[0]:{},u=c.color,l=c.font_face,s=[]
n.length&&(s=n.map(function(e){var t=e.value,n=e.type,r=void 0===n?"color":n,a=e.gradient,o=(0,M.getNormalRgbaColor)(t)
return"color"===r?o:y(a)})),s=g(s)
var d=[]
a.length&&(d=a.map(function(e){var t=e.color
return(0,M.getNormalRgbaColor)(t)})),d=g(d)
var f=u&&(0,M.getColorFromUnit)((0,M.parseSketchColor2rgba)(u),"rgba")
!p.includes(f)&&p.push(f),!h.includes(l)&&h.push(l),p=!(p=!p.includes(s)&&(0,m.default)(p).concat((0,m.default)(s))).includes(d)&&(0,m.default)(p).concat((0,m.default)(d))}),{screenColor:(0,o.default)((0,a.default)(p)).slice(0,14)||[],globalText:(0,a.default)(h)}}
var g=function(e){var t
return(t=[]).concat.apply(t,(0,m.default)(e))}
t.getCodeAttributes=function(e){var t,n,r,a,o,i,c,u,l,s=e.textStyles,d=e.borders,f=e.background,p=e.shadows,h=e.innerShadows,m=(e.colorUnit,e.unit),v=e.ratio
if(s.length){var g=s[0],y=g.color,b=g.font_size,w=g.font_face
t=y&&(0,M.getNormalRgbaColor)(y),n=(0,k.adapterScreen)(b,v,m),r=w}if(d.length){var S=d[0],E=S.position,C=void 0===E?"inside":E,_=S.color,x=S.thickness
a=(0,k.adapterScreen)(x,v,m),i=C,_&&(o=(0,M.getNormalRgbaColor)(_))}return f.length&&(c=(0,M.getNormalRgbaColor)(f[0].value)),p.length&&(u=T(p,m,v)),h.length&&(l=T(h,m,v,!0),u="".concat(u,", ").concat(l)),{fontFamily:r,fontSize:n,color:t,borderWidth:a,borderColor:o,borderPosition:i,backgroundColor:c,boxShadow:u}}
t.reduceTextLayer=function(e){if(0===e.length)return[]
var t=e.reduce(function(e,t){var n=t.font
return e.concat(n)},[])
return(0,m.default)(new Set(t))}
var T=function(e,g,y){var b=3<arguments.length&&void 0!==arguments[3]&&arguments[3],w=e.length
return e.reduce(function(e,t,n){var r=t.color,a=t.offset_x,o=void 0===a?0:a,i=t.offset_y,c=void 0===i?0:i,u=t.blur_radius,l=void 0===u?0:u,s=t.spread,d=void 0===s?0:s,f=(0,k.adapterScreen)(o,y,g),p=(0,k.adapterScreen)(c,y,g),h=(0,k.adapterScreen)(l,y,g)
d=(0,k.adapterScreen)(d,y,g),r=(0,M.getNormalRgbaColor)(r)
var m=n<w-1?", ":"",v=b?"inset ":""
return e.concat("".concat(v).concat(f," ").concat(p," ").concat(h," ").concat(d," ").concat(r).concat(m))},"")},y=function(e){return e&&e.color_stops?e.color_stops.map(function(e){var t=e.color
return(0,M.getNormalRgbaColor)(t)}):M.DEFAULT_COLOR}
t.selectWithlanguageUnit=function(e){switch(e){case"swift":return"pt"
case"android":return"dp"
default:return"px"}}},qYFl:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.isRemoteMtimeStale=t.updateWorkspaceMap=t.updateProject=t.updateTeam=t.updateCollaborator=t.updateAsset=void 0
var l=r(n("o0o1")),a=r(n("yXPU")),s=n("t3Un"),o=n("t77w"),i=window,c=i.$,d=i.MB,f=i.Screen,u=i.Screenstate,p=i.Panel,h=i.Panelstate,m=i.Widget,v=i.Widgetstate,g=i.Link
t.updateAsset=function(e,t){if(!d.f.inSharing&&"create"===e){var n=new Asset
n.load(t),n.lsave(!1)}}
t.updateCollaborator=function(e,t){if(d.f.inSharing){if("update"===e){var n=Collaborator.find(t.cid)
n?n.refresh(t):((n=new Collaborator).load(t),n.lsave(!1)),d.webpackInterface.store.dispatch({type:"entry:state:init"})}if("destroy"===e){var r=Collaborator.find(t.cid)
if(!r)return
if(r.ldestroy(!1),r.user_id===d.user.id)return window.location.reload()}}else{if("update"===e){var a=Collaborator.find(t.cid)
a?a.refresh(t):((a=new Collaborator).load(t),a.lsave(!1)),d.webpackInterface.refreshAll()}if("destroy"===e){var o=Collaborator.find(t.cid)
if(!o)return
if(o.ldestroy(!1),o.user_id===d.user.id){var i=o.project_cid&&Project.find(o.project_cid),c=o.team_cid&&Team.find(o.team_cid)
i&&d.webpackInterface.deleteProjectByCid(i.cid),c&&d.webpackInterface.deleteTeamByCid(c.cid)}}}}
t.updateTeam=function(e,t){if(!d.f.inSharing){if("update"===e){var n=Team.find(t.cid)
n?n.refresh(t):((n=new Team).load(t),n.lsave(!1)),d.webpackInterface.refreshAll()}if("destroy"===e){var r=Team.find(t.cid)
r&&d.webpackInterface.deleteTeamByCid(r.cid)}}}
t.updateProject=function(e,t){if(!d.f.inSharing){if("update"===e){var n=Project.find(t.cid)
if(n){if(n.duplicating){var r=n.screens_count
n.refresh(t),n.screens_count=r}}else(n=new Project).load(t),n.screens_count||(n.screens_count=2),n.lsave(!1)
d.webpackInterface.refreshAll(),n.duplicating||c("#notification").removeClass("active"),d.f.isDuplicatingDemo&&!n.duplicating&&(d.f.isDuplicatingDemo=!1,d.webpackInterface.navigateTo("/workspace/apps/".concat(n.cid)))}if("destroy"===e){var a=Project.find(t.cid)
if(a)d.webpackInterface.deleteProjectByCid(a.cid)
else{var o=Template.find(t.cid)
o&&(o.ldestroy(!1),d.renderTemplateList())}}c(".timeago").timeago()}}
var y={Screen:function(e,t){if("update"===e){var n=f.find(t.cid)
n?(n.refresh(t),d.currentScreen.cid===n.cid&&(d.action("set:current:screen",{screen:n}),c("#design").trigger("slider:update"))):((n=new f).load(t),n.lsave(!1)),d.currentProject&&d.currentProject.cid===n.project_cid&&d.action("update:screens:all",{screens:d.currentProject.cscreens()})}else if("destroy"===e){var r=f.find(t.cid)
if(!r)return
r.ldestroy(!1),d.currentProject&&d.currentProject.cid===r.project_cid&&d.action("entry:remove:from:screen-history",{cids:[r.cid]})}},Screenstate:function(e,t){var n=f.find(d.currentScreen.cid)
if("update"===e){var r=u.find(t.cid)
if(r?r.refresh(t):((r=new u).load(t),r.lsave(!1)),n&&n.cid===r.screen_cid)return d.renderStateList()}else if("destroy"===e){var a=u.find(t.cid)
if(!a)return
if(a.ldestroy(!1),n&&n.cid===a.screen_cid)return n.state_cid===a.cid&&(n.setState("default",!0),d.action("set:current:screen",{screen:n}),ScreenManager.updateWidgetList()),d.renderStateList()}},Panel:function(){var r=(0,a.default)(l.default.mark(function e(t,n,r){var a,o,i,c,u
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.getCurrentScreen(),"update"!==t){e.next=33
break}if(o=p.find(n.cid)){e.next=28
break}if(e.prev=4,Template.find(n.template_cid)){e.next=15
break}return e.next=9,(0,s.requestJSON)("/templates/".concat(n.template_cid,".json"))
case 9:i=e.sent,Template.refresh([i.template]),f.refresh(i.screens),m.refreshWidgetAfterDecompress(i.widgets),g.refresh(i.links),d.Pusher.enableSocketChannel(i.template.cid)
case 15:if((c=new p).load(n),c.lsave(!1),d.renderTemplateList(),a===c.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=21
break
case 21:e.next=26
break
case 23:e.prev=23,e.t0=e.catch(4),console.warn(e.t0)
case 26:e.next=31
break
case 28:if(o.refresh(n),a===o.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=31
break
case 31:e.next=44
break
case 33:if("destroy"!==t){e.next=44
break}if(u=p.find(n.cid)){e.next=37
break}return e.abrupt("return")
case 37:if(a===u.screen_cid)return PanelManager.remove(u.cid,!1),d.action("selection:unselect:items",{cids:[u.cid]}),e.abrupt("return",ScreenManager.updateWidgetList())
e.next=43
break
case 43:return e.abrupt("return",u.ldestroy(!1))
case 44:case"end":return e.stop()}},e,this,[[4,23]])}))
return function(e,t,n){return r.apply(this,arguments)}}(),Panelstate:function(e,t){var n=f.find(d.currentScreen.cid)
if("update"===e){var r=h.find(t.cid)
if(r?r.refresh(t):((r=new h).load(t),r.lsave(!1)),n&&n.state_cid===r.screenstate_cid){var a=p.find(r.panel_cid)
a.screenstate_cid===r.screenstate_cid&&(a.restore(r),a.lsave(!1),ScreenManager.updateWidgetList())}}},Widget:function(e,t){return function(e,t){var n=d.getCurrentScreen()
if("update"===e){var r=m.find(t.cid)
r?r.refresh(t):((r=new m).load(t),r.lsave(!1)),n===r.screen_cid&&ScreenManager.updateWidgetList()}else if("destroy"===e){var a=m.find(t.cid)
if(!a)return
a.ldestroy(!1),n===a.screen_cid&&(d.action("selection:unselect:items",{cids:[a.cid]}),ScreenManager.updateWidgetList())}}(e,(0,o.decompressRichText)(t))},Widgetstate:function(e,t){return function(e,t){var n=f.find(d.currentScreen.cid)
if("update"===e){var r=v.find(t.cid)
if(r?r.refresh(t):((r=new v).load(t),r.lsave(!1)),n&&n.state_cid===r.screenstate_cid){var a=m.find(r.widget_cid)
a.screenstate_cid===r.screenstate_cid&&(a.restore(r),a.lsave(!1),ScreenManager.updateWidgetList())}}}(e,(0,o.decompressRichText)(t))},Link:function(e,t){var n,r=d.getCurrentScreen()
if("update"===e)(n=g.find(t.cid))?n.refresh(t):((n=new g).load(t),n.lsave(!1))
else if("destroy"===e){if(!(n=g.find(t.cid)))return
n.ldestroy(!1)}n&&r===n.screen_cid&&d.renderLinks()}}
t.updateWorkspaceMap=y
var b={Asset:Asset,Collaborator:Collaborator,Team:Team,Project:Project,Screen:f,Screenstate:u,Panel:p,Panelstate:h,Widget:m,Widgetstate:v,Link:g}
t.isRemoteMtimeStale=function(e,t,n){var r=b[e]&&b[e].findByAttribute("cid",t),a=r&&r.mtime>n
return a}},qZTm:function(e,t,n){var r=n("kekF")(Object.keys,Object)
e.exports=r},quyA:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]")
e.exports=function(e){return n.test(e)}},rEGp:function(e,t){e.exports=function(){return[]}},rESR:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),h=r(n("q1tI")),f=a(n("17x9")),m=a(n("i6OX")),v=n("DqDi"),g=a(n("xo+i")),y=n("gSgL"),p=n("1iCU"),b=a(n("GEF2")),w=a(n("UbMB")).default.bind(b.default),S=function(e){function n(e){var t
return(0,o.default)(this,n),t=(0,c.default)(this,(0,u.default)(n).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(t)),"handleBackToOrigin",function(){t.props.dispatch({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}),(0,d.default)((0,s.default)((0,s.default)(t)),"handleTabChange",function(e){t.setState({activeIndex:e})}),(0,d.default)((0,s.default)((0,s.default)(t)),"toggleMinimized",function(){var e=t.props.toolbarActiveItem
t.setState(function(e){return{isMinimized:!e.isMinimized}}),MB.event("".concat(p.TOOLBAR_TRAKING_CONFIG[e],",点击了").concat(t.state.isMinimized?"展开":"收起","列表"),"运行页")}),t.state={isMinimized:MB.isUIChina()||MB.isForum(),activeIndex:0},t}return(0,l.default)(n,e),(0,i.default)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){"inspect"!==e.toolbarActiveItem&&this.setState({activeIndex:0})}},{key:"render",value:function(){var e=this.props,t=e.isDemo,n=e.project,r=e.screensCount,a=e.toolbarActiveItem,
o=e.isDisplaced,i=this.state,c=i.isMinimized,u=i.activeIndex,l=[{type:"dora",label:"".concat(I18N.preview.pages," (").concat(r,")"),icon:"file_text"},{type:"dora",label:I18N.preview.images,icon:"slice"}],s="inspect"==a&&!MB.isHTMLZip(),d=s?l:l.slice(0,1),f=w("preview-panel",{minimized:c},{"is-uichina":MB.isUIChina()||MB.isForum()}),p=w("preview-panel-nav",{"single-nav":!s})
return h.default.createElement("div",{className:w("preview-panel-wrapper"),style:{width:c?0:240}},h.default.createElement("div",{className:w("reset-btn",{"is-show":o}),onClick:this.handleBackToOrigin},I18N.click_to_origin),h.default.createElement("div",{className:f},h.default.createElement(v.NavigationBar,{tabs:d,activeIndex:u,onChange:this.handleTabChange,className:p,hideBorder:!0}),h.default.createElement("div",{className:"preview-panel-nav-line",style:{opacity:s?0:1}}),0==u?h.default.createElement(
g.default,{toolbarActiveItem:a,isDemo:t}):h.default.createElement(y.SliceContainer,{projectName:n.name}),h.default.createElement("div",{className:w("panel-toggle-minimize",{minimized:c}),onClick:this.toggleMinimized},h.default.createElement(m.default,{type:"fa",name:"angle-right",className:"toggle-icon"}))))}}]),n}(h.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{project:f.default.object.isRequired,screensCount:f.default.number.isRequired,toolbarActiveItem:f.default.string.isRequired,isLoggedIn:f.default.bool,isDisplaced:f.default.bool,isDemo:f.default.bool,dispatch:f.default.func})},rQun:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getIcon=function(e){var t=u.test(e.icon),n=(e.icon||"").replace(u,""),r=t?e.icon.split("-")[0]:"fa",a="".concat("mb"===r?"icon":r,"-").concat(n),o="".concat(r," ").concat(a),i={fontSize:"".concat(e.iS(),"px")}
return c.default.createElement("span",{className:"icon ".concat(o),style:i},"md"===r?n:null)}
var c=r(n("q1tI")),u=/^(fa|md|mb|ci)-/},rXnp:function(e,t,n){},rbsZ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.openRenewModal=t.getRenewMessage=t.goToPricingPage=void 0
var o=r(n("q1tI")),a=r(n("17x9")),i=r(n("/Q2I")),c=r(n("0L8M"))
n("1mjR")
var u=window,d=u.MB,f=u.I18N,l=function(){return window.open("/pricing?next=".concat(location.href))}
t.goToPricingPage=l
var s=function(e){var t=e.reason,n=e.data,r=e.shouldShowConfirm,a=e.onClose
return o.default.createElement(i.default,{isOpen:!0,className:"renew-modal",title:f.renew_prompt.title,onConfirm:r?l:null,confirmText:r?f.renew_now:null,onClose:a},o.default.createElement("p",null,p(t,n)))}
s.propTypes={reason:a.default.string,data:a.default.object,shouldShowConfirm:a.default.bool,onClose:a.default.func}
var p=function(e,t){var n=t.role,r=t.plan,a=void 0===r?d.currentProject&&d.currentProject.owner_plan||d.user&&d.user.current_plan:r,o=t.storage,i=void 0===o?"":o,c=t.format,u=void 0===c?"":c,l=t.collaborators,s=void 0===l?"":l
return(f.renew_prompt["".concat(n,"_plan")]+f.renew_prompt[e]+f.renew_prompt["".concat(n,"_upgrade")]).replace("{plan}",f[a]).replace("{storage}",i).replace("{format}",u).replace("{collaborators}",s)}
t.getRenewMessage=p
t.openRenewModal=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
window.ga&&window.ga("ec:setAction","checkout",{step:1,option:e}),window.ga&&window.ga("send","event","goal","弹出了续费提示"),(0,c.default)(s,{reason:e,data:t,shouldShowConfirm:"user"===t.role})}},rtgd:function(e,t,n){e.exports={"preview-toolbar":"_3kKqNauE-PaVHPIZg_7k-D"}},rwIS:function(e,t,n){e.exports={"guide-button":"_31FtTxh_wpy1_6DRt1eNdq"}},sEfC:function(e,t,n){var y=n("GoyQ"),b=n("QIyF"),w=n("tLB3"),S=Math.max,E=Math.min
e.exports=function(r,a,e){var o,i,c,u,l,s,d=0,f=!1,p=!1,t=!0
if("function"!=typeof r)throw new TypeError("Expected a function")
function h(e){var t=o,n=i
return o=i=void 0,d=e,u=r.apply(n,t)}function m(e){var t=e-s
return void 0===s||a<=t||t<0||p&&c<=e-d}function v(){var e,t,n=b()
if(m(n))return g(n)
l=setTimeout(v,(t=a-((e=n)-s),p?E(t,c-(e-d)):t))}function g(e){return l=void 0,t&&o?h(e):(o=i=void 0,u)}function n(){var e,t=b(),n=m(t)
if(o=arguments,i=this,s=t,n){if(void 0===l)return d=e=s,l=setTimeout(v,a),f?h(e):u
if(p)return l=setTimeout(v,a),h(s)}return void 0===l&&(l=setTimeout(v,a)),u}return a=w(a)||0,y(e)&&(f=!!e.leading,c=(p="maxWait"in e)?S(w(e.maxWait)||0,a):c,t="trailing"in e?!!e.trailing:t),n.cancel=function(){void 0!==l&&clearTimeout(l),o=s=i=l=void(d=0)},n.flush=function(){return void 0===l?u:g(b())},n}},seXi:function(e,t,n){var b=n("qZTm"),w=Object.prototype.hasOwnProperty
e.exports=function(e,t,n,r,a,o){var i=1&n,c=b(e),u=c.length
if(u!=b(t).length&&!i)return!1
for(var l=u;l--;){var s=c[l]
if(!(i?s in t:w.call(t,s)))return!1}var d=o.get(e)
if(d&&o.get(t))return d==t
var f=!0
o.set(e,t),o.set(t,e)
for(var p=i;++l<u;){var h=e[s=c[l]],m=t[s]
if(r)var v=i?r(m,h,s,t,e,o):r(h,m,s,e,t,o)
if(!(void 0===v?h===m||a(h,m,n,r,o):v)){f=!1
break}p||(p="constructor"==s)}if(f&&!p){var g=e.constructor,y=t.constructor
g!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(f=!1)}return o.delete(e),o.delete(t),f}},sgoq:function(e,t,n){var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),i=RegExp("['’]","g")
e.exports=function(t){return function(e){return r(o(a(e).replace(i,"")),t,"")}}},"t5S/":function(e,t,n){var R=n("87hQ"),N=n("RNpe"),O=n("kUAk"),I=n("/MKq")
function P(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function r(c){return function(){var e=this,i=arguments
return new Promise(function(t,n){var r=c.apply(e,i)
function a(e){u(r,t,n,a,o,"next",e)}function o(e){u(r,t,n,a,o,"throw",e)}a(void 0)})}}var a,o=(a=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,c
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.element,r=t.width,a=t.height,o=t.skipHeavyRender,i=void 0!==o&&o,n){e.next=3
break}throw new Error("invalid element: ".concat(n))
case 3:if(r=parseInt(r||n.style.width.endsWith("px")&&n.style.width||n.offsetWidth),a=parseInt(a||n.style.height.endsWith("px")&&n.style.height||n.offsetHeight),r&&a){e.next=7
break}throw new Error("can not get output size: width: ".concat(r,", height: ").concat(a))
case 7:return c=(new window.XMLSerializer).serializeToString(n).split("\n"),e.abrupt("return",l({htmlSourceList:c,width:r,height:a,skipHeavyRender:i}))
case 10:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})
t.createSnapshotFromElement=o
var i,l=(i=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,c,u,l,s,d,f,p,h,m,v,g,y,b,w,S,E,C,_,x,k,M,T
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.htmlSourceList,r=t.width,a=t.height,o=t.skipHeavyRender,i=void 0!==o&&o,Array.isArray(n)){e.next=3
break}throw new Error("invalid htmlSourceList: ".concat(n))
case 3:if(r&&a){e.next=5
break}throw new Error("invalid size: width: ".concat(r,", height: ").concat(a))
case 5:c=(0,O.createHTMLFragCollector)(),n.forEach(function(e){return c.collect(e,"")}),u=(0,O.createCSSFragCollector)(),l=Array.from(document.getElementsByTagName("link")).map(function(e){return"stylesheet"===e.rel&&e.href}).filter(function(e){return e}),d=!(s=!0),f=void 0,e.prev=12,p=l[Symbol.iterator]()
case 14:if(s=(h=p.next()).done){e.next=25
break}return m=h.value,e.t0=u,e.next=19,(0,R.fetchTextWithCache)(m)
case 19:e.t1=e.sent,e.t2=m,e.t0.collect.call(e.t0,e.t1,e.t2)
case 22:s=!0,e.next=14
break
case 25:e.next=31
break
case 27:e.prev=27,e.t3=e.catch(12),d=!0,f=e.t3
case 31:e.prev=31,e.prev=32,s||null==p.return||p.return()
case 34:if(e.prev=34,d)throw f
e.next=37
break
case 37:return e.finish(34)
case 38:return e.finish(31)
case 39:return Array.from(document.getElementsByTagName("style")).map(function(e){return u.collect(e.innerHTML,"")}),v=c.getOutput(),g=u.getOutput(),y=new Set(P(v.fontInfo.fontFamilySet).concat(P(g.fontInfo.fontFamilySet))),Object.entries(Object.assign({},v.fontInfo.fontFaceMap,g.fontInfo.fontFaceMap)).forEach(function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=[],r=!0,a=!1,o=void 0
try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),a=r[0],o=r[1]
if(!y.has(a.split("|")[0]))return o.forEach(function(e){e.isIgnore=!0})
var i=null,c=null
o.forEach(function(e){i=i||(e.urlString.includes("woff2")?e:null),c=c||(e.urlString.includes("woff")?e:null)})
var u=!1
o.forEach(function(e){i&&e!==i?e.isIgnore=!0:c&&e!==c?e.isIgnore=!0:(e.isIgnore=u,u=!0)})}),M=function(){return{htmlString:b,cssString:w,domString:S,svgString:E,svgDataUrl:C,imageElement:_,canvasElement:x,pngDataUrl:k}},e.prev=46,e.t4=I.prepareHTMLString,e.next=50,(0,N.convertFragListWithUrlMap)(v)
case 50:return e.t5=e.sent,e.next=53,(0,e.t4)(e.t5)
case 53:return b=e.sent,e.t6=I.prepareCSSString,e.next=57,(0,N.convertFragListWithUrlMap)(g)
case 57:return e.t7=e.sent,e.next=60,(0,e.t6)(e.t7)
case 60:return w=e.sent,S="".concat(w,"\n").concat(b),e.next=64,(0,I.prepareSVGString)({domString:S,width:r,height:a})
case 64:if(E=e.sent,C="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(E)),i){e.next=73
break}return e.next=69,A({svgDataUrl:C,width:r,height:a})
case 69:T=e.sent,_=T.imageElement,x=T.canvasElement,k=T.pngDataUrl
case 73:e.next=78
break
case 75:e.prev=75,e.t8=e.catch(46)
case 78:return e.abrupt("return",M())
case 79:case"end":return e.stop()}},e,this,[[12,27,31,39],[32,,34,38],[46,75]])})),function(e){return i.apply(this,arguments)})
t.createSnapshotFromHTMLSourceList=l
var c,A=(c=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,c
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.svgDataUrl,r=t.width,a=t.height,e.next=3,(0,I.prepareImageElement)({svgDataUrl:n,width:r,height:a})
case 3:return o=e.sent,e.next=6,(0,I.prepareCanvasElement)({imageElement:o,width:r,height:a})
case 6:return i=e.sent,c=i.toDataURL(),e.abrupt("return",{imageElement:o,canvasElement:i,pngDataUrl:c})
case 9:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})
t.renderPngDataUrlFromSvgDataUrl=A},t77w:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.decompressRichText=t.compressRichText=t.getAutoHeight=t.getAutoSize=t.getFontFamilyDependOnDevice=void 0
var a=r(n("MVZn")),o=n("G3NE"),i=n("yUqi"),c=n("Clcl"),u=n("j+XH"),l=/modao.cc/.test(window.MBServer)?function(e){return u.WESTERN_ONLY_FONT_LIST.includes(e)?"".concat(e,", ").concat(u.PLATFORM_DEFAULT_FONT["zh-CN"][MB.currentProject.device],", sans-serif"):"".concat(e,", sans-serif")}:function(e){return e}
t.getFontFamilyDependOnDevice=l
t.getAutoSize=function(e){return"rich_text"===e.name?{width:e.initialWidth(o.getHTML),height:e.initialHeight(o.getHTML)}:{width:e.width,height:e.height}}
t.getAutoHeight=function(e){return"rich_text"===e.name?e.autoHeightForFixedWidth(o.getHTML):e.height}
var s=function(e){return"rich_text"===e.name}
t.compressRichText=function(t){if(!s(t))return t
var n=(0,a.default)({},t,{text:(0,i.compress)(t.text)})
try{JSON.parse(d(n).text)}catch(e){(0,c.REPORT_ERROR)(e,t.cid,t.text,n.text,d(n).text)}return n}
var d=function(e){return s(e)?(0,a.default)({},e,{text:(0,i.decompress)(e.text)}):e}
t.decompressRichText=d},tBsX:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"saga",{enumerable:!0,get:function(){return u.default}}),t.reducers=t.default=void 0
var a=r(n("MVZn")),o=n("ANjH"),i=n("/MKj"),c=r(n("xx4x")),u=r(n("7bR1")),l=r(n("eNKG")),s=r(n("ee4a")),d=n("Kkl0"),f=(0,o.combineReducers)((0,a.default)({},l.default,s.default))
t.reducers=f
var p=(0,i.connect)(function(e){var t=e.container,n=t.layers,r=t.common.keyFlags.isSpaceDown,a=t.previewSetting,o=a.toolbarActiveItem,i=a.isSelectLayer,c=a.isShowColorPicker,u=n.activeLayerID,l=n.resourceByScreen[n.visibilityScreenID]||{},s=l.isFetching,d=void 0===s||s,f=l.error
return{isActive:"inspect"==o,isSpaceDown:r,isSelectLayer:i,isShowColorPicker:c,isFetching:d,activeLayerID:u,error:void 0===f?"":f}},function(t){return{requestSelectLayer:function(e){t((0,d.requestSelectLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(c.default)
t.default=p},tLB3:function(e,t){e.exports=function(e){return e}},tajm:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.patchGlobalAutoSaverPusher=void 0
var d=r(n("o0o1")),f=r(n("yXPU")),p=n("Vk5q"),h=n("iKZC"),m=n("os03"),v=n("ycqN"),g=n("3caq"),y=n("Clcl"),b=window.MB
t.patchGlobalAutoSaverPusher=function(){var n,t,e=(0,h.createAutoSaveQueue)({delay:2e4,onError:(t=(0,f.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(0,y.REPORT_ERROR)(t,"[AutoSaveQueue] unhandled error",a()),e.next=3,(0,v.SAVE_NUKE_SEQUENCE)(t,t.status)
case 3:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)}),doSave:(n=(0,f.default)(d.default.mark(function e(t,n){var r
return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,p.processSaveQueue)(t),e.next=3,(0,h.doSaveWithSocketAndFallback)({setSavingState:n,getAutoSaveQueueState:a,saveChunkList:(0,m.arraySplitChunk)(r,64),saveQueueLength:r.length,getSaveItemInfo:p.getSaveItemInfo,isSocketAvailable:function(){return b.Pusher.getIsOpen()},doSocketBatchSave:p.doSocketBatchSave,onSocketError:p.onSocketError,doFallbackSaveItem:p.doFallbackSaveItem,onFallbackError:p.onFallbackError})
case 3:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})}),a=e.getState,r=e.getIsEmpty,o=e.getIsSaving,i=e.add,c=e.addEventListener,l=e.filterSaveQueue,u=e.triggerSave,s=e.afterCurrentSave
c("beforesave",function(){b.setSaving&&b.setSaving(!0)}),c("aftersave",function(){b.currentProject&&(b.currentProject.timestamp=String(.001*Date.now()),b.currentProject.updated_at=(new Date).toISOString(),b.currentProject.lsave(!1)),b.setSaving&&b.setSaving(!1),b.refreshCoWorkers&&b.refreshCoWorkers()}),b.Pusher=(0,g.createWorkspacePusher)({filterStaleData:function(i){var c=new Set,u=[]
return l(function(e){var t=e.record,n=t.cid,r=t.mtime,a=i[n],o=!a||a<r
return o?c.add(n):u.push(e),o}),{remoteStaleCidSet:c,localStaleDataList:u}}}),b.AutoSaver={getState:a,getIsEmpty:r,getIsSaving:o,triggerSave:u,afterCurrentSave:s,add:function(e){var t=e.record,n=e.isDelete,r=void 0!==n&&n
t.mtime=b.Pusher.getServerTimestamp(),i({record:t,isDelete:r})}},(0,v.PATCH_AUTO_SAVE_RELATED)()}},tfo6:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("J4zp")),c=a(n("lwsE")),o=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),p=a(n("17x9")),h=r(n("q1tI")),m=a(n("M8nv")),v=a(n("lwmc")),g=function(e){function t(e){var o
return(0,c.default)(this,t),o=(0,u.default)(this,(0,l.default)(t).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(o)),"handleExpand",function(e,t){e.stopPropagation()
var n=o.state.collapseKeySet,r=t.cid,a=new Set(n)
n.has(r)?a.delete(r):a.add(r),o.setState({collapseKeySet:a})}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleActivate",function(e,t){e.stopPropagation(),o.props.activeCid!==t.cid?(o.props.dispatch({type:"entry:sync-runner:set-screen",payload:{cid:t.cid}}),o.props.dispatch({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})):o.handleExpand(e,t)}),(0,f.default)((0,d.default)((0,d.default)(o)),"handleKeyDown",function(e){(e.ctrlKey||e.metaKey)&&(186==e.keyCode&&(e.preventDefault(),
o.resetExpandAll()),222==e.keyCode&&(e.preventDefault(),o.closeExpanedAll()))}),(0,f.default)((0,d.default)((0,d.default)(o)),"resetExpandAll",function(){o.setState({collapseKeySet:new Set})}),(0,f.default)((0,d.default)((0,d.default)(o)),"closeExpanedAll",function(){var e=(o.props.screenTreeData||{}).childListMap,a=new Set
Object.entries(e).map(function(e){var t=(0,i.default)(e,2),n=t[0],r=t[1]
Array.isArray(r)&&r.length&&a.add(n)}),o.setState({collapseKeySet:a})}),o.state={collapseKeySet:new Set},o.treeProps={renderItem:e.renderCommentIcon,handleScreenItemActions:{handleExpand:o.handleExpand,handleActivate:o.handleActivate}},o}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidUpdate",value:function(e){if(e.activeCid!==this.props.activeCid){var t=Screen.find(this.props.activeCid)
if(t.parent_cid){var n=this.state.collapseKeySet,r=new Set(n)
n.has(t.parent_cid)&&r.delete(t.parent_cid),this.setState({collapseKeySet:r})}}}},{key:"render",value:function(){var e=this.props,t=e.activeCid,n=e.isSearching,r=e.screenTreeMap,a=e.screenDataMap
return h.default.createElement(h.default.Fragment,null,h.default.createElement(v.default,{collapseKeySet:this.state.collapseKeySet,activeCid:t,isSearching:n,screenTreeMap:r,screenDataMap:a,treeProps:this.treeProps}),h.default.createElement(m.default,{onKeyDown:this.handleKeyDown}))}}]),t}(h.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{activeCid:p.default.string,isSearching:p.default.bool,screenTreeData:p.default.object,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},tiHd:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createAsyncTaskQueue=t.createInsideOutPromise=t.createMinStateStore=void 0
var a=r(n("MVZn"))
t.createMinStateStore=function(t){return{getState:function(){return t},setState:function(e){return t=(0,a.default)({},t,e)}}}
var u=function(){var n=null,r=null
return{promise:new Promise(function(e,t){n=e,r=t}),resolve:function(){n&&n.apply(void 0,arguments),r=n=null},reject:function(){r&&r.apply(void 0,arguments),r=n=null}}}
t.createInsideOutPromise=u
t.createAsyncTaskQueue=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(e){},i=new Set,c=Promise.resolve("QUEUE_HEAD")
return{pushTask:function(e){var t=u(),n=t.promise,r=t.resolve,a=t.reject
return c=c.then(function(){return Promise.resolve(e()).then(r,a).catch(o).then(function(){return i.delete(e)})}),i.add(e),n},resetTaskQueue:function(){i=new Set,c=Promise.resolve("QUEUE_HEAD")},getTaskQueueSize:function(){return i.size}}}},tpxX:function(e,t,n){var r=n("jl5L")("round")
e.exports=r},tw9P:function(e,t,n){"use strict"
n.d(t,"i",function(){return E}),n.d(t,"s",function(){return C}),n.d(t,"t",function(){return _}),n.d(t,"n",function(){return x}),n.d(t,"b",function(){return k}),n.d(t,"o",function(){return M}),n.d(t,"e",function(){return R}),n.d(t,"c",function(){return N}),n.d(t,"h",function(){return O}),n.d(t,"k",function(){return I}),n.d(t,"r",function(){return P}),n.d(t,"m",function(){return A}),n.d(t,"f",function(){return L}),n.d(t,"p",function(){return j}),n.d(t,"a",function(){return D}),n.d(t,"g",function(){return B}),
n.d(t,"j",function(){return U}),n.d(t,"l",function(){return F}),n.d(t,"q",function(){return q}),n.d(t,"d",function(){return H})
var i=n("Ev6p"),r=Object(i.x)("IO"),a="TAKE",o="PUT",c="ALL",u="RACE",l="CALL",s="CPS",d="FORK",f="JOIN",p="CANCEL",h="SELECT",m="ACTION_CHANNEL",v="CANCELLED",g="FLUSH",y="GET_CONTEXT",b="SET_CONTEXT",w="\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)",S=function(e,t){var n
return(n={})[r]=!0,n[e]=t,n},E=function(e){return Object(i.h)(H.fork(e),i.q.object,"detach(eff): argument must be a fork effect"),e[d].detached=!0,e}
function C(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"*"
if(arguments.length&&Object(i.h)(arguments[0],i.q.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),i.q.pattern(e))return S(a,{pattern:e})
if(i.q.channel(e))return S(a,{channel:e})
throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}C.maybe=function(){var e=C.apply(void 0,arguments)
return e[a].maybe=!0,e}
var _=Object(i.n)(C.maybe,Object(i.z)("takem","take.maybe"))
function x(e,t){return 1<arguments.length?(Object(i.h)(e,i.q.notUndef,"put(channel, action): argument channel is undefined"),Object(i.h)(e,i.q.channel,"put(channel, action): argument "+e+" is not a valid channel"),Object(i.h)(t,i.q.notUndef,"put(channel, action): argument action is undefined")):(Object(i.h)(e,i.q.notUndef,"put(action): argument action is undefined"),t=e,e=null),S(o,{channel:e,action:t})}function k(e){return S(c,e)}function M(e){return S(u,e)}function T(e,t,n){Object(i.h)(t,i.q.notUndef,
e+": argument fn is undefined")
var r=null
if(i.q.array(t)){var a=t
r=a[0],t=a[1]}else if(t.fn){var o=t
r=o.context,t=o.fn}return r&&i.q.string(t)&&i.q.func(r[t])&&(t=r[t]),Object(i.h)(t,i.q.func,e+": argument "+t+" is not a function"),{context:r,fn:t,args:n}}function R(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return S(l,T("call",e,n))}function N(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[]
return S(l,T("apply",{context:e,fn:t},n))}function O(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return S(s,T("cps",e,n))}function I(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return S(d,T("fork",e,n))}function P(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return E(I.apply(void 0,[e].concat(n)))}function A(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(1<t.length)return k(t.map(function(e){return A(e)}))
var r=t[0]
return Object(i.h)(r,i.q.notUndef,"join(task): argument task is undefined"),Object(i.h)(r,i.q.task,"join(task): argument "+r+" is not a valid Task object "+w),S(f,r)}function L(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(1<t.length)return k(t.map(function(e){return L(e)}))
var r=t[0]
return 1===t.length&&(Object(i.h)(r,i.q.notUndef,"cancel(task): argument task is undefined"),Object(i.h)(r,i.q.task,"cancel(task): argument "+r+" is not a valid Task object "+w)),S(p,r||i.d)}function j(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return 0===arguments.length?e=i.o:(Object(i.h)(e,i.q.notUndef,"select(selector,[...]): argument selector is undefined"),Object(i.h)(e,i.q.func,"select(selector,[...]): argument "+e+" is not a function")),S(h,{selector:e,args:n})}function D(e,t){return Object(i.h)(e,i.q.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),1<arguments.length&&(Object(i.h)(t,i.q.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),Object(i.h)(t,i.q.buffer,
"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),S(m,{pattern:e,buffer:t})}function B(){return S(v,{})}function U(e){return Object(i.h)(e,i.q.channel,"flush(channel): argument "+e+" is not valid channel"),S(g,e)}function F(e){return Object(i.h)(e,i.q.string,"getContext(prop): argument "+e+" is not a string"),S(y,e)}function q(e){return Object(i.h)(e,i.q.object,Object(i.k)(null,e)),S(b,e)}x.resolve=function(){var e=x.apply(void 0,arguments)
return e[o].resolve=!0,e},x.sync=Object(i.n)(x.resolve,Object(i.z)("put.sync","put.resolve"))
var W=function(t){return function(e){return e&&e[r]&&e[t]}},H={take:W(a),put:W(o),all:W(c),race:W(u),call:W(l),cps:W(s),fork:W(d),join:W(f),cancel:W(p),select:W(h),actionChannel:W(m),cancelled:W(v),flush:W(g),getContext:W(y),setContext:W(b)}},u6S6:function(e,t,n){var r=n("6acW"),a=n("sgoq")(function(e,t,n){return t=t.toLowerCase(),e+(n?r(t):t)})
e.exports=a},uW4e:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n("WVP6"),a=n("Ehhz").MODEL_OPERATION_MAP.CommentThread,o=(0,r.createStateStore)([]),i=o.getState,c=o.setState,u=o.wrapEntry,l=function(o,i){return u(function(e,t,n){var r=t.dispatch,a=n&&n.payload
r({type:"reducer:comment-threads:update",payload:o(e,a,i)})})},s={entryMap:{"comment-threads:refresh":l(a.refreshStateList,!1),"comment-threads:save":l(a.saveState,!1),"comment-threads:add":l(a.addState,!1),"comment-threads:add-local":l(a.addState,!0),"comment-threads:update":l(a.updateState,!1),"comment-threads:update-local":l(a.updateState,!0),"comment-threads:delete":l(a.deleteState,!1),"comment-threads:delete-local":l(a.deleteState,!0)},getState:i,setState:c}
t.default=s},uavl:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getWidgetContent=function(e,t){switch(e.name){case"rich_text":return m.default.createElement(b,{widget:e})
case"text_field":case"nav_bar":case"navigation_bar":return m.default.createElement(w,{widget:e})
case"mtext_input":return m.default.createElement(S,{widget:e})
case"mtextarea":return m.default.createElement(E,{widget:e})
case"mcheckbox2":return m.default.createElement(C,{widget:e})
case"mfile_input":return m.default.createElement(_,{widget:e})
case"mradiobutton":return m.default.createElement(x,{widget:e})
case"mselect":return m.default.createElement(k,{widget:e})
case"button":return m.default.createElement(M,{widget:e})
case"hr":return m.default.createElement(T,{widget:e})
case"line":return m.default.createElement(R,{widget:e})
case"ve":return m.default.createElement(N,{widget:e})
case"triangleb":return m.default.createElement(O,{widget:e})
case"triangletl":return m.default.createElement(I,{widget:e})
case"lr":case"tab_bar":case"rectangle":return m.default.createElement(P,{widget:e})
case"image_view":return m.default.createElement(j,{widget:e})
case"webpage":return m.default.createElement(A,{widget:e,isPreview:t})
case"video_view":return m.default.createElement(L,{widget:e})
case"keyboard":return m.default.createElement(D,{widget:e})
case"iphone_keyboard":return m.default.createElement(B,{widget:e})
case"ipad_keyboard":return m.default.createElement(U,{widget:e})
case"android_keyboard":return m.default.createElement(F,{widget:e})
case"map_view":return m.default.createElement(q,{widget:e})
case"search_bar":return m.default.createElement(W,{widget:e})
case"status_bar":return m.default.createElement(H,{widget:e})
case"ios_status_bar":return m.default.createElement(z,{widget:e})
case"iphone_x_status_bar":return m.default.createElement(V,{widget:e})
case"android_status_bar":return m.default.createElement(Y,{widget:e})
case"switch":case"ios_switch":return m.default.createElement(Z,{widget:e})
case"android_switch":return m.default.createElement(J,{widget:e})
case"ios_check":return m.default.createElement(X,{widget:e})
case"android_check":return m.default.createElement(G,{widget:e})
case"android_radio":return m.default.createElement(K,{widget:e})
case"tab_item":return m.default.createElement(Q,{widget:e})
case"pg":return m.default.createElement($,{widget:e})
case"icon_button":return m.default.createElement(ee,{widget:e})
case"label":return m.default.createElement(te,{widget:e})
case"circle_rect":case"rounded_rect":case"text_view":return m.default.createElement(ne,{widget:e})
case"sticky":return m.default.createElement(re,{widget:e})
case"mtooltip":return m.default.createElement(ae,{widget:e})
default:return null}}
var l=a(n("MVZn")),s=a(n("J4zp")),i=a(n("PJYZ")),d=a(n("lSNA")),c=a(n("lwsE")),u=a(n("W8MJ")),f=a(n("a1gu")),p=a(n("Nsbk")),h=a(n("7W2i")),m=r(n("q1tI")),o=r(n("m/km")),v=n("rQun"),g=n("G3NE")
var y=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(m.PureComponent),b=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=JSON.parse(e.text)
return m.default.createElement("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:(0,g.getHTML)(t)}})}}]),t}(y),w=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("span",{className:"text"},e.text)}}]),t}(y),S=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("input",{type:e.input_type,placeholder:e.text})}}]),t}(y),E=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=Math.round(e.padding*e.s()/100),n=Math.round(t-(e.lh-e.fs)/2)
n<0&&(n=0)
var r={padding:"".concat(n,"px ").concat(t,"px")}
return m.default.createElement("textarea",{style:r,placeholder:e.text})}}]),t}(y),C=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("input",{type:"checkbox",checked:e.checked})}}]),t}(y),_=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("input",{type:"file"})}}]),t}(y),x=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",
value:function(){var e=this.props.widget
return m.default.createElement("input",{type:"radio",name:e.gid,checked:e.checked})}}]),t}(y),k=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("select",null,e.text.split(/\n/).map(function(e,t){return m.default.createElement("option",{key:e+t},e)}))}}]),t}(y),M=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",{className:"button-wrapper"},e.icon?(0,v.getIcon)(e):null,m.default.createElement("span",{className:"text"},e.text))}}]),t}(y),T=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.h()-10*e.s()/100
return t<1&&(t=1),m.default.createElement("span",{style:{borderTopWidth:t}})}}]),t}(y),R=function(e){function o(){var e,t;(0,c.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,f.default)(this,(e=(0,p.default)(o)).call.apply(e,[this].concat(r))),(0,d.default)((0,i.default)((0,i.default)(t)),"getStrokeDashArray",function(e){return 0==e?"":1==e?"2 2":2==e?"6 2":void 0}),(0,d.default)((0,i.default)((0,i.default)(t)),"getStrokePath",function(e,t,n){var r=(0,s.default)(n[0].point,2),a=r[0],o=r[1],i=(0,s.default)(n[1].point,2),c=[e*a,t*o],u=[e*i[0],t*i[1]]
return"M ".concat(c[0]," ").concat(c[1]," L ").concat(u[0]," ").concat(u[1])}),(0,d.default)((0,i.default)((0,i.default)(t)),"genDropShadow",function(e){var t=(0,s.default)(e,6),n=t[1],r=t[2],a=t[3],o=t[5]
return"drop-shadow(".concat(n,"px ").concat(r,"px ").concat(a,"px ").concat(o,")")}),t}return(0,h.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e,t=this.props.widget,n=t.width,r=t.height,a=t.bs,o=t.bc,i=t.ls,c=t.points,u=t.box_shadow
if(u){var l=JSON.parse(u)[0]
e=this.genDropShadow(l)}var s=JSON.parse(c),d=this.getStrokePath(n,r,s),f=this.getStrokeDashArray(i)
return m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible",filter:e||"none"}},m.default.createElement("path",{d:d,stroke:o,strokeWidth:a,strokeDasharray:f}),m.default.createElement("path",{d:d,stroke:"transparent",strokeWidth:"10",style:{pointerEvents:"auto"}}))}}]),o}(y),N=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){
var e=this.props.widget,t=e.w()-10*e.s()/100
return t<1&&(t=1),m.default.createElement("span",{style:{borderLeftWidth:t}})}}]),t}(y),O=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t="M "+[[e.width/2,0],[e.width,e.height],[0,e.height]].map(function(e){return e.join(" ")}).join(" L ")+" Z"
return m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:t}))}}]),t}(y),I=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t="M "+[[0,0],[e.width,0],[0,e.height]].map(function(e){return e.join(" ")}).join(" L ")+" Z"
return m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:t}))}}]),t}(y),P=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("span",null)}}]),t}(y),A=function(e){function o(){var e,t;(0,c.default)(this,o)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return t=(0,f.default)(this,(e=(0,p.default)(o)).call.apply(e,[this].concat(r))),(0,d.default)((0,i.default)((0,i.default)(t)),"setElemRef",function(e){return t.$elem=e}),t}return(0,h.default)(o,e),(0,u.default)(o,[{key:"componentDidUpdate",value:function(e,t){this.props.isPreview&&this.props.widget.text!==e.widget.text&&this.updateIframeURL()}},{key:"updateIframeURL",value:function(){var e=this.props.widget.text.replace(/&amp;/g,"&")
this.$elem.setAttribute("src",e)}},{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",{className:"webpage-wrapper"},m.default.createElement("span",{className:"text"},e.text),m.default.createElement("p",{className:"notice"},I18N.https_only),m.default.createElement("iframe",{ref:this.setElemRef,className:"iframe"}))}}]),o}(y),L=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("span",null,
m.default.createElement("i",{className:"fa fa-play-circle-o"}))}}]),t}(y),j=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=""
if(e.image)if(["a","i"].includes(e.image[0])&&-1===e.image.indexOf("images")){var n=Asset.find(e.image)
n&&(n.raw||n.image)&&(t="".concat(n.image||n.raw))}else t=e.image
var r={display:t?"none":"flex",backgroundColor:e.bg},a={display:t?"block":"none",height:e.p?"auto":"100%",filter:e.filter.trim()?e.filter.trim():""}
return m.default.createElement("div",{className:"image-wrapper"},m.default.createElement("span",{style:r},m.default.createElement("i",{className:"icon-widget-img"})),m.default.createElement("div",{className:"wrapper"},m.default.createElement("img",{src:t,draggable:!1,style:a})))}}]),t}(y),D=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,
t=MB.project().device,n=e.numeric?"n":"r",r=e.cs().orientation,a="".concat(MB.urlRootHTMLZip(),"images/keyboards/").concat(t,"_").concat(n,"_").concat(r,".png")
return m.default.createElement("img",{src:a,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(y),B=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.numeric?"n":"r",n=e.cs().orientation,r="".concat(MB.urlRootHTMLZip(),"images/keyboards/iphone_").concat(t,"_").concat(n,".png")
return m.default.createElement("img",{src:r,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(y),U=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.numeric?"n":"r",n=e.cs().orientation,r="".concat(MB.urlRootHTMLZip(),"images/keyboards/ipad_").concat(t,"_").concat(n,".png")
return m.default.createElement("img",{src:r,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(y),F=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.numeric?"n":"r",n=e.cs().orientation,r="".concat(MB.urlRootHTMLZip(),"images/keyboards/android_").concat(t,"_").concat(n,".png")
return m.default.createElement("img",{src:r,className:"keyboard-img",alt:"keyboard",draggable:!1})}}]),t}(y),q=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"image"},m.default.createElement("img",{draggable:!1,src:MB.staticMap()}))}}]),t}(y),W=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,
p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",null,m.default.createElement("div",{className:"text_edit"},m.default.createElement("input",{type:"text",placeholder:e.text})),m.default.createElement("i",{className:"fa fa-search"}))}}]),t}(y),H=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=e.tc
return m.default.createElement("div",null,m.default.createElement("div",{className:"signal",style:{color:t}},m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"}),m.default.createElement("div",{className:"ball"})),m.default.createElement("div",{className:"carrier"},m.default.createElement("span",{className:"text",dangerouslySetInnerHTML:{__html:e.text}})),
m.default.createElement("div",{className:"time"},"12:00",m.default.createElement("span",{className:"meridian"}," AM")),m.default.createElement("div",{className:"wifi md"},"wifi"),m.default.createElement("div",{className:"battery"},m.default.createElement("div",{className:"body",style:{borderColor:t}},m.default.createElement("div",{className:"inner",style:{backgroundColor:t}})),m.default.createElement("div",{className:"head",style:{backgroundColor:t}})))}}]),t}(y),z=function(e){function t(){return(0,
c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.tc
return m.default.createElement("div",{className:"iOS-StatusBar",style:{color:e}},m.default.createElement("div",{className:"StatusBarSignal",dangerouslySetInnerHTML:{__html:o.IOS_SIGNAL}}),m.default.createElement("div",{className:"StatusBarWifi",dangerouslySetInnerHTML:{__html:o.IOS_WIFI}}),m.default.createElement("div",{className:"StatusBarTime"},"12:00"),m.default.createElement("div",{className:"StatusBarBattery",dangerouslySetInnerHTML:{__html:o.IOS_BATTERY}}))}}]),t}(y),V=function(e){function t(){return(
0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.tc
return m.default.createElement("div",{className:"iPhoneX-StatusBar",style:{color:e}},m.default.createElement("div",{className:"StatusBarTime"},"12:00"),m.default.createElement("div",{className:"StatusBarSignal",dangerouslySetInnerHTML:{__html:o.IOS_SIGNAL}}),m.default.createElement("div",{className:"StatusBarWifi",dangerouslySetInnerHTML:{__html:o.IOS_WIFI}}),m.default.createElement("div",{className:"StatusBarBattery",dangerouslySetInnerHTML:{__html:o.IOS_BATTERY}}))}}]),t}(y),Y=function(e){function t(){
return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.tc
return m.default.createElement("div",{className:"Android-StatusBar",style:{color:e}},m.default.createElement("div",{className:"StatusBarWifi icon md"},"signal_wifi_4_bar"),m.default.createElement("div",{className:"StatusBarSignal icon md"},"signal_cellular_4_bar"),m.default.createElement("div",{className:"StatusBarBattery icon md"},"battery_full"),m.default.createElement("div",{className:"StatusBarTime"},"12:00"))}}]),t}(y),Z=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,
p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"iOS-Switch"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"}))}}]),t}(y),J=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"Android-Switch"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"}))}}]),t}(y),X=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"iOS-Check"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"},m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"8",viewBox:"0 0 13 8"},m.default.createElement("path",{d:"M1 4.5L4.5 8l8-8"}))))}}]),t}(y),G=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,
arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"Android-Check"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"checkbox",defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"},m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10",viewBox:"0 0 14 10"},m.default.createElement("path",{d:"M5 10L0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346"}))))}}]),t}(y),K=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(
this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("label",{className:"Android-Radio"},m.default.createElement("input",{key:e.screenstate_cid+e.checked,type:"radio",name:e.gid,defaultChecked:e.checked}),m.default.createElement("span",{className:"CheckState"}))}}]),t}(y),Q=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return m.default.createElement("div",{className:"wrapper"},(0,v.getIcon)(e),m.default.createElement("span",{className:"text"},e.text))}}]),t}(y),$=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t=Link.find(e.link_cids),n=t?t.gesture:"tap"
return m.default.createElement("i",{className:"icon-gesture-".concat(n)})}}]),t}(y),ee=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget
return(0,v.getIcon)(e)}}]),t}(y),te=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget.text.replace(/<\/?p>/g,"")
return m.default.createElement("p",{dangerouslySetInnerHTML:{__html:e}})}}]),t}(y),ne=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.widget,t={padding:e.paddingS()}
return m.default.createElement("div",{className:"text",style:t,dangerouslySetInnerHTML:{__html:MB.v.multiline(e.text)}})}}]),t}(y),re=function(e){function a(){var e,s;(0,c.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s=(0,f.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,i.default)((0,i.default)(s)),"handleDown",function(e){if(!MB.f.inPreview&&!MB.f.inSharing){e.stopPropagation(),MB.f.isDragging=!0
var o=s.props.widget,i=e.clientX,c=e.clientY,u=o.slt,l=o.slw,t=function(e){var t=e.clientX-i,n=e.clientY-c,r=t/MB.scale()*100,a=n/MB.scale()*100
o.slt=u+a+6,160<o.l()?o.slw=l-r:o.slw=l+r,s.forceUpdate()}
document.addEventListener("mousemove",t),document.addEventListener("mouseup",function e(){MB.f.isDragging=!1,o.lsave(),MB.action("update:widgets",{widgets:[o]}),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)})}}),s}return(0,h.default)(a,e),(0,u.default)(a,[{key:"render",value:function(){var e=this.props.widget,t=e.l()<160,n=e.bg,r=e.slt
e.slt<20?r=20:e.slt>e.height-20&&(r=e.height-20)
var a=(e.slt-r)*e.s()/100,o={top:e.slt<=e.top-20?a:"",height:Math.abs(a)},i={top:a},c={top:r*e.s()/100,width:e.slw*e.s()/100,borderColor:n},u={left:t?"100%":"",right:t?"":"100%",backgroundColor:n},l={backgroundImage:"linear-gradient(135deg, ".concat(n," 25%, transparent 25%, transparent 100%), linear-gradient(45deg, transparent 75%, ").concat(n," 75%, ").concat(n," 100%)")}
return m.default.createElement("div",null,m.default.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:MB.v.multiline(e.text)}}),m.default.createElement("div",{className:"sideline",style:c},m.default.createElement("div",{className:"box",style:o}),m.default.createElement("div",{className:"line",style:i},m.default.createElement("div",{className:"arrow",style:u,onMouseDown:this.handleDown}))),m.default.createElement("div",{className:"sawtooth",style:l}))}}]),a}(y),ae=function(e){function t(
){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e,t,n=this.props.widget,r={top:"borderBottomColor",bottom:"borderTopColor",left:"borderRightColor",right:"borderLeftColor"}[n.tt_placement],a="top"==n.tt_placement||"bottom"==n.tt_placement,o={borderWidth:n.arrowSize(),left:a?n.ttOffset():"",top:a?"":n.ttOffset()},i=(0,l.default)({},o,(e={},(0,d.default)(e,n.tt_placement,0-n.arrowSize()),(0,
d.default)(e,r,n.bc||"#aaa"),e)),c=(0,l.default)({},o,(t={},(0,d.default)(t,n.tt_placement,0-n.arrowSize()+n.bS()),(0,d.default)(t,r,n.bg||"white"),t)),u={padding:n.paddingS(),marginTop:n.text&&"middle"===n.va?0-n.textHeight()/2:""}
return m.default.createElement("div",null,m.default.createElement("div",{className:"arrow1 arrow ".concat(n.tt_placement),style:i}),m.default.createElement("div",{className:"arrow2 arrow ".concat(n.tt_placement),style:c}),m.default.createElement("div",{className:"text",style:u,dangerouslySetInnerHTML:{__html:MB.v.multiline(n.text)}}))}}]),t}(y)},ubZ9:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarkerPanel=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("lSNA")),m=r(n("q1tI")),d=a(n("17x9")),f=n("/5+U"),v=n("H5Dy"),g=n("fB0Y"),p=function(e){function t(e){var i
return(0,o.default)(this,t),(i=(0,c.default)(this,(0,u.default)(t).call(this,e))).addCommentThreadListener=(0,f.muteEvent)(function(e){var t=i.props,n=t.getContentElement,r=t.isActive,a=t.currentUserRole,o=t.dispatch
r&&(0,v.getPermission)(a).create&&h(e,n().getBoundingClientRect())&&o({type:"entry:comment-threads:add",payload:i.markerOperations.getMarkerPosition(e)})}),i.markerOperations={addContainerEventListener:function(e){for(var t in e)i.props.getContentElement().addEventListener(t,e[t])},removeContainerEventListener:function(e){for(var t in e)i.props.getContentElement().removeEventListener(t,e[t])},setFocusCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return i.props.dispatch({type:"container:comment:focus",payload:{focus:e,from:"mask"}})},setSelectCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return i.props.dispatch({type:"container:comment:select",payload:{select:e,from:"mask"}})},doUpdateCommentThread:function(e){var t=e.cid,n=e.top,r=e.left
return i.props.dispatch({type:"entry:comment-threads:update",payload:{cid:t,top:n,left:r}})},doFocusAtElement:function(e){return i.props.dispatch({type:"entry:focus-element",payload:{focusType:"external",element:e}})},getMarkerPosition:function(e){var t=i.props.queryCurrentScreenContainerElement().getBoundingClientRect(),n=i.props.getContentElement().getBoundingClientRect()
return{left:(0,f.numberBetween)(e.clientX,n.left+20,n.right-20)-t.left,top:(0,f.numberBetween)(e.clientY,n.top+20,n.bottom-20)-t.top}}},i}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.isActive,r=t.getContentElement
n!==e.isActive&&r()&&(n?r().addEventListener("dblclick",this.addCommentThreadListener):r().removeEventListener("dblclick",this.addCommentThreadListener))}},{key:"componentWillUnmount",value:function(){var e=this.props.getContentElement
e()&&e().removeEventListener("dblclick",this.addCommentThreadListener)}},{key:"render",value:function(){var l=this
if(!this.props.isActive)return null
var e=this.props,t=e.commentContainer,s=t.select,d=t.focus,f=e.scale,n=e.commentThreadList,p=e.userId,h=e.currentUserRole
return m.default.createElement("div",null,n.map(function(e,t){var n=e.cid,r=e.left,a=e.top,o=e.user_id,i=s===n,c=i||d===n,u=s&&!i||d&&!c
return m.default.createElement(g.CommentMarker,{key:n,commentMarkerIndex:t+1,commentThreadCid:n,offsetLeft:r*f,offsetTop:a*f,isEditable:(0,v.getPermission)(h,p,o).update,isSelect:i,isFocus:c,isFade:u,markerOperations:l.markerOperations})}))}}]),t}(m.PureComponent)
t.CommentMarkerPanel=p,(0,s.default)(p,"propTypes",{getContentElement:d.default.func.isRequired,scale:d.default.number,queryCurrentScreenContainerElement:d.default.func.isRequired,isActive:d.default.bool,commentContainer:d.default.object,commentThreadList:d.default.array,userId:d.default.number,currentUserRole:d.default.string,dispatch:d.default.func})
var h=function(e,t){var n=t.left,r=t.top,a=t.width,o=t.height
return n<=e.clientX&&r<=e.clientY&&n+a>=e.clientX&&r+o>=e.clientY}},udQi:function(e,t,n){"use strict"
n.d(t,"a",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return l})
var r=[],a=0
function o(e){try{c(),e()}finally{u()}}function i(e){r.push(e),a||(c(),l())}function c(){a++}function u(){a--}function l(){u()
for(var e=void 0;!a&&void 0!==(e=r.shift());)o(e)}},ujtX:function(e,t,n){},upRB:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentScreen=t.getCurrentProject=t.getIsScreenExpanded=t.getShellType=t.getIsHighlight=t.getIsStickyShow=t.getIsScrollable=t.getCurrentMode=t.getIsImmersive=t.getCurrentScale=void 0
var r=n("G4qV"),a=n("1iCU")
t.getCurrentScale=function(e){return e.container.common.scale}
t.getIsImmersive=function(e){var t=e.container.previewSetting.toolbarActiveItem
return t===a.INSPECT||t===a.COMMENT}
var o=function(e){return e.container.previewSetting.toolbarActiveItem}
t.getCurrentMode=o
var i=function(e){return e.container.previewSetting.isScrollable}
t.getIsScrollable=i
t.getIsStickyShow=function(e){return e.container.previewSetting.isStickyShow}
t.getIsHighlight=function(e){return e.container.previewSetting.isHighlight}
t.getShellType=function(e){return e.container.previewSetting.shellType}
var c=(0,r.createSelector)([o,i],function(e,t){return[a.INSPECT,a.COMMENT].includes(e)||!t})
t.getIsScreenExpanded=c
var u=(0,r.createSelector)([function(e){return e.model.projects},function(e){return e.model.current.projectCid}],function(e,t){return e.find(function(e){return e.cid===t})})
t.getCurrentProject=u
var l=(0,r.createSelector)([function(e){return e.model.screens},function(e){return e.model.current.screenCid}],function(e,t){return e.find(function(e){return e.cid===t})})
t.getCurrentScreen=l},"ut/Y":function(e,t,n){var r=n("ZCpW"),a=n("GDhZ"),o=n("zZ0H"),i=n("Z0cm"),c=n("+c4W")
e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?i(e)?a(e[0],e[1]):r(e):c(e)}},v8PR:function(e,t,n){},v9Wr:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("o0o1")),p=a(n("yXPU")),h=a(n("17x9")),m=r(n("q1tI")),v=n("tiHd"),g=n("/N2d"),y=(0,v.createAsyncTaskQueue)().pushTask,b=new Map,w=function(){var a=(0,p.default)(f.default.mark(function e(t,n,r,a){var o,i,c
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.doRenderScreenToCanvasElement)({screenCid:n,screenStateCid:"default",canvasZoom:a})
case 2:return o=e.sent,i=o.canvasElement,c=i.toDataURL(),e.abrupt("return",S(t,n,r,c))
case 6:case"end":return e.stop()}},e,this)}))
return function(e,t,n,r){return a.apply(this,arguments)}}(),S=function(n,r,a,o){return new Promise(function(e,t){n.onload=function(){n.src.includes(C)||b.set("".concat(r).concat(a),o),e()},n.onerror=function(){n.src=C,t()},n.src=o})},E=function(){var o=(0,p.default)(f.default.mark(function e(t,n,r,a,o){var i,c,u
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=MB.browserInfo,c=i.name,u=i.version,1,"Firefox"===c&&57<u)return e.next=5,w(t,n,r,o)
e.next=7
break
case 5:e.next=9
break
case 7:return e.next=9,S(t,n,r,a)
case 9:case"end":return e.stop()}},e,this)}))
return function(e,t,n,r,a){return o.apply(this,arguments)}}(),C="/images/preview/image-load.png",_=function(e){function n(){var t
return(0,o.default)(this,n),t=(0,c.default)(this,(0,u.default)(n).call(this)),(0,d.default)((0,s.default)((0,s.default)(t)),"setElementRef",function(e){return t.$elem=e}),t.isUnmounted=!1,t.retryTimer=null,t}return(0,l.default)(n,e),(0,i.default)(n,[{key:"componentDidUpdate",value:function(e,t){this.props.isVisible&&(clearTimeout(this.retryTimer),this.generateSnapshotTask())}},{key:"componentWillUnmount",value:function(){this.isUnmounted=!0,clearTimeout(this.retryTimer)}},{key:"generateSnapshotTask",
value:function(){var i=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5
y((0,p.default)(f.default.mark(function e(){var t,n,r,a,o
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.props,n=t.screenCid,r=t.version,a=t.imageUrl,o=t.canvasZoom,t.isVisible){e.next=3
break}return e.abrupt("return")
case 3:if(i.isUnmounted)return e.abrupt("return")
e.next=5
break
case 5:if(b.get("".concat(n).concat(r)))return e.abrupt("return")
e.next=7
break
case 7:return e.next=9,E(i.$elem,n,r,a,o)
case 9:case"end":return e.stop()}},e,this)}))).catch(function(e){i.retryTimer=setTimeout(function(){i.generateSnapshotTask(2*t)},1e3*t)})}},{key:"render",value:function(){var e=this.props,t=e.screenCid,n=e.version,r=b.get("".concat(t).concat(n))
return m.default.createElement("img",{ref:this.setElementRef,src:r||C})}}]),n}(m.PureComponent);(t.default=_).propTypes={screenCid:h.default.string,version:h.default.string,imageUrl:h.default.string,screenName:h.default.string,canvasZoom:h.default.number,isVisible:h.default.bool}},vRqJ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.payload
switch(n){case"reducer:artboards:success":return(0,a.default)({},e,r)
case"reducer:artboards:fail":return(0,a.default)({},e,r,{error:!0})
default:return e}}
var a=r(n("MVZn")),o={artboards:[],error:!1}},veUc:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transformLayersFormat=void 0
var d=r(n("MVZn")),l=r(n("RIqP")),s=r(n("SA+Z")),a=n("gCaL"),f=n("0k54")
t.transformLayersFormat=function(e){var t=(0,s.default)(e),n=t[0],r=t.slice(1),a={childrenLayers:[]},o={},i=[],c=[]
r.forEach(function(e){var t=e.id,n=e.panel_cid
"artboard-base"===t?Object.assign(a,e):"number"==typeof t?a.childrenLayers.push(e):n?o[n]?o[n].push(e):o[n]=[e]:"panel"===e.name?i.push(e):c.push(e)}),i.forEach(function(e){return e.childrenLayers=o[e.cid]})
var u=(a.childrenLayers.length?[a]:[]).concat(i,(0,l.default)(p(c))).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})
return[n].concat((0,l.default)(u))}
var p=function(e){if(0===e.length)return[]
var t=e[0].screen_cid
return(0,a.generateTreeData)(e.map(function(e){return new Widget(e)}),t).widgetTreeData.children.map(function(e){return o(e)})},o=function t(e){var n=e.cid,r=e.type,a=e.widget,o=e.children
if("widget"===r)return a
if("group"===r){var i=(0,f.getTreeBoundingRect)(e),c=i.minX,u=i.minY,l=i.maxX,s=i.maxY
return(0,d.default)({},a,{id:n,width:l-c,height:s-u,top:u,left:c,childrenLayers:o.map(function(e){return t(e)})})}}},vmbo:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("PJYZ")),f=a(n("lSNA")),o=a(n("17x9")),b=r(n("q1tI")),w=a(n("TSYQ")),S=n("/5+U"),E=n("l0oT")
n("zZYZ")
var p=function(e){function o(){var e,a;(0,i.default)(this,o)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,u.default)(this,(e=(0,l.default)(o)).call.apply(e,[this].concat(n))),(0,f.default)((0,d.default)((0,d.default)(a)),"onMouseEnter",function(e){-1!==a.props.activeLayerID&&a.props.enterLayer(a.props.layer.id)}),(0,f.default)((0,d.default)((0,d.default)(a)),"onMouseLeave",function(e){-1!==a.props.activeLayerID&&a.props.enterLayer(-1)}),(0,f.default)((0,d.default)((0,d.default)(a)),"handleClick",function(){var e=a.props,t=e.requestSelectLayer,n=e.layer.id,r=e.handleShowlayerInfo
t(n),r(!0)}),a}return(0,s.default)(o,e),(0,c.default)(o,[{key:"render",value:function(){var e=this.props,t=e.layer,n=e.activeLayerID,r=e.enteredLayerID,a=e.unit,o=e.ratio,i=t.id,c=t.src_width,u=t.src_height,l=t.rotation||0,s=i===n,d=i===r||-1===r,f=(0,w.default)("Layer",{"is-active":s,"is-focus":d}),p=t.kind?c:c*(0,E.cos)(l)+u*(0,E.sin)(l),h=t.kind?u:c*(0,E.sin)(l)+u*(0,E.cos)(l),m=(0,S.adapterScreen)(p,o),v=(0,S.adapterScreen)(h,o),g=t.kind?(0,S.adapterScreen)(t.origin_width||c,o):(0,S.adapterScreen)(c,o),
y=t.kind?(0,S.adapterScreen)(t.origin_height||u,o):(0,S.adapterScreen)(u,o)
return b.default.createElement("div",{className:f,"data-width":"".concat(m).concat(a),"data-height":"".concat(v).concat(a),"data-lid":i,onClick:this.handleClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},s&&b.default.createElement("span",{className:"LayerCorner left top"}),s&&b.default.createElement("span",{className:"LayerCorner left bottom"}),s&&b.default.createElement("span",{className:"LayerCorner right top"}),s&&b.default.createElement("span",{className:"LayerCorner right bottom"}),
s&&0!==l&&b.default.createElement("span",{className:"rect_info"},"".concat(g," x ").concat(y),"  ","".concat(l,"°")))}}]),o}(b.Component)
t.default=p,(0,f.default)(p,"propTypes",{layer:o.default.object,requestSelectLayer:o.default.func,enterLayer:o.default.func,handleShowlayerInfo:o.default.func,activeLayerID:o.default.oneOfType([o.default.number,o.default.string]),enteredLayerID:o.default.oneOfType([o.default.number,o.default.string]),unit:o.default.string,ratio:o.default.number})},vpYg:function(e,t,n){"use strict"
var r=["onAbort","onAnimationEnd","onAnimationIteration","onAnimationStart","onBlur","onCanPlay","onCanPlayThrough","onClick","onContextMenu","onCopy","onCut","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onFocus","onInput","onInvalid","onKeyDown","onKeyPress","onKeyUp","onLoad","onLoadedData","onLoadedMetadata","onLoadStart","onMouseDown","onMouseMove","onMouseOut",
"onMouseOver","onMouseUp","onPaste","onPause","onPlay","onPlaying","onProgress","onRateChange","onReset","onScroll","onSeeked","onSeeking","onStalled","onSubmit","onSuspend","onTimeUpdate","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onTransitionEnd","onVolumeChange","onWaiting","onWheel"],a=["onAfterPrint","onBeforePrint","onBeforeUnload","onDeviceLight","onDeviceMotion","onDeviceOrientation","onDeviceProximity","onHashChange","onLanguageChange","onPopState","onRejectionHandled","onResize",
"onSelect","onStorage","onUnhandledRejection","onUnload","onUserProximity"],o=["onPointerCancel","onPointerDown","onPointerEnter","onPointerLeave","onPointerMove","onPointerOut","onPointerOver","onPointerUp"]
e.exports={allEvents:r.concat(a).concat(o),documentEvents:r.concat(o),windowEvents:a}},wCGR:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=m,t.ConfirmMsg=v
var o=a(n("pVnL")),d=r(n("q1tI")),i=a(n("17x9")),c=a(n("Z0cm")),f={app:["项目","app"],team:["团队","team"],teamMember:["团队成员","team member"]},p={delete:["删除","delete"],leave:["退出","leave"],move:["移动","move"],duplicate:["复制","duplicate"]},u={actionConfirmation:[["您确定要","[VERB]","[NOUN]","[UGN]","吗？"],["Are you sure you want to ","[VERB]"," ","[NOUN]"," ","[UGN]"]],nounMap:f,verbMap:p},l=window.MBLocale,h=["zh-CN","en"].indexOf(l),s=function(s){return function(e,t){return/^\[[A-Z_]+\]/.test(e)?(o=(a={pos:e,
variableMap:s}).pos,i=a.variableMap,c=i.verb,u=i.noun,l=i.ugn,n="[VERB]"===o?p[c][h]:"[NOUN]"===o?f[u][h]:"[UGN]"===o?l:null,r=t,(0,d.isValidElement)(n)?d.default.cloneElement(n,{key:r}):n):e
var n,r,a,o,i,c,u,l}}
function m(e){var t=e.name,n=e.variableMap,r=void 0===n?{}:n,a=u[t][h]
return(0,c.default)(a)?a.map(s(r)):a}function v(e){var t=e.variableMap,n=void 0===t?{}:t
return d.default.createElement(m,(0,o.default)({name:"actionConfirmation"},{variableMap:n}))}m.propTypes={name:i.default.string.isRequired,variableMap:i.default.object},v.propTypes={variableMap:i.default.object}},"wF/u":function(e,t,n){var i=n("e5cp"),c=n("ExA7")
e.exports=function e(t,n,r,a,o){return t===n||(null==t||null==n||!c(t)&&!c(n)?t!=t&&n!=n:i(t,n,r,a,e,o))}},wJg7:function(e,t){var r=/^(?:0|[1-9]\d*)$/
e.exports=function(e,t){var n=typeof e
return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&-1<e&&e%1==0&&e<t}},wQP3:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.TextLayerInfo=void 0
var m=r(n("q1tI")),a=r(n("17x9")),v=n("RUem"),g=n("/5+U"),y=n("XrEr"),o=function(e){var t=e.textStyles,n=void 0===t?[]:t,r=e.hiddSpacing,d=e.ratio,a=e.alignment,o=e.vertical_alignment,i=e.lineHeight,c=e.letterSpacing,f=e.unit,u=e.text,p=(e.o,e.colorUnit),h=e.fontStyle
e.padding
return m.default.createElement(v.WrapComponent,null,I18N.preview_panel.font,(0<n.length&&n.slice(0,1)).map(function(e,t){var n=e.color,r=e.font_size,a=e.location,o=e.font_face,i=e.fontStyle,c=(0,y.parseSketchColor2rgba)(n),u=(0,y.getColorFromUnit)(c,"rgba"),l=(0,g.adapterScreen)(r,d,f),s=(0,y.getColorFromUnit)(c,p)
return m.default.createElement("div",{key:"".concat(r).concat(a).concat(t)},o&&m.default.createElement(v.Base,{title:I18N.preview_panel.type_face,data:[o]}),(i||h)&&m.default.createElement(v.Base,{title:I18N.preview_panel.font_style,data:[i||h]}),u&&m.default.createElement(v.ColorInfo,{stateColor:s,title:I18N.preview_panel.color,rgbaColor:u}),l&&m.default.createElement(v.Base,{title:I18N.preview_panel.font_size,data:[l]}))}),a&&m.default.createElement(v.Base,{title:I18N.preview_panel.align,data:[a,o||"auto"
],dataValue:[I18N.preview_panel.horizontal_align,I18N.preview_panel.vertical_align]}),void 0!==n[0].paraSpacing?m.default.createElement(v.Base,{title:I18N.preview_panel.graph,data:[n[0].letterSpacing,n[0].lineHeight,n[0].paraSpacing],dataValue:[I18N.letter_spacing,I18N.text_line_height,I18N.para_spacing]}):i&&m.default.createElement(v.Base,{title:I18N.preview_panel.graph,data:[i,c||"auto"],dataValue:[I18N.preview_panel.line_height,I18N.preview_panel.letter_spacing],first:r}),u&&m.default.createElement(
v.Base,{text:u,title:I18N.preview_panel.content}))};(t.TextLayerInfo=o).propTypes={textStyles:a.default.array,fontStyle:a.default.string,alignment:a.default.string,vertical_alignment:a.default.string,hiddSpacing:a.default.bool,letterSpacing:a.default.oneOfType([a.default.string,a.default.bool]),lineHeight:a.default.oneOfType([a.default.string,a.default.bool]),paraSpacing:a.default.number,ratio:a.default.number,unit:a.default.string,text:a.default.string,o:a.default.number,padding:a.default.number,
colorUnit:a.default.string}},wUZt:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.collectScreenVariantBaseData=t.collectScreenVariantData=void 0
var h=r(n("zkrS")),m="default",v={cid:m,name:"".concat(h.default.I18N.default," ").concat(h.default.I18N.state)},g=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:m
return"prev"!==e?"".concat(e,"+").concat(t):"prev"}
t.collectScreenVariantData=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=e.cid,c=t.cid,a=e.width*i,o=e.height*i,u=[],l=function(e,t){t&&(t=C(t,a,o)),t&&u.push({link:e,toId:g(e.target_cid||r,e.targetstate_cid||m),relativeStyle:y(t,a,o)})},s=0,d=function(n){return n.cwidgets().reduce(function(e,t){return"pg"===t.name?(u.push({link:n,globalGestureIndex:s}),s++,e):S(e||w(),b(t,i))},null)}
h.default.SpineModel.Link.select(function(a){if(a.state_cid){var e=h.default.SpineModel.Screen.find(a.state_cid),t=e&&h.default.SpineModel.Template.find(e.project_cid),o=t&&d(a)
t&&o&&h.default.SpineModel.Panel.findAllByAttribute("template_cid",t.cid).filter(function(e){return e.screen_cid===r&&e.screenstate_cid===c}).forEach(function(e){var t=b(e,i),n={x:o.min.x+t.min.x,y:o.min.y+t.min.y},r={x:n.x+Math.min(o.max.x-o.min.x,t.max.x-t.min.x),y:n.y+Math.min(o.max.y-o.min.y,t.max.y-t.min.y)}
l(a,{min:n,max:r})})}else if(a.screen_cid===r&&a.sourcestate_cid===c){var n=d(a)
n&&l(a,n)}return!1})
var f=[],n=h.default.SpineModel.Widget.findAllByAttribute("screen_cid",r),p=h.default.SpineModel.Widgetstate.findAllByAttribute("screenstate_cid",c)
return n.forEach(function(t){if("sticky"===t.name){t=p.find(function(e){return e.widget_cid===t.cid})||t
var e=b(t,i),n=e.min,r=e.max
f.push({widget:t,relativeTop:E((n.y+t.slt*i)/o,0,1),relativeLeft:E((r.x+t.slw*i)/a,0,1),backgroundColor:t.bg||"#fffbba",contentStyle:{textAlign:t.ha||"left",fontSize:"".concat(t.fs||12,"px"),lineHeight:"".concat(t.lh||20,"px"),color:t.tc||"rgba(39,54,78,0.8)"}})}}),f.sort(function(e,t){return e.widget.slt-t.widget.slt}),{id:g(r,c),screenCid:r,screenStateCid:c,screenName:e.name,screenStateName:t.name,canvasZoom:i,canvasWidth:a,canvasHeight:o,linkDataList:u,noteDataList:f}}
t.collectScreenVariantBaseData=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:v,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=e.cid,a=t.cid,o=e.width*n,i=e.height*n
return{screenCid:r,screenStateCid:a,screenName:e.name,screenStateName:t.name,canvasZoom:n,canvasWidth:o,canvasHeight:i}}
var y=function(e,t,n){var r=e.min,a=e.max
return{top:r.y/n,left:r.x/t,width:(a.x-r.x)/t,height:(a.y-r.y)/n}},d=Math.PI/180,b=function(e,t){var n=(e.width||0)*t,r=(e.height||0)*t,a=(e.left||0)*t,o=(e.top||0)*t
if(e.ro){var i=e.ro*d,c=Math.sin(i),u=Math.cos(i),l=n*u+r*-c,s=n*c+r*u
a+=.5*(n-l),o+=.5*(r-s),n=l,r=s}return{min:{x:a,y:o},max:{x:a+n,y:o+r}}},w=function(){return{min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}}},S=function(e,t){var n=e.min,r=e.max
return n.x=Math.min(n.x,t.min.x),n.y=Math.min(n.y,t.min.y),r.x=Math.max(r.x,t.max.x),r.y=Math.max(r.y,t.max.y),e},E=function(e,t,n){return Math.min(Math.max(e,t),n)},C=function(e,t,n){var r=e.min,a=e.max
return r.x=E(r.x,0,t),r.y=E(r.y,0,n),a.x=E(a.x,0,t),a.y=E(a.y,0,n),r.x!==a.x&&r.y!==a.y?e:null}},wfO3:function(e,t,n){},wig9:function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,a=[];++t<n;){var o=e[t]
o&&(a[r++]=o)}return a}},wy8a:function(e,t,n){var a=n("KxBF")
e.exports=function(e,t,n){var r=e.length
return n=void 0===n?r:n,!t&&r<=n?e:a(e,t,n)}},xI34:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.panelMigrator=t.widgetMigrator=void 0
var o=n("lDl7"),i=["status_bar","keyboard"],c=1,u=2,l=3,r={checker:function(e){return 0===e.primary_fixed&&(!0===e.fixed||i.includes(e.name))},migrator:function(e){var t=e.z,n=0,r=!1
if(i.includes(e.name))t=Widget.MAXZ,"status_bar"===e.name?n=1:"keyboard"===e.name&&(n=2)
else if(t=e.z+Widget.MAXZ,e.fixed_type===u)n=1
else if(e.fixed_type===l)n=2
else if(e.fixed_type===c){var a=(0,o.getScreenByWidgetLike)(e)
if(a)n=e.top>a.height-a.cp().sheight(a.orient())/2?2:1
else r=!0}return{fixed:r,primary_fixed:n,z:t}}},a=[{checker:function(e){var t=""===e.box_shadow,n=e.ds&&"transparent"!==e.sc
return t&&n&&MB.currentProject},migrator:function(e){var t=e.ds,n=MB.hex2rgb(e.sc),r=[0,0,0,t,0,"rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",1)")]
return MB.currentProject.isAndroid()&&(r[2]=2*t,r[3]=2*t,r[5]="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(Math.min((23+t)/100,1),")")),{box_shadow:JSON.stringify([r])}}},{checker:function(e){var t=""===e.text_shadow,n="icon_button"===e.name&&e.ds&&"transparent"!==e.sc||e.ts&&"transparent"!==e.tsc
return t&&n&&MB.currentProject},migrator:function(e){var t=e.ts||e.ds,n=MB.hex2rgb(e.tsc||e.sc),r=[0,0,t,"rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",1)")]
return MB.currentProject.isAndroid()&&(r[1]=2*t,r[2]=2*t,r[3]="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(Math.min((23+t)/100,1),")")),{text_shadow:JSON.stringify([r])}}},{checker:function(e){return""===e.border_radius&&e.br},migrator:function(e){return{border_radius:String(e.br)}}},r],s=[r]
t.widgetMigrator=function(t){var n={}
return a.forEach(function(e){e.checker(t)&&Object.assign(n,e.migrator(t))}),n}
t.panelMigrator=function(t){var n={}
return s.forEach(function(e){e.checker(t)&&Object.assign(n,e.migrator(t))}),n}},xQM3:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenContainerStyle=function(e,t,n,r,a){var o
if(r){var i,c=Math.min(n.width,n.height),u=Math.max(n.width,n.height),l=Math.min(t.width,t.height),s=Math.max(t.width,t.height),d=e.width!==l,f=n.width>n.height,p=d!==f
o=d?(i=u/s,{width:s,height:Math.min(l,c/i),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(i,")"),transformOrigin:p?"top right":"top left"}):(i=c/l,{width:l,height:Math.min(s,u/i),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(i,")"),transformOrigin:p?"top right":"top left"})}else if(a)o={width:e.width,height:e.height}
else{var h="landscape"===e.orientation,m=t.width,v=t.height,g=h?[v,m]:[m,v],y=(0,S.default)(g,2),b=y[0],w=y[1]
o={width:b,height:w}}return o}
var S=r(n("J4zp"))},xUDz:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(n("RIqP")),c=r(n("lSNA")),a=n("/MKj"),o=n("/5+U"),u=r(n("o/90")),l=(0,a.connect)(function(e){var t=e.model,n=t.current,r=t.screens,a=e.container,o=a.previewSetting.isFullScreenMode,i=a.common.scale,c=n.screenCid,u=s(r,c),l=d(r,n.projectCid).childListMap
return{screen:u,isFullScreenMode:o,screenInOrder:f(l,"root"),scale:i}})(u.default)
t.default=l
var s=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),d=(0,o.immutableTransformCache)(function(e,a){var o={},i=(0,c.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===a){var t=e.cid,n=e.position,r=e.parent_cid||"root"
o[t]=e,void 0===i[r]&&(i[r]=[]),i[r].push({cid:t,position:n})}}),Object.values(i).forEach(function(e){return e.sort(function(e,t){return o[e.cid].position-o[t.cid].position})}),{rootCid:"root",nodeMap:o,childListMap:i}}),f=function r(a,e){var o=[]
return a[e].forEach(function(e){var t=e.cid
if(o.push(t),a[t]){var n=r(a,t)
o.push.apply(o,(0,i.default)(n))}}),o}},xYSL:function(e,t,n){var r=n("R/W3")
e.exports=function(e,t){return!(null==e||!e.length)&&-1<r(e,t,0)}},xn7q:function(e,t,n){e.exports={previewPanelLayer:"_1440VIJ3r2SoiW8WAZ21xI",layerInfo:"_1auiNpZenxIHtuOt85xZWs"}},"xo+i":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var u=r(n("lSNA")),a=n("/MKj"),o=r(n("h2Vm")),i=n("/5+U"),c=(0,a.connect)(function(e){return{screenTreeData:s(e.model.screens,e.model.current.projectCid),screenCommentThreadCountMap:l(e.model.commentThreads),currentScreenCid:e.model.current.screenCid,screenSearch:e.container.screens.screenSearch}})(o.default)
t.default=c
var l=(0,i.immutableTransformCache)(function(e){return e.reduce(function(e,t){return e[t.screen_cid]=(e[t.screen_cid]||0)+1,e},{})}),s=(0,i.immutableTransformCache)(function(e,a){var o={},i={},c=(0,u.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===a){var t=e.cid,n=e.position,r=e.parent_cid||"root"
o[t]=e,i[t]=String(e.name).toLowerCase(),void 0===c[r]&&(c[r]=[]),c[r].push({cid:t,position:n})}}),Object.values(c).forEach(function(e){return e.sort(function(e,t){return o[e.cid].position-o[t.cid].position})}),{rootCid:"root",nodeMap:o,childListMap:c,screenNameCidMap:i}})},"xtk/":function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=a(n("lwsE")),i=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("TSYQ")),m=n("6XO9"),v=a(n("v9Wr")),g="".concat(location.origin,"/snapshot.png"),y=function(e){function t(e){var r
return(0,o.default)(this,t),r=(0,c.default)(this,(0,u.default)(t).call(this,e)),(0,d.default)((0,s.default)((0,s.default)(r)),"updateIsVisible",function(){r.setState({isVisible:r.isInBoundingClientRect()})}),(0,d.default)((0,s.default)((0,s.default)(r)),"setElementRef",function(e){return r.$elem=e}),(0,d.default)((0,s.default)((0,s.default)(r)),"isInBoundingClientRect",function(){var e=r.props.containerRect
if(!e||!r.$elem)return!1
var t=r.$elem.getBoundingClientRect()
return t.bottom>e.top&&t.top<e.bottom}),(0,d.default)((0,s.default)((0,s.default)(r)),"handleClick",function(e){e.stopPropagation()
var t=r.props,n=t.screenCid;(0,t.onActivate)(n)}),r.state={isVisible:!1},r}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.containerRect&&this.updateIsVisible()}},{key:"componentDidUpdate",value:function(e,t){var n=this.isInBoundingClientRect()
if(!e.containerRect&&this.props.isActive&&!n){var r=this.$elem.getBoundingClientRect()
this.props.scrollIntoView(r)}this.updateIsVisible()}},{key:"render",value:function(){var e=this.props,t=e.projectToken,n=e.screenCid,r=e.canvasZoom,a=e.version,o=e.screenName,i=e.isActive,c=e.treeProps.renderItem,u=Screen.find(n),l=this.state.isVisible,s="".concat(g,"?access-token=").concat(t,"&screen-cid=").concat(n,"&version=").concat(a)
return p.default.createElement("li",{className:(0,h.default)("thumbnail-item",{active:i}),onClick:this.handleClick},p.default.createElement(m.Tooltip,{arrowed:!1,content:{hover:o},duration:1e3,position:"bottom",type:"block"},p.default.createElement("div",{ref:this.setElementRef,className:"image-wrapper"},c&&c(u),p.default.createElement(v.default,{screenCid:n,version:a,imageUrl:s,canvasZoom:r,isVisible:l}))),p.default.createElement("span",{className:"screen-name"},o))}}]),t}(p.PureComponent);(t.default=y
).propTypes={index:f.default.number,canvasZoom:f.default.number,version:f.default.string,screenCid:f.default.string,screenName:f.default.string,projectToken:f.default.string,containerRect:f.default.object,isActive:f.default.bool,onActivate:f.default.func,scrollIntoView:f.default.func,treeProps:f.default.object},y.defaultProps={treeProps:{}}},xx4x:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=a(n("lwsE")),o=a(n("W8MJ")),c=a(n("a1gu")),u=a(n("Nsbk")),l=a(n("7W2i")),s=a(n("PJYZ")),d=a(n("lSNA")),f=a(n("17x9")),p=r(n("q1tI")),h=a(n("M8nv")),m=a(n("ZS4k")),v=a(n("d89S")),g=function(e){function a(){var e,o;(0,i.default)(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return o=(0,c.default)(this,(e=(0,u.default)(a)).call.apply(e,[this].concat(n))),(0,d.default)((0,s.default)((0,s.default)(o)),"checkIfNeedHideLayer",function(e){var t=o.props,n=t.isSpaceDown,r=t.requestSelectLayer,a=t.handleShowlayerInfo
!n&&e.target.contains(document.getElementById("simulator-container"))&&(r(-1),a(!1))}),o}return(0,l.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.error,r=e.isActive,a=e.isSelectLayer,o=e.isShowColorPicker,i=e.activeLayerID
if(!r)return null
if(t)return null
if(n)return null
var c=-1!==i&&!o
return p.default.createElement("div",null,p.default.createElement(m.default,null),c&&p.default.createElement(v.default,null),a&&p.default.createElement(h.default,{onClick:this.checkIfNeedHideLayer}))}}]),a}(p.PureComponent);(t.default=g).propTypes={isActive:f.default.bool,isFetching:f.default.bool,isSpaceDown:f.default.bool,isSelectLayer:f.default.bool,isShowColorPicker:f.default.bool,activeLayerID:f.default.oneOfType([f.default.number,f.default.string]),requestSelectLayer:f.default.func,
handleShowlayerInfo:f.default.func,error:f.default.string}},yLV6:function(ze,Ve,Ye){var Ze
!function(o,c,e,m){"use strict"
var i,u=["","webkit","Moz","MS","ms","o"],t=c.createElement("div"),n="function",l=Math.round,v=Math.abs,g=Date.now
function s(e,t,n){return setTimeout(y(e,n),t)}function r(e,t,n){return!!Array.isArray(e)&&(d(e,n[t],n),!0)}function d(e,t,n){var r
if(e)if(e.forEach)e.forEach(t,n)
else if(e.length!==m)for(r=0;r<e.length;)t.call(n,e[r],r,e),r++
else for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)}function a(r,e,t){var a="DEPRECATED METHOD: "+e+"\n"+t+" AT \n"
return function(){var e=new Error("get-stack-trace"),t=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=o.console&&(o.console.warn||o.console.log)
return n&&n.call(o.console,a,t),r.apply(this,arguments)}}i="function"!=typeof Object.assign?function(e){if(e===m||null===e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(r!==m&&null!==r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}:Object.assign
var f=a(function(e,t,n){for(var r=Object.keys(t),a=0;a<r.length;)(!n||n&&e[r[a]]===m)&&(e[r[a]]=t[r[a]]),a++
return e},"extend","Use `assign`."),p=a(function(e,t){return f(e,t,!0)},"merge","Use `assign`.")
function h(e,t,n){var r,a=t.prototype;(r=e.prototype=Object.create(a)).constructor=e,r._super=a,n&&i(r,n)}function y(e,t){return function(){return e.apply(t,arguments)}}function b(e,t){return typeof e==n?e.apply(t&&t[0]||m,t):e}function w(e,t){return e===m?t:e}function S(t,e,n){d(x(e),function(e){t.addEventListener(e,n,!1)})}function E(t,e,n){d(x(e),function(e){t.removeEventListener(e,n,!1)})}function C(e,t){for(;e;){if(e==t)return!0
e=e.parentNode}return!1}function _(e,t){return-1<e.indexOf(t)}function x(e){return e.trim().split(/\s+/g)}function k(e,t,n){if(e.indexOf&&!n)return e.indexOf(t)
for(var r=0;r<e.length;){if(n&&e[r][n]==t||!n&&e[r]===t)return r
r++}return-1}function M(e){return Array.prototype.slice.call(e,0)}function T(e,n,t){for(var r=[],a=[],o=0;o<e.length;){var i=n?e[o][n]:e[o]
k(a,i)<0&&r.push(e[o]),a[o]=i,o++}return t&&(r=n?r.sort(function(e,t){return e[n]>t[n]}):r.sort()),r}function R(e,t){for(var n,r,a=t[0].toUpperCase()+t.slice(1),o=0;o<u.length;){if((r=(n=u[o])?n+a:t)in e)return r
o++}return m}var N=1
function O(e){var t=e.ownerDocument||e
return t.defaultView||t.parentWindow||o}var I="ontouchstart"in o,P=R(o,"PointerEvent")!==m,A=I&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),L="touch",j=25,D=1,B=4,U=8,F=1,q=2,W=4,H=8,z=16,V=q|W,Y=H|z,Z=V|Y,J=["x","y"],X=["clientX","clientY"]
function G(t,e){var n=this
this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){b(t.options.enable,[t])&&n.handler(e)},this.init()}function K(e,t,n){var r=n.pointers.length,a=n.changedPointers.length,o=t&D&&r-a==0,i=t&(B|U)&&r-a==0
n.isFirst=!!o,n.isFinal=!!i,o&&(e.session={}),n.eventType=t,function(e,t){var n=e.session,r=t.pointers,a=r.length
n.firstInput||(n.firstInput=Q(t))
1<a&&!n.firstMultiple?n.firstMultiple=Q(t):1===a&&(n.firstMultiple=!1)
var o=n.firstInput,i=n.firstMultiple,c=i?i.center:o.center,u=t.center=$(r)
t.timeStamp=g(),t.deltaTime=t.timeStamp-o.timeStamp,t.angle=re(c,u),t.distance=ne(c,u),function(e,t){var n=t.center,r=e.offsetDelta||{},a=e.prevDelta||{},o=e.prevInput||{}
t.eventType!==D&&o.eventType!==B||(a=e.prevDelta={x:o.deltaX||0,y:o.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y})
t.deltaX=a.x+(n.x-r.x),t.deltaY=a.y+(n.y-r.y)}(n,t),t.offsetDirection=te(t.deltaX,t.deltaY)
var l=ee(t.deltaTime,t.deltaX,t.deltaY)
t.overallVelocityX=l.x,t.overallVelocityY=l.y,t.overallVelocity=v(l.x)>v(l.y)?l.x:l.y,t.scale=i?(f=i.pointers,p=r,ne(p[0],p[1],X)/ne(f[0],f[1],X)):1,t.rotation=i?(s=i.pointers,d=r,re(d[1],d[0],X)+re(s[1],s[0],X)):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,function(e,t){var n,r,a,o,i=e.lastInterval||t,c=t.timeStamp-i.timeStamp
if(t.eventType!=U&&(j<c||i.velocity===m)){var u=t.deltaX-i.deltaX,l=t.deltaY-i.deltaY,s=ee(c,u,l)
r=s.x,a=s.y,n=v(s.x)>v(s.y)?s.x:s.y,o=te(u,l),e.lastInterval=t}else n=i.velocity,r=i.velocityX,a=i.velocityY,o=i.direction
t.velocity=n,t.velocityX=r,t.velocityY=a,t.direction=o}(n,t)
var s,d
var f,p
var h=e.element
C(t.srcEvent.target,h)&&(h=t.srcEvent.target)
t.target=h}(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function Q(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:l(e.pointers[n].clientX),clientY:l(e.pointers[n].clientY)},n++
return{timeStamp:g(),pointers:t,center:$(t),deltaX:e.deltaX,deltaY:e.deltaY}}function $(e){var t=e.length
if(1===t)return{x:l(e[0].clientX),y:l(e[0].clientY)}
for(var n=0,r=0,a=0;a<t;)n+=e[a].clientX,r+=e[a].clientY,a++
return{x:l(n/t),y:l(r/t)}}function ee(e,t,n){return{x:t/e||0,y:n/e||0}}function te(e,t){return e===t?F:v(e)>=v(t)?e<0?q:W:t<0?H:z}function ne(e,t,n){n||(n=J)
var r=t[n[0]]-e[n[0]],a=t[n[1]]-e[n[1]]
return Math.sqrt(r*r+a*a)}function re(e,t,n){n||(n=J)
var r=t[n[0]]-e[n[0]],a=t[n[1]]-e[n[1]]
return 180*Math.atan2(a,r)/Math.PI}G.prototype={handler:function(){},init:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(O(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&E(this.element,this.evEl,this.domHandler),this.evTarget&&E(this.target,this.evTarget,this.domHandler),this.evWin&&E(O(this.element),this.evWin,this.domHandler)}}
var ae={mousedown:D,mousemove:2,mouseup:B},oe="mousedown",ie="mousemove mouseup"
function ce(){this.evEl=oe,this.evWin=ie,this.pressed=!1,G.apply(this,arguments)}h(ce,G,{handler:function(e){var t=ae[e.type]
t&D&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=B),this.pressed&&(t&B&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:"mouse",srcEvent:e}))}})
var ue={pointerdown:D,pointermove:2,pointerup:B,pointercancel:U,pointerout:U},le={2:L,3:"pen",4:"mouse",5:"kinect"},se="pointerdown",de="pointermove pointerup pointercancel"
function fe(){this.evEl=se,this.evWin=de,G.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}o.MSPointerEvent&&!o.PointerEvent&&(se="MSPointerDown",de="MSPointerMove MSPointerUp MSPointerCancel"),h(fe,G,{handler:function(e){var t=this.store,n=!1,r=e.type.toLowerCase().replace("ms",""),a=ue[r],o=le[e.pointerType]||e.pointerType,i=o==L,c=k(t,e.pointerId,"pointerId")
a&D&&(0===e.button||i)?c<0&&(t.push(e),c=t.length-1):a&(B|U)&&(n=!0),c<0||(t[c]=e,this.callback(this.manager,a,{pointers:t,changedPointers:[e],pointerType:o,srcEvent:e}),n&&t.splice(c,1))}})
var pe={touchstart:D,touchmove:2,touchend:B,touchcancel:U}
function he(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,G.apply(this,arguments)}h(he,G,{handler:function(e){var t=pe[e.type]
if(t===D&&(this.started=!0),this.started){var n=function(e,t){var n=M(e.touches),r=M(e.changedTouches)
t&(B|U)&&(n=T(n.concat(r),"identifier",!0))
return[n,r]}.call(this,e,t)
t&(B|U)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:L,srcEvent:e})}}})
var me={touchstart:D,touchmove:2,touchend:B,touchcancel:U},ve="touchstart touchmove touchend touchcancel"
function ge(){this.evTarget=ve,this.targetIds={},G.apply(this,arguments)}h(ge,G,{handler:function(e){var t=me[e.type],n=function(e,t){var n=M(e.touches),r=this.targetIds
if(t&(2|D)&&1===n.length)return r[n[0].identifier]=!0,[n,n]
var a,o,i=M(e.changedTouches),c=[],u=this.target
if(o=n.filter(function(e){return C(e.target,u)}),t===D)for(a=0;a<o.length;)r[o[a].identifier]=!0,a++
a=0
for(;a<i.length;)r[i[a].identifier]&&c.push(i[a]),t&(B|U)&&delete r[i[a].identifier],a++
return c.length?[T(o.concat(c),"identifier",!0),c]:void 0}.call(this,e,t)
n&&this.callback(this.manager,t,{pointers:n[0],changedPointers:n[1],pointerType:L,srcEvent:e})}})
var ye=2500
function be(){G.apply(this,arguments)
var e=y(this.handler,this)
this.touch=new ge(this.manager,e),this.mouse=new ce(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}function we(e){var t=e.changedPointers[0]
if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY}
this.lastTouches.push(n)
var r=this.lastTouches
setTimeout(function(){var e=r.indexOf(n);-1<e&&r.splice(e,1)},ye)}}h(be,G,{handler:function(e,t,n){var r=n.pointerType==L,a="mouse"==n.pointerType
if(!(a&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(r)(function(e,t){e&D?(this.primaryTouch=t.changedPointers[0].identifier,we.call(this,t)):e&(B|U)&&we.call(this,t)}).call(this,t,n)
else if(a&&function(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var a=this.lastTouches[r],o=Math.abs(t-a.x),i=Math.abs(n-a.y)
if(o<=25&&i<=25)return!0}return!1}.call(this,n))return
this.callback(e,t,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}})
var Se=R(t.style,"touchAction"),Ee=Se!==m,Ce="manipulation",_e="none",xe="pan-x",ke="pan-y",Me=function(){if(!Ee)return!1
var t={},n=o.CSS&&o.CSS.supports
return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(e){t[e]=!n||o.CSS.supports("touch-action",e)}),t}()
function Te(e,t){this.manager=e,this.set(t)}Te.prototype={set:function(e){"compute"==e&&(e=this.compute()),Ee&&this.manager.element.style&&Me[e]&&(this.manager.element.style[Se]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[]
return d(this.manager.recognizers,function(e){b(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(e){if(_(e,_e))return _e
var t=_(e,xe),n=_(e,ke)
if(t&&n)return _e
if(t||n)return t?xe:ke
if(_(e,Ce))return Ce
return"auto"}(t.join(" "))},preventDefaults:function(e){var t=e.srcEvent,n=e.offsetDirection
if(this.manager.session.prevented)t.preventDefault()
else{var r=this.actions,a=_(r,_e)&&!Me.none,o=_(r,ke)&&!Me[ke],i=_(r,xe)&&!Me[xe]
if(a){var c=1===e.pointers.length,u=e.distance<2,l=e.deltaTime<250
if(c&&u&&l)return}if(!i||!o)return a||o&&n&V||i&&n&Y?this.preventSrc(t):void 0}},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}}
var Re=1
function Ne(e){this.options=i({},this.defaults,e||{}),this.id=N++,this.manager=null,this.options.enable=w(this.options.enable,!0),this.state=Re,this.simultaneous={},this.requireFail=[]}function Oe(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}function Ie(e){return e==z?"down":e==H?"up":e==q?"left":e==W?"right":""}function Pe(e,t){var n=t.manager
return n?n.get(e):e}function Ae(){Ne.apply(this,arguments)}function Le(){Ae.apply(this,arguments),this.pX=null,this.pY=null}function je(){Ae.apply(this,arguments)}function De(){Ne.apply(this,arguments),this._timer=null,this._input=null}function Be(){Ae.apply(this,arguments)}function Ue(){Ae.apply(this,arguments)}function Fe(){Ne.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function qe(e,t){return(t=t||{}).recognizers=w(t.recognizers,qe.defaults.preset),
new We(e,t)}Ne.prototype={defaults:{},set:function(e){return i(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(r(e,"recognizeWith",this))return this
var t=this.simultaneous
return t[(e=Pe(e,this)).id]||(t[e.id]=e).recognizeWith(this),this},dropRecognizeWith:function(e){return r(e,"dropRecognizeWith",this)||(e=Pe(e,this),delete this.simultaneous[e.id]),this},requireFailure:function(e){if(r(e,"requireFailure",this))return this
var t=this.requireFail
return-1===k(t,e=Pe(e,this))&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(r(e,"dropRequireFailure",this))return this
e=Pe(e,this)
var t=k(this.requireFail,e)
return-1<t&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(t){var n=this,e=this.state
function r(e){n.manager.emit(e,t)}e<8&&r(n.options.event+Oe(e)),r(n.options.event),t.additionalEvent&&r(t.additionalEvent),8<=e&&r(n.options.event+Oe(e))},tryEmit:function(e){if(this.canEmit())return this.emit(e)
this.state=32},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(32|Re)))return!1
e++}return!0},recognize:function(e){var t=i({},e)
if(!b(this.options.enable,[this,t]))return this.reset(),void(this.state=32)
56&this.state&&(this.state=Re),this.state=this.process(t),30&this.state&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}},h(Ae,Ne,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers
return 0===t||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,r=6&t,a=this.attrTest(e)
return r&&(n&U||!a)?16|t:r||a?n&B?8|t:2&t?4|t:2:32}}),h(Le,Ae,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var e=this.options.direction,t=[]
return e&V&&t.push(ke),e&Y&&t.push(xe),t},directionTest:function(e){var t=this.options,n=!0,r=e.distance,a=e.direction,o=e.deltaX,i=e.deltaY
return a&t.direction||(r=t.direction&V?(a=0===o?F:o<0?q:W,n=o!=this.pX,Math.abs(e.deltaX)):(a=0===i?F:i<0?H:z,n=i!=this.pY,Math.abs(e.deltaY))),e.direction=a,n&&r>t.threshold&&a&t.direction},attrTest:function(e){return Ae.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY
var t=Ie(e.direction)
t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}}),h(je,Ae,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[_e]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},emit:function(e){if(1!==e.scale){var t=e.scale<1?"in":"out"
e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}}),h(De,Ne,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,a=e.deltaTime>t.time
if(this._input=e,!r||!n||e.eventType&(B|U)&&!a)this.reset()
else if(e.eventType&D)this.reset(),this._timer=s(function(){this.state=8,this.tryEmit()},t.time,this)
else if(e.eventType&B)return 8
return 32},reset:function(){clearTimeout(this._timer)},emit:function(e){8===this.state&&(e&&e.eventType&B?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=g(),this.manager.emit(this.options.event,this._input)))}}),h(Be,Ae,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[_e]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)}}),h(Ue,Ae,{defaults:{event:"swipe",threshold:10,
velocity:.3,direction:V|Y,pointers:1},getTouchAction:function(){return Le.prototype.getTouchAction.call(this)},attrTest:function(e){var t,n=this.options.direction
return n&(V|Y)?t=e.overallVelocity:n&V?t=e.overallVelocityX:n&Y&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&v(t)>this.options.velocity&&e.eventType&B},emit:function(e){var t=Ie(e.offsetDirection)
t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),h(Fe,Ne,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ce]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,a=e.deltaTime<t.time
if(this.reset(),e.eventType&D&&0===this.count)return this.failTimeout()
if(r&&a&&n){if(e.eventType!=B)return this.failTimeout()
var o=!this.pTime||e.timeStamp-this.pTime<t.interval,i=!this.pCenter||ne(this.pCenter,e.center)<t.posThreshold
if(this.pTime=e.timeStamp,this.pCenter=e.center,i&&o?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=s(function(){this.state=8,this.tryEmit()},t.interval,this),2):8}return 32},failTimeout:function(){return this._timer=s(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),
qe.VERSION="2.0.7",qe.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Be,{enable:!1}],[je,{enable:!1},["rotate"]],[Ue,{direction:V}],[Le,{direction:V},["swipe"]],[Fe],[Fe,{event:"doubletap",taps:2},["tap"]],[De]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}}
function We(e,t){var n
this.options=i({},qe.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((n=this).options.inputClass||(P?fe:A?ge:I?be:ce))(n,K),this.touchAction=new Te(this,this.options.touchAction),He(this,!0),d(this.options.recognizers,function(e){var t=this.add(new e[0](e[1]))
e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])},this)}function He(n,r){var a,o=n.element
o.style&&(d(n.options.cssProps,function(e,t){a=R(o.style,t),o.style[a]=r?(n.oldCssProps[a]=o.style[a],e):n.oldCssProps[a]||""}),r||(n.oldCssProps={}))}We.prototype={set:function(e){return i(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?2:1},recognize:function(e){var t=this.session
if(!t.stopped){var n
this.touchAction.preventDefaults(e)
var r=this.recognizers,a=t.curRecognizer;(!a||a&&8&a.state)&&(a=t.curRecognizer=null)
for(var o=0;o<r.length;)n=r[o],2===t.stopped||a&&n!=a&&!n.canRecognizeWith(a)?n.reset():n.recognize(e),!a&&14&n.state&&(a=t.curRecognizer=n),o++}},get:function(e){if(e instanceof Ne)return e
for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n]
return null},add:function(e){if(r(e,"add",this))return this
var t=this.get(e.options.event)
return t&&this.remove(t),this.recognizers.push(e),(e.manager=this).touchAction.update(),e},remove:function(e){if(r(e,"remove",this))return this
if(e=this.get(e)){var t=this.recognizers,n=k(t,e);-1!==n&&(t.splice(n,1),this.touchAction.update())}return this},on:function(e,t){if(e!==m&&t!==m){var n=this.handlers
return d(x(e),function(e){n[e]=n[e]||[],n[e].push(t)}),this}},off:function(e,t){if(e!==m){var n=this.handlers
return d(x(e),function(e){t?n[e]&&n[e].splice(k(n[e],t),1):delete n[e]}),this}},emit:function(e,t){var n,r,a
this.options.domEvents&&(n=e,r=t,(a=c.createEvent("Event")).initEvent(n,!0,!0),(a.gesture=r).target.dispatchEvent(a))
var o=this.handlers[e]&&this.handlers[e].slice()
if(o&&o.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()}
for(var i=0;i<o.length;)o[i](t),i++}},destroy:function(){this.element&&He(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},i(qe,{INPUT_START:D,INPUT_MOVE:2,INPUT_END:B,INPUT_CANCEL:U,STATE_POSSIBLE:Re,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:F,DIRECTION_LEFT:q,DIRECTION_RIGHT:W,DIRECTION_UP:H,DIRECTION_DOWN:z,DIRECTION_HORIZONTAL:V,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:We,Input:G,TouchAction:Te,
TouchInput:ge,MouseInput:ce,PointerEventInput:fe,TouchMouseInput:be,SingleTouchInput:he,Recognizer:Ne,AttrRecognizer:Ae,Tap:Fe,Pan:Le,Swipe:Ue,Pinch:je,Rotate:Be,Press:De,on:S,off:E,each:d,merge:p,extend:f,assign:i,inherit:h,bindFn:y,prefixed:R}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=qe,(Ze=function(){return qe}.call(Ve,Ye,Ve,ze))===m||(ze.exports=Ze)}(window,document)},yOnP:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=i
var u=r(n("MVZn")),l=r(n("o0o1")),s=n("oZtI"),d=n("S7Zs"),a=l.default.mark(i),o=l.default.mark(c),f=l.default.mark(p)
function i(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([c()])
case 2:case"end":return e.stop()}},a,this)}function c(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)("reducer:artboards:init",p)
case 2:case"end":return e.stop()}},o,this)}function p(e){var t,n,r,a,o,i,c
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.select)()
case 2:if(t=e.sent,n=t.model,r=n.current.projectCid,a=n.screens,e.prev=4,o={},a.forEach(function(e){var t=e.width,n=e.height,r=e.cid
o[r]={width:t,height:n}}),r)return e.next=10,(0,s.call)(d.fetchArtboardsByProjectCid,r)
e.next=13
break
case 10:i=e.sent,0<(c=i.artboards).length&&c.forEach(function(e){var t=e.width,n=e.height,r=e.screen_cid
o[r]={width:t,height:n}})
case 13:return o={artboards:o},e.next=16,(0,s.put)({type:"reducer:artboards:success",payload:(0,u.default)({},o)})
case 16:e.next=23
break
case 18:return e.prev=18,e.t0=e.catch(4),console.log(e.t0.stack),e.next=23,(0,s.put)({type:"reducer:artboards:fail"})
case 23:case"end":return e.stop()}},f,this,[[4,18]])}},yTJ9:function(e,t){var d={allowFuture:!(e.exports=function(e){return e instanceof Date?r(e):"string"==typeof e?r(n(e)):"number"==typeof e?r(new Date(e)):void 0}),strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",
years:"%d years",numbers:[],wordSeparator:" "}},f=d.strings
function n(e){if(e){var t=e.trim()
return t=(t=(t=(t=t.replace(/\.\d\d\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t)}}function r(e){return f.inWords((t=e,(new Date).getTime()-t.getTime()))
var t}e.exports.settings=d,f.inWords=function(a){var e=f.prefixAgo,t=f.suffixAgo
d.allowFuture&&a<0&&(e=f.prefixFromNow,t=f.suffixFromNow)
var n=Math.abs(a)/1e3,r=n/60,o=r/60,i=o/24,c=i/365
function u(e,t){var n="function"==typeof e?e(t,a):e,r=f.numbers&&f.numbers[t]||t
return n.replace(/%d/i,r)}var l=n<45&&u(f.seconds,Math.round(n))||n<90&&u(f.minute,1)||r<45&&u(f.minutes,Math.round(r))||r<90&&u(f.hour,1)||o<24&&u(f.hours,Math.round(o))||o<48&&u(f.day,1)||i<30&&u(f.days,Math.floor(i))||i<60&&u(f.month,1)||i<365&&u(f.months,Math.floor(i/30))||c<2&&u(f.year,1)||u(f.years,Math.floor(c)),s=f.wordSeparator||""
return void 0===f.wordSeparator&&(s=" "),[e,l,t].join(s).toString().trim()},f.parse=n},yUqi:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.decompress=t.compress=void 0
var a=r(n("6xEa"))
t.compress=function(e){return a.default.compressToUTF16(e)}
t.decompress=function(e){return a.default.decompressFromUTF16(e)}},ycqN:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.PATCH_AUTO_SAVE_RELATED=t.SAVE_NUKE_SEQUENCE=void 0
var a=r(n("o0o1")),o=r(n("yXPU")),i=n("os03"),c=n("XkTy"),u=n("Clcl"),l=window,s=l.$,d=l.MB,f=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
return new Promise(function(e,t){(0,c.alertAsyncBlocked)(n).then(e),setTimeout(t,6e4)}).catch(function(){return setTimeout(function(){return(0,u.POST_REPORT)({type:"Error:alertAsyncBlocked:timeout",option:n})},0)})},p=function(){var t=(0,o.default)(a.default.mark(function e(t){var n,r=arguments
return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=1<r.length&&void 0!==r[1]?r[1]:-255,e.next=3,f({desc:I18N.unknown_error.replace(/%s/i,n),isHTML:!0})
case 3:return location.reload(),(0,u.NUKE)(t),e.next=7,(0,i.setTimeoutAsync)(36e5)
case 7:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
t.SAVE_NUKE_SEQUENCE=p
t.PATCH_AUTO_SAVE_RELATED=function(){(0,u.SETUP_REPORT_INTERVAL)({type:"AutoSaver:Socket",timeInterval:3e5,getReportObject:function(){return d.AutoSaver.getState()}})
var e,t,n,r,a=new Date
a.setDate(a.getDate()+1),a.setHours(4),a.setMinutes(0),a.setSeconds(0),(0,(e=a,n=function(){t&&clearInterval(t),t=void 0,document.removeEventListener("visibilitychange",r)},r=function(){Date.now()<e||(n(),setInterval(function(){return(0,c.alertAsyncBlocked)({desc:I18N.new_version_detected,isHTML:!0}).then(function(){return location.reload()})},2e4))},{start:function(){t&&clearInterval(t),t=setInterval(r,6e5),document.addEventListener("visibilitychange",r)},stop:n,check:r}).start)(),
window.onbeforeunload=function(){return d.AutoSaver.getIsEmpty()?void 0:d.isLegacyElectron()?!d.confirmAsync({title:I18N.warning,desc:I18N.data_lost_warning})||void 0:I18N.data_lost_warning},window.onerror=function(e,t,n,r,a){return!d.config.ignoreError.test(e)&&a&&a.stack&&console.error(a)},d.myXhr=s.ajaxSettings.xhr(),s.ajaxSettings.xhr=function(){return d.myXhr},s.ajaxSetup({timeout:6e4})}},yl0K:function(e){e.exports={
"// HOSTED_COMMERCIAL_FANGZHENG_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",HOSTED_COMMERCIAL_FANGZHENG_LIST:[{family:"FZLanTingHei",label:"方正兰亭黑",typeList:["regular","light","bold"]},{family:"FZYuan",label:"方正圆体",typeList:["regular","light","bold"]},{family:"FZXinSong",label:"方正新书宋",typeList:["regular"]},{family:"FZKai",label:"方正楷体",typeList:["regular"]},{family:"FZGongYeHei",label:"方正工业黑",typeList:["regular"]},{family:"FZHanZhenGuangBiao",
label:"方正汉真广标",typeList:["regular"]},{family:"FZZongYi",label:"方正综艺体",typeList:["regular"]}],"// HOSTED_COMMON_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",HOSTED_COMMON_LIST:[{family:"PingFangSC",label:"PingFang SC",limitedDevices:["iphone","ipad","apple_watch"],typeList:["regular","bold"]},{family:"SourceHanSansSC",label:"思源黑体",typeList:["regular","bold"]},{family:"SFUIText",label:"SF UI Text",limitedDevices:["iphone","ipad","apple_watch"],
typeList:["regular","bold"]},{family:"Roboto",label:"Roboto",typeList:["regular","bold"]}],"// WESTERN_COMMON_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",WESTERN_COMMON_LIST:[{family:"Arial",label:"Arial",typeList:["regular","bold"]},{family:"Courier New",label:"Courier New",typeList:["regular","bold"]},{family:"Helvetica",label:"Helvetica",typeList:["regular","light","bold"]},{family:"Times New Roman",label:"Times New Roman",typeList:["regular"
,"bold"]}]}},zAG7:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.EMAIL_REG=void 0
t.EMAIL_REG=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9-]{2,63}$/i},zZYZ:function(e,t,n){},zgSj:function(e,t,n){"use strict"
var r=n("284h"),a=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var v=a(n("MVZn")),o=a(n("pVnL")),i=a(n("lwsE")),c=a(n("W8MJ")),u=a(n("a1gu")),l=a(n("Nsbk")),s=a(n("7W2i")),d=a(n("lSNA")),f=r(n("q1tI")),p=a(n("17x9")),h=a(n("inTe")),m=a(n("sxGJ")),g=n("/MKj"),y=a(n("xn7q")),b=n("RUem"),w=n("qOCw"),S=n("/5+U"),E=a(n("J2m7")),C=function(e){function a(){var t
return(0,i.default)(this,a),(t=(0,u.default)(this,(0,l.default)(a).call(this))).getScrollLayerRef=function(e){return t.layerRef=e},t.state={error:!1},t}return(0,s.default)(a,e),(0,c.default)(a,[{key:"componentDidMount",value:function(){this.clipBoard=new m.default('[data-type="copy"]')}},{key:"componentWillUnmount",value:function(){$(this.layerRef).perfectScrollbar("destroy"),this.clipBoard.destroy()}},{key:"componentWillReceiveProps",value:function(e){e.screenCid!=this.props.screenCid&&this.props.dispatch(
{type:"reducer:preview-toolbar:update",payload:{isSelectLayer:!1}})}},{key:"componentDidUpdate",value:function(e){e.layer!=this.props.layer&&$(this.layerRef).perfectScrollbar({suppressScrollX:!0}),e.layer&&this.props.layer&&e.layer.id!=this.props.layer.id&&this.layerRef&&(this.layerRef.scrollTop=0)}},{key:"componentDidCatch",value:function(e){this.setState({error:!0}),console.error(e)}},{key:"render",value:function(){var e=this.props,t=e.isSelectLayer,n=e.layer,r=this.state.error
return f.default.createElement("div",{className:y.default.previewPanelLayer},n?f.default.createElement("div",{className:y.default.layerInfo,ref:this.getScrollLayerRef},r?f.default.createElement(a.Error,null):f.default.createElement(h.default,(0,o.default)({},this.props,{showGlobal:!t}))):f.default.createElement(b.Loading,null))}}]),a}(f.PureComponent);(0,d.default)(C,"Error",function(){return f.default.createElement("div",null,"Sorry!Error happend, Please refresh it")}),(0,d.default)(C,"propTypes",{
colorUnit:p.default.string.isRequired,isSelectLayer:p.default.bool.isRequired,unit:p.default.string.isRequired,ratio:p.default.number.isRequired,layer:p.default.object,screenCid:p.default.string,dispatch:p.default.func.isRequired})
var _=(0,g.connect)(function(e){var t=e.container,n=t.layers,r=n.activeLayerID,a=n.visibilityScreenID,o=n.resourceByScreen,i=t.previewSetting,c=e.model,u=c.current,l=u.screenCid,s=u.projectCid,d=c.projects,f=i.isSelectLayer,p=k(d,s).device,h=M(f,o,a,r),m=x(o,a,p)
return(0,v.default)({},i,{layer:h},m,{screenCid:l})})(C)
t.default=_
var x=(0,S.immutableTransformCache)(function(e,t,n){var r=[],a=[],o=[],i=[],c=e[t]
if(c){var u=c.layers,l=(0,w.sortScreenLayers)(u)
r=l.screenColor,i=l.globalText,a=c.documentColor,o=c.globalColor}return{screenColor:r,documentColor:a,globalColor:o,globalText:i}}),k=(0,S.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),M=(0,S.immutableTransformCache)(function(e,t,n,r){var a=t[n]
if(!a||a.layers&&0==a.layers.length)return null
var o=a.layers
return e?(0,E.default)(o,function(e){return e.id===r}):(0,v.default)({},o[0])})},zkrS:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=r(n("yTJ9")),o=r(n("knB1")),i=r(n("QkVN")),c=window,u=c.confirm,l=c.alert,s=c.MB,d=c.MBLocale,f=c.I18N,p=c.Team,h=c.Project,m=c.Combo,v=c.Template,g=c.Screen,y=c.Screenstate,b=c.Widget,w=c.Widgetstate,S=c.Panel,E=c.Panelstate,C=c.Link,_=c.Collaborator,x=c.Comment,k=c.CommentThread,M=c.Asset
"zh-CN"===d&&(0,i.default)(a.default.settings.strings,o.default)
var T={MBLocale:d,parseTimeAgo:function(e){return(0,a.default)(e)}},R={Team:p,Project:h,Combo:m,Template:v,Screen:g,Screenstate:y,Widget:b,Widgetstate:w,Panel:S,Panelstate:E,Link:C,Collaborator:_,Comment:x,CommentThread:k,Asset:M,requestCid:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"")+Math.uuid(10,16)+Date.now()},queueSave:function(){return s.AutoSaver&&s.AutoSaver.triggerSave()}},N={Global:window,Storage:s.localStorageDelegate,confirm:function(){return u.apply(void 0,
arguments)},alert:function(){return l.apply(void 0,arguments)},MB:s,I18N:f,L10N:T,SpineModel:R}
t.default=N}}])

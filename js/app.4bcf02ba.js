(function(t){function e(e){for(var i,c,l=e[0],o=e[1],r=e[2],g=0,m=[];g<l.length;g++)c=l[g],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);A&&A(e);while(m.length)m.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},n=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/game-work/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var A=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ca":function(t,e,a){t.exports=a.p+"img/icon_slotgame.08166b86.png"},"034f":function(t,e,a){"use strict";a("85ec")},"05ca":function(t,e,a){t.exports=a.p+"img/icon_r220.e1f0df56.png"},"0616":function(t,e,a){t.exports=a.p+"img/logo.6ffce445.png"},"09f9":function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QOJaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzQxMEUxQ0JCNTk0RTQxMTg3MkU5QjQ4RjA0OTNBMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTY0NkFCMTlCMjNEMTFFQjkwRUY4NEJGRUQ2RENBRDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTY0NkFCMThCMjNEMTFFQjkwRUY4NEJGRUQ2RENBRDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGIyNDljYWUtYjY4ZC04MTQ2LWJmMGItNTY4OWNhOGM2YzYwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzMyZDhhNGUtNzdlYy0xMWViLWE1OGItZWVlNGRhMWNhYTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAFNwAABVgAAAWMAAAFtv/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8IAEQgAPwACAwERAAIRAQMRAf/EAHwAAQEAAAAAAAAAAAAAAAAAAAMHAQEBAQEAAAAAAAAAAAAAAAABAgMFEAEBAQEAAAAAAAAAAAAAAAAAETAQEQEAAAAAAAAAAAAAAAAAAAAwEgEAAAAAAAAAAAAAAAAAAAAwEwEBAAMAAwAAAAAAAAAAAAARABAgMAEhUf/aAAwDAQACEQMRAAABpfO1MREZoCgmhEx//9oACAEBAAEFAlVVVef/2gAIAQIAAQUCw//aAAgBAwABBQLD/9oACAECAgY/Ag//2gAIAQMCBj8CD//aAAgBAQEGPwIP/9oACAEBAwE/IXcz3f/aAAgBAgMBPyHh/9oACAEDAwE/IeH/2gAMAwEAAhEDEQAAEJqxv//aAAgBAQMBPxDfm/Hm/9oACAECAwE/EGZmZnH/2gAIAQMDAT8QiIiIx//Z"},"1bf0":function(t,e,a){"use strict";a("eea4")},"1ee5":function(t,e,a){t.exports=a.p+"img/esports.74ed846a.png"},"2b4f":function(t,e,a){t.exports=a.p+"img/banner04.2e08c442.jpg"},3109:function(t,e,a){t.exports=a.p+"img/lottory.878591ee.png"},3632:function(t,e,a){"use strict";a("d782")},"3a2a":function(t,e,a){t.exports=a.p+"img/banner01.79051a34.jpg"},"3d68":function(t,e,a){t.exports=a.p+"img/card-effect.2c29ca4f.png"},"42a7":function(t,e,a){},"4c7c":function(t,e,a){t.exports=a.p+"img/banner02.cfcb5b2f.jpg"},"4fdc":function(t,e,a){t.exports=a.p+"img/mechine.958d448c.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],c=(a("7b17"),a("ab8b"),{name:"App"}),l=c,o=(a("034f"),a("2877")),r=Object(o["a"])(l,s,n,!1,null,null,null),A=r.exports,g=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("Navbar"),a("Sidebar"),a("div",{staticClass:"banner"},[a("Carousel")],1),a("System"),a("Select"),a("Games"),a("Footer")],1)},u=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[i("img",{staticClass:"header-bg",attrs:{src:a("bdf4"),alt:""}}),i("div",{staticClass:"header-body"},[i("div",{staticClass:"header-body-head"},[i("img",{staticClass:"header-body-head-logo",attrs:{src:a("0616"),alt:""}}),t.isLogin?t._e():i("button",{staticClass:"header-body-head-login",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.login.apply(null,arguments)}}},[t._v("登入 "),i("img",{staticClass:"header-body-head-login-bg",attrs:{src:a("6952"),alt:""}})])])])])},p=[],b=a("5530"),f=a("2f62"),v={name:"Navbar",computed:Object(b["a"])({},Object(f["b"])(["isLogin","isToggle"])),methods:{login:function(){this.$store.commit("loginUser")},toggleSidebar:function(){this.isToggle&&this.$store.commit("toggleSidebar")}}},C=v,h=(a("bc7e"),Object(o["a"])(C,d,p,!1,null,"0522216a",null)),E=h.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"side"},[t.isLogin?i("div",{staticClass:"side-user"},[i("img",{staticClass:"side-user-bg",attrs:{src:a("b52f"),alt:""}}),i("div",{staticClass:"side-user-id"},[t._v("TEST0001")]),i("img",{staticClass:"side-user-divider",attrs:{src:a("cd4d"),alt:""}}),i("div",{staticClass:"side-user-credit"},[t._v("$ 4,600.00")])]):t._e(),i("label",{staticClass:"toggle",attrs:{for:"sidebar-toggle"}},[i("img",{staticClass:"toggle-icon",attrs:{src:a("a02d"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleLabel.apply(null,arguments)}}})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.isToggle,expression:"isToggle"}],staticClass:"sidebar-toggle",attrs:{type:"checkbox",id:"sidebar-toggle"},domProps:{checked:Array.isArray(t.isToggle)?t._i(t.isToggle,null)>-1:t.isToggle},on:{change:function(e){var a=t.isToggle,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=t._i(a,n);i.checked?c<0&&(t.isToggle=a.concat([n])):c>-1&&(t.isToggle=a.slice(0,c).concat(a.slice(c+1)))}else t.isToggle=s}}}),i("div",{staticClass:"sidebar"},[t.isLogin?i("div",{staticClass:"sidebar-head"},[i("div",{staticClass:"sidebar-head-user"},[t._v("TEST0001")]),i("div",{staticClass:"sidebar-head-credit"},[t._v("$ 4,600.00 (TWD)")])]):t._e(),i("div",{staticClass:"sidebar-item"},[t._v("出納櫃台")]),t.isLogin?i("div",{staticClass:"sidebar-item"},[t._v("修改密碼")]):t._e(),i("div",{staticClass:"sidebar-item"},[t._v("遊戲介紹")]),i("div",{staticClass:"sidebar-item"},[t._v("聯絡我們")]),t.isLogin?i("button",{staticClass:"sidebar-logout",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("登出 "),i("img",{staticClass:"sidebar-logout-img",attrs:{src:a("6952"),alt:""}})]):i("button",{staticClass:"sidebar-logout",attrs:{disabled:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("未登入 "),i("img",{staticClass:"sidebar-logout-img",attrs:{src:a("6952"),alt:""}})])])])},M=[],Q={name:"Sidebar",computed:Object(b["a"])({},Object(f["b"])(["isLogin","isToggle"])),methods:{logout:function(){this.$store.commit("logoutUser")},toggleLabel:function(){this.$store.commit("toggleLabel")}}},y=Q,G=(a("f203"),Object(o["a"])(y,I,M,!1,null,null,null)),x=G.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carosuel-wrapper",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[t._m(0),t._m(1)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carosuel-announce"},[a("div",{staticClass:"carosuel-announce-info"},[t._v("公告 : 幸運轉盤活動開啟公告看這裡!")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleInterval","data-bs-ride":"carousel"}},[i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active",attrs:{"data-bs-interval":"4000"}},[i("img",{staticClass:"d-block w-100",attrs:{src:a("3a2a"),alt:"..."}})]),i("div",{staticClass:"carousel-item",attrs:{"data-bs-interval":"4000"}},[i("img",{staticClass:"d-block w-100",attrs:{src:a("4c7c"),alt:"..."}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("5884"),alt:"..."}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("2b4f"),alt:"..."}})]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:a("b56c"),alt:"..."}})])]),i("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselExampleInterval","data-bs-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"visually-hidden"},[t._v("Previous")])]),i("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselExampleInterval","data-bs-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"visually-hidden"},[t._v("Next")])])])}],D={name:"Carousel",computed:Object(b["a"])({},Object(f["b"])(["isToggle"])),methods:{toggleSidebar:function(){this.isToggle&&(console.log("toggleback"),this.$store.commit("toggleSidebar"))}}},R=D,k=(a("3632"),Object(o["a"])(R,B,w,!1,null,"b5666a7a",null)),Y=k.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"system",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[i("img",{staticClass:"system-bg",attrs:{src:a("09f9"),alt:""}}),t._m(0)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"system-body"},[a("div",{staticClass:"system-body-item"},[a("div",{staticClass:"system-body-item-title"},[t._v("EGT JP")]),a("div",{staticClass:"system-body-item-num"},[t._v("1091179.57")])]),a("div",{staticClass:"system-body-item"},[a("div",{staticClass:"system-body-item-title"},[t._v("15輪 JP")]),a("div",{staticClass:"system-body-item-num"},[t._v("1091179.57")])])])}],O={name:"System",computed:Object(b["a"])({},Object(f["b"])(["isToggle"])),methods:{toggleSidebar:function(){this.isToggle&&(console.log("toggleback"),this.$store.commit("toggleSidebar"))}}},j=O,S=(a("7201"),Object(o["a"])(j,N,T,!1,null,"44ee2be5",null)),Z=S.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[i("img",{staticClass:"select-image",attrs:{src:a("85b6"),alt:""}}),i("div",{staticClass:"select-items"},[i("img",{staticClass:"select-items-img",attrs:{src:a("05ca"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}}),i("img",{staticClass:"select-items-divider",attrs:{src:a("cd4d"),alt:""}}),i("img",{staticClass:"select-items-img",attrs:{src:a("01ca"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}}),i("img",{staticClass:"select-items-divider",attrs:{src:a("cd4d"),alt:""}}),i("img",{staticClass:"select-items-img",attrs:{src:a("9ecf"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}}),i("div",{staticClass:"select-items-game"},[i("div",{staticClass:"select-items-game-name",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[t._v("老虎機")]),i("div",{staticClass:"select-items-game-name",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[t._v("百家樂")]),i("div",{staticClass:"select-items-game-name",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[t._v("15輪")])])])])},_=[],W={name:"Select",computed:Object(b["a"])({},Object(f["b"])(["isLogin","isToggle"])),methods:{toggleSidebar:function(){this.isToggle&&(console.log("toggleback"),this.$store.commit("toggleSidebar"))},enterGame:function(){this.isLogin?alert("敬請期待"):alert("請先登入")}}},P=W,U=(a("a140"),Object(o["a"])(P,H,_,!1,null,"d8b7dcea",null)),L=U.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"games",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[i("img",{staticClass:"games-bg",attrs:{src:a("b52f"),alt:""}}),i("div",{staticClass:"row"},[i("div",{staticClass:"games-container-item",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[i("div",{staticClass:"games-container-item-title"},[t._v("實體機台")]),i("img",{attrs:{src:a("4fdc"),alt:""}})]),i("div",{staticClass:"games-container-item",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[i("div",{staticClass:"games-container-item-title"},[t._v("視訊直播")]),i("img",{attrs:{src:a("d9da"),alt:""}})]),i("div",{staticClass:"games-container-item",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[i("div",{staticClass:"games-container-item-title"},[t._v("電子遊戲")]),i("img",{attrs:{src:a("8b6d"),alt:""}})]),t._m(0),t._m(1),i("div",{staticClass:"games-container-item",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enterGame.apply(null,arguments)}}},[i("div",{staticClass:"games-container-item-title"},[t._v("樂透彩票")]),i("img",{attrs:{src:a("3109"),alt:""}})]),t._m(2),t._m(3),t._m(4)])])},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"games-container-item"},[i("div",{staticClass:"games-container-item-title"},[t._v("體育賽事")]),i("img",{attrs:{src:a("dbb0"),alt:""}}),i("div",{staticClass:"games-container-item-maintain"},[i("img",{staticClass:"games-container-item-maintain-img",attrs:{src:a("be5c"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"games-container-item"},[i("div",{staticClass:"games-container-item-title"},[t._v("電競遊戲")]),i("img",{attrs:{src:a("1ee5"),alt:""}}),i("div",{staticClass:"games-container-item-maintain"},[i("img",{staticClass:"games-container-item-maintain-img",attrs:{src:a("be5c"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"games-container-item"},[i("div",{staticClass:"games-container-item-title"},[t._v("團體遊戲")]),i("img",{attrs:{src:a("9c18"),alt:""}}),i("div",{staticClass:"games-container-item-maintain"},[i("img",{staticClass:"games-container-item-maintain-img",attrs:{src:a("be5c"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"games-container-item"},[i("div",{staticClass:"games-container-item-title"},[t._v("釣魚遊戲")]),i("img",{attrs:{src:a("77db"),alt:""}}),i("div",{staticClass:"games-container-item-maintain"},[i("img",{staticClass:"games-container-item-maintain-img",attrs:{src:a("be5c"),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"games-container-item"},[i("div",{staticClass:"games-container-item-title"},[t._v("真人直播")]),i("img",{attrs:{src:a("3d68"),alt:""}}),i("div",{staticClass:"games-container-item-maintain"},[i("img",{staticClass:"games-container-item-maintain-img",attrs:{src:a("be5c"),alt:""}})])])}],z={name:"Games",computed:Object(b["a"])({},Object(f["b"])(["isLogin","isToggle"])),methods:{toggleSidebar:function(){this.isToggle&&(console.log("toggleback"),this.$store.commit("toggleSidebar"))},enterGame:function(){this.isLogin?alert("敬請期待"):alert("請先登入")}}},V=z,X=(a("f970"),Object(o["a"])(V,J,F,!1,null,"5753d218",null)),$=X.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[i("img",{staticClass:"footer-bg",attrs:{src:a("6952"),alt:""}}),t._m(0)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-body"},[a("div",{staticClass:"footer-body-item"},[t._v("優惠活動")]),a("div",{staticClass:"footer-body-item"},[t._v("會員中心")]),a("div",{staticClass:"footer-body-item"},[t._v("線上客服")])])}],tt={name:"Footer",computed:Object(b["a"])({},Object(f["b"])(["isToggle","isToggle"])),methods:{toggleSidebar:function(){this.isToggle&&(console.log("toggleback"),this.$store.commit("toggleSidebar"))}}},et=tt,at=(a("1bf0"),Object(o["a"])(et,K,q,!1,null,"629fdf89",null)),it=at.exports,st={name:"Home",components:{Navbar:E,Sidebar:x,Carousel:Y,System:Z,Select:L,Games:$,Footer:it}},nt=st,ct=(a("900c"),Object(o["a"])(nt,m,u,!1,null,"366d73ce",null)),lt=ct.exports;i["a"].use(g["a"]);var ot=[{path:"/",name:"Home",component:lt}],rt=new g["a"]({routes:ot}),At=rt;i["a"].use(f["a"]);var gt=new f["a"].Store({state:{isLogin:!1,isToggle:!1},mutations:{loginUser:function(t){t.isLogin=!0},logoutUser:function(t){t.isLogin=!1},toggleLabel:function(t){t.isToggle=!t.isToggle},toggleSidebar:function(t){t.isToggle=!1}},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:At,store:gt,render:function(t){return t(A)}}).$mount("#app")},5884:function(t,e,a){t.exports=a.p+"img/banner03.0c65b97e.jpg"},6952:function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QOJaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzQxMEUxQ0JCNTk0RTQxMTg3MkU5QjQ4RjA0OTNBMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUI1NTk0RjBCMjQwMTFFQkFCOEJFMTg0MURBMkM5NEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUI1NTk0RUZCMjQwMTFFQkFCOEJFMTg0MURBMkM5NEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGIyNDljYWUtYjY4ZC04MTQ2LWJmMGItNTY4OWNhOGM2YzYwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzMyZDhhNGUtNzdlYy0xMWViLWE1OGItZWVlNGRhMWNhYTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAFQAAABWEAAAWaAAAFzP/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8IAEQgAewACAwERAAIRAQMRAf/EAIEAAQEBAAAAAAAAAAAAAAAAAAECBgEBAQEBAQAAAAAAAAAAAAAAAQACBQYQAQADAAAAAAAAAAAAAAAAAEARAhIRAQEAAAAAAAAAAAAAAAAAAEAxEgEAAAAAAAAAAAAAAAAAAABAEwEBAAIBBQAAAAAAAAAAAAARABBAYSABkdHx/9oADAMBAAIRAxEAAAHMeh4sGggQpEzAhSJlCBCCJ//aAAgBAQABBQLVgf/aAAgBAgABBQIH/9oACAEDAAEFAoB//9oACAECAgY/Agf/2gAIAQMCBj8CB//aAAgBAQEGPwKg/9oACAEBAwE/IeZ50P/aAAgBAgMBPyF0P//aAAgBAwMBPyEaH//aAAwDAQACEQMRAAAQYSM6MSTe/9oACAEBAwE/EPrvczMzMzMzM5//2gAIAQIDAT8QWWZmZmZno//aAAgBAwMBPxDg7aH/2Q=="},7201:function(t,e,a){"use strict";a("f170")},7534:function(t,e,a){},"77db":function(t,e,a){t.exports=a.p+"img/fish_icon.5a4e5e70.png"},"85b6":function(t,e,a){t.exports=a.p+"img/icon_leaderboard.7158aee7.png"},"85ec":function(t,e,a){},"8b6d":function(t,e,a){t.exports=a.p+"img/electronic.c0a0b5be.png"},"900c":function(t,e,a){"use strict";a("7534")},9741:function(t,e,a){},"9c18":function(t,e,a){t.exports=a.p+"img/fish.1a42d4da.png"},"9ecf":function(t,e,a){t.exports=a.p+"img/icon_15w.849acac4.png"},a02d:function(t,e,a){t.exports=a.p+"img/icon_menu.94a4a2f6.svg"},a140:function(t,e,a){"use strict";a("f322")},b52f:function(t,e,a){t.exports=a.p+"img/bg_index.5cf74d3c.jpg"},b56c:function(t,e,a){t.exports=a.p+"img/banner05.e10d48e6.jpg"},bc7e:function(t,e,a){"use strict";a("ff07")},bdf4:function(t,e,a){t.exports=a.p+"img/header_bg.fd352e5b.jpg"},be5c:function(t,e,a){t.exports=a.p+"img/tag_soon.2fc7e357.png"},cd4d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABYCAYAAAA0lJ22AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNDEwRTFDQkI1OTRFNDExODcyRTlCNDhGMDQ5M0EwNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NEYzQTMyOUIyM0QxMUVCQjhCOUIyNTgyODhGRDk4QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NEYzQTMyOEIyM0QxMUVCQjhCOUIyNTgyODhGRDk4QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjI0OWNhZS1iNjhkLTgxNDYtYmYwYi01Njg5Y2E4YzZjNjAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMzJkOGE0ZS03N2VjLTExZWItYTU4Yi1lZWU0ZGExY2FhNjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Hq4/gAAAAWklEQVR42tTNQQ5AQBBE0c4wCMal+v4nMRYIIUSkelFJJy5g83a/KqhqF0SkBBFUpCEt6YEViQwfJI8VtZ+PpADyfx5wkgPsngVkMoLJM4MVbMT2bnDZ0SvAAMiBF3s1WtnGAAAAAElFTkSuQmCC"},d782:function(t,e,a){},d9da:function(t,e,a){t.exports=a.p+"img/live.e59711a5.png"},dbb0:function(t,e,a){t.exports=a.p+"img/sports.97b0a012.png"},eea4:function(t,e,a){},f170:function(t,e,a){},f203:function(t,e,a){"use strict";a("9741")},f322:function(t,e,a){},f970:function(t,e,a){"use strict";a("42a7")},ff07:function(t,e,a){}});
//# sourceMappingURL=app.4bcf02ba.js.map
(this["webpackJsonpcodar.dev"]=this["webpackJsonpcodar.dev"]||[]).push([[0],{14:function(e,a,n){},18:function(e,a,n){e.exports=n(31)},28:function(e,a,n){},29:function(e,a,n){},30:function(e,a,n){},31:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(16),r=n.n(o),l=(n(14),n(12)),i=n(7),s={"/":"home","/projects":"projects","/contact":"contact"};function u(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),n=a[0],o=a[1],r=Object(t.useCallback)((function(){o(!n)}),[n]);return c.a.createElement("div",{className:"nav-bar__dropdown"},c.a.createElement("div",{onClick:r,className:"nav-bar__dropdown__button",tabIndex:0},c.a.createElement("span",{className:"nav-bar__links__link--active nav-bar__links__link"},s[window.location.pathname]),c.a.createElement("span",{className:"nav-bar__dropdown__icon"})),c.a.createElement("div",{className:"nav-bar__dropdown__content".concat(n?" nav-bar__dropdown__content--open":"")},Object.keys(s).filter((function(e){return e!==window.location.pathname})).map((function(e){return c.a.createElement(m,{onClick:r,to:e},s[e])}))))}function m(e){var a=e.to,n=e.children,t=e.onClick;return c.a.createElement(i.b,{onClick:t,to:a,exact:!0,className:"nav-bar__links__link",activeClassName:"nav-bar__links__link--active"},n)}var d=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),n=a[0],o=a[1],r=Object(t.useCallback)((function(){!n&&window.innerWidth<750?o(!0):n&&window.innerWidth>750&&o(!1)}),[n]);return Object(t.useEffect)((function(){return r(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[r]),c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"nav-bar__title",onClick:function(){return o(!0)}},c.a.createElement(i.b,{to:"/",className:"nav-bar__title__text"},"codar@sam-clark"),":",n&&c.a.createElement(u,null)),!n&&c.a.createElement("div",{className:"nav-bar__links"},Object.keys(s).map((function(e){return c.a.createElement(m,{to:e},s[e])}))))},v=(n(28),d),_=n(1);var f=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("p",null,"I guess this is supposed to be a paragraph about me and what I do. Well I am Sam and I code stuff for fun, usually that stuff isn't very useful but fun. In some cases I work on open source projects to feel like I am actually doing something useful. I have some useful projects that you can check out. Most of my code is open source and MIT licenced."))},b=(n(29),f);var p=function(){return c.a.createElement("footer",{className:"footer"},"made by codar (me)")},E=(n(30),p);var h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement("div",{className:"content"},c.a.createElement(_.c,null,c.a.createElement(_.a,{exact:!0,path:"/"},c.a.createElement(b,null)),c.a.createElement(_.a,{path:"/projects"}),c.a.createElement(_.a,{path:"/contact"}))),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.dab09841.chunk.js.map
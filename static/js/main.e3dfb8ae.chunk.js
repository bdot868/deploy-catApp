(this["webpackJsonpcat-app"]=this["webpackJsonpcat-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),s=n(1);n(9);var i=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=(t[0],t[1],Object(a.useState)("Testing")),c=Object(s.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){console.log("smelly cat"),fetch("https://api.thecatapi.com/v1/images/search",{headers:{"x-api-key":"8fce7648-347f-468e-aa82-4e29c2b58538"}}).then((function(e){return e.json()})).then((function(e){console.log("Cats: ",e);var t=e[0].url;i(t)})).catch((function(e){console.log("Error: ",e)}))};return o.a.createElement("div",null,o.a.createElement("img",{className:"App",src:r,alt:""}),o.a.createElement("p",null,"The Most adorable cats ever"),o.a.createElement("button",{onClick:l},"Click Me"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.e3dfb8ae.chunk.js.map
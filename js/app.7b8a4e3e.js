(function(e){function t(t){for(var i,r,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o={app:0},a=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89af868f"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"e5cf0c8c"}[e]+".css",o=s.p+i,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===i||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===i||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var i=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[e],p.parentNode.removeChild(p),n(a)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ispy/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"14b1":function(e,t,n){},"20e8":function(e,t,n){e.exports=n.p+"img/bg.42dfd0ae.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{display:"flex","justify-content":"center",position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh"}},[n("router-view")],1)])},o=[],a=(n("034f"),n("2877")),u={},s=Object(a["a"])(u,r,o,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{style:e.scene},[i("img",{staticClass:"fixed-bg",attrs:{src:n("20e8")}}),i("ispy-poem",{attrs:{items:e.items}}),e._l(e.items,(function(t,n){return i("ispy-item",{key:t.phrase,attrs:{id:n,image:t.image,x:t.x,y:t.y,scale:e.ratio,animation:t.animation,time:t.time,clickable:e.canClick},on:{"log-item":function(t){return e.logItem(t)},"log-done":e.logDone}})}))],2)},p=[],f=(n("0d03"),n("25f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:e.containerStyle},[n("img",{class:e.animClass,style:e.itemStyle,attrs:{id:e.image,src:e.image},on:{click:e.foundItem}})])}),m=[],h=(n("a9e3"),{props:{id:{type:Number,required:!0},image:{type:String,required:!0},animation:{type:String,default:"swing"},time:{type:Number,default:2},x:{type:Number,required:!0},y:{type:Number,required:!0},jingle:{type:String,default:""},clickable:{type:Boolean,default:!0},scale:{type:Number,default:1}},data:function(){return{animating:!1,containerStyle:{position:"absolute",left:this.x*this.scale+"px",top:this.y*this.scale+"px",width:"auto",height:"auto"},itemStyle:{width:"100%",height:"100%"}}},mounted:function(){var e=this;document.getElementById(this.image).onload=function(){e.containerStyle.width=document.getElementById(e.image).naturalWidth*e.scale+"px",e.containerStyle.height=document.getElementById(e.image).naturalHeight*e.scale+"px"}},computed:{animClass:function(){return this.animating?"animated "+this.animation:""}},methods:{foundItem:function(){var e=this;this.clickable&&(this.$emit("log-item",this.id),this.animating=!0,setTimeout((function(){e.animating=!1,e.$emit("log-done")}),600*this.time))}}}),g=h,y=Object(a["a"])(g,f,m,!1,null,null,null),b=y.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("I spy")]),e._l(e.items,(function(t,i){return n("p",{key:i,class:{found:t.found}},[e._v(" "+e._s(t.phrase)+" ")])}))],2)},x=[],w={props:{items:{type:Array,required:!0}}},_=w,S=(n("dd4f"),Object(a["a"])(_,v,x,!1,null,"e40af300",null)),j=S.exports,k={components:{"ispy-item":b,"ispy-poem":j},data:function(){return{canClick:!0,items:[{phrase:"domo,",image:n("8bdd"),x:715,y:356,animation:"fadeIn",time:1,found:!1},{phrase:"a star,",image:n("88da"),x:1395,y:890,animation:"heartBeat",found:!1},{phrase:"pequeña",image:n("9120"),x:174,y:418,found:!1}]}},methods:{logItem:function(e){this.canClick&&(this.items[e].found=!0,this.canClick=!1)},logDone:function(){this.canClick=!0}},computed:{ratio:function(){var e=Math.min(1920,window.innerWidth),t=Math.min(1080,window.innerHeight),n=Math.min(e/1920,t/1080);return n},scene:function(){return{width:(1920*this.ratio).toString(10)+"px",height:(1080*this.ratio).toString(10)+"px",position:"relative"}}}},E=k,O=Object(a["a"])(E,d,p,!1,null,null,null),C=O.exports;i["a"].use(l["a"]);var I=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"bb51"))}}],N=new l["a"]({mode:"history",base:"/ispy/",routes:I}),P=N;n("77ed");i["a"].config.productionTip=!1,new i["a"]({router:P,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},"88da":function(e,t,n){e.exports=n.p+"img/star.4ce3da5e.png"},"8bdd":function(e,t,n){e.exports=n.p+"img/domo.b82beab2.jpg"},9120:function(e,t,n){e.exports=n.p+"img/pequena.f51a5d63.png"},dd4f:function(e,t,n){"use strict";var i=n("14b1"),r=n.n(i);r.a}});
//# sourceMappingURL=app.7b8a4e3e.js.map
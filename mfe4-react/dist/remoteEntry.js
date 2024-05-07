var mfe4;(()=>{"use strict";var e,r,t,n,a,o,i,u,l,f,s,d,h,c,p,v={628:(e,r,t)=>{var n={"./web-components":()=>Promise.all([t.e(547),t.e(770),t.e(259)]).then((()=>()=>t(295)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},m={};function b(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={exports:{}};return v[e](t,t.exports,b),t.exports}b.m=v,b.c=m,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+".bundle.js",b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="mfe4:",b.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var o=b.S[t],i="mfe4",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(u("react-dom","18.2.0",(()=>Promise.all([b.e(961),b.e(770)]).then((()=>()=>b(961))))),u("react","18.2.0",(()=>b.e(540).then((()=>()=>b(540)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),b.p="http://localhost:4204/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var f,s,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!l||("u"==d?u>n&&!o:""==d!=o);if("u"==s){if(!l||"u"!=d)return!1}else if(l)if(d==s)if(u<=n){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||s<d!=o)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var h=[],c=h.pop.bind(h);for(i=1;i<e.length;i++){var p=e[i];h.push(1==p?c()|c():2==p?c()&c():p?a(p,r):!c())}return!!c()},o=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},i=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},u=e=>(e.loaded=1,e.get()),f=(l=e=>function(r,t,n,a){var o=b.I(r);return o&&o.then?o.then(e.bind(e,r,b.S[r],t,n,a)):e(r,b.S[r],t,n,a)})(((e,r,t,n)=>r&&b.o(r,t)?u(o(r,t)):n())),s=l(((e,r,t,n,a)=>{var o=r&&b.o(r,t)&&i(r,t,n);return o?u(o):a()})),d={},h={770:()=>s("default","react",[1,18,2,0],(()=>b.e(540).then((()=>()=>b(540))))),31:()=>f("default","react-dom",(()=>b.e(961).then((()=>()=>b(961))))),111:()=>s("default","react",[0,16,8],(()=>b.e(540).then((()=>()=>b(540))))),709:()=>s("default","react-dom",[1,18,2,0],(()=>b.e(961).then((()=>()=>b(961)))))},c={259:[31,111,709],770:[770]},p={},b.f.consumes=(e,r)=>{b.o(c,e)&&c[e].forEach((e=>{if(b.o(d,e))return r.push(d[e]);if(!p[e]){var t=r=>{d[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}};p[e]=!0;var n=r=>{delete d[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var a=h[e]();a.then?r.push(d[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}}))},(()=>{var e={609:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(770!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=b.p+b.u(r),i=new Error;b.l(o,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,i,u]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)b.o(i,n)&&(b.m[n]=i[n]);u&&u(b)}for(r&&r(t);l<o.length;l++)a=o[l],b.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkmfe4=self.webpackChunkmfe4||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var g=b(628);mfe4=g})();
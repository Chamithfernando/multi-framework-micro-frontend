/*! For license information please see 547.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmfe4=self.webpackChunkmfe4||[]).push([[547],{588:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var a;n.d(t,{AO:()=>h,Gh:()=>B,HS:()=>j,Oi:()=>l,Rr:()=>p,TM:()=>i,pX:()=>A,pb:()=>P,rc:()=>a,sd:()=>L,tH:()=>N,ue:()=>f}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function i(e){return void 0===e&&(e={}),function(e,t,n,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:p=!1}=i,d=s.history,f=a.Pop,m=null,v=g();function g(){return(d.state||{idx:null}).idx}function y(){f=a.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:x.location,delta:t})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:h(e);return l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,d.replaceState(r({},d.state,{idx:v}),""));let x={get action(){return f},get location(){return e(s,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(o,y),m=e,()=>{s.removeEventListener(o,y),m=null}},createHref:e=>t(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let r=c(x.location,e,t);n&&n(r,e),v=g()+1;let o=u(r,v),i=x.createHref(r);try{d.pushState(o,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;s.location.assign(i)}p&&m&&m({action:f,location:x.location,delta:1})},replace:function(e,t){f=a.Replace;let r=c(x.location,e,t);n&&n(r,e),v=g();let o=u(r,v),i=x.createHref(r);d.replaceState(o,"",i),p&&m&&m({action:f,location:x.location,delta:0})},go:e=>d.go(e)};return x}((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=p(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:h(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function l(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,a){return void 0===n&&(n=null),r({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:n,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var d;function f(e,t,n){void 0===n&&(n="/");let r=P(("string"==typeof t?p(t):t).pathname||"/",n);if(null==r)return null;let a=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=S(a[e],U(r));return o}function m(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=j([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),m(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of v(e.path))a(e,t,n);else a(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=v(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(d||(d={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const g=/^:\w+$/,y=3,b=2,x=1,w=10,R=-2,C=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=R),t&&(r+=b),n.filter((e=>!C(e))).reduce(((e,t)=>e+(g.test(t)?y:""===t?x:w)),r)}function S(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let e=0;e<n.length;++e){let i=n[e],l=e===n.length-1,s="/"===a?t:t.slice(a.length)||"/",u=O({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!u)return null;Object.assign(r,u.params);let c=i.route;o.push({params:r,pathname:j([a,u.pathname]),pathnameBase:$(j([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=j([a,u.pathnameBase]))}return o}function O(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));return e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return s(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(l[n]||"",t),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function U(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function k(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function L(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function B(e,t,n,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=p(e):(o=r({},e),l(!o.pathname||!o.pathname.includes("?"),k("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),k("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),k("#","search","hash",o)));let i,s=""===e||""===o.pathname,u=s?"/":o.pathname;if(a||null==u)i=n;else{let e=t.length-1;if(u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:W(r),hash:D(a)}}(o,i),h=u&&"/"!==u&&u.endsWith("/"),d=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!h&&!d||(c.pathname+="/"),c}const j=e=>e.join("/").replace(/\/\/+/g,"/"),$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class N extends Error{}function A(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const T=["post","put","patch","delete"],I=(new Set(T),["get",...T]);new Set(I),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred")},338:(e,t,n)=>{var r=n(31);t.H=r.createRoot,r.hydrateRoot},976:(e,t,n)=>{n.d(t,{I9:()=>u,N_:()=>p});var r=n(111),a=n(767),o=n(588);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const l=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],s=r.startTransition;function u(e){let{basename:t,children:n,future:i,window:l}=e,u=r.useRef();null==u.current&&(u.current=(0,o.TM)({window:l,v5Compat:!0}));let c=u.current,[h,p]=r.useState({action:c.action,location:c.location}),{v7_startTransition:d}=i||{},f=r.useCallback((e=>{d&&s?s((()=>p(e))):p(e)}),[p,d]);return r.useLayoutEffect((()=>c.listen(f)),[c,f]),r.createElement(a.Ix,{basename:t,children:n,location:h.location,navigationType:h.action,navigator:c})}const c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,h=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p=r.forwardRef((function(e,t){let n,{onClick:s,relative:u,reloadDocument:p,replace:d,state:f,target:m,to:v,preventScrollReset:g}=e,y=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l),{basename:b}=r.useContext(a.jb),x=!1;if("string"==typeof v&&h.test(v)&&(n=v,c))try{let e=new URL(window.location.href),t=v.startsWith("//")?new URL(e.protocol+v):new URL(v),n=(0,o.pb)(t.pathname,b);t.origin===e.origin&&null!=n?v=n+t.search+t.hash:x=!0}catch(e){}let w=(0,a.$P)(v,{relative:u}),R=function(e,t){let{target:n,replace:i,state:l,preventScrollReset:s,relative:u}=void 0===t?{}:t,c=(0,a.Zp)(),h=(0,a.zy)(),p=(0,a.x$)(e,{relative:u});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==i?i:(0,o.AO)(h)===(0,o.AO)(p);c(e,{replace:n,state:l,preventScrollReset:s,relative:u})}}),[h,c,p,i,l,n,e,s,u])}(v,{replace:d,state:f,target:m,preventScrollReset:g,relative:u});return r.createElement("a",i({},y,{href:n||w,onClick:x||p?s:function(e){s&&s(e),e.defaultPrevented||R(e)},ref:t,target:m}))}));var d,f;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(d||(d={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(f||(f={}))},767:(e,t,n)=>{n.d(t,{$P:()=>p,BV:()=>L,Ix:()=>k,Zp:()=>v,jb:()=>s,qh:()=>P,sv:()=>U,x$:()=>y,zy:()=>f});var r=n(111),a=n(588);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=r.createContext(null),l=r.createContext(null),s=r.createContext(null),u=r.createContext(null),c=r.createContext({outlet:null,matches:[],isDataRoute:!1}),h=r.createContext(null);function p(e,t){let{relative:n}=void 0===t?{}:t;d()||(0,a.Oi)(!1);let{basename:o,navigator:i}=r.useContext(s),{hash:l,pathname:u,search:c}=y(e,{relative:n}),h=u;return"/"!==o&&(h="/"===u?o:(0,a.HS)([o,u])),i.createHref({pathname:h,search:c,hash:l})}function d(){return null!=r.useContext(u)}function f(){return d()||(0,a.Oi)(!1),r.useContext(u).location}function m(e){r.useContext(s).static||r.useLayoutEffect(e)}function v(){let{isDataRoute:e}=r.useContext(c);return e?function(){let{router:e}=function(e){let t=r.useContext(i);return t||(0,a.Oi)(!1),t}(E.UseNavigateStable),t=O(S.UseNavigateStable),n=r.useRef(!1);return m((()=>{n.current=!0})),r.useCallback((function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,o({fromRouteId:t},a)))}),[e,t])}():function(){d()||(0,a.Oi)(!1);let e=r.useContext(i),{basename:t,navigator:n}=r.useContext(s),{matches:o}=r.useContext(c),{pathname:l}=f(),u=JSON.stringify((0,a.sd)(o).map((e=>e.pathnameBase))),h=r.useRef(!1);return m((()=>{h.current=!0})),r.useCallback((function(r,o){if(void 0===o&&(o={}),!h.current)return;if("number"==typeof r)return void n.go(r);let i=(0,a.Gh)(r,JSON.parse(u),l,"path"===o.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.HS)([t,i.pathname])),(o.replace?n.replace:n.push)(i,o.state,o)}),[t,n,u,l,e])}()}const g=r.createContext(null);function y(e,t){let{relative:n}=void 0===t?{}:t,{matches:o}=r.useContext(c),{pathname:i}=f(),l=JSON.stringify((0,a.sd)(o).map((e=>e.pathnameBase)));return r.useMemo((()=>(0,a.Gh)(e,JSON.parse(l),i,"path"===n)),[e,l,i,n])}function b(e,t,n){d()||(0,a.Oi)(!1);let{navigator:i}=r.useContext(s),{matches:l}=r.useContext(c),h=l[l.length-1],p=h?h.params:{},m=(h&&h.pathname,h?h.pathnameBase:"/");h&&h.route;let v,g=f();if(t){var y;let e="string"==typeof t?(0,a.Rr)(t):t;"/"===m||(null==(y=e.pathname)?void 0:y.startsWith(m))||(0,a.Oi)(!1),v=e}else v=g;let b=v.pathname||"/",x="/"===m?b:b.slice(m.length)||"/",E=(0,a.ue)(e,{pathname:x}),S=function(e,t,n){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){var i;if(null==(i=n)||!i.errors)return null;e=n.matches}let l=e,s=null==(o=n)?void 0:o.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||(0,a.Oi)(!1),l=l.slice(0,Math.min(l.length,e+1))}return l.reduceRight(((e,a,o)=>{let i=a.route.id?null==s?void 0:s[a.route.id]:null,u=null;n&&(u=a.route.errorElement||w);let c=t.concat(l.slice(0,o+1)),h=()=>{let t;return t=i?u:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(C,{match:a,routeContext:{outlet:e,matches:c,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(R,{location:n.location,revalidation:n.revalidation,component:u,error:i,children:h(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):h()}),null)}(E&&E.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:(0,a.HS)([m,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,a.HS)([m,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,n);return t&&S?r.createElement(u.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:a.rc.Pop}},S):S}function x(){let e=function(){var e;let t=r.useContext(h),n=function(e){let t=r.useContext(l);return t||(0,a.Oi)(!1),t}(S.UseRouteError),o=O(S.UseRouteError);return t||(null==(e=n.errors)?void 0:e[o])}(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const w=r.createElement(x,null);class R extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?r.createElement(c.Provider,{value:this.props.routeContext},r.createElement(h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(i);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(c.Provider,{value:t},a)}var E=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(E||{}),S=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S||{});function O(e){let t=function(e){let t=r.useContext(c);return t||(0,a.Oi)(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||(0,a.Oi)(!1),n.route.id}function U(e){return function(e){let t=r.useContext(c).outlet;return t?r.createElement(g.Provider,{value:e},t):t}(e.context)}function P(e){(0,a.Oi)(!1)}function k(e){let{basename:t="/",children:n=null,location:o,navigationType:i=a.rc.Pop,navigator:l,static:c=!1}=e;d()&&(0,a.Oi)(!1);let h=t.replace(/^\/*/,"/"),p=r.useMemo((()=>({basename:h,navigator:l,static:c})),[h,l,c]);"string"==typeof o&&(o=(0,a.Rr)(o));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=o,b=r.useMemo((()=>{let e=(0,a.pb)(f,h);return null==e?null:{location:{pathname:e,search:m,hash:v,state:g,key:y},navigationType:i}}),[h,f,m,v,g,y,i]);return null==b?null:r.createElement(s.Provider,{value:p},r.createElement(u.Provider,{children:n,value:b}))}function L(e){let{children:t,location:n}=e;return b(B(t),n)}function B(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,o)=>{if(!r.isValidElement(e))return;let i=[...t,o];if(e.type===r.Fragment)return void n.push.apply(n,B(e.props.children,i));e.type!==P&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=B(e.props.children,i)),n.push(l)})),n}r.startTransition,new Promise((()=>{})),r.Component}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{3704:function(e,t,n){Promise.resolve().then(n.bind(n,6028)),Promise.resolve().then(n.t.bind(n,2249,23)),Promise.resolve().then(n.t.bind(n,4599,23))},6028:function(e,t,n){"use strict";n.d(t,{Video:function(){return i}});var l=n(749),r=n(8599),o=n(266);let u=n.n(o)()(async()=>n.e(426).then(n.t.bind(n,6629,23)),{loadableGenerated:{webpack:()=>[6629]},ssr:!1}),i=e=>{let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,r.cn)("relative aspect-video overflow-hidden rounded",t),children:(0,l.jsx)(u,{...n,width:"100%",height:"100%",style:{position:"absolute",inset:0}})})}},8599:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var l=n(2777),r=n(3749);let o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,l.W)(t))}},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(2747);n(749),n(1943);let r=l._(n(2741));function o(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let o={...l,...t};return(0,r.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(9571);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},2741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let l=n(749),r=n(1943),o=n(6365),u=n(3743);function i(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let t={...s,...e},n=(0,r.lazy)(()=>t.loader().then(i)),d=t.loading;function a(e){let i=d?(0,l.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,s=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(u.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(r.Suspense,{fallback:i,children:s})}return a.displayName="LoadableComponent",a}},3743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let l=n(749),r=n(5296);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[599,358,249,868,139,744],function(){return e(e.s=3704)}),_N_E=e.O()}]);
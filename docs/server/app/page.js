(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9741:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>l}),r(8800),r(127),r(5133);var n=r(9193),a=r(1854),s=r(3997),o=r.n(s),i=r(3320),u={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>i[e]);r.d(t,u);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8800)),"C:\\Users\\danie\\projects\\training\\Azure-auth\\nextjs-azure-auth-challenge\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,801))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,127)),"C:\\Users\\danie\\projects\\training\\Azure-auth\\nextjs-azure-auth-challenge\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5133,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,801))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\danie\\projects\\training\\Azure-auth\\nextjs-azure-auth-challenge\\app\\page.tsx"],d="/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},975:(e,t,r)=>{Promise.resolve().then(r.bind(r,9178))},9604:(e,t,r)=>{Promise.resolve().then(r.bind(r,8908))},8331:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9388,23)),Promise.resolve().then(r.t.bind(r,1152,23)),Promise.resolve().then(r.t.bind(r,2764,23)),Promise.resolve().then(r.t.bind(r,6894,23)),Promise.resolve().then(r.t.bind(r,3299,23)),Promise.resolve().then(r.t.bind(r,184,23))},9178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(7486),a=r(8165),s=r(8908),o=r(7610),i=r(153);function u(){let{account:e}=(0,s.Eu)();return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h1",{children:"Home page"}),e&&(0,n.jsxs)("h2",{children:["Welcome ",n.jsx("i",{children:e.name}),"!"]}),(0,n.jsxs)("p",{children:["Navigate to the ",n.jsx(a.default,{href:"/secure-page",children:"secure page"})]}),n.jsx("p",{children:e?n.jsx(i.s,{}):n.jsx(o.T,{})})]})}},8440:(e,t,r)=>{"use strict";r.d(t,{v:()=>a});var n=r(1514);async function a(){let e=`${window.location.origin}/azure-auth-fe-only-challenge/`,t={auth:{clientId:process.env.NEXT_PUBLIC_AZURE_CLIENT_ID,redirectUri:e,authority:"https://login.microsoftonline.com/consumers",postLogoutRedirectUri:e},cache:{cacheLocation:"localStorage"}};return await n.G0(t)}},8908:(e,t,r)=>{"use strict";r.d(t,{AuthContextProvider:()=>u,Eu:()=>i});var n=r(7486),a=r(618);let s={account:null,setAccount:()=>null},o=(0,a.createContext)(s);function i(){return(0,a.useContext)(o)}function u({children:e}){let[t,r]=(0,a.useState)(null),[i,u]=(0,a.useState)(s);return n.jsx(o.Provider,{value:i,children:e})}},7610:(e,t,r)=>{"use strict";r.d(t,{T:()=>u});var n=r(7486),a=r(8440),s=r(8908),o=r(840),i=r.n(o);function u(){let{setAccount:e}=(0,s.Eu)();return n.jsx("button",{className:i().LogInButton,onClick:async()=>{try{let t=await (0,a.v)(),r=await t.loginPopup();e(r.account)}catch(t){alert("Login failed"),e(null),console.error(t)}},children:"Login"})}},153:(e,t,r)=>{"use strict";r.d(t,{s:()=>l});var n=r(7486),a=r(6811),s=r(8440),o=r(8908),i=r(840),u=r.n(i);function l(){let{setAccount:e}=(0,o.Eu)(),t=(0,a.useRouter)();return n.jsx("button",{className:u().LogInButton,onClick:async()=>{try{let r=await (0,s.v)();await r.logoutPopup(),e(null),setTimeout(()=>{t.push("/")})}catch(e){alert("Logout failed"),console.error(e)}},children:"Logout"})}},840:e=>{e.exports={LogInButton:"LogInButton_LogInButton__iL0Wj"}},127:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,metadata:()=>d});var n=r(9703),a=r(6717),s=r.n(a);r(3121);var o=r(2334);let i=(0,o.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\components\AuthContext.tsx`),{__esModule:u,$$typeof:l}=i;i.default,(0,o.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\components\AuthContext.tsx#defaultAuthContext`),(0,o.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\components\AuthContext.tsx#authContext`),(0,o.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\components\AuthContext.tsx#useAuthContext`);let c=(0,o.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\components\AuthContext.tsx#AuthContextProvider`),d={title:{template:"%s | Azure Auth Challenge",default:"Azure Auth Challenge"},description:"Creating an Next.js App that uses MSLA authentication that runs in GitHub Pages."};function h({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:s().className,children:n.jsx("main",{children:n.jsx(c,{children:e})})})})}},8800:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>s,default:()=>i});var n=r(2334);let a=(0,n.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\app\page.tsx`),{__esModule:s,$$typeof:o}=a;a.default;let i=(0,n.createProxy)(String.raw`C:\Users\danie\projects\training\Azure-auth\nextjs-azure-auth-challenge\app\page.tsx#default`)},801:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(9614);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)("/azure-auth-on-github-pages",e.params,"favicon.ico")+""}]},3121:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[357,336,20],()=>r(9741));module.exports=n})();
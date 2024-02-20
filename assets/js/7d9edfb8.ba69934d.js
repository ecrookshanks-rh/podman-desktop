"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90125],{81245:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(24246),i=s(71670);const o={},a="Function: listImages()",r={id:"namespaces/containerEngine/functions/listImages",title:"Function: listImages()",description:"listImages(): Promise\\",source:"@site/api/namespaces/containerEngine/functions/listImages.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/listImages",permalink:"/api/namespaces/containerEngine/functions/listImages",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Function: listContainers()",permalink:"/api/namespaces/containerEngine/functions/listContainers"},next:{title:"Function: listNetworks()",permalink:"/api/namespaces/containerEngine/functions/listNetworks"}},c={},l=[{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"function-listimages",children:"Function: listImages()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"listImages"}),"(): ",(0,t.jsx)(n.code,{children:"Promise"}),"< ",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageInfo",children:(0,t.jsx)(n.code,{children:"ImageInfo"})}),"[] >"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"List the container images across all container engines. Only images from a final layer (no children) are returned."}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"< ",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageInfo",children:(0,t.jsx)(n.code,{children:"ImageInfo"})}),"[] >"]}),"\n",(0,t.jsxs)(n.p,{children:["A promise resolving to an array of images information. This method returns a subset of the available information for images. To get the complete description of a specific image, you can use the ",(0,t.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/getImageInspect",children:"containerEngine.getImageInspect"})," method."]}),"\n",(0,t.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2791",children:"packages/extension-api/src/extension-api.d.ts:2791"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(27378);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
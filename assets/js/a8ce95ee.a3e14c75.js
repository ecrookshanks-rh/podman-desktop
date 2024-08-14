"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97159],{20268:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(24246),r=i(71670);const o={sidebar_position:22,title:"Pulling an image",description:"Pulling an image to your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},t="Pulling an image to your container engine",l={id:"containers/images/pulling-an-image",title:"Pulling an image",description:"Pulling an image to your container engine.",source:"@site/docs/containers/images/pulling-an-image.md",sourceDirName:"containers/images",slug:"/containers/images/pulling-an-image",permalink:"/docs/containers/images/pulling-an-image",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/containers/images/pulling-an-image.md",tags:[{inline:!0,label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"Pulling an image",description:"Pulling an image to your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},sidebar:"mySidebar",previous:{title:"Pushing an image to a registry",permalink:"/docs/containers/images/pushing-an-image-to-a-registry"},next:{title:"Containers",permalink:"/docs/containers/starting-a-container"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"pulling-an-image-to-your-container-engine",children:"Pulling an image to your container engine"})}),"\n",(0,s.jsx)(n.p,{children:"With Podman Desktop, you can pull an image from a registry, to your container engine."}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The image is available in a registry."}),"\n",(0,s.jsxs)(n.li,{children:["If the registry or the image are not publicly available, you configured access to the registry on Podman Desktop in ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Images"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"Image to Pull"})," screen:","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image to pull"}),": enter the image name, such as ",(0,s.jsx)(n.code,{children:"quay.io/podman/hello"}),". Prefer the fully qualified image name that specifies the registry, to the short name that might lead to registry resolution mistakes."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Pull image"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Images"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the image name you pulled, such as ",(0,s.jsx)(n.code,{children:"quay.io/podman/hello"}),". Podman Desktop always displays the fully qualified image name."]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Summary"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"History"}),".","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Click the output area."}),"\n",(0,s.jsxs)(n.li,{children:["Enter ",(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"F"})," on Windows and Linux, or ",(0,s.jsx)("kbd",{children:"\u2318"})," + ",(0,s.jsx)("kbd",{children:"F"})," on macOS to start searching in the content."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Inspect"}),".","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Click the output area."}),"\n",(0,s.jsxs)(n.li,{children:["Enter ",(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"F"})," on Windows and Linux, or ",(0,s.jsx)("kbd",{children:"\u2318"})," + ",(0,s.jsx)("kbd",{children:"F"})," on macOS to start searching in the content."]}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var s=i(27378);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44958],{76055:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var s=n(24246),t=n(71670);const a={},d="Interface: ImageFilesystemLayer",r={id:"interfaces/ImageFilesystemLayer",title:"Interface: ImageFilesystemLayer",description:"a filesystem layer of an image as defined by spec",source:"@site/api/interfaces/ImageFilesystemLayer.md",sourceDirName:"interfaces",slug:"/interfaces/ImageFilesystemLayer",permalink:"/api/interfaces/ImageFilesystemLayer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"ImageFilesProviderMetadata",permalink:"/api/interfaces/ImageFilesProviderMetadata"},next:{title:"ImageFilesystemLayers",permalink:"/api/interfaces/ImageFilesystemLayers"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"createdBy?",id:"createdby",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"files?",id:"files",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"opaqueWhiteouts?",id:"opaquewhiteouts",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"whiteouts?",id:"whiteouts",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"interface-imagefilesystemlayer",children:"Interface: ImageFilesystemLayer"})}),"\n",(0,s.jsxs)(i.p,{children:["a filesystem layer of an image as defined by ",(0,s.jsx)(i.a,{href:"https://github.com/opencontainers/image-spec/blob/main/spec.md",children:"spec"})]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"createdby",children:"createdBy?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"createdBy"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"the command which created the layer"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L762",children:"packages/extension-api/src/extension-api.d.ts:762"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"files",children:"files?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"files"}),": ",(0,s.jsx)(i.a,{href:"/api/interfaces/ImageFile",children:(0,s.jsx)(i.code,{children:"ImageFile"})}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"files indicate the paths of the files added or modified in the layer"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L766",children:"packages/extension-api/src/extension-api.d.ts:766"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"id",children:"id"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"id"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"unique id of the layer"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L758",children:"packages/extension-api/src/extension-api.d.ts:758"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"opaquewhiteouts",children:"opaqueWhiteouts?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"opaqueWhiteouts"}),": ",(0,s.jsx)(i.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"opaque whiteouts indicate the directories in which the content has to be completely deleted from previous layers."}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L774",children:"packages/extension-api/src/extension-api.d.ts:774"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"whiteouts",children:"whiteouts?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"whiteouts"}),": ",(0,s.jsx)(i.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"whiteouts indicate the paths of the files to be deleted from previous layers."}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L770",children:"packages/extension-api/src/extension-api.d.ts:770"})})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},71670:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>d});var s=n(27378);const t={},a=s.createContext(t);function d(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);
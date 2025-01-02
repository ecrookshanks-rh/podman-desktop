"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51023],{75569:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"interfaces/ImageFilesystemLayer","title":"Interface: ImageFilesystemLayer","description":"Defined in889","source":"@site/api/interfaces/ImageFilesystemLayer.md","sourceDirName":"interfaces","slug":"/interfaces/ImageFilesystemLayer","permalink":"/api/interfaces/ImageFilesystemLayer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ImageFileSymlink","permalink":"/api/interfaces/ImageFileSymlink"},"next":{"title":"ImageFilesystemLayers","permalink":"/api/interfaces/ImageFilesystemLayers"}}');var t=n(62540),r=n(43023);const d={},a="Interface: ImageFilesystemLayer",c={},o=[{value:"Properties",id:"properties",level:2},{value:"createdBy?",id:"createdby",level:3},{value:"files?",id:"files",level:3},{value:"id",id:"id",level:3},{value:"opaqueWhiteouts?",id:"opaquewhiteouts",level:3},{value:"whiteouts?",id:"whiteouts",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"interface-imagefilesystemlayer",children:"Interface: ImageFilesystemLayer"})}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L889",children:"packages/extension-api/src/extension-api.d.ts:889"})]}),"\n",(0,t.jsxs)(s.p,{children:["a filesystem layer of an image as defined by ",(0,t.jsx)(s.a,{href:"https://github.com/opencontainers/image-spec/blob/main/spec.md",children:"spec"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"createdby",children:"createdBy?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"createdBy"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L897",children:"packages/extension-api/src/extension-api.d.ts:897"})]}),"\n",(0,t.jsx)(s.p,{children:"the command which created the layer"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"files",children:"files?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"files"}),": ",(0,t.jsx)(s.a,{href:"/api/interfaces/ImageFile",children:(0,t.jsx)(s.code,{children:"ImageFile"})}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L901",children:"packages/extension-api/src/extension-api.d.ts:901"})]}),"\n",(0,t.jsx)(s.p,{children:"files indicate the paths of the files added or modified in the layer"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"id",children:"id"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"id"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L893",children:"packages/extension-api/src/extension-api.d.ts:893"})]}),"\n",(0,t.jsx)(s.p,{children:"unique id of the layer"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"opaquewhiteouts",children:"opaqueWhiteouts?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"opaqueWhiteouts"}),": ",(0,t.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L909",children:"packages/extension-api/src/extension-api.d.ts:909"})]}),"\n",(0,t.jsx)(s.p,{children:"opaque whiteouts indicate the directories in which the content has to be completely deleted from previous layers."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"whiteouts",children:"whiteouts?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"whiteouts"}),": ",(0,t.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Defined in: ",(0,t.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L905",children:"packages/extension-api/src/extension-api.d.ts:905"})]}),"\n",(0,t.jsx)(s.p,{children:"whiteouts indicate the paths of the files to be deleted from previous layers."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var i=n(63696);const t={},r=i.createContext(t);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);
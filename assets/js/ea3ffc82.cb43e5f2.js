"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21181],{65268:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(24246),r=s(71670);const i={},o="Interface: ExtensionContext",c={id:"interfaces/ExtensionContext",title:"Interface: ExtensionContext",description:"Properties",source:"@site/api/interfaces/ExtensionContext.md",sourceDirName:"interfaces",slug:"/interfaces/ExtensionContext",permalink:"/api/interfaces/ExtensionContext",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: Event()\\<T\\>",permalink:"/api/interfaces/Event"},next:{title:"Interface: FileSystemWatcher",permalink:"/api/interfaces/FileSystemWatcher"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"extensionUri",id:"extensionuri",level:3},{value:"Source",id:"source",level:4},{value:"secrets",id:"secrets",level:3},{value:"Source",id:"source-1",level:4},{value:"storagePath",id:"storagepath",level:3},{value:"Source",id:"source-2",level:4},{value:"subscriptions",id:"subscriptions",level:3},{value:"Source",id:"source-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"interface-extensioncontext",children:"Interface: ExtensionContext"}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"extensionuri",children:"extensionUri"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"extensionUri"}),": ",(0,t.jsx)(n.a,{href:"/api/classes/Uri",children:(0,t.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The uri of the directory containing the extension."}),"\n",(0,t.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6cc0a3041ebd36fbed501ecdf3878e2f6da4e499/packages/extension-api/src/extension-api.d.ts#L146",children:"packages/extension-api/src/extension-api.d.ts:146"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"secrets",children:"secrets"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"secrets"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/SecretStorage",children:(0,t.jsx)(n.code,{children:"SecretStorage"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A storage utility for secrets. Secrets are persisted across reloads."}),"\n",(0,t.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6cc0a3041ebd36fbed501ecdf3878e2f6da4e499/packages/extension-api/src/extension-api.d.ts#L151",children:"packages/extension-api/src/extension-api.d.ts:151"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"storagepath",children:"storagePath"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"storagePath"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An absolute file path in which the extension can store state.\nThe directory might not exist on disk and creation is\nup to the extension."}),"\n",(0,t.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6cc0a3041ebd36fbed501ecdf3878e2f6da4e499/packages/extension-api/src/extension-api.d.ts#L141",children:"packages/extension-api/src/extension-api.d.ts:141"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"subscriptions",children:"subscriptions"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"subscriptions"}),": ",(0,t.jsx)(n.code,{children:"object"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6cc0a3041ebd36fbed501ecdf3878e2f6da4e499/packages/extension-api/src/extension-api.d.ts#L134",children:"packages/extension-api/src/extension-api.d.ts:134"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(27378);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
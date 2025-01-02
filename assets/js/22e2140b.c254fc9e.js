"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16115],{97623:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"type-aliases/ProviderResult","title":"Type Alias: ProviderResult\\\\<T\\\\>","description":"ProviderResult\\\\: T \\\\| undefined \\\\| Promise\\\\","source":"@site/api/type-aliases/ProviderResult.md","sourceDirName":"type-aliases","slug":"/type-aliases/ProviderResult","permalink":"/api/type-aliases/ProviderResult","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ProviderLinks","permalink":"/api/type-aliases/ProviderLinks"},"next":{"title":"ProviderStatus","permalink":"/api/type-aliases/ProviderStatus"}}');var t=n(62540),i=n(43023);const a={},o="Type Alias: ProviderResult<T>",c={},d=[{value:"Type Parameters",id:"type-parameters",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"type-alias-providerresultt",children:"Type Alias: ProviderResult<T>"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"ProviderResult"}),"<",(0,t.jsx)(r.code,{children:"T"}),">: ",(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"undefined"})," | ",(0,t.jsx)(r.code,{children:"Promise"}),"<",(0,t.jsx)(r.code,{children:"T"})," | ",(0,t.jsx)(r.code,{children:"undefined"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Defined in: ",(0,t.jsx)(r.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/c0227fdd152e57f0dfe900ced9b6d3135023a7d5/packages/extension-api/src/extension-api.d.ts#L308",children:"packages/extension-api/src/extension-api.d.ts:308"})]}),"\n",(0,t.jsxs)(r.p,{children:["A provider result represents the values a provider, like the ",(0,t.jsx)(r.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,t.jsx)(r.code,{children:"ImageCheckerProvider"})}),",\nmay return. For once this is the actual result type ",(0,t.jsx)(r.code,{children:"T"}),", like ",(0,t.jsx)(r.code,{children:"ImageChecks"}),", or a Promise that resolves\nto that type ",(0,t.jsx)(r.code,{children:"T"}),". In addition, ",(0,t.jsx)(r.code,{children:"null"})," and ",(0,t.jsx)(r.code,{children:"undefined"})," can be returned - either directly or from a\nPromise."]}),"\n",(0,t.jsxs)(r.p,{children:["The snippets below are all valid implementations of the ",(0,t.jsx)(r.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,t.jsx)(r.code,{children:"ImageCheckerProvider"})}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"let a: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n   return new ImageChecks();\n }\n\nlet b: ImageCheckerProvider = {\n async check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn new ImageChecks();\n\t}\n}\n\nlet c: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn; // undefined\n\t}\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"T"})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(63696);const t={},i=s.createContext(t);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90681],{36533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=s(24246),i=s(71670);const c={},d="Interface: RunError",o={id:"interfaces/RunError",title:"Interface: RunError",description:"Represents an error that occurred during the execution of a command.",source:"@site/api/interfaces/RunError.md",sourceDirName:"interfaces",slug:"/interfaces/RunError",permalink:"/api/interfaces/RunError",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"RegistrySuggestedProvider",permalink:"/api/interfaces/RegistrySuggestedProvider"},next:{title:"RunOptions",permalink:"/api/interfaces/RunOptions"}},t={},l=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelled",id:"cancelled",level:3},{value:"Source",id:"source",level:4},{value:"cause?",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Source",id:"source-1",level:4},{value:"command",id:"command",level:3},{value:"Source",id:"source-2",level:4},{value:"exitCode",id:"exitcode",level:3},{value:"Source",id:"source-3",level:4},{value:"killed",id:"killed",level:3},{value:"Source",id:"source-4",level:4},{value:"message",id:"message",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Source",id:"source-5",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Source",id:"source-6",level:4},{value:"stack?",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Source",id:"source-7",level:4},{value:"stderr",id:"stderr",level:3},{value:"Source",id:"source-8",level:4},{value:"stdout",id:"stdout",level:3},{value:"Source",id:"source-9",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interface-runerror",children:"Interface: RunError"}),"\n",(0,r.jsx)(n.p,{children:"Represents an error that occurred during the execution of a command."}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Error"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"cancelled",children:"cancelled"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"cancelled"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the execution was cancelled."}),"\n",(0,r.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3828",children:"packages/extension-api/src/extension-api.d.ts:3828"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"cause",children:"cause?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"cause"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.cause"})}),"\n",(0,r.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"node_modules/typescript/lib/lib.es2022.error.d.ts:24"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"command"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The command that was executed."}),"\n",(0,r.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3813",children:"packages/extension-api/src/extension-api.d.ts:3813"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"exitcode",children:"exitCode"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"exitCode"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The exit code of the command."}),"\n",(0,r.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3808",children:"packages/extension-api/src/extension-api.d.ts:3808"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"killed",children:"killed"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"killed"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the process was forcefully killed."}),"\n",(0,r.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3833",children:"packages/extension-api/src/extension-api.d.ts:3833"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"message",children:"message"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"message"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The error message."}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.message"})}),"\n",(0,r.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3803",children:"packages/extension-api/src/extension-api.d.ts:3803"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.name"})}),"\n",(0,r.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1076"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stack",children:"stack?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"stack"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.stack"})}),"\n",(0,r.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1078"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stderr",children:"stderr"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stderr"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The standard error (stderr) content of the command."}),"\n",(0,r.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3823",children:"packages/extension-api/src/extension-api.d.ts:3823"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stdout",children:"stdout"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stdout"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The standard output (stdout) content of the command."}),"\n",(0,r.jsx)(n.h4,{id:"source-9",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3818",children:"packages/extension-api/src/extension-api.d.ts:3818"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>d});var r=s(27378);const i={},c=r.createContext(i);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
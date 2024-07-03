"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90681],{44337:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var d=i(24246),s=i(71670);const r={},c="Interface: RunError",t={id:"interfaces/RunError",title:"Interface: RunError",description:"Represents an error that occurred during the execution of a command.",source:"@site/api/interfaces/RunError.md",sourceDirName:"interfaces",slug:"/interfaces/RunError",permalink:"/api/interfaces/RunError",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"RegistrySuggestedProvider",permalink:"/api/interfaces/RegistrySuggestedProvider"},next:{title:"RunOptions",permalink:"/api/interfaces/RunOptions"}},l={},o=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelled",id:"cancelled",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"cause?",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"command",id:"command",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"exitCode",id:"exitcode",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"killed",id:"killed",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"message",id:"message",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"stack?",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"stderr",id:"stderr",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"stdout",id:"stdout",level:3},{value:"Defined in",id:"defined-in-9",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"interface-runerror",children:"Interface: RunError"}),"\n",(0,d.jsx)(n.p,{children:"Represents an error that occurred during the execution of a command."}),"\n",(0,d.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Error"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"cancelled",children:"cancelled"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"cancelled"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Indicates whether the execution was cancelled."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4093",children:"packages/extension-api/src/extension-api.d.ts:4093"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"cause",children:"cause?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"cause"}),": ",(0,d.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Error.cause"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:"node_modules/typescript/lib/lib.es2022.error.d.ts:24"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"command"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The command that was executed."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4078",children:"packages/extension-api/src/extension-api.d.ts:4078"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"exitcode",children:"exitCode"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"exitCode"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The exit code of the command."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4073",children:"packages/extension-api/src/extension-api.d.ts:4073"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"killed",children:"killed"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"killed"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Indicates whether the process was forcefully killed."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4098",children:"packages/extension-api/src/extension-api.d.ts:4098"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"message",children:"message"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"message"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The error message."}),"\n",(0,d.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Error.message"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4068",children:"packages/extension-api/src/extension-api.d.ts:4068"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"name"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Error.name"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1076"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"stack",children:"stack?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"stack"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Error.stack"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:"node_modules/typescript/lib/lib.es5.d.ts:1078"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"stderr",children:"stderr"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"stderr"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The standard error (stderr) content of the command."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4088",children:"packages/extension-api/src/extension-api.d.ts:4088"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"stdout",children:"stdout"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"stdout"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The standard output (stdout) content of the command."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L4083",children:"packages/extension-api/src/extension-api.d.ts:4083"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>c});var d=i(27378);const s={},r=d.createContext(s);function c(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);
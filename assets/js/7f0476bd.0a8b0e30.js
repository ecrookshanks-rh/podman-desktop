"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45346],{7095:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=s(24246),r=s(71670);const t={},d="Interface: Webview",c={id:"interfaces/Webview",title:"Interface: Webview",description:"Displays html content, similarly to an iframe.",source:"@site/api/interfaces/Webview.md",sourceDirName:"interfaces",slug:"/interfaces/Webview",permalink:"/api/interfaces/Webview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"VolumeListInfo",permalink:"/api/interfaces/VolumeListInfo"},next:{title:"WebviewInfo",permalink:"/api/interfaces/WebviewInfo"}},o={},a=[{value:"Properties",id:"properties",level:2},{value:"cspSource",id:"cspsource",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"html",id:"html",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDidReceiveMessage",id:"ondidreceivemessage",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"options",id:"options",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"asWebviewUri()",id:"aswebviewuri",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"postMessage()",id:"postmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-webview",children:"Interface: Webview"})}),"\n",(0,i.jsx)(n.p,{children:"Displays html content, similarly to an iframe."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"cspsource",children:"cspSource"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"cspSource"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Content security policy source for webview resources."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L1733",children:"packages/extension-api/src/extension-api.d.ts:1733"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"html",children:"html"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"html"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"HTML contents of the webview."}),"\n",(0,i.jsx)(n.p,{children:"This should be a complete, valid html document. Changing this property causes the webview to be reloaded."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L1710",children:"packages/extension-api/src/extension-api.d.ts:1710"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondidreceivemessage",children:"onDidReceiveMessage"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onDidReceiveMessage"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Fired when the webview content posts a message."}),"\n",(0,i.jsx)(n.p,{children:"Webview content can post strings or json serializable objects back to an extension."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L1717",children:"packages/extension-api/src/extension-api.d.ts:1717"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"options"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/WebviewOptions",children:(0,i.jsx)(n.code,{children:"WebviewOptions"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Content settings for the webview."}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L1702",children:"packages/extension-api/src/extension-api.d.ts:1702"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"aswebviewuri",children:"asWebviewUri()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"asWebviewUri"}),"(",(0,i.jsx)(n.code,{children:"localResource"}),"): ",(0,i.jsx)(n.a,{href:"/api/classes/Uri",children:(0,i.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Convert a uri for the local file system to one that can be used inside webviews."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"localResource"}),": ",(0,i.jsx)(n.a,{href:"/api/classes/Uri",children:(0,i.jsx)(n.code,{children:"Uri"})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/classes/Uri",children:(0,i.jsx)(n.code,{children:"Uri"})})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L1727",children:"packages/extension-api/src/extension-api.d.ts:1727"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"postmessage",children:"postMessage()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"postMessage"}),"(",(0,i.jsx)(n.code,{children:"message"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"boolean"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Post a message to the webview content."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"message"}),": ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/4c08f846d4687af497cb91562ee736418b60a6e2/packages/extension-api/src/extension-api.d.ts#L1722",children:"packages/extension-api/src/extension-api.d.ts:1722"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var i=s(27378);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
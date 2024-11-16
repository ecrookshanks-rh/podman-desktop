"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88041],{17166:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/StatusBarItem","title":"Interface: StatusBarItem","description":"A status bar item is a status bar contribution that can","source":"@site/api/interfaces/StatusBarItem.md","sourceDirName":"interfaces","slug":"/interfaces/StatusBarItem","permalink":"/api/interfaces/StatusBarItem","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"SecretStorageChangeEvent","permalink":"/api/interfaces/SecretStorageChangeEvent"},"next":{"title":"StorageStats","permalink":"/api/interfaces/StorageStats"}}');var d=i(62540),t=i(43023);const r={},o="Interface: StatusBarItem",c={},a=[{value:"Properties",id:"properties",level:2},{value:"alignment",id:"alignment",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"command?",id:"command",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"commandArgs?",id:"commandargs",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"enabled",id:"enabled",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"iconClass?",id:"iconclass",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"priority",id:"priority",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"text?",id:"text",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"tooltip?",id:"tooltip",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"hide()",id:"hide",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"show()",id:"show",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"interface-statusbaritem",children:"Interface: StatusBarItem"})}),"\n",(0,d.jsx)(n.p,{children:"A status bar item is a status bar contribution that can\nshow text and icons and run a command on click."}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"alignment",children:"alignment"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"alignment"}),": ",(0,d.jsx)(n.a,{href:"/api/type-aliases/StatusBarAlignment",children:(0,d.jsx)(n.code,{children:"StatusBarAlignment"})})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The alignment of this item."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1732",children:"packages/extension-api/src/extension-api.d.ts:1732"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"command",children:"command?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"command"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The identifier of a command, previously registered with ",(0,d.jsx)(n.a,{href:"/api/namespaces/commands/functions/registerCommand",children:"commands.registerCommand"}),", to run on click."]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1760",children:"packages/extension-api/src/extension-api.d.ts:1760"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"commandargs",children:"commandArgs?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"commandArgs"}),": ",(0,d.jsx)(n.code,{children:"any"}),"[]"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Arguments that the command handler should be invoked with."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1765",children:"packages/extension-api/src/extension-api.d.ts:1765"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"enabled"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Marks an item as disabled. When property is set to true, then icon will be changed to inactive\nand there won't be possible to execute a command if it is provided in the following configuration."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1756",children:"packages/extension-api/src/extension-api.d.ts:1756"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"iconclass",children:"iconClass?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"iconClass"}),": ",(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Icon class that is used to display the particular icon from the Font Awesome icon set.\nIcon class should be in format e.g. 'fa fa-toggle-on'. It is possible to provide an icons\nfor state which can be enabled or disabled."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1751",children:"packages/extension-api/src/extension-api.d.ts:1751"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"priority",children:"priority"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"priority"}),": ",(0,d.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The priority of this item. Higher value means the item should be shown more to the left\nor more to the right."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1737",children:"packages/extension-api/src/extension-api.d.ts:1737"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"text",children:"text?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"text"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The text to show for the entry."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1741",children:"packages/extension-api/src/extension-api.d.ts:1741"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"tooltip",children:"tooltip?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"tooltip"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The tooltip text when you hover over this entry."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1745",children:"packages/extension-api/src/extension-api.d.ts:1745"})}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"dispose"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Dispose and free associated resources. Call\n",(0,d.jsx)(n.a,{href:"/api/interfaces/StatusBarItem#hide",children:"StatusBarItem.hide"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1779",children:"packages/extension-api/src/extension-api.d.ts:1779"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"hide",children:"hide()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"hide"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Hides the entry in the status bar."}),"\n",(0,d.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1773",children:"packages/extension-api/src/extension-api.d.ts:1773"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"show",children:"show()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"show"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Shows the entry in the status bar."}),"\n",(0,d.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/98d6d71208383d5e8bd7166c8ac9ec0983a3e6f6/packages/extension-api/src/extension-api.d.ts#L1769",children:"packages/extension-api/src/extension-api.d.ts:1769"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(63696);const d={},t=s.createContext(d);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
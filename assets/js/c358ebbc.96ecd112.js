"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27910],{1885:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=n(24246),r=n(71670);const t={},o="Interface: AuthenticationProvider",c={id:"interfaces/AuthenticationProvider",title:"Interface: AuthenticationProvider",description:"A provider for performing authentication to a service.",source:"@site/api/interfaces/AuthenticationProvider.md",sourceDirName:"interfaces",slug:"/interfaces/AuthenticationProvider",permalink:"/api/interfaces/AuthenticationProvider",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"AuthenticationGetSessionOptions",permalink:"/api/interfaces/AuthenticationGetSessionOptions"},next:{title:"AuthenticationProviderAuthenticationSessionsChangeEvent",permalink:"/api/interfaces/AuthenticationProviderAuthenticationSessionsChangeEvent"}},d={},a=[{value:"Properties",id:"properties",level:2},{value:"onDidChangeSessions",id:"ondidchangesessions",level:3},{value:"Source",id:"source",level:4},{value:"Methods",id:"methods",level:2},{value:"createSession()",id:"createsession",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-1",level:4},{value:"getSessions()",id:"getsessions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-2",level:4},{value:"removeSession()",id:"removesession",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-3",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"interface-authenticationprovider",children:"Interface: AuthenticationProvider"}),"\n",(0,i.jsx)(s.p,{children:"A provider for performing authentication to a service."}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"ondidchangesessions",children:"onDidChangeSessions"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"readonly"})," ",(0,i.jsx)(s.strong,{children:"onDidChangeSessions"}),": ",(0,i.jsx)(s.a,{href:"/api/interfaces/Event",children:(0,i.jsx)(s.code,{children:"Event"})}),"<",(0,i.jsx)(s.a,{href:"/api/interfaces/AuthenticationProviderAuthenticationSessionsChangeEvent",children:(0,i.jsx)(s.code,{children:"AuthenticationProviderAuthenticationSessionsChangeEvent"})}),">"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["An ",(0,i.jsx)(s.a,{href:"#Event",children:"event"})," which fires when the array of sessions has changed, or data\nwithin a session has changed."]}),"\n",(0,i.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3574",children:"packages/extension-api/src/extension-api.d.ts:3574"})}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"createsession",children:"createSession()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"createSession"}),"(",(0,i.jsx)(s.code,{children:"scopes"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(s.code,{children:"AuthenticationSession"})}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Prompts a user to login."}),"\n",(0,i.jsx)(s.p,{children:"If login is successful, the onDidChangeSessions event should be fired."}),"\n",(0,i.jsx)(s.p,{children:"If login fails, a rejected promise should be returned."}),"\n",(0,i.jsx)(s.p,{children:"If the provider has specified that it does not support multiple accounts,\nthen this should never be called if there is already an existing session matching these\nscopes."}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"scopes"}),": ",(0,i.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(s.p,{children:"A list of scopes, permissions, that the new session should be created with."}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(s.code,{children:"AuthenticationSession"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"A promise that resolves to an authentication session."}),"\n",(0,i.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3597",children:"packages/extension-api/src/extension-api.d.ts:3597"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getsessions",children:"getSessions()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"getSessions"}),"(",(0,i.jsx)(s.code,{children:"scopes"}),"?): ",(0,i.jsx)(s.code,{children:"Promise"}),"<readonly ",(0,i.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(s.code,{children:"AuthenticationSession"})}),"[]>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Get a list of sessions."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"scopes?"}),": ",(0,i.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(s.p,{children:"An optional list of scopes. If provided, the sessions returned should match\nthese permissions, otherwise all sessions should be returned."}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<readonly ",(0,i.jsx)(s.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(s.code,{children:"AuthenticationSession"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:"A promise that resolves to an array of authentication sessions."}),"\n",(0,i.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3582",children:"packages/extension-api/src/extension-api.d.ts:3582"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"removesession",children:"removeSession()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"removeSession"}),"(",(0,i.jsx)(s.code,{children:"sessionId"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Removes the session corresponding to session id."}),"\n",(0,i.jsx)(s.p,{children:"If the removal is successful, the onDidChangeSessions event should be fired."}),"\n",(0,i.jsx)(s.p,{children:"If a session cannot be removed, the provider should reject with an error message."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"sessionId"}),": ",(0,i.jsx)(s.code,{children:"string"})]}),"\n",(0,i.jsx)(s.p,{children:"The id of the session to remove."}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/6526388812d7128149460ccdf406269089f477ee/packages/extension-api/src/extension-api.d.ts#L3607",children:"packages/extension-api/src/extension-api.d.ts:3607"})})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var i=n(27378);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
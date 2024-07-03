"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79649],{43844:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=i(24246),t=i(71670);const a={},r="Interface: HealthConfig",c={id:"interfaces/HealthConfig",title:"Interface: HealthConfig",description:"Configuration options for defining a healthcheck for a container.",source:"@site/api/interfaces/HealthConfig.md",sourceDirName:"interfaces",slug:"/interfaces/HealthConfig",permalink:"/api/interfaces/HealthConfig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"HealthCheckResults",permalink:"/api/interfaces/HealthCheckResults"},next:{title:"HostConfig",permalink:"/api/interfaces/HostConfig"}},o={},l=[{value:"Properties",id:"properties",level:2},{value:"Interval?",id:"interval",level:3},{value:"Example",id:"example",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Retries?",id:"retries",level:3},{value:"Example",id:"example-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"StartPeriod?",id:"startperiod",level:3},{value:"Example",id:"example-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Test?",id:"test",level:3},{value:"Examples",id:"examples",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Timeout?",id:"timeout",level:3},{value:"Example",id:"example-3",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interface-healthconfig",children:"Interface: HealthConfig"}),"\n",(0,s.jsxs)(n.p,{children:["Configuration options for defining a healthcheck for a container.\nTo get health check result you can use ",(0,s.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/inspectContainer",children:"containerEngine.inspectContainer"})," and inside the obtained ",(0,s.jsx)(n.a,{href:"/api/interfaces/ContainerInspectInfo",children:"ContainerInspectInfo"})," you can access the ",(0,s.jsx)(n.code,{children:"Status.Health"})," property containing a ",(0,s.jsx)(n.a,{href:"/api/interfaces/HealthCheckResults",children:"HealthCheckResults"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"interval",children:"Interval?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Interval"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Set interval to 1 second\nInterval?: 1000000000;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L2707",children:"packages/extension-api/src/extension-api.d.ts:2707"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"retries",children:"Retries?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Retries"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit."}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Set retries to 3\nRetries?: 3;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L2735",children:"packages/extension-api/src/extension-api.d.ts:2735"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"startperiod",children:"StartPeriod?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"StartPeriod"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should\nbe 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Set start period to 2 seconds\nStartPeriod?: 2000000000;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L2726",children:"packages/extension-api/src/extension-api.d.ts:2726"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"test",children:"Test?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Test"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The test to perform."}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Inherit healthcheck from image\nTest?: [];\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// Disable healthcheck\nTest?: ["NONE"];\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// Execute command in host system\nTest?: ["CMD", "curl", "http://localhost"];\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// Podman will execute the command inside the target container and wait for either a "0" or "failure  exit" code.\nTest?: ["CMD-SHELL", "curl http://localhost || exit 1"];\n'})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L2698",children:"packages/extension-api/src/extension-api.d.ts:2698"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"timeout",children:"Timeout?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Timeout"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Set timeout to 5 seconds\nTimeout?: 5000000000;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/79411c21edeceb86abe27fff87ad82e8ff9b761a/packages/extension-api/src/extension-api.d.ts#L2716",children:"packages/extension-api/src/extension-api.d.ts:2716"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(27378);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
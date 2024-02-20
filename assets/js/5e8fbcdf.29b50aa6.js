"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5417],{28992:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=s(24246),r=s(71670);const o={},c="Interface: BuildImageOptions",t={id:"interfaces/BuildImageOptions",title:"Interface: BuildImageOptions",description:"Properties",source:"@site/api/interfaces/BuildImageOptions.md",sourceDirName:"interfaces",slug:"/interfaces/BuildImageOptions",permalink:"/api/interfaces/BuildImageOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: AuthenticationSessionsChangeEvent",permalink:"/api/interfaces/AuthenticationSessionsChangeEvent"},next:{title:"Interface: CancellationToken",permalink:"/api/interfaces/CancellationToken"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"abortController?",id:"abortcontroller",level:3},{value:"Source",id:"source",level:4},{value:"buildargs?",id:"buildargs",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Source",id:"source-1",level:4},{value:"cachefrom?",id:"cachefrom",level:3},{value:"Source",id:"source-2",level:4},{value:"containerFile?",id:"containerfile",level:3},{value:"Source",id:"source-3",level:4},{value:"cpuperiod?",id:"cpuperiod",level:3},{value:"Source",id:"source-4",level:4},{value:"cpuquota?",id:"cpuquota",level:3},{value:"Source",id:"source-5",level:4},{value:"cpusetcpus?",id:"cpusetcpus",level:3},{value:"Source",id:"source-6",level:4},{value:"cpushares?",id:"cpushares",level:3},{value:"Source",id:"source-7",level:4},{value:"extrahosts?",id:"extrahosts",level:3},{value:"Source",id:"source-8",level:4},{value:"forcerm?",id:"forcerm",level:3},{value:"Source",id:"source-9",level:4},{value:"labels?",id:"labels",level:3},{value:"Index signature",id:"index-signature-1",level:4},{value:"Source",id:"source-10",level:4},{value:"memory?",id:"memory",level:3},{value:"Source",id:"source-11",level:4},{value:"memswap?",id:"memswap",level:3},{value:"Source",id:"source-12",level:4},{value:"networkmode?",id:"networkmode",level:3},{value:"Source",id:"source-13",level:4},{value:"nocache?",id:"nocache",level:3},{value:"Source",id:"source-14",level:4},{value:"outputs?",id:"outputs",level:3},{value:"Source",id:"source-15",level:4},{value:"platform?",id:"platform",level:3},{value:"Source",id:"source-16",level:4},{value:"provider?",id:"provider",level:3},{value:"Source",id:"source-17",level:4},{value:"pull?",id:"pull",level:3},{value:"Source",id:"source-18",level:4},{value:"q?",id:"q",level:3},{value:"Source",id:"source-19",level:4},{value:"remote?",id:"remote",level:3},{value:"Source",id:"source-20",level:4},{value:"rm?",id:"rm",level:3},{value:"Source",id:"source-21",level:4},{value:"shmsize?",id:"shmsize",level:3},{value:"Source",id:"source-22",level:4},{value:"squash?",id:"squash",level:3},{value:"Source",id:"source-23",level:4},{value:"tag?",id:"tag",level:3},{value:"Source",id:"source-24",level:4},{value:"target?",id:"target",level:3},{value:"Source",id:"source-25",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-buildimageoptions",children:"Interface: BuildImageOptions"}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"abortcontroller",children:"abortController?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"abortController"}),": ",(0,i.jsx)(n.code,{children:"AbortController"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The abort controller for running the build image operation"}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2503",children:"packages/extension-api/src/extension-api.d.ts:2503"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"buildargs",children:"buildargs?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"buildargs"}),": ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the\nbuildargs as the environment context for commands run via the ",(0,i.jsx)(n.code,{children:"Dockerfile"})," RUN instruction, or for variable\nexpansion in other ",(0,i.jsx)(n.code,{children:"Dockerfilev"})," instructions. This is not meant for passing secret values.\nFor example, the build arg ",(0,i.jsx)(n.code,{children:"FOO=bar"})," would become ",(0,i.jsx)(n.code,{children:'{"FOO":"bar"}'})," in JSON. This would result in the query\nparameter ",(0,i.jsx)(n.code,{children:'buildargs={"FOO":"bar"}'}),". Note that ",(0,i.jsx)(n.code,{children:'{"FOO":"bar"}'})," should be URI component encoded."]}),"\n",(0,i.jsx)(n.h4,{id:"index-signature",children:"Index signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"key"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2587",children:"packages/extension-api/src/extension-api.d.ts:2587"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"cachefrom",children:"cachefrom?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"cachefrom"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"JSON array of images used for build cache resolution."}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2529",children:"packages/extension-api/src/extension-api.d.ts:2529"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"containerfile",children:"containerFile?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"containerFile"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Specifies a Containerfile which contains instructions for building the image"}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2483",children:"packages/extension-api/src/extension-api.d.ts:2483"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"cpuperiod",children:"cpuperiod?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"cpuperiod"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The length of a CPU period in microseconds."}),"\n",(0,i.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2573",children:"packages/extension-api/src/extension-api.d.ts:2573"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"cpuquota",children:"cpuquota?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"cpuquota"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Microseconds of CPU time that the container can get in a CPU period."}),"\n",(0,i.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2578",children:"packages/extension-api/src/extension-api.d.ts:2578"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"cpusetcpus",children:"cpusetcpus?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"cpusetcpus"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CPUs in which to allow execution (e.g., 0-3, 0,1)."}),"\n",(0,i.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2568",children:"packages/extension-api/src/extension-api.d.ts:2568"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"cpushares",children:"cpushares?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"cpushares"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CPU shares (relative weight)."}),"\n",(0,i.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2563",children:"packages/extension-api/src/extension-api.d.ts:2563"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"extrahosts",children:"extrahosts?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"extrahosts"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Extra hosts to add to /etc/hosts"}),"\n",(0,i.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2508",children:"packages/extension-api/src/extension-api.d.ts:2508"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"forcerm",children:"forcerm?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"forcerm"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Default: false"}),"\n",(0,i.jsx)(n.p,{children:"Always remove intermediate containers, even upon failure."}),"\n",(0,i.jsx)(n.h4,{id:"source-9",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2548",children:"packages/extension-api/src/extension-api.d.ts:2548"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"labels",children:"labels?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"labels"}),": ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Arbitrary key/value labels to set on the image, as a JSON map of string pairs."}),"\n",(0,i.jsx)(n.h4,{id:"index-signature-1",children:"Index signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"key"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"source-10",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2602",children:"packages/extension-api/src/extension-api.d.ts:2602"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"memory"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set memory limit for build."}),"\n",(0,i.jsx)(n.h4,{id:"source-11",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2553",children:"packages/extension-api/src/extension-api.d.ts:2553"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"memswap",children:"memswap?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"memswap"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Total memory (memory + swap). Set as -1 to disable swap."}),"\n",(0,i.jsx)(n.h4,{id:"source-12",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2558",children:"packages/extension-api/src/extension-api.d.ts:2558"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"networkmode",children:"networkmode?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"networkmode"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Sets the networking mode for the run commands during build. Supported standard values are: ",(0,i.jsx)(n.code,{children:"bridge"}),",\n",(0,i.jsx)(n.code,{children:"host"}),", ",(0,i.jsx)(n.code,{children:"none"}),", and ",(0,i.jsx)(n.code,{children:"container:<name|id>"}),". Any other value is taken as a custom network's name or ID\nto which this container should connect to."]}),"\n",(0,i.jsx)(n.h4,{id:"source-13",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2609",children:"packages/extension-api/src/extension-api.d.ts:2609"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"nocache",children:"nocache?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"nocache"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Default: false"}),"\n",(0,i.jsx)(n.p,{children:"Do not use the cache when building the image."}),"\n",(0,i.jsx)(n.h4,{id:"source-14",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2630",children:"packages/extension-api/src/extension-api.d.ts:2630"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"outputs",children:"outputs?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"outputs"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Default: ""'}),"\n",(0,i.jsx)(n.p,{children:"BuildKit output configuration"}),"\n",(0,i.jsx)(n.h4,{id:"source-15",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2623",children:"packages/extension-api/src/extension-api.d.ts:2623"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"platform",children:"platform?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"platform"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set the os/arch of the built image (and its base image, when using one) to the provided value instead of using the current operating system and architecture of the host"}),"\n",(0,i.jsx)(n.h4,{id:"source-16",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2493",children:"packages/extension-api/src/extension-api.d.ts:2493"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"provider",children:"provider?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"provider"}),": ",(0,i.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set the provider to use, if not we will try select the first one available (sorted in favor of Podman)"}),"\n",(0,i.jsx)(n.h4,{id:"source-17",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2498",children:"packages/extension-api/src/extension-api.d.ts:2498"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pull",children:"pull?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"pull"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Attempt to pull the image even if an older image exists locally."}),"\n",(0,i.jsx)(n.h4,{id:"source-18",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2534",children:"packages/extension-api/src/extension-api.d.ts:2534"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"q",children:"q?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"q"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Default: false"}),"\n",(0,i.jsx)(n.p,{children:"Suppress verbose build output."}),"\n",(0,i.jsx)(n.h4,{id:"source-19",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2524",children:"packages/extension-api/src/extension-api.d.ts:2524"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"remote",children:"remote?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"remote"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file\u2019s contents are\nplaced into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the\nfile is downloaded by the daemon and the contents therein used as the context for the build. If the URI points\nto a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path\ninside the tarball."}),"\n",(0,i.jsx)(n.h4,{id:"source-20",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2517",children:"packages/extension-api/src/extension-api.d.ts:2517"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"rm",children:"rm?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"rm"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Default: true"}),"\n",(0,i.jsx)(n.p,{children:"Remove intermediate containers after a successful build."}),"\n",(0,i.jsx)(n.h4,{id:"source-21",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2541",children:"packages/extension-api/src/extension-api.d.ts:2541"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"shmsize",children:"shmsize?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"shmsize"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Size of ",(0,i.jsx)(n.code,{children:"/dev/shm"})," in bytes. The size must be greater than 0. If omitted the system uses 64MB."]}),"\n",(0,i.jsx)(n.h4,{id:"source-22",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2592",children:"packages/extension-api/src/extension-api.d.ts:2592"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"squash",children:"squash?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"squash"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Squash the resulting images layers into a single layer."}),"\n",(0,i.jsx)(n.h4,{id:"source-23",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2597",children:"packages/extension-api/src/extension-api.d.ts:2597"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"tag",children:"tag?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"tag"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Specifies the name which is assigned to the resulting image if the build process completes successfully"}),"\n",(0,i.jsx)(n.h4,{id:"source-24",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2488",children:"packages/extension-api/src/extension-api.d.ts:2488"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"target",children:"target?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"target"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Default: ""'}),"\n",(0,i.jsx)(n.p,{children:"Target build stage"}),"\n",(0,i.jsx)(n.h4,{id:"source-25",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/9f6ea45/packages/extension-api/src/extension-api.d.ts#L2616",children:"packages/extension-api/src/extension-api.d.ts:2616"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var i=s(27378);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
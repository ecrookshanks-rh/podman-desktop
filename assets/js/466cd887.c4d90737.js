"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68859],{28786:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"@podman-desktop/namespaces/window/functions/withProgress","title":"Function: withProgress()","description":"withProgress\\\\(options, task): Promise\\\\","source":"@site/api/@podman-desktop/namespaces/window/functions/withProgress.md","sourceDirName":"@podman-desktop/namespaces/window/functions","slug":"/@podman-desktop/namespaces/window/functions/withProgress","permalink":"/api/@podman-desktop/namespaces/window/functions/withProgress","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"showWarningMessage","permalink":"/api/@podman-desktop/namespaces/window/functions/showWarningMessage"},"next":{"title":"InputBoxValidationSeverity","permalink":"/api/enumerations/InputBoxValidationSeverity"}}');var o=s(62540),t=s(43023);const i={},a="Function: withProgress()",c={},d=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"R",id:"r",level:3},{value:"Parameters",id:"parameters",level:2},{value:"options",id:"options",level:3},{value:"task",id:"task",level:3},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"function-withprogress",children:"Function: withProgress()"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"withProgress"}),"<",(0,o.jsx)(n.code,{children:"R"}),">(",(0,o.jsx)(n.code,{children:"options"}),", ",(0,o.jsx)(n.code,{children:"task"}),"): ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/ecrookshanks-rh/podman-desktop/blob/2e1a64758cc9c2aa1fb8195e0355b9685f0c4a13/packages/extension-api/src/extension-api.d.ts#L2212",children:"packages/extension-api/src/extension-api.d.ts:2212"})]}),"\n",(0,o.jsxs)(n.p,{children:["Show progress in Podman Desktop. Progress is shown while running the given callback\nand while the promise it returned isn't resolved nor rejected. The location at which\nprogress should show (and other details) is defined via the passed ",(0,o.jsx)(n.a,{href:"/api/interfaces/ProgressOptions",children:(0,o.jsx)(n.code,{children:"ProgressOptions"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,o.jsx)(n.h3,{id:"r",children:"R"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"R"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/api/interfaces/ProgressOptions",children:(0,o.jsx)(n.code,{children:"ProgressOptions"})})}),"\n",(0,o.jsx)(n.p,{children:"the options for the task's details"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"task"}),"\n",(0,o.jsxs)(n.p,{children:["(",(0,o.jsx)(n.code,{children:"progress"}),", ",(0,o.jsx)(n.code,{children:"token"}),") => ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"R"}),">"]}),"\n",(0,o.jsxs)(n.p,{children:["A callback returning a promise. Progress state can be reported with\nthe provided ",(0,o.jsx)(n.a,{href:"/api/interfaces/Progress",children:"Progress"}),"-object."]}),"\n",(0,o.jsxs)(n.p,{children:["To report discrete progress, use ",(0,o.jsx)(n.code,{children:"increment"})," to indicate how much work has been completed. Each call with\na ",(0,o.jsx)(n.code,{children:"increment"})," value will be summed up and reflected as overall progress until 100% is reached (a value of\ne.g. ",(0,o.jsx)(n.code,{children:"10"})," accounts for ",(0,o.jsx)(n.code,{children:"10%"})," of work done).\nNote that currently only ",(0,o.jsx)(n.code,{children:"ProgressLocation.Notification"})," is capable of showing discrete progress."]}),"\n",(0,o.jsxs)(n.p,{children:["To monitor if the operation has been cancelled by the user, use the provided ",(0,o.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,o.jsx)(n.code,{children:"CancellationToken"})}),".\nNote that currently only ",(0,o.jsx)(n.code,{children:"ProgressLocation.Notification"})," is supporting to show a cancel button to cancel the\nlong-running operation."]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"R"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"The promise the task-callback returned."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Here is a simple example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await window.withProgress({ location: ProgressLocation.TASK_WIDGET, title: `Running task` },\n  async progress => {\n    progress.report({message: 'task1' });\n    await task1();\n    progress.report({increment: 50, message: 'task2' });\n    await task2();\n  },\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:"The error is propagated if thrown inside the task callback."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"try {\n   await window.withProgress(\n       { location: ProgressLocation.TASK_WIDGET, title: `Running task` },\n       async progress => {\n          throw new Error('error when running a task');\n       },\n     );\n } catch (error) {\n    // do something with the error\n }\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can return a value from the task callback"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const result: number = await window.withProgress<number>(\n   { location: ProgressLocation.TASK_WIDGET, title: `Running task` },\n   async progress => {\n      // compute something\n      return 55;\n   },\n);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(63696);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
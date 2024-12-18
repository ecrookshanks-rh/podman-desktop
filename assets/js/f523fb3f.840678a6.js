"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22778],{74075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"migrating-from-docker/using-the-docker_host-environment-variable","title":"Using the `DOCKER_HOST` environment variable","description":"Using the `DOCKER_HOST` environment variable can make it easier to migrate from Docker to Podman Desktop, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.","source":"@site/docs/migrating-from-docker/using-the-docker_host-environment-variable.md","sourceDirName":"migrating-from-docker","slug":"/migrating-from-docker/using-the-docker_host-environment-variable","permalink":"/docs/migrating-from-docker/using-the-docker_host-environment-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/migrating-from-docker/using-the-docker_host-environment-variable.md","tags":[{"inline":true,"label":"migrating-from-docker","permalink":"/docs/tags/migrating-from-docker"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Using the `DOCKER_HOST` environment variable","description":"Using the `DOCKER_HOST` environment variable can make it easier to migrate from Docker to Podman Desktop, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.","keywords":["podman desktop","podman","containers","docker_host","environment","variable"],"tags":["migrating-from-docker"]},"sidebar":"mySidebar","previous":{"title":"Importing saved containers","permalink":"/docs/migrating-from-docker/importing-saved-containers"},"next":{"title":"Managing Docker compatibility","permalink":"/docs/migrating-from-docker/managing-docker-compatibility"}}');var o=t(62540),a=t(43023),i=t(78296),s=t(22491);const l={sidebar_position:2,title:"Using the `DOCKER_HOST` environment variable",description:"Using the `DOCKER_HOST` environment variable can make it easier to migrate from Docker to Podman Desktop, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers","docker_host","environment","variable"],tags:["migrating-from-docker"]},c="Using the DOCKER_HOST environment variable",d={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"cmd - Command Prompt",id:"cmd---command-prompt",level:5},{value:"Git Bash",id:"git-bash",level:5},{value:"Powershell",id:"powershell",level:5},{value:"Verification",id:"verification",level:4}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"using-the-docker_host-environment-variable",children:["Using the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable"]})}),"\n",(0,o.jsxs)(n.p,{children:["Consider using the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable to migrate transparently from Docker to Podman Desktop on all platforms."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Continue using familiar Docker commands."}),"\n",(0,o.jsx)(n.li,{children:"Take advantage of the benefits of Podman."}),"\n",(0,o.jsxs)(n.li,{children:["Your tools, such as ",(0,o.jsx)(n.a,{href:"https://gradle.org/",children:"Gradle"})," or ",(0,o.jsx)(n.a,{href:"https://www.testcontainers.com/",children:"Testcontainers"}),", communicate with Podman without reconfiguration."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Using the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable, you can connect your Docker CLI to the Podman socket."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["Alternatively, you can add a ",(0,o.jsx)(n.code,{children:"podman"})," context by using the ",(0,o.jsx)(n.code,{children:"docker context create"})," command."]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For example, set the value of the context in this pattern on a macOS machine:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'docker context create podman --docker "host=unix://$HOME.local/share/containers/podman/machine/podman.sock"'})}),"\n",(0,o.jsxs)(n.p,{children:["Where, the path specified after the ",(0,o.jsx)(n.code,{children:"unix://"})," scheme denotes the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," value."]}),"\n"]}),"\n"]}),(0,o.jsxs)(n.p,{children:["Then, you can run the ",(0,o.jsx)(n.code,{children:"docker context use podman"})," command to switch to that context. This way you can use your Docker CLI to run your tasks on a remote Podman engine. When you run the ",(0,o.jsx)(n.code,{children:"docker ps"})," command, it queries the Podman socket specified in the current context."]})]}),"\n",(0,o.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Podman"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,o.jsxs)(i.A,{groupId:"operating-systems",children:[(0,o.jsxs)(s.A,{value:"win",label:"Windows",children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Identify the location of your Podman pipe "}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine inspect --format '{{.ConnectionInfo.PodmanPipe.Path}}'\n"})}),(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable to your Podman pipe location. You'll need to replace back slashes with forward slashes and add the ",(0,o.jsx)(n.code,{children:"npipe://"})," scheme to the path retrieved previously: "]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"prefix"}),"podman-pipe"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"npipe://"}),"//./pipe/podman-machine-default"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Depending on your terminal emulator of preference, there is a little variation between the commands to set a session level environment variable:"}),"\n",(0,o.jsx)(n.h5,{id:"cmd---command-prompt",children:"cmd - Command Prompt"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cmd",children:"set DOCKER_HOST=npipe://<inspect_command_output>\n"})}),"\n",(0,o.jsx)(n.h5,{id:"git-bash",children:"Git Bash"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export DOCKER_HOST=npipe://<inspect_command_output>\n"})}),"\n",(0,o.jsx)(n.h5,{id:"powershell",children:"Powershell"}),"\n",(0,o.jsx)(n.p,{children:"Don't miss the quotes used with the value. Otherwise, powershell will interpret it as a separate command instead of a value."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$env:DOCKER_HOST="npipe://<inspect_command_output>"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Ideally, you should set ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," at the system or user level environment variables (or even load it in your CL emulator init script of choice)."]}),"\n"]}),"\n"]}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Setting the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable isn't necessary on Windows because Podman also listens to the default ",(0,o.jsx)(n.code,{children:"docker_engine"})," pipe. But, it might be necessary if you get the following error: ",(0,o.jsx)(n.strong,{children:"Error: socket of machine is not set"}),", while trying to use the ",(0,o.jsx)(n.code,{children:"podman compose"})," command."]})})]}),(0,o.jsxs)(s.A,{value:"mac",label:"macOS",children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Identify the location of your Podman socket"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ podman machine inspect --format '{{.ConnectionInfo.PodmanSocket.Path}}'\n"})}),(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable to your Podman socket location. Be sure to add the ",(0,o.jsx)(n.code,{children:"unix://"})," scheme to the path retrieved previously:"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ export DOCKER_HOST=unix://<your_podman_socket_location>\n"})})]}),(0,o.jsxs)(s.A,{value:"linux",label:"Linux",children:[(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Identify the location of your Podman socket"}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ podman info --format '{{.Host.RemoteSocket.Path}}'\n"})}),(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable to your Podman socket location. Be sure to add the ",(0,o.jsx)(n.code,{children:"unix://"})," scheme to the path retrieved previously:"]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell-session",children:"$ export DOCKER_HOST=unix://<your_podman_socket_location>\n"})})]})]}),"\n",(0,o.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Your tools using the ",(0,o.jsx)(n.code,{children:"DOCKER_HOST"})," environment variable, such as ",(0,o.jsx)(n.a,{href:"https://gradle.org/",children:"Gradle"})," or ",(0,o.jsx)(n.a,{href:"https://www.testcontainers.com/",children:"Testcontainers"}),", communicate with Podman without reconfiguration."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},22491:(e,n,t)=>{t.d(n,{A:()=>i});t(63696);var r=t(11750);const o={tabItem:"tabItem_wHwb"};var a=t(62540);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:n})}},78296:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(63696),o=t(11750),a=t(90766),i=t(49519),s=t(14395),l=t(35043),c=t(44544),d=t(94243);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:o}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),g=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(86681);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=t(62540);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==r&&(c(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(63696);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
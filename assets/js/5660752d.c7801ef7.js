"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48176],{40559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=t(24246),i=t(71670),r=t(23930),l=t(39798);const o={title:"OpenShift Local",description:"Creating an OpenShift Local instance",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},a="Creating an OpenShift Local instance",c={id:"openshift/openshift-local/index",title:"OpenShift Local",description:"Creating an OpenShift Local instance",source:"@site/docs/openshift/openshift-local/index.md",sourceDirName:"openshift/openshift-local",slug:"/openshift/openshift-local/",permalink:"/docs/openshift/openshift-local/",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/openshift/openshift-local/index.md",tags:[{inline:!0,label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{inline:!0,label:"openshift",permalink:"/docs/tags/openshift"}],version:"current",frontMatter:{title:"OpenShift Local",description:"Creating an OpenShift Local instance",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},sidebar:"mySidebar",previous:{title:"Developer Sandbox",permalink:"/docs/openshift/developer-sandbox/"},next:{title:"Extensions",permalink:"/docs/extensions/"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Icon:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"creating-an-openshift-local-instance",children:"Creating an OpenShift Local instance"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developers.redhat.com/products/openshift-local/overview",children:"Red Hat OpenShift Local"})," manages a minimal OpenShift or MicroShift cluster on your workstation for local development and testing."]}),"\n",(0,s.jsx)(n.p,{children:"With Podman Desktop and the OpenShift Local extension, you can manage your OpenShift Local instances."}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developers.redhat.com/register",children:"Register a Red Hat account"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the ",(0,s.jsx)(n.em,{children:"OpenShift Local"})," extension: on to ",(0,s.jsx)(n.strong,{children:"Dashboard"}),", click ",(0,s.jsxs)(n.strong,{children:["OpenShift Local ",(0,s.jsx)(o,{icon:"fa-solid fa-download",size:"lg"})]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the OpenShift Local binaries, when on the ",(0,s.jsx)(n.strong,{children:"Dashboard"}),", you see ",(0,s.jsx)(n.em,{children:"Podman Desktop was not able to find an installation of OpenShift Local"}),"."]}),"\n",(0,s.jsxs)(r.Z,{groupId:"operating-systems",children:[(0,s.jsx)(l.Z,{value:"win",label:"Windows",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"OpenShift Local"})," tile, click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-rocket",size:"lg"})," Install"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"When prerequisites are missing, follow the instructions."}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Red Hat OpenShift Local"})," screen, click ",(0,s.jsx)(n.strong,{children:"Yes"})," to start the installation."]}),"\n",(0,s.jsx)(n.li,{children:"Follow the installation program instructions."}),"\n",(0,s.jsx)(n.li,{children:"Reboot to finalize system changes."}),"\n"]})}),(0,s.jsx)(l.Z,{value:"mac",label:"macOS",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"OpenShift Local"})," tile, click ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-rocket",size:"lg"})," Install"]}),"."]}),"\n",(0,s.jsx)(n.li,{children:"When prerequisites are missing, follow the instructions."}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Red Hat OpenShift Local"})," screen, click ",(0,s.jsx)(n.strong,{children:"Yes"})," to start the installation."]}),"\n",(0,s.jsx)(n.li,{children:"Follow the installation program instructions."}),"\n",(0,s.jsx)(n.li,{children:"Reboot to finalize system changes."}),"\n"]})}),(0,s.jsx)(l.Z,{value:"linux",label:"Linux",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.a,{href:"https://console.redhat.com/openshift/create/local",children:"Red Hat OpenShift local download page"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select your platform."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Download OpenShift Local"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Extract the archive."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:"crc"})," binary to a directory in your",(0,s.jsx)(n.code,{children:"$PATH"}),", such as ",(0,s.jsx)(n.code,{children:"/usr/local/bin"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To configure your system, run the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ crc setup\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Exit and restart Podman Desktop."}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["(Optionally) Review the extension settings in ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Red Hat OpenShift Local"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"Dashboard"}),", click ",(0,s.jsx)(n.strong,{children:"Initialize and start"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select your OpenShift Local Virtual machine preset, if not set in ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Red Hat OpenShift Local > Preset"]}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"MicroShift"})," (experimental): provides a lightweight and optimized environment with a limited set of services."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"OpenShift"}),": provides a single node OpenShift cluster with a fuller set of services, including a web console (requires more resources)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Provide a pull secret, required to pull container images from the registry:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.a,{href:"https://cloud.redhat.com/openshift/create/local",children:"Red Hat OpenShift Local download page"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Copy pull secret"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Get back to Podman Desktop."}),"\n",(0,s.jsxs)(n.li,{children:["Paste the pull secret, and press ",(0,s.jsx)(n.code,{children:"Enter"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.strong,{children:"Dashboard"})," screen, ",(0,s.jsx)(n.em,{children:"OpenShift Local is running"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(o,{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Resources"]})," screen, your OpenShift Local instance is running."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Developer Sandbox is running",src:t(94650).Z+"",width:"467",height:"182"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/kubernetes/viewing-and-selecting-current-kubernete-context",children:"Select your OpenShift Local instance the Podman Desktop tray"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run basic tasks such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/kubernetes/deploying-a-container-to-kubernetes",children:"Deploying a container"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/kubernetes/deploying-a-pod-to-kubernetes",children:"Deploying a pod"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/crc-org/crc-extension",children:"Red Hat OpenShift Local extension repository"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},39798:(e,n,t)=>{t.d(n,{Z:()=>l});t(27378);var s=t(40624);const i={tabItem:"tabItem_wHwb"};var r=t(24246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,l),hidden:t,children:n})}},23930:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(27378),i=t(40624),r=t(83457),l=t(48165),o=t(9834),a=t(30654),c=t(70784),d=t(55643);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=u(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=f({queryString:t,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(76457);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var m=t(24246);function b(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=o[t].value;i!==s&&(c(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.Z)();return(0,m.jsx)(k,{...e,children:h(e.children)},String(n))}},94650:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/resources-openshift-local-running-1eea98ac12a94cb97437a2e74046ee6a.png"},71670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(27378);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
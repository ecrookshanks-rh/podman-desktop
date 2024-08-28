"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17148],{79393:(e,n,a)=>{a.d(n,{A:()=>r});a(63696);var t=a(11750);const s={tabItem:"tabItem_wHwb"};var o=a(62540);function r(e){let{children:n,hidden:a,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,r),hidden:a,children:n})}},9942:(e,n,a)=>{a.d(n,{A:()=>I});var t=a(63696),s=a(11750),o=a(95162),r=a(49940),i=a(35367),l=a(60271),u=a(55476),c=a(95095);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function b(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const s=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,o=m(e),[r,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[u,d]=p({queryString:a,groupId:s}),[h,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,c.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:s}),w=(()=>{const e=u??h;return b({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{w&&l(w)}),[w]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=a(11173);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=a(62540);function v(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),s=i[a].value;s!==t&&(u(n),r(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:o}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=h(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",w.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(n))}},68337:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(62540),s=a(43023);a(9942),a(79393);const o={title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",slug:"wasm-workloads-on-macos-and-windows-with-podman",authors:["benoitf"],tags:["podman-desktop","wasm","wasi","WebAssembly"],hide_table_of_contents:!1,image:"/img/blog/run-webassembly-wasm-workloads-windows-and-macos/webassembly-podman.webp"},r=void 0,i={permalink:"/blog/wasm-workloads-on-macos-and-windows-with-podman",source:"@site/blog/2024-01-29-run-webassembly-wasm-workloads-windows-and-macos.md",title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",date:"2024-01-29T00:00:00.000Z",tags:[{inline:!0,label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{inline:!0,label:"wasm",permalink:"/blog/tags/wasm"},{inline:!0,label:"wasi",permalink:"/blog/tags/wasi"},{inline:!0,label:"WebAssembly",permalink:"/blog/tags/web-assembly"}],readingTime:10.695,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Principal Software Engineer",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf",page:null}],frontMatter:{title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",slug:"wasm-workloads-on-macos-and-windows-with-podman",authors:["benoitf"],tags:["podman-desktop","wasm","wasi","WebAssembly"],hide_table_of_contents:!1,image:"/img/blog/run-webassembly-wasm-workloads-windows-and-macos/webassembly-podman.webp"},unlisted:!1,prevItem:{title:"Podman Desktop Wins 2024 DEVIES Award",permalink:"/blog/podman-desktop-wins-devies-award"},nextItem:{title:"Podman Desktop 1.7 Release",permalink:"/blog/podman-desktop-release-1.7"}},l={authorsImageUrls:[void 0]},u=[];function c(e){const n={img:"img",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Seamlessly run WebAssembly/Wasm binaries on macOS and Windows"}),"\n",(0,t.jsx)(n.p,{children:"You might have heard excitement recently about Wasm and WASI. Imagine a world where you can effortlessly run Wasm binaries and distribute them using Open Container Initiative (OCI) container images \u2013 a singular image deployable across multiple architectures."}),"\n",(0,t.jsx)(n.p,{children:"Though the concept seemed straightforward, accomplishing this task proved to be quite challenging, particularly on macOS and Windows. The complexity comes from the additional virtual machine running Linux. This machine needs all of the dependencies and prerequisites correctly setup."}),"\n",(0,t.jsx)(n.p,{children:"The wait is over. Our blog post unveils the solution, guiding you through the process of enabling Wasm workloads on both macOS and Windows."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"hero",src:a(957).A+"",width:"960",height:"480"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},957:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/webassembly-podman-e40f6760fbeda109aa109b4a4d926f40.webp"},43023:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var t=a(63696);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
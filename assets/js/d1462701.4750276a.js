"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62325],{92602:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(24246),o=s(71670);const i={sidebar_position:1,title:"When clause contexts",description:"Podman Desktop when clause contexts reference",tags:["podman-desktop","extension","writing","when clause"],keywords:["podman desktop","extension","writing","when clause"]},d="When clause contexts",l={id:"extensions/developing/when-clause-context",title:"When clause contexts",description:"Podman Desktop when clause contexts reference",source:"@site/docs/extensions/developing/when-clause-context.md",sourceDirName:"extensions/developing",slug:"/extensions/developing/when-clause-context",permalink:"/docs/extensions/developing/when-clause-context",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/developing/when-clause-context.md",tags:[{inline:!0,label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{inline:!0,label:"extension",permalink:"/docs/tags/extension"},{inline:!0,label:"writing",permalink:"/docs/tags/writing"},{inline:!0,label:"when clause",permalink:"/docs/tags/when-clause"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"When clause contexts",description:"Podman Desktop when clause contexts reference",tags:["podman-desktop","extension","writing","when clause"],keywords:["podman desktop","extension","writing","when clause"]},sidebar:"mySidebar",previous:{title:"Onboarding workflow",permalink:"/docs/extensions/developing/onboarding-workflow"},next:{title:"Adding icons",permalink:"/docs/extensions/developing/adding-icons"}},r={},c=[{value:"Available context keys",id:"available-context-keys",level:3},{value:"Add a custom when clause context",id:"add-a-custom-when-clause-context",level:3},{value:"Conditional operators",id:"conditional-operators",level:3},{value:"Logical operators",id:"logical-operators",level:4},{value:"Equality operators",id:"equality-operators",level:4},{value:"Comparison operators",id:"comparison-operators",level:4},{value:"In and not in",id:"in-and-not-in",level:4},{value:"Match operator",id:"match-operator",level:4}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"when-clause-contexts",children:"When clause contexts"}),"\n",(0,t.jsx)(n.p,{children:"Podman Desktop uses when clauses to enable or disable extensions command and UI customizations, such as views."}),"\n",(0,t.jsxs)(n.p,{children:["For example, the Kind extension adds a custom icon to a container that has a label equals to ",(0,t.jsx)(n.code,{children:"io.x-k8s.kind.cluster"})," by using the following instruction."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"views": {\n   "icons/containersList": [\n     {\n       "when": "io.x-k8s.kind.cluster in containerLabelKeys",\n       "icon": "${kind-icon}"\n     }\n   ]\n }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A when clause can consist of a context key (such as ",(0,t.jsx)(n.code,{children:"isLinux"}),") or complex expressions to define a specific state."]}),"\n",(0,t.jsx)(n.h3,{id:"available-context-keys",children:"Available context keys"}),"\n",(0,t.jsx)(n.p,{children:"Podman Desktop has a set of context keys that are evaluated to Boolean true/false."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Context key"}),(0,t.jsx)(n.th,{children:"True when"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Operating system contexts"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isLinux"}),(0,t.jsx)(n.td,{children:"True when the OS is Linux."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isWindows"}),(0,t.jsx)(n.td,{children:"True when the OS is Windows."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"isMac"}),(0,t.jsx)(n.td,{children:"True when the OS is macOS."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Podman Desktop also provides context keys that return values that can be used to create meaningful expressions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Context key"}),(0,t.jsx)(n.th,{children:"Value in it"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"containerLabelKeys"}),(0,t.jsxs)(n.td,{children:["A list of all labels belonging to the current container. Example: ",(0,t.jsx)(n.code,{children:'"value in containerLabelKeys"'})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"selectedImageId"}),(0,t.jsxs)(n.td,{children:["The image id which the dashboard/image menu opened belong to. Example ",(0,t.jsx)(n.code,{children:'"selectedImageId in imagesPushInProgressToKind"'})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"add-a-custom-when-clause-context",children:"Add a custom when clause context"}),"\n",(0,t.jsxs)(n.p,{children:["If you are creating your own extension and none of the existing keys suit your needs, you can set your own context key by calling the function ",(0,t.jsx)(n.code,{children:"setValue(key: string, value: any, scope?: 'onboarding')"})," provided by the ",(0,t.jsx)(n.code,{children:"context"})," namespace in the Podman Desktop API."]}),"\n",(0,t.jsx)(n.p,{children:"The scope, if specified, triggers a custom behavior to avoid any type of collisions between different extensions for that specific scope. Podman Desktop is responsible for handling its state and cleans it accordingly when necessary."}),"\n",(0,t.jsx)(n.p,{children:"If omitted, the key/value is set globally. For this reason it is recommended to use the extension id as part of the key to avoid unexpected collisions with other extensions."}),"\n",(0,t.jsxs)(n.p,{children:["The first example below sets the key ",(0,t.jsx)(n.code,{children:'"podmanIsInstalled"'})," to true globally while the second example sets the key ",(0,t.jsx)(n.code,{children:'"toolInstalled"'})," to ",(0,t.jsx)(n.code,{children:"oc.exe"})," using the onboarding scope."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"   extensionsAPI.context.setValue('podmanIsInstalled', true);\n\n   extensionsAPI.context.setValue('toolInstalled', 'oc.exe', 'onboarding');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After setting the ",(0,t.jsx)(n.code,{children:"toolInstalled"})," to ",(0,t.jsx)(n.code,{children:"oc.exe"}),", you could use this information in the ",(0,t.jsx)(n.code,{children:"when"})," clause to enable something"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "when": "onboardingContext:toolInstalled == oc.exe"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"conditional-operators",children:"Conditional operators"}),"\n",(0,t.jsxs)(n.p,{children:["To create ",(0,t.jsx)(n.code,{children:"when"})," clauses a bit more complex Podman Desktop offers a set of operators that can be combined with each other."]}),"\n",(0,t.jsx)(n.h4,{id:"logical-operators",children:"Logical operators"}),"\n",(0,t.jsx)(n.p,{children:"Logical operators allow combining simple context keys or when-clause expressions that include other operators"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operator"}),(0,t.jsx)(n.th,{children:"Symbol"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Not"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"!"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"!podmanIsInstalled"})," or ",(0,t.jsx)(n.code,{children:"!(podmanIsInstalled && isWindows)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"And"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"&&"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"podmanIsInstalled && isWindows"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Or"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"||"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"isLinux || isWindows"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"equality-operators",children:"Equality operators"}),"\n",(0,t.jsx)(n.p,{children:"Equality operators allow checking for equality of a context key's value against a specified value."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," the right side is a value and not considered as a context key, so no value is searched in the context. If it contains whitespaces, it must be wrapped in single-quotes (for example ",(0,t.jsx)(n.code,{children:"'my tool.exe'"}),")"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operator"}),(0,t.jsx)(n.th,{children:"Symbol"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Equality"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"=="})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onboardingContext:toolInstalled == oc.exe"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Inequality"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"!="})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onboardingContext:toolInstalled != oc.exe"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"comparison-operators",children:"Comparison operators"}),"\n",(0,t.jsx)(n.p,{children:"Comparison operator allow comparing a context key's value against a number."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," the left and right side of the operator must be separated by whitespace - ",(0,t.jsx)(n.code,{children:"bar < 2"}),", but not ",(0,t.jsx)(n.code,{children:"bar<2"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operator"}),(0,t.jsx)(n.th,{children:"Symbol"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Greater than"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:">="})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onboardingContext:toolInstalled > 2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Less than"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"<"}),", ",(0,t.jsx)(n.code,{children:"<="})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onboardingContext:toolInstalled <= 3"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"in-and-not-in",children:"In and not in"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"in"}),"/",(0,t.jsx)(n.code,{children:"not in"})," operators allow checking if a value exists/not exists within the other. The right should be a context key, which value is retrieved in the context. The left can be a value or a context key."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operator"}),(0,t.jsx)(n.th,{children:"Symbol"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"In"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"in"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"label in containerLabelKeys"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Not"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"not in"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"label not in containerLabelKeys"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"match-operator",children:"Match operator"}),"\n",(0,t.jsx)(n.p,{children:"The match operator allow treating the right side item as a regular expression literal to match against the left side."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operator"}),(0,t.jsx)(n.th,{children:"Symbol"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Matches"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"=~"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"label =~ /podman$/"})})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var t=s(27378);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
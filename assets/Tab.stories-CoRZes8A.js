import{p as u,i as f,t as _,f as b,s as g,a as T,b as h,n as v,l as o,m as i,h as x}from"./props-CSEHFBLY.js";import"./ErrorMessage-Dfl-04hI.js";import"./Button-CF51ItuS.js";import{T as n}from"./Table-C7S6PKbO.js";import"./fa-layers-text.svelte_svelte_type_style_lang-BC0Xe1I8.js";import"./LinearProgress-JgLNzK3g.js";import"./Spinner-DU6b2r7g.js";import"./EmptyScreen-DdAVnco1.js";import{d as S,c as w,s as B}from"./create-runtime-stories-rjdR6Htm.js";import"./attributes-qRyp-RhY.js";import"./index-client-Drv50SwC.js";import"./index-B5O8svG2.js";import"./StarIcon-Dn_vxC1-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtmeDzJ6.js";import"./index-CfOrKyLd.js";const C=(s,t,a=v)=>{let e=()=>x(t==null?void 0:t(),[]);const r=i(()=>e().title??""),d=i(()=>e().selected??!1),m=i(()=>e().url??"");n(s,{get title(){return o(r)},get selected(){return o(d)},get url(){return o(m)}})},{Story:l,meta:k}=S({component:n,title:"Tab",tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the tab",defaultValue:"Tab"},url:{control:"text",description:"Link to navigate to when tab is clicked",defaultValue:""},selected:{control:"boolean",description:"Flag the tab as being selected",defaultValue:!1}},parameters:{docs:{description:{component:"These are the stories for the `Tab` component.\nInteract with tabs."}}}});var y=_("<!> <!>",1);function c(s,t){u(t,!1),B(C),f();var a=y(),e=b(a);l(e,{name:"Basic",args:{title:"title 1"},parameters:{__svelteCsf:{rawCode:"<Tab title={args.title ?? ''} selected={args.selected ?? false} url={args.url ?? ''} />"}}});var r=g(e,2);l(r,{name:"Selected",args:{title:"title 1",selected:!0},parameters:{__svelteCsf:{rawCode:"<Tab title={args.title ?? ''} selected={args.selected ?? false} url={args.url ?? ''} />"}}}),T(s,a),h()}c.__docgen={keywords:[],data:[],name:"Tab.stories.svelte"};const p=w(c,k),K=["Basic","Selected"],N=p.Basic,P=p.Selected;export{N as Basic,P as Selected,K as __namedExportsOrder,k as default};

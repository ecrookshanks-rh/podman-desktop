import{n as x,O as Y,P as Z,k,v as E,Q as $,o as G,p as I,q as a,i as J,r as L,e as T,g as K,a as h,b as N,t as M,l as v,s as F,j as S,f as W,x as H}from"./props-aYZjoruW.js";import{b as P,t as u}from"./class-CtwBLNtx.js";import{h as A}from"./index-CpgLYzlA.js";import{o as tt}from"./index-client-DF8tRCgU.js";import{s as et,a as B,d as st,F as D}from"./fa-layers-text.svelte_svelte_type_style_lang-vNJoFzdu.js";function ot(s,t,o){if(s==null)return t(void 0),x;const e=s.subscribe(t,o);return e.unsubscribe?()=>e.unsubscribe():e}function rt(s,t,o){const e=o[t]??(o[t]={store:null,source:Z(void 0),unsubscribe:x});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=x;else{var l=!0;e.unsubscribe=ot(s,n=>{l?e.source.v=n:E(e.source,n)}),l=!1}return k(e.source)}function it(){const s={};return Y(()=>{for(var t in s)s[t].unsubscribe()}),s}const _=[];function at(s,t=x){let o=null;const e=new Set;function l(i){if($(s,i)&&(s=i,o)){const b=!_.length;for(const r of e)r[1](),_.push(r,s);if(b){for(let r=0;r<_.length;r+=2)_[r][0](_[r+1]);_.length=0}}}function n(i){l(i(s))}function f(i,b=x){const r=[i,b];return e.add(r),e.size===1&&(o=t(l,n)||x),i(s),()=>{e.delete(r),e.size===0&&o&&(o(),o=null)}}return{set:l,update:n,subscribe:f}}const j=lt();function lt(){const s=at(!1);return window.addEventListener("tooltip-show",()=>{j.set(!1)}),window.addEventListener("tooltip-hide",()=>{j.set(!0)}),s}var nt=M('<div aria-label="tooltip"> </div>'),dt=M('<div class="inline-block rounded-md bg-[var(--pd-tooltip-bg)] text-[var(--pd-tooltip-text)] border-[1px] border-[var(--pd-tooltip-border)]" aria-label="tooltip"><!></div>'),ct=M('<div class="relative inline-block"><span><!></span> <div class="whitespace-nowrap absolute tooltip opacity-0 inline-block transition-opacity duration-150 ease-in-out pointer-events-none text-sm z-[10] svelte-1ln5cwi"><!> <!></div></div>');function U(s,t){const o=et(t),e=G(t,["children","$$slots","$$events","$$legacy"]);I(t,!1);const l=it(),n=()=>rt(j,"$tooltipHidden",l);let f=a(t,"tip",8,void 0),i=a(t,"top",8,!1),b=a(t,"topLeft",8,!1),r=a(t,"topRight",8,!1),q=a(t,"right",8,!1),w=a(t,"bottom",8,!1),d=a(t,"bottomLeft",8,!1),p=a(t,"bottomRight",8,!1),y=a(t,"left",8,!1);J();var g=ct(),z=v(g),V=v(z);B(V,st(t),{});var c=F(z,2),O=v(c);L(O,()=>f()&&!n(),R=>{var m=nt(),C=v(m);T(()=>{P(m,`inline-block py-2 px-4 rounded-md bg-[var(--pd-tooltip-bg)] text-[var(--pd-tooltip-text)] border-[1px] border-[var(--pd-tooltip-border)] ${e.class??""} svelte-1ln5cwi`),K(C,f())}),h(R,m)});var X=F(O,2);L(X,()=>o.tip&&!f()&&!n(),R=>{var Q;var m=dt(),C=v(m);B(C,(Q=t.$$slots)==null?void 0:Q.tip,{}),h(R,m)}),T(()=>{P(z,`group tooltip-slot ${e.class??""} svelte-1ln5cwi`),u(c,"left",y()),u(c,"right",q()),u(c,"bottom",w()),u(c,"top",i()),u(c,"top-left",b()),u(c,"top-right",r()),u(c,"bottom-left",d()),u(c,"bottom-right",p())}),h(s,g),N()}U.__docgen={keywords:[],data:[],name:"Tooltip.svelte"};var ut=M('<div><!> <div role="alert" aria-label="Error Message Content" class="ml-2"> </div></div>');function ft(s,t){const o=G(t,["children","$$slots","$$events","$$legacy"]);I(t,!1);let e=a(t,"error",8),l=a(t,"icon",8,!1),n=a(t,"wrapMessage",8,!1),f=H(""),i=H(!1),b=H(!1);tt(()=>{n()?(E(f,"w-max max-w-[650px] overflow-hidden text-ellipsis text-wrap"),E(i,!0)):E(b,!0)}),J();var r=S(),q=W(r);L(q,l,w=>{var d=S(),p=W(d);L(p,()=>e()!==void 0&&e()!=="",y=>{U(y,{get left(){return k(i)},get top(){return k(b)},get tip(){return e()},get class(){return k(f)},children:(g,z)=>{D(g,{size:"1.1x",get class(){return`cursor-pointer text-[var(--pd-state-error)] ${o.class??""}`},icon:A})},$$slots:{default:!0}})}),h(w,d)},w=>{var d=ut(),p=v(d);D(p,{size:"1.1x",class:"cursor-pointer text-[var(--pd-state-error)]",icon:A});var y=F(p,2),g=v(y);T(()=>{P(d,`text-[var(--pd-state-error)] p-1 flex flex-row items-center ${o.class??""}`),u(d,"opacity-0",e()===void 0||e()===""),K(g,e())}),h(w,d)}),h(s,r),N()}ft.__docgen={keywords:[],data:[],name:"ErrorMessage.svelte"};export{ft as E,U as T};

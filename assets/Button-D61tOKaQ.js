import{G as S,H as q,I as H,J,K as Z,M as $,N as K,m as ee,p as te,o as y,O as M,P as m,v as u,k,Q as ae,i as re,q as w,j as E,f as L,a as _,u as ne,e as ie,b as oe,t as T,w as N,h as O,s as se}from"./index-server-DDbdwAHH.js";import{q as de}from"./this-C8CJ4kN7.js";import{a as le,b as A,F as be}from"./fa-layers-text.svelte_svelte_type_style_lang-BprBJTpO.js";import{t as P,b as ue,s as D}from"./class-CIYusYDe.js";import{S as ce}from"./Spinner-BdwhQpi8.js";let G=!1;function fe(){G||(G=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Q(e){var t=H,r=J;S(null),q(null);try{return e()}finally{S(t),q(r)}}function Ve(e,t,r,s=r){e.addEventListener(t,()=>Q(r));const o=e.__on_r;o?e.__on_r=()=>{o(),s()}:e.__on_r=s,fe()}const pe=new Set,ve=new Set;function ye(e,t,r,s){function o(a){if(s.capture||ge.call(t,a),!a.cancelBubble)return Q(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?de(()=>{t.addEventListener(e,o,s)}):t.addEventListener(e,o,s),o}function _e(e,t,r,s,o){var a={capture:s,passive:o},f=ye(e,t,r,a);(t===document.body||t===window||t===document)&&Z(()=>{t.removeEventListener(e,f,a)})}function je(e){for(var t=0;t<e.length;t++)pe.add(e[t]);for(var r of ve)r(e)}function ge(e){var B;var t=this,r=t.ownerDocument,s=e.type,o=((B=e.composedPath)==null?void 0:B.call(e))||[],a=o[0]||e.target,f=0,n=e.__root;if(n){var p=o.indexOf(n);if(p!==-1&&(t===document||t===window)){e.__root=t;return}var c=o.indexOf(t);if(c===-1)return;p<=c&&(f=p)}if(a=o[f]||e.target,a!==t){$(e,"currentTarget",{configurable:!0,get(){return a||r}});var V=H,j=J;S(null),q(null);try{for(var i,d=[];a!==null;){var x=a.assignedSlot||a.parentNode||a.host||null;try{var l=a["__"+s];if(l!==void 0&&!a.disabled)if(K(l)){var[v,...g]=l;v.apply(a,[e,...g])}else l.call(a,e)}catch(b){i?d.push(b):i=b}if(e.cancelBubble||x===t||x===null)break;a=x}if(i){for(let b of d)queueMicrotask(()=>{throw b});throw i}}finally{e.__root=t,delete e.currentTarget,S(V),q(j)}}}function xe(e,t){var a;var r=(a=e.$$events)==null?void 0:a[t.type],s=K(r)?r.slice():r==null?[]:[r];for(var o of s)o.call(this,t)}const he=e=>!!e&&typeof e=="object"&&"prefix"in e&&typeof e.prefix=="string"&&e.prefix.startsWith("fa");var me=T("<span><!></span>"),ke=T('<div class="flex flex-row p-0 m-0 bg-transparent justify-center items-center space-x-[4px]"><!> <!></div>'),we=T('<button type="button"><!></button>');function Pe(e,t){const r=le(t),s=ee(t,["children","$$slots","$$events","$$legacy"]);te(t,!1);let o=y(t,"title",8,void 0),a=y(t,"inProgress",8,!1),f=y(t,"disabled",8,!1),n=y(t,"type",8,"primary"),p=y(t,"icon",8,void 0),c=y(t,"selected",8,void 0),V=y(t,"padding",24,()=>"px-4 "+(n()==="tab"?"pb-1":n()==="secondary"?"py-[4px]":n()==="danger"?"py-[3px]":"py-[5px]")),j=N(void 0),i=N("");M(()=>(m(c()),m(n())),()=>{c()!==void 0&&n()!=="tab"&&console.error("property selected can be used with type=tab only")}),M(()=>(m(f()),m(a()),m(n()),k(i)),()=>{f()||a()?(n()==="primary"?u(i,"bg-[var(--pd-button-disabled)]"):n()==="secondary"?u(i,"border-[1px] border-[var(--pd-button-disabled)] bg-[var(--pd-button-disabled)]"):n()==="danger"&&u(i,"border-2 border-[var(--pd-button-danger-disabled-border)] text-[var(--pd-button-danger-disabled-text)] bg-[var(--pd-button-danger-disabled-bg)]"),n()!=="danger"&&u(i,k(i)+" text-[var(--pd-button-disabled-text)]")):n()==="primary"?u(i,"bg-[var(--pd-button-primary-bg)] text-[var(--pd-button-text)] border-none hover:bg-[var(--pd-button-primary-hover-bg)]"):n()==="secondary"?u(i,"border-[1px] border-[var(--pd-button-secondary)] text-[var(--pd-button-secondary)] hover:bg-[var(--pd-button-secondary-hover)] hover:border-[var(--pd-button-secondary-hover)] hover:text-[var(--pd-button-text)]"):n()==="danger"?u(i,"border-2 border-[var(--pd-button-danger-border)] bg-[var(--pd-button-danger-bg)] text-[var(--pd-button-danger-text)] hover:bg-[var(--pd-button-danger-hover-bg)] hover:text-[var(--pd-button-danger-hover-text)]"):n()==="tab"?u(i,"border-b-[3px] border-[var(--pd-button-tab-border)]"):u(i,"border-none text-[var(--pd-button-link-text)] hover:bg-[var(--pd-button-link-hover-bg)]"),n()!=="tab"&&u(i,k(i)+" rounded-[4px]")}),ae(),re();var d=we(),x=O(d);w(x,()=>p()||a(),l=>{var v=ke();P(v,"py-[3px]",!r.default);var g=O(v);w(g,a,b=>{ce(b,{size:"1em"})},b=>{var h=E(),z=L(h);w(z,()=>he(p()),F=>{be(F,{get icon(){return p()}})},F=>{var W=E(),C=L(W);w(C,()=>k(j)==="unknown",R=>{var I=E(),U=L(I);ne(U,p,(X,Y)=>{Y(X,{})}),_(R,I)},null,!0),_(F,W)},!0),_(b,h)});var B=se(g,2);w(B,()=>r.default,b=>{var h=me(),z=O(h);A(z,t,"default",{}),_(b,h)}),_(l,v)},l=>{var v=E(),g=L(v);A(g,t,"default",{}),_(l,v)}),ie(()=>{ue(d,`relative ${V()??""} box-border whitespace-nowrap select-none transition-all ${k(i)??""} ${s.class??""??""}`),d.hidden=s.hidden,D(d,"title",o()),D(d,"aria-label",s["aria-label"]),d.disabled=f()||a(),P(d,"border-[var(--pd-button-tab-border-selected)]",n()==="tab"&&c()),P(d,"hover:border-[var(--pd-button-tab-hover-border)]",n()==="tab"&&!c()),P(d,"text-[var(--pd-button-tab-text-selected)]",n()==="tab"&&c()),P(d,"text-[var(--pd-button-tab-text)]",n()==="tab"&&!c())}),_e("click",d,function(l){xe.call(this,t,l)}),_(e,d),oe()}Pe.__docgen={keywords:[],data:[{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"inProgress",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"primary",text:'"primary"'},{kind:"const",type:"string",value:"secondary",text:'"secondary"'},{kind:"const",type:"string",value:"danger",text:'"danger"'},{kind:"const",type:"string",value:"link",text:'"link"'},{kind:"const",type:"string",value:"tab",text:'"tab"'}],text:'"primary" | "secondary" | "danger" | "link" | "tab"'},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"selected",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"padding",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"Button.svelte"};export{Pe as B,xe as b,je as d,_e as e,Ve as l};

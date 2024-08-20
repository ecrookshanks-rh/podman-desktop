const pt="5.0.0-next.225",hr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hr);const wr=1,mr=2,Un=4,yr=8,Er=16,Vn=1,gr=2,Z=Symbol();var Yn=Array.isArray,br=Array.from,xr=Object.isFrozen,Wn=Object.defineProperty,k=Object.getOwnPropertyDescriptor,Tr=Object.getOwnPropertyDescriptors,Or=Object.prototype,Pr=Array.prototype,zn=Object.getPrototypeOf;function en(n){return typeof n=="function"}const ht=()=>{};function Sr(n){return n()}function an(n){for(var r=0;r<n.length;r++)n[r]()}function wt(n,r,t=!1){return n===void 0?t?r():r:n}const N=2,Gn=4,U=8,Hn=16,O=32,En=64,I=128,un=256,x=512,D=1024,V=2048,B=4096,Y=8192,Rr=16384,gn=32768,Dr=65536,Ar=1<<18,w=Symbol("$state"),mt=Symbol("");function Zn(n){return n===this.v}function Nr(n,r){return n!=n?r==r:n!==r||n!==null&&typeof n=="object"||typeof n=="function"}function bn(n){return!Nr(n,this.v)}function Ir(n){throw new Error("effect_in_teardown")}function Cr(){throw new Error("effect_in_unowned_derived")}function qr(n){throw new Error("effect_orphan")}function Lr(){throw new Error("effect_update_depth_exceeded")}function Fr(n){throw new Error("props_invalid_value")}function Mr(){throw new Error("state_unsafe_mutation")}function K(n){return{f:0,v:n,reactions:null,equals:Zn,version:0}}function jr(n){var t;const r=K(n);return r.equals=bn,a!==null&&a.l!==null&&((t=a.l).s??(t.s=[])).push(r),r}function T(n,r){return d!==null&&wn()&&d.f&N&&Mr(),n.equals(r)||(n.v=r,n.version=fr(),Jn(n,D),wn()&&v!==null&&v.f&x&&!(v.f&O)&&(y!==null&&y.includes(n)?(b(v,D),fn(v)):R===null?Wr([n]):R.push(n))),r}function Jn(n,r){var t=n.reactions;if(t!==null)for(var e=wn(),u=t.length,i=0;i<u;i++){var s=t[i],o=s.f;o&D||!e&&s===v||(b(s,r),o&(x|I)&&(o&N?Jn(s,V):fn(s)))}}function Qn(n){v===null&&d===null&&qr(),d!==null&&d.f&I&&Cr(),Tn&&Ir()}function Nn(n,r){var t=r.last;t===null?r.last=r.first=n:(t.next=n,n.prev=t,r.last=n)}function W(n,r,t,e=!0){var u=(n&En)!==0,i=v,s={ctx:a,deps:null,nodes_start:null,nodes_end:null,f:n|D,first:null,fn:r,last:null,next:null,parent:u?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var o=j;try{Cn(!0),tn(s),s.f|=Rr}catch(f){throw on(s),f}finally{Cn(o)}}else r!==null&&fn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null;return!l&&!u&&e&&(i!==null&&Nn(s,i),d!==null&&d.f&N&&Nn(s,d)),s}function kr(n){const r=W(U,null,!1);return b(r,x),r.teardown=n,r}function cn(n){Qn();var r=v!==null&&(v.f&U)!==0&&a!==null&&!a.m;if(r){var t=a;(t.e??(t.e=[])).push(n)}else{var e=xn(n);return e}}function Br(n){return Qn(),rn(n)}function Kr(n){const r=W(En,n,!0);return()=>{on(r)}}function xn(n){return W(Gn,n,!1)}function yt(n,r){var t=a,e={effect:null,ran:!1};t.l.r1.push(e),e.effect=rn(()=>{n(),!e.ran&&(e.ran=!0,T(t.l.r2,!0),G(r))})}function Et(){var n=a;rn(()=>{if(g(n.l.r2)){for(var r of n.l.r1){var t=r.effect;z(t)&&tn(t),r.ran=!1}n.l.r2.v=!1}})}function rn(n){return W(U,n,!0)}function gt(n){return rn(n)}function Xn(n,r=0){return W(U|Hn|r,n,!0)}function sn(n,r=!0){return W(U|O,n,!0,r)}function nr(n){var r=n.teardown;if(r!==null){const t=Tn,e=d;qn(!0),Ln(null);try{r.call(null)}finally{qn(t),Ln(e)}}}function on(n,r=!0){var t=!1;if((r||n.f&Ar)&&n.nodes_start!==null){for(var e=n.nodes_start,u=n.nodes_end;e!==null;){var i=e===u?null:Rn(e);e.remove(),e=i}t=!0}On(n,r&&!t),nn(n,0),b(n,Y);var s=n.transitions;if(s!==null)for(const l of s)l.stop();nr(n);var o=n.parent;o!==null&&n.f&O&&o.first!==null&&rr(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function rr(n){var r=n.parent,t=n.prev,e=n.next;t!==null&&(t.next=e),e!==null&&(e.prev=t),r!==null&&(r.first===n&&(r.first=e),r.last===n&&(r.last=t))}function _n(n,r){var t=[];tr(n,t,!0),$r(t,()=>{on(n),r&&r()})}function $r(n,r){var t=n.length;if(t>0){var e=()=>--t||r();for(var u of n)u.out(e)}else r()}function tr(n,r,t){if(!(n.f&B)){if(n.f^=B,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&r.push(s);for(var e=n.first;e!==null;){var u=e.next,i=(e.f&gn)!==0||(e.f&O)!==0;tr(e,r,i?t:!1),e=u}}}function In(n){er(n,!0)}function er(n,r){if(n.f&B){n.f^=B,z(n)&&tn(n);for(var t=n.first;t!==null;){var e=t.next,u=(t.f&gn)!==0||(t.f&O)!==0;er(t,u?r:!1),t=e}if(n.transitions!==null)for(const i of n.transitions)(i.is_global||r)&&i.in()}}let vn=!1,dn=[];function Ur(){vn=!1;const n=dn.slice();dn=[],an(n)}function ur(n){vn||(vn=!0,queueMicrotask(Ur)),dn.push(n)}function pn(n){let r=N|D;v===null&&(r|=I);const t={deps:null,deriveds:null,equals:Zn,f:r,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(d!==null&&d.f&N){var e=d;e.deriveds===null?e.deriveds=[t]:e.deriveds.push(t)}return t}function Vr(n){const r=pn(n);return r.equals=bn,r}function ir(n){On(n);var r=n.deriveds;if(r!==null){n.deriveds=null;for(var t=0;t<r.length;t+=1)Yr(r[t])}}function sr(n){var r;ir(n),r=ar(n);var t=(M||n.f&I)&&n.deps!==null?V:x;b(n,t),n.equals(r)||(n.v=r,n.version=fr())}function Yr(n){ir(n),nn(n,0),b(n,Y),n.first=n.last=n.deps=n.reactions=n.fn=null}function lr(n){throw new Error("lifecycle_outside_component")}let ln=!1,j=!1,Tn=!1;function Cn(n){j=n}function qn(n){Tn=n}let hn=[],X=0,d=null;function Ln(n){d=n}let v=null,y=null,E=0,R=null;function Wr(n){R=n}let or=0,M=!1,a=null;function fr(){return or++}function wn(){return a!==null&&a.l===null}function z(n){var s,o;var r=n.f;if(r&D)return!0;if(r&V){var t=n.deps,e=(r&I)!==0;if(t!==null){var u;if(r&un){for(u=0;u<t.length;u++)((s=t[u]).reactions??(s.reactions=[])).push(n);n.f^=un}for(u=0;u<t.length;u++){var i=t[u];if(z(i)&&sr(i),i.version>n.version)return!0;e&&!M&&!((o=i==null?void 0:i.reactions)!=null&&o.includes(n))&&(i.reactions??(i.reactions=[])).push(n)}}e||b(n,x)}return!1}function zr(n,r,t){throw n}function ar(n){var f;var r=y,t=E,e=R,u=d,i=M;y=null,E=0,R=null,d=n.f&(O|En)?null:n,M=!j&&(n.f&I)!==0;try{var s=(0,n.fn)(),o=n.deps;if(y!==null){var l;if(nn(n,E),o!==null&&E>0)for(o.length=E+y.length,l=0;l<y.length;l++)o[E+l]=y[l];else n.deps=o=y;if(!M)for(l=E;l<o.length;l++)((f=o[l]).reactions??(f.reactions=[])).push(n)}else o!==null&&E<o.length&&(nn(n,E),o.length=E);return s}finally{y=r,E=t,R=e,d=u,M=i}}function Gr(n,r){let t=r.reactions;if(t!==null){var e=t.indexOf(n);if(e!==-1){var u=t.length-1;u===0?t=r.reactions=null:(t[e]=t[u],t.pop())}}t===null&&r.f&N&&(b(r,V),r.f&(I|un)||(r.f^=un),nn(r,0))}function nn(n,r){var t=n.deps;if(t!==null)for(var e=r;e<t.length;e++)Gr(n,t[e])}function On(n,r=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var e=t.next;on(t,r),t=e}}function tn(n){var r=n.f;if(!(r&Y)){b(n,x);var t=n.ctx,e=v,u=a;v=n,a=t;try{r&Hn||On(n),nr(n);var i=ar(n);n.teardown=typeof i=="function"?i:null,n.version=or}catch(s){zr(s)}finally{v=e,a=u}}}function Hr(){X>1e3&&(X=0,Lr()),X++}function Zr(n){var r=n.length;if(r!==0){Hr();var t=j;j=!0;try{for(var e=0;e<r;e++){var u=n[e];if(u.first===null&&!(u.f&O))Fn([u]);else{var i=[];cr(u,i),Fn(i)}}}finally{j=t}}}function Fn(n){var r=n.length;if(r!==0)for(var t=0;t<r;t++){var e=n[t];!(e.f&(Y|B))&&z(e)&&(tn(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?rr(e):e.fn=null))}}function Jr(){if(ln=!1,X>1001)return;const n=hn;hn=[],Zr(n),ln||(X=0)}function fn(n){ln||(ln=!0,queueMicrotask(Jr));for(var r=n;r.parent!==null;){r=r.parent;var t=r.f;if(t&O){if(!(t&x))return;b(r,V)}}hn.push(r)}function cr(n,r){var t=n.first,e=[];n:for(;t!==null;){var u=t.f,i=(u&(Y|B))===0,s=(u&O)!==0,o=(u&x)!==0,l=t.first;if(i&&(!s||!o)){if(s&&b(t,x),u&U){if(!s&&z(t)&&(tn(t),l=t.first),l!==null){t=l;continue}}else if(u&Gn)if(s||o){if(l!==null){t=l;continue}}else e.push(t)}var f=t.next;if(f===null){let h=t.parent;for(;h!==null;){if(n===h)break n;var _=h.next;if(_!==null){t=_;continue n}h=h.parent}}t=f}for(var c=0;c<e.length;c++)l=e[c],r.push(l),cr(l,r)}function g(n){var r=n.f;if(r&Y)return n.v;if(d!==null){var t=d.deps;y===null&&t!==null&&t[E]===n?E++:y===null?y=[n]:y.push(n),R!==null&&v!==null&&v.f&x&&!(v.f&O)&&R.includes(n)&&(b(v,D),fn(v))}if(r&N){var e=n;z(e)&&sr(e)}return n.v}function G(n){const r=d;try{return d=null,n()}finally{d=r}}const Qr=~(D|V|x);function b(n,r){n.f=n.f&Qr|r}function bt(n){return Pn().get(n)}function xt(n,r){return Pn().set(n,r),r}function Tt(n){return Pn().has(n)}function Pn(n){return a===null&&lr(),a.c??(a.c=new Map(Xr(a)||void 0))}function Xr(n){let r=n.p;for(;r!==null;){const t=r.c;if(t!==null)return t;r=r.p}return null}function Mn(n,r=1){var t=+g(n);return T(n,t+r),t}function Ot(n,r){var t={};for(var e in n)r.includes(e)||(t[e]=n[e]);return t}function nt(n,r=!1,t){a={p:a,c:null,e:null,m:!1,s:n,x:null,l:null},r||(a.l={s:null,u:null,r1:[],r2:K(!1)})}function rt(n){const r=a;if(r!==null){n!==void 0&&(r.x=n);const e=r.e;if(e!==null){r.e=null;for(var t=0;t<e.length;t++)xn(e[t])}a=r.p,r.m=!0}return n||{}}function tt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(w in n)mn(n);else if(!Array.isArray(n))for(let r in n){const t=n[r];typeof t=="object"&&t&&w in t&&mn(t)}}}function mn(n,r=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!r.has(n)){r.add(n),n instanceof Date&&n.getTime();for(let e in n)try{mn(n[e],r)}catch{}const t=zn(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const e=Tr(t);for(let u in e){const i=e[u].get;if(i)try{i.call(n)}catch{}}}}}function J(n,r=null,t){if(typeof n=="object"&&n!=null&&!xr(n)){if(w in n){const u=n[w];if(u.t===n||u.p===n)return u.p}const e=zn(n);if(e===Or||e===Pr){const u=new Proxy(n,et);return Wn(n,w,{value:{s:new Map,v:K(0),a:Yn(n),p:u,t:n},writable:!0,enumerable:!1}),u}}return n}function jn(n,r=1){T(n,n.v+r)}const et={defineProperty(n,r,t){if(t.value){const e=n[w],u=e.s.get(r);u!==void 0&&T(u,J(t.value,e))}return Reflect.defineProperty(n,r,t)},deleteProperty(n,r){const t=n[w],e=t.s.get(r),u=t.a,i=delete n[r];if(u&&i){const s=t.s.get("length"),o=n.length-1;s!==void 0&&s.v!==o&&T(s,o)}return e!==void 0&&T(e,Z),i&&jn(t.v),i},get(n,r,t){var i;if(r===w)return Reflect.get(n,w);const e=n[w];let u=e.s.get(r);if(u===void 0&&(!(r in n)||(i=k(n,r))!=null&&i.writable)&&(u=K(J(n[r],e)),e.s.set(r,u)),u!==void 0){const s=g(u);return s===Z?void 0:s}return Reflect.get(n,r,t)},getOwnPropertyDescriptor(n,r){const t=Reflect.getOwnPropertyDescriptor(n,r);if(t&&"value"in t){const u=n[w].s.get(r);u&&(t.value=g(u))}return t},has(n,r){var i;if(r===w)return!0;const t=n[w],e=Reflect.has(n,r);let u=t.s.get(r);return(u!==void 0||v!==null&&(!e||(i=k(n,r))!=null&&i.writable))&&(u===void 0&&(u=K(e?J(n[r],t):Z),t.s.set(r,u)),g(u)===Z)?!1:e},set(n,r,t,e){const u=n[w];let i=u.s.get(r);i===void 0&&(G(()=>e[r]),i=u.s.get(r)),i!==void 0&&T(i,J(t,u));const s=u.a,o=!(r in n);if(s&&r==="length")for(let f=t;f<n.length;f+=1){const _=u.s.get(f+"");_!==void 0&&T(_,Z)}var l=Reflect.getOwnPropertyDescriptor(n,r);if(l!=null&&l.set?l.set.call(e,t):n[r]=t,o){if(s){const f=u.s.get("length"),_=n.length;f!==void 0&&f.v!==_&&T(f,_)}jn(u.v)}return!0},ownKeys(n){const r=n[w];return g(r.v),Reflect.ownKeys(n)}};var kn,_r,vr;function ut(){if(kn===void 0){kn=window;var n=Element.prototype,r=Node.prototype;_r=k(r,"firstChild").get,vr=k(r,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function Sn(n=""){return document.createTextNode(n)}function P(n){return _r.call(n)}function Rn(n){return vr.call(n)}function Pt(n){return P(n)}function St(n,r){{var t=P(n);return t instanceof Comment&&t.data===""?Rn(t):t}}function Rt(n,r=!1){return Rn(n)}const it=new Set,Bn=new Set;function st(n,r,t,e){function u(i){if(e.capture||Q.call(r,i),!i.cancelBubble)return t.call(this,i)}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?ur(()=>{r.addEventListener(n,u,e)}):r.addEventListener(n,u,e),u}function Dt(n,r,t,e,u){var i={capture:e,passive:u},s=st(n,r,t,i);(r===document.body||r===window||r===document)&&kr(()=>{r.removeEventListener(n,s,i)})}function Q(n){var q;var r=this,t=r.ownerDocument,e=n.type,u=((q=n.composedPath)==null?void 0:q.call(n))||[],i=u[0]||n.target,s=0,o=n.__root;if(o){var l=u.indexOf(o);if(l!==-1&&(r===document||r===window)){n.__root=r;return}var f=u.indexOf(r);if(f===-1)return;l<=f&&(s=l)}if(i=u[s]||n.target,i!==r){Wn(n,"currentTarget",{configurable:!0,get(){return i||t}});try{for(var _,c=[];i!==null;){var h=i.parentNode||i.host||null;try{var p=i["__"+e];if(p!==void 0&&!i.disabled)if(Yn(p)){var[A,...C]=p;A.apply(i,[n,...C])}else p.call(i,n)}catch(S){_?c.push(S):_=S}if(n.cancelBubble||h===r||h===null)break;i=h}if(_){for(let S of c)queueMicrotask(()=>{throw S});throw _}}finally{n.__root=r,i=r}}}function dr(n){var r=document.createElement("template");return r.innerHTML=n,r.content}function $(n,r){var t=v;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=r)}function At(n,r){var t=(r&Vn)!==0,e=(r&gr)!==0,u,i=!n.startsWith("<!>");return()=>{u===void 0&&(u=dr(i?n:"<!>"+n),t||(u=P(u)));var s=e?document.importNode(u,!0):u.cloneNode(!0);if(t){var o=P(s),l=s.lastChild;$(o,l)}else $(s,s);return s}}function Nt(n,r,t="svg"){var e=!n.startsWith("<!>"),u=(r&Vn)!==0,i=`<${t}>${e?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var o=dr(i),l=P(o);if(u)for(s=document.createDocumentFragment();P(l);)s.appendChild(P(l));else s=P(l)}var f=s.cloneNode(!0);if(u){var _=P(f),c=f.lastChild;$(_,c)}else $(f,f);return f}}function It(n=""){{var r=Sn(n+"");return $(r,r),r}}function Ct(){var n=document.createDocumentFragment(),r=document.createComment(""),t=Sn();return n.append(r,t),$(r,t),n}function qt(n,r){n!==null&&n.before(r)}const lt=["wheel","touchstart","touchmove","touchend","touchcancel"];function ot(n){return lt.includes(n)}function Lt(n,r){r!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=r,n.nodeValue=r==null?"":r+"")}function Ft(n,r){const t=r.anchor??r.target.appendChild(Sn());return ft(n,{...r,anchor:t})}const F=new Map;function ft(n,{target:r,anchor:t,props:e={},events:u,context:i,intro:s=!0}){ut();var o=new Set,l=c=>{for(var h=0;h<c.length;h++){var p=c[h];if(!o.has(p)){o.add(p);var A=ot(p);r.addEventListener(p,Q,{passive:A});var C=F.get(p);C===void 0?(document.addEventListener(p,Q,{passive:A}),F.set(p,1)):F.set(p,C+1)}}};l(br(it)),Bn.add(l);var f=void 0,_=Kr(()=>(sn(()=>{if(i){nt({});var c=a;c.c=i}u&&(e.$$events=u),f=n(t,e)||{},i&&rt()}),()=>{for(var c of o){r.removeEventListener(c,Q);var h=F.get(c);--h===0?(document.removeEventListener(c,Q),F.delete(c)):F.set(c,h)}Bn.delete(l),yn.delete(f)}));return yn.set(f,_),f}let yn=new WeakMap;function Mt(n){const r=yn.get(n);r==null||r()}function jt(n,r,t,e=null,u=!1){var i=n,s=null,o=null,l=null,f=u?gn:0;Xn(()=>{l!==(l=!!r())&&(l?(s?In(s):s=sn(()=>t(i)),o&&_n(o,()=>{o=null})):(o?In(o):e&&(o=sn(()=>e(i))),s&&_n(s,()=>{s=null})))},f)}function kt(n,r,t){var e=n,u,i;Xn(()=>{u!==(u=r())&&(i&&(_n(i),i=null),u&&(i=sn(()=>t(e,u))))})}function Kn(n,r){var e;var t=n&&((e=n[w])==null?void 0:e.t);return n===r||t===r}function Bt(n={},r,t,e){return xn(()=>{var u,i;return rn(()=>{u=i,i=(e==null?void 0:e())||[],G(()=>{n!==t(...i)&&(r(n,...i),u&&Kn(t(...u),n)&&r(null,...u))})}),()=>{ur(()=>{i&&Kn(t(...i),n)&&r(null,...i)})}}),n}function Kt(){const n=a,r=n.l.u;r&&(r.b.length&&Br(()=>{$n(n),an(r.b)}),cn(()=>{const t=G(()=>r.m.map(Sr));return()=>{for(const e of t)typeof e=="function"&&e()}}),r.a.length&&cn(()=>{$n(n),an(r.a)}))}function $n(n){if(n.l.s)for(const r of n.l.s)g(r);tt(n.s)}const at={get(n,r){if(!n.exclude.includes(r))return n.props[r]},set(n,r){return!1},getOwnPropertyDescriptor(n,r){if(!n.exclude.includes(r)&&r in n.props)return{enumerable:!0,configurable:!0,value:n.props[r]}},has(n,r){return n.exclude.includes(r)?!1:r in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(r=>!n.exclude.includes(r))}};function $t(n,r,t){return new Proxy({props:n,exclude:r},at)}const ct={get(n,r){if(!n.exclude.includes(r))return g(n.version),r in n.special?n.special[r]():n.props[r]},set(n,r,t){return r in n.special||(n.special[r]=vt({get[r](){return n.props[r]}},r,Un)),n.special[r](t),Mn(n.version),!0},getOwnPropertyDescriptor(n,r){if(!n.exclude.includes(r)&&r in n.props)return{enumerable:!0,configurable:!0,value:n.props[r]}},deleteProperty(n,r){return n.exclude.includes(r)?!1:(n.exclude.push(r),Mn(n.version),!0)},has(n,r){return n.exclude.includes(r)?!1:r in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(r=>!n.exclude.includes(r))}};function Ut(n,r){return new Proxy({props:n,exclude:r,special:{},version:K(0)},ct)}const _t={get(n,r){let t=n.props.length;for(;t--;){let e=n.props[t];if(en(e)&&(e=e()),typeof e=="object"&&e!==null&&r in e)return e[r]}},getOwnPropertyDescriptor(n,r){let t=n.props.length;for(;t--;){let e=n.props[t];if(en(e)&&(e=e()),typeof e=="object"&&e!==null&&r in e){const u=k(e,r);return u&&!u.configurable&&(u.configurable=!0),u}}},has(n,r){for(let t of n.props)if(en(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(n){const r=[];for(let t of n.props){en(t)&&(t=t());for(const e in t)r.includes(e)||r.push(e)}return r}};function Vt(...n){return new Proxy({props:n},_t)}function vt(n,r,t,e){var Dn;var u=(t&wr)!==0,i=(t&mr)!==0,s=(t&yr)!==0,o=(t&Er)!==0,l=n[r],f=(Dn=k(n,r))==null?void 0:Dn.set,_=e,c=!0,h=()=>(o&&c&&(c=!1,_=G(e)),_);l===void 0&&e!==void 0&&(f&&i&&Fr(),l=h(),f&&f(l));var p;if(i)p=()=>{var m=n[r];return m===void 0?h():(c=!0,m)};else{var A=(u?pn:Vr)(()=>n[r]);A.f|=Dr,p=()=>{var m=g(A);return m!==void 0&&(_=void 0),m===void 0?_:m}}if(!(t&Un))return p;if(f){var C=n.$$legacy;return function(m,L){return arguments.length>0?((!i||!L||C)&&f(L?p():m),m):p()}}var q=!1,S=jr(l),H=pn(()=>{var m=p(),L=g(S);return q?(q=!1,L):S.v=m});return u||(H.equals=bn),function(m,L){var pr=g(H);if(arguments.length>0){const An=L?g(H):i&&s?J(m):m;return H.equals(An)||(q=!0,T(S,An),g(H)),m}return pr}}function Yt(n){a===null&&lr(),a.l!==null?dt(a).m.push(n):cn(()=>{const r=G(n);if(typeof r=="function")return r})}function dt(n){var r=n.l;return r.u??(r.u={a:[],b:[],m:[]})}export{kt as A,Dt as B,xt as C,J as D,gn as E,Tt as F,bt as G,K as H,cn as I,Vt as J,$t as K,mt as L,pn as M,Ft as N,Mt as O,It as P,Lt as Q,ht as R,Ot as S,wt as T,Vr as U,pt as V,sn as a,Xn as b,vt as c,on as d,tt as e,Et as f,g,Kt as h,Yn as i,Ct as j,St as k,yt as l,jt as m,Bt as n,Pt as o,nt as p,qt as q,rt as r,Rt as s,gt as t,Nt as u,jr as v,T as w,Ut as x,At as y,Yt as z};

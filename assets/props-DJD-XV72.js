const $r="5.1.15",Bn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bn);let oe=!1;function Vn(){oe=!0}Vn();const Yr=1,Wr=2,Gr=4,zr=8,Zr=16,Hn=1,Un=2,rn=4,Kn=8,$n=16,tn=1,Yn=2,x=Symbol(),un=!1;var sn=Array.isArray,Wn=Array.from,Gn=Object.defineProperty,q=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyDescriptors,Zn=Object.prototype,Xn=Array.prototype,ln=Object.getPrototypeOf;function se(e){return typeof e=="function"}const Se=()=>{};function Jn(e){return e()}function Ae(e){for(var n=0;n<e.length;n++)e[n]()}function Xr(e,n,r=!1){return e===void 0?r?n():n:e}const N=2,fn=4,ce=8,Ne=16,I=32,_e=64,U=128,ye=256,b=512,j=1024,ne=2048,Q=4096,ve=8192,Qn=16384,be=32768,an=65536,er=1<<18,on=1<<19,V=Symbol("$state"),Jr=Symbol("");function cn(e){return e===this.v}function nr(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Re(e){return!nr(e,this.v)}function rr(e){throw new Error("effect_in_teardown")}function tr(){throw new Error("effect_in_unowned_derived")}function ur(e){throw new Error("effect_orphan")}function ir(){throw new Error("effect_update_depth_exceeded")}function Qr(e){throw new Error("lifecycle_legacy_only")}function sr(e){throw new Error("props_invalid_value")}function lr(){throw new Error("state_descriptors_fixed")}function fr(){throw new Error("state_prototype_fixed")}function ar(){throw new Error("state_unsafe_local_read")}function or(){throw new Error("state_unsafe_mutation")}function A(e){return{f:0,v:e,reactions:null,equals:cn,version:0}}function et(e){return _n(A(e))}function Le(e,n=!1){var t;const r=A(e);return n||(r.equals=Re),oe&&p!==null&&p.l!==null&&((t=p.l).s??(t.s=[])).push(r),r}function nt(e,n=!1){return _n(Le(e,n))}function _n(e){return h!==null&&h.f&N&&(D===null?br([e]):D.push(e)),e}function Ke(e,n){return S(e,H(()=>g(e))),n}function S(e,n){return h!==null&&ke()&&h.f&(N|Ne)&&(D===null||!D.includes(e))&&or(),cr(e,n)}function cr(e,n){return e.equals(n)||(e.v=n,e.version=In(),vn(e,j),ke()&&d!==null&&d.f&b&&!(d.f&I)&&(E!==null&&E.includes(e)?(C(d,j),xe(d)):F===null?xr([e]):F.push(e))),n}function vn(e,n){var r=e.reactions;if(r!==null)for(var t=ke(),u=r.length,i=0;i<u;i++){var s=r[i],c=s.f;c&j||!t&&s===d||(C(s,n),c&(b|U)&&(c&N?vn(s,ne):xe(s)))}}function ge(e){var n=N|j;d===null?n|=U:d.f|=on;const r={children:null,ctx:p,deps:null,equals:cn,f:n,fn:e,reactions:null,v:null,version:0,parent:d};if(h!==null&&h.f&N){var t=h;(t.children??(t.children=[])).push(r)}return r}function _r(e){const n=ge(e);return n.equals=Re,n}function dn(e){var n=e.children;if(n!==null){e.children=null;for(var r=0;r<n.length;r+=1){var t=n[r];t.f&N?Me(t):te(t)}}}function pn(e){var n,r=d;R(e.parent);try{dn(e),n=Cn(e)}finally{R(r)}return n}function hn(e){var n=pn(e),r=(z||e.f&U)&&e.deps!==null?ne:b;C(e,r),e.equals(n)||(e.v=n,e.version=In())}function Me(e){dn(e),ae(e,0),C(e,ve),e.v=e.children=e.deps=e.ctx=e.reactions=null}function wn(e){d===null&&h===null&&ur(),h!==null&&h.f&U&&tr(),je&&rr()}function vr(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function re(e,n,r,t=!0){var u=(e&_e)!==0,i=d,s={ctx:p,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:n,last:null,next:null,parent:u?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var c=X;try{We(!0),de(s),s.f|=Qn}catch(f){throw te(s),f}finally{We(c)}}else n!==null&&xe(s);var o=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&on)===0;if(!o&&!u&&t&&(i!==null&&vr(s,i),h!==null&&h.f&N)){var l=h;(l.children??(l.children=[])).push(s)}return s}function yn(e){const n=re(ce,null,!1);return C(n,b),n.teardown=e,n}function $e(e){wn();var n=d!==null&&(d.f&I)!==0&&p!==null&&!p.m;if(n){var r=p;(r.e??(r.e=[])).push({fn:e,effect:d,reaction:h})}else{var t=gn(e);return t}}function dr(e){return wn(),qe(e)}function pr(e){const n=re(_e,e,!0);return()=>{te(n)}}function gn(e){return re(fn,e,!1)}function rt(e,n){var r=p,t={effect:null,ran:!1};r.l.r1.push(t),t.effect=qe(()=>{e(),!t.ran&&(t.ran=!0,S(r.l.r2,!0),H(n))})}function tt(){var e=p;qe(()=>{if(g(e.l.r2)){for(var n of e.l.r1){var r=n.effect;r.f&b&&C(r,ne),ue(r)&&de(r),n.ran=!1}e.l.r2.v=!1}})}function qe(e){return re(ce,e,!0)}function ut(e){return Fe(e)}function Fe(e,n=0){return re(ce|Ne|n,e,!0)}function Ee(e,n=!0){return re(ce|I,e,!0,n)}function En(e){var n=e.teardown;if(n!==null){const r=je,t=h;Ge(!0),k(null);try{n.call(null)}finally{Ge(r),k(t)}}}function mn(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var r=0;r<n.length;r+=1)Me(n[r])}}function bn(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;te(r,n),r=t}}function hr(e){for(var n=e.first;n!==null;){var r=n.next;n.f&I||te(n),n=r}}function te(e,n=!0){var r=!1;if((n||e.f&er)&&e.nodes_start!==null){for(var t=e.nodes_start,u=e.nodes_end;t!==null;){var i=t===u?null:He(t);t.remove(),t=i}r=!0}bn(e,n&&!r),mn(e),ae(e,0),C(e,ve);var s=e.transitions;if(s!==null)for(const o of s)o.stop();En(e);var c=e.parent;c!==null&&c.first!==null&&xn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function xn(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function Oe(e,n){var r=[];Tn(e,r,!0),wr(r,()=>{te(e),n&&n()})}function wr(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var u of e)u.out(t)}else n()}function Tn(e,n,r){if(!(e.f&Q)){if(e.f^=Q,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&n.push(s);for(var t=e.first;t!==null;){var u=t.next,i=(t.f&be)!==0||(t.f&I)!==0;Tn(t,n,i?r:!1),t=u}}}function Ye(e){Sn(e,!0)}function Sn(e,n){if(e.f&Q){ue(e)&&de(e),e.f^=Q;for(var r=e.first;r!==null;){var t=r.next,u=(r.f&be)!==0||(r.f&I)!==0;Sn(r,u?n:!1),r=t}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let me=!1,Pe=[];function An(){me=!1;const e=Pe.slice();Pe=[],Ae(e)}function yr(e){me||(me=!0,queueMicrotask(An)),Pe.push(e)}function gr(){me&&An()}function Er(e){throw new Error("lifecycle_outside_component")}const On=0,mr=1;let we=On,fe=!1,X=!1,je=!1;function We(e){X=e}function Ge(e){je=e}let B=[],J=0;let h=null;function k(e){h=e}let d=null;function R(e){d=e}let D=null;function br(e){D=e}let E=null,T=0,F=null;function xr(e){F=e}let Pn=0,z=!1,Z=!1,W=new Set,p=null;function In(){return++Pn}function ke(){return!oe||p!==null&&p.l===null}function ue(e){var s,c;var n=e.f;if(n&j)return!0;if(n&ne){var r=e.deps,t=(n&U)!==0;if(r!==null){var u;if(n&ye){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=[])).push(e);e.f^=ye}for(u=0;u<r.length;u++){var i=r[u];if(ue(i)&&hn(i),t&&d!==null&&!z&&!((c=i==null?void 0:i.reactions)!=null&&c.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}t||C(e,b)}return!1}function Tr(e,n,r){throw e}function Cn(e){var _;var n=E,r=T,t=F,u=h,i=z,s=D,c=p,o=e.f;E=null,T=0,F=null,h=o&(I|_e)?null:e,z=!X&&(o&U)!==0,D=null,p=e.ctx;try{var l=(0,e.fn)(),f=e.deps;if(E!==null){var a;if(ae(e,T),f!==null&&T>0)for(f.length=T+E.length,a=0;a<E.length;a++)f[T+a]=E[a];else e.deps=f=E;if(!z)for(a=T;a<f.length;a++)((_=f[a]).reactions??(_.reactions=[])).push(e)}else f!==null&&T<f.length&&(ae(e,T),f.length=T);return l}finally{E=n,T=r,F=t,h=u,z=i,D=s,p=c}}function Sr(e,n){let r=n.reactions;if(r!==null){var t=r.indexOf(e);if(t!==-1){var u=r.length-1;u===0?r=n.reactions=null:(r[t]=r[u],r.pop())}}r===null&&n.f&N&&(E===null||!E.includes(n))&&(C(n,ne),n.f&(U|ye)||(n.f^=ye),ae(n,0))}function ae(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Sr(e,r[t])}function de(e){var n=e.f;if(!(n&ve)){C(e,b);var r=d;d=e;try{n&Ne?hr(e):bn(e),mn(e),En(e);var t=Cn(e);e.teardown=typeof t=="function"?t:null,e.version=Pn}catch(u){Tr(u)}finally{d=r}}}function Dn(){J>1e3&&(J=0,ir()),J++}function Nn(e){var n=e.length;if(n!==0){Dn();var r=X;X=!0;try{for(var t=0;t<n;t++){var u=e[t];u.f&b||(u.f^=b);var i=[];Rn(u,i),Ar(i)}}finally{X=r}}}function Ar(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];!(t.f&(ve|Q))&&ue(t)&&(de(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?xn(t):t.fn=null))}}function Or(){if(fe=!1,J>1001)return;const e=B;B=[],Nn(e),fe||(J=0)}function xe(e){we===On&&(fe||(fe=!0,queueMicrotask(Or)));for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(r&(_e|I)){if(!(r&b))return;n.f^=b}}B.push(n)}function Rn(e,n){var r=e.first,t=[];e:for(;r!==null;){var u=r.f,i=(u&I)!==0,s=i&&(u&b)!==0;if(!s&&!(u&Q))if(u&ce){i?r.f^=b:ue(r)&&de(r);var c=r.first;if(c!==null){r=c;continue}}else u&fn&&t.push(r);var o=r.next;if(o===null){let a=r.parent;for(;a!==null;){if(e===a)break e;var l=a.next;if(l!==null){r=l;continue e}a=a.parent}}r=o}for(var f=0;f<t.length;f++)c=t[f],n.push(c),Rn(c,n)}function Ln(e){var n=we,r=B;try{Dn();const u=[];we=mr,B=u,fe=!1,Nn(r);var t=e==null?void 0:e();return gr(),(B.length>0||u.length>0)&&Ln(),J=0,t}finally{we=n,B=r}}async function it(){await Promise.resolve(),Ln()}function g(e){var c;var n=e.f,r=(n&N)!==0;if(r&&n&ve){var t=pn(e);return Me(e),t}if(Z&&W.add(e),h!==null){D!==null&&D.includes(e)&&ar();var u=h.deps;E===null&&u!==null&&u[T]===e?T++:E===null?E=[e]:E.push(e),F!==null&&d!==null&&d.f&b&&!(d.f&I)&&F.includes(e)&&(C(d,j),xe(d))}else if(r&&e.deps===null){var i=e,s=i.parent;s!==null&&!((c=s.deriveds)!=null&&c.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return r&&(i=e,ue(i)&&hn(i)),e.v}function st(e){var n=Z,r=W;Z=!0,W=new Set;var t=W,u;try{H(e)}finally{if(Z=n,Z)for(u of W)r.add(u);W=r}for(u of t)if(u.f&an)for(const i of u.deps||[])i.f&N||Ke(i,null);else Ke(u,null)}function H(e){const n=h;try{return h=null,e()}finally{h=n}}const Pr=~(j|ne|b);function C(e,n){e.f=e.f&Pr|n}function lt(e){return Be().get(e)}function ft(e,n){return Be().set(e,n),n}function at(e){return Be().has(e)}function Be(e){return p===null&&Er(),p.c??(p.c=new Map(Ir(p)||void 0))}function Ir(e){let n=e.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function ze(e,n=1){var r=+g(e);return S(e,r+n),r}function ot(e,n){var r={};for(var t in e)n.includes(t)||(r[t]=e[t]);return r}function Cr(e,n=!1,r){p={p,c:null,e:null,m:!1,s:e,x:null,l:null},oe&&!n&&(p.l={s:null,u:null,r1:[],r2:A(!1)})}function Dr(e){const n=p;if(n!==null){e!==void 0&&(n.x=e);const s=n.e;if(s!==null){var r=d,t=h;n.e=null;try{for(var u=0;u<s.length;u++){var i=s[u];R(i.effect),k(i.reaction),gn(i.fn)}}finally{R(r),k(t)}}p=n.p,n.m=!0}return e||{}}function Nr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(V in e)Ie(e);else if(!Array.isArray(e))for(let n in e){const r=e[n];typeof r=="object"&&r&&V in r&&Ie(r)}}}function Ie(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let t in e)try{Ie(e[t],n)}catch{}const r=ln(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=zn(r);for(let u in t){const i=t[u].get;if(i)try{i.call(e)}catch{}}}}}function G(e,n=null,r){if(typeof e!="object"||e===null||V in e)return e;const t=ln(e);if(t!==Zn&&t!==Xn)return e;var u=new Map,i=sn(e),s=A(0);i&&u.set("length",A(e.length));var c;return new Proxy(e,{defineProperty(o,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&lr();var a=u.get(l);return a===void 0?(a=A(f.value),u.set(l,a)):S(a,G(f.value,c)),!0},deleteProperty(o,l){var f=u.get(l);if(f===void 0)l in o&&u.set(l,A(x));else{if(i&&typeof l=="string"){var a=u.get("length"),_=Number(l);Number.isInteger(_)&&_<a.v&&S(a,_)}S(f,x),Ze(s)}return!0},get(o,l,f){var w;if(l===V)return e;var a=u.get(l),_=l in o;if(a===void 0&&(!_||(w=q(o,l))!=null&&w.writable)&&(a=A(G(_?o[l]:x,c)),u.set(l,a)),a!==void 0){var v=g(a);return v===x?void 0:v}return Reflect.get(o,l,f)},getOwnPropertyDescriptor(o,l){var f=Reflect.getOwnPropertyDescriptor(o,l);if(f&&"value"in f){var a=u.get(l);a&&(f.value=g(a))}else if(f===void 0){var _=u.get(l),v=_==null?void 0:_.v;if(_!==void 0&&v!==x)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(o,l){var v;if(l===V)return!0;var f=u.get(l),a=f!==void 0&&f.v!==x||Reflect.has(o,l);if(f!==void 0||d!==null&&(!a||(v=q(o,l))!=null&&v.writable)){f===void 0&&(f=A(a?G(o[l],c):x),u.set(l,f));var _=g(f);if(_===x)return!1}return a},set(o,l,f,a){var P;var _=u.get(l),v=l in o;if(i&&l==="length")for(var w=f;w<_.v;w+=1){var y=u.get(w+"");y!==void 0?S(y,x):w in o&&(y=A(x),u.set(w+"",y))}_===void 0?(!v||(P=q(o,l))!=null&&P.writable)&&(_=A(void 0),S(_,G(f,c)),u.set(l,_)):(v=_.v!==x,S(_,G(f,c)));var L=Reflect.getOwnPropertyDescriptor(o,l);if(L!=null&&L.set&&L.set.call(a,f),!v){if(i&&typeof l=="string"){var K=u.get("length"),O=Number(l);Number.isInteger(O)&&O>=K.v&&S(K,O+1)}Ze(s)}return!0},ownKeys(o){g(s);var l=Reflect.ownKeys(o).filter(_=>{var v=u.get(_);return v===void 0||v.v!==x});for(var[f,a]of u)a.v!==x&&!(f in o)&&l.push(f);return l},setPrototypeOf(){fr()}})}function Ze(e,n=1){S(e,e.v+n)}function Xe(e){return e!==null&&typeof e=="object"&&V in e?e[V]:e}function ct(e,n){return Object.is(Xe(e),Xe(n))}var Je,Mn,qn;function Rr(){if(Je===void 0){Je=window;var e=Element.prototype,n=Node.prototype;Mn=q(n,"firstChild").get,qn=q(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ve(e=""){return document.createTextNode(e)}function M(e){return Mn.call(e)}function He(e){return qn.call(e)}function _t(e,n){return M(e)}function vt(e,n){{var r=M(e);return r instanceof Comment&&r.data===""?He(r):r}}function dt(e,n=1,r=!1){let t=e;for(;n--;)t=He(t);return t}function pt(e){e.textContent=""}let Qe=!1;function Lr(){Qe||(Qe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const r of e.target.elements)(n=r.__on_r)==null||n.call(r)})},{capture:!0}))}function Fn(e){var n=h,r=d;k(null),R(null);try{return e()}finally{k(n),R(r)}}function ht(e,n,r,t=r){e.addEventListener(n,()=>Fn(r));const u=e.__on_r;u?e.__on_r=()=>{u(),t()}:e.__on_r=t,Lr()}const jn=new Set,Ce=new Set;function Mr(e,n,r,t){function u(i){if(t.capture||le.call(n,i),!i.cancelBubble)return Fn(()=>r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?yr(()=>{n.addEventListener(e,u,t)}):n.addEventListener(e,u,t),u}function wt(e,n,r,t,u){var i={capture:t,passive:u},s=Mr(e,n,r,i);(n===document.body||n===window||n===document)&&yn(()=>{n.removeEventListener(e,s,i)})}function yt(e){for(var n=0;n<e.length;n++)jn.add(e[n]);for(var r of Ce)r(e)}function le(e){var O;var n=this,r=n.ownerDocument,t=e.type,u=((O=e.composedPath)==null?void 0:O.call(e))||[],i=u[0]||e.target,s=0,c=e.__root;if(c){var o=u.indexOf(c);if(o!==-1&&(n===document||n===window)){e.__root=n;return}var l=u.indexOf(n);if(l===-1)return;o<=l&&(s=o)}if(i=u[s]||e.target,i!==n){Gn(e,"currentTarget",{configurable:!0,get(){return i||r}});var f=h,a=d;k(null),R(null);try{for(var _,v=[];i!==null;){var w=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+t];if(y!==void 0&&!i.disabled)if(sn(y)){var[L,...K]=y;L.apply(i,[e,...K])}else y.call(i,e)}catch(P){_?v.push(P):_=P}if(e.cancelBubble||w===n||w===null)break;i=w}if(_){for(let P of v)queueMicrotask(()=>{throw P});throw _}}finally{e.__root=n,delete e.currentTarget,k(f),R(a)}}}function kn(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function ee(e,n){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function gt(e,n){var r=(n&tn)!==0,t=(n&Yn)!==0,u,i=!e.startsWith("<!>");return()=>{u===void 0&&(u=kn(i?e:"<!>"+e),r||(u=M(u)));var s=t?document.importNode(u,!0):u.cloneNode(!0);if(r){var c=M(s),o=s.lastChild;ee(c,o)}else ee(s,s);return s}}function Et(e,n,r="svg"){var t=!e.startsWith("<!>"),u=(n&tn)!==0,i=`<${r}>${t?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var c=kn(i),o=M(c);if(u)for(s=document.createDocumentFragment();M(o);)s.appendChild(M(o));else s=M(o)}var l=s.cloneNode(!0);if(u){var f=M(l),a=l.lastChild;ee(f,a)}else ee(l,l);return l}}function mt(e=""){{var n=Ve(e+"");return ee(n,n),n}}function bt(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Ve();return e.append(n,r),ee(n,r),e}function xt(e,n){e!==null&&e.before(n)}const qr=["touchstart","touchmove"];function Fr(e){return qr.includes(e)}function Tt(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function St(e,n){return jr(e,n)}const Y=new Map;function jr(e,{target:n,anchor:r,props:t={},events:u,context:i,intro:s=!0}){Rr();var c=new Set,o=a=>{for(var _=0;_<a.length;_++){var v=a[_];if(!c.has(v)){c.add(v);var w=Fr(v);n.addEventListener(v,le,{passive:w});var y=Y.get(v);y===void 0?(document.addEventListener(v,le,{passive:w}),Y.set(v,1)):Y.set(v,y+1)}}};o(Wn(jn)),Ce.add(o);var l=void 0,f=pr(()=>{var a=r??n.appendChild(Ve());return Ee(()=>{if(i){Cr({});var _=p;_.c=i}u&&(t.$$events=u),l=e(a,t)||{},i&&Dr()}),()=>{var w;for(var _ of c){n.removeEventListener(_,le);var v=Y.get(_);--v===0?(document.removeEventListener(_,le),Y.delete(_)):Y.set(_,v)}Ce.delete(o),De.delete(l),a!==r&&((w=a.parentNode)==null||w.removeChild(a))}});return De.set(l,f),l}let De=new WeakMap;function At(e){const n=De.get(e);n&&n()}function Ot(e,n,r,t=null,u=!1){var i=e,s=null,c=null,o=null,l=u?be:0;Fe(()=>{o!==(o=!!n())&&(o?(s?Ye(s):s=Ee(()=>r(i)),c&&Oe(c,()=>{c=null})):(c?Ye(c):t&&(c=Ee(()=>t(i))),s&&Oe(s,()=>{s=null})))},l)}function Pt(e,n,r){var t=e,u,i;Fe(()=>{u!==(u=n())&&(i&&(Oe(i),i=null),u&&(i=Ee(()=>r(t,u))))},be)}function It(e=!1){const n=p,r=n.l.u;if(!r)return;let t=()=>Nr(n.s);if(e){let u=0,i={};const s=ge(()=>{let c=!1;const o=n.s;for(const l in o)o[l]!==i[l]&&(i[l]=o[l],c=!0);return c&&u++,u});t=()=>g(s)}r.b.length&&dr(()=>{en(n,t),Ae(r.b)}),$e(()=>{const u=H(()=>r.m.map(Jn));return()=>{for(const i of u)typeof i=="function"&&i()}}),r.a.length&&$e(()=>{en(n,t),Ae(r.a)})}function en(e,n){if(e.l.s)for(const r of e.l.s)g(r);n()}function kr(e,n,r){if(e==null)return n(void 0),Se;const t=H(()=>e.subscribe(n,r));return t.unsubscribe?()=>t.unsubscribe():t}let he=!1;function Ct(e,n,r){const t=r[n]??(r[n]={store:null,source:Le(void 0),unsubscribe:Se});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=Se;else{var u=!0;t.unsubscribe=kr(e,i=>{u?t.source.v=i:S(t.source,i)}),u=!1}return g(t.source)}function Dt(){const e={};return yn(()=>{for(var n in e)e[n].unsubscribe()}),e}function Br(e){var n=he;try{return he=!1,[e(),he]}finally{he=n}}const Vr={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Nt(e,n,r){return new Proxy({props:e,exclude:n},Vr)}const Hr={get(e,n){if(!e.exclude.includes(n))return g(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,r){return n in e.special||(e.special[n]=Kr({get[n](){return e.props[n]}},n,rn)),e.special[n](r),ze(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),ze(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Rt(e,n){return new Proxy({props:e,exclude:n,special:{},version:A(0)},Hr)}const Ur={get(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(se(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t)return t[n]}},set(e,n,r){let t=e.props.length;for(;t--;){let u=e.props[t];se(u)&&(u=u());const i=q(u,n);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(se(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t){const u=q(t,n);return u&&!u.configurable&&(u.configurable=!0),u}}},has(e,n){for(let r of e.props)if(se(r)&&(r=r()),r!=null&&n in r)return!0;return!1},ownKeys(e){const n=[];for(let r of e.props){se(r)&&(r=r());for(const t in r)n.includes(t)||n.push(t)}return n}};function Lt(...e){return new Proxy({props:e},Ur)}function nn(e){for(var n=d,r=d;n!==null&&!(n.f&(I|_e));)n=n.parent;try{return R(n),e()}finally{R(r)}}function Kr(e,n,r,t){var Ue;var u=(r&Hn)!==0,i=!oe||(r&Un)!==0,s=(r&Kn)!==0,c=(r&$n)!==0,o=!1,l;s?[l,o]=Br(()=>e[n]):l=e[n];var f=(Ue=q(e,n))==null?void 0:Ue.set,a=t,_=!0,v=!1,w=()=>(v=!0,_&&(_=!1,c?a=H(t):a=t),a);l===void 0&&t!==void 0&&(f&&i&&sr(),l=w(),f&&f(l));var y;if(i)y=()=>{var m=e[n];return m===void 0?w():(_=!0,v=!1,m)};else{var L=nn(()=>(u?ge:_r)(()=>e[n]));L.f|=an,y=()=>{var m=g(L);return m!==void 0&&(a=void 0),m===void 0?a:m}}if(!(r&rn))return y;if(f){var K=e.$$legacy;return function(m,$){return arguments.length>0?((!i||!$||K||o)&&f($?y():m),m):y()}}var O=!1,P=!1,pe=Le(l),ie=nn(()=>ge(()=>{var m=y(),$=g(pe);return O?(O=!1,P=!0,$):(P=!1,pe.v=m)}));return u||(ie.equals=Re),function(m,$){if(Z&&(O=P,y(),g(pe)),arguments.length>0){const Te=$?g(ie):i&&s?G(m):m;return ie.equals(Te)||(O=!0,S(pe,Te),v&&a!==void 0&&(a=Te),H(()=>g(ie))),m}return g(ie)}}export{et as $,H as A,yr as B,p as C,Er as D,oe as E,$e as F,sn as G,Qr as H,rt as I,Nr as J,tt as K,wt as L,Jr as M,ln as N,zn as O,nr as P,Dt as Q,Ct as R,V as S,Fe as T,be as U,Ee as V,te as W,ft as X,G as Y,at as Z,lt as _,xt as a,Nt as a0,ge as a1,St as a2,At as a3,Ve as a4,Wn as a5,Q as a6,Ye as a7,Oe as a8,d as a9,Yr as aa,cr as ab,Wr as ac,Tn as ad,pt as ae,wr as af,Gr as ag,h as ah,zr as ai,Le as aj,A as ak,Zr as al,He as am,ke as an,ht as ao,yn as ap,q as aq,ct as ar,yt as as,Je as at,ze as au,Ke as av,it as aw,st as ax,$r as ay,Xr as az,Dr as b,Lt as c,mt as d,ut as e,vt as f,Tt as g,ot as h,It as i,_t as j,bt as k,g as l,_r as m,Se as n,Rt as o,Cr as p,Kr as q,Ot as r,dt as s,gt as t,Et as u,S as v,Pt as w,nt as x,gn as y,qe as z};
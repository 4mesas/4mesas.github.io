function M(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function xt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function vt(t,e,n,i,r,o){if(r){const c=W(e,n,i,o);t.p(c,r)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let j=!1;function nt(){j=!0}function it(){j=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const d=f+1;n[d]=s,r=Math.max(d,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[s],f)}}function st(t,e){if(j){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){j&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function ut(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function Nt(){return z(" ")}function kt(){return z("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){at(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function jt(t,e,n){return ft(t,e,n,ut)}function _t(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Ct(t){return _t(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Lt(t,e){return new t(e)}let w;function b(t){w=t}function R(){if(!w)throw new Error("Function called outside component initialization");return w}function Tt(t){R().$$.on_mount.push(t)}function Ot(t){R().$$.after_update.push(t)}const x=[],I=[],k=[],G=[],U=Promise.resolve();let O=!1;function V(){O||(O=!0,U.then(X))}function Pt(){return V(),U}function P(t){k.push(t)}const T=new Set;let N=0;function X(){const t=w;do{for(;N<x.length;){const e=x[N];N++,b(e),dt(e.$$)}for(b(null),x.length=0,N=0;I.length;)I.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];T.has(n)||(T.add(n),n())}k.length=0}while(x.length);for(;G.length;)G.pop()();O=!1,T.clear(),b(t)}function dt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const A=new Set;let g;function zt(){g={r:0,c:[],p:g}}function Dt(){g.r||$(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ft(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Ht(t,e,n,i,r,o,c,u,s,l,f,d){let _=t.length,m=o.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const v=[],q=new Map,B=new Map;for(h=m;h--;){const a=d(r,o,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),q.set(p,v[h]=y),p in C&&B.set(p,Math.abs(h-C[p]))}const D=new Set,F=new Set;function L(a){Y(a,1),a.m(u,f),c.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=v[m-1],p=t[_-1],y=a.key,E=p.key;a===p?(f=a.first,_--,m--):q.has(E)?!c.has(y)||D.has(y)?L(a):F.has(E)?_--:B.get(y)>B.get(E)?(F.add(y),L(a)):(D.add(E),_--):(s(p,c),_--)}for(;_--;){const a=t[_];q.has(a.key)||s(a,c)}for(;m;)L(v[m-1]);return v}function It(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||P(()=>{const c=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(P)}function pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,i,r,o,c,u=[-1]){const s=w;b(t);const l=t.$$={fragment:null,ctx:[],props:o,update:M,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&yt(t,d)),_}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const d=ot(e.target);l.fragment&&l.fragment.l(d),d.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),it(),X()}b(s)}class Kt{$destroy(){pt(this,1),this.$destroy=M}$on(e,n){if(!K(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,M as B,st as C,xt as D,wt as E,vt as F,Et as G,$t as H,bt as I,At as J,$ as K,Ht as L,Ft as M,Kt as S,Nt as a,St as b,Ct as c,Dt as d,kt as e,Y as f,zt as g,lt as h,Jt as i,Ot as j,ut as k,jt as l,ot as m,Mt as n,Tt as o,Bt as p,z as q,_t as r,gt as s,ht as t,qt as u,Lt as v,It as w,Gt as x,mt as y,pt as z};

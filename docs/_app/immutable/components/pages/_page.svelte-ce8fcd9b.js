import{S as D,i as v,s as x,e as y,b as B,g as F,t as i,d as S,f,h as W,I as w,o as q,J as p,w as $,x as g,y as d,B as A,z as b}from"../../chunks/index-956d9405.js";import{F as z}from"../../chunks/FullBlock-7a88049b.js";import{u as C,m,c as h,W as I}from"../../chunks/store-d2ca22b5.js";function J(o){let t,a;return t=new I({}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,n){d(t,e,n),a=!0},p:A,i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function M(o){let t,a;return t=new z({props:{mainData:o[1][l].data,slideData:o[1][l].gallery}}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,n){d(t,e,n),a=!0},p(e,n){const c={};n&2&&(c.mainData=e[1][l].data),n&2&&(c.slideData=e[1][l].gallery),t.$set(c)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function N(o){let t,a,e,n;const c=[M,J],s=[];function k(r,u){return r[0]?0:1}return t=k(o),a=s[t]=c[t](o),{c(){a.c(),e=y()},l(r){a.l(r),e=y()},m(r,u){s[t].m(r,u),B(r,e,u),n=!0},p(r,[u]){let _=t;t=k(r),t===_?s[t].p(r,u):(F(),i(s[_],1,1,()=>{s[_]=null}),S(),a=s[t],a?a.p(r,u):(a=s[t]=c[t](r),a.c()),f(a,1),a.m(e.parentNode,e))},i(r){n||(f(a),n=!0)},o(r){i(a),n=!1},d(r){s[t].d(r),r&&W(e)}}}const l="main";function P(o,t,a){let e,n;w(o,C,s=>a(2,e=s)),w(o,m,s=>a(1,n=s));let c=!1;return q(async()=>{n[l]===void 0&&(p(m,n[l]={},n),p(m,n[l].data=await h(e[l]),n),p(m,n[l].gallery=await h(e[l+"_gallery"]),n)),a(0,c=!0)}),[c,n]}class j extends D{constructor(t){super(),v(this,t,P,N,x,{})}}function E(o){let t,a;return t=new j({}),{c(){$(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,n){d(t,e,n),a=!0},p:A,i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}class L extends D{constructor(t){super(),v(this,t,null,E,x,{})}}export{L as default};

import{r as x,c as y}from"./d3-color-6502c434.js";const m=r=>()=>r;function A(r,n){return function(e){return r+e*n}}function M(r,n,e){return r=Math.pow(r,e),n=Math.pow(n,e)-r,e=1/e,function(i){return Math.pow(r+i*n,e)}}function N(r){return(r=+r)==1?v:function(n,e){return e-n?M(n,e,r):m(isNaN(n)?e:n)}}function v(r,n){var e=n-r;return e?A(r,e):m(isNaN(r)?n:r)}const d=function r(n){var e=N(n);function i(t,u){var o=e((t=x(t)).r,(u=x(u)).r),f=e(t.g,u.g),a=e(t.b,u.b),l=v(t.opacity,u.opacity);return function(c){return t.r=o(c),t.g=f(c),t.b=a(c),t.opacity=l(c),t+""}}return i.gamma=r,i}(1);function j(r,n){n||(n=[]);var e=r?Math.min(n.length,r.length):0,i=n.slice(),t;return function(u){for(t=0;t<e;++t)i[t]=r[t]*(1-u)+n[t]*u;return i}}function I(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function D(r,n){var e=n?n.length:0,i=r?Math.min(e,r.length):0,t=new Array(i),u=new Array(e),o;for(o=0;o<i;++o)t[o]=h(r[o],n[o]);for(;o<e;++o)u[o]=n[o];return function(f){for(o=0;o<i;++o)u[o]=t[o](f);return u}}function R(r,n){var e=new Date;return r=+r,n=+n,function(i){return e.setTime(r*(1-i)+n*i),e}}function s(r,n){return r=+r,n=+n,function(e){return r*(1-e)+n*e}}function B(r,n){var e={},i={},t;(r===null||typeof r!="object")&&(r={}),(n===null||typeof n!="object")&&(n={});for(t in n)t in r?e[t]=h(r[t],n[t]):i[t]=n[t];return function(u){for(t in e)i[t]=e[t](u);return i}}var p=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,g=new RegExp(p.source,"g");function E(r){return function(){return r}}function S(r){return function(n){return r(n)+""}}function V(r,n){var e=p.lastIndex=g.lastIndex=0,i,t,u,o=-1,f=[],a=[];for(r=r+"",n=n+"";(i=p.exec(r))&&(t=g.exec(n));)(u=t.index)>e&&(u=n.slice(e,u),f[o]?f[o]+=u:f[++o]=u),(i=i[0])===(t=t[0])?f[o]?f[o]+=t:f[++o]=t:(f[++o]=null,a.push({i:o,x:s(i,t)})),e=g.lastIndex;return e<n.length&&(u=n.slice(e),f[o]?f[o]+=u:f[++o]=u),f.length<2?a[0]?S(a[0].x):E(n):(n=a.length,function(l){for(var c=0,w;c<n;++c)f[(w=a[c]).i]=w.x(l);return f.join("")})}function h(r,n){var e=typeof n,i;return n==null||e==="boolean"?m(n):(e==="number"?s:e==="string"?(i=y(n))?(n=i,d):V:n instanceof y?d:n instanceof Date?R:I(n)?j:Array.isArray(n)?D:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?B:s)(r,n)}function q(r,n){return r=+r,n=+n,function(e){return Math.round(r*(1-e)+n*e)}}function z(r,n){n===void 0&&(n=r,r=h);for(var e=0,i=n.length-1,t=n[0],u=new Array(i<0?0:i);e<i;)u[e]=r(t,t=n[++e]);return function(o){var f=Math.max(0,Math.min(i-1,Math.floor(o*=i)));return u[f](o-f)}}export{h as a,q as b,s as i,z as p};
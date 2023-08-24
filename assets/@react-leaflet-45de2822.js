import{r as c,a as L}from"./react-18892649.js";import{l as E}from"./leaflet-19bf3ea3.js";import"./react-dom-81b76a28.js";function y(e,n){const t=c.useRef(n);c.useEffect(function(){n!==t.current&&e.attributionControl!=null&&(t.current!=null&&e.attributionControl.removeAttribution(t.current),n!=null&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}const R=1;function N(e){return Object.freeze({__version:R,map:e})}function j(e,n){return Object.freeze({...e,...n})}const f=c.createContext(null),v=f.Provider;function s(){const e=c.useContext(f);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function x(e){function n(t,r){const{instance:u,context:o}=e(t).current;return c.useImperativeHandle(r,()=>u),t.children==null?null:L.createElement(v,{value:o},t.children)}return c.forwardRef(n)}function h(e){function n(t,r){const{instance:u}=e(t).current;return c.useImperativeHandle(r,()=>u),null}return c.forwardRef(n)}function l(e,n){const t=c.useRef();c.useEffect(function(){return n!=null&&e.instance.on(n),t.current=n,function(){t.current!=null&&e.instance.off(t.current),t.current=null}},[e,n])}function d(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function b(e){return e.split(" ").filter(Boolean)}function A(e,n){b(n).forEach(t=>{E.DomUtil.addClass(e,t)})}function k(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function m(e,n){return n==null?function(r,u){const o=c.useRef();return o.current||(o.current=e(r,u)),o}:function(r,u){const o=c.useRef();o.current||(o.current=e(r,u));const a=c.useRef(r),{instance:i}=o.current;return c.useEffect(function(){a.current!==r&&(n(i,r,a.current),a.current=r)},[i,r,u]),o}}function C(e,n){c.useEffect(function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){var o;(o=n.layerContainer)==null||o.removeLayer(e.instance),n.map.removeLayer(e.instance)}},[n,e])}function O(e){return function(t){const r=s(),u=e(d(t,r),r);return y(r.map,t.attribution),l(u.current,t.eventHandlers),C(u.current,r),u}}function P(e,n){const t=c.useRef();c.useEffect(function(){if(n.pathOptions!==t.current){const u=n.pathOptions??{};e.instance.setStyle(u),t.current=u}},[e,n])}function H(e){return function(t){const r=s(),u=e(d(t,r),r);return l(u.current,t.eventHandlers),C(u.current,r),P(u.current,t),u}}function S(e,n){const t=m(e,n),r=H(t);return x(r)}function T(e,n){const t=m(e,n),r=O(t);return h(r)}function _(e,n,t){const{opacity:r,zIndex:u}=n;r!=null&&r!==t.opacity&&e.setOpacity(r),u!=null&&u!==t.zIndex&&e.setZIndex(u)}export{v as L,k as a,N as b,S as c,A as d,j as e,T as f,_ as g,s as u,d as w};
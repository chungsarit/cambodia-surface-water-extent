import{a as Y,j as e,r as c}from"./react-18892649.js";import{c as me}from"./react-dom-81b76a28.js";import{B as l,T as p,C as ue,c as xe,a as O,I as V,d as he,b as pe,e as fe,f as ge,g as be,F as je,h as ye,i as X,j as Ce,k as Q,l as we,m as Se,n as ve,o as ke,s as S,u as v,p as k,q as ze,r as Pe,t as Me,v as Ae,D as Fe,w as Te,S as ee,x as De,y as Ie,z as Oe,A as $e,E as Le,G as Ee,H as G,J as _e,L as C,K as Be,M as Re}from"./@mui-6ecc9feb.js";import{L as Ne}from"./leaflet-19bf3ea3.js";import{S as Ge}from"./react-color-b94aa2a8.js";import"./tinycolor2-ea5bcbb6.js";import{P as D,G as Ke,M as We,T as K}from"./react-leaflet-8b74bc0a.js";import"./d3-zoom-4d2927c0.js";import{R as He,B as Ze,C as Je,X as qe,Y as Ue,T as Ye,a as W}from"./recharts-d88d6920.js";import{c as Ve}from"./d3-fetch-25ec0933.js";import"./@babel-4ef42ede.js";import"./scheduler-765c72db.js";import"./@emotion-b8612e06.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./stylis-79144faa.js";import"./clsx-1229b3e0.js";import"./react-transition-group-b40fb521.js";import"./@popperjs-f3391c26.js";import"./reactcss-dd7d3e30.js";import"./lodash-7e8ffe3d.js";import"./prop-types-ad9d6448.js";import"./lodash-es-0a95e7b3.js";import"./material-colors-b3b3c86a.js";import"./@icons-3cdbe9c6.js";import"./@react-leaflet-45de2822.js";import"./classnames-82acb64e.js";import"./react-resize-detector-16051816.js";import"./react-smooth-3a0295d1.js";import"./fast-equals-a0711cdd.js";import"./victory-vendor-59898c6b.js";import"./d3-scale-77639e02.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-d7dc1352.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./reduce-css-calc-c7bcf62f.js";import"./postcss-value-parser-bfac0914.js";import"./css-unit-converter-9e08bb2c.js";import"./eventemitter3-0cc898a2.js";import"./d3-dsv-3ac754ad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();class Xe extends Y.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,s){console.error=()=>{}}render(){return this.state.hasError?e.jsx(e.Fragment,{children:e.jsx("h1",{children:"Something went wrong."})}):this.props.children}}function Qe(t){return e.jsx(ue,{variant:"indeterminate",disableShrink:!0,sx:{color:r=>r.palette.mode==="light"?"#1a90ff":"#308fe8",animationDuration:"1000ms",[`& .${xe.circle}`]:{strokeLinecap:"round"}},size:60,thickness:4,...t})}function et(){return e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",color:"darkgrey"},children:[e.jsx(Qe,{}),e.jsx(p,{sx:{mt:1},children:"Loading the map 🗺️ 🌎"}),e.jsx(p,{sx:{mt:1},children:"Created by CHUNG Sarit"})]})}async function tt(){const t=await fetch("https://flask-api-ee-railway.up.railway.app/getListYearlyTileUrlJRC");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}function rt(){const[t,r]=c.useState(null),[s,n]=c.useState(!1),[a,o]=c.useState(null);return c.useEffect(()=>{n(!0),tt().then(i=>{if(!i)throw new Error("No data");r(i),n(!1)}).catch(i=>{o(i),n(!1)})},[]),{data:t,isLoading:s,error:a}}const te=c.createContext(),g=()=>c.useContext(te),st=({children:t})=>{const[r,s]=c.useState(2e3),[n,a]=c.useState(1),[o,i]=c.useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),[m,d]=c.useState(null),[u,x]=c.useState({"Open Street Map":{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> Contributors',maxZoom:18}}),[f,$]=c.useState("Prey Veng"),[z,L]=c.useState("ADM0");return e.jsx(te.Provider,{value:{map:m,setMap:d,year:r,setYear:s,opacity:n,setOpacity:a,baseMapLayerUrl:o,setBaseMapLayerUrl:i,baseMapLayerConfig:u,setBaseMapLayerConfig:x,selectedProvince:f,setSelectedProvince:$,admLevel:z,setAdmLevel:L},children:t})};function j({children:t,tooltipText:r="",...s}){const{sx:n,...a}=s;return e.jsx(O,{title:r,arrow:!0,children:e.jsx(V,{sx:{boxShadow:3,width:{xs:"2rem",sm:"2rem"},height:{xs:"2rem",sm:"2rem"},backgroundColor:"white",color:"black","&:hover":{backgroundColor:"#f4f4f4"},border:"1px solid lightgrey",...n},...a,children:t})})}function nt(){const t=[[10.409,102.144],[14.58,107.8]],{map:r}=g(),s=()=>{if(r)r.flyToBounds(t,{padding:[0,0],duration:1});else return};return e.jsx(j,{onClick:s,tooltipText:"Home",children:e.jsx(he,{})})}function at(){const{map:t}=g(),r=()=>{t&&t.zoomIn()};return e.jsx(j,{onClick:r,tooltipText:"Zoom In",children:e.jsx(pe,{})})}function ot(){const{map:t}=g(),r=()=>{t&&t.zoomOut()};return e.jsx(j,{onClick:r,tooltipText:"Zoom Out",children:e.jsx(fe,{})})}function it(){const t=document.body,[r,s]=c.useState(!1);c.useEffect(()=>{const a=o=>{(o.key==="F"||o.code==="KeyF")&&n()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[]);const n=()=>{document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?document.exitFullscreen?(document.exitFullscreen(),s(!1)):document.mozCancelFullScreen?(document.mozCancelFullScreen(),s(!1)):document.webkitExitFullscreen?(document.webkitExitFullscreen(),s(!1)):document.msExitFullscreen&&(document.msExitFullscreen(),s(!1)):t.requestFullscreen?(t.requestFullscreen(),s(!0)):t.mozRequestFullScreen?(t.mozRequestFullScreen(),s(!0)):t.webkitRequestFullscreen?(t.webkitRequestFullscreen(),s(!0)):t.msRequestFullscreen&&(t.msRequestFullscreen(),s(!0))};return e.jsx("div",{children:e.jsx(j,{onClick:n,tooltipText:"Full Screen",children:r?e.jsx(ge,{}):e.jsx(be,{})})})}function lt(){const[t,r]=c.useState(null),s="/cambodia-surface-water-extent/data/geojson/worldRectangular.json";return c.useEffect(()=>{fetch(s).then(n=>n.json()).then(n=>{r(n)}).catch(n=>{console.error("Error fetching GeoJSON data",n)})},[]),e.jsx(e.Fragment,{children:t&&e.jsx(D,{name:"adminLayers",style:{zIndex:150},children:e.jsx(Ke,{data:t,style:{color:"black",fillOpacity:.4,weight:0}})})})}const ct=({layerWeight:t,setLayerWeight:r})=>e.jsx(X,{id:"weight-admin-layer",label:"Outline thickness",type:"number",value:t,onChange:s=>{if(s.target.value<.1){r(.1);return}if(s.target.value>10){r(10);return}r(s.target.value)},InputProps:{inputProps:{min:.1,max:10,step:.1}},sx:{"& .MuiInputBase-input":{fontSize:{xs:"0.65rem",sm:"0.75rem"},height:"1rem",padding:"0.25rem",width:"13ch"},".MuiInputLabel-root":{fontSize:{xs:"0.65rem",sm:"0.75rem"}}}}),dt=({layerColor:t,setLayerColor:r})=>{const s=t.slice(5,-1).split(",").map(x=>parseInt(x.trim())),[n,a]=c.useState({r:s[0],g:s[1],b:s[2],a:s[3]}),[o,i]=c.useState(!1),m=()=>{i(!o)},d=()=>{i(!1)},u=x=>{a(x.rgb),r(`rgba(${x.rgb.r}, ${x.rgb.g}, ${x.rgb.b}, ${x.rgb.a})`)};return e.jsxs(l,{onMouseDown:x=>{x.stopPropagation()},children:[e.jsxs(l,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:1},children:[e.jsx(O,{title:"Colorize",children:e.jsx(V,{sx:{p:0},onClick:m,children:e.jsx(Ce,{sx:{fontSize:"1rem",color:"black"}})})}),e.jsx(l,{sx:{fontSize:"1rem",width:"2rem",height:"0.2rem",bgcolor:`rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`,border:"0.1px solid grey"}})]}),o?e.jsx(Q,{onClickAway:d,children:e.jsx(l,{sx:{position:"absolute",zIndex:2,right:"0.5rem"},children:e.jsx(Ge,{color:n,onChange:u,width:"",height:""})})}):null]})},mt=({adminLevel:t,labelName:r,initialCheck:s,color:n="rgba(50, 50, 50, 1)",lineWeight:a=1})=>{const[o,i]=c.useState(s),[m,d]=c.useState(n),[u,x]=c.useState(a),{map:f,admLevel:$,setAdmLevel:z,selectedProvince:L,setSelectedProvince:re}=g(),[w,E]=c.useState(null);function se(h,_,B,R){let P,N,M,A;h==="admin0"?(A="/cambodia-surface-water-extent/data/geojson/khm_admbnda_adm0_gov_20181004.json",P=2e4):h==="admin1"&&(A="/cambodia-surface-water-extent/data/geojson/khm_admbnda_adm1_gov_20181004.json",P=3e4),fetch(A).then(y=>y.json()).then(y=>{N=y,f.getPane(h)||(f.createPane(h),f.getPane(h).style.zIndex=P,f.getPane(h).style.pointerEvents="none");function oe(b){b.target.setStyle({weight:B*2.5,color:_,dashArray:"",fillOpacity:.1})}function ie(b){M.resetStyle(b.target)}function le(b){f.flyToBounds(b.target.getBounds()),re(b.target.feature.properties.ADM1_EN),z("ADM1")}function ce(b,de){h==="admin1"&&de.on({click:le,mouseover:oe,mouseout:ie})}M=Ne.geoJSON(N,{pane:h,style:{color:_,weight:B,fillOpacity:0},onEachFeature:ce}).addTo(f),R&&R(M)}).catch(y=>{console.error("Error fetching GeoJSON data",y)})}const ne=h=>{i(h)},ae=h=>{ne(h.target.checked)};return c.useEffect(()=>{f&&(o?se(t,m,u,E):w&&(w.remove(),E(null)))},[o,f]),c.useEffect(()=>{w&&w.setStyle({color:m,weight:u,fillOpacity:0})},[m,u]),e.jsxs(l,{sx:{display:"flex",flexDirection:{xs:"column"},rowGap:{xs:1}},children:[e.jsx(je,{control:e.jsx(ye,{checked:o,onChange:h=>ae(h),name:t,size:"small",sx:{p:0,pl:1}}),label:r,sx:{"& .MuiTypography-root":{fontSize:{xs:"0.65rem",sm:"0.75rem"}}}}),e.jsxs(l,{sx:{display:"flex",flexDirection:"row",gap:0,justifyContent:"space-between"},children:[e.jsx(ct,{layerWeight:u,setLayerWeight:x}),e.jsx(dt,{layerColor:m,setLayerColor:d})]})]})},ut=()=>{const t={admin0:{labelName:"Country",initialCheck:!0,color:"rgba(255, 255, 255, 1)",lineWeight:3},admin1:{labelName:"Capital/Provinces",initialCheck:!0,color:"rgba(50, 50, 50, 1)",lineWeight:1}};return e.jsx(l,{sx:{display:"flex",flexDirection:"column",rowGap:1,width:"100%"},children:Object.keys(t).map(r=>e.jsx(mt,{adminLevel:r,labelName:t[r].labelName,initialCheck:t[r].initialCheck,color:t[r].color,lineWeight:t[r].lineWeight},r))})},F={"Open Street Map":{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> Contributors',maxZoom:18},"Carto Dark":{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",attribution:'Map data &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',maxZoom:19},"Google Satellite":{url:"https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",attribution:'Map data &copy <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html" target="_blank">Google</a>',maxZoom:18},"Google Terrain":{url:"https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",attribution:'Map data &copy <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html" target="_blank">Google</a>',maxZoom:18}},xt=["Open Street Map","Google Satellite","Carto Dark","Google Terrain"];function ht(){const[t,r]=c.useState(!1),s=()=>{r(!t)},n=()=>{r(!1)},{baseMapLayerConfig:a,setBaseMapLayerConfig:o}=g(),i=d=>{o({[d]:{url:F[d].url,attribution:F[d].attribution,maxZoom:F[d].maxZoom}})},m=d=>e.jsx(Se,{sx:{cursor:"pointer"},onClick:()=>i(d),children:e.jsxs(ve,{children:[e.jsx(ke,{sx:{aspectRatio:"2/1.5",width:{xs:"5rem"}},image:`/cambodia-surface-water-extent/data/img/${d}.png`,title:d}),e.jsx(p,{sx:{fontSize:{xs:"0.55rem",sm:"0.65rem"},textAlign:"center",lineHeight:"0.9rem"},children:d})]})},d);return e.jsx(Q,{onClickAway:n,children:e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[e.jsx(j,{onClick:s,tooltipText:"Basemap and Admin layers",children:e.jsx(we,{})}),e.jsxs(l,{sx:{backgroundColor:"white",borderRadius:"0.5rem",display:t?"flex":"none",mr:"0.5rem",fontSize:{xs:"0.65rem",sm:"0.75rem"},fontWeight:"bold",flexDirection:"column",alignItems:"center",p:1,gap:1},children:["Basemap",e.jsx(l,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",width:{xs:"10.55rem"},gap:1},children:xt.map(d=>m(d))}),"Administrative boundaries",e.jsx(ut,{})]})]})})}function pt({eeImageUrls:t}){const{map:r,setMap:s,year:n,setYear:a,opacity:o,setOpacity:i,baseMapLayerConfig:m,setBaseMapLayerConfig:d}=g();return e.jsx(e.Fragment,{children:t&&e.jsxs(l,{sx:{height:"100%",width:"100%"},children:[e.jsxs(l,{sx:{position:"absolute",zIndex:1e3,display:"flex",flexDirection:"column",gap:"0.1rem",top:{xs:"calc(3rem)",md:"0.5rem"},right:{xs:"calc(0.5rem)"},alignItems:"flex-end"},children:[e.jsx(nt,{}),e.jsx(at,{}),e.jsx(ot,{}),e.jsx(it,{}),e.jsx(ht,{})]}),e.jsxs(We,{ref:s,center:[12.5657,104.991],zoomControl:!1,zoom:7.5,maxZoom:18,scrollWheelZoom:!0,style:{height:"100%",width:"100%",padding:0,margin:0},zoomDelta:.25,zoomSnap:.25,children:[e.jsx(D,{name:"baseMapLayers",style:{zIndex:0},children:e.jsx(K,{url:Object.values(m)[0].url,attribution:Object.values(m)[0].attribution,maxZoom:Object.values(m)[0].maxZoom,opacity:1},Object.keys(m)[0])}),e.jsx(D,{name:"JRC_flood_extents",style:{zIndex:100},children:e.jsx(K,{url:t[n],opacity:o},n)}),e.jsx(lt,{})]})]})})}const ft=({open:t,anchorlocation:r})=>e.jsx(l,{sx:{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",height:"2rem",fontSize:{xs:"1rem"},fontWeight:"bold",bgcolor:"rgba(255,255,255, 0.8)",borderRadius:"3.5rem",boxShadow:r==="left"&&t?0:3,position:{xs:"fixed"},top:"0.5rem",zIndex:1e4,width:{xs:"calc(100vw)",md:"calc(400px)"}},children:"Cambodia-Surface Water Extent"}),gt=S(l,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r,drawerheightorwidth:s,anchorlocation:n})=>({display:"flex",flexGrow:1,marginBottom:n==="bottom"&&r?`${s}`:0,marginLeft:n==="left"&&r?`${s}`:0,transition:t.transitions.create(["marginBottom","marginLeft"],{easing:r?t.transitions.easing.easeOut:t.transitions.easing.sharp,duration:r?t.transitions.duration.enteringScreen:t.transitions.duration.leavingScreen})})),bt=S(j,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r,drawerheightorwidth:s,anchorlocation:n})=>({position:"absolute",zIndex:10001,display:"flex",flexDirection:"column-reverse",bottom:n==="bottom"?r?`${s}`:0:"auto",left:n==="left"?r?`calc(${s} - 2.5rem)`:0:"calc(0.5rem)",height:n==="bottom"?"auto":"100vh",top:n==="left"?"calc(0.5rem)":"auto",transition:t.transitions.create(["bottom","left"],{easing:r?t.transitions.easing.easeOut:t.transitions.easing.sharp,duration:r?t.transitions.duration.enteringScreen:t.transitions.duration.leavingScreen})}));function jt({contentChildren:t,drawerChildren:r}){const{map:s,setMap:n}=g(),[a,o]=c.useState(!1),i=v(),m=k(i.breakpoints.down("md")),d=m?"18rem":"25rem",u=m?"bottom":"left",x=()=>{o(!a)};return c.useEffect(()=>{s&&s.invalidateSize({animate:!1})},[a,s]),c.useEffect(()=>{o(!0)},[]),e.jsxs(e.Fragment,{children:[e.jsx(ft,{open:a,anchorlocation:u}),e.jsxs(bt,{open:a,drawerheightorwidth:d,anchorlocation:u,onClick:x,tooltipText:a?"Close drawer":"Open drawer",children:[u==="bottom"&&(a?e.jsx(ze,{}):e.jsx(Pe,{})),u==="left"&&(a?e.jsx(Me,{}):e.jsx(Ae,{}))]}),e.jsxs(l,{sx:{display:"flex",height:"100%",width:"100%"},children:[e.jsx(Fe,{transitionDuration:{enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},sx:{display:"flex",overflow:"auto","& .MuiDrawer-paper":{height:u==="bottom"?d:"calc(100vh)",width:u==="bottom"?"100vw":`calc(${d})`,bgcolor:"rgba(255,255,255, 1)",boxShadow:"none",borderRadius:"none",border:"none"}},variant:"persistent",anchor:u,open:a,children:r}),e.jsx(gt,{open:a,drawerheightorwidth:d,anchorlocation:u,children:t})]})]})}function H({color:t,label:r}){return e.jsxs(l,{sx:{color:t,display:"flex",flexDirection:"row",gap:1},children:[e.jsx(Oe,{sx:{fontSize:"medium"}}),e.jsx(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem",textAlign:"left"}},children:r})]})}function yt({}){return e.jsxs(l,{id:"legend",children:[e.jsx(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem",textAlign:"left"}},children:"Surface water classes"}),e.jsxs(l,{sx:{display:"flex",flexDirection:{xs:"column"},gap:{xs:0}},children:[e.jsx(H,{color:"#0000ff",label:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Permanent water "}),"(present for 12 months per year)"]})}),e.jsx(H,{color:"#41b7d8",label:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Seasonal water "}),"(present for less than 12 months per year)"]})})]})]})}function Ct({opacity:t,setOpacity:r}){const s=(n,a)=>{r(a)};return e.jsxs(l,{sx:{width:"100%",maxWidth:370,display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:{xs:"0.65rem",sm:"0.75rem"},bgcolor:"white"},children:["Opacity",e.jsx(Te,{size:"small",sx:{opacity:.9}}),e.jsx(ee,{size:"small",value:t,min:0,max:1,step:.01,onChange:s,sx:{color:"black",width:{xs:"100%"},maxWidth:{xs:150},"& .MuiSlider-markLabel":{fontSize:{xs:"0.65rem",sm:"0.75rem"},color:"black"}}}),Math.round(t*100),"%"]})}function wt({year:t,setYear:r,isPlaying:s,setIsPlaying:n,marks:a}){const o=(m,d)=>{r(d),n(!1)},i=()=>{n(!s),t===2021&&r(2e3)};return e.jsxs(l,{sx:{display:"flex",flexDirection:"row",gap:{xs:4,sm:6},width:"100%"},children:[e.jsx(j,{onClick:i,children:s?e.jsx(De,{}):e.jsx(Ie,{})}),e.jsx(ee,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:a,min:2e3,max:2021,value:t,onChange:o,sx:{"& .MuiSlider-markLabel":{fontSize:{xs:"0.65rem",sm:"0.75rem"},color:"black"}}})]})}function St(){const{year:t,setYear:r,opacity:s,setOpacity:n}=g(),[a,o]=c.useState(!1),i=v(),m=k(i.breakpoints.down("sm"));c.useEffect(()=>{let u;return a&&t<2021?u=setInterval(()=>{r(x=>Math.min(x+1,2021))},1500):o(!1),()=>{clearInterval(u)}},[a,t]);const d=[];for(let u=2e3;u<=2021;u++){const x={value:u};m?u%10===0&&(x.label=`${u}`):u%5===0&&(x.label=`${u}`),d.push(x)}return e.jsxs(l,{sx:{display:"flex",flexDirection:"column",justifyContent:{xs:"space-between"},height:"100%",width:"100%",maxWidth:600,alignItems:"center"},children:[e.jsxs(l,{children:[e.jsx(p,{sx:{fontSize:{xs:"0.7rem",sm:"0.8rem"},fontWeight:"bold"},children:"Choose a year to view the surface water extent"}),e.jsxs(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem"}},children:["(Current displayed year: ",e.jsx("span",{style:{fontWeight:"bold"},children:t}),")"]})]}),e.jsx(wt,{year:t,setYear:r,isPlaying:a,setIsPlaying:o,marks:d}),e.jsx(Ct,{opacity:s,setOpacity:n}),e.jsx(yt,{})]})}const vt=async t=>(await Ve(t)).map(s=>({year:s.year,"Permanent water":parseFloat(s["Permanent water"]),"Seasonal water":parseFloat(s["Seasonal water"]),"No data":parseFloat(s.no_data),"Not water":parseFloat(s.not_water),Total:parseFloat(s["Permanent water"])+parseFloat(s["Seasonal water"])})),Z=({children:t,color:r})=>e.jsxs(l,{sx:{display:"flex",alignItems:"center",columnGap:1,color:r},children:[e.jsx(l,{sx:{bgcolor:r,width:"1rem",height:"0.5rem"}}),e.jsx(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem"}},children:t})]}),kt=({active:t,payload:r,label:s})=>t&&r&&r.length?e.jsxs(l,{className:"custom-tooltip-barchart",sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:"rgba(255, 255, 255, 0.85)",color:"black",p:1},children:[e.jsx(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem"}},children:`Year : ${s}`}),e.jsxs(Z,{color:"#41b7d8",children:[`${r[1].dataKey} : ${r[1].value}`," km²"]}),e.jsxs(Z,{color:"#0000ff",children:[`${r[0].dataKey} : ${r[0].value}`," km²"]})]}):null,J=({admLevel:t,admName:r})=>{const s=v(),n=k(s.breakpoints.down("sm")),a=`/cambodia-surface-water-extent/data/csv_waterarea/${t}/${r}.csv`,[o,i]=c.useState([]);return c.useEffect(()=>{vt(a).then(i)},[t,r]),e.jsx("div",{className:"histogram",style:{height:"100%",width:"100%"},children:e.jsx(He,{minHeight:10,width:"100%",height:"100%",children:e.jsxs(Ze,{data:o,margin:{top:0,right:0,left:5,bottom:0},fontSize:n?"0.65rem":"0.75rem",barSize:9,children:[e.jsx(Je,{strokeDasharray:"4 4 1"}),e.jsx(qe,{dataKey:"year"}),e.jsx(Ue,{label:{value:"Water Area [km²]",angle:-90,position:"center",dx:-25}}),e.jsx(Ye,{content:e.jsx(kt,{})}),e.jsx(W,{dataKey:"Permanent water",fill:"#0000ff",stackId:"a"}),e.jsx(W,{dataKey:"Seasonal water",fill:"#41b7d8",stackId:"a"})]})})})},zt=["Banteay Meanchey","Battambang","Kampong Cham","Kampong Chhnang","Kampong Speu","Kampong Thom","Kampot","Kandal","Kep","Koh Kong","Kratie","Mondul Kiri","Oddar Meanchey","Pailin","Phnom Penh","Preah Sihanouk","Preah Vihear","Prey Veng","Pursat","Ratanak Kiri","Siemreap","Stung Treng","Svay Rieng","Takeo","Tboung Khmum"],q=S($e)(({theme:t})=>({minHeight:"unset",height:"2rem",textTransform:"capitalize",padding:"0.5rem",fontSize:"0.7rem",[t.breakpoints.up("sm")]:{fontSize:"0.8rem"}}));function Pt(){const{selectedProvince:t,setSelectedProvince:r,admLevel:s,setAdmLevel:n}=g(),a=(i,m)=>{n(m)},o=zt.map((i,m)=>i);return e.jsxs(l,{sx:{width:"100%",height:"100%"},children:[e.jsx(p,{sx:{fontSize:{xs:"0.7rem",sm:"0.8rem",fontWeight:"bold",height:"1rem"}},children:"Annual time-series of surface water extent"}),e.jsx(l,{sx:{display:"flex",flexDirection:"column",alignItems:"center",height:"calc(100% - 1rem)"},children:e.jsxs(Le,{value:s,children:[e.jsxs(Ee,{onChange:a,"aria-label":"tabs-plotting-component",sx:{minHeight:"unset",fontSize:{xs:"0.65rem",sm:"0.75rem",height:"2rem"}},children:[e.jsx(q,{label:"National level",value:"ADM0"}),e.jsx(q,{label:"Provincial level",value:"ADM1"})]}),e.jsxs(l,{sx:{width:"100%",mt:2,height:"calc(100% - 3rem)"},children:[e.jsx(G,{value:"ADM0",sx:{p:0,height:"100%"},children:e.jsx(J,{admLevel:"ADM0",admName:"Cambodia"})}),e.jsxs(G,{value:"ADM1",sx:{p:0,height:"100%"},children:[e.jsx(l,{sx:{mb:1,height:"2rem"},children:e.jsx(_e,{size:"small",disableClearable:!0,value:t,onChange:(i,m)=>{r(m)},id:"combo-box",options:o,renderInput:i=>e.jsx(X,{...i,label:"Provinces/Capital (ខេត្ត/រាជធានី)",InputProps:{...i.InputProps,inputProps:{...i.inputProps,sx:{fontSize:{xs:"0.65rem",sm:"0.75rem"}}}}}),renderOption:(i,m,d)=>e.jsx(p,{...i,sx:{fontSize:{xs:"0.75rem",sm:"0.85rem"}},children:m})})}),e.jsx(l,{sx:{height:"calc(100% - 2.5rem)"},children:e.jsx(J,{admLevel:"ADM1",admName:t})})]})]})]})})]})}const U=({headText:t="",children:r})=>e.jsxs(l,{children:[e.jsx(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem"},fontWeight:"bold",textAlign:"left"},children:t}),e.jsx(p,{sx:{fontSize:{xs:"0.65rem",sm:"0.75rem"},textAlign:"justify"},children:r})]}),I=()=>e.jsx(C,{href:"https://doi.org/10.1038/nature20584",target:"_blank",rel:"noopener noreferrer",children:"Pekel et al., 2016"});function Mt(){const[t,r]=c.useState(!1),s=()=>{r(!1)},n=()=>{r(!0)};return e.jsx(O,{open:t,onClose:s,onOpen:n,sx:{bgcolor:"white"},arrow:!0,title:e.jsxs(l,{sx:{textAlign:"justify",lineHeight:"1rem"},children:["Disclaimer",e.jsx("br",{}),"✅ This app is provided for informational purposes. The accuracy of the information provided is subject to the accuracy of the source data.",e.jsx("br",{}),"✅ The boundaries for both the country and provinces used here do not imply official endorsement or acceptance by the United Nations. They were obtained from Humaniarian Data Exchange (",e.jsx(C,{href:"https://data.humdata.org/dataset/cambodia-admin-level-0-international-boundaries",target:"_blank",rel:"noopener noreferrer",children:"HDX"}),") as Shapefile.",e.jsx("br",{}),"✅ By accessing this website, users agree to take full responsibility for reliance on any site information provided and to hold harmless and waive any and all liability against individuals or entities associated with its development, form and content for any loss, harm or damage suffered as a result of its use.",e.jsx("br",{}),"✅ More details about the dataset and its limitations can be found in the paper by ",e.jsx(I,{}),"."]}),children:e.jsx(C,{component:"button",onClick:()=>{r(!0)},sx:{color:"#727272"},children:" Disclaimer"})})}function At(){return e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(U,{headText:"About the App",children:"The app aims to provide dynamic visualization of surface water extent in Cambodia from 2000 to 2021. Additionally, it offers annual surface water areas calculated at both national and provincial levels."}),e.jsxs(U,{headText:"About the Data",children:["Using the"," ",e.jsx(C,{href:"https://earthengine.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Google Earth Engine"})," ","Python API, the surface water extents have been extracted from the Joint Research Centre (JRC) yearly water classification history dataset (",e.jsx(I,{}),"). This dataset is available at a 30-m spatial resolution from 1984 to 2021. However, due to limited coverage and some gaps in the early history of the Landsat archive prior to 2000, which could compromise consistent assessment of surface water dynamics, only data from 2000 to 2021 is presented here. More details about the dataset and its limitations can be found in the paper by ",e.jsx(I,{})]})]})}const T=S(l)(({theme:t})=>({textAlign:"center",borderRadius:t.spacing(1),border:"1px solid rgba(0, 0, 0, 0.12)",boxShadow:"0px 0px 0px 1.5px rgba(0, 0, 0, 0.1)",padding:t.spacing(1),display:"flex",justifyContent:"center",alignItems:"center"}));function Ft(){const t=v();k(t.breakpoints.down("xl"));const{map:r}=g();return c.useEffect(()=>{r&&r.attributionControl.setPrefix('Powered by <a href="https://leafletjs.com/" target="_blank">Leaflet</a>')},[r]),e.jsxs(l,{sx:{display:"flex",flexDirection:"column",p:1,justifyContent:"space-between",height:"100%",mt:{xs:0,md:4},rowGap:{xs:1},fontSize:{xs:"0.65rem",sm:"0.75rem"}},children:[e.jsx(T,{children:e.jsx(St,{})}),e.jsx(T,{sx:{height:{md:"45%"},minHeight:220},children:e.jsx(Pt,{})}),e.jsx(T,{children:e.jsx(At,{})}),e.jsxs(l,{sx:{textAlign:{xs:"center",md:"right"}},children:["Web application by ",e.jsx(C,{href:"https://github.com/chungsarit",target:"_blank",rel:"noopener noreferrer",underline:"hover",children:"CHUNG Sarit"})," (last updated, August 2023)",e.jsx(Mt,{})]})]})}const Tt=Be({transitions:{duration:{enteringScreen:0,leavingScreen:250}},palette:{primary:{main:"#0061ff"}},components:{MuiTooltip:{styleOverrides:{tooltip:{}}}}});function Dt(){const{data:t,isLoading:r,error:s}=rt();if(r)return e.jsx(et,{});if(s)throw s;return e.jsx(Re,{theme:Tt,children:e.jsx(l,{className:"App",sx:{display:"flex",height:"100vh",width:"100vw"},children:t&&e.jsx(Xe,{children:e.jsx(st,{children:e.jsx(jt,{contentChildren:e.jsx(pt,{eeImageUrls:t}),drawerChildren:e.jsx(Ft,{})})})})})})}me.createRoot(document.getElementById("root")).render(e.jsx(Y.StrictMode,{children:e.jsx(Dt,{})}));

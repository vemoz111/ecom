(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return a(4800)}])},4800:function(e,t,a){"use strict";a.r(t);var r=a(5893);a(7814);var s=a(1163),o=a(1664),i=a.n(o);a(2503);var n=a(9566),l=a(1649),c=a(939),d=a(7294),u=a(6501);t.default=function(){let e=(0,s.useRouter)();(0,d.useEffect)(()=>{localStorage.getItem("token")&&e.push({pathname:"/account/profile"})},[]);let[t,a]=(0,d.useState)(""),[o,p]=(0,d.useState)(""),m=(0,l.I0)(),f=async()=>{t?o?await n.Z.post("/api/auth/login",{email:t,password:o}).then(t=>{console.log(t.data),n.Z.defaults.headers.common.Authorization=t.data.token,m((0,c.x4)(t.data)),localStorage.setItem("token",t.data.token),localStorage.setItem("refresh_token",t.data.refresh_token),localStorage.setItem("userData",JSON.stringify(t.data.userData)),n.Z.defaults.headers.common.Authorization=t.data.token,e.reload(window.location.pathname)}).catch(e=>{u.ZP.error(e.response.data.error)}):u.ZP.error("Password must not be empty."):u.ZP.error("Email must not be empty.")};return(0,r.jsxs)("div",{className:"container py-3",children:[(0,r.jsx)(u.x7,{}),(0,r.jsx)("div",{className:"row my-4",children:(0,r.jsx)("div",{className:"col-md-6 offset-md-3 col-lg-4 offset-lg-4",children:(0,r.jsxs)("div",{className:"card border-0 shadow-sm",children:[(0,r.jsxs)("div",{className:"card-body px-4",children:[(0,r.jsx)("h4",{className:"card-title fw-bold mt-2 mb-4",children:"Sign In"}),(0,r.jsxs)("form",{className:"row g-2",children:[(0,r.jsxs)("div",{className:"col-md-12",children:[(0,r.jsx)("label",{className:"form-label",children:"Email"}),(0,r.jsx)("input",{value:t,onChange:e=>a(e.target.value),type:"email",className:"form-control",placeholder:"name@gmail.com"})]}),(0,r.jsxs)("div",{className:"col-md-12",children:[(0,r.jsx)("label",{className:"form-label",children:"Password"}),(0,r.jsx)("input",{value:o,onChange:e=>p(e.target.value),type:"password",className:"form-control"})]}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)(i(),{legacyBehavior:!0,href:"/auth/forgot-password",children:(0,r.jsx)("a",{className:"text-decoration-none",children:"Forgot password?"})})}),(0,r.jsx)("div",{className:"col-md-12 mt-4",children:(0,r.jsx)("button",{type:"button",className:"btn btn-primary w-100",onClick:f,children:"Login"})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"row g-2",children:[(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("hr",{className:"text-muted"})}),(0,r.jsx)("div",{className:"col-auto align-self-center text-muted",children:"or continue with"}),(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("hr",{className:"text-muted"})})]})})]})]}),(0,r.jsx)("hr",{className:"text-muted my-0"}),(0,r.jsxs)("div",{className:"text-center p-3",children:["Don‘t hanve an account?"," ",(0,r.jsx)(i(),{legacyBehavior:!0,href:"/auth/sign-up",children:(0,r.jsx)("a",{className:"text-decoration-none fw-medium",children:"Register"})})]})]})})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},6501:function(e,t,a){"use strict";let r,s;a.d(t,{x7:function(){return es},ZP:function(){return eo}});var o,i=a(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,s)=>{var o,i;let n=f(e),l=m[n]||(m[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!m[l]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[l]=p(s?{["@keyframes "+l]:t}:t,a?"":"."+l)}let h=a&&m.g?m.g:null;return a&&(m.g=m[l]),o=m[l],i=t,h?i.data=i.data.replace(h,o):-1===i.data.indexOf(o)&&(i.data=r?o+i.data:i.data+o),l},g=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let x,b,v,w=y.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=y.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(s):s}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(r=0,()=>(++r).toString()),$=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},_=new Map,C=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),D({type:4,toastId:e})},1e3);_.set(e,t)},O=e=>{let t=_.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?C(r):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},I=[],z={toasts:[],pausedAt:void 0},D=e=>{z=P(z,e),I.forEach(e=>{e(z)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=(e={})=>{let[t,a]=(0,i.useState)(z);(0,i.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),Z=e=>(t,a)=>{let r=T(t,e,a);return D({type:2,toast:r}),r.id},F=(e,t)=>Z("blank")(e,t);F.error=Z("error"),F.success=Z("success"),F.loading=Z("loading"),F.custom=Z("custom"),F.dismiss=e=>{D({type:3,toastId:e})},F.remove=e=>D({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{D({type:1,toast:{id:e,height:t}})},H=()=>{D({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=A(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&D({type:6,time:Date.now()})},[a]),s=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:H,endPause:r,calculateOffset:s}}},B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,X=j("div")`
  position: absolute;
`,q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(J,null,t):t:"blank"===a?null:i.createElement(q,null,i.createElement(R,{...r}),"loading"!==a&&i.createElement(X,null,"error"===a?i.createElement(B,{...r}):i.createElement(U,{...r})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),K(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?W(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(Y,{toast:e}),n=i.createElement(V,{...e.ariaProps},E(e.message,e));return i.createElement(Q,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,x=o,b=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:c}=L(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let o=a.position||t,n=ea(o,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):s?s(a):i.createElement(ee,{toast:a,position:o}))}))},eo=F}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);
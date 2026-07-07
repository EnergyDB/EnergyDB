(()=>{var F=(a,c)=>()=>{try{return c||a((c={exports:{}}).exports,c),c.exports}catch(l){throw c=0,l}};var G=F(()=>{(()=>{var a=(t,r,e)=>()=>{if(e)throw e[0];try{return t&&(r=t(t=0)),r}catch(o){throw e=[o],o}},c=(t,r)=>()=>{try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}},l,w=a(()=>{l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}}),d,f,S=a(()=>{w(),d=([t,r,e])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(r).forEach(n=>{o.setAttribute(n,String(r[n]))}),e?.length&&e.forEach(n=>{let i=d(n);o.appendChild(i)}),o},f=(t,r={})=>{let e={...l,...r};return d(["svg",e,t])}}),v,j=a(()=>{v=t=>{for(let r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1}}),y,L=a(()=>{y=(...t)=>t.filter((r,e,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===e).join(" ").trim()}),A,O=a(()=>{A=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,e,o)=>o?o.toUpperCase():e.toLowerCase())}),g,I=a(()=>{O(),g=t=>{let r=A(t);return r.charAt(0).toUpperCase()+r.slice(1)}}),b,u,h,T=a(()=>{S(),w(),j(),L(),I(),b=t=>Array.from(t.attributes).reduce((r,e)=>(r[e.name]=e.value,r),{}),u=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",h=(t,{nameAttr:r,icons:e,attrs:o})=>{let n=t.getAttribute(r);if(n==null)return;let i=g(n),s=e[i];if(!s)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);let m=b(t),H=v(m)?{}:{"aria-hidden":"true"},M={...l,"data-lucide":n,...H,...o,...m},N=u(m),P=u(o),x=y("lucide",`lucide-${n}`,...N,...P);x&&Object.assign(M,{class:x});let W=f(s,M);return t.parentNode?.replaceChild(W,t)}}),E,q=a(()=>{E=[["path",{d:"m6 9 6 6 6-6"}]]}),k,D=a(()=>{k=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]]}),C,U=a(()=>{C=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]}),p,$=a(()=>{T(),q(),D(),U(),p=({icons:t={},nameAttr:r="data-lucide",attrs:e={},root:o=document,inTemplates:n}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof o>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(o.querySelectorAll(`[${r}]`)).forEach(i=>h(i,{nameAttr:r,icons:t,attrs:e})),n&&Array.from(o.querySelectorAll("template")).forEach(i=>p({icons:t,nameAttr:r,attrs:e,root:i.content,inTemplates:n})),r==="data-lucide"){let i=o.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>h(s,{nameAttr:"icon-name",icons:t,attrs:e})))}}}),B=c(()=>{$(),document.addEventListener("DOMContentLoaded",()=>{p({icons:{Sun:C,Moon:k,ChevronDown:E}})})});B()})();});G();})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide/dist/esm/replaceElement.mjs:
lucide/dist/esm/icons/chevron-down.mjs:
lucide/dist/esm/icons/moon.mjs:
lucide/dist/esm/icons/sun.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.23.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

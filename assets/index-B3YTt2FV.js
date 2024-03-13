(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();let U=H;const w=1,x=2,D={owned:null,cleanups:null,context:null,owner:null};var u=null;let N=null,j=null,h=null,p=null,d=null,S=0;function G(e,t){const n=h,s=u,l=e.length===0,i=t===void 0?s:t,f=l?D:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=l?e:()=>e(()=>m(()=>_(f)));u=f,h=null;try{return b(o,!0)}finally{h=n,u=s}}function L(e,t,n){const s=F(e,t,!1,w);O(s)}function I(e,t,n){U=X;const s=F(e,t,!1,w);(!n||!n.render)&&(s.user=!0),d?d.push(s):O(s)}function m(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function K(e){I(()=>m(e))}function Q(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&b(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],f=N&&N.running;f&&N.disposed.has(i),(f?!i.tState:!i.state)&&(i.pure?p.push(i):d.push(i),i.observers&&R(i)),f||(i.state=w)}if(p.length>1e6)throw p=[],new Error},!1)),t}function O(e){if(!e.fn)return;_(e);const t=S;V(e,e.value,t)}function V(e,t,n){let s;const l=u,i=h;h=u=e;try{s=e.fn(t)}catch(f){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(_),e.owned=null),e.updatedAt=n+1,W(f)}finally{h=i,u=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Q(e,s):e.value=s,e.updatedAt=n)}function F(e,t,n,s=w,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:u?u.context:null,pure:n};return u===null||u!==D&&(u.owned?u.owned.push(i):u.owned=[i]),i}function C(e){if(e.state===0)return;if(e.state===x)return B(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<S);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)O(e);else if(e.state===x){const s=p;p=null,b(()=>B(e,t[0]),!1),p=s}}function b(e,t){if(p)return e();let n=!1;t||(p=[]),d?n=!0:d=[],S++;try{const s=e();return J(n),s}catch(s){n||(d=null),p=null,W(s)}}function J(e){if(p&&(H(p),p=null),e)return;const t=d;d=null,t.length&&b(()=>U(t),!1)}function H(e){for(let t=0;t<e.length;t++)C(e[t])}function X(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:C(s)}for(t=0;t<n;t++)C(e[t])}function B(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===w?s!==t&&(!s.updatedAt||s.updatedAt<S)&&C(s):l===x&&B(s,t)}}}function R(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=x,n.pure?p.push(n):d.push(n),n.observers&&R(n))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),f=n.observerSlots.pop();s<l.length&&(i.sourceSlots[f]=s,l[s]=i,n.observerSlots[s]=f)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Y(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function W(e,t=u){throw Y(e)}function Z(e,t){return m(()=>e(t||{}))}function q(e,t,n){let s=n.length,l=t.length,i=s,f=0,o=0,r=t[l-1].nextSibling,a=null;for(;f<l||o<i;){if(t[f]===n[o]){f++,o++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===f){const c=i<s?o?n[o-1].nextSibling:n[i-o]:r;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;f<l;)(!a||!a.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[i-1]&&n[o]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(n[o++],t[f++].nextSibling),e.insertBefore(n[--i],c),t[l]=n[i]}else{if(!a){a=new Map;let g=o;for(;g<i;)a.set(n[g],g++)}const c=a.get(t[f]);if(c!=null)if(o<c&&c<i){let g=f,T=1,M;for(;++g<l&&g<i&&!((M=a.get(t[g]))==null||M!==c+T);)T++;if(T>c-o){const $=t[f];for(;o<c;)e.insertBefore(n[o++],$)}else e.replaceChild(n[o++],t[f++])}else f++;else t[f++].remove()}}}function z(e,t,n,s={}){let l;return G(i=>{l=i,t===document?e():ee(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function k(e,t,n){let s;const l=()=>{const f=document.createElement("template");return f.innerHTML=e,n?f.content.firstChild.firstChild:f.content.firstChild},i=t?()=>m(()=>document.importNode(s||(s=l()),!0)):()=>(s||(s=l())).cloneNode(!0);return i.cloneNode=i,i}function ee(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return E(e,t,s,n);L(l=>E(e,t(),l,n),s)}function E(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),f){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=y(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=y(e,n,s);else{if(i==="function")return L(()=>{let o=t();for(;typeof o=="function";)o=o();n=E(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],r=n&&Array.isArray(n);if(v(o,t,n,l))return L(()=>n=E(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=y(e,n,s),f)return n}else r?n.length===0?P(e,o,s):q(e,n,o):(n&&y(e),P(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(f)return n=y(e,n,s,t);y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function v(e,t,n,s){let l=!1;for(let i=0,f=t.length;i<f;i++){let o=t[i],r=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))l=v(e,o,r)||l;else if(a==="function")if(s){for(;typeof o=="function";)o=o();l=v(e,Array.isArray(o)?o:[o],Array.isArray(r)?r:[r])||l}else e.push(o),l=!0;else{const c=String(o);r&&r.nodeType===3&&r.data===c?e.push(r):e.push(document.createTextNode(c))}}return l}function P(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function y(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let f=t.length-1;f>=0;f--){const o=t[f];if(l!==o){const r=o.parentNode===e;!i&&!f?r?e.replaceChild(l,o):e.insertBefore(l,n):r&&o.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}var te=k("<div>Hello");const A=window.Telegram.WebApp;function ne(){const e=()=>{A.ready(),A.MainButton.text="Pay :)",A.MainButton.show(),A.MainButton.onClick(A.sendData("HELLO"))};return K(()=>{I(e)}),te()}const se=document.getElementById("root");z(()=>Z(ne,{}),se);

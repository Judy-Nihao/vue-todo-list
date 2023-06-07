(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},xt=[],Ae=()=>{},ms=()=>!1,ps=/^on[^a-z]/,Vn=e=>ps.test(e),Gr=e=>e.startsWith("onUpdate:"),te=Object.assign,Zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hs=Object.prototype.hasOwnProperty,U=(e,t)=>hs.call(e,t),F=Array.isArray,Bt=e=>ln(e)==="[object Map]",Qr=e=>ln(e)==="[object Set]",Ra=e=>ln(e)==="[object Date]",j=e=>typeof e=="function",ne=e=>typeof e=="string",qt=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Hi=e=>J(e)&&j(e.then)&&j(e.catch),gs=Object.prototype.toString,ln=e=>gs.call(e),vs=e=>ln(e).slice(8,-1),bs=e=>ln(e)==="[object Object]",ea=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Sn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ys=/-(\w)/g,Me=qn(e=>e.replace(ys,(t,n)=>n?n.toUpperCase():"")),xs=/\B([A-Z])/g,Nt=qn(e=>e.replace(xs,"-$1").toLowerCase()),Xn=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=qn(e=>e?`on${Xn(e)}`:""),Xt=(e,t)=>!Object.is(e,t),Nn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ar=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const Or=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?As(r):ta(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(J(e))return e}}const _s=/;(?![^(]*\))/g,ws=/:([^]+)/,ks=/\/\*[^]*?\*\//g;function As(e){const t={};return e.replace(ks,"").split(_s).forEach(n=>{if(n){const r=n.split(ws);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _t(e){let t="";if(ne(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=_t(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Os="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Es=Jr(Os);function Bi(e){return!!e||e===""}function Cs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Et(e[r],t[r]);return n}function Et(e,t){if(e===t)return!0;let n=Ra(e),r=Ra(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=qt(e),r=qt(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?Cs(e,t):!1;if(n=J(e),r=J(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Et(e[o],t[o]))return!1}}return String(e)===String(t)}function Yi(e,t){return e.findIndex(n=>Et(n,t))}let xe;class Ps{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Is(e,t=xe){t&&t.active&&t.effects.push(e)}function Ts(){return xe}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ki=e=>(e.w&Ge)>0,Wi=e=>(e.n&Ge)>0,Ss=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},Ns=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ki(a)&&!Wi(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},Er=new WeakMap;let $t=0,Ge=1;const Cr=30;let _e;const ct=Symbol(""),Pr=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Is(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Xe=!0,Ge=1<<++$t,$t<=Cr?Ss(this):ja(this),this.fn()}finally{$t<=Cr&&Ns(this),Ge=1<<--$t,_e=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Vi=[];function Mt(){Vi.push(Xe),Xe=!1}function Ft(){const e=Vi.pop();Xe=e===void 0?!0:e}function de(e,t,n){if(Xe&&_e){let r=Er.get(e);r||Er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=na()),qi(a)}}function qi(e,t){let n=!1;$t<=Cr?Wi(e)||(e.n|=Ge,n=!Ki(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function De(e,t,n,r,a,i){const o=Er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ea(n)&&s.push(o.get("length")):(s.push(o.get(ct)),Bt(e)&&s.push(o.get(Pr)));break;case"delete":F(e)||(s.push(o.get(ct)),Bt(e)&&s.push(o.get(Pr)));break;case"set":Bt(e)&&s.push(o.get(ct));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ir(na(l))}}function Ir(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Da(r);for(const r of n)r.computed||Da(r)}function Da(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ms=Jr("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qt)),Fs=aa(),Rs=aa(!1,!0),Ls=aa(!0),za=js();function js(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=H(this)[t].apply(this,n);return Ft(),r}}),e}function Ds(e){const t=H(this);return de(t,"has",e),t.hasOwnProperty(e)}function aa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?el:eo:t?Qi:Zi).get(r))return r;const o=F(r);if(!e){if(o&&U(za,a))return Reflect.get(za,a,i);if(a==="hasOwnProperty")return Ds}const s=Reflect.get(r,a,i);return(qt(a)?Xi.has(a):Ms(a))||(e||de(r,"get",a),t)?s:se(s)?o&&ea(a)?s:s.value:J(s)?e?to(s):sa(s):s}}const zs=Ji(),$s=Ji(!0);function Ji(e=!1){return function(n,r,a,i){let o=n[r];if(Ct(o)&&se(o)&&!se(a))return!1;if(!e&&(!zn(a)&&!Ct(a)&&(o=H(o),a=H(a)),!F(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=F(n)&&ea(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Xt(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Us(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Hs(e,t){const n=Reflect.has(e,t);return(!qt(t)||!Xi.has(t))&&de(e,"has",t),n}function Bs(e){return de(e,"iterate",F(e)?"length":ct),Reflect.ownKeys(e)}const Gi={get:Fs,set:zs,deleteProperty:Us,has:Hs,ownKeys:Bs},Ys={get:Ls,set(e,t){return!0},deleteProperty(e,t){return!0}},Ks=te({},Gi,{get:Rs,set:$s}),ia=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Jn(a),s=r?ia:n?fa:Jt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function vn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function bn(e,t=!1){return e=e.__v_raw,!t&&de(H(e),"iterate",ct),Reflect.get(e,"size",e)}function $a(e){e=H(e);const t=H(this);return Jn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Ua(e,t){t=H(t);const n=H(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Xt(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function Ha(e){const t=H(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Ba(){const e=H(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function yn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?ia:e?fa:Jt;return!e&&de(s,"iterate",ct),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ia:t?fa:Jt;return!t&&de(i,"iterate",l?Pr:ct),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ws(){const e={get(i){return gn(this,i)},get size(){return bn(this)},has:vn,add:$a,set:Ua,delete:Ha,clear:Ba,forEach:yn(!1,!1)},t={get(i){return gn(this,i,!1,!0)},get size(){return bn(this)},has:vn,add:$a,set:Ua,delete:Ha,clear:Ba,forEach:yn(!1,!0)},n={get(i){return gn(this,i,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:yn(!0,!1)},r={get(i){return gn(this,i,!0,!0)},get size(){return bn(this,!0)},has(i){return vn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[Vs,qs,Xs,Js]=Ws();function oa(e,t){const n=t?e?Js:Xs:e?qs:Vs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Gs={get:oa(!1,!1)},Zs={get:oa(!1,!0)},Qs={get:oa(!0,!1)},Zi=new WeakMap,Qi=new WeakMap,eo=new WeakMap,el=new WeakMap;function tl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(e){return e.__v_skip||!Object.isExtensible(e)?0:tl(vs(e))}function sa(e){return Ct(e)?e:la(e,!1,Gi,Gs,Zi)}function rl(e){return la(e,!1,Ks,Zs,Qi)}function to(e){return la(e,!0,Ys,Qs,eo)}function la(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=nl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Ct(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function zn(e){return!!(e&&e.__v_isShallow)}function no(e){return wt(e)||Ct(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function ro(e){return Dn(e,"__v_skip",!0),e}const Jt=e=>J(e)?sa(e):e,fa=e=>J(e)?to(e):e;function ao(e){Xe&&_e&&(e=H(e),qi(e.dep||(e.dep=na())))}function io(e,t){e=H(e);const n=e.dep;n&&Ir(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function Dt(e){return al(e,!1)}function al(e,t){return se(e)?e:new il(e,t)}class il{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Jt(t)}get value(){return ao(this),this._value}set value(t){const n=this.__v_isShallow||zn(t)||Ct(t);t=n?t:H(t),Xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Jt(t),io(this))}}function ol(e){return se(e)?e.value:e}const sl={get:(e,t,n)=>ol(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function oo(e){return wt(e)?e:new Proxy(e,sl)}class ll{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,io(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return ao(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function fl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new ll(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Oe(e,t,n,r){if(j(e)){const i=Je(e,t,n,r);return i&&Hi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}cl(e,n,a,r)}function cl(e,t,n,r=!0){console.error(e)}let Gt=!1,Tr=!1;const oe=[];let Se=0;const kt=[];let Le=null,it=0;const so=Promise.resolve();let ca=null;function ul(e){const t=ca||so;return e?t.then(this?e.bind(this):e):t}function dl(e){let t=Se+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Zt(oe[r])<e?t=r+1:n=r}return t}function ua(e){(!oe.length||!oe.includes(e,Gt&&e.allowRecurse?Se+1:Se))&&(e.id==null?oe.push(e):oe.splice(dl(e.id),0,e),lo())}function lo(){!Gt&&!Tr&&(Tr=!0,ca=so.then(co))}function ml(e){const t=oe.indexOf(e);t>Se&&oe.splice(t,1)}function pl(e){F(e)?kt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?it+1:it))&&kt.push(e),lo()}function Ya(e,t=Gt?Se+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function fo(e){if(kt.length){const t=[...new Set(kt)];if(kt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Zt(n)-Zt(r)),it=0;it<Le.length;it++)Le[it]();Le=null,it=0}}const Zt=e=>e.id==null?1/0:e.id,hl=(e,t)=>{const n=Zt(e)-Zt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function co(e){Tr=!1,Gt=!0,oe.sort(hl);const t=Ae;try{for(Se=0;Se<oe.length;Se++){const n=oe[Se];n&&n.active!==!1&&Je(n,null,14)}}finally{Se=0,oe.length=0,fo(),Gt=!1,ca=null,(oe.length||kt.length)&&co()}}function gl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||V;h&&(a=n.map(w=>ne(w)?w.trim():w)),m&&(a=n.map(Ar))}let s,l=r[s=cr(t)]||r[s=cr(Me(t))];!l&&i&&(l=r[s=cr(Nt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function uo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=uo(c,t,!0);d&&(s=!0,te(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):te(o,i),J(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Nt(t))||U(e,t))}let ve=null,mo=null;function $n(e){const t=ve;return ve=e,mo=e&&e.type.__scopeId||null,t}function vl(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ti(-1);const i=$n(t);let o;try{o=e(...a)}finally{$n(i),r._d&&ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:w,ctx:T,inheritAttrs:S}=e;let $,k;const O=$n(e);try{if(n.shapeFlag&4){const I=a||r;$=Te(d.call(I,I,m,i,w,h,T)),k=l}else{const I=t;$=Te(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:bl(l)}}catch(I){Kt.length=0,Gn(I,e,1),$=pe(Qt)}let R=$;if(k&&S!==!1){const I=Object.keys(k),{shapeFlag:B}=R;I.length&&B&7&&(o&&I.some(Gr)&&(k=yl(k,o)),R=Pt(R,k))}return n.dirs&&(R=Pt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),$=R,$n(O),$}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vn(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const r in e)(!Gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ka(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!Zn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ka(r,o,c):!0:!!o;return!1}function Ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function _l({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wl=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):pl(e)}const _n={};function At(e,t,n){return po(e,t,n)}function po(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=Ts()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(se(e)?(c=()=>e.value,d=zn(e)):wt(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(I=>wt(I)||zn(I)),c=()=>e.map(I=>{if(se(I))return I.value;if(wt(I))return st(I);if(j(I))return Je(I,l,2)})):j(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Oe(e,l,3,[w])}:c=Ae,t&&r){const I=c;c=()=>st(I())}let h,w=I=>{h=O.onStop=()=>{Je(I,l,4)}},T;if(tn)if(w=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const I=wf();T=I.__watcherHandles||(I.__watcherHandles=[])}else return Ae;let S=m?new Array(e.length).fill(_n):_n;const $=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((B,ae)=>Xt(B,S[ae])):Xt(I,S)))&&(h&&h(),Oe(t,l,3,[I,S===_n?void 0:m&&S[0]===_n?[]:S,w]),S=I)}else O.run()};$.allowRecurse=!!t;let k;a==="sync"?k=$:a==="post"?k=()=>ue($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),k=()=>ua($));const O=new ra(c,k);t?n?$():S=O.run():a==="post"?ue(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&Zr(l.scope.effects,O)};return T&&T.push(R),R}function Al(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?ho(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=re;It(this);const s=po(a,i.bind(r),n);return o?It(o):ut(),s}function ho(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function st(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))st(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)st(e[n],t);else if(Qr(e)||Bt(e))e.forEach(n=>{st(n,t)});else if(bs(e))for(const n in e)st(e[n],t);return e}function gt(e,t){const n=ve;if(n===null)return e;const r=nr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=V]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&st(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Mt(),Oe(l,n,8,[e.el,s,e,t]),Ft())}}function Ol(e,t){return j(e)?(()=>te({name:e.name},t,{setup:e}))():e}const Mn=e=>!!e.type.__asyncLoader,go=e=>e.type.__isKeepAlive;function El(e,t){vo(e,"a",t)}function Cl(e,t){vo(e,"da",t)}function vo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)go(a.parent.vnode)&&Pl(r,t,n,a),a=a.parent}}function Pl(e,t,n,r){const a=Qn(t,e,r,!0);yo(()=>{Zr(r[t],a)},n)}function Qn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),It(n);const s=Oe(t,n,e,o);return ut(),Ft(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=re)=>(!tn||e==="sp")&&Qn(e,(...r)=>t(...r),n),Il=He("bm"),bo=He("m"),Tl=He("bu"),Sl=He("u"),Nl=He("bum"),yo=He("um"),Ml=He("sp"),Fl=He("rtg"),Rl=He("rtc");function Ll(e,t=re){Qn("ec",e,t)}const xo="components";function jl(e,t){return zl(xo,e,!0,t)||e}const Dl=Symbol.for("v-ndc");function zl(e,t,n=!0,r=!1){const a=ve||re;if(a){const i=a.type;if(e===xo){const s=bf(i,!1);if(s&&(s===t||s===Me(t)||s===Xn(Me(t))))return i}const o=Wa(a[e]||i[e],t)||Wa(a.appContext[e],t);return!o&&r?i:o}}function Wa(e,t){return e&&(e[t]||e[Me(t)]||e[Xn(Me(t))])}function $l(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Sr=e=>e?So(e)?nr(e)||e.proxy:Sr(e.parent):null,Yt=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sr(e.parent),$root:e=>Sr(e.root),$emit:e=>e.emit,$options:e=>da(e),$forceUpdate:e=>e.f||(e.f=()=>ua(e.update)),$nextTick:e=>e.n||(e.n=ul.bind(e.proxy)),$watch:e=>Al.bind(e)}),dr=(e,t)=>e!==V&&!e.__isScriptSetup&&U(e,t),Ul={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(dr(r,t))return o[t]=1,r[t];if(a!==V&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==V&&U(n,t))return o[t]=4,n[t];Nr&&(o[t]=0)}}const d=Yt[t];let m,h;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&U(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,U(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return dr(a,t)?(a[t]=n,!0):r!==V&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&U(e,o)||dr(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Yt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Va(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Hl(e){const t=da(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:w,updated:T,activated:S,deactivated:$,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:I,render:B,renderTracked:ae,renderTriggered:ie,errorCaptured:be,serverPrefetch:ge,expose:Fe,inheritAttrs:Lt,components:dn,directives:mn,filters:sr}=t;if(c&&Bl(c,r,null),o)for(const G in o){const K=o[G];j(K)&&(r[G]=K.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=sa(G))}if(Nr=!0,i)for(const G in i){const K=i[G],tt=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Ae,pn=!j(K)&&j(K.set)?K.set.bind(n):Ae,nt=Ve({get:tt,set:pn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ee=>nt.value=Ee})}if(s)for(const G in s)_o(s[G],r,n,G);if(l){const G=j(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{Xl(K,G[K])})}d&&qa(d,e,"c");function le(G,K){F(K)?K.forEach(tt=>G(tt.bind(n))):K&&G(K.bind(n))}if(le(Il,m),le(bo,h),le(Tl,w),le(Sl,T),le(El,S),le(Cl,$),le(Ll,be),le(Rl,ae),le(Fl,ie),le(Nl,O),le(yo,I),le(Ml,ge),F(Fe))if(Fe.length){const G=e.exposed||(e.exposed={});Fe.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:tt=>n[K]=tt})})}else e.exposed||(e.exposed={});B&&e.render===Ae&&(e.render=B),Lt!=null&&(e.inheritAttrs=Lt),dn&&(e.components=dn),mn&&(e.directives=mn)}function Bl(e,t,n=Ae){F(e)&&(e=Mr(e));for(const r in e){const a=e[r];let i;J(a)?"default"in a?i=Fn(a.from||r,a.default,!0):i=Fn(a.from||r):i=Fn(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function qa(e,t,n){Oe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){const a=r.includes(".")?ho(n,r):()=>n[r];if(ne(e)){const i=t[e];j(i)&&At(a,i)}else if(j(e))At(a,e.bind(n));else if(J(e))if(F(e))e.forEach(i=>_o(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&At(a,i,e)}}function da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,t,o)),J(t)&&i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Yl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Yl={data:Xa,props:Ja,emits:Ja,methods:Ut,computed:Ut,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ut,directives:Ut,watch:Wl,provide:Xa,inject:Kl};function Xa(e,t){return t?e?function(){return te(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Kl(e,t){return Ut(Mr(e),Mr(t))}function Mr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?te(Object.create(null),e,t):t}function Ja(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:te(Object.create(null),Va(e),Va(t??{})):t}function Wl(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function wo(){return{app:null,config:{isNativeTag:ms,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function ql(e,t){return function(r,a=null){j(r)||(r=te({},r)),a!=null&&!J(a)&&(a=null);const i=wo(),o=new Set;let s=!1;const l=i.app={_uid:Vl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:kf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=pe(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,nr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Hn=l;try{return c()}finally{Hn=null}}};return l}}let Hn=null;function Xl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){const r=re||ve;if(r||Hn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Hn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function Jl(e,t,n,r=!1){const a={},i={};Dn(i,tr,1),e.propsDefaults=Object.create(null),ko(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:rl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Zn(e.emitsOptions,h))continue;const w=t[h];if(l)if(U(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const T=Me(h);a[T]=Fr(l,s,T,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{ko(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=Nt(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function ko(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Sn(l))continue;const c=t[l];let d;a&&U(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,c[m],e,!U(c,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),ut())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function Ao(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[h,w]=Ao(m,t,!0);te(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,xt),xt;if(F(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Ga(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Me(d);if(Ga(m)){const h=i[d],w=o[m]=F(h)||j(h)?{type:h}:te({},h);if(w){const T=ei(Boolean,w.type),S=ei(String,w.type);w[0]=T>-1,w[1]=S<0||T<S,(T>-1||U(w,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Ga(e){return e[0]!=="$"}function Za(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qa(e,t){return Za(e)===Za(t)}function ei(e,t){return F(t)?t.findIndex(n=>Qa(n,e)):j(t)&&Qa(t,e)?0:-1}const Oo=e=>e[0]==="_"||e==="$stable",ma=e=>F(e)?e.map(Te):[Te(e)],Zl=(e,t,n)=>{if(t._n)return t;const r=vl((...a)=>ma(t(...a)),n);return r._c=!1,r},Eo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Oo(a))continue;const i=e[a];if(j(i))t[a]=Zl(a,i,r);else if(i!=null){const o=ma(i);t[a]=()=>o}}},Co=(e,t)=>{const n=ma(t);e.slots.default=()=>n},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Dn(t,"_",n)):Eo(t,e.slots={})}else e.slots={},t&&Co(e,t);Dn(e.slots,tr,1)},ef=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(te(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Eo(t,a)),o=t}else t&&(Co(e,t),o={default:1});if(i)for(const s in a)!Oo(s)&&!(s in o)&&delete a[s]};function Rr(e,t,n,r,a=!1){if(F(e)){e.forEach((h,w)=>Rr(h,t&&(F(t)?t[w]:t),n,r,a));return}if(Mn(r)&&!a)return;const i=r.shapeFlag&4?nr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,U(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),j(l))Je(l,s,12,[o,d]);else{const h=ne(l),w=se(l);if(h||w){const T=()=>{if(e.f){const S=h?U(m,l)?m[l]:d[l]:l.value;a?F(S)&&Zr(S,i):F(S)?S.includes(i)||S.push(i):h?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,U(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(T.id=-1,ue(T,n)):T()}}}const ue=kl;function tf(e){return nf(e)}function nf(e,t){const n=Or();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:w=Ae,insertStaticContent:T}=e,S=(f,u,p,v=null,g=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(v=hn(f),Ee(f,g,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:N,shapeFlag:C}=u;switch(b){case er:$(f,u,p,v);break;case Qt:k(f,u,p,v);break;case mr:f==null&&O(u,p,v,A);break;case Ie:dn(f,u,p,v,g,x,A,y,_);break;default:C&1?B(f,u,p,v,g,x,A,y,_):C&6?mn(f,u,p,v,g,x,A,y,_):(C&64||C&128)&&b.process(f,u,p,v,g,x,A,y,_,pt)}N!=null&&g&&Rr(N,f&&f.ref,x,u||f,!u)},$=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},O=(f,u,p,v)=>{[f.el,f.anchor]=T(f.children,u,p,v,f.el,f.anchor)},R=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},B=(f,u,p,v,g,x,A,y,_)=>{A=A||u.type==="svg",f==null?ae(u,p,v,g,x,A,y,_):ge(f,u,g,x,A,y,_)},ae=(f,u,p,v,g,x,A,y)=>{let _,b;const{type:N,props:C,shapeFlag:M,transition:L,dirs:D}=f;if(_=f.el=o(f.type,x,C&&C.is,C),M&8?d(_,f.children):M&16&&be(f.children,_,null,v,g,x&&N!=="foreignObject",A,y),D&&rt(f,null,v,"created"),ie(_,f,f.scopeId,A,v),C){for(const Y in C)Y!=="value"&&!Sn(Y)&&i(_,Y,null,C[Y],x,f.children,v,g,Re);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Pe(b,v,f)}D&&rt(f,null,v,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&L&&!L.persisted;W&&L.beforeEnter(_),r(_,u,p),((b=C&&C.onVnodeMounted)||W||D)&&ue(()=>{b&&Pe(b,v,f),W&&L.enter(_),D&&rt(f,null,v,"mounted")},g)},ie=(f,u,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(u===x){const A=g.vnode;ie(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},be=(f,u,p,v,g,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const N=f[b]=y?We(f[b]):Te(f[b]);S(null,N,u,p,v,g,x,A,y)}},ge=(f,u,p,v,g,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:N}=u;_|=f.patchFlag&16;const C=f.props||V,M=u.props||V;let L;p&&at(p,!1),(L=M.onVnodeBeforeUpdate)&&Pe(L,p,u,f),N&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const D=g&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,v,D,x):A||K(f,u,y,null,p,v,D,x,!1),_>0){if(_&16)Lt(y,u,C,M,p,v,g);else if(_&2&&C.class!==M.class&&i(y,"class",null,M.class,g),_&4&&i(y,"style",C.style,M.style,g),_&8){const W=u.dynamicProps;for(let Y=0;Y<W.length;Y++){const Q=W[Y],ye=C[Q],ht=M[Q];(ht!==ye||Q==="value")&&i(y,Q,ye,ht,g,f.children,p,v,Re)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Lt(y,u,C,M,p,v,g);((L=M.onVnodeUpdated)||N)&&ue(()=>{L&&Pe(L,p,u,f),N&&rt(u,f,p,"updated")},v)},Fe=(f,u,p,v,g,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],N=_.el&&(_.type===Ie||!zt(_,b)||_.shapeFlag&70)?m(_.el):p;S(_,b,N,null,v,g,x,A,!0)}},Lt=(f,u,p,v,g,x,A)=>{if(p!==v){if(p!==V)for(const y in p)!Sn(y)&&!(y in v)&&i(f,y,p[y],null,A,u.children,g,x,Re);for(const y in v){if(Sn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,g,x,Re)}"value"in v&&i(f,"value",p.value,v.value)}},dn=(f,u,p,v,g,x,A,y,_)=>{const b=u.el=f?f.el:s(""),N=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:L}=u;L&&(y=y?y.concat(L):L),f==null?(r(b,p,v),r(N,p,v),be(u.children,p,N,g,x,A,y,_)):C>0&&C&64&&M&&f.dynamicChildren?(Fe(f.dynamicChildren,M,p,g,x,A,y),(u.key!=null||g&&u===g.subTree)&&Po(f,u,!0)):K(f,u,p,N,g,x,A,y,_)},mn=(f,u,p,v,g,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,A,_):sr(u,p,v,g,x,A,_):Ia(f,u,_)},sr=(f,u,p,v,g,x,A)=>{const y=f.component=mf(f,v,g);if(go(f)&&(y.ctx.renderer=pt),pf(y),y.asyncDep){if(g&&g.registerDep(y,le),!f.el){const _=y.subTree=pe(Qt);k(null,_,u,p)}return}le(y,f,u,p,g,x,A)},Ia=(f,u,p)=>{const v=u.component=f.component;if(xl(f,u,p))if(v.asyncDep&&!v.asyncResolved){G(v,u,p);return}else v.next=u,ml(v.update),v.update();else u.el=f.el,v.vnode=u},le=(f,u,p,v,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:N,bu:C,u:M,parent:L,vnode:D}=f,W=N,Y;at(f,!1),N?(N.el=D.el,G(f,N,A)):N=D,C&&Nn(C),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&Pe(Y,L,N,D),at(f,!0);const Q=ur(f),ye=f.subTree;f.subTree=Q,S(ye,Q,m(ye.el),hn(ye),f,g,x),N.el=Q.el,W===null&&_l(f,Q.el),M&&ue(M,g),(Y=N.props&&N.props.onVnodeUpdated)&&ue(()=>Pe(Y,L,N,D),g)}else{let N;const{el:C,props:M}=u,{bm:L,m:D,parent:W}=f,Y=Mn(u);if(at(f,!1),L&&Nn(L),!Y&&(N=M&&M.onVnodeBeforeMount)&&Pe(N,W,u),at(f,!0),C&&fr){const Q=()=>{f.subTree=ur(f),fr(C,f.subTree,f,g,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ur(f);S(null,Q,p,v,f,g,x),u.el=Q.el}if(D&&ue(D,g),!Y&&(N=M&&M.onVnodeMounted)){const Q=u;ue(()=>Pe(N,W,Q),g)}(u.shapeFlag&256||W&&Mn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,g),f.isMounted=!0,u=p=v=null}},_=f.effect=new ra(y,()=>ua(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,at(f,!0),b()},G=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Gl(f,u.props,v,p),ef(f,u.children,p),Mt(),Ya(),Ft()},K=(f,u,p,v,g,x,A,y,_=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,C=u.children,{patchFlag:M,shapeFlag:L}=u;if(M>0){if(M&128){pn(b,C,p,v,g,x,A,y,_);return}else if(M&256){tt(b,C,p,v,g,x,A,y,_);return}}L&8?(N&16&&Re(b,g,x),C!==b&&d(p,C)):N&16?L&16?pn(b,C,p,v,g,x,A,y,_):Re(b,g,x,!0):(N&8&&d(p,""),L&16&&be(C,p,v,g,x,A,y,_))},tt=(f,u,p,v,g,x,A,y,_)=>{f=f||xt,u=u||xt;const b=f.length,N=u.length,C=Math.min(b,N);let M;for(M=0;M<C;M++){const L=u[M]=_?We(u[M]):Te(u[M]);S(f[M],L,p,null,g,x,A,y,_)}b>N?Re(f,g,x,!0,!1,C):be(u,p,v,g,x,A,y,_,C)},pn=(f,u,p,v,g,x,A,y,_)=>{let b=0;const N=u.length;let C=f.length-1,M=N-1;for(;b<=C&&b<=M;){const L=f[b],D=u[b]=_?We(u[b]):Te(u[b]);if(zt(L,D))S(L,D,p,null,g,x,A,y,_);else break;b++}for(;b<=C&&b<=M;){const L=f[C],D=u[M]=_?We(u[M]):Te(u[M]);if(zt(L,D))S(L,D,p,null,g,x,A,y,_);else break;C--,M--}if(b>C){if(b<=M){const L=M+1,D=L<N?u[L].el:v;for(;b<=M;)S(null,u[b]=_?We(u[b]):Te(u[b]),p,D,g,x,A,y,_),b++}}else if(b>M)for(;b<=C;)Ee(f[b],g,x,!0),b++;else{const L=b,D=b,W=new Map;for(b=D;b<=M;b++){const me=u[b]=_?We(u[b]):Te(u[b]);me.key!=null&&W.set(me.key,b)}let Y,Q=0;const ye=M-D+1;let ht=!1,Na=0;const jt=new Array(ye);for(b=0;b<ye;b++)jt[b]=0;for(b=L;b<=C;b++){const me=f[b];if(Q>=ye){Ee(me,g,x,!0);continue}let Ce;if(me.key!=null)Ce=W.get(me.key);else for(Y=D;Y<=M;Y++)if(jt[Y-D]===0&&zt(me,u[Y])){Ce=Y;break}Ce===void 0?Ee(me,g,x,!0):(jt[Ce-D]=b+1,Ce>=Na?Na=Ce:ht=!0,S(me,u[Ce],p,null,g,x,A,y,_),Q++)}const Ma=ht?rf(jt):xt;for(Y=Ma.length-1,b=ye-1;b>=0;b--){const me=D+b,Ce=u[me],Fa=me+1<N?u[me+1].el:v;jt[b]===0?S(null,Ce,p,Fa,g,x,A,y,_):ht&&(Y<0||b!==Ma[Y]?nt(Ce,p,Fa,2):Y--)}}},nt=(f,u,p,v,g=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,pt);return}if(A===Ie){r(x,u,p);for(let C=0;C<_.length;C++)nt(_[C],u,p,v);r(f.anchor,u,p);return}if(A===mr){R(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),g);else{const{leave:C,delayLeave:M,afterLeave:L}=y,D=()=>r(x,u,p),W=()=>{C(x,()=>{D(),L&&L()})};M?M(x,D,W):W()}else r(x,u,p)},Ee=(f,u,p,v=!1,g=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:N,patchFlag:C,dirs:M}=f;if(y!=null&&Rr(y,null,p,f,!0),N&256){u.ctx.deactivate(f);return}const L=N&1&&M,D=!Mn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Pe(W,u,f),N&6)ds(f.component,p,v);else{if(N&128){f.suspense.unmount(p,v);return}L&&rt(f,null,u,"beforeUnmount"),N&64?f.type.remove(f,u,p,g,pt,v):b&&(x!==Ie||C>0&&C&64)?Re(b,u,p,!1,!0):(x===Ie&&C&384||!g&&N&16)&&Re(_,u,p),v&&Ta(f)}(D&&(W=A&&A.onVnodeUnmounted)||L)&&ue(()=>{W&&Pe(W,u,f),L&&rt(f,null,u,"unmounted")},p)},Ta=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Ie){us(p,v);return}if(u===mr){I(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},us=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},ds=(f,u,p)=>{const{bum:v,scope:g,update:x,subTree:A,um:y}=f;v&&Nn(v),g.stop(),x&&(x.active=!1,Ee(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,v=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)Ee(f[A],u,p,v,g)},hn=f=>f.shapeFlag&6?hn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Sa=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,p),Ya(),fo(),u._vnode=f},pt={p:S,um:Ee,m:nt,r:Ta,mt:sr,mc:be,pc:K,pbc:Fe,n:hn,o:e};let lr,fr;return t&&([lr,fr]=t(pt)),{render:Sa,hydrate:lr,createApp:ql(Sa,lr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Po(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||Po(o,s)),s.type===er&&(s.el=o.el)}}function rf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const af=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Kt=[];let we=null;function pr(e=!1){Kt.push(we=e?null:[])}function of(){Kt.pop(),we=Kt[Kt.length-1]||null}let en=1;function ti(e){en+=e}function sf(e){return e.dynamicChildren=en>0?we||xt:null,of(),en>0&&we&&we.push(e),e}function hr(e,t,n,r,a,i){return sf(z(e,t,n,r,a,i,!0))}function Lr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Io=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||se(e)||j(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Io(t),ref:t&&Rn(t),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),en>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const pe=lf;function lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Dl)&&(e=Qt),Lr(e)){const s=Pt(e,t,!0);return n&&pa(s,n),en>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(yf(e)&&(e=e.__vccOpts),t){t=ff(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=_t(s)),J(l)&&(no(l)&&!F(l)&&(l=te({},l)),t.style=ta(l))}const o=ne(e)?1:wl(e)?128:af(e)?64:J(e)?4:j(e)?2:0;return z(e,t,n,r,a,o,i,!0)}function ff(e){return e?no(e)||tr in e?te({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?cf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Io(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Rn(t)):[a,Rn(t)]:Rn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function To(e=" ",t=0){return pe(er,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?pe(Qt):F(e)?pe(Ie,null,e.slice()):typeof e=="object"?We(e):pe(er,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[To(t)]):n=8);e.children=t,e.shapeFlag|=n}function cf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=_t([t.class,r.class]));else if(a==="style")t.style=ta([t.style,r.style]);else if(Vn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Oe(e,t,7,[n,r])}const uf=wo();let df=0;function mf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||uf,i={uid:df++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(r,a),emitsOptions:uo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=gl.bind(null,i),e.ce&&e.ce(i),i}let re=null,ha,vt,ni="__VUE_INSTANCE_SETTERS__";(vt=Or()[ni])||(vt=Or()[ni]=[]),vt.push(e=>re=e),ha=e=>{vt.length>1?vt.forEach(t=>t(e)):vt[0](e)};const It=e=>{ha(e),e.scope.on()},ut=()=>{re&&re.scope.off(),ha(null)};function So(e){return e.vnode.shapeFlag&4}let tn=!1;function pf(e,t=!1){tn=t;const{props:n,children:r}=e.vnode,a=So(e);Jl(e,n,a,t),Ql(e,r);const i=a?hf(e,t):void 0;return tn=!1,i}function hf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ro(new Proxy(e.ctx,Ul));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?vf(e):null;It(e),Mt();const i=Je(r,e,0,[e.props,a]);if(Ft(),ut(),Hi(i)){if(i.then(ut,ut),t)return i.then(o=>{ri(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else ri(e,i,t)}else No(e,t)}function ri(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=oo(t)),No(e,n)}let ai;function No(e,t,n){const r=e.type;if(!e.render){if(!t&&ai&&!r.render){const a=r.template||da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=te(te({isCustomElement:i,delimiters:s},o),l);r.render=ai(a,c)}}e.render=r.render||Ae}It(e),Mt(),Hl(e),Ft(),ut()}function gf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}}))}function vf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return gf(e)},slots:e.slots,emit:e.emit,expose:t}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(oo(ro(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}}))}function bf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function yf(e){return j(e)&&"__vccOpts"in e}const Ve=(e,t)=>fl(e,t,tn);function xf(e,t,n){const r=arguments.length;return r===2?J(t)&&!F(t)?Lr(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),pe(e,t,n))}const _f=Symbol.for("v-scx"),wf=()=>Fn(_f),kf="3.3.4",Af="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,ii=ot&&ot.createElement("template"),Of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(Af,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ii.innerHTML=r?`<svg>${e}</svg>`:e;const s=ii.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ef(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Cf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&jr(r,i,"");for(const i in n)jr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const oi=/\s*!important$/;function jr(e,t,n){if(F(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Pf(e,t);oi.test(n)?e.setProperty(Nt(r),n.replace(oi,""),"important"):e[r]=n}}const si=["Webkit","Moz","ms"],gr={};function Pf(e,t){const n=gr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return gr[t]=r;r=Xn(r);for(let a=0;a<si.length;a++){const i=si[a]+r;if(i in e)return gr[t]=i}return t}const li="http://www.w3.org/1999/xlink";function If(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(li,t.slice(6,t.length)):e.setAttributeNS(li,t,n);else{const i=Es(t);n==null||i&&!Bi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Tf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Bi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function qe(e,t,n,r){e.addEventListener(t,n,r)}function Sf(e,t,n,r){e.removeEventListener(t,n,r)}function Nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Mf(t);if(r){const c=i[t]=Lf(r,a);qe(e,s,c,l)}else o&&(Sf(e,s,o,l),i[t]=void 0)}}const fi=/(?:Once|Passive|Capture)$/;function Mf(e){let t;if(fi.test(e)){t={};let r;for(;r=e.match(fi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let vr=0;const Ff=Promise.resolve(),Rf=()=>vr||(Ff.then(()=>vr=0),vr=Date.now());function Lf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(jf(r,n.value),t,5,[r])};return n.value=e,n.attached=Rf(),n}function jf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ci=/^on[a-z]/,Df=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Ef(e,r,a):t==="style"?Cf(e,n,r):Vn(t)?Gr(t)||Nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zf(e,t,r,a))?Tf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),If(e,t,r,a))};function zf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ci.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ci.test(t)&&ne(n)?!1:t in e}const Tt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Nn(t,n):t};function $f(e){e.target.composing=!0}function ui(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const br={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Tt(a);const i=r||a.props&&a.props.type==="number";qe(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ar(s)),e._assign(s)}),n&&qe(e,"change",()=>{e.value=e.value.trim()}),t||(qe(e,"compositionstart",$f),qe(e,"compositionend",ui),qe(e,"change",ui))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Tt(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ar(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Uf={deep:!0,created(e,t,n){e._assign=Tt(n),qe(e,"change",()=>{const r=e._modelValue,a=Mo(e),i=e.checked,o=e._assign;if(F(r)){const s=Yi(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Qr(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Fo(e,i))})},mounted:di,beforeUpdate(e,t,n){e._assign=Tt(n),di(e,t,n)}};function di(e,{value:t,oldValue:n},r){e._modelValue=t,F(t)?e.checked=Yi(t,r.props.value)>-1:Qr(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Et(t,Fo(e,!0)))}const mi={created(e,{value:t},n){e.checked=Et(t,n.props.value),e._assign=Tt(n),qe(e,"change",()=>{e._assign(Mo(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Tt(r),t!==n&&(e.checked=Et(t,r.props.value))}};function Mo(e){return"_value"in e?e._value:e.value}function Fo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Hf=["ctrl","shift","alt","meta"],Bf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hf.some(n=>e[`${n}Key`]&&!t.includes(n))},Yf=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Bf[t[a]];if(i&&i(n,t))return}return e(n,...r)},Kf=te({patchProp:Df},Of);let pi;function Wf(){return pi||(pi=tf(Kf))}const Vf=(...e)=>{const t=Wf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=qf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function qf(e){return ne(e)?document.querySelector(e):e}const Xf={class:"container"},Jf={class:"greeting"},Gf={class:"title"},Zf={class:"create-todo"},Qf=["onSubmit"],ec=z("h4",null,"建立待辦事項",-1),tc=z("h4",null,"選擇類別",-1),nc={class:"options"},rc=z("span",{class:"bubble business"},null,-1),ac=z("div",null,"工作",-1),ic=z("span",{class:"bubble personal"},null,-1),oc=z("div",null,"私人",-1),sc={class:"add-todo"},lc=z("span",null,"新增",-1),fc={class:"todo-list"},cc=z("h4",null,"待辦清單",-1),uc={class:"list"},dc=["onUpdate:modelValue"],mc={class:"todo-content"},pc=["onUpdate:modelValue"],hc={class:"actions"},gc=["onClick"],vc={__name:"App",setup(e){const t=Dt([]),n=Dt(""),r=Dt(""),a=Dt(null),i=Dt(""),o=Ve(()=>t.value.sort((m,h)=>h.createdAt-m.createdAt)),s=()=>{if(r.value.trim()===""||a.value===null){i.value="active";return}i.value="",t.value.push({content:r.value,category:a.value,done:!1,createdAt:new Date().getTime()}),r.value="",a.value=null},l=m=>{t.value=t.value.filter(h=>h.createdAt!==m.createdAt)},c=()=>{t.value=[]},d=()=>{t.value=t.value.filter(m=>m.done==!1)};return At(t,m=>{localStorage.setItem("todos",JSON.stringify(m))},{deep:!0}),At(n,m=>{localStorage.setItem("name",m)}),bo(()=>{n.value=localStorage.getItem("name")||"",t.value=JSON.parse(localStorage.getItem("todos"))||[]}),(m,h)=>{const w=jl("font-awesome-icon");return pr(),hr("main",Xf,[z("section",Jf,[z("h2",Gf,[To(" What's up, "),gt(z("input",{type:"text",placeholder:"輸入名字","onUpdate:modelValue":h[0]||(h[0]=T=>n.value=T)},null,512),[[br,n.value]])])]),z("section",Zf,[z("form",{onSubmit:Yf(s,["prevent"])},[ec,gt(z("input",{type:"text",placeholder:"例如：寫一篇筆記","onUpdate:modelValue":h[1]||(h[1]=T=>r.value=T)},null,512),[[br,r.value]]),tc,z("div",nc,[z("label",null,[gt(z("input",{type:"radio",name:"category",value:"business","onUpdate:modelValue":h[2]||(h[2]=T=>a.value=T)},null,512),[[mi,a.value]]),rc,ac]),z("label",null,[gt(z("input",{type:"radio",name:"category",value:"personal","onUpdate:modelValue":h[3]||(h[3]=T=>a.value=T)},null,512),[[mi,a.value]]),ic,oc])]),z("button",sc,[lc,pe(w,{icon:"fa-solid fa-circle-plus"})]),z("p",{class:_t(`reminder ${i.value}`)},"請輸入待辦事項＋選擇類別",2)],40,Qf)]),z("section",fc,[cc,z("button",{class:"clear",onClick:h[4]||(h[4]=T=>c())},"清除全部"),z("button",{class:"clear completed",onClick:h[5]||(h[5]=T=>d())},"清除已完成項目"),z("div",uc,[(pr(!0),hr(Ie,null,$l(o.value,T=>(pr(),hr("div",{class:_t(`todo-item ${o.value.done&&"done"}`)},[z("label",null,[gt(z("input",{type:"checkbox","onUpdate:modelValue":S=>T.done=S},null,8,dc),[[Uf,T.done]]),z("span",{class:_t(`bubble ${T.category}`)},null,2)]),z("div",mc,[gt(z("input",{type:"text","onUpdate:modelValue":S=>T.content=S},null,8,pc),[[br,T.content]])]),z("div",hc,[z("button",{class:"delete",onClick:S=>l(T)},[pe(w,{icon:"fa-regular fa-trash-can"})],8,gc)])],2))),256))])])])}}};function hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function bc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yc(e,t,n){return t&&gi(e.prototype,t),n&&gi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ga(e,t){return _c(e)||kc(e,t)||Ro(e,t)||Oc()}function fn(e){return xc(e)||wc(e)||Ro(e)||Ac()}function xc(e){if(Array.isArray(e))return Dr(e)}function _c(e){if(Array.isArray(e))return e}function wc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ro(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ac(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vi=function(){},va={},Lo={},jo=null,Do={mark:vi,measure:vi};try{typeof window<"u"&&(va=window),typeof document<"u"&&(Lo=document),typeof MutationObserver<"u"&&(jo=MutationObserver),typeof performance<"u"&&(Do=performance)}catch{}var Ec=va.navigator||{},bi=Ec.userAgent,yi=bi===void 0?"":bi,Ze=va,X=Lo,xi=jo,wn=Do;Ze.document;var Be=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",zo=~yi.indexOf("MSIE")||~yi.indexOf("Trident/"),kn,An,On,En,Cn,ze="___FONT_AWESOME___",zr=16,$o="fa",Uo="svg-inline--fa",dt="data-fa-i2svg",$r="data-fa-pseudo-element",Cc="data-fa-pseudo-element-pending",ba="data-prefix",ya="data-icon",_i="fontawesome-i2svg",Pc="async",Ic=["HTML","HEAD","STYLE","SCRIPT"],Ho=function(){try{return!0}catch{return!1}}(),q="classic",Z="sharp",xa=[q,Z];function cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var nn=cn((kn={},ee(kn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(kn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),kn)),rn=cn((An={},ee(An,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(An,Z,{solid:"fass",regular:"fasr",light:"fasl"}),An)),an=cn((On={},ee(On,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(On,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),On)),Tc=cn((En={},ee(En,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(En,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),En)),Sc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Bo="fa-layers-text",Nc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mc=cn((Cn={},ee(Cn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(Cn,Z,{900:"fass",400:"fasr",300:"fasl"}),Cn)),Yo=[1,2,3,4,5,6,7,8,9,10],Fc=Yo.concat([11,12,13,14,15,16,17,18,19,20]),Rc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},on=new Set;Object.keys(rn[q]).map(on.add.bind(on));Object.keys(rn[Z]).map(on.add.bind(on));var Lc=[].concat(xa,fn(on),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(Yo.map(function(e){return"".concat(e,"x")})).concat(Fc.map(function(e){return"w-".concat(e)})),Wt=Ze.FontAwesomeConfig||{};function jc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Dc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var zc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zc.forEach(function(e){var t=ga(e,2),n=t[0],r=t[1],a=Dc(jc(n));a!=null&&(Wt[r]=a)})}var Ko={styleDefault:"solid",familyDefault:"classic",cssPrefix:$o,replacementClass:Uo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wt.familyPrefix&&(Wt.cssPrefix=Wt.familyPrefix);var St=E(E({},Ko),Wt);St.autoReplaceSvg||(St.observeMutations=!1);var P={};Object.keys(Ko).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){St[e]=n,Vt.forEach(function(r){return r(P)})},get:function(){return St[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Vt.forEach(function(n){return n(P)})},get:function(){return St.cssPrefix}});Ze.FontAwesomeConfig=P;var Vt=[];function $c(e){return Vt.push(e),function(){Vt.splice(Vt.indexOf(e),1)}}var Ke=zr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uc(e){if(!(!e||!Be)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Hc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var e=12,t="";e-- >0;)t+=Hc[Math.random()*62|0];return t}function Rt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _a(e){return e.classList?Rt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Wo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Wo(e[n]),'" ')},"").trim()}function rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wa(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Yc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Kc(e){var t=e.transform,n=e.width,r=n===void 0?zr:n,a=e.height,i=a===void 0?zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&zo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vo(){var e=$o,t=Uo,n=P.cssPrefix,r=P.replacementClass,a=Wc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var wi=!1;function yr(){P.autoAddCss&&!wi&&(Uc(Vo()),wi=!0)}var Vc={mixout:function(){return{dom:{css:Vo,insertCss:yr}}},hooks:function(){return{beforeDOMElementCreation:function(){yr()},beforeI2svg:function(){yr()}}}},$e=Ze||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var ke=$e[ze],qo=[],qc=function e(){X.removeEventListener("DOMContentLoaded",e),Yn=1,qo.map(function(t){return t()})},Yn=!1;Be&&(Yn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Yn||X.addEventListener("DOMContentLoaded",qc));function Xc(e){Be&&(Yn?setTimeout(e,0):qo.push(e))}function un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Wo(e):"<".concat(t," ").concat(Bc(r),">").concat(i.map(un).join(""),"</").concat(t,">")}function ki(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},xr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Jc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Gc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ur(e){var t=Gc(e);return t.length===1?t[0].toString(16):null}function Zc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ai(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ai(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,Ai(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Hr("fa",t)}var Pn,In,Tn,bt=ke.styles,Qc=ke.shims,eu=(Pn={},ee(Pn,q,Object.values(an[q])),ee(Pn,Z,Object.values(an[Z])),Pn),ka=null,Xo={},Jo={},Go={},Zo={},Qo={},tu=(In={},ee(In,q,Object.keys(nn[q])),ee(In,Z,Object.keys(nn[Z])),In);function nu(e){return~Lc.indexOf(e)}function ru(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!nu(a)?a:null}var es=function(){var t=function(i){return xr(bt,function(o,s,l){return o[l]=xr(s,i,{}),o},{})};Xo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in bt||P.autoFetchSvg,r=xr(Qc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Go=r.names,Zo=r.unicodes,ka=ar(P.styleDefault,{family:P.familyDefault})};$c(function(e){ka=ar(e.styleDefault,{family:P.familyDefault})});es();function Aa(e,t){return(Xo[e]||{})[t]}function au(e,t){return(Jo[e]||{})[t]}function ft(e,t){return(Qo[e]||{})[t]}function ts(e){return Go[e]||{prefix:null,iconName:null}}function iu(e){var t=Zo[e],n=Aa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ka}var Oa=function(){return{prefix:null,iconName:null,rest:[]}};function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=nn[r][e],i=rn[r][e]||rn[r][a],o=e in ke.styles?e:null;return i||o||null}var Oi=(Tn={},ee(Tn,q,Object.keys(an[q])),ee(Tn,Z,Object.keys(an[Z])),Tn);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,q,"".concat(P.cssPrefix,"-").concat(q)),ee(t,Z,"".concat(P.cssPrefix,"-").concat(Z)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return Oi[q].includes(c)}))&&(s=q),(e.includes(i[Z])||e.some(function(c){return Oi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=ru(P.cssPrefix,d);if(bt[d]?(d=eu[s].includes(d)?Tc[s][d]:d,o=d,c.prefix=d):tu[s].indexOf(d)>-1?(o=d,c.prefix=ar(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[q]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=o==="fa"?ts(c.iconName):{},w=ft(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!bt.far&&bt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Oa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(bt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var ou=function(){function e(){bc(this,e),this.definitions={}}return yc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Hr(s,o[s]);var l=an[q][s];l&&Hr(l,o[s]),es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ei=[],yt={},Ot={},su=Object.keys(Ot);function lu(e,t){var n=t.mixoutsTo;return Ei=e,yt={},Object.keys(Ot).forEach(function(r){su.indexOf(r)===-1&&delete Ot[r]}),Ei.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Br(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ft(n,t)||t,ki(ns.definitions,n,t)||ki(ke.styles,n,t)}var ns=new ou,fu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,mt("noAuto")},cu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(mt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Xc(function(){du({autoReplaceSvgRoot:n}),mt("watch",t)})}},uu={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ar(t[0]);return{prefix:r,iconName:ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Sc))){var a=ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ft(i,t)||t}}}},he={noAuto:fu,config:P,dom:cu,parse:uu,library:ns,findIconDefinition:Yr,toHtml:un},du=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||P.autoFetchSvg)&&Be&&P.autoReplaceSvg&&he.dom.i2svg({node:r})};function or(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function mu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(wa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=rr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function pu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ea(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,T=r.found?r:n,S=T.width,$=T.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat($)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/$*16*.0625,"em")}:{};w&&(R.attributes[dt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||sn())},children:[l]}),delete R.attributes.title);var B=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ae=r.found&&n.found?Ue("generateAbstractMask",B)||{children:[],attributes:{}}:Ue("generateAbstractIcon",B)||{children:[],attributes:{}},ie=ae.children,be=ae.attributes;return B.children=ie,B.attributes=be,s?pu(B):mu(B)}function Ci(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[dt]="");var d=E({},o.styles);wa(a)&&(d.transform=Kc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=rr(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function hu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _r=ke.styles;function Kr(e){var t=e[0],n=e[1],r=e.slice(4),a=ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var gu={found:!1,width:512,height:512};function vu(e,t){!Ho&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=ts(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_r[t]&&_r[t][e]){var o=_r[t][e];return r(Kr(o))}vu(e,t),r(E(E({},gu),{},{icon:P.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var Pi=function(){},Vr=P.measurePerformance&&wn&&wn.mark&&wn.measure?wn:{mark:Pi,measure:Pi},Ht='FA "6.4.0"',bu=function(t){return Vr.mark("".concat(Ht," ").concat(t," begins")),function(){return rs(t)}},rs=function(t){Vr.mark("".concat(Ht," ").concat(t," ends")),Vr.measure("".concat(Ht," ").concat(t),"".concat(Ht," ").concat(t," begins"),"".concat(Ht," ").concat(t," ends"))},Ca={begin:bu,end:rs},Ln=function(){};function Ii(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function yu(e){var t=e.getAttribute?e.getAttribute(ba):null,n=e.getAttribute?e.getAttribute(ya):null;return t&&n}function xu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function _u(){if(P.autoReplaceSvg===!0)return jn.replace;var e=jn[P.autoReplaceSvg];return e||jn.replace}function wu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ku(e){return X.createElement(e)}function as(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wu:ku:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(as(o,{ceFn:r}))}),a}function Au(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(as(a),n)}),n.getAttribute(dt)===null&&P.keepOriginalSource){var r=X.createComment(Au(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~_a(n).indexOf(P.replacementClass))return jn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return un(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function Ti(e){e()}function is(e,t){var n=typeof t=="function"?t:Ln;if(e.length===0)n();else{var r=Ti;P.mutateApproach===Pc&&(r=Ze.requestAnimationFrame||Ti),r(function(){var a=_u(),i=Ca.begin("mutate");e.map(a),i(),n()})}}var Pa=!1;function os(){Pa=!0}function qr(){Pa=!1}var Kn=null;function Si(e){if(xi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Ln:t,r=e.nodeCallback,a=r===void 0?Ln:r,i=e.pseudoElementsCallback,o=i===void 0?Ln:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Kn=new xi(function(c){if(!Pa){var d=Qe();Rt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ii(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ii(m.target)&&~Rc.indexOf(m.attributeName))if(m.attributeName==="class"&&yu(m.target)){var h=ir(_a(m.target)),w=h.prefix,T=h.iconName;m.target.setAttribute(ba,w||d),T&&m.target.setAttribute(ya,T)}else xu(m.target)&&a(m.target)})}}),Be&&Kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ou(){Kn&&Kn.disconnect()}function Eu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Cu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ir(_a(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=au(a.prefix,e.innerText)||Aa(a.prefix,Ur(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Pu(e){var t=Rt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Iu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Pu(e),s=Br("parseNodeAttributes",{},e),l=t.styleParser?Eu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Tu=ke.styles;function ss(e){var t=P.autoReplaceSvg==="nest"?Ni(e,{styleParser:!1}):Ni(e);return~t.extra.classes.indexOf(Bo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var et=new Set;xa.map(function(e){et.add("fa-".concat(e))});Object.keys(nn[q]).map(et.add.bind(et));Object.keys(nn[Z]).map(et.add.bind(et));et=fn(et);function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(_i,"-").concat(m))},a=function(m){return n.remove("".concat(_i,"-").concat(m))},i=P.autoFetchSvg?et:xa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Tu));i.includes("fa")||i.push("fa");var o=[".".concat(Bo,":not([").concat(dt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Rt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),c=s.reduce(function(d,m){try{var h=ss(m);h&&d.push(h)}catch(w){Ho||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){is(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function Su(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ss(e).then(function(n){n&&is([n],t)})}function Nu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Mu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,T=w===void 0?null:w,S=n.classes,$=S===void 0?[]:S,k=n.attributes,O=k===void 0?{}:k,R=n.styles,I=R===void 0?{}:R;if(t){var B=t.prefix,ae=t.iconName,ie=t.icon;return or(E({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(h?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(T||sn()):(O["aria-hidden"]="true",O.focusable="false")),Ea({icons:{main:Kr(ie),mask:l?Kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ae,transform:E(E({},Ne),a),symbol:o,title:h,maskId:d,titleId:T,extra:{attributes:O,styles:I,classes:$}})})}},Fu={mixout:function(){return{icon:Nu(Mu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mi,n.nodeCallback=Su,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Mi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,T){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var $=ga(S,2),k=$[0],O=$[1];w([n,Ea({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var c;return wa(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ru={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(fn(i)).join(" ")},children:o}]})}}}},Lu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return or({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),hu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(fn(s))}})})}}}},ju={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,w=h===void 0?{}:h;return or({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),Ci({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(P.cssPrefix,"-layers-text")].concat(fn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(zo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ci({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Du=new RegExp('"',"ug"),Fi=[1105920,1112319];function zu(e){var t=e.replace(Du,""),n=Zc(t,0),r=n>=Fi[0]&&n<=Fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ur(a?t[0]:t),isSecondary:r||a}}function Ri(e,t){var n="".concat(Cc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Rt(e.children),o=i.filter(function(ie){return ie.getAttribute($r)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Nc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Z:q,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rn[h][l[2].toLowerCase()]:Mc[h][c],T=zu(m),S=T.value,$=T.isSecondary,k=l[0].startsWith("FontAwesome"),O=Aa(w,S),R=O;if(k){var I=iu(S);I.iconName&&I.prefix&&(O=I.iconName,w=I.prefix)}if(O&&!$&&(!o||o.getAttribute(ba)!==w||o.getAttribute(ya)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var B=Iu(),ae=B.extra;ae.attributes[$r]=t,Wr(O,w).then(function(ie){var be=Ea(E(E({},B),{},{icons:{main:ie,mask:Oa()},prefix:w,iconName:R,extra:ae,watchable:!0})),ge=X.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Fe){return un(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function $u(e){return Promise.all([Ri(e,"::before"),Ri(e,"::after")])}function Uu(e){return e.parentNode!==document.head&&!~Ic.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Li(e){if(Be)return new Promise(function(t,n){var r=Rt(e.querySelectorAll("*")).filter(Uu).map($u),a=Ca.begin("searchPseudoElements");os(),Promise.all(r).then(function(){a(),qr(),t()}).catch(function(){a(),qr(),n()})})}var Hu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Li,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&Li(a)}}},ji=!1,Bu={mixout:function(){return{dom:{unwatch:function(){os(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Si(Br("mutationObserverCallbacks",{}))},noAuto:function(){Ou()},watch:function(n){var r=n.observeMutationsRoot;ji?qr():Si(Br("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Yu={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ku(e){return e.tag==="g"?e.children:[e]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):Oa();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,w=Yc({transform:l,containerWidth:m,iconWidth:c}),T={tag:"rect",attributes:E(E({},wr),{},{fill:"white"})},S=d.children?{children:d.children.map(zi)}:{},$={tag:"g",attributes:E({},w.inner),children:[zi(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},S))]},k={tag:"g",attributes:E({},w.outer),children:[$]},O="mask-".concat(s||sn()),R="clip-".concat(s||sn()),I={tag:"mask",attributes:E(E({},wr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Ku(h)},I]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},wr)}),{children:r,attributes:a}}}},Vu={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Xu=[Vc,Fu,Ru,Lu,ju,Hu,Bu,Yu,Wu,Vu,qu];lu(Xu,{mixoutsTo:he});he.noAuto;he.config;var Ju=he.library;he.dom;var Xr=he.parse;he.findIconDefinition;he.toHtml;var Gu=he.icon;he.layer;he.text;he.counter;function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Qu(e,t){if(e==null)return{};var n=Zu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ls={exports:{}};(function(e){(function(t){var n=function(k,O,R){if(!c(O)||m(O)||h(O)||w(O)||l(O))return O;var I,B=0,ae=0;if(d(O))for(I=[],ae=O.length;B<ae;B++)I.push(n(k,O[B],R));else{I={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(I[k(ie,R)]=n(k,O[ie],R))}return I},r=function(k,O){O=O||{};var R=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(R)},a=function(k){return T(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},h=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},T=function(k){return k=k-0,k===k},S=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(I,B){return R(I,k,B)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(S(a,O),k)},decamelizeKeys:function(k,O){return n(S(o,O),k,O)},pascalizeKeys:function(k,O){return n(S(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(ed)})(ls);var td=ls.exports,nd=["class","style"];function rd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=td.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ad(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return fs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ad(d);break;case"style":l.style=rd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Qu(n,nd);return xf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var cs=!1;try{cs=!0}catch{}function id(){if(!cs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function od(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(e){if(e&&Wn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xr.icon)return Xr.icon(e);if(e===null)return null;if(Wn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var sd=Ol({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ve(function(){return Ui(t.icon)}),i=Ve(function(){return kr("classes",od(t))}),o=Ve(function(){return kr("transform",typeof t.transform=="string"?Xr.transform(t.transform):t.transform)}),s=Ve(function(){return kr("mask",Ui(t.mask))}),l=Ve(function(){return Gu(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});At(l,function(d){if(!d)return id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Ve(function(){return l.value?fs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ld={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},fd={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};Ju.add(ld,fd);Vf(vc).component("font-awesome-icon",sd).mount("#app");

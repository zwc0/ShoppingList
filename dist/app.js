/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ k),
/* harmony export */   "Fragment": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ E),
/* harmony export */   "createContext": () => (/* binding */ F),
/* harmony export */   "createElement": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ d),
/* harmony export */   "h": () => (/* binding */ y),
/* harmony export */   "hydrate": () => (/* binding */ D),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ B),
/* harmony export */   "toChildArray": () => (/* binding */ P)
/* harmony export */ });
var n,l,u,i,t,r,o,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p(l,f,t,r,null)}function p(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(){return{current:null}}function _(n){return n.children}function k(n,l){this.props=n,this.context=l}function b(n,l){if(null==l)return n.__?b(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?b(n):null}function g(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!w.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(w)}function w(){var n,l,u,i,r,o,e,c;for(t.sort(f);n=t.shift();)n.__d&&(l=t.length,i=void 0,r=void 0,e=(o=(u=n).__v).__e,(c=u.__P)&&(i=[],(r=h({},o)).__v=o.__v+1,L(c,o,r,u.__n,void 0!==c.ownerSVGElement,null!=o.__h?[e]:null,i,null==e?b(o):e,o.__h),M(i,o),o.__e!=e&&g(o)),t.length>l&&t.sort(f));w.__r=0}function x(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,g,m,w=i&&i.__k||s,x=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d||"function"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p(null,d,null,null,d):Array.isArray(d)?p(_,{children:d},null,null,null):d.__b>0?p(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=w[h])||y&&d.key==y.key&&d.type===y.type)w[h]=void 0;else for(v=0;v<x;v++){if((y=w[v])&&d.key==y.key&&d.type===y.type){w[v]=void 0;break}y=null}L(n,d,y=y||c,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(m||(m=[]),y.ref&&m.push(y.ref,null,d),m.push(v,d.__c||k,d)),null!=k?(null==g&&(g=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=A(d,e,n):e=C(n,d,y,w,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=b(y))}for(u.__e=g,h=x;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=$(i).nextSibling),S(w[h],w[h]));if(m)for(h=0;h<m.length;h++)O(m[h],m[++h],m[++h])}function A(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?A(i,l,u):C(u,i,i,t,i.__e,l));return l}function P(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){P(n,l)}):l.push(n)),l}function C(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function $(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=$(u)))return i;return null}function H(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||T(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||T(n,r,l[r],u[r],i)}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function T(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?z:j,r):n.removeEventListener(l,r?z:j,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function j(n){return this.l[n.type+!1](l.event?l.event(n):n)}function z(n){return this.l[n.type+!0](l.event?l.event(n):n)}function L(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,b,g,m,w,A,P,C,$,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof I){if(g=u.props,m=(s=I.contextType)&&t[s.__c],w=s?m?m.props.value:s.__:t,i.__c?b=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(g,w):(u.__c=a=new k(g,w),a.constructor=I,a.render=q),m&&m.sub(a),a.props=g,a.state||(a.state={}),a.context=w,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,I.getDerivedStateFromProps(g,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==I.getDerivedStateFromProps&&g!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,w)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=g,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,w),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d)})}if(a.context=w,a.props=g,a.__P=n,P=l.__r,C=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[]}else do{a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++C<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),H=null!=s&&s.type===_&&null==s.key?s.props.children:s,x(n,Array.isArray(H)?H:[H],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),b&&(a.__E=a.__=null),a.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function M(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1}if(null===d)y===p||e&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||c).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(H(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,x(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&b(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&T(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&T(l,"checked",_,y.checked,!1))}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function S(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&S(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v(n.__e),n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!r&&t||i).__k=y(_,null,[u]),o||c,c,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),M(f,u)}function D(n,l){B(n,l,D)}function E(l,u,i){var t,r,o,f=h({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),p(l.type,f,t||l.key,r||l.ref,null)}function F(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,m(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},k.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),m(this))},k.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},k.prototype.render=_,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},w.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* binding */ T),
/* harmony export */   "useContext": () => (/* binding */ q),
/* harmony export */   "useDebugValue": () => (/* binding */ x),
/* harmony export */   "useEffect": () => (/* binding */ p),
/* harmony export */   "useErrorBoundary": () => (/* binding */ P),
/* harmony export */   "useId": () => (/* binding */ V),
/* harmony export */   "useImperativeHandle": () => (/* binding */ A),
/* harmony export */   "useLayoutEffect": () => (/* binding */ y),
/* harmony export */   "useMemo": () => (/* binding */ F),
/* harmony export */   "useReducer": () => (/* binding */ s),
/* harmony export */   "useRef": () => (/* binding */ _),
/* harmony export */   "useState": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function p(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function y(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,y(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return!n.__||w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n)}catch(n){r=n}}),u.__H=void 0,r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "jsx": () => (/* binding */ o),
/* harmony export */   "jsxDEV": () => (/* binding */ o),
/* harmony export */   "jsxs": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(i),i}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./src/components/PWABanner.tsx":
/*!**************************************!*\
  !*** ./src/components/PWABanner.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");


let refreshing;
if (navigator?.serviceWorker)
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing)
            return;
        window.location.reload();
        refreshing = true;
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const [waitingWorker, setWaitingWorker] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!('serviceWorker' in navigator))
            return;
        navigator.serviceWorker.register('sw.js').then(reg => {
            if (reg.waiting)
                return setWaitingWorker(reg.waiting);
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                if (!newWorker)
                    return;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller)
                        setWaitingWorker(newWorker);
                });
            });
        });
    }, []);
    const reloadPage = () => {
        if (!waitingWorker)
            return;
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    };
    if (!waitingWorker)
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'sticky bottom-0 p-1 mt-4 bg-blue-500 text-white text-center', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Update available. " }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: reloadPage, className: "font-bold underline", children: "Click here" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " to install." })] });
});


/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "./package.json");



const ListItem = ({ done, title, children, onClickTitle, onChangeDone, removeItem, editTitle, className = '', onMove }) => {
    const [isEdit, setIsEdit] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newTitle, setNewTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(title);
    const refInput = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const saveNewTitle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        editTitle(title, newTitle);
        setIsEdit(false);
    };
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => { refInput.current?.focus(); }, [isEdit]);
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { class: 'flex gap-2 items-center ' + className, onSubmit: saveNewTitle, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: done, onChange: () => onChangeDone({ title, done: !done }) }) }), isEdit
                ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: 'grow border border-blue-800 rounded-md text-black', ref: refInput, value: newTitle, onInput: ({ currentTarget }) => setNewTitle(currentTarget.value) })
                : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: `grow ${!done ? '' : 'line-through'}`, onClick: () => onClickTitle({ title }), children: title }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "min-w-fit", children: [isEdit
                        ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', children: "Save" })
                        : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsEdit(true);
                            }, children: "Edit" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-red-600 rounded-md p-1 px-2 text-white', onClick: () => { removeItem({ title }); }, children: "Delete" })] })] }));
};
const tryParseJson = (json) => {
    try {
        if (typeof json !== 'string')
            return null;
        return JSON.parse(json);
    }
    catch (e) {
        return null;
    }
};
const initList = () => tryParseJson(localStorage.getItem('shoppingList')) || [];
const getCurrList = (indexArr, list) => {
    return !indexArr.length ? list : indexArr.reduce((p, c) => {
        return p.find(l => l.title === c)?.children ?? [];
    }, list);
};
const clone = (json) => JSON.parse(JSON.stringify(json));
function on(target, key, fn, opts) {
    if (!target)
        return () => { };
    target.addEventListener(key, fn, opts ?? false);
    return () => target.removeEventListener(key, fn, opts ?? false);
}
const reorderDiffMin = 50;
const Home = () => {
    const [list, setList] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(initList());
    const [isDark, setIsDark] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(tryParseJson(localStorage.getItem('shoppingListDark') || false) || false);
    const [newTitle, setNewTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [indexArr, setIndexArr] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const refInputAdd = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const currList = getCurrList(indexArr, list);
    const dragRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const off = on(dragRef.current, 'pointerdown', ({ clientX: xStart, clientY: yStart, target }) => {
            console.log('down');
            const item = target instanceof HTMLFormElement ? target : target instanceof HTMLElement ? target.closest('form') : null;
            if (!item)
                return;
            const startIndex = [...item.parentElement?.children ?? item].findIndex(e => e === item);
            const date = +new Date();
            function clear() {
                offUp();
                offMove();
            }
            const offUp = on(document.body, 'pointerup', (e) => {
                if ((+new Date() - date) < 1000)
                    return clear();
                const { target } = e;
                const item = target instanceof HTMLFormElement ? target : target instanceof HTMLElement ? target.closest('form') : null;
                if (!item)
                    return clear();
                const index = [...item.parentElement?.children ?? item].findIndex(e => e === item);
                if (index === startIndex)
                    return clear();
                console.log({ index, startIndex });
                setList((list) => {
                    const newList = clone(list);
                    const newCurrList = getCurrList(indexArr, newList);
                    newCurrList.splice(index, 0, newCurrList.splice(startIndex, 1)[0]);
                    return newList;
                });
                clear();
            });
            const offMove = on(document.body, 'pointermove', ({ clientY, clientX }) => {
                if ((+new Date() - date) < (1000) && ((yStart - clientY) > 20
                    || (xStart - clientX) > 20)) {
                    offUp();
                    offMove();
                }
            });
        });
        return off;
    }, []);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('shoppingListDark', `${isDark}`);
    }, [isDark]);
    const addItem = (e) => {
        e.preventDefault();
        if (!newTitle)
            return;
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        if (newCurrList.some(l => l.title === newTitle))
            return;
        newCurrList.push({ done: false, title: newTitle, children: [] });
        setList(newList);
        setNewTitle('');
        refInputAdd.current?.focus();
    };
    const removeItem = ({ title }) => {
        const doDelete = confirm(`Delete item (${title})?`);
        if (!doDelete)
            return;
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const index = newCurrList.findIndex(x => x.title === title);
        newCurrList.splice(index, 1);
        setList(newList);
    };
    const editTitle = (title, newTitle) => {
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const item = newCurrList.find(l => l.title === title);
        if (!item || newCurrList.some(l => l.title === newTitle))
            return;
        item.title = newTitle;
        setList(newList);
    };
    const onChangeDone = ({ title, done }) => {
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const item = newCurrList.find(l => l.title === title);
        if (!item)
            return newCurrList;
        item.done = done;
        setList(newList);
    };
    const onClickTitle = ({ title }) => {
        setIndexArr(p => {
            const newArr = clone(p);
            newArr.push(title);
            return newArr;
        });
    };
    const back = () => {
        const newArr = clone(indexArr);
        newArr.pop();
        setIndexArr(newArr);
    };
    function exportList() {
        const a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(currList)));
        a.setAttribute('download', 'ShoppingList.json');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    async function importList(e) {
        //@ts-ignore
        const clearInput = () => { e.target.value = null; };
        try {
            const file = e.currentTarget.files?.[0];
            if (!file)
                return clearInput();
            const text = await file.text();
            const json = JSON.parse(text);
            if (!Array.isArray(json) || !json.length
                || !json.every(e => ('done' in e && typeof e.done === 'boolean'
                    && 'title' in e && typeof e.title === 'string'
                    && 'children' in e && Array.isArray(e.children)))) {
                throw 'invalid object keys';
            }
            const wasConfirmed = confirm('Are you sure you want to import the items from this file?');
            if (!wasConfirmed)
                return clearInput();
            const newList = clone(list);
            const newCurrList = getCurrList(indexArr, newList);
            let anyFailed = false;
            json.forEach(e => {
                if (newCurrList.some(l => l.title === e.title))
                    return anyFailed = true;
                newCurrList.push(e);
            });
            setList(newList);
            if (anyFailed)
                alert('One or more items could not be imported as an item already exists with the same name.');
        }
        catch (e) {
            console.error(e);
            return alert('Unable to import. File data invalid.');
        }
        clearInput();
    }
    localStorage.setItem('shoppingList', JSON.stringify(list));
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: 'flex flex-wrap items-center mb-2', children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { class: "grow text-2xl text-center", children: "Shopping List" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { class: "bg-blue-800 rounded-md p-1 px-2 mr-4 text-white", children: ["Import", (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "file", accept: ".json", onChange: importList, class: "hidden" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: exportList, class: "bg-blue-800 rounded-md p-1 px-2 mr-4 text-white", children: "Export" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { onClick: () => setIsDark(!isDark), class: 'w-6 h-6 block dark:hidden', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z", fill: "#1C274C" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z", fill: "#1C274C" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { onClick: () => setIsDark(!isDark), class: 'w-6 h-6 hidden dark:block', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "currentColor" }) })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "text-sm", children: _package_json__WEBPACK_IMPORTED_MODULE_2__.version }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [indexArr.length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: 'bg-blue-800 rounded-md p-1 px-2 mr-4 text-white', onClick: back, children: "Back" }), indexArr.join(' - ')] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: dragRef, className: "grid divide-blue-800 divide-y gap-1", children: currList.map(li => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItem, { className: "pt-1", done: li.done, title: li.title, children: li.children, onClickTitle: onClickTitle, onChangeDone: onChangeDone, removeItem: removeItem, editTitle: editTitle, onMove: (startIndex, index) => {
                        setList((list) => {
                            const newList = clone(list);
                            const newCurrList = getCurrList(indexArr, newList);
                            newCurrList.splice(index, 0, newCurrList.splice(startIndex, 1)[0]);
                            return newList;
                        });
                    } }, li.title))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { className: 'flex gap-4 pt-2', onSubmit: addItem, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: refInputAdd, class: 'grow border border-blue-800 rounded-md text-black', value: newTitle, onChange: ({ currentTarget }) => { setNewTitle(currentTarget.value); } }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", class: 'bg-blue-800 rounded-md p-1 px-2 text-white', children: "Add Item" })] })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"shoppinglist","version":"1.1.5.6","description":"Shopping List","scripts":{"watch:webpack":"npx webpack --config webpack.config.js -w","watch:tailwind":"npx tailwindcss -i ./src/styles/app.css -o ./dist/app.css --watch","watch":"npm start watch:webpack && npm start watch:tailwind","build:webpack":"npx webpack --config webpack.config.js --mode production","build:tailwind":"npx tailwindcss -i ./src/styles/app.css -o ./dist/app.css --minify","build":"npm run build:webpack && npm run build:tailwind"},"repository":{"type":"git","url":"git+https://github.com/zwc0/ShoppingList.git"},"devDependencies":{"preact":"^10.13.2","tailwindcss":"^3.3.2","typescript":"^4.9.3","webpack":"^5.81.0","webpack-cli":"^5.0.2"},"dependencies":{"ts-loader":"^9.4.2"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var _components_PWABanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PWABanner */ "./src/components/PWABanner.tsx");




const App = () => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PWABanner__WEBPACK_IMPORTED_MODULE_3__["default"], {})] }));
};
(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, {}), document.getElementById('app'));

})();

/******/ })()
;
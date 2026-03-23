/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/preact/dist/preact.module.js"
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ k),
/* harmony export */   Fragment: () => (/* binding */ _),
/* harmony export */   cloneElement: () => (/* binding */ E),
/* harmony export */   createContext: () => (/* binding */ F),
/* harmony export */   createElement: () => (/* binding */ y),
/* harmony export */   createRef: () => (/* binding */ d),
/* harmony export */   h: () => (/* binding */ y),
/* harmony export */   hydrate: () => (/* binding */ D),
/* harmony export */   isValidElement: () => (/* binding */ i),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ B),
/* harmony export */   toChildArray: () => (/* binding */ P)
/* harmony export */ });
var n,l,u,i,t,r,o,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p(l,f,t,r,null)}function p(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(){return{current:null}}function _(n){return n.children}function k(n,l){this.props=n,this.context=l}function b(n,l){if(null==l)return n.__?b(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?b(n):null}function g(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!w.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(w)}function w(){var n,l,u,i,r,o,e,c;for(t.sort(f);n=t.shift();)n.__d&&(l=t.length,i=void 0,r=void 0,e=(o=(u=n).__v).__e,(c=u.__P)&&(i=[],(r=h({},o)).__v=o.__v+1,L(c,o,r,u.__n,void 0!==c.ownerSVGElement,null!=o.__h?[e]:null,i,null==e?b(o):e,o.__h),M(i,o),o.__e!=e&&g(o)),t.length>l&&t.sort(f));w.__r=0}function x(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,g,m,w=i&&i.__k||s,x=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d||"function"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p(null,d,null,null,d):Array.isArray(d)?p(_,{children:d},null,null,null):d.__b>0?p(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=w[h])||y&&d.key==y.key&&d.type===y.type)w[h]=void 0;else for(v=0;v<x;v++){if((y=w[v])&&d.key==y.key&&d.type===y.type){w[v]=void 0;break}y=null}L(n,d,y=y||c,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(m||(m=[]),y.ref&&m.push(y.ref,null,d),m.push(v,d.__c||k,d)),null!=k?(null==g&&(g=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=A(d,e,n):e=C(n,d,y,w,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=b(y))}for(u.__e=g,h=x;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=$(i).nextSibling),S(w[h],w[h]));if(m)for(h=0;h<m.length;h++)O(m[h],m[++h],m[++h])}function A(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?A(i,l,u):C(u,i,i,t,i.__e,l));return l}function P(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){P(n,l)}):l.push(n)),l}function C(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function $(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=$(u)))return i;return null}function H(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||T(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||T(n,r,l[r],u[r],i)}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function T(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?z:j,r):n.removeEventListener(l,r?z:j,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function j(n){return this.l[n.type+!1](l.event?l.event(n):n)}function z(n){return this.l[n.type+!0](l.event?l.event(n):n)}function L(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,b,g,m,w,A,P,C,$,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof I){if(g=u.props,m=(s=I.contextType)&&t[s.__c],w=s?m?m.props.value:s.__:t,i.__c?b=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(g,w):(u.__c=a=new k(g,w),a.constructor=I,a.render=q),m&&m.sub(a),a.props=g,a.state||(a.state={}),a.context=w,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,I.getDerivedStateFromProps(g,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==I.getDerivedStateFromProps&&g!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,w)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=g,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,w),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d)})}if(a.context=w,a.props=g,a.__P=n,P=l.__r,C=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[]}else do{a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++C<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),H=null!=s&&s.type===_&&null==s.key?s.props.children:s,x(n,Array.isArray(H)?H:[H],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),b&&(a.__E=a.__=null),a.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function M(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1}if(null===d)y===p||e&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||c).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(H(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,x(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&b(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&T(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&T(l,"checked",_,y.checked,!1))}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function S(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&S(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v(n.__e),n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!r&&t||i).__k=y(_,null,[u]),o||c,c,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),M(f,u)}function D(n,l){B(n,l,D)}function E(l,u,i){var t,r,o,f=h({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),p(l.type,f,t||l.key,r||l.ref,null)}function F(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,m(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},k.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),m(this))},k.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},k.prototype.render=_,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},w.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map


/***/ },

/***/ "./node_modules/preact/hooks/dist/hooks.module.js"
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ T),
/* harmony export */   useContext: () => (/* binding */ q),
/* harmony export */   useDebugValue: () => (/* binding */ x),
/* harmony export */   useEffect: () => (/* binding */ p),
/* harmony export */   useErrorBoundary: () => (/* binding */ P),
/* harmony export */   useId: () => (/* binding */ V),
/* harmony export */   useImperativeHandle: () => (/* binding */ A),
/* harmony export */   useLayoutEffect: () => (/* binding */ y),
/* harmony export */   useMemo: () => (/* binding */ F),
/* harmony export */   useReducer: () => (/* binding */ s),
/* harmony export */   useRef: () => (/* binding */ _),
/* harmony export */   useState: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function p(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function y(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,y(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return!n.__||w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n)}catch(n){r=n}}),u.__H=void 0,r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ },

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   jsx: () => (/* binding */ o),
/* harmony export */   jsxDEV: () => (/* binding */ o),
/* harmony export */   jsxs: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(i),i}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ },

/***/ "./src/components/PWABanner.tsx"
/*!**************************************!*\
  !*** ./src/components/PWABanner.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/components/ThemeToggle.tsx"
/*!****************************************!*\
  !*** ./src/components/ThemeToggle.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeToggle)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.tsx");


function ThemeToggle() {
    const [isDark, setIsDark] = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { onClick: () => setIsDark(!isDark), class: 'w-6 h-6 block dark:hidden', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z", fill: "#1C274C" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z", fill: "#1C274C" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { onClick: () => setIsDark(!isDark), class: 'w-6 h-6 hidden dark:block', viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "currentColor" }) })] }));
}


/***/ },

/***/ "./src/components/base/btn.tsx"
/*!*************************************!*\
  !*** ./src/components/base/btn.tsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Btn)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");


function Btn({ ...props }) {
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { class: _constants__WEBPACK_IMPORTED_MODULE_1__.styles.btn, ...props });
}


/***/ },

/***/ "./src/components/icons/SvgArrowDownOnSquare.tsx"
/*!*******************************************************!*\
  !*** ./src/components/icons/SvgArrowDownOnSquare.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

const SvgArrowDownOnSquare = (props) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" }) }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowDownOnSquare);


/***/ },

/***/ "./src/components/icons/SvgArrowUpOnSquare.tsx"
/*!*****************************************************!*\
  !*** ./src/components/icons/SvgArrowUpOnSquare.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

const SvgArrowUpOnSquare = (props) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" }) }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowUpOnSquare);


/***/ },

/***/ "./src/components/icons/SvgArrowsUpDown.tsx"
/*!**************************************************!*\
  !*** ./src/components/icons/SvgArrowsUpDown.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

const SvgArrowsUpDown = (props) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" }) }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowsUpDown);


/***/ },

/***/ "./src/components/icons/SvgCheckCircle.tsx"
/*!*************************************************!*\
  !*** ./src/components/icons/SvgCheckCircle.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SvgCheckCircle)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function SvgCheckCircle() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }));
}


/***/ },

/***/ "./src/components/icons/SvgClipboard.tsx"
/*!***********************************************!*\
  !*** ./src/components/icons/SvgClipboard.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

const SvgClipboard = (props) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" }) }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgClipboard);


/***/ },

/***/ "./src/components/icons/SvgCog6Tooth.tsx"
/*!***********************************************!*\
  !*** ./src/components/icons/SvgCog6Tooth.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SvgCog6Tooth)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function SvgCog6Tooth() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })] }));
}


/***/ },

/***/ "./src/components/icons/SvgPencilSquare.tsx"
/*!**************************************************!*\
  !*** ./src/components/icons/SvgPencilSquare.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SvgPencilSquare)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function SvgPencilSquare() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" }) }));
}


/***/ },

/***/ "./src/components/icons/SvgPlusCircle.tsx"
/*!************************************************!*\
  !*** ./src/components/icons/SvgPlusCircle.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SvgPlusCircle)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function SvgPlusCircle() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }));
}


/***/ },

/***/ "./src/components/icons/SvgTrash.tsx"
/*!*******************************************!*\
  !*** ./src/components/icons/SvgTrash.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SvgTrash)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function SvgTrash() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "h-6", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }) }));
}


/***/ },

/***/ "./src/constants.ts"
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
const styles = {
    background: 'bg-[var(--body-bg-color,white)] dark:text-white dark:bg-[var(--body-background-color,black)]',
    btn: 'bg-[var(--button-bg-color,#1e40af)] rounded-md p-1 px-2 text-white',
};


/***/ },

/***/ "./src/context/ThemeContext.tsx"
/*!**************************************!*\
  !*** ./src/context/ThemeContext.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),
/* harmony export */   useTheme: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");



const ThemeContext = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const ThemeProvider = ({ children, initState }) => {
    const theme = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)(initState);
    const [isDark] = theme;
    // useEffect(()=>{
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('shoppingListDark', `${isDark}`);
    // }, [isDark]);
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeContext.Provider, { value: theme, children: children }));
};
const useTheme = () => {
    const context = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useContext)(ThemeContext);
    if (!context)
        throw new Error('theme context not defined');
    return context;
};


/***/ },

/***/ "./src/features/settings/index.tsx"
/*!*****************************************!*\
  !*** ./src/features/settings/index.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _components_base_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/base/btn */ "./src/components/base/btn.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _components_icons_SvgCog6Tooth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/SvgCog6Tooth */ "./src/components/icons/SvgCog6Tooth.tsx");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/localStorage */ "./src/utils/localStorage.ts");






//TODO - probably move this to a separate file
function applyThemeVariable(name, value) {
    if (value)
        document.documentElement.style.setProperty(name, value);
    else
        document.documentElement.style.removeProperty(name);
}
function Settings() {
    const [isOpen, setIsOpen] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const { theme } = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLocalStorage)('settings') || {};
        if (!theme)
            return;
        applyThemeVariable('--body-bg-color', theme['--body-bg-color']);
        applyThemeVariable('--button-bg-color', theme['--button-bg-color']);
    });
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "button", onClick: () => setIsOpen(true), children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgCog6Tooth__WEBPACK_IMPORTED_MODULE_4__["default"], {}) }), isOpen && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Settings, { onClose: () => setIsOpen(false) })] }));
}
function _Settings({ onClose }) {
    const ref = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [backgroundColor, setBackgroundColor] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(document.documentElement.style.getPropertyValue('--body-bg-color') || '');
    const [buttonColor, setButtonColor] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(document.documentElement.style.getPropertyValue('--button-bg-color') ||
        '');
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (ref.current)
            ref.current.showModal();
        () => {
            if (ref.current)
                ref.current.close();
        };
    }, []);
    function onSave() {
        applyThemeVariable('--body-bg-color', backgroundColor);
        applyThemeVariable('--button-bg-color', buttonColor);
        (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveLocalStorage)('settings', {
            theme: {
                '--body-bg-color': backgroundColor,
                '--button-bg-color': buttonColor,
            },
        });
        onClose();
    }
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dialog", { ref: ref, class: "w-3/4", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "text-center text-xl font-bold", children: "Settings" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "border border-2 p-2", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "flex flex-wrap gap-4 p-1 items-center", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "font-bold", children: "Customize Colors:" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "button", onClick: () => {
                                        setBackgroundColor('');
                                        setButtonColor('');
                                    }, children: "Reset" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "flex gap-2 flex-wrap mb-2", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "border border-1 p-2", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { class: "flex flex-col gap-1", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Background" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "color", value: backgroundColor, onChange: (e) => setBackgroundColor(e.currentTarget.value) })] }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "border border-1 p-2", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { class: "flex flex-col gap-1", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Buttons" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "color", value: buttonColor, onChange: (e) => setButtonColor(e.currentTarget.value) })] }) })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: `p-4 ${_constants__WEBPACK_IMPORTED_MODULE_3__.styles.background}`, style: {
                                '--body-background-color': backgroundColor,
                                '--button-bg-color': buttonColor,
                            }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "text-center", children: "Preview" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_2__["default"], { children: "Button" }) })] })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "flex flex-wrap gap-4 mt-4", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "button", onClick: onSave, children: "Save" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "button", onClick: onClose, children: "Close" })] })] }) }));
}


/***/ },

/***/ "./src/hooks/useHash.ts"
/*!******************************!*\
  !*** ./src/hooks/useHash.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHash: () => (/* binding */ getHash),
/* harmony export */   useHash: () => (/* binding */ useHash)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");

const getHash = () => location.hash.startsWith('#') ? location.hash.slice(1) : location.hash;
const useHash = () => {
    const [hash, setHash] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)((getHash));
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const abortController = new AbortController();
        window.addEventListener('hashchange', () => {
            console.log('test');
            setHash(getHash());
        }, { signal: abortController.signal });
        return () => { abortController.abort(); };
    }, []);
    return hash;
};


/***/ },

/***/ "./src/hooks/useRouting.ts"
/*!*********************************!*\
  !*** ./src/hooks/useRouting.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRouting: () => (/* binding */ useRouting)
/* harmony export */ });
/* harmony import */ var _useHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useHash */ "./src/hooks/useHash.ts");

const getArrFromHash = (hash) => hash.split('/').map(x => decodeURIComponent(x)).filter(Boolean);
const useRouting = () => {
    const hash = (0,_useHash__WEBPACK_IMPORTED_MODULE_0__.useHash)();
    const indexArr = getArrFromHash(hash);
    const setIndexArr = (updater) => {
        const arr = (typeof updater === 'function')
            ? updater(getArrFromHash((0,_useHash__WEBPACK_IMPORTED_MODULE_0__.getHash)()))
            : updater;
        const hash = arr.map(x => encodeURIComponent(x)).join('/');
        location.hash = hash;
    };
    return [indexArr, setIndexArr];
};


/***/ },

/***/ "./src/pages/Home.tsx"
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _components_ThemeToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ThemeToggle */ "./src/components/ThemeToggle.tsx");
/* harmony import */ var _hooks_useRouting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useRouting */ "./src/hooks/useRouting.ts");
/* harmony import */ var _components_icons_SvgTrash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/SvgTrash */ "./src/components/icons/SvgTrash.tsx");
/* harmony import */ var _components_icons_SvgPencilSquare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/icons/SvgPencilSquare */ "./src/components/icons/SvgPencilSquare.tsx");
/* harmony import */ var _components_icons_SvgPlusCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/icons/SvgPlusCircle */ "./src/components/icons/SvgPlusCircle.tsx");
/* harmony import */ var _components_icons_SvgCheckCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/icons/SvgCheckCircle */ "./src/components/icons/SvgCheckCircle.tsx");
/* harmony import */ var _features_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/settings */ "./src/features/settings/index.tsx");
/* harmony import */ var _components_base_btn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/base/btn */ "./src/components/base/btn.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _components_icons_SvgArrowsUpDown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/icons/SvgArrowsUpDown */ "./src/components/icons/SvgArrowsUpDown.tsx");
/* harmony import */ var _components_icons_SvgArrowUpOnSquare__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/icons/SvgArrowUpOnSquare */ "./src/components/icons/SvgArrowUpOnSquare.tsx");
/* harmony import */ var _components_icons_SvgArrowDownOnSquare__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/icons/SvgArrowDownOnSquare */ "./src/components/icons/SvgArrowDownOnSquare.tsx");
/* harmony import */ var _components_icons_SvgClipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/icons/SvgClipboard */ "./src/components/icons/SvgClipboard.tsx");

















const ListItem = ({ done, title, children, onClickTitle, onChangeDone, removeItem, editTitle, className = '', }) => {
    const [isEdit, setIsEdit] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newTitle, setNewTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(title);
    const refInput = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const saveNewTitle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        editTitle(title, newTitle);
        setIsEdit(false);
    };
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        refInput.current?.focus();
    }, [isEdit]);
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { class: 'flex gap-2 items-center min-w-0 ' + className, onSubmit: saveNewTitle, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "flex items-center justify-center", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: "h-5 w-5 accent-[var(--button-bg-color)]", type: "checkbox", checked: done, onChange: () => onChangeDone({ title, done: !done }) }) }), isEdit ? ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { class: "grow border border-blue-800 rounded-md text-black", ref: refInput, value: newTitle, onInput: ({ currentTarget }) => setNewTitle(currentTarget.value) })) : ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: `grow min-w-0 overflow-clip text-ellipsis ${!done ? '' : 'line-through'}`, onClick: () => onClickTitle({ title }), children: title })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "min-w-fit flex gap-2 items-center justify-center", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "button", draggable: true, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgArrowsUpDown__WEBPACK_IMPORTED_MODULE_13__["default"], { class: "h-6" }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "button", onClick: () => {
                            navigator.clipboard.writeText(title);
                        }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgClipboard__WEBPACK_IMPORTED_MODULE_16__["default"], { class: "h-6" }) }), done ? ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "button", onClick: () => {
                            removeItem({ title });
                        }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgTrash__WEBPACK_IMPORTED_MODULE_6__["default"], {}) })) : isEdit ? ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "submit", disabled: !newTitle, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgCheckCircle__WEBPACK_IMPORTED_MODULE_9__["default"], {}) })) : ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "button", onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsEdit(true);
                        }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgPencilSquare__WEBPACK_IMPORTED_MODULE_7__["default"], {}) }))] })] }));
};
const initList = () => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.tryParseJson)(localStorage.getItem('shoppingList')) || [];
const getCurrList = (indexArr, list) => {
    return !indexArr.length
        ? list
        : indexArr.reduce((p, c) => {
            return p.find((l) => l.title === c)?.children ?? [];
        }, list);
};
const clone = (json) => JSON.parse(JSON.stringify(json));
const Home = () => {
    const [list, setList] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(initList());
    const [newTitle, setNewTitle] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [indexArr, setIndexArr] = (0,_hooks_useRouting__WEBPACK_IMPORTED_MODULE_5__.useRouting)();
    const refInputAdd = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const currList = getCurrList(indexArr, list);
    const dragRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const off = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.on)(dragRef.current, 'dragstart', (dragStartEvent) => {
            const { clientX: xStart, clientY: yStart, target } = dragStartEvent;
            const item = target instanceof HTMLFormElement
                ? target
                : target instanceof Element
                    ? target.closest('form')
                    : null;
            if (!item)
                return;
            const rect = item.getBoundingClientRect();
            // Note: x and y are relative to where the click happened.
            dragStartEvent.dataTransfer?.setDragImage(item, xStart - rect.x, yStart - rect.y);
            const startIndex = [
                ...(item.parentElement?.children ?? item),
            ].findIndex((e) => e === item);
            let lastEl;
            function clear() {
                offTouchUp();
            }
            const offTouchUp = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.on)(document.body, 'dragend', (e) => {
                const target = document.elementFromPoint(e.clientX, e.clientY);
                lastEl = target;
                checkAndUpdate();
            });
            function checkAndUpdate() {
                const target = lastEl;
                const item = target instanceof HTMLFormElement
                    ? target
                    : target instanceof Element
                        ? target.closest('form')
                        : null;
                if (!item)
                    return clear();
                const index = [
                    ...(item.parentElement?.children ?? item),
                ].findIndex((e) => e === item);
                if (index === startIndex)
                    return clear();
                setList((list) => {
                    const newList = clone(list);
                    let newCurrList;
                    setIndexArr((arr) => {
                        newCurrList = getCurrList(arr, newList);
                        return arr;
                    });
                    newCurrList.splice(index, 0, newCurrList.splice(startIndex, 1)[0]);
                    return newList;
                });
                clear();
            }
        });
        return off;
    }, []);
    const addItem = (e) => {
        e.preventDefault();
        if (!newTitle)
            return;
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        if (newCurrList.some((l) => l.title === newTitle))
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
        const index = newCurrList.findIndex((x) => x.title === title);
        newCurrList.splice(index, 1);
        setList(newList);
    };
    const editTitle = (title, newTitle) => {
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const item = newCurrList.find((l) => l.title === title);
        if (!item || newCurrList.some((l) => l.title === newTitle))
            return;
        item.title = newTitle;
        setList(newList);
    };
    const onChangeDone = ({ title, done }) => {
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const item = newCurrList.find((l) => l.title === title);
        if (!item)
            return newCurrList;
        item.done = done;
        setList(newList);
    };
    const onClickTitle = ({ title }) => {
        setIndexArr((p) => {
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
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(currList)));
        a.setAttribute('download', 'ShoppingList.json');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    async function importList(e) {
        const clearInput = () => {
            //@ts-ignore
            e.target.value = null;
        };
        try {
            const file = e.currentTarget.files?.[0];
            if (!file)
                return clearInput();
            const text = await file.text();
            const json = JSON.parse(text);
            if (!Array.isArray(json) ||
                !json.length ||
                !json.every((e) => 'done' in e &&
                    typeof e.done === 'boolean' &&
                    'title' in e &&
                    typeof e.title === 'string' &&
                    'children' in e &&
                    Array.isArray(e.children))) {
                throw 'invalid object keys';
            }
            const wasConfirmed = confirm('Are you sure you want to import the items from this file?');
            if (!wasConfirmed)
                return clearInput();
            const newList = clone(list);
            const newCurrList = getCurrList(indexArr, newList);
            let anyFailed = false;
            json.forEach((e) => {
                if (newCurrList.some((l) => l.title === e.title))
                    return (anyFailed = true);
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
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "flex flex-wrap gap-2 items-center mb-2", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { class: "grow text-2xl text-center", children: "Shopping List" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { class: _constants__WEBPACK_IMPORTED_MODULE_12__.styles.btn, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgArrowUpOnSquare__WEBPACK_IMPORTED_MODULE_14__["default"], { class: "h-6" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "file", accept: ".json", onChange: importList, class: "hidden" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "button", onClick: exportList, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgArrowDownOnSquare__WEBPACK_IMPORTED_MODULE_15__["default"], { class: "h-6" }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "button", onClick: () => {
                            navigator.clipboard.writeText(currList.map((x) => x.title).join('\n'));
                        }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgClipboard__WEBPACK_IMPORTED_MODULE_16__["default"], { class: "h-6" }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ThemeToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {})] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "text-sm", children: ["v", _package_json__WEBPACK_IMPORTED_MODULE_2__.version] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [indexArr.length > 0 && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", class: "bg-blue-800 rounded-md p-1 px-2 mr-4 text-white", onClick: back, children: "Back" })), indexArr.join(' - ')] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: dragRef, className: "grid divide-white divide-y gap-1", children: currList.map((li) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItem, { className: "pt-1", done: li.done, title: li.title, children: li.children, onClickTitle: onClickTitle, onChangeDone: onChangeDone, removeItem: removeItem, editTitle: editTitle }, li.title))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { className: "flex gap-4 pt-2", onSubmit: addItem, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: refInputAdd, class: "grow border border-blue-800 rounded-md text-black", value: newTitle, onChange: ({ currentTarget }) => {
                            setNewTitle(currentTarget.value);
                        } }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_base_btn__WEBPACK_IMPORTED_MODULE_11__["default"], { type: "submit", disabled: !newTitle, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icons_SvgPlusCircle__WEBPACK_IMPORTED_MODULE_8__["default"], {}) })] })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ },

/***/ "./src/utils/localStorage.ts"
/*!***********************************!*\
  !*** ./src/utils/localStorage.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   saveLocalStorage: () => (/* binding */ saveLocalStorage)
/* harmony export */ });
const prefix = 'shoppingList-';
function getLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(prefix + key) ?? '');
    }
    catch (e) {
        return null;
    }
}
function saveLocalStorage(key, val) {
    localStorage.setItem(prefix + key, JSON.stringify(val));
}


/***/ },

/***/ "./src/utils/utils.ts"
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   tryParseJson: () => (/* binding */ tryParseJson)
/* harmony export */ });
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
function on(target, key, fn, opts) {
    if (!target)
        return () => { };
    target.addEventListener(key, fn, opts ?? false);
    return () => target.removeEventListener(key, fn, opts ?? false);
}


/***/ },

/***/ "./package.json"
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"name":"shoppinglist","version":"1.1.5.73","description":"Shopping List","scripts":{"watch:webpack":"npx webpack --config webpack.config.js -w","watch:tailwind":"npx tailwindcss -i ./src/styles/app.css -o ./dist/app.css --watch","watch":"npm start watch:webpack && npm start watch:tailwind","build:webpack":"npx webpack --config webpack.config.js --mode production","build:tailwind":"npx tailwindcss -i ./src/styles/app.css -o ./dist/app.css --minify","build":"npm run build:webpack && npm run build:tailwind"},"repository":{"type":"git","url":"git+https://github.com/zwc0/ShoppingList.git"},"devDependencies":{"preact":"^10.13.2","tailwindcss":"^3.3.2","typescript":"^4.9.3","webpack":"^5.81.0","webpack-cli":"^5.0.2"},"dependencies":{"ts-loader":"^9.4.2"}}');

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var _components_PWABanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PWABanner */ "./src/components/PWABanner.tsx");
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/ThemeContext */ "./src/context/ThemeContext.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");






const App = () => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, { initState: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.tryParseJson)(localStorage.getItem('shoppingListDark') || false) || false, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PWABanner__WEBPACK_IMPORTED_MODULE_3__["default"], {})] }));
};
(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, {}), document.getElementById('app'));

})();

/******/ })()
;
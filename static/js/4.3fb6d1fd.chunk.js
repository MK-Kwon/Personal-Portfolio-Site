(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[4],{155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,s=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,s=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e){return e&&e.__esModule?e:{default:e}}var a=s(n(1)),u=s(n(15)),l=s(n(2)),i=s(n(156)),c=n(157),f=s(n(158)),m=s(n(159));t.default=function(e){if(!e)throw new Error("No styles supplied");var t="ArrowDown",n="ArrowUp";var s=function(s){var l=a.default.useState(!1),d=r(l,2),p=d[0],b=d[1],y=a.default.useRef(),v=a.default.useRef({}),h=function(e){var t=a.default.useRef(e);return a.default.useEffect((function(){t.current=e})),t.current}(s.isOpen);function g(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];v.current=e,w(),b((function(t){return"undefined"!==typeof e.isOpen?e.isOpen:!t}))}function C(){"function"===typeof s.onClose?s.onClose():g()}function O(e,t){var n=s.width,r=s.right;return e(p,"string"!==typeof n?n+"px":n,r,t)}function N(t,n,r){var a="bm"+t.replace(t.charAt(0),t.charAt(0).toUpperCase()),u=i.default[t]?O(i.default[t]):{};return e[t]&&(u=o({},u,O(e[t],n+1))),s.styles[a]&&(u=o({},u,s.styles[a])),r&&(u=o({},u,r)),s.noTransition&&delete u.transition,u}function I(e,t,n){var r=document.getElementById(e);if(r){var o=O(t);for(var a in o)o.hasOwnProperty(a)&&(r.style[a]=n?o[a]:"");var u=function(e){return e.style["overflow-x"]=n?"hidden":""};s.htmlClassName||u(document.querySelector("html")),s.bodyClassName||u(document.querySelector("body"))}else console.error("Element with ID '"+e+"' not found")}function w(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],n=function(e,n){return e.classList[t?"add":"remove"](n)};s.htmlClassName&&n(document.querySelector("html"),s.htmlClassName),s.bodyClassName&&n(document.querySelector("body"),s.bodyClassName),e.pageWrap&&s.pageWrapId&&I(s.pageWrapId,e.pageWrap,t),e.outerContainer&&s.outerContainerId&&I(s.outerContainerId,e.outerContainer,t)}function E(){y.current&&clearTimeout(y.current)}function k(e){switch((e=e||window.event).key){case"Escape":s.disableCloseOnEsc||(C(),(0,c.focusOnMenuButton)());break;case t:(0,c.focusOnNextMenuItem)();break;case n:(0,c.focusOnPreviousMenuItem)();break;case"Home":(0,c.focusOnFirstMenuItem)();break;case"End":(0,c.focusOnLastMenuItem)()}}function M(e){if((e=e||window.event).target===document.getElementById("react-burger-menu-btn"))switch(e.key){case t:case" ":g();break;case n:g({focusOnLastItem:!0})}}return a.default.useEffect((function(){return s.isOpen&&g({isOpen:!0,noStateChange:!0}),function(){w(!1),E()}}),[]),a.default.useEffect((function(){"undefined"!==typeof s.isOpen&&s.isOpen!==p&&s.isOpen!==h?g():e.svg&&function(){var t=u.default.findDOMNode(void 0,"bm-morph-shape"),n=e.svg.lib(t).select("path");p?e.svg.animate(n):setTimeout((function(){n.attr("d",e.svg.pathInitial)}),300)}()})),a.default.useEffect((function(){var e=v.current,t=e.noStateChange,n=e.focusOnLastItem;t||s.onStateChange({isOpen:p}),s.disableAutoFocus||(p?n?(0,c.focusOnLastMenuItem)():(0,c.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),E(),y.current=setTimeout((function(){y.current=null,p||w(!1)}),500);var r=p?k:M,o=s.customOnKeyDown||r;return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[p]),a.default.createElement("div",null,!s.noOverlay&&a.default.createElement("div",{className:("bm-overlay "+s.overlayClassName).trim(),onClick:function(){!0===s.disableOverlayClick||"function"===typeof s.disableOverlayClick&&s.disableOverlayClick()||C()},style:N("overlay")}),!1!==s.customBurgerIcon&&a.default.createElement("div",{style:N("burgerIcon")},a.default.createElement(f.default,{onClick:function(){"function"===typeof s.onOpen?s.onOpen():g()},styles:s.styles,customIcon:s.customBurgerIcon,className:s.burgerButtonClassName,barClassName:s.burgerBarClassName,onIconStateChange:s.onIconStateChange})),a.default.createElement("div",{id:s.id,className:("bm-menu-wrap "+s.className).trim(),style:N("menuWrap"),"aria-hidden":!p},e.svg&&a.default.createElement("div",{className:("bm-morph-shape "+s.morphShapeClassName).trim(),style:N("morphShape")},a.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},a.default.createElement("path",{d:e.svg.pathInitial}))),a.default.createElement("div",{className:("bm-menu "+s.menuClassName).trim(),style:N("menu")},a.default.createElement(s.itemListElement,{className:("bm-item-list "+s.itemListClassName).trim(),style:N("itemList")},a.default.Children.map(s.children,(function(e,t){if(e){var n={key:t,className:["bm-item",s.itemClassName,e.props.className].filter((function(e){return!!e})).join(" "),style:N("item",t,e.props.style),tabIndex:p?0:-1};return a.default.cloneElement(e,n)}})))),!1!==s.customCrossIcon&&a.default.createElement("div",{style:N("closeButton")},a.default.createElement(m.default,{onClick:C,styles:s.styles,customIcon:s.customCrossIcon,className:s.crossButtonClassName,crossClassName:s.crossClassName,isOpen:p}))))};return s.propTypes={bodyClassName:l.default.string,burgerBarClassName:l.default.string,burgerButtonClassName:l.default.string,className:l.default.string,crossButtonClassName:l.default.string,crossClassName:l.default.string,customBurgerIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customCrossIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customOnKeyDown:l.default.func,disableAutoFocus:l.default.bool,disableCloseOnEsc:l.default.bool,disableOverlayClick:l.default.oneOfType([l.default.bool,l.default.func]),htmlClassName:l.default.string,id:l.default.string,isOpen:l.default.bool,itemClassName:l.default.string,itemListClassName:l.default.string,itemListElement:l.default.oneOf(["div","nav"]),menuClassName:l.default.string,morphShapeClassName:l.default.string,noOverlay:l.default.bool,noTransition:l.default.bool,onClose:l.default.func,onIconHoverChange:l.default.func,onOpen:l.default.func,onStateChange:l.default.func,outerContainerId:e&&e.outerContainer?l.default.string.isRequired:l.default.string,overlayClassName:l.default.string,pageWrapId:e&&e.pageWrap?l.default.string.isRequired:l.default.string,right:l.default.bool,styles:l.default.object,width:l.default.oneOfType([l.default.number,l.default.string])},s.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},s},e.exports=t.default},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={overlay:function(e){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,n){return{position:"fixed",right:n?0:"inherit",zIndex:1100,width:t,height:"100%",MozTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},e.exports=t.default},157:function(e,t,n){"use strict";function r(){var e=Array.from(document.getElementsByClassName("bm-item")).shift();e&&e.focus()}function o(){var e=Array.from(document.getElementsByClassName("bm-item")).pop();e&&e.focus()}function s(){var e=document.getElementById("react-burger-cross-btn");e&&e.focus()}function a(e){if(document.activeElement.className.includes("bm-item")){var t=document.activeElement[e];t?t.focus():s()}else"previousElementSibling"===e?o():r()}Object.defineProperty(t,"__esModule",{value:!0}),t.focusOnFirstMenuItem=r,t.focusOnLastMenuItem=o,t.focusOnCrossButton=s,t.focusOnMenuButton=function(){var e=document.getElementById("react-burger-menu-btn");e&&e.focus()},t.focusOnMenuItem=a,t.focusOnNextMenuItem=function(){a("nextElementSibling")},t.focusOnPreviousMenuItem=function(){a("previousElementSibling")}},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var a=n(1),u=s(a),l=s(n(2)),i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var r=!0;r;){var o=e,s=t,a=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,s);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(a)}var i=Object.getPrototypeOf(o);if(null===i)return;e=i,t=s,n=a,r=!0,u=i=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hover:!1}}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getLineStyle",value:function(e){return r({position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var e=this,t=void 0;if(this.props.customIcon){var n={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:r({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=u.default.cloneElement(this.props.customIcon,n)}else t=u.default.createElement("span",null,[0,1,2].map((function(t){return u.default.createElement("span",{key:t,className:("bm-burger-bars "+e.props.barClassName+" "+(e.state.hover?"bm-burger-bars-hover":"")).trim(),style:r({},e.getLineStyle(t),e.props.styles.bmBurgerBars)})})));return u.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:r({zIndex:1e3},this.props.styles.bmBurgerButton)},u.default.createElement("button",{id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){e.setState({hover:!0}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){e.setState({hover:!1}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!1})},style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"),t)}}]),t}(a.Component);t.default=i,i.propTypes={barClassName:l.default.string,customIcon:l.default.element,styles:l.default.object},i.defaultProps={barClassName:"",className:"",styles:{}},e.exports=t.default},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,s=t,a=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,s);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(a)}var i=Object.getPrototypeOf(o);if(null===i)return;e=i,t=s,n=a,r=!0,u=i=void 0}};function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=n(1),i=a(l),c=a(n(2)),f=function(e){function t(){u(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getCrossStyle",value:function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var e,t=this;if(this.props.customIcon){var n={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:r({width:"100%",height:"100%"},this.props.styles.bmCross)};e=i.default.cloneElement(this.props.customIcon,n)}else e=i.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(e,n){return i.default.createElement("span",{key:n,className:("bm-cross "+t.props.crossClassName).trim(),style:r({},t.getCrossStyle(e),t.props.styles.bmCross)})})));return i.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:r({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},i.default.createElement("button",{id:"react-burger-cross-btn",onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"},tabIndex:this.props.isOpen?0:-1},"Close Menu"),e)}}]),t}(l.Component);t.default=f,f.propTypes={crossClassName:c.default.string,customIcon:c.default.element,isOpen:c.default.bool,styles:c.default.object},f.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},e.exports=t.default},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(155),s=(r=o)&&r.__esModule?r:{default:r};t.default=(0,s.default)({}),e.exports=t.default}}]);
//# sourceMappingURL=4.3fb6d1fd.chunk.js.map
(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[5],{102:function(e,t,a){"use strict";var n,r=a(1),o=a(2),c=a(3),i=a.n(c),l=a(46),s=a(0),u=a.n(s),d=a(22),m=a(47),f=((n={})[d.b]="show",n[d.a]="show",n),h=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,c=Object(o.a)(e,["className","children"]),h=Object(s.useCallback)((function(e){Object(m.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return u.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:l.a},c,{onEnter:h}),(function(e,t){return u.a.cloneElement(n,Object(r.a)({},t,{className:i()("fade",a,n.props.className,f[e])}))}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade",t.a=h},107:function(e,t,a){"use strict";var n=a(7),r=a(0),o=a.n(r),c=a(97),i=a(98),l=a(99),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);s.Container=c.a,s.Content=i.a,s.Pane=l.a,t.a=s},108:function(e,t,a){"use strict";var n=a(84),r=a(0),o=a.n(r),c=a(1),i=a(2),l=(a(57),a(15)),s=a(35),u=a(34),d=a(33),m=a(97),f=a(98),h=a(99),b=a(96);function v(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,c=t.tabClassName,i=t.id;return null==a?null:o.a.createElement(d.a,{as:u.a,eventKey:n,disabled:r,id:i,className:c},a)}var p=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),n=a.id,r=a.onSelect,u=a.transition,d=a.mountOnEnter,p=a.unmountOnExit,E=a.children,g=a.activeKey,O=void 0===g?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(E):g,y=Object(i.a)(a,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(m.a,{ref:t,id:n,activeKey:O,onSelect:r,transition:u,mountOnEnter:d,unmountOnExit:p},o.a.createElement(s.a,Object(c.a)({},y,{role:"tablist",as:"nav"}),Object(b.b)(E,v)),o.a.createElement(f.a,null,Object(b.b)(E,(function(e){var t=Object(c.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(h.a,t)}))))}));p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs";var E=p,g=a(85);t.a=function(e){const t=Object(r.useState)(),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(g.a)(e.id,e=>{e&&i(e.activeKey)},()=>({activeKey:c})),o.a.createElement(E,{activeKey:c,defaultActiveKey:e.defaultActiveKey,id:e.id,onSelect:function(e){i(e)}},e.children)}},111:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,i=e.as,u=void 0===i?"div":i,d=e.className,m=Object(r.a)(e,["bsPrefix","fluid","as","className"]),f=Object(s.a)(a,"container"),h="string"===typeof o?"-"+o:"-fluid";return l.a.createElement(u,Object(n.a)({ref:t},m,{className:c()(d,o?""+f+h:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},112:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.noGutters,d=e.as,m=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(s.a)(a,"row"),b=h+"-cols",v=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&v.push(""+b+n+"-"+t)})),l.a.createElement(m,Object(n.a)({ref:t},f,{className:c.a.apply(void 0,[o,h,i&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},113:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,d=void 0===i?"div":i,m=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(s.a)(a,"col"),h=[],b=[];return u.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&h.push(!0===t?""+f+c:""+f+c+"-"+t),null!=n&&b.push("order"+c+"-"+n),null!=a&&b.push("offset"+c+"-"+a)})),h.length||h.push(f),l.a.createElement(d,Object(n.a)({},m,{ref:t,className:c.a.apply(void 0,[o].concat(h,b))}))}));d.displayName="Col",t.a=d},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(107),c=a(108),i=a(84),l=a(89),s=a(43),u=a(93),d=a(95),m=a(92),f=a(113),h=a(111),b=a(112),v=a(85);a(193);var p=function(e){return r.a.createElement("div",{className:"SemaphoreCheckbox ".concat(e.className)},r.a.createElement("input",{type:"checkbox",checked:e.character.hasDirection(e.direction),onChange:function(t){const a=e.onChange;a&&a(t.currentTarget.checked?"add":"remove",e.direction)}}),r.a.createElement("label",null,function(){const t=e.character.getPotentialMatch(e.direction);return t?t.toString():""}()))};var E=function(e){const t=function(e){const t={left:-1,right:-1},a=e.getDegrees(),n=Object(i.a)(a,2),r=n[0],o=n[1];return void 0!==r&&(void 0===o?r<=180?t.right=r:t.left=r:0===r&&o<=180||r<=45&&o<180||o<=90||r>=270?(t.left=r,t.right=o):(t.right=r,t.left=o)),t}(e.character),a=t.left,n=t.right;return r.a.createElement("svg",{width:e.width,viewBox:"0 0 76 64"},r.a.createElement("defs",null,r.a.createElement("g",{id:"Person",fill:"black"},r.a.createElement("circle",{r:"3.5",cx:"4",cy:"4"}),r.a.createElement("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})),r.a.createElement("g",{id:"Flag"},r.a.createElement("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),r.a.createElement("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),r.a.createElement("rect",{stroke:"black",height:"10",width:"10"}),r.a.createElement("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),r.a.createElement("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})),r.a.createElement("g",{id:"LeftFlag"},r.a.createElement("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"}))),r.a.createElement("use",{xlinkHref:"#Person",x:"34",y:"23"}),a>=0?r.a.createElement("use",{transform:"rotate(".concat(a,", 33, 32)"),x:"33",xlinkHref:0===a||a>=180?"#LeftFlag":"#Flag",y:"4"}):null,n>=0?r.a.createElement("use",{transform:"rotate(".concat(n,", 43, 32)"),x:"43",xlinkHref:n<=180?"#Flag":"#LeftFlag",y:"4"}):null,"Sorry, your browser does not support inline SVG.")};a(194);var g=function(e){function t(t,a){const n=e.onChange;n&&n(t,a)}return r.a.createElement("div",{className:"SemaphoreCharacter"},r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-north",direction:l.SemaphoreDirection.North,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-northEast",direction:l.SemaphoreDirection.NorthEast,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-east",direction:l.SemaphoreDirection.East,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-southEast",direction:l.SemaphoreDirection.SouthEast,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-south",direction:l.SemaphoreDirection.South,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-southWest",direction:l.SemaphoreDirection.SouthWest,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-west",direction:l.SemaphoreDirection.West,onChange:t}),r.a.createElement(p,{character:e.character,className:"SemaphoreCheckbox-northWest",direction:l.SemaphoreDirection.NorthWest,onChange:t}),r.a.createElement(E,{width:240,character:e.character}))};a(195);var O=function(){const e=Object(n.useState)(new l.SemaphoreCharacter),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),p=Object(i.a)(c,2),E=p[0],O=p[1];function y(e,t){const n=new l.SemaphoreCharacter;switch(n.directions=a.directions,e){case"add":n.addDirection(t);break;case"remove":n.removeDirection(t);break;default:throw new Error("Invalid change type")}o(n)}function x(){let e=E;const t=a.getExactMatches();t.length>0?(e+=t[0].toString(),o(new l.SemaphoreCharacter)):e+=" ",O(e)}function j(){O(E.slice(0,-1))}return Object(v.a)("SemaphoreStream",e=>{if(e){const t=new l.SemaphoreCharacter;t.directions=e.directions,o(t),O(E)}},()=>({directions:a.directions,stream:E})),Object(n.useEffect)(()=>{function e(e){if(e.defaultPrevented)return;let t=!1;8===e.keyCode&&(j(),t=!0),t&&e.preventDefault()}function t(e){if(e.defaultPrevented)return;let t=!1;if(13===e.keyCode)x(),t=!0;else if(e.charCode>=49&&e.charCode<=56){const t=l.SemaphoreDegrees.FromDegrees(45*(e.charCode-49));y(a.hasDirection(t)?"remove":"add",t)}t&&e.preventDefault()}return document.addEventListener("keydown",e),document.addEventListener("keypress",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keypress",t)}}),r.a.createElement("div",{className:"SemaphoreStream"},r.a.createElement(m.a,{className:"SemaphoreStream-input"},r.a.createElement(m.a.Header,null,"Input"),r.a.createElement(m.a.Body,null,r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:"auto",sm:"auto",md:"auto"},r.a.createElement(g,{character:a,onChange:y})),r.a.createElement(f.a,null,r.a.createElement("div",{className:"SemaphoreStream-view"},a.toString()||"?"))),r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a,null,r.a.createElement(s.a,{onClick:j},"\u232b")),r.a.createElement(u.a,null,r.a.createElement(s.a,{onClick:x},"Next")),r.a.createElement(u.a,null,r.a.createElement(s.a,{onClick:function(){o(new l.SemaphoreCharacter),O("")},variant:"danger"},"Clear")))))))),r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,"Output"),r.a.createElement(m.a.Body,null,r.a.createElement("pre",{className:"SemaphoreStream-output"},E,r.a.createElement("span",{className:"blinking-cursor"},"|")))))},y=a(94);a(196);var x=function(){const e=(new l.SemaphoreCharacter).getPotentialMatches();return r.a.createElement("div",{className:"SemaphoreTable"},r.a.createElement(y.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Semaphore"))),r.a.createElement("tbody",null,e.map(e=>r.a.createElement("tr",{key:e.display},r.a.createElement("td",null,e.display),r.a.createElement("td",null,r.a.createElement(E,{width:100,character:new l.SemaphoreCharacter(e.encoding,e.category)})))))))};t.default=function(){return r.a.createElement(c.a,{id:"Semaphore-tabs"},r.a.createElement(o.a,{eventKey:1,title:"Value"},r.a.createElement(O,null)),r.a.createElement(o.a,{eventKey:2,title:"Reference"},r.a.createElement(x,null)))}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(90);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a(87);function o(e,t,a){Object(n.useLayoutEffect)(()=>t(Object(r.b)(e)),[e]),Object(n.useEffect)(()=>Object(r.c)(e,a()))}},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="1.0.0"},87:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m}));var n=a(88),r=a.n(n),o=a(86);let c;function i(e){return"".concat("puzztool","_").concat(e)}function l(){var e,t;(function(e,t){try{if(e)return 0!==r()(t,e)}catch(a){}return!0})(function(e){if(s())return window.localStorage.getItem(i(e));return null}("appVersion"),o.a)&&(m(),e="appVersion",t=o.a,s()&&window.localStorage.setItem(i(e),t))}function s(){if(void 0===c){const t=window.localStorage,a="__storage_test__";try{t.setItem(a,a),t.removeItem(a),c=!0}catch(e){c=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}c&&l()}return c}function u(e){if(s()){const t=window.localStorage.getItem(i(e));if(null!==t)return JSON.parse(t)}return null}function d(e,t){s()&&window.localStorage.setItem(i(e),JSON.stringify(t))}function m(){s()&&window.localStorage.clear()}},88:function(e,t,a){var n,r,o;r=[],void 0===(o="function"===typeof(n=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,a,n=e.replace(/^v/,"").replace(/\+.*$/,""),r=(a="-",-1===(t=n).indexOf(a)?t.length:t.indexOf(a)),o=n.substring(0,r).split(".");return o.push(n.substring(r+1)),o}function a(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(n);for(var o=t(e),c=t(r),i=0;i<Math.max(o.length-1,c.length-1);i++){var l=parseInt(o[i]||0,10),s=parseInt(c[i]||0,10);if(l>s)return 1;if(s>l)return-1}var u=o[o.length-1],d=c[c.length-1];if(u&&d){var m=u.split(".").map(a),f=d.split(".").map(a);for(i=0;i<Math.max(m.length,f.length);i++){if(void 0===m[i]||"string"===typeof f[i]&&"number"===typeof m[i])return-1;if(void 0===f[i]||"string"===typeof m[i]&&"number"===typeof f[i])return 1;if(m[i]>f[i])return 1;if(f[i]>m[i])return-1}}else if(u||d)return u?-1:1;return 0}var o=[">",">=","=","<","<="],c={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.validate=function(t){return"string"===typeof t&&e.test(t)},r.compare=function(e,t,a){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(a);var n=r(e,t);return c[a].indexOf(n)>-1},r})?n.apply(t,r):n)||(e.exports=o)},90:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}a.d(t,"a",(function(){return r}))},91:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),c=a(3),i=a.n(c);t.a=function(e){return o.a.forwardRef((function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:i()(t.className,e)}))}))}},92:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=a(28),d=a(91),m=a(44),f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(a,"card-img");return l.a.createElement(d,Object(n.a)({ref:t,className:c()(i?f+"-"+i:f,o)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var h=f,b=Object(d.a)("h5"),v=Object(d.a)("h6"),p=Object(u.a)("card-body"),E=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.bg,d=e.text,f=e.border,h=e.body,b=e.children,v=e.as,E=void 0===v?"div":v,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.a)(a,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return l.a.createElement(m.a.Provider,{value:y},l.a.createElement(E,Object(n.a)({ref:t},g,{className:c()(o,O,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),h?l.a.createElement(p,null,b):b))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=h,E.Title=Object(u.a)("card-title",{Component:b}),E.Subtitle=Object(u.a)("card-subtitle",{Component:v}),E.Body=p,E.Link=Object(u.a)("card-link",{Component:"a"}),E.Text=Object(u.a)("card-text",{Component:"p"}),E.Header=Object(u.a)("card-header"),E.Footer=Object(u.a)("card-footer"),E.ImgOverlay=Object(u.a)("card-img-overlay");t.a=E},93:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.size,i=e.toggle,u=e.vertical,d=e.className,m=e.as,f=void 0===m?"div":m,h=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(s.a)(a,"btn-group"),v=b;return u&&(v=b+"-vertical"),l.a.createElement(f,Object(n.a)({},h,{ref:t,className:c()(d,v,o&&b+"-"+o,i&&b+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},94:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.striped,u=e.bordered,d=e.borderless,m=e.hover,f=e.size,h=e.variant,b=e.responsive,v=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(s.a)(a,"table"),E=c()(o,p,h&&p+"-"+h,f&&p+"-"+f,i&&p+"-striped",u&&p+"-bordered",d&&p+"-borderless",m&&p+"-hover"),g=l.a.createElement("table",Object(n.a)({},v,{className:E,ref:t}));if(b){var O=p+"-responsive";return"string"===typeof b&&(O=O+"-"+b),l.a.createElement("div",{className:O},g)}return g}));t.a=u},95:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=Object(r.a)(e,["bsPrefix","className"]),u=Object(s.a)(a,"btn-toolbar");return l.a.createElement("div",Object(n.a)({},i,{ref:t,className:c()(o,u)}))}));u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"},t.a=u},96:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function o(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function c(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(15),c=a(45),i=a(6);t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),a=t.id,l=t.generateChildId,s=t.onSelect,u=t.activeKey,d=t.transition,m=t.mountOnEnter,f=t.unmountOnExit,h=t.children,b=Object(n.useMemo)((function(){return l||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,l]),v=Object(n.useMemo)((function(){return{onSelect:s,activeKey:u,transition:d,mountOnEnter:m,unmountOnExit:f,getControlledId:function(e){return b(e,"tabpane")},getControllerId:function(e){return b(e,"tab")}}}),[s,u,d,m,f,b]);return r.a.createElement(c.a.Provider,{value:v},r.a.createElement(i.a.Provider,{value:s},h))}},98:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.as,i=void 0===o?"div":o,u=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),m=Object(s.a)(a,"tab-content");return l.a.createElement(i,Object(n.a)({ref:t},d,{className:c()(u,m)}))}));t.a=u},99:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(3),c=a.n(o),i=a(0),l=a.n(i),s=a(4),u=a(45),d=a(6),m=a(102);var f=l.a.forwardRef((function(e,t){var a=function(e){var t=Object(i.useContext)(u.a);if(!t)return e;var a=t.activeKey,o=t.getControlledId,c=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==l.transition,f=Object(d.b)(e.eventKey);return Object(n.a)({},e,{active:null==e.active&&null!=f?Object(d.b)(a)===f:e.active,id:o(e.eventKey),"aria-labelledby":c(e.eventKey),transition:s&&(e.transition||l.transition||m.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),o=a.bsPrefix,f=a.className,h=a.active,b=a.onEnter,v=a.onEntering,p=a.onEntered,E=a.onExit,g=a.onExiting,O=a.onExited,y=a.mountOnEnter,x=a.unmountOnExit,j=a.transition,N=a.as,S=void 0===N?"div":N,w=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),C=Object(s.a)(o,"tab-pane");if(!h&&!j&&x)return null;var k=l.a.createElement(S,Object(n.a)({},w,{ref:t,role:"tabpanel","aria-hidden":!h,className:c()(f,C,{active:h})}));return j&&(k=l.a.createElement(j,{in:h,onEnter:b,onEntering:v,onEntered:p,onExit:E,onExiting:g,onExited:O,mountOnEnter:y,unmountOnExit:x},k)),l.a.createElement(u.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},k))}));f.displayName="TabPane",t.a=f}}]);
//# sourceMappingURL=5.e14301ce.chunk.js.map
(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[3],{181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(19),o=n(76),i=n(10);t.a=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.generateChildId,s=t.onSelect,u=t.activeKey,m=t.transition,d=t.mountOnEnter,h=t.unmountOnExit,f=t.children,E=Object(a.useMemo)((function(){return l||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,l]),p=Object(a.useMemo)((function(){return{onSelect:s,activeKey:u,transition:m,mountOnEnter:d||!1,unmountOnExit:h||!1,getControlledId:function(e){return E(e,"tabpane")},getControllerId:function(e){return E(e,"tab")}}}),[s,u,m,d,h,E]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(i.a.Provider,{value:s||null},f))}},182:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),i=n(0),l=n.n(i),s=n(4),u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.as,i=void 0===c?"div":c,u=e.className,m=Object(r.a)(e,["bsPrefix","as","className"]),d=Object(s.a)(n,"tab-content");return l.a.createElement(i,Object(a.a)({ref:t},m,{className:o()(u,d)}))}));t.a=u},183:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),i=n(0),l=n.n(i),s=n(4),u=n(76),m=n(10),d=n(184);var h=l.a.forwardRef((function(e,t){var n=function(e){var t=Object(i.useContext)(u.a);if(!t)return e;var n=t.activeKey,c=t.getControlledId,o=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==l.transition,h=Object(m.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=h?Object(m.b)(n)===h:e.active,id:c(e.eventKey),"aria-labelledby":o(e.eventKey),transition:s&&(e.transition||l.transition||d.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),c=n.bsPrefix,h=n.className,f=n.active,E=n.onEnter,p=n.onEntering,b=n.onEntered,v=n.onExit,y=n.onExiting,g=n.onExited,O=n.mountOnEnter,x=n.unmountOnExit,C=n.transition,S=n.as,N=void 0===S?"div":S,j=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),k=Object(s.a)(c,"tab-pane");if(!f&&!C&&x)return null;var w=l.a.createElement(N,Object(a.a)({},j,{ref:t,role:"tabpanel","aria-hidden":!f,className:o()(h,k,{active:f})}));return C&&(w=l.a.createElement(C,{in:f,onEnter:E,onEntering:p,onEntered:b,onExit:v,onExiting:y,onExited:g,mountOnEnter:O,unmountOnExit:x},w)),l.a.createElement(u.a.Provider,{value:null},l.a.createElement(m.a.Provider,{value:null},w))}));h.displayName="TabPane",t.a=h},184:function(e,t,n){"use strict";var a,r=n(1),c=n(2),o=n(3),i=n.n(o),l=n(77),s=n(0),u=n.n(s),m=n(32),d=n(78),h=((a={})[m.b]="show",a[m.a]="show",a),f=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,o=Object(c.a)(e,["className","children"]),f=Object(s.useCallback)((function(e){Object(d.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(m.e,Object(r.a)({ref:t,addEndListener:l.a},o,{onEnter:f}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:i()("fade",n,a.props.className,h[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",t.a=f},186:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(0),o=n.n(c),i=(n(123),n(19)),l=n(49),s=n(48),u=n(47),m=n(181),d=n(182),h=n(183),f=n(80);function E(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,c=t.tabClassName,i=t.id;return null==n?null:o.a.createElement(u.a,{as:s.a,eventKey:a,disabled:r,id:i,className:c},n)}var p=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.onSelect,s=t.transition,u=t.mountOnEnter,p=t.unmountOnExit,b=t.children,v=t.activeKey,y=void 0===v?function(e){var t;return Object(f.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(b):v,g=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(m.a,{id:n,activeKey:y,onSelect:c,transition:s,mountOnEnter:u,unmountOnExit:p},o.a.createElement(l.a,Object(a.a)({},g,{role:"tablist",as:"nav"}),Object(f.b)(b,E)),o.a.createElement(d.a,null,Object(f.b)(b,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(h.a,t)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",t.a=p},187:function(e,t,n){"use strict";var a=n(9),r=n(0),c=n.n(r),o=n(181),i=n(182),l=n(183),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);s.Container=o.a,s.Content=i.a,s.Pane=l.a,t.a=s},188:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),i=n(0),l=n.n(i),s=n(4),u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.fluid,i=e.as,u=void 0===i?"div":i,m=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),h=Object(s.a)(n,"container"),f="string"===typeof c?"-"+c:"-fluid";return l.a.createElement(u,Object(a.a)({ref:t},d,{className:o()(m,c?""+h+f:h)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},189:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),i=n(0),l=n.n(i),s=n(4),u=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.noGutters,m=e.as,d=void 0===m?"div":m,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(s.a)(n,"row"),E=f+"-cols",p=[];return u.forEach((function(e){var t,n=h[e];delete h[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&p.push(""+E+a+"-"+t)})),l.a.createElement(d,Object(a.a)({ref:t},h,{className:o.a.apply(void 0,[c,f,i&&"no-gutters"].concat(p))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},190:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(3),o=n.n(c),i=n(0),l=n.n(i),s=n(4),u=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.as,m=void 0===i?"div":i,d=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(s.a)(n,"col"),f=[],E=[];return u.forEach((function(e){var t,n,a,r=d[e];if(delete d[e],"object"===typeof r&&null!=r){var c=r.span;t=void 0===c||c,n=r.offset,a=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+h+o:""+h+o+"-"+t),null!=a&&E.push("order"+o+"-"+a),null!=n&&E.push("offset"+o+"-"+n)})),f.length||f.push(h),l.a.createElement(m,Object(a.a)({},d,{ref:t,className:o.a.apply(void 0,[c].concat(f,E))}))}));m.displayName="Col",t.a=m},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(192);t.a=e=>r.a.createElement("div",{className:"ReferenceList"},e.children)},192:function(e,t,n){},193:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}n.d(t,"a",(function(){return r}))},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(187),o=n(186),i=n(75),l=n(86),s=n(45),u=n(31),m=n(46),d=n(79),h=n(27),f=n(190),E=n(188),p=n(189);n(218);var b=function(e){return r.a.createElement("div",{className:"SemaphoreCheckbox ".concat(e.className)},r.a.createElement("input",{type:"checkbox",checked:e.character.hasDirection(e.direction),onChange:function(t){const n=e.onChange;n&&n(t.currentTarget.checked?"add":"remove",e.direction)}}),r.a.createElement("label",null,function(){const t=e.character.getPotentialMatch(e.direction);return t?t.toString():""}()))};var v=n(193);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||Object(v.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(e){const t=function(e){const t={left:-1,right:-1},n=y(e.getDegrees(),2),a=n[0],r=n[1];return void 0!==a&&(void 0===r?a<=180?t.right=a:t.left=a:0===a&&r<=180||a<=45&&r<180||r<=90||a>=270?(t.left=a,t.right=r):(t.right=a,t.left=r)),t}(e.character),n=t.left,a=t.right;return r.a.createElement("svg",{width:e.width,viewBox:"0 0 76 64"},r.a.createElement("defs",null,r.a.createElement("g",{id:"Person",fill:"black"},r.a.createElement("circle",{r:"3.5",cx:"4",cy:"4"}),r.a.createElement("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})),r.a.createElement("g",{id:"Flag"},r.a.createElement("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),r.a.createElement("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),r.a.createElement("rect",{stroke:"black",height:"10",width:"10"}),r.a.createElement("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),r.a.createElement("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})),r.a.createElement("g",{id:"LeftFlag"},r.a.createElement("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"}))),r.a.createElement("use",{xlinkHref:"#Person",x:"34",y:"23"}),n>=0?r.a.createElement("use",{transform:"rotate(".concat(n,", 33, 32)"),x:"33",xlinkHref:0===n||n>=180?"#LeftFlag":"#Flag",y:"4"}):null,a>=0?r.a.createElement("use",{transform:"rotate(".concat(a,", 43, 32)"),x:"43",xlinkHref:a<=180?"#Flag":"#LeftFlag",y:"4"}):null,"Sorry, your browser does not support inline SVG.")};n(219);var O=function(e){function t(t,n){const a=e.onChange;a&&a(t,n)}return r.a.createElement("div",{className:"SemaphoreCharacter"},r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-north",direction:s.SemaphoreDirection.North,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-northEast",direction:s.SemaphoreDirection.NorthEast,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-east",direction:s.SemaphoreDirection.East,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-southEast",direction:s.SemaphoreDirection.SouthEast,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-south",direction:s.SemaphoreDirection.South,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-southWest",direction:s.SemaphoreDirection.SouthWest,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-west",direction:s.SemaphoreDirection.West,onChange:t}),r.a.createElement(b,{character:e.character,className:"SemaphoreCheckbox-northWest",direction:s.SemaphoreDirection.NorthWest,onChange:t}),r.a.createElement(g,{width:240,character:e.character}))};n(220);const x={append:l.a,backspace:l.b,clear:l.c,setDirections:l.f,space:l.g};var C=Object(i.b)(e=>({directions:e.encoding.semaphore.directions,stream:e.encoding.semaphore.stream}),x)((function(e){function t(t,n){const a=new s.SemaphoreCharacter;switch(a.directions=e.directions,t){case"add":a.addDirection(n);break;case"remove":a.removeDirection(n);break;default:throw new Error("Invalid change type")}e.setDirections(a.directions)}function n(){const t=new s.SemaphoreCharacter;t.directions=e.directions;const n=t.getExactMatches();n.length>0?e.append(n[0].toString()):e.space()}Object(a.useEffect)(()=>{function a(t){if(t.defaultPrevented)return;let n=!1;8===t.keyCode&&(e.backspace(),n=!0),n&&t.preventDefault()}function r(a){if(a.defaultPrevented)return;let r=!1;if(13===a.keyCode)n(),r=!0;else if(a.charCode>=49&&a.charCode<=56){const n=new s.SemaphoreCharacter;n.directions=e.directions;const r=s.SemaphoreDegrees.FromDegrees(45*(a.charCode-49));t(n.hasDirection(r)?"remove":"add",r)}r&&a.preventDefault()}return document.addEventListener("keydown",a),document.addEventListener("keypress",r),()=>{document.removeEventListener("keydown",a),document.removeEventListener("keypress",r)}});const c=new s.SemaphoreCharacter;return c.directions=e.directions,r.a.createElement("div",{className:"SemaphoreStream"},r.a.createElement(h.a,{className:"SemaphoreStream-input"},r.a.createElement(h.a.Header,null,"Input"),r.a.createElement(h.a.Body,null,r.a.createElement(E.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{xs:"auto",sm:"auto",md:"auto"},r.a.createElement(O,{character:c,onChange:t})),r.a.createElement(f.a,null,r.a.createElement("div",{className:"SemaphoreStream-view"},c.toString()||"?"))),r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){e.backspace()}},"\u232b")),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:n},"Next")),r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){e.clear()},variant:"danger"},"Clear")))))))),r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,"Output"),r.a.createElement(h.a.Body,null,r.a.createElement("pre",{className:"SemaphoreStream-output"},e.stream,r.a.createElement("span",{className:"blinking-cursor"},"|")))))})),S=n(191);var N=function(){const e=(new s.SemaphoreCharacter).getPotentialMatches();return r.a.createElement(S.a,null,e.map(e=>r.a.createElement("div",null,r.a.createElement(g,{width:100,character:new s.SemaphoreCharacter(e.encoding,e.category)}),r.a.createElement("br",null),e.display)))};const j={selectTab:l.e},k=Object(i.b)(e=>({selectedTab:e.encoding.semaphore.selectedTab}),j);t.default=k((function(e){return r.a.createElement(o.a,{activeKey:e.selectedTab,id:"Semaphore-tabs",onSelect:e.selectTab},r.a.createElement(c.a,{eventKey:"1",title:"Value"},r.a.createElement(C,null)),r.a.createElement(c.a,{eventKey:"2",title:"Reference"},r.a.createElement(N,null)))}))}}]);
//# sourceMappingURL=3.3e0ef5c8.chunk.js.map
(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[15],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n(103);function l(e,t,n){Object(a.useLayoutEffect)((function(){return t(Object(r.b)(e))}),[e]),Object(a.useEffect)((function(){return Object(r.c)(e,n())}))}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0.7.0"},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return E}));var a,r=n(104),l=n.n(r),c=n(102),o="appVersion",i="puzztool";function u(e){return"".concat(i,"_").concat(e)}function s(){var e,t;(function(e,t){try{if(e)return 0!==l()(t,e)}catch(n){}return!0})(function(e){if(f())return window.localStorage.getItem(u(e));return null}(o),c.a)&&(E(),e=o,t=c.a,f()&&window.localStorage.setItem(u(e),t))}function f(){if(void 0===a){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),a=!0}catch(n){a=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}a&&s()}return a}function d(e){if(f()){var t=window.localStorage.getItem(u(e));if(null!==t)return JSON.parse(t)}return null}function m(e,t){f()&&window.localStorage.setItem(u(e),JSON.stringify(t))}function E(){f()&&window.localStorage.clear()}},124:function(e,t,n){"use strict";var a=n(100),r=n(0),l=n.n(r),c=n(125),o=n(101);t.a=function(e){var t=Object(r.useState)(),n=Object(a.a)(t,2),i=n[0],u=n[1];return Object(o.a)(e.id,(function(e){e&&u(e.activeKey)}),(function(){return{activeKey:i}})),l.a.createElement(c.a,{activeKey:i,defaultActiveKey:e.defaultActiveKey,id:e.id,onSelect:function(e){u(e)}},e.children)}},161:function(e,t,n){},208:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(126),c=n(124),o=n(215),i=n(100),u=n(105),s=n(108),f=n(110),d=n(107),m=n(101),E=n(21),v=n(207);var b=function(e){return r.a.createElement(v.a,{title:e.title,key:e.index,id:"color-select-".concat(e.index),onSelect:function(t){var n=e.onChange;n&&n(e.index,function(e){var t=!0,n=!1,a=void 0;try{for(var r,l=u.Resistor.colorTable[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value;if(e===c.name)return c}}catch(o){n=!0,a=o}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}}(t))}},e.colors.map((function(t,n){return r.a.createElement(E.a.Item,{key:"".concat(e.index,"-").concat(n),eventKey:t.name},t.name)})))};n(161);var h=function(e){function t(t){return t===e.bands.length-1?104:18*t+20}function n(n){var a=e.bands[n];if(null!==a)return r.a.createElement("use",{xlinkHref:"#Band",x:t(n),fill:a.colorCode})}return r.a.createElement("div",{className:"ResistorPicture"},r.a.createElement("svg",{width:"240",viewBox:"0 0 136 40"},r.a.createElement("defs",null,r.a.createElement("g",{id:"Wire"},r.a.createElement("rect",{y:"20",height:"1",width:"8",fill:"black"})),r.a.createElement("g",{id:"Resistor"},r.a.createElement("rect",{y:"8",x:"8",width:"120",height:"24",rx:"4",ry:"4",stroke:"black",strokeWidth:"0.5",fill:"burlywood"}),r.a.createElement("use",{xlinkHref:"#Wire",x:"0"}),r.a.createElement("use",{xlinkHref:"#Wire",x:"128"})),r.a.createElement("g",{id:"Band"},r.a.createElement("rect",{y:"8",height:"24",width:"12",stroke:"black",strokeWidth:"0.5"}))),r.a.createElement("use",{xlinkHref:"#Resistor",x:"0",y:"0"}),n(0),n(1),n(2),n(3),n(4),"Sorry, your browser does not support inline SVG."))};function y(e){var t=e.slice(0,-1).filter((function(e){return null!==e})),n=u.Resistor.getValue(t);return n===u.Resistor.INVALID_RESISTOR?"Invalid Resistor Colors":"".concat(u.Resistor.getDisplayValue(n)," \u2126 \xb1 ").concat(e[e.length-1].toleranceInPercent,"%")}var R=function(){var e=[u.Resistor.BLACK,u.Resistor.BLACK,u.Resistor.BLACK,null,u.Resistor.BROWN],t=Object(a.useState)(y(e)),n=Object(i.a)(t,2),l=n[0],c=n[1],E=Object(a.useState)(e),v=Object(i.a)(E,2),R=v[0],p=v[1];function g(e){p(e),c(y(e))}function w(e,t){var n=Array.from(R);n[e]=t||null,g(n)}Object(m.a)("ResistorInput",(function(e){e&&g(e.bands)}),(function(){return{bands:R}}));var x=u.Resistor.colorTable.filter((function(e){return e.hasValue()})),O=u.Resistor.colorTable.filter((function(e){return e.hasTolerance()}));return r.a.createElement("div",{className:"ResistorInput"},r.a.createElement(d.a,{className:"ResistorInput-input"},r.a.createElement(d.a.Header,null,"Input"),r.a.createElement(d.a.Body,null,r.a.createElement("div",{className:"ResistorInput-display"},r.a.createElement(h,{bands:R})),r.a.createElement("div",{className:"ResistorSelectors"},r.a.createElement(f.a,null,r.a.createElement(s.a,null,r.a.createElement(b,{index:0,title:"First Band",colors:x,onChange:w})),r.a.createElement(s.a,null,r.a.createElement(b,{index:1,title:"Second Band",colors:x,onChange:w})),r.a.createElement(s.a,null,r.a.createElement(b,{index:2,title:"Third Band",colors:u.Resistor.colorTable,onChange:w})),r.a.createElement(s.a,null,r.a.createElement(b,{index:3,title:"Fourth Band",colors:[new u.ResistorColorEntry("None","",0)].concat(Object(o.a)(u.Resistor.colorTable)),onChange:w})),r.a.createElement(s.a,null,r.a.createElement(b,{index:4,title:"Tolerance Band",colors:O,onChange:w})))))),r.a.createElement(d.a,{className:"ResistorInput-output"},r.a.createElement(d.a.Header,null,"Output"),r.a.createElement(d.a.Body,null,l)))},p=n(109);function g(e){var t=e.substring(1),n=parseInt(t,16);return.2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(255&n)<40?"#ffffff":"#000000"}n(208);function w(e){return{backgroundColor:e.colorCode,color:g(e.colorCode)}}var x=function(){return r.a.createElement("div",{className:"ResistorTable"},r.a.createElement(p.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Color"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Multiplier"),r.a.createElement("th",null,"Tolerance (%)"))),r.a.createElement("tbody",null,u.Resistor.colorTable.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{style:w(e)},e.name),r.a.createElement("td",null,e.getDisplayValue()),r.a.createElement("td",null,e.multiplier),r.a.createElement("td",null,e.toleranceInPercent))})))))};t.default=function(){return r.a.createElement(c.a,{id:"Resistors-tabs"},r.a.createElement(l.a,{eventKey:1,title:"Value"},r.a.createElement(R,null)),r.a.createElement(l.a,{eventKey:2,title:"Reference"},r.a.createElement(x,null)))}}}]);
//# sourceMappingURL=15.9a9b0474.chunk.js.map
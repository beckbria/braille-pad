(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[9],{100:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n(103);function o(e,t,n){Object(a.useLayoutEffect)((function(){return t(Object(r.b)(e))}),[e]),Object(a.useEffect)((function(){return Object(r.c)(e,n())}))}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0.7.0"},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m}));var a,r=n(104),o=n.n(r),c=n(102),i="appVersion",u="puzztool";function l(e){return"".concat(u,"_").concat(e)}function s(){var e,t;(function(e,t){try{if(e)return 0!==o()(t,e)}catch(n){}return!0})(function(e){if(f())return window.localStorage.getItem(l(e));return null}(i),c.a)&&(m(),e=i,t=c.a,f()&&window.localStorage.setItem(l(e),t))}function f(){if(void 0===a){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),a=!0}catch(n){a=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}a&&s()}return a}function d(e){if(f()){var t=window.localStorage.getItem(l(e));if(null!==t)return JSON.parse(t)}return null}function p(e,t){f()&&window.localStorage.setItem(l(e),JSON.stringify(t))}function m(){f()&&window.localStorage.clear()}},104:function(e,t,n){var a,r,o;r=[],void 0===(o="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,a=e.replace(/^v/,"").replace(/\+.*$/,""),r=(n="-",-1===(t=a).indexOf(n)?t.length:t.indexOf(n)),o=a.substring(0,r).split(".");return o.push(a.substring(r+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(a);for(var o=t(e),c=t(r),i=0;i<Math.max(o.length-1,c.length-1);i++){var u=parseInt(o[i]||0,10),l=parseInt(c[i]||0,10);if(u>l)return 1;if(l>u)return-1}var s=o[o.length-1],f=c[c.length-1];if(s&&f){var d=s.split(".").map(n),p=f.split(".").map(n);for(i=0;i<Math.max(d.length,p.length);i++){if(void 0===d[i]||"string"===typeof p[i]&&"number"===typeof d[i])return-1;if(void 0===p[i]||"string"===typeof d[i]&&"number"===typeof p[i])return 1;if(d[i]>p[i])return 1;if(p[i]>d[i])return-1}}else if(s||f)return s?-1:1;return 0}var o=[">",">=","=","<","<="],c={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n);var a=r(e,t);return c[n].indexOf(a)>-1},r})?a.apply(t,r):a)||(e.exports=o)},106:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=n(3),i=n.n(c);t.a=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))}},107:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),c=n.n(o),i=n(0),u=n.n(i),l=n(4),s=n(30),f=n(106),d=n(48),p=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,s=e.as,f=void 0===s?"img":s,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(l.b)(n,"card-img");return u.a.createElement(f,Object(a.a)({ref:t,className:c()(i?p+"-"+i:p,o)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var m=p,v=Object(f.a)("h5"),b=Object(f.a)("h6"),g=Object(s.a)("card-body"),h=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.bg,f=e.text,p=e.border,m=e.body,v=e.children,b=e.as,h=void 0===b?"div":b,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(l.b)(n,"card"),E=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return u.a.createElement(d.a.Provider,{value:E},u.a.createElement(h,Object(a.a)({ref:t},y,{className:c()(o,O,s&&"bg-"+s,f&&"text-"+f,p&&"border-"+p)}),m?u.a.createElement(g,null,v):v))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=m,h.Title=Object(s.a)("card-title",{Component:v}),h.Subtitle=Object(s.a)("card-subtitle",{Component:b}),h.Body=g,h.Link=Object(s.a)("card-link",{Component:"a"}),h.Text=Object(s.a)("card-text",{Component:"p"}),h.Header=Object(s.a)("card-header"),h.Footer=Object(s.a)("card-footer"),h.ImgOverlay=Object(s.a)("card-img-overlay");t.a=h},108:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),c=n.n(o),i=n(0),u=n.n(i),l=n(4),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.size,i=e.toggle,s=e.vertical,f=e.className,d=e.as,p=void 0===d?"div":d,m=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(l.b)(n,"btn-group"),b=v;return s&&(b=v+"-vertical"),u.a.createElement(p,Object(a.a)({},m,{ref:t,className:c()(f,b,o&&v+"-"+o,i&&v+"-toggle")}))}));s.displayName="ButtonGroup",s.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=s},110:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),c=n.n(o),i=n(0),u=n.n(i),l=n(4),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=Object(r.a)(e,["bsPrefix","className"]),s=Object(l.b)(n,"btn-toolbar");return u.a.createElement("div",Object(a.a)({},i,{ref:t,className:c()(o,s)}))}));s.displayName="ButtonToolbar",s.defaultProps={role:"toolbar"},t.a=s},111:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function o(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}function c(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}},115:function(e,t,n){e.exports=n(118)()},116:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({controlId:void 0});t.a=r},118:function(e,t,n){"use strict";var a=n(119);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,c){if(c!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},119:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},121:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),c=n.n(o),i=n(0),u=n.n(i),l=n(115),s=n.n(l),f={type:s.a.string.isRequired,as:s.a.elementType},d=u.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"div":n,i=e.className,l=e.type,s=Object(r.a)(e,["as","className","type"]);return u.a.createElement(o,Object(a.a)({},s,{ref:t,className:c()(i,l&&l+"-feedback")}))}));d.displayName="Feedback",d.propTypes=f,d.defaultProps={type:"valid"},t.a=d},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){return Object(a.useCallback)((function(e){e&&e.focus()}),[])}},123:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),c=n.n(o),i=n(0),u=n.n(i),l=(n(38),n(121)),s=n(116),f=n(4),d=u.a.forwardRef((function(e,t){var n,o,l=e.bsPrefix,d=e.type,p=e.size,m=e.id,v=e.className,b=e.isValid,g=e.isInvalid,h=e.plaintext,y=e.readOnly,O=e.as,E=void 0===O?"input":O,j=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(i.useContext)(s.a).controlId;if(l=Object(f.b)(l,"form-control"),h)(o={})[l+"-plaintext"]=!0,n=o;else if("file"===d){var N;(N={})[l+"-file"]=!0,n=N}else{var C;(C={})[l]=!0,C[l+"-"+p]=p,n=C}return u.a.createElement(E,Object(a.a)({},j,{type:d,ref:t,readOnly:y,id:m||x,className:c()(v,n,b&&"is-valid",g&&"is-invalid")}))}));d.displayName="FormControl",d.Feedback=l.a,t.a=d},127:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(5),c=n(3),i=n.n(c),u=n(0),l=n.n(u),s=n(47),f=function(){},d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={focused:!1},t.handleFocus=function(e){"INPUT"===e.target.tagName&&t.setState({focused:!0})},t.handleBlur=function(e){"INPUT"===e.target.tagName&&t.setState({focused:!1})},t}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.name,o=e.className,c=e.checked,u=e.type,d=e.onChange,p=e.value,m=e.disabled,v=e.inputRef,b=e.innerRef,g=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef","innerRef"]),h=this.state.focused;return l.a.createElement(s.a,Object(a.a)({},g,{ref:b,className:i()(o,h&&"focus",m&&"disabled"),type:null,active:!!c,as:"label"}),l.a.createElement("input",{name:n,type:u,value:p,ref:v,autoComplete:"off",checked:!!c,disabled:!!m,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:d||f}),t)},t}(l.a.Component);t.a=l.a.forwardRef((function(e,t){return l.a.createElement(d,Object(a.a)({innerRef:t},e))}))},132:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(5),c=n(0),i=n.n(c),u=n(24),l=n.n(u),s=n(23),f=n(19),d=n(111),p=n(108),m=n(127),v=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var n=t.prototype;return n.getValues=function(){var e=this.props.value;return null==e?[]:[].concat(e)},n.handleToggle=function(e,t){var n=this.props,a=n.type,r=n.onChange,o=this.getValues(),c=-1!==o.indexOf(e);"radio"!==a?r(c?o.filter((function(t){return t!==e})):[].concat(o,[e]),t):c||r(e,t)},n.render=function(){var e=this,t=this.props,n=t.children,o=t.type,c=t.name,u=Object(r.a)(t,["children","type","name"]);delete u.onChange,delete u.value;var s=this.getValues();return"radio"!==o||c||l()(!1),i.a.createElement(p.a,Object(a.a)({},u,{toggle:!0}),Object(d.b)(n,(function(t){var n=t.props,a=n.value,r=n.onChange;return i.a.cloneElement(t,{type:o,name:t.name||c,checked:-1!==s.indexOf(a),onChange:Object(f.a)(r,(function(t){return e.handleToggle(a,t)}))})})))},t}(i.a.Component);v.defaultProps={type:"radio"};var b=Object(s.a)(v,{value:"onChange"});b.Button=m.a,t.a=b},188:function(e,t,n){},189:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(100),c=n(105),i=n(47),u=n(108),l=n(110),s=n(107),f=n(123),d=n(127),p=n(132),m=n(122),v=n(101);n(188);var b=function(e){var t=Object(m.a)(),n=Object(a.useState)(!0),b=Object(o.a)(n,2),g=b[0],h=b[1],y=Object(a.useState)(""),O=Object(o.a)(y,2),E=O[0],j=O[1];return Object(v.a)("AutoConvertStream",(function(e){e&&(h(e.homogeneous),j(e.text))}),(function(){return{homogeneous:g,text:E}})),r.a.createElement("div",{className:"AutoConvertStream"},r.a.createElement(s.a,{className:"AutoConvertStream-input"},r.a.createElement(s.a.Header,null,e.prompt),r.a.createElement(s.a.Body,null,r.a.createElement(f.a,{onChange:function(e){var t=e.target;j(t.value)},placeholder:"Text",ref:t,value:E}),r.a.createElement(l.a,{className:"AutoConvertStream-commands"},r.a.createElement(p.a,{defaultValue:!0,name:"options",onChange:function(e){h(e)},type:"radio"},r.a.createElement(d.a,{value:!0},"Consistent"),r.a.createElement(d.a,{value:!1},"Mixed")),r.a.createElement(u.a,null,r.a.createElement(i.a,{onClick:function(){j("")},variant:"danger"},"Clear"))))),r.a.createElement(s.a,null,r.a.createElement(s.a.Header,null,"Output"),r.a.createElement(s.a.Body,null,r.a.createElement("pre",{className:"AutoConvertStream-output"},c.StringAutoConvert.convertString(E,g)||" "))))};n(189);t.default=function(){return r.a.createElement("div",{className:"AutoConvert"},r.a.createElement("div",{className:"AutoConvert-info"},r.a.createElement("h2",null,"AutoConvert"),r.a.createElement("p",null,'AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext. If all of your text is in the same encoding, you can select "force consistent encoding". This can be useful for ambigious strings.'),r.a.createElement("p",null,"Some of the supported encodings are:"),r.a.createElement("ul",null,r.a.createElement("li",null,"ASCII (A=65, B=66)"),r.a.createElement("li",null,"Five bit binary (A=00001, B=00010)"),r.a.createElement("li",null,"Eight bit binary (A=01100001, B=01100010)"),r.a.createElement("li",null,"Ordinal (A=1, B=2)"))),r.a.createElement(b,{prompt:"Input"}))}}}]);
//# sourceMappingURL=9.f862335b.chunk.js.map
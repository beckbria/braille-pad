(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(40),o=a(38),c=a(39),i=a(179),l=a.n(i),u=a(1),m=a(176),h=a(177),v=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var r=m.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(r,h.a)&&(m.a.clear(),m.a.setObject(a.VERSION_STORAGE_KEY,h.a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===l()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){m.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(m.a.getObject(this.getLocalStorageKey()))}}]),t}(u.Component);t.a=v},176:function(e,t,a){"use strict";var n=a(24),r=a(25),s=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();s._isSupported=void 0,s._prefix="puzztool",t.a=s},177:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="0.7.0"},180:function(e,t,a){"use strict";var n=a(38);function r(e,t,a){return(r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}(e,t);if(r){var s=Object.getOwnPropertyDescriptor(r,t);return s.get?s.get.call(a):s.value}})(e,t,a||e)}a.d(t,"a",function(){return r})},182:function(e,t,a){"use strict";var n=a(3),r=a(4),s=a(6),o=a(5),c=a.n(o),i=a(1),l=a.n(i),u=a(2),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=Object(r.a)(e,["className"]),s=Object(u.f)(a),o=s[0],i=s[1],m=Object(u.d)(o);return l.a.createElement("div",Object(n.a)({},i,{role:"toolbar",className:c()(t,m)}))},t}(l.a.Component);t.a=Object(u.a)("btn-toolbar",m)},183:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(40),o=a(38),c=a(39),i=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e)))._activeKey=1,a.state={activeKey:a._activeKey},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(a(175).a);t.a=i},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(25),s=a(40),o=a(38),c=a(39),i=a(1),l=a.n(i),u=a(286),m=a(283),h=a(183),v=a(180),p=a(65),S=a(182),f=a(66),d=a(51),y=a(178),k=a(175),b=function(e){function t(e){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).call(this,e))}return Object(c.a)(t,e),Object(r.a)(t,null,[{key:"renderDot",value:function(){return l.a.createElement("svg",{className:"MorsePicture-dotIcon",viewBox:"0 0 30 30"},l.a.createElement("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG.")}},{key:"renderDash",value:function(){return l.a.createElement("svg",{className:"MorsePicture-dashIcon",viewBox:"0 0 90 30"},l.a.createElement("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG.")}}]),Object(r.a)(t,[{key:"render",value:function(){return this.props.morseString.split("").map(function(e,a){return l.a.createElement("span",{key:a},"."===e?t.renderDot():t.renderDash())})}}]),t}(i.Component),E=(a(256),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e)))._morseStream="",a.onKeyDown=a.onKeyDown.bind(Object(p.a)(Object(p.a)(a))),a.onKeyPress=a.onKeyPress.bind(Object(p.a)(Object(p.a)(a))),a.state={morseStream:a._morseStream},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(v.a)(Object(o.a)(t.prototype),"componentDidMount",this).call(this),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keypress",this.onKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keypress",this.onKeyPress)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"MorseStream"},l.a.createElement("p",{className:"MorseLabel"},"Input:"),l.a.createElement("pre",{className:"MorseStream-morse-output"},this.codeText(),l.a.createElement("span",{className:"blinking-cursor"},"|")),l.a.createElement("p",{className:"MorseLabel"},"Plaintext:"),l.a.createElement("pre",{className:"MorseStream-output"},this.plainText()),l.a.createElement("p",{className:"MorseLabel"},"Swap Dots/Dashes:"),l.a.createElement("pre",{className:"MorseStream-output"},this.invertText()),l.a.createElement("p",{className:"MorseLabel"},"Right to Left:"),l.a.createElement("pre",{className:"MorseStream-output"},this.reverseText()),l.a.createElement("p",{className:"MorseLabel"},"Right to Left + Swap Dots/Dashes:"),l.a.createElement("pre",{className:"MorseStream-output"},this.invertReverseText()),l.a.createElement(S.a,{className:"MorseStream-inputCommands"},l.a.createElement(f.a,null,l.a.createElement(d.a,{onClick:function(){return e.onDotClick()}},b.renderDot()),l.a.createElement(d.a,{onClick:function(){return e.onDashClick()}},b.renderDash()),l.a.createElement(d.a,{onClick:function(){return e.onBackspaceClick()}},"\u232b"))),l.a.createElement(S.a,{className:"MorseStream-commands"},l.a.createElement(f.a,null,l.a.createElement(d.a,{onClick:function(){return e.onNextClick()}},"Next")),l.a.createElement(f.a,null,l.a.createElement(d.a,{onClick:function(){return e.onClearClick()}},"Clear"))))}},{key:"getLocalStorageKey",value:function(){return"MorseStream"}},{key:"onSaveState",value:function(){return{morseStream:this._morseStream}}},{key:"onRestoreState",value:function(e){null!==e&&(this._morseStream=e.morseStream)}},{key:"onUpdateState",value:function(){this.setState({morseStream:this._morseStream})}},{key:"codeText",value:function(){return this._morseStream.replace(/\./g,"\xb7").replace(/-/g,"\uff0d")}},{key:"plainText",value:function(){return new y.MorseString(this._morseStream).toString()}},{key:"invertText",value:function(){return new y.MorseString(this._morseStream).invertDotsAndDashes().toString()}},{key:"reverseText",value:function(){return new y.MorseString(this._morseStream).reverse().toString()}},{key:"invertReverseText",value:function(){return new y.MorseString(this._morseStream).invertDotsAndDashes().reverse().toString()}},{key:"onKeyDown",value:function(e){if(!e.defaultPrevented){var t=!1;"Backspace"!==e.key&&8!==e.keyCode||(this.onBackspaceClick(),t=!0),t&&e.preventDefault()}}},{key:"onKeyPress",value:function(e){if(!e.defaultPrevented){var t=!0;if(e.key)switch(e.key){case"-":case"j":this.onDashClick();break;case".":case"k":this.onDotClick();break;case"Enter":case" ":case"l":this.onNextClick();break;case";":this.onBackspaceClick();break;default:t=!1}else switch(e.keyCode){case 45:case 106:this.onDashClick();break;case 46:case 107:this.onDotClick();break;case 13:case 32:case 108:this.onNextClick();break;case 59:this.onBackspaceClick();break;default:t=!1}t&&e.preventDefault()}}},{key:"onDotClick",value:function(){this._morseStream+=y.MorseCharacter.DOT,this.updateState()}},{key:"onDashClick",value:function(){this._morseStream+=y.MorseCharacter.DASH,this.updateState()}},{key:"onBackspaceClick",value:function(){this._morseStream.length>0&&(this._morseStream=this._morseStream.substring(0,this._morseStream.length-1)),this.updateState()}},{key:"onNextClick",value:function(){if(this._morseStream.length>0){var e=this._morseStream.slice(-1);e===y.MorseString.CHARACTER_DIVIDER?this._morseStream=this._morseStream.substring(0,this._morseStream.length-1)+y.MorseString.WORD_DIVIDER:e!=y.MorseString.WORD_DIVIDER&&(this._morseStream+=y.MorseString.CHARACTER_DIVIDER)}this.updateState()}},{key:"onClearClick",value:function(){this._morseStream="",this.updateState()}}]),t}(k.a)),O=a(215),g=(a(257),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"MorseTable"},l.a.createElement(O.a,{striped:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Character"),l.a.createElement("th",null,"Morse"))),l.a.createElement("tbody",null,this.renderRows())))}},{key:"renderRows",value:function(){return(new y.MorseCharacter).getPotentialMatches().map(function(e){return l.a.createElement("tr",{key:e.display},l.a.createElement("td",null,e.display),l.a.createElement("td",null,l.a.createElement("div",{className:"MorseTable-morseView"},l.a.createElement(b,{morseString:y.MorseCharacter.toMorseString(e.encoding)}))))})}}]),t}(i.Component)),_=(a(258),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Morse"},l.a.createElement("div",{className:"Morse-content"},l.a.createElement(u.a,{activeKey:this.state.activeKey,animation:!1,id:"Morse-tabs",onSelect:function(t){return e.onTabSelect(t)}},l.a.createElement(m.a,{className:"Morse-tab-value",eventKey:1,title:"Value"},l.a.createElement(E,null)),l.a.createElement(m.a,{eventKey:2,title:"Reference"},l.a.createElement(g,null)))))}},{key:"getLocalStorageKey",value:function(){return"Morse"}}]),t}(h.a));t.default=_}}]);
//# sourceMappingURL=10.ede3319b.chunk.js.map
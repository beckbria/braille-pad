(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[14],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(103);function o(e,t,n){Object(r.useLayoutEffect)((function(){return t(Object(a.b)(e))}),[e]),Object(r.useEffect)((function(){return Object(a.c)(e,n())}))}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="0.7.0"},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return h}));var r,a=n(104),o=n.n(a),c=n(102),l="appVersion",u="puzztool";function i(e){return"".concat(u,"_").concat(e)}function d(){var e,t;(function(e,t){try{if(e)return 0!==o()(t,e)}catch(n){}return!0})(function(e){if(s())return window.localStorage.getItem(i(e));return null}(l),c.a)&&(h(),e=l,t=c.a,s()&&window.localStorage.setItem(i(e),t))}function s(){if(void 0===r){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),r=!0}catch(n){r=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}r&&d()}return r}function f(e){if(s()){var t=window.localStorage.getItem(i(e));if(null!==t)return JSON.parse(t)}return null}function m(e,t){s()&&window.localStorage.setItem(i(e),JSON.stringify(t))}function h(){s()&&window.localStorage.clear()}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){return Object(r.useCallback)((function(e){e&&e.focus()}),[])}},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(100),c=n(217),l=n(107),u=n(131),i=n(129),d=n(216),s=n(123),f=n(130),m=n(122),h=n(101),p=n(109),v=n(105);n(185);function E(e){return e.split(/\r?\n/)}function g(e,t,n){var r=new v.WordSearchSolver;return r.setDirections(n),r.setGrid(e),r.setWords(t),function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value,i=Array.from({length:u.length},(function(){return!1}));n.push(i)}}catch(w){a=!0,o=w}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}var d=!0,s=!1,f=void 0;try{for(var m,h=t[Symbol.iterator]();!(d=(m=h.next()).done);d=!0){var p=m.value,v=!0,E=!1,g=void 0;try{for(var y,S=p.points[Symbol.iterator]();!(v=(y=S.next()).done);v=!0){var b=y.value;n[b.y][b.x]=!0}}catch(w){E=!0,g=w}finally{try{v||null==S.return||S.return()}finally{if(E)throw g}}}}catch(w){s=!0,f=w}finally{try{d||null==h.return||h.return()}finally{if(s)throw f}}return n}(e,r.findWords())}function y(e){return e?"WordSearchOutput-highlightChar":""}var S=function(e){var t=e.gridInputText.trim();if(!t)return null;var n=E(t),r=[],o=!0,c=!1,l=void 0;try{for(var u,i=n[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var d=u.value;r.push(d.split(""))}}catch(S){c=!0,l=S}finally{try{o||null==i.return||i.return()}finally{if(c)throw l}}var s,f,m=(s=e.useCardinals,f=e.useDiagonals,s&&f?v.WordSearchDirection.CardinalAndDiagonal:s?v.WordSearchDirection.Cardinal:f?v.WordSearchDirection.Diagonal:v.WordSearchDirection.None),h=g(r,E(e.wordListInputText).filter((function(e){return e.length>0})),m);return a.a.createElement(p.a,{className:"WordSearchOutput",borderless:!0},a.a.createElement("tbody",null,r.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e,n){return a.a.createElement("td",{className:y(h[t][n]),key:"".concat(t,",").concat(n)},e)})))}))))};n(186);var b=function(){var e=Object(m.a)(),t=Object(r.useState)(""),n=Object(o.a)(t,2),p=n[0],v=n[1],E=Object(r.useState)(""),g=Object(o.a)(E,2),y=g[0],b=g[1],w=Object(r.useState)(!0),O=Object(o.a)(w,2),x=O[0],C=O[1],W=Object(r.useState)(!0),I=Object(o.a)(W,2),j=I[0],k=I[1];return Object(h.a)("WordSearchComponent",(function(e){e&&(v(e.gridInputText),b(e.wordListInputText),C(e.useCardinals),k(e.useDiagonals))}),(function(){return{gridInputText:p,wordListInputText:y,useCardinals:x,useDiagonals:j}})),a.a.createElement("div",{className:"WordSearchComponent"},a.a.createElement(i.a,{fluid:!0},a.a.createElement(f.a,{noGutters:!0},a.a.createElement(u.a,{md:4},a.a.createElement(l.a,{className:"WordSearchComponent-ListInput"},a.a.createElement(l.a.Header,null,"Enter the list of words to find, one word per line"),a.a.createElement(l.a.Body,null,a.a.createElement(s.a,{as:"textarea",onChange:function(e){var t=e.target;b(t.value)},placeholder:"Word List To Find",value:y}),function(){if(!x&&!j)return a.a.createElement(c.a,{variant:"warning"},"No directions are selected. No results will be shown.")}(),a.a.createElement(d.a,{checked:j,id:"WordSearchComponent-checkbox-diagonal",label:"Use diagonal directions",onChange:function(e){var t=e.target;k(t.checked)},type:"checkbox"}),a.a.createElement(d.a,{checked:x,id:"WordSearchComponent-checkbox-cardinal",label:"Use cardinal directions",onChange:function(e){var t=e.target;C(t.checked)},type:"checkbox"})))),a.a.createElement(u.a,{md:8},a.a.createElement(l.a,{className:"WordSearchComponent-GridInput"},a.a.createElement(l.a.Header,null,"Enter the word search grid, one row of letters per line"),a.a.createElement(l.a.Body,null,a.a.createElement(s.a,{as:"textarea",onChange:function(e){var t=e.target;v(t.value)},placeholder:"Grid Text",ref:e,spellCheck:!1,value:p}))))),a.a.createElement(f.a,{noGutters:!0},a.a.createElement(u.a,{md:12},a.a.createElement(l.a,{className:"WordSearchComponent-GridOutput"},a.a.createElement(l.a.Header,null,"Output"),a.a.createElement(l.a.Body,null,a.a.createElement(S,{gridInputText:p,useCardinals:x,useDiagonals:j,wordListInputText:y})))))))};n(187);t.default=function(){return a.a.createElement("div",{className:"WordSearch"},a.a.createElement("h2",null,"Word Search"),a.a.createElement(b,null))}}}]);
//# sourceMappingURL=14.a9a6de98.chunk.js.map
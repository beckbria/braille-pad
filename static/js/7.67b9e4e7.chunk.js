webpackJsonp([7],{359:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=r(0),a=(r.n(n),r(449)),u=r(452),i=(r.n(u),this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return n.createElement("div",{className:"AutoConvert"},n.createElement("div",{className:"AutoConvert-content"},n.createElement(a.a,null)))},e}(n.Component);e.default=d},362:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.Letter=2]="Letter",t[t.Number=4]="Number",t[t.Formatting=8]="Formatting",t[t.Punctuation=16]="Punctuation",t[t.All=255]="All"}(o||(o={})),e.default=o},363:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.LetterA=1]="LetterA",t[t.LetterB=3]="LetterB",t[t.LetterC=9]="LetterC",t[t.LetterD=25]="LetterD",t[t.LetterE=17]="LetterE",t[t.LetterF=11]="LetterF",t[t.LetterG=27]="LetterG",t[t.LetterH=19]="LetterH",t[t.LetterI=10]="LetterI",t[t.LetterJ=26]="LetterJ",t[t.LetterK=5]="LetterK",t[t.LetterL=7]="LetterL",t[t.LetterM=13]="LetterM",t[t.LetterN=29]="LetterN",t[t.LetterO=21]="LetterO",t[t.LetterP=15]="LetterP",t[t.LetterQ=31]="LetterQ",t[t.LetterR=23]="LetterR",t[t.LetterS=14]="LetterS",t[t.LetterT=30]="LetterT",t[t.LetterU=37]="LetterU",t[t.LetterV=39]="LetterV",t[t.LetterX=45]="LetterX",t[t.LetterY=61]="LetterY",t[t.LetterZ=53]="LetterZ",t[t.LetterW=58]="LetterW",t[t.Number1=1]="Number1",t[t.Number2=3]="Number2",t[t.Number3=9]="Number3",t[t.Number4=25]="Number4",t[t.Number5=17]="Number5",t[t.Number6=11]="Number6",t[t.Number7=27]="Number7",t[t.Number8=19]="Number8",t[t.Number9=10]="Number9",t[t.Number0=26]="Number0",t[t.FormattingNumber=60]="FormattingNumber",t[t.FormattingCapital=32]="FormattingCapital",t[t.PunctuationComma=2]="PunctuationComma",t[t.PunctuationSemicolon=6]="PunctuationSemicolon",t[t.PunctuationApostrophe=4]="PunctuationApostrophe",t[t.PunctuationColon=18]="PunctuationColon",t[t.PunctuationHyphen=36]="PunctuationHyphen",t[t.PunctuationDecimalPoint=40]="PunctuationDecimalPoint",t[t.PunctuationFullStop=50]="PunctuationFullStop",t[t.PunctuationExclamationPoint=22]="PunctuationExclamationPoint",t[t.PunctuationOpenQuote=38]="PunctuationOpenQuote",t[t.PunctuationQuestionMark=38]="PunctuationQuestionMark",t[t.PunctuationCloseQuote=52]="PunctuationCloseQuote",t[t.PunctuationBracket=54]="PunctuationBracket",t[t.PunctuationSlash=12]="PunctuationSlash"}(o||(o={})),e.default=o},364:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){this._data=t,this._category=e,this.invalidateLookup()}return Object.defineProperty(t.prototype,"category",{get:function(){return this._category},set:function(t){this._category!==t&&(this._category=t,this.invalidateLookup())},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this.onClear(),this.invalidateLookup()},t.prototype.empty=function(){return this.onEmpty()},t.prototype.getExactMatches=function(){return this.ensureLookup().exact},t.prototype.getPotentialMatches=function(){return this.ensureLookup().partial},t.prototype.toString=function(){return this.ensureLookup().exactString},t.prototype.valid=function(){return this.ensureLookup().exact.length>0},t.prototype.valueOf=function(){return this.getEncoding()},t.prototype.invalidateLookup=function(){this._lookup=null},t.prototype.ensureLookup=function(){return this._lookup||(this._lookup=this._data.lookup(this.getEncoding(),this._category)),this._lookup},t}();e.default=o},365:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(362),n=r(371),a=r(381),u=function(){function t(){this._entries=[]}return t.prototype.lookup=function(t,e){void 0===e&&(e=o.default.All);for(var r=new a.default,n=0,u=this._entries;n<u.length;n++){var i=u[n];0!==(i.category&e)&&(i.encoding===t?r.exact.push(i):(i.encoding&t)===t&&r.partial.push(i))}return r},t.prototype.addToList=function(t,e,r){this._entries.push(new n.default(t,e,r))},t}();e.default=u},366:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(372),n=function(){function t(){}return t.rotateLetter=function(t,e){if(1!==t.length)throw new Error("Expected a single character");(e%=this.alphaLength)<0&&(e+=this.alphaLength);var r=t.charCodeAt(0),o=0;if(this.isLowerAlpha(r))o=this.lowerA;else{if(!this.isUpperAlpha(r))return t;o=this.upperA}return String.fromCharCode((r-o+e)%this.alphaLength+o)},t.rotateLetterWithKey=function(t,e,r,n){if(void 0===n&&(n=!1),0===e.length)return t;var a=this.getCharacterWithMod(e,r),u=o.default.toOrdinal(a)-1;return n&&(u=-u),this.rotateLetter(t,u)},t.isAlpha=function(t){var e=t.charCodeAt(0);return this.isUpperAlpha(e)||this.isLowerAlpha(e)},t.getCharacterWithMod=function(t,e){return t.charAt(e%t.length)},t.isUpperAlpha=function(t){return t>=this.upperA&&t<=this.upperZ},t.isLowerAlpha=function(t){return t>=this.lowerA&&t<=this.lowerZ},t.upperA="A".charCodeAt(0),t.upperZ="Z".charCodeAt(0),t.lowerA="a".charCodeAt(0),t.lowerZ="z".charCodeAt(0),t.alphaLength=26,t}();e.default=n},367:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){void 0===t&&(t=""),void 0===e&&(e=""),this._text=t,this._key=e}return Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this._key},set:function(t){this._key=t},enumerable:!0,configurable:!0}),t.prototype.encrypt=function(){return this.convert(!1)},t.prototype.decrypt=function(){return this.convert(!0)},t}();e.default=o},368:function(t,e,r){"use strict";function o(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=n.None,o=0,a=0,u=t;a<u.length;a++){var i=u[a];r|=i<<=o,o+=2}return r}var n;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.Dot=1]="Dot",t[t.Dash=2]="Dash",t[t.LetterA=o(t.Dot,t.Dash)]="LetterA",t[t.LetterB=o(t.Dash,t.Dot,t.Dot,t.Dot)]="LetterB",t[t.LetterC=o(t.Dash,t.Dot,t.Dash,t.Dot)]="LetterC",t[t.LetterD=o(t.Dash,t.Dot,t.Dot)]="LetterD",t[t.LetterE=o(t.Dot)]="LetterE",t[t.LetterF=o(t.Dot,t.Dot,t.Dash,t.Dot)]="LetterF",t[t.LetterG=o(t.Dash,t.Dash,t.Dot)]="LetterG",t[t.LetterH=o(t.Dot,t.Dot,t.Dot,t.Dot)]="LetterH",t[t.LetterI=o(t.Dot,t.Dot)]="LetterI",t[t.LetterJ=o(t.Dot,t.Dash,t.Dash,t.Dash)]="LetterJ",t[t.LetterK=o(t.Dash,t.Dot,t.Dash)]="LetterK",t[t.LetterL=o(t.Dot,t.Dash,t.Dot,t.Dot)]="LetterL",t[t.LetterM=o(t.Dash,t.Dash)]="LetterM",t[t.LetterN=o(t.Dash,t.Dot)]="LetterN",t[t.LetterO=o(t.Dash,t.Dash,t.Dash)]="LetterO",t[t.LetterP=o(t.Dot,t.Dash,t.Dash,t.Dot)]="LetterP",t[t.LetterQ=o(t.Dash,t.Dash,t.Dot,t.Dash)]="LetterQ",t[t.LetterR=o(t.Dot,t.Dash,t.Dot)]="LetterR",t[t.LetterS=o(t.Dot,t.Dot,t.Dot)]="LetterS",t[t.LetterT=o(t.Dash)]="LetterT",t[t.LetterU=o(t.Dot,t.Dot,t.Dash)]="LetterU",t[t.LetterV=o(t.Dot,t.Dot,t.Dot,t.Dash)]="LetterV",t[t.LetterW=o(t.Dot,t.Dash,t.Dash)]="LetterW",t[t.LetterX=o(t.Dash,t.Dot,t.Dot,t.Dash)]="LetterX",t[t.LetterY=o(t.Dash,t.Dot,t.Dash,t.Dash)]="LetterY",t[t.LetterZ=o(t.Dash,t.Dash,t.Dot,t.Dot)]="LetterZ",t[t.Number0=o(t.Dash,t.Dash,t.Dash,t.Dash,t.Dash)]="Number0",t[t.Number1=o(t.Dot,t.Dash,t.Dash,t.Dash,t.Dash)]="Number1",t[t.Number2=o(t.Dot,t.Dot,t.Dash,t.Dash,t.Dash)]="Number2",t[t.Number3=o(t.Dot,t.Dot,t.Dot,t.Dash,t.Dash)]="Number3",t[t.Number4=o(t.Dot,t.Dot,t.Dot,t.Dot,t.Dash)]="Number4",t[t.Number5=o(t.Dot,t.Dot,t.Dot,t.Dot,t.Dot)]="Number5",t[t.Number6=o(t.Dash,t.Dot,t.Dot,t.Dot,t.Dot)]="Number6",t[t.Number7=o(t.Dash,t.Dash,t.Dot,t.Dot,t.Dot)]="Number7",t[t.Number8=o(t.Dash,t.Dash,t.Dash,t.Dot,t.Dot)]="Number8",t[t.Number9=o(t.Dash,t.Dash,t.Dash,t.Dash,t.Dot)]="Number9",t[t.PunctuationPeriod=o(t.Dot,t.Dash,t.Dot,t.Dash,t.Dot,t.Dash)]="PunctuationPeriod",t[t.PunctuationComma=o(t.Dash,t.Dash,t.Dot,t.Dot,t.Dash,t.Dash)]="PunctuationComma",t[t.PunctuationQuestionMark=o(t.Dot,t.Dot,t.Dash,t.Dash,t.Dot,t.Dot)]="PunctuationQuestionMark",t[t.PunctuationApostrophe=o(t.Dot,t.Dash,t.Dash,t.Dash,t.Dash,t.Dot)]="PunctuationApostrophe",t[t.PunctuationExclamationPoint=o(t.Dash,t.Dot,t.Dash,t.Dot,t.Dash,t.Dash)]="PunctuationExclamationPoint",t[t.PunctuationForwardSlash=o(t.Dash,t.Dot,t.Dot,t.Dash,t.Dot)]="PunctuationForwardSlash",t[t.PunctuationOpenParenthesis=o(t.Dash,t.Dot,t.Dash,t.Dash,t.Dot)]="PunctuationOpenParenthesis",t[t.PunctuationCloseParenthesis=o(t.Dash,t.Dot,t.Dash,t.Dash,t.Dot,t.Dash)]="PunctuationCloseParenthesis",t[t.PunctuationAmpersand=o(t.Dot,t.Dash,t.Dot,t.Dot,t.Dot)]="PunctuationAmpersand",t[t.PunctuationColon=o(t.Dash,t.Dash,t.Dash,t.Dot,t.Dot,t.Dot)]="PunctuationColon",t[t.PunctuationSemicolon=o(t.Dash,t.Dot,t.Dash,t.Dot,t.Dash,t.Dot)]="PunctuationSemicolon",t[t.PunctuationDoubleDash=o(t.Dash,t.Dot,t.Dot,t.Dot,t.Dash)]="PunctuationDoubleDash",t[t.PunctuationPlusSign=o(t.Dot,t.Dash,t.Dot,t.Dash,t.Dot)]="PunctuationPlusSign",t[t.PunctuationHyphen=o(t.Dash,t.Dot,t.Dot,t.Dot,t.Dot,t.Dash)]="PunctuationHyphen",t[t.PunctuationUnderscore=o(t.Dot,t.Dot,t.Dash,t.Dash,t.Dot,t.Dash)]="PunctuationUnderscore",t[t.PunctuationQuotationMark=o(t.Dot,t.Dash,t.Dot,t.Dot,t.Dash,t.Dot)]="PunctuationQuotationMark",t[t.PunctuationDollarSign=o(t.Dot,t.Dot,t.Dot,t.Dash,t.Dot,t.Dot,t.Dash)]="PunctuationDollarSign",t[t.PunctuationAtSign=o(t.Dot,t.Dash,t.Dash,t.Dot,t.Dash,t.Dot)]="PunctuationAtSign"}(n||(n={})),e.default=n},369:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.North=2]="North",t[t.NorthEast=4]="NorthEast",t[t.East=8]="East",t[t.SouthEast=16]="SouthEast",t[t.South=32]="South",t[t.SouthWest=64]="SouthWest",t[t.West=128]="West",t[t.NorthWest=256]="NorthWest"}(o||(o={})),e.default=o},370:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(362),u=r(365),i=r(363),d=function(t){function e(){var e=t.call(this)||this;return e.addToList(i.default.LetterA,a.default.Letter,"A"),e.addToList(i.default.LetterB,a.default.Letter,"B"),e.addToList(i.default.LetterC,a.default.Letter,"C"),e.addToList(i.default.LetterD,a.default.Letter,"D"),e.addToList(i.default.LetterE,a.default.Letter,"E"),e.addToList(i.default.LetterF,a.default.Letter,"F"),e.addToList(i.default.LetterG,a.default.Letter,"G"),e.addToList(i.default.LetterH,a.default.Letter,"H"),e.addToList(i.default.LetterI,a.default.Letter,"I"),e.addToList(i.default.LetterJ,a.default.Letter,"J"),e.addToList(i.default.LetterK,a.default.Letter,"K"),e.addToList(i.default.LetterL,a.default.Letter,"L"),e.addToList(i.default.LetterM,a.default.Letter,"M"),e.addToList(i.default.LetterN,a.default.Letter,"N"),e.addToList(i.default.LetterO,a.default.Letter,"O"),e.addToList(i.default.LetterP,a.default.Letter,"P"),e.addToList(i.default.LetterQ,a.default.Letter,"Q"),e.addToList(i.default.LetterR,a.default.Letter,"R"),e.addToList(i.default.LetterS,a.default.Letter,"S"),e.addToList(i.default.LetterT,a.default.Letter,"T"),e.addToList(i.default.LetterU,a.default.Letter,"U"),e.addToList(i.default.LetterV,a.default.Letter,"V"),e.addToList(i.default.LetterW,a.default.Letter,"W"),e.addToList(i.default.LetterX,a.default.Letter,"X"),e.addToList(i.default.LetterY,a.default.Letter,"Y"),e.addToList(i.default.LetterZ,a.default.Letter,"Z"),e.addToList(i.default.Number0,a.default.Number,"0"),e.addToList(i.default.Number1,a.default.Number,"1"),e.addToList(i.default.Number2,a.default.Number,"2"),e.addToList(i.default.Number3,a.default.Number,"3"),e.addToList(i.default.Number4,a.default.Number,"4"),e.addToList(i.default.Number5,a.default.Number,"5"),e.addToList(i.default.Number6,a.default.Number,"6"),e.addToList(i.default.Number7,a.default.Number,"7"),e.addToList(i.default.Number8,a.default.Number,"8"),e.addToList(i.default.Number9,a.default.Number,"9"),e.addToList(i.default.FormattingNumber,a.default.Formatting,"#"),e.addToList(i.default.FormattingCapital,a.default.Formatting,"^"),e.addToList(i.default.PunctuationComma,a.default.Punctuation,","),e.addToList(i.default.PunctuationSemicolon,a.default.Punctuation,";"),e.addToList(i.default.PunctuationApostrophe,a.default.Punctuation,"'"),e.addToList(i.default.PunctuationColon,a.default.Punctuation,":"),e.addToList(i.default.PunctuationHyphen,a.default.Punctuation,"-"),e.addToList(i.default.PunctuationDecimalPoint,a.default.Punctuation,"."),e.addToList(i.default.PunctuationFullStop,a.default.Punctuation,"."),e.addToList(i.default.PunctuationExclamationPoint,a.default.Punctuation,"!"),e.addToList(i.default.PunctuationOpenQuote,a.default.Punctuation,'"'),e.addToList(i.default.PunctuationQuestionMark,a.default.Punctuation,"?"),e.addToList(i.default.PunctuationCloseQuote,a.default.Punctuation,'"'),e.addToList(i.default.PunctuationBracket,a.default.Punctuation,"("),e.addToList(i.default.PunctuationBracket,a.default.Punctuation,")"),e.addToList(i.default.PunctuationSlash,a.default.Punctuation,"/"),e}return n(e,t),e.instance=new e,e}(u.default);e.default=d},371:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,r){this.encoding=t,this.category=e,this.display=r}return t.prototype.toString=function(){return this.display},t}();e.default=o},372:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(373),n=function(){function t(){}return t.getAsciiTable=function(){var e=[];return t.addAsciiRange(e,48,57,t.toAscii,127),t.addAsciiRange(e,65,90,t.toAscii,127),t.addAsciiRange(e,97,122,t.toAscii,127),e},t.getOrdinalTable=function(){var e=[];return t.addAsciiRange(e,65,90,t.toOrdinal,26),e},t.toAscii=function(t){if("string"!==typeof t||1!==t.length)throw new Error("A single character is required");var e=t.charCodeAt(0);return e>=0&&e<=127?e:-1},t.toOrdinal=function(t){if("string"!==typeof t||1!==t.length)throw new Error("A single character is required");var e=t.charCodeAt(0),r=e-"a".charCodeAt(0);return r>=0&&r<26?r+1:(r=e-"A".charCodeAt(0))>=0&&r<26?r+1:-1},t.addAsciiRange=function(t,e,r,n,a){for(var u=e;u<=r;u++){var i=String.fromCharCode(u);t.push(new o.default(i,n(i),a))}},t}();e.default=n},373:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(385),n=function(){function t(e,r,o){this.character=e,this.binary=t.getValue(r,2,o),this.ternary=t.getValue(r,3,o),this.octal=t.getValue(r,8,o),this.decimal=t.getValue(r,10,o),this.hexadecimal=t.getValue(r,16,o)}return t.getValue=function(t,e,r){return o(t.toString(e),Math.ceil(Math.log(r)/Math.log(e)),"0")},t}();e.default=n},374:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.Latin=1]="Latin",t[t.Ordinal=2]="Ordinal",t[t.FiveBitBinary=3]="FiveBitBinary",t[t.EightBitBinary=4]="EightBitBinary",t[t.Ascii=5]="Ascii"}(o||(o={})),e.default=o},375:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.LetterA=96]="LetterA",t[t.LetterB=160]="LetterB",t[t.LetterC=288]="LetterC",t[t.LetterD=34]="LetterD",t[t.LetterE=36]="LetterE",t[t.LetterF=40]="LetterF",t[t.LetterG=48]="LetterG",t[t.LetterH=192]="LetterH",t[t.LetterI=320]="LetterI",t[t.LetterJ=10]="LetterJ",t[t.LetterK=66]="LetterK",t[t.LetterL=68]="LetterL",t[t.LetterM=72]="LetterM",t[t.LetterN=80]="LetterN",t[t.LetterO=384]="LetterO",t[t.LetterP=130]="LetterP",t[t.LetterQ=132]="LetterQ",t[t.LetterR=136]="LetterR",t[t.LetterS=144]="LetterS",t[t.LetterT=258]="LetterT",t[t.LetterU=260]="LetterU",t[t.LetterV=18]="LetterV",t[t.LetterW=12]="LetterW",t[t.LetterX=20]="LetterX",t[t.LetterY=264]="LetterY",t[t.LetterZ=24]="LetterZ",t[t.Number1=96]="Number1",t[t.Number2=160]="Number2",t[t.Number3=288]="Number3",t[t.Number4=34]="Number4",t[t.Number5=36]="Number5",t[t.Number6=40]="Number6",t[t.Number7=48]="Number7",t[t.Number8=192]="Number8",t[t.Number9=320]="Number9",t[t.Number0=66]="Number0",t[t.FormattingNumber=6]="FormattingNumber"}(o||(o={})),e.default=o},376:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(369),n=function(){function t(){}return t.FromDegrees=function(t){if(t>=360&&(t%=360),t%45!==0||t<0)throw new Error("Invalid degrees");var e=t/45;return o.default.North<<e},t.ToDegrees=function(t){for(var e=o.default.North,r=0;r<9&&e!==t;)e<<=1,r++;return 45*r},t}();e.default=n},377:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(380);e.BrailleCharacter=o.default;var n=r(382);e.BrailleDot=n.default;var a=r(363);e.BrailleEncoding=a.default;var u=r(383);e.BrailleStream=u.default;var i=r(384);e.AutoKeyString=i.default;var d=r(386);e.CaesarString=d.default;var s=r(367);e.KeyedCipherStringBase=s.default;var l=r(387);e.VigenereString=l.default;var f=r(362);e.EncodingCategory=f.default;var c=r(371);e.EncodingEntry=c.default;var h=r(372);e.CharacterConversion=h.default;var p=r(373);e.CharacterTableEntry=p.default;var L=r(388);e.CharacterAutoConvert=L.default;var m=r(374);e.CharacterEncoding=m.default;var D=r(389);e.MorseCharacter=D.default;var _=r(368);e.MorseEncoding=_.default;var v=r(391);e.SemaphoreCharacter=v.default;var b=r(376);e.SemaphoreDegrees=b.default;var y=r(369);e.SemaphoreDirection=y.default},378:function(t,e,r){"use strict";var o=function(){function t(){}return t.isSupported=function(){if(void 0===this._isSupported){var t=window.localStorage,e="__storage_test__";try{t.setItem(e,e),t.removeItem(e),this._isSupported=!0}catch(e){this._isSupported=e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}}return this._isSupported},t.getItem=function(t){return this.isSupported()?window.localStorage.getItem(this.getKey(t)):null},t.getObject=function(t){if(this.isSupported()){var e=window.localStorage.getItem(this.getKey(t));if(null!==e)return JSON.parse(e)}return null},t.setItem=function(t,e){this.isSupported()&&window.localStorage.setItem(this.getKey(t),e)},t.setObject=function(t,e){this.isSupported()&&window.localStorage.setItem(this.getKey(t),JSON.stringify(e))},t.clear=function(){this.isSupported()&&window.localStorage.clear()},t.getKey=function(t){return this._prefix+"_"+t},t._prefix="puzztool",t}();e.a=o},379:function(t,e,r){"use strict";var o,n=r(0),a=(r.n(n),r(378)),u=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.componentDidMount=function(){this.restoreState(),this.updateState()},e.prototype.updateState=function(){this.onUpdateState(),this.saveState()},e.prototype.saveState=function(){a.a.setObject(this.getLocalStorageKey(),this.onSaveState())},e.prototype.restoreState=function(){this.onRestoreState(a.a.getObject(this.getLocalStorageKey()))},e}(n.Component);e.a=i},380:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(362),u=r(364),i=r(370),d=r(363),s=function(t){function e(e,r){void 0===e&&(e=d.default.None),void 0===r&&(r=a.default.All);var o=t.call(this,i.default.instance,r)||this;return o._encoding=e,o}return n(e,t),Object.defineProperty(e.prototype,"encoding",{get:function(){return this._encoding},set:function(t){this._encoding=t,this.invalidateLookup()},enumerable:!0,configurable:!0}),e.prototype.get=function(t){return(this._encoding&t)===t},e.prototype.toggle=function(t){this._encoding^=t,this.invalidateLookup()},e.prototype.onClear=function(){this._encoding=d.default.None,this.invalidateLookup()},e.prototype.onEmpty=function(){return this._encoding===d.default.None},e.prototype.getEncoding=function(){return this._encoding},e}(u.default);e.default=s},381:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.exact=[],this.partial=[]}return Object.defineProperty(t.prototype,"exactString",{get:function(){return this.exact.map(function(t){return t.toString()}).join("/")},enumerable:!0,configurable:!0}),t}();e.default=o},382:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.UpperLeft=1]="UpperLeft",t[t.MiddleLeft=2]="MiddleLeft",t[t.LowerLeft=4]="LowerLeft",t[t.UpperRight=8]="UpperRight",t[t.MiddleRight=16]="MiddleRight",t[t.LowerRight=32]="LowerRight"}(o||(o={})),e.default=o},383:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(362),n=r(370),a=r(363),u=function(){function t(){this._chars=[],this.invalidate()}return Object.defineProperty(t.prototype,"chars",{get:function(){return this._chars},set:function(t){this.clear();for(var e=0,r=t;e<r.length;e++){var o=r[e];this._chars.push(o)}},enumerable:!0,configurable:!0}),t.prototype.append=function(t){this._chars.push(t.valueOf())},t.prototype.clear=function(){this._chars.length=0,this.invalidate()},t.prototype.backspace=function(){this._chars.pop(),this.invalidate()},t.prototype.space=function(){this._chars.push(a.default.None)},t.prototype.toString=function(){return this.update(),this._currentStr},t.prototype.invalidate=function(){this._currentStr="",this._processPosition=0,this._numberMode=!1},t.prototype.update=function(){for(;this._processPosition<this._chars.length;){var t=this._chars[this._processPosition];switch(t){case a.default.None:this._numberMode=!1,this._currentStr+=" ";break;case a.default.FormattingNumber:this._numberMode=!0,this._currentStr+="#";break;default:var e=o.default.Punctuation|(this._numberMode?o.default.Number:o.default.Letter),r=n.default.instance.lookup(t,e).exact;r.length>0&&(this._currentStr+=r[0].toString())}this._processPosition++}},t}();e.default=u},384:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(366),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.convert=function(t){if(this._key.length<1)return this._text;for(var e=[],r=0,o=this._key,n=0,u=this._text;n<u.length;n++){var i=u[n];if(a.default.isAlpha(i)){var d=a.default.rotateLetterWithKey(i,o,r++,t);e.push(d),o+=t?d:i}else e.push(i)}return e.join("")},e}(r(367).default);e.default=u},385:function(t,e,r){"use strict";t.exports=function(t,e,r){if((e-=(t+="").length)<=0)return t;r||0===r||(r=" ");if(" "===(r+="")&&e<10)return o[e]+t;var n="";for(;1&e&&(n+=r),e>>=1;)r+=r;return n+t};var o=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},386:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(366),n=function(){function t(t){void 0===t&&(t=""),this._text=t}return Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t},enumerable:!0,configurable:!0}),t.prototype.getRotation=function(t){for(var e=[],r=0,n=this._text;r<n.length;r++){var a=n[r];e.push(o.default.rotateLetter(a,t))}return e.join("")},t.prototype.getRotations=function(){var t=[];t.push(this._text);for(var e=1;e<26;e++)t.push(this.getRotation(e));return t},t}();e.default=n},387:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(366),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.convert=function(t){for(var e=[],r=0,o=0,n=this._text;o<n.length;o++){var u=n[o];a.default.isAlpha(u)?e.push(a.default.rotateLetterWithKey(u,this._key,r++,t)):e.push(u)}return e.join("")},e}(r(367).default);e.default=u},388:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(374),n=function(){function t(){}return t.convertCharacter=function(t,e){var r=null;if((r=e||this.determineCharacterEncoding(t))===o.default.None)return"";if(r===o.default.Latin)return t;var n=parseInt(t,10);if(r===o.default.Ascii)return String.fromCharCode(n);if(r===o.default.Ordinal)return String.fromCharCode(n+64);var a=parseInt(t,2);return r===o.default.FiveBitBinary?String.fromCharCode(a+64):r===o.default.EightBitBinary?String.fromCharCode(a):""},t.determineCharacterEncoding=function(t){if(t.match(/[a-z]/i))return o.default.Latin;var e=parseInt(t,10);if(e>0&&e<27)return o.default.Ordinal;if(e>64&&e<91)return o.default.Ascii;if(e>97&&e<123)return o.default.Ascii;for(var r=!0,n=0,a=t;n<a.length;n++){var u=a[n];"0"!==u&&"1"!==u&&(r=!1)}if(r){if(5===t.length)return o.default.FiveBitBinary;if(8===t.length)return o.default.EightBitBinary}return o.default.None},t}();e.default=n},389:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(362),u=r(364),i=r(390),d=r(368),s=d.default.Dot|d.default.Dash,l=function(t){function e(e,r){void 0===e&&(e=""),void 0===r&&(r=a.default.All);var o=t.call(this,i.default.instance,r)||this;return o._morse=e,o}return n(e,t),e.toMorseString=function(t){for(var e="";t!==d.default.None;){if((t&s)===d.default.Dot)e+=".";else{if((t&s)!==d.default.Dash)throw new Error("Invalid morse bits");e+="-"}t>>>=2}return e},e.parseMorseString=function(t){for(var e=d.default.None,r=t.length-1;r>=0;r--){var o=t[r];if("."===o)e|=d.default.Dot;else{if("-"!==o)throw new Error("Invalid morse character");e|=d.default.Dash}e<<=2}return e>>>=2},Object.defineProperty(e.prototype,"morseString",{get:function(){return this._morse},set:function(t){this._morse=t,this.invalidateLookup()},enumerable:!0,configurable:!0}),e.prototype.backspace=function(){this._morse.length>0&&(this._morse=this._morse.substring(0,this._morse.length-1),this.invalidateLookup())},e.prototype.dot=function(){this._morse+=".",this.invalidateLookup()},e.prototype.dash=function(){this._morse+="-",this.invalidateLookup()},e.prototype.onClear=function(){this._morse="",this.invalidateLookup()},e.prototype.onEmpty=function(){return 0===this._morse.length},e.prototype.getEncoding=function(){return e.parseMorseString(this._morse)},e}(u.default);e.default=l},390:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(362),u=r(365),i=r(368),d=function(t){function e(){var e=t.call(this)||this;return e.addToList(i.default.LetterA,a.default.Letter,"A"),e.addToList(i.default.LetterB,a.default.Letter,"B"),e.addToList(i.default.LetterC,a.default.Letter,"C"),e.addToList(i.default.LetterD,a.default.Letter,"D"),e.addToList(i.default.LetterE,a.default.Letter,"E"),e.addToList(i.default.LetterF,a.default.Letter,"F"),e.addToList(i.default.LetterG,a.default.Letter,"G"),e.addToList(i.default.LetterH,a.default.Letter,"H"),e.addToList(i.default.LetterI,a.default.Letter,"I"),e.addToList(i.default.LetterJ,a.default.Letter,"J"),e.addToList(i.default.LetterK,a.default.Letter,"K"),e.addToList(i.default.LetterL,a.default.Letter,"L"),e.addToList(i.default.LetterM,a.default.Letter,"M"),e.addToList(i.default.LetterN,a.default.Letter,"N"),e.addToList(i.default.LetterO,a.default.Letter,"O"),e.addToList(i.default.LetterP,a.default.Letter,"P"),e.addToList(i.default.LetterQ,a.default.Letter,"Q"),e.addToList(i.default.LetterR,a.default.Letter,"R"),e.addToList(i.default.LetterS,a.default.Letter,"S"),e.addToList(i.default.LetterT,a.default.Letter,"T"),e.addToList(i.default.LetterU,a.default.Letter,"U"),e.addToList(i.default.LetterV,a.default.Letter,"V"),e.addToList(i.default.LetterW,a.default.Letter,"W"),e.addToList(i.default.LetterX,a.default.Letter,"X"),e.addToList(i.default.LetterY,a.default.Letter,"Y"),e.addToList(i.default.LetterZ,a.default.Letter,"Z"),e.addToList(i.default.Number0,a.default.Number,"0"),e.addToList(i.default.Number1,a.default.Number,"1"),e.addToList(i.default.Number2,a.default.Number,"2"),e.addToList(i.default.Number3,a.default.Number,"3"),e.addToList(i.default.Number4,a.default.Number,"4"),e.addToList(i.default.Number5,a.default.Number,"5"),e.addToList(i.default.Number6,a.default.Number,"6"),e.addToList(i.default.Number7,a.default.Number,"7"),e.addToList(i.default.Number8,a.default.Number,"8"),e.addToList(i.default.Number9,a.default.Number,"9"),e.addToList(i.default.PunctuationPeriod,a.default.Punctuation,"."),e.addToList(i.default.PunctuationComma,a.default.Punctuation,","),e.addToList(i.default.PunctuationQuestionMark,a.default.Punctuation,"?"),e.addToList(i.default.PunctuationApostrophe,a.default.Punctuation,"'"),e.addToList(i.default.PunctuationExclamationPoint,a.default.Punctuation,"!"),e.addToList(i.default.PunctuationForwardSlash,a.default.Punctuation,"/"),e.addToList(i.default.PunctuationOpenParenthesis,a.default.Punctuation,"("),e.addToList(i.default.PunctuationCloseParenthesis,a.default.Punctuation,")"),e.addToList(i.default.PunctuationAmpersand,a.default.Punctuation,"&"),e.addToList(i.default.PunctuationColon,a.default.Punctuation,":"),e.addToList(i.default.PunctuationSemicolon,a.default.Punctuation,";"),e.addToList(i.default.PunctuationDoubleDash,a.default.Punctuation,"="),e.addToList(i.default.PunctuationPlusSign,a.default.Punctuation,"+"),e.addToList(i.default.PunctuationHyphen,a.default.Punctuation,"-"),e.addToList(i.default.PunctuationUnderscore,a.default.Punctuation,"_"),e.addToList(i.default.PunctuationQuotationMark,a.default.Punctuation,'"'),e.addToList(i.default.PunctuationDollarSign,a.default.Punctuation,"$"),e.addToList(i.default.PunctuationAtSign,a.default.Punctuation,"@"),e}return n(e,t),e.instance=new e,e}(u.default);e.default=d},391:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(362),u=r(364),i=r(392),d=r(376),s=r(369),l=r(375),f=function(t){function e(e,r){void 0===e&&(e=l.default.None),void 0===r&&(r=a.default.All);var o=t.call(this,i.default.instance,r)||this;return o._directions=[],o.addDirection(e),o}return n(e,t),e.parseEncoding=function(t){for(var e=[],r=1;r<=8;r++){var o=1<<r;(t&o)===o&&e.push(o)}return e},Object.defineProperty(e.prototype,"directions",{get:function(){return this._directions},set:function(t){this._directions=t.slice(0,2),this.invalidateLookup()},enumerable:!0,configurable:!0}),e.prototype.addDirection=function(t){for(var r=0,o=e.parseEncoding(t);r<o.length;r++){var n=o[r];this._directions.push(n)}this._directions.length>2&&this._directions.splice(0,this._directions.length-2),this.invalidateLookup()},e.prototype.removeDirection=function(t){for(var r=0,o=e.parseEncoding(t);r<o.length;r++){var n=o[r],a=this._directions.indexOf(n);a>=0&&this._directions.splice(a,1)}this.invalidateLookup()},e.prototype.hasDirection=function(t){return this._directions.indexOf(t)>=0},e.prototype.getDegrees=function(){return this._directions.map(function(t){return d.default.ToDegrees(t)}).sort(function(t,e){return t-e})},e.prototype.onClear=function(){this._directions.length=0},e.prototype.onEmpty=function(){return 0===this._directions.length},e.prototype.getEncoding=function(){return this._directions.reduce(function(t,e){return t|e},s.default.None)},e}(u.default);e.default=f},392:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var a=r(362),u=r(365),i=r(375),d=function(t){function e(){var e=t.call(this)||this;return e.addToList(i.default.LetterA,a.default.Letter,"A"),e.addToList(i.default.LetterB,a.default.Letter,"B"),e.addToList(i.default.LetterC,a.default.Letter,"C"),e.addToList(i.default.LetterD,a.default.Letter,"D"),e.addToList(i.default.LetterE,a.default.Letter,"E"),e.addToList(i.default.LetterF,a.default.Letter,"F"),e.addToList(i.default.LetterG,a.default.Letter,"G"),e.addToList(i.default.LetterH,a.default.Letter,"H"),e.addToList(i.default.LetterI,a.default.Letter,"I"),e.addToList(i.default.LetterJ,a.default.Letter,"J"),e.addToList(i.default.LetterK,a.default.Letter,"K"),e.addToList(i.default.LetterL,a.default.Letter,"L"),e.addToList(i.default.LetterM,a.default.Letter,"M"),e.addToList(i.default.LetterN,a.default.Letter,"N"),e.addToList(i.default.LetterO,a.default.Letter,"O"),e.addToList(i.default.LetterP,a.default.Letter,"P"),e.addToList(i.default.LetterQ,a.default.Letter,"Q"),e.addToList(i.default.LetterR,a.default.Letter,"R"),e.addToList(i.default.LetterS,a.default.Letter,"S"),e.addToList(i.default.LetterT,a.default.Letter,"T"),e.addToList(i.default.LetterU,a.default.Letter,"U"),e.addToList(i.default.LetterV,a.default.Letter,"V"),e.addToList(i.default.LetterW,a.default.Letter,"W"),e.addToList(i.default.LetterX,a.default.Letter,"X"),e.addToList(i.default.LetterY,a.default.Letter,"Y"),e.addToList(i.default.LetterZ,a.default.Letter,"Z"),e.addToList(i.default.Number1,a.default.Number,"1"),e.addToList(i.default.Number2,a.default.Number,"2"),e.addToList(i.default.Number3,a.default.Number,"3"),e.addToList(i.default.Number4,a.default.Number,"4"),e.addToList(i.default.Number5,a.default.Number,"5"),e.addToList(i.default.Number6,a.default.Number,"6"),e.addToList(i.default.Number7,a.default.Number,"7"),e.addToList(i.default.Number8,a.default.Number,"8"),e.addToList(i.default.Number9,a.default.Number,"9"),e.addToList(i.default.Number0,a.default.Number,"0"),e.addToList(i.default.FormattingNumber,a.default.Formatting,"#"),e}return n(e,t),e.instance=new e,e}(u.default);e.default=d},449:function(t,e,r){"use strict";var o,n=r(0),a=(r.n(n),r(147)),u=r(379),i=r(377),d=(r.n(i),r(450)),s=(r.n(d),this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})),l=function(t){function e(e){var r=t.call(this,e)||this;return r.state={text:""},r}return s(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this),this._input.focus()},e.prototype.render=function(){var t=this;return n.createElement("div",{className:"AutoConvertStream"},n.createElement(a.d,{className:"AutoConvertStream-input",inputRef:function(e){t._input=e},onChange:function(e){return t.onTextChanged(e)},placeholder:"Text",value:this.state.text}),this._converted,n.createElement(a.c,{className:"AutoConvertStream-commands"},n.createElement(a.b,null,n.createElement(a.a,{onClick:function(e){return t.onClearClick(e)}},"Clear"))))},e.prototype.getLocalStorageKey=function(){return"AutoConvertStream"},e.prototype.onSaveState=function(){return{text:this._str}},e.prototype.onRestoreState=function(t){null!==t&&(this._str=t.text)},e.prototype.onUpdateState=function(){this.updateConverted(),this.setState({text:this._str})},e.prototype.onTextChanged=function(t){var e=t.target;this._str=e.value,this.updateState()},e.prototype.onClearClick=function(t){this._str="",this.updateState()},e.prototype.updateConverted=function(){this._converted=this._str.split(" ").reduce(function(t,e){return t+i.CharacterAutoConvert.convertCharacter(e)},"")},e}(u.a);e.a=l},450:function(t,e,r){var o=r(451);"string"===typeof o&&(o=[[t.i,o,""]]);var n={hmr:!1,transform:void 0};r(351)(o,n);o.locals&&(t.exports=o.locals)},451:function(t,e,r){(t.exports=r(350)(!0)).push([t.i,".AutoConvertStream-commands .btn-group,.AutoConvertStream-input{margin-bottom:10px}","",{version:3,sources:["/home/travis/build/beckbria/puzztool/src/Conversion/AutoConversion/AutoConvertStream.css"],names:[],mappings:"AAIA,gEACE,kBAAoB,CACrB",file:"AutoConvertStream.css",sourcesContent:[".AutoConvertStream-input {\n  margin-bottom: 10px;\n}\n\n.AutoConvertStream-commands .btn-group {\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},452:function(t,e,r){var o=r(453);"string"===typeof o&&(o=[[t.i,o,""]]);var n={hmr:!1,transform:void 0};r(351)(o,n);o.locals&&(t.exports=o.locals)},453:function(t,e,r){(t.exports=r(350)(!0)).push([t.i,".AutoConvert-content{padding:0 15px 20px}","",{version:3,sources:["/home/travis/build/beckbria/puzztool/src/Views/Encoding/AutoConvert.css"],names:[],mappings:"AAAA,qBACE,mBAA4B,CAC7B",file:"AutoConvert.css",sourcesContent:[".AutoConvert-content {\r\n  padding: 0px 15px 20px 15px;\r\n}\r\n  "],sourceRoot:""}])}});
//# sourceMappingURL=7.67b9e4e7.chunk.js.map
"use strict";(self.webpackChunkmd_block=self.webpackChunkmd_block||[]).push([[6092],{6092:(e,t,n)=>{function r(e,t,n){return void 0===n&&(n=""),void 0===t&&(t="\\b"),new RegExp("^"+n+"(("+e.join(")|(")+"))"+t)}n.r(t),n.d(t,{julia:()=>E});var a=["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","\\.{2,3}","[\\.\\\\%*+\\-<>!\\/^|&]=?","\\?","\\$","~",":"],i=r(["[<>]:","[<>=]=","[!=]==","<<=?",">>>?=?","=>?","--?>","<--[->]?","\\/\\/","[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),s=/^[;,()[\]{}]/,u=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,o=r(["\\\\[0-7]{1,3}","\\\\x[A-Fa-f0-9]{1,2}","\\\\[abefnrtv0%?'\"\\\\]","([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])"],"'"),c=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],l=["true","false","nothing","NaN","Inf"],m=r(["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"]),f=r(["end","else","elseif","catch","finally"]),p=r(c),h=r(l),d=/^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,k=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,F=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/,b=r(a,"","@"),g=r(a,"",":");function v(e){return e.nestedArrays>0}function x(e,t){return void 0===t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function A(e,t){if(e.match("#=",!1))return t.tokenize=y,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r,a,o=e.peek();if("#"===o)return e.skipToEnd(),"comment";if("["===o&&(t.scopes.push("["),t.nestedArrays++),"("===o&&(t.scopes.push("("),t.nestedGenerators++),v(t)&&"]"===o){for(;t.scopes.length&&"["!==x(t);)t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(function(e){return e.nestedGenerators>0}(t)&&")"===o){for(;t.scopes.length&&"("!==x(t);)t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(v(t)){if("end"==t.lastToken&&e.match(":"))return"operator";if(e.match("end"))return"number"}if((r=e.match(m,!1))&&t.scopes.push(r[0]),e.match(f,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=z,t.tokenize(e,t);if(!n&&(e.match(k)||e.match(g)))return"builtin";if(e.match(i))return"operator";if(e.match(/^\.?\d/,!1)){var c=RegExp(/^im\b/),l=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(l=!0),e.match(/^0x[0-9a-f_]+/i)&&(l=!0),e.match(/^0b[01_]+/i)&&(l=!0),e.match(/^0o[0-7_]+/i)&&(l=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(l=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(l=!0),l)return e.match(c),t.leavingExpr=!0,"number"}if(e.match("'"))return t.tokenize=_,t.tokenize(e,t);if(e.match(F))return t.tokenize=('"""'===(a=e.current()).substr(-3)?a='"""':'"'===a.substr(-1)&&(a='"'),function(e,t){if(e.eat("\\"))e.next();else{if(e.match(a))return t.tokenize=A,t.leavingExpr=!0,"string";e.eat(/[`"]/)}return e.eatWhile(/[^\\`"]/),"string"}),t.tokenize(e,t);if(e.match(d)||e.match(b))return"meta";if(e.match(s))return null;if(e.match(p))return"keyword";if(e.match(h))return"builtin";var E=t.isDefinition||"function"==t.lastToken||"macro"==t.lastToken||"type"==t.lastToken||"struct"==t.lastToken||"immutable"==t.lastToken;return e.match(u)?E?"."===e.peek()?(t.isDefinition=!0,"variable"):(t.isDefinition=!1,"def"):(t.leavingExpr=!0,"variable"):(e.next(),"error")}function z(e,t){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?t.nestedParameters++:e.match("}")&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=A),"builtin"}function y(e,t){return e.match("#=")&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&(t.nestedComments--,0==t.nestedComments&&(t.tokenize=A)),"comment"}function _(e,t){var n,r=!1;if(e.match(o))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i))((a=parseInt(n[1],16))<=55295||a>=57344)&&(r=!0,e.next());else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var a;(a=parseInt(n[1],16))<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=A,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(t.tokenize=A),"error")}const E={startState:function(){return{tokenize:A,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,t,n){var r=0;return("]"===t||")"===t||/^end\b/.test(t)||/^else/.test(t)||/^catch\b/.test(t)||/^elseif\b/.test(t)||/^finally/.test(t))&&(r=-1),(e.scopes.length+r)*n.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:"#",block:{open:"#=",close:"=#"}},closeBrackets:{brackets:["(","[","{",'"']},autocomplete:c.concat(l)}}}}]);
"use strict";(self.webpackChunkmd_block=self.webpackChunkmd_block||[]).push([[8029],{8029:(t,e,a)=>{function r(t){var e=t.match(/^\s*\S/);return t.skipToEnd(),e?"error":null}a.r(e),a.d(e,{asciiArmor:()=>s});const s={token:function(t,e){var a;if("top"==e.state)return t.sol()&&(a=t.match(/^-----BEGIN (.*)?-----\s*$/))?(e.state="headers",e.type=a[1],"tag"):r(t);if("headers"==e.state){if(t.sol()&&t.match(/^\w+:/))return e.state="header","atom";var s=r(t);return s&&(e.state="body"),s}return"header"==e.state?(t.skipToEnd(),e.state="headers","string"):"body"==e.state?t.sol()&&(a=t.match(/^-----END (.*)?-----\s*$/))?a[1]!=e.type?"error":(e.state="end","tag"):t.eatWhile(/[A-Za-z0-9+\/=]/)?null:(t.next(),"error"):"end"==e.state?r(t):void 0},blankLine:function(t){"headers"==t.state&&(t.state="body")},startState:function(){return{state:"top",type:null}}}}}]);
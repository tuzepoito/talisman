webpackJsonp([14],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),l=a(r),u=n(14),d=n(20),o=a(d),i=n(363),c=a(i);(0,u.render)(l.default.createElement(o.default,{textarea:!0,flow:!1,tokenizer:c.default}),document.getElementById("naive-mount"))},19:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.value,n=void 0===t?"":t,a=e.placeholder,r=void 0===a?null:a,l=e.status,d=void 0===l?"default":l,o=e.onChange,i=void 0===o?Function.prototype:o,c=e.faded,f=void 0!==c&&c,s="bar-textarea";return"error"===d?s+=" error":"success"===d&&(s+=" success"),u.default.createElement("div",null,u.default.createElement("textarea",{placeholder:r,onChange:i,value:n,className:d+(f?" faded":"")}),u.default.createElement("span",{className:s}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(1),u=a(l)},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),u=n(13),d=n(12),o=a(d),i=n(19),c=a(i),f=(0,u.compose)((0,u.withState)("input","setInput",""),(0,u.withState)("training","setTraining",function(e){return e.training||""})),s=f(function(e){var t=e.tokenizer,n=e.input,a=e.setInput,r=e.training,u=e.setTraining,d=e.textarea,i=void 0!==d&&d,f=e.trained,s=void 0!==f&&f,v=e.flow,p=void 0===v||v,m=i?c.default:o.default,h=void 0;return h=s?n?t(r)(n):[]:n?t(n):[],l.default.createElement("div",{style:{width:"55%"}},l.default.createElement("div",null,s&&l.default.createElement(c.default,{placeholder:"Enter training text here...",value:r,onChange:function(e){return u(e.target.value)},faded:!0}),l.default.createElement(m,{placeholder:"Enter raw text here to test the tokenizer...",value:n,onChange:function(e){return a(e.target.value)}}),l.default.createElement("p",{style:{width:"100%"}},h.map(function(e){return p?l.default.createElement("span",{className:"token",style:{float:"left"}},e):l.default.createElement("div",{className:"token"},e)}))),l.default.createElement("div",{style:{clear:"both"}}))});t.default=s},363:function(e,t){"use strict";function n(e){return e.split(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=/(?:\r\n|\n\r|\n|\r)/;e.exports=t.default}});
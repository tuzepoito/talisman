webpackJsonp([15],{0:function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=s(1),a=i(n),l=s(14),r=s(11),u=i(r),c=s(351),o=i(c),d=s(352);(0,l.render)(a.default.createElement(u.default,{algorithm:o.default}),document.getElementById("porter-mount")),(0,l.render)(a.default.createElement(u.default,{algorithm:d.minimal}),document.getElementById("unine-minimal-mount")),(0,l.render)(a.default.createElement(u.default,{algorithm:d.complex}),document.getElementById("unine-complex-mount"))},11:function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),a=i(n),l=s(13),r=s(12),u=i(r),c=function(e){return e},o=function(e,t){return e===t},d=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),f=d(function(e){var t=e.algorithm,s=e.codeRenderer,i=void 0===s?c:s,n=e.comparator,l=void 0===n?o:n,r=e.wordOne,d=e.wordTwo,f=e.setWordOne,m=e.setWordTwo,h=r?t(r):null,g=d?t(d):null,v=h?i(h):"",b=g?i(g):"",p="·",w="default";return h&&g&&(console.log(h,g),l(h,g)?(p="=~",w="success"):(p="!~",w="error")),a.default.createElement("table",null,a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(u.default,{placeholder:"Word 1",value:r,onChange:function(e){return f(e.target.value)},status:w})),a.default.createElement("td",{style:{width:"15%",textAlign:"center"}},a.default.createElement("strong",null,p)),a.default.createElement("td",null,a.default.createElement(u.default,{placeholder:"Word 2",value:d,onChange:function(e){return m(e.target.value)},status:w}))),a.default.createElement("tr",null,a.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "),a.default.createElement("td",null),a.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},b," "))))});t.default=f},351:function(e,t){"use strict";function s(e){for(var t="",s="",i=0,n=e.length;i<n;i++)if(!r.has(e[i])&&r.has(e[i-1])){t=e.slice(i+1);break}for(var a=0,l=t.length;a<l;a++)if(!r.has(t[a])&&r.has(t[a-1])){s=t.slice(a+1);break}return[t,s]}function i(e){var t="";if(e.length>=2)if(/^(?:par|col|tap)/.test(e)||r.has(e[0])&&r.has(e[1]))t=e.slice(3);else for(var s=1,i=e.length;s<i;s++)if(r.has(e[s])){t=e.slice(s+1);break}return t}function n(e,t,s){return e.substring(0,t)+s+e.slice(t+1)}function a(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i="number"==typeof t?t:t.length;return e.slice(0,-i)+s}function l(e){e=e.toLowerCase();var t=!1,l=!1,x=!1,E=!1;e=e.replace(/qu/g,"qU");for(var I=1,z=e.length-1;I<z;I++){var q=e[I],y=e[I-1],W=e[I+1];("u"===q||"i"===q)&&r.has(y)&&r.has(W)?e=n(e,I,q.toUpperCase()):"y"===q&&(r.has(y)||r.has(W))&&(e=n(e,I,"Y"))}for(var k=s(e),S=k[0],U=k[1],_=i(e),O=e,C=0,M=u.length;C<M;C++){var T=u[C],j=U.includes(T);if(O.endsWith(T)){if("eaux"===T)O=O.slice(0,-1),t=!0;else if("euse"===T||"euses"===T)j?(O=O.slice(0,-T.length),t=!0):S.includes(T)&&(O=a(O,T,"eux"),t=!0);else if("ement"!==T&&"ements"!==T||!_.includes(T))"amment"===T&&_.includes(T)?(O=a(O,"amment","ant"),_=a(_,"amment","ant"),l=!0):"emment"===T&&_.includes(T)?(O=a(O,"emment","ent"),l=!0):"ment"!==T&&"ments"!==T||!_.includes(T)||_.startsWith(T)||!r.has(_[_.lastIndexOf(T)-1])?"aux"===T&&S.includes(T)?(O=a(O,2,"l"),t=!0):"issement"!==T&&"issements"!==T||!S.includes(T)||r.has(O.slice(-T.length-1)[0])?c.has(T)&&j?(O=O.slice(0,-T.length),t=!0):o.has(T)&&j?(O=O.slice(0,-T.length),t=!0,"ic"===O.slice(-2)&&(O=U.includes("ic")?O.slice(0,-2):a(O,2,"iqU"))):"logie"!==T&&"logies"!==T||!j?d.has(T)&&j?(O=a(O,T,"u"),t=!0):"ence"!==T&&"ences"!==T||!j?"ité"!==T&&"ités"!==T||!j?f.has(T)&&j&&(O=O.slice(0,-T.length),t=!0,"at"===O.slice(-2)&&U.includes("at")&&(O=O.slice(0,-2),"ic"===O.slice(-2)&&(O=U.includes("ic")?O.slice(0,-2):a(O,2,"iqU")))):(O=O.slice(0,-T.length),t=!0,"abil"===O.slice(-4)?O=U.includes("abil")?O.slice(0,-4):a(O,2,"l"):"ic"===O.slice(-2)?O=U.includes("ic")?O.slice(0,-2):a(O,2,"iqU"):"iv"===O.slice(-2)&&U.includes("iv")&&(O=O.slice(0,-2))):(O=a(O,T,"ent"),t=!0):(O=a(O,T,"log"),t=!0):(O=O.slice(0,-T.length),t=!0):(O=O.slice(0,-T.length),_=_.slice(0,-T.length),l=!0);else{O=O.slice(0,-T.length),t=!0;var A=O.slice(-3);"iv"===O.slice(-2)&&U.includes("iv")?(O=O.slice(0,-2),"at"===O.slice(-2)&&U.includes("at")&&(O=O.slice(0,-2))):"eus"===O.slice(-3)?U.includes("eus")?O=O.slice(0,-3):S.includes("eus")&&(O=a(O,1,"x")):"abl"===A||"iqU"===A?(U.includes("abl")||U.includes("iqU"))&&(O=O.slice(0,-3)):"ièr"!==A&&"Ièr"!==A||(_.includes("ièr")||_.includes("Ièr"))&&(O=a(O,3,"i"))}break}}if(!t||l){for(var B=0,P=m.length;B<P;B++){var $=m[B];if(O.endsWith($)){_.includes($)&&_.length>$.length&&!r.has(_[_.lastIndexOf($)-1])&&(O=O.slice(0,-$.length),x=!0);break}}if(!x)for(var L=0,Y=h.length;L<Y;L++){var J=h[L];if(_.endsWith(J)){"ions"===J&&U.includes("ions")?(O=O.slice(0,-4),E=!0):g.has(J)?(O=O.slice(0,-J.length),E=!0):v.has(J)&&(O=O.slice(0,-J.length),_=_.slice(0,-J.length),E=!0,_.endsWith("e")&&(O=O.slice(0,-1)));break}}}var R=O[O.length-1];if(t||x||E)"Y"===R?O=a(O,1,"i"):"ç"===R&&(O=a(O,1,"c"));else{O.length>=2&&"s"===R&&!p.has(O[O.length-2])&&(O=O.slice(0,-1));for(var D=0,F=b.length;D<F;D++){var G=b[D];if(O.endsWith(G)&&_.includes(G)){"ion"===G&&U.includes(G)&&"st".includes(_[_.length-4])?O=O.slice(0,-3):w.has(G)?O=a(O,G,"i"):"e"===G?O=O.slice(0,-1):"ë"===G&&"gu"===O.slice(-3,-1)&&(O=O.slice(0,-1));break}}}return/(?:enn|onn|ett|ell|eill)$/.test(O)&&(O=O.slice(0,-1)),O=O.replace(/[éè]([^aeiouyâàëéêèïîôûù]+)$/,"e$1"),O.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var r=new Set("aeiouyâàëéêèïîôûù"),u=["issements","issement","atrices","atrice","ateurs","ations","logies","usions","utions","ements","amment","emment","ances","iqUes","ismes","ables","istes","ateur","ation","logie","usion","ution","ences","ement","euses","ments","ance","iqUe","isme","able","iste","ence","ités","ives","eaux","euse","ment","eux","ité","ive","ifs","aux","if"],c=new Set(["ance","iqUe","isme","able","iste","eux","ances","iqUes","ismes","ables","istes"]),o=new Set(["atrice","ateur","ation","atrices","ateurs","ations"]),d=new Set(["usion","ution","usions","utions"]),f=new Set(["if","ive","ifs","ives"]),m=["issaIent","issantes","iraIent","issante","issants","issions","irions","issais","issait","issant","issent","issiez","issons","irais","irait","irent","iriez","irons","iront","isses","issez","îmes","îtes","irai","iras","irez","isse","ies","ira","ît","ie","ir","is","it","i"],h=["eraIent","assions","erions","assent","assiez","èrent","erais","erait","eriez","erons","eront","aIent","antes","asses","ions","erai","eras","erez","âmes","âtes","ante","ants","asse","ées","era","iez","ais","ait","ant","ée","és","er","ez","ât","ai","as","é","a"],g=new Set(["eraIent","erions","èrent","erais","erait","eriez","erons","eront","erai","eras","erez","ées","era","iez","ée","és","er","ez","é"]),v=new Set(["assions","assent","assiez","aIent","antes","asses","âmes","âtes","ante","ants","asse","ais","ait","ant","ât","ai","as","a"]),b=["ière","Ière","ion","ier","Ier","e","ë"],p=new Set("aiouès"),w=new Set(["ier","ière","Ier","Ière"]);e.exports=t.default},352:function(e,t){"use strict";function s(e,t,s){return e.substr(0,t)+s+e.substr(t+s.length)}function i(e,t){return e.substr(0,t)+e.substr(t+1)}function n(e,t,s){return!(s.length>t)&&e.slice(0,t).slice(-s.length)===s}function a(e){if(e.length<6)return e;var t=e.length;return"x"===e[t-1]?"a"===e[t-3]&&"u"===e[t-2]?e.slice(0,-2)+"l":e.slice(0,-1):("s"===e[t-1]&&t--,"r"===e[t-1]&&t--,"e"===e[t-1]&&t--,"é"===e[t-1]&&t--,e[t-1]===e[t-2]&&t--,e.slice(0,t))}function l(e,t){if(t>4){for(var a=0;a<t;a++)switch(e[a]){case"à":case"á":case"â":e=s(e,a,"a");break;case"ô":e=s(e,a,"o");break;case"è":case"é":case"ê":e=s(e,a,"e");break;case"ù":case"û":e=s(e,a,"u");break;case"î":e=s(e,a,"i");break;case"ç":e=s(e,a,"c")}for(var l=e[0],r=1;r<t;r++)e[r]===l&&/[^\W\d]/.test(l)?(e=i(e,r--),t--):l=e[r]}return t>4&&n(e,t,"ie")&&(t-=2),t>4&&("r"===e[t-1]&&t--,"e"===e[t-1]&&t--,"e"===e[t-1]&&t--,e[t-1]===e[t-2]&&/[^\W\d]/.test(e[t-1])&&t--),e.slice(0,t)}function r(e){var t=e.length,i=e;return t>5&&"x"===i[t-1]&&("a"===i[t-3]&&"u"===i[t-2]&&"e"!==i[t-4]&&(i=s(i,t-2,"l")),t--),t>3&&"x"===i[t-1]&&t--,t>3&&"s"===i[t-1]&&t--,t>9&&n(i,t,"issement")?(t-=6,i=s(i,t-1,"r"),l(i,t)):t>8&&n(i,t,"issant")?(t-=4,i=s(i,t-1,"r"),l(i,t)):t>6&&n(i,t,"ement")?(t-=4,t>3&&n(i,t,"ive")&&(t--,i=s(i,t-1,"f")),l(i,t)):t>11&&n(i,t,"ficatrice")?(t-=5,i=s(i,t-2,"e"),i=s(i,t-1,"r"),l(i,t)):t>10&&n(i,t,"ficateur")?(t-=4,i=s(i,t-2,"e"),i=s(i,t-1,"r"),l(i,t)):t>9&&n(i,t,"catrice")?(t-=3,i=s(i,t-4,"q"),i=s(i,t-3,"u"),i=s(i,t-2,"e"),l(i,t)):t>8&&n(i,t,"cateur")?(t-=2,i=s(i,t-4,"q"),i=s(i,t-3,"u"),i=s(i,t-2,"e"),i=s(i,t-1,"r"),l(i,t)):t>8&&n(i,t,"atrice")?(t-=4,i=s(i,t-2,"e"),i=s(i,t-1,"r"),l(i,t)):t>7&&n(i,t,"ateur")?(t-=3,i=s(i,t-2,"e"),i=s(i,t-1,"r"),l(i,t)):(t>6&&n(i,t,"trice")&&(t--,i=s(i,t-3,"e"),i=s(i,t-2,"u"),i=s(i,t-1,"r")),t>5&&n(i,t,"ième")?l(i,t-4):t>7&&n(i,t,"teuse")?(t-=2,i=s(i,t-1,"r"),l(i,t)):t>6&&n(i,t,"teur")?(t--,i=s(i,t-1,"r"),l(i,t)):t>5&&n(i,t,"euse")?l(i,t-2):t>8&&n(i,t,"ère")?(t--,i=s(i,t-2,"e"),l(i,t)):t>7&&n(i,t,"ive")?(t--,i=s(i,t-1,"f"),l(i,t)):t>4&&(n(i,t,"folle")||n(i,t,"molle"))?(t-=2,i=s(i,t-1,"u"),l(i,t)):t>9&&n(i,t,"nnelle")?l(i,t-5):t>9&&n(i,t,"nnel")?l(i,t-3):(t>4&&n(i,t,"ète")&&(t--,i=s(i,t-2,"e")),t>8&&n(i,t,"ique")&&(t-=4),t>8&&n(i,t,"esse")?l(i,t-3):t>7&&n(i,t,"inage")?l(i,t-3):t>9&&n(i,t,"isation")?(t-=7,t>5&&n(i,t,"ual")&&(i=s(i,t-2,"e")),l(i,t)):t>9&&n(i,t,"isateur")?l(i,t-7):t>8&&n(i,t,"ation")?l(i,t-5):t>8&&n(i,t,"ition")?l(i,t-5):l(i,t)))}Object.defineProperty(t,"__esModule",{value:!1}),t.minimal=a,t.complex=r,t.default=a,e.exports=t.default,t.default.minimal=t.minimal,t.default.complex=t.complex}});
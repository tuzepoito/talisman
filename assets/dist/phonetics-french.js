webpackJsonp([5],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=r(o),i=n(14),E=n(11),a=r(E),g=n(340),l=r(g),s=n(341),c=r(s),f=n(342),I=r(f),A=n(343),O=r(A),N=n(344),$=r(N);(0,i.render)(u.default.createElement(a.default,{algorithm:l.default}),document.getElementById("phonetic-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:c.default}),document.getElementById("phonex-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:I.default}),document.getElementById("sonnex-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:O.default}),document.getElementById("soundex-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:$.default}),document.getElementById("soundex2-mount"))},5:function(e,t,n){"use strict";var r=n(15),o=r.Symbol;e.exports=o},6:function(e,t,n){"use strict";function r(e){return e=u(e),e&&e.replace(i,o).replace(c,"")}var o=n(34),u=n(29),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,E="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",g="\\u20d0-\\u20ff",l=E+a+g,s="["+l+"]",c=RegExp(s,"g");e.exports=r},7:function(e,t){"use strict";function n(e,t){var n=[];if(!e.global){var r=e.exec(t);return r&&n.push(r),n}for(var o=void 0;o=e.exec(t);)n.push(o);return e.lastIndex=0,n}function r(e){return"string"==typeof e?e.split(""):e}function o(e){for(var t="string"==typeof e,n=r(e),o=[n[0]],u=1,i=n.length;u<i;u++)n[u]!==n[u-1]&&o.push(n[u]);return t?o.join(""):o}function u(e,t){var n={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var r=0,o=e.length;r<o;r++)n[e[r]]=t[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=n,t.seq=r,t.squeeze=o,t.translation=u},11:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(13),E=n(12),a=r(E),g=function(e){return e},l=function(e,t){return e===t},s=(0,i.compose)((0,i.withState)("wordOne","setWordOne",""),(0,i.withState)("wordTwo","setWordTwo","")),c=s(function(e){var t=e.algorithm,n=e.codeRenderer,r=void 0===n?g:n,o=e.comparator,i=void 0===o?l:o,E=e.wordOne,s=e.wordTwo,c=e.setWordOne,f=e.setWordTwo,I=E?t(E):null,A=s?t(s):null,O=I?r(I):"",N=A?r(A):"",$="·",S="default";return I&&A&&(console.log(I,A),i(I,A)?($="=~",S="success"):($="!~",S="error")),u.default.createElement("table",null,u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("td",null,u.default.createElement(a.default,{placeholder:"Word 1",value:E,onChange:function(e){return c(e.target.value)},status:S})),u.default.createElement("td",{style:{width:"15%",textAlign:"center"}},u.default.createElement("strong",null,$)),u.default.createElement("td",null,u.default.createElement(a.default,{placeholder:"Word 2",value:s,onChange:function(e){return f(e.target.value)},status:S}))),u.default.createElement("tr",null,u.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},O," "),u.default.createElement("td",null),u.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},N," "))))});t.default=c},15:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(23),u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,i=o||u||Function("return this")();e.exports=i},18:function(e,t,n){"use strict";function r(e){return null==e?void 0===e?a:E:g&&g in Object(e)?u(e):i(e)}var o=n(5),u=n(24),i=n(25),E="[object Null]",a="[object Undefined]",g=o?o.toStringTag:void 0;e.exports=r},21:function(e,t){"use strict";function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},22:function(e,t,n){"use strict";function r(e){if("string"==typeof e)return e;if(i(e))return u(e,r)+"";if(E(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-a?"-0":t}var o=n(5),u=n(21),i=n(26),E=n(28),a=1/0,g=o?o.prototype:void 0,l=g?g.toString:void 0;e.exports=r},23:function(e,t){(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="object"==("undefined"==typeof t?"undefined":n(t))&&t&&t.Object===Object&&t;e.exports=r}).call(t,function(){return this}())},24:function(e,t,n){"use strict";function r(e){var t=i.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var o=E.call(e);return r&&(t?e[a]=n:delete e[a]),o}var o=n(5),u=Object.prototype,i=u.hasOwnProperty,E=u.toString,a=o?o.toStringTag:void 0;e.exports=r},25:function(e,t){"use strict";function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},26:function(e,t){"use strict";var n=Array.isArray;e.exports=n},27:function(e,t){"use strict";function n(e){return null!=e&&"object"==("undefined"==typeof e?"undefined":r(e))}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=n},28:function(e,t,n){"use strict";function r(e){return"symbol"==("undefined"==typeof e?"undefined":o(e))||i(e)&&u(e)==E}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(18),i=n(27),E="[object Symbol]";e.exports=r},29:function(e,t,n){"use strict";function r(e){return null==e?"":o(e)}var o=n(22);e.exports=r},33:function(e,t){"use strict";function n(e){return function(t){return null==e?void 0:e[t]}}e.exports=n},34:function(e,t,n){"use strict";var r=n(33),o={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},u=r(o);e.exports=u},340:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/(.)\1/g,"$1")}function u(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/phonetic: the given word is not a string.");e=e.toUpperCase().replace(/Œ/g,"OEU").replace(/Æ/g,"E").replace(/Ç/g,"S"),e=(0,E.default)(e).replace(/[^A-Z]/g,"");for(var t=e,n=0,r=a.length;n<r;n++){var u=a[n],i=u[0],O=u[1];t=t.replace(i,O)}t=o(t);var N=f[t];if(N)return N;for(var $=0,S=g.length;$<S;$++){var d=g[$],i=d[0],O=d[1];t=t.replace(i,O)}for(var p=0,U=l.length;p<U;p++){var T=l[p],i=T[0],O=T[1];t=t.replace(i,O)}for(var C=0,y=s.length;C<y;C++){var m=s[C],i=m[0],O=m[1];t=t.replace(i,O)}for(var R=t,h=0,L=c.length;h<L;h++){var K=c[h],i=K[0],O=K[1];t=t.replace(i,O)}if(t=o(t),"FUEL"===t&&(t="FIOUL"),"O"===t)return t;if(t.length<2){if(I.test(e))return e;if(A.test(e)&&(3===e.length||4===e.length))return e.slice(0,-1);if(R.length>1)return R}return t.length>1?t:""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=n(6),E=r(i),a=[[/O[O]+/g,"OU"],[/SAOU/g,"SOU"],[/OES/g,"OS"],[/CCH/g,"K"],[/CC([IYE])/g,"KS$1"]],g=[[/OIN[GT]$/g,"OIN"],[/E[RS]$/g,"E"],[/(C|CH)OEU/g,"KE"],[/MOEU/g,"ME"],[/OE([UI]+)([BCDFGHJKLMNPQRSTVWXZ])/g,"E$1$2"],[/^GEN[TS]$/,"JAN"],[/CUEI/g,"KEI"],[/([^AEIOUYC])AE([BCDFGHJKLMNPQRSTVWXZ])/g,"$1E$2"],[/AE([QS])/g,"E$1"],[/AIE([BCDFGJKLMNPQRSTVWXZ])/g,"AI$1"],[/ANIEM/g,"ANIM"],[/(DRA|TRO|IRO)P$/,"$1"],[/(LOM)B$/,"$1"],[/(RON|POR)C$/,"$1"],[/PECT$/,"PET"],[/ECUL$/,"CU"],[/(CHA|CA|E)M(P|PS)$/,"$1N"],[/(TAN|RAN)G$/,"$1"]],l=[[/([^VO])ILAG/g,"$1IAJ"],[/([^TRH])UIL(AR|E)(.+)/g,"$1UI$2$3"],[/([G])UIL([AEO])/g,"$1UI$2"],[/([NSPM])AIL([AEO])/g,"$1AI$2"],[/DIL(AI|ON|ER|EM)/g,"DI$1"],[/RILON/g,"RION"],[/TAILE/g,"TAIE"],[/GAILET/g,"GAIET"],[/AIL(A[IR])/g,"AI$1"],[/OUILA/g,"OUIA"],[/EIL(AI|AR|ER|EM)/g,"AI$1"],[/REILET/g,"RAIET"],[/EILET/g,"EIET"],[/AILOL/g,"AIOL"],[/([^AEIOUY])(SC|S)IEM([EA])/g,"$1$2IAM$3"],[/^(SC|S)IEM([EA])/g,"$1IAM$2"],[/([OAI])MB/g,"$1NB"],[/([OA])MP/g,"$1NP"],[/GEMB/g,"JANB"],[/EM([BP])/g,"AN$1"],[/UMBL/g,"INBL"],[/CIEN/g,"SIAN"],[/^ECEUR/,"EKEUR"],[/^CH(OG+|OL+|OR+|EU+|ARIS|M+|IRO|ONDR)/,"K$1"],[/(YN|RI)CH(OG+|OL+|OC+|OP+|OM+|ARIS|M+|IRO|ONDR)/g,"$1K$2"],[/CHS/g,"CH"],[/CH(AIQ)/g,"K$1"],[/^ECHO([^UIPY])/,"EKO$1"],[/ISCH(I|E)/g,"ISK$1"],[/^ICHT/,"IKT"],[/ORCHID/g,"ORKID"],[/ONCHIO/g,"ONKIO"],[/ACHIA/g,"AKIA"],[/([^C])ANICH/g,"$1ANIK"],[/OMANIK/g,"OMANICH"],[/ACHY([^D])/g,"AKI$1"],[/([AEIOU])C([BDFGJKLMNPQRTVWXZ])/g,"$1K$2"],[/EUCHA/g,"EKA"],[/YCH(IA|A|O|ED)/g,"IK$1"],[/([AR])CHEO/g,"$1KEO"],[/RCHES/g,"RKES"],[/ECHN/g,"EKN"],[/OCHTO/g,"OKTO"],[/CHO(RA|NDR|RE)/g,"KO$1"],[/MACHM/g,"MAKM"],[/BRONCHO/g,"BRONKO"],[/LICHO([SC])/g,"LIKO$1"],[/WA/g,"OI"],[/WO/g,"O"],[/(?:WI|WHI|WHY)/g,"OUI"],[/WHA/g,"OUA"],[/WHO/g,"OU"],[/GNE([STR])/g,"NIE$1"],[/GNE/g,"NE"],[/GI/g,"JI"],[/GNI/g,"NI"],[/GN(A|OU|UR)/g,"NI$1"],[/GY/g,"JI"],[/OUGAIN/g,"OUGIN"],[/AGEO([LT])/g,"AJO$1"],[/GEORG/g,"JORJ"],[/GEO(LO|M|P|G|S|R)/g,"JEO$1"],[/([NU])GEOT/g,"$1JOT"],[/GEO([TDC])/g,"JEO$1"],[/GE([OA])/g,"J$1"],[/GE/g,"JE"],[/QU?/g,"K"],[/C[YI]/g,"SI"],[/CN/g,"KN"],[/ICM/g,"IKM"],[/CEAT/g,"SAT"],[/CE/g,"SE"],[/C([RO])/g,"K$1"],[/CUEI/g,"KEI"],[/CU/g,"KU"],[/VENCA/g,"VANSA"],[/C([AS])/g,"K$1"],[/CLEN/g,"KLAN"],[/C([LZ])/g,"K$1"],[/CTIQ/g,"KTIK"],[/CTI[CS]/g,"KTIS"],[/CTI([FL])/g,"KTI$1"],[/CTIO/g,"KSIO"],[/CT([IUEOR])?/g,"KT$1"],[/PH/g,"F"],[/TH/g,"T"],[/OW/g,"OU"],[/LH/g,"L"],[/RDL/g,"RL"],[/CH(LO|R)/g,"K$1"],[/PTIA/g,"PSIA"],[/GU([^RLMBSTPZN])/g,"G$1"],[/GNO(?=[MLTNRKG])/g,"NIO"],[/BUTI([EA])/g,"BUSI$1"],[/BATIA/g,"BASIA"],[/ANTIEL/g,"ANSIEL"],[/RETION/g,"RESION"],[/ENTI([EA])L/g,"ENSI$1L"],[/ENTIO/g,"ENSIO"],[/ENTIAI/g,"ENSIAI"],[/UJETION/g,"UJESION"],[/ATIEM/g,"ASIAM"],[/PETIEN/g,"PESIEN"],[/CETIE/g,"CESIE"],[/OFETIE/g,"OFESIE"],[/IPETI/g,"IPESI"],[/LBUTION/g,"LBUSION"],[/BLUTION/g,"BLUSION"],[/L([EA])TION/g,"L$1SION"],[/SATIET/g,"SASIET"],[/(.+)ANTI(AL|O)/g,"$1ANSI$2"],[/(.+)INUTI([^V])/g,"$1INUSI$2"],[/([^O])UTIEN/g,"$1USIEN"],[/([^DE])RATI([E])$/,"$1RASI$2"],[/([^SNEU]|KU|KO|RU|LU|BU|TU|AU)T(IEN|ION)/g,"$1S$2"],[/([^CS])H/g,"$1"],[/([EN])SH/g,"$1S"],[/SH/g,"CH"],[/OMT/g,"ONT"],[/IM([BP])/g,"IN$1"],[/UMD/g,"OND"],[/([TRD])IENT/g,"$1IANT"],[/IEN/g,"IN"],[/YM([UOAEIN])/g,"IM$1"],[/YM/g,"IN"],[/AHO/g,"AO"],[/([FDS])AIM/g,"$1IN"],[/EIN/g,"AIN"],[/AINS/g,"INS"],[/AIN$/,"IN"],[/AIN([BTDK])/g,"IN$1"],[/([^O])UND/g,"$1IND"],[/([JTVLFMRPSBD])UN([^IAE])/g,"$1IN$2"],[/([JTVLFMRPSBD])UN$/,"$1IN"],[/RFUM$/,"RFIN"],[/LUMB/g,"LINB"],[/([^BCDFGHJKLMNPQRSTVWXZ])EN/g,"$1AN"],[/([VTLJMRPDSBFKNG])EN(?=[BRCTDKZSVN])/g,"$1AN"],[/^EN([BCDFGHJKLNPQRSTVXZ]|CH|IV|ORG|OB|UI|UA|UY)/,"AN$1"],[/(^[JRVTH])EN([DRTFGSVJMP])/,"$1AN$2"],[/SEN([ST])/g,"SAN$1"],[/^DESENIV/g,"DESANIV"],[/([^M])EN(U[IY])/g,"$1AN$2"],[/(.+[JTVLFMRPSBD])EN([JLFDSTG])/g,"$1AN$2"],[/([VSBSTNRLPM])E[IY]([ACDFRJLGZ])/g,"$1AI$2"],[/EAU/g,"O"],[/EU/g,"E"],[/Y/g,"I"],[/EOI/g,"OI"],[/JEA/g,"JA"],[/OIEM/g,"OIM"],[/OUANJ/g,"OUENJ"],[/OUA/g,"OI"],[/OUENJ/g,"OUANJ"],[/AU([^E])/g,"O$1"],[/^BENJ/,"BINJ"],[/RTIEL/g,"RSIEL"],[/PINK/g,"PONK"],[/KIND/g,"KOND"],[/KUM(N|P)/g,"KON$1"],[/LKOU/g,"LKO"],[/EDBE/g,"EBE"],[/ARCM/g,"ARKM"],[/SCH/g,"CH"],[/^OINI/,"ONI"],[/([^NDCGRHKO])APT/g,"$1AT"],[/([L]|KON)PT/g,"$1T"],[/OTB/g,"OB"],[/IXA/g,"ISA"],[/TG/g,"G"],[/^TZ/,"TS"],[/PTIE/g,"TIE"],[/GT/g,"T"],[/ANKIEM/g,"ANKILEM"],[/(LO|RE)KEMAN/g,"$1KAMAN"],[/NT(B|M)/g,"N$1"],[/GSU/g,"SU"],[/ESD/g,"ED"],[/LESKEL/g,"LEKEL"],[/CK/g,"K"]],s=[[/USIL$/,"USI"],[/X$|[TD]S$|[DS]$/,""],[/([^KL]+)T$/,"$1"],[/^[H]/,""]],c=[[/TIL$/,"TI"],[/LC$/,"LK"],[/L[E]?[S]?$/,"L"],[/(.+)N[E]?[S]?$/,"$1N"],[/EZ$/,"E"],[/OIG$/,"OI"],[/OUP$/,"OU"],[/([^R])OM$/,"$1ON"],[/LOP$/,"LO"],[/NTANP$/,"NTAN"],[/TUN$/,"TIN"],[/AU$/,"O"],[/EI$/,"AI"],[/R[DG]$/,"R"],[/ANC$/,"AN"],[/KROC$/,"KRO"],[/HOUC$/,"HOU"],[/OMAC$/,"OMA"],[/([J])O([NU])[CG]$/,"$1O$2"],[/([^GTR])([AO])NG$/,"$1$2N"],[/UC$/,"UK"],[/AING$/,"IN"],[/([EISOARN])C$/,"$1K"],[/([ABD-MO-Z]+)[EH]+$/,"$1"],[/EN$/,"AN"],[/(NJ)EN$/,"$1AN"],[/^PAIEM/,"PAIM"],[/([^NTB])EF$/,"$1"]],f={CD:"CD",BD:"BD",BV:"BV",TABAC:"TABA",FEU:"FE",FE:"FE",FER:"FER",FIEF:"FIEF",FJORD:"FJORD",GOAL:"GOL",FLEAU:"FLEO",HIER:"IER",HEU:"E",HE:"E",OS:"OS",RIZ:"RI",RAZ:"RA",ECHO:"EKO"},I=/[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ]*/,A=/[RFMLVSPJDF][AEIOU]/;e.exports=t.default},341:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/phonex: the given word is not a string.");e=e.toUpperCase();for(var t="",n=0,o=e.length;n<o;n++){var g=e.charAt(n);t+=i[g]||g}t=t.replace(/[^A-Z]/g,"");for(var l=0,s=a.length;l<s;l++){var c;t=(c=t).replace.apply(c,r(a[l]))}var f=t;t="";for(var I=0,A=f.length;I<A;I++){var O=f.charAt(I);t+=E[O]||O}return t=(0,u.squeeze)(t),t=t.replace(/[TX]$/,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),i=(0,u.translation)("ÀÂÄÃÉÈÊËÌÎÏÒÔÖÕÙÛÜÑ","AAAAYYYYIIIOOOOUUUN"),E=(0,u.translation)("ADPJBVM","OTTGFFN"),a=[[/Y/g,"I"],[/([^PCS])H/g,"$1"],[/PH/g,"F"],[/G(AI?[NM])/g,"K$1"],[/[AE]I[NM]([AEIOU])/g,"YN$1"],[/EAU/,"O"],[/OUA/,"2"],[/[EA]I[NM]/g,"4"],[/[EA]I/g,"Y"],[/E([RTZ])/g,"Y$1"],[/ESS/g,"YS"],[/[AOE]N([^AEIOU1234])/g,"1$1"],[/[AE]M([^AEIOU1234])/g,"1$1"],[/IN([^AEIOU1234])/g,"4$1"],[/([AEIOUY1234])S([AEIOUY1234])/g,"$1Z$2"],[/(?:OE|EU)/g,"E"],[/AU/g,"O"],[/O[IY]/g,"2"],[/OU/g,"3"],[/(?:SCH|CH|SH)/g,"5"],[/S[CS]/g,"S"],[/C([EI])/,"S$1"],[/(?:GU|QU|Q|C)/g,"K"],[/G([AOY])/g,"K$1"]];e.exports=t.default},342:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return i.has(e)}function o(e){return E.has(e)}function u(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/sonnex: the given word is not a string.");e=e.toLowerCase().replace(g,"").replace(/œ/g,"oe");var t=l[e];if(t)return t;var r=e,o="";for(/^tien/.test(r)&&(r=r.slice(1),o="t");r.length;){var u=r[0],i=s[u];if(i){for(var E=!1,a=0,c=i.length;a<c;a++){var f=i[a][0],I=i[a][1];if("string"!=typeof f){var A=r.match(f);if(A){if(E=!0,"string"==typeof I)r=A[1]||"";else{var O=I.apply(void 0,n(A.slice(1)));I=O[0],r=O[1]}o+=I;break}}else if(r===f){E=!0,o+=I,r="";break}}E||(o+=u,r=r.slice(1))}else o+=u,r=r.slice(1)}return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=new Set("aâàäeéèêëiîïoôöuùûüyœ"),E=new Set("bcçdfghjklmnpqrstvwxyz"),a="’‘`‛'",g=new RegExp("["+a+"]","g"),l={cerf:"sEr",cerfs:"sEr",de:"de",est:"E",es:"E",huit:"uit",les:"lE",mer:"mEr",mes:"mE",ressent:"res2",serf:"sEr",serfs:"sEr",sept:"sEt","septième":"sEtiEm",ses:"sE",tes:"tE",eschatologie:"Eskatoloji"},s={a:[["a","a"],["aient","E"],["ain","1"],[/ain(.)(.*)$/,function(e,t){return r(e)?["E",e+t]:["1",e+t]}],["ais","E"],[/^ais(.)(.*)/,function(e,t){return"s"===e?["Es",t]:r(e)?["Ez",e+t]:["Es",e+t]}],["ail","ai"],[/^aill(.*)/,"ai"],[/^ai(.*)/,"E"],[/^amm(.*)/,"am"],[/^am(.)(.*)/,function(e,t){return"m"===e?["am",t]:r(e)?["am",e+t]:["2",e+t]}],["an","2"],[/^an(.)(.*)/,function(e,t){return"n"===e?["an",t]:r(e)?["an",e+t]:["2",e+t]}],["assent","as"],[/^as(.)(.*)/,function(e,t){return"s"===e?["as",t]:o(e)?["as",e+t]:["az",e+t]}],[/^au(.*)/,function(e){return["o",e]}],["ay","E"],["ays","E"]],"à":[[/^à(.*)/,"a"]],"â":[[/^â(.*)/,"a"]],b:[["b",""],[/^bb(.*)/,"b"]],c:[["c",""],[/^c(a.*)/,"k"],[/^cc(.)(.*)/,function(e,t){return"o"===e||"u"===e?["k",e+t]:["ks",t]}],[/^c(e.*)/,"s"],[/^c'(.*)/,"s"],[/^chiro([^u].*)/,"kiro"],[/^ch(ao.*)/,"k"],[/^chl(.*)/,"kl"],[/^ch(oe.*)/,"k"],[/^chr(.*)/,"kr"],[/^ch(.*)/,"C"],[/^c(i.*)/,"s"],[/^ck(.*)/,"k"],[/^c(oeu.*)/,"k"],[/^compt(.*)/,"k3t"],[/^c(o.*)/,"k"],[/^cue(i.*)/,"ke"],[/^c(u.*)/,"k"],[/^c(y.*)/,"s"],[/^c(.*)/,"k"]],"ç":[[/^ç(.*)/,"s"]],d:[["d",""],["ds",""],[/^dd(.*)/,"d"]],e:[["e",""],["ec","Ec"],["ef","Ef"],["eaux","o"],[/^eann(.*)/,"an"],[/^ean(.*)/,"2"],[/^eau(.*)/,"o"],[/^eff(.*)/,"Ef"],[/^e(gm.*)/,"E"],["ein","1"],[/^ein(.)(.*)/,function(e,t){return"n"===e?["En",t]:r(e)?["En",e+t]:["1",e+t]}],[/^ei(.*)/,"E"],[/^ell(.*)/,"El"],[/^el(.)(.*)/,function(e,t){return o(e)?["E","l"+e+t]:["e","l"+e+t]}],[/^emm(.*)/,"Em"],[/^emp(.)(.*)/,function(e,t){return"h"===e?["2","p"+e+t]:r(e)||t?["2p",e+t]:["2",t]}],[/^enn(.*)/,"En"],["en","2"],[/^en(.)(.*)/,function(e,t){return r(e)?["en",e+t]:["2",e+t]}],["er","E"],["ert","Er"],[/^err(.*)/,"Er"],[/^er(f.*)/,"Er"],["es",""],[/^esch(.*)/,"EC"],["essent","Es"],[/^es(.)(.*)/,function(e,t){return"h"===e||"n"===e?["E",e+t]:"s"===e?["Es",t]:o(e)?["Es",e+t]:["ez",e+t]}],[/^és(.)(.*)/,function(e,t){return"s"===e?["Es",t]:o(e)?["Es",e+t]:["Ez",e+t]}],[/^ett(.*)/,"Et"],["et","E"],[/^et(.*)/,"et"],[/^eun(.)(.*)/,function(e,t){return r(e)?["en",e+t]:["1",e+t]}],["eux","e"],[/^eux(i.*)/,"ez"],[/^eu(.*)/,"e"],["ex","Eks"],[/^ey(.)(.*)/,function(e,t){return o(e)?["E",e+t]:["E","y"+e+t]}],["ez","E"]],"è":[[/^è(.*)/,"E"]],"ê":[[/ê(.*)/,"E"]],"ë":[[/^ë(l.*)/,"E"]],"é":[["é","E"],[/^é(.)(.*)/,function(e,t){return"t"===e?["Et",t]:["E",e+t]}]],f:[[/^ff(.*)/,"f"]],g:[["g",""],[/^g(e.*)/,"j"],[/^gé(.*)/,"jE"],[/^g(i.*)/,"j"],[/^gn(.*)/,"n"],[/^g(y.*)/,"j"],[/^guë(.*)/,"gu"],[/^gu(.*)/,"g"],[/^gg(.*)/,"g"]],h:[[/^h(.*)/,""]],i:[["ic","ik"],["ics","ik"],[/^ienn(.*)/,"iEn"],[/^ien(.*)/,"i1"],["in","1"],[/^in(.)(.*)/,function(e,t){return"n"===e?["in",t]:r(e)?["in",e+t]:["1",e+t]}],["issent","is"],[/^is(.)(.*)/,function(e,t){return"s"===e?["is",t]:o(e)?["is",e+t]:["iz",e+t]}],[/^ix(i.*)/,"iz"],[/^ill(.*)/,"i"],[/^i(.*)/,"i"]],"ï":[[/^ï(.*)/,"i"]],l:[[/^ll(.*)/,"l"]],m:[[/^mm(.*)/,"m"]],n:[[/^nn(.*)/,"n"]],o:[[/^occ(.*)/,"ok"],[/^oeu?(.*)/,"e"],["oient","Ua"],[/^oin(.*)/,"U1"],[/^oi(.*)/,"Ua"],[/^omm(.*)/,"om"],[/^om(.)(.*)/,function(e,t){return r(e)?["om",e+t]:["3",e+t]}],[/^onn(.*)/,"on"],[/^on(.*)/,"3"],["ossent","os"],[/^os(.)(.*)/,function(e,t){return"s"===e?["os",t]:o(e)?["os",e+t]:["oz",e+t]}],[/^o[uùû](.*)/,"U"]],"ô":[[/^ô(.*)/,"o"]],"ö":[[/^ô(.*)/,"o"]],p:[["p",""],[/^ph(.*)/,"f"],[/^pp(.*)/,"p"],[/^pays(.*)/,function(e){return["pE","is"+e]}]],q:[[/^qu(r.*)/,"ku"],[/^qu(.*)/,"k"],[/^q(.*)/,"k"]],r:[[/^rr(.*)/,"r"]],s:[["s",""],[/^ss(.*)/,"s"],[/^st(.*)/,"st"],[/^sc(i.*)/,"s"]],t:[["t",""],[/^t(ier.*)/,"t"],[/^ti(.)(.*)/,function(e,t){return r(e)?["s","i"+e+t]:["t","i"+e+t]}],[/^tt(.*)/,"t"]],u:[["un","1"],["ussent","us"],[/^us(.*)/,function(e,t){return"s"===e?["us",t]:o(e)?["us",e+t]:["uz",e+t]}]],"û":[[/^û(.*)/,"u"]],w:[[/^w(.*)/,"v"]],x:[["x",""],[/^x(.)(.*)/,function(e,t){return"c"===e?["ks",t]:r(e)?["kz",e+t]:["ks",e+t]}]],y:[[/^y(.*)/,"i"]],z:[[/^zz(.*)/,"z"]]};e.exports=t.default},343:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(e+"0000").slice(0,4)}function u(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/soundex: the given name is not a string.");e=e.toUpperCase().replace(/Ç/g,"S").replace(/Œ/g,"E"),e=(0,E.default)(e).replace(/[^A-Z]/g,"");for(var t=e.charAt(0),n="",r=1,u=e.length;r<u;r++)"D"!==g[e[r]]&&(n+=g[e[r]]);n.charAt(0)===g[t]&&(n=n.slice(1));var i=(0,a.squeeze)(n).replace(/0/g,"");return o(t+i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=n(6),E=r(i),a=n(7),g=(0,a.translation)("AEIOUYWHBPCKQDTLMNRGJSXZFV","000000DD112223345567788899");e.exports=t.default},344:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){return e.slice(0,4)}function i(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/soundex2: the given name is not a string.");for(var t=(0,a.default)(e.trim()).toUpperCase().replace(/[^A-Z]/,""),n=0,r=l.length;n<r;n++){var i;t=(i=t).replace.apply(i,o(l[n]))}t=t.charAt(0)+t.slice(1).replace(/[AEIOU]/g,"A");for(var E=0,c=s.length;E<c;E++){var f=s[E],I=f[0],A=f[1],O=I.length;t.slice(0,O)===I&&(t=A+t.slice(O))}return t=t.replace(/([^CS])H/g,"$1"),t=t.replace(/([^A])Y/g,"$1"),t=t.replace(/[ADTS]$/,""),t=t.charAt(0)+t.slice(1).replace(/A/g,""),u((0,g.squeeze)(t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var E=n(6),a=r(E),g=n(7),l=[[/GU([IE])/g,"K$1"],[/G([AO])/g,"K$1"],[/GU/g,"K"],[/C([AOU])/g,"K$1"],[/(?:Q|CC|CK)/g,"K"]],s=[["MAC","MCC"],["SCH","SSS"],["ASA","AZA"],["KN","NN"],["PH","FF"],["PF","FF"]];e.exports=t.default}});
webpackJsonp([10],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var E=r(2),g=n(E),a=r(18),u=r(10),o=n(u),I=r(400),i=n(I),l=r(401),s=n(l),A=r(402),O=n(A),c=r(403),f=n(c),N=r(404),$=n(N);(0,a.render)(g["default"].createElement(o["default"],{algorithm:i["default"]}),document.getElementById("phonetic-mount")),(0,a.render)(g["default"].createElement(o["default"],{algorithm:s["default"]}),document.getElementById("phonex-mount")),(0,a.render)(g["default"].createElement(o["default"],{algorithm:O["default"]}),document.getElementById("sonnex-mount")),(0,a.render)(g["default"].createElement(o["default"],{algorithm:f["default"]}),document.getElementById("soundex-mount")),(0,a.render)(g["default"].createElement(o["default"],{algorithm:$["default"]}),document.getElementById("soundex2-mount"))},9:function(e,t){"use strict";function r(e,t){for(var r=[],n=void 0;n=e.exec(t);)r.push(n);return e.lastIndex=0,r}function n(e){return e.slice().sort(function(e,t){return e-t})}function E(e){return"string"==typeof e?e.split(""):e}function g(e){for(var t="string"==typeof e,r=E(e),n=[r[0]],g=1,a=r.length;g<a;g++)r[g]!==r[g-1]&&n.push(r[g]);return t?n.join(""):n}function a(e,t){var r={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var n=0,E=e.length;n<E;n++)r[e[n]]=t[n];return r}function u(e){for(var t=Math.random(),r=e.length,n=0,E=0;E<r;E++)if(n+=e[E],t<=n)return E;return r-1}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=r,t.numericSort=n,t.seq=E,t.squeeze=g,t.translation=a,t.weightedRandomIndex=u},10:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var E=r(2),g=n(E),a=r(16),u=r(12),o=n(u),I=function(e){return e},i=function(e,t){return e===t},l=(0,a.compose)((0,a.withState)("wordOne","setWordOne",""),(0,a.withState)("wordTwo","setWordTwo","")),s=l(function(e){var t=e.algorithm,r=e.codeRenderer,n=void 0===r?I:r,E=e.comparator,a=void 0===E?i:E,u=e.wordOne,l=e.wordTwo,s=e.setWordOne,A=e.setWordTwo,O=u?t(u):null,c=l?t(l):null,f=O?n(O):"",N=c?n(c):"",$="·",S="default";return O&&c&&(a(O,c)?($="=~",S="success"):($="!~",S="error")),g["default"].createElement("table",null,g["default"].createElement("tbody",null,g["default"].createElement("tr",null,g["default"].createElement("td",null,g["default"].createElement(o["default"],{placeholder:"Word 1",value:u,onChange:function(e){return s(e.target.value)},status:S})),g["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},g["default"].createElement("strong",null,$)),g["default"].createElement("td",null,g["default"].createElement(o["default"],{placeholder:"Word 2",value:l,onChange:function(e){return A(e.target.value)},status:S}))),g["default"].createElement("tr",null,g["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},f," "),g["default"].createElement("td",null),g["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},N," "))))});t["default"]=s},17:function(e,t,r){"use strict";function n(e){return e=g(e),e&&e.replace(a,E).replace(i,"")}var E=r(34),g=r(36),a=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,u="\\u0300-\\u036f\\ufe20-\\ufe23",o="\\u20d0-\\u20f0",I="["+u+o+"]",i=RegExp(I,"g");e.exports=n},34:function(e,t){"use strict";function r(e){return n[e]}var n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};e.exports=r},389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SIMPLE_QUOTES="’‘`‛'",t.DOUBLE_QUOTES='«»„‟“”"'},400:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function E(e){return e.replace(/(.)\1/g,"$1")}function g(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/phonetic: the given word is not a string.");e=e.toUpperCase().replace(/Œ/g,"OEU").replace(/Æ/g,"E").replace(/Ç/g,"S"),e=(0,u["default"])(e).replace(/[^A-Z]/g,"");for(var t=e,r=0,n=o.length;r<n;r++){var g=o[r],a=g[0],f=g[1];t=t.replace(a,f)}t=E(t);var N=A[t];if(N)return N;for(var $=0,S=I.length;$<S;$++){var d=I[$],a=d[0],f=d[1];t=t.replace(a,f)}for(var U=0,T=i.length;U<T;U++){var C=i[U],a=C[0],f=C[1];t=t.replace(a,f)}for(var R=0,h=l.length;R<h;R++){var L=l[R],a=L[0],f=L[1];t=t.replace(a,f)}for(var M=t,p=0,K=s.length;p<K;p++){var m=s[p],a=m[0],f=m[1];t=t.replace(a,f)}if(t=E(t),"FUEL"===t&&(t="FIOUL"),"O"===t)return t;if(t.length<2){if(O.test(e))return e;if(c.test(e)&&(3===e.length||4===e.length))return e.slice(0,-1);if(M.length>1)return M}return t.length>1?t:""}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=g;var a=r(17),u=n(a),o=[[/O[O]+/g,"OU"],[/SAOU/g,"SOU"],[/OES/g,"OS"],[/CCH/g,"K"],[/CC([IYE])/g,"KS$1"]],I=[[/OIN[GT]$/g,"OIN"],[/E[RS]$/g,"E"],[/(C|CH)OEU/g,"KE"],[/MOEU/g,"ME"],[/OE([UI]+)([BCDFGHJKLMNPQRSTVWXZ])/g,"E$1$2"],[/^GEN[TS]$/,"JAN"],[/CUEI/g,"KEI"],[/([^AEIOUYC])AE([BCDFGHJKLMNPQRSTVWXZ])/g,"$1E$2"],[/AE([QS])/g,"E$1"],[/AIE([BCDFGJKLMNPQRSTVWXZ])/g,"AI$1"],[/ANIEM/g,"ANIM"],[/(DRA|TRO|IRO)P$/,"$1"],[/(LOM)B$/,"$1"],[/(RON|POR)C$/,"$1"],[/PECT$/,"PET"],[/ECUL$/,"CU"],[/(CHA|CA|E)M(P|PS)$/,"$1N"],[/(TAN|RAN)G$/,"$1"]],i=[[/([^VO])ILAG/g,"$1IAJ"],[/([^TRH])UIL(AR|E)(.+)/g,"$1UI$2$3"],[/([G])UIL([AEO])/g,"$1UI$2"],[/([NSPM])AIL([AEO])/g,"$1AI$2"],[/DIL(AI|ON|ER|EM)/g,"DI$1"],[/RILON/g,"RION"],[/TAILE/g,"TAIE"],[/GAILET/g,"GAIET"],[/AIL(A[IR])/g,"AI$1"],[/OUILA/g,"OUIA"],[/EIL(AI|AR|ER|EM)/g,"AI$1"],[/REILET/g,"RAIET"],[/EILET/g,"EIET"],[/AILOL/g,"AIOL"],[/([^AEIOUY])(SC|S)IEM([EA])/g,"$1$2IAM$3"],[/^(SC|S)IEM([EA])/g,"$1IAM$2"],[/([OAI])MB/g,"$1NB"],[/([OA])MP/g,"$1NP"],[/GEMB/g,"JANB"],[/EM([BP])/g,"AN$1"],[/UMBL/g,"INBL"],[/CIEN/g,"SIAN"],[/^ECEUR/,"EKEUR"],[/^CH(OG+|OL+|OR+|EU+|ARIS|M+|IRO|ONDR)/,"K$1"],[/(YN|RI)CH(OG+|OL+|OC+|OP+|OM+|ARIS|M+|IRO|ONDR)/g,"$1K$2"],[/CHS/g,"CH"],[/CH(AIQ)/g,"K$1"],[/^ECHO([^UIPY])/,"EKO$1"],[/ISCH(I|E)/g,"ISK$1"],[/^ICHT/,"IKT"],[/ORCHID/g,"ORKID"],[/ONCHIO/g,"ONKIO"],[/ACHIA/g,"AKIA"],[/([^C])ANICH/g,"$1ANIK"],[/OMANIK/g,"OMANICH"],[/ACHY([^D])/g,"AKI$1"],[/([AEIOU])C([BDFGJKLMNPQRTVWXZ])/g,"$1K$2"],[/EUCHA/g,"EKA"],[/YCH(IA|A|O|ED)/g,"IK$1"],[/([AR])CHEO/g,"$1KEO"],[/RCHES/g,"RKES"],[/ECHN/g,"EKN"],[/OCHTO/g,"OKTO"],[/CHO(RA|NDR|RE)/g,"KO$1"],[/MACHM/g,"MAKM"],[/BRONCHO/g,"BRONKO"],[/LICHO([SC])/g,"LIKO$1"],[/WA/g,"OI"],[/WO/g,"O"],[/(?:WI|WHI|WHY)/g,"OUI"],[/WHA/g,"OUA"],[/WHO/g,"OU"],[/GNE([STR])/g,"NIE$1"],[/GNE/g,"NE"],[/GI/g,"JI"],[/GNI/g,"NI"],[/GN(A|OU|UR)/g,"NI$1"],[/GY/g,"JI"],[/OUGAIN/g,"OUGIN"],[/AGEO([LT])/g,"AJO$1"],[/GEORG/g,"JORJ"],[/GEO(LO|M|P|G|S|R)/g,"JEO$1"],[/([NU])GEOT/g,"$1JOT"],[/GEO([TDC])/g,"JEO$1"],[/GE([OA])/g,"J$1"],[/GE/g,"JE"],[/QU?/g,"K"],[/C[YI]/g,"SI"],[/CN/g,"KN"],[/ICM/g,"IKM"],[/CEAT/g,"SAT"],[/CE/g,"SE"],[/C([RO])/g,"K$1"],[/CUEI/g,"KEI"],[/CU/g,"KU"],[/VENCA/g,"VANSA"],[/C([AS])/g,"K$1"],[/CLEN/g,"KLAN"],[/C([LZ])/g,"K$1"],[/CTIQ/g,"KTIK"],[/CTI[CS]/g,"KTIS"],[/CTI([FL])/g,"KTI$1"],[/CTIO/g,"KSIO"],[/CT([IUEOR])?/g,"KT$1"],[/PH/g,"F"],[/TH/g,"T"],[/OW/g,"OU"],[/LH/g,"L"],[/RDL/g,"RL"],[/CH(LO|R)/g,"K$1"],[/PTIA/g,"PSIA"],[/GU([^RLMBSTPZN])/g,"G$1"],[/GNO(?=[MLTNRKG])/g,"NIO"],[/BUTI([EA])/g,"BUSI$1"],[/BATIA/g,"BASIA"],[/ANTIEL/g,"ANSIEL"],[/RETION/g,"RESION"],[/ENTI([EA])L/g,"ENSI$1L"],[/ENTIO/g,"ENSIO"],[/ENTIAI/g,"ENSIAI"],[/UJETION/g,"UJESION"],[/ATIEM/g,"ASIAM"],[/PETIEN/g,"PESIEN"],[/CETIE/g,"CESIE"],[/OFETIE/g,"OFESIE"],[/IPETI/g,"IPESI"],[/LBUTION/g,"LBUSION"],[/BLUTION/g,"BLUSION"],[/L([EA])TION/g,"L$1SION"],[/SATIET/g,"SASIET"],[/(.+)ANTI(AL|O)/g,"$1ANSI$2"],[/(.+)INUTI([^V])/g,"$1INUSI$2"],[/([^O])UTIEN/g,"$1USIEN"],[/([^DE])RATI([E])$/,"$1RASI$2"],[/([^SNEU]|KU|KO|RU|LU|BU|TU|AU)T(IEN|ION)/g,"$1S$2"],[/([^CS])H/g,"$1"],[/([EN])SH/g,"$1S"],[/SH/g,"CH"],[/OMT/g,"ONT"],[/IM([BP])/g,"IN$1"],[/UMD/g,"OND"],[/([TRD])IENT/g,"$1IANT"],[/IEN/g,"IN"],[/YM([UOAEIN])/g,"IM$1"],[/YM/g,"IN"],[/AHO/g,"AO"],[/([FDS])AIM/g,"$1IN"],[/EIN/g,"AIN"],[/AINS/g,"INS"],[/AIN$/,"IN"],[/AIN([BTDK])/g,"IN$1"],[/([^O])UND/g,"$1IND"],[/([JTVLFMRPSBD])UN([^IAE])/g,"$1IN$2"],[/([JTVLFMRPSBD])UN$/,"$1IN"],[/RFUM$/,"RFIN"],[/LUMB/g,"LINB"],[/([^BCDFGHJKLMNPQRSTVWXZ])EN/g,"$1AN"],[/([VTLJMRPDSBFKNG])EN(?=[BRCTDKZSVN])/g,"$1AN"],[/^EN([BCDFGHJKLNPQRSTVXZ]|CH|IV|ORG|OB|UI|UA|UY)/,"AN$1"],[/(^[JRVTH])EN([DRTFGSVJMP])/,"$1AN$2"],[/SEN([ST])/g,"SAN$1"],[/^DESENIV/g,"DESANIV"],[/([^M])EN(U[IY])/g,"$1AN$2"],[/(.+[JTVLFMRPSBD])EN([JLFDSTG])/g,"$1AN$2"],[/([VSBSTNRLPM])E[IY]([ACDFRJLGZ])/g,"$1AI$2"],[/EAU/g,"O"],[/EU/g,"E"],[/Y/g,"I"],[/EOI/g,"OI"],[/JEA/g,"JA"],[/OIEM/g,"OIM"],[/OUANJ/g,"OUENJ"],[/OUA/g,"OI"],[/OUENJ/g,"OUANJ"],[/AU([^E])/g,"O$1"],[/^BENJ/,"BINJ"],[/RTIEL/g,"RSIEL"],[/PINK/g,"PONK"],[/KIND/g,"KOND"],[/KUM(N|P)/g,"KON$1"],[/LKOU/g,"LKO"],[/EDBE/g,"EBE"],[/ARCM/g,"ARKM"],[/SCH/g,"CH"],[/^OINI/,"ONI"],[/([^NDCGRHKO])APT/g,"$1AT"],[/([L]|KON)PT/g,"$1T"],[/OTB/g,"OB"],[/IXA/g,"ISA"],[/TG/g,"G"],[/^TZ/,"TS"],[/PTIE/g,"TIE"],[/GT/g,"T"],[/ANKIEM/g,"ANKILEM"],[/(LO|RE)KEMAN/g,"$1KAMAN"],[/NT(B|M)/g,"N$1"],[/GSU/g,"SU"],[/ESD/g,"ED"],[/LESKEL/g,"LEKEL"],[/CK/g,"K"]],l=[[/USIL$/,"USI"],[/X$|[TD]S$|[DS]$/,""],[/([^KL]+)T$/,"$1"],[/^[H]/,""]],s=[[/TIL$/,"TI"],[/LC$/,"LK"],[/L[E]?[S]?$/,"L"],[/(.+)N[E]?[S]?$/,"$1N"],[/EZ$/,"E"],[/OIG$/,"OI"],[/OUP$/,"OU"],[/([^R])OM$/,"$1ON"],[/LOP$/,"LO"],[/NTANP$/,"NTAN"],[/TUN$/,"TIN"],[/AU$/,"O"],[/EI$/,"AI"],[/R[DG]$/,"R"],[/ANC$/,"AN"],[/KROC$/,"KRO"],[/HOUC$/,"HOU"],[/OMAC$/,"OMA"],[/([J])O([NU])[CG]$/,"$1O$2"],[/([^GTR])([AO])NG$/,"$1$2N"],[/UC$/,"UK"],[/AING$/,"IN"],[/([EISOARN])C$/,"$1K"],[/([ABD-MO-Z]+)[EH]+$/,"$1"],[/EN$/,"AN"],[/(NJ)EN$/,"$1AN"],[/^PAIEM/,"PAIM"],[/([^NTB])EF$/,"$1"]],A={CD:"CD",BD:"BD",BV:"BV",TABAC:"TABA",FEU:"FE",FE:"FE",FER:"FER",FIEF:"FIEF",FJORD:"FJORD",GOAL:"GOL",FLEAU:"FLEO",HIER:"IER",HEU:"E",HE:"E",OS:"OS",RIZ:"RI",RAZ:"RA",ECHO:"EKO"},O=/[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ]*/,c=/[RFMLVSPJDF][AEIOU]/},401:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function E(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/phonex: the given word is not a string.");e=e.toUpperCase();for(var t="",r=0,E=e.length;r<E;r++){var I=e.charAt(r);t+=a[I]||I}t=t.replace(/[^A-Z]/g,"");for(var i=0,l=o.length;i<l;i++){var s;t=(s=t).replace.apply(s,n(o[i]))}var A=t;t="";for(var O=0,c=A.length;O<c;O++){var f=A.charAt(O);t+=u[f]||f}return t=(0,g.squeeze)(t),t=t.replace(/[TX]$/,"")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=E;var g=r(9),a=(0,g.translation)("ÀÂÄÃÉÈÊËÌÎÏÒÔÖÕÙÛÜÑ","AAAAYYYYIIIOOOOUUUN"),u=(0,g.translation)("ADPJBVM","OTTGFFN"),o=[[/Y/g,"I"],[/([^PCS])H/g,"$1"],[/PH/g,"F"],[/G(AI?[NM])/g,"K$1"],[/[AE]I[NM]([AEIOU])/g,"YN$1"],[/EAU/,"O"],[/OUA/,"2"],[/[EA]I[NM]/g,"4"],[/[EA]I/g,"Y"],[/E([RTZ])/g,"Y$1"],[/ESS/g,"YS"],[/[AOE]N([^AEIOU1234])/g,"1$1"],[/[AE]M([^AEIOU1234])/g,"1$1"],[/IN([^AEIOU1234])/g,"4$1"],[/([AEIOUY1234])S([AEIOUY1234])/g,"$1Z$2"],[/(?:OE|EU)/g,"E"],[/AU/g,"O"],[/O[IY]/g,"2"],[/OU/g,"3"],[/(?:SCH|CH|SH)/g,"5"],[/S[CS]/g,"S"],[/C([EI])/,"S$1"],[/(?:GU|QU|Q|C)/g,"K"],[/G([AOY])/g,"K$1"]]},402:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function E(e){return o.has(e)}function g(e){return I.has(e)}function a(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/sonnex: the given word is not a string.");e=e.toLowerCase().replace(i,"").replace(/œ/g,"oe");var t=l[e];if(t)return t;var r=e,E="";for(/^tien/.test(r)&&(r=r.slice(1),E="t");r.length;){var g=r[0],a=s[g];if(a){for(var u=!1,o=0,I=a.length;o<I;o++){var A=a[o][0],O=a[o][1];if("string"!=typeof A){var c=r.match(A);if(c){if(u=!0,"string"==typeof O)r=c[1]||"";else{var f=O.apply(void 0,n(c.slice(1)));O=f[0],r=f[1]}E+=O;break}}else if(r===A){u=!0,E+=O,r="";break}}u||(E+=g,r=r.slice(1))}else E+=g,r=r.slice(1)}return E}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=r(389),o=new Set("aâàäeéèêëiîïoôöuùûüyœ"),I=new Set("bcçdfghjklmnpqrstvwxyz"),i=new RegExp("["+u.SIMPLE_QUOTES+"]","g"),l={cerf:"sEr",cerfs:"sEr",de:"de",est:"E",es:"E",huit:"uit",les:"lE",mer:"mEr",mes:"mE",ressent:"res2",serf:"sEr",serfs:"sEr",sept:"sEt","septième":"sEtiEm",ses:"sE",tes:"tE",eschatologie:"Eskatoloji"},s={a:[["a","a"],["aient","E"],["ain","1"],[/ain(.)(.*)$/,function(e,t){return E(e)?["E",e+t]:["1",e+t]}],["ais","E"],[/^ais(.)(.*)/,function(e,t){return"s"===e?["Es",t]:E(e)?["Ez",e+t]:["Es",e+t]}],["ail","ai"],[/^aill(.*)/,"ai"],[/^ai(.*)/,"E"],[/^amm(.*)/,"am"],[/^am(.)(.*)/,function(e,t){return"m"===e?["am",t]:E(e)?["am",e+t]:["2",e+t]}],["an","2"],[/^an(.)(.*)/,function(e,t){return"n"===e?["an",t]:E(e)?["an",e+t]:["2",e+t]}],["assent","as"],[/^as(.)(.*)/,function(e,t){return"s"===e?["as",t]:g(e)?["as",e+t]:["az",e+t]}],[/^au(.*)/,function(e){return["o",e]}],["ay","E"],["ays","E"]],"à":[[/^à(.*)/,"a"]],"â":[[/^â(.*)/,"a"]],b:[["b",""],[/^bb(.*)/,"b"]],c:[["c",""],[/^c(a.*)/,"k"],[/^cc(.)(.*)/,function(e,t){return"o"===e||"u"===e?["k",e+t]:["ks",t]}],[/^c(e.*)/,"s"],[/^c'(.*)/,"s"],[/^chiro([^u].*)/,"kiro"],[/^ch(ao.*)/,"k"],[/^chl(.*)/,"kl"],[/^ch(oe.*)/,"k"],[/^chr(.*)/,"kr"],[/^ch(.*)/,"C"],[/^c(i.*)/,"s"],[/^ck(.*)/,"k"],[/^c(oeu.*)/,"k"],[/^compt(.*)/,"k3t"],[/^c(o.*)/,"k"],[/^cue(i.*)/,"ke"],[/^c(u.*)/,"k"],[/^c(y.*)/,"s"],[/^c(.*)/,"k"]],"ç":[[/^ç(.*)/,"s"]],d:[["d",""],["ds",""],[/^dd(.*)/,"d"]],e:[["e",""],["ec","Ec"],["ef","Ef"],["eaux","o"],[/^eann(.*)/,"an"],[/^ean(.*)/,"2"],[/^eau(.*)/,"o"],[/^eff(.*)/,"Ef"],[/^e(gm.*)/,"E"],["ein","1"],[/^ein(.)(.*)/,function(e,t){return"n"===e?["En",t]:E(e)?["En",e+t]:["1",e+t]}],[/^ei(.*)/,"E"],[/^ell(.*)/,"El"],[/^el(.)(.*)/,function(e,t){return g(e)?["E","l"+e+t]:["e","l"+e+t]}],[/^emm(.*)/,"Em"],[/^emp(.)(.*)/,function(e,t){return"h"===e?["2","p"+e+t]:E(e)||t?["2p",e+t]:["2",t]}],[/^enn(.*)/,"En"],["en","2"],[/^en(.)(.*)/,function(e,t){return E(e)?["en",e+t]:["2",e+t]}],["er","E"],["ert","Er"],[/^err(.*)/,"Er"],[/^er(f.*)/,"Er"],["es",""],[/^esch(.*)/,"EC"],["essent","Es"],[/^es(.)(.*)/,function(e,t){return"h"===e||"n"===e?["E",e+t]:"s"===e?["Es",t]:g(e)?["Es",e+t]:["ez",e+t]}],[/^és(.)(.*)/,function(e,t){return"s"===e?["Es",t]:g(e)?["Es",e+t]:["Ez",e+t]}],[/^ett(.*)/,"Et"],["et","E"],[/^et(.*)/,"et"],[/^eun(.)(.*)/,function(e,t){return E(e)?["en",e+t]:["1",e+t]}],["eux","e"],[/^eux(i.*)/,"ez"],[/^eu(.*)/,"e"],["ex","Eks"],[/^ey(.)(.*)/,function(e,t){return g(e)?["E",e+t]:["E","y"+e+t]}],["ez","E"]],"è":[[/^è(.*)/,"E"]],"ê":[[/ê(.*)/,"E"]],"ë":[[/^ë(l.*)/,"E"]],"é":[["é","E"],[/^é(.)(.*)/,function(e,t){return"t"===e?["Et",t]:["E",e+t]}]],f:[[/^ff(.*)/,"f"]],g:[["g",""],[/^g(e.*)/,"j"],[/^gé(.*)/,"jE"],[/^g(i.*)/,"j"],[/^gn(.*)/,"n"],[/^g(y.*)/,"j"],[/^guë(.*)/,"gu"],[/^gu(.*)/,"g"],[/^gg(.*)/,"g"]],h:[[/^h(.*)/,""]],i:[["ic","ik"],["ics","ik"],[/^ienn(.*)/,"iEn"],[/^ien(.*)/,"i1"],["in","1"],[/^in(.)(.*)/,function(e,t){return"n"===e?["in",t]:E(e)?["in",e+t]:["1",e+t]}],["issent","is"],[/^is(.)(.*)/,function(e,t){return"s"===e?["is",t]:g(e)?["is",e+t]:["iz",e+t]}],[/^ix(i.*)/,"iz"],[/^ill(.*)/,"i"],[/^i(.*)/,"i"]],"ï":[[/^ï(.*)/,"i"]],l:[[/^ll(.*)/,"l"]],m:[[/^mm(.*)/,"m"]],n:[[/^nn(.*)/,"n"]],o:[[/^occ(.*)/,"ok"],[/^oeu?(.*)/,"e"],["oient","Ua"],[/^oin(.*)/,"U1"],[/^oi(.*)/,"Ua"],[/^omm(.*)/,"om"],[/^om(.)(.*)/,function(e,t){return E(e)?["om",e+t]:["3",e+t]}],[/^onn(.*)/,"on"],[/^on(.*)/,"3"],["ossent","os"],[/^os(.)(.*)/,function(e,t){return"s"===e?["os",t]:g(e)?["os",e+t]:["oz",e+t]}],[/^o[uùû](.*)/,"U"]],"ô":[[/^ô(.*)/,"o"]],"ö":[[/^ô(.*)/,"o"]],p:[["p",""],[/^ph(.*)/,"f"],[/^pp(.*)/,"p"],[/^pays(.*)/,function(e){return["pE","is"+e]}]],q:[[/^qu(r.*)/,"ku"],[/^qu(.*)/,"k"],[/^q(.*)/,"k"]],r:[[/^rr(.*)/,"r"]],s:[["s",""],[/^ss(.*)/,"s"],[/^st(.*)/,"st"],[/^sc(i.*)/,"s"]],t:[["t",""],[/^t(ier.*)/,"t"],[/^ti(.)(.*)/,function(e,t){return E(e)?["s","i"+e+t]:["t","i"+e+t]}],[/^tt(.*)/,"t"]],u:[["un","1"],["ussent","us"],[/^us(.*)/,function(e,t){return"s"===e?["us",t]:g(e)?["us",e+t]:["uz",e+t]}]],"û":[[/^û(.*)/,"u"]],w:[[/^w(.*)/,"v"]],x:[["x",""],[/^x(.)(.*)/,function(e,t){return"c"===e?["ks",t]:E(e)?["kz",e+t]:["ks",e+t]}]],y:[[/^y(.*)/,"i"]],z:[[/^zz(.*)/,"z"]]}},403:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function E(e){return(e+"0000").slice(0,4)}function g(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/soundex: the given name is not a string.");e=e.toUpperCase().replace(/Ç/g,"S").replace(/Œ/g,"E"),e=(0,u["default"])(e).replace(/[^A-Z]/g,"");for(var t=e.charAt(0),r="",n=1,g=e.length;n<g;n++)"D"!==I[e[n]]&&(r+=I[e[n]]);r.charAt(0)===I[t]&&(r=r.slice(1));var a=(0,o.squeeze)(r).replace(/0/g,"");return E(t+a)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=g;var a=r(17),u=n(a),o=r(9),I=(0,o.translation)("AEIOUYWHBPCKQDTLMNRGJSXZFV","000000DD112223345567788899")},404:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function E(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function g(e){return e.slice(0,4)}function a(e){if("string"!=typeof e)throw Error("talisman/phonetics/french/soundex2: the given name is not a string.");for(var t=(0,o["default"])(e.trim()).toUpperCase().replace(/[^A-Z]/,""),r=0,n=i.length;r<n;r++){var a;t=(a=t).replace.apply(a,E(i[r]))}t=t.charAt(0)+t.slice(1).replace(/[AEIOU]/g,"A");for(var u=0,s=l.length;u<s;u++){var A=l[u],O=A[0],c=A[1],f=O.length;t.slice(0,f)===O&&(t=c+t.slice(f))}return t=t.replace(/([^CS])H/g,"$1"),t=t.replace(/([^A])Y/g,"$1"),t=t.replace(/[ADTS]$/,""),t=t.charAt(0)+t.slice(1).replace(/A/g,""),g((0,I.squeeze)(t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=r(17),o=n(u),I=r(9),i=[[/GU([IE])/g,"K$1"],[/G([AO])/g,"K$1"],[/GU/g,"K"],[/C([AOU])/g,"K$1"],[/(?:Q|CC|CK)/g,"K"]],l=[["MAC","MCC"],["SCH","SSS"],["ASA","AZA"],["KN","NN"],["PH","FF"],["PF","FF"]]}});
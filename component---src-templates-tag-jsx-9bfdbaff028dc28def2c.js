(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p}),n.d(e,"pageQuery",function(){return x});var r=n(9),o=n.n(r),u=n(0),i=n.n(u),a=n(166),s=n.n(a),f=n(167),c=n(211),l=n(162),d=n.n(l),p=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){var t=this.props.pageContext.tag,e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(f.a,null,i.a.createElement("div",{className:"tag-container"},i.a.createElement(s.a,{title:'Posts tagged as "'+t+'" | '+d.a.siteTitle}),i.a.createElement(c.a,{postEdges:e})))},e}(i.a.Component),x="3824571933"},162:function(t,e,n){n(36);var r={siteTitle:"Thistle and Thorn Studios",siteTitleShort:"T&T Studios",siteTitleAlt:"Thistle and Thorn Game Studios",siteLogo:"/logos/T&TLogo-1024.png",siteUrl:"https://thistle-and-thorn.github.io",pathPrefix:"/",siteDescription:"Thistle and Thorn Game Studios, based in Seattle.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"Seattle, WA",userAvatar:"",userDescription:"",userLinks:[],copyright:"Copyright © 2019. Thistle and Thorn Studios",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),t.exports=r},163:function(t,e,n){var r=n(164).Symbol;t.exports=r},164:function(t,e,n){var r=n(173),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},165:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},167:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(9),o=n.n(r),u=n(0),i=n.n(u),a=n(166),s=n.n(a),f=n(162),c=n.n(f),l=(n(204),function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement("meta",{name:"description",content:c.a.siteDescription})),t)},e}(i.a.Component))},168:function(t,e,n){var r=n(163),o=n(176),u=n(177),i="[object Null]",a="[object Undefined]",s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:i:s&&s in Object(t)?o(t):u(t)}},169:function(t,e){var n=Array.isArray;t.exports=n},170:function(t,e,n){var r=n(184);t.exports=function(t){return null==t?"":r(t)}},172:function(t,e,n){"use strict";var r=n(9),o=n.n(r),u=n(178),i=n.n(u),a=n(0),s=n.n(a),f=n(56),c=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){var t=this.props.tags;return s.a.createElement("div",{className:"post-tag-container"},t&&t.map(function(t){return s.a.createElement(f.Link,{key:t,style:{marginRight:10},to:"/tags/"+i()(t)},"#",t)}))},e}(a.Component);e.a=c},173:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(77))},176:function(t,e,n){var r=n(163),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=u.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(s){}var o=i.call(t);return r&&(e?t[a]=n:delete t[a]),o}},177:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},178:function(t,e,n){var r=n(179)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},179:function(t,e,n){var r=n(180),o=n(181),u=n(187),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(u(o(e).replace(i,"")),t,"")}}},180:function(t,e){t.exports=function(t,e,n,r){var o=-1,u=null==t?0:t.length;for(r&&u&&(n=t[++o]);++o<u;)n=e(n,t[o],o,t);return n}},181:function(t,e,n){var r=n(182),o=n(170),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(u,r).replace(i,"")}},182:function(t,e,n){var r=n(183)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},183:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},184:function(t,e,n){var r=n(163),o=n(185),u=n(169),i=n(186),a=1/0,s=r?r.prototype:void 0,f=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return o(e,t)+"";if(i(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-a?"-0":n}},185:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},186:function(t,e,n){var r=n(168),o=n(165),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==u}},187:function(t,e,n){var r=n(188),o=n(189),u=n(170),i=n(190);t.exports=function(t,e,n){return t=u(t),void 0===(e=n?void 0:e)?o(t)?i(t):r(t):t.match(e)||[]}},188:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},189:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},190:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",u="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",a="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+i+"|"+a+")",d="(?:"+c+"|"+a+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[u,s,f].join("|")+")"+x,v=RegExp([c+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,c+l,"$"].join("|")+")",c+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,h].join("|"),"g");t.exports=function(t){return t.match(v)||[]}},211:function(t,e,n){"use strict";var r=n(9),o=n.n(r),u=n(0),i=n.n(u),a=n(56),s=(n(250),n(172),function(t){function e(){return t.apply(this,arguments)||this}o()(e,t);var n=e.prototype;return n.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},n.render=function(){var t=this.getPostList();return i.a.createElement("div",null,i.a.createElement("ul",null,t.map(function(t){return i.a.createElement("li",{className:"post-listing__list-header"},i.a.createElement(a.Link,{to:t.path,key:t.title},t.title))})))},e}(i.a.Component));e.a=s}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-9bfdbaff028dc28def2c.js.map
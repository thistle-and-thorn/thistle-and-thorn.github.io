(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n.n(a),i=n(0),o=n.n(i),s=n(163),l=n.n(s),c=n(56),m=n(166),p=n(282),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.config.userTwitter,e=this.props.expanded;return o.a.createElement(p.Follow,{username:t,options:{count:!!e||"none"}})},e}(i.Component),d=n(37),h=n.n(d),f=n(365),E=n.n(f),g=n(188),y=n.n(g),v=n(162),T=n.n(v),x=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(h()(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(h()(n)),n}r()(e,t);var n=e.prototype;return n.onSnackbarDismiss=function(){var t=this.state.toasts.slice(1);this.setState({toasts:t})},n.notifyAboutComment=function(){var t=this.state.toasts.slice();t.push({text:"New comment available!"}),this.setState({toasts:t})},n.render=function(){var t=this.props.postNode;if(!T.a.disqusShortname)return null;var e=t.frontmatter,n=y()(T.a.siteUrl,T.a.pathPrefix,t.fields.slug);return o.a.createElement(E.a,{shortname:T.a.disqusShortname,identifier:e.title,title:e.title,url:n,category_id:e.category_id,onNewComment:this.notifyAboutComment})},e}(i.Component),b=n(367),S=n.n(b),D=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.tags;return o.a.createElement("div",{className:"post-tag-container"},t&&t.map(function(t){return o.a.createElement(c.Link,{key:t,style:{textDecoration:"none"},to:"/tags/"+S()(t)},o.a.createElement("button",null,t))}))},e}(i.Component),w=n(434),C=n(435),A=n(436),N=n(437),P=n(438),k=n(439),L=n(440),U=n(441),_=n(442),I=n(443),Y=n(444),F=n(445),R=n(446),z=(n(380),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.postNode,n=t.postPath,a=t.mobile,r=e.frontmatter,i=y()(T.a.siteUrl,T.a.pathPrefix,n),s=a?36:48,l=function(t){return o.a.createElement("div",{className:"share-count"},function(t){return t>0?t:""}(t))};return o.a.createElement("div",{className:"social-links"},o.a.createElement(w.a,{url:i,title:r.title},o.a.createElement(C.a,{round:!0,size:s}),o.a.createElement(A.a,{url:i},function(t){return l(t)})),o.a.createElement(N.a,{url:i,title:r.title},o.a.createElement(P.a,{round:!0,size:s})),o.a.createElement(k.a,{url:i,quote:e.excerpt},o.a.createElement(L.a,{round:!0,size:s}),o.a.createElement(U.a,{url:i},function(t){return l(t)})),o.a.createElement(_.a,{url:i,title:r.title,description:e.excerpt},o.a.createElement(I.a,{round:!0,size:s}),o.a.createElement(Y.a,{url:i},function(t){return l(t)})),o.a.createElement(F.a,{url:i},o.a.createElement(R.a,{round:!0,size:s})))},e}(i.Component)),B=n(231);n(430),n(431);n.d(e,"default",function(){return M}),n.d(e,"pageQuery",function(){return q});var M=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=t.pageContext.slug,a=e.markdownRemark,r=a.frontmatter;return r.id||(r.id=n),r.category_id||(r.category_id=T.a.postDefaultCategoryID),o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,r.title+" | "+T.a.siteTitle)),o.a.createElement(B.a,{postPath:n,postNode:a,postSEO:!0}),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(c.Link,{to:"/",className:"post__root-link"},T.a.siteTitle)),o.a.createElement("h1",null,r.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),o.a.createElement("div",{className:"post-meta"},o.a.createElement(D,{tags:r.tags}),o.a.createElement(z,{postPath:n,postNode:a})),o.a.createElement(u,{config:T.a}),o.a.createElement(x,{postNode:a}))))},e}(o.a.Component),q="1675071777"},162:function(t,e,n){n(36);var a={siteTitle:"Thistle and Thorn Studios",siteTitleShort:"T&T Studios",siteTitleAlt:"Thistle and Thorn Game Studios",siteLogo:"/logos/T&TLogo-1024.png",siteUrl:"https://thistle-and-thorn.github.io",pathPrefix:"/",siteDescription:"Thistle and Thorn Game Studios, based in Seattle.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"Seattle, WA",userAvatar:"",userDescription:"",userLinks:[],copyright:"Copyright © 2019. Thistle and Thorn Studios",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),t.exports=a},166:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(9),r=n.n(a),i=n(0),o=n.n(i),s=n(163),l=n.n(s),c=n(162),m=n.n(c),p=(n(183),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:m.a.siteDescription})),t)},e}(o.a.Component))},231:function(t,e,n){"use strict";var a=n(9),r=n.n(a),i=n(0),o=n.n(i),s=n(163),l=n.n(s),c=n(188),m=n.n(c),p=n(162),u=n.n(p),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,n,a,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;t=p.title,e=p.description?p.description:i.excerpt,n=p.cover,a=m()(u.a.siteUrl,u.a.pathPrefix,s)}else t=u.a.siteTitle,e=u.a.siteDescription,n=u.a.siteLogo;n=m()(u.a.siteUrl,u.a.pathPrefix,n);var d=m()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:t,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:t,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:n},description:e}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:e}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?a:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:e}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:e}),o.a.createElement("meta",{name:"twitter:image",content:n}))},e}(i.Component);e.a=d}}]);
//# sourceMappingURL=component---src-templates-post-jsx-71e7ea8cf619108fa165.js.map
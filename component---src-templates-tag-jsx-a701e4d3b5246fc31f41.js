(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return f});var r=n(9),a=n.n(r),i=n(0),s=n.n(i),o=n(163),l=n.n(o),u=n(194),c=n(166),p=n(195),d=n(162),h=n.n(d),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return s.a.createElement(c.a,null,s.a.createElement("div",{className:"tag-container"},s.a.createElement(l.a,{title:'Posts tagged as "'+e+'" | '+h.a.siteTitle}),s.a.createElement(u.a,null),s.a.createElement("h1",null,"#",e),s.a.createElement(p.a,{postEdges:t})))},t}(s.a.Component),f="3824571933"},162:function(e,t,n){n(36);var r={siteTitle:"Thistle and Thorn Studios",siteTitleShort:"T&T Studios",siteTitleAlt:"Thistle and Thorn Game Studios",siteLogo:"/logos/T&TLogo-1024.png",siteUrl:"https://thistle-and-thorn.github.io",pathPrefix:"/",siteDescription:"Thistle and Thorn Game Studios, based in Seattle.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"Seattle, WA",userAvatar:"",userDescription:"",userLinks:[],copyright:"Copyright © 2019. Thistle and Thorn Studios",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},166:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(9),a=n.n(r),i=n(0),s=n.n(i),o=n(163),l=n.n(o),u=n(162),c=n.n(u),p=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",null,s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:c.a.siteDescription})),e)},t}(s.a.Component))},194:function(e,t,n){"use strict";var r=n(56),a=n(0),i=n.n(a),s=n(162),o=n.n(s);t.a=function(){return i.a.createElement("h3",null,i.a.createElement(r.Link,{to:"/",className:"post__root-link"},o.a.siteTitle))}},195:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(0),s=n.n(i),o=n(56),l=(n(251),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return s.a.createElement("div",null,s.a.createElement("ul",null,e.map(function(e){var t=new Date(e.date).toLocaleDateString();return s.a.createElement("li",{className:"post-listing__list-header"},s.a.createElement(o.Link,{to:e.path,key:e.title},t," ~ ",e.title))})))},t}(s.a.Component));t.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-a701e4d3b5246fc31f41.js.map
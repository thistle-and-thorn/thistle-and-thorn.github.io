(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h}),n.d(e,"pageQuery",function(){return m});var r=n(9),a=n.n(r),i=n(0),s=n.n(i),o=n(165),l=n.n(o),u=n(166),c=n(211),p=n(162),d=n.n(p),h=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.pageContext.tag,e=this.props.data.allMarkdownRemark.edges;return s.a.createElement(u.a,null,s.a.createElement("div",{className:"tag-container"},s.a.createElement(l.a,{title:'Posts tagged as "'+t+'" | '+d.a.siteTitle}),s.a.createElement(c.a,{postEdges:e})))},e}(s.a.Component),m="3824571933"},162:function(t,e,n){n(36);var r={siteTitle:"Thistle and Thorn Studios",siteTitleShort:"T&T Studios",siteTitleAlt:"Thistle and Thorn Game Studios",siteLogo:"/logos/T&TLogo-1024.png",siteUrl:"https://thistle-and-thorn.github.io",pathPrefix:"/",siteDescription:"Thistle and Thorn Game Studios, based in Seattle.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY/MM/DD",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"Seattle, WA",userAvatar:"",userDescription:"",userLinks:[],copyright:"Copyright © 2019. Thistle and Thorn Studios",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),t.exports=r},166:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n(9),a=n.n(r),i=n(0),s=n.n(i),o=n(165),l=n.n(o),u=n(162),c=n.n(u),p=(n(188),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.children;return s.a.createElement("div",null,s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:c.a.siteDescription})),t)},e}(s.a.Component))},211:function(t,e,n){"use strict";var r=n(9),a=n.n(r),i=n(0),s=n.n(i),o=n(56),l=(n(250),function(t){function e(){return t.apply(this,arguments)||this}a()(e,t);var n=e.prototype;return n.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},n.render=function(){var t=this.getPostList();return s.a.createElement("div",null,s.a.createElement("ul",null,t.map(function(t){var e=new Date(t.date).toLocaleDateString();return s.a.createElement("li",{className:"post-listing__list-header"},s.a.createElement(o.Link,{to:t.path,key:t.title},e," ~ ",t.title))})))},e}(s.a.Component));e.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-5bf5ed0d9cfad4ef2560.js.map
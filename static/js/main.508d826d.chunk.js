(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{19:function(e,n,t){"use strict";var c=t(0),i=t(1),l=t(21),s=t(3),a=t(13),r=Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio-MK-Kwon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA_187058506-1"}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&a.a.initialize(j);var b=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},u=t(5),h=t(23),d=[{index:!0,label:"Min Kyung Kwon",path:"/"},{num:"01. ",label:"About",path:"/about"},{num:"02. ",label:"Resume",path:"/resume"},{num:"03. ",label:"Projects",path:"/projects"},{num:"04. ",label:"Stats",path:"/stats"},{num:"05. ",label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(4).then(t.t.bind(null,163,7))})),m=function(){var e=Object(i.useState)(!1),n=Object(h.a)(e,2),t=n[0],l=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:Object(c.jsx)("span",{className:"num",children:e.label})},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)(u.b,{to:e.path,children:[Object(c.jsx)("span",{className:"num",children:e.num}),e.label]})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=t(24),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/Portfolio-MK-Kwon","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Min Kyung Kwon"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:MIN.KYUNG.KWON.DEV@gmail.com",children:"MIN.KYUNG.KWON.DEV @gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Min. I like creating things. I am a Front End Developer, Graphic Designer and Artist. I majored in Industrial Design at ",Object(c.jsx)("a",{href:"https://en.hongik.ac.kr/contents/www/eng/seoulcam.html",children:"Hong-Ik University in Seoul, South Korea"}),". I worked at ",Object(c.jsx)("a",{href:"http://www.colosso.net/",children:"Colosso"})," as a Graphic Designer. Our major clients're Samsung, LG & SK Telecom."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Min Kyung Kwon ",Object(c.jsx)(u.b,{to:"/",children:"minkyungkwon.dev"}),"."]})]})]})},g=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Min Kyung Kwon",defaultTitle:"Min Kyung Kwon",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};N.defaultProps={children:null,fullPage:!1,title:null,description:"Min Kyung Kwon's personal website."};n.a=N},24:function(e,n,t){"use strict";var c=t(0),i=(t(1),t(28)),l=t(29),s=t(30),a=t(31),r=[{link:"https://github.com/MK-Kwon",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/min-kyung-kwon",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:MIN.KYUNG.KWON.DEV @gmail.com",label:"Email",icon:a.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"icons",href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),l=t(15),s=t(5),a=t(3),r=t(19),o=(t(44),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,160))}))),j=Object(i.lazy)((function(){return t.e(8).then(t.bind(null,167))})),b=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,161))})),u=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,162))})),h=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,166))})),d=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,164))})),O=Object(i.lazy)((function(){return t.e(11).then(t.bind(null,165))})),m=function(){return Object(c.jsx)(s.a,{basename:"/Portfolio-MK-Kwon",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(r.a,{}),children:Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(a.a,{path:"/about",component:o}),Object(c.jsx)(a.a,{path:"/projects",component:h}),Object(c.jsx)(a.a,{path:"/stats",component:O}),Object(c.jsx)(a.a,{path:"/contact",component:j}),Object(c.jsx)(a.a,{path:"/resume",component:d}),Object(c.jsx)(a.a,{component:u,status:404})]})})})},x=document.getElementById("root");x.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(m,{}),x):Object(l.render)(Object(c.jsx)(m,{}),x)}},[[45,1,3]]]);
//# sourceMappingURL=main.508d826d.chunk.js.map
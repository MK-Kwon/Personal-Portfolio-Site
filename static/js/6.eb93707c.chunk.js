(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{154:function(e,t,n){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",i="hour",s="day",a="week",r="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},g={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+p(i,2,"0")+":"+p(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,r),a=n-s<0,o=t.clone().add(i+(a?-1:1),r);return+(-(i+(n-s)/(a?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(h){return{M:r,y:c,w:a,d:s,D:u,h:i,m:n,s:t,ms:e,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",f={};f[m]=d;var b=function(e){return e instanceof v},y=function(e,t,n){var i;if(!e)return m;if("string"==typeof e)f[e]&&(i=e),t&&(f[e]=t,i=e);else{var s=e.name;f[s]=e,i=s}return!n&&i&&(m=i),i||!n&&m},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new v(n)},k=g;k.l=y,k.i=b,k.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function d(e){this.$L=y(e.locale,null,!0),this.parse(e)}var p=d.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return k},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return M(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<M(e)},p.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,o){var h=this,l=!!k.u(o)||o,d=k.p(e),p=function(e,t){var n=k.w(h.$u?Date.UTC(h.$y,t,e):new Date(h.$y,t,e),h);return l?n:n.endOf(s)},g=function(e,t){return k.w(h.toDate()[e].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),h)},m=this.$W,f=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case c:return l?p(1,0):p(31,11);case r:return l?p(1,f):p(0,f+1);case a:var M=this.$locale().weekStart||0,v=(m<M?m+7:m)-M;return p(l?b-v:b+(6-v),f);case s:case u:return g(y+"Hours",0);case i:return g(y+"Minutes",1);case n:return g(y+"Seconds",2);case t:return g(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(a,o){var h,l=k.p(a),d="set"+(this.$u?"UTC":""),p=(h={},h[s]=d+"Date",h[u]=d+"Date",h[r]=d+"Month",h[c]=d+"FullYear",h[i]=d+"Hours",h[n]=d+"Minutes",h[t]=d+"Seconds",h[e]=d+"Milliseconds",h)[l],g=l===s?this.$D+(o-this.$W):o;if(l===r||l===c){var m=this.clone().set(u,1);m.$d[p](g),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](g);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[k.p(e)]()},p.add=function(e,o){var u,h=this;e=Number(e);var l=k.p(o),d=function(t){var n=M(h);return k.w(n.date(n.date()+Math.round(t*e)),h)};if(l===r)return this.set(r,this.$M+e);if(l===c)return this.set(c,this.$y+e);if(l===s)return d(1);if(l===a)return d(7);var p=(u={},u[n]=6e4,u[i]=36e5,u[t]=1e3,u)[l]||1,g=this.$d.getTime()+e*p;return k.w(g,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),s=this.$locale(),a=this.$H,r=this.$m,o=this.$M,c=s.weekdays,u=s.months,h=function(e,i,s,a){return e&&(e[i]||e(t,n))||s[i].substr(0,a)},d=function(e){return k.s(a%12||12,e,"0")},p=s.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:k.s(o+1,2,"0"),MMM:h(s.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:h(s.weekdaysMin,this.$W,c,2),ddd:h(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:k.s(a,2,"0"),h:d(1),hh:d(2),a:p(a,r,!0),A:p(a,r,!1),m:String(r),mm:k.s(r,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(e,t){return t||g[e]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(e,u,h){var l,d=k.p(u),p=M(e),g=6e4*(p.utcOffset()-this.utcOffset()),m=this-p,f=k.m(this,p);return f=(l={},l[c]=f/12,l[r]=f,l[o]=f/3,l[a]=(m-g)/6048e5,l[s]=(m-g)/864e5,l[i]=m/36e5,l[n]=m/6e4,l[t]=m/1e3,l)[d]||m,h?f:k.a(f)},p.daysInMonth=function(){return this.endOf(r).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=y(e,t,!0);return i&&(n.$L=i),n},p.clone=function(){return k.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},d}(),w=v.prototype;return M.prototype=w,[["$ms",e],["$s",t],["$m",n],["$H",i],["$W",s],["$M",r],["$y",c],["$D",u]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,v,M),e.$i=!0),M},M.locale=y,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=f[m],M.Ls=f,M.p={},M}()},166:function(e,t,n){"use strict";n.r(t);var i=n(0),s=(n(1),n(5)),a=n(19),r=n(154),o=n.n(r),c=function(e){var t=e.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:t.link,children:t.title})}),Object(i.jsx)("time",{className:"published",children:o()(t.date).format("MMMM, YYYY")}),Object(i.jsxs)("p",{className:"code",children:[Object(i.jsx)("a",{href:t.github_link,children:"Code"}),Object(i.jsx)("span",{children:t.technologies})]})]}),Object(i.jsx)("a",{href:t.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("/Portfolio-MK-Kwon").concat(t.image),alt:t.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:t.desc})})]})})},u=[{title:"Pro Hub",subtitle:"A group project from Adelaide Uni Coding Bootcamp",link:" http://pro-hub.herokuapp.com/",github_link:"https://github.com/MK-Kwon/Pro-Hub-2020",image:"/images/projects/ProHub.png",date:"2020-12-15",technologies:"MongoDB, Express, React, NodeJS, Figma",desc:"A MERN stack app that lets you find real-life team members for any project you plan on. With Pro-Hub-2020 it gives individuals the chance to meet up with local developers to collaborate on a project. Whether you are just building your portfolio, or needing an extra set of hands,ProHub will make your project come alive."},{title:"Road Star",subtitle:"2nd Groupd Project from Adelaide Uni Coding Bootcamp",link:"http://roadstar2020.herokuapp.com/",github_link:"https://github.com/MK-Kwon/RoadStar",image:"/images/projects/RoadStar.png",date:"2020-09-23",technologies:"MySQL, Express, NodeJS, Sequelize, JQuery, JavaScript, Figma",desc:"Road Start helps users to find motorcycle and car events around them as well as keep track of their favourite vehicles. Users can also search car/motorbike info by inputting the VIN and find recalls for a specific vehicle."},{title:"AccuZone Weather",subtitle:"The weather forecast app",link:"https://mk-kwon.github.io/AccuZone-Weather/",github_link:"https://github.com/MK-Kwon/AccuZone-Weather",image:"/images/projects/Accuzone Weather.png",date:"2020-07-05",technologies:"HTML, CSS, Bootstrap, JavaScript, JQuery, Figma",desc:"The weather app that gives the user real-time current weather and five day weather forecast by searching for the name of the city.  Whenever the user types in new search keyword, it gets saved to the local storage. User can save up to 8 cities. "},{title:"Transaction Tracker",subtitle:"An online/offline Web App",link:"https://my-transaction-tracker-mk.herokuapp.com/",github_link:"https://github.com/MK-Kwon/transaction-tracker",image:"/images/projects/Transaction Tracker.png",date:"2020-10-15",technologies:"MongoDB, Mongoose, Express, NodeJS, Figma",desc:"An online/offline Progressive Web App that tracks account balance, withdrawals, and deposits.   It can be downloaded and used online or offline due to the inclusion of an app manifest and service worker.  Data entered in offline mode is stored client-side in IndexedDB,  then stored server-side in MongoDB once online again. "},{title:"Ezy Nav",subtitle:"1st Group Project from Adelaide Uni Coding Bootcamp",link:"https://mk-kwon.github.io/Ezy_Nav/",github_link:"https://github.com/MK-Kwon/Ezy_Nav",image:"/images/projects/EzyNav.png",date:"2020-01-07",technologies:"HTML, CSS, JavaScript, Figma",desc:"Ezy Nav offers users the best route to get to their destination either by a car or a public transport Additionally the app provides the weather forecast at the starting and the destination. "},{title:"Bugger Logger",subtitle:"Responsive, RESTful Node.js/Express app",link:"https://mk-bugger.herokuapp.com/",github_link:"https://github.com/MK-Kwon/Bugger-Logger",image:"/images/projects/Bugger Logger.png",date:"2020-09-23",technologies:"Node JS, Express, MySQL, Handlebars, Figma",desc:"Node.js/Express app using MySQL as a databaseA responsive, RESTful Node.js/Express app using MySQL as a database and Handlebars to generate HTML. The app enables users to read, create, update and delete data of burgers through mobile-friendly browser interface. For this exercise I specifically used CRUD operation to serve MVC and created my own ORM for protecting MySQL database from MySQL injection. "},{title:"Employee Directory",subtitle:"Responsive, single-page app",link:"https://react-employee-directory-mk.herokuapp.com/",github_link:"https://github.com/MK-Kwon/React-Employee-Directory",image:"/images/projects/Employee Directory.png",date:"2020-11-18",technologies:"MongoDB, Mongoose, React, Express, NodeJS, Figma",desc:"A responsive, single-page React employee directory application that  enables sorting and filtering employee data. Material-UI was used for generating the template table then all employee info was hard coded in it. An employee or manager would benefit greatly from being able to view and filter non-sensitive data about other employees."},{title:"My-FitPal",subtitle:"MongoDB with Mongoose Schema",link:"https://fitness-tracker-mk-kwon.herokuapp.com/",github_link:"https://github.com/MK-Kwon/My-FitPal",image:"/images/projects/My-Fitpal.png",date:"2020-10-03",technologies:"MongoDB, Mongoose, Express, Morgan, NodeJS, Figma",desc:"A daily workout tracker that uses a Mongo database with a Mongoose schema  and handles routes with Express. Users can create a new workout plan, add exercises to an existing workout plan, and view statistics about previous workouts. "},{title:"Employee Management System",subtitle:"A Content Management System that tracks employees.",link:"https://github.com/MK-Kwon/Employee-Management",github_link:"https://github.com/MK-Kwon/Employee-Management",image:"/images/projects/Employee Management.png",date:"2020-08-15",technologies:"NodeJS, JavaScript, Inquirer, MySQL",desc:"An employee database with command line app that adds, views,   and updates departments, employees, and roles. A database with a command line application that views, adds, updates, and deletes data obtaining to departments, roles, and employees. "},{title:"Google Book Search",subtitle:"A single page MERN app for searching books on Google.",link:"https://google-book-search-mkkwon.herokuapp.com/",github_link:"https://github.com/MK-Kwon/React-Google-Book-Search",image:"/images/projects/GBS.png",date:"2020-11-29",technologies:"MongoDB, Express, NodeJS, React",desc:"A responsive, single-page MERN app that uses the Google Books API to search, save and delete books selected by the user to a Mongo database. "},{title:"Code Quiz",subtitle:"A quiz site which asks the user JavaScript questions",link:"https://mk-kwon.github.io/Code-Quiz/",github_link:"https://github.com/MK-Kwon/Code-Quiz",image:"/images/projects/CodeQuiz.png",date:"2020-06-14",technologies:"HTML, CSS, JavaScript",desc:"A quiz site which asks the user JavaScript questions and counts the time takes to answer them. The user has 10 seconds for each questions to answer if unable to chose the correct answer, the time will be deducted by 10 seconds for each questions."},{title:"Day Planner",subtitle:"A calendar app using html, css,Bootstrap, JavaScript & Jquery",link:"https://mk-kwon.github.io/Day-Planner/",github_link:"https://github.com/MK-Kwon/Day-Planner",image:"/images/projects/Day Planner.png",date:"2020-07-20",technologies:"HTML, CSS, JavaScript, JQuery",desc:"A calendar app using html, css,Bootstrap, JavaScript & Jquery. It is intended for use as daily schedule organiser to keep track of important events, meetings & deadlines during the work day on an hourly basis. "}];t.default=function(){return Object(i.jsx)(a.a,{title:"Projects",description:"Learn about Min Kyung Kwon's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(s.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I've built"})]})}),u.map((function(e){return Object(i.jsx)(c,{data:e},e.title)}))]})})}}}]);
//# sourceMappingURL=6.eb93707c.chunk.js.map
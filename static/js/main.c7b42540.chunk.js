(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),r=a.n(o),i=(a(14),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("a",{href:"https://chaelant.github.io/ArcticFox",target:"_blank",rel:"noopener noreferrer",className:"btn btn-link"},"tcg collection app"),c.a.createElement("p",null,"a full-stack mobile application built with react native to manage a collection of trading cards")))}}]),t}(c.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",null,"hey, there. i'm michael and i'm a full-stack web developer, database junkie, and avid pok\xe9mon connoisseur. i've been developing solo since 2018 and i'm always looking to work on new projects and expand my knowledge!")),c.a.createElement("div",{className:"row"},c.a.createElement("p",null,"got something you want to collab on? let's connect!")),c.a.createElement("div",{className:"row"},c.a.createElement("p",null,"favorite tech: node.js, mongodb, react & react native, angular, sql, python, and anything else with documentation i can read and learn from")))}}]),t}(c.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,"steven's institute of technology"),c.a.createElement("h5",null,"master of science - computer science"),c.a.createElement("p",null,"may 2019"))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,"montclair state university"),c.a.createElement("h5",null,"graduate certificate - computational linguistics"),c.a.createElement("p",null,"may 2016"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h5",null,"bachelor of arts - linguistics"),c.a.createElement("p",null,"august 2015"))))}}]),t}(c.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("a",{href:"mailto:mikeramos92@gmail.com",target:"_top"},"email")),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("a",{href:"https://linkedin.com/in/michaelramos92",target:"_blank",rel:"noopener noreferrer"},"linkedin")),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("a",{href:"https://github.com/chaelant",target:"_blank",rel:"noopener noreferrer"},"github")))}}]),t}(c.a.Component),E=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={about:!0,project:!1,education:!1,contact:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"aboutView",value:function(){this.state.about?this.setState({about:!1}):this.setState({about:!0,project:!1,education:!1,contact:!1})}},{key:"projectView",value:function(){this.state.project?this.setState({project:!1}):this.setState({about:!1,project:!0,education:!1,contact:!1})}},{key:"educationView",value:function(){this.state.education?this.setState({education:!1}):this.setState({about:!1,project:!1,education:!0,contact:!1})}},{key:"contactView",value:function(){this.state.contact?this.setState({contact:!1}):this.setState({about:!1,project:!1,education:!1,contact:!0})}},{key:"render",value:function(){var e,t=this;return this.state.about?e=c.a.createElement(b,null):this.state.project?e=c.a.createElement(d,null):this.state.education?e=c.a.createElement(h,null):this.state.contact&&(e=c.a.createElement(p,null)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"jumbotron jumbotron-title"}),c.a.createElement("div",{className:"jumbotron jumbotron-title"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"title text-center"},"michael ramos"),c.a.createElement("p",{className:"title text-center"},"developer. creative. pok\xe9mon master."))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("button",{type:"button",className:"btn btn-link",disabled:this.state.about,onClick:function(){return t.aboutView()}},"about"),c.a.createElement("button",{type:"button",className:"btn btn-link",disabled:this.state.project,onClick:function(){return t.projectView()}},"projects"),c.a.createElement("button",{type:"button",className:"btn btn-link",disabled:this.state.education,onClick:function(){return t.educationView()}},"education"),c.a.createElement("button",{type:"button",className:"btn btn-link",disabled:this.state.contact,onClick:function(){return t.contactView()}},"contact")))),e)}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c7b42540.chunk.js.map
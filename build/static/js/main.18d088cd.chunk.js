(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"basics":{"name":"Dhruva Bansal","label":"Software Engineer","picture":"images/pfp.webp","x_pictureFallback":"images/pfp.jpg","x_title":"Hey There! Glad you\'re here","summary":"I am a Computer Science student passionate about building intelligent products. Currently, I am an MS CS student at Stanford, specializing in Artificial Intelligence. In the past, I have interned at Amazon Robotics and Honeywell while also conducting research with professors at Georgia Tech.","location":{"country":"United States","countryCode":"US","region":"California"},"profiles":[{"network":"LinkedIn","username":"dhruvabansal2k","url":"https://www.linkedin.com/in/dhruvabansal2k","x_icon":"fab fa-2x fa-linkedin"},{"network":"GitHub","username":"DhruvaBansal00","url":"https://github.com/DhruvaBansal00","x_icon":"fab fa-2x fa-github"},{"network":"Devpost","username":"DhruvaBansal00","url":"https://devpost.com/DhruvaBansal00","x_icon":"fab fa-2x fa-dev"}]},"work":[{"company":"Self-employed","position":"Software development consultant","website":"https://jcoelho93.netlify.com","startDate":"2021-01-15","endDate":"","summary":"Started working for myself, providing expertise on software development and DevOps culture and best practices for international startups.","highlights":[]},{"company":"Bosch","position":"DevOps Engineer for automated driving","website":"https://www.bosch.hu","startDate":"2019-10-15","endDate":"2020-10-10","summary":"Joined the Athena project, a Bosch & Daimler effort to bring a level 4 autonomous car to the streets.","highlights":[]},{"company":"Asseco PST","position":"DevOps Engineer","website":"https://www.pst.asseco.com","startDate":"2018-04-01","endDate":"2019-08-30","summary":"Joined Asseco PST DevOps team to help them deliver happiness to their customers","highlights":[]},{"company":"Asseco PST","position":"Backend Developer","website":"https://www.pst.asseco.com","startDate":"2017-08-16","endDate":"","summary":"Started my first professional developer experience as a Backend Developer for Asseco PST","highlights":[]},{"company":"European GNSS Agency","position":"IT Support Technician","website":"https://www.gsa.europea.eu","startDate":"2016-05-01","endDate":"","summary":"Moved to Prague, Czech Republic to intern for the European Commission helping them build one of the biggest european projects, Galileo Satellite System","highlights":[]},{"company":"Empresa de Electricidade da Madeira","position":"IT Support Technician","website":"https://www.eem.pt","startDate":"2015-03-01","endDate":"","summary":"My first real work experience. Interning as an IT Support Technician I was able to learn and explore way more than the workings of a big IT Infrastructure. I got to work with PowerShell scripting, PHP and email marketing.","highlights":[]}],"education":[{"institution":"University of Madeira","area":"Computer Engineering","studyType":"Bachelor","startDate":"2011-09-15","endDate":"2019-06-07","courses":["Object Oriented Programming","Database Management Systems","Operating systems and computers architectures","Requirements Engineering"]}],"skills":[{"name":"Jenkins","level":"Advanced","keywords":["DevOps"]},{"name":"Continuous Integration","level":"Advanced","keywords":["DevOps"]},{"name":"Scripting","level":"Advanced","keywords":["DevOps"]},{"name":"Containers","level":"Advanced","keywords":["DevOps"]},{"name":"Cloud","level":"Basic","keywords":["DevOps"]},{"name":"Troubleshooting","level":"Advanced","keywords":["DevOps"]},{"name":"Infrastructure as Code","level":"Intermediate","keywords":["DevOps"]},{"name":"Object Oriented Programming","level":"Advanced","keywords":["Software Developer"]},{"name":"Design Patterns","level":"Intermediate","keywords":["Software Developer"]},{"name":"Git","level":"Intermediate","keywords":["Software Developer"]},{"name":"REST API","level":"Advanced","keywords":["Software Developer"]},{"name":"Unit Testing","level":"Intermediate","keywords":["Software Developer"]},{"name":"MySQL","level":"Intermediate","keywords":["Software Developer"]},{"name":"MongoDB","level":"Intermediate","keywords":["Software Developer"]}],"languages":[{"language":"English","fluency":"Fluent speaker"},{"language":"Portuguese","fluency":"Native speaker"}],"interests":[{"name":"Table tennis","x_icon":"fa-table-tennis"},{"name":"Travel bug","x_icon":"fa-globe-africa"},{"name":"Foodie","x_icon":"fa-utensils"},{"name":"Living in the present","x_icon":"fa-brain"}]}')},4:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),i=t.n(r);var l=function(e){return s.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable"},e.text)},o=t(1);class c extends s.a.Component{constructor(e){super(e),this.state={showMenu:!1},this.handleMenuClick=this.handleMenuClick.bind(this)}handleMenuClick(e){const a=this.state.showMenu;this.setState({showMenu:!a})}render(){return s.a.createElement("nav",{className:"navbar is-transparent"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{href:"/",className:"navbar-item title is-unselectable my-name"},o.basics.name),s.a.createElement("span",{className:"navbar-burger burger",onClick:this.handleMenuClick},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:"navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)},s.a.createElement("div",{className:"navbar-end",onClick:this.handleMenuClick},s.a.createElement(l,{text:"About Me",href:"#aboutMe"})))))}}var m=c;var u=function(){return s.a.createElement("section",{className:"hero is-dark is-fullheight has-bg-image"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(m,null)),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"subtitle is-5 has-text-weight-light"},"I'm a"),s.a.createElement("h1",{className:"title"},o.basics.label),s.a.createElement("h2",{className:"subtitle"},"based in ",o.basics.location.region,", ",o.basics.location.country))),s.a.createElement("div",{className:"hero-foot",style:{paddingBottom:"20px"}},s.a.createElement("div",{className:"columns is-mobile"},s.a.createElement("div",{className:"column"}),o.basics.profiles.map((e,a)=>s.a.createElement("div",{key:a,className:"column has-text-centered"},s.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.network},s.a.createElement("span",{className:"icon is-medium is-"},s.a.createElement("i",{className:e.x_icon}))))),s.a.createElement("div",{className:"column"}))))};var d=function(){return s.a.createElement("header",null,s.a.createElement(u,null))};var p=function(e){const a="fas fa-1x "+e.faIcon;return s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},e.text),s.a.createElement("span",{className:"tag is-success"},s.a.createElement("i",{className:a}))))};var h=function(){return s.a.createElement("section",{className:"section has-background-link",id:"aboutMe"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("figure",{className:"image container is-180x180"},s.a.createElement("img",{width:"180px",height:"180px",src:o.basics.picture,alt:o.basics.name,className:"is-rounded",onError:e=>{e.target.onerror=null,e.target.src=o.basics.x_pictureFallback}})),s.a.createElement("p",{className:"subtitle is-4 has-text-white has-text-weight-bold"},o.basics.x_title),s.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},o.basics.summary),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline has-text-centered"},o.interests.map((e,a)=>s.a.createElement(p,{key:a,text:e.name,faIcon:e.x_icon}))))))};n.Component;var v=function(){return s.a.createElement("main",null,s.a.createElement(h,null))};class g extends n.Component{componentDidMount(){document.title=[o.basics.name,o.basics.label,[o.basics.location.region,o.basics.location.country].join(", ")].join(" | ")}render(){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement(v,null))}}var b=g;i.a.render(s.a.createElement(b,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.18d088cd.chunk.js.map
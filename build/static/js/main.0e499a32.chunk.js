(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{337:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(21),r=t.n(i);var l=function(e){return s.a.createElement("a",{href:e.href,className:"navbar-item is-unselectable"},e.text)},c=t(5);class o extends s.a.Component{constructor(e){super(e),this.state={showMenu:!1},this.handleMenuClick=this.handleMenuClick.bind(this)}handleMenuClick(e){const a=this.state.showMenu;this.setState({showMenu:!a})}render(){return s.a.createElement("nav",{className:"navbar is-transparent"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{href:"/",className:"navbar-item title is-unselectable my-name"},c.basics.name),s.a.createElement("span",{className:"navbar-burger burger",onClick:this.handleMenuClick},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:"navbar-menu nav-menu "+(this.state.showMenu?"is-active":null)},s.a.createElement("div",{className:"navbar-end",onClick:this.handleMenuClick},s.a.createElement(l,{text:"About Me",href:"#aboutMe"}),s.a.createElement(l,{text:"Skills",href:"#skills"}),s.a.createElement(l,{text:"Experience",href:"#experience"})))))}}var m=o,d=t(84),u=t.n(d);var g={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};var p=function(){return s.a.createElement("section",{className:"hero is-dark is-fullheight",style:{position:"relative",overflow:"hidden",backgroundImage:"linear-gradient(to right, #e66465, #9198e5)"}},s.a.createElement("div",{style:{position:"absolute"}},s.a.createElement(u.a,{height:"100vh",width:"100vw",params:g})),s.a.createElement("div",{className:"hero-head"},s.a.createElement(m,null)),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"subtitle is-5 has-text-weight-light"},"I'm a"),s.a.createElement("h1",{className:"title"},c.basics.label),s.a.createElement("h2",{className:"subtitle"},"based in ",c.basics.location.region,", ",c.basics.location.country))),s.a.createElement("div",{className:"hero-foot",style:{paddingBottom:"20px",zIndex:"10"}},s.a.createElement("div",{className:"columns is-mobile"},s.a.createElement("div",{className:"column"}),c.basics.profiles.map((e,a)=>s.a.createElement("div",{key:a,className:"column has-text-centered"},s.a.createElement("a",{href:e.url,target:"blank",className:"is-hovered",title:e.network},s.a.createElement("span",{className:"icon is-medium is-"},s.a.createElement("i",{className:e.x_icon}))))),s.a.createElement("div",{className:"column"}))))};var h=function(){return s.a.createElement("header",null,s.a.createElement(p,null))};var v=function(e){const a="fas fa-1x "+e.faIcon;return s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"tags has-addons"},s.a.createElement("span",{className:"tag is-dark"},e.text),s.a.createElement("span",{className:"tag is-success"},s.a.createElement("i",{className:a}))))};var b=function(){return s.a.createElement("section",{className:"section has-background-link",id:"aboutMe"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("figure",{className:"image container is-180x180"},s.a.createElement("img",{width:"180px",height:"180px",src:c.basics.picture,alt:c.basics.name,className:"is-rounded",onError:e=>{e.target.onerror=null,e.target.src=c.basics.x_pictureFallback}})),s.a.createElement("p",{className:"subtitle is-4 has-text-white has-text-weight-bold"},c.basics.x_title),s.a.createElement("p",{className:"subtitle is-5 has-text-white has-text-weight-light summary-text"},c.basics.summary),s.a.createElement("div",{className:"container interests"},s.a.createElement("div",{className:"field is-grouped is-grouped-multiline is-grouped-centered has-text-centered"},c.interests.map((e,a)=>s.a.createElement(v,{key:a,text:e.name,faIcon:e.x_icon}))))))},E=t(89),f=t(366),w=(t(7),t(373)),y=t(370),k=t(371),N=t(372),x=t(39),D=t(38),S=t(369);const C=Object(f.a)(e=>({root:{maxWidth:345,backgroundColor:"#0"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:D.a[500]}}));var I=function(e){const a=C(),t=s.a.useState(!1),n=Object(E.a)(t,2),i=n[0],r=n[1];return s.a.createElement(S.a,{item:!0,xs:6,md:e.size,key:e.index},s.a.createElement(w.a,{className:a.root},s.a.createElement(y.a,{onClick:()=>{r(!i)},"aria-expanded":i,"aria-label":"show more",avatar:s.a.createElement("figure",{class:"image is-48x48"},s.a.createElement("img",{class:"is-square",src:e.icon})),title:s.a.createElement("p",{style:{wordBreak:"break-word"}},e.name)}),s.a.createElement(N.a,{in:i,timeout:"auto",unmountOnExit:!0},s.a.createElement(k.a,null,s.a.createElement(x.a,{paragraph:!0},e.use)))))};const z=Object(f.a)(e=>({root:{flexGrow:1,padding:e.spacing(2)}}));var _=function(){const e=z();return s.a.createElement("section",{className:"section",id:"skills"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Skills"),s.a.createElement("div",{className:e.root},s.a.createElement(S.a,{container:!0,spacing:3,justify:"center"},c.skills.map(e=>s.a.createElement(I,{index:c.skills.indexOf(e),name:e.name,icon:e.icon,use:e.use,size:e.size}))))))};var M=function(e){return s.a.createElement("div",{className:"timeline-item is-success"},s.a.createElement("div",{className:"timeline-marker is-image is-48x48"},s.a.createElement("a",{href:e.website},s.a.createElement("img",{src:e.image,alt:"",class:"center"}))),s.a.createElement("div",{className:"timeline-content"},function(e){return"None"==e.endDate?s.a.createElement("p",{className:"heading"},e.date):s.a.createElement("p",{className:"heading"},e.date,"-",e.endDate)}(e),s.a.createElement("h1",{className:"title is-4"},e.company),s.a.createElement("p",{className:"subtitle is-6"},e.position),s.a.createElement("p",{style:{maxWidth:"25em"}},e.summary)))};var A=function(e){return s.a.createElement("header",{className:"timeline-header"},s.a.createElement("span",{className:"tag is-success"},e.year))};var T=function(){let e=window.screen.width<768;return console.log(e),s.a.createElement("div",{className:"timeline ".concat(e?"is-left":"is-centered")},s.a.createElement("header",{className:"timeline-header"},s.a.createElement("span",{className:"tag is-medium is-dark"},(new Date).getFullYear())),s.a.createElement("div",{className:"timeline-item"},s.a.createElement("div",{className:"timeline-marker is-success"}),s.a.createElement("div",{className:"timeline-content"})),c.work.map(e=>new Date(e.startDate).getFullYear()).filter((e,a,t)=>t.indexOf(e)===a).map((e,a)=>{let t=[];return t.push(s.a.createElement(A,{key:a,year:e})),t.push(c.work.filter(a=>new Date(a.startDate).getFullYear()===e).map((e,a)=>s.a.createElement(M,{key:a,image:e.image,date:new Date(e.startDate).toLocaleString("en-UK",{month:"long",year:"numeric"}),company:e.company,summary:e.summary,position:e.position,website:e.website,endDate:e.endDate}))),t}))};var j=function(){return s.a.createElement("section",{className:"section",id:"experience"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Experience"),s.a.createElement(T,null)))};n.Component;var G=function(){return s.a.createElement("main",null,s.a.createElement(b,null),s.a.createElement(j,null),s.a.createElement(_,null))};class O extends n.Component{componentDidMount(){document.title=[c.basics.name,c.basics.label,[c.basics.location.region,c.basics.location.country].join(", ")].join(" | ")}render(){return s.a.createElement("div",null,s.a.createElement(h,null),s.a.createElement(G,null))}}var B=O;r.a.render(s.a.createElement(B,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"basics":{"name":"Dhruva Bansal","label":"Software Engineer","picture":"images/pfp.webp","x_pictureFallback":"images/pfp.jpg","x_title":"Hey There! Glad you\'re here","summary":"I am a Computer Science student passionate about building intelligent products. Currently, I am an MS CS student at Stanford, specializing in Artificial Intelligence. In the past, I have interned at Amazon Robotics and Honeywell as a software engineer. As an undergraduate student at Georgia Tech, I also conducted research on various topics in natural language and robotics.","location":{"country":"United States","countryCode":"US","region":"California"},"profiles":[{"network":"LinkedIn","username":"dhruvabansal2k","url":"https://www.linkedin.com/in/dhruvabansal2k","x_icon":"fab fa-2x fa-linkedin"},{"network":"GitHub","username":"DhruvaBansal00","url":"https://github.com/DhruvaBansal00","x_icon":"fab fa-2x fa-github"},{"network":"Devpost","username":"DhruvaBansal00","url":"https://devpost.com/DhruvaBansal00","x_icon":"fab fa-2x fa-dev"}]},"work":[{"company":"Stanford University","position":"Incoming MS CS Student","website":"https://www.stanford.edu/","startDate":"2021-09-06","endDate":"None","image":"images/timeline/stanford.png","summary":"Incoming MS CS student at Stanford University, concentrating in Artificial Intelligence.","highlights":[]},{"company":"Amazon Robotics","position":"Software Engineering Intern","website":"https://www.linkedin.com/company/kiva-systems/","startDate":"2021-05-23","endDate":"AUGUST 2021","image":"images/timeline/amazon.png","summary":"Incoming Software Engineering Intern. Deferred from Summer 2020 due to COVID-19.","highlights":[]},{"company":"Georgia Tech","position":"Graduation!","website":"https://www.gatech.edu/","startDate":"2021-05-06","endDate":"None","image":"images/timeline/gt.png","summary":"Graduated from Georgia Tech with a BS in CS with threads in Intelligence and Theory.","highlights":[]},{"company":"Georgia Tech RAIL","position":"Undergraduate Researcher","website":"http://rail.gatech.edu/","image":"images/timeline/gt.png","startDate":"2020-01-02","endDate":"MAY 2021","summary":"Collaborated with Prof. Sonia Chernova and Dr. Harish Ravichandar on topics in robot trajectory optimization and knowledge graphs inference.","highlights":[]},{"company":"Honeywell","position":"Software Engineering Intern","website":"https://www.honeywell.com/","startDate":"2019-05-07","endDate":"JULY 2019","image":"images/timeline/honeywell.png","summary":"Developed upon Honeywell Connected Plant\'s backend API to support analysis and visualization of warehouses.","highlights":[]},{"company":"Georgia Tech CCG","position":"Undergraduate Researcher","website":"https://gvu.gatech.edu/research/labs/contextual-computing-group","image":"images/timeline/gvu.jpeg","startDate":"2018-09-02","endDate":"MAY 2021","summary":"Collaborated with Prof. Thad Starner on the application of American Sign Language towards creating a game for deaf children.","highlights":[]},{"company":"Georgia Tech","position":"Incoming BS CS Student","website":"https://www.gatech.edu/","startDate":"2018-08-06","endDate":"None","image":"images/timeline/gt.png","summary":"Entered Georgia Tech as a undergraduate student majoring in CS.","highlights":[]}],"education":[{"institution":"University of Madeira","area":"Computer Engineering","studyType":"Bachelor","startDate":"2011-09-15","endDate":"2019-06-07","courses":["Object Oriented Programming","Database Management Systems","Operating systems and computers architectures","Requirements Engineering"]}],"skills":[{"name":"Python","icon":"images/skills/python.png","use":"","size":2,"level":"Advanced"},{"name":"PyTorch","level":"Advanced","size":2,"icon":"images/skills/pytorch.png","use":""},{"name":"Java","level":"Advanced","size":2,"icon":"images/skills/java.webp","use":""},{"name":"C++","level":"Advanced","size":2,"icon":"images/skills/c++.png","use":""},{"name":"OpenCV","level":"Advanced","size":2,"icon":"images/skills/opencv.png","use":""},{"name":"Git","level":"Advanced","size":2,"icon":"images/skills/git.png","use":""},{"name":"Robot Operating System","level":"Advanced","size":3,"icon":"images/skills/ros.png","use":""},{"name":"C","level":"Advanced","size":2,"icon":"images/skills/c.webp","use":""},{"name":"TensorFlow","level":"Advanced","size":3,"icon":"images/skills/tensorflow.png","use":""},{"name":"Node.js","level":"Intermediate","size":2,"icon":"images/skills/nodejs.png","use":""},{"name":"JavaScript","level":"Intermediate","size":3,"icon":"images/skills/javascript.png","use":""},{"name":"Matlab","level":"Intermediate","size":2,"icon":"images/skills/matlab.png","use":""},{"name":"Bash","level":"Intermediate","size":2,"icon":"images/skills/bash.png","use":""},{"name":"MongoDB","level":"Intermediate","size":2,"icon":"images/skills/mongodb.jpeg","use":""},{"name":"Docker","level":"Intermediate","size":2,"icon":"images/skills/docker.png","use":""}],"languages":[{"language":"English","fluency":"Fluent speaker"},{"language":"Portuguese","fluency":"Native speaker"}],"interests":[{"name":"Table tennis","x_icon":"fa-table-tennis"},{"name":"Travel bug","x_icon":"fas fa-globe-americas"},{"name":"Foodie","x_icon":"fa-utensils"},{"name":"Ukulele","x_icon":"fas fa-guitar"}]}')},94:function(e,a,t){e.exports=t(337)}},[[94,1,2]]]);
//# sourceMappingURL=main.0e499a32.chunk.js.map
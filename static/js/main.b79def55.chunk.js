(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),l=(a(28),a(22)),s=a(16),c=a(11),d=a(7),m=a(1),p={hidden:{rotate:-180},visible:{rotate:0,transition:{duration:1}}},u={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}}},v=function(){return i.a.createElement("header",null,i.a.createElement(m.b.div,{className:"logo",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:.7},i.a.createElement(m.b.svg,{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",variants:p,initial:"hidden",animate:"visible"},i.a.createElement(m.b.path,{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z",variants:u}),i.a.createElement(m.b.path,{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z",variants:u}))),i.a.createElement(m.b.div,{className:"title",initial:{y:-250},animate:{y:-10},transition:{delay:.2,type:"spring",stiffness:120}},i.a.createElement("h1",null,"Pizza Joint")))},b=a(5),h={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}},animationTwo:{y:[0,-40],x:[0,0],transition:{yoyo:1/0,duration:.25,ease:"easeOut"}}},E=function(){var e=Object(m.c)("animationOne","animationTwo"),t=Object(c.a)(e,2),a=t[0],n=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.b.div,{className:"loader",variants:h,animate:a}),i.a.createElement("div",{onClick:function(){return n()},style:{cursor:"pointer"}},"\u10d0\u10dc\u10d8\u10db\u10d0\u10ea\u10d8\u10d8\u10e1 \u10e8\u10d4\u10ea\u10d5\u10da\u10d0"))},y={hover:{scale:1.1,textShadow:"0 0 8px rgb(255,255,255)",boxShadow:"0 0 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}},x={hidden:{opacity:0},visible:{opacity:1,transition:{delay:1.5,duration:1.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},g=function(){return i.a.createElement(m.b.div,{className:"home container",variants:x,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"\u10d9\u10d4\u10d7\u10d8\u10da\u10d8 \u10d8\u10e7\u10dd\u10e1 \u10d7\u10e5\u10d5\u10d4\u10dc\u10d8 \u10db\u10dd\u10d1\u10e0\u10eb\u10d0\u10dc\u10d4\u10d1\u10d0 Pizza Joint-\u10e8\u10d8"),i.a.createElement(b.b,{to:"/base"},i.a.createElement(m.b.button,{variants:y,whileHover:"hover"},"\u10e8\u10d4\u10e5\u10db\u10d4\u10dc\u10d8 \u10e8\u10d4\u10dc\u10d8 \u10de\u10d8\u10ea\u10d0")),i.a.createElement(E,null))},f={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},w={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},O={hover:{scale:1.1,textShadow:"0 0 8px rgb(255,255,255)",boxShadow:"0 0 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}},z=function(e){var t=e.addBase,a=e.pizza;return i.a.createElement(m.b.div,{className:"base container",variants:f,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"\u10dc\u10d0\u10d1\u10d8\u10ef\u10d8 1: \u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 \u10e8\u10d4\u10dc\u10d8 \u10de\u10d8\u10ea\u10d8\u10e1 \u10d1\u10d0\u10d6\u10d0"),i.a.createElement("ul",null,["\u10d9\u10da\u10d0\u10e1\u10d8\u10d9\u10e3\u10e0\u10d8","\u10d7\u10ee\u10d4\u10da\u10d8 \u10d3\u10d0 \u10ee\u10e0\u10d0\u10e8\u10e3\u10dc\u10d0","\u10e1\u10e5\u10d4\u10da\u10d8 \u10e5\u10d4\u10e0\u10e5\u10d8"].map((function(e){var n=a.base===e?"active":"";return i.a.createElement(m.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),a.base&&i.a.createElement(m.b.div,{className:"next",variants:w},i.a.createElement(b.b,{to:"/toppings"},i.a.createElement(m.b.button,{variants:O,whileHover:"hover"},"\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8"))))},j=function(e){var t=e.addTopping,a=e.pizza,n={hover:{scale:1.1,textShadow:"0 0 8px rgb(255,255,255)",boxShadow:"0 0 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}};return i.a.createElement(m.b.div,{className:"toppings container",variants:{hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"\u10dc\u10d0\u10d1\u10d8\u10ef\u10d8 2: \u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 \u10d8\u10dc\u10d2\u10e0\u10d4\u10d3\u10d8\u10d4\u10dc\u10e2\u10d4\u10d1\u10d8"),i.a.createElement("ul",null,["\u10e1\u10dd\u10d9\u10dd","\u10ec\u10d8\u10ec\u10d0\u10d9\u10d0","\u10ee\u10d0\u10ee\u10d5\u10d8","\u10d6\u10d4\u10d7\u10d8\u10e1\u10ee\u10d8\u10da\u10d8","\u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d8\u10d7\u10d8 \u10e7\u10d5\u10d4\u10da\u10d8","\u10de\u10dd\u10db\u10d8\u10d3\u10dd\u10e0\u10d8"].map((function(e){var n=a.toppings.includes(e)?"active":"";return i.a.createElement(m.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(b.b,{to:"/order"},i.a.createElement(m.b.button,{variants:n,whileHover:"hover"},"\u10e8\u10d4\u10d9\u10d5\u10d4\u10d7\u10d0")))},N={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",mass:.4,damping:8,when:"beforeChildren",staggerChildren:.4}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},S={hidden:{opacity:0},visible:{opacity:1}},k=function(e){var t=e.pizza,a=e.setShowModal;return Object(n.useEffect)((function(){setTimeout((function(){a(!0)}),5e3)}),[a]),i.a.createElement(m.b.div,{className:"container order",variants:N,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"\u10d2\u10db\u10d0\u10d3\u10da\u10dd\u10d1\u10d7 \u10e8\u10d4\u10d9\u10d5\u10d4\u10d7\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 :)"),i.a.createElement(m.b.p,{variants:S},"\u10d7\u10e5\u10d5\u10d4\u10dc \u10e8\u10d4\u10e3\u10d9\u10d5\u10d4\u10d7\u10d4\u10d7 ",t.base," \u10de\u10d8\u10ea\u10d0:"),i.a.createElement(m.b.div,{variants:S},t.toppings.map((function(e){return i.a.createElement("div",{key:e},e)}))))},C={hidden:{opacity:0},visible:{opacity:1}},M={hidden:{y:"-100vh",opacity:0},visible:{y:"200px",opacity:1,transition:{delay:.5}}},B=function(e){var t=e.showModal;e.setShowModal;return i.a.createElement(m.a,{exitBeforeEnter:!0},t&&i.a.createElement(m.b.div,{className:"backdrop",variants:C,initial:"hidden",animate:"visible",exit:"hidden"},i.a.createElement(m.b.div,{className:"modal",variants:M},i.a.createElement("p",null,"\u10d2\u10e1\u10e3\u10e0\u10d7 \u10d0\u10ee\u10d0\u10da\u10d8 \u10de\u10d8\u10ea\u10d8\u10e1 \u10e8\u10d4\u10e5\u10db\u10dc\u10d0?"),i.a.createElement(b.b,{to:"/"},i.a.createElement("button",null,"\u10e8\u10d4\u10e5\u10db\u10d4\u10dc\u10d8 \u10d0\u10ee\u10d0\u10da\u10d8")))))};var I=function(){var e=Object(d.f)(),t=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(t,2),r=a[0],o=a[1],p=Object(n.useState)(!1),u=Object(c.a)(p,2),b=u[0],h=u[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(B,{showModal:b,setShowModal:h}),i.a.createElement(m.a,{exitBeforeEnter:!0,onExitComplete:function(){return h(!1)}},i.a.createElement(d.c,{location:e,key:e.key},i.a.createElement(d.a,{path:"/base"},i.a.createElement(z,{addBase:function(e){o(Object(s.a)({},r,{base:e}))},pizza:r})),i.a.createElement(d.a,{path:"/toppings"},i.a.createElement(j,{addTopping:function(e){var t;t=r.toppings.includes(e)?r.toppings.filter((function(t){return t!==e})):[].concat(Object(l.a)(r.toppings),[e]),o(Object(s.a)({},r,{toppings:t}))},pizza:r})),i.a.createElement(d.a,{path:"/order"},i.a.createElement(k,{pizza:r,setShowModal:h})),i.a.createElement(d.a,{path:"/"},i.a.createElement(g,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b.a,null,i.a.createElement(I,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b79def55.chunk.js.map
/*! For license information please see main.4ced9614.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(16),s=c.n(r),a=(c(45),c(46),c(9)),j=c(3),o=c(1);function l(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"WELCOME"}),Object(o.jsx)(a.b,{to:"/home",children:Object(o.jsx)("button",{children:"GET INTO"})})]})}var d=c(14),b=c(23),h=c(37),u=c(38),O=c.n(u);function p(){return function(){var e=Object(h.a)(Object(b.a)().mark((function e(t){var c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("http://localhost:3001/recipe");case 2:return c=e.sent,e.abrupt("return",t({type:"GET_RECIPES",payload:c.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e){var t=e.title,c=e.image,n=e.diets,i=e.id;return Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("h5",{children:n}),Object(o.jsx)("img",{src:c,alt:"img not found",width:"200px",heigth:"250px"}),Object(o.jsx)(a.b,{to:"/detail/"+i,children:Object(o.jsx)("button",{id:"Detail",children:"Detail"})})]})}function v(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.recipes}));return Object(n.useEffect)((function(){e(p())}),[e]),Object(o.jsxs)("div",{children:[Object(o.jsx)(a.b,{to:"/recipes",children:"Create recipe"}),Object(o.jsx)("h1",{children:"Recipes"}),Object(o.jsx)("button",{onClick:function(t){!function(t){t.preventDefault(),e(p())}(t)},children:"volver a cargar todas las recetas"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("select",{children:[Object(o.jsx)("option",{value:"",children:"Filter Alphabetically"}),Object(o.jsx)("option",{value:"a-z",children:"A-Z"}),Object(o.jsx)("option",{value:"z-a",children:"Z-A"})]}),Object(o.jsxs)("select",{children:[Object(o.jsx)("option",{value:"",children:"Filter Score"}),Object(o.jsx)("option",{value:"asc",children:"Max-Min"}),Object(o.jsx)("option",{value:"des",children:"Min-Max"})]}),null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsx)(n.Fragment,{children:Object(o.jsx)(a.b,{to:"/home"+e.id,children:Object(o.jsx)(x,{title:e.title,diets:e.diets,image:e.img})})})}))]})]})}var f=function(){return Object(o.jsx)(a.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(j.b,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:l}),Object(o.jsx)(j.a,{path:"/home",component:v})]})})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))},g=c(17),E=c(39),C=c(40),y=c(11),F={recipes:[]};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return"GET_RECIPES"===t.type?Object(y.a)(Object(y.a)({},e),{},{recipes:t.payload}):e},T=Object(g.createStore)(M,Object(E.composeWithDevTools)(Object(g.applyMiddleware)(C.a)));s.a.render(Object(o.jsxs)(d.a,{store:T,children:[Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})}),","]}),document.getElementById("root")),m()}},[[81,1,2]]]);
//# sourceMappingURL=main.4ced9614.chunk.js.map
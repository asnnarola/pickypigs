(this["webpackJsonppicky-pigs-frontend"]=this["webpackJsonppicky-pigs-frontend"]||[]).push([[14],{1072:function(e,a,t){},1073:function(e,a,t){},1074:function(e,a,t){},1092:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t(0),c=t.n(l),r=t(57),i=(t(1072),t(254)),m=t.n(i),s=[{name:"Egg",image:m.a},{name:"Milk",image:m.a},{name:"Celery",image:m.a},{name:"Mustard",image:m.a},{name:"Lupin",image:m.a},{name:"Nuts",image:m.a},{name:"Peanuts",image:m.a},{name:"Sesame",image:m.a},{name:"Molluscs",image:m.a},{name:"Crustaceans",image:m.a},{name:"Fish",image:m.a},{name:"Cereals (Wheat)",image:m.a},{name:"Soya",image:m.a},{name:"Sulphur dioxide",image:m.a}],u=["Pescatarian","Vegetarian","Plant Based","Low gluten","Lactose free","Halal","Kosher","Low sugar"],o=["Organic","Vegan","Pregnant"],d=["Pet Friendly","Child friendly","Live music","Outside sitting","Disabled access","Reservations needed","Bring your own","Large parties accepted","Private dining room","Table service","Bar service","Holding bar","R20","Take away"],E=function(){var e=Object(l.useState)([]),a=Object(n.a)(e,2),t=a[0],i=a[1],m=Object(l.useState)([]),E=Object(n.a)(m,2),g=E[0],p=E[1],f=Object(l.useState)([]),v=Object(n.a)(f,2),b=v[0],N=v[1],O=Object(l.useState)([]),y=Object(n.a)(O,2),h=y[0],k=y[1],x=function(e){(e.preventDefault(),-1!==t.indexOf(e.target.id))?t.indexOf(e.target.id)>-1&&i(t.filter((function(a){return a!==e.target.id}))):i([].concat(Object(r.a)(t),[e.target.id]))},j=function(e){if(e.preventDefault(),-1!==g.indexOf(e.target.id)){var a=g.indexOf(e.target.id);a>-1&&p(g.slice(0,a).concat(g.slice(a+1,g.length)))}else p([].concat(Object(r.a)(g),[e.target.id]))},F=function(e){if(e.preventDefault(),-1!==b.indexOf(e.target.id)){var a=b.indexOf(e.target.id);a>-1&&N(b.slice(0,a).concat(b.slice(a+1,b.length)))}else N([].concat(Object(r.a)(b),[e.target.id]))},w=function(e){if(e.preventDefault(),-1!==h.indexOf(e.target.id)){var a=h.indexOf(e.target.id);a>-1&&k(h.slice(0,a).concat(h.slice(a+1,h.length)))}else k([].concat(Object(r.a)(h),[e.target.id]))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",null,t,"--",g,"--",b,"--",h,c.a.createElement("div",null,c.a.createElement("p",null,"You don't have set your preferences"),c.a.createElement("p",null,"Please set your preferences, so we can show you the best results according to your preferences")),c.a.createElement("div",null,c.a.createElement("p",null,"ALLERGEN INFORMATION"),c.a.createElement("div",null,s&&s.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement("button",{id:e.name,onClick:x,className:"mr-3 ".concat(-1!==t.indexOf(e.name)&&"btn btn-primary")},c.a.createElement("img",{src:e.image,className:"img-fluid"}),e.name))})))),c.a.createElement("div",null,c.a.createElement("p",null,"DIETARY PREFERENCES"),c.a.createElement("div",null,u&&u.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement("button",{id:e,onClick:j,className:"mr-3 ".concat(-1!==g.indexOf(e)&&"btn btn-primary")},e))})))),c.a.createElement("div",null,c.a.createElement("p",null,"LIFESTYLE CHOICE"),c.a.createElement("div",null,o&&o.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement("button",{id:e,onClick:F,className:"mr-3 ".concat(-1!==b.indexOf(e)&&"btn btn-primary")},e))})))),c.a.createElement("div",null,c.a.createElement("p",null,"RESTAURANT FEATURES"),c.a.createElement("div",null,d&&d.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement("button",{id:e,onClick:w,className:"mr-3 ".concat(-1!==h.indexOf(e)&&"btn btn-primary")},e))}))))))},g=(t(1073),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("p",null,"Full name"),c.a.createElement("p",null,"Password"),c.a.createElement("p",null,"Date of Birth"),c.a.createElement("p",null,"Gender")),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("p",null,"Naresh Bingi"),c.a.createElement("p",null,"*************"),c.a.createElement("p",null,"01 January, 2020"),c.a.createElement("p",null,"Male")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("p",null,"Email"),c.a.createElement("p",null,"Phone number"),c.a.createElement("p",null,"Address")),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("p",null,"naresh@pickypigs.com"),c.a.createElement("p",null,"+44 994 535 2904"),c.a.createElement("p",null,"A 11, Tato Building,")))))))}),p=t(938),f=t.n(p);t(1074),a.default=function(){var e=Object(l.useState)(!0),a=Object(n.a)(e,2),t=a[0],r=a[1],i=Object(l.useState)(!1),m=Object(n.a)(i,2),s=m[0],u=m[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"userdetail-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"userprofile-block"},c.a.createElement("div",{className:"userprofile-select"},c.a.createElement("img",{src:f.a,alt:"",width:"200px",className:"img-fluid img-thumbnil"}),c.a.createElement("form",null,c.a.createElement("div",{class:"form-group"},c.a.createElement("input",{type:"file",class:"form-control-file userprofile-control",id:"exampleFormControlFile1"})))),c.a.createElement("h5",{className:"username-txt"},"Naresh Bingi"))),c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"text-center userdetails-tabs"},c.a.createElement("div",{className:"userdetail-btncenter"},c.a.createElement("button",{onClick:function(){r(!0),u(!1)}},"Profile"),c.a.createElement("button",{onClick:function(){r(!1),u(!0)}},"My Preferences")),c.a.createElement("div",{className:"userdetail-btnedit"},c.a.createElement("button",null,"edit")))))),c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 pl-0 pr-0"},c.a.createElement("div",{className:"border-seprater"})))),c.a.createElement("div",{className:"container"},c.a.createElement("div",null,t?c.a.createElement(g,null):null,s?c.a.createElement(E,null):null))))}},938:function(e,a,t){e.exports=t.p+"static/media/dishimg1.5d6be85d.jpg"}}]);
//# sourceMappingURL=14.54ddd2f5.chunk.js.map
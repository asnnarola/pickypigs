(this["webpackJsonppicky-pigs-frontend"]=this["webpackJsonppicky-pigs-frontend"]||[]).push([[13],{1075:function(e,a,t){},1076:function(e,a,t){e.exports=t.p+"static/media/cart.e8b091a9.svg"},1077:function(e,a,t){},1078:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},1079:function(e,a,t){"use strict";var n=t(0),r=function(e){return e&&"function"!==typeof e?function(a){e.current=a}:e};a.a=function(e,a){return Object(n.useMemo)((function(){return function(e,a){var t=r(e),n=r(a);return function(e){t&&t(e),n&&n(e)}}(e,a)}),[e,a])}},1082:function(e,a,t){"use strict";var n=t(1),r=t(9),l=t(15),s=t.n(l),c=t(0),o=t.n(c),i=t(917),m=t(120),u=t(67),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,i=Object(r.a)(e,["bsPrefix","className","as"]);t=Object(u.a)(t,"navbar-brand");var m=c||(i.href?"a":"span");return o.a.createElement(m,Object(n.a)({},i,{ref:a,className:s()(l,t)}))}));d.displayName="NavbarBrand";var f=d,p=t(846),b=t(902),v=o.a.forwardRef((function(e,a){var t=e.children,l=e.bsPrefix,s=Object(r.a)(e,["children","bsPrefix"]);return l=Object(u.a)(l,"navbar-collapse"),o.a.createElement(b.a.Consumer,null,(function(e){return o.a.createElement(p.a,Object(n.a)({in:!(!e||!e.expanded)},s),o.a.createElement("div",{ref:a,className:l},t))}))}));v.displayName="NavbarCollapse";var g=v,h=t(62),N=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.children,m=e.label,d=e.as,f=void 0===d?"button":d,p=e.onClick,v=Object(r.a)(e,["bsPrefix","className","children","label","as","onClick"]);t=Object(u.a)(t,"navbar-toggler");var g=Object(c.useContext)(b.a)||{},N=g.onToggle,E=g.expanded,w=Object(h.a)((function(e){p&&p(e),N&&N()}));return"button"===f&&(v.type="button"),o.a.createElement(f,Object(n.a)({},v,{ref:a,onClick:w,"aria-label":m,className:s()(l,t,!E&&"collapsed")}),i||o.a.createElement("span",{className:t+"-icon"}))}));N.displayName="NavbarToggle",N.defaultProps={label:"Toggle navigation"};var E=N,w=t(907),x=Object(m.a)("navbar-text",{Component:"span"}),j=o.a.forwardRef((function(e,a){var t=Object(i.a)(e,{expanded:"onToggle"}),l=t.bsPrefix,m=t.expand,d=t.variant,f=t.bg,p=t.fixed,v=t.sticky,g=t.className,h=t.children,N=t.as,E=void 0===N?"nav":N,x=t.expanded,j=t.onToggle,y=t.onSelect,O=t.collapseOnSelect,k=Object(r.a)(t,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),P=Object(u.a)(l,"navbar"),C=Object(c.useCallback)((function(){y&&y.apply(void 0,arguments),O&&x&&j&&j(!1)}),[y,O,x,j]);void 0===k.role&&"nav"!==E&&(k.role="navigation");var S=P+"-expand";"string"===typeof m&&(S=S+"-"+m);var R=Object(c.useMemo)((function(){return{onToggle:function(){return j&&j(!x)},bsPrefix:P,expanded:!!x}}),[P,x,j]);return o.a.createElement(b.a.Provider,{value:R},o.a.createElement(w.a.Provider,{value:C},o.a.createElement(E,Object(n.a)({ref:a},k,{className:s()(g,P,m&&S,d&&P+"-"+d,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),h)))}));j.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},j.displayName="Navbar",j.Brand=f,j.Toggle=E,j.Collapse=g,j.Text=x;a.a=j},1087:function(e,a,t){"use strict";t.r(a);var n=t(5),r=t(0),l=t.n(r),s=t(1082),c=t(1),o=t(9),i=t(15),m=t.n(i),u=(t(901),t(917)),d=t(67),f=t(902),p=t(950),b=t(115),v=t(1078),g=t(1079),h=l.a.createContext(null);h.displayName="NavContext";var N=h,E=t(907),w=l.a.createContext(null),x=function(){},j=l.a.forwardRef((function(e,a){var t,n,s=e.as,i=void 0===s?"ul":s,m=e.onSelect,u=e.activeKey,d=e.role,f=e.onKeyDown,p=Object(o.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(v.a)(),j=Object(r.useRef)(!1),y=Object(r.useContext)(E.a),O=Object(r.useContext)(w);O&&(d=d||"tablist",u=O.activeKey,t=O.getControlledId,n=O.getControllerId);var k=Object(r.useRef)(null),P=function(e){var a=k.current;if(!a)return null;var t=Object(b.a)(a,"[data-rb-event-key]:not(.disabled)"),n=a.querySelector(".active");if(!n)return null;var r=t.indexOf(n);if(-1===r)return null;var l=r+e;return l>=t.length&&(l=0),l<0&&(l=t.length-1),t[l]},C=function(e,a){null!=e&&(m&&m(e,a),y&&y(e,a))};Object(r.useEffect)((function(){if(k.current&&j.current){var e=k.current.querySelector("[data-rb-event-key].active");e&&e.focus()}j.current=!1}));var S=Object(g.a)(a,k);return l.a.createElement(E.a.Provider,{value:C},l.a.createElement(N.Provider,{value:{role:d,activeKey:Object(E.b)(u),getControlledId:t||x,getControllerId:n||x}},l.a.createElement(i,Object(c.a)({},p,{onKeyDown:function(e){var a;switch(f&&f(e),e.key){case"ArrowLeft":case"ArrowUp":a=P(-1);break;case"ArrowRight":case"ArrowDown":a=P(1);break;default:return}a&&(e.preventDefault(),C(a.dataset.rbEventKey,e),j.current=!0,h())},ref:S,role:d}))))})),y=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.children,s=e.as,i=void 0===s?"div":s,u=Object(o.a)(e,["bsPrefix","className","children","as"]);return t=Object(d.a)(t,"nav-item"),l.a.createElement(i,Object(c.a)({},u,{ref:a,className:m()(n,t)}),r)}));y.displayName="NavItem";var O=y,k=t(351),P=t(62),C=(t(449),l.a.forwardRef((function(e,a){var t=e.active,n=e.className,s=e.eventKey,i=e.onSelect,u=e.onClick,d=e.as,f=Object(o.a)(e,["active","className","eventKey","onSelect","onClick","as"]),p=Object(E.b)(s,f.href),b=Object(r.useContext)(E.a),v=Object(r.useContext)(N),g=t;if(v){f.role||"tablist"!==v.role||(f.role="tab");var h=v.getControllerId(p),w=v.getControlledId(p);f["data-rb-event-key"]=p,f.id=h||f.id,f["aria-controls"]=w||f["aria-controls"],g=null==t&&null!=p?v.activeKey===p:t}"tab"===f.role&&(f.tabIndex=g?f.tabIndex:-1,f["aria-selected"]=g);var x=Object(P.a)((function(e){u&&u(e),null!=p&&(i&&i(p,e),b&&b(p,e))}));return l.a.createElement(d,Object(c.a)({},f,{ref:a,onClick:x,className:m()(n,g&&"active")}))})));C.defaultProps={disabled:!1};var S=C,R={disabled:!1,as:k.a},A=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.disabled,r=e.className,s=e.href,i=e.eventKey,u=e.onSelect,f=e.as,p=Object(o.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=Object(d.a)(t,"nav-link"),l.a.createElement(S,Object(c.a)({},p,{href:s,ref:a,eventKey:i,as:f,disabled:n,onSelect:u,className:m()(r,t,n&&"disabled")}))}));A.displayName="NavLink",A.defaultProps=R;var K=A,q=l.a.forwardRef((function(e,a){var t,n,s,i=Object(u.a)(e,{activeKey:"onSelect"}),b=i.as,v=void 0===b?"div":b,g=i.bsPrefix,h=i.variant,N=i.fill,E=i.justify,w=i.navbar,x=i.className,y=i.children,O=i.activeKey,k=Object(o.a)(i,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),P=Object(d.a)(g,"nav"),C=!1,S=Object(r.useContext)(f.a),R=Object(r.useContext)(p.a);return S?(n=S.bsPrefix,C=null==w||w):R&&(s=R.cardHeaderBsPrefix),l.a.createElement(j,Object(c.a)({as:v,ref:a,activeKey:O,className:m()(x,(t={},t[P]=!C,t[n+"-nav"]=C,t[s+"-"+h]=!!s,t[P+"-"+h]=!!h,t[P+"-fill"]=N,t[P+"-justified"]=E,t))},k),y)}));q.displayName="Nav",q.defaultProps={justify:!1,fill:!1},q.Item=O,q.Link=K;var I=q,L=t(1081),B=t(882),T=t(889),H=t(14),M=t(19),D=(t(1075),t(452)),V=t.n(D),F=t(1076),W=t.n(F),G=t(937),Z=t.n(G),_=t(433),z=t(61),J=t.n(z),U=t(103),Y=t(83),$=t.n(Y),Q=t(46),X=t(56),ee=t(75),ae=t(279),te=t.n(ae),ne=t(373),re=t.n(ne),le=t(177),se=t(280),ce=t.n(se),oe=(t(1077),RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)),ie=ee.a().shape({fullName:ee.b().required("Required"),email:ee.b().email().required("Required"),password:ee.b().label("Password").required("Required").min(2,"Seems a bit short...").max(10,"We prefer insecure system, try a shorter password."),phone:ee.b().matches(oe,"Invalid phone").required("Phone is required").min(10,"to short").max(10,"to long"),confirmPassword:ee.b().required("Required").label("Confirm password").test("passwords-match","Passwords must match",(function(e){return this.parent.password===e}))}),me=ee.a().shape({email:ee.b().email().required("Required"),password:ee.b().label("Password").required("Required").min(2,"Seems a bit short...").max(10,"We prefer insecure system, try a shorter password.")}),ue=function(e){var a=e.handleClose,t=Object(le.a)("useGlobal").setLogin,s=Object(r.useState)("password"),c=Object(n.a)(s,2),o=c[0],i=c[1],m=Object(r.useState)(!1),u=Object(n.a)(m,2),d=u[0],f=u[1],p=Object(r.useState)(null),b=Object(n.a)(p,2),v=b[0],g=b[1];console.log("isLoginPage => ",d);var h=function(e){$.a.post("".concat(Q.h,"/auth/google"),e.profileObj).then((function(e){t(e.data.token),a()})).catch((function(e){return console.log("err => ",e.response)}))},N=function(){var e=Object(U.a)(J.a.mark((function e(n){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$.a.post("".concat(Q.h,"/auth/facebook"),n).then((function(e){t(e.data.token),a()})).catch((function(e){return console.log("err => ",e.response)}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=document.getElementById("password");"password"===o?(e.classList.add("show"),i("text")):(e.classList.remove("show"),i("password"))};return console.log("error => ",v),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-left"},l.a.createElement("div",{class:"hello-msg"},l.a.createElement("h1",{className:"text-uppercase text-white brandon-Bold"},"Hello",l.a.createElement("br",null),"Fuzz"))),l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-right"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 mb-3"},l.a.createElement("h3",{className:"brandon-Bold"},d?"Sign in":"Sign up"),l.a.createElement("p",{className:"f-15"},l.a.createElement("span",{className:"pr-2"},d?"Don't have an account?":"Have an account?"),d?l.a.createElement(H.b,{className:"pink-txt brandon-Medium",onClick:function(){return f(!1)}},"Create account"):l.a.createElement(H.b,{className:"pink-txt brandon-Medium",onClick:function(){return f(!0)}},"Sign in")))),d?l.a.createElement(X.c,{initialValues:{email:"",password:""},validationSchema:me,onSubmit:function(e,n){var r=n.setSubmitting;console.log("values => ",e),function(e){var n={email:e.email,password:e.password};$.a.post("".concat(Q.h,"/auth/login"),n).then((function(e){t(e.data.token),g(""),a()})).catch((function(e){console.log("e => ",e.response),g(e.response.data.message)}))}(e),r(!1)}},(function(e){e.values;var a=e.errors,t=e.touched,n=(e.handleChange,e.handleBlur,e.isSubmitting);return l.a.createElement(X.b,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement(X.a,{name:"email",placeholder:"Email",className:"form-control signup-input"}),t.email&&a.email&&l.a.createElement("div",{className:"error pink-txt f-11"},a.email)),l.a.createElement("div",{className:"form-group position-relative"},l.a.createElement(X.a,{type:o,name:"password",placeholder:"Password",className:"form-control signup-input"}),l.a.createElement("div",{className:"showpassword-block",id:"password",onClick:function(){return E()}},l.a.createElement("img",{src:ce.a,className:"img-fluid",alt:"showpassword"})),l.a.createElement("div",{className:"error pink-txt f-11"},t.password&&a.password&&a.password||v)),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25",type:"submit",disabled:n},"Sign in")),l.a.createElement("div",{class:"forgot-block text-center mt-3 mb-3"},l.a.createElement("a",{class:"forgot-link",href:"#"},l.a.createElement("span",null,"Forgot Password"))))))})):l.a.createElement(X.c,{initialValues:{fullName:"",email:"",password:"",confirmPassword:""},validationSchema:ie,onSubmit:function(e,t){var n,r=t.setSubmitting;n=e,console.log("input => ",n),$.a.post("".concat(Q.h,"/auth/signup"),n).then((function(e){console.log("Hi in signup res",e),g(""),a()})).catch((function(e){console.log("err =>",e.respon),g(e.response.data.message)})),r(!1)}},(function(e){e.values;var a=e.errors,t=e.touched,n=(e.handleChange,e.handleBlur,e.isSubmitting);return l.a.createElement(X.b,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement(X.a,{name:"fullName",className:"form-control signup-input",placeholder:"Name or Full name"}),t.fullName&&a.fullName&&l.a.createElement("div",{className:"error pink-txt f-11"},a.fullName)),l.a.createElement("div",{className:"form-group"},l.a.createElement(X.a,{name:"email",placeholder:"Email",className:"form-control signup-input"}),l.a.createElement("div",{className:"error pink-txt f-11"},t.email&&a.email&&a.email||v)),l.a.createElement("div",{className:"form-group"},l.a.createElement(X.a,{name:"phone",placeholder:"Phone no",className:"form-control signup-input"}),t.phone&&a.phone&&l.a.createElement("div",{className:"error pink-txt f-11"},a.phone)),l.a.createElement("div",{className:"form-group position-relative"},l.a.createElement(X.a,{type:o,name:"password",placeholder:"Password",className:"form-control signup-input"}),l.a.createElement("div",{className:"showpassword-block",id:"password",onClick:function(){return E()}},l.a.createElement("img",{src:ce.a,className:"img-fluid"})),t.password&&a.password&&l.a.createElement("div",{className:"error pink-txt f-11"},a.password)),l.a.createElement("div",{className:"form-group"},l.a.createElement(X.a,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",className:"form-control signup-input"}),t.confirmPassword&&a.confirmPassword&&l.a.createElement("div",{className:"error pink-txt f-11"},a.confirmPassword)),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25",type:"submit",disabled:n},"Sign up")))))})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"form-group mt-2 pt-2"},l.a.createElement("div",{className:"border-separate"})),l.a.createElement("div",{className:"or-txt f-15"},l.a.createElement("span",null,"or")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"socail-login d-flex justify-content-between align-items-center mt-3"},l.a.createElement(te.a,{clientId:Q.e,onSuccess:h,className:"btnApple socail-btn",icon:!1},l.a.createElement("span",null)),l.a.createElement(re.a,{appId:Q.d,autoLoad:!1,fields:"name,email,picture",callback:N,cssClass:"btnFacebook socail-btn",textButton:""}),l.a.createElement(te.a,{clientId:Q.e,onSuccess:h,className:"btnGoogle socail-btn",icon:!1},l.a.createElement("span",null))),l.a.createElement("div",{class:"terms-block text-center mt-4 txt-lightgray"},l.a.createElement("p",null,"By proceeding you agree to the",l.a.createElement("br",null),l.a.createElement(H.b,{href:"#",class:"pink-txt pr-1 brandon-Medium"},"Terms"),"and",l.a.createElement(H.b,{href:"#",class:"pink-txt pl-1 brandon-Medium"},"Privacy Policy")))))))};a.default=Object(M.g)((function(e){var a=Object(r.useState)(!1),t=Object(n.a)(a,2),c=t[0],o=t[1],i=function(){return o(!1)},m=Object(_.b)("useGlobal").getUser;return Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){var e=document.getElementById("navbar");0!==window.scrollY?e.classList.add("navsticky"):e.classList.remove("navsticky")}))}),[]),l.a.createElement(s.a,{bg:"transparent",id:"navbar",expand:"lg",className:"container main-header"},l.a.createElement(s.a.Brand,{href:"/",className:"pr-lg-5 mr-lg-5"},l.a.createElement("img",{src:V.a,className:"img-fluid mr-2",alt:"logo"}),l.a.createElement("span",{className:"logo-txt"},"Picky Pigs")),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav",className:"menu-list"},l.a.createElement(I,{className:"mr-auto"},l.a.createElement(I.Link,{className:"menu-link mr-lg-5",href:"#home"},"Who"),l.a.createElement(I.Link,{className:"menu-link mr-lg-5",href:"#link"},"What"),l.a.createElement(I.Link,{className:"menu-link",href:"#link"},"How")),!1,l.a.createElement(L.a,{inline:!0,className:"navright-btn "},l.a.createElement("div",{className:"search-topnav mr-3 position-relative"},l.a.createElement("div",{className:"search-navicon"},l.a.createElement("img",{src:Z.a,className:"img-fluid",alt:"search_icon"})),l.a.createElement(L.a.Control,{type:"text",className:"w-100 search-input brandon-Medium",placeholder:"Search"})),l.a.createElement(B.a,{variant:"outline-success",className:"mr-3 theme-light-btn pt-2 pb-2 pl-4 pr-4 radius-50"},"Partner with us"),l.a.createElement(H.b,{to:"/",onClick:!m()&&function(){return o(!0)},variant:"",className:"outline-success theme-light-btn pt-2 pb-2 pl-4 pr-4 mr-4"},m()?m().email:"Login",l.a.createElement("svg",{className:"user-icon ml-2",fill:"#333",xmlns:"http://www.w3.org/2000/svg",width:"10.672",height:"14",viewBox:"0 0 10.672 14"},l.a.createElement("path",{id:"Path_372","data-name":"Path 372",d:"M5.336.264H4V-1.064a1.959,1.959,0,0,0-.268-1A1.986,1.986,0,0,0,3-2.8a1.959,1.959,0,0,0-1-.268H-2A1.959,1.959,0,0,0-3-2.8a1.986,1.986,0,0,0-.728.728,1.959,1.959,0,0,0-.268,1V.264H-5.336V-1.064A3.273,3.273,0,0,1-4.88-2.752a3.257,3.257,0,0,1,1.2-1.192A3.258,3.258,0,0,1-2-4.4H2a3.258,3.258,0,0,1,1.68.456,3.257,3.257,0,0,1,1.2,1.192,3.273,3.273,0,0,1,.456,1.688ZM0-5.736A3.916,3.916,0,0,1-2.016-6.28a3.985,3.985,0,0,1-1.44-1.432A3.952,3.952,0,0,1-4-9.732a3.952,3.952,0,0,1,.544-2.02,3.985,3.985,0,0,1,1.44-1.432A3.873,3.873,0,0,1,0-13.736a3.873,3.873,0,0,1,2.016.552,3.985,3.985,0,0,1,1.44,1.432A3.952,3.952,0,0,1,4-9.732a3.952,3.952,0,0,1-.544,2.02A3.985,3.985,0,0,1,2.016-6.28,3.916,3.916,0,0,1,0-5.736ZM0-7.064a2.573,2.573,0,0,0,1.344-.368,2.609,2.609,0,0,0,.96-.952,2.652,2.652,0,0,0,.36-1.348A2.652,2.652,0,0,0,2.3-11.08a2.609,2.609,0,0,0-.96-.952A2.573,2.573,0,0,0,0-12.4a2.573,2.573,0,0,0-1.344.368,2.609,2.609,0,0,0-.96.952,2.652,2.652,0,0,0-.36,1.348A2.652,2.652,0,0,0-2.3-8.384a2.609,2.609,0,0,0,.96.952A2.573,2.573,0,0,0,0-7.064Z",transform:"translate(5.336 13.736)"}))),l.a.createElement("img",{src:W.a,className:"img-fluid",alt:"cart"})),l.a.createElement(T.a,{show:c,onHide:i,className:"signup-modal"},l.a.createElement(T.a.Body,{className:"p-0"},l.a.createElement(ue,{handleClose:i,show:c})))))}))},902:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext(null);r.displayName="NavbarContext",a.a=r},937:function(e,a,t){e.exports=t.p+"static/media/search_icon.42562090.svg"}}]);
//# sourceMappingURL=13.c7c55057.chunk.js.map
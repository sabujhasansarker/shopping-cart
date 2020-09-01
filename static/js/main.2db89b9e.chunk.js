(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{36:function(e,t,a){e.exports=a(62)},41:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=(a(41),a(5)),m=a(3),s=Object(n.createContext)(),o=function(){var e=Object(n.useContext)(s),t=e.quantity,a=e.isAutination,c=e.getUser,l=e.logout,m=e.user;return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"left"},r.a.createElement(i.b,{to:"/shopping-cart"},"Logo")),r.a.createElement("div",{className:"right"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/shopping-cart"},"Products")),m&&"sabujhasansarker@gmail.com"===m.email&&m.emailVerified&&r.a.createElement("li",null,r.a.createElement(i.b,{to:"/shopping-cart/dashboard"},"Dashboard")),a?r.a.createElement("li",null,r.a.createElement(i.b,{to:"/shopping-cart/login",onClick:function(){return l()}},"Logout")):r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/shopping-cart/login"},"Login")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/shopping-cart/register"},"Register"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/shopping-cart/card"},r.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png",className:"cart-img",alt:""}),r.a.createElement("span",{className:"card-number"},t<=0?0:t)))))))},u=function(){var e=Object(n.useContext)(s),t=e.items,a=e.cardItems,c=e.cards,l=e.setPrice;return r.a.createElement("div",{className:"product"},t.map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("img",{className:"product-img",src:e.image,alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{to:"/shopping-cart/product-".concat(e.id),className:"name"},e.name),r.a.createElement("p",null,"$",e.price),r.a.createElement("div",{className:"button",onClick:function(){return a(c,e),void l()}},r.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png",alt:""}),"Add to cart")))})))},p=function(){var e=Object(n.useContext)(s),t=e.cards,a=e.cardItems,c=e.removeItem,l=e.quantity,m=e.price,o=e.checkOut,u=e.user;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"profile"},r.a.createElement("img",{className:"user-profile",src:u.photoURL,alt:u.name}),r.a.createElement("h4",{className:"user-name"},"Hello ",u.displayName," , ",r.a.createElement("br",null)," This is your cardItems"),!u.emailVerified&&r.a.createElement("p",{style:{color:"red"}},"Plz verified Your email")),r.a.createElement("div",{className:"carts-container"},t.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"carts"},t.map((function(e,n){return r.a.createElement("div",{className:"cart",key:n},r.a.createElement("img",{src:e.image,alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{className:"name",to:"/shopping-cart/product-".concat(e.id)},e.name),r.a.createElement("p",{className:"action-container"},r.a.createElement("span",{className:"action",onClick:function(){return a(t,e,"+")}},"+"),r.a.createElement("span",{className:"quantity"},e.qn),r.a.createElement("span",{className:"action",onClick:function(){return a(t,e,"-")}},"-")),r.a.createElement("div",{className:"button",onClick:function(){return c(e)}},r.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/clear-shopping-cart.png",alt:""}),"Remove"),r.a.createElement("p",{className:"total-quantity single-qn"},"Quantity : ",r.a.createElement("span",null,e.qn)),r.a.createElement("p",{className:"single-price single-qn"},"Price : ",r.a.createElement("span",null,"$",e.price)),r.a.createElement("hr",null),r.a.createElement("p",{className:"price single-qn"},"Total Price : ",r.a.createElement("span",null,"$",e.qn*e.price))))}))),r.a.createElement("div",{className:"total"},r.a.createElement("h1",null,"Total"),r.a.createElement("hr",null),r.a.createElement("div",{className:"total-qn"},"Total Quantity : ",r.a.createElement("b",null,l)),r.a.createElement("div",{className:"total-price"},"Total Price : ",r.a.createElement("b",null,"$",m)),u.emailVerified&&r.a.createElement("div",{className:"button",onClick:function(){return o()}},r.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/shopping.png",alt:""}),"Checkout"))):r.a.createElement("h1",{className:"empty"},"Your cart is currently empty.")))},d=function(){return r.a.createElement("div",{style:{background:"#FFFFFF",height:"100vh",width:"100%"}},r.a.createElement("img",{src:"https://i.pinimg.com/originals/b5/3a/b6/b53ab608718000227d5d9a752cbd5d5c.gif",alt:"",className:"preloader-img"}))},E=function(e){var t=e.match,a=Object(n.useContext)(s),c=a.items,l=a.cardItems,i=a.cards,m=a.setPrice,o=a.removeItem,u=a.getData;a.loading;Object(n.useEffect)((function(){u()}),[]);if(c.length<=0)return r.a.createElement(d,null);var p=i&&i.find((function(e){return e.id===Number(t.params.id)})),E=p||c.find((function(e){return e.id===Number(t.params.id)}));return r.a.createElement("div",{className:"single-product"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"product-img",src:E.image,alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,E.name),r.a.createElement("p",{className:"dec"},E.dec),r.a.createElement("p",{className:"price"},r.a.createElement("b",null,"Price : "),"$",E.price),r.a.createElement("p",{className:"action-container"},r.a.createElement("span",{className:"action",onClick:function(){return l(i,E,"+")}},"+"),r.a.createElement("span",{className:"quantity"},p?E.qn:0),r.a.createElement("span",{className:"action",onClick:function(){return l(i,E,"-")}},"-")),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"button",onClick:function(){return l(i,E),void m()}},r.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png",alt:""}),"Add to cart"),p&&r.a.createElement("div",{className:"button remove",onClick:function(){return o(E)}},r.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/clear-shopping-cart.png",alt:""}),"Remove")))))},f=a(13),g=a.n(f),b=a(17),h=a(14),v=a(2),N=a(9),O=a(33),j=a.n(O),y=a(21),C=a.n(y);C.a.initializeApp({apiKey:"AIzaSyD-ft5V9R9qLCoZpSCwFYgDhjYpa6HSZqs",authDomain:"fir-319ab.firebaseapp.com",databaseURL:"https://fir-319ab.firebaseio.com",projectId:"fir-319ab",storageBucket:"fir-319ab.appspot.com",messagingSenderId:"728792064123",appId:"1:728792064123:web:a9611443b0d159db5dc2de"});var w=C.a.auth(),x=C.a.database(),k=C.a.storage(),S=function(){var e=Object(n.useContext)(s),t=e.getUser,a=e.isAutination,c=Object(n.useState)({name:"",email:"",password_1:"",password_2:""}),l=Object(N.a)(c,2),o=l[0],u=l[1],p=Object(n.useState)(null),d=Object(N.a)(p,2),E=d[0],f=d[1],O=o.name,y=o.email,C=o.password_1,x=o.password_2;if(a)return r.a.createElement(m.a,{to:"/shopping-cart"});var k=function(e){return u(Object(v.a)(Object(v.a)({},o),{},Object(h.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(b.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=j.a.url(y,{s:"200",r:"x",d:"retro"},!0),C===x){e.next=5;break}return f("Password dose not match"),e.abrupt("return",A());case 5:return e.prev=5,e.next=8,w.createUserWithEmailAndPassword(y,C);case 8:w.currentUser.updateProfile({displayName:O,photoURL:n}),w.onAuthStateChanged((function(e){return e.sendEmailVerification()})),t(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),f(e.t0.message),A();case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){setTimeout((function(){f("")}),2e3)};return r.a.createElement("div",{className:"register form-container"},r.a.createElement("h1",null,"Register"),r.a.createElement("div",{className:"alert"},r.a.createElement("p",null,E)),r.a.createElement("form",{action:"",className:"form",onSubmit:function(e){return S(e)}},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"name"},"Name : "),r.a.createElement("input",{value:O,onChange:function(e){return k(e)},type:"text",name:"name",placeholder:"Name"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"email"},"Email : "),r.a.createElement("input",{value:y,onChange:function(e){return k(e)},type:"email",name:"email",placeholder:"E-mail"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"password_1"},"Password :"),r.a.createElement("input",{value:C,onChange:function(e){return k(e)},type:"password",name:"password_1",placeholder:"Password"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"password_2"},"Confirm Password : "),r.a.createElement("input",{value:x,onChange:function(e){return k(e)},type:"password",name:"password_2",placeholder:"Password"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{className:"btn",type:"submit",name:"submit",value:"register"}))),r.a.createElement("p",null,"If Your already register please"," ",r.a.createElement(i.b,{to:"/shopping-cart/login"},"login !")))},A=function(){var e=Object(n.useContext)(s),t=e.getUser,a=e.isAutination,c=Object(n.useState)({email:"",password_1:""}),l=Object(N.a)(c,2),o=l[0],u=l[1],p=Object(n.useState)(null),d=Object(N.a)(p,2),E=d[0],f=d[1],O=o.email,j=o.password_1;if(a)return r.a.createElement(m.a,{to:"/shopping-cart"});var y=function(e){return u(Object(v.a)(Object(v.a)({},o),{},Object(h.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(b.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,w.signInWithEmailAndPassword(O,j);case 4:t(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),f(e.t0.message),x();case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){setTimeout((function(){f("")}),2e3)};return r.a.createElement("div",{className:"login form-container"},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,E),r.a.createElement("form",{action:"",className:"form",onSubmit:function(e){return C(e)}},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"email"},"Email : "),r.a.createElement("input",{value:O,onChange:function(e){return y(e)},type:"email",name:"email",placeholder:"E-mail"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"password_1"},"Password : "),r.a.createElement("input",{value:j,onChange:function(e){return y(e)},type:"password",name:"password_1",placeholder:"Password"})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{className:"btn",type:"submit",name:"submit",value:"login"}))),r.a.createElement("p",null,"If no account please"," ",r.a.createElement(i.b,{to:"/shopping-cart/register"},"register !")))},I=a(35),q=function(e){var t=e.component,a=Object(I.a)(e,["component"]),c=Object(n.useContext)(s).isAutination;return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/shopping-cart/login"})}}))},P=function(){var e=Object(n.useContext)(s),t=e.items,a=e.getData;return r.a.createElement("div",{className:"remove"},r.a.createElement("h1",null,"Your all product"),r.a.createElement("table",{id:"product"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Action")),t.map((function(e,t){return r.a.createElement("tr",{key:t,className:"table-data"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,"$",e.price),r.a.createElement("td",null,r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("td",{onClick:function(){var t=e.image.split("/")[7],n=t.indexOf("?alt");n=(t=t.slice(0,n).split("%20")).join(" "),k.ref().child(t.join(" ")).delete(),x.ref("products/".concat(e.id)).remove(),a()}},"Delete"))})))))},T=function(){var e=Object(n.useContext)(s),t=e.getData,a=e.user,c=Object(n.useState)({name:"",price:"",dec:"",image:""}),l=Object(N.a)(c,2),i=l[0],m=l[1],o=Object(n.useState)(null),u=Object(N.a)(o,2),p=u[0],d=u[1],E=Object(n.useState)(null),f=Object(N.a)(E,2),O=f[0],j=f[1],y=i.name,C=i.price,w=i.dec,S=i.image,A=Object(n.useState)(!1),I=Object(N.a)(A,2),q=I[0],T=I[1],D=Object(n.useState)(1e3*Math.random()),R=Object(N.a)(D,2),F=R[0],U=(R[1],function(e){var t=e.target.files;t?(t=t[0],["image/png","image/jpeg"].includes(t.type)?t.size<2e6?(m(Object(v.a)(Object(v.a)({},i),{},{image:t})),d(t)):(j("maximum file size 2mb"),L()):(j("file type png/jpeg"),L())):m(Object(v.a)(Object(v.a)({},i),{},Object(h.a)({},e.target.name,e.target.value)))}),_=function(){var e=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y&&C&&w&&S&&k.ref().child(p.name+F).put(p).on("state_changed",function(){var e=Object(b.a)(g.a.mark((function e(n){var r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.bytesTransferred/n.totalBytes*100,console.log(r),!(r>=100)){e.next=9;break}return e.next=5,k.ref(p.name+F).getDownloadURL();case 5:c=e.sent,m(Object(v.a)(Object(v.a)({},i),{},{image:c,id:Math.floor(1e9*Math.random()),qn:1,email:a.email})),T(!0),"string"===typeof S&&(T(!1),m({name:"",price:"",dec:"",image:""}),d(null),x.ref("products/".concat(i.id)).set(i),t());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){return setTimeout((function(){j()}),2e3)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"dashboard form-container"},r.a.createElement("p",{style:{color:"red"}},O),r.a.createElement("h1",null,"Create Your Product"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),y||C||w||S||(j("plz fill all input field "),L())}(e)}},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"name"},"Name :"),r.a.createElement("input",{type:"text",name:"name",value:y,onChange:function(e){return U(e)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"price"},"Price :"),r.a.createElement("input",{type:"number",name:"price",value:C,onChange:function(e){return U(e)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"dec"},"Description :"),r.a.createElement("textarea",{name:"dec",value:w,onChange:function(e){return U(e)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"image"},"Image :"),r.a.createElement("input",{type:"file",name:"image",onChange:function(e){return U(e)}})),r.a.createElement("div",{className:"form-item"},r.a.createElement("input",{className:"btn",type:"submit",name:"submit",value:"Submit"})))),r.a.createElement("div",{className:"preview"},r.a.createElement("h3",null,"Preview your product after published "),p&&r.a.createElement("img",{src:URL.createObjectURL(p)}),y&&r.a.createElement("p",null,r.a.createElement("b",null,"Name : "),y),C&&r.a.createElement("p",null,r.a.createElement("b",null,"Price : "),"$",C),w&&r.a.createElement("p",null,r.a.createElement("b",null,"Description : "),w),!q&&S&&y&&C&&w&&r.a.createElement("div",{className:"button",onClick:function(){return _()}},"Submit your product"),q&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return _()}},"Yes"),r.a.createElement("button",{onClick:function(){return k.ref().child(p.name+F).delete(),void T(!1)}},"No")))),r.a.createElement(P,null))};var D=function(){var e=Object(n.useContext)(s),t=e.loading,a=e.getUser,c=e.user;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(i.a,null,t?r.a.createElement(d,null):r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/shopping-cart",exact:!0,component:u}),r.a.createElement(m.b,{path:"/shopping-cart/register",exact:!0,component:S}),r.a.createElement(m.b,{path:"/shopping-cart/login",exact:!0,component:A}),r.a.createElement(q,{path:"/shopping-cart/card",exact:!0,component:p}),c?"sabujhasansarker@gmail.com"===c.email&&c.emailVerified&&r.a.createElement(q,{path:"/shopping-cart/dashboard",exact:!0,component:T}):r.a.createElement(q,{path:"/shopping-cart/dashboard",exact:!0,component:T}),r.a.createElement(m.b,{path:"/shopping-cart/product-:id",exact:!0,component:E})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(34),F=function(e,t){var a=t.type,n=t.payload;switch(a){case"GET_DATA":return Object(v.a)(Object(v.a)({},e),{},{items:n,loading:!1});case"CARD_ITEMS":return Object(v.a)(Object(v.a)({},e),{},{cards:n});case"REMOVE":return Object(v.a)(Object(v.a)({},e),{},{cards:e.cards.filter((function(e){return n.id!==e.id&&e}))});case"SAVE":localStorage.setItem("shoppingCard",JSON.stringify(e.cards));case"PRICE":return Object(v.a)(Object(v.a)({},e),{},{price:e.cards&&e.cards.reduce((function(e,t){return e+t.price*t.qn}),0),quantity:e.cards&&e.cards.reduce((function(e,t){return e+t.qn}),0)});case"CHECKOUT":return localStorage.setItem("shoppingCard",JSON.stringify([])),Object(v.a)(Object(v.a)({},e),{},{cards:[],price:null,quantity:0});case"GET_USER":return Object(v.a)(Object(v.a)({},e),{},{isAutination:!0,loading:!1,user:n});case"LOGOUT":return Object(v.a)(Object(v.a)({},e),{},{isAutination:!1,loading:!1});default:return e}},U=function(e){var t=e.children,a=Object(n.useReducer)(F,{items:[],loading:!0,cards:[],price:0,quantity:0,isAutination:!1,user:null}),c=Object(N.a)(a,2),l=c[0],i=c[1];Object(n.useEffect)((function(){o(),m()}),[]);var m=function(){var e=[];x.ref("products/").on("value",(function(t){t.forEach((function(t){var a=t.val();e.push(a)})),i({type:"GET_DATA",payload:e})}))},o=function(){i({type:"CARD_ITEMS",payload:JSON.parse(localStorage.getItem("shoppingCard"))}),u()},u=function(){i({type:"PRICE"})};return r.a.createElement(s.Provider,{value:{items:l.items,cards:l.cards,price:l.price,quantity:l.quantity,loading:l.loading,isAutination:l.isAutination,user:l.user,cardItems:function(e,t,a){var n=e&&e.find((function(e){return e.id===t.id}));n?("-"===a?n.qn>1?n.qn-=1:n.qn=1:n.qn+=1,e.filter((function(e){return e.id===t.id?n:e}))):i({type:"CARD_ITEMS",payload:e?[].concat(Object(R.a)(e),[t]):[t]}),i({type:"SAVE"})},setPrice:u,cardItemsRefresh:o,removeItem:function(e){i({type:"REMOVE",payload:e}),i({type:"SAVE"})},checkOut:function(){i({type:"CHECKOUT"})},getUser:function(){w.onAuthStateChanged((function(e){e?(e.providerData[0].emailVerified=e.emailVerified,i({type:"GET_USER",payload:e.providerData[0]})):i({type:"LOGOUT"})}))},logout:function(){w.signOut(),i({type:"LOGOUT"})},getData:m,multiCard:function(e){i({type:"MULTI_CARD",payload:e})}}},t)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.2db89b9e.chunk.js.map
(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"name":"product 1","image":"https://bit.ly/31x97z4","dec":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus minima eos eaque, consequuntur, odit culpa velit quaerat nihil, labore facilis dolor nostrum nesciunt animi alias expedita inventore nam vitae sapiente?","qn":1,"price":100},{"id":2,"name":"product 2","image":"https://bit.ly/31x97z4","dec":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus minima eos eaque, consequuntur, odit culpa velit quaerat nihil, labore facilis dolor nostrum nesciunt animi alias expedita inventore nam vitae sapiente?","qn":1,"price":200},{"id":3,"name":"product 3","image":"https://bit.ly/31x97z4","dec":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus minima eos eaque, consequuntur, odit culpa velit quaerat nihil, labore facilis dolor nostrum nesciunt animi alias expedita inventore nam vitae sapiente?","qn":1,"price":300},{"id":4,"name":"product 4","image":"https://bit.ly/31x97z4","dec":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus minima eos eaque, consequuntur, odit culpa velit quaerat nihil, labore facilis dolor nostrum nesciunt animi alias expedita inventore nam vitae sapiente?","qn":1,"price":400},{"id":5,"name":"product 5","dec":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus minima eos eaque, consequuntur, odit culpa velit quaerat nihil, labore facilis dolor nostrum nesciunt animi alias expedita inventore nam vitae sapiente?","image":"https://bit.ly/31x97z4","qn":1,"price":500}]')},22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),r=a.n(i),l=(a(27),a(3)),s=a(1),o=Object(n.createContext)(),m=function(){var e=Object(n.useContext)(o).quantity;return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"left"},c.a.createElement(l.b,{to:"/"},"Logo")),c.a.createElement("div",{className:"right"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Products")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/login"},"Login")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/register"},"Register")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/card"},c.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png",className:"cart-img",alt:""}),c.a.createElement("span",{className:"card-number"},e)))))))},u=a(20),d=a(21),p=a(19),E=a(7),g=function(e,t){var a=t.type,n=t.payload;switch(a){case"CARD_ITEMS":return Object(E.a)(Object(E.a)({},e),{},{cards:n});case"REMOVE":return Object(E.a)(Object(E.a)({},e),{},{cards:e.cards.filter((function(e){return n.id!==e.id&&e}))});case"SAVE":localStorage.setItem("shoppingCard",JSON.stringify(e.cards));case"PRICE":return Object(E.a)(Object(E.a)({},e),{},{price:e.cards&&e.cards.reduce((function(e,t){return e+t.price*t.qn}),0),quantity:e.cards&&e.cards.reduce((function(e,t){return e+t.qn}),0)});case"CHECKOUT":return localStorage.setItem("shoppingCard",JSON.stringify([])),Object(E.a)(Object(E.a)({},e),{},{cards:[],price:null,quantity:0});default:return e}},v=function(e){var t=e.children,a={items:p,loading:!1,cards:[],price:0,quantity:0},i=Object(n.useReducer)(g,a),r=Object(d.a)(i,2),l=r[0],s=r[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){s({type:"CARD_ITEMS",payload:JSON.parse(localStorage.getItem("shoppingCard"))}),E()},E=function(){s({type:"PRICE"})};return c.a.createElement(o.Provider,{value:{items:l.items,cards:l.cards,price:l.price,quantity:l.quantity,loading:l.loading,cardItems:function(e,t,a){var n=e&&e.find((function(e){return e.id===t.id}));n?("-"===a?n.qn>1?n.qn-=1:n.qn=1:n.qn+=1,e.filter((function(e){return e.id===t.id?n:e}))):s({type:"CARD_ITEMS",payload:e?[].concat(Object(u.a)(e),[t]):[t]}),s({type:"SAVE"})},setPrice:E,cardItemsRefresh:m,removeItem:function(e){s({type:"REMOVE",payload:e}),s({type:"SAVE"})},checkOut:function(){s({type:"CHECKOUT"})}}},t)},h=function(){var e=Object(n.useContext)(o),t=e.items,a=e.cardItems,i=e.cards,r=e.setPrice;return c.a.createElement("div",{className:"product"},t.map((function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("img",{className:"product-img",src:e.image,alt:""}),c.a.createElement("div",{className:"content"},c.a.createElement(l.b,{to:"/product-".concat(e.id),className:"name"},e.name),c.a.createElement("p",null,"$",e.price),c.a.createElement("div",{className:"button",onClick:function(){return a(i,e),void r()}},c.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png",alt:""}),"Add to cart")))})))},b=function(){var e=Object(n.useContext)(o),t=e.cards,a=e.cardItems,i=e.removeItem,r=e.quantity,s=e.price,m=e.checkOut;return c.a.createElement("div",{className:"carts-container"},t.length>0?c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"carts"},t.map((function(e){return c.a.createElement("div",{className:"cart",key:e.id},c.a.createElement("img",{src:e.image,alt:""}),c.a.createElement("div",{className:"content"},c.a.createElement(l.b,{className:"name",to:"/product-".concat(e.id)},e.name),c.a.createElement("p",{className:"action-container"},c.a.createElement("span",{className:"action",onClick:function(){return a(t,e,"+")}},"+"),c.a.createElement("span",{className:"quantity"},e.qn),c.a.createElement("span",{className:"action",onClick:function(){return a(t,e,"-")}},"-")),c.a.createElement("div",{className:"button",onClick:function(){return i(e)}},c.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/clear-shopping-cart.png",alt:""}),"Remove"),c.a.createElement("p",{className:"total-quantity single-qn"},"Quantity : ",c.a.createElement("span",null,e.qn)),c.a.createElement("p",{className:"single-price single-qn"},"Price : ",c.a.createElement("span",null,"$",e.price)),c.a.createElement("hr",null),c.a.createElement("p",{className:"price single-qn"},"Total Price : ",c.a.createElement("span",null,"$",e.qn*e.price))))}))),c.a.createElement("div",{className:"total"},c.a.createElement("h1",null,"Total"),c.a.createElement("hr",null),c.a.createElement("div",{className:"total-qn"},"Total Quantity : ",c.a.createElement("b",null,r)),c.a.createElement("div",{className:"total-price"},"Total Price : ",c.a.createElement("b",null,"$",s)),c.a.createElement("div",{className:"button",onClick:function(){return m()}},c.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/shopping.png",alt:""}),"Checkout"))):c.a.createElement("h1",{className:"empty"},"Your cart is currently empty."))},f=function(e){var t=e.match,a=Object(n.useContext)(o).items;return c.a.createElement("div",{className:"single-product"},a.map((function(e){return c.a.createElement(n.Fragment,{key:e.id},e.id===Number(t.params.id)&&c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:e.image,alt:""}),c.a.createElement("h1",null,e.name),c.a.createElement("p",null,e.dec)))})))};var q=function(){return c.a.createElement(v,null,c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("div",{className:"container"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:h}),c.a.createElement(s.a,{path:"/card",exact:!0,component:b}),c.a.createElement(s.a,{path:"/product-:id",exact:!0,component:f}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b8377f82.chunk.js.map
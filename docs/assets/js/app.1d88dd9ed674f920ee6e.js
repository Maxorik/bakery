!function(t){function e(e){for(var r,c,u=e[0],s=e[1],i=e[2],p=0,d=[];p<u.length;p++)c=u[p],o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);d.length;)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=s;a.push([18,1]),n()}([,,,,function(t,e,n){var r=n(15);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(16)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"nocontainer"},[t.empty()?r("div",{staticClass:"busket-sum"},[r("p",[t._v("Ваша корзина пуста")]),r("br"),t._v(" "),r("div",{staticClass:"takeme"},[r("img",{staticClass:"takeme-img",attrs:{src:n(13)}}),t._v(" "),r("p",[t._v("Возьми меня с собой!")]),t._v(" "),r("router-link",{staticClass:"btn-route",attrs:{to:"/products"}},[t._v("Выбрать")])],1)]):r("div",{staticClass:"grid"},t._l(t.productsToOrder,function(e){return r("div",[r("div",{staticClass:"product-name"},[t._v(t._s(e.name))]),t._v(" "),r("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),r("div",{staticClass:"busket-change"},[r("button",{staticClass:"btn-circle",on:{click:function(n){return t.minuscount(e.id)}}},[t._v("-")]),t._v(" "),r("div",{staticClass:"busket-product"},[t._v(" "+t._s(e.count)+" ")]),t._v(" "),r("button",{staticClass:"btn-circle",on:{click:function(n){return t.pluscount(e.id)}}},[t._v("+")])])])}),0),t._v(" "),r("div",[t.empty()?t._e():r("p",{staticClass:"busket-sum"},[t._v("Всего к оплате: "+t._s(t.ordersum)+" рублей")])]),t._v(" "),r("div",{staticClass:"btn-part"},[t.empty()?t._e():r("router-link",{staticClass:"btn-route",attrs:{to:"/products"}},[t._v("Выбрать еще")]),t._v(" "),t.empty()?t._e():r("router-link",{staticClass:"btn-route",attrs:{to:"/order"}},[t._v("Оформить заказ")])],1)])])};r._withStripped=!0;var o=n(0);function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{}},computed:a({},Object(o.b)("products",{muffins:"muffins",capcakes:"capcakes",rulets:"rulets",allbake:"allBake",totalprice:"totalPrice",ordersum:"orderSum"}),Object(o.b)("busket",{productsList:"productsToOrder"}),{productsToOrder:function(){var t=this;return this.allbake.filter(function(e){return-1!==t.productsList.indexOf(e.id)})}}),methods:a({},Object(o.c)("products",{setcount:"changeCount",pluscount:"plusCount",minuscount:"minusCount"}),{empty:function(){return this.productsList.length<1}})},s=n(1),i=Object(s.a)(u,r,[],!1,null,null,null);i.options.__file="src/components/Busket.vue";e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;n(0);var o={data:function(){return{}}},a=n(1),c=Object(a.a)(o,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"about-here"},[e("p",[this._v("About here")])])])}],!1,null,null,null);c.options.__file="src/components/About.vue";e.default=c.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"checklist"},[n("div",{staticClass:"anketa"},[t._l(t.inputs,function(e,r){return n("div",{key:r},[n("label",{class:e.classes},[t._v(t._s(e.name))]),n("br"),t._v(" "),n("input",{staticClass:"anketa-input auto",attrs:{type:"text"},on:{input:function(e){return t.valid([e.target,r])}}})])}),t._v(" "),t._m(0),t._v(" "),n("label",[t._v("Промокод")]),t._v(" "),n("input",{staticClass:"anketa-input",attrs:{type:"text"}}),t._v(" "),n("label",[t._v("Комментарий к заказу")]),t._v(" "),n("textarea",{staticClass:"anketa-input",attrs:{type:"text"}}),t._v(" "),n("p",[t._v("* - обязательные к заполнению поля")]),t._v(" "),n("button",{staticClass:"btn-route"},[t._v("Оформить заказ")])],2),t._v(" "),n("div",{staticClass:"order-total"},[n("p",{staticClass:"busket-sum"},[t._v("Ваш заказ:")]),t._v(" "),0==t.productsToOrder.length?n("div",{staticClass:"check"},[n("p",{staticStyle:{"margin-bottom":"10px"}},[t._v("Пока что вы ничего не заказали")]),n("br"),t._v(" "),n("router-link",{staticClass:"btn-route",attrs:{to:"/products"}},[t._v("К кексикам! ")])],1):n("div",[n("table",[t._m(1),t._v(" "),t._l(t.productsToOrder,function(e){return n("tr",[n("td",{staticClass:"check"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"check"},[t._v(t._s(e.count))]),t._v(" "),n("td",{staticClass:"check"},[t._v(t._s(e.price*e.count)+" ₽")])])})],2),t._v(" "),n("p",{staticClass:"total-sum"},[t._v("\n                Итоговая сумма заказа: "+t._s(t.ordersum)+" ₽\n            ")])])])])])};r._withStripped=!0;var o=n(0);function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{}},computed:a({},Object(o.b)("order",{inputs:"inputs"}),Object(o.b)("products",{allBake:"allBake",ordersum:"orderSum"}),Object(o.b)("busket",{productsList:"productsToOrder"}),{productsToOrder:function(){var t=this;return this.allBake.filter(function(e){return-1!==t.productsList.indexOf(e.id)})}}),methods:a({},Object(o.c)("order",{valid:"validate"}))},s=n(1),i=Object(s.a)(u,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-date"},[e("label",[this._v("Когда хотите забрать? *")]),e("br"),this._v(" "),e("input",{staticClass:"anketa-input",attrs:{type:"date"}}),this._v(" "),e("input",{staticClass:"anketa-input time",attrs:{type:"time",name:"time"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"check-head"},[this._v("Наименование")]),this._v(" "),e("td",{staticClass:"check-head"},[this._v("Количество")]),this._v(" "),e("td",{staticClass:"check-head"},[this._v("Сумма")])])}],!1,null,null,null);i.options.__file="src/components/Order.vue";e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"nocontainer"},[n("div",{staticClass:"products-menu"},[n("div",{staticClass:"products-nav products-nav-active",on:{click:function(e){t.productType=1,t.hih(e.target)}}},[t._v("Капкейки")]),t._v(" "),n("div",{staticClass:"products-nav",on:{click:function(e){t.productType=2,t.hih(e.target)}}},[t._v("Маффины")]),t._v(" "),n("div",{staticClass:"products-nav",on:{click:function(e){t.productType=3,t.hih(e.target)}}},[t._v("Рулеты")])]),t._v(" "),n("hr",{staticClass:"top-menu-hr"}),t._v(" "),n("transition",{attrs:{name:"fadeAndReturn"}},[2==t.productType?n("div",{key:"muffins",staticClass:"products"},t._l(t.muffins,function(e){return n("div",{staticClass:"product-item"},[n("div",{staticClass:"product-name"},[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",{staticClass:"product-name"},[t._v("Цена: "+t._s(e.price)+" ₽ ")]),t._v(" "),n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"product-count",attrs:{type:"text",placeholder:"Сколько штук?"},domProps:{value:e.count},on:{input:[function(n){n.target.composing||t.$set(e,"count",n.target.value)},function(n){return t.setcount([e.id,e.count])}]}}),t._v(" "),n("button",{staticClass:"product-button",on:{click:function(n){return t.add([e.id,e.count])}}},[t._v("Взять")])]),t._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"product-button btn-del",on:{click:function(n){t.remove(e.id),t.discount(e.id)}}},[t._v("Убрать")])])])}),0):t._e(),t._v(" "),1==t.productType?n("div",{key:"capcakes",staticClass:"products"},t._l(t.capcakes,function(e){return n("div",{staticClass:"product-item"},[n("div",{staticClass:"product-name"},[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",{staticClass:"product-name"},[t._v("Цена: "+t._s(e.price)+" ₽ ")]),t._v(" "),n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"product-count",attrs:{type:"text",placeholder:"Сколько штук?"},domProps:{value:e.count},on:{input:[function(n){n.target.composing||t.$set(e,"count",n.target.value)},function(n){return t.setcount([e.id,e.count])}]}}),t._v(" "),n("button",{staticClass:"product-button",on:{click:function(n){return t.add([e.id,e.count])}}},[t._v("Взять")])]),t._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"product-button btn-del",on:{click:function(n){t.remove(e.id),t.discount(e.id)}}},[t._v("Убрать")])])])}),0):t._e(),t._v(" "),3==t.productType?n("div",{key:"rulets",staticClass:"products"},t._l(t.rulets,function(e){return n("div",{staticClass:"product-item"},[n("div",{staticClass:"product-name"},[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",{staticClass:"product-name"},[t._v("Цена: "+t._s(e.price)+" ₽")]),t._v(" "),n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"product-count",attrs:{type:"text",placeholder:"Сколько штук?"},domProps:{value:e.count},on:{input:[function(n){n.target.composing||t.$set(e,"count",n.target.value)},function(n){return t.setcount([e.id,e.count])}]}}),t._v(" "),n("button",{staticClass:"product-button",on:{click:function(n){return t.add([e.id,e.count])}}},[t._v("Взять")])]),t._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"product-button btn-del",on:{click:function(n){t.remove(e.id),t.discount(e.id)}}},[t._v("Убрать")])])])}),0):t._e()]),t._v(" "),n("div",{staticClass:"btn-part"},[n("router-link",{staticClass:"btn-route",attrs:{to:"/busket"}},[t._v("В корзину")])],1)],1)])};r._withStripped=!0;var o=n(0);function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{productType:1}},computed:a({},Object(o.b)("products",{muffins:"muffins",capcakes:"capcakes",rulets:"rulets",totalprice:"totalPrice"})),methods:a({},Object(o.c)("busket",{add:"addToCart",remove:"removeFromCart"}),Object(o.c)("products",{setcount:"changeCount",discount:"discount"}),{hih:function(t){for(var e=document.getElementsByClassName("products-nav"),n=0;n<e.length;n++)e[n].classList.remove("products-nav-active");t.classList.add("products-nav-active")}})},s=(n(14),n(1)),i=Object(s.a)(u,r,[],!1,null,null,null);i.options.__file="src/components/Products.vue";e.default=i.exports},,,,,function(t,e,n){t.exports=n.p+"assets/img/takeme4.png"},function(t,e,n){"use strict";var r=n(4);n.n(r).a},function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),a=n(0),c={namespaced:!0,state:{muffins:[{id:1,name:"Ореховый взгляд",price:200,photo:"./img/muf1.jpg",count:""},{id:11,name:"Тающий на языке",price:220,photo:"./img/muf4.jpg",count:""},{id:2,name:"Шоколадный восторг",price:310,photo:"./img/muf2.jpg",count:""},{id:3,name:"Ваниль богов",price:180,photo:"./img/muf3.jpg",count:""}],capcakes:[{id:14,name:"Твоя вишенка",price:245,photo:"./img/cap4.jpg",count:""},{id:4,name:"Звездная нежность",price:145,photo:"./img/cap1.jpg",count:""},{id:5,name:"Малиновый фреш",price:210,photo:"./img/cap2.jpg",count:""},{id:6,name:"Сладкий август",price:230,photo:"./img/cap3.jpg",count:""}],rulets:[{id:7,name:"Клубничный водопад",price:300,photo:"./img/rulet1.jpg",count:""},{id:8,name:"Следы на луне",price:340,photo:"./img/rulet2.jpg",count:""},{id:18,name:"Вечер с корицей",price:350,photo:"./img/rulet4.jpg",count:""},{id:9,name:"Ореховый ролл",price:380,photo:"./img/rulet3.jpg",count:""}],allBake:function(){for(var t=[],e=0;e<[{id:1,name:"Ореховый взгляд",price:200,photo:"./img/muf1.jpg",count:""},{id:11,name:"Тающий на языке",price:220,photo:"./img/muf4.jpg",count:""},{id:2,name:"Шоколадный восторг",price:310,photo:"./img/muf2.jpg",count:""},{id:3,name:"Ваниль богов",price:180,photo:"./img/muf3.jpg",count:""}].length;e++)t.push([{id:1,name:"Ореховый взгляд",price:200,photo:"./img/muf1.jpg",count:""},{id:11,name:"Тающий на языке",price:220,photo:"./img/muf4.jpg",count:""},{id:2,name:"Шоколадный восторг",price:310,photo:"./img/muf2.jpg",count:""},{id:3,name:"Ваниль богов",price:180,photo:"./img/muf3.jpg",count:""}][e]);for(var n=0;n<[{id:14,name:"Твоя вишенка",price:245,photo:"./img/cap4.jpg",count:""},{id:4,name:"Звездная нежность",price:145,photo:"./img/cap1.jpg",count:""},{id:5,name:"Малиновый фреш",price:210,photo:"./img/cap2.jpg",count:""},{id:6,name:"Сладкий август",price:230,photo:"./img/cap3.jpg",count:""}].length;n++)t.push([{id:14,name:"Твоя вишенка",price:245,photo:"./img/cap4.jpg",count:""},{id:4,name:"Звездная нежность",price:145,photo:"./img/cap1.jpg",count:""},{id:5,name:"Малиновый фреш",price:210,photo:"./img/cap2.jpg",count:""},{id:6,name:"Сладкий август",price:230,photo:"./img/cap3.jpg",count:""}][n]);for(var r=0;r<[{id:7,name:"Клубничный водопад",price:300,photo:"./img/rulet1.jpg",count:""},{id:8,name:"Следы на луне",price:340,photo:"./img/rulet2.jpg",count:""},{id:18,name:"Вечер с корицей",price:350,photo:"./img/rulet4.jpg",count:""},{id:9,name:"Ореховый ролл",price:380,photo:"./img/rulet3.jpg",count:""}].length;r++)t.push([{id:7,name:"Клубничный водопад",price:300,photo:"./img/rulet1.jpg",count:""},{id:8,name:"Следы на луне",price:340,photo:"./img/rulet2.jpg",count:""},{id:18,name:"Вечер с корицей",price:350,photo:"./img/rulet4.jpg",count:""},{id:9,name:"Ореховый ролл",price:380,photo:"./img/rulet3.jpg",count:""}][r]);return t}(),orderSum:""},mutations:{changeCount:function(t,e){for(var n=e[0],r=e[1],o=/^[0-9]{1,4}$/,a=0;a<t.allBake.length;a++){var c=t.allBake[a];t.muffins[a],t.capcakes[a],t.rulets[a];c.id===n&&(o.test(r)?c.count=r:c.count=r.replace(/[^\w\d]/g,""),u(n,t.muffins,c.count),u(n,t.capcakes,c.count),u(n,t.rulets,c.count))}},plusCount:function(t,e){for(var n=0;n<t.allBake.length;n++)t.allBake[n].id===e&&(t.allBake[n].count++,u(e,t.muffins,t.allBake[n].count),u(e,t.capcakes,t.allBake[n].count),u(e,t.rulets,t.allBake[n].count))},minusCount:function(t,e){for(var n=0;n<t.allBake.length;n++)t.allBake[n].id===e&&(0!=+t.allBake[n].count&&t.allBake[n].count--,u(e,t.muffins,t.allBake[n].count),u(e,t.capcakes,t.allBake[n].count),u(e,t.rulets,t.allBake[n].count))},discount:function(t,e){for(var n=0;n<t.allBake.length;n++)t.allBake[n].id===e&&(t.allBake[n].count="",u(e,t.muffins,t.allBake[n].count),u(e,t.capcakes,t.allBake[n].count),u(e,t.rulets,t.allBake[n].count))}},actions:{},getters:{muffins:function(t){return t.muffins},capcakes:function(t){return t.capcakes},rulets:function(t){return t.rulets},allBake:function(t){return t.allBake},totalPrice:function(t){return t.totalPrice},orderSum:function(t){for(var e=0,n=0;n<t.allBake.length;n++)""!==t.allBake[n].count&&(e+=+t.allBake[n].count*+t.allBake[n].price);return e}}};function u(t,e,n){for(var r=0;r<e.length;r++)e[r].id==t&&(e[r].count=n)}o.a.use(a.a);var s=new a.a.Store({modules:{about:{namespaced:!0,state:{},mutations:{},actions:{},getters:{}},busket:{namespaced:!0,state:{productsToOrder:[]},mutations:{addToCart:function(t,e){var n=e[0],r=e[1];-1===t.productsToOrder.indexOf(n)&&+r>0&&t.productsToOrder.push(n)},removeFromCart:function(t,e){var n=t.productsToOrder.indexOf(e);t.productsToOrder.splice(n,1)}},actions:{},getters:{productsToOrder:function(t){return t.productsToOrder}}},order:{namespaced:!0,state:{inputs:[{name:"Ваше ФИО *",value:"",pattern:/^[а-яА-Я]{2,20}[ ][а-яА-Я]{2,20}/,classes:""},{name:"Телефон *",value:"",pattern:/^[0-9]{6,14}$/,classes:""},{name:"E-mail *",value:"",pattern:/.*[@].*[.].+/,classes:""}]},mutations:{validate:function(t,e){var n=e[0],r=e[1];t.inputs[r].pattern.test(n.value)?t.inputs[r].classes="valid":t.inputs[r].classes="not-valid"}},actions:{},getters:{inputs:function(t){return t.inputs}}},products:c},namespaced:!0}),i=n(9),l=n(5),p=n(6),d=n(7),m=n(8),v=function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"router"},[e("p",{staticStyle:{"font-size":"45px",color:"blue"}},[this._v("\n            Страница не найдена :(\n        ")]),this._v(" "),e("div",{staticStyle:{width:"100%","text-align":"center"}},[e("router-link",{attrs:{to:"/busket"}},[this._v("Вернуться на главную")])],1)])])};v._withStripped=!0;var f={data:function(){return{}}},_=n(1),h=Object(_.a)(f,v,[],!1,null,null,null);h.options.__file="src/components/Not404.vue";var g=h.exports;o.a.use(i.a);var b=[{path:"",redirect:{name:"about"}},{path:"/busket",component:l.default,name:"busket"},{path:"/about",component:p.default,name:"about"},{path:"/products",component:m.default,name:"products"},{path:"/order",component:d.default,name:"order"},{path:"*",component:g}],k=new i.a({routes:b});window.Vue=n(2),Vue.component("about-component",n(6).default);new Vue({data:function(){return{component:!1}},store:s,router:k,el:".about-here"});Vue.component("busket-component",n(5).default);new Vue({data:function(){return{component:!1}},store:s,router:k,el:".busket-here"});Vue.component("nav-component",n(20).default);new Vue({data:function(){return{component:!1}},store:s,router:k,el:".nav-here"});Vue.component("order-component",n(7).default);new Vue({data:function(){return{component:!1}},store:s,router:k,el:".order-here"});Vue.component("products-component",n(8).default);new Vue({data:function(){return{component:!1}},store:s,router:k,el:".products-here"});Vue.component("torouter-component",n(19).default);new Vue({data:function(){return{component:!1}},store:s,router:k,el:".router-part"})},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"router"},[e("router-view")],1)])};r._withStripped=!0;n(0);var o={data:function(){return{}}},a=n(1),c=Object(a.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/Torouter.vue";e.default=c.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"router"},[n("div",{staticClass:"menu-part"},t._l(t.pages,function(e,r){return n("router-link",{key:r,staticClass:"menu-route",attrs:{to:e.url,"active-class":"nav-active"}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),1)])])};r._withStripped=!0;n(0);var o={data:function(){return{pages:[{name:"О нас",fa:"",url:"/about"},{name:"Товары",fa:"",url:"/products"},{name:"Корзина",fa:"",url:"/busket"},{name:"Заказ",fa:"",url:"/order"}]}}},a=n(1),c=Object(a.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/Navigation.vue";e.default=c.exports}]);
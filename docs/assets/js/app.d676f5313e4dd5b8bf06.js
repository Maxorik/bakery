!function(t){function e(e){for(var r,c,i=e[0],a=e[1],s=e[2],l=0,d=[];l<i.length;l++)c=i[l],o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(p&&p(e);d.length;)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var p=a;u.push([23,1]),n()}([,,,,function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(20);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(22);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},,function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"nocontainer"},[n("div",{staticClass:"products"},[t.empty()?n("div",[t._v("Ваша корзина пуста")]):n("div",{staticClass:"grid"},t._l(t.productsToOrder,function(e){return n("div",{staticClass:"product"},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",{staticClass:"busket-change"},[n("button",{staticClass:"btn-circle",on:{click:function(n){return t.minuscount(e.id)}}},[t._v("-")]),t._v(" "),n("div",{staticClass:"busket-product"},[t._v(" "+t._s(e.count)+" ")]),t._v(" "),n("button",{staticClass:"btn-circle",on:{click:function(n){return t.pluscount(e.id)}}},[t._v("+")])])])}),0),t._v(" "),n("div",[t._v("\n                Всего к оплате: "+t._s(t.ordersum)+" рублей\n            ")]),t._v(" "),n("div",{staticClass:"btn-part"},[n("router-link",{staticClass:"menu-route btn-route",attrs:{to:"/products"}},[t._v("Выбрать еще")]),t._v(" "),n("router-link",{staticClass:"menu-route btn-route",attrs:{to:"/order"}},[t._v("Оформить заказ")])],1)])])])};r._withStripped=!0;var o=n(0);function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{}},computed:u({},Object(o.b)("products",{muffins:"muffins",capcakes:"capcakes",rulets:"rulets",allbake:"allBake",totalprice:"totalPrice",ordersum:"orderSum"}),Object(o.b)("busket",{productsList:"productsToOrder"}),{productsToOrder:function(){var t=this;return this.allbake.filter(function(e){return-1!==t.productsList.indexOf(e.id)})}}),methods:u({},Object(o.c)("products",{setcount:"changeCount",pluscount:"plusCount",minuscount:"minusCount"}),{empty:function(){return this.productsList.length<1}})},a=(n(16),n(1)),s=Object(a.a)(i,r,[],!1,null,null,null);s.options.__file="src/components/Busket.vue";e.default=s.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;n(0);var o={data:function(){return{}}},u=n(1),c=Object(u.a)(o,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"about-here"},[e("p",[this._v("About here")])])])}],!1,null,null,null);c.options.__file="src/components/About.vue";e.default=c.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;n(0);var o={data:function(){return{}}},u=n(1),c=Object(u.a)(o,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"nocontainer"},[e("p",[this._v("Order here")])])])}],!1,null,null,null);c.options.__file="src/components/Order.vue";e.default=c.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"nocontainer"},[n("div",{staticClass:"products-menu"},[n("p",{staticClass:"products-nav",on:{click:function(e){t.productType=1}}},[t._v("Маффины")]),t._v(" "),n("p",{staticClass:"products-nav",on:{click:function(e){t.productType=2}}},[t._v("Капкейки")]),t._v(" "),n("p",{staticClass:"products-nav",on:{click:function(e){t.productType=3}}},[t._v("Кексы")])]),t._v(" "),1==t.productType?n("div",{staticClass:"products"},t._l(t.muffins,function(e){return n("div",{staticClass:"product-item"},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",[t._v("Цена: "+t._s(e.price)+" ")]),t._v(" "),n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"product-count",attrs:{type:"text",placeholder:"Сколько штук?"},domProps:{value:e.count},on:{input:[function(n){n.target.composing||t.$set(e,"count",n.target.value)},function(n){return t.setcount([e.id,e.count])}]}}),t._v(" "),n("button",{staticClass:"product-button btn-primary",on:{click:function(n){return t.add(e.id)}}},[t._v("Взять")])]),t._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"product-button btn-warning",on:{click:function(n){return t.remove(e.id)}}},[t._v("Убрать")])])])}),0):t._e(),t._v(" "),2==t.productType?n("div",{staticClass:"products"},t._l(t.capcakes,function(e){return n("div",{staticClass:"product-item"},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",[t._v("Цена: "+t._s(e.price)+" ")]),t._v(" "),n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"product-count",attrs:{type:"text",placeholder:"Сколько штук?"},domProps:{value:e.count},on:{input:[function(n){n.target.composing||t.$set(e,"count",n.target.value)},function(n){return t.setcount([e.id,e.count])}]}}),t._v(" "),n("button",{staticClass:"product-button btn-primary",on:{click:function(n){return t.add(e.id)}}},[t._v("Взять")])]),t._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"product-button btn-warning",on:{click:function(n){return t.remove(e.id)}}},[t._v("Убрать")])])])}),0):t._e(),t._v(" "),3==t.productType?n("div",{staticClass:"products"},t._l(t.rulets,function(e){return n("div",{staticClass:"product-item"},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("img",{staticClass:"product-img",attrs:{src:e.photo}}),t._v(" "),n("div",[t._v("Цена: "+t._s(e.price)+" ")]),t._v(" "),n("div",{staticClass:"flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"product-count",attrs:{type:"text",placeholder:"Сколько штук?"},domProps:{value:e.count},on:{input:[function(n){n.target.composing||t.$set(e,"count",n.target.value)},function(n){return t.setcount([e.id,e.count])}]}}),t._v(" "),n("button",{staticClass:"product-button btn-primary",on:{click:function(n){return t.add(e.id)}}},[t._v("Взять")])]),t._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"product-button btn-warning",on:{click:function(n){return t.remove(e.id)}}},[t._v("Убрать")])])])}),0):t._e(),t._v(" "),n("div",{staticClass:"btn-part"},[n("router-link",{staticClass:"menu-route btn-route",attrs:{to:"/busket"}},[t._v("В корзину")])],1)])])};r._withStripped=!0;var o=n(0);function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{productType:1}},computed:u({},Object(o.b)("products",{muffins:"muffins",capcakes:"capcakes",rulets:"rulets",totalprice:"totalPrice"})),methods:u({},Object(o.c)("busket",{add:"addToCart",remove:"removeFromCart"}),Object(o.c)("products",{setcount:"changeCount"}))},a=(n(19),n(1)),s=Object(a.a)(i,r,[],!1,null,null,null);s.options.__file="src/components/Products.vue";e.default=s.exports},,,,,function(t,e,n){"use strict";var r=n(4);n.n(r).a},function(t,e,n){},,function(t,e,n){"use strict";var r=n(5);n.n(r).a},function(t,e,n){},function(t,e,n){"use strict";var r=n(6);n.n(r).a},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),u=n(0),c={namespaced:!0,state:{muffins:[{id:1,name:"muffin1",price:200,photo:"../img/muf1.jpg",count:""},{id:2,name:"muffin2",price:310,photo:"../img/muf2.jpg",count:""},{id:3,name:"muffin3",price:180,photo:"../img/muf3.jpg",count:""}],capcakes:[{id:4,name:"capcake1",price:145,photo:"../img/cap1.jpg",count:""},{id:5,name:"capcake2",price:210,photo:"../img/cap2.jpg",count:""},{id:6,name:"capcake3",price:230,photo:"../img/cap3.jpg",count:""}],rulets:[{id:7,name:"rulet1",price:300,photo:"../img/rulet1.jpg",count:""},{id:8,name:"rulet2",price:340,photo:"../img/rulet2.jpg",count:""},{id:9,name:"rulet3",price:380,photo:"../img/rulet3.jpg",count:""}],allBake:function(){for(var t=[],e=0;e<[{id:1,name:"muffin1",price:200,photo:"../img/muf1.jpg",count:""},{id:2,name:"muffin2",price:310,photo:"../img/muf2.jpg",count:""},{id:3,name:"muffin3",price:180,photo:"../img/muf3.jpg",count:""}].length;e++)t.push([{id:1,name:"muffin1",price:200,photo:"../img/muf1.jpg",count:""},{id:2,name:"muffin2",price:310,photo:"../img/muf2.jpg",count:""},{id:3,name:"muffin3",price:180,photo:"../img/muf3.jpg",count:""}][e]);for(var n=0;n<[{id:4,name:"capcake1",price:145,photo:"../img/cap1.jpg",count:""},{id:5,name:"capcake2",price:210,photo:"../img/cap2.jpg",count:""},{id:6,name:"capcake3",price:230,photo:"../img/cap3.jpg",count:""}].length;n++)t.push([{id:4,name:"capcake1",price:145,photo:"../img/cap1.jpg",count:""},{id:5,name:"capcake2",price:210,photo:"../img/cap2.jpg",count:""},{id:6,name:"capcake3",price:230,photo:"../img/cap3.jpg",count:""}][n]);for(var r=0;r<[{id:7,name:"rulet1",price:300,photo:"../img/rulet1.jpg",count:""},{id:8,name:"rulet2",price:340,photo:"../img/rulet2.jpg",count:""},{id:9,name:"rulet3",price:380,photo:"../img/rulet3.jpg",count:""}].length;r++)t.push([{id:7,name:"rulet1",price:300,photo:"../img/rulet1.jpg",count:""},{id:8,name:"rulet2",price:340,photo:"../img/rulet2.jpg",count:""},{id:9,name:"rulet3",price:380,photo:"../img/rulet3.jpg",count:""}][r]);return t}(),orderSum:""},mutations:{changeCount:function(t,e){for(var n=e[0],r=e[1],o=0;o<t.allBake.length;o++){var u=t.allBake[o];u.id===n&&(u.count=r)}},plusCount:function(t,e){for(var n=0;n<t.allBake.length;n++)t.allBake[n].id===e&&t.allBake[n].count++},minusCount:function(t,e){for(var n=0;n<t.allBake.length;n++)t.allBake[n].id===e&&t.allBake[n].count--}},actions:{},getters:{muffins:function(t){return t.muffins},capcakes:function(t){return t.capcakes},rulets:function(t){return t.rulets},allBake:function(t){return t.allBake},totalPrice:function(t){return t.totalPrice},orderSum:function(t){for(var e=0,n=0;n<t.allBake.length;n++)""!==t.allBake[n].count&&(e+=+t.allBake[n].count*+t.allBake[n].price);return e}}};o.a.use(u.a);var i=new u.a.Store({modules:{about:{namespaced:!0,state:{},mutations:{},actions:{},getters:{}},busket:{namespaced:!0,state:{productsToOrder:[]},mutations:{addToCart:function(t,e){-1===t.productsToOrder.indexOf(e)&&t.productsToOrder.push(e)},removeFromCart:function(t,e){var n=t.productsToOrder.indexOf(e);t.productsToOrder.splice(n,1)}},actions:{},getters:{productsToOrder:function(t){return t.productsToOrder}}},order:{namespaced:!0,state:{},mutations:{},actions:{},getters:{}},products:c},namespaced:!0}),a=n(12),s=n(8),p=n(9),l=n(10),d=n(11),f=function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"router"},[e("p",{staticStyle:{"font-size":"45px",color:"blue"}},[this._v("\n            Страница не найдена :(\n        ")]),this._v(" "),e("div",{staticStyle:{width:"100%","text-align":"center"}},[e("router-link",{attrs:{to:"/busket"}},[this._v("Вернуться на главную")])],1)])])};f._withStripped=!0;var m={data:function(){return{}}},v=n(1),_=Object(v.a)(m,f,[],!1,null,null,null);_.options.__file="src/components/Not404.vue";var g=_.exports;o.a.use(a.a);var h=[{path:"",redirect:{name:"about"}},{path:"/busket",component:s.default,name:"busket"},{path:"/about",component:p.default,name:"about"},{path:"/products",component:d.default,name:"products"},{path:"/order",component:l.default,name:"order"},{path:"*",component:g}],b=new a.a({routes:h});window.Vue=n(2),Vue.component("about-component",n(9).default);new Vue({data:function(){return{component:!1}},store:i,router:b,el:".about-here"});Vue.component("busket-component",n(8).default);new Vue({data:function(){return{component:!1}},store:i,router:b,el:".busket-here"});Vue.component("nav-component",n(25).default);new Vue({data:function(){return{component:!1}},store:i,router:b,el:".nav-here"});Vue.component("order-component",n(10).default);new Vue({data:function(){return{component:!1}},store:i,router:b,el:".order-here"});Vue.component("products-component",n(11).default);new Vue({data:function(){return{component:!1}},store:i,router:b,el:".products-here"});Vue.component("torouter-component",n(24).default);new Vue({data:function(){return{component:!1}},store:i,router:b,el:".router-part"})},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"router"},[e("router-view")],1)])};r._withStripped=!0;n(0);var o={data:function(){return{}}},u=n(1),c=Object(u.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/Torouter.vue";e.default=c.exports},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"router"},[n("div",{staticClass:"menu-part"},t._l(t.pages,function(e,r){return n("router-link",{key:r,staticClass:"menu-route",attrs:{to:e.url,"active-class":"nav-active"}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),1)])])};r._withStripped=!0;n(0);var o={data:function(){return{pages:[{name:"О нас",url:"/about"},{name:"Товары",url:"/products"},{name:"Корзина",url:"/busket"},{name:"Заказ",url:"/order"}]}}},u=(n(21),n(1)),c=Object(u.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/Navigation.vue";e.default=c.exports}]);
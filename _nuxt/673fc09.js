(window.webpackJsonp=window.webpackJsonp||[]).push([[23,21],{453:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("1eb89c8e",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n(453)},459:function(t,e,n){var o=n(56)(!1);o.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=o},460:function(t,e,n){"use strict";n.r(e);var o=n(10),r=Object(o.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(458),n(16)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},497:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("2039da84",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(497)},508:function(t,e,n){var o=n(56)(!1);o.push([t.i,'.section-title[data-v-736a561a]:after{content:"";--tw-bg-opacity:1;background-color:rgba(250,30,90,var(--tw-bg-opacity));width:40px;height:4px;position:absolute;left:0;bottom:-10px}',""]),t.exports=o},531:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(34),n(10)),l=Object(r.b)({setup:function(){Object(r.i)({title:"FAQ"});var t=Object(r.g)().$content,e=Object(r.e)(null),n=Object(r.h)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("faq").fetch();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))).fetchState;return{faq:e,fetchState:n}},head:{}}),c=(n(507),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"py-4 md:py-8 lg:mx-auto lg:max-w-2xl"},[n("h1",{staticClass:"mb-8 text-4xl font-bold text-center"},[t._v("\n      Frequently Asked Questions\n    ")]),t._v(" "),t.fetchState.pending?t._e():t._l(t.faq.sections,(function(section){return n("WrapperContentBox",{key:section.title,staticClass:"mb-4 md:mb-8"},[n("h2",{staticClass:"relative mb-8 text-2xl font-bold section-title"},[t._v("\n          "+t._s(section.title)+"\n        ")]),t._v(" "),t._l(section.questions,(function(e){return n("div",{key:e.title},[n("h3",{staticClass:"mb-2 text-base font-bold"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"mb-4 prose",domProps:{innerHTML:t._s(t.$md.render(e.content))}})])}))],2)}))],2)])}),[],!1,null,"736a561a",null);e.default=component.exports;installComponents(component,{WrapperContentBox:n(460).default})}}]);
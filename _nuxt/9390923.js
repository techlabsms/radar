(window.webpackJsonp=window.webpackJsonp||[]).push([[15,17],{444:function(e,t,n){"use strict";n.r(t);var r={name:"TIcon",props:{icon:{type:String,required:!0},spin:{type:Boolean}}},o=(n(446),n(24)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"icon",class:{"icon-spin":e.spin}},[n("use",{attrs:{"xlink:href":"#"+e.icon}})])}),[],!1,null,null,null);t.default=component.exports},445:function(e,t,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("570e684c",content,!0,{sourceMap:!1})},446:function(e,t,n){"use strict";n(445)},447:function(e,t,n){var r=n(61)(!1);r.push([e.i,"svg.icon{fill:currentColor;height:1em;margin-bottom:.125em;vertical-align:middle;width:1em}svg.icon-spin{-webkit-animation:icon-spin 2s linear infinite;animation:icon-spin 2s linear infinite}@-webkit-keyframes icon-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes icon-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}",""]),e.exports=r},492:function(e,t,n){"use strict";(function(e){var r=n(5),o=(n(40),n(27),n(31));t.a=Object(o.b)({props:{isSmall:{type:Boolean}},setup:function(){var t=Object(o.e)("public"===e.env.SCOPE),n=Object(o.g)().$content,c=Object(o.e)([]);return Object(o.h)(Object(r.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("social-links").fetch();case 2:content=e.sent,console.log("%cSocialLinks.vue line:33 isPublic","color: #007acc;",t.value),c.value=t.value?content.socialLinks.filter((function(link){return link.is_public})):content.socialLinks;case 5:case"end":return e.stop()}}),e)})))),{socialLinks:c}}})}).call(this,n(150))},535:function(e,t,n){"use strict";n.r(t);var r=n(492).a,o=n(24),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.socialLinks.length?n("ul",{staticClass:"flex items-center space-x-4"},e._l(e.socialLinks,(function(link){return n("li",{key:link.type},[n("a",{staticClass:"hover:text-pink-600",attrs:{href:link.url}},[n("TIcon",{class:e.isSmall?"text-xl":"text-4xl",attrs:{icon:link.type}})],1)])})),0):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(444).default})}}]);
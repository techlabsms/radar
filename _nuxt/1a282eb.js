(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{457:function(e,t,o){"use strict";o.r(t);var n=o(10),l=Object(n.b)({props:{resource:{type:Object,required:!0},onPink:{type:Boolean}},setup:function(){return{icons:{meeting:"location",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice",nothing:"thumbs-up"}}}}),r=o(16),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg",class:e.onPink?"border-pink-900 hover:border-pink-600 hover:text-pink-600":"hover:border-blue-600 hover:text-blue-600",attrs:{href:e.resource.url,target:"_blank"}},[o("div",{staticClass:"flex space-x-4"},[o("p",{staticClass:"flex-none text-xl"},[o("TIcon",{staticClass:"inline-block",attrs:{icon:e.icons[e.resource.type]}})],1),e._v(" "),o("div",[o("p",{staticClass:"font-bold"},[e._v(e._s(e.resource.title))]),e._v(" "),o("p",{staticClass:"text-sm"},[e._v(e._s(e.resource.description))])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:o(152).default})}}]);
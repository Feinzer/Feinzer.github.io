(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric",hour12:!1,hour:"2-digit",minute:"2-digit"})}},247:function(t,e,n){"use strict";n.r(e);n(22);var r=n(2),o={name:"PostTemplate",transition:"load",head:function(){return{title:this.post.title+" - Feinzer"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.redirect,o=t.params,e.next=3,n("/blog",o.slug).fetch().catch((function(){console.error("".concat(o.slug," not found")),r("/")}));case 3:return l=e.sent,e.abrupt("return",{post:l});case 5:case"end":return e.stop()}}),e)})))()},methods:{FormatDate:n(215).a}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post m-2 sm:m-4 md:m-10 flex flex-col py-6 md:p-6 shadow bg-fz-light-gray rounded-lg text-white md:w-3/4 xl:w-1/2 self-center"},[n("div",{staticClass:"flex flex-col-reverse md:flex-row items-center justify-between w-full px-8 md:px-4 pb-10"},[n("p",{staticClass:"post-title text-center tracking-wider text-4xl md:text-5xl font-bold mx-auto px-5"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("button",{staticClass:"h-8 w-8 p-2 mb-2 md:mb-0\n            text-fz-dark-gray bg-fz-green rounded-full shadow\n            transition-transform duration-200 transform hover:scale-105 self-end md:self-auto mt-2 sm:mt-1",on:{click:function(e){return t.$router.push("/blog")}}},[n("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{staticClass:"pt-3 pb-16 px-3 md:px-6"},[n("nuxt-content",{attrs:{document:t.post}})],1),t._v(" "),n("div",{staticClass:"self-end text-right flex flex-col items-end px-6 md:px-0"},[n("p",{staticClass:"post-author text-sm text-gray-400"},[t._v(t._s(t.post.author))]),t._v(" "),n("p",{staticClass:"post-author mt-2 text-xs text-gray-500"},[t._v(t._s(t.FormatDate(t.post.createdAt)))])])])}),[],!1,null,null,null);e.default=component.exports}}]);
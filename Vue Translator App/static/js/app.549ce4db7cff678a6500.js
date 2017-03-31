webpackJsonp([0],[,,function(t,e,a){"use strict";var r=a(1),n=a(21),s=a(14),o=a.n(s);r.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:o.a}]})},function(t,e,a){a(12);var r=a(0)(a(5),a(19),null,null);t.exports=r.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(15),n=a.n(r),s=a(16),o=a.n(s);e.default={name:"app",components:{TranslateForm:n.a,TranslateOutput:o.a},data:function(){return{translatedText:""}},methods:{TranslateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170331T152444Z.c2e40662dce0e578.8c7cc80f365945f6f298240030089a9499c7c9eb&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TranslateForm",data:function(){return{textToTranslate:"",language:""}},created:function(){this.language="ru"},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TranslateOutput",props:["translatedText"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(1),n=a(3),s=a.n(n),o=a(2),l=a(4),u=a.n(l);r.a.config.productionTip=!1,r.a.use(u.a),new r.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(13);var r=a(0)(a(6),a(20),"data-v-ddc2179e",null);t.exports=r.exports},function(t,e,a){a(10);var r=a(0)(a(7),a(17),null,null);t.exports=r.exports},function(t,e,a){a(11);var r=a(0)(a(8),a(18),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"TranslateForm"}},[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("form",{staticClass:"form-inline well",attrs:{id:"transForm"},on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter a word..."},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"fr"}},[t._v("French")]),t._v(" "),a("option",{attrs:{value:"es"}},[t._v("Spanish")]),t._v(" "),a("option",{attrs:{value:"zh"}},[t._v("Chinese")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Translate"}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"text-success"},[t._v(t._s(t.translatedText))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"app"}},[a("h1",[t._v("Word Translator")]),t._v(" "),a("h5",[t._v("Powered by vue.js - made by Stefan Neacsu")]),t._v(" "),a("TranslateForm",{on:{formSubmit:t.TranslateText}}),t._v(" "),a("TranslateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},,,,function(t,e){}],[9]);
//# sourceMappingURL=app.549ce4db7cff678a6500.js.map
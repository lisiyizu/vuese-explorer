(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("8bbf"),c=t.n(r),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("code-mirror",{attrs:{title:"Vue Component(editable)"},model:{value:e.vueSource,callback:function(n){e.vueSource=n},expression:"vueSource"}}),t("code-mirror",{ref:"consumeMirror",attrs:{title:"Generated content",mode:e.consumerMode,theme:"darcula","read-only":""},model:{value:e.consumerSource,callback:function(n){e.consumerSource=n},expression:"consumerSource"}},[t("button",{class:{active:0===e.currentType},attrs:{type:"button"},on:{click:function(n){e.handleSwitch(0)}}},[e._v("\n      Raw Markdown\n    ")]),t("button",{class:{active:1===e.currentType},attrs:{type:"button"},on:{click:function(n){e.handleSwitch(1)}}},[e._v("\n      Parser Result\n    ")]),t("button",{class:{active:2===e.currentType},attrs:{type:"button"},on:{click:function(n){e.handleSwitch(2)}}},[e._v("\n      Render Result\n    ")]),t("a",{staticClass:"githubLink",attrs:{href:"https://github.com/vuese/vuese-explorer"}},[e._v("\n      🔗 Github\n    ")])])],1)},o=[],a=(t("6b54"),"\n<template>\n  <div>\n    \x3c!-- Form header --\x3e\n    <slot name=\"header\">\n      \x3c!-- `<th>title</th>` --\x3e\n      <th>title</th>\n    </slot>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'MyComponent',\n  props: {\n    // The name of the form, up to 8 characters\n    name: {\n      type: [String, Number],\n      required: true,\n      validator () {}\n    }\n  },\n  methods: {\n    // @vuese\n    // Used to manually clear the form\n    clear () {\n      // Fire when the form is cleared\n      // @arg The argument is a boolean value representing xxx\n      this.$emit('onclear', true)\n    }\n  }\n}\n<\/script>\n"),u=t("f499"),i=t.n(u);function l(e){return i()(e,null,2)}t("3b2b"),t("4917"),t("a481"),t("7f7f");var d=/\[name\]/g,h=/<!--\s*@vuese:([a-zA-Z_][\w\-\.]*):(\w+):start\s*-->[^]*<!--\s*@vuese:\1:\2:end\s*-->/,m=function(e,n){var t=p(e);if(t){var r="",c=e.name||"Anonymous";r=t.replace(d,c);var s=0,o=r;while(o){var a=o.match(h);a?function(){var e=a[0],t=a[2],u=o.indexOf(e),i=new RegExp("\x3c!--\\s*@vuese:(".concat(c,"):(").concat(t,"):start\\s*--\x3e[^]*\x3c!--\\s*@vuese:\\1:\\2:end\\s*--\x3e"));r=r.replace(i,function(e,r,c){if(n[t]){var s="\x3c!-- @vuese:".concat(r,":").concat(c,":start --\x3e\n");return s+=n[t],s+="\n\x3c!-- @vuese:".concat(r,":").concat(c,":end --\x3e\n"),s}return e}),s=u+e.length}():s=o.length,o=o.slice(s)}return r}};function p(e){var n="# [name]\n\n",t=n;return n+=e.props?v("props"):"",n+=e.events?v("events"):"",n+=e.slots?v("slots"):"",n+=e.methods?v("methods"):"",t===n?"":n}function v(e){var n="## ".concat(f(e),"\n\n");return n+="\x3c!-- @vuese:[name]:".concat(e,":start --\x3e\n"),n+="\x3c!-- @vuese:[name]:".concat(e,":end --\x3e\n\n"),n}function f(e){return e[0].toUpperCase()+e.slice(1)}var b=t("43d0"),x={components:{CodeMirror:function(){return t.e("chunk-4ae31a41").then(t.bind(null,"465d"))}},data:function(){return{vueSource:a,parserRes:null,renderRes:null,md:"",currentType:0,consumerMode:"markdown",consumerSource:""}},watch:{vueSource:"make"},mounted:function(){this.make()},methods:{make:function(){try{this.parserRes=Object(b["parser"])(this.vueSource);var e=new b["Render"](this.parserRes);this.renderRes=e.render(),this.md=m(this.parserRes,this.renderRes),this.consumerSource=this.md}catch(n){this.consumerSource=n.toString()}},handleSwitch:function(e){switch(this.currentType=e,e){case 0:this.consumerSource=this.md,this.consumerMode="markdown";break;case 1:this.consumerSource=l(this.parserRes),this.consumerMode="javascript";break;case 2:this.consumerSource=l(this.renderRes),this.consumerMode="javascript";break}}}},w=x,S=(t("7faf"),t("2877")),k=Object(S["a"])(w,s,o,!1,null,null,null);k.options.__file="App.vue";var R=k.exports;c.a.config.productionTip=!1,new c.a({render:function(e){return e(R)}}).$mount("#app")},"7faf":function(e,n,t){"use strict";var r=t("8fba"),c=t.n(r);c.a},"8bbf":function(e,n){e.exports=Vue},"8fba":function(e,n,t){}},[[0,"runtime~app","chunk-vendors"]]]);
//# sourceMappingURL=app.5458e9cd.js.map
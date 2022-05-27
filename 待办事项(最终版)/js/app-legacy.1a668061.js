(function(){"use strict";var t={2901:function(t,o,e){e(6992),e(8674),e(9601),e(7727);var n=e(9567),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-container"},[e("div",{staticClass:"todo-wrap"},[e("header-module",{on:{addTodo:t.addTodo}}),e("list-module",{attrs:{todos:t.todos}}),e("footer-module",{attrs:{todos:t.todos},on:{checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1)])},r=[],s=(e(1539),e(4747),e(7327),e(8862),e(8937)),l=e.n(s),d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-header"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入您的待办事项,按回车确认"},domProps:{value:t.title},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.add.apply(null,arguments)},input:function(o){o.target.composing||(t.title=o.target.value)}}})])},u=[],c=(e(3210),e(562)),a={data:function(){return{title:""}},methods:{add:function(){if(!this.title.trim())return alert("输入不能为空");var t={id:(0,c.x0)(),title:this.title,done:!1};this.$emit("addTodo",t),this.title=""}}},f=a,h=e(1001),p=(0,h.Z)(f,d,u,!1,null,"3864a832",null),v=p.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("ul",{staticClass:"todo-main"},t._l(t.todos,(function(t){return e("item-module",{key:t.id,attrs:{todo:t}})})),1)])},b=[],T=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("li",[e("label",[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(o){return t.handleCheck(t.todo.id)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(t._s(t.todo.title))]),e("input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"}],ref:"inputTitle",attrs:{type:"text"},domProps:{value:t.todo.title},on:{blur:function(o){return t.blur(t.todo,o)}}})]),e("div",{staticClass:"item-left"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}],staticClass:"btn btn-edit",on:{click:function(o){return t.edit(t.todo)}}},[t._v(" 编辑 ")]),e("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.deleteId(t.todo.id)}}},[t._v("删除")])])])},k=[],_={props:["todo"],methods:{handleCheck:function(t){this.$bus.$emit("checkTodo",t)},deleteId:function(t){confirm("确定删除吗?")&&l().publish("deleteTodo",t)},edit:function(t){void 0!==t.isEdit?t.isEdit=!0:this.$set(t,"isEdit",!0),this.$nextTick((function(){this.$refs.inputTitle.focus()}))},blur:function(t,o){if(t.isEdit=!1,!o.target.value.trim())return alert("输入不能为空");this.$bus.$emit("updateTodo",t.id,o.target.value)}}},y=_,g=(0,h.Z)(y,T,k,!1,null,"15995118",null),w=g.exports,A={components:{ItemModule:w},props:["todos"]},$=A,x=(0,h.Z)($,m,b,!1,null,"717f2dde",null),E=x.exports,C=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(o){var e=t.isAll,n=o.target,i=!!n.checked;if(Array.isArray(e)){var r=null,s=t._i(e,r);n.checked?s<0&&(t.isAll=e.concat([r])):s>-1&&(t.isAll=e.slice(0,s).concat(e.slice(s+1)))}else t.isAll=i}}})]),e("span",[e("span",[t._v("已完成 "+t._s(t.doneTotal))]),t._v(" / 全部 "+t._s(t.total)+" ")]),e("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},O=[],N={props:["todos"],computed:{total:function(){return this.todos.length},doneTotal:function(){return this.todos.reduce((function(t,o){return t+(o.done?1:0)}),0)},isAll:{get:function(){return this.doneTotal===this.total&&this.total>0},set:function(t){this.$emit("checkAllTodo",t)}}},methods:{clearAll:function(){confirm("确定删除所有已完成项目吗?")&&this.$emit("clearAllTodo")}}},Z=N,I=(0,h.Z)(Z,C,O,!1,null,"1be658d1",null),j=I.exports,P={components:{HeaderModule:v,ListModule:E,FooterModule:j},data:function(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo:function(t){this.todos.unshift(t)},checkTodo:function(t){this.todos.forEach((function(o){o.id===t&&(o.done=!o.done)}))},deleteTodo:function(t,o){this.todos=this.todos.filter((function(t){return t.id!==o}))},checkAllTodo:function(t){this.todos.forEach((function(o){o.done=t}))},updateTodo:function(t,o){this.todos.forEach((function(e){e.id===t&&(e.title=o)}))},clearAllTodo:function(){this.todos=this.todos.filter((function(t){return!t.done}))}},watch:{todos:{deep:!0,handler:function(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted:function(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("updateTodo",this.updateTodo),this.pubId=l().subscribe("deleteTodo",this.deleteTodo)},beforeDestroy:function(){this.$bus.$off("checkTodo"),this.$bus.$off("updateTodo"),l().unsubscribe(this.pubId)}},M=P,S=(0,h.Z)(M,i,r,!1,null,null,null),F=S.exports;n.Z.config.productionTip=!1,new n.Z({el:"#app",render:function(t){return t(F)},beforeCreate:function(){n.Z.prototype.$bus=this}})}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}e.m=t,function(){var t=[];e.O=function(o,n,i,r){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],r=t[c][2];for(var l=!0,d=0;d<n.length;d++)(!1&r||s>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[d])}))?n.splice(d--,1):(l=!1,r<s&&(s=r));if(l){t.splice(c--,1);var u=i();void 0!==u&&(o=u)}}return o}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,i,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var i,r,s=n[0],l=n[1],d=n[2],u=0;if(s.some((function(o){return 0!==t[o]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(d)var c=d(e)}for(o&&o(n);u<s.length;u++)r=s[u],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},n=self["webpackChunkvue2_cli"]=self["webpackChunkvue2_cli"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(2901)}));n=e.O(n)})();
//# sourceMappingURL=app-legacy.1a668061.js.map
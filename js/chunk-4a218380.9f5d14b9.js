(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a218380"],{"79eb":function(e,t,i){},c681:function(e,t,i){"use strict";var n=i("79eb"),o=i.n(n);o.a},dceb:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.add}},[e._v("新 增")]),n("el-card",[n("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[n("template",{slot:"empty"},[n("div",{staticClass:"empty"},[n("img",{attrs:{src:i("a431")}}),n("p",[e._v("暂无数据")])])]),n("el-table-column",{attrs:{label:"名称",align:"center",prop:"functionName"}}),n("el-table-column",{attrs:{label:e.$t("list.operation"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:function(i){return e.edit(t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.del(t.row.id)}}},[e._v("删除")])]}}])})],2)],1),e.dialogDeviceVisible?n("AddDetails",{ref:"AddDetails"}):e._e()],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"insert"===e.type?"新增附加功能":"修改附加功能",visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"110px"}},[i("el-form-item",{attrs:{label:"附加功能类型",prop:"functionType"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.functionType,callback:function(t){e.$set(e.form,"functionType",t)},expression:"form.functionType"}},e._l(e.options,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"附加功能名称",prop:"functionName"}},[i("el-input",{model:{value:e.form.functionName,callback:function(t){e.$set(e.form,"functionName",t)},expression:"form.functionName"}})],1),i("el-form-item",{attrs:{label:"值"}},[i("Json-editor",{ref:"jsonEditor",model:{value:e.form.functionValue,callback:function(t){e.$set(e.form,"functionValue",t)},expression:"form.functionValue"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancel}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addSubmit("form")}}},[e._v("确 定")])],1)],1)},a=[],c=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),l=i("af07"),s=i("4f94");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(i,!0).forEach((function(t){Object(c["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={name:"AddDetails",data:function(){return{dialogVisible:!1,form:{},options:[],value:"",type:"insert",rules:{functionType:[{required:!0,message:"请选择附加功能类型",trigger:"blur"}],functionName:[{required:!0,message:"附加功能名称不能为空",trigger:"blur"}]}}},components:{JsonEditor:l["a"]},created:function(){this.form.functionValue={}},methods:{init:function(e){var t=this;Object(s["e"])().then((function(e){t.options=e.data})),e&&(this.form=e,this.type="edit"),this.dialogVisible=!0},handleClose:function(e){this.$confirm("确认关闭？").then((function(){e()})).catch((function(){}))},addSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.form.functionValue instanceof Object?t.form.functionValue=t.form.functionValue:t.form.functionValue=JSON.parse(JSON.stringify(JSON.parse(t.form.functionValue))),"insert"===t.type?Object(s["a"])(f({},t.form,{DeviceId:t.$route.query.deviceId})).then((function(){t.$message({message:"创建成功",type:"success"}),t.dialogVisible=!1,t.$parent.init()})):"edit"===t.type&&Object(s["f"])(f({},t.form,{DeviceId:t.$route.query.deviceId})).then((function(){t.$message({message:"修改成功",type:"success"}),t.dialogVisible=!1,t.$parent.init()})))}))},cancel:function(){this.dialogVisible=!1},close:function(){this.dialogVisible=!1,this.$parent.dialogDeviceVisible=!1}}},p=d,b=i("2877"),m=Object(b["a"])(p,r,a,!1,null,"d72c471c",null),h=m.exports,v={name:"Add",components:{AddDetails:h},data:function(){return{tableData:[],dialogDeviceVisible:!1}},created:function(){this.init()},methods:{init:function(){var e=this;Object(s["c"])(this.$route.query).then((function(t){e.tableData=t.data}))},add:function(){var e=this;this.dialogDeviceVisible=!0,this.$nextTick((function(){e.$refs.AddDetails.init()}))},edit:function(e){var t=this;this.dialogDeviceVisible=!0,this.$nextTick((function(){t.$refs.AddDetails.init(e)}))},del:function(e){var t=this;Object(s["b"])({id:e}).then((function(){t.$message({message:"删除成功",type:"success"}),t.init()}))}}},g=v,y=(i("c681"),Object(b["a"])(g,n,o,!1,null,"45e955eb",null));t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-4a218380.9f5d14b9.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24fcb940"],{"2fc6":function(e,t,i){},5119:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.dialogVisible,"close-on-click-modal":!1,"append-to-body":!0,"modal-append-to-body":!1,title:"绑定视图"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.onClose}},["Device"==e.type?n("strong",[e._v("设备: "+e._s(e.deviceCode))]):"Type"==e.type?n("strong",[e._v("设备类型: "+e._s(e.deviceCode))]):e._e(),n("el-table",{ref:"multipleTable",staticStyle:{"margin-top":"10px"},attrs:{data:e.tableData,height:"500",border:""},on:{select:e.handleChoose,"select-all":e.handleChooseAll}},[n("template",{slot:"empty"},[n("div",{staticClass:"empty"},[n("img",{attrs:{src:i("a431")}}),n("p",[e._v("暂无数据")])])]),n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"viewName",label:"视图名称",align:"center"}}),n("el-table-column",{attrs:{prop:"viewTypeName",label:"视图名称类型",align:"center"}}),n("el-table-column",{attrs:{prop:"remark",label:"备注",width:"180"}})],2),n("div",{staticClass:"paginationContainer"},[n("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[5,20,30,40,50],"page-size":e.pageSize,total:e.totalCount,layout:"total, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange}})],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("cancel")))]),n("el-button",{attrs:{type:"primary"},on:{click:e.chooseView}},[e._v(e._s(e.$t("ok")))])],1)],1)},a=[],o=(i("ac6a"),i("20d6"),i("6762"),i("2fdb"),i("11e6")),s={name:"Emply",data:function(){return{dialogVisible:!1,tableData:[],pageIndex:1,pageSize:10,totalCount:30,chooseArray:[],deviceCode:"",id:"",type:"Device"}},methods:{handleChooseAll:function(e){var t=this,i=this.chooseArray.map((function(e){return e.viewId}));if(e.length>0){var n=e.filter((function(e){return!i.includes(e.viewId)}));this.chooseArray=this.chooseArray.concat(n)}else this.chooseArray=this.chooseArray.filter((function(e){return!t.tableData.map((function(e){return e.viewId})).includes(e.viewId)}))},handleChoose:function(e,t){var i=e.some((function(e){return e.viewId===t.viewId}));if(i){var n=this.chooseArray.some((function(e){return e.viewId===t.viewId}));n||this.chooseArray.push(t)}else{var a=this.chooseArray.findIndex((function(e){return e.viewId===t.viewId}));this.chooseArray.splice(a,1)}},onClose:function(){this.$emit("hidden")},handleCurrentChange:function(e){this.pageIndex=e,this.getData()},toggleSelection:function(e){var t=this,i=this.tableData.filter((function(t){return e.map((function(e){return e.viewId})).includes(t.viewId)}));i.forEach((function(e){t.$nextTick((function(){t.$refs.multipleTable.toggleRowSelection(e,!0)}))}))},init:function(e){var t=this;e&&(e.hasOwnProperty("typeName")||(this.type="Type"),this.deviceCode=e.code,this.id=e.id),this.dialogVisible=!0;var i,n=[];"Device"==this.type?i=o["g"]:"Type"==this.type&&(i=o["h"]),i({deviceId:this.id}).then((function(e){n=e.data;var i=n.map((function(e){for(var i=0;i<t.tableData.length;i++)if(t.tableData[i].viewId===e.viewId){e=t.tableData[i];break}return e}));t.chooseArray=i,t.getData()}))},getData:function(){var e=this;Object(o["f"])({pageIndex:this.pageIndex,pageSize:this.pageSize}).then((function(t){e.$set(e,"tableData",t.data.items),e.totalCount=t.data.totalCount,e.pageIndex=t.data.pageIndex,e.pageSize=t.data.pageSize,e.toggleSelection(e.chooseArray)}))},chooseView:function(){var e=this,t=[];this.chooseArray.map((function(e){t.push(e.viewId)})),"Device"==this.type?Object(o["a"])({deviceId:this.id,viewIds:t}).then((function(){e.dialogVisible=!1,e.chooseArray=[],e.$message({type:"success",message:"绑定成功"})})):"Type"==this.type&&Object(o["b"])({deviceTypeId:this.id,viewIds:t}).then((function(){e.dialogVisible=!1,e.chooseArray=[],e.$message({type:"success",message:"绑定成功"})}))}}},r=s,l=(i("ce91"),i("2877")),c=Object(l["a"])(r,n,a,!1,null,"527b20d6",null);t["a"]=c.exports},6083:function(e,t,i){},"7a27":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Search",{attrs:{"show-btn":e.buttonPermissions("300020101"),onsubmit:"return false"},on:{search:e.searchInit,changeKeyword:e.changeKeyword}},[e.buttonPermissions("300020202")?n("el-button",{attrs:{type:"warning",plain:"",size:"small",icon:"el-icon-plus"},on:{click:e.insert}},[e._v(e._s(e.$t("created")))]):e._e()],1),n("el-card",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{data:e.tableData,border:""}},[n("template",{slot:"empty"},[n("div",{staticClass:"empty"},[n("img",{attrs:{src:i("a431")}}),n("p",[e._v("暂无数据")])])]),n("el-table-column",{attrs:{label:e.$t("type.code"),align:"center",prop:"code"}}),n("el-table-column",{attrs:{label:e.$t("type.name"),align:"center",prop:"name"}}),e.buttonPermissions("300020203")||e.buttonPermissions("300020204")?n("el-table-column",{attrs:{label:e.$t("type.operation"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-row",[e.buttonPermissions("30002011801")||e.buttonPermissions("1000030002011801")?n("el-col",{attrs:{span:4,offset:2}},[n("el-button",{attrs:{type:"text",icon:"el-icon-reading"},on:{click:function(i){return e.bindView(t.row)}}},[e._v("绑定视图")])],1):e._e(),n("el-col",{attrs:{span:4,offset:4}},[e.buttonPermissions("300020203")?n("el-button",{attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:function(i){return e.edit(t.row)}}},[e._v(e._s(e.$t("edit")))]):e._e()],1),n("el-col",{attrs:{span:4,offset:2}},[e.buttonPermissions("300020204")?n("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.del(t.row.id)}}},[e._v(e._s(e.$t("delete")))]):e._e()],1)],1)]}}],null,!1,3986092612)}):e._e()],2)],1),n("div",{staticClass:"paginationContainer"},[n("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[5,20,30,40,50],"page-size":e.pageSize,total:e.totalCount,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e.detailShow?n("Detail",{ref:"detail",on:{reload:e.editHidden}}):e._e(),e.viewShow?n("BindView",{ref:"bindView"}):e._e()],1)},a=[],o=i("1427"),s=i("11e6"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.visible,"close-on-click-modal":!1,title:"insert"===e.type?this.$t("created"):this.$t("edit")},on:{"update:visible":function(t){e.visible=t},close:e.onClose}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[i("el-row",{attrs:{gutter:18}},[i("el-col",{attrs:{offset:1,span:9}},[i("el-form-item",{attrs:{label:e.$t("type.name"),prop:"name"}},[i("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),i("el-col",{attrs:{offset:1,span:9}},[i("el-form-item",{attrs:{label:e.$t("type.code"),prop:"code"}},[i("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:20}},[i("el-form-item",{attrs:{label:e.$t("type.remark"),prop:"remark"}},[i("el-input",{attrs:{rows:2,placeholder:e.$t("type.enterContent"),type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancel}},[e._v(e._s(e.$t("cancel")))]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v(e._s(e.$t("ok")))])],1)],1)},l=[],c={data:function(){return{visible:!1,type:"insert",rules:{name:[{required:!0,message:this.$t("type.rules.enterName"),trigger:"blur"}],code:[{required:!0,message:this.$t("type.rules.enterCode"),trigger:"blur"}],remark:[{required:!0,message:this.$t("type.rules.enterRemark"),trigger:"blur"}]},form:{}}},methods:{init:function(e){this.type=null==e?"insert":"edit",this.visible=!0,e&&(this.form=e)},onClose:function(){this.$parent.detailShow=!1,this.form=""},cancel:function(){this.visible=!1},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&("edit"==t.type?Object(s["r"])(t.form).then((function(e){t.$message({type:"success",message:t.$t("rules.successfulRevision"),duration:500,onClose:function(){t.onClose()}})})):"insert"==t.type&&Object(s["k"])(t.form).then((function(e){t.$message({type:"success",message:t.$t("rules.newsuccess"),duration:500,onClose:function(){t.onClose(),t.$parent.init()}})})))}))}}},u=c,d=i("2877"),p=Object(d["a"])(u,r,l,!1,null,null,null),h=p.exports,f=i("4624"),m=i("5119"),g={name:"Type",components:{Search:o["a"],Detail:h,BindView:m["a"]},mixins:[f["d"],f["a"]],data:function(){return{loading:!1,tableData:[],detailShow:!1,viewShow:!1}},mounted:function(){this.init()},methods:{bindView:function(e){var t=this;this.viewShow=!0,this.$nextTick((function(){t.$refs.bindView.init(e)}))},changeKeyword:function(e){this.keyword=e},init:function(){var e=this;this.loading=!0,Object(s["q"])({keyword:this.keyword,pageIndex:this.pageIndex,pageSize:this.pageSize}).then((function(t){e.loading=!1,e.$set(e,"tableData",t.data.items),e.totalCount=t.data.totalCount,e.pageIndex=t.data.pageIndex,e.pageSize=t.data.pageSize}))},searchInit:function(){this.pageIndex=1,this.init()},insert:function(){var e=this;this.detailShow=!0,this.$nextTick((function(){e.$refs.detail.init()}))},editHidden:function(){this.detailShow=!1,this.init()},edit:function(e){var t=this;this.detailShow=!0,this.$nextTick((function(){t.$refs.detail.init(e)}))},del:function(e){var t=this;this.$confirm(this.$t("type.sureDelete"),this.$t("tips"),{confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel"),type:"warning"}).then((function(){Object(s["m"])(e).then((function(){t.$message({type:"success",message:t.$t("rules.successfulDeletion"),duration:500,onClose:function(){t.pageIndex=1,t.init()}})}))})).catch((function(){t.$message({type:"info",message:t.$t("rules.canceledDeletion")})}))}}},b=g,v=(i("fe0e"),Object(d["a"])(b,n,a,!1,null,"30454e6e",null));t["default"]=v.exports},ce91:function(e,t,i){"use strict";var n=i("6083"),a=i.n(n);a.a},fe0e:function(e,t,i){"use strict";var n=i("2fc6"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-24fcb940.1e408b9a.js.map
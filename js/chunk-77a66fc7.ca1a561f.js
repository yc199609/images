(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77a66fc7"],{"53fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return d}));var o=n("b775"),i={GetAll:"/api/company/Role/GetAll",GetById:"/api/company/Role/GetById",Create:"/api/company/Role/Create",deleteRole:"/api/company/Role/delete",GetAllFunction:"/api/Operation/Function/GetAllDmsFuncs",UpdateRoleRights:"/api/Company/Role/UpdateRoleRights",SaveRoleRights:"/api/company/Role/SaveRoleRights"};function a(){return Object(o["a"])({url:i.GetAll,method:"get",headers:{"Content-Type":"application/json"}})}function l(e){return Object(o["a"])({url:i.GetById,method:"get",headers:{"Content-Type":"application/json"},params:{id:e}})}function s(e){return Object(o["a"])({url:i.deleteRole,method:"post",headers:{"Content-Type":"application/json"},data:{id:e}})}function r(){return Object(o["a"])({url:i.GetAllFunction,method:"get"})}function c(e){return Object(o["a"])({url:i.UpdateRoleRights,method:"post",headers:{"Content-Type":"application/json"},data:e})}function d(e){return Object(o["a"])({url:i.SaveRoleRights,method:"post",headers:{"Content-Type":"application/json"},data:e})}},"8bf9":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("el-card",[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v(e._s(e.$t("role.roleList")))]),e.buttonPermissions("300010302")?o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.insert}},[o("i",{staticClass:"el-icon-plus"}),e._v(" "+e._s(e.$t("role.newRoles")))]):e._e()],1),e.buttonPermissions("300010301")?o("el-table",{staticClass:"table",attrs:{data:e.tableData,border:""}},[o("template",{slot:"empty"},[o("div",{staticClass:"empty"},[o("img",{attrs:{src:n("a431")}}),o("p",[e._v("暂无数据")])])]),o("el-table-column",{attrs:{label:e.$t("role.newRoles"),align:"center",prop:"name"}}),o("el-table-column",{attrs:{label:e.$t("role.roleCode"),align:"center",prop:"code"}}),o("el-table-column",{attrs:{label:"level",align:"center",prop:"level"}}),o("el-table-column",{attrs:{label:e.$t("role.remark"),align:"center",prop:"remark"}}),e.buttonPermissions("300010303")||e.buttonPermissions("300010304")?o("el-table-column",{attrs:{label:e.$t("role.edit"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-row",[o("el-col",{staticClass:"ycbutton",attrs:{offset:3,span:8}},[e.buttonPermissions("300010303")?o("el-button",{attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:function(n){return e.edit(t.row.id)}}},[e._v(e._s(e.$t("role.edit")))]):e._e()],1),o("el-col",{staticClass:"ycbutton",attrs:{span:8,offset:2}},[e.buttonPermissions("300010304")?o("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.del(t.row.id)}}},[e._v(e._s(e.$t("role.delete")))]):e._e()],1)],1)]}}],null,!1,1112571530)}):e._e()],2):e._e()],1),e.detailShow?o("Detail",{ref:"detail",on:{reload:e.editHidden}}):e._e()],1)},i=[],a=n("53fc"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.visible,"close-on-click-modal":!1,title:"insert"===e.type?"新增":"修改"},on:{"update:visible":function(t){e.visible=t},close:e.onClose}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{attrs:{maxlength:50},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),n("el-col",{attrs:{span:7}},[n("el-form-item",{attrs:{label:"角色代码",prop:"code"}},[n("el-input",{attrs:{maxlength:100},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1),n("el-col",{attrs:{span:7}},[n("el-form-item",{attrs:{label:"等级",prop:"level"}},[n("el-input",{attrs:{maxlength:50,type:"number"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",e._n(t))},expression:"form.level"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{offset:1}},[n("strong",[e._v("功能权限")]),n("el-tree",{ref:"tree",staticStyle:{width:"50%"},attrs:{props:e.defaultProps,"check-strictly":!0,data:e.data,"default-checked-keys":e.checkedKeys,"node-key":"id","show-checkbox":""},on:{"check-change":e.handleCheckChange}})],1)],1),n("el-form-item",{staticClass:"buttonRow",staticStyle:{"text-align":"center"}},[n("el-button",{on:{click:e.cancel}},[e._v("取消")]),n("el-button",{staticClass:"mr10px",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)},s=[],r=(n("7f7f"),n("75fc")),c=(n("7514"),n("ac6a"),{data:function(){return{visible:!1,form:{name:"",code:"",type:[],functionIds:[],level:null},rules:{name:[{type:"string",required:!0,message:"请输入角色名称",trigger:"blur"}],code:[{type:"string",required:!0,message:"请输入角色代码",trigger:"blur"}]},defaultProps:{label:"name",children:"children"},type:"insert",data:[],id:"",checkedKeys:[]}},methods:{handleCheckChange:function(e,t){var n=this;t?(this.$refs.tree.store.nodesMap[e.id].expanded=!0,this.$refs.tree.setChecked(e.parentId,!0)):e.children.forEach((function(e){n.$refs.tree.setChecked(e.id,!1)}))},init:function(e){var t=this;this.id=e,this.type=null==e?"insert":"edit",this.visible=!0,Object(a["b"])().then((function(e){t.data=e.data})),e&&Object(a["c"])(e).then((function(e){t.checkedKeys=e.data.functionIds,e.data.birthday=t.$moment.utc(e.data.birthday).local().format(),t.$set(t,"form",e.data)}))},onSubmit:function(){var e=this,t=[];this.$refs.tree.getCheckedNodes().find((function(e){t.push(e.id)})),t=[].concat(Object(r["a"])(this.$refs.tree.getHalfCheckedKeys()),Object(r["a"])(t)),this.form.functionIds=t,this.$refs.form.validate((function(t){if(t){if(0===e.$refs.tree.getCheckedNodes().length)return void e.$message({message:"请选择至少一个功能权限",type:"warning"});"edit"===e.type&&Object(a["e"])({roleName:e.form.name,code:e.form.code,roleId:e.id,functionIds:e.form.functionIds,level:e.form.level}).then((function(){e.$message({message:"保存成功",type:"success",duration:500,onClose:function(){e.$emit("reload")}})})),"insert"===e.type&&Object(a["d"])({roleName:e.form.name,code:e.form.code,functionIds:e.form.functionIds,level:e.form.level}).then((function(){e.$message({message:"保存成功",type:"success",duration:500,onClose:function(){e.$emit("reload")}})}))}}))},cancel:function(){this.visible=!1},onClose:function(){this.$parent.detailShow=!1}}}),d=c,u=n("2877"),f=Object(u["a"])(d,l,s,!1,null,null,null),m=f.exports,p=n("4624"),h={name:"Role",components:{Detail:m},mixins:[p["c"],p["a"]],data:function(){return{tableData:[],detailShow:!1}},mounted:function(){this.init()},methods:{init:function(){var e=this;Object(a["a"])().then((function(t){e.$set(e,"tableData",t.data)}))},insert:function(){var e=this;this.detailShow=!0,this.$nextTick((function(){e.$refs.detail.init()}))},edit:function(e){var t=this;this.detailShow=!0,this.$nextTick((function(){t.$refs.detail.init(e)}))},editHidden:function(){this.init(),this.detailShow=!1},del:function(e){var t=this;this.$confirm(this.$t("role.delDevice"),this.$t("tips"),{confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel"),type:"warning"}).then((function(){Object(a["f"])(e).then((function(){t.$message({type:"success",message:t.$t("rules.successfulDeletion"),duration:500,onClose:function(){t.init()}})}))})).catch((function(){t.$message({type:"info",message:t.$t("rules.canceledDeletion")})}))}}},b=h,g=(n("b695"),Object(u["a"])(b,o,i,!1,null,"9c48b30c",null));t["default"]=g.exports},b695:function(e,t,n){"use strict";var o=n("dd43"),i=n.n(o);i.a},dd43:function(e,t,n){}}]);
//# sourceMappingURL=chunk-77a66fc7.ca1a561f.js.map
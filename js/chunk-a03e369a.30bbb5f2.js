(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a03e369a"],{"10fc":function(e,t,r){},"3c83":function(e,t,r){"use strict";var a=r("a5da"),n=r.n(a);n.a},"8d88":function(e,t,r){"use strict";var a=r("10fc"),n=r.n(a);n.a},a5da:function(e,t,r){},bd3b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-row",{attrs:{gutter:20}},[e.buttonPermissions("300010205")?r("el-col",{attrs:{span:8}},[r("el-card",{staticStyle:{"min-height":"80vh"}},[r("div",{staticClass:"cardHeader clearfix",attrs:{slot:"header"},slot:"header"},[r("span",{staticStyle:{"font-size":"18px","font-weight":"700"}},[e._v(e._s(e.$t("department.listDepartments")))]),e.buttonPermissions("300010202")?r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.insert}},[r("i",{staticClass:"el-icon-plus"}),e._v(" "+e._s(e.$t("department.newDepartments"))+"\n          ")]):e._e()],1),r("el-tree",{attrs:{data:e.data,props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,n=t.data;return r("span",{staticClass:"custom-tree-node"},[r("span",[e._v(e._s(a.label))]),r("span",[e.buttonPermissions("300010201")?r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.viewDetail(n)}}},[e._v(e._s(e.$t("department.seeMoreDetails")))]):e._e(),e.buttonPermissions("300010204")?r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.deleteDep(n)}}},[e._v(e._s(e.$t("department.delete")))]):e._e()],1)])}}],null,!1,2587105594)})],1)],1):e._e(),r("el-col",{attrs:{span:16}},[r("el-card",{staticStyle:{"min-height":"80vh"}},[r("div",{staticClass:"cardHeader clearfix textCenter",attrs:{slot:"header"},slot:"header"},[e._v("\n          "+e._s("edit"===e.mode?this.$t("department.departmentDetails"):this.$t("department.newDepartments"))+"\n        ")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-col",{staticClass:"parentIdBox",attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.superiorDepartment"),prop:"parentId"}},[r("div",[r("el-cascader",{attrs:{options:e.options,props:e.parentProp,"show-all-levels":!1,clearable:""},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)])],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.departmentName"),prop:"name"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.departmentCode"),prop:"code"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.outsidePhone"),prop:"contactPhone"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.contactPhone,callback:function(t){e.$set(e.form,"contactPhone",t)},expression:"form.contactPhone"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.insidePhone"),prop:"phone"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.email"),prop:"email"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.departmentCategory"),prop:"properties"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.properties,callback:function(t){e.$set(e.form,"properties",t)},expression:"form.properties"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.$t("department.fax"),prop:"fax"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.fax,callback:function(t){e.$set(e.form,"fax",t)},expression:"form.fax"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:e.$t("department.address"),prop:"address"}},[r("el-input",{attrs:{maxlength:30},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{staticStyle:{"text-align":"center"}},["edit"===e.mode&&e.buttonPermissions("300010203")?r("el-button",{attrs:{type:"success"},on:{click:e.submit}},[e._v(e._s(e.$t("department.clarifyChanges")))]):e._e(),"edit"!==e.mode&&e.buttonPermissions("300010202")?r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.$t("department.newAdditions")))]):e._e()],1)],1)],1)],1)],1)],1)],1)},n=[],s=(r("8e6e"),r("456d"),r("ac6a"),r("bd86")),i=r("75fc"),o=r("b775"),l={GetById:"/api/Company/department/GetById",GetAll:"/api/Company/department/GetAll",updateinfo:"/api/company/department/updateinfo",Create:"/api/company/department/Create",Delete:"/api/company/department/delete"};function c(){return Object(o["a"])({url:l.GetAll,method:"get",headers:{"Content-Type":"application/json"}})}function d(e){return Object(o["a"])({url:l.updateinfo,method:"post",headers:{"Content-Type":"application/json"},data:e})}function p(e){return Object(o["a"])({url:l.Create,method:"post",headers:{"Content-Type":"application/json"},data:e})}function m(e){return Object(o["a"])({url:l.Delete,method:"post",headers:{"Content-Type":"application/json"},data:{id:e}})}var u=r("4624"),f=r("61f7"),h={data:function(){return{rules:{parentId:[{required:!0,message:this.$t("department.validate.superiorDepartment"),trigger:"change"}],name:[{required:!0,message:this.$t("department.validate.departmentName"),trigger:"blur"},{min:1,max:15,message:this.$t("department.validate.characters")}],code:[{required:!0,message:this.$t("department.validate.departmentCode"),trigger:"blur"},{min:1,max:15,message:this.$t("department.validate.characters")}],phone:[{required:!0,validator:f["c"],trigger:"blur"}],contactPhone:[{required:!0,validator:f["c"],trigger:"blur"}],email:[{required:!0,validator:f["b"],trigger:"blur"}],properties:[{required:!0,message:this.$t("department.validate.departmentCategory"),trigger:"blur"},{min:1,max:15,message:this.$t("department.validate.characters")}],fax:[{required:!0,message:this.$t("department.validate.fax"),trigger:"blur"},{min:1,max:15,message:this.$t("department.validate.characters")}],address:[{required:!0,message:this.$t("department.validate.address"),trigger:"blur"}]}}}};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={name:"Department",mixins:[u["f"],h,u["a"]],data:function(){return{parentProp:{value:"id",label:"name",children:"children",checkStrictly:!0},options:[],mode:"edit",data:[],defaultProps:{children:"children",label:"name"},form:{parentId:[],name:"",code:"",phone:"",contactPhone:"",email:"",properties:"",fax:"",address:""}}},mounted:function(){this.init()},methods:{init:function(){var e=this;c().then((function(t){var r=t.data||[];r=r.map((function(t){return e.getChildren(t)})),e.$nextTick((function(){e.data=Object(i["a"])(r),e.options=[{id:-1,name:e.$t("department.topDepartments"),children:Object(i["a"])(r)}]}))}))},viewDetail:function(e){this.$refs.form.resetFields(),this.mode="edit";var t=JSON.parse(JSON.stringify(e));this.$set(this,"form",t)},submit:function(){var e=this,t=g({},this.form);t=this.formFarmet(t),this.$refs.form.validate((function(r){if(r)switch(e.mode){case"edit":d(t).then((function(){e.success(e.$t("rules.successfulRevision"))}));break;case"insert":p(g({},t,{remark:"sds"})).then((function(){e.success(e.$t("rules.newsuccess")),e.$refs.form.resetFields()}));break}}))},getChildren:function(e){var t=this;return e.parentId=[e.parentId],e.children&&0===e.children.length?delete e.children:e.children&&e.children.forEach((function(e){t.getChildren(e)})),e},formFarmet:function(e){var t=this;return e.parentId instanceof Array&&(e.parentId=e.parentId[e.parentId.length-1]),e.children&&e.children.forEach((function(e){t.formFarmet(e)})),e},insert:function(){this.$refs.form.resetFields(),this.mode="insert"},deleteDep:function(e){var t=this;this.$confirm(this.$t("department.deleteDepartment"),this.$t("tips"),{confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel"),type:"warning"}).then((function(){m(e.id).then((function(){t.success(t.$t("rules.successfulDeletion"))}))})).catch((function(){}))}}},$=v,x=(r("8d88"),r("3c83"),r("2877")),y=Object(x["a"])($,a,n,!1,null,"57895287",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-a03e369a.30bbb5f2.js.map
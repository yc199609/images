(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e6a28c9"],{"0beb":function(t,a,e){"use strict";var i=e("6382"),s=e.n(i);s.a},"0fa6":function(t,a,e){"use strict";var i=e("5846"),s=e.n(i);s.a},"349e":function(t,a,e){"use strict";var i=e("c1fe"),s=e.n(i);s.a},"40e4":function(t,a,e){},"43ff":function(t,a,e){},5846:function(t,a,e){},6382:function(t,a,e){},"63b6":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{class:["dark"==this.viewTheme?"inner dark":"inner"]},[e("BoardHeader",{attrs:{activeHome:t.activeHome}}),e("div",{staticClass:"box"},[e("div",{staticClass:"left"},[e("BoardBox",{staticClass:"status"},[e("div",{staticClass:"name"},[e("strong",[t._v("设备信息")])]),t.buttonPermissions("8000101")?e("el-button",{staticStyle:{position:"absolute",right:"0",top:"0",background:"none"},attrs:{size:"mini",type:"primary",icon:"el-icon-position"},on:{click:t.hiddleClickBtnData}},[t._v("跳转到展示数据详情")]):t._e(),e("div",{},[e("div",{staticStyle:{margin:".6vh 10px",color:"#42bdee","font-size":"1.8vh","white-space":"nowrap"}},[t._v("设备名称: "),e("strong",[t._v(t._s(this.$route.query.name))])]),e("div",{staticStyle:{margin:".6vh 10px",color:"#42bdee","font-size":"1.8vh","white-space":"nowrap"}},[t._v("设备编号: "),e("strong",[t._v(t._s(this.$route.query.code))])])]),e("div",{staticClass:"data"},[e("div",{staticClass:"data_box"},[e("div",{staticClass:"stat"},[t._v("连接状态")]),t.connected?e("div",{staticClass:"showBox"},[e("img",{attrs:{src:"http://cdn.gosafenet.com/static/board/goodDtails/status_lianjie.png"}}),e("div",{staticClass:"val",staticStyle:{color:"#009944"}},[t._v("已连接")])]):e("div",{staticClass:"showBox"},[e("img",{attrs:{src:"http://cdn.gosafenet.com/static/board/goodDtails/status_lianjieNo.png"}}),e("div",{staticClass:"val"},[t._v("未连接")])])]),""==t.status?e("div",{staticClass:"data_box",staticStyle:{border:"2px solid #717070",color:"#717070"}},[e("div",{staticClass:"stat"},[t._v("运行状态")]),e("div",{staticClass:"showBox"},[e("img",{attrs:{src:"http://cdn.gosafenet.com/static/board/goodDtails/status_yunxingNo.png"}}),e("div",{staticClass:"val"},[t._v("--")])])]):e("div",{staticClass:"data_box"},[e("div",{staticClass:"stat"},[t._v("运行状态")]),"连接"==t.status?e("div",{staticClass:"showBox"},[e("img",{attrs:{src:"http://cdn.gosafenet.com/static/board/goodDtails/status_yunxing.png"}}),e("div",{staticClass:"val",staticStyle:{color:"#009944"}},[t._v("运行")])]):e("div",{staticClass:"showBox"},[e("img",{attrs:{src:"http://cdn.gosafenet.com/static/board/goodDtails/status_yunxingNo.png"}}),e("div",{staticClass:"val"},[t._v("未运行")])])]),0!==Number(t.RunYear)?e("div",{staticClass:"data_box"},[e("div",{staticClass:"stat"},[t._v("运行时长")]),e("div",{staticClass:"showBox",staticStyle:{color:"#009944"}},[e("div",{staticClass:"font"},[t._v(t._s(Number(t.RunYear)))]),e("div",{staticClass:"val"},[t._v("小时")])])]):e("div",{staticClass:"data_box",staticStyle:{border:"2px solid #717070",color:"#717070"}},[e("div",{staticClass:"stat"},[t._v("运行时长")]),e("div",{staticClass:"showBox"},[e("div",{staticClass:"font"},[t._v("--")]),e("div",{staticClass:"val"},[t._v("小时")])])]),0!==Number(t.ElectricityConsum)?e("div",{staticClass:"data_box"},[e("div",{staticClass:"stat"},[t._v("总耗电量")]),e("div",{staticClass:"showBox",staticStyle:{color:"#009944"}},[e("div",{staticClass:"font"},[t._v(t._s(Number(t.ElectricityConsum)))]),e("div",{staticClass:"val"},[t._v("千瓦时")])])]):e("div",{staticClass:"data_box",staticStyle:{border:"2px solid #717070",color:"#717070"}},[e("div",{staticClass:"stat"},[t._v("总耗电量")]),e("div",{staticClass:"showBox"},[e("div",{staticClass:"font"},[t._v("--")]),e("div",{staticClass:"val"},[t._v("千瓦时")])])])])],1),e("BoardBox",{staticClass:"table"},[e("DataTable",{attrs:{template:t.template,firstBlock:t.firstBlock},on:{tableRow:t.tableRow}})],1)],1),this.dataNum.constructor==Object?e("div",{staticClass:"right"},[e("BoardBox",{staticClass:"echart",staticStyle:{height:"43vh"}},[e("CurveData",{attrs:{dataNum:t.dataNum,curData:t.curData}})],1),e("BoardBox",{staticClass:"detail",staticStyle:{height:"43vh"}},[e("DataDetail",{attrs:{dataNum:t.dataNum}})],1)],1):e("div",{staticClass:"right"},[e("BoardBox",{staticClass:"echart"},[e("CurveData",{attrs:{dataNum:t.dataNum,curData:t.curData}})],1),e("BoardBox",{staticClass:"detail"},[e("DataDetail",{attrs:{dataNum:t.dataNum}})],1)],1)])],1)])},s=[],o=(e("a481"),e("c5f6"),e("7f7f"),e("2af9")),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return this.dataNum.constructor==Object?e("div",{staticClass:"container_box"},["Flow"==this.dataNum.viewCode?e("BoardSound"):"Shake1Flow"==this.dataNum.viewCode?e("BoardShake1Audio"):t._e()],1):e("div",{staticClass:"container_box"},[t._m(0),e("div",{ref:"echarts",staticStyle:{width:"100%",height:"53vh"}})])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"name"},[e("strong",[t._v("实时曲线视图")])])}],r=e("313e"),c=e.n(r),d=e("938a"),u=e("ee9c"),m={name:"CurveData",components:{BoardSound:d["a"],BoardShake1Audio:u["a"]},data:function(){return{timer:null,charts:{unit:"℃",names:[],lineX:[],value:[]},myChart:null}},props:["dataNum","curData"],watch:{curData:function(){this.getData()},dataNum:function(){this.getData()}},created:function(){this.getData()},methods:{getData:function(){var t=this;if(this.dataNum.constructor==Array){var a=[];this.dataNum.map((function(e){a.push({name:e.fieldCode,value:t.curData.map((function(t){return 255==Number(t.data[e.fieldCode])||215==Number(t.data[e.fieldCode])?void 0:Number(t.data[e.fieldCode]).toFixed(2)}))})}));var e=this.curData.map((function(a){return t.$moment.utc(a.time).local().format("YYYY-MM-DD HH:mm:ss")}));this.$set(this.charts,"lineX",e.reverse()),a.map((function(a,e){t.$set(t.charts.value,e,a.value.reverse())})),this.init()}},init:function(){var t=this;this.$nextTick((function(){var a=t.$refs.echarts;t.myChart=c.a.init(a)}));for(var a=[],e=["#17FFF3","#4FAD32","#278db5","#FFFFC8","#b95f5f","#FFFF82","#39c59f","#e08ab9","#e0945c","#bc83d8"],i=0;i<this.dataNum.length;i++){var s=[];this.dataNum.map((function(t){s.push(t.fieldName)}));var o=i;o>e.length-1&&(o=e.length-1);var n={name:this.dataNum[i].fieldName,type:"line",color:e[o],markLine:{symbol:"none",data:[{name:"上限值",yAxis:this.dataNum[i].maxNumber,label:{show:"true",position:"left",fontSize:2},lineStyle:{normal:{width:0,color:e[o]}},axisLabel:{textStyle:{color:"#000",fontSize:0}},symbol:"circle"},{name:"下限值",yAxis:this.dataNum[i].minNumber,label:{show:"true",position:"left",fontSize:2},lineStyle:{normal:{width:0,color:e[o]}},symbol:"circle"}]},smooth:!0,symbol:"circle",symbolSize:4,data:this.charts.value[i]};a.push(n)}var l={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{itemGap:13,data:s,top:"-1%",left:"center",textStyle:{fontSize:18,color:"#F1F1F3"}},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#17fff3"}},data:this.charts.lineX}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#17fff3"}},axisLabel:{textStyle:{color:"#17fff3",fontSize:"14"}},splitLine:{lineStyle:{color:"rgba(255,255,255,0.1)"}}}],series:a};this.$nextTick((function(){t.myChart.setOption(l,!0)}))}}},v=m,h=(e("0beb"),e("2877")),f=Object(h["a"])(v,n,l,!1,null,"1d654583",null),p=f.exports,b=e("5472"),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mainBox"},[e("strong",[t._v("检测模块列表")]),t._l(t.tableData,(function(a,i){return e("div",{key:i,ref:"colmns"+i,refInFor:!0,staticClass:"box_par",on:{click:function(e){return t.choose(a,i)}}},[e("div",{},[e("img",{staticStyle:{"vertical-align":"middle",width:"2vw"},attrs:{src:a.img}}),e("span",{staticStyle:{"vertical-align":"middle","margin-left":"1.5vw",color:"#42bdee"}},[t._v(t._s(a.viewName))]),e("el-button",{staticStyle:{float:"right",color:"#41b5e7"},attrs:{type:"text",size:"medium",icon:"el-icon-caret-right"},on:{click:function(e){return t.choose(a)}}})],1)])}))],2)},w=[],C={name:"DataTable",props:["template","firstBlock"],data:function(){return{tableData:[],img:[{name:"TemperatureCurve",value:"http://cdn.gosafenet.com/static/board/goodDtails/temp.png"},{name:"BoardVoltage",value:"http://cdn.gosafenet.com/static/board/goodDtails/vol.png"},{name:"BoardCurrent",value:"http://cdn.gosafenet.com/static/board/goodDtails/amp.png"},{name:"BoardVexFlow",value:"http://cdn.gosafenet.com/static/board/goodDtails/flow.png"},{name:"BoardPressure",value:"http://cdn.gosafenet.com/static/board/goodDtails/yali.png"},{name:"Flow",value:"http://cdn.gosafenet.com/static/board/goodDtails/zendong.png"},{name:"Shake1Flow",value:"http://cdn.gosafenet.com/static/board/goodDtails/zendong.png"}]}},watch:{template:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.template.map((function(a,e){"Status"==a.viewCode&&t.template.splice(e,1),t.firstBlock==a&&t.$nextTick((function(){t.$refs["colmns"+e][0].style.background="#383e90"}))})),this.template.map((function(a,e){"BoardSound"==a.viewCode&&t.template.splice(e,1),"BoardVibration"==a.viewCode&&(t.template.splice(e,1),t.template.push({viewName:"振动音频",viewCode:"Flow"})),"BoardShake1Audio"==a.viewCode&&t.template.splice(e,1),"BoardShake1Acc"==a.viewCode&&(t.template.splice(e,1),t.template.push({viewName:"听诊器振动音频",viewCode:"Shake1Flow"})),t.img.map((function(t){a.viewCode==t.name&&(a["img"]=t.value)}))})),this.tableData=this.template},choose:function(t,a){this.$emit("tableRow",t);for(var e=0;e<this.tableData.length;e++)this.$refs["colmns"+e][0].style.background="none";this.$refs["colmns"+a][0].style.background="#383e90"}}},x=C,_=(e("0fa6"),Object(h["a"])(x,g,w,!1,null,"08378198",null)),y=_.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return this.dataNum.constructor==Object?e("div",{staticClass:"container_box"},["Flow"==this.dataNum.viewCode?e("BoardVibration"):"Shake1Flow"==this.dataNum.viewCode?e("BoardShake1Acc"):t._e()],1):e("div",{staticClass:"container_box"},[t._m(0),null!==t.unit?e("span",{staticStyle:{"margin-left":"5px"}},[t._v("( 单位: "+t._s(t.unit)+" )")]):t._e(),t.dataNum.length>6?e("div",{staticStyle:{position:"absolute",right:"1vw",top:"1vh"}},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n    左右拖动查看更多\n    ")]):t._e(),e("swiper",{staticClass:"box",attrs:{options:t.swiperOption}},t._l(t.dataNum,(function(a,i){return e("swiper-slide",{key:i,staticClass:"box_par"},[e("div",[e("div",{ref:"myChart"+i,refInFor:!0,staticClass:"box_each",staticStyle:{width:"100%",height:"10vh"}}),a.maxNumber&&a.minNumber?a.fieldValue>a.maxNumber?e("div",{staticClass:"box_name",staticStyle:{color:"#fd666d"}},[t._v("\n          "+t._s(255==a.fieldValue||215==a.fieldValue?"--":a.fieldValue)+"\n        ")]):a.fieldValue<a.minNumber?e("div",{staticClass:"box_name",staticStyle:{color:"#67e0e3"}},[t._v("\n          "+t._s(255==a.fieldValue||215==a.fieldValue?"--":a.fieldValue)+"\n        ")]):e("div",{staticClass:"box_name",staticStyle:{color:"#37a2da"}},[t._v("\n          "+t._s(255==a.fieldValue||215==a.fieldValue?"--":a.fieldValue)+"\n        ")]):e("div",{staticClass:"box_name",staticStyle:{color:"#37a2da"}},[t._v("\n          "+t._s(255==a.fieldValue||215==a.fieldValue?"--":a.fieldValue)+"\n        ")])])])})),1)],1)},D=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"name"},[e("strong",[t._v("实时数据")])])}],N=e("751c"),B=e("1929"),k=e("7212"),F={name:"DataDetail",props:["dataNum"],data:function(){return{myChart:null,swiperOption:{grabCursor:!0,setWrapperSize:!0,slidesPerView:6,slidesPerGroup:1},unit:""}},watch:{dataNum:function(){this.init()}},components:{BoardVibration:N["a"],BoardShake1Acc:B["a"],swiper:k["swiper"],swiperSlide:k["swiperSlide"]},created:function(){this.init()},methods:{init:function(){var t=this;this.dataNum.constructor!=Object&&this.$nextTick((function(){t.dataNum.map((function(a,e){t.unit=a.unit;var i={backgroundColor:"rgb(29,36,87)",title:{show:!0,x:"center",bottom:5,text:a.fieldName,textStyle:{fontWeight:"normal",fontSize:13,color:"#42bdee"}},series:[{name:"灰色内圈",type:"gauge",radius:"90%",startAngle:180,endAngle:0,center:["50%","60%"],axisLine:{lineStyle:{width:3,shadowBlur:0,color:[[.3,"#67e0e3"],[.7,"#37a2da"],[1,"#fd666d"]]}},max:15,min:5,splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},axisTick:{show:!1},detail:{show:0}},{name:"指针",type:"gauge",z:6,radius:"95%",startAngle:180,endAngle:0,center:["50%","60%"],axisLine:{lineStyle:{width:0}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},data:[215==a.fieldValue||255==a.fieldValue?null:a.fieldValue],pointer:{show:!0,width:2,length:"55%"},detail:{show:0}},{name:"外层盘",type:"gauge",z:6,radius:"100%",startAngle:180,endAngle:0,center:["50%","60%"],axisLine:{lineStyle:{color:[[.5,"rgb(120, 191, 200)"],[1,"rgba(255, 255, 255, 0.2)"]],width:2,opacity:.8}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},data:[{show:!1,value:"10"}],detail:{show:0}}]};t.$nextTick((function(){t.myChart=c.a.init(t.$refs["myChart"+e][0]),t.myChart.setOption(i,!0)}))}))}))}}},$=F,V=(e("ce3b"),e("e99c"),Object(h["a"])($,S,D,!1,null,"2cd722cf",null)),I=V.exports,T=e("8226"),A=e("11e6"),z=e("4624"),O={name:"good",components:{BoardHeader:o["BoardHeader"],BoardBox:b["a"],DataTable:y,CurveData:p,DataDetail:I},mixins:[z["a"],z["e"]],data:function(){return{viewTheme:void 0,activeHome:!0,connected:"",RunYear:"",status:"",ElectricityConsum:"",template:[],viewId:null,firstBlock:{},curData:[],dataNum:[],timer:null,statusId:""}},created:function(){var t=this;this.viewTheme=this.$store.state.user.config.viewTheme,Object(A["g"])({deviceId:this.$route.query.id,viewTypeId:200}).then((function(a){t.template=a.data,a.data.map((function(a){"Status"==a.viewCode&&(t.statusId=a.viewId,t.template.splice(a,1),t.firstBlock=t.template[0],t.getStatus(a.viewId))})),t.getCurveData()}))},mounted:function(){var t=this;this.timer=setInterval((function(){t.getCurveData()}),7e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{hiddleClickBtnData:function(){this.$router.push({path:"/boardData",query:{id:this.$route.query.id,name:this.$route.query.name,code:this.$route.query.code,come:"boardDetailGood"}})},tableRow:function(t){var a=this;"Flow"==t.viewCode||"Shake1Flow"==t.viewCode?(clearInterval(this.timer),this.timer=null,this.dataNum=t):(this.viewId=t.viewId,this.getCurveData(),null==this.timer&&(this.timer=setInterval((function(){a.getCurveData()}),7e3)))},getStatus:function(t){var a=this;Object(A["c"])({deviceId:this.$route.query.id,viewId:t}).then((function(e){a.connected=e.data[0].contected,t==a.statusId?e.data[0].fields.map((function(t){"YearHour"==t.fieldCode?a.RunYear=Number(t.fieldValue).toFixed(0):"RunYear"==t.fieldCode?a.RunYear=Number(t.fieldValue).toFixed(0):"Motor_Status"==t.fieldCode?(a.status=Number(t.fieldValue).toFixed(0),0==a.status&&(a.status="连接")):"Power_Supply"==t.fieldCode?(a.status=Number(t.fieldValue).toFixed(0),0==a.status&&(a.status="连接")):"ElectricityConsum"==t.fieldCode&&(a.ElectricityConsum=Number(t.fieldValue).toFixed(0))})):a.dataNum=e.data[0].fields}))},getCurveData:function(){var t=this;null==this.viewId&&(this.viewId=this.firstBlock.viewId),this.getStatus(this.viewId);var a="";Object(T["c"])().then((function(e){a=e.data.utcTime.replace(/-/g,"/"),Object(A["d"])({deviceId:t.$route.query.id,viewId:t.viewId,startTime:t.$moment(new Date(new Date(a).getTime()-18e5)).format("YYYY-MM-DD hh:mm:ss"),pageIndex:1,pageSize:200}).then((function(a){t.curData=a.data.items}))}))}}},L=O,Y=(e("349e"),Object(h["a"])(L,i,s,!1,null,"7d128381",null));a["default"]=Y.exports},c1fe:function(t,a,e){},ce3b:function(t,a,e){"use strict";var i=e("43ff"),s=e.n(i);s.a},e99c:function(t,a,e){"use strict";var i=e("40e4"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-1e6a28c9.3786f309.js.map
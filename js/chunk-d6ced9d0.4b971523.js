(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6ced9d0"],{dc31:function(t,e,n){"use strict";n("f1fd")},ef84:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("折线图")]),e("el-row",{attrs:{gutter:20}},[e("div",{staticClass:"right"},[e("el-button-group",{staticStyle:{height:"20px"}},[e("el-button",{attrs:{type:0==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(0)}}},[t._v("近七天")]),e("el-button",{attrs:{type:1==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(1)}}},[t._v("本月")]),e("el-button",{attrs:{type:2==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(2)}}},[t._v("本年")])],1)],1),e("div",{staticClass:"mg-top"},[0==t.index||1==t.index?e("ve-line",{attrs:{height:"350px",data:t.chartData[t.index],extend:t.chartExtend[t.index]}}):e("ve-line",{attrs:{height:"350px",data:t.chartData[t.index]}})],1)])],1)])},s=[],a={components:{},data:function(){return{index:0,chartExtend:[{series:{smooth:!1},color:["#E4004F","#64C9FA"]},{series:{smooth:!1,step:"middle"}}],chartData:[{columns:["日期","销售额-1季度","销售额-2季度"],rows:[{"日期":"1月1日","销售额-1季度":1523,"销售额-2季度":3523},{"日期":"1月2日","销售额-1季度":3533,"销售额-2季度":1232},{"日期":"1月3日","销售额-1季度":2523,"销售额-2季度":9768},{"日期":"1月4日","销售额-1季度":4588,"销售额-2季度":5252},{"日期":"1月5日","销售额-1季度":5632,"销售额-2季度":2536},{"日期":"1月6日","销售额-1季度":6773,"销售额-2季度":4454}]},{columns:["日期","销售额-1季度","销售额-2季度"],rows:[{"日期":"1月1日","销售额-1季度":2523,"销售额-2季度":1523},{"日期":"1月2日","销售额-1季度":4933,"销售额-2季度":1232},{"日期":"1月3日","销售额-1季度":9523,"销售额-2季度":3768},{"日期":"1月4日","销售额-1季度":7588,"销售额-2季度":3252},{"日期":"1月5日","销售额-1季度":5632,"销售额-2季度":2536},{"日期":"1月6日","销售额-1季度":6773,"销售额-2季度":4454}]},{columns:["支付方式","占比"],rows:[{"支付方式":"小程序","占比":25},{"支付方式":"IOS客户端","占比":39},{"支付方式":"安卓客户端","占比":50},{"支付方式":"H5移动端","占比":10},{"支付方式":"PC端","占比":5}]}]}},methods:{showData:function(t){this.index=t}}},r=a,o=(n("dc31"),n("2877")),c=Object(o["a"])(r,i,s,!1,null,"4f2bef6e",null);e["default"]=c.exports},f1fd:function(t,e,n){}}]);
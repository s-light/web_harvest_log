(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"49c4":function(e,t,n){"use strict";n("c266")},"91e5":function(e,t,n){"use strict";var o={props:{obj:{default:function(){return{}}},label:{type:String,default:""}},data:()=>({}),filters:{pretty:function(e){let t=e;try{t=JSON.parse(e)}catch(e){}return JSON.stringify(t,null,4)}}},i=(n("49c4"),n("2877")),c=Object(i.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"debug"},[t("label",[this._v(this._s(this.label))]),t("pre",[this._v(this._s(this._f("pretty")(this.obj)))])])}),[],!1,null,null,null);t.a=c.exports},b41f:function(e,t,n){"use strict";n.r(t);var o=n("ded3"),i=n.n(o),c=(n("fb6a"),n("e6cf"),n("ddb0"),n("2b0e")),a=n("9e62"),l=n("2e40");function s(e){let t=e.split("-");t=t.map(e=>{return(t=e).charAt(0).toUpperCase()+t.slice(1);var t});return t.join("")}var r={data:()=>({}),components:{DebugSection:n("91e5").a},computed:i()({},function(e,t){const n={},o={},i=s(e),r=l.e.api[i],u=(f=i).charAt(0).toLowerCase()+f.slice(1);var f;const b={};c.default.set(b,"gcList",{}),n[u]={get:function(){return b.gcList}};for(const e of t)o[e]={get:function(){return null},set:function(e){}};r.find({query:{},paginate:!1}).then(e=>{for(const t of e.data)b.gcList[t.id]=t}).catch(e=>{console.error(e.message,e)});for(const e of t){let t=Object(a.d)({model:r,id:e,_id:e}).item.value;t||(t=new r({id:e,_id:e,value:null}),t.create().catch(e=>{console.error("mapBindIDItems: create - "+e.message,e)}));const n=t.clone();o[e].get=function(){return n.value},o[e].set=function(e){n.value=e,n.commit(),t.patch({data:{value:e}})}}return Object.assign({},n,o)}("global-config",["serialDevice","pos","btnSize","btnSpace"])),methods:{globalConfigLoadFromServer:function(){console.log("TODO: implement load from server"),this.$axios.get("/config/global-config.json").then(e=>{console.log("response.data",e.data),this.$q.notify({color:"info",message:"Loaded config from server. Processing now.",icon:"info"}),this.$q.notify({color:"negative",message:"TODO: Please Implement this!",icon:"info"}),this.$q.notify({color:"positive",message:"done.",icon:"info"})}).catch(()=>{this.$q.notify({color:"negative",message:"Loading failed",icon:"report_problem"})})}},created:function(){},name:"PageSettings"},u=n("2877"),f=n("9989"),b=n("9c40"),p=n("27f9"),d=n("0016"),g=n("c1d0"),m=n("714f"),v=n("eebe"),h=n.n(v),S=Object(u.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[n("h1",[e._v("Global Settings")]),n("debugSection",{attrs:{label:"globalConfig",obj:e.globalConfig}}),n("debugSection",{attrs:{label:"serialDevice",obj:e.serialDevice}}),n("debugSection",{attrs:{label:"btnSpace",obj:e.btnSpace}}),n("section",[n("q-btn",{attrs:{round:"",color:e.$q.dark.isActive?"blue":"black",icon:"mdi-lightbulb-on-outline"},on:{click:function(t){return e.$q.dark.toggle()}}})],1),n("section",[n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"load db from server",icon:"sync"},on:{click:function(t){return e.globalConfigLoadFromServer()}}})],1),n("section",[n("q-input",{attrs:{filled:"",label:"serial device",debounce:"500"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",style:{opacity:""!==e.serialDevice?"inherit":"0.1"},attrs:{name:"close"},on:{click:function(t){e.serialDevice="/dev/ttyUSB0"}}})]},proxy:!0}]),model:{value:e.serialDevice,callback:function(t){e.serialDevice=t},expression:"serialDevice"}}),n("q-input",{attrs:{filled:"",label:"pos",type:"number",debounce:"500"},model:{value:e.pos,callback:function(t){e.pos=e._n(t)},expression:"pos"}}),n("q-input",{attrs:{filled:"",label:"button size (mm)",type:"number",debounce:"500"},model:{value:e.btnSize,callback:function(t){e.btnSize=e._n(t)},expression:"btnSize"}}),n("q-input",{attrs:{filled:"",label:"button spaceing (mm)",type:"number",debounce:"500"},model:{value:e.btnSpace,callback:function(t){e.btnSpace=e._n(t)},expression:"btnSpace"}})],1)],1)}),[],!1,null,null,null);t.default=S.exports;h()(S,"components",{QPage:f.a,QBtn:b.a,QInput:p.a,QIcon:d.a,QSlider:g.a}),h()(S,"directives",{Ripple:m.a})},c266:function(e,t,n){}}]);
//# sourceMappingURL=3.0ec00d1f.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61705676"],{"2da5":function(t,e,s){},5147:function(t,e,s){var a=s("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[a]=!1,!"/./"[t](e)}catch(r){}}return!0}},"6fc3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"address-input"},[a("v-text-field",{ref:"address",class:{"address-input--invalid":!t.valid&&t.touched,"address-input--hint-visible":t.hint.length>0,"address-input--untouched":!t.touched},attrs:{id:"address-input",hint:t.hint,value:t.address,"error-messages":t.errorMessages,placeholder:t.$t("address-input.input.placeholder"),"persistent-hint":"",clearable:"","hide-selected":""},on:{blur:function(e){return t.$emit("blur")},focus:function(e){return t.$emit("focus")},input:t.updateValue,change:t.updateValue},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",{staticClass:"address-input__status-icon"},[!t.valid&&t.touched?a("v-img",{staticClass:"address-input__status-icon__icon",attrs:{src:s("c2ff")}}):t._e(),t.valid?a("v-img",{staticClass:"address-input__status-icon__icon",attrs:{src:s("b376")}}):t._e()],1)]},proxy:!0},{key:"prepend-inner",fn:function(){return[t.value&&t.isChecksumAddress(t.value)?a("img",{staticClass:"address-input__blockie",attrs:{src:t.$blockie(t.value),alt:t.$t("address-input.blockie-alt")}}):t.timeout?a("div",[a("v-progress-circular",{staticClass:"prepend",attrs:{indeterminate:"",color:"primary"}})],1):a("div")]},proxy:!0}])})],1)},r=[],n=s("d225"),i=s("b0b4"),c=s("308d"),o=s("6bb5"),u=s("4e2b"),d=s("9ab4"),l=s("fc09"),h=s("60a3"),p=s("77fd"),f=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.timeout=0,t.address="",t.valid=!1,t.touched=!1,t.hint="",t.errorMessages=[""],t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"input",value:function(t){}},{key:"isChecksumAddress",value:function(t){var e=t;return l["a"].isAddress(e)&&l["a"].checkAddressChecksum(e)}},{key:"updateValue",value:function(t){this.errorMessages=[],this.hint="",this.updateErrors(t),this.checkForErrors()}},{key:"updateErrors",value:function(t){t?l["a"].isAddress(t)&&!l["a"].checkAddressChecksum(t)?this.errorMessages.push(this.$t("address-input.error.no-checksum")):l["a"].checkAddressChecksum(t)?this.input(t):!l["a"].isAddressLike(t)&&l["a"].isDomain(t)?this.resolveEnsAddress(t):this.errorMessages.push(this.$t("address-input.error.invalid-address")):(this.input(t),this.errorMessages.push(this.$t("address-input.error.empty")))}},{key:"checkForErrors",value:function(){this.$refs.address&&(this.touched=!0,this.valid=0===this.errorMessages.length)}},{key:"resolveEnsAddress",value:function(t){var e=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=0),this.timeout=setTimeout(function(){e.$raiden.ensResolve(t).then(function(t){t?(e.hint=t,e.input(t),e.errorMessages=[]):(e.errorMessages.push(e.$t("address-input.error.ens-resolve-failed")),e.input(void 0),e.checkForErrors()),e.timeout=0}).catch(function(){e.errorMessages.push(e.$t("address-input.error.ens-resolve-failed")),e.input(void 0),e.checkForErrors(),e.timeout=0})},800)}}]),e}(Object(h["c"])(p["a"]));d["a"]([Object(h["d"])({})],f.prototype,"disabled",void 0),d["a"]([Object(h["d"])({required:!0})],f.prototype,"value",void 0),d["a"]([Object(h["b"])()],f.prototype,"input",null),f=d["a"]([Object(h["a"])({})],f);var v=f,k=v,b=(s("de32"),s("2877")),_=s("6544"),m=s.n(_),y=s("adda"),g=s("490a"),j=s("8654"),C=Object(b["a"])(k,a,r,!1,null,"c80f023a",null);e["a"]=C.exports;m()(C,{VImg:y["a"],VProgressCircular:g["a"],VTextField:j["a"]})},7724:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select-token"},[s("list-header",{staticClass:"select-token__header",attrs:{header:t.$t("select-token.header")}}),s("v-layout",{attrs:{"justify-center":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{staticClass:"select-token__tokens"},[t._l(t.allTokens,function(e){return[s("v-list-item",{key:e.address,staticClass:"select-token__tokens__token",on:{click:function(s){return t.navigateToSelectHub(e.address)}}},[s("v-list-item-avatar",{staticClass:"select-token__tokens__token__blockie"},[s("img",{attrs:{src:t.$blockie(e.address),alt:t.$t("select-token.tokens.token.blockie-alt")}})]),s("v-list-item-content",[s("v-list-item-title",{staticClass:"select-token__tokens__token__info"},[t._v("\n                "+t._s(t.$t("select-token.tokens.token.token-information",{symbol:e.symbol,name:e.name}))+"\n              ")]),s("v-list-item-subtitle",{staticClass:"select-token__tokens__token__address"},[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[s("span",t._g({},r),[t._v(t._s(t._f("truncate")(e.address)))])]}}],null,!0)},[s("span",[t._v("\n                    "+t._s(e.address)+"\n                  ")])])],1)],1),s("v-list-item-action-text",[s("span",{staticClass:"select-token__tokens__token__balance"},[t._v("\n                "+t._s(t._f("displayFormat")(e.balance,e.decimals))+"\n              ")])])],1)]})],2)],1)],1)],1)},r=[],n=s("d225"),i=s("308d"),c=s("6bb5"),o=s("4e2b"),u=s("9ab4"),d=s("60a3"),l=s("6fc3"),h=s("2f62"),p=s("152b"),f=s("77fd"),v=s("d0aa"),k=function(t){function e(){return Object(n["a"])(this,e),Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(Object(d["c"])(f["a"],p["a"]));k=u["a"]([Object(d["a"])({components:{ListHeader:v["a"],AddressInput:l["a"]},computed:Object(h["b"])(["allTokens"])})],k);var b=k,_=b,m=(s("cb18"),s("2877")),y=s("6544"),g=s.n(y),j=s("0e8f"),C=s("a722"),O=s("8860"),$=s("da13"),x=s("5d23"),A=s("8270"),V=s("3a2f"),E=Object(m["a"])(_,a,r,!1,null,"5eb999ca",null);e["default"]=E.exports;g()(E,{VFlex:j["a"],VLayout:C["a"],VList:O["a"],VListItem:$["a"],VListItemActionText:x["a"],VListItemAvatar:A["a"],VListItemContent:x["b"],VListItemSubtitle:x["c"],VListItemTitle:x["d"],VTooltip:V["a"]})},cb18:function(t,e,s){"use strict";var a=s("2da5"),r=s.n(a);r.a},d2c8:function(t,e,s){var a=s("aae3"),r=s("be13");t.exports=function(t,e,s){if(a(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(r(t))}},d33b:function(t,e,s){},de32:function(t,e,s){"use strict";var a=s("d33b"),r=s.n(a);r.a},f559:function(t,e,s){"use strict";var a=s("5ca1"),r=s("9def"),n=s("d2c8"),i="startsWith",c=""[i];a(a.P+a.F*s("5147")(i),"String",{startsWith:function(t){var e=n(this,t,i),s=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return c?c.call(e,a,s):e.slice(s,s+a.length)===a}})},fc09:function(t,e,s){"use strict";s.d(e,"a",function(){return i});s("f559");var a=s("d225"),r=s("b0b4"),n=s("e7ea"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,null,[{key:"isAddress",value:function(t){return/^(0x)?[0-9a-f]{40}$/i.test(t)}},{key:"checkAddressChecksum",value:function(t){try{return t===n["utils"].getAddress(t)}catch(e){return!1}}},{key:"isAddressLike",value:function(t){return t.startsWith("0x")}},{key:"isDomain",value:function(t){return/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/.test(t)}}]),t}()}}]);
//# sourceMappingURL=chunk-61705676.05f80db5.js.map
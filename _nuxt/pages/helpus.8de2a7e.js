(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{295:function(t,e,r){var content=r(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("430353be",content,!0,{sourceMap:!1})},296:function(t,e,r){var content=r(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("5441d104",content,!0,{sourceMap:!1})},297:function(t,e,r){var content=r(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("0f6014e3",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=new(r(0).a),n="TOGGLE_DETAILS"},299:function(t,e,r){"use strict";var o=r(295);r.n(o).a},300:function(t,e,r){(e=r(13)(!1)).push([t.i,".header[data-v-4c577875]{position:relative;display:flex;flex-wrap:wrap;align-items:flex-end;width:100%}.pageTitle[data-v-4c577875]{font-size:3rem;display:flex;align-items:center;margin:0 calc(0.5em + 40px) 0 0;font-weight:normal;line-height:1.35;color:#4d4d4d}@media screen and (max-width: 600px){.pageTitle[data-v-4c577875]{font-size:2rem}}",""]),t.exports=e},301:function(t,e,r){"use strict";var o=r(296);r.n(o).a},302:function(t,e,r){(e=r(13)(!1)).push([t.i,".Header-Share{position:absolute;top:calc(50% - 10px);right:24px;display:flex;align-items:flex-end;background-color:#fff}.Header-Share .DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.Header-Share .DataView-Share-Opener>svg{width:auto !important}.Header-Share .DataView-Share-Opener:focus{outline:dotted #707070 1px}.Header-Share .DataView-Share-Buttons{position:absolute;top:1.5em;right:-4px;z-index:2;width:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:8px;text-align:left;background:#fff !important;border:solid 1px #d9d9d9;border-radius:8px;font-size:1.6rem}.Header-Share .DataView-Share-Buttons>*{padding:4px 0}.Header-Share .DataView-Share-Buttons span{display:block;margin:auto;text-align:center;font-size:1.2rem}.Header-Share .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.Header-Share .DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.Header-Share .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.Header-Share .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.Header-Share .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.Header-Share .DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}",""]),t.exports=e},303:function(t,e,r){"use strict";r(43);var o=r(0),n=r(298),c=o.a.extend({props:{icon:{type:String,required:!1,default:""}},data:function(){return{displayShare:!1,openDetails:!1}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){return encodeURIComponent(location.protocol+"//"+location.host+location.pathname)},twitter:function(){var t="https://twitter.com/intent/tweet?text="+encodeURIComponent(document.title.replace("|","/"))+"&url="+this.permalink()+"&hashtags=StopCovid19JP";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink();window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink();window.open(t)},toggleDetails:function(){this.openDetails=!this.openDetails,n.a.$emit(n.b,{dataView:this.$refs.dataView})}}}),l=(r(299),r(301),r(4)),d=r(38),h=r.n(d),f=r(287),m=r(515),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h2",{staticClass:"pageTitle"},[t.icon?r("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),r("div",{staticClass:"Header-Share"},[r("v-tooltip",{attrs:{disabled:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[r("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("このページをシェア")}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])}),t._v(" "),t.displayShare?r("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[r("div",{staticClass:"Close-Button"},[r("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("mdi-close")])],1),t._v(" "),r("span",[t._v(t._s(t.$t("このページをシェアする")))]),t._v(" "),r("div",{staticClass:"Buttons"},[r("button",{attrs:{"aria-label":t.$t("LINEでこのページをシェア")},on:{click:t.line}},[t._m(0)]),t._v(" "),r("button",{attrs:{"aria-label":t.$t("Twitterでこのページをシェア")},on:{click:t.twitter}},[t._m(1)]),t._v(" "),r("button",{attrs:{"aria-label":t.$t("facebookでこのページをシェア")},on:{click:t.facebook}},[t._m(2)])])]):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,"4c577875",null);e.a=component.exports;h()(component,{VIcon:f.a,VTooltip:m.a})},304:function(t,e,r){"use strict";var o=r(297);r.n(o).a},305:function(t,e,r){(e=r(13)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard ul dt:not(:first-child),.StaticCard ol dt:not(:first-child){margin-top:.6em}.StaticCard ul dd,.StaticCard ol dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard ul dd,.StaticCard ol dd{margin-left:4.1666666667vw}}.StaticCard ul dd>*:not(:first-child),.StaticCard ol dd>*:not(:first-child){margin-top:.6em}.StaticCard ul img,.StaticCard ol img{max-width:100%}.StaticCard ul figcaption,.StaticCard ol figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard ul strong,.StaticCard ul em,.StaticCard ol strong,.StaticCard ol em{border-bottom:2px solid #003fab}.StaticCard ul em,.StaticCard ol em{font-style:normal}.StaticCard ul a,.StaticCard ol a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard ul a:hover,.StaticCard ol a:hover{text-decoration:underline}.StaticCard ul a .ExternalLinkIcon,.StaticCard ol a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=e},306:function(t,e,r){"use strict";var o=r(0).a.extend(),n=(r(304),r(4)),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},528:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(303),c=r(306),l=o.a.extend({components:{PageHeader:n.a,StaticCard:c.a},head:function(){return{title:this.$t("当プロジェクトをお手伝いいただける方へ")}}}),d=r(4),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"HelpUs"},[r("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("当プロジェクトをお手伝いいただける方へ"))+"\n  ")]),t._v(" "),r("StaticCard",[r("h3",[t._v(t._s(t.$t("プログラム面について")))]),t._v(" "),r("i18n",{attrs:{path:"当プロジェクトは、{githubRepo}にて公開しております。"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[r("a",{attrs:{href:"https://github.com/a01sa01to/covid19-ibaraki/",target:"_blank",rel:"noopener"}},[t._v("\n          GitHub\n        ")])]},proxy:!0}])}),r("br"),t._v("\n    "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))),r("br"),t._v(" "),r("br"),t._v(" "),r("i18n",{attrs:{path:"詳しくは、{forDev}をご確認ください。"},scopedSlots:t._u([{key:"forDev",fn:function(){return[r("a",{attrs:{href:"https://github.com/a01sa01to/covid19-ibaraki/blob/development/FOR_DEVELOPERS.md",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("こちらのドキュメント"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),r("StaticCard",[r("h3",[t._v(t._s(t.$t("翻訳について")))]),t._v("\n    "+t._s(t.$t("Transifexというサービスを利用して、翻訳作業を行っております。"))),r("br"),t._v("\n    "+t._s(t.$t("翻訳する際に、アカウント登録が必要になりますが、お手伝いいただけるとうれしいです。"))+"\n    "),r("br"),t._v(" "),r("i18n",{attrs:{path:"詳しくは、{transifex}をご確認ください。"},scopedSlots:t._u([{key:"transifex",fn:function(){return[r("a",{attrs:{href:"https://github.com/a01sa01to/covid19-ibaraki/blob/development/TRANSLATION.md",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("こちらのドキュメント"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),r("StaticCard",[r("h3",[t._v(t._s(t.$t("その他")))]),t._v("\n    "+t._s(t.$t("何かわからないことがあれば、"))+"\n    "),r("i18n",{attrs:{path:"ご気軽に管理者の{twitterDM}にご連絡ください。"},scopedSlots:t._u([{key:"twitterDM",fn:function(){return[r("a",{attrs:{href:"https://twitter.com/messages/compose?recipient_id=4273512934",target:"_blank",rel:"noopener"}},[t._v("\n          Twitter DM\n        ")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
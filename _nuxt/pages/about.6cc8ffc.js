(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{295:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("430353be",content,!0,{sourceMap:!1})},296:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5441d104",content,!0,{sourceMap:!1})},297:function(t,e,n){var content=n(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0f6014e3",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).a),r="TOGGLE_DETAILS"},299:function(t,e,n){"use strict";var o=n(295);n.n(o).a},300:function(t,e,n){(e=n(13)(!1)).push([t.i,".header[data-v-4c577875]{position:relative;display:flex;flex-wrap:wrap;align-items:flex-end;width:100%}.pageTitle[data-v-4c577875]{font-size:3rem;display:flex;align-items:center;margin:0 calc(0.5em + 40px) 0 0;font-weight:normal;line-height:1.35;color:#4d4d4d}@media screen and (max-width: 600px){.pageTitle[data-v-4c577875]{font-size:2rem}}",""]),t.exports=e},301:function(t,e,n){"use strict";var o=n(296);n.n(o).a},302:function(t,e,n){(e=n(13)(!1)).push([t.i,".Header-Share{position:absolute;top:calc(50% - 10px);right:24px;display:flex;align-items:flex-end;background-color:#fff}.Header-Share .DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.Header-Share .DataView-Share-Opener>svg{width:auto !important}.Header-Share .DataView-Share-Opener:focus{outline:dotted #707070 1px}.Header-Share .DataView-Share-Buttons{position:absolute;top:1.5em;right:-4px;z-index:2;width:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:8px;text-align:left;background:#fff !important;border:solid 1px #d9d9d9;border-radius:8px;font-size:1.6rem}.Header-Share .DataView-Share-Buttons>*{padding:4px 0}.Header-Share .DataView-Share-Buttons span{display:block;margin:auto;text-align:center;font-size:1.2rem}.Header-Share .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.Header-Share .DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.Header-Share .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.Header-Share .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.Header-Share .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.Header-Share .DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}",""]),t.exports=e},303:function(t,e,n){"use strict";n(43);var o=n(0),r=n(298),l=o.a.extend({props:{icon:{type:String,required:!1,default:""}},data:function(){return{displayShare:!1,openDetails:!1}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){return encodeURIComponent(location.protocol+"//"+location.host+location.pathname)},twitter:function(){var t="https://twitter.com/intent/tweet?text="+encodeURIComponent(document.title.replace("|","/"))+"&url="+this.permalink()+"&hashtags=StopCovid19JP";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink();window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink();window.open(t)},toggleDetails:function(){this.openDetails=!this.openDetails,r.a.$emit(r.b,{dataView:this.$refs.dataView})}}}),c=(n(299),n(301),n(4)),d=n(38),h=n.n(d),_=n(287),v=n(515),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[t.icon?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),n("div",{staticClass:"Header-Share"},[n("v-tooltip",{attrs:{disabled:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("このページをシェア")}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])}),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("mdi-close")])],1),t._v(" "),n("span",[t._v(t._s(t.$t("このページをシェアする")))]),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEでこのページをシェア")},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterでこのページをシェア")},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookでこのページをシェア")},on:{click:t.facebook}},[t._m(2)])])]):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,"4c577875",null);e.a=component.exports;h()(component,{VIcon:_.a,VTooltip:v.a})},304:function(t,e,n){"use strict";var o=n(297);n.n(o).a},305:function(t,e,n){(e=n(13)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard ul dt:not(:first-child),.StaticCard ol dt:not(:first-child){margin-top:.6em}.StaticCard ul dd,.StaticCard ol dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard ul dd,.StaticCard ol dd{margin-left:4.1666666667vw}}.StaticCard ul dd>*:not(:first-child),.StaticCard ol dd>*:not(:first-child){margin-top:.6em}.StaticCard ul img,.StaticCard ol img{max-width:100%}.StaticCard ul figcaption,.StaticCard ol figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard ul strong,.StaticCard ul em,.StaticCard ol strong,.StaticCard ol em{border-bottom:2px solid #003fab}.StaticCard ul em,.StaticCard ol em{font-style:normal}.StaticCard ul a,.StaticCard ol a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard ul a:hover,.StaticCard ol a:hover{text-decoration:underline}.StaticCard ul a .ExternalLinkIcon,.StaticCard ol a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=e},306:function(t,e,n){"use strict";var o=n(0).a.extend(),r=(n(304),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},531:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(303),l=n(306),c=n(140),d=o.a.extend({components:{PageHeader:r.a,StaticCard:l.a,ExternalLink:c.a},head:function(){return{title:this.$t("当サイトについて")}}}),h=n(4),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),n("static-card",[t._v("\n    "+t._s(t.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。"))),n("br"),n("br"),t._v("\n    "+t._s(t.$t("茨城県による公式情報と客観的な数値をわかりやすく伝えることで、茨城県にお住まいの方や、茨城県内に拠点を持つ企業の方、茨城県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))),n("br"),n("br"),t._v("\n    "+t._s(t.$t("このサイトは、茨城県が管理しているものではありません。"))+"\n    "+t._s(t.$t("このサイトに関するご意見やご質問などは、県ではなく当サイトの管理者にお寄せください。"))+"\n    "+t._s(t.$t("県はこのサイトには一切関与しておりません。"))+"\n    "),n("i18n",{attrs:{path:"詳しくは、{contact}をご確認ください。"},scopedSlots:t._u([{key:"contact",fn:function(){return[n("nuxt-link",{attrs:{to:t.localePath("/contacts")}},[t._v(t._s(t.$t("お問い合わせ先・県内保健所一覧")))])]},proxy:!0}])})],1),t._v(" "),n("static-card",[n("h2",[t._v(t._s(t.$t("当サイトの情報について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトの情報は、以下のサイトから入手・反映しています。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.pref.ibaraki.jp/index.html",target:"_blank"}},[t._v(t._s(t.$t("茨城県公式サイト")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/Ibaraki_Kouhou",target:"_blank"}},[t._v(t._s(t.$t("茨城県公式"))+" Twitter")])])]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h2",[t._v(t._s(t.$t("ブラウザ環境について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("Google Chrome 最新版（Windows 10以上, Android 8.0以上）"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("Safari 最新版（macOS, iOS）")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Opera 最新版")))])]),t._v(" "),n("p",{staticClass:"static-card-Note"},[n("span",[t._v(t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("当サイトへのリンクについて")))]),t._v(" "),n("p",[t._v(t._s(t.$t("当サイトへのリンクは自由です。")))])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("JavaScriptについて")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),n("br"),t._v("\n      "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),n("br"),t._v("\n      "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("クッキー (Cookie) について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),n("br"),t._v("\n      "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),n("br")])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("Google Analyticsの利用について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[n("external-link",{attrs:{url:t.$t("https://marketingplatform.google.com/about/analytics/terms/jp/"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])],1),t._v(" "),n("li",[n("external-link",{attrs:{url:t.$t("https://policies.google.com/privacy?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])],1),t._v(" "),n("li",[n("external-link",{attrs:{url:t.$t("https://support.google.com/analytics/answer/6004245?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])],1)]),t._v(" "),n("i18n",{attrs:{tag:"p",path:"Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"},scopedSlots:t._u([{key:"addon",fn:function(){return[n("external-link",{attrs:{url:t.$t("https://tools.google.com/dlpage/gaoptout?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("測定を無効にするブラウザ アドオン"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("免責事項")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、茨城県及び当サイトの管理者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("ソースコードについて")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n      "),n("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[n("external-link",{attrs:{url:"https://github.com/a01sa01to/covid19-ibaraki","icon-size":16}},[t._v("\n            "+t._s(t.$t("GitHub リポジトリ"))+"\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
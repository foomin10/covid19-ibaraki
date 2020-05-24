(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{496:function(e,t,r){"use strict";r.r(t);var o=r(108),c=r(360),n=r(361),d=r(365),m=r(364),h=r(366),l=r(371),f=r(370),$=r(369),k=r(367),y=r(368),C=r(362),v=r(363),w={components:{PositiveRateCard:C.a,ConfirmedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:n.a,ConfirmedCasesAttributesCard:d.a,IbarakiCityCard:m.a,IbarakiCityMapCard:h.a,InspectionPersonsNumberCard:l.a,TelephoneAdvisoryReportsNumberCard:f.a,RecoveredCard:$.a,DeathsCard:k.a,IbarakiColonaNext:y.a,ConfirmedCasesIncreaseRatioByWeekCard:v.a},data:function(){var title,e;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),e=o.main_summary.children[0].date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),e=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),e=o.patients.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),e=o.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),e=o.contacts.date;break;case"ibaraki-city-table":title=this.$t("市町村毎の感染状況"),e=o.patients.date;break;case"ibaraki-city-map-table":title=this.$t("市町村毎の感染状況（地図）"),e=o.patients.date;break;case"number-of-recovered":title=this.$t("回復者数"),e=o.recovered_summary.date;break;case"number-of-deaths":title=this.$t("死亡者数"),e=o.deaths_summary.date;break;case"ibaraki-colona-next":title=this.$t("茨城版コロナNext"),e=o.deaths_summary.date;break;case"positive-rate":title=this.$t("PCR検査の陽性率"),e=o.positiveRate.date;break;case"increase-ratio-of-confirmed-cases-by-daily":title=this.$t("週単位の陽性者増加比"),e=o.patients_summary.date}var data={title:title,updatedAt:e};return data},head:function(){var e="https://ibaraki.stopcovid19.jp",t=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(e,"/ogp/").concat(this.$route.params.card,".png?t=").concat(t):"".concat(e,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(t),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:e+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("茨城県")+"("+this.$t("非公式")+") "+this.$t("新型コロナウイルス感染症対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},_=r(4),component=Object(_.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",["details-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-attributes-card"):"number-of-inspection-persons"==this.$route.params.card?t("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?t("telephone-advisory-reports-number-card"):"ibaraki-city-table"==this.$route.params.card?t("ibaraki-city-card"):"ibaraki-city-map-table"==this.$route.params.card?t("ibaraki-city-map-card"):"number-of-recovered"==this.$route.params.card?t("recovered-card"):"number-of-deaths"==this.$route.params.card?t("deaths-card"):"ibaraki-colona-next"==this.$route.params.card?t("ibaraki-colona-next"):"positive-rate"==this.$route.params.card?t("positive-rate-card"):"increase-ratio-of-confirmed-cases-by-daily"==this.$route.params.card?t("confirmed-cases-increase-ratio-by-week-card"):this._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);
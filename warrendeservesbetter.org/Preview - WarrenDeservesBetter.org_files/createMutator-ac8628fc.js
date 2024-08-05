define("@widget/ABOUT/c/createMutator-ac8628fc.js",["exports","~/c/defaultProps"],(function(e,t){"use strict";function a(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)({}).hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},i.apply(null,arguments)}const o="alignmentOption",l="sectionTitle",n="imageData",r="externalLink",d="cardDescriptionExpanded",g="cards",s=`${g}.headline`,c=`${g}.description`,u=`${g}.ctaButton`,p=`${g}.mediaType`,b=`${g}.imageProperties`,m=`${g}.videoProperties`,E=`${b}.${n}`,h=`${b}.${r}`,{PropTypes:T}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless,v=T.Alignment,_=T.Text.maxCount(60),I=T.Image,P=T.ToggleableLink,A=T.arrayOf(T.shape({id:T.string.readOnly,headline:T.Text,description:T.RichText,ctaButton:T.CTAButton.maxCount(50),imageProperties:T.shape({imageData:T.Image,externalLink:T.ToggleableLink}),mediaType:T.Tabs,videoProperties:T.ExternalVideo})).kind("OrderableArray").maxCount(12),R=T.string.readOnly,y=T.bool.readOnly,D=T.object.readOnly,O=T.object.readOnly,w=T.Toggle,f=T.bool.readOnly,C=T.bool.readOnly,x=T.bool.readOnly;var B={__proto__:null,alignmentOption:v,sectionTitle:_,imageData:I,externalLink:P,cards:A,renderMode:R,isInternalPage:y,internalLinks:D,staticContent:O,cardDescriptionExpanded:w,enableInlineImageEdit:f,enableImageDimension:C,hideMedia:x,numColumns:T.number};const N=[o,l,g,"renderMode","isInternalPage","internalLinks","staticContent",d,"enableInlineImageEdit","enableImageDimension"];class M extends(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Widget{}a(M,"propTypes",{...(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Widget.propTypes,...(global._||guac.lodash).pick(B,N)}),a(M,"defaultProps",{...(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Widget.defaultProps,...(global._||guac.lodash).pick(t.d,N)});var k=(global.keyMirror||guac.keymirror)({ABOUT_SECTION_TITLE_RENDERED:null,ABOUT_HEADLINE_RENDERED:null,ABOUT_DESCRIPTION_RENDERED:null,ABOUT_IMAGE_RENDERED:null,ABOUT_VIDEO_RENDERED:null,ABOUT_SHARE_GROUP:null,ABOUT_SHARE_ICON_REND_FACEBOOK:null,ABOUT_SHARE_ICON_REND_TWITTER:null,ABOUT_SHARE_ICON_REND_GOOGLEPLUS:null,ABOUT_SHARE_ICON_REND_LINKEDIN:null,ABOUT_CTA_BTN_RENDERED:null,ABOUT_CONTENT_DESCRIPTION_EXPAND_ICON:null,ABOUT_CONTENT_DESCRIPTION_COLLAPSE_ICON:null});const{constants:{routes:U}}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless,F=U.BASE,$="/image",L="/card/$",S="/card/$/image",H="/card/$/video",V="/card/$/cta",j=`${L}/suggestions`,{utils:{getRoute:G}}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless;function K(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mediaType||t.I}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{videoAllowed:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{imageProperties:i={}}=e,{imageData:o={}}=i,l=!!o.image;return a?K(e)===t.I&&l:l}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{videoAllowed:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{videoProperties:i={}}=e,{embedUrl:o,rawUrl:l}=i;return K(e)===t.V&&a&&!!o&&!!l}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{extraProps:t={},alignmentOption:a,imageConfig:i={},hideMedia:o=!1,videoAllowed:l,enableImageDimension:n}=arguments.length>1?arguments[1]:void 0;const{imageProperties:r={},videoProperties:d={},description:g,headline:s,ctaButton:c={}}=e,{label:u,enabled:p,...b}=c,{externalLink:m,imageData:E={}}=r,{alt:h,overlayAlpha:T}=E,v=i&&W(e,{videoAllowed:l}),_=z(e,{videoAllowed:l}),{heightPx:I,widthPx:P}=i;return{heading:s&&(global._||guac.lodash).merge("string"==typeof s?{children:s}:s,t.heading),text:g&&(global._||guac.lodash).merge("string"==typeof g?{richtext:!0,children:g}:g,t.text),image:!o&&v&&(global._||guac.lodash).merge({alt:h,link:m,style:{order:-1,zIndex:1},overlayAlpha:T,imageData:{...E,outputHeight:I,outputWidth:P,enableImageDimension:n}},t.image),video:!o&&_&&(global._||guac.lodash).merge({style:{order:-1,zIndex:1}},d,t.video),action:p&&(global._||guac.lodash).merge({link:b,children:u},t.action),alignment:a}}class X extends(global.React||guac.react).Component{render(){const{isInternalPage:e,layout:t,order:a,sectionTitle:i,style:o,alignmentOption:n}=this.props;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Heading,{children:i,"data-aid":k.ABOUT_SECTION_TITLE_RENDERED,"data-route":l,layout:t,style:o,order:a,isInternalPage:e,alignmentOption:n})}}X.propTypes={isInternalPage:(global.PropTypes||guac["prop-types"]).bool,layout:(global.PropTypes||guac["prop-types"]).string,order:(global.PropTypes||guac["prop-types"]).number,sectionTitle:(global.PropTypes||guac["prop-types"]).string,style:(global.PropTypes||guac["prop-types"]).object,alignmentOption:(global.PropTypes||guac["prop-types"]).string};const Z="imageDataPivot",Y="cardMediaPivot",J="cardCTAPivot",Q="cardDeleteButton",ee="sectionDeleteButton",te="videoHelper",ae="cardsRemixButton",ie="cardsRemixContent",{PropTypes:oe}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless;var le={__proto__:null,imageDataPivot:oe.Pivot,cardMediaPivot:oe.Pivot,cardCTAPivot:oe.Pivot,videoHelper:oe.ExternalLink,cardDeleteButton:oe.DeleteButton,sectionDeleteButton:oe.DeleteButton,cardsRemixButton:oe.any.kind("RemixButton"),remixContent:oe.any.kind("RemixContent"),cardsRemixContent:oe.any.kind("RemixContent")};const{selectors:{I18N:ne,Reseller:re,Config:de,Widget:ge,utils:{createSelector:se,not:ce}}}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless,{draft:{getPlainText:ue}}=(global.Core||guac["@wsb/guac-widget-core"]).utils,pe=de.flag("enableAboutVideo"),be=["about2","about3","about5","about7","about8","about9"];const me=se(de.flag("imageDimensionLayouts"),ge.preset,((e,t)=>e?.includes(t))),Ee={label:ne.get("titleForVideoUrlProp"),description:ne.get("descriptionForVideoUrlProp")},he=se(de.flag("inlineImageEditLayouts"),de.isMobile,ge.preset,((e,t,a)=>!t&&e?.includes(a)));var Te={[L]:{label:ne.get("titleForAboutCard")},[H]:{label:ne.get("media")},[$]:{label:ne.get("titleForBackgroundImage")},[V]:{label:ne.get("titleForAboutActionButton")},[S]:{label:ne.get("titleForAboutCardImage")},[o]:{value:"center"},[l]:{label:ne.get("titleForSectionTitleProp")},[d]:{label:ne.get("cardDescriptionExpanded")},[g]:{to:L,label:ne.get("titleForAboutCard"),getProps:e=>({items:e.value.map((e=>({label:e.headline,description:ue(e.description)})))})},[n]:{forceFill:!0,showAltTagInput:!0,addOrReplaceImage:!0,showRemoveButton:!0,enableFocalSelector:!0,enableInlineImageEdit:he,enableImageDimension:me,noInitialSave:!1},[r]:{getProps(e){const t=e.getFieldValue(n);return{hidden:!t||!t.image}}},[s]:{label:ne.get("titleForAboutCardHeadline")},[c]:{label:ne.get("titleForAboutCardDescription")},[u]:{label:ne.get("titleForAboutActionButtonField"),buttonLabelLink:(global.Core||guac["@wsb/guac-widget-core"]).Maniless.constants.routes.EDIT_THEME_BUTTONS_SECONDARY,buttonLabelLinkText:ne.get("editThemeStyles")},[p]:(e=>{let{imgRoute:a,videoRoute:i}=e;return{options:[{label:ne.get("image"),value:t.I,to:a},{label:ne.get("VIDEO"),value:t.V,to:i}],defaultSelected:ne.get("image"),hidden:ce(pe)}})({imgRoute:S,videoRoute:H}),[m]:Ee,[E]:{forceFill:!1,showAltTagInput:!0,addOrReplaceImage:!0,showRemoveButton:!0,enableFocalSelector:!1,showOverlayOpacityControls:!1,enableInlineImageEdit:he,enableImageDimension:me,noInitialSave:!1},[h]:{getProps(e){const t=e.getFieldValue(E);return{hidden:!t||!t.image}}},[Z]:{label:ne.get("image"),getProps(e){const t=e.getFieldValue(n);return{to:e.getRoute($),graphic:t&&t.image?(global.React||guac.react).createElement("img",{src:t.image,alt:t.alt||"",className:"mx-pivot-icon"}):void 0}}},[Y]:{label:se(ge.preset,ne.get("media"),ne.get("image"),pe,((e,t,a,i)=>be.includes(e)&&i?t:a)),getProps:e=>function(e,a){let{imageKey:i,mediaTypeKey:o,imgRoute:l,videoRoute:n}=a;const r=e.getFieldValue(o),d=e.getFieldValue(i),g=e.getFieldValue("preset"),s=r===t.I||(global._||guac.lodash).isNil(r)||!be.includes(g),c=s?l:n;return{to:e.getRoute(c),graphic:s&&d&&d.image?(global.React||guac.react).createElement("img",{src:d.image,alt:d.alt||"",className:"mx-pivot-icon"}):void 0}}(e,{imageKey:E,mediaTypeKey:p,imgRoute:S,videoRoute:H})},[J]:{label:ne.get("titleForAboutActionButton"),getProps:e=>({to:e.getRoute(V)})},[te]:{label:ne.get("videoHelperTitle"),description:ne.get("videoHelper"),link:se(re.id,re.isReseller,de.rootDomain,((e,t,a)=>t?`https://www.${a}/help/article/32194?pl_id=${e}`:`https://www.${a}/help/choose-my-video-end-screen-options-32194?q=%2332194&topic=&pg=1&path=`)),linkText:ne.get("showMeHow"),openAsNewTab:!0,showAsLink:!0},[Q]:{to:F,field:g,confirm:!0,atIndex:!0,label:ne.get("deleteGroup"),confirmTitle:ne.get("deleteCardModalTitle"),confirmDescription:ne.get("deleteCardModalText")},[ee]:{label:ne.get("deleteSectionButton")},[j]:{label:ne.get("titleForRemix")},[ae]:{getProps:e=>({link:e.getRoute(j)})},[ie]:{getProps:e=>({to:e.getRoute(L),targetedFields:[{id:"cards.headline"},{id:"cards.description"},{id:"cards.ctaButton.label",kind:e.getField("cards.ctaButton")?.kind||"CTAButton",isEnabled:e.getFieldValue("cards.ctaButton")?.enabled||!1}]})}};e.A=o,e.B=F,e.C=E,e.D=ee,e.I=n,e.L=r,e.M=Z,e.T=l,e._=a,e.a=M,e.b={addThisURL:"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56c78dc2c2c3fca6",about1:{widthPx:365,heightPx:365},about2:{widthPx:600,heightPx:300},about3:{widthPx:600,heightPx:300,widthPxAtZeroPosition:1240,heightPxAtZeroPosition:620},about4:{widthPx:400,heightPx:332,minCardHeight:"16em"},about5:{minHeightMobile:300,minHeight:"30vh"}},e.c=function(e,t){let{alignmentOption:a,imageConfig:i,extraProps:o={},hideMedia:l,videoAllowed:n=!1,enableInlineImageEdit:r,enableImageDimension:d}=t;return e.map(((e,t)=>({index:t,...e}))).filter((e=>function(e,t){let{videoAllowed:a}=t;return e&&(e.headline||e.description||e.ctaButton&&e.ctaButton.enabled&&e.ctaButton.label||W(e,{videoAllowed:a})||z(e,{videoAllowed:a}))}(e,{videoAllowed:n}))).map(((e,t,p)=>{let{index:h,id:T,...v}=e;const _=(global._||guac.lodash).merge({heading:{"data-aid":`${k.ABOUT_HEADLINE_RENDERED}${h}`,"data-field-id":s,"data-field-route":G(L,[h])},text:{"data-aid":`${k.ABOUT_DESCRIPTION_RENDERED}${h}`,"data-field-id":c,"data-field-route":G(L,[h])},image:{enableInlineImageEdit:r,"data-aid":`${k.ABOUT_IMAGE_RENDERED}${h}`,"data-field-id":r?E:b,"data-field-route":G(S,[h])},video:{"data-aid":`${k.ABOUT_VIDEO_RENDERED}${h}`,"data-field-id":m,"data-field-route":G(H,[h])},action:{"data-aid":`${k.ABOUT_CTA_BTN_RENDERED}${h}`,"data-field-id":u,"data-field-route":G(V,[h])}},o);return{...q(v,{alignmentOption:a,extraProps:_,imageConfig:"function"==typeof i?i(h,p.length):i,hideMedia:l,videoAllowed:n,enableInlineImageEdit:r,enableImageDimension:d}),"data-field-id":g,"data-field-route":G(L,[h]),index:h,id:T}}))},e.d=k,e.e=e=>(global.Core||guac["@wsb/guac-widget-core"]).Maniless.utils.createMutator(e,{fields:le,defaultProps:Te}),e.f=Te,e.g=g,e.h=L,e.i=ae,e.j=s,e.k=c,e.l=d,e.m=Y,e.n=J,e.o=Q,e.p=S,e.q=h,e.r=V,e.s=u,e.t=j,e.u=ie,e.v=X,e.w=x,e.x=B,e.y=i,e.z=$})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=createMutator-ac8628fc.js.map

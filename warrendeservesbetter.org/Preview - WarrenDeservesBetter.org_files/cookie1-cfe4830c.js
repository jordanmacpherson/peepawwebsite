define("@widget/COOKIE_BANNER/cookie1-cfe4830c.js",["exports"],(function(e){"use strict";function t(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},o.apply(this,arguments)}const{PropTypes:a}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless;var n={__proto__:null,renderMode:a.string.readOnly,viewDevice:a.string.readOnly,staticContent:a.object.readOnly,cookieBannerEnabled:a.bool.readOnly,cookieBannerMessage:a.string.readOnly,cookieBannerTitle:a.string.readOnly,cookieBannerButtonLabel:a.string.readOnly,cookieBannerDeclineEnabled:a.bool.readOnly,cookieBannerDeclineLabel:a.string.readOnly,analyticsSettingsEnabled:a.bool.readOnly,enableCookieWarning:a.bool.readOnly,lastUpdateDate:a.string};const{selectors:i}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless,{Config:l,Stores:r,I18N:s}=i;var c={__proto__:null,enableCookieWarning:l.flag("enableCookieWarning"),cookieBannerEnabled:r.Website.option("cookieBannerEnabled"),cookieBannerMessage:r.Website.property("cookieBannerMessage"),cookieBannerTitle:r.Website.property("cookieBannerTitle"),cookieBannerButtonLabel:r.Website.property("cookieBannerButtonLabel"),cookieBannerDeclineEnabled:r.Website.option("cookieBannerDeclineEnabled"),cookieBannerDeclineLabel:r.Website.property("cookieBannerDeclineLabel"),analyticsSettingsEnabled:r.Website.option("analyticsSettingsEnabled"),staticContent:s.staticContent,renderMode:l.renderMode,viewDevice:l.viewDevice};const p="lastUpdateDate";const g=(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Widget;var d=(global.keyMirror||guac.keymirror)({FOOTER_COOKIE_TITLE_RENDERED:null,FOOTER_COOKIE_MESSAGE_RENDERED:null,FOOTER_COOKIE_DECLINE_RENDERED:null,FOOTER_COOKIE_CLOSE_RENDERED:null,FOOTER_COOKIE_BANNER_RENDERED:null});function u(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)}const{Bootstrap:b}=(global.Core||guac["@wsb/guac-widget-core"]).components,{renderModes:{PUBLISH:y,EDIT:E},layers:{Z_INDEX_COOKIE_BANNER:k},renderDevices:{TABLET_RENDER_DEVICE:h},cookies:{TERMS_ACCEPTED:T}}=(global.Core||guac["@wsb/guac-widget-core"]).constants,w={bannerLayout:{padding:"medium",position:"fixed",right:0,zIndex:k,width:"100%",height:"auto",textAlign:"left",backgroundColor:"section",borderRadius:0,margin:0,overflowY:"auto","@sm":{margin:"medium",width:400,maxHeight:500,borderRadius:7},transition:"all 1s ease-in",boxShadow:"0 2px 6px 0px rgba(0,0,0,0.3)",contain:"content"},cookieTitle:{marginBottom:0,paddingBottom:"xsmall"},cookieButton:{display:"flex",flexDirection:"column",justifyContent:"center",cursor:"pointer",marginTop:"medium",marginBottom:"xxsmall",wordBreak:"break-word",flexBasis:"50%",flexGrow:1,":nth-child(2)":{marginLeft:"medium"}},cookieMessage:{maxHeight:300,overflowY:"auto","@sm":{maxHeight:200}},buttonWrapper:{display:"flex",justifyContent:"space-between"}};class m extends(global.React||guac.react).Component{isMutatorOpened(){const{router:e={},id:t,viewDevice:o,renderMode:a}=this.props;return a===E&&o===h&&e.widget===t}isBannerEnabled(){return this.props.cookieBannerEnabled||this.props.enableCookieWarning}shouldRenderBanner(){const{renderMode:e}=this.props;return this.isBannerEnabled()&&(e===y||this.isMutatorOpened())}getScriptProps(){const{id:e}=this.props;return{id:e,dismissCookie:"cookie_warning_dismissed",acceptCookie:T}}render(){if(!this.shouldRenderBanner())return null;const{cookieBannerTitle:e,cookieBannerMessage:t,cookieBannerButtonLabel:o,staticContent:a,cookieBannerDeclineLabel:n,cookieBannerDeclineEnabled:i,id:l,renderMode:r}=this.props,s=e||a.cookieTitle,c=t||a.usingCookieMessage,p=o||a.acceptAndClose,g=n||a.decline,E={...w.bannerLayout,bottom:this.isMutatorOpened()?0:-500},{Text:k,Button:h,Heading:T}=(global.Core||guac["@wsb/guac-widget-core"]).UX2.Element;return(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Group,{"data-aid":d.FOOTER_COOKIE_BANNER_RENDERED,id:`${l}-banner`,style:E,category:"primary"},(global.React||guac.react).createElement(T,{style:w.cookieTitle,children:s,"data-aid":d.FOOTER_COOKIE_TITLE_RENDERED}),(global.React||guac.react).createElement(k,{richtext:!0,"data-aid":d.FOOTER_COOKIE_MESSAGE_RENDERED,style:w.cookieMessage,children:c}),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{style:w.buttonWrapper},i&&(global.React||guac.react).createElement(h.Primary,{tag:"a",href:"",children:g,style:w.cookieButton,"data-aid":d.FOOTER_COOKIE_DECLINE_RENDERED,size:"small",id:`${l}-decline`}),(global.React||guac.react).createElement(h.Primary,{tag:"a",href:"",children:p,style:w.cookieButton,"data-aid":d.FOOTER_COOKIE_CLOSE_RENDERED,size:"small",id:`${l}-accept`}))),r===y&&(global.React||guac.react).createElement(b.JS,{id:"CookieBannerScript",script:u.toString(),props:this.getScriptProps()}))}}t(m,"propTypes",{router:(global.PropTypes||guac["prop-types"]).object,id:(global.PropTypes||guac["prop-types"]).string.isRequired,renderMode:(global.PropTypes||guac["prop-types"]).string.isRequired,viewDevice:(global.PropTypes||guac["prop-types"]).string.isRequired,cookieBannerTitle:(global.PropTypes||guac["prop-types"]).string,cookieBannerButtonLabel:(global.PropTypes||guac["prop-types"]).string,cookieBannerDeclineLabel:(global.PropTypes||guac["prop-types"]).string,cookieBannerMessage:(global.PropTypes||guac["prop-types"]).string,staticContent:(global.PropTypes||guac["prop-types"]).object.isRequired,cookieBannerEnabled:(global.PropTypes||guac["prop-types"]).bool,enableCookieWarning:(global.PropTypes||guac["prop-types"]).bool,cookieBannerDeclineEnabled:(global.PropTypes||guac["prop-types"]).bool});const{EDIT:B}=(global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes;class C extends g{render(){const{renderMode:e}=this.props,{Router:t}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless.context,o=(global.React||guac.react).createElement(m,this.props);return e===B?(global.React||guac.react).createElement(t.Consumer,null,(e=>(global.React||guac.react).cloneElement(o,{router:e}))):o}}t(C,"propTypes",{...(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Widget.propTypes,...n}),t(C,"defaultProps",{...(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Widget.defaultProps,...c});const{BASE:R}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless.constants.routes;class D extends(global.React||guac.react).Component{render(){return(global.React||guac.react).createElement("div",{style:{marginTop:"16px"}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.ExternalLink,this.props))}}t(D,"propTypes",{link:(global.PropTypes||guac["prop-types"]).string.isRequired,linkText:(global.PropTypes||guac["prop-types"]).string.isRequired,showAsLink:(global.PropTypes||guac["prop-types"]).bool,openAsNewTab:(global.PropTypes||guac["prop-types"]).bool});class O extends(global.React||guac.react).Component{constructor(){super(...arguments),t(this,"getDisabledState",(()=>{const{lastPublishDate:e,lastUpdateDate:t}=this.props;let o=!0;return t&&(o=!!e&&new Date(t)<new Date(e)),o}))}render(){const{buttonLabel:e,setRoute:t}=this.props;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Elements.Fieldset,{disabled:this.getDisabledState(),className:"mx-publish"},(global.React||guac.react).createElement("div",{style:{marginTop:"2.5rem"}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.ExternalLink,{link:(global.Core||guac["@wsb/guac-widget-core"]).Maniless.constants.routes.PUBLISH,linkText:e,showAsLink:!1,isRoute:!0,widgetType:"COOKIE_BANNER",setRoute:t,fullWidth:!0})))}}t(O,"propTypes",{buttonLabel:(global.PropTypes||guac["prop-types"]).string.isRequired,setRoute:(global.PropTypes||guac["prop-types"]).func.isRequired,lastPublishDate:(global.PropTypes||guac["prop-types"]).string,lastUpdateDate:(global.PropTypes||guac["prop-types"]).string});class P extends(global.React||guac.react).Component{constructor(){super(...arguments),t(this,"handleChange",(e=>{const{onChange:t,websiteOptionName:o}=this.props;t({website:{options:{[o]:e}},widget:e,widgetFields:{lastUpdateDate:(new Date).toISOString()}})}))}componentDidMount(){const{saveDefaultValue:e,defaultValueToSet:t,settingsValue:o,onChange:a,websiteOptionName:n}=this.props;e&&"boolean"!=typeof o&&a({website:{options:{[n]:t}},widget:t})}render(){const{label:e,title:t,settingsValue:o,linkUrl:a,linkText:n,websiteOptionName:i,widgetType:l}=this.props;return(global.React||guac.react).createElement((global.React||guac.react).Fragment,null,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.Toggle,{label:e,onChange:this.handleChange,value:o,widgetType:l,id:i}),t&&(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Elements.Fieldset,{style:{color:"#aab7c2"}},(global.React||guac.react).createElement("div",{style:{display:"inline",fontWeight:"bold"}},t.replace("{dashboard}","")),n&&a&&(global.React||guac.react).createElement("div",{style:{display:"inline"}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.ExternalLink,{link:a,style:{display:"inline",verticalAlign:"bottom"},linkText:`${n}.`,showAsLink:!0,openAsNewTab:!0}))))}}t(P,"propTypes",{settingsValue:(global.PropTypes||guac["prop-types"]).bool,label:(global.PropTypes||guac["prop-types"]).string,title:(global.PropTypes||guac["prop-types"]).string,websiteOptionName:(global.PropTypes||guac["prop-types"]).string,onChange:(global.PropTypes||guac["prop-types"]).func.isRequired,saveDefaultValue:(global.PropTypes||guac["prop-types"]).bool,defaultValueToSet:(global.PropTypes||guac["prop-types"]).bool,linkText:(global.PropTypes||guac["prop-types"]).string,linkUrl:(global.PropTypes||guac["prop-types"]).string,widgetType:(global.PropTypes||guac["prop-types"]).string});class f extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleChange=this.handleChange.bind(this),this.state={text:this.props.settingsValue||this.props.placeholder}}static get propTypes(){return{settingsValue:(global.PropTypes||guac["prop-types"]).string,label:(global.PropTypes||guac["prop-types"]).node,description:(global.PropTypes||guac["prop-types"]).string,placeholder:(global.PropTypes||guac["prop-types"]).string,websitePropertyName:(global.PropTypes||guac["prop-types"]).string,onChange:(global.PropTypes||guac["prop-types"]).func.isRequired,...(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.RichText.propTypes}}static get defaultProps(){return{...(global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.RichText.defaultProps}}handleChange(e){const t="string"==typeof e?{widget:e}:e,{onChange:o,websitePropertyName:a}=this.props;o((global._||guac.lodash).merge(t,{website:{properties:{[a]:e.widget}},widgetFields:{lastUpdateDate:(new Date).toISOString()}}))}render(){const{label:e,description:t}=this.props,{text:a}=this.state;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.RichText,o({},this.props,{label:e,onChange:this.handleChange,onFocus:()=>{},onBlur:()=>{},description:t,value:a}))}}class x extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleChange=this.handleChange.bind(this),this.state={value:this.props.settingsValue||this.props.placeholder}}handleChange(e){this.setState({value:e},(()=>{const{onChange:t,websitePropertyName:o}=this.props;t({website:{properties:{[o]:e}},widget:e,widgetFields:{lastUpdateDate:(new Date).toISOString()}})}))}render(){const{label:e,placeholder:t,validation:o,description:a,widgetType:n,websitePropertyName:i}=this.props,{value:l}=this.state,r=e?"":"-12px";return(global.React||guac.react).createElement("div",{style:{marginTop:r}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.Text,{label:e,onChange:this.handleChange,placeholder:t,value:l,description:a,validation:o,widgetType:n,id:i}))}}t(x,"propTypes",{settingsValue:(global.PropTypes||guac["prop-types"]).string,label:(global.PropTypes||guac["prop-types"]).string,description:(global.PropTypes||guac["prop-types"]).string,placeholder:(global.PropTypes||guac["prop-types"]).string,websitePropertyName:(global.PropTypes||guac["prop-types"]).string,validation:(global.PropTypes||guac["prop-types"]).func.isRequired,onChange:(global.PropTypes||guac["prop-types"]).func.isRequired,widgetType:(global.PropTypes||guac["prop-types"]).string});const M=e=>{let{messageType:t,message:o,ctaText:a,tooltipText:n}=e;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Fields.NotifyMessage,{messageType:t,message:(global.React||guac.react).createElement("div",null,o," ",(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).Maniless.Elements.Tooltip,{id:"basic-tooltip",className:"text-primary",text:(global.React||guac.react).createElement("span",{className:"ux-button-inline"},a),message:n}))})};M.propTypes={ctaText:(global.PropTypes||guac["prop-types"]).string.isRequired,message:(global.PropTypes||guac["prop-types"]).string.isRequired,messageType:(global.PropTypes||guac["prop-types"]).string.isRequired,tooltipText:(global.PropTypes||guac["prop-types"]).string.isRequired};const{PropTypes:_}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless;var v={__proto__:null,mutatorDescription:_.Description,deleteSectionButton:_.DeleteButton,helpLink:_.any.kind(D),publishButton:_.any.kind(O),cookieBannerEnabled:_.Toggle.kind(P),cookieBannerMessage:_.RichText.kind(f),cookieBannerTitle:_.Text.kind(x),cookieBannerButtonLabel:_.Text.kind(x),cookieBannerDeclineEnabled:_.Toggle.kind(P),cookieBannerDeclineLabel:_.Text.kind(x),analyticsSettingsEnabled:_.Toggle.kind(P),chatEnabledAlert:_.any.kind(M)};const W="mutatorDescription",N="helpLink",L="publishButton",S="cookieBannerEnabled",I="cookieBannerMessage",A="cookieBannerTitle",F="cookieBannerButtonLabel",V="cookieBannerDeclineEnabled",U="cookieBannerDeclineLabel",q="analyticsSettingsEnabled",$="chatEnabledAlert",{selectors:{I18N:K,Stores:j,Reseller:G,Account:H,utils:{createSelector:X,getWithProp:z}}}=(global.Core||guac["@wsb/guac-widget-core"]).Maniless,Y=(e,t)=>void 0!==t?t:e,J=X(j.Widget.all,(e=>e.find((e=>"MESSAGING"===e.get("type"))))),Z=X(j.Website.option("cookieBannerEnabled"),J,((e,t)=>{const o=null==t?void 0:t.get("options"),a=null==t?void 0:t.get("properties");return e||!z(o,"enabled")||"REAMAZE"!==z(a,"notificationPreference")}));var Q={[W]:{description:K.get("cookieBannerDescriptionExt")},[N]:{link:X(G.isReseller,G.id,j.Config.key("rootDomain"),((e,t,o)=>e?`https://www.${o}/help/article/27883?pl_id=${t}`:`https://www.${o}/help/a-27806`)),linkText:K.get("howItWorks"),openAsNewTab:!0,showAsLink:!0},[S]:X(K.get("titleForEnable"),j.Website.option("cookieBannerEnabled"),j.Widget.option("cookieBannerEnabled"),j.Widget.key("type"),((e,t,o,a)=>({label:e,settingsValue:Y(t,o),websiteOptionName:"cookieBannerEnabled",widgetType:a}))),[A]:X(K.get("title"),K.get("titlePlaceholder"),j.Website.property("cookieBannerTitle"),j.Widget.property("cookieBannerTitle"),j.Website.option("cookieBannerEnabled"),j.Widget.option("cookieBannerEnabled"),((e,t,o,a,n,i)=>({label:e,placeholder:t,settingsValue:Y(o,a),websitePropertyName:"cookieBannerTitle",hidden:!Y(n,i)}))),[I]:X(K.get("message"),K.get("cookieBannerMessageDisclaimer"),K.get("cookieMessagePlaceholder"),j.Website.property("cookieBannerMessage"),j.Widget.property("cookieBannerMessage"),j.Website.option("cookieBannerEnabled"),j.Widget.option("cookieBannerEnabled"),((e,t,o,a,n,i,l)=>({label:e,description:t,placeholder:o,settingsValue:Y(a,n),websitePropertyName:"cookieBannerMessage",hidden:!Y(i,l)}))),[F]:X(K.get("cookieBannerAcceptTitle"),K.get("accept"),K.get("cookieBannerAcceptTooltip"),j.Website.property("cookieBannerButtonLabel"),j.Widget.property("cookieBannerButtonLabel"),j.Website.option("cookieBannerEnabled"),j.Widget.option("cookieBannerEnabled"),j.Widget.key("type"),((e,t,o,a,n,i,l,r)=>({label:e,placeholder:t,description:o,settingsValue:Y(a,n),websitePropertyName:"cookieBannerButtonLabel",hidden:!Y(i,l),widgetType:r}))),[V]:X(K.get("cookieBannerDeclineTitle"),K.get("cookieBannerDeclineTooltip"),j.Website.option("cookieBannerDeclineEnabled"),j.Widget.option("cookieBannerDeclineEnabled"),j.Website.option("cookieBannerEnabled"),j.Widget.option("cookieBannerEnabled"),((e,t,o,a,n,i)=>({label:e,title:t,settingsValue:Y(o,a),websiteOptionName:"cookieBannerDeclineEnabled",hidden:!Y(n,i)}))),[U]:X(K.get("decline"),j.Website.property("cookieBannerDeclineLabel"),j.Widget.property("cookieBannerDeclineLabel"),j.Website.option("cookieBannerEnabled"),j.Widget.option("cookieBannerEnabled"),j.Website.option("cookieBannerDeclineEnabled"),j.Widget.option("cookieBannerDeclineEnabled"),j.Widget.key("type"),((e,t,o,a,n,i,l,r)=>{const s=Y(t,o),c=Y(a,n);return{placeholder:e,settingsValue:s,websitePropertyName:"cookieBannerDeclineLabel",hidden:!Y(i,l)||!c,widgetType:r}})),[q]:X(K.get("visitorTrackingTitle"),K.get("visitorTrackingMsg"),K.get("dashboard"),j.Config.key("rootDomain"),H.id,j.Website.option("analyticsSettingsEnabled"),j.Widget.option("analyticsSettingsEnabled"),j.Widget.key("type"),((e,t,o,a,n,i,l,r)=>({label:e,title:t,linkText:o,linkUrl:`https://dashboard.${a}/account/${n}?origin=editoric`,saveDefaultValue:!0,defaultValueToSet:!0,settingsValue:Y(i,l),websiteOptionName:"analyticsSettingsEnabled",widgetType:r}))),[L]:X(K.get("publish"),j.Website.property("lastPublishSuccessUtcDateTime"),j.Widget.property("lastUpdateDate"),((e,t,o)=>({buttonLabel:e,lastPublishDate:t,lastUpdateDate:o}))),[p]:{hidden:!0},[$]:{hidden:Z,messageType:"warning",message:"We recommend enabling the cookie banner when Chat is enabled.",ctaText:"Why?",tooltipText:"Chat uses cookies to track engagement from site visitors so that this data is available to you in Conversations."}},ee=(global.Core||guac["@wsb/guac-widget-core"]).Maniless.utils.createMutator({routes:{[R]:[W,N,S,$,A,I,F,V,U,q,L,p]}},{fields:v,defaultProps:Q,omitDefaultFields:!0}),te=(global.Core||guac["@wsb/guac-widget-core"]).Maniless.connect(C,ee);e.Component=te,e.component="@widget/COOKIE_BANNER/cookie1",e.default=te,e.id="cookie1",e.src="/home/jenkins/workspace/gdcorp-im/guac-widget-cookie-banner/build-master/src/layouts/cookie1/index.js",e.type="COOKIE_BANNER",Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=cookie1-cfe4830c.js.map

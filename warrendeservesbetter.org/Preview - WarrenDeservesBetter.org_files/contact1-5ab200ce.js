define("@widget/CONTACT/c/contact1-5ab200ce.js",["exports","~/c/genericMap","@wsb/guac-widget-shared@^1/lib/components/Form"],(function(e,t,a){"use strict";class o extends(global.React||guac.react).Component{render(){const{formTitle:e,category:o,section:c}=this.props,r=(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Heading.Minor,{style:{marginBottom:"medium","@xs-only":{textAlign:"center"}},"data-aid":t.D.CONTACT_FORM_TITLE_REND,"data-route":t.F.FORM_TITLE,"data-field-route":t.b,children:e});return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{category:o,section:c},(global.React||guac.react).createElement(a.default,t.c({title:r,formFieldVariationOptions:{EMAIL_OPT_IN:{styleOverrides:{justifyContent:"left"}}},dataAidPrefix:"CONTACT",fullWidth:!0},this.props)))}}o.propTypes={blankInfo:(global.PropTypes||guac["prop-types"]).bool,category:(global.PropTypes||guac["prop-types"]).string,formTitle:(global.PropTypes||guac["prop-types"]).string,section:(global.PropTypes||guac["prop-types"]).string,...a.default.propTypes};class c extends(global.React||guac.react).Component{render(){return t.g(this.props,!0)}}class r extends t.C{constructor(){super(...arguments),this.contactFormComponent=o,this.contactInfoComponent=c,this.contactFormRaw="@widget/CONTACT/bs-contact1-contact-form",this.mapRaw=t.M}render(){const{category:e,section:a,sectionTitle:o}=this.props,c=t.d(this.props),r=t.i(this.props),l=[c?(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{key:"form-el","data-aid":t.D.CONTACT_FORM_CONTAINER_REND,children:this.renderFormSection()}):null,r?null:(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Block,{key:"content-el","data-aid":t.D.CONTACT_INFO_CONTAINER_REND,children:(global.React||guac.react).createElement(this.contactInfoComponent,this.props),style:{textAlign:"center",marginTop:c?"xlarge":0,"@sm":{textAlign:c?"left":"center",marginTop:"0"}}})].filter((e=>!!e)),n=1===l.length?{inset:!0}:{xs:1,md:2},g=this.showMap?"0":"1px";return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Widget,this.props,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Group.Section,{category:e,section:a,style:this.showMap?{paddingBottom:0,borderBottomWidth:g,"@sm":{paddingBottom:0}}:{borderBottomWidth:g}},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Container,null,this.renderTitleSection(o),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Group.Content,null,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid,t.c({},n,{bottom:!1}),l)))),this.showMap?(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Group.Map.Banner,{"data-route":t.F.ADDRESS,style:{marginTop:"xlarge",paddingBottom:"30%",position:"relative","@xs-only":{marginTop:"0px",minHeight:"200px"}},children:this.renderMap()}):null,this.recaptchaEnabled&&this.renderRecaptchaBadgeMask())}}e.C=r})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=contact1-5ab200ce.js.map

define("@widget/LAYOUT/c/SplitNav-18741ee8.js",["exports","~/c/Layout","~/c/NavItems"],(function(e,t,l){"use strict";class a extends(global.React||guac.react).Component{constructor(){super(...arguments),this._navId1=`${(global._||guac.lodash).uniqueId(this.props.id)}-navId-1`,this._navId2=`${(global._||guac.lodash).uniqueId(this.props.id)}-navId-2`,this._containerId=(global._||guac.lodash).uniqueId("navContainer-")}generateStyles(){const{style:e={},sharedGridStyle:t,hasNav:l}=this.props,a={display:"flex",alignItems:"center",flexGrow:1,flexBasis:"0%",paddingHorizontal:0};return(global._||guac.lodash).merge({grid:{width:"100%",...t},singleCell:{maxWidth:"100%",...!l&&{"> nav":{justifyContent:"flex-end"}}||null},leftCell:{justifyContent:"flex-start",...a},centerCell:{justifyContent:"center",textAlign:"center",marginHorizontal:0,zIndex:1,...a},rightCell:{justifyContent:"flex-end",...a},logo:{textAlign:"center",flexGrow:1}},e)}renderSingleNav(){const{linkStyle:e,activeStyle:a,showUtilitiesMenu:o}=this.props,n=this.generateStyles();return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid,{bottom:!1,style:n.grid,id:this._containerId},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell,{style:n.singleCell},(global.React||guac.react).createElement(l.N,t.c({},(global._||guac.lodash).omit(this.props,["leftCell","centerCell","rightCell"]),{style:{display:"flex",justifyContent:"center"},navId:this._navId1,containerId:this._containerId,maxWidth:"none",linkStyle:e,activeStyle:a,inlineUtilitiesMenu:o,renderAsBlocks:!0}))))}renderSplitNav(){const{linkStyle:e,activeStyle:a,showUtilitiesMenu:o,scaledLogoFontSizes:n,maxLines:r}=this.props,s=this.generateStyles();return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid,{wrap:!1,gutter:!1,style:s.grid,id:this._containerId},(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell,{md:4,style:s.leftCell},(global.React||guac.react).createElement(l.N,t.c({maxWidth:"100%"},this.props,{navId:this._navId1,containerId:this._containerId,linkStyle:e,activeStyle:a,inlineUtilitiesMenu:!1,renderAsBlocks:!0,hideOverflowDropdown:!0}))),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell,{md:4,style:s.centerCell},(global.React||guac.react).createElement(t.t,t.c({},this.props,{scaledFontSizes:n,style:s.logo,maxLines:r}))),(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell,{md:4,style:s.rightCell},(global.React||guac.react).createElement(l.N,t.c({maxWidth:"100%"},this.props,{navId:this._navId2,splitNavId:this._navId1,containerId:this._containerId,linkStyle:e,activeStyle:a,inlineUtilitiesMenu:o,renderAsBlocks:!0}))))}render(){const{hasRenderedLogo:e}=this.props;return e?this.renderSplitNav():this.renderSingleNav()}}a.propTypes={hasRenderedLogo:(global.PropTypes||guac["prop-types"]).bool,id:(global.PropTypes||guac["prop-types"]).string,navigation:(global.PropTypes||guac["prop-types"]).array,showUtilitiesMenu:(global.PropTypes||guac["prop-types"]).bool,linkStyle:(global.PropTypes||guac["prop-types"]).object,activeStyle:(global.PropTypes||guac["prop-types"]).object,style:(global.PropTypes||guac["prop-types"]).object,logo:(global.PropTypes||guac["prop-types"]).object,scaledLogoFontSizes:(global.PropTypes||guac["prop-types"]).arrayOf((global.PropTypes||guac["prop-types"]).oneOf(Object.values((global.Core||guac["@wsb/guac-widget-core"]).constants.fontSizes))),hasNav:(global.PropTypes||guac["prop-types"]).bool,sharedGridStyle:(global.PropTypes||guac["prop-types"]).object,maxLines:(global.PropTypes||guac["prop-types"]).number},a.defaultProps={maxLines:1},e.S=a})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=SplitNav-18741ee8.js.map

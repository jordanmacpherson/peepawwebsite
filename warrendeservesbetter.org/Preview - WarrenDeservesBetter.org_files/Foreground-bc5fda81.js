define("@widget/LAYOUT/c/Foreground-bc5fda81.js",["exports","~/c/Layout","~/c/BackgroundImage"],(function(e,a,t){"use strict";const o=e=>{let{data:t,style:o,dataAid:l=a.d.BACKGROUND_IMAGE_RENDERED,staticImage:d,treatment:i,mobileGutterWidth:r,lazyLoad:p,isFullWidthMobile:s}=e;const{alt:g}=t;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Image,{alt:g,style:o,group:"HeaderMedia",imageData:t,groupType:i,"data-ht":i,"data-aid":l,staticImage:d,mobileGutterWidth:r||([a.I,a.B].indexOf(i)>=0?24:0),lazyLoad:p,isFullWidthMobile:s,headerTreatment:i})};o.propTypes={data:t.h.isRequired,dataAid:(global.PropTypes||guac["prop-types"]).string,style:(global.PropTypes||guac["prop-types"]).object,treatment:(global.PropTypes||guac["prop-types"]).string,staticImage:(global.PropTypes||guac["prop-types"]).bool,mobileGutterWidth:(global.PropTypes||guac["prop-types"]).number,lazyLoad:(global.PropTypes||guac["prop-types"]).bool,isFullWidthMobile:(global.PropTypes||guac["prop-types"]).bool};const l=e=>{const{data:t,...l}=e,{image:d,video:i,videoEmbed:r,mediaType:p,videoType:s}=t,g=p!==a.V&&d,c=p===a.V&&(i||s===a.G&&r&&r.vimeoId);return g||c?p===a.V?(global.React||guac.react).createElement(a.y,a.c({},l,{videoBackground:i,videoPoster:d,videoEmbed:r,videoType:s,isVideoInset:!0})):(global.React||guac.react).createElement(o,e):null};l.propTypes={data:t.a.isRequired},e.F=l})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=Foreground-bc5fda81.js.map

import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "img": {
        "maxWidth": "100%"
    },
    "preview": {
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column"
    },
    "preview-pic": {
        "WebkitBoxFlex": 1,
        "WebkitFlexGrow": 1,
        "MsFlexPositive": 1,
        "flexGrow": 1
    },
    "preview-thumbnailnav-tabs": {
        "border": "none",
        "marginTop": 15
    },
    "preview-thumbnailnav-tabs li": {
        "width": "18%",
        "marginRight": "2.5%"
    },
    "preview-thumbnailnav-tabs li img": {
        "maxWidth": "100%",
        "display": "block"
    },
    "preview-thumbnailnav-tabs li a": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "preview-thumbnailnav-tabs li:last-of-type": {
        "marginRight": 0
    },
    "tab-content": {
        "overflow": "hidden"
    },
    "tab-content img": {
        "height": 460,
        "width": "100%",
        "WebkitAnimationName": "opacity",
        "animationName": "opacity",
        "WebkitAnimationDuration": ".3s",
        "animationDuration": ".3s"
    },
    "card1": {
        "marginTop": 50,
        "background": "#eee",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "lineHeight": 1.5
    },
    "details": {
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column"
    },
    "colors": {
        "WebkitBoxFlex": 1,
        "WebkitFlexGrow": 1,
        "MsFlexPositive": 1,
        "flexGrow": 1,
        "textTransform": "UPPERCASE",
        "fontWeight": "bold"
    },
    "product-title": {
        "textTransform": "UPPERCASE",
        "fontWeight": "bold",
        "marginBottom": 15,
        "marginTop": 0
    },
    "price": {
        "textTransform": "UPPERCASE",
        "fontWeight": "bold",
        "marginBottom": 15
    },
    "sizes": {
        "textTransform": "UPPERCASE",
        "fontWeight": "bold",
        "marginBottom": 15
    },
    "checked": {
        "color": "#ff9f1a"
    },
    "price span": {
        "color": "#ff9f1a"
    },
    "rating": {
        "marginBottom": 15
    },
    "product-description": {
        "marginBottom": 15
    },
    "vote": {
        "marginBottom": 15
    },
    "size": {
        "marginRight": 10
    },
    "size:first-of-type": {
        "marginLeft": 40
    },
    "color": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginRight": 10,
        "height": 2,
        "width": 2,
        "borderRadius": 2
    },
    "color:first-of-type": {
        "marginLeft": 20
    },
    "add-to-cart": {
        "background": "#ff9f1a",
        "paddingTop": 1.2,
        "paddingRight": 1.5,
        "paddingBottom": 1.2,
        "paddingLeft": 1.5,
        "border": "none",
        "textTransform": "UPPERCASE",
        "fontWeight": "bold",
        "color": "#fff",
        "WebkitTransition": "background .3s ease",
        "transition": "background .3s ease"
    },
    "like": {
        "background": "#ff9f1a",
        "paddingTop": 1.2,
        "paddingRight": 1.5,
        "paddingBottom": 1.2,
        "paddingLeft": 1.5,
        "border": "none",
        "textTransform": "UPPERCASE",
        "fontWeight": "bold",
        "color": "#fff",
        "WebkitTransition": "background .3s ease",
        "transition": "background .3s ease"
    },
    "add-to-cart:hover": {
        "background": "#b36800",
        "color": "#fff"
    },
    "like:hover": {
        "background": "#b36800",
        "color": "#fff"
    },
    "not-available": {
        "textAlign": "center",
        "lineHeight": 2
    },
    "not-available:before": {
        "fontFamily": "fontawesome",
        "content": "\\f00d",
        "color": "#fff"
    },
    "orange": {
        "background": "#ff9f1a"
    },
    "green": {
        "background": "#85ad00"
    },
    "blue": {
        "background": "#0076ad"
    },
    "tooltip-inner": {
        "paddingTop": 1.3,
        "paddingRight": 1.3,
        "paddingBottom": 1.3,
        "paddingLeft": 1.3
    },
    "divhearts": {
        "width": 200,
        "height": 600,
        "position": "absolute",
        "bottom": 0,
        "left": "50%",
        "marginLeft": -50
    },
    "divheart": {
        "width": 30,
        "height": 30,
        "opacity": 1,
        "position": "absolute",
        "bottom": 0,
        "display": "none"
    },
    "divheart i": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "opacity": 1
    },
    "colOne": {
        "color": "#fce473"
    },
    "colTwo": {
        "color": "#f68b39"
    },
    "colThree": {
        "color": "#ed6c63"
    },
    "colFour": {
        "color": "#847bb9"
    },
    "colFive": {
        "color": "#97cd76"
    },
    "colSix": {
        "color": "#35b1d1"
    }
});
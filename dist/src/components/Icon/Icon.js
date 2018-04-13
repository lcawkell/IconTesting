"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var css = require("./Icon.css");
var Icon_fn_1 = require("./Icon.fn");
/**
 * @render react
 * @name Icon
 * @description Easy to use SVG Icons
 * @example
 * <Icon icon="sync-regular"></Icon>
 * <Icon icon={{
                    svgCode: 'M457.373 9.387l-50.095 50.102C365.411 27.211 312.953 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h10.015c6.352 0 11.647-4.949 11.977-11.293C48.159 131.913 141.389 42 256 42c47.554 0 91.487 15.512 127.02 41.75l-53.615 53.622c-20.1 20.1-5.855 54.628 22.627 54.628H480c17.673 0 32-14.327 32-32V32.015c0-28.475-34.564-42.691-54.627-22.628zM480 160H352L480 32v128zm11.699 96h-10.014c-6.353 0-11.647 4.949-11.977 11.293C463.84 380.203 370.504 470 256 470c-47.525 0-91.468-15.509-127.016-41.757l53.612-53.616c20.099-20.1 5.855-54.627-22.627-54.627H32c-17.673 0-32 14.327-32 32v127.978c0 28.614 34.615 42.641 54.627 22.627l50.092-50.096C146.587 484.788 199.046 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507zM32 480V352h128L32 480z',
                    viewBox: '0 0 512 512'
                }}
    />
 */
var IconTypes;
(function (IconTypes) {
    IconTypes["plus"] = "plus";
    IconTypes["spinner"] = "spinner";
    IconTypes["cog"] = "cog";
    IconTypes["editLight"] = "edit-light";
    IconTypes["pencilLight"] = "pencil-light";
    IconTypes["pencilRegular"] = "pencil-regular";
    IconTypes["pencilSolid"] = "pencil-solid";
    IconTypes["syncLight"] = "sync-light";
    IconTypes["syncRegular"] = "sync-regular";
    IconTypes["syncSolid"] = "sync-solid";
})(IconTypes = exports.IconTypes || (exports.IconTypes = {}));
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Icon.prototype.render = function () {
        var icon = this.props.icon;
        var defaultStyles = {
            root: {
                height: 30,
                width: 'auto',
                strokeWidth: 3
            }
        };
        var oSvg = (typeof icon === 'string') ? Icon_fn_1.Icons[icon] : icon;
        var styles = Object.assign({}, defaultStyles, this.props.styles);
        var rotate = this.props.rotate ? css.rotate : '';
        return (React.createElement("svg", { className: rotate, style: styles.root, xmlns: "http://www.w3.org/2000/svg", viewBox: oSvg.viewBox },
            React.createElement("path", { d: oSvg.svgCode })));
    };
    return Icon;
}(React.Component));
exports["default"] = Icon;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,6BAA+B;AAC/B,gCAAkC;AAClC,qCAAkC;AAElC;;;;;;;;;;;GAWG;AAEH,IAAY,SAWX;AAXD,WAAY,SAAS;IACjB,0BAAa,CAAA;IACb,gCAAmB,CAAA;IACnB,wBAAW,CAAA;IACX,qCAAwB,CAAA;IACxB,yCAA4B,CAAA;IAC5B,6CAAgC,CAAA;IAChC,yCAA4B,CAAA;IAC5B,qCAAwB,CAAA;IACxB,yCAA4B,CAAA;IAC5B,qCAAwB,CAAA;AAC5B,CAAC,EAXW,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAWpB;AAmBD;IAAkC,wBAAqC;IACnE,cAAY,KAAgB;QAA5B,YACI,kBAAM,KAAK,CAAC,SAIf;QAFG,KAAI,CAAC,KAAK,GAAG,EACZ,CAAA;;IACL,CAAC;IAED,qBAAM,GAAN;QACU,IAAA,sBAAI,CAAgB;QAC1B,IAAI,aAAa,GAAe;YAC5B,IAAI,EAAE;gBACF,MAAM,EAAC,EAAE;gBACT,KAAK,EAAC,MAAM;gBACZ,WAAW,EAAE,CAAC;aACjB;SACJ,CAAA;QAED,IAAI,IAAI,GAAG,CAAC,OAAO,IAAI,KAAK,QAAQ,CAAC,CAAC,CAAC,CAAC,eAAK,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC;QAE3D,IAAI,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,EAAE,EAAE,aAAa,EAAE,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC;QACjE,IAAI,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC;QACjD,OAAO,CACH,6BAAK,SAAS,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM,CAAC,IAAI,EAAE,KAAK,EAAC,4BAA4B,EAAC,OAAO,EAAE,IAAI,CAAC,OAAO;YAChG,8BAAM,CAAC,EAAE,IAAI,CAAC,OAAO,GAAG,CACtB,CACT,CAAC;IACN,CAAC;IACL,WAAC;AAAD,CAAC,AA5BD,CAAkC,KAAK,CAAC,SAAS,GA4BhD"}
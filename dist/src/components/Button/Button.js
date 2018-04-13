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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleHover = function () {
            var hovering = _this.state.hovering;
            _this.setState({ hovering: !hovering });
        };
        _this.onClick = function () {
            _this.props.onClick();
        };
        _this.state = {
            hovering: false
        };
        return _this;
    }
    Button.prototype.render = function () {
        var defaultStyles = {
            root: {
                padding: '10px'
            },
            hovering: {
                background: 'red'
            }
        };
        var styles = Object.assign({}, defaultStyles, this.props.styles);
        var parentStyles = this.state.hovering ? __assign({}, styles.root, styles.hovering) : __assign({}, styles.root);
        return (React.createElement("button", { type: "button", className: "btn btn-default", style: __assign({}, parentStyles), onClick: this.onClick, onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover }, this.props.children));
    };
    return Button;
}(React.Component));
exports["default"] = Button;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAAA,6BAA+B;AA6B/B;IAAoC,0BAAyC;IAC3E,gBAAY,KAAkB;QAA9B,YACE,kBAAM,KAAK,CAAC,SAKb;QAEC,iBAAW,GAAG;YACV,IAAI,QAAQ,GAAG,KAAI,CAAC,KAAK,CAAC,QAAQ,CAAC;YACnC,KAAI,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAC,CAAC,QAAQ,EAAC,CAAC,CAAC;QACxC,CAAC,CAAA;QAED,aAAO,GAAG;YACN,KAAI,CAAC,KAAK,CAAC,OAAO,EAAE,CAAC;QACzB,CAAC,CAAA;QAZG,KAAI,CAAC,KAAK,GAAG;YACT,QAAQ,EAAE,KAAK;SAClB,CAAA;;IACP,CAAC;IAWC,uBAAM,GAAN;QAEI,IAAI,aAAa,GAAiB;YAC9B,IAAI,EAAE;gBACF,OAAO,EAAE,MAAM;aAClB;YACD,QAAQ,EAAE;gBACN,UAAU,EAAE,KAAK;aACpB;SACJ,CAAA;QAED,IAAI,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,EAAE,EAAE,aAAa,EAAE,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC;QAEjE,IAAI,YAAY,GAAG,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,CAAC,cAAK,MAAM,CAAC,IAAI,EAAK,MAAM,CAAC,QAAQ,EAAE,CAAC,cAAK,MAAM,CAAC,IAAI,CAAC,CAAC;QAEjG,OAAO,CACH,gCACA,IAAI,EAAC,QAAQ,EACb,SAAS,EAAC,iBAAiB,EAC3B,KAAK,eAAM,YAAY,GAAG,OAAO,EAAE,IAAI,CAAC,OAAO,EAC/C,YAAY,EAAE,IAAI,CAAC,WAAW,EAC9B,YAAY,EAAE,IAAI,CAAC,WAAW,IAC1B,IAAI,CAAC,KAAK,CAAC,QAAQ,CACd,CACZ,CAAC;IACN,CAAC;IACL,aAAC;AAAD,CAAC,AA5CD,CAAoC,KAAK,CAAC,SAAS,GA4ClD"}
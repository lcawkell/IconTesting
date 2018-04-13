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
var Textbox = /** @class */ (function (_super) {
    __extends(Textbox, _super);
    function Textbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Textbox.prototype.render = function () {
        var _a = this.props, label = _a.label, placeholder = _a.placeholder;
        return (React.createElement("div", null,
            React.createElement("div", { className: "label" }, label),
            React.createElement("input", { placeholder: placeholder || "" })));
    };
    return Textbox;
}(React.Component));
exports["default"] = Textbox;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,6BAA+B;AAkB/B;IAAqC,2BAA2C;IAC9E,iBAAY,KAAmB;QAA/B,YACE,kBAAM,KAAK,CAAC,SAIb;QAFK,KAAI,CAAC,KAAK,GAAG,EACZ,CAAA;;IACP,CAAC;IAED,wBAAM,GAAN;QACM,IAAA,eAAiC,EAAhC,gBAAK,EAAE,4BAAW,CAAe;QACtC,OAAO,CACL;YACE,6BAAK,SAAS,EAAC,OAAO,IAAE,KAAK,CAAO;YACpC,+BAAO,WAAW,EAAE,WAAW,IAAE,EAAE,GAAI,CACnC,CACP,CAAC;IACJ,CAAC;IACH,cAAC;AAAD,CAAC,AAjBD,CAAqC,KAAK,CAAC,SAAS,GAiBnD"}
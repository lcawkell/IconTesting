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
var Textbox = /** @class */ (function (_super) {
    __extends(Textbox, _super);
    function Textbox(props) {
        var _this = _super.call(this, props) || this;
        _this.SetValue = function (caller) {
            _this.setState({ value: caller.target.value });
        };
        _this.OnChange = function (caller) {
            _this.props.onChange(caller.target.value);
        };
        _this.ToggleFocusing = function () {
            var focusing = _this.state.focusing;
            _this.setState({ focusing: !focusing });
        };
        _this.BlurInput = function () {
            var focusing = _this.state.focusing;
            _this.setState({ focusing: false });
        };
        _this.state = {
            value: '',
            focusing: false
        };
        return _this;
    }
    Textbox.prototype.render = function () {
        var _a = this.props, label = _a.label, placeholder = _a.placeholder, labelFixed = _a.labelFixed;
        var focusing = this.state.focusing;
        var value, onChange;
        if ((this.props.value !== undefined && this.props.value !== null) && (this.props.onChange !== undefined && this.props.onChange !== null)) {
            value = this.props.value;
            onChange = this.OnChange;
        }
        else {
            value = this.state.value;
            onChange = this.SetValue;
        }
        var styles = {
            root: {
                marginTop: 20,
                background: 'transparent',
                border: 'none',
                width: '100%',
                boxShadow: '0px 1px 0px #009',
                fontSize: 19,
                outline: 'none'
            },
            container: {
                fontFamily: "Arial, Helvetica, sans-serif",
                width: 300,
                position: "relative",
                margin: '5px 0px'
            },
            label: {
                transition: 'all .2s',
                position: 'absolute',
                zIndex: -1
            },
            "default": {
                top: 5,
                left: 0,
                fontSize: 12
            },
            overlay: {
                top: 25,
                left: 0
            },
            inputFocus: {
                boxShadow: '0px 2px 0px #007'
            }
        };
        var labelStyles;
        if (labelFixed) {
            labelStyles = __assign({}, styles.label, styles["default"]);
        }
        else {
            labelStyles = focusing ? __assign({}, styles.label, styles["default"]) : value.length < 1 ? __assign({}, styles.label, styles.overlay) : __assign({}, styles.label, styles["default"]);
        }
        var inputStyles = focusing ? __assign({}, styles.inputFocus) : {};
        return (React.createElement("div", { style: __assign({}, styles.container) },
            React.createElement("span", { className: "label", style: labelStyles }, label),
            React.createElement("input", { style: __assign({}, styles.root, inputStyles), value: value, onFocus: this.ToggleFocusing, onBlur: this.BlurInput, onChange: onChange })));
    };
    return Textbox;
}(React.Component));
exports["default"] = Textbox;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}
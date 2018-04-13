"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Icon_1 = require("./Icon");
var Enzyme = require("enzyme");
var EnzymeAdapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new EnzymeAdapter() });
var control;
beforeEach(function () {
});
describe('Icon', function () {
    describe("Passing in an icon as text", function () {
        control = enzyme_1.mount(React.createElement(Icon_1["default"], { icon: "plus" }));
        it("Renders a containing svg", function () {
            expect(control.find('svg').length).toBe(1);
        });
    });
    describe("Passing in an icon with interface suggestions", function () {
        control = enzyme_1.mount(React.createElement(Icon_1["default"], { icon: Icon_1.IconTypes.pencilSolid }));
        it("Renders a containing svg", function () {
            expect(control.find('svg').length).toBe(1);
        });
    });
    describe("Passing in an icon using svg data", function () {
        control = enzyme_1.mount(React.createElement(Icon_1["default"], { icon: {
                svgCode: 'M457.373 9.387l-50.095 50.102C365.411 27.211 312.953 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h10.015c6.352 0 11.647-4.949 11.977-11.293C48.159 131.913 141.389 42 256 42c47.554 0 91.487 15.512 127.02 41.75l-53.615 53.622c-20.1 20.1-5.855 54.628 22.627 54.628H480c17.673 0 32-14.327 32-32V32.015c0-28.475-34.564-42.691-54.627-22.628zM480 160H352L480 32v128zm11.699 96h-10.014c-6.353 0-11.647 4.949-11.977 11.293C463.84 380.203 370.504 470 256 470c-47.525 0-91.468-15.509-127.016-41.757l53.612-53.616c20.099-20.1 5.855-54.627-22.627-54.627H32c-17.673 0-32 14.327-32 32v127.978c0 28.614 34.615 42.641 54.627 22.627l50.092-50.096C146.587 484.788 199.046 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507zM32 480V352h128L32 480z',
                viewBox: '0 0 512 512'
            } }));
        it("Renders a containing svg", function () {
            expect(control.find('svg').length).toBe(1);
        });
    });
});
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,6BAA+B;AAC/B,iCAAwD;AAExD,+BAAuC;AAEvC,+BAAiC;AACjC,uDAAyD;AAEzD,MAAM,CAAC,SAAS,CAAC,EAAC,OAAO,EAAC,IAAI,aAAa,EAAE,EAAC,CAAC,CAAA;AAE/C,IAAI,OAAW,CAAC;AAChB,UAAU,CAAC;AAEX,CAAC,CAAC,CAAC;AAEH,QAAQ,CAAC,MAAM,EAAE;IAEb,QAAQ,CAAC,4BAA4B,EAAE;QACnC,OAAO,GAAG,cAAK,CAAC,oBAAC,iBAAI,IAAC,IAAI,EAAC,MAAM,GAAG,CAAC,CAAC;QAEtC,EAAE,CAAC,0BAA0B,EAAE;YAC3B,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;QAC/C,CAAC,CAAC,CAAC;IAEP,CAAC,CAAC,CAAC;IAEH,QAAQ,CAAC,+CAA+C,EAAE;QACtD,OAAO,GAAG,cAAK,CAAC,oBAAC,iBAAI,IAAC,IAAI,EAAE,gBAAS,CAAC,WAAW,GAAI,CAAC,CAAC;QACvD,EAAE,CAAC,0BAA0B,EAAE;YAC3B,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;QAC/C,CAAC,CAAC,CAAC;IACP,CAAC,CAAC,CAAC;IAEH,QAAQ,CAAC,mCAAmC,EAAE;QAC1C,OAAO,GAAG,cAAK,CAAC,oBAAC,iBAAI,IACD,IAAI,EAAE;gBACF,OAAO,EAAE,qyBAAqyB;gBAC9yB,OAAO,EAAE,aAAa;aACzB,GACH,CAAC,CAAC;QACpB,EAAE,CAAC,0BAA0B,EAAE;YAC3B,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;QAC/C,CAAC,CAAC,CAAC;IACP,CAAC,CAAC,CAAC;AAEP,CAAC,CAAC,CAAC"}
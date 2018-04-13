"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Textbox_1 = require("./Textbox");
var Enzyme = require("enzyme");
var EnzymeAdaptor = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new EnzymeAdaptor() });
var control;
var label = "First Name";
beforeEach(function () {
    control = enzyme_1.shallow(React.createElement(Textbox_1["default"], { label: label, placeholder: "Enter first name" }));
});
describe("Textbox", function () {
    it("Displays a label div", function () {
        expect(control.find('div.label').length).toBe(1);
    });
    it("Displays the given text in the label div", function () {
        expect(control.find('div.label').text()).toBe(label);
    });
});
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,6BAA+B;AAC/B,iCAAiD;AAEjD,qCAAgC;AAEhC,+BAAiC;AACjC,uDAAyD;AAEzD,MAAM,CAAC,SAAS,CAAC,EAAC,OAAO,EAAC,IAAI,aAAa,EAAE,EAAC,CAAC,CAAC;AAEhD,IAAI,OAA4C,CAAC;AACjD,IAAI,KAAK,GAAU,YAAY,CAAC;AAEhC,UAAU,CAAC;IACP,OAAO,GAAG,gBAAO,CAAC,oBAAC,oBAAO,IAAC,KAAK,EAAE,KAAK,EAAE,WAAW,EAAC,kBAAkB,GAAG,CAAC,CAAC;AAChF,CAAC,CAAC,CAAC;AAEH,QAAQ,CAAC,SAAS,EAAC;IACf,EAAE,CAAC,sBAAsB,EAAE;QACvB,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;IACrD,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,0CAA0C,EAAE;QAC3C,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC,IAAI,EAAE,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;IACzD,CAAC,CAAC,CAAA;AACN,CAAC,CAAC,CAAA"}
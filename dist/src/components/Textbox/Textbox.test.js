"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Textbox_1 = require("./Textbox");
var Enzyme = require("enzyme");
var EnzymeAdaptor = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new EnzymeAdaptor() });
var control;
var controlControlled;
var controlNoPlaceholder;
var label = "First Name";
var placeholder = "Enter first name";
var textBoxValue = "Some Value";
var textBoxValueUpdate = "A totally different value";
var onChange = jest.fn();
beforeEach(function () {
    control = enzyme_1.shallow(React.createElement(Textbox_1["default"], { label: label, placeholder: placeholder }));
    controlControlled = enzyme_1.mount(React.createElement(Textbox_1["default"], { label: label, placeholder: placeholder, value: textBoxValue, onChange: onChange }));
    controlNoPlaceholder = enzyme_1.shallow(React.createElement(Textbox_1["default"], { label: label }));
});
describe("Textbox", function () {
    it("Displays a label div", function () {
        expect.assertions(2);
        expect(control.find('span.label').length).toBe(1);
        expect(controlControlled.find('span.label').length).toBe(1);
    });
    it("Displays the given label in the label div", function () {
        expect.assertions(2);
        expect(control.find('span.label').text()).toBe(label);
        expect(controlControlled.find('span.label').text()).toBe(label);
    });
    it("(Controlled) Display the given value", function () {
        expect(controlControlled.find('input').prop('value')).toBe(textBoxValue);
    });
    it("(Controlled) Gives a new value on input change", function () {
        expect.assertions(2);
        var input = controlControlled.find('input');
        expect(input.prop('value')).toBe(textBoxValue);
        input.simulate('focus');
        input.simulate('change', { target: { value: textBoxValueUpdate } });
        expect(onChange.mock.calls[0][0]).toBe(textBoxValueUpdate);
    });
    // Placeholder not working yet.
    // it("Displays a placeholder equal to the given placeholder", ()=>{
    //     expect(control.find('input').prop('placeholder')).toBe(placeholder);
    // });
    // it("Displays no placeholder when none is given", ()=>{
    //     expect(controlNoPlaceholder.find('input').prop('placeholder')).toBe("");
    // });
});
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}
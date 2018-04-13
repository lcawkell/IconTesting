import * as React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';

import Textbox from './Textbox';

import * as Enzyme from 'enzyme';
import * as EnzymeAdaptor from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdaptor()});

let control:ShallowWrapper<undefined, undefined>;
let controlControlled;
let controlNoPlaceholder:ShallowWrapper<undefined, undefined>;

let label:string = "First Name";
let placeholder:string = "Enter first name";
let textBoxValue = "Some Value";
let textBoxValueUpdate = "A totally different value";
let onChange = jest.fn();


beforeEach(()=>{
    control = shallow(<Textbox label={label} placeholder={placeholder} />);
    controlControlled = mount(<Textbox label={label} placeholder={placeholder} value={textBoxValue} onChange={onChange} />);
    controlNoPlaceholder = shallow(<Textbox label={label}/>);
});

describe("Textbox",()=>{
    it("Displays a label div", ()=>{
        expect.assertions(2);
        expect(control.find('span.label').length).toBe(1);
        expect(controlControlled.find('span.label').length).toBe(1);
    });

    it("Displays the given label in the label div", ()=>{
        expect.assertions(2);
        expect(control.find('span.label').text()).toBe(label);
        expect(controlControlled.find('span.label').text()).toBe(label);
    })

    it("(Controlled) Display the given value", ()=>{
        expect(controlControlled.find('input').prop('value')).toBe(textBoxValue);
    });

    it("(Controlled) Gives a new value on input change", ()=>{
        expect.assertions(2);
        let input = controlControlled.find('input');
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
})
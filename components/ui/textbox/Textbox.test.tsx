import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Textbox from './Textbox';

import * as Enzyme from 'enzyme';
import * as EnzymeAdaptor from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdaptor()});

let control:ShallowWrapper<undefined, undefined>;
let label:string = "First Name";

beforeEach(()=>{
    control = shallow(<Textbox label={label} placeholder="Enter first name" />);
});

describe("Textbox",()=>{
    it("Displays a label div", ()=>{
        expect(control.find('div.label').length).toBe(1);
    });

    it("Displays the given text in the label div", ()=>{
        expect(control.find('div.label').text()).toBe(label);
    })
})
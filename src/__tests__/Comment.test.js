import React from 'react';
import { shallow, mount } from "enzyme";

import Comment from "../components/Comment";

let instance;

beforeEach(() => {
  instance = shallow(<Comment />);
}) 

it("has a text area and a button", () => {
  expect(instance.find("textarea").length).toEqual(1);
  expect(instance.find("button").length).toEqual(1);
})

describe('textarea input test', ()=> {

  beforeEach(() => {
    instance = mount(<Comment />);
    instance.find('textarea').simulate('change', {target: {value:'new comment'}});
    instance.update();
  }) 
  
  afterEach(()=> {
    instance.unmount();
  })

  it("has a text area that a user can type to", () => {
    expect(instance.find('textarea').prop('value')).toEqual('new comment');
  })
  
  it("clears the text area when the form is submitted", () => {
    instance.find('form').simulate('submit');
    instance.update(); 
    expect(instance.find('textarea').prop('value')).toEqual('');
  })

})



import React from 'react';
import { shallow } from "enzyme";

import App from "../components/App";
import Comment from "../components/Comment";



let instance;
beforeEach(() => {
  instance = shallow(<App />);
}) 

it("renders a comment box", () => {
  expect(instance.find(Comment).length).toEqual(1);
})


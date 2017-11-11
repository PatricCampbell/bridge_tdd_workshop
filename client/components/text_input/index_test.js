import React from "react";
import { shallow, render } from "enzyme";

import TextInput from "./index";

describe("<TextInput />", () => {
  it("renders an input and a button", () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("has placeholder text", () => {
    const wrapper = shallow(<TextInput placeholder="placeholder!" />);
    expect(wrapper.instance().props.placeholder).toEqual("placeholder!");
  });

  it("renders with a class of red with more than 10 chars", () => {
    const wrapper = shallow(<TextInput placeholder="placeholder!" />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "jadkajsdkasjdkasjdasd" } });
    expect(wrapper.find("input").hasClass("red")).toEqual(true);
  });

  it("renders without red class with less than 10 chars", () => {
    const wrapper = shallow(<TextInput placeholder="placeholder!" />);
    wrapper.setState({
      text: "food",
    });
    expect(wrapper.find("input").hasClass("red")).toEqual(false);
  });
});

import React from "react";
import { shallow, render } from "enzyme";

import TextInput from "./index";

describe("<TextInput />", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<TextInput placeholder="placeholder!" />);
  });

  it("renders an input and a button", () => {
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("has placeholder text", () => {
    expect(wrapper.instance().props.placeholder).toEqual("placeholder!");
  });

  it("renders with a class of red with more than 10 chars", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { value: "jadkajsdkasjdkasjdasd" } });
    expect(wrapper.find("input").hasClass("red")).toEqual(true);
  });

  it("renders without red class with less than 10 chars", () => {
    wrapper.setState({
      text: "food",
    });
    expect(wrapper.find("input").hasClass("red")).toEqual(false);
  });

  it("renders without red class with exactly 10 chars", () => {
    wrapper.setState({
      text: "0123456789",
    });
    expect(wrapper.find("input").hasClass("red")).toEqual(false);
  });

  it("adds a p tag with the value of the text input", () => {
    wrapper.setState({
      text: "wooooooooo",
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("wooooooooo");
  });
});

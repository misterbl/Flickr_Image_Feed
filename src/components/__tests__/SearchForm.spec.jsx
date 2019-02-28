import * as React from "react";
import { shallow } from "enzyme";
import SearchForm from "../SearchForm";

describe("SearchForm", () => {
  const props = {
    setFieldValue: jest.fn(),
    values: {
      searchByTags: ""
    }
  };
  const wrapper = shallow(<SearchForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls setFieldValue on input change", () => {
    wrapper.find("input").simulate("change", { target: { value: "value" } });
    expect(props.setFieldValue).toHaveBeenCalled();
  });
});

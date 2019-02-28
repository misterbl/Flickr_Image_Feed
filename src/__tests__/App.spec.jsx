import React from "react";
import { ClipLoader } from "react-spinners";
import { shallow } from "enzyme";
import { App } from "../App";

describe("App", () => {
  const props = {
    fetchingData: false
  };
  const wrapper = shallow(<App {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe("conditional rendering", () => {
    describe("fetchingData", () => {
      it("does not render a loading spinner when fetchingData: false", () => {
        expect(wrapper.find(ClipLoader)).toHaveLength(0);
      });
      it("renders a loading spinner when fetchingData: true", () => {
        wrapper.setProps({
          fetchingData: true
        });
        expect(wrapper.find(ClipLoader)).toHaveLength(1);
      });
    });
  });
});

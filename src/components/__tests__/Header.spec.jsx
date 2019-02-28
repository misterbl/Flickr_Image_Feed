import * as React from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import formikRenderMock from "../../testMocks/formikRender.mock";

describe("Header", () => {
  const props = {
    ...formikRenderMock,
    values: {
      searchByTags: ""
    },
    getflickrFeedByTags: jest.fn()
  };
  const wrapper = shallow(<Header {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

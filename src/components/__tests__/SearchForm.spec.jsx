import * as React from "react";
import { shallow } from "enzyme";
import SearchForm from "../SearchForm";
import formikRenderMock from "../../testMocks/formikRender.mock";

describe("SearchForm", () => {
  const props = {
    ...formikRenderMock,
    values: {
      searchByTags: ""
    }
  };
  const wrapper = shallow(<SearchForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

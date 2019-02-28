import * as React from "react";
import { shallow } from "enzyme";
import { Home } from "../Home";
import generateAppState from "../../testMocks/appState.mock";

describe("Home", () => {
  const state = generateAppState();
  const props = {
    flickrFeedItems: state.api.flickrFeedItems,
    getflickrFeed: jest.fn(),
    fetchingData: false
  };

  const wrapper = shallow(<Home {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

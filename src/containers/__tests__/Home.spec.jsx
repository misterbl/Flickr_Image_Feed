import * as React from "react";
import { shallow } from "enzyme";
import { Home } from "../Home";
import generateAppState from "../../testMocks/appState.mock";

describe("Home", () => {
  const state = generateAppState();
  const props = {
    flickrFeedItems: state.api.feed.flickrFeed.items,
    getFlickrFeed: jest.fn(),
    fetchingData: false
  };

  const wrapper = shallow(<Home {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe("conponentDidMount", () => {
    it("doesn't call getFlickrFeed if flickrFeedItems is not null", () => {
      wrapper.instance();
      expect(props.getFlickrFeed).not.toHaveBeenCalled();
    });
    it("calls getFlickrFeed if flickrFeedItems null", () => {
      const newProps = { ...props, flickrFeedItems: null };
      const newWrapper = shallow(<Home {...newProps} />);
      newWrapper.instance();
      expect(newProps.getFlickrFeed).toHaveBeenCalled();
    });
    it("renders the FlickrCard if flickrFeedItems is not null", () => {
      const flickrCard = wrapper.find("FlickrCard");
      expect(flickrCard.length).toEqual(1);
    });
    it("doesn't render the FlickrCard but a h1 tag if ForumData is null", () => {
      const newProps = { ...props, flickrFeedItems: null };
      const newWrapper = shallow(<Home {...newProps} />);
      const flickrCard = newWrapper.find("FlickrCard");
      expect(flickrCard.length).toEqual(0);
    });
  });
});

import * as React from "react";
import { shallow } from "enzyme";
import { Home } from "../Home";

describe("Home", () => {
  const props = {
    flickrFeedItems: [
      {
        media: {
          m: "mediaTest",
          title: "titleTest",
          author: "authorTest",
          author_id: "123",
          link: "linkTest",
          description: "descriptionTest",
          tags: "tagsTest"
        }
      }
    ],
    fetchingFlickrFeed: false,
    getflickrFeed: jest.fn(),
    getflickrFeedByTags: jest.fn()
  };

  const wrapper = shallow(<Home {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import * as React from "react";
import { shallow } from "enzyme";
import { App } from "../App";

describe("App", () => {
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

  const wrapper = shallow(<App {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

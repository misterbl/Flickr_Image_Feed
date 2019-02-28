import * as React from "react";
import { shallow } from "enzyme";
import FlickrCard from "../FlickrCard";

describe("FlickrCard", () => {
  const props = {
    image: "imageTest",
    title: "titleTest",
    author: "authorTest",
    author_id: "123Test",
    link: "linkTest",
    description: "descriptionTest",
    tags: "tagsTest"
  };

  const wrapper = shallow(<FlickrCard {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

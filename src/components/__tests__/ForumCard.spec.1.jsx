import * as React from "react";
import { shallow } from "enzyme";
import ForumCard from "../ForumCard";

describe("ForumCard", () => {
  const props = {
    title: "titleTest",
    author: "authorTest",
    author_id: "123Test",
    link: "linkTest",
    description: "descriptionTest"
  };

  const wrapper = shallow(<ForumCard {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

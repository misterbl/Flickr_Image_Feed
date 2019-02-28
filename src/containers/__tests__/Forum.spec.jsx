import * as React from "react";
import { shallow } from "enzyme";
import { Forum } from "../Forum";
import generateAppState from "../../testMocks/appState.mock";

describe("Forum", () => {
  const state = generateAppState();
  const props = {
    forumData: state.api.feed.flickrForum,
    getForumFeed: jest.fn()
  };

  const wrapper = shallow(<Forum {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the ForumCard if ForumData is not null", () => {
    const forumCard = wrapper.find("ForumCard");
    expect(forumCard.length).toEqual(1);
  });
  it("doesn't render the ForumCard but a h1 tag if ForumData is null", () => {
    const newProps = { ...props, forumData: null };
    const newWrapper = shallow(<Forum {...newProps} />);
    const forumCard = newWrapper.find("ForumCard");
    const h1 = newWrapper.find("h1");
    expect(forumCard.length).toEqual(0);
    expect(h1.length).toEqual(1);
  });
  describe("conponentDidMount", () => {
    it("calls getForumFeed", () => {
      wrapper.instance();
      expect(props.getForumFeed).toHaveBeenCalled();
    });
  });
});

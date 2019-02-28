import * as React from "react";
import { shallow } from "enzyme";
import { Header } from "../Header";
import historyMock from "../../testMocks/history.mock";
import ROUTES from "../../const/route";

describe("Header", () => {
  const props = {
    values: {
      searchByTags: ""
    },
    getFlickrFeedByTags: jest.fn(),
    getForumFeed: jest.fn(),
    history: historyMock
  };
  const wrapper = shallow(<Header {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls getFlickrFeedByTags on submitting the form", () => {
    wrapper.find("Formik").simulate("submit", { searchByTags: "tags" });
    expect(props.getFlickrFeedByTags).toHaveBeenCalledWith("tags");
  });
  it("calls history.push on submitting the form", () => {
    wrapper.find("Formik").simulate("submit", { searchByTags: "tags" });
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.INDEX);
  });
  it("calls history.push on clicking the button 'flickr", () => {
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.INDEX);
  });
  it("calls getForumFeed on clicking the button 'Forum", () => {
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(props.getForumFeed).toHaveBeenCalled();
  });
  it("calls history.push on clicking the button 'Forum", () => {
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(props.history.push).toHaveBeenCalledWith(ROUTES.FORUM);
  });
});

import generateAppState from "../../testMocks/appState.mock";
import * as apiSelectors from "../apiSelectors";

describe("apiSelectors", () => {
  const state = generateAppState();
  describe("getFlickrFeedItems", () => {
    it("should return the flickr feed", () => {
      const actual = apiSelectors.getFlickrFeedItems(state);
      expect(actual).toEqual(state.api.feed.flickrFeed.items);
    });
  });
  describe("fetchingData", () => {
    it("should return false", () => {
      const actual = apiSelectors.fetchingData(state);
      expect(actual).toEqual(false);
    });
  });
  describe("getForumData", () => {
    it("should return the forum feed", () => {
      const actual = apiSelectors.getForumData(state);
      expect(actual).toEqual(state.api.feed.flickrForum);
    });
  });
});

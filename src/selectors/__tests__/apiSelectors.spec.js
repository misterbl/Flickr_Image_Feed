import generateAppState from "../../testMocks/appState.mock";
import * as apiSelectors from "../apiSelectors";

describe("apiSelectors", () => {
  const state = generateAppState();

  describe("getflickrFeedItems", () => {
    it("should return the flickr feed", () => {
      const actual = apiSelectors.getflickrFeedItems(state);
      expect(actual).toEqual(state.api.feed.flickrFeed.items);
    });
  });

  describe("fetchingFlickrFeed", () => {
    it("should return false", () => {
      const actual = apiSelectors.fetchingFlickrFeed(state);
      expect(actual).toEqual(false);
    });
  });
});

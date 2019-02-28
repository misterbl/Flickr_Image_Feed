import * as apiActions from "../actionCreators/apiActions";

describe("apiActions", () => {
  describe("saveflickrFeed", () => {
    it("should save the flickr feed", () => {
      const actual = apiActions.saveflickrFeed("flickrFeed");
      expect(actual).toEqual({
        type: "SAVE_FLICKR_FEED",
        flickrFeed: "flickrFeed"
      });
    });
  });
  describe("fetchingFlickrFeed === true", () => {
    it("should return if true for fetchingFlickrFeed if the app is fecthcing the flickr feed", () => {
      const actual = apiActions.fetchingFlickrFeed(true);
      expect(actual).toEqual({
        type: "FETCHING_FLICKR_FEED",
        fetchingFlickrFeed: true
      });
    });
  });
  describe("fetchingFlickrFeed === false", () => {
    it("should return if true for fetchingFlickrFeed if the app is NOT fecthcing the flickr feed", () => {
      const actual = apiActions.fetchingFlickrFeed(false);
      expect(actual).toEqual({
        type: "FETCHING_FLICKR_FEED",
        fetchingFlickrFeed: false
      });
    });
  });
});

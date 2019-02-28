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
  describe("fetchingData === true", () => {
    it("should return if true for fetchingData if the app is fecthcing the flickr feed", () => {
      const actual = apiActions.fetchingData(true);
      expect(actual).toEqual({
        type: "FETCHING_FLICKR_FEED",
        fetchingData: true
      });
    });
  });
  describe("fetchingData === false", () => {
    it("should return if true for fetchingData if the app is NOT fecthcing the flickr feed", () => {
      const actual = apiActions.fetchingData(false);
      expect(actual).toEqual({
        type: "FETCHING_FLICKR_FEED",
        fetchingData: false
      });
    });
  });
  describe("saveflickrForum", () => {
    it("should save the forum feed", () => {
      const actual = apiActions.saveflickrForum("flickrForum");
      expect(actual).toEqual({
        type: "FETCHING_FLICKR_FORUM",
        flickrForum: "flickrForum"
      });
    });
  });
});

import fetchJsonp from "fetch-jsonp";
import {
  getFlickrFeed,
  getFlickrFeedByTags,
  getForumFeed
} from "../thunks/apiThunk";
// import config from "../../../config";
// import generateAppState from "../../../testMocks/appState.mock";
import {
  saveflickrFeed,
  saveflickrForum,
  fetchingData
} from "../actionCreators/apiActions.js";

jest.mock("fetch-jsonp");
describe("API thunks", () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
  });
  describe("getFlickrFeed", () => {
    it("call dispatches fetchingData action with true", () => {
      getFlickrFeed()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        fetchingData: true,
        type: "FETCHING_FLICKR_FEED"
      });
    });
    it("calls fetchJsonp", () => {
      getFlickrFeed()(dispatch);
      expect(fetchJsonp).toHaveBeenCalled();
    });
    it("dispatches saveflickrFeed action", async () => {
      const jsonObject = { a: 1, b: 2 };
      fetchJsonp.mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(jsonObject), ok: true })
      );
      await getFlickrFeed()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(saveflickrFeed(jsonObject));
    });
    it("dispatches fetchingData action with false", async () => {
      await getFlickrFeed()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        fetchingData: false,
        type: "FETCHING_FLICKR_FEED"
      });
    });
  });
  describe("getFlickrFeedByTags", () => {
    it("call dispatches fetchingData action", () => {
      getFlickrFeedByTags()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        fetchingData: true,
        type: "FETCHING_FLICKR_FEED"
      });
    });
    it("calls fetchJsonp", () => {
      getFlickrFeedByTags()(dispatch);
      expect(fetchJsonp).toHaveBeenCalled();
    });
    it("dispatches saveflickrFeed action", async () => {
      const jsonObject = { a: 1, b: 2 };
      fetchJsonp.mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(jsonObject), ok: true })
      );
      await getFlickrFeedByTags()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(saveflickrFeed(jsonObject));
    });
    it("dispatches fetchingData action with false", async () => {
      await getFlickrFeedByTags()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        fetchingData: false,
        type: "FETCHING_FLICKR_FEED"
      });
    });
  });
  describe("getForumFeed", () => {
    it("call dispatches fetchingData action", () => {
      getForumFeed()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        fetchingData: true,
        type: "FETCHING_FLICKR_FEED"
      });
    });
    it("calls fetchJsonp", () => {
      getForumFeed()(dispatch);
      expect(fetchJsonp).toHaveBeenCalled();
    });
    it("dispatches saveflickrForum action", async () => {
      const jsonObject = { a: 1, b: 2 };
      fetchJsonp.mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(jsonObject), ok: true })
      );
      await getForumFeed()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(saveflickrForum(jsonObject));
    });
    it("dispatches fetchingData action with false", async () => {
      await getForumFeed()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        fetchingData: false,
        type: "FETCHING_FLICKR_FEED"
      });
    });
  });
});

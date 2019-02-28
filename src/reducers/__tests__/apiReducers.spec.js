import * as apiReducers from "../apiReducers";
import {
  fetchingFlickrFeed,
  saveflickrFeed
} from "../../actions/actionCreators/apiActions";
import generateAppState from "../../testMocks/appState.mock";

describe("apiReducers", () => {
  const state = generateAppState();

  describe("feed", () => {
    it(`when called with ${"SAVE_FLICKR_FEED"} it should update the flickr feed data`, () => {
      const flickrFeed = state.api.feed.flickrFeed;
      const action = saveflickrFeed(flickrFeed);
      expect(apiReducers.feed(flickrFeed, action)).toEqual({
        description: "",
        flickrFeed: {
          description: "",
          generator: "https://www.flickr.com",
          items: [
            {
              media: {
                author: "authorTest",
                author_id: "123",
                description: "descriptionTest",
                link: "linkTest",
                m: "mediaTest",
                tags: "tagsTest",
                title: "titleTest"
              }
            }
          ],
          link: "https://www.flickr.com/photos/",
          modified: "2019-02-28T14:09:16Z",
          title: "Uploads from everyone"
        },
        generator: "https://www.flickr.com",
        items: [
          {
            media: {
              author: "authorTest",
              author_id: "123",
              description: "descriptionTest",
              link: "linkTest",
              m: "mediaTest",
              tags: "tagsTest",
              title: "titleTest"
            }
          }
        ],
        link: "https://www.flickr.com/photos/",
        modified: "2019-02-28T14:09:16Z",
        title: "Uploads from everyone"
      });
    });
    it(`when called with ${"FETCHING_FLICKR_FEED"} it should update the value of fetchingFlickrFeed `, () => {
      const isfetchingFlickrFeed = state.api.feed.fetchingFlickrFeed;
      const action = fetchingFlickrFeed(isfetchingFlickrFeed);
      expect(apiReducers.feed(isfetchingFlickrFeed, action)).toEqual({
        fetchingFlickrFeed: false
      });
    });
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(apiReducers.feed(true, action)).toBe(true);
    });
  });
});

import * as apiReducers from "../apiReducers";
import actionTypes from "../../const/actionTypes";

import {
  fetchingData,
  saveflickrFeed,
  saveflickrForum
} from "../../actions/actionCreators/apiActions";
import generateAppState from "../../testMocks/appState.mock";

describe("apiReducers", () => {
  const state = generateAppState();

  describe("feed", () => {
    it(`when called with ${
      actionTypes.SAVE_FLICKR_FEED
    } it should update the flickr feed data`, () => {
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
    it(`when called with ${
      actionTypes.FETCHING_FLICKR_FEED
    } it should update the value of fetchingData `, () => {
      const isfetchingData = state.api.feed.fetchingData;
      const action = fetchingData(isfetchingData);
      expect(apiReducers.feed(isfetchingData, action)).toEqual({
        fetchingData: false
      });
    });
    it(`when called with ${
      actionTypes.FETCHING_FLICKR_FORUM
    } it should update the value of fetchingData `, () => {
      const flickrForum = state.api.feed.flickrForum;
      const action = saveflickrForum(flickrForum);
      expect(apiReducers.feed(flickrForum, action)).toEqual({
        flickrForum: {
          items: [
            {
              author: "authorTest",
              author_id: "123",
              description: "descriptionTest",
              link: "linkTest",
              title: "titleTest"
            }
          ],
          title: "Flickr forum"
        },
        items: [
          {
            author: "authorTest",
            author_id: "123",
            description: "descriptionTest",
            link: "linkTest",
            title: "titleTest"
          }
        ],
        title: "Flickr forum"
      });
    });
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(apiReducers.feed(true, action)).toBe(true);
    });
  });
});

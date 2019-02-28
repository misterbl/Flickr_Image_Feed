import fetchJsonp from "fetch-jsonp";
import {
  saveflickrFeed,
  saveflickrForum,
  fetchingData
} from "../actionCreators/apiActions";
import config from "../../config";

export const getflickrFeed = () => async dispatch => {
  try {
    dispatch(fetchingData(true));
    const response = await fetchJsonp(config.flickrFeedUri, {
      jsonpCallbackFunction: "jsonFlickrFeed"
    });

    if (response && response.status === 404) {
      throw new Error("couldn't get flickr feed");
    }
    const json = await response.json();
    await dispatch(saveflickrFeed(json));
    dispatch(fetchingData(false));
  } catch (error) {
    throw new Error("couldn't get flickr feed");
  }
};

export const getflickrFeedByTags = tags => async dispatch => {
  try {
    dispatch(fetchingData(true));
    const url = `${config.basePhotoPublicUri}?tags=${("safe",
    tags)}&format=json`;
    const response = await fetchJsonp(url, {
      jsonpCallbackFunction: "jsonFlickrFeed"
    });

    if (response && response.status === 404) {
      throw new Error(`couldn't get flickr feed for the tags: ${tags}`);
    }
    const json = await response.json();
    await dispatch(saveflickrFeed(json));
    dispatch(fetchingData(false));
  } catch (error) {
    throw new Error(`couldn't get flickr feed for the tags: ${tags}`);
  }
};

export const getForumFeed = () => async dispatch => {
  // try {
  dispatch(fetchingData(true));
  const response = await fetchJsonp(config.forumFeedUri, {
    jsonpCallbackFunction: "jsonFlickrFeed"
  });

  if (response && response.status === 404) {
    throw new Error("couldn't get forum feed");
  }
  const json = await response.json();

  await dispatch(saveflickrForum(json));
  dispatch(fetchingData(false));
  // } catch (error) {
  //   throw new Error("couldn't get forum feed");
  // }
};

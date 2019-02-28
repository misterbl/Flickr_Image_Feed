import fetchJsonp from "fetch-jsonp";
import {
  saveflickrFeed,
  fetchingFlickrFeed
} from "../actionCreators/apiActions";

export const getflickrFeed = () => async dispatch => {
  try {
    dispatch(fetchingFlickrFeed(true));
    const url =
      "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
    const response = await fetchJsonp(url, {
      jsonpCallbackFunction: "jsonFlickrFeed"
    });

    if (response && response.status === 404) {
      throw new Error("couldn't get flickr feed");
    }
    const json = await response.json();
    await dispatch(saveflickrFeed(json));
    dispatch(fetchingFlickrFeed(false));
  } catch (error) {
    throw new Error("couldn't get flickr feed");
  }
};

export const getflickrFeedByTags = tags => async dispatch => {
  try {
    dispatch(fetchingFlickrFeed(true));
    const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=safe,${tags}&format=json`;
    const response = await fetchJsonp(url, {
      jsonpCallbackFunction: "jsonFlickrFeed"
    });

    if (response && response.status === 404) {
      throw new Error("couldn't get flickr feed");
    }
    const json = await response.json();
    await dispatch(saveflickrFeed(json));
    dispatch(fetchingFlickrFeed(false));
  } catch (error) {
    throw new Error("couldn't get flickr feed");
  }
};

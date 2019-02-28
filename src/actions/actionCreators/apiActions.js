import { makeActionCreator } from "../../utils/actionCreator";

export const saveflickrFeed = makeActionCreator(
  "SAVE_FLICKR_FEED",
  "flickrFeed"
);

export const fetchingFlickrFeed = makeActionCreator(
  "FETCHING_FLICKR_FEED",
  "fetchingFlickrFeed"
);

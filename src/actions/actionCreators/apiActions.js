import { makeActionCreator } from "../../utils/actionCreator";

export const saveflickrFeed = makeActionCreator(
  "SAVE_FLICKR_FEED",
  "flickrFeed"
);

export const fetchingData = makeActionCreator(
  "FETCHING_FLICKR_FEED",
  "fetchingData"
);

export const saveflickrForum = makeActionCreator(
  "FETCHING_FLICKR_FORUM",
  "flickrForum"
);

import { makeActionCreator } from "../../utils/actionCreator";
import actionTypes from "../../const/actionTypes";

export const saveflickrFeed = makeActionCreator(
  actionTypes.SAVE_FLICKR_FEED,
  "flickrFeed"
);

export const fetchingData = makeActionCreator(
  actionTypes.FETCHING_FLICKR_FEED,
  "fetchingData"
);

export const saveflickrForum = makeActionCreator(
  actionTypes.FETCHING_FLICKR_FORUM,
  "flickrForum"
);

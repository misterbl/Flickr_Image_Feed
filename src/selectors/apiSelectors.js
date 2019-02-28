import { createSelector } from "reselect";

export const feed = state => state.api.feed;

export const getFlickrFeedItems = createSelector(
  feed,
  feed => feed && feed.flickrFeed && feed.flickrFeed.items
);

export const fetchingData = createSelector(
  feed,
  feed => feed && feed.fetchingData
);

export const getForumData = createSelector(
  feed,
  feed => feed && feed.flickrForum
);

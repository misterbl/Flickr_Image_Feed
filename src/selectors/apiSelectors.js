import { createSelector } from "reselect";

export const feed = state => state.api.feed;

export const getflickrFeedItems = createSelector(
  feed,
  feed => feed && feed.flickrFeed && feed.flickrFeed.items
);

export const fetchingFlickrFeed = createSelector(
  feed,
  feed => feed && feed.fetchingFlickrFeed
);

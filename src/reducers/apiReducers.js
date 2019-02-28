export const feed = (
  state = null,
  { type, flickrFeed, fetchingFlickrFeed }
) => {
  switch (type) {
    case "SAVE_FLICKR_FEED":
      return {
        ...state,
        flickrFeed
      };
    case "FETCHING_FLICKR_FEED":
      return {
        ...state,
        fetchingFlickrFeed
      };
    default:
      return state;
  }
};

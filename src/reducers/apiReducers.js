export const feed = (
  state = null,
  { type, flickrFeed, fetchingData, flickrForum }
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
        fetchingData
      };

    case "FETCHING_FLICKR_FORUM":
      return {
        ...state,
        flickrForum
      };
    default:
      return state;
  }
};

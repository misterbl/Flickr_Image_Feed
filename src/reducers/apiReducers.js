import actionTypes from "../const/actionTypes";

export const feed = (
  state = null,
  { type, flickrFeed, fetchingData, flickrForum }
) => {
  switch (type) {
    case actionTypes.SAVE_FLICKR_FEED:
      return {
        ...state,
        flickrFeed
      };
    case actionTypes.FETCHING_FLICKR_FEED:
      return {
        ...state,
        fetchingData
      };

    case actionTypes.FETCHING_FLICKR_FORUM:
      return {
        ...state,
        flickrForum
      };
    default:
      return state;
  }
};

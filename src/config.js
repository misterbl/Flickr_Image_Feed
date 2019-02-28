/**
 * @typedef {Object} ClientConfig
 * @prop {string} baseName Base name for app .com/{baseName}
 * @prop {string} baseApiURI Base URI for the API
 * @prop {string} basePhotoPublicUri Base URI for the public photo API
 * @prop {string} flickrFeedUri Path at which the flickr feed assets are publicly available
 * @prop {string} forumFeedUri Path at which the flickr forum  assets are publicly available
 */
/** @type {ClientConfig} */
module.exports = Object.assign({
  baseName: "",
  baseApiURI: "https://api.flickr.com/services/feeds",
  basePhotoPublicUri: "https://api.flickr.com/services/feeds/photos_public.gne",
  flickrFeedUri:
    "https://api.flickr.com/services/feeds/photos_public.gne?tags=safe&format=json",
  forumFeedUri: "https://api.flickr.com/services/feeds/forums.gne?format=json"
});

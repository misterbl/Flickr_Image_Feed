const generateAppState = () => ({
  api: {
    feed: {
      fetchingFlickrFeed: false,
      flickrFeed: {
        title: "Uploads from everyone",
        link: "https://www.flickr.com/photos/",
        description: "",
        modified: "2019-02-28T14:09:16Z",
        generator: "https://www.flickr.com",
        items: [
          {
            media: {
              m: "mediaTest",
              title: "titleTest",
              author: "authorTest",
              author_id: "123",
              link: "linkTest",
              description: "descriptionTest",
              tags: "tagsTest"
            }
          }
        ]
      }
    }
  }
});

export default generateAppState;

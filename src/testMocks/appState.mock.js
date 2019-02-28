const generateAppState = () => ({
  api: {
    feed: {
      fetchingData: false,
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
      },
      flickrForum: {
        title: "Flickr forum",
        items: [
          {
            title: "titleTest",
            link: "linkTest",
            description: "descriptionTest",
            author: "authorTest",
            author_id: "123"
          }
        ]
      }
    }
  }
});

export default generateAppState;

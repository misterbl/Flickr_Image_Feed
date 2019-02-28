import React from "react";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import * as apiThunk from "./actions/thunks/apiThunk";
import FlickrCard from "./components/FlickrCard";
import {
  getflickrFeedItems,
  fetchingFlickrFeed
} from "./selectors/apiSelectors";
import Header from "./components/Header";

export class App extends React.Component {
  setTimeoutId = 0;
  componentDidMount() {
    this.props.getflickrFeed();
  }

  render() {
    return (
      <>
        <Header />
        {this.props.fetchingFlickrFeed && (
          <div className="tc fixed mh7 pa7">
            <ClipLoader
              sizeUnit={"px"}
              size={40}
              color={"#123abc"}
              loading={true}
            />
          </div>
        )}
        <div className="flex flex-wrap ma3">
          {this.props.flickrFeedItems &&
            this.props.flickrFeedItems.map(item => (
              <FlickrCard
                image={item.media.m}
                title={item.title}
                author={item.author}
                author_id={item.author_id}
                link={item.link}
                description={item.description}
                tags={item.tags}
                key={item.title + item.published + item.media.m}
              />
            ))}
        </div>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  flickrFeedItems: getflickrFeedItems(state),
  fetchingFlickrFeed: fetchingFlickrFeed(state)
});

export const mapDispatchToProps = {
  getflickrFeed: apiThunk.getflickrFeed,
  getflickrFeedByTags: apiThunk.getflickrFeedByTags
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

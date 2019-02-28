import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getFlickrFeedItems, fetchingData } from "../selectors/apiSelectors";
import * as apiThunk from "../actions/thunks/apiThunk";
import FlickrCard from "../components/FlickrCard";

export class Home extends React.Component {
  componentDidMount() {
    const { flickrFeedItems, getFlickrFeed } = this.props;
    if (!flickrFeedItems) {
      getFlickrFeed();
    }
  }
  render() {
    return (
      <div className="flex flex-wrap ml6-l ml5 mt5 mb4">
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
    );
  }
}

export const mapStateToProps = state => ({
  flickrFeedItems: getFlickrFeedItems(state),
  fetchingData: fetchingData(state)
});

export const mapDispatchToProps = {
  getFlickrFeed: apiThunk.getFlickrFeed
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

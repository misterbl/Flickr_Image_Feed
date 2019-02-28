import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getflickrFeedItems, fetchingData } from "../selectors/apiSelectors";
import * as apiThunk from "../actions/thunks/apiThunk";
import FlickrCard from "../components/FlickrCard";

export class Home extends React.Component {
  componentDidMount() {
    this.props.getflickrFeed();
  }
  render() {
    return (
      <div className="flex flex-wrap ml6">
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
  flickrFeedItems: getflickrFeedItems(state),
  fetchingData: fetchingData(state)
});

export const mapDispatchToProps = {
  getflickrFeed: apiThunk.getflickrFeed
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

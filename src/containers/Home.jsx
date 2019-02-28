import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getflickrFeedItems, fetchingData } from "../selectors/apiSelectors";
import FlickrCard from "../components/FlickrCard";

export class Home extends React.Component {
  render() {
    return (
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
    );
  }
}

export const mapStateToProps = state => ({
  flickrFeedItems: getflickrFeedItems(state),
  fetchingData: fetchingData(state)
});

export default withRouter(connect(mapStateToProps)(Home));

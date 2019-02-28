import React from "react";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import * as apiThunk from "../actions/thunks/apiThunk";

import FlickrCard from "../components/FlickrCard";
import {
  getflickrFeedItems,
  fetchingFlickrFeed
} from "../selectors/apiSelectors";
import SearchForm from "../components/SearchForm";

export class Home extends React.Component {
  setTimeoutId = 0;
  componentDidMount() {
    this.props.getflickrFeed();
  }

  handleKeyUp = event => {
    event.persist();
    window.clearTimeout(this.setTimeoutId);
    this.setTimeoutId = window.setTimeout(() => {
      this.displaySearchResults(event.target.value);
    }, 300);
    console.log(event.target.value);
  };

  searchByTags = data => {
    console.log("value", data.searchByTags);
    this.props.getflickrFeedByTags(data.searchByTags);
  };
  render() {
    return (
      <>
        <header className="bg-black h3 flex justify-between">
          <p className="white ft-35 b ml6 mt2">flickr</p>
          <div className="ma3 mr6 relative">
            <Formik
              initialValues={{
                searchByTags: ""
              }}
              onSubmit={this.searchByTags}
              render={formikProps => <SearchForm {...formikProps} />}
            />
          </div>
        </header>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

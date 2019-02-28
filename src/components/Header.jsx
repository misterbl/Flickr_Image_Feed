import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import * as apiThunk from "../actions/thunks/apiThunk";
import ROUTES from "../const/route";

export class Header extends React.Component {
  searchByTags = async data => {
    await this.props.getflickrFeedByTags(data.searchByTags);
    this.props.history.push(ROUTES.INDEX);
  };

  displayForum = async () => {
    await this.props.getForumFeed();
    this.props.history.push(ROUTES.FORUM);
  };

  pushToHome = () => {
    this.props.history.push(ROUTES.INDEX);
  };
  render() {
    return (
      <header className="bg-black h3 flex justify-between">
        <button
          onClick={this.pushToHome}
          className="bg-transparent bn white ft-35 b ml6 mt2"
        >
          flickr
        </button>
        <div className="ma3 mr6 relative">
          <Formik
            initialValues={{
              searchByTags: ""
            }}
            onSubmit={this.searchByTags}
            render={formikProps => <SearchForm {...formikProps} />}
          />
        </div>
        <button
          className="bg-transparent white f4 mr5 bn"
          onClick={this.displayForum}
        >
          Forum
        </button>
      </header>
    );
  }
}

export const mapDispatchToProps = {
  getflickrFeedByTags: apiThunk.getflickrFeedByTags,
  getForumFeed: apiThunk.getForumFeed
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);

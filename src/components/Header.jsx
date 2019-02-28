import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import * as apiThunk from "../actions/thunks/apiThunk";

export class Header extends React.Component {
  searchByTags = data => {
    this.props.getflickrFeedByTags(data.searchByTags);
  };
  render() {
    return (
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
    );
  }
}

export const mapDispatchToProps = {
  getflickrFeedByTags: apiThunk.getflickrFeedByTags
};
export default connect(
  null,
  mapDispatchToProps
)(Header);

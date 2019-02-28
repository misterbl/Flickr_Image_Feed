import React from "react";
import { ClipLoader } from "react-spinners";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ROUTES from "./const/route";
import * as apiThunk from "./actions/thunks/apiThunk";
import { getflickrFeedItems, fetchingData } from "./selectors/apiSelectors";
import Header from "./components/Header";
import Home from "./containers/Home";
import Forum from "./containers/Forum";

export class App extends React.Component {
  setTimeoutId = 0;
  componentDidMount() {
    this.props.getflickrFeed();
  }

  render() {
    return (
      <>
        <Header />
        {this.props.fetchingData && (
          <div className="tc fixed mh7 pa7">
            <ClipLoader
              sizeUnit={"px"}
              size={40}
              color={"#123abc"}
              loading={true}
            />
          </div>
        )}
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
          <Route path={ROUTES.FORUM} component={Forum} />
        </Switch>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  flickrFeedItems: getflickrFeedItems(state),
  fetchingData: fetchingData(state)
});

export const mapDispatchToProps = {
  getflickrFeed: apiThunk.getflickrFeed,
  getflickrFeedByTags: apiThunk.getflickrFeedByTags
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

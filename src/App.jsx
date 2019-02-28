import React from "react";
import { ClipLoader } from "react-spinners";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ROUTES from "./const/route";
import { fetchingData } from "./selectors/apiSelectors";
import Header from "./components/Header";
import Home from "./containers/Home";
import Forum from "./containers/Forum";

const App = ({ fetchingData }) => (
  <>
    <Header />
    {fetchingData && (
      <div className="tc fixed mh7 pa7">
        <ClipLoader sizeUnit={"px"} size={40} color={"#123abc"} loading />
      </div>
    )}
    <Switch>
      <Route exact path={ROUTES.INDEX} component={Home} />
      <Route path={ROUTES.FORUM} component={Forum} />
    </Switch>
  </>
);

export const mapStateToProps = state => ({
  fetchingData: fetchingData(state)
});

export default withRouter(connect(mapStateToProps)(App));

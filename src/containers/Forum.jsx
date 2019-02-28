import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getForumData } from "../selectors/apiSelectors";
import ForumCard from "../components/ForumCard";
import * as apiThunk from "../actions/thunks/apiThunk";

export class Forum extends React.Component {
  render() {
    const { forumData } = this.props;
    if (forumData) {
      return (
        <>
          <h1 className="tc">{forumData.title}</h1>
          <div className="flex flex-wrap ma3">
            {forumData &&
              forumData.items.map(item => (
                <ForumCard
                  title={item.title}
                  author={item.author}
                  author_id={item.author_id}
                  link={item.link}
                  description={item.description}
                  key={item.title + item.published}
                />
              ))}
          </div>
        </>
      );
    }
    this.props.getForumFeed();
    return <h1 className="tc">Fetching data...</h1>;
  }
}

export const mapStateToProps = state => ({
  forumData: getForumData(state)
});

export const mapDispatchToProps = {
  getForumFeed: apiThunk.getForumFeed
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Forum)
);

import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getForumData } from "../selectors/apiSelectors";
import ForumCard from "../components/ForumCard";

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
    return <h1>click on the button Forum in the header to refresh the feed</h1>;
  }
}

export const mapStateToProps = state => ({
  forumData: getForumData(state)
});

export default withRouter(connect(mapStateToProps)(Forum));

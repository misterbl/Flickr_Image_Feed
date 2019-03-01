import React from "react";

const ForumCard = ({ title, link, description, author, author_id }) => (
  <div className="ba pa3 ma4 overflow-hidden card-container w-80">
    <p>
      <a href={link}>{`${title}`}</a> by
      <a href={`https://www.flickr.com/photos/${author_id}`}>{` ${author}`}</a>
    </p>
    <p dangerouslySetInnerHTML={{ __html: description }} className="mt4" />
  </div>
);
export default ForumCard;

import React from "react";

const FlickrCard = ({
  image,
  title,
  author,
  author_id,
  link,
  description,
  tags
}) => (
  <div className="ba pa3 w-25 ma3 overflow-hidden">
    <img className="w-100" src={image} alt={title} />
    <p>
      <a href={link}>{`${title}`}</a> by
      <a href={`https://www.flickr.com/photos/${author_id}`}>{` ${author}`}</a>
    </p>
    <p dangerouslySetInnerHTML={{ __html: `Description ${description}` }} />
    {/* TODO: add a comma between tags */}
    {tags.length > 0 && <p>Tags: {tags}</p>}
  </div>
);
export default FlickrCard;

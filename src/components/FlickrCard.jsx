import React from "react";

export class FlickrCard extends React.Component {
  state = {
    showMore: false
  };

  showMoreorLess = () => {
    this.setState({ showMore: !this.state.showMore });
  };
  render() {
    const {
      image,
      title,
      author,
      author_id,
      link,
      description,
      tags
    } = this.props;
    const divHeight = this.state.showMore ? "" : " mh-500";
    const buttonText = this.state.showMore ? "show less" : "show more";
    return (
      <div>
        <div
          className={`ba pa3 mw5 mr4 mt4 overflow-hidden card-container ${divHeight}`}
        >
          <img className="w-100" src={image} alt={title} />
          <p>
            <a href={link}>{`${title}`}</a> by
            <a
              href={`https://www.flickr.com/photos/${author_id}`}
            >{` ${author}`}</a>
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: `Description ${description}` }}
            className="mt4 no-underline"
          />

          {tags.length > 0 && <p>Tags: {tags}</p>}
        </div>
        <button className="show-more-less-button" onClick={this.showMoreorLess}>
          {buttonText}
        </button>
      </div>
    );
  }
}
export default FlickrCard;

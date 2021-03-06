import React from "react";

export class FlickrCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

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
          <div className="img-block ">
            <img src={image} alt={title} />
          </div>
          <p>
            <a href={link}>{`${title}`}</a> by
            <a
              href={`https://www.flickr.com/photos/${author_id}`}
            >{` ${author}`}</a>
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="mt4 no-underline"
          />

          {tags.length > 0 && <p>Tags: {tags}</p>}
        </div>
        <div className="mr4">
          <button
            className="card-container--button w-100"
            onClick={this.showMoreorLess}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}
export default FlickrCard;

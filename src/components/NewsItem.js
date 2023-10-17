import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    let { title, description,newsUrl,imgUrl } = this.props;

    return (
      <div>
        <div className="card" style={{ width: '17rem' }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
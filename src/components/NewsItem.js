import React from 'react';

const NewsItem=(props)=> {

    let { title, description,newsUrl,imgUrl,author,publishedAt } = props;

    return (
      <div>
        <div className="card" style={{ width: '17rem' }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted'> By- {!author? "unknown":author} on {new Date(publishedAt).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem; 
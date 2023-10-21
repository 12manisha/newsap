import React, { useCallback, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = useCallback(async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);

    let response = await fetch(url);
    let data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  }, [page, props.apiKey, props.category, props.country, props.pageSize]);

  useEffect(() => {
    updateNews();
  }, [page, updateNews]); // Trigger the update when the page changes

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: "90px 0" }}>
        NewsMonkeyss
      </h2>

      {loading && <Spinner />}
      <div className="row my-4">
        {!loading &&
          articles.map((element) => (
            <div className="col-md-4 my-3" key={element.urlToImage}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imgUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://www.odisha.plus/wp-content/uploads/2020/06/qtq80-BNRrBq-1536x1034.jpeg"
                }
                newsUrl={element.url}
              />
            </div>
          ))}
      </div>
      <div className="container justify-content-between d-flex">
        <button
          disabled={page <= 1}
          onClick={handlePrevClick}
          type="button"
          className="btn btn-dark"
        >
          {" "}
          &larr; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalResults / props.pageSize)}
          onClick={handleNextClick}
          type="button"
          className="btn btn-dark"
        >
          Next &rarr;{" "}
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

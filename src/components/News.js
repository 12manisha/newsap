import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61222a34842e492cbf471f626601da78&page=${this.state.page}&pageSize=15`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles , totalResults: data.totalResults});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handlePrevClick=async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61222a34842e492cbf471f626601da78&page=${this.state.page - 1}&pageSize=15`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({
      page: this.state.page-1,
      articles: data.articles
    })
  }

  handleNextClick = async ()=> {
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61222a34842e492cbf471f626601da78&page=${this.state.page +1}&pageSize=15`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      this.setState({
        page: this.state.page+1,
        articles: data.articles
      })
    }
  }

  render() {

    return (
      <div className='container my-3'>
        <h2>NewsMonkeyss</h2>
        <div className='row my-4'>
          {this.state.articles.map((element) => (
            <div className='col-md-4 my-3' key={element.urlToImage}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imgUrl={element.urlToImage ? element.urlToImage : "https://www.odisha.plus/wp-content/uploads/2020/06/qtq80-BNRrBq-1536x1034.jpeg"}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className='container justify-content-between d-flex' >
          <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark"> &larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr; </button>



        </div>
      </div>
    );
  }
}

export default News;
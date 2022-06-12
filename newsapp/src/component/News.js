import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category}`;
  }

  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&
    category=${this.props.category}
    &apiKey=7c64b87d6f6b45559d7c0a592f328b39&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&
    category=${this.props.category}
    &apiKey=7c64b87d6f6b45559d7c0a592f328b39&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // Next button function
  handlePrev = async () => {
    console.log("Previous button is pressed");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=$
    // {this.props.category}&apiKey=7c64b87d6f6b45559d7c0a592f328b39&
    // page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 });
    this.update();
  };

  handleNext = async () => {
    console.log("Next button is pressed");
    // if(! (this.state.page+1 > Math.ceil((this.state.totalResults/this.pageSize)))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7c64b87d6f6b45559d7c0a592f328b39&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    // }
    this.setState({ page: this.state.page + 1 });
    this.update();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          Daily News Top Headlines on {this.props.category}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrev}
          >
            {" "}
            &larr; Previous{" "}
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

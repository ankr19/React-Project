import React from "react";
import { propTypes, defaultProps, useState, useEffect } from "react";

export default function News2() {
  let [articles, setArticles] = useState("");
  let [loading, setLoading] = useState(true);
  let [page, setPage] = useState(0);

  useEffect = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&
    category=${this.props.category}
    &apiKey=7c64b87d6f6b45559d7c0a592f328b39&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  };
  return( 
  <>
  </>
  );
}

News2.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "business",
};

News2.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

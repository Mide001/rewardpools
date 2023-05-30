import React, { useState, useEffect } from "react";

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/news");
      const data = await response.json();
      setNews(data.data.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const ReadMore = (url) => {
    window.open(url, "_blank");
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className="container mx-auto px-4 mt-4 animate-fade-in">
      <h1 className="text-mid text-gray-800 font-bold mb-8">
        Breaking Blockchain & Market News
      </h1>
      {Array.isArray(news) && news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8 border border-gray-300 p-4">
            <img
              src={article.thumb_2x}
              alt={article.title}
              className="w-1/6 md:w-1/4 h-auto mb-4"
            />
            <div className="md:pl-4 md:w-2/3">
              <h2 className="text-medium text-gray-900 font-bold mb-2">
                {article.title}
              </h2>
              <p className="text-gray-900 mb-2">
                Posted Date: {formatDate(article.updated_at)}
              </p>
              <p className="text-gray-600 mb-4">
                {truncateDescription(article.description, 50)}
              </p>
              <button
                className="bg-[#021f40] text-white font-bold py-2 px-4 rounded"
                onClick={() => ReadMore(article.url)}
              >
                Read More
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No news articles available</p>
      )}
    </div>
  );
};

export default CryptoNews;

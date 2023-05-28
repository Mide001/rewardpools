import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/news");
      const data = await response.json();
      setNews(data.data.slice(0, 10));
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

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-4 animate-fade-in">
        <h1 className="text-mid font-bold mb-8">Crypto News</h1>
        {Array.isArray(news) && news.length > 0 ? (
          news.map((article) => (
            <div key={article.id} className="mb-8 border border-gray-300 p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-500 mb-4">{article.description}</p>
              <button
                className="bg-gray-300 hover:bg-[#0f4250] hover:text-gray-200 text-black font-bold py-2 px-4 rounded"
                onClick={() => ReadMore(article.url)}
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No news articles available</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CryptoNews;

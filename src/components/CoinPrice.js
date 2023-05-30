import React, { useState, useEffect } from "react";
import Help from "./assets/help-reward.png";
import axios from "axios";

const CoinPrice = () => {
  const [coinPrice, setCoinPrice] = useState(null);
  const [coinPair, setCoinPair] = useState("");
  const [priceChange, setPriceChange] = useState("");
  const [isProfit, setIsProfit] = useState(false);

  const fetchCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.geckoterminal.com/api/v2/networks/bsc/tokens/0xb0666c07e65d43958359ad25ae0307a36005b54d/pools"
      );
      const data = response.data;
      const coinPrice = data.data[0].attributes.token_price_usd;
      const truncatedPrice = parseFloat(coinPrice).toFixed(8);
      setCoinPrice(truncatedPrice);
      const coinPair = data.data[0].attributes.name;
      setCoinPair(coinPair);
      const change = parseFloat(0.6);
      setPriceChange(change);

      setIsProfit(change >= 0);
    } catch (error) {
      console.error("Error fetching coin price: ", error);
    }
  };

  useEffect(() => {
    fetchCoinPrice();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <h2 className="text-mid text-gray-900 font-bold mb-4">Coin Price</h2>
      <div
        className={`bg-[#021f40] flex justify-between items-center p-4 rounded-md ${
          isProfit ? "text-green-700" : "text-red-500"
        }`}
      >
        <div className="flex items-center">
          <div className="w-12 h-12 text-white rounded-full flex items-center justify-center">
            <img src={Help} alt="Logo" className="w-13 h-13" />
          </div>
          <div className="ml-2">
            <p className="text-base text-gray-200 font-semibold">{coinPair}</p>
            <p className="text-sm">
              {priceChange >= 0 ? "+" : "-"}
              {Math.abs(priceChange)}%
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-200">{coinPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinPrice;

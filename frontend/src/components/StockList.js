 
import React, { useState, useEffect } from 'react';  
import AddStockModal from './AddstockModal';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  // Dummy stock data
  const dummyStocks = [
    { ticker: 'AAPL', name: 'Apple Inc.', currentPrice: 150.25 },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', currentPrice: 2750.0 },
    { ticker: 'AMZN', name: 'Amazon.com Inc.', currentPrice: 3400.5 },
    { ticker: 'MSFT', name: 'Microsoft Corporation', currentPrice: 299.99 },
    { ticker: 'TSLA', name: 'Tesla Inc.', currentPrice: 720.15 },
    { ticker: 'FB', name: 'Meta Platforms Inc.', currentPrice: 355.65 },
    { ticker: 'NFLX', name: 'Netflix Inc.', currentPrice: 590.3 },
    { ticker: 'NVDA', name: 'NVIDIA Corporation', currentPrice: 220.4 },
    { ticker: 'JPM', name: 'JPMorgan Chase & Co.', currentPrice: 160.75 },
    { ticker: 'V', name: 'Visa Inc.', currentPrice: 230.8 },
  ];

  useEffect(() => {
    setStocks(dummyStocks);
  }, []);

  const handleAddStock = (stock) => {
    setSelectedStock(stock);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddStockSubmit = (stockData) => {
    console.log('Stock added:', stockData);  // You can handle the addition logic here
    setShowModal(false);  // Close modal after adding stock
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Available Stocks
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stocks?.map((stock) => (
            <li
              key={stock.ticker}
              className="flex flex-col items-center bg-gray-50 p-4 shadow-sm rounded-md hover:shadow-md transition"
            >
              <p className="text-lg font-medium text-gray-700">
                {stock.name} ({stock.ticker})
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Current Price: <span className="font-semibold">${stock.currentPrice.toFixed(2)}</span>
              </p>
              <button
                onClick={() => handleAddStock(stock)}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add to Portfolio
              </button>
            </li>
          ))}
        </ul>
        {stocks.length === 0 && (
          <p className="text-gray-500 text-center mt-6">No stocks available at the moment.</p>
        )}
      </div>

      {showModal && selectedStock && (
        <AddStockModal
          stock={selectedStock}
          onClose={handleCloseModal}
          onAdd={handleAddStockSubmit}
        />
      )}
    </div>
  );
};

export default StockList;

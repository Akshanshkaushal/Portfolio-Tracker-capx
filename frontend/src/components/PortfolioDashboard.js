import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import PortfolioChart from './PortfolioChart';
import PortfolioSummary from './PortfolioSummary';  

// issue is the fetched ones doesnt have currentprice
// beacuse we have defined and created them by 4 sections only and currentprice 
//is not among them so we have to fetch the current price of particalr
// stock from stock api by passing tickers of those stocks present in portfoilio

const PortfolioDashboard = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [topStock, setTopStock] = useState(null);
  const [chartData, setChartData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await api.get('/portfolio');
        const stocks = response.data;

        let total = 0;
        let top = null;
        const data = stocks?.map((stock) => {
          const currentValue = stock.quantity * stock.currentPrice;
          total += currentValue;
          if (!top || currentValue > top.value) {
            top = { name: stock.name, value: currentValue };
          }
          return {
            name: stock.name,
            value: currentValue,
          };
        });

        setTotalValue(total);
        setTopStock(top);
        setChartData({
          labels: data?.map((d) => d.name),
          datasets: [
            {
              label: 'Stock Performance',
              data: data?.map((d) => d.value),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      } catch (error) {
        console.error('Failed to fetch portfolio data', error);
      }
    };

    fetchPortfolioData();
  }, []);

  const handleAddStock = (newStock) => { 
    console.log('New stock added:', newStock);
    // Optionally, you can refetch the portfolio data here to reflect the added stock
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Portfolio Dashboard</h2>
        <PortfolioSummary totalValue={totalValue} topStock={topStock} />
        <div className="mt-8">
          {/* <PortfolioChart data={chartData} /> */}
        </div>
 
      </div>
    </div>
  );
};

export default PortfolioDashboard;

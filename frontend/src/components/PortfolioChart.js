import React from 'react';
import { Pie } from 'react-chartjs-2';

const PortfolioChart = ({ data }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-700 text-center mb-4">Stock Performance</h3>
      <Pie data={data} />
    </div>
  );
};

export default PortfolioChart;

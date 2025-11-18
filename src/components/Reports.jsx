import React, { useState } from 'react';
import { Download, Calendar } from 'lucide-react';

// Import the components that will be in the tabs
import Overview from './Overview'; // Shows Income, Expense, Balance cards
import SpendingByCategory from './SpendingByCategory'; // Your existing chart
import IncomeVsExpenseTrend from './IncomeVsExpenseTrend'; // Your existing chart

// A placeholder for the tab we don't have a component for yet
const CashFlowReport = () => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-semibold">Cash Flow Report</h3>
    <p className="text-gray-500 mt-2">This component is coming soon.</p>
  </div>
);

export default function Reports() {
  const [activeTab, setActiveTab] = useState('income-expense');
  const handleExport = () => {
    alert('Export functionality is not yet implemented.');
  };
  return (
    <div className="container mx-auto p-6">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Financial Reports</h1>
        <button onClick={handleExport} className="flex items-center gap-2 bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 hover:cursor-pointer"><Download className="h-5 w-5" />Export</button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="flex items-center gap-2 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-sm border hover:cursor-pointer"><Calendar className="h-4 w-4" /> This Month</button>
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-sm border hover:bg-gray-50 hover:cursor-pointer">Last 3 Months</button>
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-sm border hover:bg-gray-50 hover:cursor-pointer">Year to Date</button>
      </div>

      <div className="flex border-b-2 border-gray-200 mb-6">
        <TabButton title="Spending by Category" 
          isActive={activeTab === 'category'} 
          onClick={() => setActiveTab('category')} 
        />
        <TabButton title="Income vs. Expense" 
          isActive={activeTab === 'income-expense'} 
          onClick={() => setActiveTab('income-expense')} 
        />
        <TabButton title="Net Worth Trend" 
          isActive={activeTab === 'trend'}
          onClick={() => setActiveTab('trend')} 
        />
        <TabButton title="Cash Flow"
          isActive={activeTab === 'cash-flow'} 
          onClick={() => setActiveTab('cash-flow')} 
        />
      </div>

      <div className="content">
        {activeTab === 'category' && (<SpendingByCategory />)}
        {activeTab === 'income-expense' && (<Overview /> )}
        {activeTab === 'trend' && (<IncomeVsExpenseTrend />)}
        {activeTab === 'cash-flow' && (<CashFlowReport />)}
      </div>

    </div>
  );
}

const TabButton = ({ title, isActive, onClick }) => {
  return (
    <button onClick={onClick} className={`py-3 px-6 font-medium text-sm md:text-base ${isActive ? 'border-b-4 border-teal-600 text-teal-600' : 'text-gray-500 hover:text-gray-800'}`}>{title}</button>
  );
};
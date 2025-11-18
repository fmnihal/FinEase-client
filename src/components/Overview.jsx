import React, { useState, useEffect, useMemo } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function Overview() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get('/my-transactions');
        setTransactions(response.data);
      } catch (err) {
        console.error('Failed to fetch transactions for overview:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [axiosSecure]);

  const { totalIncome, totalExpense, balance } = useMemo(() => {
    let income = 0;
    let expense = 0;
    transactions.forEach(t => {
      if (t.type === 'income') {
        income += t.amount;
      } else {
        expense += t.amount;
      }
    });
    return {
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
    };
  }, [transactions]);
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <OverviewCard title="Loading..." value="..." icon={<Wallet />} />
        <OverviewCard title="Loading..." value="..." icon={<TrendingUp />} />
        <OverviewCard title="Loading..." value="..." icon={<TrendingDown />} />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
      <OverviewCard title="Total Balance" value={`$${balance.toFixed(2)}`} icon={<Wallet className="text-blue-500" />} color="blue" />
      <OverviewCard title="Total Income" value={`$${totalIncome.toFixed(2)}`} icon={<TrendingUp className="text-green-500" />} color="green" />
      <OverviewCard title="Total Expense" value={`$${totalExpense.toFixed(2)}`} icon={<TrendingDown className="text-red-500" />} color="red" />
    </div>
  );
}

function OverviewCard({ title, value, icon, color }) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    red: 'bg-red-50 border-red-200',
  };
  return (
    <div className={`p-6 rounded-lg shadow-md border-l-4 ${colors[color] || 'bg-gray-50 border-gray-200'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-white rounded-full shadow">
          {icon}
        </div>
      </div>
    </div>
  );
}
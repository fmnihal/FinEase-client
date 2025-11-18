import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddTranx() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('home');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      setError('Please fill in Category, Amount, and Date.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const transactionData = {
        type,
        category,
        amount: parseFloat(amount),
        description,
        date,
      };
      await axiosSecure.post('/add-transaction', transactionData);
      toast.success('Transaction added successfully!');
      navigate('/my-transactions');
    } catch (err) {
      console.error(err);
      setError('Failed to add transaction. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <label className="flex-1">
            <input type="radio" value="expense" checked={type === 'expense'} onChange={(e) => setType(e.target.value)} className="sr-only peer" />
            <span className="block p-3 text-center rounded-lg border cursor-pointer peer-checked:bg-red-500 peer-checked:text-white peer-checked:font-bold">Expense</span>
          </label>
          <label className="flex-1">
            <input type="radio" value="income" checked={type === 'income'} onChange={(e) => setType(e.target.value)} className="sr-only peer" />
            <span className="block p-3 text-center rounded-lg border cursor-pointer peer-checked:bg-green-500 peer-checked:text-white peer-checked:font-bold">Income</span>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 border rounded-lg" required>
            <option value="home">Home</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="salary">Salary</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="e.g., Monthly groceries"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
            required
          />
        </div>
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        <button type="submit" disabled={loading} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 disabled:bg-gray-400">
          {loading ? 
          // 'Adding...'
          <LoadingSpinner />
          : 'Add Transaction'}
        </button>
      </form>
    </div>
  );
}
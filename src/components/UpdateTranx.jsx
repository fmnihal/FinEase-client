import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateTranx() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    type: 'expense',
    category: 'home',
    amount: '',
    description: '',
    date: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get(`/transaction/${id}`);
        const data = response.data;

        setFormData({
          type: data.type,
          category: data.category,
          amount: data.amount.toString(),
          description: data.description,
          date: new Date(data.date).toISOString().split('T')[0],
        });
      } catch (err) {
        console.error(err);
        setError('Failed to load transaction.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchTransaction();
  }, [id, axiosSecure]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const updatedData = {
        ...formData,
        amount: parseFloat(formData.amount),
      };
      await axiosSecure.patch(`/transaction/update/${id}`, updatedData);
      navigate(`/transaction/${id}`);
    } catch (err) {
      console.error(err);
      setError('Failed to update transaction.');
      setLoading(false);
    }
  };

  if (loading && !formData.amount) {
    return <div className="text-center p-10">Loading form...</div>;
  }
  
  if (error && !formData.amount) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Update Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <label className="flex-1">
            <input type="radio" name="type" value="expense" checked={formData.type === 'expense'} onChange={handleChange} className="sr-only peer" />
            <span className="block p-3 text-center rounded-lg border cursor-pointer peer-checked:bg-red-500 peer-checked:text-white peer-checked:font-bold">Expense</span>
          </label>
          <label className="flex-1">
            <input type="radio" name="type" value="income" checked={formData.type === 'income'} onChange={handleChange} className="sr-only peer" />
            <span className="block p-3 text-center rounded-lg border cursor-pointer peer-checked:bg-green-500 peer-checked:text-white peer-checked:font-bold">Income</span>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" required>
            <option value="home">Home</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="salary">Salary</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" required />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" required />
        </div>
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        <button type="submit" disabled={loading} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 disabled:bg-gray-400">
          {loading ? 'Updating...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
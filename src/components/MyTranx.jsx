import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { Eye, Edit, Trash2, Plus } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

export default function MyTranx() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get('/my-transactions'); 
        setTransactions(response.data);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load transactions.');
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [axiosSecure]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction?')) {
      return;
    }
    try {
      await axiosSecure.delete(`/transaction/${id}`);
      setTransactions(transactions.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
      setError('Failed to delete transaction.');
    }
  };
  if (loading) {
    // return <div className="text-center p-10">Loading transactions...</div>;
    return <LoadingSpinner />;
  }
  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Transactions</h1>
        <Link to="/add-transaction" className="flex items-center gap-2 bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700"><Plus className="h-5 w-5" /> Add New</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">No transactions found. Click "Add New" to get started.</p>
        ) : (
          transactions.map(t => (
            <div key={t._id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${t.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >{t.category}</span>
                  <span className={`text-2xl font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-2 min-h-[40px]">{t.description || 'No description'}</p>
                <p className="text-sm text-gray-400 mb-6">
                  {new Date(t.date).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex justify-end space-x-2 border-t pt-4">
                  <Link to={`/transaction/${t._id}`} className="px-3 py-1 text-sm font-medium text-blue-600 rounded-md hover:bg-blue-50">View Details</Link>
                  <Link to={`/transaction/update/${t._id}`} className="px-3 py-1 text-sm font-medium text-yellow-600 rounded-md hover:bg-yellow-50">Update</Link>
                  <button onClick={() => handleDelete(t._id)} className="px-3 py-1 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 hover: cursor-pointer">Delete</button>
                </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Edit } from 'lucide-react';

function LoadingSpinner() {
  return <div className="text-center p-10">Loading...</div>;
}

export default function DetailsTranx() {
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get(`/transaction/${id}`);
        setTransaction(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load transaction details.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id, axiosSecure]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;
  if (!transaction) return <div className="text-center p-10">Transaction not found.</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Transaction Details
        </h2>
        <Link 
          to={`/transaction/update/${transaction._id}`}
          className="flex items-center gap-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600"
        >
          <Edit className="h-5 w-5" />
          Update
        </Link>
      </div>
      
      <div className="space-y-4">
        <DetailRow label="Transaction ID" value={transaction._id} />
        <DetailRow 
          label="Type" 
          value={transaction.type}
          isBadge={true}
          color={transaction.type === 'income' ? 'green' : 'red'}
        />
        <DetailRow label="Category" value={transaction.category} isBadge={true} />
        <DetailRow 
          label="Amount" 
          value={`$${transaction.amount.toFixed(2)}`}
          valueClass="text-2xl font-bold"
        />
        <DetailRow label="Date" value={new Date(transaction.date).toLocaleDateString()} />
        <DetailRow label="Description" value={transaction.description || 'N/A'} />
        <DetailRow label="User Name" value={transaction.name || 'N/A'} />
        <DetailRow label="User Email" value={transaction.email} />
      </div>
    </div>
  );
}

// Helper component for layout
function DetailRow({ label, value, isBadge = false, color = 'gray', valueClass = '' }) {
  return (
    <div className="flex flex-col p-4 bg-gray-50 rounded-lg">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      {isBadge ? (
        <span className={`mt-1 w-fit px-3 py-1 rounded-full text-sm font-semibold
          ${color === 'green' ? 'bg-green-100 text-green-800' :
            color === 'red' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'}`}
        >
          {value}
        </span>
      ) : (
        <span className={`mt-1 text-lg text-gray-900 ${valueClass}`}>
          {value}
        </span>
      )}
    </div>
  );
}
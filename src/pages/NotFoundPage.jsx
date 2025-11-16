import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
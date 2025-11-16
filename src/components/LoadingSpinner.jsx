import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] p-10">
      <Loader2 className="h-12 w-12 text-teal-600 animate-spin" />
      <p className="text-gray-500 mt-4">Loading, please wait...</p>
    </div>
  );
}
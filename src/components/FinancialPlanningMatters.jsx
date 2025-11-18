import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function FinancialPlanningMatters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-1 mb-4">
        <ShieldCheck />
        <h3 className="text-3xl font-semibold text-gray-800">Why Financial Planning Matters</h3>
      </div>
      <p className="text-gray-600 mb-4">Financial planning isn't just for the wealthy; it's the roadmap to achieving your life goals and securing your future.</p>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li><b>Reduces Stress:</b> Knowing you have a plan for emergencies and retirement brings peace of mind.</li>
        <li><b>Achieves Goals:</b> It turns your dreams (buying a home, traveling) into actionable steps.</li>
        <li><b>Builds Wealth:</b> Consistent, planned saving and investing is the most reliable path to wealth.</li>
        <li><b>Prepares for the Unexpected:</b> A good plan includes an emergency fund, protecting you from life's curveballs.</li>
      </ul>
    </div>
  );
}
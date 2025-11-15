import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function FinancialPlanningMatters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <ShieldCheck className="text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">Why Financial Planning Matters</h3>
      </div>
      <p className="text-gray-600 mb-4">Financial planning isn't just for the wealthy; it's the roadmap to achieving your life goals and securing your future.</p>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li>**Reduces Stress:** Knowing you have a plan for emergencies and retirement brings peace of mind.</li>
        <li>**Achieves Goals:** It turns your dreams (buying a home, traveling) into actionable steps.</li>
        <li>**Builds Wealth:** Consistent, planned saving and investing is the most reliable path to wealth.</li>
        <li>**Prepares for the Unexpected:** A good plan includes an emergency fund, protecting you from life's curveballs.</li>
      </ul>
    </div>
  );
}
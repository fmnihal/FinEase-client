import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function BudgetingTips() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="text-yellow-500" />
        <h3 className="text-xl font-semibold text-gray-800">Budgeting Tips</h3>
      </div>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li>**Track Every Penny:** Use an app (like this one!) to see where your money *really* goes.</li>
        <li>**The 50/30/20 Rule:** 50% of your income for needs, 30% for wants, and 20% for savings.</li>
        <li>**Set Specific Goals:** Instead of "save money," try "save $500 for a vacation."</li>
        <li>**Review Weekly:** Take 15 minutes every Sunday to review your spending and adjust.</li>
      </ul>
    </div>
  );
}
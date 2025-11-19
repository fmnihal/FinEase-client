import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function BudgetingTips() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-1 mb-4">
        <Lightbulb />
        <h3 className="text-3xl font-semibold text-gray-800">Budgeting Tips</h3>
      </div>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li><b>Track Every Penny:</b> Use an app (like this one!) to see where your money <i>really</i> goes.</li>
        <li><b>The 50/30/20 Rule:</b> 50% of your income for needs, 30% for wants, and 20% for savings.</li>
        <li><b>Set Specific Goals:</b> Instead of "save money," try "save $500 for a vacation."</li>
        <li><b>Review Weekly:</b> Take 15 minutes every Sunday to review your spending and adjust.</li>
      </ul>
    </div>
  );
}
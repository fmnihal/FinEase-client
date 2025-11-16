import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import
import { ArrowRight, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-24 text-center">
          <TrendingUp className="h-16 w-16 mb-4" />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Take Control of Your Finances.</h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-2xl">Stop guessing, start growing. FinEase is the simplest way to track your spending and build your wealth.</p>
          <Link to="/register" className="flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition duration-300">Get Started Free <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <BudgetingTips />
          <FinancialPlanningMatters />
        </div>
      </section>
    </div>
  );
};

function BudgetingTips() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Budgeting Tips</h3>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li><b>Track Every Penny:</b> See where your money *really* goes.</li>
        <li><b>The 50/30/20 Rule:</b> 50% for needs, 30% for wants, 20% for savings.</li>
        <li><b>Set Specific Goals:</b> "Save $500 for vacation" is better than "save money."</li>
      </ul>
    </div>
  );
}
function FinancialPlanningMatters() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Financial Planning Matters</h3>
      <p className="text-gray-600 mb-4">
        It's the roadmap to achieving your life goals and securing your future.
      </p>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li><b>Reduces Stress:</b> Knowing you have a plan brings peace of mind.</li>
        <li><b>Achieves Goals:</b> Turns your dreams (buying a home, traveling) into actionable steps.</li>
        <li><b>Prepares for the Unexpected:</b> Protects you from life's curveballs.</li>
      </ul>
    </div>
  );
}

export default LandingPage;
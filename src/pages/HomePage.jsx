import React from 'react';
import DashBanner from '../components/DashBanner';
import IncomeVsExpenseTrend from '../components/IncomeVsExpenseTrend';
import SpendingByCategory from '../components/SpendingByCategory';
import Budget from '../components/Budget';
import Goals from '../components/Goals';
import MyTranx from '../components/MyTranx';
import Overview from '../components/Overview';
import BudgetingTips from '../components/BudgetingTips';
import FinancialPlanningMatters from '../components/FinancialPlanningMatters';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <DashBanner></DashBanner>
            <Overview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SpendingByCategory />
                <IncomeVsExpenseTrend />
                <Budget />
                <Goals />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <BudgetingTips />
                <FinancialPlanningMatters />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
                <MyTranx /> 
            </div>
        </div>
    );
};

export default HomePage;
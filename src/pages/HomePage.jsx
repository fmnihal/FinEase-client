import React from 'react';
import DashBanner from '../components/DashBanner';
// import IncomeVsExpenseTrend from '../components/IncomeVsExpenseTrend';
// import SpendingByCategory from '../components/SpendingByCategory';
// import Budget from '../components/Budget';
// import Goals from '../components/Goals';
import MyTranx from '../components/MyTranx';
import Overview from '../components/Overview';
import BudgetingTips from '../components/BudgetingTips';
import FinancialPlanningMatters from '../components/FinancialPlanningMatters';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto my-16'>
            <DashBanner></DashBanner>
            <Overview />
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-10">
                <SpendingByCategory />
                <IncomeVsExpenseTrend />
                <Budget />
                <Goals />
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
                <BudgetingTips />
                <FinancialPlanningMatters />
            </div>
            <div>
                <h2 className="text-3xl font-semibold my-15">Recent Transactions</h2><hr />
                <MyTranx /> 
            </div>
        </div>
    );
};

export default HomePage;
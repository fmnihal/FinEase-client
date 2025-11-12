import React from 'react';
import DashBanner from './DashBanner';
import IncomeVsExpenseTrend from './IncomeVsExpenseTrend';
import SpendingByCategory from './SpendingByCategory';
import MonthlyBudget from '../Budgets/MonthlyBudget';
import Goals from '../Goals/Goals';
import Tranx from '../Transactions/Tranx';

const Dash = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <DashBanner></DashBanner>
            <div className='flex gap-5'>
                <SpendingByCategory></SpendingByCategory>
                <IncomeVsExpenseTrend />
            </div>
            <div className='flex gap-5'>
                <MonthlyBudget />
                <Goals />
            </div>
            <Tranx />
        </div>
    );
};

export default Dash;
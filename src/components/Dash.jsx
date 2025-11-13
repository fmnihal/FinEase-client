import React from 'react';
import DashBanner from './DashBanner';
import IncomeVsExpenseTrend from './IncomeVsExpenseTrend';
import SpendingByCategory from './SpendingByCategory';
import Budget from './Budget';
import Goals from './Goals';
import Tranx from './MyTranx';

const Dash = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <DashBanner></DashBanner>
            <div className='flex gap-5'>
                <SpendingByCategory></SpendingByCategory>
                <IncomeVsExpenseTrend />
            </div>
            <div className='flex gap-5'>
                <Budget />
                <Goals />
            </div>
            <Tranx />
        </div>
    );
};

export default Dash;
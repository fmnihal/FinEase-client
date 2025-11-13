import React from 'react';
import DashBannerCard from './DashBannerCard';

const DashBanner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-5xl font-semibold'>Welcome back, Nihal!</h1>
            <div className='flex gap-5 my-5'>
                <DashBannerCard></DashBannerCard>
                <DashBannerCard></DashBannerCard>
                <DashBannerCard></DashBannerCard>
                <DashBannerCard></DashBannerCard>
            </div>
        </div>
    );
};

export default DashBanner;
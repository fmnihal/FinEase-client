import React from 'react';
import DashBannerCard from './DashBannerCard';

const DashBanner = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
            <h1 className='text-5xl font-semibold text-center'>Welcome to FinEase!</h1>
            {/* <div className='flex gap-5 my-5'>
                <DashBannerCard></DashBannerCard>
                <DashBannerCard></DashBannerCard>
                <DashBannerCard></DashBannerCard>
                <DashBannerCard></DashBannerCard>
            </div> */}
        </div>
    );
};

export default DashBanner;
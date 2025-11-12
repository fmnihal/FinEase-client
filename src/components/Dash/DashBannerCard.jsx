import React from 'react';
import {BadgeDollarSign} from 'lucide-react';

const DashBannerCard = () => {
    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">Total Income</h2>
                {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                <div className='flex gap-2 text-lg items-center'><BadgeDollarSign /> <span>50000</span></div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default DashBannerCard;
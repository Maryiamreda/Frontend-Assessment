import React from 'react';
import DropDown from '../assets/icons/DropDown.svg';
const Topheader = () => {
    return (
        <div className='bg-black text-white text-base h-[44px]  flex justify-center items-center  '>
            <div className='flex gap-3'>
                <h4>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h4>
                <a className='font-semibold underline ' >ShopNow</a>
            </div>
            <div className='flex  gap-1'>
                <p>English</p>
                <img src={DropDown} className='max-w-11 ' />
            </div>
        </div>
    );
}

export default Topheader;

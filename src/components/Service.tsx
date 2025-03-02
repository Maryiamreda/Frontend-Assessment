import React from 'react';
import ServiceIcon from '../assets/icons/Services.svg'
import Customer from '../assets/icons/Customer.svg'
import Secure from '../assets/icons/Secure.svg'

const Service = () => {
    return (
        <div className=" mx-28 mt-20 pb-20  justify-center items-center flex-col  flex  md:flex-row gap-20">
            <div className='flex flex-col items-center gap-2'>
                <div className='bg-black border-9 border-[#D1D4DB] rounded-full flex items-center justify-center w-15 h-15'>
                    <img src={ServiceIcon} className='w-7' />

                </div>
                <h2 className='text-lg font-bold'>FREE AND FAST DELIVERY</h2>
                <p className='text-sm'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='bg-black border-9 flex items-center justify-center  border-[#D1D4DB]  rounded-full w-15 h-15'>
                    <img src={Customer} className='w-8' />

                </div>

                <h2 className='text-lg font-bold'>24/7 CUSTOMER SERVICE</h2>
                <p className='text-sm'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='bg-black border-9 flex items-center justify-center  border-[#D1D4DB]  rounded-full  w-15 h-15'>
                    <img src={Secure} className='w-7' />

                </div>

                <h2 className='text-lg font-bold'>MONEY BACK GUARANTEE</h2>
                <p className='text-sm'>We reurn money within 30 days</p>
            </div>

        </div>
    );
}

export default Service;

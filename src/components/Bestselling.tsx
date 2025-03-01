import NorthCoat from '../assets/images/noarth_coat.png'
import GucciBag from '../assets/images/gucci_bag.png'
import CPUCooler from '../assets/images/cpu.png'
import BookShelf from '../assets/images/book_chair.png';
import Eye from '../assets/icons/Filleyes.svg';
import Heart from '../assets/icons/Wishlist.svg';
import Fivestars from '../assets/icons/Fivestars.svg';
import Fourstars from '../assets/icons/FourStars.svg';

import { useState } from 'react';
const items = [
    {
        id: 1,
        name: "The north coat",
        currentPrice: 260,
        originalPrice: 360,
        discount: "-28%",
        image: NorthCoat,
        rating: 5,
        reviews: 65
    },
    {
        id: 2,
        name: "Gucci duffle bag",
        currentPrice: 960,
        originalPrice: 1160,
        discount: "-17%",
        image: GucciBag,
        rating: 4,
        reviews: 65
    },
    {
        id: 3,
        name: "RGB liquid CPU Cooler",
        currentPrice: 160,
        originalPrice: 170,
        discount: "-6%",
        image: CPUCooler,
        rating: 4,
        reviews: 65
    },
    {
        id: 4,
        name: "Small BookSelf",
        currentPrice: 360,
        originalPrice: null,
        discount: null,
        image: BookShelf,
        rating: 5,
        reviews: 65
    }
];
const Bestselling = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const setstars = (rate: number) => {

    }



    return (
        <div className='mx-28 mt-20 pb-20 border-b  border-b-gray-300  flex flex-col gap-5'>
            <div className='flex text-[#DB4444] text-sm font-semibold items-center gap-2 '>
                <div className='bg-[#DB4444] w-3 h-7 rounded'></div>
                <p className='font-medium'>This Month</p>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex gap-5 justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>Best Selling Products</h1>

                </div>
                <div className='flex items-center justify-center bg-[#DB4444] text-white text-sm rounded py-3 px-8 cursor-pointer'>
                    <p>View All</p>
                </div>
            </div>
            <div className='  mt-5 flex gap-4 justify-between w-full  scroll-smooth'>
                {items.map((item) => (
                    <div
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        key={item.id} className="flex-shrink-0 cursor-pointer hover:translate-y-[-10px] w-56 transition-all duration-500">
                        <div className='bg-[#F7F7FC] h-48 p-3 rounded  flex justify-center items-center '>
                            <img src={item.image} alt={item.name} className="w-36 mx-auto" />
                            <div className='relative -top-14'>
                                <div className='bg-white p-1 w-6 h-6 rounded-full flex items-center justify-center mb-3  '>   <img src={Heart} className='w-3.5' />  </div>
                                <div className='bg-white p-1 w-6 h-6  rounded-full '><img src={Eye} className='w-4' /> </div>
                            </div>
                            {hoveredItem === item.id && (
                                <div className='bg-black text-white w-full py-1.5  font-medium text-sm
                                 flex justify-center items-center 
                                 absolute bottom-18 rounded-b left-0 cursor-pointer'>
                                    Add To Cart
                                </div>
                            )}
                        </div>
                        <h3 className="mt-2 font-bold text-sm">{item.name}</h3>
                        <div className=' flex gap-3 items-center '>
                            <p className="text-base text-red-500 font-semibold ">${item.currentPrice}</p>
                            <p className="text-xs font-semibold line-through text-gray-500">${item.originalPrice}</p>
                        </div>
                        <div className='flex gap-3 items-center '>
                            {item.rating == 5 ? <img src={Fivestars} /> : <img src={Fourstars} />}
                            <p className="text-xs font-semibold  text-gray-500">({item.reviews})</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bestselling;

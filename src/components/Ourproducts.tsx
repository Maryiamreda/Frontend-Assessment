import Arrow from '/assets/icons/Arrowright.svg';

import Eye from '/assets/icons/Filleyes.svg';
import Fivestars from '/assets/icons/Fivestars.svg';
import Threestars from '/assets/icons/Threestars.svg';
import Fourstars from '/assets/icons/FourStars.svg';

import Heart from '/assets/icons/Wishlist.svg';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const items = [
    {
        id: 1,
        name: "Breed Dry Dog Food",
        price: 100,
        rating: 3,
        reviews: 35,
        image: '/assets/images/dogcar.jpeg',
        colors: []
    },
    {
        id: 2,
        name: "CANON EOS DSLR Camera",
        price: 360,
        rating: 4.5,
        reviews: 95,
        image: '/assets/images/camera.png',
        colors: []
    },
    {
        id: 3,
        name: "ASUS FHD Gaming Laptop",
        price: 700,
        rating: 5,
        reviews: 325,
        image: '/assets/images/gaminglaptop.png',
        colors: []
    },
    {
        id: 4,
        name: "Curology Product Set",
        price: 500,
        rating: 4,
        reviews: 145,
        image: '/assets/images/productset.png',
        colors: []
    },
    {
        id: 5,
        name: "Kids Electric Car",
        price: 960,
        rating: 5,
        reviews: 65,
        image: '/assets/images/electriccar.png',
        colors: ["#FB1314", "black"]
    },
    {
        id: 6,
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        rating: 4.5,
        reviews: 35,
        image: '/assets/images/soccer.png',
        colors: ["#EEFF61", "#DB4444"]
    },
    {
        id: 7,
        name: "GP11 Shooter USB Gamepad",
        price: 550,
        rating: 5,
        reviews: 55,
        image: '/assets/images/gamepad.png',
        colors: ["black", "#DB4444"]
    },
    {
        id: 8,
        name: "Quilted Satin Jacket",
        price: 660,
        rating: 4.5,
        reviews: 55,
        image: '/assets/images/jacket.png',
        colors: ["#184A48", "#DB4444"]
    }
];

const Ourproducts = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const { addToWishlist, addToCart } = useContext(AppContext);

    const ratingStars = (rating: number) => {
        if (rating === 5) {
            return <img src={Fivestars} alt="5 stars" />;
        } else if (rating >= 4.5) {
            return <img src={Fivestars} alt="4.5 stars" />;
        } else if (rating >= 4) {
            return <img src={Fourstars} alt="4 stars" />;
        } else if (rating >= 3.5) {
            return <img src={Fourstars} alt="3.5 stars" />;
        } else if (rating >= 3) {
            return <img src={Threestars} alt="3 stars" />;
        } else if (rating >= 2.5) {
            return <img src={Threestars} alt="2.5 stars" />;
        } else {
            return <img src={Threestars} alt="0 stars" />;
        }
    };
    return (
        <div className='mx-28 mt-20 pb-20 border-b  border-b-gray-300  flex flex-col  gap-5'>
            <div className='flex text-[#DB4444] text-sm font-semibold items-center gap-2 text-start '>
                <div className='bg-[#DB4444] w-3 h-7 rounded'></div>
                <p className='font-medium'>Our Products</p>
            </div>
            <div className='flex justify-between items-center  '>
                <div className='flex gap-5 justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>Explore Our Products</h1>

                </div>
                <div className='flex gap-2'>
                    <div className='bg-[#F7F7FC] p-2 rounded-full'>
                        <img src={Arrow} className='rotate-180 cursor-pointer' />

                    </div>
                    <div className='bg-[#F7F7FC] p-2 rounded-full'>
                        <img src={Arrow} className='cursor-pointer' />

                    </div>
                </div>
            </div>
            <div className='  mt-5 grid gap-3 grid-cols-1  md:grid-cols-3 lg:grid-cols-4  w-full   justify-between  lg:gap-15 items-center'>
                {items.map((item) => (
                    <div
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        key={item.id} className="flex-shrink-0 cursor-pointer hover:translate-y-[-10px] lg:w-56 transition-all duration-500">
                        <div className='bg-[#F7F7FC] h-48 p-3 rounded relative overflow-hidden   flex items-center justify-center '>

                            <img src={item.image} alt={item.name} className={` ${item.name == "Breed Dry Dog Food" ? "w-20" : "w-40"} `} />

                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button
                                    onClick={() => addToWishlist({
                                        name: item.name,
                                        image: item.image,
                                        price: item.price,
                                        quantitiy: 1,
                                    })} className="bg-white w-8 h-8 rounded-full flex items-center cursor-pointer shadow-sm justify-center ">
                                    <img src={Heart} className="w-4 h-4" alt="Favorite" />

                                </button>
                                <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer">
                                    <img src={Eye} className="w-4 h-4" alt="Quick view" />
                                </button>
                            </div>

                            {hoveredItem === item.id && (
                                <div
                                    onClick={() => addToCart({
                                        name: item.name,
                                        image: item.image,
                                        price: item.price,
                                        quantitiy: 1,

                                    })}
                                    className='bg-black text-white w-full py-1.5  font-medium text-sm
                                 flex justify-center items-center 
                                 absolute bottom-0 rounded-b left-0 cursor-pointer'>
                                    Add To Cart
                                </div>
                            )}
                        </div>
                        <h3 className="mt-2 font-bold text-sm">{item.name}</h3>


                        <div className='flex gap-3 items-center '>
                            <p className="text-base text-red-500 font-semibold ">${item.price}</p>
                            {ratingStars(item.rating)}

                            <p className="text-xs font-semibold  text-gray-500">({item.reviews})</p>
                        </div>
                        <div className='flex gap-2'>
                            {item.colors.length > 0 &&
                                item.colors.map((color) => (
                                    <div className='item-color border border-transparent rounded-full hover:border-2 hover:border-black'>
                                        <div
                                            className=' w-4 h-4 rounded-full border border-transparent hover:border-2 hover:border-white'
                                            style={{ backgroundColor: color }}
                                        ></div>
                                    </div>
                                ))}
                        </div>


                    </div>
                ))}

            </div>
            <button className='text-white bg-[#DB4444] cursor-pointer p-2.5 text-xs w-40 rounded my-10  flex justify-center  ml-[43%] '>View All Products</button>

        </div>
    );
}

export default Ourproducts;

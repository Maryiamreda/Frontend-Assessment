import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner'

import Arrow from '/assets/icons/Arrowright.svg';
import Eye from '/assets/icons/Filleyes.svg';
import Heart from '/assets/icons/Wishlist.svg';
import { AppContext } from '../context/AppContext';
const items = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", currentPrice: 120, originalPrice: 160, discount: "-25%", image: '/assets/images/red_gamepad.png', rating: 4.8, reviews: 88 },
    { id: 2, name: "AK-900 Wired Keyboard", currentPrice: 960, originalPrice: 1160, discount: "-20%", image: '/assets/images/gaming_keyboard.png', rating: 4.7, reviews: 75 },
    { id: 3, name: "IPS LCD Gaming Monitor", currentPrice: 370, originalPrice: 400, discount: "-30%", image: '/assets/images/gaming_monitor.png', rating: 4.8, reviews: 99 },
    { id: 4, name: "S-Series Comfort Chair", currentPrice: 375, originalPrice: 400, discount: "-25%", image: '/assets/images/comfort_chair.png', rating: 4.7, reviews: 99 },
    {
        id: 8,
        name: "The north coat",
        currentPrice: 260,
        originalPrice: 360,
        discount: "-28%",
        image: '/assets/images/noarth_coat.png',
        rating: 5,
        reviews: 65
    },

    { id: 5, name: "ASUS FHD Gaming Laptop", currentPrice: 960, originalPrice: 1160, discount: "-35%", image: '/assets/images/gaminglaptop.png', rating: 5, reviews: 65 },
    { id: 6, name: "HAVIT HV-G92 Gamepad", currentPrice: 120, originalPrice: 160, discount: "-25%", image: '/assets/images/red_gamepad.png', rating: 4.8, reviews: 88 },
    { id: 7, name: "AK-900 Wired Keyboard", currentPrice: 960, originalPrice: 1160, discount: "-20%", image: '/assets/images/gaming_keyboard.png', rating: 4.7, reviews: 75 },
    {
        id: 8,
        name: "The north coat",
        currentPrice: 260,
        originalPrice: 360,
        discount: "-28%",
        image: '/assets/images/noarth_coat.png',
        rating: 5,
        reviews: 65
    },

];

const Flashsales = () => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { addToWishlist, addToCart } = useContext(AppContext);

    const scroll = (direction: string) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth / 2;

            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };


    const getTimeLeft = () => {
        const now = new Date();
        const nextMonday = new Date();
        nextMonday.setDate(now.getDate() + ((8 - now.getDay()) % 7 || 7));
        nextMonday.setHours(20, 0, 0, 0);
        return Math.max(0, Math.floor(Number(nextMonday) - Number(now)) / 1000);
    };


    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return getTimeLeft();
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className='mt-20 border-b  border-b-gray-300  mx-28 flex flex-col  gap-4 '>
            <div className='flex text-[#DB4444] text-sm font-semibold items-center gap-2 '>
                <div className='bg-[#DB4444] w-3 h-7 rounded'></div>
                <p>Today’s</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='flex flex-col md:flex-row gap-5  justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>Flash Sales</h1>
                    <div className="flex gap-2">
                        <div>
                            <p className='text-xs'>Days</p>
                            <div className='text-3xl font-semibold'>
                                {Math.floor(time / 86400)}      <span className='text-[#DB4444]'>:</span>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs'>Hours</p>
                            <div className='text-3xl font-semibold'>
                                {Math.floor((time % 86400) / 3600)}      <span className='text-[#DB4444]'>:</span>
                            </div>

                        </div>
                        <div>
                            <p className='text-xs'>Minutes</p>
                            <div className='text-3xl font-semibold'>
                                {Math.floor((time % 3600) / 60)}         <span className='text-[#DB4444]'>:</span>
                            </div>

                        </div>

                        <div>
                            <p className='text-xs'>Seconds</p>
                            <div className='text-3xl font-semibold'> {Math.floor(time % 60)}
                            </div>

                        </div>


                    </div>
                </div>
                <div className='flex gap-2'>
                    <div onClick={() => scroll("left")} className='bg-[#F7F7FC] p-2 rounded-full'>
                        <img src={Arrow} className='rotate-180 cursor-pointer' />

                    </div>
                    <div onClick={() => scroll("right")} className='bg-[#F7F7FC] p-2 rounded-full'>
                        <img src={Arrow} className='cursor-pointer' />

                    </div>
                </div>
            </div>
            <div ref={scrollRef} className='  mt-5 flex gap-4 overflow-x-scroll scrollbar-hidden  scroll-smooth'>
                {items.map((item) => (
                    <div
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        key={item.id} className="flex-shrink-0 cursor-pointer hover:translate-y-[-10px] w-56 transition-all duration-500">
                        <div className='bg-[#F7F7FC] h-48 p-3 rounded relative  flex items-center '>

                            <div className='text-white text-[10px] w-10 h-5 flex items-center justify-center rounded  bg-[#DB4444] absolute top-3 left-3 '>{item.discount}</div>
                            <img src={item.image} alt={item.name} className="w-36 mx-auto" />

                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button
                                    onClick={() => {
                                        addToWishlist({
                                            name: item.name,
                                            image: item.image,
                                            price: item.currentPrice,
                                            quantitiy: 1,

                                        }),
                                            toast('Added To Whislist')

                                    }}
                                    className="bg-white w-8 h-8 rounded-full flex items-center cursor-pointer shadow-sm justify-center ">
                                    <img src={Heart} className="w-4 h-4" alt="Favorite" />
                                </button>
                                <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer">
                                    <img src={Eye} className="w-4 h-4" alt="Quick view" />
                                </button>
                            </div>

                            {hoveredItem === item.id && (
                                <div
                                    onClick={() => {
                                        addToCart({
                                            name: item.name,
                                            image: item.image,
                                            price: item.currentPrice,
                                            quantitiy: 1,

                                        }),
                                            toast('Added To Cart')
                                    }}
                                    className='bg-black text-white w-full py-1.5  font-medium text-sm
                                 flex justify-center items-center 
                                 absolute bottom-0 rounded-b left-0 cursor-pointer'>
                                    Add To Cart
                                </div>
                            )}
                        </div>
                        <h3 className="mt-2 font-bold text-sm">{item.name}</h3>
                        <div className=' flex gap-3 items-center '>
                            <p className="text-base text-[#DB4444]font-semibold ">${item.currentPrice}</p>
                            <p className="text-xs font-semibold line-through text-gray-500">${item.originalPrice}</p>
                        </div>
                        <div className='flex gap-3 items-center '>
                            <div>stars</div>
                            <p className="text-xs font-semibold  text-gray-500">({item.reviews})</p>
                        </div>

                    </div>
                ))}
            </div>
            <button className='text-white bg-[#DB4444] cursor-pointer p-2.5 text-xs w-40 rounded ml-[43%] my-10  flex justify-center   '>View All Products</button>

        </div>
    );
};

export default Flashsales;

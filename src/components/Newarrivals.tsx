import Speakers from '../assets/images/speakers.png';
import Womenhat from '../assets/images/woman_wearing_hat.jpeg';
import Playstation from '../assets/images/playstation.png';
import Perfume from '../assets/images/perfume.png';

const Newarrivals = () => {
    return (
        <div className=" mx-28 mt-20 pb-20 border-b  border-b-gray-300  flex flex-col gap-5">
            <div className='flex text-[#DB4444] text-sm font-semibold items-center gap-2 '>
                <div className='bg-[#DB4444] w-3 h-7 rounded'></div>
                <p className='font-medium'>Featured</p>
            </div>
            <h1 className='text-3xl font-semibold'>New Arrival</h1>

            <div className='flex gap-10 mt-10 '>
                <div className='bg-black text-white rounded flex flex-col-reverse relative hover:translate-y-[-10px]  transition-all duration-500 cursor-pointer'>
                    <div className='absolute bottom-8 pl-10 flex flex-col gap-2'>
                        <h2 className='font-semibold text-lg'>PlayStation 5</h2>
                        <p className='text-xs'>lack and White version of the PS5 <br /> coming out on sale.</p>
                        <a href='#categories' className=' text-sm underline cursor-pointer ' >ShopNow</a></div>


                    <img src={Playstation} className='w-[500px] h-[430px]' />

                </div>
                <div className='flex flex-col gap-10 w-[550px]'>
                    <div className='bg-black text-white rounded flex hover:translate-y-[-10px] relative  transition-all duration-500 cursor-pointer'>

                        <div className=' flex flex-col gap-2 mt-25 ml-5 '>
                            <h2 className='font-semibold text-lg'>Women’s Collections</h2>
                            <p className='text-xs'>Featured woman collections that <br /> give you another vibe.</p>
                            <a href='#categories' className='font-semibold text-sm underline cursor-pointer ' >ShopNow</a>
                        </div>
                        <img src={Womenhat} className='w-80 transform -scale-x-100 ' />


                    </div>
                    <div className='flex  justify-between '>
                        <div className='bg-black text-white flex flex-col-reverse justify-center rounded relative w-[250px] hover:translate-y-[-10px]  transition-all duration-500 cursor-pointer'>
                            <img src={Speakers} className='absolute left-6  w-90' />

                            <div className='absolute bottom-5 left-5'>
                                <h2 className='font-semibold text-lg'>Speakers</h2>
                                <p className='text-xs'>Amazon wireless speakers</p>
                                <a href='#categories' className='font-semibold text-sm underline cursor-pointer ' >ShopNow</a>
                            </div>

                        </div>
                        <div className='bg-black text-white rounded flex flex-col-reverse relative w-[250px] hover:translate-y-[-10px]  transition-all duration-500 cursor-pointer'>
                            <div className='absolute bottom-5 left-5'>
                                <h2 className='font-semibold text-lg'>Perfume</h2>
                                <p className='text-xs'>GUCCI INTENSE OUD EDP</p>
                                <a href='#categories' className='font-semibold text-sm underline cursor-pointer ' >ShopNow</a>
                            </div>
                            <img src={Perfume} className='w-50 ml-6' />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newarrivals;

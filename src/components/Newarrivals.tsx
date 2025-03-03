import Speakers from '/assets/images/speakers.png';
import Womenhat from '/assets/images/woman_wearing_hat.jpeg';
import Playstation from '/assets/images/playstation.png';
import Perfume from '/assets/images/perfume.png';

const Newarrivals = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 mt-10 md:mt-20 pb-10 md:pb-20 border-b border-b-gray-300 flex flex-col gap-4 md:gap-5">
            <div className='flex text-[#DB4444] text-sm font-semibold items-center gap-2'>
                <div className='bg-[#DB4444] w-3 h-7 rounded'></div>
                <p className='font-medium'>Featured</p>
            </div>
            <h1 className='text-2xl md:text-3xl font-semibold'>New Arrival</h1>

            <div className='flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10'>
                <div className='bg-black text-white rounded flex flex-col-reverse relative hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>
                    <div className='absolute bottom-4 sm:bottom-8 pl-4 sm:pl-10 flex flex-col gap-2'>
                        <h2 className='font-semibold text-base md:text-lg'>PlayStation 5</h2>
                        <p className='text-xs'>Black and White version of the PS5 <br /> coming out on sale.</p>
                        <a href='#categories' className='text-sm underline cursor-pointer'>ShopNow</a>
                    </div>
                    <img src={Playstation} className='w-full h-auto md:w-[350px] lg:w-[500px] lg:h-[430px] ' />
                </div>

                <div className='flex flex-col gap-6 md:gap-10 w-full md:w-[550px]'>
                    <div className='bg-black text-white rounded flex hover:translate-y-[-10px] relative transition-all duration-500 cursor-pointer'>
                        <div className='flex flex-col gap-2 justify-center ml-4 sm:ml-5 my-4'>
                            <h2 className='font-semibold text-base md:text-lg'>Women's Collections</h2>
                            <p className='text-xs'>Featured woman collections that <br /> give you another vibe.</p>
                            <a href='#categories' className='font-semibold text-sm underline cursor-pointer'>ShopNow</a>
                        </div>
                        <img src={Womenhat} className='w-48 sm:w-60 md:w-80 transform -scale-x-100 ml-auto ' />
                    </div>

                    <div className='flex flex-col sm:flex-row gap-6 justify-between'>
                        <div className='bg-black text-white flex flex-col-reverse justify-center rounded relative w-full sm:w-[48%] md:w-[250px] h-[200px] hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>
                            <div className="absolute inset-0 z-0 blur-2xl opacity-20 bg-white rounded-full scale-150 transform translate-y-6"></div>
                            <img src={Speakers} className='absolute left-6 w-auto h-[150px] ' />
                            <div className='absolute bottom-5 left-5'>
                                <h2 className='font-semibold text-base md:text-lg'>Speakers</h2>
                                <p className='text-xs'>Amazon wireless speakers</p>
                                <a href='#categories' className='font-semibold text-sm underline cursor-pointer'>ShopNow</a>
                            </div>
                        </div>

                        <div className='bg-black text-white rounded flex flex-col-reverse relative w-full sm:w-[48%] md:w-[250px] h-[200px] hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>
                            <div className='absolute bottom-5 left-5'>
                                <h2 className='font-semibold text-base md:text-lg'>Perfume</h2>
                                <p className='text-xs'>GUCCI INTENSE OUD EDP</p>
                                <a href='#categories' className='font-semibold text-sm underline cursor-pointer'>ShopNow</a>
                            </div>
                            <div>
                                <div className="absolute inset-0 z-0 blur-2xl opacity-20 bg-white rounded-full scale-150 transform translate-y-6"></div>
                                <img src={Perfume} className='w-auto h-[150px] mx-auto ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newarrivals;
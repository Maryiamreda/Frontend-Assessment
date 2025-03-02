import Boombox from '../assets/images/boombox.png'
const Secondheader = () => {
    return (
        // 27CE60
        <div className=' mx-28 mt-20 bg-black md:h-[450px] pl-12 flex flex-col md:flex-row items-center justify-between '>
            <div className='text-start flex flex-col gap-5 items-start justify-start mt-4'>
                <p className='text-[#21AF52] text-sm font-medium'>Categories</p>
                <h1 className='text-white text-5xl font-semibold'>Enhance Your  <br /> Music Experience</h1>
                <div className="flex  items-center gap-3  py-4 w-full">
                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-14 h-14 md:w-16 md:h-16">
                        <span className="text-xl font-bold">23</span>
                        <span className="text-xs">Hours</span>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-14 h-14 md:w-16 md:h-16">
                        <span className="text-xl font-bold">05</span>
                        <span className="text-xs">Days</span>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-14 h-14 md:w-16 md:h-16">
                        <span className="text-xl font-bold">59</span>
                        <span className="text-xs">Minutes</span>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-14 h-14 md:w-16 md:h-16">
                        <span className="text-xl font-bold">35</span>
                        <span className="text-xs">Seconds</span>
                    </div>
                </div>
                <button className='bg-[#27CE60] text-white rounded py-3 px-9'>Buy New!</button>
            </div>
            <div className=' '>
                <img src={Boombox} className='w-[700px] transform -scale-x-100 relative z-10 '

                />

            </div>




        </div>
    );
}

export default Secondheader;

import Boombox from '/assets/images/boombox.png'

const Secondheader = () => {
    return (
        <div className='w-full md:w-auto mx-4 md:mx-28 mt-10 md:mt-20 bg-black
         md:h-[450px] md:pl-12
          flex flex-col md:flex-row items-center justify-between'>
            <div className='text-start flex flex-col gap-3 md:gap-5 items-start justify-start mt-4 px-6 md:px-0'>
                <p className='text-[#21AF52] text-xs md:text-sm font-medium'>Categories</p>
                <h1 className='text-white text-lg md:text-5xl font-semibold'>Enhance Your  <br /> Music Experience</h1>
                <div className="flex items-center gap-2 md:gap-3 py-4 w-full">
                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-10 h-10 md:w-16 md:h-16">
                        <span className="md:text-xl text-sm font-bold">23</span>
                        <span className="text-[0.5rem] md:text-xs">Hours</span>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-10 h-10 md:w-16 md:h-16">
                        <span className="md:text-xl text-sm font-bold">05</span>
                        <span className="text-[0.5rem] md:text-xs">Days</span>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-10 h-10 md:w-16 md:h-16">
                        <span className="md:text-xl text-sm font-bold">59</span>
                        <span className="text-[0.5rem] md:text-xs">Minutes</span>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white rounded-full w-10 h-10 md:w-16 md:h-16">
                        <span className="md:text-xl text-sm font-bold">35</span>
                        <span className="text-[0.5rem] md:text-xs">Seconds</span>
                    </div>
                </div>
                <button className='bg-[#27CE60] text-white rounded py-2 md:py-3 px-6 md:px-9'>Buy New!</button>
            </div>
            <div className="relative w-full overflow-hidden">
                <div className="relative mx-auto w-fit">
                    <img
                        src={Boombox}
                        className="w-[250px] md:w-[700px] transform -scale-x-100 relative z-10"
                        alt="Boombox"
                    />
                    <div
                        className="absolute inset-0 z-0 blur-xl opacity-10 bg-white rounded-full scale-60 transform translate-y-4"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Secondheader;
import Arrow from '/assets/icons/Arrowright.svg';

const items = [
    { name: "Phones", image: '/assets/icons/Cellphone.svg' },
    { name: "Computers", image: '/assets/icons/Computer.svg' },
    { name: "SmartWatch", image: '/assets/icons/Smartwatch.svg' },
    { name: "Camera", image: '/assets/icons/Camera.svg' },
    { name: "Headphones", image: '/assets/icons/Headphone.svg' },
    { name: "Gaming", image: '/assets/icons/Gamepad.svg' },
]
const Categories = () => {
    return (
        <div id="categories" className=" mx-28 mt-20 pb-20 border-b  border-b-gray-300  flex flex-col gap-5">
            <div className='flex text-[#DB4444] text-sm font-semibold items-center gap-2 '>
                <div className='bg-[#DB4444] w-3 h-7 rounded'></div>
                <p className='font-medium'>Categories</p>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex gap-5 justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>Browse By Category</h1>

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
            <div className='flex flex-col md:flex-row w-full gap-5 md:justify-between l-5'>
                {items.map((item) => (
                    <div className=' icon-bg-white  flex flex-col justify-center items-center border border-gray-300 rounded w-35 h-35 hover:bg-[#DB4444] hover:text-white hover:border-transparent'>
                        <img src={item.image} className='w-13 icon-bg-white' />
                        <p className='text-sm font-medium'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;

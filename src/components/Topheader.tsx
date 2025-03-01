import DropDown from '../assets/icons/DropDown.svg';
const Topheader = () => {
    return (
        <div className='bg-black text-white text-base h-[44px]  flex flex-col md:flex-row justify-center items-center  '>
            <div className='flex gap-3'>
                <h4>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h4>
                <a href='#categories' className='font-semibold underline cursor-pointer ' >ShopNow</a>
            </div>
            <div className='flex  gap-1 absolute right-7'>
                <p>English</p>
                <img src={DropDown} className='max-w-11 ' />
            </div>
        </div>
    );
}

export default Topheader;

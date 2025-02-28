import Hero from '../assets/images/hero.svg';
import Apple from '../assets/images/apple.png';
import Arrowright from '../assets/icons/Arrowright.svg'
const Header = () => {
    return (
        <div className='bg-black text-white font-normal mt-10  pl-10 py-6 w-[800px]  '>

            <div className='flex justify-between'>
                <div className='flex flex-col pt-9 '>
                    <div className='flex text-base items-center gap-2'>
                        <img src={Apple} className='w-11' />
                        <p className='text-base'>iPhone 14 Series</p>
                    </div>
                    <h1 className='text-3xl md:text-5xl font-semibold  text-start leading-16'>Up to 10% <br /> off Voucher</h1>
                    <div className='flex text-white gap-2 mt-3'>
                        <p className='border-b-1 text-base '>Shop Now</p>
                        <img src={Arrowright} className='svg-white   max-w-11' />
                    </div>
                </div>
                <div>
                    <img src={Hero} className='w-[450px]' />
                </div>
            </div>
            <div className='ellipse flex gap-2  justify-center items-center'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;

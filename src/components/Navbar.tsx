import { NavLink, useNavigate } from 'react-router-dom';
import WishList from '/assets/icons/Wishlist.svg';
import Search from '/assets/icons/SearchIcon.svg';
import Cart from '/assets/icons/Cart.svg';
const NavBar = () => {
    const navigate = useNavigate();

    return (

        <div className='flex  items-center justify-between border-b px-28 py-4 border-b-gray-300'>
            <h1 className='text-xl font-bold'>Exclusive</h1>
            <div className='text-base font-medium'>
                <ul className='hidden md:inline-flex gap-5 '>
                    <NavLink to="/">
                        <li className='py-1 text-sm '>Home</li>
                        <hr className=' border-none  outline-none h-0.5   bg-gray-400 hidden ' />
                    </NavLink>
                    <NavLink to="/contact">
                        <li className='py-1 text-sm'>Contact</li>
                        <hr className=' border-none  outline-none h-0.5   bg-gray-400 hidden ' />
                    </NavLink>
                    <NavLink to="/about">
                        <li className='py-1 text-sm'>About</li>
                        <hr className=' bg-gray-400  border-none  outline-none h-0.5  hidden ' />
                    </NavLink>
                    <NavLink to="/signup">
                        <li className='py-1 text-sm'>Sign Up</li>
                        <hr className=' bg-gray-400 border-none  outline-none h-0.5  hidden ' />
                    </NavLink>

                </ul>
            </div>
            <div className='flex gap-3 '>
                <div className='flex bg-gray-100 rounded p-2 w-48 justify-between'>
                    <input type='text' placeholder='What are you looking for ?' className='text-xs focus:outline-0' />
                    <img src={Search} className='w-5 cursor-pointer' />
                </div>
                <img src={WishList} onClick={() => navigate('/wishlist')} className='w-5 cursor-pointer' />
                <img src={Cart} onClick={() => navigate('/cart')} className='w-7 cursor-pointer' />

            </div>
        </div>
    );
}

export default NavBar;

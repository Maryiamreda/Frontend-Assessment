import { NavLink, useNavigate } from 'react-router-dom';
import WishList from '/assets/icons/Wishlist.svg';
import Search from '/assets/icons/SearchIcon.svg';
import Cart from '/assets/icons/Cart.svg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const NavBar = () => {
    const navigate = useNavigate();
    const { cart, wishlist } = useContext(AppContext);

    return (

        <div className='flex  items-center justify-between border-b md:px-28 py-4 border-b-gray-300'>
            <h1 onClick={() => navigate("/")} className='text-xl font-bold cursor-pointer'>Exclusive</h1>
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
            <div className='flex gap-3  justify-center items-center'>
                <div className='flex bg-gray-100 rounded p-2 w-48 justify-between'>
                    <input type='text' placeholder='What are you looking for ?' className='text-xs focus:outline-0' />
                    <img src={Search} className='w-5 cursor-pointer' />
                </div>
                <div className='relative'>
                    <img src={WishList} onClick={() => navigate('/wishlist')} className='w-5 cursor-pointer' />
                    {wishlist.length > 0 && (<div className='bg-[#DB4444] w-4 h-4 -top-2 left-3 rounded-full text-white absolute text-[10px] flex items-center justify-center'>{wishlist.length}</div>)}

                </div>
                <div className='relative'>
                    <img src={Cart} onClick={() => navigate('/cart')} className='w-7 cursor-pointer' />
                    {cart.length > 0 && (<div className='bg-[#DB4444] w-4 h-4 -top-1 left-5 rounded-full text-white absolute text-[10px] flex items-center justify-center'>{cart.length}</div>)}

                </div>

            </div>
        </div>
    );
}

export default NavBar;

import Qr from '/assets/images/qr.jpeg'
import Playstore from '/assets/images/playstore.svg'
import Applestore from '/assets/images/applestore.svg'
import Facebook from '/assets/icons/facebook.svg'
import Twitter from '/assets/icons/twitter.svg'
import Instegram from '/assets/icons/instegram.svg'
import Linkedin from '/assets/icons/linkenin.svg'
import Copyright from '/assets/icons/copyright.svg'
import Send from '/assets/icons/send.svg'

const Footer = () => {
    return (
        <div className=' footer bg-black text-white text-start mt-5  pt-4' >
            <div className='flex justify-between flex-col md:flex-row gap-2 px-2 md:px-28'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-xl font-semibold'>Exclusive</h1>
                    <h2 className='text-lg'>Subscribe</h2>
                    <p className='text-xs md:text-sm'>Get 10% off your first order</p>
                    <div className='flex border-2 border-white p-2 rounded  '>
                        <input type='text' placeholder='Enter your email' className='text-xs md:text-sm w-[90px] md:w-[120px]  placeholder-[#A0A3BD]  focus:outline-0' />
                        <img src={Send}
                            className='svg-white w-3 md:w-5'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>Support</h2>
                    <p className=' md:text-xs font-light'>
                        111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.
                    </p>
                    <p className='text-xs font-light'>exclusive@gmail.com</p>
                    <p className='text-xs font-light'>+88015-88888-9999</p>

                </div>
                <div>
                    <h2 className='text-lg mb-2'>Account</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>

                    </ul>
                </div>
                <div>
                    <h2 className='text-lg mb-2'>Quick Link</h2>
                    <ul className=''>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>

                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg ' >Download App</h2>
                    <p className='text-xs'>Save $3 with App New User Only</p>
                    <div className='flex gap-2'>
                        <img src={Qr} className='w-15 h-15' />
                        <div className='flex flex-col gap-2 '>
                            <img src={Playstore} className='h-6' />
                            <img src={Applestore} className=' h-7' />

                        </div>
                    </div>
                    <div className='flex gap-5 cursor-pointer'>
                        <img src={Facebook} className='w-2' />
                        <img src={Instegram} className='w-4' />
                        <img src={Twitter} className=' w-4 svg-white' />
                        <img src={Linkedin} className='w-4' />

                    </div>
                </div>
            </div>
            <div className=' copyrights flex  gap-2  justify-center text-[#D1D4DB] text-xs  opacity-40
         mt-5 p-5
            '>
                <img src={Copyright} className=' w-[15px] filter brightness-0 invert opacity-40" ' />
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    );
}

export default Footer;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Visa from '/assets/images/visa.png';
import Bklash from '/assets/images/bklash.png'
import MasterCard from '/assets/images/mastercard.png'
import Payment from '/assets/images/payment.png'

const Checkout = () => {
    const { cart } = useContext(AppContext);

    return (
        <div className="px-28 py-6 text-start">
            <div className="text-[#808080]"><p>Account / My Account / Product / View cart / <span className="text-black">CheckOut</span> </p></div>
            <div className="flex flex-col sm:justify-center sm:items-center md:flex-row">
                <div className=" md:w-full max-w-xl mx-auto p-6">
                    <h2 className="text-2xl font-medium mb-6">Billing Details</h2>

                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" id="firstName" className="form-input" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="companyName" className="form-label">Company Name</label>
                            <input type="text" id="companyName" className="form-input" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="streetAddress" className="form-label">Street Address</label>
                            <input type="text" id="streetAddress" className="form-input" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="apartment" className="form-label">Apartment, floor, etc. (optional)</label>
                            <input type="text" id="apartment" className="form-input" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="townCity" className="form-label">Town/City</label>
                            <input type="text" id="townCity" className="form-input" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="tel" id="phoneNumber" className="form-input" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="emailAddress" className="form-label">Email Address</label>
                            <input type="email" id="emailAddress" className="form-input" />
                        </div>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500" />
                            <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
                        </label>
                    </form>
                </div>
                <div className="md:w-[400px] mx-20 p-6">
                    <div>
                        {cart.map((item) => (
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex justify-center items-center gap-4">
                                    <img src={item.image} className="w-15 h-15" />
                                    <h3 className="text-sm">{item.name}</h3>
                                </div>
                                <h3 className="text-sm" >${item.price * item.quantitiy}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between  pb-2 pt-3 border-b border-b-[#D9DBE9] text-sm">
                        <p className="">Subtotal:</p>
                        <p>  ${cart.reduce((total, item) => total + item.quantitiy * item.price, 0)}
                        </p>
                    </div>
                    <div className="flex justify-between pb-2 pt-3  border-b border-b-[#D9DBE9] text-sm">
                        <p className="">Shipping:</p>
                        <p>  Free </p>
                    </div>
                    <div className="flex justify-between pb-2 pt-3  border-b border-b-[#D9DBE9] text-sm">
                        <p>Total:</p>
                        <p>${cart.reduce((total, item) => total + item.quantitiy * item.price, 0)}</p>
                    </div>
                    <label className="flex items-center md:justify-between flex-col md:flex-row  cursor-pointer mt-5">
                        <div className="flex items-center space-x-2">
                            <input type="radio" name="payment" className="w-5 h-5 accent-black" />
                            <span className="text-black">Bank</span>
                        </div>
                        <div className="flex gap-3  items-center">
                            <img src={Bklash} className="w-15 h-10" alt="Bkash" />
                            <img src={Visa} className="w-8 h-3" alt="Visa" />
                            <img src={MasterCard} className="w-10 h-6" alt="MasterCard" />
                            <img src={Payment} className="w-10 h-6" alt="Payment" />
                        </div>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer mt-5">
                        <input type="radio" name="payment" className="w-5 h-5 accent-black" />
                        <span className="text-black ">Cash on delivery</span>
                    </label>
                    <div className="flex  items-center flex-col md:flex-row gap-5 h-fit mt-5 ">
                        <div className=' rounded px-10 h-10 flex items-center   border border-black placeholder-[#9096A2 ] font-medium '>
                            <input type="text" placeholder="Coupon Code" className='text-xs focus:outline-0' />
                        </div>
                        <button className="text-white bg-[#DB4444] px-16 h-10 text-xs  cursor-pointer   rounded flex items-center 
                      justify-center ">Apply Coupon</button>
                    </div>
                    <button className="text-white bg-[#DB4444] px-14 mt-5 h-10 text-xs  cursor-pointer   rounded flex items-center 
                      justify-center ">Place Order</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;

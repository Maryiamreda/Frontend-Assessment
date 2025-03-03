import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Drop from '/assets/icons/DropDown.svg';
import Cancel from '/assets/icons/Cancel.svg';
const Cart = () => {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const { cart, updateCartQuantity, deleteFromCart } = useContext(AppContext);

    return (
        <div className="px-28 py-6 text-start">
            <div className="flex gap-2 text-lg font-medium">
                <p onClick={() => navigate("/")} className="cursor-pointer text-[#7D8184]">Home / </p>
                <p className="cursor-pointer "> Cart</p>
            </div>
            <div className="hidden w-full md:flex gap-7 p-5 md:justify-between shadow-md rounded-md mt-7">
                <p className="w-[200px]">Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p className="w-[100px]">Subtotal</p>
            </div>

            {cart.map((item) => (
                <div className="w-full flex flex-col md:flex-row gap-7 p-5 items-center md:justify-between shadow-md rounded-md mt-7">


                    <div
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className=" relative flex items-center justify-center gap-2 w-[200px] cursor-pointer">
                        <img src={item.image} className="w-15 h-15" />
                        <p className="text-xs font-medium">{item.name}</p>

                        {hoveredItem === item.name && (<img src={Cancel} onClick={() => deleteFromCart(item.name)} className="absolute -left-2 top-0" />
                        )}
                    </div>


                    <p>${item.price}</p>
                    <div className="inline-flex  h-10 items-center border-1 border-[#7D8184] rounded">
                        <input
                            type="number"
                            min="1"
                            value={item.quantitiy}
                            onChange={(e) => updateCartQuantity(item.name, Number(e.target.value))}

                            className=" md:w-10 md:h-3 text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="flex flex-col ">
                            <img src={Drop}
                                onClick={() => updateCartQuantity(item.name, item.quantitiy + 1)}

                                className="w-6 px-1  svg-black cursor-pointer rotate-180  " />
                            <img src={Drop}
                                onClick={() => updateCartQuantity(item.name, item.quantitiy - 1)}

                                className="w-6 px-1  svg-black cursor-pointer " />
                        </div>
                    </div>
                    <p className="w-[100px]">
                        ${item.price * item.quantitiy}
                    </p>
                </div>))}
            <div className="flex flex-col lg:flex-row lg:justify-between pt-7">
                <button onClick={() => navigate("/cart")} className="cursor-pointer border border-[#9096A2] px-10 py-2 rounded text-sm  ">Update Cart</button>

                <button onClick={() => navigate("/")} className="cursor-pointer border border-[#9096A2] px-10 py-2 rounded text-sm  ">Return To Shop</button>

            </div>
            <div className="flex gap-6 justify-center items-center lg:justify-between flex-col lg:flex-row pt-15  ">
                <div className="flex justify-center items-center gap-5 h-fit ">
                    <div className=' rounded px-10 h-10 flex items-center   border border-black placeholder-[#9096A2 ] font-medium '>
                        <input type="text" placeholder="Coupon Code" className='text-xs focus:outline-0' />
                    </div>
                    <button className="text-white bg-[#DB4444] px-10 h-10  cursor-pointer text-xs  rounded flex items-center 
                      justify-center ">Apply Coupon</button>
                </div>
                <div className="border border-black rounded w-80 md:w-[400px] h-fit  px-5 py-5 ">
                    <h2 className="text-xl font-medium">Cart Total</h2>
                    <div className="flex justify-between  pb-2 pt-3 border-b border-b-[#D9DBE9] text-lg">
                        <p className="">Subtotal:</p>
                        <p>  ${cart.reduce((total, item) => total + item.quantitiy * item.price, 0)}
                        </p>
                    </div>
                    <div className="flex justify-between pb-2 pt-3  border-b border-b-[#D9DBE9] text-lg">
                        <p className="">Shipping:</p>
                        <p>  Free </p>
                    </div>
                    <div className="flex justify-between pb-2 pt-3  border-b border-b-[#D9DBE9] text-lg">
                        <p>Total:</p>
                        <p>${cart.reduce((total, item) => total + item.quantitiy * item.price, 0)}</p>
                    </div>
                    <button onClick={() => navigate("/checkout")} className="text-white bg-[#DB4444] cursor-pointer  py-3 text-xs w-30 md:w-50 rounded my-5
                     md:mx-[22%] 
                      flex justify-center ">Procees to checkout</button>

                </div>

            </div>

        </div>
    );
}

export default Cart;

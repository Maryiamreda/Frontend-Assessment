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
            <div className="w-full flex gap-7 p-5 md:justify-between shadow-md rounded-md mt-7">
                <p className="w-[200px]">Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p className="w-[100px]">Subtotal</p>
            </div>

            {cart.map((item) => (<div className="w-full flex gap-7 p-5 md:justify-between shadow-md rounded-md mt-7">
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
                <div className="inline-flex h-10 items-center border-1 border-[#7D8184] rounded">
                    <input
                        type="number"
                        min="1"
                        value={item.quantitiy}
                        onChange={(e) => updateCartQuantity(item.name, Number(e.target.value))}

                        className=" w-10 h-3 text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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

        </div>
    );
}

export default Cart;

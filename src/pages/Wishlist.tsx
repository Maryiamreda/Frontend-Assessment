import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '/assets/icons/DeleteIcon.svg';
import Cart from '/assets/icons/Cart.svg';
const Wishlist = () => {
    const { wishlist, deleteFromWishlist, addToCart } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="px-28 py-6 ">
            <div className="flex justify-between">
                <div className="flex justify-center items-center">
                    <p className="font-medium  ">Wishlist ( {wishlist.length} )</p>
                </div>
                <button onClick={() => navigate("/cart")} className="cursor-pointer border border-[#9096A2] px-10 py-2 rounded text-sm font-medium ">Move All To Bag</button>
            </div>
            <div className='  mt-5 grid grid-cols-2  md:grid-cols-4 w-full   justify-between  lg:gap-15 items-center'>
                {wishlist.map((item) => (
                    <div

                        key={item.name} className="flex-shrink-0 cursor-pointer hover:translate-y-[-10px] lg:w-56 transition-all duration-500">
                        <div className='bg-[#F7F7FC] h-48 p-3 rounded relative overflow-hidden   flex items-center justify-center '>

                            <img src={item.image} alt={item.name} className={` ${item.name == "Breed Dry Dog Food" ? "w-20" : "w-40"} `} />

                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button
                                    onClick={() => deleteFromWishlist(
                                        item.name,
                                    )} className="bg-white w-8 h-8 rounded-full flex items-center cursor-pointer shadow-sm justify-center ">
                                    <img src={DeleteIcon} className="w-4 h-4" alt="Favorite" />

                                </button>

                            </div>

                            <div
                                onClick={() => addToCart({
                                    name: item.name,
                                    image: item.image,
                                    price: item.price,
                                    quantitiy: 1
                                })}
                                className='bg-black  w-full py-2  
                                 flex justify-center items-center  gap-2
                                 absolute bottom-0 rounded-b left-0 cursor-pointer'>
                                <img src={Cart} className="w-5 svg-white" />
                                <p className="text-white text-xs"> Add To Cart</p>

                            </div>

                        </div>
                        <h3 className="mt-2 font-bold text-sm">{item.name}</h3>


                        <div className='flex gap-3 items-center '>
                            <p className="text-base text-[#DB4444] font-semibold ">${item.price}</p>

                        </div>



                    </div>
                ))}

            </div>
        </div>
    );
}

export default Wishlist;

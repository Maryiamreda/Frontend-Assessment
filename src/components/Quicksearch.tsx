import Dropdown from '/assets/icons/DropDown.svg';
const Quicksearch = () => {
    return (
        <div className=' flex flex-col gap-3  text-start font-normal text-black border-r pt-10  pr-10 border-r-gray-300 '>
            <div className='flex   gap-10'>
                <p> Woman's Fashion</p>
                <img src={Dropdown} className="svg-black -rotate-90 cursor-pointer" />
            </div>
            <div className='flex   gap-[61px]' >
                <p>Men's Fashion</p>
                <img src={Dropdown} className="svg-black -rotate-90 cursor-pointer" />

            </div>
            <div >Electronics</div>
            <div >Home & Lifestyle</div>
            <div >Medicine</div>
            <div >Sports & Outdoor</div>
            <div >Baby's & Toys</div>
            <div >Groceries & Pets</div>
            <div >Health & Beauty</div>
        </div>



    );
}

export default Quicksearch;

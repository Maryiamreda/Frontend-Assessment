import Bestselling from '../components/Bestselling';
import Categories from '../components/Categories';
import Flashsales from '../components/Flashsales';
import Header from '../components/Header';
import Newarrivals from '../components/Newarrivals';
import Ourproducts from '../components/Ourproducts';
import Quicksearch from '../components/Quicksearch';
import Secondheader from '../components/Secondheader';
import Service from '../components/Service';
import Arrow from '../assets/icons/Arrowright.svg';
const Homepage = () => {
    return (
        <div className='  '>
            <div className='header flex justify-between  h[450px] md:h-[380px] pl-28 pr-10'>
                <Quicksearch />
                <Header />

            </div>
            <Flashsales />
            <Categories />
            <Bestselling />
            <Secondheader />
            <Ourproducts />
            <Newarrivals />
            <Service />
            <div className='mx-28 flex flex-row-reverse pt-10'>
                <div className='bg-[#F7F7FC] p-2 rounded-full'
                    onClick={() => {
                        scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                >
                    <img src={Arrow} className='-rotate-90 cursor-pointer' />

                </div>
            </div>
        </div>
    );
}

export default Homepage;

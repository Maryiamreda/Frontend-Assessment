import Bestselling from '../components/Bestselling';
import Categories from '../components/Categories';
import Flashsales from '../components/Flashsales';
import Header from '../components/Header';
import Newarrivals from '../components/Newarrivals';
import Ourproducts from '../components/Ourproducts';
import Quicksearch from '../components/Quicksearch';
import Secondheader from '../components/Secondheader';

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
        </div>
    );
}

export default Homepage;

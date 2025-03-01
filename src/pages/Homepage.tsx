import Bestselling from '../components/Bestselling';
import Categories from '../components/Categories';
import Flashsales from '../components/Flashsales';
import Header from '../components/Header';
import Quicksearch from '../components/Quicksearch';

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
        </div>
    );
}

export default Homepage;

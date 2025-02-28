import React from 'react';
import Header from '../components/Header';
import Quicksearch from '../components/Quicksearch';

const Homepage = () => {
    return (
        <div className=' px-28 '>
            <div className='header flex justify-between h-[380px]'>
                <Quicksearch />
                <Header />
            </div>
        </div>
    );
}

export default Homepage;

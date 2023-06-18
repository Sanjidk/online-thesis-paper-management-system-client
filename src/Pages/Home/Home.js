import React from 'react';
import Banner from './Banner';
import PaperType from './PaperType';

const Home = () => {
    return (
        <div className='lg:px-12'>
            <Banner></Banner>
            <PaperType></PaperType>
        </div>
    );
};

export default Home;
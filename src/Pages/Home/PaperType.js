import React from 'react';
import SinglePaper from './SinglePaper';

import icon1 from "../../store/icons/icon1.png"
import icon2 from "../../store/icons/icon2.jpg"


const PaperType = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
<SinglePaper img={icon1}></SinglePaper>       
<SinglePaper img={icon2}></SinglePaper>       
<SinglePaper img={icon1}></SinglePaper>       
 </div>
    );
};

export default PaperType;
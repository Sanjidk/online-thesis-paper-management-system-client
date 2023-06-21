import React from 'react';
import SinglePaper from './SinglePaper';

import icon1 from "../../store/icons/icon1.png"
import icon2 from "../../store/icons/icon2.jpg"


const PaperType = () => {
    return (
<div>
<h1 className="text-5xl font-bold text-center text-white mt-20">Categories</h1>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-white mt-8'>

<SinglePaper bgClass="bg-slate-950" paperTitle="Projects" paperDetails="Click the button to listen on app." img={icon1}></SinglePaper>       
<SinglePaper bgClass="bg-blue-950" paperTitle="Research Paper" paperDetails="The button to listen on app." img={icon2}></SinglePaper>       
<SinglePaper bgClass="bg-base-300" paperTitle="Thesis" paperDetails="Button to listen on app." img={icon1}></SinglePaper>       
 </div>
</div>
    );
    
};

export default PaperType;
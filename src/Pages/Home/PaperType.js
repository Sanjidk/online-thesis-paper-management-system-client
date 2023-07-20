import React from 'react';
import SinglePaper from './SinglePaper';

import icon1 from "../../store/icons/icon1.png"
import icon2 from "../../store/icons/icon2.jpg"


const PaperType = () => {
    return (
        <div className='mb-4'>
            <h1 className="text-5xl font-bold text-center text-white mt-12">Categories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-white mt-8'>

                <SinglePaper paperTitle="Project Report" paperDetails="A project report is a document providing detail on the project's overall status or specific aspects of its performance." img={icon1}>
                </SinglePaper>
                <SinglePaper paperTitle="Research Report" paperDetails="Research reports are recorded data prepared by researchers or statisticians after analyzing the information gathered by conducting organized research, surveys or qualitative methods." img={icon2}>
                </SinglePaper>
            </div>
        </div>
    );

};

export default PaperType;
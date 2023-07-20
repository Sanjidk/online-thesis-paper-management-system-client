import React from 'react';
import report from '../../store/notice.jpg';
const Notice = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl text-green-950 font-bold mb-2'>Notice for Practicum / Thesis</h1>

            <div class="card w-96 bg-black mt-2 p-4">
                
                    <h4 className='font-bold mb-2 text-red-400 text-lg p-2'> Submission Deadline: 21-07-2023 </h4>

                <img  src={report} alt="Notice" />

                <button class="btn btn-secondary text-center m-4">Delete Notice</button>

            </div>
        </div>
    );
};

export default Notice;
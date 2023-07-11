import React from 'react';
import { Link } from 'react-router-dom';

const UploadReport = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="bg-teal-800 shadow-xl my-8 rounded">
                <div className="card-body">
                    <h2 className="text-center text-white mb-4 text-3xl font-bold">UPLOAD YOUR REPORT</h2>
                    <form className='grid grid-cols-2 gap-6' onSubmit=''>
                        <div className=''>
                        <h1 className='text-white mb-2'> Your Name </h1>
                            <select class="select select-success w-full max-w-xs">
                                <option disabled selected>REPORT TYPE</option>
                                <option>Research Base Report</option>
                                <option>Project Base Report</option>
                            </select> 
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-white mb-2'> Your Semester</h1>
                            <input type="text" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-white mb-2'> Your Name </h1>
                            <input type="text" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-white mb-2'> Student ID </h1>
                            <input type="number" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-white mb-2'> Report Title</h1>
                            <input type="text" placeholder="Report Title" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-white mb-2'> Supervisor Name </h1>
                            <input type="text" placeholder="Supervisor Name" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-white mb-2'> Submission Date </h1>
                            <input type="date" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <h1 className='text-white mb-2'> Submission Deadline </h1>
                            <input type="date" className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div>
                        <h1 className='text-white mb-2'> Upload Report </h1>
                            <input type="file" class="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>
                        <div>
                        <input className='btn w-full max-w-xs text-white bg-green-500 mt-8' type="submit" value="UPLOAD" />
                        </div>

                    </form>
                </div>
            </div>
        </div >


    );
};

export default UploadReport;
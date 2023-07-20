import React from 'react';

const CreateNotice = () => {
    return (
        <div>
            <h1 className='text-3xl text-green-950 text-center font-bold mb-2'>Create Notice for NEW Semester</h1>
            <div className='flex justify-center items-center'>
                <div className="bg-teal-900 shadow-xl my-2 rounded">
                    <div className="card-body">
                        <h2 className="text-center text-white mb-2 text-2xl font-bold">UPCOMING SEMESTER</h2>
                        <form className='grid grid-cols-1 gap-4'>

                            <div className="form-control w-full max-w-xs">
                                <select className="select select-success">
                                    <option disabled selected>Choose Your Semester</option>
                                    <option>Summer</option>
                                    <option>Fall</option>
                                    <option>Spring</option>
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <h1 className='text-white mb-2'>Your Admission Year</h1>
                                <input type="number" className="input input-bordered input-success w-full max-w-xs" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <h1 className='text-white mb-2'> Submission Deadline </h1>
                                <input type="date" className="input input-bordered input-success w-full max-w-xs" />
                            </div>

                            <div>
                                <h1 className='text-white mb-2'> Upload Report </h1>
                                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                            </div>

                            <div>
                                <input className='btn w-full max-w-xs text-white bg-green-700' type="submit" value="CREATE" />
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CreateNotice;
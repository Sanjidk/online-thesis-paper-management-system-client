import React from 'react';

const ReportList = () => {
    return (
        <div>
        <h1 className='text-3xl text-green-950 text-center mb-4 font-bold'>Report List</h1>

        <div className=" text-black">
            <table className="table">

                <thead className="font-bold text-black">
                    <tr >
                        <th>No.</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Supervisor Name</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        <td>Mahmud Sanjid</td>
                        <td>202202003</td>
                        <td>Sarnali Basak</td>
                        <td className='flex justify-center gap-2'>
                            <button className="btn btn-neutral text-white btn-sm font-bold">Details</button>
                            <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>Lizan Khan</td>
                        <td>202202127</td>
                        <td>Golam Muazzem</td>
                        <td className='flex justify-center gap-2'>
                            <button className="btn btn-neutral text-white btn-sm font-bold">Details</button>
                            <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Sazzad Hossain Sakib</td>
                        <td>202202029</td>
                        <td>Abul Kalam Azad</td>
                        <td className='flex justify-center gap-2'>
                            <button className="btn btn-neutral text-white btn-sm font-bold">Details</button>
                            <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ReportList;
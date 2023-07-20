import React from 'react';

const UserList = () => {
    return (
        <div>
            <h1 className='text-3xl text-green-950 text-center mb-4 font-bold'>Registered Student List</h1>

            <div className="overflow-x-auto text-black">
                <table className="table">

                    <thead className="font-bold text-black">
                        <tr >
                            <th>No.</th>
                            <th>Student Name</th>
                            <th>Student ID</th>
                            <th>Email</th>
                            <th>Semester</th>
                            <th>Year</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Mahmud Sanjid</td>
                            <td>202202003</td>
                            <td>sanjid@gmail.com</td>
                            <td>Summer</td>
                            <td>2022</td>
                            <td className='flex justify-center gap-2'>
                                <button className="btn btn-primary btn-sm font-bold">Edit</button>
                                <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>Subir Mandal</td>
                            <td>202202073</td>
                            <td>subir@gmail.com</td>
                            <td>Spring</td>
                            <td>2022</td>
                            <td className='flex justify-center gap-2'>
                                <button className="btn btn-primary btn-sm font-bold">Edit</button>
                                <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Lizan Khan</td>
                            <td>202202127</td>
                            <td>lizan@gmail.com</td>
                            <td>Fall</td>
                            <td>2022</td>
                            <td className='flex justify-center gap-2'>
                                <button className="btn btn-primary btn-sm font-bold">Edit</button>
                                <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <th>4</th>
                            <td>Shuvo Biswas</td>
                            <td>202202051</td>
                            <td>shuvo@gmail.com</td>
                            <td>Summer</td>
                            <td>2023</td>
                            <td className='flex justify-center gap-2'>
                                <button className="btn btn-primary btn-sm font-bold">Edit</button>
                                <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <th>5</th>
                            <td>Samiul Anik</td>
                            <td>202202023</td>
                            <td>samiul@gmail.com</td>
                            <td>Fall</td>
                            <td>2021</td>
                            <td className='flex justify-center gap-2'>
                                <button className="btn btn-primary btn-sm font-bold">Edit</button>
                                <button className="btn btn-secondary btn-sm font-bold">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
import React from 'react';
import Loading from '../Shared/Loading';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();


    let signInError;


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signInError = <p className='text-red-400'><small>{error?.message || updateError?.message}</small></p>
    }

    if (user) {
        console.log(user);
    }

    
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });


        navigate('/dashboard');

    }


    return (
        <div className='flex justify-center items-center'>
            <div className="bg-teal-900 shadow-xl my-8 rounded">
                <div className="card-body">
                    <h2 className="text-center text-white mb-4 text-3xl font-bold">REGISTER ACCOUNT</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered input-success w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="number"
                                placeholder="Student ID"
                                name='studentID'
                                className="input input-bordered input-success w-full max-w-xs"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: 'Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered input-success w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered input-success w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <select className="select select-success mb-4">
                                <option disabled selected>Choose Your Semester</option>
                                <option>Summer</option>
                                <option>Fall</option>
                                <option>Spring</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type="number" placeholder="Your Admission Year" className="input input-bordered input-success w-full max-w-xs" required />
                        </div>

                        {signInError}
                        <div>
                            <input className='btn w-full max-w-xs text-white bg-green-700 mt-4' type="submit" value="REGISTER" />
                        </div>
                    </form>
                    <p><small>Already Have an Account? <Link className='text-white' to="/login">Please Login</Link></small></p>
                </div>
            </div>
        </div >
    );
};

export default Register;
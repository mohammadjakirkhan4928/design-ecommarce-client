import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';




const SignUp = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser,updateUser,googleSignUp} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/product';
 



    const handleSignUp = (data) =>{
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true})
            toast.success('user created Successfully')
            const userInfo ={
                displayName:data.name
            }
            updateUser(userInfo)
              .then(()=>{})
              .catch(err => console.log(err))
        })
        .catch( error =>{
         console.log(error)
         setSignUpError(error.message)
        });
    }

    const handleGoogleSignUp =() =>{
        googleSignUp()
        .then(result =>{
            const user = result.user;
            navigate(from,{replace:true})
            console.log(user);

         })
         .catch( error =>{
           console.log('error: ',error)
         })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7' >
            <h2 className='text-xl text-center'> Sign Up</h2>

            <form onSubmit= {handleSubmit(handleSignUp)}>

            <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type='email'
                     {...register("email",
                     { required:"Email Address is required"}
                     )}
                     className="input input-bordered w-full max-w-xs" />
                     {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type='password' {...register("password",
                      {
                        required:"password is REQUIRED",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                        pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:"password must be storng"}
                    }
                    )}
                    className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-green-600'>{errors.password?.message}</p>}
                    <label className="label"> <span className="label-text">Forget Password ?</span></label>

                </div>

                <br />

                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />

                {signUpError && <p className='text-red-600'>{signUpError}</p>}

            </form>

            <p>Alredy have an Account <Link className='text-secondary' to="/login"> Please Login</Link></p>

            <div className="divider">OR</div>

            <button onClick={handleGoogleSignUp} className='btn btn-outline w-full'>CONTINEU WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;
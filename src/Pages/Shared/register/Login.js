import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {


    // const { register,  formState: { errors }, handleSubmit } = useForm()
    // const {signIn,googleSignUp} = useContext(AuthContext)
    // const [loginError, setLoginError] = useState("");

    // const handleLogin = data =>{
    //     console.log(data);
    //     setLoginError('');

    //      signIn(data.email, data.password)
    //      .then(result =>{
    //         const user = result.user;
    //         toast.success('login succesfully')
    //         console.log(user);

    //      })
    //      .catch( error =>{
    //         console.log(error.message)
    //         setLoginError(error.message)
    //      });
    // }

    // const handleGoogle = () =>{
    //     googleSignUp()
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user);

    //      })
    //      .catch( error =>{
    //        console.log('error: ',error)
    //      })
    // }


    const { signIn, googleSignUp } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/product';

    const handleLogin = async (data) => {
      console.log(data);
      setLoginError('');

      try {
        const result = await signIn(data.email, data.password);
        const user = result.user;
        toast.success('login succesfully');
        console.log(user);
        navigate(from, { replace: true });
      } catch (error) {
        console.log(error.message);
        setLoginError(error.message);
      }
    };

    const handleGoogle = async () => {
      try {
        const result = await googleSignUp();
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      } catch (error) {
        console.log('error: ', error);
      }
    };


    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7' >
            <h2 className='text-xl text-center'>Login</h2>

            <form onSubmit= {handleSubmit(handleLogin)}>

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
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    }
                    )}
                    className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-green-600'>{errors.password?.message}</p>}
                    <label className="label"> <span className="label-text">Forget Password ?</span></label>

                </div>

                <br />
                <input className='btn btn-accent w-full' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINEU WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Login;
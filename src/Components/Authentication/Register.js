import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [agree, setAgree] = useState(false);

    const [signInWithGithub, gitUser, gitError] = useSignInWithGithub(auth);

    // Google Signin 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);


    const getName = (e) => {
        setDisplayName(e.target.value);
    }


    const getValidEmail = (e) => {
        const regexEmail = /^\S+@\S+\.\S+$/;
        const validEmail = regexEmail.test(e.target.value);
        if (validEmail) {
            setEmail(e.target.value);
            setErrorMail('');
        } else {
            setErrorMail('Invalid Email');
        }

    }

    const getValidPassword = (e) => {
        const regexPassword = /.{6,}/;
        const validPassword = regexPassword.test(e.target.value);
        
        if (validPassword) {
            setPassword(e.target.value);
            setErrorPass('');
        } else {
            setErrorPass('Password must contain 6 characters.')
        }
    }

    // create user with email and password
    const handleSubmit = (e) => {
        e.preventDefault();
        // const agree = e.target.condition.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
            toast.success('Form Submitted');
        }
    }



    // page redirect
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';
    useEffect(() => {
        if (user || googleUser || gitUser) {
            navigate(from);
        }
    }, [user || googleUser || gitUser])

    // error handelling
    useEffect(() => {
        if (googleError) {
            toast.error(googleError.message)
        }
    }, [googleError])

    useEffect(() => {
        if (hookError) {
            toast.error(hookError.message)
        }
    }, [hookError])

    useEffect(() => {
        if (gitError) {
            toast.error(gitError.message)
        }
    }, [gitError])


    return (
        <div>

            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        {/* Register Form */}
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleSubmit}>
                                <p className='text-2xl my-3'>Register Your Account</p>
                                {/* <!-- Name input --> */}
                                <div className="mb-6">
                                    <input onChange={getName}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Your Name"
                                    />
                                </div>
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input onChange={getValidEmail}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                    />
                                    {errorMail && <p className='text-hotpink'>{errorMail}</p>}
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input onChange={getValidPassword}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                    />
                                    {errorPass && <p className='text-hotpink'>{errorPass}</p>}
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input onClick={() => setAgree(!agree)}
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="condition"
                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                                        >Agree with terms and conditions</label
                                        >
                                    </div>

                                </div>

                                <div className="text-center lg:text-left">
                                    <button disabled={!agree}
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-hotpink text-white font-medium text-sm leading-snug uppercase rounded shadow-md disabled:bg-gray-400 disabled:text-gray-200 hover:bg-base-black hover:shadow-lg active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Submit
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <Link to='/login'
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Please Login</Link>
                                    </p>
                                </div>

                                {/* or section */}

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>

                                {/* social login */}
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="text-lg mb-0 mr-4">Sign in with</p>


                                    {/* <!-- Google --> */}
                                    <button onClick={() => signInWithGoogle()}
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-base-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-hotpink hover:shadow-lg active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        
                                        <svg aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="google"
                                            className="w-4 mx-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 488 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                            ></path>
                                        </svg>
                                    </button>


                                    {/* gitHub */}
                                    <button onClick={() => signInWithGithub()}
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block p-3 bg-base-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-500 hover:shadow-lg active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                    >
                                        <svg aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="github"
                                            className="w-4 mx-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 496 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                            ></path>
                                        </svg>
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
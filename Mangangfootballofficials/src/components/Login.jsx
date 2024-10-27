import React, { Fragment } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {handleloginrequest} from "../utils/handleaxios"
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
  // Use the useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  // Handle form submission
  const onSubmit = async(data) => {
    console.log('Form Data:', data);
    const logindata = await handleloginrequest(data)
    console.log(logindata)
    console.log(logindata.data.statuscode.accesstoken)
    console.log(logindata.data.statuscode.refreshtoken)
    localStorage.setItem("access_token", logindata.data.statuscode.accesstoken)
    localStorage.setItem("refresh_token", logindata.data.statuscode.refreshtoken)
    localStorage.setItem("user_id", logindata.data.statuscode.user._id)
    const isauthenticated = logindata.data.statuscode.isloggedin;
    localStorage.setItem("isauthenticated",isauthenticated)
    
    const cookies = document.cookie;
    console.log(cookies)

    if (logindata) {
      // Dispatch login action with user info if needed
    // Here, you might want to include user info if necessary

      // Save tokens to localStorage
      localStorage.setItem("access_token", logindata.data.statuscode.accesstoken);
      localStorage.setItem("refresh_token", logindata.data.statuscode.refreshtoken);
      localStorage.setItem("user_id", logindata.data.statuscode.user._id);

      // Navigate to the dashboard after successful login
      navigate('/dashboard');
    }

  };

  return (
    <Fragment>
      <div className="bg-white">
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="max-h-auto mx-auto max-w-xl">
            <div className="mb-8 space-y-3">
              <p className="text-xl font-semibold">
                <img className="w-28 h-28 mx-auto" src={logo} alt="logo" />
              </p>
            </div>
            {/* Add form submission handler */}
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-10 space-y-3">
                <div className="space-y-1 w-96">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="username">Username</label>
                    {/* Register the username input field */}
                    <input
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      id="username"
                      placeholder="Enter your username"
                      name="username"
                      {...register('username', { required: true })}
                    />
                    {/* Display error message */}
                    {errors.username && <span className="text-red-500 text-xs">Username is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <input
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      id="email"
                      placeholder="yourmail@gmail.com"
                      name="email"
                      {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                  </div>
                  <div className="space-y-2 w-96">
                    <label className="text-sm font-medium" htmlFor="password">Password</label>
                    <input
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      type="password"
                      {...register('password', { required: true })}
                    />
                    {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
                  </div>
                </div>
                <button
                  className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <Link to="/signup">
              <div className="text-center">
                No account? <span className="text-blue-500">Create one</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;

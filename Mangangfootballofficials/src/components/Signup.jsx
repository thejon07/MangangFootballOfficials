import React, { Fragment, useState } from 'react';
import logo from '../assets/logo.png';
import { useForm } from "react-hook-form";
import { handlePostrequest } from "../utils/handleaxios";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate(); // Get navigate function
  const [error, setError] = useState(null); // State to handle any errors

  // React Hook Form configuration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append("username", data.username);
    formdata.append("email", data.email);
    formdata.append("password", data.password);

    if (data.avatar.length > 0) {
      formdata.append("avatar", data.avatar[0]);
    }
  
    // try {
    //     const postdata =  await handlePostrequest(formdata)
    //     console.log(postdata)
    //     if(postdata.status === 201){
    //         navigate("/dashboard",{state:{userdata:postdata.data}})  //redirect to dashboard with user data
    //     }
    // } catch (error) {
    //     console.log(error)
    // }

    const postformdat = await handlePostrequest(formdata)
    console.log(postformdat)
    const refreshtoken = postformdat.data.statuscode.refreshToken;
    console.log(refreshtoken)
    const accesstoken = postformdat.data.statuscode.accesstoken;
    console.log(accesstoken)
    localStorage.setItem("refresh_token", refreshtoken)
    localStorage.setItem("access_token", accesstoken)
     localStorage.setItem("isauthenticated", "true")
    if(postformdat.status === 201){
      navigate("/popup")
    }

  
}

  return (
    <Fragment>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              <img className='w-28 h-28 mx-auto' src={logo} alt="Logo" />
            </h1>

            {error && <span className="text-red-500 mb-4">{error}</span>} {/* Display error message */}

            {/* Form element to wrap inputs */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Avatar Input */}
              <input
                type="file"
                className='mb-2'
                {...register("avatar")}
              />

              {/* Username Input */}
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <span className="text-red-500">{errors.username.message}</span>}

              {/* Email Input */}
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              {/* Password Input */}
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

              {/* Submit Button */}
              <button
                className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{" "}
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?{" "}
            <a className="no-underline border-b border-blue text-blue" href="./login">
              Log in
            </a>.
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;

import React from 'react'
import { Fragment } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Signup from './Signup'

function Login() {
  return (
    <Fragment>
<div class="bg-white">
  <div class="flex h-screen flex-col items-center justify-center">
    <div class="max-h-auto mx-auto max-w-xl">
      <div class="mb-8 space-y-3">
        <p class="text-xl font-semibold">
            <img className='w-28 h-28 mx-auto' src={logo} alt="" />
        </p>
      </div>
      <form class="w-full">
        <div class="mb-10 space-y-3">
          <div class="space-y-1 w-96">
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
              <input class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="yourmail@gmail.com" name="email" />
            </div>
            <div class="space-y-2 w-96">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label>
              <input class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" placeholder="Enter your password" name="password" />
            </div>
          </div>
          <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Login</button>
        </div>
      </form>
      <Link to="/signup"> <div class="text-center"> No account? <a class="text-blue-500" href="/signup">Create one</a> </div> </Link> 
    </div>
  </div>
</div>
    </Fragment>
  )
}

export default Login

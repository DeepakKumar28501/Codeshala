import React from 'react'
import bgimg from '../assets/images/bg1.jpg'
function LoginForm() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-900 bg-[url('../assets/images/bg2.jp          g')]">
      <div className=' border  bg-transparent h-[80vh] w-[35%] rounded-3xl text-center px-7'>
            <h1 className='text-white text-3xl py-4 font-semibold font-clash '>Login Form</h1>
            <div className='mx-6'>
                <input type="text" placeholder='Username' className='w-full h-12 p-3 rounded-md bg-transparent border-b-2 border-b-amber-700  focus:border-b-8 focus:outline-none'/>
            </div>
      </div>
    </div>
  )
}

export default LoginForm

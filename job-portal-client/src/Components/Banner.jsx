import React, { useState } from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"
const Banner=({query,handleInputChange})=>{
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold mb-8'>Find you <span className='text-orange'>new job</span> today!</h1>
      <p className='text-lg text-black/70 font-clash'>Thousends of jobs in the computer,engineering and technology sector are waiting for you</p>
      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-targetfocus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2'>
                <input type="text"  placeholder='What you are looking for...' onChange={handleInputChange} value={query} name='title' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'/>
                <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <div className='flex  ms-1 md:rounded-s-md md:rounded-e-none me-2  rounded shadow-sm ring-1 ring-targetfocus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3'>
                <input type="text"  placeholder='Location..'  name='title' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'/>
                <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
            </div>
            <button type='submit' className='bg-orange py-2 px-8 text-white md:rounded-none rounded '>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Banner;

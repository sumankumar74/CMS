import React from 'react'
import AboutVision from '../ui/AboutVision'
import Footer from '../ui/Footer'

const page = () => {
  return (
    <div className='gap-2 flex flex-col'>
        <div className='flex shadow-xl h-56 justify-center items-center flex-col gap-8  '>
        <h1 className='text-red-600 font-bold text-5xl font-serif'>WELCOME!</h1>
            <h2 className='text-3xl font-semibold font-serif text-teal-600 '>A free, world-class education for anyone, anywhere.</h2>
        </div>
        <AboutVision/>
        
    </div>
  )
}

export default page
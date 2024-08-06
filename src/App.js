import React from 'react'
import  reviews from './data'
import Testnomial from './components/Testnomial'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex flex-col w-[100w] h-[100vh] justify-center items-center bg-gray-200 py-12'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonial</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testnomial reviews={reviews}/>
      </div>

    </div>
  )
}

export default App
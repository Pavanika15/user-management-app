import React from 'react'

function Home() {
  return (
    <div className='min-h-screen w-full  from-blue-200 via-indigo-200 to-purple-200 flex flex-col items-center justify-center'>

      <h1 className='text-center font-bold text-5xl text-indigo-700 mb-6'>
        HOME
      </h1>

      <div className='bg-white p-10 rounded-2xl shadow-2xl w-2/3 text-center'>
        <p className='text-gray-700 text-lg leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsa.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, veritatis.
        </p>

      </div>

    </div>
  )
}

export default Home
import React from 'react'
import Card from '../components/Card'

function Home() {
  return ( 
     <div className="w-full text-black ">
     <div className='w-full flex mt-5'> <h1 className="text-center py-2 px-3 text-3xl border rounded-2xl mx-auto inline-block ">Shop Products</h1></div>
      <Card/>
    </div>
      )
}

export default Home
import React from 'react'

function Card() {
  return (
    <div className='w-full flex items-center justify-center mt-2.5 gap-2.5 flex-wrap'>
        <div className="flex w-70 rounded-2xl border items-center justify-center">
          <div className="h-80 flex items-center text-center">
            <div>
              <h5 className="text-4xl font-bold">Laptop</h5>
              <p className="mt-1.5 text-2xl">$800</p>
              <button className="border px-4 cursor-pointer rounded-4xl bg-gray-700 text-white py-2">Add to Cart</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card
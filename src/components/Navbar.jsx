import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className="w-full h-20 flex flex-col justify-center  px-5 bg-gray-950 text-white">
      <div className="flex  items-center  ">
        <Link className="navbar-brand fw-bold" href="Home.html">🛒 MyShop</Link>
        <div className='w-[90%] flex  justify-between px-2'>
          <Link className="" to="/">Home</Link>
          <Link className="" to="/cart">Cart (2)</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
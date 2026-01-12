import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { wraper } from '../context/CartContext'

function Navbar() {
  const {Cart} = useContext(wraper)
  return (
     <nav className="w-full h-20 flex flex-col justify-center  px-5 bg-gray-950 text-white">
      <div className="flex  items-center  ">
        <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
        <div className='w-[90%] flex  justify-between px-2'>
          <Link className="" to="/">Home</Link>
          <Link className="" to="/cart">Cart ({Cart.length})</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
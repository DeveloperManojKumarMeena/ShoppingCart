import React, { useContext } from "react";
import { wraper } from "../context/CartContext";

function Card({ procuct }) {
  const {addToCart} = useContext(wraper)
  return (
    <div className="flex  w-70 rounded-2xl border items-center justify-center">
      <div className="h-80 flex items-center text-center">
        <div>
          <h5 className="text-4xl font-bold">{procuct.product_name}</h5>
          <p className="mt-1.5 text-2xl">${procuct.price}</p>
          <button onClick={()=>addToCart(procuct)} className="border px-4 cursor-pointer rounded-4xl bg-gray-700 text-white py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

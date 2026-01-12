import React, { useContext, useState } from 'react'
import { wraper } from '../context/CartContext'

function Cart() {
  const { Cart } = useContext(wraper)
  const [cartItems] = useState(Cart)
  console.log(cartItems)

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review and manage your items</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Desktop View */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quantity</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Subtotal</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">${item.price.toFixed(2)}</td>
                        <td className="px-6 py-4 text-sm">
                          <input
                            type="number"
                            min="1"
                            defaultValue={item.qty}
                            className="w-16 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          ${(item.price * item.qty).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button className="text-red-600 hover:text-red-800 font-medium transition">
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-gray-600">Qty:{item.qty}</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue={item.qty}
                        className="w-16 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="text-sm font-semibold text-gray-900">Subtotal:</span>
                      <span className="text-sm font-bold text-gray-900">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping Button */}
            <button className="mt-6 w-full md:w-auto px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition">
              Continue Shopping
            </button>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="text-gray-900 font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-semibold">Free</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition mb-3">
                Proceed to Checkout
              </button>
              <button className="w-full bg-white border-2 border-gray-300 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-50 transition">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
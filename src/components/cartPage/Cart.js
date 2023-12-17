import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Home from '../../pages/landingpage/Home';

const Cart = () => {
const items=useSelector(selector=>selector.counter)
console.log(items)
    
  return (<>
    <div className="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg p-4">
    <h2 className="font-bold mb-4">Your Cart</h2>
    {/* List cart items here */}
    <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-100">
      <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Checkout
      </button>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    {
    items.items.map(product => (
      <div key={product.id} className="border p-4 rounded-lg shadow">
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded" />
        <h2 className="mt-2 font-bold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <button className="w-full bg-blue-500 text-white mt-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    )
    )
    }
  </div>


<Home/>
  </>
    
    
  )
}

export default Cart
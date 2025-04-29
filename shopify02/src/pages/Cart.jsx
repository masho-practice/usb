import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-gray-700">Your cart is empty.</p>
        <Link to="/products" className="text-blue-500">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex items-center justify-between py-2 border-b">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover mr-4" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="font-semibold">Total: ${calculateTotal()}</p>
        <Link to="/checkout" className="bg-primary text-white py-2 px-4 rounded-lg mt-4 hover:bg-primary-dark">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
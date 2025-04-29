import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };


  const handleCheckout = () => {
    //  THIS IS A PLACEHOLDER!  Replace with actual payment gateway integration.
    //  In a real application, you would send order data to a payment gateway
    //  and handle the response (successful payment, failure, etc.).
    alert(`Checkout successful! Total: $${calculateTotal()}`);
    clearCart();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed to checkout.</p>
      ) : (
        <>
          <div className="mb-4">
            <h2>Order Summary</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  {item.name} x {item.quantity}: ${ (item.price * item.quantity).toFixed(2) }
                </li>
              ))}
            </ul>
            <p className="font-bold mt-2">Total: ${calculateTotal()}</p>
          </div>
          {/* Add form for shipping address, billing address, etc. here */}
          <div className="mt-8">
            <button onClick={handleCheckout} className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;


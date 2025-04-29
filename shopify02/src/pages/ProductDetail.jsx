import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db, doc, getDoc } from '../firebase';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);  // Access addToCart

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log("Product not found");
          setProduct(null); // Or handle the not found case differently
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null); // Handle error gracefully
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-8">Loading product...</div>;
  }

  if (!product) {
    return <div className="container mx-auto py-8">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button onClick={handleAddToCart} className="bg-primary text-white py-2 px-4 rounded-lg mt-4 hover:bg-primary-dark">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
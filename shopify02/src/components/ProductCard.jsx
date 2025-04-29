import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
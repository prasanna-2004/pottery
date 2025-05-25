import React from 'react';
import { useCart } from '../../Contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={`/images/${product.image}`} 
          alt={product.name} 
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
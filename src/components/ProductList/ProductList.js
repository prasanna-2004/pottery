import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
  // Sample pottery products data
  const products = [
    {
      id: 1,
      name: 'Handmade Ceramic Mug',
      price: 28.99,
      description: 'Unique stoneware mug with organic texture',
      image: 'mug.jpg'
    },
    {
      id: 2,
      name: 'Artisan Vase',
      price: 45.50,
      description: 'Elegant wheel-thrown vase with matte glaze',
      image: 'vase.jpg'
    },
    {
      id: 3,
      name: 'Dinner Plate Set',
      price: 89.99,
      description: 'Set of 4 hand-painted stoneware plates',
      image: 'plates.jpg'
    },
    {
      id: 4,
      name: 'Teapot',
      price: 65.00,
      description: 'Functional art piece with matching lid',
      image: 'teapot.jpg'
    }
  ];

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Our Handmade Collection</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
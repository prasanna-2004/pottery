import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Pottery Collection</h1>
        <p>Each piece is unique - no two are exactly alike</p>
      </div>
      
      <div className="shop-filters">
        <div className="filter-section">
          <label htmlFor="category">Category:</label>
          <select id="category">
            <option value="all">All Items</option>
            <option value="mugs">Mugs</option>
            <option value="plates">Plates</option>
            <option value="vases">Vases</option>
          </select>
        </div>
        
        <div className="filter-section">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <ProductList />
    </div>
  );
};

export default Shop;
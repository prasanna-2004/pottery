import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Handcrafted Pottery for Your Home</h1>
          <p>Each piece is uniquely made with traditional techniques</p>
          <Link to="/shop" className="shop-now-btn">Browse Collection</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Pottery</h2>
        <ProductList />
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-content">
          <h2>Our Craftsmanship</h2>
          <p>
            Every piece in our collection is hand-thrown and glazed using 
            time-honored techniques passed down through generations of artisans.
          </p>
          <Link to="/about" className="learn-more-btn">Learn More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
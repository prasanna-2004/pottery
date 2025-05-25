import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">ClayCraft Pottery</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="cart-link">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
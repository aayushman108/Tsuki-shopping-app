import React from 'react';
import { a } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="left-menu">
            <a href="#"><i class="bi bi-search"></i></a>
            <a href="#"><i class="bi bi-person-fill"></i></a>
        </div>
        <div>
            <h2 style={{}}>Logo</h2>
        </div>
        <div className="links">
            <a href="#"><i class="bi bi-person-fill"></i></a>
            <a href="#"><i class="bi bi-search"></i></a>
            <a href="#"><i class="bi bi-cart-fill"></i></a>
        </div>
        <div className="right-menu">
            <a href="#"><i class="bi bi-cart-fill"></i></a>
            <div>
                <i class="bi bi-list"></i>
            </div>
        </div>
    </div>
    <div className="navlink">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">SALE</a></li>
            <li><a href="#">SHOP ALL</a></li>
            <li><a href="#">COLLECTIONS</a></li>
        </ul>
    </div>
    </>
  )
}

export default Header;

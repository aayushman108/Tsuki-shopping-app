import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [verticalNav, setVerticalNav] = useState(false);
    const [homeDrop, setHomeDrop] = useState(false);
    const [shopDrop, setShopDrop] = useState(false);
    const [collectionDrop, setCollectionDrop] = useState(false);
    const [search, setSearch] = useState(false);
  return (
    <>
    <div className='promo'>
        <NavLink to="">
            <strong style={{padding: "0 20px"}}>FREE WORLDWIDE SHIPPING OVER $175</strong>
            <span>|</span>
            <span style={{padding: "0 20px"}}>USE CODE : TSUKI</span>
        </NavLink>
    </div>
    <form className={`search ${search? "expand": ""}`}>
        <input type="text" name='search' placeholder='Search our store' style={{border: "none"}}/>
        <span onClick={()=> setSearch(false)}><i className="bi bi-x-lg"></i></span>
    </form>
    <div className="header">
        <div className="left-menu">
            <NavLink to="" onClick={()=> setSearch(!search)}><i className="bi bi-search"></i></NavLink>
            <NavLink to="login"><i className="bi bi-person-fill"></i></NavLink>
        </div>
        <div>
            <h2 style={{}}>Logo</h2>
        </div>
        <div className="links">
            <NavLink to="login"><i className="bi bi-person-fill"></i></NavLink>
            <NavLink to="" onClick={()=> setSearch(!search)}><i className="bi bi-search"></i></NavLink>
            <NavLink to=""><i className="bi bi-cart-fill"></i></NavLink>
        </div>
        <div className="right-menu">
            <NavLink to=""><i className="bi bi-cart-fill"></i></NavLink>
            <div onClick={()=> setVerticalNav(!verticalNav)}>
                {verticalNav? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}
            </div>
        </div>
    </div>


    {verticalNav && <div className='v-navlink'>
        <div>
            <div className='v-dropdown'>
                <div><NavLink to="/">HOME  ホームページ</NavLink></div>
                <div onClick={()=>setHomeDrop(!homeDrop)}>{homeDrop? <i className="bi bi-chevron-up"></i>:<i className="bi bi-chevron-down"></i>}</div>
            </div>
            {homeDrop && <ul className="v-drop-content">
                <li><NavLink to="/">OUR RESPONSIBILITY</NavLink></li>
            </ul>}
        </div>
        <div className='v-dropdown'><NavLink to="sale">SALE 大売り出し</NavLink></div>
        <div>
            <div className='v-dropdown'>
                <div><NavLink to="sale">SHOP ALL  すべての商品</NavLink></div>
                <div onClick={()=>setShopDrop(!shopDrop)}>{shopDrop? <i className="bi bi-chevron-up"></i>:<i className="bi bi-chevron-down"></i>}</div>
            </div>
            {shopDrop && <ul className='v-drop-content'>
                <li><NavLink to="sale">SALE</NavLink></li>
                <li><NavLink to="sale">ACCESSORIES</NavLink></li>
                <li><NavLink to="sale">T-SHIRTS</NavLink></li>
            </ul>}
        </div>
        <div>
            <div className='v-dropdown'>
                <div><NavLink to="sale">COLLECTIONS  コレクション</NavLink></div>
                <div onClick={()=>setCollectionDrop(!collectionDrop)}>{collectionDrop? <i className="bi bi-chevron-up"></i>:<i className="bi bi-chevron-down"></i>}</div>
            </div>
            {collectionDrop && <ul className='v-drop-content'>
                <li><NavLink to="sale">BASICS</NavLink></li>
                <li><NavLink to="sale">MELT</NavLink></li>
                <li><NavLink to="sale">MISCHIEF</NavLink></li>
                <li><NavLink to="sale">KNITS</NavLink></li>
            </ul>}
        </div>
        
    </div>}


    <div className="navlink">
        <ul>
            <li className='dropdown'>
                <NavLink to="/" className='drop-btn'>HOME  ホームページ&nbsp;&nbsp;&gt;</NavLink>
                <div className='drop-content'>
                    <ul>
                        <li><NavLink to="/">OUR RESPONSIBILITY</NavLink></li>
                    </ul>
                </div>
            </li>
            <li><NavLink to="sale" className='drop-btn'>SALE 大売り出し</NavLink></li>
            <li className='dropdown'>
                <NavLink to="sale" className='drop-btn'>SHOP ALL  すべての商品&nbsp;&nbsp;&gt;</NavLink>
                <div className='drop-content'>
                    <ul>
                        <li><NavLink to="sale">SALE</NavLink></li>
                        <li><NavLink to="sale">ACCESSORIES</NavLink></li>
                        <li><NavLink to="sale">T-SHIRT</NavLink></li>
                    </ul>   
                </div>
            </li>
            <li className='dropdown'>
                <NavLink to="sale" className='drop-btn'>COLLECTIONS  コレクション&nbsp;&nbsp;&gt;</NavLink>
                <div className='drop-content'>
                    <ul>
                        <li><NavLink to="sale">BASICS</NavLink></li>
                        <li><NavLink to="sale">MELT</NavLink></li>
                        <li><NavLink to="sale">MISCHIEF</NavLink></li>
                        <li><NavLink to="sale">KNITS</NavLink></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Header;

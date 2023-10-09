import React from 'react';
import { NavLink } from 'react-router-dom';

const EachProduct = ({product}) => {
    const {name, image}= product;
  return (
      <div className="accessories-item">
        <div className="sale-tag">SALE</div>
        <div className="accessories-image sale">
          <img src={image} alt="..." style={{width:"100%", height: "100%"}} />
          <div className='quick-view'><NavLink to="">QUICK VIEW</NavLink></div>
        </div>
        <div className="item-description">
          <h6>{name}</h6>
          <p>Sold Out</p>
        </div>
      </div>
  )
}

export default EachProduct;

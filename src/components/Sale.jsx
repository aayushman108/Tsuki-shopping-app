import React from 'react';
import { products } from '../data';
import EachProduct from './EachProduct';

const Sale = () => {
  return (
    <div className="accessories sale" style={{marginTop: "80px", marginBottom: "60px"}}>
      {products.map((product)=> <EachProduct product={product} key={product.id} />)}
    </div>
  )
}

export default Sale;

import React, {useEffect} from 'react';
import { products } from '../data';
import EachProduct from './EachProduct';

const Sale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="accessories sale" style={{marginTop: "80px", marginBottom: "60px"}}>
      {products.map((product)=> <EachProduct product={product} key={product.id} />)}
    </div>
  )
}

export default Sale;

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../data';

const Home = () => {
  return (
    <>
    <div>
      <img src="/images/hero-image.png" width="100%" height="auto" alt='...' />
    </div>
    <h2 className="main-heading">Shop Accessories</h2>
    <div className='accessories'>
      <div className="accessories-item">
        <div></div>
        <div className="item-description"></div>
      </div>
      <div className="accessories-item">
        <div></div>
        <div className="item-description"></div>
      </div>
      <div className="accessories-item">
        <div></div>
        <div className="item-description"></div>
      </div>
    </div>
    <div className="my-4">
      <Carousel  infinite={true} responsive={responsive}>
        <div className='carousel-item' style={{}}>
          <div style={{border: "2px solid black", flexBasis:"50%", height: "100%"}}>
            <img src="/images/hero-image.png" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div style={{border: "2px solid black", flexBasis:"50%"}}>
            <h1>welcome</h1>
          </div>
        </div>
        <div className='carousel-item' style={{}}>
          <div style={{border: "2px solid black", flexBasis:"50%", height: "100%"}}>
            <img src="/images/web-development.png" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div style={{border: "2px solid black", flexBasis:"50%"}}>
            <h1>to</h1>
          </div>
        </div>
        <div className='carousel-item' style={{}}>
          <div style={{border: "2px solid black", flexBasis:"50%", height: "100%"}}>
            <img src="/images/software_development.png" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div style={{border: "2px solid black", flexBasis:"50%"}}>
            <h1>home</h1>
          </div>
        </div>
      </Carousel>;
    </div>
    </>
  )
}

export default Home;

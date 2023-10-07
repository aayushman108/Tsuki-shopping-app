import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../data';
import { modelItems } from '../data';

const Home = () => {
  return (
    <>
    <div>
      <img src="/images/hero-image.png" width="100%" height="auto" alt='...' />
    </div>
    <h2 className="main-heading">Shop Accessories</h2>
    <div className='accessories'>
      <div className="accessories-item">
        <div className="accessories-image"><img src="https://tsuki.market/cdn/shop/products/CAP_BLACK_PINK_1_1296x.jpg?v=1665576057" alt="" style={{width:"100%", height: "100%"}} /></div>
        <div className="item-description"></div>
      </div>
      <div className="accessories-item">
        <div className='accessories-image'><img src="https://tsuki.market/cdn/shop/products/TSHIRT_PINK_1_720x.jpg?v=1663798932" alt="" style={{width:"100%", height: "100%"}} /></div>
        <div className="item-description"></div>
      </div>
      <div className="accessories-item">
        <div className='accessories-image'><img src= "https://tsuki.market/cdn/shop/products/SOCKS_WHITE_1_1296x.jpg?v=1638976238" alt="" style={{width:"100%", height: "100%"}} /></div>
        <div className="item-description"></div>
      </div>
    </div>
    <div className="accessories-carousel">
      <Carousel  infinite={true} responsive={responsive}>
        <div>
          <div className='accessories-carousel-image'>
            <img src="https://tsuki.market/cdn/shop/products/CAP_BLACK_PINK_1_1296x.jpg?v=1665576057" alt="" style={{width:"100%", height: "100%"}} />
          </div>
          <div className='accessories-carousel-description'></div>
        </div>
        <div>
          <div className='accessories-carousel-image'>
            <img src="https://tsuki.market/cdn/shop/products/TSHIRT_PINK_1_720x.jpg?v=1663798932" alt="" style={{width:"100%", height: "100%"}} />
          </div>
          <div className='accessories-carousel-description'></div>
        </div>
        <div>
          <div className='accessories-carousel-image'>
            <img src= "https://tsuki.market/cdn/shop/products/SOCKS_WHITE_1_1296x.jpg?v=1638976238" alt="" style={{width:"100%", height: "100%"}} />
          </div>
          <div className='accessories-carousel-description'></div>
        </div>
      </Carousel>;
    </div>
    <div className="my-4">
      <Carousel  infinite={true} responsive={responsive}>
        <div className='carousel-item'>
          <h3>SHOP THE LOOK</h3>
          <div className="carousel-item-left" style={{}}>
            <img src="https://tsuki.market/cdn/shop/files/D11DB67A-D146-48C3-90D0-1FF7CAA53B15.jpg?v=1663788694" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div className="carousel-item-right">
            <h3>SHOP THE LOOK</h3>
            <div className="shop-the-look-item">
              <div className="shop-the-look-image"><img src="https://tsuki.market/cdn/shop/products/TSHIRT_PINK_1_720x.jpg?v=1663798932" alt="" style={{width:"100%", height: "auto"}} /></div>
              <div className="shop-the-look-description"></div>
            </div>
          </div>
        </div>
        <div className='carousel-item'>
          <h3>SHOP THE LOOK</h3>
          <div className="carousel-item-left">
            <img src="https://tsuki.market/cdn/shop/files/7B0DACF2-3B7F-4AC3-810C-0DA9B5185E3E.jpg?v=1663798139" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div className="carousel-item-right">
            <h3>SHOP THE LOOK</h3>
            <div className="shop-the-look-item">
              <div className="shop-the-look-image"><img src="https://tsuki.market/cdn/shop/products/tmcorduroypants_720x.jpg?v=1638456234" alt="" style={{width:"100%", height: "auto"}} /></div>
              <div className="shop-the-look-description"></div>
            </div>
          </div>
        </div>
        <div className='carousel-item'>
          <h3>SHOP THE LOOK</h3>
          <div className="carousel-item-left">
            <img src="https://tsuki.market/cdn/shop/files/1A9D1787-8415-48EC-80C4-7F1B3CCDA952.jpg?v=1663788694" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div className="carousel-item-right">
            <h3>SHOP THE LOOK</h3>
            <div className="shop-the-look-item">
              <div className="shop-the-look-image"><img src="https://tsuki.market/cdn/shop/products/CAP_BLACK_PINK_1_720x.jpg?v=1665576057" alt="" style={{width:"100%", height: "auto"}} /></div>
              <div className="shop-the-look-description"></div>
            </div>
          </div>
        </div>
      </Carousel>;
    </div>
    <div className="offer" style={{}}>
      <Carousel  infinite={true} showDots={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
        <div className='offer-item'>
          <div className='offer-image'>
            <img src="/images/offer2.jpg" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div className='offer-card'>
            <h1 style={{textAlign:"center"}}>ALWAYS ETHICALLY SOURCED</h1>
            <p style={{textAlign:"center"}}>We ensure that all our products are sourced responsibly and made from excellent quality material</p>
            <button>Shop now</button>
          </div>
        </div>
        <div className='offer-item'>
          <div className='offer-image'>
            <img src="/images/offer3.jpg" style={{width: "100%", height: "100%"}} alt="..." />
          </div>
          <div className='offer-card'>
            <h1 style={{textAlign:"center"}}>SOCK RESTOKE!</h1>
            <p style={{textAlign:"center"}}>Our two must-have Tsuki sock styles are black in stocks:</p>
            <button>Shop now</button>
          </div>
        </div>
      </Carousel>
    </div>
    <div className="model">
      {modelItems.map((value, index) => 
      <div key={index} className="model-item">
        <img src={value} style={{height: "100%", width: "100%"}} alt="..." />
        <div className="insta-link" style={{}}>
          <a href="#"><i class="bi bi-instagram" style={{fontSize: "18px", color: "white"}}></i></a>
        </div>
      </div>
      )}
    </div>
    <div className="features">
      <div className="feature-item">
        <div style={{flexBasis: "8%", textAlign:"center"}}><i class="bi bi-star-fill"></i></div>
        <div style={{flexBasis:"92%", paddingLeft:"5px"}}>
          <p style={{margin:"2px", color: "white"}}>THOUGHTFULLY DESIGNED</p>
          <p style={{color:"white", marginBottom:"20px"}}>We design apparel and homeware that feature creative, fun designs for the daring individual.</p>
        </div>
      </div>
      <div className="feature-item">
        <div style={{flexBasis: "8%", textAlign:"center"}}><i class="bi bi-tags-fill"></i></div>
        <div style={{flexBasis:"92%", paddingLeft:"5px"}}>
          <p style={{margin:"2px", color: "white"}}>ETHICALLY SOURCED</p>
          <p style={{color:"white", marginBottom:"20px"}}>We ensure that all our products are sourced responsibly and made from excellent quality materials.</p>
        </div>
      </div>
      <div className="feature-item">
        <div style={{flexBasis: "8%", textAlign:"center"}}><i class="bi bi-chat-right-quote-fill"></i></div>
        <div style={{flexBasis:"92%", paddingLeft:"5px"}}>
          <p style={{margin:"2px", color: "white"}}>GET IN TOUCH</p>
          <p style={{color:"white", marginBottom:"20px"}}>Do you have any questions? Please get in touch with us at any time and we'll be happy to assist you</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;

import React from 'react';
import { footerQuickLinks } from '../data';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">
        <div className="footer-left" style={{flexBasis: "48%"}}>
          <h5 style={{borderBottom: "1px solid white", paddingBottom: "20px", marginBottom: "20px"}}>NEWSLATER</h5>
          <p style={{padding: "0", marginBottom: "15px"}}>Subscribe to be the first to hear about our latest collections, offers and news about the brand.</p>
          <div style={{border: "1px solid white", display:"flex", flexWrap: "wrap", borderRadius: "2px"}}>
            <input type="text" name="newslater" style={{backgroundColor: "black", padding: "0.1em 0.7em"}} />
            <button style={{textAlign: "center", width: "70px", backgroundColor: "white", border: "none"}}>Join</button>
          </div>
        </div>
        <div className="footer-right" style={{flexBasis: "48%"}}>
          <h5 style={{borderBottom:"1px solid white", paddingBottom: "20px", marginBottom: "20px"}}>GET SOCIAL WITH US</h5>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            <a href="#" style={{marginLeft:"0"}}><i class="bi bi-facebook" style={{fontSize: "18px"}}></i></a>

            <a href="#"><i class="bi bi-twitter" style={{fontSize: "18px"}}></i></a>

            <a href="#"><i class="bi bi-instagram" style={{fontSize: "18px"}}></i></a>

            <a href="#"><i class="bi bi-youtube" style={{fontSize: "18px"}}></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{border: "2px solid black", display: "flex", flexWrap: "wrap", marginTop: "50px"}}>
        {
          footerQuickLinks.map((value, index)=> (index===0? <a key={index} href="#" style={{margin: "0 20px 0 0", fontSize: "14px", lineHeight: "30px"}}>&copy;&nbsp;{value}</a> : <a key={index} href="#" style={{margin: "0 20px 0 0", fontSize: "14px", lineHeight: "30px"}}>{value}</a>))
        }
      </div>
    </div>
  )
}

export default Footer;

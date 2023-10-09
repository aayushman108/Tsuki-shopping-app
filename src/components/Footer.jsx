import React from 'react';
import { footerQuickLinks } from '../data';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">
        <div className="footer-left" style={{flexBasis: "48%"}}>
          <h5 style={{borderBottom: "1px solid white", paddingBottom: "20px", marginBottom: "20px"}}>NEWSLETTER</h5>
          <p style={{padding: "0", marginBottom: "15px"}}>Subscribe to be the first to hear about our latest collections, offers and news about the brand.</p>
          <div style={{border: "1px solid white", display:"flex", flexWrap: "wrap", borderRadius: "2px"}}>
            <input type="text" name="newslater" style={{backgroundColor: "black", padding: "0.1em 0.7em"}} />
            <button style={{textAlign: "center", width: "70px", backgroundColor: "white", border: "none",fontSize:"14px"}}><strong>JOIN</strong></button>
          </div>
        </div>
        <div className="footer-right" style={{flexBasis: "48%"}}>
          <h5 style={{borderBottom:"1px solid white", paddingBottom: "20px", marginBottom: "20px"}}>GET SOCIAL WITH US</h5>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            <NavLink to="/" style={{marginLeft:"0"}}><i className="bi bi-facebook" style={{fontSize: "18px"}}></i></NavLink>

            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>

            <NavLink to="/"><i className="bi bi-instagram"></i></NavLink>

            <NavLink to="/"><i className="bi bi-youtube"></i></NavLink>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{border: "2px solid black", display: "flex", flexWrap: "wrap", marginTop: "50px"}}>
        {
          footerQuickLinks.map((value, index)=> (index===0? <NavLink key={index} to="/" style={{margin: "0 20px 0 0", fontSize: "11px", lineHeight: "20px"}}>&copy;&nbsp;{value}</NavLink> : <NavLink key={index} to="/" style={{margin: "0 20px 0 0", fontSize: "11px", lineHeight: "20px"}}>{value}</NavLink>))
        }
      </div>
    </div>
  )
}

export default Footer;

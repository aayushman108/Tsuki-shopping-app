import React from 'react'

const Footer = () => {
  return (
    <div className="footer" style={{width: "100%", height: "600px", border: "2px solid black", padding: "75px 30px"}}>
      <div className="footer-top" style={{border: "2px solid black", width: "100%", height: "300px", display: "flex", flexWarp: "wrap", justifyContent: 'space-around'}}>
        <div className="footer-top-common footer-left" style={{flexBasis: "45%", border: "2px solid black"}}>
          <h5 style={{borderBottom: "2px solid black", paddingBottom: "20px", marginBottom: "20px"}}>NEWSLATER</h5>
          <p style={{border: "2px solid black", padding: "0", marginBottom: "15px"}}>Subscribe to be the first to hear about our latest collections, offers and news about the brand.</p>
          <div style={{border: "2px solid black", display:"flex", flexWrap: "wrap"}}>
            <input type="text" name="newslater" style={{}} />
            <button style={{textAlign: "center", width: "70px", border: "2px solid yellow"}}>Join</button>
          </div>
        </div>
        <div className="footer-top-common footer-right" style={{flexBasis: "45%", border: "2px solid black"}}>
          <h5 style={{borderBottom: "2px solid black", paddingBottom: "15px"}}>GET SOCIAL WITH US</h5>
          <div style={{border: "2px solid blue", display: "flex", flexWrap: "wrap", height: "20px"}}>
            <a href="#" style={{border: "2px solid green", marginLeft:"0", height: "100%"}}><img src="/images/facebook.png" style={{height: "100%"}} alt="..." /></a>
            <a href="#" style={{border: "2px solid green", height: "100%"}}><img src="/images/Instagram.png" style={{height: "100%"}} alt="..." /></a>
            <a href="#" style={{border: "2px solid green", height: "100%"}}><img src="/images/Twitter.png" style={{height: "100%"}} alt="..." /></a>
            <a href="#" style={{border: "2px solid green", height: "100%"}}><img src="/images/Youtube.png" style={{height: "100%"}} alt="..." /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      </div>
    </div>
  )
}

export default Footer;

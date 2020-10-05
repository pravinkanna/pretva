import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__quote">
        <p>Get in touch!</p>
      </div>
      <div className="footer__location">
        <p>Location</p>
        <p>Bengaluru, Karnataka, India</p>
      </div>
      <div className="footer__contact">
        <p>Contact</p>
        <p>support@pretva.com</p>
      </div>
      <div className="footer__follow">
        <p>Follow</p>
      </div>
    </div>
  );
}

export default Footer;

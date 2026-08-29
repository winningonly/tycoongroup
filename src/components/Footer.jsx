import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="access">
      <div className="container footer-content">
        <div className="footer-top">
          <h2 className="footer-title">Private Correspondence</h2>
          <button className="btn-primary">Enter the Group</button>
        </div>
        
        <div className="gold-line footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-logo">TYCOON GROUP</div>
          <div className="footer-links">
            <a href="#legal">Legal</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Tycoon Group Holdings. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

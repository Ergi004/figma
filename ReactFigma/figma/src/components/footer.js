import * as React from "react";
import "../styles/footer.css";


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h5>writings.dev</h5>
        <a href="../App.js" className="footer-link">by @kamrify</a>
      </div>
      <div className="footer-content">
      <a href="../App.js" className="footer-link"><img className="tweet-img" src="/img/vector.svg" alt="tweet" />Follow @writings.dev</a>
      </div>
    </footer>
  );
};

export default Footer;
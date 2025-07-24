import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-grid">
      <div className="footer-col">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
      <div className="footer-col">
        <a href="/contact">Contact</a>
        <a href="/subscribe">Subscribe Free</a>
      </div>
      <div className="footer-col">
        <a href="/about">About</a>
        <a href="/donation">Donation</a>
      </div>
      <div className="footer-socials">
        <a href="https://discord.gg/5CrNFB4Zqt" target="_blank">
          <img src="discord.png" alt="Discord" />
        </a>
        <a href="https://t.me/fundafuns" target="_blank">
          <img src="telegram.png" alt="Telegram" />
        </a>
        <a href="https://x.com/fundafuns" target="_blank">
          <img src="x.png" alt="X" />
        </a>
      </div>
    </div>

    <div className="disclaimer">
      <strong>Disclaimer !</strong><br />
      The information and fundamental data displayed...
    </div>

    <div className="footer-bottom">
      © 2025 fundafun. All rights reserved.
    </div>
  </footer>
);

export default Footer;

import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram,FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-heading">
          Learn more about our company and stay in touch with us!
        </p>

        <div className="social-links">
          <div className="social-wrapper">
            <div className="social-media">
              <h2>Social Media</h2>
              <Link
                to="https://www.instagram.com/"
                className="social-icons"
                target="_blank"
                aria-label="Instagram"
              >
                Instagram <FaInstagram />
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="social-icons"
                target="_blank"
                aria-label="Facebook"
              >
                Facebook <FaFacebookF />
              </Link>

              <Link
                className="social-icons"
                to="https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                Youtube <FaYoutube />
              </Link>

              <Link
                className="social-icons"
                to="https://twitter.com/?lang=en"
                target="_blank"
                aria-label="Twitter"
              >
                Twitter  <FaTwitter />

          <h2><FaCopyright/> Aqua Keeping Culture </h2>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

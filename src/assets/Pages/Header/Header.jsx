import React from "react";
import "./Header.css";
import Logo from "../../images/drenergy_logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="../../../../index.html">
            <img src={Logo} width={250} height={150} />
          </a>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-item_link" href="">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item_link" href="">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item_link" href="">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item_link" href="">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-item_btn" href="">
                  Contact us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

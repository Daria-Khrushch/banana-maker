import React from "react";

import logo from "./../assets/images/logo.png";
import twitterLogo from "./../assets/images/twitter-logo.svg";

export default function Header() {
  return (
    <>
      <header className="header-section">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="menu-area">
                <ul className="menu">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#roadmap">Roadmap</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#faq">
                      F<span>U</span>Q
                    </a>
                  </li>
                  <li>
                    <a href="#friends">Friends</a>
                  </li>
                  <li>
                    <a
                      href="https://rotten-us.gitbook.io/kinda-whitepaper/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Whitepaper
                    </a>
                  </li>
                </ul>
                <div className="header-btn">
                  <a
                    href="#href"
                    className="default-btn default-btn--secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      Soon <i className="fa-brands fa-discord"></i>
                    </span>
                  </a>
                  <a
                    href="https://twitter.com/Rotten_Us"
                    className="default-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      Follow <img src={twitterLogo} alt="twitter logo" />
                    </span>
                  </a>
                </div>

                <div className="header-bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

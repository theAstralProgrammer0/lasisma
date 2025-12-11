import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LaspemaLogoRemix } from "../LaspemaLogoRemix";
import { SearchIcon } from "../SearchIcon";
import { UserIcon } from "../UserIcon";
import "./style.css";

export const NavBar = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* N1: Full width wrapper */}
      <div className="navbar__full-width">
        {/* N2: Constrained container */}
        <div className="navbar__container">
          
          {/* N3: Left Group - Logos (Home link) */}
          <Link to="/" className="navbar__logo-group" onClick={closeMenu}>
            <div className="navbar__logo-wrapper">
              <img 
                className="navbar__logo-lagos" 
                src="/img/lagos-logo-1-1.png" 
                alt="Lagos State Crest" 
              />
            </div>
            <div className="navbar__separator"></div>
            <div className="navbar__logo-wrapper">
              <LaspemaLogoRemix />
            </div>
          </Link>

          {/* N4: Center Group - Navigation Links */}
          <div className="navbar__center desktop-only">
            <ul className="navbar__links">
              <li className="navbar__item">
                <Link to="/about-laspema" className="navbar__link">ABOUT LASISMA</Link>
              </li>
              <li className="navbar__item">
                <Link to="/services" className="navbar__link">SERVICES</Link>
              </li>
              <li className="navbar__item">
                <Link to="/newsroom" className="navbar__link">NEWSROOM</Link>
              </li>
              <li className="navbar__item">
                <Link to="/connect" className="navbar__link">CONNECT</Link>
              </li>
            </ul>
          </div>

          {/* N5: Right Group - Action Icons */}
          <div className="navbar__right desktop-only">
            <div className="navbar__actions">
              <button 
                className="navbar__action-btn" 
                aria-label="Search"
                onClick={() => console.log('Search clicked')}
              >
                <SearchIcon className="navbar__icon" />
              </button>
              <button 
                className="navbar__action-btn" 
                aria-label="User Account"
                onClick={() => console.log('User clicked')}
              >
                <div className="navbar__icon-wrapper">
                  <UserIcon className="navbar__icon" />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="navbar__toggle mobile-only"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="navbar__toggle-icon"></span>
            <span className="navbar__toggle-icon"></span>
            <span className="navbar__toggle-icon"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-container">
          <ul className="navbar__mobile-links">
            <li className="navbar__mobile-item">
              <Link to="/about-laspema" className="navbar__mobile-link" onClick={closeMenu}>
                ABOUT LASISMA
              </Link>
            </li>
            <li className="navbar__mobile-item">
              <Link to="/services" className="navbar__mobile-link" onClick={closeMenu}>
                SERVICES
              </Link>
            </li>
            <li className="navbar__mobile-item">
              <Link to="/newsroom" className="navbar__mobile-link" onClick={closeMenu}>
                NEWSROOM
              </Link>
            </li>
            <li className="navbar__mobile-item">
              <Link to="/connect" className="navbar__mobile-link" onClick={closeMenu}>
                CONNECT
              </Link>
            </li>
          </ul>
          
          <div className="navbar__mobile-actions">
            <button 
              className="navbar__mobile-action"
              onClick={() => {
                console.log('Mobile search clicked');
                closeMenu();
              }}
            >
              <SearchIcon className="navbar__mobile-icon" />
              <span>Search</span>
            </button>
            <button 
              className="navbar__mobile-action"
              onClick={() => {
                console.log('Mobile user clicked');
                closeMenu();
              }}
            >
              <UserIcon className="navbar__mobile-icon" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


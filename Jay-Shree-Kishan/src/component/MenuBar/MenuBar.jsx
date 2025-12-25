import React, { useState } from "react";
import "./Menubar.css";
import { FaGift, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import FestivalGiftOffers from "../FestivalGiftOffers/FestivalGiftOffers";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // ✅ AUTO CLOSE FUNCTION
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className="menu-bar">
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={`menu-links ${isOpen ? "active" : ""}`}>
        <li className="dropdown">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            All Categories ▾
          </button>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/productpage" onClick={closeMenu}>
                  Vegetables and Fruits
                </Link>
              </li>

              <li onClick={closeMenu}>Breads & Bakery</li>

              <li className="sub-dropdown">
                <button onClick={() => toggleSubmenu("breakfast")}>
                  Breakfast & Dairy ▸
                </button>

                {activeSubmenu === "breakfast" && (
                  <ul className="sub-menu">
                    <li onClick={closeMenu}>Milk</li>
                    <li onClick={closeMenu}>Butter</li>
                    <li onClick={closeMenu}>Cheese</li>
                  </ul>
                )}
              </li>

              <li className="sub-dropdown">
                <button onClick={() => toggleSubmenu("fruits")}>
                  Fruits & Juice ▸
                </button>

                {activeSubmenu === "fruits" && (
                  <ul className="sub-menu">
                    <li onClick={closeMenu}>Apple Juice</li>
                    <li onClick={closeMenu}>Mango Juice</li>
                    <li onClick={closeMenu}>Fresh Fruits</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/special" onClick={closeMenu}>Specials</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/brandPage" onClick={closeMenu}>Brand</Link></li>
        <li><Link to="/siteMap" onClick={closeMenu}>Sitemap</Link></li>
      </ul>

      {/* Options */}
      <div className="product-options">
        <select>
          <option>Buyers</option>
          <option>Sellers</option>
        </select>
        <select>
          <option>Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
        </select>
      </div>

      {/* Gift Button */}
      <button className="gift-btn" onClick={() => setIsPopupOpen(true)}>
        <FaGift /> Festival Gift Offers
      </button>

      <FestivalGiftOffers
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </nav>
  );
};

export default MenuBar;

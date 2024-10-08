import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
   <>
      <nav className="sticky">
        <a href="/" className="coffee-title">
          CoffeeMe
        </a>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/history"> History of coffee </a>
            </li>
            <li>
              <a href="/types"> Coffee types </a>
            </li>
            <li>
              <a href="/benefits"> Coffee benefits </a>
            </li>
          </ul>
        </div>
        <FaBars className="bar" onClick={() => setShowMenu(!showMenu)} />
      </nav>
    </>
  );
}

export default Navbar;

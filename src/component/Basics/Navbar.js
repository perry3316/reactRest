// Import React and React Router DOM
import React from "react";
import { Link } from "react-router-dom";

// Define the navbar component
const Navbar = () => {
  // Define the state for the toggle menu
  const [showMenu, setShowMenu] = React.useState(false);

  // Define the function to handle the menu click
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // Define the class names for the menu and the button
  const menuClass = showMenu ? "menu active" : "menu";
  const buttonClass = showMenu ? "button close" : "button";

  return (
    <nav className="navbar">
      <div className="logo">React Navbar</div>
      <ul className={menuClass}>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className={buttonClass} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

// Export the navbar component
export default Navbar;

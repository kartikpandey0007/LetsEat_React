import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="flex justify-between items-center bg-pink-100 shadow-md px-6 py-4 mb-4">
      {/* Logo */}
      <div className="logo-container">
        <img className="w-20 rounded-full" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="nav-items">
        <ul className="flex items-center gap-8 text-lg font-semibold text-gray-700">
          <li>
            <Link to="/" className="hover:text-pink-600 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-600 transition duration-200">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-600 transition duration-200">Contact Us</Link>
          </li>
          <li>
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow transition duration-300"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

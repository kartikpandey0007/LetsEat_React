import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center shadow-md px-6 py-4 mb-4">
      {/* Logo */}
      <Link to="/">
        <div className="logo-container">
          <div className="flex items-center space-x-3 ml-6">
            <img
              className="w-20 h-20 rounded-full border-2 border-pink-300 shadow-md hover:shadow-lg transition duration-300"
              src={LOGO_URL}
              alt="Let'sEat Logo"
            />
            <span className="text-2xl font-bold text-pink-600">Let'sEat</span>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="nav-items">
        <ul className="flex items-center gap-8 text-lg font-semibold text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-pink-600 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-pink-600 transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-pink-600 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-pink-600 transition duration-200"
            >
              Cart🛒
            </Link>
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
          <li>{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

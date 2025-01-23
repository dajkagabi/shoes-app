import { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon

const Navbar = ({ cartItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="h-30 w-20 mr-2" />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              className="relative flex items-center text-gray-600 hover:text-gray-900"
            >
              <FaShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-500 text-white text-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 mt-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-bold"
                    : "text-gray-600 hover:text-gray-900"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-bold"
                    : "text-gray-600 hover:text-gray-900"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-bold"
                    : "text-gray-600 hover:text-gray-900"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-bold"
                    : "text-gray-600 hover:text-gray-900"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/cart"
                className="relative flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-500 text-white text-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default Navbar;
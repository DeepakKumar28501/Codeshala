import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a seach" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
    { path: "/loginform", title: "LoginForm" },
  ];
  return (
    <header className="shadow sticky">
      <nav className="bg-primary border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center font-clash font-[500] text-white text-3xl"
          >
            {/* <img
                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                    className="mr-3 h-12"
                    alt="Logo"
                /> */}
            CODEXDESK
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {/* nav items for large device  */}
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
              {navItems.map(({ path, title }) => (
                <li>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 font-clash hover:text-orange-700 lg:p-0`
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className=" items-center  lg:order-2 ">
            <Link
              to="/login"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="Signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign up
            </Link>
          </div>
          {/* mobile menu code here  */}
          <div className="md:hidden block">
            <button onClick={handleMenuToggler} className="text-white text-2xl">
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* navitem for mobile  */}
      <div className={`px-4 bg-primary py-5 ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 font-clash hover:text-orange-700 lg:p-0`
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="w-full gap-2">
            {" "}
            <Link
              to="/login"
              className="text-white bg-orange hover:bg-orange_lg py-2 px-3 w-[100%] me-3"
            >
              Log in
            </Link>
            <Link
              to="Signup"
              className="text-white bg-orange hover:bg-orange_lg py-2 px-3 w-[100%]"
            >
              Sign up
            </Link>
          </li>
          
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
export default function Navbar2() {
  const content = (
    <>
      <div className="">
        <ul>
          <Link to="Home">
            <li>Home</li>
          </Link>
          <Link to="About">
            <li>About</li>
          </Link>
          <Link to="Service">
            <li>Service</li>
          </Link>
          <Link to="Projects">
            <li>Projects</li>
          </Link>
          <Link to="Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <header className="bg-primary w-full  shadow-md">
      <nav className="flex flex-row justify-between content-center">
        <div className="h-[60px] flex justify-between z-50 text-white lg:py-5 px-10 py-20 ">
          <div className="flex items-center">
            <span className="text-4xl font-[500] font-clash">CODEXDESK</span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-end justify-center font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px] text-white">
                <Link to="Home">
                  <li className="text-white">Home</li>
                </Link>
                <Link to="About">
                  <li>About</li>
                </Link>
                <Link to="Service">
                  <li>Service</li>
                </Link>
                <Link to="Projects">
                  <li>Projects</li>
                </Link>
                <Link to="Contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React from "react";

import Logo from "../assets/img/brand/Logo.png"

const navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="container mx-auto">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl"><img src={Logo} alt="" /></a>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 hidden lg:flex flex-row-reverse">
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Bookings</a>
              </li>
              <li>
                <a>Flights</a>
              </li>
              <li>
                <a>Hotels</a>
              </li>
              <li>
                <a>Destination</a>
              </li>
              {/* <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Destination</a>
              </li>
              <li>
                <a>Hotels</a>
              </li>
              <li>
                <a>Flights</a>
              </li>
              <li>
                <a>Bookings</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;

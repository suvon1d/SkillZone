import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import icon from "../../assets/icons8-student-male-100.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const [hover, setHover] = useState(false);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("you LogOut sucsfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto flex-col md:flex-row">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-3 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={icon} className="w-15" />
          <h2 className="text-3xl font-bold bg-linear-to-r from-[#6292c9] to-[#2d68a7] bg-clip-text text-transparent">
            SkillZone
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-base font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {/* ternary button and avatar */}
          {user ? (
            <div>
              <div
                className="relative avatar mr-3"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
                <span
                  className={`absolute mt-14 text-xs text-nowrap ${
                    hover ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Hello Borda
                </span>
              </div>
              <button onClick={handleLogOut} className=" btn btn-primary">
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/auth/login" className=" btn btn-primary mr-4">
                Log in
              </Link>
              <Link to="/auth/register" className=" btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <hr className="border-[#1b2a3a] mt-2" />
    </div>
  );
};

export default NavBar;

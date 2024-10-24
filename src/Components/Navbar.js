import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-toastify";

export const Navbar = (props) => {
  //using props we can access
  let isLoggedIn = props.isLoggedIn;
  let SetisLoggedIn = props.SetisLoggedIn;

  // using this we can change logout to login

  const handleLogout = () => {
    SetisLoggedIn(false);
    toast("Logged Out");
  };

  return (
    <div className="flex  justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className=" text-white flex gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* for buttons login - signup - dashboard -logout  */}

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-gray-800 text-white  py-[8px]  px-[12px] rounded-[8px] border border-gray-700">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-gray-800 text-white  py-[8px]  px-[12px] rounded-[8px] border border-gray-700">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button onClick={handleLogout} className="bg-gray-800 text-white  py-[8px]  px-[12px] rounded-[8px] border border-gray-700">Logout</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-gray-800 text-white  py-[8px]  px-[12px] rounded-[8px] border border-gray-700">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

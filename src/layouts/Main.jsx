import React, { useContext, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/UserContext";
import profile from "../assets/icons/user-demo.png";
import logo from "../assets/icons/logo.png";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Main = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logout!");
      })
      .catch((err) => toast.error("Error logout. Please try again"));
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="note-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="note-drawer" className="drawer-overlay"></label>
          <div className="menu w-72 h-full bg-slate-100 text-base-content p-5">
            {/* Sidebar content here */}
            <div className="flex justify-between">
              <Link className="flex  items-center gap-3 normal-case text-xl my-5">
                <img className="w-10" src={logo} alt="logo not found" />{" "}
                <h3>Keep Notes</h3>
              </Link>
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar my-5"
                >
                  <div className=" rounded-full border-2">
                    {user?.photoURL ? (
                      <img
                        className="w-12 h-12 rounded-full"
                        src={user?.photoURL}
                        alt="Profile not found!"
                      />
                    ) : (
                      <img src={profile} alt="profile" />
                    )}
                  </div>
                </label>
                {/* {user?.email && <p>{user?.email}</p>} */}
                <ul
                  tabIndex={0}
                  className="ml-[-200px] z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {user ? (
                    <div className="">
                      <li>
                        <Link className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link>Settings</Link>
                      </li>
                      <li>
                        <Link onClick={handleLogOut}>
                          {" "}
                          <FaSignOutAlt></FaSignOutAlt> Logout
                        </Link>
                      </li>
                    </div>
                  ) : (
                    <div className="">
                      <li>
                        <Link to={"/login"}>
                          <FaSignInAlt></FaSignInAlt> Login
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <hr />
            {/* <div className="form-control">
              <input
                onChange={handleSearch}
                ref={searchRef}
                type="text"
                placeholder="Search"
                className="input glass h-8"
              />
            </div> */}
            <div className="mt-5">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

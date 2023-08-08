import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import profile from "../../../src/assets/icons/user-demo.png";
import logo from "../../assets/icons/logo.png";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logout!");
      })
      .catch((err) => toast.error("Error logout. Please try again"));
  };
  return (
    <div className="bg-slate-100 border-t-4 border-green-600 shadow-lg lg:hidden">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link className="flex justify-center items-center gap-3 normal-case text-xl my-5">
            <img className="w-10" src={logo} alt="logo not found" />{" "}
            <h3>Keep Notes</h3>
          </Link>
        </div>
        <div className="flex-none gap-2 hidden lg:block">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="input glass w-24 h-8 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
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
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </div>
              ) : (
                <div className="">
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>

        <label
          htmlFor="note-drawer"
          tabIndex={1}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

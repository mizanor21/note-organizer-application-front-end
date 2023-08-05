import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import loginLogo from "../../../assets/icons/loginLogo.webp";
import { AuthContext } from "../../../contexts/UserContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleSignin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`Successfully login`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignin()
      .then((data) => {
        console.log(data);
        toast.success(`Successfully login ${data?.user?.displayName}`);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <img className="w-1/3 hidden md:block" src={loginLogo} alt="" />

      <div className="shadow-xl p-10 rounded-lg">
        <h1 className="text-2xl text-center">Login First</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email *</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password *</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered w-full"
            />
          </div>

          <input className="btn btn-black w-full mt-5 mb-3" type="submit" />
          <div className="text-center">
            <small>
              New to recycle?{" "}
              <Link to={"/signup"} className="text-emerald-500">
                Create new account
              </Link>
            </small>
          </div>
        </form>

        <div className="divider">OR</div>
        <div className="flex justify-center w-full">
          <FaGoogle
            onClick={handleGoogleSignIn}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

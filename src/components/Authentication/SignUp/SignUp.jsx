import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import loginLogo from "../../../assets/icons/loginLogo.webp";
import { AuthContext } from "../../../contexts/UserContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        toast.success("Successfully created user");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img className="w-1/3 hidden md:block" src={loginLogo} alt="" />
      <div className="shadow-xl p-10 rounded-lg">
        <h1 className="text-2xl text-center">SignUp</h1>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name *</span>
            </label>
            <input
              {...register("name")}
              type="name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email *</span>
            </label>
            <input
              {...register("email")}
              required
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
              required
              type="password"
              className="input input-bordered w-full"
            />
          </div>
          <input className="btn btn-black w-full mt-5 mb-3" type="submit" />
          <div className="text-center">
            <small>
              Already have an account?{" "}
              <Link to={"/login"} className="text-emerald-500">
                Please login
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

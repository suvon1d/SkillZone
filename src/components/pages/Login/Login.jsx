import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-lg">
        <div className="card-body">
          <h2 className="font-extrabold text-5xl text-primary text-center ">
            Log In
          </h2>
          <fieldset className="fieldset mt-5 space-y-4">
            <input
              type="email"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Email"
            />
            <input
              type="password"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary font-black">Log in</button>
            <p className="font-bold text-lg text-center">
              Don't have an account ?
              <Link to="/auth/register" className="text-red-500">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;

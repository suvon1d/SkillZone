import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-lg">
        <div className="card-body">
          <h2 className="font-extrabold text-5xl text-primary text-center ">
            Register your account
          </h2>
          <fieldset className="fieldset mt-5 space-y-4">
            {/* Name */}
            <input
              type="text"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Name"
            />
            {/* Email */}
            <input
              type="email"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Email"
            />
            {/* Photo-URL */}
            <input
              type="text"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Photo-URL"
            />
            {/* Password */}
            <input
              type="password"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Password"
            />

            <button className="btn btn-primary font-black">Register</button>
            <p className="font-bold text-lg text-center">
              AllReady have an account ?
              <Link to="/auth/login" className="text-red-500">
                LogIn
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;

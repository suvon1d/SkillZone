import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-lg">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="font-extrabold text-5xl text-primary text-center ">
            Register your account
          </h2>
          <fieldset className="fieldset mt-5 space-y-4">
            {/* Name */}
            <input
              name="name"
              type="text"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Name"
            />
            {/* Email */}
            <input
              name="email"
              type="email"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Email"
              required
            />
            {/* Photo-URL */}
            <input
              name="photo"
              type="text"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Photo-URL"
              required
            />
            {/* Password */}
            <input
              name="password"
              type="password"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Password"
              required
            />

            <button className="btn btn-primary font-black">Register</button>
            <p className="font-bold text-lg text-center">
              AllReady have an account ?
              <Link to="/auth/login" className="text-red-500">
                LogIn
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");

  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 4) {
      setNameError("Name must be at least 4 characters");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            alert(error);
            setUser(user);
          });

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setPassError(errorMessage, errorCode);
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
            {nameError && <p className="text-error">{nameError}</p>}
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

            {passError && (
              <p className="text-red-500">
                Password should be at least 6 characters
              </p>
            )}

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

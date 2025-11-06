import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, signInWithGoogle, resetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;

        setError(errorMessage);
      });
  };

  // google btn handle
  const handleGoogleBtn = () => {
    signInWithGoogle().then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  // forget btn

  const handlePasswordForget = () => {
    const email = emailRef.current.value;
    resetPassword(email).then(() => {});
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-lg">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="font-extrabold text-5xl text-primary text-center ">
            Log In
          </h2>
          <fieldset className="fieldset mt-5 space-y-4">
            <input
              name="email"
              type="email"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Email"
              required
              ref={emailRef}
            />
            <input
              name="password"
              type="password"
              className="input bg-base-300 w-full font-black p-5"
              placeholder="Password"
              required
            />
            <div>
              <a onClick={handlePasswordForget} className="link link-hover">
                Forgot password?
              </a>
            </div>

            {error && <p className="text-red-500">Incorrect Password</p>}

            <button className="btn btn-primary font-black">Log in</button>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleBtn}
          className="btn btn-primary font-black mx-5"
        >
          {" "}
          <FcGoogle />
          SignIn with Google
        </button>
        <p className="font-bold text-lg text-center mt-3">
          Don't have an account ?
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

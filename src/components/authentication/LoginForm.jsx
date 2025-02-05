import React, { useState } from "react";
import { FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/state/Auth/Action";

const LoginForm = ({ registerPath, resetPath }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Example: Password must be at least 6 characters
  };

  const onLogin = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Incorrect Password.");
      return;
    }

    setError(""); // Clear previous errors

    // Simulating a backend response (replace this with an actual API call)
    const fakeUsers = [
      { email: "nishant.pantha25@gmail.com", password: "Arniko@123#" },
    ];

    const userExists = fakeUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      let userData = { email, password };
      dispatch(login(userData, navigate));
    } else {
      setError("Incorrect email or password."); // Show error if credentials are wrong
    }
  };

  return (
    <>
      <h2 className="fs-20 fw-bolder mb-4">Login</h2>
      <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
      <p className="fs-12 fw-medium text-muted">
        Thank you for getting back to <strong>Nelel</strong> web applications.
        Let's access the best recommendations for you.
      </p>

      {error && <p className="alert alert-danger">{error}</p>} {/* Error message */}

      <form onSubmit={onLogin} className="w-100 mt-4 pt-2">
        <div className="mb-4">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email or Username"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="rememberMe" />
            <label className="custom-control-label c-pointer" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <div>
            <Link to={resetPath} className="fs-11 text-primary">
              Forget password?
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <button type="submit" className="btn btn-lg btn-primary w-100">
            Login
          </button>
        </div>
      </form>

      <div className="w-100 mt-5 text-center mx-auto">
        <div className="mb-4 border-bottom position-relative">
          <span className="small py-1 px-3 text-uppercase text-muted bg-white position-absolute translate-middle">
            or
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <a href="#" className="btn btn-light-brand flex-fill" title="Login with Facebook">
            <FiFacebook size={16} />
          </a>
          <a href="#" className="btn btn-light-brand flex-fill" title="Login with Twitter">
            <FiTwitter size={16} />
          </a>
          <a href="#" className="btn btn-light-brand flex-fill" title="Login with Github">
            <FiGithub size={16} />
          </a>
        </div>
      </div>

      <div className="mt-5 text-muted">
        <span> Don't have an account?</span>
        <Link to={registerPath} className="fw-bold">
          {" "}
          Create an Account
        </Link>
      </div>
    </>
  );
};

export default LoginForm;

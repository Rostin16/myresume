import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

function AuthPage() {
  const [user, setUser] = useState({});
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigator = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (signIn) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          setLoading(false);
          setMessage("Signed in successfully!");
          navigator("/productform");
        })
        .catch((err) => {
          setLoading(false);
          setError("Error signing in: " + err.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          setLoading(false);
          setMessage("Signed up successfully!");
          navigator("/productform");
        })
        .catch((err) => {
          setLoading(false);
          setError("Error signing up: " + err.message);
        });
    }
  };

  const handleGoogleAuth = () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    signInWithPopup(auth, provider)
      .then(() => {
        setLoading(false);
        setMessage("Signed in with Google!");
        navigator("/productform");
      })
      .catch((err) => {
        setLoading(false);
        setError("Error signing in with Google: " + err.message);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            <button
              onClick={() => setSignIn(false)}
              className={`btn ${
                signIn ? "btn-outline-primary" : "btn-primary"
              } w-100 me-3`}
            >
              SignUp
            </button>
            <button
              onClick={() => setSignIn(true)}
              className={`btn ${
                signIn ? "btn-primary" : "btn-outline-primary"
              } w-100`}
            >
              LogIn
            </button>
          </div>

          <h2 className="text-center mb-4 fs-3 text-success">
            {signIn ? "LogIn" : "SignUp"}
          </h2>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address :
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={user.email || ""}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={user.password || ""}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : signIn ? "Sign In" : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={handleGoogleAuth}
            className="btn btn-danger w-100"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

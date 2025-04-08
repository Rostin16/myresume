import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <>
      <h2 className="text-center text-warning my-5">
        Thank You for visiting Us
      </h2>
      <form className="d-flex justify-content-center">
        <Link className="btn btn-success p-2 me-2" to="/" role="button">
          Signup
        </Link>
      </form>
    </>
  );
}

export default Logout;

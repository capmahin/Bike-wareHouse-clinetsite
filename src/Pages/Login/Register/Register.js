import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-from">
      <h1 style={{ textAlign: "center" }}>Please Register</h1>
      <form>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already Have an Account?{" "}
        <Link
          to="/login"
          className="text-dark pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;

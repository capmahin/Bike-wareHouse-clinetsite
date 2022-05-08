import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
  };
  return (
    <div className="register-from">
      <h1 style={{ textAlign: "center" }}>Please Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Terms and Condition
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-dark"
          type="submit"
          value="Register"
        />
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;

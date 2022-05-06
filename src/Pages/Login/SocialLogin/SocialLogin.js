import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      <div>
        <button className="btn btn-dark w-50 d-block mx-auto my-2">
          <img src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-secondary w-50 d-block mx-auto">
          <img src={github} alt="" />
          <span className="px-2">GitHub Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

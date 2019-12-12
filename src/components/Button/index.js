import React, { useContext } from "react";
import { connect } from "react-redux";
import { makeAPICall } from "../../actions";
import { LoginContext } from "../../context";

const Button = ({ makeAPICall }) => {
  const [loginInfo] = useContext(LoginContext);
  return (
    <>
      <h3>
        Welcome{" "}
        {loginInfo.isAuthenticated ? loginInfo.userName : "Please Log In"}{" "}
      </h3>
      <button id="getDetails" onClick={makeAPICall}>
        Get Weather Info
      </button>
    </>
  );
};

const mapDispatchToProps = {
  makeAPICall: makeAPICall
};

export default connect(null, mapDispatchToProps)(Button);

import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useNavigate();
  const [showPassword, setshowPassword] = useState(true);
  const [forgotPopup, setForgotPopup] = useState(false);
  const [forgetemail, setforgetemail] = useState("");

  const handleClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorcount = 0;
    if (email.length == 0) {
      setEmailError("please enter email");
      errorcount++;
      // } else if (!emailRegex.test(email)) {
      // setEmailError("please enter valid email");
      //errorcount++;
    }
    if (password.length == 0) {
      setPasswordError("please enter password");
      errorcount++;
    } else if (password.length < 7) {
      setPasswordError("password must be greater than 8 character");
      errorcount++;
    }
    if (errorcount == 0) {
      const formdata = { username: email, password };
      // axios
      //  .post("https://dummyjson.com/auth/login", formdata)
      //   .then((res) =>
      //     // history("/admin page",res.data)
      //     console.log(res)
      //   )
      //   .catch((error) => console.log(error));
      history("/adminpage");
    }
  };

  /* const handleForgetPasswordClick = () => {
    window.open('/password-reset','');

  }*/

  return (
    <div className="login-body d-flex flex-column justify-content-center">
      <div className=" col-4 card shadow p-5 ms-5" align="center">
        <div className="text-center">
          <img
            src="./logo.jpg"
            alt="logo"
            className="img-fluid"
            width={100}
          ></img>
          <p style={{ color: "purple" }}>
            <b>digital</b>Flake
          </p>
          <p style={{ color: "grey" }}>Welcome to Digitalflake Admin</p>
        </div>
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
        />
        <p className="text-danger text-start">{emailError}</p>
        <div className="position-relative">
          <input
            className="form-control mt-2"
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          <div className="position-absolute" style={{ right: 10, top: 12 }}>
            {showPassword ? (
              <i
                class="bi bi-eye"
                onClick={() => setshowPassword(!showPassword)}
              ></i>
            ) : (
              <i
                className="bi bi-eye-slash"
                onClick={() => setshowPassword(!showPassword)}
              ></i>
            )}{" "}
            {/* if else condition for password*/}
          </div>
        </div>
        <p className="text-danger text-start">{passwordError}</p>
        <p
          aria-hidden
          className="text-end mt-2"
          style={{ color: "purple", cursor: "pointer" }}
          onClick={() => {
            setForgotPopup(true);
          }}
        >
          Forgot Password?
        </p>
        <button
          className="btn btn-primary mt-5"
          onClick={handleClick}
          type="button"
          gap-3
        >
          Login
        </button>
      </div>
      <Modal show={forgotPopup} onHide={() => setForgotPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Did you forget your password?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="text-center fs-6">
            Enter your email address and we'll send you a link to restore
            password
          </p>
          <p>Email Address</p>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setforgetemail(e.target.value)}
            value={forgetemail}
          />
          <button
            className="btn text-white w-100 mt-3"
            style={{ backgroundColor: "#662671" }}
            onClick={() => setForgotPopup(false)}
          >
            Request reset link
          </button>
          <p
            className="text-decoration-underline text-center fs-6 my-3"
            onClick={() => setForgotPopup(false)}
            style={{cursor:"pointer"}}
          >
            Back to login
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginForm;

import axios from "../config/axios";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js"

function Login() {
  const db = firebase.firestore()

  useEffect(() => {
    db.collection('med').get().then((value) => {
      console.log(value.docs)
      value.docs.forEach(el => {
          console.log(el.data())
          console.log(el.id)
      })
    })
  })

  const history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/doctor",
      data: {
        name: name,
        password: password,
      },
    })
      .then((result) => {
        const accessToken = result.data.access_token;
        localStorage.setItem("access_token", accessToken);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
    <div className="login-page mb-5">
      <div className=" container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <p className="text-center">Please login first</p>
        <div className="d-flex justify-content-center">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmitLogin(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

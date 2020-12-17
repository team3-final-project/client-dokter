import axios from '../config/axios'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

function Login() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3000/doctor',
      data: {
        name: name,
        password: password
      }
    })
      .then((result) => {
        const accessToken = result.data.access_token
        swal({
          title: 'Success!',
          text: 'Welcome back!',
          icon: 'success',
          buttons: false,
          timer: 1500
        })
        localStorage.setItem('access_token', accessToken)
        history.push('/dashboard')
      })
      .catch((err) => {
        swal({
          title: 'Error!',
          text: err.response.data.msg,
          icon: 'error',
          button: true
        })
        console.log(err.response.data.msg)
      })
  }

  return (
    <div className="login-page mb-5">
      <div className=" container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <p className="text-center mt-3">Enter your account information</p>
        <div className="d-flex justify-content-center">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmitLogin(e)}>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

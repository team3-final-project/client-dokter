import React from 'react'
import mainLogo from '../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'

function Navbar() {
  const history = useHistory()

  const handleLogoutClick = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <Link className="navbar-brand" to="/dashboard">
        <img src={mainLogo} width="100" alt="main-logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Beranda
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-danger"
              onClick={() => handleLogoutClick()}
              style={{ color: '#fff' }}>
              Keluar
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

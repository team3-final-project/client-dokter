import React from 'react'
import avatarDoctor from '../assets/doctor-avatar.png'
import { Navbar } from '../components'
function ProfileDoctor() {
  return (
    <div>
      <Navbar />
      <div className="profile-doctor">
        <div className="container">
          <div className="img-frame">
            <img src={avatarDoctor} alt="doc-avatar" />
          </div>
          <div className="card">
            <h1>Dr. Setiabudhi</h1>
            <p>Dokter Umum</p>
            <p className="font-weight-bold">Jumlah Pasien: 10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDoctor

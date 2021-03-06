import React from 'react'
import medicalIcon from '../assets/medical-file.png'
import folderIcon from '../assets/folder.png'
import doctorIcon from '../assets/doctor.png'
import { Navbar } from '../components/'
import { useHistory } from 'react-router-dom'

function Dashboard() {
  const history = useHistory()

  function navToAdd() {
    history.push('/add-patient')
  }

  function navToProfile() {
    history.push('/profile-doctor')
  }

  function navToList() {
    history.push('/list-patient')
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="container">
          <h1 className="mt-3 mb-5">Home</h1>
          <div className="row">
            <div className="col-lg-4 col-xs-12 mb-3" onClick={navToAdd}>
              <div className="card card-dash">
                <div className="card-body">
                  <div className="card-title">
                    <h4>Insert new patient</h4>
                  </div>
                  <div className="icon-opt d-flex justify-content-center">
                    <img
                      src={medicalIcon}
                      alt="medic-file"
                      className="align-self-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12 mb-3" onClick={navToList}>
              <div className="card">
                <div className="card-body card-dash">
                  <div className="card-title">
                    <h4>List of patients</h4>
                  </div>
                  <div className="icon-opt d-flex justify-content-center">
                    <img
                      src={folderIcon}
                      alt="medic-file"
                      className="align-self-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12 mb-3" onClick={navToProfile}>
              <div className="card card-dash">
                <div className="card-body">
                  <div className="card-title">
                    <h4>Doctor Profile</h4>
                  </div>
                  <div className="icon-opt d-flex justify-content-center">
                    <img
                      src={doctorIcon}
                      alt="medic-file"
                      className="align-self-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

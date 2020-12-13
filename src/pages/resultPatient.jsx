import React, { useEffect } from "react";
import { Navbar, Modal, CardListMedicalRecord } from "../components/";
import avatar from "../assets/man.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMedicalRecordByPatientId, getPatientById } from "../store/actions";

function ResultPatient() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const patient = useSelector((state) => state.patient);
  const medRecords = useSelector((state) => state.medicalRecord);

  useEffect(() => {
    dispatch(getPatientById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMedicalRecordByPatientId(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      <div className="result-patient">
        <div className="container">
          <h1>Data Pasien</h1>
          <div className="profile">
            <div className="row">
              <div className="col-2">
                <img src={avatar} alt="" className="mx-auto" />
              </div>
              <div className="col-10">
                <h3>
                  {patient.name} - NIK: {patient.nik}
                </h3>
                <p>{patient.birth_date}</p>
                <p>{patient.email}</p>
                <p>{patient.address}</p>
              </div>
            </div>
            <div className="diag-btn">
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <i className="fas fa-plus"></i> Diagnosa
              </button>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Diagnose</th>
                  <th scope="col">Medicine</th>
                  <th scope="col">Dosis</th>
                  <th scope="col">Jumlah Obat</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {medRecords.map((medRecord) => (
                  <CardListMedicalRecord
                    medRecord={medRecord}
                    key={medRecord.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default ResultPatient;

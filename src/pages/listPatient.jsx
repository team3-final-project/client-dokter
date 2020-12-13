import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, CardListPatient } from "../components/";
import { fetchPatients } from "../store/actions";

function ListPatient() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="list-patient mt-5">
        <div className="container">
          <h1>Daftar Pasien</h1>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">NIK</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, i) => (
                <CardListPatient patient={patient} i={i + 1} key={patient.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListPatient;

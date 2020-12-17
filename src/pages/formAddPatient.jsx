import React, { useState } from "react";
import { Navbar } from "../components/";
import AddIcon from "../assets/patient.png";
import { useDispatch } from "react-redux";
import { addNewPatient } from "../store/actions";
import { useHistory } from "react-router-dom";

function FormPatient() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    dispatch(addNewPatient(nik, name, email, birth, address));
    history.push("/list-patient");
  };

  return (
    <div>
      <Navbar />
      <div className="form-add">
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="row">
            <img src={AddIcon} alt="patient" />
          </div>
        </div>
        <div>
          <h3 className="text-center">Insert New Patient</h3>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmitAdd(e)}>
                <div className="form-group">
                  <label>NIK:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="NIK"
                    onChange={(e) => setNik(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Full name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Birth Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Birth date"
                    onChange={(e) => setBirth(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
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

export default FormPatient;

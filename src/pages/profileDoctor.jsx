import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatarDoctor from "../assets/doctor-avatar.png";
import { Navbar } from "../components";
import { getProfileDoctor } from "../store/actions";

function ProfileDoctor() {
  const dispatch = useDispatch();

  const doctor = useSelector((state) => state.doctor);

  useEffect(() => {
    dispatch(getProfileDoctor());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="profile-doctor">
        <div className="container">
          <div className="img-frame">
            <img src={avatarDoctor} alt="doc-avatar" />
          </div>
          <div className="card">
            <h1>{doctor.name}</h1>
            <p>{doctor.specialist}</p>
            <p className="font-weight-bold">Total Patient: 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDoctor;

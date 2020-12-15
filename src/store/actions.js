import axios from "../config/axios";
import swal from 'sweetalert';

export function fetchPatients() {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios({
      method: "GET",
      url: "/doctor/patients",
      headers: {
        access_token: access_token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_PATIENTS",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getPatientById(id) {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios({
      method: "GET",
      url: `/medical-record/patient/${id}`,
      headers: {
        access_token: access_token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_PATIENT_DETAIL",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getMedicalRecordByPatientId(id) {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios({
      method: "GET",
      url: `/medical-record/${id}`,
      headers: {
        access_token: access_token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_PATIENT_MEDICAL_RECORD",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addNewMedicalRecord(
  id,
  date,
  diagnose,
  medicineName,
  dosis,
  jumlahObat
) {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios({
      method: "POST",
      url: `/medical-record`,
      headers: {
        access_token: access_token,
      },
      data: {
        date,
        diagnose,
        medicine_name: medicineName,
        dosis,
        jumlah_obat: jumlahObat,
        PatientId: id,
      },
    })
      .then(({ data }) => {
        swal({ 
          title: 'Success!',
          text: 'Data has been added',
          icon: 'success', 
          button: false,
          timer: 1000
        })
        dispatch({
          type: "CREATE_MEDICAL_RECORD",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteMedicalRecord(id) {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios({
      url: `/medical-record/${id}`,
      method: "DELETE",
      headers: {
        access_token: access_token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "DELETE_MEDICAL_RECORD",
          payload: id,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getProfileDoctor() {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios({
      method: "GET",
      url: `/doctor/detail`,
      headers: {
        access_token: access_token,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "SET_DOCTOR_DETAIL",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

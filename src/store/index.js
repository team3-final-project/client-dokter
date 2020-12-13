import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  patients: [],
  doctor: {},
  patient: {},
  medicalRecord: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PATIENTS":
      return { ...state, patients: action.payload };
    case "SET_PATIENT_DETAIL":
      return { ...state, patient: action.payload };
    case "SET_DOCTOR_DETAIL":
      return { ...state, doctor: action.payload };
    case "SET_PATIENT_MEDICAL_RECORD":
      return { ...state, medicalRecord: action.payload };
    case "CREATE_MEDICAL_RECORD":
      const newMedicalRecord = state.patients.concat(action.payload);
      return { ...state, patients: newMedicalRecord };
    case "DELETE_MEDICAL_RECORD":
      const afterDeleteMedicalRecord = state.medicalRecord.filter(
        (medicalRec) => medicalRec.id !== action.payload
      );
      return { ...state, medicalRecord: afterDeleteMedicalRecord };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

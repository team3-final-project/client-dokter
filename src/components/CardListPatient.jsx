import React from "react";
import { useHistory } from "react-router-dom";

function CardListPatient(props) {
  const { patient, i } = props;
  const history = useHistory();


  function navToDetails(id) {
    history.push(`/result-patient/${id}`);
  }

  return (
    <>
      <tr>
        <th scope="row">{i}</th>
        <td>{patient.nik}</td>
        <td>{patient.name}</td>
        <td>{patient.email}</td>
        <td>{patient.birth_date}</td>
        <td>{patient.address}</td>
        <td className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            onClick={() => navToDetails(patient.id)}
          >
            See Details
          </button>
        </td>
      </tr>
    </>
  );
}

export default CardListPatient;

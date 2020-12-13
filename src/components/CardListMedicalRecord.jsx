import React from "react";
import { useDispatch } from "react-redux";
import { deleteMedicalRecord } from "../store/actions";

function CardListMedicalRecord(props) {
  const { medRecord } = props;
  const dispatch = useDispatch();

  const handleDeleteMedicalRecord = (id) => {
    dispatch(deleteMedicalRecord(id));
  };

  return (
    <>
      <tr>
        <td>{medRecord.date}</td>
        <td>{medRecord.diagnose}</td>
        <td>{medRecord.medicine_name}</td>
        <td>{medRecord.dosis} x /Sehari</td>
        <td>{medRecord.jumlah_obat} Tablet</td>
        <td className="d-flex justify-content-center">
          <button
            onClick={() => handleDeleteMedicalRecord(medRecord.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
}

export default CardListMedicalRecord;

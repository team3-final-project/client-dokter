import React from "react";
import { useDispatch } from "react-redux";
import { deleteMedicalRecord } from "../store/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'
function CardListMedicalRecord(props) {
  const { medRecord } = props;

  const dispatch = useDispatch();


  const handleDeleteMedicalRecord = (id) => {
    swal({ 
      title: 'Are you sure?', 
      text: 'It will permanently deleted!',
      icon: 'warning',
      buttons: true, 
      dangerMode: true
    }).then(() => { 
      dispatch(deleteMedicalRecord(id))
      swal('Data has been deleted', { 
        icon: 'success', 
        button: false,
        timer: 1000
      })
    })

  }

  return (
    <>
      <tr>
        <td>{medRecord.date}</td>
        <td>{medRecord.diagnose}</td>
        <td>{medRecord.medicine_name}</td>
        <td>{medRecord.dosis} x /Sehari</td>
        <td>{medRecord.jumlah_obat} Tablet</td>
        <td className="d-flex justify-content-center">
          <FontAwesomeIcon
            onClick={() =>
              handleDeleteMedicalRecord(medRecord.id)}
            role="button"
            icon={faTrash}
            color="#C80000"
          />
        </td>
      </tr>
    </>
  );
}

export default CardListMedicalRecord;

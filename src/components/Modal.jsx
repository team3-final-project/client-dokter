import React from 'react'

function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Tambah Diagnosa
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Diagnosa: </label>
                <textarea
                  className="form-control"
                  id="diagnosa"
                  rows="3"></textarea>
              </div>
              <div className="form-group">
                <label>Obat: </label>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jenis Obat"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dosis"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jumlah"
                    />
                  </div>
                </div>
                <button className="btn btn-dark btn-block mt-1">
                  <i className="fas fa-plus"></i> Tambah Obat
                </button>
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

import React from 'react';

const Modal = ({ children, close }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content p-2">
          {/* Kapatma Butonu */}
          <div className="d-flex justify-content-end">
            <button onClick={close}>X</button>
          </div>

          {/* Ana İçerik */}
          <div>{children}</div>

          {/* Butonlar */}
          <div className="d-flex justify-content-end gap-3 mt-5">
            <button onClick={close}>İptal</button>
            <button className="btn btn-success">Onayla</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

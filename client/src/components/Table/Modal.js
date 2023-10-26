import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MainContext,useContext } from '../../context';

export const ModalComponent = () => {
  const {
    showModal, 
    setShowModal, 
    selectedCellData
}=useContext(MainContext)
 
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Seçili Hücre İçeriği</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ wordBreak: 'break-word' }}>
          {selectedCellData}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
      );
    }

import React, { useState }  from 'react';
import { Modal, Button } from 'react-bootstrap';

function Dialog() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Exporter...
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Adresse publique de votre profil:<br/>
            <a href="#">http://www.candidatheque.com/profil/x654g87Us321</a><br/>
            <br/>
            <Button variant="secondary" className="btn-sm" >
              Télécharger au format PDF
            </Button><br/>
            <br/>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Dialog;
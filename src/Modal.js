import React, { useState }  from 'react';
import {Button, Dialog, DialogContent} from '@material-ui/core';

function Modal() {
    const [open, setOpen] = useState(false);
  

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button variant="contained" color="primary"  onClick={handleClickOpen}>
          Exporter...
        </Button>
  
        <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          
          <DialogContent>
            Adresse publique de votre profil:<br/>
            <a href="http://www.candidatheque.com/profil/x654g87Us321">http://www.candidatheque.com/profil/x654g87Us321</a><br/>
            <br/>
            <Button variant="contained" color="primary" >
              Télécharger au format PDF
            </Button><br/>
            <br/>
            </DialogContent>
          
        </Dialog >
      </>
    );
  }

  export default Modal;
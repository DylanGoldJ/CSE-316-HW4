import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);
    let error = "";
    function handleClose(){
        auth.setError(null)
    }
    
    let isOpen = false
    if (auth.getError()){
        isOpen = true
        error = auth.getError()
    }
    else{
        isOpen = false
    }

    return (
<div>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
          <Button id="dialog-ok-button"
            className =  "modal-button"
            onClick={handleClose}>
            OK
          </Button>
          </Box>
        </Modal>
      </div>);
}
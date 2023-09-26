import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import {Button} from "@material-ui/core";
import { Navigate } from 'react-router-dom';

const style = {
    position: 'absolute' as 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function SeachFilter() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [err, setErr] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [condition, setcondition] = useState('');
    const [negotiation, setnegotiation] = useState('');


    const handleSubmit = async () => {
        // Add your submit logic here
        console.log('Submitted:', name);
        console.log('Submitted:', brand);
        console.log('Submitted:', condition);
        console.log('Submitted:', negotiation);
        setRedirect(true);
      };

      if (redirect) {
        return <Navigate to={`/filter/${name}/${brand}/${condition}/${negotiation}`}/>;
    }

  return (
     <>
           
        <Button onClick={handleOpen} style={{width: '10%'}}> filter</Button>

           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-body" variant="h6" component="h2">
          <div className="form-floating">
                        <input className="form-control" id="floatingInput4" value={name} onChange={event => setName(event.target.value)} required/>
                        <label htmlFor="floatingInput4">Item Name</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control" id="floatingInput4" value={brand} onChange={event => setBrand(event.target.value)} required/>
                        <label htmlFor="floatingInput4">Brand</label>
                    </div>
                    <div className="form-floating">
          <select
            value={condition}
            className="form-control" 
            id="floatingInput4"
            onChange={event => setcondition(event.target.value)}
          >
            <option label="Brand New" value="Brand New" />
            <option label="Used" value="Used" />
            <option label="Foreign Used" value="Foreign Used">
            </option><option label="Nigeria Used" value="Nigeria Used" />
          </select>
          <label htmlFor="floatingInput4">Condition</label>
          </div>
          <div className="form-floating">
          <select
            value={negotiation}
            className="form-control" 
            id="floatingInput4"
            onChange={event => setnegotiation(event.target.value)}
            >
            <option label="Yes" value="Yes" />
            <option label="No" value="No" />
          </select>
          <label htmlFor="floatingInput4">Negotiation</label>
          </div>
                    <div className="text-center text-md-left">
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>{err}</p>
                        <Button onClick={handleSubmit} className="btn btn-primary btn-block mb-4">Filter</Button>
                    </div>
          </Typography>
        </Box>
      </Modal>
       
        </>
  )
}

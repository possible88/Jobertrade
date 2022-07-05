import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { FiEdit } from "react-icons/fi";


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


const EditProfile = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [skill, setSkills] = useState('');
    const [about_me, setAboutMe] = useState('');
    const [err, setErr] = useState('');


    const Submit =  async (e: SyntheticEvent) => {
      e.preventDefault();

      const response = await axios.put('users/info', {
          skill,
          about_me,
      }).then(response => {
        console.log(response)
        setErr(response.data.message);
        setAboutMe('');
        setSkills('');
    })
        .catch(error => {
            console.log(error.response)
            setErr(error.response.data.message);
 });
        
      }
    return (
        <>
           
           <FiEdit onClick={handleOpen}/> 

           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-body" variant="h6" component="h2">
          <form onSubmit={Submit}>
          <div className="form-floating mb-4">
                        <input className="form-control" id="form6Example7" value={skill} onChange={event => setSkills(event.target.value)} required/>
                        <label className="form-label" htmlFor="form6Example7">Skill</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input className="form-control" id="form6Example7" value={about_me} onChange={event => setAboutMe(event.target.value)} required/>
                        <label className="form-label" htmlFor="form6Example7">About Me</label>
                    </div>
                    <div className="text-center text-md-left">
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>{err}</p>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                    </div>
                    </form>
          </Typography>
        </Box>
      </Modal>
       
        </>
    );
};

export default EditProfile;
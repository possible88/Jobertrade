import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Comments } from '../models/comment';

const style = {
    position: 'absolute' as 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '100vh',
    overflow: 'unset',
    borderRadius: '25px',
  };

const Profilecomment = (props: any) => {

    const [body, setBody] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [chat, setChat] = useState<Comments[]>([])

    const posted_to = props.username;

    const submit =  async (e: SyntheticEvent) => {
        e.preventDefault();


        const response = await axios.post('comment', {
            body,
            posted_to,

 }).then(response => {
            console.log(response)
            setBody('');
        })
            .catch(error => {
                console.log(error.response)

            });
}


useEffect(() => {
  (
    async () => {
      const {data} = await axios.get(`comment/${posted_to}`);
      setChat(data.data);
     }

  )();
  }, [body]);


    return (
        <>
             <button className="btn" onClick={handleOpen}>Comments</button>
             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
<>
<header className="navbar navbar-dark sticky-top flex-md-nowrap p-0" style={{position: 'relative', backgroundColor: 'white', boxShadow: 'none'}}>
            <Button  onClick={handleClose} startIcon={<ArrowBackIosIcon />}  style={{border: 'none', fontSize: '20px', padding: '5px', margin: '5px',
                backgroundColor: 'white'}}>
                     </Button>
 </header>
        <Box sx={style}>
          <Typography id="modal-modal-body" variant="h6" component="h2">
          <div className="card-body p-3" style={{overflow: 'scroll', height: '65vh'}}>
                                                    {chat.map(chat => {
                                                     return   <div className="list-group commentinfo">
                                                     <div><Avatar alt={chat.name} src={chat.profile_pic}/></div>
                                                     <div className="comment"><span style={{margin: '5px', fontWeight: 'bold'}}>{chat.first_name} {chat.last_name}</span>
                                                     <span style={{margin: '5px'}}>{chat.body}</span></div></div>
                                                       })
                                                    }

                                                </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={submit}>
          <div className="form-floating mb-4">
                        <textarea className="form-control" id="form6Example7" value={body} required onChange={event => setBody(event.target.value)}/>
                        <label className="form-label" htmlFor="form6Example7">comment</label>
                    </div>
                    <div className="text-center text-md-left">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Comment</button>
                    </div>
                    </form>
          </Typography>
        </Box>
        </>
      </Modal>
        </>
    );
};

export default Profilecomment;
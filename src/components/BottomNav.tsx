import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import DialogContent from "@material-ui/core/DialogContent";
import {Button} from "@material-ui/core";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WorkIcon from '@mui/icons-material/Work';


const logout = async () => {
    await axios.post('logout',{});
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px',
  };

const BottomNav = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [value, setValue] = React.useState(0);
    return (
        <>
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}} elevation={3}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <NavLink to='/'><BottomNavigationAction color="primary" 
                    icon={<HomeIcon />}
                     /></NavLink>
                        <NavLink to='/search'><BottomNavigationAction color="primary" 
                        icon={<SearchIcon />}
                         /></NavLink>
                            <BottomNavigationAction label="Sell" color="primary" onClick={handleOpen} 
                            icon={<AddCircleOutlineIcon/>}
                             />
                                <NavLink to='/message'><BottomNavigationAction color="primary" 
                                icon={<MailOutlineIcon/>}
                                 /></NavLink>
                                    <NavLink to='/home' onClick={logout}><BottomNavigationAction color="primary" 
                                    icon={<LogoutIcon/>}
                                     /></NavLink>
                </BottomNavigation>
            </Paper>
</Box>

<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
  <Typography id="modal-modal-body" variant="h6" component="h2">
  Create New
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  <NavLink to='/create'><DialogContent><Button 
  startIcon={<AddShoppingCartIcon/>}
   variant="contained">Item</Button></DialogContent></NavLink>
                    <NavLink to='/createJob'><DialogContent><Button 
                    startIcon={<WorkIcon/>}
                     variant="contained">Job</Button></DialogContent></NavLink>

  </Typography>
</Box>
</Modal>
</>
    );
};

export default BottomNav;
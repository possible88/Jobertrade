import React from 'react';
import {useNavigate} from "react-router-dom";
// import {Button} from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

const GoBack = () => {


    const navigate = useNavigate();
    return (
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0" style={{backgroundColor: 'white', boxShadow: 'none'}}>
            <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIosIcon />}  style={{border: 'none', fontSize: '20px', padding: '5px', margin: '5px',
                backgroundColor: 'white'}}>

            </Button>

        </header>
    );
};

export default GoBack;
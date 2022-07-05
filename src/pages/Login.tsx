import React, {SyntheticEvent, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import LoginIcon from "@material-ui/icons/AccountCircle";
import { Button } from '@material-ui/core';
import GoBack from '../components/goBack';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [redirect, setRedirect] = useState(false);
   const [err, setErr] = useState('');

   const submit = async (e:SyntheticEvent) => {
     e.preventDefault();

     await axios.post('login',{
         email,
         password,
     }).then(response => {
         console.log(response.data)
         setRedirect(true);
     })
         .catch(error => {
             setErr(error.response.data.message)
         });


   }
    if (redirect) {
        return <Navigate to={'/'}/>;
    }

    return (
<>
<GoBack/>
        <main className="form-signin" style={{backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '25px'}}>

            <form onSubmit={submit}>



                <div style={{marginBottom: '90px', position: 'relative'}}>
                    <h1 className="h3 mb-3 fw-normal" style={{textAlign:'center', fontWeight: 'bold !important'}}>Login</h1>
                    <Link to='/register' style={{float: 'right', boxShadow: '0 0 0.475rem 0 rgb(170, 170, 170)', borderRadius: '25px'}}><Button startIcon={<LoginIcon/>} color="primary" variant="text">Register</Button></Link>
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>{err}</p>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput4"
                           placeholder="name@example.com" required onChange={event => setEmail(event.target.value)}/>
                    <label htmlFor="floatingInput4">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password" required onChange={event => setPassword(event.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <Button color="primary" variant="text" className="w-100 btn btn-lg" type="submit" style={{float: 'right', boxShadow: '0 0 0.475rem 0 rgb(170, 170, 170)', marginTop: '20px'}}>Login</Button>
            </form>

        </main>
        </>
    );
};

export default Login;
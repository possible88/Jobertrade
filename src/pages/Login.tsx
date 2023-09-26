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

     try {
        const response = await axios.post(`client/login`, {
          email,
          password,
        });
  
        if (response.status === 200) {
            setRedirect(true);
        } else {
          throw setErr(`${JSON.stringify(response.data)}`);
        }
      } catch (error: any) {
        setErr(`${JSON.stringify(error.response.data)}`);
        // setIsLoading(false);
      }


   }
    if (redirect) {
        return <Navigate to={'/'}/>;
    }

    return (
<>
<GoBack/>
        <main className="form-signin" style={{padding: '10px'}}>

            <form onSubmit={submit}>



                <div style={{marginBottom: '90px', position: 'relative'}}>
                    <h1 className="h3 mb-3 fw-normal" style={{textAlign:'center', fontWeight: 'bold !important'}}>Login</h1>
                    <Link to='/register' style={{float: 'right', borderRadius: '5px'}}><Button startIcon={<LoginIcon/>} color="primary" variant="text">Register</Button></Link>
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
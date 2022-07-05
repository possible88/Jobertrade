import React, {SyntheticEvent, useState} from 'react';
import axios from "axios";

const Updatepassword = () => {

    const [password, setPassword] = useState('');
    const [password_confirm, setPassword2] = useState('');


    const infoPassword =  async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put('users/password', {
           password,
            password_confirm
        })
    }

    return (
        <form onSubmit={infoPassword}>
                <div style={{marginBottom: '20px', position: 'relative'}}><b>Update Password</b></div>
                        <div className="form-floating"><input
                            type="password" className="bg-light form-control" id="floatingInput1" onChange={event => setPassword(event.target.value)}
                            placeholder="name@example.com"/><label htmlFor="floatingInput1">Password</label>
                        </div>
                        <div className="form-floating"><input
                            type="password" className="bg-light form-control" id="floatingInput2" onChange={event => setPassword2(event.target.value)}
                            placeholder="name@example.com"/><label htmlFor="floatingInput2">Confirm Password</label>
                        </div>
                    <div className="py-3 pb-4 border-bottom">
                        <button type="submit" className="btn btn-primary mr-3">Save Changes</button>
                    </div>
        </form>

    );
};

export default Updatepassword;
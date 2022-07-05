import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { BiSend } from 'react-icons/bi';

const Chatype = (props: any) => {
    const [body, setBody] = useState('');

    const user_to = props.username

    const submit =  async (e: SyntheticEvent) => {
        e.preventDefault();


        const response = await axios.post('messages', {
            body,
            user_to,

 }).then(response => {
            console.log(response)
            setBody('');
        })
            .catch(error => {
                console.log(error.response)

            });
}


    return (
        <form onSubmit={submit} style={{display: '-webkit-box'}}>
        <textarea className="form-control" rows={2} style={{width: '90%', borderRadius:'25px'}}
               placeholder="Type a message..." value={body} onChange={event => setBody(event.target.value)}/>
        <button type="submit" style={{left: '0px', position: 'relative', border: 'none', fontSize: 'xx-large', background: 'none'}}><BiSend/></button>
        </form>
    );
};

export default Chatype;
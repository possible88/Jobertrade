import React, {SyntheticEvent, useEffect, useState} from 'react';
import GoBack from '../components/goBack';
import Wrapper from "../components/Wrapper";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {User} from "../models/User";
import '../chat.css'
import Menu from "../components/Menu";
import Avatar from '@mui/material/Avatar';
import {Products} from "../models/product";
import Conversation from "../components/Conversation";
import {Messages} from "../models/message";
import { BiSend } from 'react-icons/bi';
import Chatbody from '../components/Chatbody';
import Chatype from '../components/Chatype';

const Message = () => {
    const [user, setUser] = useState(new User());
    
    const { username } = useParams();

    const user_to = username;

    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get(`users/${user_to}`);
                setUser(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.username,
                    data.country,
                    data.profile_pic,
                    data.phone,
                ));
            }
        )();
    }, []);


    return (
        <div>
                            <div className="container">

                                <GoBack/>


                                <div className="row d-flex flex-row-reverse">


                                    <div className="col-md-6 mb-4 d-flex flex-row-reverse" style={{marginLeft: "auto", marginRight: "auto"}}>

                                        <div className="card chat-room small-chat wide" id="myForm" style={{width: '100%', boxShadow: 'none'}}>
                                            <div className="card-header white d-flex justify-content-between p-2"
                                                 id="toggle" style={{cursor: 'pointer'}}>
                                                <div className="heading d-flex justify-content-start">
                                                    <div className="profile-photo">
                                                        <Avatar
                                                            src={user.profilepic}
                                                            alt={user.username}/>
                                                            <span className="state"></span>
                                                    </div>
                                                    <div className="data" style={{left: '10px', position: 'relative'}}>
                                                        <Link to={`/profile/${user.username}`}><p className="name mb-0"><strong>{user.name}</strong></p></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-custom-scrollbar" id="message">

                                               <Chatbody username = {user_to}/>

                                            </div>
                                            <div className="card-footer text-muted white pt-1 pb-2 px-3" style={{bottom: '-40px', position: 'relative'}}>
                                               <Chatype username = {user_to}/>
                                            </div>
                                        </div>

                                    </div>


                                </div>


                            </div>
        </div>
    )
};

export default Message;
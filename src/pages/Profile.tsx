import React, {SyntheticEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../models/User';
import GoBack from '../components/goBack';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Comments } from '../models/comment';
import Profilecomment from '../components/Profilecomment';
import EditProfile from '../components/EditProfile';




const Profile = () => {

    const [user, setUser] = useState(new User());
    const { user_name } = useParams();
    const [userlogins, setUserlogins] = useState(new User());

    const posted_to = user_name;
   
    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get('user');
                setUserlogins(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.user_name,
                    data.country,
                    data.profile_pic,
                    data.phone,
                ));
            }
        )();
    }, []);

    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get(`users/${user_name}`);
                setUser(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.user_name,
                    data.country,
                    data.profile_pic,
                    data.phone,
                    data.skill,
                    data.about_me,
                ));
            }
        )();
    }, []);


    let message;

    if (userlogins.username !== user.username) {
        message = (
            <Link to={`/message/${user.username}`} className="btn btn-primary btn-sm"><span
                data-feather="message-square"></span> Message</Link>
        )
    }

    let editProfile;

    if (userlogins.username === user.username) {
        editProfile = (
            <EditProfile/>
        )
    }


    return (
        <>
        <GoBack/>
            <main className="content">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <div className="card mb-3" style={{boxShadow: 'none'}}>
                                <div className="card-body text-center">
                                    <img src={user.profilepic} alt={user.username}
                                         className="img-fluid rounded-circle mb-2" width="128" height="128"/>
                                    <h5 className="card-title mb-0">{user.name}</h5>
                                    <div className="text-muted mb-2">{user.username}</div>

                                    <div>
                                       
                                        {message}
                                    </div>
                                </div>
                                <hr className="my-0"/>
                                <div className="card-body">
                                   {editProfile}
                                </div>
                                <hr className="my-0"/>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-1">{user.skill}</li>
                                        <li className="mb-1">{user.about_me}</li>
                                        <li className="mb-1">{user.country}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8">
                            <div className="card" style={{boxShadow: 'none'}}>
                                <div className="card-header">
                            <Profilecomment username={posted_to}/>
                                   
                                </div>
                                <div className="card-body h-100">

                                   
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


            </main>
        </>
);
};

export default Profile;
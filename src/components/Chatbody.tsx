import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Messages } from '../models/message';
import { User } from '../models/User';
import Chatype from "./Chatype";
import ReactScrollableFeed from 'react-scrollable-feed' 

const Chatbody = (props: any) => {

    const [chat, setChat] = useState<Messages[]>([])
    const [user, setUser] = useState(new User());

    const user_to = props.username

    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get(`users/${user_to}`);
                setUser(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.user_name,
                    data.country,
                    data.profile_pic,
                    data.phone,
                ))
            }
        )();
        
    }, []);


            const Messagebody = async () => {
                const {data} = await axios.get(`messages/${user_to}`);
                setChat(data.data);
             }
       

    useEffect(() => {
        setInterval(Messagebody, 1000);
      }, []);

    return (
        <div className="card-body p-3" style={{height: '65vh'}}>
            <ReactScrollableFeed>
        {chat.map(chat => {

                if (chat.user_to != user.username){
                return  <div className="list-group" style={{margin: '5px'}}>
                    <div className="receiver">{chat.body}</div></div>
            }else if (chat.user_to == user.username){
                return  <div className="list-group" style={{margin: '5px'}}>
                    <div className="sender">{chat.body}</div></div>
            }
            })
        }
</ReactScrollableFeed>
    </div>
    );
};

export default Chatbody;
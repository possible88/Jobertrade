import React, {useEffect, useState} from 'react';
import {User} from "../models/User";
import axios from "axios";
import ImageUpload from "./imageUpload";
import { connect } from 'react-redux';

const Updatepics = (props: { user: User }) => {

    return (
        <div className="d-flex align-items-start py-3 border-bottom"><img
            src={props.user.profilepic}
            className="img" alt=""/>
            <div className="pl-sm-4 pl-2" id="img-section"><b>{props.user.name}</b>
                <p>Accepted file type .png. Less than 1MB</p>
               <ImageUpload/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps)(Updatepics);
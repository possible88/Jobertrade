import React, {Dispatch, useEffect, useState} from 'react';
import '../setting.css';
import Updatepics from "../components/Updatepics";
// import Updateinfo from "../components/Updateinfo";
import Updatepassword from "../components/Updatepassword";
import Closeaccount from "../components/Closeaccount";
import axios from "axios";
import { User } from '../models/User';
import {setUserAction} from "../redux/action/setUserAction";
import {connect} from "react-redux";
import GoBack from "../components/goBack";

const Setting = (props: any) => {

    const [redirect, setRedirect] = useState(false);

    useEffect(  () => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user');

                    props.setUserAction(new User(
                        data.id,
                        data.first_name,
                        data.last_name,
                        data.email,
                        data.user_name,
                        data.country,
                        data.profile_pic,
                        data.phone,
                    ))

                }catch (e) {
                    setRedirect(true)
                }
            }
        )();
    }, []);

    return (
        <>
        <GoBack/>
            <div className="col-12 col-lg-8 col-xxl-9 d-flex" style={{marginLeft: 'auto'}}>
                <div className="card" style={{boxShadow:'none'}}>

            <h4 className="pb-4 border-bottom">Account settings</h4>
            <Updatepics/>
        {/*<Updateinfo/>*/}
            <Updatepassword/>
        <Closeaccount/>
        </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: { user: User }) => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return{
      setUserAction: (user: User) => dispatch(setUserAction(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Setting);
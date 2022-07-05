import React, {useEffect, useState} from 'react';
import Menu from "./Menu";
import BottomNav from "./BottomNav";
import axios from "axios";
import { Navigate } from 'react-router-dom';

const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(  () => {
        (
            async () => {
                try {
                     await axios.get('user');
                }catch (e) {
                    setRedirect(true)
                }
            }
        )();
    }, []);

    if (redirect) {
        return <Navigate to={'/home'}/>;
    }
    
    return (
   <div>
            <Menu />
            <div className="container-fluid">
                <div className="row">


                    <main style={{marginRight: 'auto',
                        marginLeft: 'auto'}}>
                        <div className='home'>

                        {props.children}

                            </div>


                    </main>

                </div>





            </div>

       <BottomNav/>
        </div>
    );
};



export default (Wrapper);
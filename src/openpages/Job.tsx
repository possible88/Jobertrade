import React from 'react';
import GoBack from '../components/goBack';
import Jobs from '../components/Job';

const OJob = () => {
    return (
        <div>
                <GoBack/>
                <div className="container-fluid">
                <div className="row">


                    <main>
                        <div className="details col-12 col-lg-4 col-xxl-3 d-flex"  style={{marginRight: 'auto',
                        marginLeft: 'auto'}}>
                        <Jobs/>
</div>


                    </main>

                </div>





            </div>
               
            </div>
    );
};

export default OJob;
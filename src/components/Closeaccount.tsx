import React from 'react';

const Closeaccount = () => {
    return (
        <div className="d-sm-flex align-items-center pt-3" id="deactivate">
            <div><p><b>Deactivate your account</b></p>
            </div>
            <div className="ml-auto">
                <button className="btn danger">Deactivate</button>
            </div>
        </div>
    );
};

export default Closeaccount;
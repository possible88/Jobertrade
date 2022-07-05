import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Postal = (props: any) => {


    return (
     <div className="container">

    <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
        <Tabs
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
        >
            <Tab label="All" />
            <Tab label="Mobile Phones" />
            <Tab label="Computers" />
            <Tab label="Vehicles" />
            <Tab label="Electronics" />
            <Tab label="Furniture & Appliances" />
            <Tab label="Fashion" />
            <Tab label="Health & Beauty" />
            <Tab label="Repair & Construction" />
            <Tab label="Agriculture & Food" />
            <Tab label="Kids" />
            <Tab label="Pets" />
            <Tab label="Sports" />
        </Tabs>
    </nav>
         <main>
             {props.children}



         </main>
     </div>
    );
};

export default Postal;
import React from 'react';
import GoBack from '../components/goBack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const Abouts = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>
        <GoBack/>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
                          scrollButtons={false}
                          aria-label="scrollable prevent tabs example">
                      <Tab label="How to sell on Jobertrade
" {...a11yProps(0)} sx={{ fontSize: 14, margin: 2 }}/>
                        <Tab label="How to buy on Jobertrade
" {...a11yProps(1)} sx={{ fontSize: 14, margin: 2 }}/>
                        <Tab label="Safety
" {...a11yProps(2)} sx={{ fontSize: 14, margin: 2 }}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>

                <div className="card">
                <div className="card-body">
  <span><strong>How to sell on Jobertrade?</strong></span>
  <ol>
    <li><span><strong><NavLink to='/register' style={{fontSize: 'unset', color: 'red'}}>Register</NavLink></strong></span><p /><span>Register using your e-mail and phone number. Make sure you’re entering a correct phone number, so your clients could reach you! </span><p /></li>
    <li><span><strong>Pay attention to the details.</strong></span><p /><span>Make good photos of your goods, write clear and detailed description. </span><p /></li>
    <li><span><strong>Press<NavLink to='/login' style={{fontSize: 'unset', color: 'red'}}> Post Ad</NavLink></strong></span><p /><span>Choose a proper category, upload your photos and write a clear title and full description of your item. Enter a fair price, and post your advert! </span><p /></li>
  </ol>
</div>

</div>
                </TabPanel>
                <TabPanel value={value} index={1}>

                <div className="card">
                <div className="card-body">
  <span><strong>How to buy on Jobertrade?</strong></span>
  <ol>
    <li><span><strong>Search for the item. </strong></span><p /><span>Find what you need using search panel and choose exactly what you are looking for. </span><p /></li>
    <li><span><strong>Contact a seller. </strong></span><p /><span>You may use chat on Jobertrade or call them via phone. Discuss all the details, negotiate about the price.</span><p /></li>
    <li><span><strong>Take your item or order a delivery. </strong></span><p /><span>We check our sellers carefully, but it’s always better to check twice, right? Meet a seller in public place and be sure to pay only after collecting your item.</span><p /></li>
    <li><span><strong> Leave your feedback about the seller.</strong></span><p /><span>Feel free to tell us about your purchase. Your feedback will be published online on the seller’s page and will be very helpful for other buyers. Let’s build a safe and professional business community together! </span><p /></li>
  </ol>
</div>
</div>

                </TabPanel>
                <TabPanel value={value} index={2}>

                <div className="card">
                <div className="card-body">
  <span><strong>Safety</strong></span>
  <ol>
    <li><span><strong>General</strong></span><p /><span>We are highly focused on the security and can solve any issues in short-terms. That’s why we ask you, kindly, to leave a review after purchasing. If you run into any problems with a seller, you can report us and Jobertrade Team will check this seller as soon as possible.</span><p /></li>
    <li><span><strong>Personal safety tips.</strong></span><ul><li><span>Do not pay in advance, even for the delivery</span></li>
        <li><span>Try to meet at a safe, public location </span></li><li><span>Check the item BEFORE you buy it</span></li><li><span>Pay only after collecting the item</span></li> </ul></li>
  </ol>
</div>
</div>

                </TabPanel>
                
            </Box>
        </>
    );
};

export default Abouts;
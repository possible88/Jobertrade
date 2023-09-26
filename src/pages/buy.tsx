import React from 'react';
import GoBack from "../components/goBack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Allproducts from "../components/Allproducts";

import CategoryProduct from '../components/CategoryProduct';

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

const Buy = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const Mobile = "Mobile";
    const Computer = "Computer";
    const Watches = "Watches";
    const Trucks = "Trucks";
    const Tablets = "Tablets";
    const Buses = "Buses";
    const Accessories = "Accessories";
    const Shoes = "Shoes";
    const Cars = "Cars";
    const Clothing = "Clothing";
    const Bags = "Bags";
    const Jewellery = "Jewellery";
    const Games = "Games";
    const Networking = "Networking";
    const Cameras = "Cameras";

    return (
        <>
        <GoBack/>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
                          scrollButtons={false}
                          aria-label="scrollable prevent tabs example">
                      <Tab label="Mobile Phones" {...a11yProps(0)} sx={{ fontSize: 12 }}/>
                        <Tab label="Computer" {...a11yProps(1)} sx={{ fontSize: 12 }}/>
                        <Tab label="Tablets" {...a11yProps(2)} sx={{ fontSize: 12 }}/>
                        <Tab label="Watches" {...a11yProps(3)} sx={{ fontSize: 12 }}/>
                        <Tab label="Accessories" {...a11yProps(4)} sx={{ fontSize: 12 }}/>
                        <Tab label="Buses" {...a11yProps(5)} sx={{ fontSize: 12 }}/>
                        <Tab label="Cars" {...a11yProps(6)} sx={{ fontSize: 12 }}/>
                        <Tab label="Trucks" {...a11yProps(7)} sx={{ fontSize: 12 }}/>
                        <Tab label="Clothing" {...a11yProps(8)} sx={{ fontSize: 12 }}/>
                        <Tab label="Bags" {...a11yProps(9)} sx={{ fontSize: 12 }}/>
                        <Tab label="Shoes" {...a11yProps(10)} sx={{ fontSize: 12 }}/>
                        <Tab label="Jewellery" {...a11yProps(11)} sx={{ fontSize: 12 }}/>
                        <Tab label="Games" {...a11yProps(12)} sx={{ fontSize: 12 }}/>
                        <Tab label="Networking" {...a11yProps(13)} sx={{ fontSize: 12 }}/>
                        <Tab label="Cameras" {...a11yProps(14)} sx={{ fontSize: 12 }}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>

                <CategoryProduct Mobile={Mobile}/>

                </TabPanel>
                <TabPanel value={value} index={1}>

                        <CategoryProduct Computer={Computer}/>

                </TabPanel>
                <TabPanel value={value} index={2}>
                <CategoryProduct Tablets={Tablets}/>
                </TabPanel>
                <TabPanel value={value} index={3}>

                  <CategoryProduct Watches={Watches}/>

                </TabPanel>
                <TabPanel value={value} index={4}>
                  <CategoryProduct Accessories={Accessories}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <CategoryProduct Buses={Buses}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
<CategoryProduct Cars={Cars}/>


                </TabPanel>
                <TabPanel value={value} index={7}>
                   <CategoryProduct Trucks={Trucks}/>
                </TabPanel>
                <TabPanel value={value} index={8}>
                   <CategoryProduct Clothing={Clothing}/>
                </TabPanel>
                <TabPanel value={value} index={9}>
                 <CategoryProduct Bags={Bags}/>
                </TabPanel>
                <TabPanel value={value} index={10}>
                   <CategoryProduct Shoes={Shoes}/>
                </TabPanel>
                <TabPanel value={value} index={11}>
                  <CategoryProduct  Jewellery={ Jewellery}/>
                </TabPanel>
                <TabPanel value={value} index={12}>
                 <CategoryProduct Games={Games}/>
                </TabPanel>
                <TabPanel value={value} index={13}>
                   <CategoryProduct Networking={Networking}/>
                </TabPanel>
                <TabPanel value={value} index={13}>
                   <CategoryProduct Cameras={Cameras}/>
                </TabPanel>
            </Box>
        </>
    );
};

export default Buy;
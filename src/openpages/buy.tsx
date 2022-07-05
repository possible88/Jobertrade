import React from 'react';
import GoBack from "../components/goBack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Allproducts from "./Allproducts";
import CategoryProducts from '../components/CategoryProducts';

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

const OBuy = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const mobile = "mobile";
    const vehicles = "vehicles";
    const fashion = "fashion";
    const computer = "computer";
    const electronics = "electronics";
    const property = "property";
    const agriculture = "agriculture";
    const furniture = "furniture";
    const health = "health";
    const repair = "repair";
    const kids = "kids";
    const pets = "pets";
    const sports = "sports";

    return (
        <>
            <GoBack/>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
                          scrollButtons={false}
                          aria-label="scrollable prevent tabs example">
                        <Tab label="All" {...a11yProps(0)} sx={{ fontSize: 12 }}/>
                        <Tab label="Mobile Phones" {...a11yProps(1)} sx={{ fontSize: 12 }}/>
                        <Tab label="Computers" {...a11yProps(2)} sx={{ fontSize: 12 }}/>
                        <Tab label="Vehicles" {...a11yProps(3)} sx={{ fontSize: 12 }}/>
                        <Tab label="Property" {...a11yProps(4)} sx={{ fontSize: 12 }}/>
                        <Tab label="Electronics" {...a11yProps(5)} sx={{ fontSize: 12 }}/>
                        <Tab label="Furniture & Appliances" {...a11yProps(6)} sx={{ fontSize: 12 }}/>
                        <Tab label="Fashion" {...a11yProps(7)} sx={{ fontSize: 12 }}/>
                        <Tab label="Health & Beauty" {...a11yProps(8)} sx={{ fontSize: 12 }}/>
                        <Tab label="Repair & Construction" {...a11yProps(9)} sx={{ fontSize: 12 }}/>
                        <Tab label="Agriculture & Food" {...a11yProps(10)} sx={{ fontSize: 12 }}/>
                        <Tab label="Kids" {...a11yProps(11)} sx={{ fontSize: 12 }}/>
                        <Tab label="Pets" {...a11yProps(12)} sx={{ fontSize: 12 }}/>
                        <Tab label="Sports" {...a11yProps(13)} sx={{ fontSize: 12 }}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>

                    <Allproducts/>

                </TabPanel>
                <TabPanel value={value} index={1}>

                        <CategoryProducts mobile={mobile}/>

                </TabPanel>
                <TabPanel value={value} index={2}>
                <CategoryProducts computer={computer}/>
                </TabPanel>
                <TabPanel value={value} index={3}>

                  <CategoryProducts vehicles={vehicles}/>

                </TabPanel>
                <TabPanel value={value} index={4}>
                  <CategoryProducts property={property}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <CategoryProducts electronics={electronics}/>
                </TabPanel>
                <TabPanel value={value} index={6}>
<CategoryProducts furniture={furniture}/>


                </TabPanel>
                <TabPanel value={value} index={7}>
                   <CategoryProducts fashion={fashion}/>
                </TabPanel>
                <TabPanel value={value} index={8}>
                   <CategoryProducts health={health}/>
                </TabPanel>
                <TabPanel value={value} index={9}>
                 <CategoryProducts repair={repair}/>
                </TabPanel>
                <TabPanel value={value} index={10}>
                   <CategoryProducts agriculture={agriculture}/>
                </TabPanel>
                <TabPanel value={value} index={11}>
                  <CategoryProducts  kids={ kids}/>
                </TabPanel>
                <TabPanel value={value} index={12}>
                 <CategoryProducts pets={pets}/>
                </TabPanel>
                <TabPanel value={value} index={13}>
                   <CategoryProducts sports={sports}/>
                </TabPanel>
            </Box>
        </>
    );
};

export default OBuy;
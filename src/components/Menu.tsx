 import React, {useEffect, useState} from 'react'
 import {Link} from "react-router-dom";
 import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
 import SettingsIcon from '@mui/icons-material/Settings';
 import WorkIcon from '@mui/icons-material/Work';
 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import CssBaseline from '@mui/material/CssBaseline';
 import Drawer from '@mui/material/Drawer';
 import IconButton from '@mui/material/IconButton';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import Tooltip from "@mui/material/Tooltip";
 import Avatar from "@mui/material/Avatar";
 import {User} from "../models/User";
 import axios from "axios";
 import Paper from '@mui/material/Paper';
 import { BiUser, BiCart, BiShoppingBag, BiSupport, BiCar } from "react-icons/bi";
 import { VscDeviceMobile } from "react-icons/vsc";
 import { GiClothes } from "react-icons/gi";

 const drawerWidth = 240;


 interface Props {
     /**
      * Injected by the documentation to work in an iframe.
      * You won't need it on your project.
      */
     window?: () => Window;
 }
 const Menu = (props: Props) => {

     const [user, setUser] = useState(new User());

     useEffect(  () => {
         (
             async () => {
                 const {data} = await axios.get('client/user');
                 setUser(new User(
                     data.id,
                     data.first_name,
                     data.last_name,
                     data.email,
                     data.username,
                     data.country,
                     data.profile_pic,
                     data.phone,
                 ));
             }
         )();
     }, []);

     const Mobile = "Mobile";
     const Tablets = "Tablets";
     const Watches = "Watches";
     const Accessories = "Accessories";
     const Cars = "Cars";
     const Buses = "Buses";
     const Trucks = "Trucks";
     const Clothing = "Clothing";
     const Bags = "Bags";
     const Shoes = "Shoes";
     const Jewellery = "Jewellery";
     const Computer = "Computer";
     const Games = "Games";
     const Networking = "Networking";
     const Cameras = "Cameras";



     const { window } = props;
     const [MobileOpen, setMobileOpen] = React.useState(false);

     const handleDrawerToggle = () => {
         setMobileOpen(!MobileOpen);
     };

     const drawer = (
         <Paper sx={{ width: 250, maxWidth: '100%' }}>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/profile/${user.username}/${user.id}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiUser/> Profile</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/buy' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCart /> Buy</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/job' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark">
                        <WorkIcon fontSize="small" />
                         Job</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/viewads/${user.username}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiShoppingBag/> View all Ads</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/setting' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark">
                        <SettingsIcon fontSize="small" />
                         Settings & Privacy</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/help' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiSupport /> Help Center</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Mobile}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Mobile Phones</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Tablets}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Tablets</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Watches}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Watches</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Buses}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Buses</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Accessories}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Accessories</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Cars}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Cars</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Clothing}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Clothing</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Bags}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Bags</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Shoes}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Shoes</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Trucks}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Trucks</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Jewellery}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Jewellery</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Computer}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Computer</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Games}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/>Video Games</div>
                 </Link></div>
                 <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Networking}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Networking Products</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${Cameras}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/>Photo and Video Cameras</div>
                 </Link></div>
         </Paper>
     );

     const container = window !== undefined ? () => window().document.body : undefined;


     return(

     <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar
             position="fixed"
             sx={{
                 width: { sm: `calc(100% - ${drawerWidth}px)` },
                 ml: { sm: `${drawerWidth}px` },
             }}
             color="inherit"
         >
             <Toolbar>
                 <IconButton
                     aria-label="open drawer"
                     edge="start"
                     onClick={handleDrawerToggle}
                     sx={{ mr: 2, display: { sm: 'none' } }}
                 >
                     <ArrowBackIosIcon />
                 </IconButton>
                 <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                 >
                     Jobertrade
                 </Typography>
                 <Box sx={{ flexGrow: 0 }}>
                     <Tooltip title="Open settings">
                         <IconButton sx={{ p: 0 }}>
                             <Avatar alt={user.name} src={user.profilepic}/>
                         </IconButton>
                     </Tooltip>
                 </Box>
             </Toolbar>
         </AppBar>
         <Box
             component="nav"
             sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
             aria-label="mailbox folders"
         >
             {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
             <Drawer
                 container={container}
                 variant="temporary"
                 open={MobileOpen}
                 onClose={handleDrawerToggle}
                 ModalProps={{
                     keepMounted: true, // Better open performance on Mobile.
                 }}
                 sx={{
                     display: { xs: 'block', sm: 'none' },
                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                 }}
             >
                 {drawer}
             </Drawer>
             <Drawer
                 variant="permanent"
                 sx={{
                     display: { xs: 'none', sm: 'block' },
                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                 }}
                 open
             >
                 {drawer}
             </Drawer>
         </Box>
         <Box
             component="main"
             sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
         >
             <Toolbar />
         </Box>
     </Box>
 )
 }

 export default Menu;
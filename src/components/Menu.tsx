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
                 const {data} = await axios.get('user');
                 setUser(new User(
                     data.id,
                     data.first_name,
                     data.last_name,
                     data.email,
                     data.user_name,
                     data.country,
                     data.profile_pic,
                     data.phone,
                 ));
             }
         )();
     }, []);

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



     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);

     const handleDrawerToggle = () => {
         setMobileOpen(!mobileOpen);
     };

     const drawer = (
         <Paper sx={{ width: 250, maxWidth: '100%' }}>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/profile/${user.user_name}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiUser/> Profile</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/buy' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCart /> Buy</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/job' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><WorkIcon fontSize="small" /> Job</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/viewads/${user.user_name}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiShoppingBag/> View all Ads</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/setting' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><SettingsIcon fontSize="small" /> Settings & Privacy</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to='/help' className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiSupport /> Help Center</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${mobile}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Mobile Phones</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${vehicles}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Vehicles</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${fashion}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Fashion</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${property}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Property</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${computer}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Computers</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${electronics}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Electronics</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${furniture}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Furniture & Appliances</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${health}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Health & Beauty</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${repair}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Repair & Construction</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${agriculture}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Agriculture & Food</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${kids}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><VscDeviceMobile/> Kids</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${pets}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><BiCar/> Pets</div>
                 </Link></div>
             <div className="list-group" style={{margin: '5px'}}>
                 <Link to={`/${sports}`} className="list-group-item" style={{borderRadius:'25px'}}>
                     <div className="text-dark"><GiClothes/> Sports</div>
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
                 open={mobileOpen}
                 onClose={handleDrawerToggle}
                 ModalProps={{
                     keepMounted: true, // Better open performance on mobile.
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
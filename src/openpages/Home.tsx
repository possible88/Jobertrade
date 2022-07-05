import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {
    ArrowForwardRounded, ExitToAppRounded,

    SettingsRounded,

    WorkRounded
} from "@material-ui/icons";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";
import Paper from '@mui/material/Paper';
import {purple, red } from '@mui/material/colors';
import { BiCart} from "react-icons/bi";
import LoginIcon from "@material-ui/icons/AccountCircle";
import Product from "./Product";
import Slide from '../components/slide';
import { BiSupport } from "react-icons/bi";
import './home.css';

const drawerWidth = 240;
const primary = red[500]; // #f44336
const accent = purple['A200']; // #e040fb


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}
const Home = (props: Props) => {


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Paper sx={{ width: 250, maxWidth: '100%' }}>

<div style={{marginRight: 'auto',
    width: '100%',
    backgroundColor: 'black',
    marginLeft: 'auto',
    padding: '5px',
    textAlign: 'center'}}><h2 style={{marginTop: '9px', color: 'white'}}>Jobertrade</h2></div>
            
            {/* <div className="list-group" style={{margin: '5px'}}>
            <Button>
                                <NavLink to='/login'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Login</span></Button></NavLink>
                            </Button></div>
            <div className="list-group" style={{margin: '5px'}}>
            <Button>
                                <NavLink to='/register'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Register</span></Button></NavLink>
                            </Button></div> */}
            <div className="list-group" style={{margin: '5px'}}>
                <Link to='/items' className="list-group-item" style={{borderRadius:'25px'}}>
                    <div className="text-dark"><BiCart /> Buy</div>
                </Link></div>
            <div className="list-group" style={{margin: '5px'}}>
                <Link to='/jobs' className="list-group-item" style={{borderRadius:'25px'}}>
                    <div className="text-dark"><WorkRounded fontSize="small" /> Job</div>
                </Link></div>
                <div className="list-group" style={{margin: '5px'}}>
                <Link to='/about' className="list-group-item" style={{borderRadius:'25px'}}>
                    <div className="text-dark"><BiSupport fontSize="small" /> About</div>
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
                        <ArrowForwardRounded />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex' } }}
                    >
                        <div style={{    display: '-webkit-box',
    float: 'right'}}>
     <div style={{margin: '5px'}}>
            <Button>
                                <NavLink to='/login'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Login</span></Button></NavLink>
                            </Button></div>
            <div style={{margin: '5px'}}>
            <Button>
                                <NavLink to='/register'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Register</span></Button></NavLink>
                            </Button></div></div>
                    </Typography>
                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Button>
                                <NavLink to='/login'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Login</span></Button></NavLink>
                            </Button>
                        </Tooltip>
                        <Tooltip title="Open settings">
                            <Button>
                                <NavLink to='/register'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Register</span></Button></NavLink>
                            </Button>
                        </Tooltip>
                    </Box> */}
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
            <div className="container-fluid">
                <div className="row">


                    <main style={{marginRight: 'auto',
                        marginLeft: 'auto', top: '65px',
                        position: 'relative'}}>
                            <Slide/>

                        <Product/>

            


                    </main>

                </div>





            </div>
           
        </Box>
    )
}

export default Home;
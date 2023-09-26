import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LoginIcon from "@material-ui/icons/AccountCircle";

const slide = () => {
    return (
       
//       <Carousel>
//      <div className="carousel-item active">
//        <div style={{    display: '-webkit-box',
//     float: 'right',
//     marginBottom: '-55px'}}>
//      <div style={{margin: '5px'}}>
//             <Button>
//                                 <NavLink to='/login'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Login</span></Button></NavLink>
//                             </Button></div>
//             <div style={{margin: '5px'}}>
//             <Button>
//                                 <NavLink to='/register'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Register</span></Button></NavLink>
//                             </Button></div></div>
      
//       <img src="image/profile.jpg" className="d-block w-100" alt="" height={600}/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </div>
//     </div>
//     <div className="carousel-item active">
//     <div style={{    display: '-webkit-box',
//     float: 'right',
//     marginBottom: '-55px'}}>
//      <div style={{margin: '5px'}}>
//             <Button>
//                                 <NavLink to='/login'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Login</span></Button></NavLink>
//                             </Button></div>
//             <div style={{margin: '5px'}}>
//             <Button>
//                                 <NavLink to='/register'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Register</span></Button></NavLink>
//                             </Button></div></div>
//       <img src="image/Mercedes-Benz GLE43g.jpeg" className="d-block w-100" alt="" height={600}/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </div>
//     </div>
//     <div className="carousel-item active">
//     <div style={{    display: '-webkit-box',
//     float: 'right',
//     marginBottom: '-55px'}}>
//      <div style={{margin: '5px'}}>
//             <Button>
//                                 <NavLink to='/login'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Login</span></Button></NavLink>
//                             </Button></div>
//             <div style={{margin: '5px'}}>
//             <Button>
//                                 <NavLink to='/register'><Button startIcon={<LoginIcon/>} color="primary" variant="text"><span style={{fontSize: '12px'}}>Register</span></Button></NavLink>
//                             </Button></div></div>
//       <img src="image/WhatsApp Image 2021-11-30 at 6.23.46 AM (1).jpeg" className="d-block w-100" alt="" height={600}/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </div>
//     </div>
// </Carousel>

<div>
  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active" style={{backgroundColor: '#51644c'}}>
        <img src="image/profile.jpg" alt="Jobertrade" className="d-block" height={400} style={{width: '100%', objectFit: 'contain'}} />
        
      </div>
      <div className="carousel-item" style={{backgroundColor: '#51644c'}}>
        <img src="image/Mercedes-Benz GLE43g.jpeg" alt="Jobertrade" className="d-block" height={400} style={{width: '100%', objectFit: 'contain'}} />
         
      </div>
      <div className="carousel-item" style={{backgroundColor: '#51644c'}}>
        <img src="image/WhatsApp Image 2021-11-30 at 6.23.46 AM (1).jpeg" alt="Jobertrade" className="d-block" height={400} style={{width: '100%', objectFit: 'contain'}} />
          
      </div>
    </div>
    {/* Left and right controls/icons */}
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" />
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon" />
    </button>
  </div>
</div>


    );
};

export default slide;
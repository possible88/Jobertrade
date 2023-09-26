import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Create from "./pages/Create";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import Buy from "./pages/buy";
import Job from "./pages/Job";
import ViewAds from "./pages/ViewAds";
import Setting from "./pages/Setting";
import HelpCenter from "./pages/HelpCenter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateJob from "./pages/createJob";
import './style.css';
import View from "./pages/View";
import Product from "./components/Product";
import OBuy from './openpages/buy';
import OHome from './openpages/Home';
import Viewjob from './pages/Viewjob';
import OJob from './openpages/Job';
import Abouts from './pages/About';
import Category from './pages/Category';
import SearchDetail from './pages/SearchDetail';
import FilterDetail from './pages/FilterDetail';

function App() {

    return (

    <Router>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/search/:search_name' element={<SearchDetail />} />
                <Route path='/filter/:name/:brand/:condition/:negotiation' element={<FilterDetail />} />
                <Route path='/create' element={<Create />} />
                <Route path='/message' element={<Message />} />
                <Route path='/profile/:username/:id' element={<Profile />} />
                <Route path='/buy' element={<Buy />} />
                <Route path='/job' element={<Job />} />
                <Route path='/viewads/:user_name' element={<ViewAds />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/help' element={<HelpCenter />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<OHome />} />
                <Route path='/about' element={<Abouts />} />
                <Route path='/items' element={<OBuy />} />
                <Route path='/jobs' element={<OJob />} />
                <Route path='/createJob' element={<CreateJob />} />
                <Route path='/:Mobile' element={<Category />} />
                <Route path='/:Tablets' element={<Category />} />
                <Route path='/:Watches' element={<Category />} />
                <Route path='/:Accessories' element={<Category />} />
                <Route path='/:Cars' element={<Category />} />
                <Route path='/:Buses' element={<Category />} />
                <Route path='/:Trucks' element={<Category />} />
                <Route path='/:Clothing' element={<Category />} />
                <Route path='/:Bags' element={<Category />} />
                <Route path='/:Shoes' element={<Category />} />
                <Route path='/:Jewellery' element={<Category />} />
                <Route path='/:Computer' element={<Category />} />
                <Route path='/:Games' element={<Category />} />
                <Route path='/:Networking' element={<Category />} />
                <Route path='/:Cameras' element={<Category />} />
                <Route path='/:Category/:id/:Title' element={<View />} />
                {/* <Route path='/buy/products/:id/:title' element={<View />} />
                <Route path='/search/products/:id/:title' element={<View />} />
                <Route path='/Mobile/products/:id/:title' element={<View />} />
                <Route path='/Tablets/products/:id/:title' element={<View />} />
                <Route path='/Watches/products/:id/:title' element={<View />} />
                <Route path='/Accessories/products/:id/:title' element={<View />} />
                <Route path='/Cars/products/:id/:title' element={<View />} />
                <Route path='/Trucks/products/:id/:title' element={<View />} />
                <Route path='/Clothing/products/:id/:title' element={<View />} />
                <Route path='/Bags-Beauty/products/:id/:title' element={<View />} />
                <Route path='/Shoes/products/:id/:title' element={<View />} />
                <Route path='/Jewellery/products/:id/:title' element={<View />} />
                <Route path='/Computer/products/:id/:title' element={<View />} />
                <Route path='/Games/products/:id/:title' element={<View />} />
                <Route path='/Buses/products/:id/:title' element={<View />} />
                <Route path='/Networking/products/:id/:title' element={<View />} />
                <Route path='/Cameras/products/:id/:title' element={<View />} /> */}
                <Route path='/viewads/:user_name/products/:id/:title' element={<View />} />
                <Route path={'/message/:user_name'} element={<Message />} />
                <Route path='/jobs/:id/:title' element={<Viewjob />} />






            </Routes>

        </Router>

  );
}

export default App;

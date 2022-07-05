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

function App() {

    return (

    <Router>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/create' element={<Create />} />
                <Route path='/message' element={<Message />} />
                <Route path='/profile/:user_name' element={<Profile />} />
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
                <Route path='/:mobile' element={<Category />} />
                <Route path='/:vehicles' element={<Category />} />
                <Route path='/:fashion' element={<Category />} />
                <Route path='/:computer' element={<Category />} />
                <Route path='/:electronics' element={<Category />} />
                <Route path='/:property' element={<Category />} />
                <Route path='/:agriculture' element={<Category />} />
                <Route path='/:furniture' element={<Category />} />
                <Route path='/:health' element={<Category />} />
                <Route path='/:repair' element={<Category />} />
                <Route path='/:kids' element={<Category />} />
                <Route path='/:pets' element={<Category />} />
                <Route path='/:sports' element={<Category />} />
                <Route path='/products/:id/:title' element={<View />} />
                <Route path='/buy/products/:id/:title' element={<View />} />
                <Route path='/search/products/:id/:title' element={<View />} />
                <Route path='/mobile/products/:id/:title' element={<View />} />
                <Route path='/vehicles/products/:id/:title' element={<View />} />
                <Route path='/fashion/products/:id/:title' element={<View />} />
                <Route path='/computer/products/:id/:title' element={<View />} />
                <Route path='/electronics/products/:id/:title' element={<View />} />
                <Route path='/agriculture/products/:id/:title' element={<View />} />
                <Route path='/furniture/products/:id/:title' element={<View />} />
                <Route path='/Health-Beauty/products/:id/:title' element={<View />} />
                <Route path='/repair/products/:id/:title' element={<View />} />
                <Route path='/kids/products/:id/:title' element={<View />} />
                <Route path='/pets/products/:id/:title' element={<View />} />
                <Route path='/sports/products/:id/:title' element={<View />} />
                <Route path='/property/products/:id/:title' element={<View />} />
                <Route path='/viewads/:user_name/products/:id/:title' element={<View />} />
                <Route path={'/message/:user_name'} element={<Message />} />
                <Route path='/jobs/:id/:title' element={<Viewjob />} />






            </Routes>

        </Router>

  );
}

export default App;

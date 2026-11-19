import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRoutes = () => {
    return ( <Router> <Routes> <Route path="/" element={<Home />} /> <Route path="/products" element={<Products />} /> </Routes> </Router> );
};
 
export default AppRoutes;
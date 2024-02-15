import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function LayOut(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default LayOut
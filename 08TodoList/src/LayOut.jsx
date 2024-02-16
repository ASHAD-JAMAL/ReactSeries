import React from "react";
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import { Outlet } from "react-router-dom"


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
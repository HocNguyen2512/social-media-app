import "./Navbar.scss";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {Link} from "react-router-dom";

const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="left">
                <Link to ="/" style={{textDecoration:"none"}}>
                    <span>lamasocial</span>
                    </Link>    
                    <HomeOutlinedIcon />
                    <DarkModeOutlinedIcon />
                    <GridViewOutlinedIcon />
                    <div className="search">
                        <SearchOutlinedIcon />
                        <input type="text" placeholder="Search..." />
                    </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar
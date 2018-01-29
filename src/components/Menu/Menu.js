import React from "react";
import {Link} from "react-router-dom";
import  "./Menu.css";
const menu =()=>{
    return <ul className="Menu">
             <li><Link to="/">Blog</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
        </ul>
}

export default menu;
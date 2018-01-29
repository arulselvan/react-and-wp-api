import React from 'react';
import './SideBar.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const sideBar = ()=>{
    return(
        <aside className="SideBar">
            <Header/>
            <Menu/>
        </aside>
    )
}

export default sideBar;
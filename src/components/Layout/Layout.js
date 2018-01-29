import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const Layout=(props)=>{
    return (
        <Aux>
            <div></div>
            <main className="Main">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;
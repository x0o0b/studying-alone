import React from 'react';
import { Outlet } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    );
}

export default About;
import React from 'react';
import {Link} from "react-router-dom";
// This page is not for this project
export const Home = () => {
    // This is router component for home page
    return (
        <Link to='/login'>
            <button>Войти</button>
        </Link>
    );
};

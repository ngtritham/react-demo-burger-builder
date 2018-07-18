import React from 'react';
import burgerLogo from '../../assets/images/favicon.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}} >
        <img src={burgerLogo} alt="Tham's Hamburger"/>
    </div>
);

export default logo;
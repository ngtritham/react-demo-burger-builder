import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label} >{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>-</button>
        <div>{props.quantity}</div>
        <button
            className={classes.More}
            onClick={props.added}>+</button>
        <div>{props.price}  &#8363;/miếng</div>
    </div>
);


export default buildControl;
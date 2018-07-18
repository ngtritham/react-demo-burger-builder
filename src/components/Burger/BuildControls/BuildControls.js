import React from "react";
import classes from "./BuildControls.css";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const buildControls = props => (
    <div className={classes.BuildControls} >
        <p>Tạm tính: {props.price} &#8363;</p>
        {controls.map(ctrl => (
            <BuildControl
                price={props.ingredientPrice[ctrl.type]}
                quantity={props.ingredients[ctrl.type]}
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabledBtns[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >Mua bánh</button>
    </div>
);

export default buildControls;

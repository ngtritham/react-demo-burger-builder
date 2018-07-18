import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey} >
                    <span style={{ textTransform: 'capitalize' }} >{igKey}:</span> {props.ingredients[igKey]}
                </li>);
        });
    return (
        <Aux>
            <h3>Đơn hàng của bạn</h3>
            <p>1 cái hamburger ngon tuyệt với các thành phần sau:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Tổng cộng: {props.price} &#8363; </strong></p>
            <p>Tính tiền nha bạn :))</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled} >Hủy</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Đồng ý</Button>
        </Aux>
    );
};

export default orderSummary;
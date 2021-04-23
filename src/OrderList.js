import React from 'react'

const OrderList = (props) => {
    const {details} = props

    return(
        <div>
            <div>{details.name}</div>
            <div>{details.size}</div>
            <div>{details.pepperoni}</div>
            <div>{details.bacon}</div>
            <div>{details.mushrooms}</div>
            <div>{details.pineapple}</div>
            <div>{details.instructions}</div>
        </div>
    )
}

export default OrderList;
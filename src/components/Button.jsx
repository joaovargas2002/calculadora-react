import React from "react";
import './Button.css'

export default props => {
    let classes = 'button'
    classes += props.operation ? 'operation' : ''
    classes += props.operation ? 'double' : ''
    classes += props.operation ? 'triple' : ''

    return (
        <button
            onClick={props.click && props.click(props.label)}
            classname={classes}>
            {props.label}
        </button>
    )
}

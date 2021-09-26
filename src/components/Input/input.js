import React from 'react'
import classname from 'classnames'
import './_style.scss'

const Input = (props) => {
    const {
        type,
        disabled,
        size,
        placeholder,
        className
    } = props
    const classes = classname('input', className, {
        [`input-${size}`]: size
    })
    return (
        <input className={classes} type={type} disabled={disabled} placeholder={placeholder} />
    )
}

Input.defaultProps = {
    size: 'default'
}

export default Input
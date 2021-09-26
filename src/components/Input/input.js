import React from 'react'
import classname from 'classnames'
<<<<<<< HEAD
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

=======
import './_styles.scss'

const Input = ({palceholder, className}) => {
    const classes = classname('roll-input', className, {

    })
    return (
        <input className={classes} placeholder={placeholder} />
    )
}

>>>>>>> feature-input
export default Input
import React from 'react'
import classname from 'classnames'
import './_styles.scss'

const Input = ({palceholder, className}) => {
    const classes = classname('roll-input', className, {

    })
    return (
        <input className={classes} placeholder={placeholder} />
    )
}

export default Input
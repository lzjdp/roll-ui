import React from 'react'
import classname from 'classnames'
import './_styles.scss'

const Form = (props) => {
    const {
        className
    } = props
    const classes = classname('form', className, {
        
    })
    return (
        <form></form>
    )
}

export default Form
import React from 'react'
import classname from 'classnames'
import './_styles.scss'

const Card = (props) => {
    const {
        title,
        border,
        className,
        children
    } = props
    const classes = classname('card', className, {
        'card-border': !border
    })
    if (title) {
        return (
            <div className={classes}>
                <div className="card-title">{title}</div>
                <div className="card-content">{children}</div>
            </div>
        )
    } else {
        return (
            <div className={classes}>
                <div className="card-content">{children}</div>
            </div>
        )
    }
    
}

export default Card
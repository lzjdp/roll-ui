import React from 'react'
import classname from 'classnames'
import './_styles.scss'
import MenuContext from './menu'

const MenuItem = ({className}) => {
    const classes = classname('menu-item', className, {

    })
    return (
        <li className={classes} onClick={handleClick}></li>
    )
}

export default MenuItem

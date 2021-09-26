import React, { useContext } from 'react'
import classname from 'classnames'
import {MenuContext} from './menu'

const MenuItem = (props) => {
    const {
        index,
        disabled,
        children,
        className
    } = props
    const context = useContext(MenuContext)
    const classes = classname('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} onClick={handleClick}>{children}</li>
    )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
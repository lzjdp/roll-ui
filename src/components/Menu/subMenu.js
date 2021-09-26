import React, {useState, useContext} from 'react'
import classname from 'classnames'
import { MenuContext } from './menu'

const SubMenu = (props) => {
    const { index, title, className, cildren} = props
    const classes = classname('menu-item submenu-item', className, {

    })
    return (
        <li></li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu


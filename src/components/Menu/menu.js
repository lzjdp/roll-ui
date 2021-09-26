import React, { createContext } from 'react'
import classname from 'classnames'
import './_styles.scss'

const Menu = ({className, children, mode}) => {
    const classes = classname('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-hor': mode !== 'vertical'
    })
    const renderChildren = (children) => {

    }
    export const MenuContext = createContext()
    return (
        <ul className={classes}>
            <MenuContext.Provider>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

export default Menu
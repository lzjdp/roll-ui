import React, { useState, createContext } from 'react'
import classname from 'classnames'
import './_style.scss'

export const MenuContext = createContext({index: '0'})

const Menu = (props) => {
    const {
        mode,
        className,
        children,
        defaultIndex,
        onSelect,
        defaultOpenSubMenus
    } = props
    const classes = classname('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    })
    const [currentActive, setActive] = useState(defaultIndex)
    const handleClick = (index) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const values = {
        index: currentActive ? currentActive : '0',
        mode,
        onSelect: handleClick,
        defaultOpenSubMenus
    }
    // 对传入组件验证是否为MenuItem
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const { displayName } = child.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(child, {
                    index: index.toString()
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        })
    }
    return (
        <ul className={classes}>
            <MenuContext.Provider value={values}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu
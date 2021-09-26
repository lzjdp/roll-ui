import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classname from 'classnames'
import './_styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'; // 导入图标仓库
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标
library.add(fas) // 把图标添加进仓库

const Icon = (props) => {
    const {
        theme,
        className,
        ...restProps
    } = props
    const classes = classname('icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}

export default Icon
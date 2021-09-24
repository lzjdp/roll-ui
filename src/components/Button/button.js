import classname from 'classnames'
import './_styles.scss'

const Button = (props) => {
    const {
        type,
        size,
        className,
        disabled,
        href,
        children,
        ...resetProps
    } = props
    const classes = classname('btn', className, {
        [`btn-${type}`]: type,
        [`btn-${size}`]: size,
        'disabled': disabled
    })
    if (type === 'link' && href) {
        return (
            <a className={classes} href={href} {...resetProps}>{children}</a>
        )
    } else {
        return (
            <button disabled={disabled} className={classes} {...resetProps}>{children}</button>
        )
    }
}

Button.defaultProps = {
    type: 'default',
    disabled: false,
}

export default Button
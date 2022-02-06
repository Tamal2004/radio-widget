import React from 'react';
import classNames from 'classnames';

// Local
import styles from './IconButton.module.scss';

type IconButtonProps = JSX.IntrinsicElements['button'] & {
    /*
        What is the src path to the icon image
     */
    src: string;
    /*
        What is the alternative text shown when the icon image cannot be loaded 
     */
    alt: string;
    /*
        Overriding styling functionality for the button
     */
    className?: string;
    /*
        Overriding styling functionality for the icon
     */
    iconClassName?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
    src,
    alt,
    className,
    iconClassName,
    ...buttonProps
}) => {
    return (
        <button
            className={classNames(styles.button, className)}
            role='button'
            {...buttonProps}
        >
            <img
                className={classNames(styles.icon, iconClassName)}
                src={src}
                alt={alt}
            />
        </button>
    );
};

// Exports
export type { IconButtonProps };
export { IconButton };

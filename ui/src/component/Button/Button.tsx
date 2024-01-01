import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import clsx from "clsx";
import style from './Button.module.scss'

export interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
}

function Button({onClick, children, className, type}: ButtonProps) {
    return (
        <button type={type} className={clsx(style.root, className)} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

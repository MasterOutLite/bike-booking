import React, {ReactNode} from 'react';
import style from './ButtonIcon.module.scss'
import clsx from "clsx";

export interface ButtonIconProps {
    className?: string;
    onClick?: () => void;
}

function ButtonIcon({onClick, className}: ButtonIconProps) {

    return (
        <div onClick={onClick} className={clsx(style.root, className)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9 9L1 1M9 1L1 9" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
    );
}

export default ButtonIcon;

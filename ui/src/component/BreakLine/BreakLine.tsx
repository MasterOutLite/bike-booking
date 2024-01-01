import React from 'react';
import style from './BreakLine.module.scss';
import clsx from "clsx";

export interface BreakLineProps {
    vertical?: boolean;
    className?: string;
}

function BreakLine({vertical, className}: BreakLineProps) {
    return (
        <div className={clsx(style.root, vertical ? style.vertical : style.horizontal, className)}/>
    );
}

export default BreakLine;

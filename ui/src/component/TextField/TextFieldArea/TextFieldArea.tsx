import React from 'react';
import clsx from "clsx";
import style from './TextFieldArea.module.scss'
import {Path, RegisterOptions, UseFormRegister} from "react-hook-form";
import {IBicycleForm} from "../../../type";

export interface TextFieldAreaProps {
    form?: {
        label: Path<IBicycleForm>,
        register: UseFormRegister<IBicycleForm>,
        options?: RegisterOptions,
    }
    value?: string
    setValue?: (e: string) => void;

    rows?: number;
    cols?: number;
    placeholder?: string;
    className?: string;

}

function TextFieldArea({placeholder, rows, cols, className, setValue, value, form}: TextFieldAreaProps) {

    const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {value},
        } = event;
        if (setValue)
            setValue(value);
    }

    return (
        <textarea
            {...(form ? form.register(form.label, form.options) : {})}
            className={clsx(style.root, className)}
            value={value}
            onChange={handlerChange}
            rows={rows}
            cols={cols}
            placeholder={placeholder}
        />
    );
}

export default TextFieldArea;

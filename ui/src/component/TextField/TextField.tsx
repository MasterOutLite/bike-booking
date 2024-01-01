import React, {HTMLInputTypeAttribute} from 'react';
import style from './TextField.module.scss';
import clsx from "clsx";
import {BicycleType, IBicycleForm} from "../../type";
import {Path, RegisterOptions, UseFormRegister} from "react-hook-form";

export interface TextFieldProps {
    form?: {
        label: Path<IBicycleForm>,
        register: UseFormRegister<IBicycleForm>,
        options?: RegisterOptions,
    }

    value?: string
    setValue?: (e: string) => void;

    placeholder?: string;
    className?: string;
    type?: HTMLInputTypeAttribute;

    invalid?: boolean;
}

function TextField({placeholder, setValue, value, className, form, type, invalid}: TextFieldProps) {

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {value},
        } = event;
        if (setValue)
            setValue(value);
    }
    return (
        <input
            {...(form ? form.register(form.label, form.options) : {})}

            className={clsx(style.root, className, invalid ? style.invalid : null)}
            value={value}
            type={type}
            onChange={handlerChange}
            placeholder={placeholder}
        />
    );
}

export default TextField;

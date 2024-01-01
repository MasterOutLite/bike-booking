import React, {useState} from 'react';
import style from './Select.module.scss'
import clsx from "clsx";
import {BicycleStatusType} from "../../type";

export interface SelectProps {
    value?: any;
    setValue: (v: any) => void;
    data?: BicycleStatusType [];
    onChange?: (val: any) => void;
}

function Select({value, setValue, data, onChange}: SelectProps) {
    const [isSelect, setIsSelect] = useState<boolean>(false);

    function handleClick() {
        setIsSelect(v => !v);
    }

    function handleSelect(val: any) {
        return () => {
            if (val.name === value) {
                return
            }
            setValue(val);
            if (onChange) {
                onChange(val);
            }
        }
    }

    return (
        <div className={style.root}>
            <div className={style.relative} onClick={handleClick}>{value}
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                    <path d="M0 0L5 5L10 0H0Z" fill="black"/>
                </svg>

                <div className={clsx(style.drop, isSelect ? style.show : style.hide)}>
                    {
                        data?.map(value =>
                            <div key={value._id} onClick={handleSelect(value)}>{value.name}</div>)
                    }
                </div>
            </div>

        </div>
    );
}

export default Select;

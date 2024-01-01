import React, {useMemo, useState} from 'react';
import {BicycleType} from "../../type";
import style from './Bicycle.module.scss'
import clsx from "clsx";
import Select from "../Select/Select";
import useBicycleStore from "../../store/useBicycleStore";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import {deleteBicycle, putBicycle} from "../../api";

export interface BicycleProps extends BicycleType {

}

function Bicycle({id, color, name, _id, price, type, status, wheelSize, description}: BicycleProps) {
    const {bicycleStatus, bicycle, setBicycle} = useBicycleStore();
    const [colorStatus, setColorStatus] = useState(status);


    const borderColor = useMemo(() => {
        switch (colorStatus._id) {
            case '658d668fc155bb5d9e206777': {
                return style.busy;
            }
            case '658d66adc155bb5d9e206778': {
                return style.available;
            }
            default: {
                return style.unavailable;
            }
        }
    }, [colorStatus])

    const opacity = useMemo(() => {
        switch (colorStatus._id) {
            case '658d6521c155bb5d9e206776': {
                return style.opacity;
            }
            default: {
                return '';
            }
        }
    }, [colorStatus])

    async function handleChangeStatus(val: any) {
        try {
            const res = await putBicycle(id, val._id);
            console.log(res);
            setColorStatus(res.status);
        } catch (e) {
            console.log(e);
        }
    }

    async function handleRemove() {

        const res = await deleteBicycle(_id);
        if (res)
            setBicycle(bicycle.filter(val => val._id !== _id));

    }


    return (
        <div className={clsx(style.root, style.justifyContentSB, style.row, borderColor)}>
            <div>
                <div className={clsx(style.name, opacity)}>
                    {name.toUpperCase() + ' - '}
                    <span className={style.text}>{type.toUpperCase()} ({color.toUpperCase()})</span>
                </div>
                <div className={clsx(style.subText, opacity)}>ID: {id}</div>

                <div className={style.row} style={{gap: 18}}>
                    <div>Status:</div>
                    <Select onChange={handleChangeStatus} value={colorStatus.name} setValue={setColorStatus}
                            data={bicycleStatus}/>
                </div>

            </div>

            <div className={clsx(style.col, opacity)}>
                <ButtonIcon onClick={handleRemove} className={style.alignSelfEnd}/>

                <span className={style.price}>{price} UAH/hr.</span>
            </div>
        </div>
    );
}

export default Bicycle;

import React, {useEffect} from 'react';
import style from './ListBicycle.module.scss';
import useBicycleStore from "../../store/useBicycleStore";
import Bicycle from "../Bicycle/Bicycle";
import clsx from "clsx";

export interface ListBicycleProps {
    className?: string;
}

function ListBicycle({className}: ListBicycleProps) {

    const {bicycle, bicycleStatus} = useBicycleStore();
    if (!bicycle && !bicycleStatus)
        return <div className={clsx(style.root, className)}>
            Wait...
        </div>

    return (
        <div className={clsx(style.root, className)}>
            {
                bicycle.map(value => <Bicycle key={value.id} {...value} />)
            }
        </div>
    );
}

export default ListBicycle;

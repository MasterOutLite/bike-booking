import React, {useEffect, useState} from 'react';
import style from './Statistics.module.scss'
import {getStatistics} from "../../api";
import {StatisticsType} from "../../type";
import useBicycleStore from "../../store/useBicycleStore";

export interface StatisticsProps {

}

function Statistics() {
    const [statistics, setStatistics] = useState<StatisticsType>();
    const {bicycle} = useBicycleStore();

    useEffect(() => {
        const get = async () => {
            const res = await getStatistics();
            setStatistics(res);
        }

        get()
    }, [bicycle]);


    return (
        <div className={style.root}>
            <span className={style.title}>Statistics</span>
            <span>Total Bikes: <span className={style.value}>{statistics?.count}</span> </span>
            <span>Available Bikes: <span className={style.value}>{statistics?.countAvailable}</span> </span>
            <span>Booked Bikes: <span className={style.value}>{statistics?.countUnavailable}</span> </span>
            <span>Average bike cost: <span className={style.value}>{statistics?.avgPrice}</span> UAH/hr.</span>
        </div>
    );
}

export default Statistics;

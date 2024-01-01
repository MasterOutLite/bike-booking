import React, {useEffect} from 'react';
import Main from "../Layer";
import AddBikeForm from "../component/AddBikeForm/AddBikeForm";
import Statistics from "../component/Statistics/Statistics";
import BreakLine from "../component/BreakLine/BreakLine";
import ListBicycle from "../component/ListBicycle/ListBicycle";

import style from './AdminPanel.module.scss'
import useBicycleStore from "../store/useBicycleStore";

function AdminPanel() {

    const {getBicycleAsync, getBicycleStatusAsync} = useBicycleStore();
    useEffect(() => {
        getBicycleStatusAsync();
        getBicycleAsync();

    }, []);

    return (
        <Main className={style.root}>
            <ListBicycle className={style.list}/>
            <BreakLine className={style.line} vertical/>
            <div className={style.form}>
                <AddBikeForm/>
                <BreakLine/>
                <Statistics/>
            </div>
        </Main>
    );
}

export default AdminPanel;

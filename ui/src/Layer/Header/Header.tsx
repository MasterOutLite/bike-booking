import React from 'react';
import style from './Header.module.scss'

function Header() {
    return (
        <header className={style.root}>
            <h1 className={style.title}>
                ADMIN.BIKE-BOOKING.COM
            </h1>
        </header>
    );
}

export default Header;

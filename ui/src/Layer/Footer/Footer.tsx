import React from 'react';
import style from './Footer.module.scss'

function Footer() {
    return (
        <footer className={style.root}>
            <span className={style.subText}>
                Developer: <span className={style.text}> {'Taras Maichuk'}</span>
            </span>
        </footer>
    );
}

export default Footer;

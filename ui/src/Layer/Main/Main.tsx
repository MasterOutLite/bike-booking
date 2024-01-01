import React, {ReactNode} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import style from './Main.module.scss'
import clsx from "clsx";

export interface MainProps {
    children?: ReactNode;
    className?: string;
}

function Main({children, className}: MainProps) {
    return (
        <>
            <Header/>
            <main className={clsx(style.root, className)}>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default Main;

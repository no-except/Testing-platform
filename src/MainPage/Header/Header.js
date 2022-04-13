import styles from './Header.module.scss';
import logo from './../../logo/logo.svg';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.header}>
             <NavLink to="/">
                <img alt="" src={logo}/>
             </NavLink>
             <NavLink to="/" className={styles.header__text}>
                <div>Всi тести</div>
             </NavLink>
        </div>
    );
}

export default Header;
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/navbar.module.css';


function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li className={styles.logo}>
                        <div className={styles.logoimage}></div>
                        <p className={styles.logoname}>Care Sphere</p>
                    </li>
                    <li><Link className={styles.navicons} to="/">Home</Link></li>
                    <li><a className={styles.navicons}href="#">About</a></li>
                    <li>
                        <div className="dropdown">
                            <a className={`btn btn-secondary dropdown-toggle ${styles.dropdownToggle}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                                <li> <Link className={`dropdown-item ${styles.dropdownItem}`} to="/age-selection">Select Age</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><a className={styles.navicons} href="#">Contact Us</a></li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar;



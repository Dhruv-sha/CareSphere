import React from 'react';
import styles from '../Styles/home.module.css';

function Home() {
    return (
        <>
            <div className={styles.firstContainer}>


                <navbar className={styles.navbar}>
                    <ul className={styles.navlist}>
                        <li className={styles.logo}>
                            <img className={styles.logoimage} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJyaWVmY2FzZS1tZWRpY2FsIj48cGF0aCBkPSJNMTIgMTF2NCIvPjxwYXRoIGQ9Ik0xNCAxM2gtNCIvPjxwYXRoIGQ9Ik0xNiA2VjRhMiAyIDAgMCAwLTItMmgtNGEyIDIgMCAwIDAtMiAydjIiLz48cGF0aCBkPSJNMTggNnYxNCIvPjxwYXRoIGQ9Ik02IDZ2MTQiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjYiIHJ4PSIyIi8+PC9zdmc+" alt="no img" />
                            <p className={styles.logoname}>Care Sphere</p>
                        </li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </navbar>



            </div>



            <div className={styles.secondContainer}>Home component</div>
            <div className={styles.thirdContainer}>Home component</div>
            <div className={styles.fourthContainer}>Home component</div>
            <div className={styles.fifthContainer}>Home component</div>
            <div className={styles.sixthContainer}>Home component</div>
            <div className={styles.seventhContainer}>Home component</div>
        </>
    )

}

export default Home;


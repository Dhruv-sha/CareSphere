import styles from "../Styles/ageSelection.module.css";
import { Link } from 'react-router-dom';


function AgeSelection() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.tagline}>Select Your Age Group</div>

                    <div className={styles.cardsection}>
                        <div className={`${styles.cards} ${styles.card1}`}>
                            <div className={styles.card1img}></div>
                            <div className={styles.card1content}>15-25 Years</div>
                            <Link className={styles.arrowbtn} to="/problem-selection1" >
                                <img className={styles.arrow} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hcnJvdy1yaWdodCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOCAxMmg4Ii8+PHBhdGggZD0ibTEyIDE2IDQtNC00LTQiLz48L3N2Zz4=" alt="no img" />
                            </Link>
                        </div>

                        <div className={`${styles.cards} ${styles.card2}`}>
                            <div className={`${styles.card2img}`}></div>
                            <div className={styles.card2content}>26-40 Years</div>
                            <Link className={styles.arrowbtn} to="/problem-selection2">
                                <img className={styles.arrow} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hcnJvdy1yaWdodCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOCAxMmg4Ii8+PHBhdGggZD0ibTEyIDE2IDQtNC00LTQiLz48L3N2Zz4=" alt="no img" />
                            </Link>
                        </div>

                        <div className={`${styles.cards} ${styles.card3}`}>
                            <div className={styles.card3img}></div>
                            <div className={styles.card3content}>40-60 Years</div>
                            <Link className={styles.arrowbtn} to="/problem-selection3">
                                <img className={styles.arrow} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hcnJvdy1yaWdodCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOCAxMmg4Ii8+PHBhdGggZD0ibTEyIDE2IDQtNC00LTQiLz48L3N2Zz4=" alt="no img" />
                            </Link>
                        </div>

                        <div className={`${styles.cards} ${styles.card4}`}>
                            <div className={`${styles.card4img}`}></div>
                            <div className={styles.card4content}>60 above</div>
                            <Link className={styles.arrowbtn}  to="/problem-selection4">
                                <img className={styles.arrow} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hcnJvdy1yaWdodCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOCAxMmg4Ii8+PHBhdGggZD0ibTEyIDE2IDQtNC00LTQiLz48L3N2Zz4=" alt="no img" />
                            </Link>
                        </div>

                    </div>
                </div>





            </div>
        </>
    )

}

export default AgeSelection;


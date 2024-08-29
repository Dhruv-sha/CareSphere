import styles from '../Styles/growingSolutionFour.module.css'

function GrowingSolutionsFour() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Parent with Patience, Grow with Love.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Practicing Self-Care</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Make time for yourself to rest and recharge. Prioritizing self-care ensures you have the energy and patience to handle parenting challenges.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Time Management</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Create a schedule that balances parenting duties with work and personal time. Effective time management reduces stress and helps you stay organized.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Seeking Support</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Reach out to family, friends, or parenting groups for help and advice. A strong support network provides emotional relief and practical assistance.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}> Setting Realistic Expectations</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Avoid putting too much pressure on yourself to be a "perfect" parent. Embrace imperfections and focus on doing your best for your child.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Open Communication</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Foster open communication with your partner and children. Clear and honest communication reduces misunderstandings and strengthens family bonds.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Prioritizing Quality Time</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Spend quality time with your children, focusing on meaningful interactions. Quality time strengthens your relationship and reduces stress for both you and your child.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default GrowingSolutionsFour;


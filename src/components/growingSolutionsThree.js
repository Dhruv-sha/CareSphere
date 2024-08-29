import styles from '../Styles/YoungSolutionTen.module.css'

function GrowingSolutionsThree() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Take Control of Your Finances.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Budgeting and Planning</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Create a monthly budget to track income and expenses. A clear budget helps you manage your money and reduces financial anxiety.</div>

                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Debt Management</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Develop a plan to pay off debts gradually. Prioritizing high-interest debts can reduce financial pressure over time.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Building an Emergency Fund</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Set aside a portion of your income for unexpected expenses. An emergency fund provides a safety net and peace of mind.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>  Seeking Financial Advice</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Consult a financial advisor or use online tools for personalized advice. Professional guidance can help you make informed financial decisions.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}> Reducing Unnecessary Expenses</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Identify and cut down on non-essential spending. Reducing expenses can free up money for savings or debt repayment.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Exploring Additional Income Sources</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Consider part-time work, freelancing, or other side gigs. Supplementing your income can alleviate financial stress and improve your financial situation.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default GrowingSolutionsThree;


import styles from '../Styles/MiddleSolutionThree.module.css'

function MiddleSolutionTwo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Harmonize Work and Life.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}> Time Management Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Utilize tools like planners or digital calendars to organize your work and personal tasks. Effective time management helps you balance responsibilities and reduces stress.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Setting Boundaries</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Clearly define work hours and personal time to prevent work from encroaching on your home life. Setting boundaries helps maintain a healthy separation between work and personal life.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Delegating Responsibilities</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Delegate tasks at work and home to manage your workload more effectively. Sharing responsibilities lightens your load and allows you to focus on priorities.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}> Embracing Flexibility</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Explore options for flexible work arrangements, such as remote work or adjusted hours. Flexibility can help you better manage personal commitments and reduce work-related stress.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Taking Regular Breaks</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Incorporate short breaks into your workday to recharge and avoid burnout. Regular breaks enhance productivity and maintain overall well-being.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Quality Time with Family and Friends</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Schedule regular activities with loved ones to strengthen relationships and unwind. Spending quality time helps balance work demands with personal fulfillment.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default MiddleSolutionTwo;


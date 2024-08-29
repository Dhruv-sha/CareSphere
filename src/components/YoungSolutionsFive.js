import styles from '../Styles/YoungSolutionFive.module.css'

function YoungSolutionFive() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Study Smarter, Not Harder</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}> Time Management Strategies</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Use tools like planners or apps to organize your study schedule. Effective time management reduces last-minute cramming and stress.</div>

                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Break Tasks into Manageable Steps</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Divide large assignments into smaller, more achievable tasks. Tackling work step-by-step makes it less overwhelming and more manageable.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Study Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Implement techniques like the Pomodoro method or active recall. These methods improve focus and retention, making study sessions more effective.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>  Seek Academic Support</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Don’t hesitate to ask for help from teachers, tutors, or study groups. Collaborative learning can clarify doubts and enhance understanding.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Practice Self-Care</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>  Balance your studies with regular breaks, exercise, and sleep. Taking care of your physical and mental health boosts productivity and reduces burnout.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Positive Mindset</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Cultivate a growth mindset by focusing on learning rather than just grades. Emphasizing effort over outcomes helps reduce pressure and encourages resilience.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default YoungSolutionFive;


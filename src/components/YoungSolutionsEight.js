import styles from '../Styles/YoungSolutionEight.module.css'

function YoungSolutionEight() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Chart Your Path.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Self-Assessment</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Reflect on your strengths, interests, and values. Understanding what motivates you can guide you toward a fulfilling career path.</div>

                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Exploring Career Options</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Research different careers and industries. Gaining knowledge about various fields helps you make informed decisions about your future.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Setting Career Goals</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Define short-term and long-term career goals. Clear goals provide direction and help you stay focused on your professional journey.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}> Networking</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Connect with professionals in fields of interest. Networking can provide insights, mentorship, and potential opportunities in your chosen career. </div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Gaining Experience</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Participate in internships, part-time jobs, or volunteer work. Practical experience helps you discover your passions and build your resume.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Seeking Career Counseling</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Consult a career counselor for personalized advice. Professional guidance can help you navigate uncertainty and plan a clear career path.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default YoungSolutionEight;


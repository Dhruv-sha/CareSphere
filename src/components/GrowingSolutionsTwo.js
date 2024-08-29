import styles from '../Styles/growingSolutionTwo.module.css'

function GrowingSolutionsTwo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Climb Higher, Reach Further.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Continuous Learning</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Engage in online courses, workshops, or certifications to keep your skills updated. Lifelong learning is key to staying competitive in your field.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Networking</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Build and maintain relationships with professionals in your industry. Networking opens doors to new opportunities and insights that can propel your career forward.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Seeking Mentorship</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Find a mentor who can provide guidance, feedback, and support. A mentor can offer valuable advice and help you navigate your career path more effectively.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>Setting Clear Goals</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Define your short-term and long-term career goals. Having clear objectives helps you stay focused and motivated toward achieving your career aspirations.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Taking on New Challenges</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Volunteer for new projects or leadership roles at work. Taking on challenges demonstrates initiative and can lead to recognition and advancement.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Developing Soft Skills</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>  Improve skills like communication, leadership, and emotional intelligence. Strong soft skills are essential for career growth and effective teamwork.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default GrowingSolutionsTwo;


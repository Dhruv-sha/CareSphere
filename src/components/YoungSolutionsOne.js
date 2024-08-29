import styles from '../Styles/Solutions.module.css'

function YoungSolutionOne() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Find Your Calm...Here are some of the practices you can give a try</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Mindful Breathing Exercises</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Practice deep breathing techniques to relax your mind and body. Helps reduce stress by focusing on your breath and calming your thoughts.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Physical Activity</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Engage in regular exercise like walking, yoga, or running. Physical activity releases endorphins, which act as natural stress relievers.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Healthy Lifestyle Choices</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Maintain a balanced diet, get enough sleep, and avoid excessive caffeine or alcohol. A healthy lifestyle enhances your resilience to stress.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}> Time Management Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Learn to prioritize tasks and manage your time effectively. Reducing procrastination can significantly lower stress levels.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Social Support</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Talk to friends, family, or a counselor. Sharing your feelings with someone you trust can lighten your emotional load.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Meditation and Relaxation</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Spend a few minutes daily in meditation. It helps clear your mind, reduce anxiety, and bring a sense of peace.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default YoungSolutionOne;


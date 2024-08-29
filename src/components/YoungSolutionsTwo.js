import styles from '../Styles/YoungSolutionTwo.module.css'

function YoungSolutionTwo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Find Your Calm...Here are some of the practices you can give a try</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Grounding Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Use the 5-4-3-2-1 method to focus on the present moment by engaging your senses. Helps reduce anxiety by bringing your mind back to the present.</div>

                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Cognitive Behavioral Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Engage in physical activities like running or yoga. Exercise reduces anxiety by releasing tension and boosting mood-enhancing chemicals.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Mindfulness Meditation</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Practice mindfulness to stay connected to the present moment. Reduces anxiety by allowing you to observe your thoughts without judgment.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>Regular Exercise</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Identify and challenge negative thought patterns. Reframe your thoughts to reduce irrational fears and anxieties.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Journaling</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Write down your thoughts and feelings daily. Journaling helps in identifying triggers and patterns, providing clarity and reducing anxiety.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading6}`}>Limiting Caffeine and Sugar</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Reduce intake of stimulants like caffeine and sugar, which can increase anxiety symptoms. Opt for a balanced diet to maintain emotional stability.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default YoungSolutionTwo;


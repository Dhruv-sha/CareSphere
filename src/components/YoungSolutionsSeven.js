import styles from '../Styles/YoungSolutionSeven.module.css'

function YoungSolutionSeven() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Restful Nights, Productive Days.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Establish a Sleep Routine</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Go to bed and wake up at the same time every day. A consistent sleep schedule helps regulate your body’s internal clock.</div>

                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Create a Relaxing Bedtime Ritual</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Engage in calming activities like reading or taking a warm bath before bed. A soothing routine signals your body that it’s time to wind down.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Limit Screen Time</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Avoid screens at least an hour before bedtime. Blue light from devices can interfere with your sleep by disrupting melatonin production.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}> Optimize Your Sleep Environment</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Keep your bedroom cool, dark, and quiet. A comfortable and distraction-free environment promotes better sleep quality.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Watch Your Diet</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Avoid heavy meals, caffeine, and alcohol close to bedtime. These can interfere with your ability to fall asleep and stay asleep.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Practice Relaxation Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Try deep breathing, meditation, or progressive muscle relaxation before bed. These techniques help calm your mind and prepare your body for sleep.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default YoungSolutionSeven;


import styles from '../Styles/OldSolutionFive.module.css'

function OldSolutionFive() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Nurture Your Mind, Embrace Wellness.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}> Staying Mentally Active</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Engage in activities that stimulate the mind, such as puzzles, reading, or learning new skills. Keeping the brain active helps maintain cognitive function and mental sharpness.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Social Engagement</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Participate in social activities and community events. Social interaction combats loneliness and provides emotional support, which is crucial for mental well-being.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Regular Physical Exercise</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Incorporate physical activities like walking, swimming, or gentle exercises into your routine. Exercise boosts mood, reduces anxiety, and supports overall mental health.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>Maintaining a Routine</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Description: Establish and maintain a daily routine to provide structure and stability. A consistent routine helps manage anxiety and gives a sense of purpose.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}> Engaging in Hobbies</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Pursue hobbies and activities that bring joy and fulfillment. Engaging in enjoyable activities can improve mood and provide a sense of accomplishment.</div>
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

export default OldSolutionFive;


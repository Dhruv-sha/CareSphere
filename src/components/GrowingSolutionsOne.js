import styles from '../Styles/growingSolutionOne.module.css'

function GrowingSolutionsOne() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Balance Your Life, Boost Your Happiness.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Prioritizing Tasks</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Use tools like to-do lists or task management apps to prioritize your daily tasks. Focus on what’s essential and let go of non-critical tasks to reduce stress.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Setting Boundaries</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Establish clear boundaries between work and personal time. Avoid checking emails or taking work calls during personal hours to maintain a healthy balance.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Time Management Techniques</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Implement strategies like time blocking or the Pomodoro technique to allocate specific times for work and personal activities, ensuring neither is neglected.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>  Regular Breaks</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Take short, frequent breaks throughout the workday. Regular breaks improve focus, prevent burnout, and help maintain energy levels.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Delegating Tasks</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Delegate tasks at work and home when possible. Sharing responsibilities reduces the burden and allows you to focus on more critical tasks.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Physical Activity</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>  Incorporate regular exercise into your routine. Physical activity not only boosts your health but also provides a break from work-related stress.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default GrowingSolutionsOne;


import styles from '../Styles/MiddleSolutionOne.module.css'

function OldSolutionOne() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Health First, Age Gracefully.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}> Regular Health Screenings</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Schedule routine check-ups and screenings for common conditions like high blood pressure, diabetes, and cholesterol. Early detection is key to preventing and managing health issues.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}> Balanced Nutrition</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Focus on a diet rich in whole foods, including fruits, vegetables, lean proteins, and healthy fats. Proper nutrition supports overall health and helps manage age-related concerns.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Regular Physical Activity</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Engage in regular exercise, such as walking, swimming, or strength training. Physical activity maintains muscle mass, supports joint health, and reduces the risk of chronic diseases.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}> Stress Management</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Practice stress-reduction techniques like yoga, meditation, or deep breathing exercises. Managing stress is crucial for maintaining mental and physical health during this stage of life.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Bone Health</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Incorporate calcium-rich foods and vitamin D into your diet to support bone density. Weight-bearing exercises also help maintain bone strength and reduce the risk of osteoporosis.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Heart Health</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Adopt heart-healthy habits like reducing sodium intake, managing cholesterol levels, and maintaining a healthy weight. Regular cardiovascular exercise is also essential for heart health.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default OldSolutionOne;


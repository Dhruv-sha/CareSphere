import styles from '../Styles/OldSolutionTwo.module.css'

function OldSolutionTwo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero}>Support with Love, Care with Confidence.</div>
                <div className={styles.content}>

                    <div className={`${styles.card}  ${styles.card1}`}>

                        <div className={`${styles.img}  ${styles.img1}`}></div>
                        <div className={`${styles.heading}  ${styles.heading1}`}>Creating a Care Plan</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Develop a comprehensive care plan that addresses medical, daily, and emotional needs. A structured plan ensures all aspects of care are managed effectively.</div>
                    </div>



                    <div className={`${styles.card}  ${styles.card2}`}>
                        <div className={`${styles.img}  ${styles.img2}`}></div>
                        <div className={`${styles.heading}  ${styles.heading2}`}>Seeking Professional Help</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Consider hiring professional caregivers or home health aides if needed. Professional support can provide specialized care and relief for family caregivers.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card3}`}>
                        <div className={`${styles.img}  ${styles.img3}`}></div>
                        <div className={`${styles.heading}  ${styles.heading3}`}>Utilizing Community Resources</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}>Explore local resources such as senior centers, respite care services, and support groups. Community resources offer valuable assistance and reduce caregiver burden.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card4}`}>
                        <div className={`${styles.img}  ${styles.img4}`}></div>
                        <div className={`${styles.heading}  ${styles.heading4}`}>Managing Finances and Legalities</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Address financial and legal matters, including managing budgets, insurance, and legal documents. Proper planning helps avoid complications and ensures smooth caregiving.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card5}`}>
                        <div className={`${styles.img}  ${styles.img5}`}></div>
                        <div className={`${styles.heading}  ${styles.heading5}`}>Open Communication</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Maintain open and honest communication with your parents about their needs and preferences. Clear communication ensures that their wishes are respected and understood.</div>
                    </div>

                    <div className={`${styles.card}  ${styles.card6}`}>
                        <div className={`${styles.img}  ${styles.img6}`}></div>
                        <div className={`${styles.heading}  ${styles.heading}`}>Organizing Medical Care</div>
                        <div className={`${styles.discription}  ${styles.discription1}`}> Keep track of medical appointments, medications, and health records. Organized medical care helps in managing health conditions and coordinating with healthcare providers.</div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default OldSolutionTwo;


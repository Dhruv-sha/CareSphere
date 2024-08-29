import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/home.module.css';

function Home() {


    const workingref = useRef(null);

    const scrollToWorking = () => {
        if (workingref.current) {
            workingref.current.scrollIntoView({ behaviour: 'smooth' });
        }
    };

    const topref = useRef(null);

    const scrollToTop = () => {
        if (topref.current) {
            topref.current.scrollIntoView({ behaviour: 'smooth' });
        }
    };






    return (
        <>
            <div className={styles.firstContainer} ref={topref}>



                <div className={styles.hero1}>
                    <div className={styles.part1}>
                        <div className={styles.herotagline1}>Health</div>
                        <div className={styles.herotagline2}>Spark</div>

                        <p className={styles.herocontent}>
                            Every step you take towards better health is a step towards a more fulfilled and balanced life. Remember, true wellness is not just about the absence of illness but about thriving in all aspects of life—body, mind, and spirit.
                        </p>

                        <button className={styles.seehowbtn} onClick={scrollToWorking}>See How</button>
                    </div>


                    <div className={styles.part2}></div>

                </div>

                <div className={styles.lastquote}>Let's begin your wellness adventure</div>


            </div>


            <div className={styles.secondContainer}>

                <div className={styles.secondheading1}>About</div>
                <div className={styles.secondheading2}>Care Sphere</div>

                <p className={styles.secondContent1}>
                    We understand that every individual faces unique health challenges. Our goal is to provide personalized healthcare solutions tailored to your specific needs.
                    We believe in a holistic approach to wellness, integrating physical, mental, and emotional aspects to promote overall health. Our proactive health management strategies aim to prevent issues before they become serious, ensuring comprehensive and continuous support throughout your health journey.
                </p>

                <p className={styles.secondContent2}>Our commitment is to empower you with the tools and guidance needed to achieve and maintain optimal health, providing solutions that are as unique as you are.</p>

                <div className={styles.img1}></div>
                <div className={styles.img2}></div>
                <div className={styles.img3}></div>
                <div className={styles.img4}></div>
                <div className={styles.img5}></div>
                <div className={styles.img6}></div>
                <div className={styles.img7}></div>
                <div className={styles.img8}></div>
            </div>




            <div className={styles.thirdContainer} ref={workingref}>
                <div className={styles.thirdheading}>How It Works</div>

                <div className={styles.cardsection}>

                    <div className={`${styles.firstcard} ${styles.card}`}>
                        <div className={styles.cardheading}>Identify Your Age Group</div>
                        <div className={styles.cardimg1}></div>
                        <div className={styles.cardcontent}>
                            Choose your age range to receive recommendations and solutions tailored to your specific life stage. Whether you’re a teenager, adult, or senior, our approach adapts to your unique needs and challenges.
                        </div>
                    </div>


                    <div className={`${styles.secondcard} ${styles.card}`}>
                        <div className={styles.cardheading}>Select Your Concerns</div>
                        <div className={styles.cardimg2}></div>
                        <div className={styles.cardcontent}>
                            Let us know the issues you’re experiencing, from stress and fatigue to chronic pain or sleep disturbances. By understanding your specific problems, we can offer targeted support to address them effectively.
                        </div>
                    </div>


                    <div className={`${styles.thirdcard} ${styles.card}`}>
                        <div className={styles.cardheading}>Get Customized Solutions</div>
                        <div className={styles.cardimg3}></div>
                        <div className={styles.cardcontent}>
                            Receive personalized advice and solutions based on your age group and the problems you’ve selected. Our expert-recommended strategies are designed to help you overcome your challenges and improve your overall well-being.

                        </div>
                    </div>

                </div>

            </div>



            <div className={styles.fourthContainer}>

                <div className={styles.fourthcontent1}>Ready to get started..?</div>

                <div className={styles.fourthcontent2}>Begin your wellnss journey today...</div>

                <Link className={styles.thirdbtn} to="/age-selection">Get Started</Link>




            </div>


            <div className={styles.fifthContainer}>

                <button className={styles.fourthbtn} onClick={scrollToTop}>Back to Top</button>

                <div className={styles.contactcontent}>

                    <div class={styles.footpanel2}>
                        <ul>
                            <p>Get to know</p>
                            <a href="">Carrers</a>
                            <a href="">Blog</a>
                            <a href="">About amazon</a>
                            <a href="">Inverstor relations</a>
                            <a href="">Amazon Devices</a>
                            <a href="">Amazon Science</a>
                        </ul>

                        <ul>
                            <p>Get to know</p>
                            <a href="">Carrers</a>
                            <a href="">Blog</a>
                            <a href="">About amazon</a>
                            <a href="">Inverstor relations</a>
                            <a href="">Amazon Devices</a>
                            <a href="">Amazon Science</a>
                        </ul>

                        <ul>
                            <p>Get to know</p>
                            <a href="">Carrers</a>
                            <a href="">Blog</a>
                            <a href="">About amazon</a>
                            <a href="">Inverstor relations</a>
                            <a href="">Amazon Devices</a>
                            <a href="">Amazon Science</a>
                        </ul>

                        <ul>
                            <p>Get to know</p>
                            <a href="">Carrers</a>
                            <a href="">Blog</a>
                            <a href="">About amazon</a>
                            <a href="">Inverstor relations</a>
                            <a href="">Amazon Devices</a>
                            <a href="">Amazon Science</a>
                        </ul>
                    </div>
                </div>

                <div class={styles.footpanel4}>
                    <div class={styles.pages}>
                        <a>Conditions of use</a>
                        <a>Privacy Notice</a>
                        <a>Your Ads privacy of choices</a>
                    </div>

                    <div class={styles.copyright}>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
                </div>


            </div>
        </>
    );
}

export default Home;

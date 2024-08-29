import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import styles from '../Styles/problemSelection.module.css';


function ProblemSelection1() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            age: '',
            problem: '',
        },




        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Name must be at least 2 characters')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
                .required('Phone number is required'),
            age: Yup.number()
                .min(1, 'Age must be greater than 0')
                .required('Age is required'),
            problem: Yup.string()
                .min(10, 'Problem description must be at least 10 characters')
                .required('Problem description is required'),
        }),
        
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.post('http://localhost:5000/problems', values)
                .then(response => {
                    setStatus('success');
                    alert('Your problem has been submitted successfully!');
                    resetForm();
                    navigate('/');
                })
                .catch(error => {
                    setStatus('error');
                    console.error('There was an error submitting the form!', error);
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
        
    });







    return (
        <>
            <div className={styles.container}>
                <div className={styles.hero1}>Tell us from what you are going through...</div>

                <div className={styles.content}>
                    <Link className={`${styles.cards}   ${styles.card1}`} to='/YoungSolutionOne'>
                        <div className={`${styles.cardimg} ${styles.img1}`}></div>
                        <div className={styles.cardheading}>Stress</div>
                        <div className={styles.cardcontent}>Feeling overwhelmed by school or work pressures.</div>

                    </Link>
                    <Link className={`${styles.cards}   ${styles.card2}`} to='/YoungSolutionTwo'>
                        <div className={`${styles.cardimg} ${styles.img2}`}></div>
                        <div className={styles.cardheading}>Anxiety</div>
                        <div className={styles.cardcontent}>Experiencing frequent worry or nervousness.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionThree'>
                        <div className={`${styles.cardimg} ${styles.img3}`}></div>
                        <div className={styles.cardheading}>Low Self-Esteem</div>
                        <div className={styles.cardcontent}>Struggling with feelings of inadequacy or self-doubt.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionFour'>
                        <div className={`${styles.cardimg} ${styles.img4}`}></div>
                        <div className={styles.cardheading}>Relationship Issues</div>
                        <div className={styles.cardcontent}>Facing challenges in romantic or platonic relationships.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionFive'>
                        <div className={`${styles.cardimg} ${styles.img5}`}></div>
                        <div className={styles.cardheading}>Academic Pressure</div>
                        <div className={styles.cardcontent}> Struggling with high expectations and heavy workload.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionSix'>
                        <div className={`${styles.cardimg} ${styles.img6}`}></div>
                        <div className={styles.cardheading}>Loneliness</div>
                        <div className={styles.cardcontent}> Feeling isolated or disconnected from others.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionSeven'>
                        <div className={`${styles.cardimg} ${styles.img7}`}></div>
                        <div className={styles.cardheading}>Sleep Problems</div>
                        <div className={styles.cardcontent}>Difficulty falling or staying asleep.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionEight'>
                        <div className={`${styles.cardimg} ${styles.img8}`}></div>
                        <div className={styles.cardheading}>Career Uncertainty</div>
                        <div className={styles.cardcontent}>Uncertain about future career paths or goals.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionNine'>
                        <div className={`${styles.cardimg} ${styles.img9}`}></div>
                        <div className={styles.cardheading}>Body Image Issues</div>
                        <div className={styles.cardcontent}>Concerned about physical appearance or body image.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/YoungSolutionTen'>
                        <div className={`${styles.cardimg} ${styles.img10}`}></div>
                        <div className={styles.cardheading}>Financial Stress</div>
                        <div className={styles.cardcontent}>Struggling with managing personal finances or budgeting.</div>
                    </Link>
                </div>


                <div className={styles.hero2}>Facing some other issue..? Share with us and we will guide you personally</div>



                <form onSubmit={formik.handleSubmit} className={styles.formcontainer}>

                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'> Name :</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />


                        {
                            formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ) : null
                        }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'> Email :</label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />

                        {
                            formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null
                        }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'> Phone :</label>
                        <input
                            id='phone'
                            name='phone'
                            type='number'
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />

                        {
                            formik.touched.phone && formik.errors.phone ? (
                                <div className="text-danger">{formik.errors.phone}</div>
                            ) : null
                        }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='age' className='form-label'> Age :</label>
                        <input
                            id='age'
                            name='age'
                            type='number'
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                        />

                        {
                            formik.touched.age && formik.errors.age ? (
                                <div className="text-danger">{formik.errors.age}</div>
                            ) : null
                        }
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='problem' className='form-label'> Problem :</label>
                        <input
                            id='problem'
                            name='problem'
                            type='text'
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.problem}
                        />

                        {
                            formik.touched.problem && formik.errors.problem ? (
                                <div className="text-danger">{formik.errors.problem}</div>
                            ) : null
                        }
                    </div>


                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>






            </div>
        </>
    )

}

export default ProblemSelection1;


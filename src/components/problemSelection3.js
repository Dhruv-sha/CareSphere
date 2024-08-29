import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';

import styles from '../Styles/problemSelectionThree.module.css';


function ProblemSelection3() {

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
                    <Link className={`${styles.cards}   ${styles.card1}`} to='/MiddleSolutionOne'>
                        <div className={`${styles.cardimg} ${styles.img1}`}></div>
                        <div className={styles.cardheading}>Health Concerns</div>
                        <div className={styles.cardcontent}>Chronic health issues such as hypertension, diabetes, and heart disease often emerge during this age, along with concerns about overall physical fitness and aging.</div>

                    </Link>
                    <Link className={`${styles.cards}   ${styles.card2}`} to='/MiddleSolutionTwo'>
                        <div className={`${styles.cardimg} ${styles.img2}`}></div>
                        <div className={styles.cardheading}>Work-Life Balance</div>
                        <div className={styles.cardcontent}> Managing the demands of a career while also attending to family responsibilities, such as caring for aging parents or supporting children, can be challenging.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/MiddleSolutionThree'>
                        <div className={`${styles.cardimg} ${styles.img3}`}></div>
                        <div className={styles.cardheading}>Financial Planning for Retirement</div>
                        <div className={styles.cardcontent}>The need to plan and save for retirement becomes more pressing, with concerns about whether current savings and investments are sufficient.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/MiddleSolutionFour'>
                        <div className={`${styles.cardimg} ${styles.img4}`}></div>
                        <div className={styles.cardheading}>Career Transition or Job Security</div>
                        <div className={styles.cardcontent}>Many in this age group face uncertainties in their careers, including the potential for job loss, desire for a career change, or difficulty keeping up with new technologies.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/MiddleSolutionFive'>
                        <div className={`${styles.cardimg} ${styles.img5}`}></div>
                        <div className={styles.cardheading}>Empty Nest Syndrome</div>
                        <div className={styles.cardcontent}>As children grow up and move out, parents may experience feelings of loss or loneliness, adjusting to a new phase of life.</div>
                    </Link>

                    <Link className={`${styles.cards}   ${styles.card3}`} to='/MiddleSolutionSix'>
                        <div className={`${styles.cardimg} ${styles.img6}`}></div>
                        <div className={styles.cardheading}> Caring for Aging Parents</div>
                        <div className={styles.cardcontent}> The responsibility of caring for elderly parents can be emotionally and physically taxing, especially when balancing other life responsibilities.</div>
                    </Link>

                </div>


                <div className={styles.hero2}>Facing some other issue..? Share with us and we will guide you</div>


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

export default ProblemSelection3;


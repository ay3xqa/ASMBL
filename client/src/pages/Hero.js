import './CSS/Hero.css';
import logo from '../images/logo.png';
import vod from '../images/placeholder_vid.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

export default function Hero() {

    const initialValues = {
        name: "",
        email: ""
    };

    const onSubmit = (data, {resetForm}) => {
        axios.post("https://asmbl-deploy.herokuapp.com/waitlist", data).then((response) => {
            console.log("it worked");
            resetForm({values: ""});
        })
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("This is a required field"),
        email: Yup.string().required("This is a required field").email("Please enter a valid email address")
    });

    return (
        <section className='Hero'>
            <div className='Hero-container'>
                <div className='Hero-logoContainer'>
                    <img className='Hero-logo' src={logo} alt="" />
                </div>
                <h1 className='Hero-header'>
                    Visualize Custom PC configurations online, easily
                </h1>
                <p className='Hero-text'>
                    Compare components, find compatible parts, and asmbl your new PC
                </p>
                <div className='Hero-vodContainer'>
                    <img className='Hero-vod' src={vod} alt="" />
                </div>
                <p className='Hero-text2'>
                    Click and add 100s of PC components to your build. <br/> Experience your future PC in 3D before making a single purchase!
                </p>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form className='Hero-formContainer'>
                        <div className="nameContainer">
                            <label className='Hero-label'>Name</label>
                            <Field id="name" name="name" placeholder="First Last" />
                            <ErrorMessage name="name" component="span" />
                        </div>
                        <div className="emailContainer">
                            <label className='Hero-label'>Email</label>
                            <Field id="email" name="email" placeholder="example@gmail.com" />
                            <ErrorMessage name="email" component="span" />
                        </div>
                        <button className='Hero-button' type="submit">Join Waitlist</button>
                    </Form>
                </Formik>
                <h2 className='Hero-header2'>
                    Sign up to receive an invitation to our beta!
                </h2>
                <p className='Hero-subtext'>
                    By providing your email you agree to receive occasional updates on ASMBL progress. Your email address is confidential and will not be shared with any third-parties
                </p>
            </div>
        </section>
    )
}
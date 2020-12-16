import React, { useState } from 'react'
import axios from 'axios';
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID, HOST_URL } from '../../shared/constant';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import useAppState from '../../context/useAppState';
import showpassword from "../../assets/images/eye_icon.svg";
import closeicon from "../../assets/images/close.svg";
import { Modal } from 'react-bootstrap';
import "./Signup.scss"

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup
        .string()
        .label('Password')
        .required('Required')
        .min(2, 'Seems a bit short...')
        .max(10, 'We prefer insecure system, try a shorter password.'),
    phone: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required")
        .min(10, "to short")
        .max(10, "to long"),
    confirmPassword: Yup
        .string()
        .required('Required')
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
});

const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup
        .string()
        .label('Password')
        .required('Required')
        .min(2, 'Seems a bit short...')
        .max(10, 'We prefer insecure system, try a shorter password.')
});

const validationSchemaForForgotPassword = Yup.object().shape({
    email: Yup.string().email().required('Required'),        
});

const Signup = ({ handleClose }) => {
    // const [open, setOpen] = useState(!!show)
    const { setLogin } = useAppState("useGlobal")
    const [type, setType] = useState("password")
    const [isLoginPage, setLoginPage] = useState(false)
    const [isSignupPage, setSignupPage] = useState(true)
    const [error, setError] = useState(null)
    //     const [popup, setPopup] = useState(false);

    //     const handlePopup = (pop) => {
    //         pop === true ? setPopup(false) : setPopup(true)
    //    }

    console.log('isLoginPage => ', isLoginPage);

    const handleForm = (input) => {
        console.log('input => ', input);
        axios.post(`${HOST_URL}/auth/signup`, input).then((res) => {
            console.log('Hi in signup res', res)
            setError("")
            handleClose();
        }).catch(err => {
            console.log('err =>', err.respon)
            setError(err.response.data.message)
        })
    }
    const googleResponse = response => {
        axios.post(`${HOST_URL}/auth/google`, response.profileObj).then(res => {
            setLogin(res.data.token)
            handleClose();
        }).catch(err => console.log('err => ', err.response))
    }

    const facebookResponse = async response => {
        axios.post(`${HOST_URL}/auth/facebook`, response).then(res => {
            setLogin(res.data.token)
            handleClose();
        }).catch(err => console.log('err => ', err.response))
    }

    const onFailure = error => {
        console.log("error login", error)
        // alert(error)
    }
    const handlePassword = () => {
        let ele = document.getElementById("password")
        if (type === "password") {
            ele.classList.add("show")
            setType("text")
        } else {
            ele.classList.remove("show")
            setType("password")
        }
    }
    const handleLoginForm = (input) => {
        let obj = {
            email: input.email,
            password: input.password
        }
        axios.post(`${HOST_URL}/auth/login`, obj).then(resp => {
            setLogin(resp.data.token)
            setError("")
            handleClose();
        }).catch(e => {
            console.log('e => ', e.response);
            setError(e.response.data.message)
        })
    }
    console.log('error => ', error);

    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-left">
                <div class="hello-msg">
                    <h1 className="text-uppercase text-white brandon-Bold">Hello<br />Fuzz</h1>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-right">
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn modalclose-icon" onClick={handleClose}>
                            <img src={closeicon} alt="signup modal close icon" className="img-fluid" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <h3 className="brandon-Bold">{isLoginPage ? "Sign in" : isSignupPage?"Sign up":"Reset Password"}</h3>
                        <p className="f-15"><span className="pr-2">{isLoginPage ? "Don't have an account?" :isSignupPage?"Have an account?":"Enter your email address in the for below and we will send you further instructions on how toreset your password."}</span>
                            {isLoginPage ? <button className="pink-txt brandon-Medium trans_button" onClick={() =>{setLoginPage(false);setSignupPage(true)}}>Create account</button> :isSignupPage? <button className="pink-txt brandon-Medium trans_button" onClick={() =>{setLoginPage(true);setSignupPage(false)}}>Sign in</button>:null}
                        </p>
                    </div>
                </div>
                {isLoginPage  ?
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchemaForLogin}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values => ', values);

                            handleLoginForm(values)
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                {touched.email && errors.email &&
                                                    <div className="error pink-txt f-11">{errors.email}</div>}
                                            </div>
                                            <div className="form-group position-relative">
                                                <Field type={type} name="password" placeholder="Password" className="form-control signup-input"
                                                />
                                                <div className="showpassword-block" id="password" onClick={() => handlePassword()}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.password && errors.password && errors.password) || error}</div>
                                            </div>
                                            <div class="forgot-block mt-3 mb-3">
                                                <button onClick={() =>{setLoginPage(false);setSignupPage(false)}} class="forgot-link trans_button">
                                                    <span>Forgot Password</span>
                                                </button>
                                            </div>
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" disabled={isSubmitting}>
                                                    Sign in
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                    : isSignupPage ?
                    <Formik
                        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handleForm(values)
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Field name="fullName" className="form-control signup-input" placeholder="Name or Full name" />
                                                {touched.fullName && errors.fullName && <div className="error pink-txt f-11">{errors.fullName}</div>}
                                            </div>
                                            <div className="form-group">
                                                <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                {/* {touched.email && errors.email &&
                                                <div className="error pink-txt f-11">{errors.email}</div>} */}
                                                <div className="error pink-txt f-11">{(touched.email && errors.email && errors.email) || error}</div>
                                            </div>
                                            <div className="form-group">
                                                <Field name="phone" placeholder="Phone no" className="form-control signup-input" />
                                                {touched.phone && errors.phone &&
                                                    <div className="error pink-txt f-11">{errors.phone}</div>}
                                            </div>
                                            <div className="form-group position-relative">
                                                <Field type={type} name="password" placeholder="Password" className="form-control signup-input"
                                                />
                                                <div className="showpassword-block" id="password" onClick={() => handlePassword()}>
                                                    <img src={showpassword} className="img-fluid" />
                                                </div>
                                                {touched.password && errors.password && <div className="error pink-txt f-11">{errors.password}</div>}
                                            </div>
                                            <div className="form-group">
                                                <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control signup-input" />
                                                {touched.confirmPassword && errors.confirmPassword && <div className="error pink-txt f-11">{errors.confirmPassword}</div>}
                                            </div>
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" disabled={isSubmitting}>
                                                    Sign up
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                    :
                    <Formik
                        initialValues={{ email: '', }}
                        validationSchema={validationSchemaForForgotPassword}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values => ', values);

                            handleLoginForm(values)
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                {touched.email && errors.email &&
                                                    <div className="error pink-txt f-11">{errors.email}</div>}
                                            </div>
                                           
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25 " type="submit" disabled={isSubmitting}>
                                                    RESET PASSWORD
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>}
               { isLoginPage || isSignupPage ?
               <React.Fragment>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group mt-2 pt-2">
                                <div className="border-separate">
                                </div>
                            </div>
                            <div className="or-txt f-15">
                                <span>or</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="socail-login d-flex justify-content-between align-items-center mt-3">
                                <GoogleLogin
                                    clientId={GOOGLE_CLIENT_ID}
                                    onSuccess={googleResponse}
                                    className="btnApple socail-btn"
                                    icon={false}
                                >
                                    {/* <span>Google</span> */}
                                    <span></span>
                                </GoogleLogin>
                                <FacebookLogin
                                    appId={FACEBOOK_APP_ID}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={facebookResponse}
                                    cssClass="btnFacebook socail-btn"
                                    // textButton="&nbsp;&nbsp;Facebook"
                                    textButton=""
                                />
                                <GoogleLogin
                                    clientId={GOOGLE_CLIENT_ID}
                                    onSuccess={googleResponse}
                                    className="btnGoogle socail-btn"
                                    icon={false}
                                >
                                    {/* <span>Google</span> */}
                                    <span></span>
                                </GoogleLogin>
                            </div>
                            <div class="terms-block text-center mt-4 txt-lightgray">
                                <p>By proceeding you agree to the<br />
                                    <Link href="#" class="pink-txt pr-1 brandon-Medium">Terms</Link>and
                                    <Link href="#" class="pink-txt pl-1 brandon-Medium">Privacy Policy</Link>
                                </p>
                            </div>
                            {/* <Modal show={popup} onHide={handlePopup} className="signup-modal">
                                <Modal.Body className="p-0">
                                            <p>Signup successfully !</p>
                                </Modal.Body>
                            </Modal> */}
                        </div>
                    </div>
                </React.Fragment>
                :null}
            </div>
        </div>
    )
}

export default Signup

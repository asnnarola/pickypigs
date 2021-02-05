import React, { useState } from 'react'
import axios from 'axios';
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID, HOST_URL } from '../../../shared/constant';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import useAppState from '../../../context/useAppState';
import showpassword from "../../../assets/images/eye_icon.svg";
import "./SignupMobilePage.scss"

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Name Required'),
    email: Yup.string().email('Email must be a valid email').required('Email Required'),
    password: Yup
    .string()
    .label('Password')
    .required('Password Required')
    .min(8, 'Seems a bit short(Min 8 characters)...')
    .max(24, 'Please try a shorter password(Max 24 characters)...).')
    .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),

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
const SignupMobilePage = ({ handleClose }) => {
    // const [open, setOpen] = useState(!!show)
    const { setLogin } = useAppState("useGlobal")
    const [type, setType] = useState("password")
    const [isLoginPage, setLoginPage] = useState(false)
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
        <section style={{marginTop:90}}>
        <div className="mobileSignup-modal">
           
            <div className="signup-right">
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <h3 className="brandon-Bold">{isLoginPage ? "Sign in" : "Sign up"}</h3>
                        <p className="f-15"><span className="pr-2 brandon-Medium">{isLoginPage ? "Don't have an account?" : "Have an account?"}</span>
                            {isLoginPage ? <Link  to="/" className="pink-txt brandon-Medium" onClick={() => setLoginPage(false)}>Create account</Link> : <Link to="/" className="pink-txt brandon-Medium" onClick={() => setLoginPage(true)}>Sign in</Link>}
                        </p>
                    </div>
                </div>
                {isLoginPage ?
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
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" disabled={isSubmitting}>
                                                    Sign in
                                                </button>
                                            </div>
                                            <div className="forgot-block text-center mt-3 mb-3">
                                                <a className="forgot-link" href="#">
                                                    <span>Forgot Password</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                    : <Formik
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
                    </Formik>}
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
                                cssclassName="btnFacebook socail-btn"
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
                        <div className="terms-block text-center mt-4 txt-lightgray">
                            <p>By proceeding you agree to the<br />
                                <Link to="/" className="pink-txt pr-1 brandon-Medium">Terms</Link>and
                                <Link to="/" className="pink-txt pl-1 brandon-Medium">Privacy Policy</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default SignupMobilePage

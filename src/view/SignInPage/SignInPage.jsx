import React, { useState } from 'react'
import axios from 'axios';
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID, HOST_URL } from '../../shared/constant';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import useAppState from '../../context/useAppState';
import showpassword from "../../assets/images/eye_icon.svg";
import closeicon from "../../assets/images/close.svg";
import "./SignInPage.scss"
import { useDispatch } from 'react-redux';
import { getLogin,registerUser, showSignUpPopup } from '../../redux/actions/generalActions';


const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email').required('Email Required'),
    password: Yup
    .string()
    .label('Password')
    .required('Password Required')
    .min(8, 'Seems a bit short(Min 8 characters)...')
    .max(24, 'Please try a shorter password(Max 24 characters)...).')
    .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
});



const SignInPage = (props) => {
    const dispatch=useDispatch();
    const history=useHistory();
    const { setLogin } = useAppState("useGlobal")
    const [type, setType] = useState("password")
   



    const googleResponse = response => {
        axios.post(`${HOST_URL}/auth/google`, response.profileObj).then(res => {
            setLogin(res.data.token)
            console.log(res.data.token);
            props.onHide();
        }).catch(err => console.log('err => ', err.response))
    }

    const facebookResponse = async response => {
        axios.post(`${HOST_URL}/auth/facebook`, response).then(res => {
            setLogin(res.data.token)
            props.onHide();
        }).catch(err => console.log('err => ', err.response))
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

    const handleLoginForm = (input,{ setStatus,resetForm}) => {
        let obj = {
            email: input.email,
            password: input.password
        }
        
        dispatch(getLogin(obj,history))
    }
    

    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-left">
                <div className="hello-msg">
                    <h1 className="text-uppercase text-white brandon-Bold">Hello<br />Fuzz</h1>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-right">
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn modalclose-icon" onClick={()=>{props.onHide()} }>
                            <img src={closeicon} alt="signup modal close icon" className="img-fluid" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <h3 className="brandon-Bold">Sign in</h3>
                        <p className="f-15"><span className="pr-2">Don't have an account?</span>
                            <button className="pink-txt brandon-Medium trans_button" onClick={()=>{props.gotoSignup()}}>Sign Up</button>
                        </p>
                    </div>
                </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchemaForLogin}
                        onSubmit={handleLoginForm}
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
                                                <div className="error pink-txt f-11">{(touched.password && errors.password && errors.password)}</div>
                                            </div>
                                            <div className="forgot-block mt-3 mb-3">
                                                <button  className="forgot-link trans_button" onClick={()=>{props.openForgotPass()}}>
                                                    <span>Forgot Password</span>
                                                </button>
                                            </div>
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" >
                                                    Sign in
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                 
                    
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
                            <div className="terms-block text-center mt-4 txt-lightgray">
                                <p>By proceeding you agree to the<br />
                                    <Link to="/#" className="pink-txt pr-1 brandon-Medium">Terms</Link>and
                                    <Link to="/#" className="pink-txt pl-1 brandon-Medium">Privacy Policy</Link>
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
            </div>
        </div>
    )
}

export default SignInPage

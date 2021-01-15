import React, { useEffect, useState} from 'react'
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
import "./ForgotPasswordPage.scss"
import { useDispatch,useSelector} from 'react-redux';
import { getLogin,registerUser } from '../../redux/actions/generalActions';




const validationSchemaForForgotPassword = Yup.object().shape({
    email: Yup.string().email().required('Required'),        
});

const ForgotPasswordPage = (props,{ handleClose }) => {
    const dispatch=useDispatch();
  
 

   
    

    

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
                        <button className="btn modalclose-icon" onClick={handleClose}>
                            <img src={closeicon} alt="signup modal close icon" className="img-fluid" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <h3 className="brandon-Bold">Reset Password</h3>
                        <p className="f-15"><span className="pr-2">Enter your email address in the for below and we will send you further instructions on how toreset your password.</span>
                        <button className="pink-txt brandon-Medium trans_button" onClick={()=>{props.gotoLogin()}} >Sign In</button>

                        </p>
                    </div>
                </div>
                
                    <Formik
                        initialValues={{ email: '', }}
                        validationSchema={validationSchemaForForgotPassword}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values => ', values);

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
                    </Formik>
               
            </div>
        </div>
    )
}

export default ForgotPasswordPage

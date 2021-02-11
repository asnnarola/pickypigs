import React, { useEffect, useState} from 'react'
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
import { Modal } from 'react-bootstrap';
import "./RegistrationSuccessScreen.scss"
import { useDispatch,useSelector} from 'react-redux';

import Tick from '../../assets/images/check.svg' 




const RegistrationSuccessScreen = (props) => {
    const dispatch=useDispatch();
    const history=useHistory();

 

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
                
                  
                <div className="d-flex flex-column justify-content-center align-items-center" style={{height:250}}>
                    <img src={Tick} className="img-fluid pb-4" width="50px"/>
                    <p className="brandon-Bold" >User Registration Successful.</p>
                    <p className="f-15 "><span>Check your registered email for verification</span></p>
                    <button className="pinkline-btn signup-btn btn w-50 text-uppercase border-radius-25"  onClick={()=>{props.onHide()} }>
                                                    Ok
                    </button>   
                </div>
            </div>
        </div>
        
    )
}

export default RegistrationSuccessScreen;

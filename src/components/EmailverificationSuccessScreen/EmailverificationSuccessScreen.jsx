import React, { useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import closeicon from "../../assets/images/close.svg";
import { Modal } from 'react-bootstrap';
import "./EmailverificationSuccessScreen.scss"
import { useDispatch,useSelector} from 'react-redux';

import Tick from '../../assets/images/check.svg' 




const EmailverificationSuccessScreen = (props) => {
    const dispatch=useDispatch();
    const history=useHistory();

    let verification_Data=useSelector((state)=>{
        return state.emailVerification
    });
    let {emailVerification_Message,isLoading}=verification_Data;

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
                    <p className="brandon-Bold" >{emailVerification_Message&&emailVerification_Message.message?emailVerification_Message.message:''}</p>
                    <p className="f-15 "><span>Please Login with Verified Email</span></p>
                    <button className="pinkline-btn signup-btn btn w-50 text-uppercase border-radius-25"  onClick={()=>{props.gotoLogin()}}>
                                                    Login
                    </button>   
                </div>
            </div>
        </div>
        
    )
}

export default EmailverificationSuccessScreen;

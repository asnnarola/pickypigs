import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import email_verification from "../../assets/images/email_verification_temp.jpg"
import CustomLoadingComp from "../../components/CustomLoadingComp/CustomLoadingComp";
import { getEmailVerificationInfoData } from "../../redux/actions/emailVerificationAction";
import './EmailVerificationPage.scss';

const EmailVerificationPage=()=>{
    const params=useParams();
    const history=useHistory();
    let  mytoken  = params.token;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getEmailVerificationInfoData(mytoken,history));
    },[dispatch,mytoken]);

    let verification_Data=useSelector((state)=>{
        return state.emailVerification
    });
    let {emailVerification_Message,isLoading,errorMessage}=verification_Data;
    return (
        <React.Fragment>
            {isLoading?
                <React.Fragment>
                    <CustomLoadingComp/>
                </React.Fragment>
            :
                null
            }
            
            <section className="container EmailVerificationPage">
                <div className="text-center">
                    <img src={email_verification} className="img-fluid" alt="email_verification_image"/>
                </div>
                <div className="text-center m-3">
                    <h4 className="brandon-Medium pink-txt text-uppercase">{errorMessage&&errorMessage.message?'Verification Link Expired':'Something Went Wrong'}</h4>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EmailVerificationPage;
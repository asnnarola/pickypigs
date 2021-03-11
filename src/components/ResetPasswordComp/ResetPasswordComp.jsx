import React, { useState } from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch} from "react-redux";
import showpassword from "../../assets/images/eye_icon.svg";
import {resetPassword } from "../../redux/actions/generalActions";
import './ResetPasswordComp.scss';
import { useHistory, useParams } from "react-router-dom";


const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
const validationSchemaForLogin = Yup.object().shape({
    newPassword: Yup
        .string()
        .label('Password')
        .required('Password Required')
        .min(8, 'Seems a bit short(Min 8 characters)...')
        .max(24, 'Please try a shorter password(Max 24 characters)...).')
        .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
    
    confirmPassword: Yup
        .string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match ya fool', function(value) {
        return this.parent.newPassword === value;
        }),
         
});

const ResetPasswordComp = () => {

    const dispatch = useDispatch();
    const params=useParams();
    const history = useHistory();
    const [type, setType] = useState("password")
    const [confirmType, setConfirmType] = useState("password")
	let  mytoken  = params.token;

   
    const handleSavePassword = (input) => {
        let obj = {
            token:mytoken,
            newPassword: input.newPassword,
            confirmPassword: input.confirmPassword
        }
        dispatch(resetPassword(obj, history))
    }

   
    const handlePassword = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }
   
    const handleConfirmPassword=()=>{
        if (confirmType === "password") {
            setConfirmType("text")
        } else {
            setConfirmType("password")
        }
    }
    return (
        <>
            <section className="resetPassword-container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row justify-content-center align-items-center">
                
                <div className="col-md-6">
                    <div className="signin-form">
                        <div>
                        <h5 className="text-center signindash-heading brandon-Bold mb-4">RESET PASSWORD</h5>
                        <Formik
                            initialValues={{ newPassword: '',confirmPassword:'' }}
                            validationSchema={validationSchemaForLogin}
                            onSubmit={(values) => {
                                console.log('values => ', values);
                                handleSavePassword(values)
                            }}
                        >
                            {({
                                values, errors, touched, handleChange, handleBlur, isSubmitting,
                                /* and other goodies */
                            }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            
                                            <div className="form-group position-relative">
                                                <Field type={type} name="newPassword" placeholder="New Password" className="form-control signup-input"
                                                />
                                                <div className={`showpassword-block ${type=== "password"?null:"show"}`} id="newPassword" onClick={() => handlePassword()}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.newPassword && errors.newPassword && errors.newPassword)}</div>
                                            </div>
                                            <div className="form-group position-relative">
                                                <Field type={confirmType} name="confirmPassword" placeholder="Confirm new password" className="form-control signup-input"
                                                />
                                                <div className={`showpassword-block ${confirmType=== "password"?null:"show"}`} id="confirmPassword" onClick={handleConfirmPassword}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.confirmPassword && errors.confirmPassword && errors.confirmPassword)}</div>
                                            </div>
                                            
                                            <div className="form-group text-center">
                                                <button className="min-width-270 pinkline-btn signup-btn btn mt-4 text-uppercase rounded-pill" type="submit" >
                                                    Save Password
                                                            </button>
                                            </div>

                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        </div>
                      
                   
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            </section>
        </>
    )
}

export default ResetPasswordComp;
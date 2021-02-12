import React, { useState } from "react";
import './SignUpModalComp.scss';
import { Modal, Button } from 'react-bootstrap';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import showpassword from "../../assets/images/eye_icon.svg";
import closeicon from "../../assets/images/close.svg";
import { useDispatch } from "react-redux";
import {registerRestaurant} from '../../redux/actions/restaurantAdminAction'

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);

const initialValues = {
    name:'',
    contactName:'',
    company:'',
    phoneNumber:'',
    email:'',
    password:'',
    package:'',
    role:'restaurant_admin',
    isAgreeToTerms:false
}
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name Required'),
    contactName: Yup.string().required('Contact Name Required'),
    company: Yup.string().required('company Name Required'),
    email: Yup.string().email('Email must be a valid email').required('Email Required'),
    isAgreeToTerms:Yup.boolean().oneOf([true], "You must accept the terms and conditions").required(),
    package:Yup.string().required('Please Select a package'),
    role:Yup.string().required('Please Select a Role'),
    password: Yup
        .string()
        .label('Password')
        .required('Password Required')
        .min(8, 'Seems a bit short(Min 8 characters)...')
        .max(24, 'Please try a shorter password(Max 24 characters)...).')
        .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
    phoneNumber: Yup
        .string()
        .required('Phone Number is a required field')
        .min(10, "Min 10 Digits")
        .max(10, "Max 10 Digits")
        .matches(phoneRegex, "Invalid Phone Number"),
    confirmPassword: Yup
        .string()
        .required('Required')
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
});
const SignUpModalComp = (props) => {
    const [type, setType] = useState("password")
    const [confirmType, setConfirmType] = useState("password");
    const dispatch=useDispatch();


    const onSubmit=(fields, { setStatus,resetForm})=>{
        setStatus();
        dispatch(registerRestaurant(fields));
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
            <section>
                <div >
                 
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-left">
                                    <div className="hello-msg">
                                        <h1 className="text-uppercase text-white brandon-Bold">Hello<br />Fuzz</h1>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-right">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn modalclose-icon" onClick={props.onHide}>
                                                <img src={closeicon} alt="signup modal close icon" className="img-fluid" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 mb-3">
                                            <h3 className="brandon-Bold">Sign up</h3>

                                        </div>
                                    </div>

                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            
                                            /* and other goodies */
                                        }) => (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <Field name="name" className="form-control signup-input" placeholder="Restaurant Name" />
                                                            {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="contactName" className="form-control signup-input" placeholder="Contact Name" />
                                                            {touched.contactName && errors.contactName && <div className="error pink-txt f-11">{errors.contactName}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="company" className="form-control signup-input" placeholder="Company" />
                                                            {touched.company && errors.company && <div className="error pink-txt f-11">{errors.company}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="phoneNumber" placeholder="Phone" className="form-control signup-input" />
                                                            {touched.phoneNumber && errors.phoneNumber &&
                                                                <div className="error pink-txt f-11">{errors.phoneNumber}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                            {/* {touched.email && errors.email &&
                                                <div className="error pink-txt f-11">{errors.email}</div>} */}
                                                            <div className="error pink-txt f-11">{(touched.email && errors.email && errors.email) }</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="package" className="form-control signup-input" placeholder="Package" />
                                                            {touched.package && errors.package && <div className="error pink-txt f-11">{errors.package}</div>}
                                                        </div>
                                                        
                                                        <div className="form-group position-relative">
                                                            <Field type={type} name="password" placeholder="Password" className="form-control signup-input"
                                                            />
                                                            <div className={`showpassword-block ${type=== "password"?null:"show"}`} id="password" onClick={() => handlePassword()}>
                                                                <img src={showpassword} className="img-fluid" />
                                                            </div>
                                                            {touched.password && errors.password && <div className="error pink-txt f-11">{errors.password}</div>}
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control signup-input" />
                                                            {touched.confirmPassword && errors.confirmPassword && <div className="error pink-txt f-11">{errors.confirmPassword}</div>}
                                                        </div> */}
                                                        <div className="form-group position-relative">
                                                            <Field type={confirmType} name="confirmPassword" placeholder="Confirm new password" className="form-control signup-input" />
                                                            <div className={`showpassword-block ${confirmType=== "password"?null:"show"}`} id="confirmPassword" onClick={handleConfirmPassword}>
                                                                <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                            </div>
                                                            <div className="error pink-txt f-11">{(touched.confirmPassword && errors.confirmPassword && errors.confirmPassword) }</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <Field type="checkbox" name="isAgreeToTerms"  className=""/>
                                                            <label>Agree to terms</label>
                                                            {touched.isAgreeToTerms && errors.isAgreeToTerms && <div className="error pink-txt f-11">{errors.isAgreeToTerms}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" >
                                                                Sign up
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
            </section>
        </>
    )
}

export default SignUpModalComp;
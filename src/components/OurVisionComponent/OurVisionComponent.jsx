import React from "react";
import pattern from "../../assets/images/Pattern.png"
import { Button } from 'react-bootstrap';
import ourmisssion_icon1 from "../../assets/images/ourmission-icon1.svg"
import ourmisssion_icon2 from "../../assets/images/ourmission-icon2.svg"
import ourmisssion_icon3 from "../../assets/images/ourmission-icon3.svg"
import ourmisssion_icon4 from "../../assets/images/ourmission-icon4.svg"
import integrate from "../../assets/images/Integrate.svg"
import showcasemenu from "../../assets/images/Showcase-Menu.svg"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import './OurVisionComponent.scss';
import { TextareaAutosize } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { sendJoinUsMessage } from "../../redux/actions/generalActions";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const OurVisionComponent = () => {
    const dispatch=useDispatch();
    const initialValue={
        name: '',
        email: '',
        phoneNumber: '',
        company:'',
        message: '',
    }
    const validationSchema  = Yup.object().shape({
        name:Yup.string().required('Name is required'),
        email:Yup.string().email('Email must be a valid email').required('Email is required'),
        phoneNumber: Yup.string().required("Phone Number is required").matches(phoneRegex, "Invalid Phone Number").min(10, "to short").max(10, "Not More Than 10 "),
        company:Yup.string().required('Company is required'),
        message:Yup.string().required('Message is required'),
    });

    const onSubmit=(fields, { setStatus,resetForm})=>{
        setStatus();
        dispatch(sendJoinUsMessage(fields));
        resetForm();

    }

    return (
        <>
            {/* Would you like to join us? start content */}
            <section className="ourmission-section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 pl-0 pr-0">
                            <div className="ourmission-wrapper">
                                <h1 className="sectionhead-txt text-uppercase text-white brandon-Medium fw-600">Our Mission </h1>
                                <p className="ourmission-subtxt f-15 line-height-1_75 text-white">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein <br className="d-lg-block d-none" /> Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die</p>
                                <div className="row mt-4 pt-2 jusitify-content-betwen">
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon1} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">To illuminate as much human error as possible.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon2} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">To enhance the entire dining experience from beginning to end.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon3} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">Fuss free food no matter what your needs and requirements might be.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon4} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">To support both the restaurant,the team and the guest in having full trust and transparency in the ordering process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-12 pl-0 pr-0">
                            <h1 className="sectionhead-txt text-uppercase text-white brandon-Medium fw-600">WOULD YOU LIKE TO JOIN US? </h1>
                            <p className="join-subtxt f-15 line-height-1_75 text-white mb-4 pb-2">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein <br className="d-lg-block d-none" /> Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die</p>
                        </div>
                    </div>
                    <div className="row">
                        <Formik enableReinitialize={true} initialValues={initialValue} validationSchema={validationSchema}  onSubmit={onSubmit}>
                        {({ errors, touched,values, isSubmitting, setFieldValue,handleChange }) => {
                             return (
                            <Form className="w-100">
                                <div className="row join-form-wrapper">
                                    <div className="col-md-4 join-input-left">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input"  name="name" placeholder="Your Name" />
                                                    <div className="error text-white f-14 mt-1">{(touched.name && errors.name && errors.name) }</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input"  name="email" placeholder="Email" type="email" />
                                                    <div className="error text-white f-14 mt-1">{(touched.email && errors.email && errors.email) }</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input"  name="phoneNumber" placeholder="Phone number" />
                                                    <div className="error text-white f-14 mt-1">{(touched.phoneNumber && errors.phoneNumber && errors.phoneNumber) }</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input"  name="company" placeholder="Company" />
                                                    <div className="error text-white f-14 mt-1">{(touched.company && errors.company && errors.company) }</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 join-input-right">
                                        <div className="form-group">
                                            <Field component="textarea" className="form-control join-textarea"  name="message" placeholder="Your message" />
                                            <div className="error text-white f-14 mt-1">{(touched.message && errors.message && errors.message) }</div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn white-btn text-uppercase h_50 min-w-180 b-r-25 brandon-Medium" type="submit">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                              );
                            }}
                        </Formik>
                    </div>
                    <div className="row mt-4 pt-2">
                        <div className="col-sm-12 pl-0 pr-0">
                            <hr className="light-white-hr" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurVisionComponent;
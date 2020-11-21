import React from "react";
import pattern from "../../assets/images/Pattern.png"
import { Button } from 'react-bootstrap';
import digitalise from "../../assets/images/Digitalise.svg"
import integrate from "../../assets/images/Integrate.svg"
import showcasemenu from "../../assets/images/Showcase-Menu.svg"
import { Formik, Field, Form } from 'formik';

import './OurVisionComponent.scss';

const OurVisionComponent = () => {

    return (
        <>
             {/* Would you like to join us? start content */}
             <section className="section7 joinus-section position-relative">
                <div className="container">
                    <div className="patternimg-block">
                        <img src={pattern} className="img-fluid" />
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="joinus-wrapper pl-4 pr-4 pt-5 pb-5">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div>
                                        <h1 className="sectionhead-txt text-uppercase pink-txt">OUR VISSION </h1>
                                        <p className="join-subtxt f-15 line-height-1_75">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein <br className="d-lg-block d-none" /> Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die</p>
                                    </div>
                                    <div className="contactus-btn">
                                        <Button variant="primary" className="theme-pink-btn w-160 text-uppercase brandon-Medium">Contact Us</Button>{' '}
                                    </div>
                                </div>
                                <div className="row mt-4 pt-2">
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 joinus-main mb-2">
                                        <div className="joinus-block p-3">
                                            <div className="joinus-icon d-flex align-items-center justify-content-center mb-2">
                                                <img src={digitalise} className="img-fluid" />
                                            </div>
                                            <div className="joinus-info pt-1">
                                                <h6 className="text-uppercase pb-1 brandon-Bold"><b>Digitalise today</b></h6>
                                                <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 joinus-main mb-2">
                                        <div className="joinus-block p-3">
                                            <div className="joinus-icon d-flex align-items-center justify-content-center mb-2">
                                                <img src={integrate} className="img-fluid" />
                                            </div>
                                            <div className="joinus-info pt-1">
                                                <h6 className="text-uppercase pb-1 brandon-Bold"><b>Digitalise today</b></h6>
                                                <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 joinus-main mb-2">
                                        <div className="joinus-block p-3">
                                            <div className="joinus-icon d-flex align-items-center justify-content-center mb-2">
                                                <img src={showcasemenu} className="img-fluid" alt="showcasemenu" />
                                            </div>
                                            <div className="joinus-info pt-1">
                                                <h6 className="text-uppercase pb-1 brandon-Bold"><b>Digitalise today</b></h6>
                                                <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div>
                        <h1 className="sectionhead-txt text-uppercase pink-txt">WOULD YOU LIKE TO JOIN US? </h1>
                        <p className="join-subtxt f-15 line-height-1_75">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein <br className="d-lg-block d-none" /> Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die</p>
                    </div>
                    <div className="row">
                            <Formik
                                initialValues={{
                                    name: '',
                                    phonenumber: '',
                                    email: '',
                                    message:'',
                                }}
                                onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    alert(JSON.stringify(values, null, 2));
                                }}
                                                        >
                                <Form>
                                    <div className="row">
                                        <div className="col-md-5">
                                        <Field id="name" name="name" placeholder="Your Name" />
                                        <Field id="email" name="email" placeholder="Email" type="email"  />
                                        <Field id="Phonenumber" name="phonenumber" placeholder="Phone number" />
                                        </div>
                                        <div className="col-md-7">
                                            <Field id="message" name="message" placeholder="Your message" />
                                        </div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </Form>
                            </Formik>                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurVisionComponent;
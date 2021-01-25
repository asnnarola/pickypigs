import React, { useState } from "react";
import fussfood from "../../assets/images/fussfood.svg"
import personalise from "../../assets/images/personalise.svg"
import allergen from "../../assets/images/Allergen-icon.svg"
import ingredients from "../../assets/images/Ingredients-icon.svg"
import nutritionFacts from "../../assets/images/NutritionFacts-icon.svg"
import knowwhatimg from "../../assets/images/knowwhat-imgs.png"
import { Modal } from 'react-bootstrap';

import './KnowWhatYouEatComponent.scss';

const KnowWhatYouEatComponent = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleActive=(value)=>{
    //     setactive(value)
    // }
    return (
        <>
            {/* Know what you section start */}
            <section className="whatYouEat-container position-relative">
                <div className="container position-relative knowwhat-section">
                    <div className="knowwhatbg-img">
                        <img src={knowwhatimg} className="img-fluid" />
                    </div>
                    <div className="row mb-5 pb-4">
                        <div className="col-sm-12">
                            <h1 className="sectionhead-txt text-uppercase">Know what<br className="d-md-none d-lg-block" />you eat</h1>
                            <p className="txt-lightgray f-15 mb-4 pb-2 brandon-regular">
                                Changing how you eat is just a means to an end.</p>
                            <div className="know-borderstyle"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button" onClick={() => { setActive(1); handleShow(); }}>
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={fussfood} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>Fuss free food</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button" onClick={() => { setActive(2); handleShow(); }}>
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={personalise} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>Fuss free food</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4">
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button" onClick={() => { setActive(3); handleShow(); }}>
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={allergen} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>Fuss free food</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button" onClick={() => { setActive(4); handleShow(); }}>
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={ingredients} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>Fuss free food</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button" onClick={() => { setActive(5); handleShow(); }}>
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={nutritionFacts} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>Fuss free food</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Modal size="lg" centered show={show} onHide={handleClose} className="knowyoueat-modal">
                    <Modal.Body className=" position-relative" >
                        <button className="close-btn" onClick={handleClose}>x</button>
                        <div id="carouselExampleFade" className="position-relative knowyoueat-carousel carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className={`carousel-item ${active === 1 && "active"}`}>
                                    <div className="knowwhat-wrapper">
                                        <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                            <img src={fussfood} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <h6 className="text-uppercase brandon-Bold"><b>Fuss free food</b></h6>
                                            <p className="f-15 mb-1">Whether you have food allergies, are watching what you eat or want to be a conscious eater, Picky Pigs will find the best restaurant for you and create a personalised digital menu for your needs. All of this at the click of a button and a thumb away.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`carousel-item ${active === 2 && "active"}`}>
                                    <div className="knowwhat-wrapper">
                                        <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                            <img src={personalise} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <h6 className="text-uppercase brandon-Bold"><b>Fuss free food</b></h6>
                                            <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`carousel-item ${active === 3 && "active"}`}>
                                    <div className="knowwhat-wrapper">
                                        <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                            <img src={allergen} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <h6 className="text-uppercase brandon-Bold"><b>Fuss free food</b></h6>
                                            <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`carousel-item ${active === 4 && "active"}`}>
                                    <div className="knowwhat-wrapper">
                                        <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                            <img src={ingredients} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <h6 className="text-uppercase brandon-Bold"><b>Fuss free food</b></h6>
                                            <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`carousel-item ${active === 5 && "active"}`}>
                                    <div className="knowwhat-wrapper">
                                        <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                            <img src={nutritionFacts} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <h6 className="text-uppercase brandon-Bold"><b>Fuss free food</b></h6>
                                            <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button style={{ position: 'absolute', left: -140 }} className="carousel-control-prev" href="#carouselExampleFade" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>

                            <button style={{ position: 'absolute', right: -140 }} className="carousel-control-next" href="#carouselExampleFade" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default KnowWhatYouEatComponent;
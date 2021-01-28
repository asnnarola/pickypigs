import React from "react";
import fussfood from "../../assets/images/fussfood.svg"
import personalise from "../../assets/images/personalise.svg"
import allergen from "../../assets/images/Allergen-icon.svg"
import ingredients from "../../assets/images/Ingredients-icon.svg"
import nutritionFacts from "../../assets/images/NutritionFacts-icon.svg"
import whymade from "../../assets/images/how/whymade.png"
import './WhyWeMadePickyPigComp.scss';

const WhyWeMadePickyPigComp=()=>{
    return(
        <>
            <section className="WhyWeMadePickyPigComp-container">
                <div className="container position-relative knowwhat-section">
                    <div className="knowwhatbg-img">
                        <img src={whymade} className="img-fluid" />
                    </div>
                    <div className="row mb-5 pb-4">
                        <div className="col-sm-12">
                            <h1 className="sectionhead-txt text-uppercase">WHY WE MADE <br className="d-md-none d-lg-block" />made picky</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={fussfood} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <p className="f-15 mb-1">You don't need to feel like a “Fussy Feeder”</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={personalise} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>PERSONALISE</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4">
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={allergen} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>ALLERGIES</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={ingredients} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>INGREDIENTS</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="knowwhat-wrapper p-4">
                                <div className="knowwhat-icon d-flex align-items-center justify-content-center mb-2">
                                    <img src={nutritionFacts} className="img-fluid" />
                                </div>
                                <div className="knowwhat-info pt-1">
                                    <h6 className="text-uppercase pb-1 brandon-Bold"><b>CALORIE AND MACRO</b></h6>
                                    <p className="f-15 mb-1">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyWeMadePickyPigComp;
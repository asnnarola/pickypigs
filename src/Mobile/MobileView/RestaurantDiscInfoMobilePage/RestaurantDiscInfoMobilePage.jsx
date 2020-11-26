import React, { useState } from "react";
import DiscDescriptionMobileComp from "../../MobileComponents/DiscDescriptionMobileComp/DiscDescriptionMobileComp";
import left_arrow from "../../../assets/images/left-arrow.svg";
import allergen from "../../../assets/images/Allergen-icon.svg"

import './RestaurantDiscInfoMobilePage.scss';
import AllergyInformationdMobileModal from "../../MobileComponents/AllergyInformationdMobileModal/AllergyInformationdMobileModal";




const RestaurantDiscInfoMobilePage = () => {

    const [allergyModalShow, setAllergyModalShow] = React.useState(false);


    return (
            <>
                <section style={{marginTop:90}}>
                    <div className="container restaurantDiscInfoMobilePage-container">
                        <DiscDescriptionMobileComp/>
                        <p>Serving Size : 1 Meal (454 gm)</p>

                        <div className="row">
                            <div className="col-12 mb-3">
                                <div role="button" className="rs-infoblock" onClick={() => setAllergyModalShow(true)}>
                                    <div className="d-flex justify-content-between align-item-center flex-nowrap">
                                        <div className="d-flex">
                                            <img src={allergen} className="img-fluid mr-3" alt="icon" />
                                            <h4>Allergy Information</h4>
                                        </div>
                                        <div>
                                            <img src={left_arrow} className="img-fluid" alt="icon" />
                                        </div>
                                    </div>
                                    <p>Contains dairy,gluten and peanuts</p>
                                </div>
                                <AllergyInformationdMobileModal show={allergyModalShow}  onHide={() => setAllergyModalShow(false)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mb-3">
                                <div role="button" className="rs-infoblock" >
                                    <div className="d-flex justify-content-between align-item-center flex-nowrap">
                                        <div className="d-flex">
                                            <img src={allergen} className="img-fluid mr-3" alt="icon" />
                                            <h4>Calories and Macros</h4>
                                        </div>
                                        <div>
                                            <img src={left_arrow} className="img-fluid" alt="icon" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Contains dairy,gluten and peanuts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mb-3">
                                <div role="button" className="rs-infoblock" >
                                    <div className="d-flex justify-content-between align-item-center flex-nowrap">
                                        <div className="d-flex">
                                            <img src={allergen} className="img-fluid mr-3" alt="icon" />
                                            <h4>Ingredient</h4>
                                        </div>
                                        <div>
                                            <img src={left_arrow} className="img-fluid" alt="icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mb-3">
                                <div role="button" className="rs-infoblock" >
                                    <div className="d-flex justify-content-between align-item-center flex-nowrap">
                                        <div className="d-flex">
                                            <img src={allergen} className="img-fluid mr-3" alt="icon" />
                                            <h4>Carbon Foot Print</h4>
                                        </div>
                                        <div>
                                            <img src={left_arrow} className="img-fluid" alt="icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }

export default RestaurantDiscInfoMobilePage;
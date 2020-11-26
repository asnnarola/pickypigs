import React, { useState } from "react";
import restaurant_img from "../../../assets/images/restaurant/r4.png";
import whatmenuicon1 from "../../../assets/images/micon1.svg";
import whatmenuicon2 from "../../../assets/images/micon2.svg";
import whatmenuicon3 from "../../../assets/images/micon3.svg";
import locationgray_icon from "../../../assets/images/location-gray.svg";
import './DiscDescriptionMobileComp.scss';




const DiscDescriptionMobileComp = () => {

    

    return (
            <>
                <section>
                    <div className="">
                        <div style={{position:'relative'}} className="row mb-3">
                            <div className="col-sm-12">
                                <img src={restaurant_img} className="img-fluid w-100" alt="Restaurant_image" />
                            </div>
                            <div style={{position:'absolute',bottom:0}} className="d-flex justify-content-between  w-100">
                                <div className="ml-4">
                                    <h4 className="text-white">Papomao Beach Tavern</h4>
                                    <p className="text-white">
                                        Price:&#36;5.00  <span>Lunch</span><span>.</span><span>Dinner</span>
                                    </p>
                                </div>
                                <div className="mr-4">
                                    <p className="text-white">4.2</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <p >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="d-flex">
                                <div className="mr-3 d-flex justify-content-center align-items-center">
                                    <img src={whatmenuicon1} className="img-fluid" />
                                </div>
                                <div className="mr-3 d-flex justify-content-center align-items-center">
                                    <img src={whatmenuicon2} className="img-fluid" />
                                </div>
                                <div className="mr-3 d-flex justify-content-center align-items-center">
                                    <img src={whatmenuicon3} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

export default DiscDescriptionMobileComp;
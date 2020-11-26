import React from "react";
import restaurant_img from "../../../assets/images/restaurant/r4.png";
import whatmenuicon1 from "../../../assets/images/micon1.svg";
import whatmenuicon2 from "../../../assets/images/micon2.svg";
import whatmenuicon3 from "../../../assets/images/micon3.svg";
import locationgray_icon from "../../../assets/images/location-gray.svg";

const RestaurantDetailComp=()=>{
    return(
        <>
            <section>
                <div style={{position:'relative'}} className="row mb-3">
                    <div className="col-sm-12">
                        <img src={restaurant_img} className="img-fluid w-100" alt="Restaurant_image" />
                    </div>
                    <div style={{position:'absolute',bottom:0}} className="row justify-content-between align-items-center m-3">
                        <div className="col-xs-8">
                            <h4 className="text-white">Papomao Beach Tavern</h4>
                            <p className="text-white">
                                <span className="position-relative location-icon">
                                    <img src={locationgray_icon} alt={"locationgray_icon"} className="img-fluid mr-2" />
                                </span>2.5 km from you
                            </p>
                        </div>
                        <div className="col-xs-4">
                            <p className="text-white">4.2</p>
                            <p className="text-white">250 REVIEWS</p>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12">
                        <p >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
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
            </section>
        </>
    )
}

export default RestaurantDetailComp;
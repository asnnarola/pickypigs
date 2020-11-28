import React from "react";
import img1 from "../../../assets/images/restaurant/r2.png";
import accessible_icon from "../../../assets/images/accessible.svg"
import locationgray_icon from "../../../assets/images/location-gray.svg"
import nonveg from "../../../assets/images/non-veg.svg"
import veg from "../../../assets/images/veg.svg"
import './RestaurantFilterBlockMobileComp.scss';
import { Link } from "react-router-dom";

const RestaurantFilterBlockMobileComp=()=>{
    return(
        <>
        <section>
            <div className="filterBlockMobile-content">
                <div className="rs-infoblock">
                    <div className="media">
                        <img src={img1} className="img-fluid rounded mr-3" width="80px" height="80px" alt="user_img"/>
                        <div className="media-body">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <div className="restaurant-details brandon-Medium">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <p className="mb-0">The Barrio  Express</p>
                                        <div className="restaurant-view">
                                            <svg width="13px" height="13px" className="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.095 10.556">
                                                <path id="Path_381" data-name="Path 381" d="M7-2.681,3.57-.588,4.5-4.5,1.456-7.112l4-.322L7-11.144l1.54,3.71,4.011.322L9.5-4.5,10.43-.588Z" transform="translate(-1.456 11.144)" fill="#fff"></path>
                                            </svg>
                                            <span className="view-txt brandon-Medium">3.5</span>
                                        </div>
                                    </div>
                                    <p className="txt-lightgray f-14 d-flex flex-wrap align-items-center mb-2">
                                        <span className="position-relative location-icon">
                                            <img src={locationgray_icon} alt={"locationgray_icon"} className="img-fluid mr-2" />
                                        </span>12.9 km from you 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foodtypes-wrap d-flex mt-3 mb-3">
                        <div className="food-types mr-3 d-flex justify-content-center align-items-center">
                            <img src={accessible_icon} alt={"accessible_icon"} className="img-fluid" />
                        </div>
                        <div className="food-types mr-3 d-flex justify-content-center align-items-center">
                            <img src={nonveg} alt={"nonveg"} className="img-fluid" />
                        </div>
                        <div className="food-types d-flex justify-content-center align-items-center">
                            <img src={veg} alt={"veg"} className="img-fluid" />
                        </div>
                    </div>
                    <div>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate .</p>
                    </div>
                    <div className="border-top mt-2 mb-2"></div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">5 Mins Walk</p>
                        <Link to="/">View Detail</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default RestaurantFilterBlockMobileComp;
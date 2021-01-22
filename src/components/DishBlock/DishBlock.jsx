import React from 'react'
import accessible_icon from "../../assets/images/accessible.svg"
import locationgray_icon from "../../assets/images/location-gray.svg"
import nonveg from "../../assets/images/non-veg.svg"
import veg from "../../assets/images/veg.svg"
import "./DishBlock.scss"
import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import axios from 'axios'

const DishBlock = ({restaurant_Name, restaurant_Pic, kmValue="1", rating="3.1"}) => {
    return (
            <div className="restaurant-wrapper mb-4 pb-2">
                <div className="restaurant-img position-relative">
                    <div className="restaurant-view">
                        <svg width="13px" height="13px" className="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.095 10.556">
                            <path id="Path_381" data-name="Path 381" d="M7-2.681,3.57-.588,4.5-4.5,1.456-7.112l4-.322L7-11.144l1.54,3.71,4.011.322L9.5-4.5,10.43-.588Z" transform="translate(-1.456 11.144)" fill="#fff"></path>
                        </svg>
                        <span className="view-txt text-white brandon-Medium">{rating}</span>
                    </div>
    
                    <img src={restaurant_Pic?restaurant_Pic:restaurant_P1} alt={"restaurant_P1"} className="img-fluid w-100" />
                    
                </div>
                <div className="restaurant-details brandon-Medium">
                    <p className="mb-2">{restaurant_Name}</p>
                    <p className="txt-lightgray f-14 d-flex flex-wrap align-items-center">
                        <span className="position-relative location-icon">
                            <img src={locationgray_icon} alt={"locationgray_icon"} className="img-fluid mr-2" />
                        </span> {kmValue} km from you </p>
                    <div className="foodtypes-wrap d-flex">
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
                </div>
            </div>
    )
}

export default DishBlock

import React from 'react'
import accessible_icon from "../../assets/images/accessible.svg"
import locationgray_icon from "../../assets/images/location-gray.svg"
import nonveg from "../../assets/images/non-veg.svg"
import veg from "../../assets/images/veg.svg"
import "./DishBlock.scss"
import Dummy_Icon from "../../assets/images/dummy_icon.svg"
import { SERVER_URL } from '../../shared/constant'
import Dummy_Image from "../../assets/images/restaurant_default.jpg"



let defaultIcon = [{ name: "Unknown", image: Dummy_Icon }, { name: "Unknown", image: Dummy_Icon }]

const DishBlock = ({ restaurant_name, restaurant_pic, kmvalue, rating, restaurantfeature }) => {
    return (
        <div className="restaurant-wrapper mb-4 pb-2">
            <div className="restaurant-img position-relative">
                {/* <div className="restaurant-view">
                        <svg width="13px" height="13px" className="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.095 10.556">
                            <path id="Path_381" data-name="Path 381" d="M7-2.681,3.57-.588,4.5-4.5,1.456-7.112l4-.322L7-11.144l1.54,3.71,4.011.322L9.5-4.5,10.43-.588Z" transform="translate(-1.456 11.144)" fill="#fff"></path>
                        </svg>
                        <span className="view-txt text-white brandon-Medium">{rating}</span>
                    </div> */}
                {restaurant_pic ?
                    <img src={`${SERVER_URL}/${restaurant_pic}`} alt={restaurant_name} className="img-fluid w-100" />
                    :
                    <img src={Dummy_Image} alt={restaurant_name} className="img-fluid w-100" />
                }

            </div>
            <div className="restaurant-details brandon-Medium">
                {restaurant_name ?
                    <p className="mb-2">{restaurant_name}</p>
                    :
                    <p className="mb-2">Unknown</p>
                }
                <p className="txt-lightgray f-14 d-flex flex-wrap align-items-center">
                    <span className="position-relative location-icon">
                        <img src={locationgray_icon} alt={"locationgray_icon"} className="img-fluid mr-2" />
                    </span>
                    <span>{kmvalue == "null" ? "Not Available" : `${kmvalue} from you `} </span>
                </p>
                <div className="foodtypes-wrap d-flex">
                    {restaurantfeature && restaurantfeature.length > 0 ?
                        <React.Fragment>
                            {restaurantfeature && restaurantfeature.map((data, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="food-types mr-3 d-flex justify-content-center align-items-center">
                                            <img src={`${SERVER_URL}/${data.image}`} alt={"icon"} width="16px" className="img-fluid" title={data.name} />
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {defaultIcon && defaultIcon.map((data, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="food-types mr-3 d-flex justify-content-center align-items-center">
                                            <img src={data.image} alt={"icon"} className="img-fluid" width="16px" title={data.name} />
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </React.Fragment>
                    }


                </div>
            </div>
        </div>
    )
}

export default DishBlock

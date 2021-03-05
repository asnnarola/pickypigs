import React, { useState } from "react";
import { Button, Collapse, Form } from "react-bootstrap";
import './SingleRestaurantDetailComp.scss';

// import restaurant_P8 from "../../assets/images/restaurant/r8.png";
import restaurant_banner from "../../assets/images/restaurant-dish/restaurant-banner.jpg";
import accessible_icon from "../../assets/images/accessible.svg";
import locationgray_icon from "../../assets/images/location-gray.svg";
import nonveg from "../../assets/images/non-veg.svg"
import veg from "../../assets/images/veg.svg";
import clockicon from "../../assets/images/restaurant-dish/clock-icon.svg";
import moment from 'moment';

const SingleRestaurantDetailComp = ({restaurant_distance,restaurant_location,restaurant_name,restaurant_cuisine}) => {
    const [open, setOpen] = useState(false);
    let myDay=moment().format('dddd');
    let myTime=moment();
    const restaurantTime1=`${moment().format('MMMM Do YYYY')}, 7:00 am`;
    const restaurantTime2=`${moment().format('MMMM Do YYYY')}, 9:00 am`;
    const restaurantTime3=`${moment().format('MMMM Do YYYY')}, 12:30 am`;
    const restaurantTime4=`${moment().format('MMMM Do YYYY')}, 11:30 pm`;

    const compareData=(open,close,now)=>{
        // (moment(open, 'MMMM Do YYYY, h:mm a').isValid() && now.isAfter(moment(open, 'MMMM Do YYYY, h:mm a')) )&&(moment(close, 'MMMM Do YYYY, h:mm a').isValid() && now.isBefore(moment(close, 'MMMM Do YYYY, h:mm a')) )?"Open now":">Closed now"
        if(moment(open, 'MMMM Do YYYY, h:mm a').isValid() && now.isAfter(moment(open, 'MMMM Do YYYY, h:mm a')) ){
           if(moment(close, 'MMMM Do YYYY, h:mm a').isValid() && now.isBefore(moment(close, 'MMMM Do YYYY, h:mm a')) ){
                return "Open Now"
           }else{
                return "Closed Now"
        }
        }else{
            return "Closed Now"
        }
    }

    return (
        <>
            <div className="container">
                

                <div className="row">
                    <div className="col-sm-12">
                        <div className="rsbanner-wrapper">
                            <img src={restaurant_banner} alt={"restaurant_banner"} className="w-100 img-fluid" />
                        </div>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="col-md-9 rs-maindetails">
                        <div className="rs-name">
                            <h2 className="mb-2 brandon-Medium text-capitalize">{restaurant_name&&restaurant_name?restaurant_name:'Unknown'}</h2>
                            <p className="rs-dediction d-flex flex-wrap align-items-center mb-2">
                                <span className="rsdediction-location">
                                    <img src={locationgray_icon} alt={"locationgray_icon"} className="img-fluid mr-2" />
                                </span>
                                {restaurant_distance&&restaurant_distance&&restaurant_distance!=="null"?
                                    <span className="rsdediction-km"> {restaurant_distance} from you </span>
                                :
                                    <span className="rsdediction-km"> Not Availabe </span>
                                }
                                <span className="rs-bordertyle ml-2 mr-2"></span>
                                <span className="ml-2 txt-gray">
                                    {restaurant_location&&restaurant_location?restaurant_location:'Na'}
                                </span>
                            </p>
                            {restaurant_cuisine&&restaurant_cuisine.length>0?
                                <React.Fragment>
                                    <p className="txt-lightgray mb-2"><span>
                                        {restaurant_cuisine&&restaurant_cuisine.map((data,index)=>{
                                            return(
                                                <React.Fragment key={index}>
                                                    {index?",":''}{data.name}
                                                </React.Fragment>
                                            )
                                        })}
                                    </span></p>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    <p className="txt-lightgray mb-2"><span>-</span></p>
                                </React.Fragment>
                            }
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
                    <div className="col-md-3 rs-opendropdownwrapper">
                        <div className="rs-opendropdown w-100 position-relative">
                            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className={`d-flex rs-opendropdown-btn w-100 ${open?"active":null}`}>
                                <div className="rs-timeimg mr-3">
                                    <img src={clockicon} alt={"clockicon"} className="img-fluid" />
                                </div>
                                <div className={`text-left ${open ? "" : null}`}>

                                    <p className="mb-1 text-dark">
                                        {
                                        myDay==="Monday"
                                            ?
                                            compareData(restaurantTime2,restaurantTime4,myTime)
                                            :
                                        myDay==="Wednesday"
                                            ?
                                            compareData(restaurantTime2,restaurantTime4,myTime)
                                            :
                                        myDay==="Thursday"
                                            ?
                                            compareData(restaurantTime2,restaurantTime4,myTime)
                                            :
                                        myDay==="Friday"
                                            ?
                                            compareData(restaurantTime2,restaurantTime4,myTime)
                                            :
                                        myDay==="Saturday"
                                            ?
                                            compareData(restaurantTime1,restaurantTime3,myTime)
                                            :
                                        myDay==="Sunday"
                                            ?
                                            compareData(restaurantTime1,restaurantTime3,myTime)
                                            : 
                                            "Today Close"
                                        }
                                    </p>   
                                    
                                    <p className="txt-lightgray mb-0 brandon-Medium">{myDay==="Monday"? "Monday 9:00 am - 11:30 pm"
                                        :myDay==="Tuesday"? "Tuesday Closed / Holiday"
                                        :myDay==="Wednesday"? "Wednesday 9:00 am - 11:30 pm"
                                        :myDay==="Thursday"? "Thursday 9:00 am - 11:30 pm"
                                        :myDay==="Friday"? "Friday 9:00 am to 11:00 pm"
                                        :myDay==="Saturday"? "Saturday 7:00 am to 12:00 am"
                                        :"Sunday 7:00 am to 12:00 am"}
                                    </p>
                                </div>
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <table>
                                        <tbody>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Sunday"&&"pink-txt brandon-Medium"}`}>Sunday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Sunday"&&"pink-txt brandon-Medium"}`}>7:00 am - 12:30 am</p></td></tr>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Monday"&&"pink-txt brandon-Medium"}`}>Monday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Monday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Tuesday"&&"pink-txt brandon-Medium"}`}>Tuesday</p></td><td><p style={{color:'#f545b0'}} className={`txt-lightgray mb-2 ${myDay==="Tuesday"&&"pink-txt brandon-Medium"}`}>Closed / Holiday</p></td></tr>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Wednesday"&&"pink-txt brandon-Medium"}`}>Wednesday&nbsp;&nbsp;</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Wednesday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Thursday"&&"pink-txt brandon-Medium"}`}>Thursday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Thursday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Friday"&&"pink-txt brandon-Medium"}`}>Friday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Friday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                            <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Saturday"&&"pink-txt brandon-Medium"}`}>Saturday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Saturday"&&"pink-txt brandon-Medium"}`}>7:00 am - 12:30 am</p></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleRestaurantDetailComp;
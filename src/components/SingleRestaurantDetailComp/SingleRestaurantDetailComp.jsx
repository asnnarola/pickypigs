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
import Dummy_Icon from "../../assets/images/dummy_icon.svg"
import {SERVER_URL} from '../../shared/constant'
import Dummy_Image from "../../assets/images/restaurant_default.jpg"


let defaultIcon=[{name:"Unknown",image:Dummy_Icon},{name:"Unknown",image:Dummy_Icon}]

const SingleRestaurantDetailComp = ({restaurant_image,restaurant_distance,restaurant_location,restaurant_name,restaurant_cuisine,restaurant_feature,restaurant_time}) => {
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

    function tConv24(time24) {
        var ts = time24;
        var H = +ts.substr(0, 2);
        var h = (H % 12) || 12;
        h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
        var ampm = H < 12 ? " AM" : " PM";
        ts = h + ts.substr(2, 3) + ampm;
        return ts;
      };

      function tConvsmaill24(time24) {
        var ts = time24;
        var H = +ts.substr(0, 2);
        var h = (H % 12) || 12;
        h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
        var ampm = H < 12 ? " am" : " pm";
        ts = h + ts.substr(2, 3) + ampm;
        return ts;
      };

    return (
        <>
            <div className="container">
                

                <div className="row">
                    <div className="col-sm-12">
                        <div className="rsbanner-wrapper">
                        {restaurant_image?
                            <img src={`${SERVER_URL}/${restaurant_image}`}  alt={restaurant_name?restaurant_name:'unknown'} className="img-fluid w-100" />
                        :
                            <img src={Dummy_Image} alt={restaurant_name?restaurant_name:'unknown'}  className="img-fluid w-100"/>
                        }
                            {/* <img src={restaurant_banner} alt={"restaurant_banner"} className="w-100 img-fluid" /> */}
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
                                <span className="ml-2 txt-gray text-capitalize">
                                    {restaurant_location&&restaurant_location?restaurant_location:'Na'}
                                </span>
                            </p>
                            {restaurant_cuisine&&restaurant_cuisine.length>0?
                                <React.Fragment>
                                    <p className="txt-lightgray mb-2 text-capitalize"><span>
                                        {restaurant_cuisine&&restaurant_cuisine.map((data,index)=>{
                                            return(
                                                <React.Fragment key={index}>
                                                    {index?",":''}{data.name?data.name:'Na'}
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
                                {restaurant_feature&&restaurant_feature.length>0?
                                    <React.Fragment>
                                        {restaurant_feature&&restaurant_feature.map((data,index)=>{
                                            return(
                                                <React.Fragment key={index}>
                                                    <div className="food-types mr-3 d-flex justify-content-center align-items-center">
                                                        <img src={`${SERVER_URL}/${data.image}`} alt={"icon"} width="16px" className="img-fluid" title={data.name?data.name:'na'} />
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        {defaultIcon&&defaultIcon.map((data,index)=>{
                                            return(
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
                    <div className="col-md-3 rs-opendropdownwrapper">
                        <div className="rs-opendropdown w-100 position-relative">
                            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className={`d-flex rs-opendropdown-btn w-100 ${open?"active":null}`}>
                                <div className="rs-timeimg mr-3">
                                    <img src={clockicon} alt={"clockicon"} className="img-fluid" />
                                </div>
                                <div className={`text-left ${open ? "" : null}`}>
                                    {restaurant_time&&restaurant_time.time&&restaurant_time.time.length>0?
                                        <React.Fragment>
                                            {restaurant_time&&restaurant_time.time&&restaurant_time.time.map((data,index)=>{
                                                return(
                                                    <React.Fragment key={index}>
                                                        {myDay===data.day?
                                                            <React.Fragment>
                                                                {data&&data.isSelected&&data.isSelected?
                                                                    <React.Fragment>
                                                                        {data&&data.timeList&&data.timeList.length>0?
                                                                            <React.Fragment>
                                                                                {restaurant_time&&restaurant_time.isMultiTime&&restaurant_time.isMultiTime?
                                                                                    <p className="mb-1 text-dark">
                                                                                        {compareData( `${moment().format('MMMM Do YYYY')}, ${data&&data.timeList&&data.timeList[0]&&data.timeList[0].startTime&&tConvsmaill24(data.timeList[0].startTime)}` , `${moment().format('MMMM Do YYYY')}, ${data&&data.timeList&&data.timeList[1]&&data.timeList[1].endTime&&tConvsmaill24(data.timeList[1].endTime)}` , myTime)}
                                                                                    </p>
                                                                                :    
                                                                                    <p className="mb-1 text-dark">
                                                                                        {compareData( `${moment().format('MMMM Do YYYY')}, ${data&&data.timeList&&data.timeList[0]&&data.timeList[0].startTime&&tConvsmaill24(data.timeList[0].startTime)}` , `${moment().format('MMMM Do YYYY')}, ${data&&data.timeList&&data.timeList[0]&&data.timeList[0].endTime&&tConvsmaill24(data.timeList[0].endTime)}` , myTime)}
                                                                                    </p>
                                                                                }
                                                                            </React.Fragment>
                                                                        :
                                                                            null
                                                                        }
                                                                    </React.Fragment>
                                                                :
                                                                    <React.Fragment>
                                                                        <p className="mb-1 text-dark">Today Close</p>
                                                                    </React.Fragment>
                                                                }
                                                            </React.Fragment>
                                                        :
                                                            null
                                                        }
                                                    </React.Fragment>
                                                )
                                            })}
                                        </React.Fragment>
                                    :
                                        <p>No Data Available</p>
                                    }                                    
                                    <div>
                                        {restaurant_time&&restaurant_time.time&&restaurant_time.time.length>0?
                                            <React.Fragment>
                                                {restaurant_time&&restaurant_time.time&&restaurant_time.time.map((data,index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            {myDay===data.day?
                                                                <React.Fragment >
                                                                    <table>
                                                                        <thead>
                                                                            <tr className="vertical-align-top">
                                                                                <td>
                                                                                    <p className="txt-lightgray mb-0 brandon-Medium mr-2">{data.day}</p>
                                                                                    </td><td>
                                                                                    </td><td>
                                                                                    <React.Fragment>
                                                                                        {data&&data.isSelected&&data.isSelected?
                                                                                            <React.Fragment>
                                                                                                {data&&data.timeList&&data.timeList.length>0?
                                                                                                    <React.Fragment>
                                                                                                        {restaurant_time&&restaurant_time.isTime24Hours&&restaurant_time.isTime24Hours?
                                                                                                            <React.Fragment>
                                                                                                                <p className="txt-lightgray mb-0 brandon-Medium">
                                                                                                                    {data&&data.timeList&&data.timeList[0]&&data.timeList[0].startTime?data.timeList[0].startTime:'-'} - {data&&data.timeList&&data.timeList[0]&&data.timeList[0].endTime?data.timeList[0].endTime:'-'}
                                                                                                                </p>
                                                                                                                {restaurant_time&&restaurant_time.isMultiTime&&restaurant_time.isMultiTime?
                                                                                                                    <p className="txt-lightgray mb-0 brandon-Medium">
                                                                                                                        {data&&data.timeList&&data.timeList[1]&&data.timeList[1].startTime?data.timeList[1].startTime:'-'} - {data&&data.timeList&&data.timeList[1]&&data.timeList[1].endTime?data.timeList[1].endTime:'-'}
                                                                                                                    </p>
                                                                                                                :    
                                                                                                                    null
                                                                                                                }
                                                                                                            </React.Fragment>
                                                                                                        :
                                                                                                            <React.Fragment>
                                                                                                                <p className="txt-lightgray mb-0 brandon-Medium">{data&&data.timeList&&data.timeList[0]&&data.timeList[0].startTime?tConv24(data.timeList[0].startTime):'-'} - {data&&data.timeList&&data.timeList[0]&&data.timeList[0].endTime?tConv24(data.timeList[0].endTime):'-'}</p>
                                                                                                                {restaurant_time&&restaurant_time.isMultiTime&&restaurant_time.isMultiTime?
                                                                                                                    <p className="txt-lightgray mb-0 brandon-Medium">{data&&data.timeList&&data.timeList[1]&&data.timeList[1].startTime?tConv24(data.timeList[1].startTime):'-'} - {data&&data.timeList&&data.timeList[1]&&data.timeList[1].endTime?tConv24(data.timeList[1].endTime):'-'}</p>
                                                                                                                :    
                                                                                                                    null
                                                                                                                }
                                                                                                            </React.Fragment>
                                                                                                        }
                                                                                                    </React.Fragment>
                                                                                                    
                                                                                                    :
                                                                                                    null
                                                                                                }
                                                                                            </React.Fragment>
                                                                                            :
                                                                                            <React.Fragment>
                                                                                                <p className="txt-lightgray mb-0 brandon-Medium">
                                                                                                    Closed / Holiday
                                                                                                </p>
                                                                                            </React.Fragment>
                                                                                        }
                                                                                    </React.Fragment>
                                                                                </td>
                                                                            </tr>
                                                                        </thead>
                                                                    </table>
                                                                </React.Fragment>
                                                            :
                                                                null
                                                            }
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </React.Fragment>
                                        :
                                            <p>No Data Available</p>
                                        }

                                    </div>
                                </div>
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <table>
                                        <tbody>
                                            {restaurant_time&&restaurant_time.time&&restaurant_time.time.length>0?
                                                <React.Fragment>
                                                    {restaurant_time&&restaurant_time.time&&restaurant_time.time.map((data,index)=>{
                                                        return(
                                                            <React.Fragment key={index}>
                                                                <tr className="vertical-align-top">
                                                                    <td>
                                                                        <p className={`txt-lightgray mb-2 ${myDay===data.day&&"pink-txt brandon-Medium"}`}>{data.day}</p>
                                                                        </td><td>
                                                                        </td><td>
                                                                        <React.Fragment>
                                                                            {data&&data.isSelected&&data.isSelected?
                                                                                <React.Fragment>
                                                                                    {data&&data.timeList&&data.timeList.length>0?
                                                                                        <React.Fragment>
                                                                                            {restaurant_time&&restaurant_time.isTime24Hours&&restaurant_time.isTime24Hours?
                                                                                                <React.Fragment>
                                                                                                    <p className={`txt-lightgray mb-2 ${myDay===data.day&&"pink-txt brandon-Medium"}`}>
                                                                                                        {data&&data.timeList&&data.timeList[0]&&data.timeList[0].startTime?data.timeList[0].startTime:'-'} - {data&&data.timeList&&data.timeList[0]&&data.timeList[0].endTime?data.timeList[0].endTime:'-'}
                                                                                                    </p>
                                                                                                    {restaurant_time&&restaurant_time.isMultiTime&&restaurant_time.isMultiTime?
                                                                                                        <p className={`txt-lightgray mb-2 ${myDay===data.day&&"pink-txt brandon-Medium"}`}>
                                                                                                            {data&&data.timeList&&data.timeList[1]&&data.timeList[1].startTime?data.timeList[1].startTime:'-'} - {data&&data.timeList&&data.timeList[1]&&data.timeList[1].endTime?data.timeList[1].endTime:'-'}
                                                                                                        </p>
                                                                                                    :    
                                                                                                        null
                                                                                                    }
                                                                                                </React.Fragment>
                                                                                            :
                                                                                                <React.Fragment>
                                                                                                    <p className={`txt-lightgray mb-2 ${myDay===data.day&&"pink-txt brandon-Medium"}`}>{data&&data.timeList&&data.timeList[0]&&data.timeList[0].startTime?tConv24(data.timeList[0].startTime):'-'} - {data&&data.timeList&&data.timeList[0]&&data.timeList[0].endTime?tConv24(data.timeList[0].endTime):'-'}</p>
                                                                                                    {restaurant_time&&restaurant_time.isMultiTime&&restaurant_time.isMultiTime?
                                                                                                        <p className={`txt-lightgray mb-2 ${myDay===data.day&&"pink-txt brandon-Medium"}`}>{data&&data.timeList&&data.timeList[1]&&data.timeList[1].startTime?tConv24(data.timeList[1].startTime):'-'} - {data&&data.timeList&&data.timeList[1]&&data.timeList[1].endTime?tConv24(data.timeList[1].endTime):'-'}</p>
                                                                                                    :    
                                                                                                        null
                                                                                                    }
                                                                                                </React.Fragment>
                                                                                            }
                                                                                        </React.Fragment>
                                                                                        
                                                                                        :
                                                                                        null
                                                                                    }
                                                                                </React.Fragment>
                                                                                :
                                                                                <React.Fragment>
                                                                                    <p className={`txt-lightgray mb-2 ${myDay===data.day&&"pink-txt brandon-Medium"}`}>
                                                                                        Closed / Holiday
                                                                                    </p>
                                                                                </React.Fragment>
                                                                            }
                                                                        </React.Fragment>
                                                                    </td>
                                                                </tr>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </React.Fragment>
                                            :
                                                <p>No Data Available</p>
                                            }
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
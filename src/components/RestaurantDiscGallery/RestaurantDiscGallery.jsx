import React, { useState } from "react";
import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import {SERVER_URL} from '../../shared/constant'
import no_Data_Image from "../../assets/images/no_data_found.png"

import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import "./RestaurantDiscGallery.scss";

const RestaurantDiscGallery = (props) => {

    let resturantData = [{ "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "food" }, { "image": restaurant_P4, "type": "food" }, { "image": restaurant_P5, "type": "ambience" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "ambience" }, { "image": restaurant_P8, "type": "ambience" }, { "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "ambience" }, { "image": restaurant_P4, "type": "ambience" }, { "image": restaurant_P5, "type": "food" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "food" }, { "image": restaurant_P8, "type": "food" }];
    let [value, setValue] = useState('all');

    return (
        <>
            <section>
                {/* {JSON.stringify(props.food)} */}
                <div className="rsdishtabmain-content">
                    <div className="row">
                        <div className="col-lg-3 rsdish-filter">
                            <ul className="rsdish-ul" style={{ position: 'sticky', top: 110, }}>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value === "all" ? 'rsdish-active' : null}`} onClick={() => { setValue("all") }}>
                                        <h6 className="mb-1 brandon-Bold "><b>All</b></h6>
                                        <small className="txt-lightgray">{(props.food&&props.food.length) + (props.ambience&&props.ambience.length)}</small>
                                    </button>
                                </li>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value === "food" ? 'rsdish-active' : null}`} onClick={() => { setValue("food") }}>
                                        <h6 className="mb-1 brandon-Bold "><b>Food</b></h6>
                                        <small className="txt-lightgray">{props.food&&props.food.length}</small>
                                    </button>
                                </li>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value === "ambience" ? 'rsdish-active' : null}`} onClick={() => { setValue("ambience") }}>
                                        <h6 className="mb-1 brandon-Bold"><b>Ambience</b></h6>
                                        <small className="txt-lightgray">{props.ambience&&props.ambience.length}</small>
                                    </button>
                                </li>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value === "videos" ? 'rsdish-active' : null}`} onClick={() => { setValue("videos") }}>
                                        <h6 className="mb-1 brandon-Bold"><b>videos</b></h6>
                                        <small className="txt-lightgray">(159)</small>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9 rsdish-rightcontent">
                            <div>
                                {
                                    value === "all" ?

                                        <div className="row">
                                            <div className="col-sm-12 pl-0 pr-0">
                                                <div className="col-sm-12 pl-0 pr-0">
                                                    <h4 className="text-uppercase mb-4 brandon-Bold txt-darkgreen"><b>ALL</b></h4>
                                                </div>
                                            </div>
                                            <React.Fragment>
                                                <React.Fragment>
                                                    {props.food&&props.food.length>0?
                                                        <React.Fragment>
                                                            {props.food&&props.food.map((data, index) => {
                                                                return (
                                                                    <div key={index} className="col-sm-4 col-md-4 col-lg-3 col-xl-2 pl-0 pr-0 gallery-imgblock">
                                                                        <div className="rsdish-gallery">
                                                                            <img src={`${SERVER_URL}/${data.url}`} alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                            }
                                                        </React.Fragment>
                                                    :
                                                        null
                                                    }
                                                </React.Fragment>
                                                <React.Fragment>
                                                    {props.ambience&&props.ambience.length>0?
                                                        <React.Fragment>
                                                            {props.ambience&&props.ambience.map((data, index) => {
                                                                return (
                                                                    <div key={index} className="col-sm-4 col-md-4 col-lg-3 col-xl-2 pl-0 pr-0 gallery-imgblock">
                                                                        <div className="rsdish-gallery">
                                                                            <img src={`${SERVER_URL}/${data.url}`} alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                            }
                                                        </React.Fragment>
                                                    :
                                                        null
                                                    }
                                                </React.Fragment>
                                            </React.Fragment>
                                            <React.Fragment>
                                                {props.food&&props.food.length>0||props.ambience&&props.ambience.length>0?
                                                    null
                                                :
                                                    <React.Fragment>
                                                        <div className="w-100 d-flex align-items-center justify-content-center">
                                                            <img src={no_Data_Image} className="img-fluid" alt="img"/>
                                                        </div>
                                                    </React.Fragment>

                                                }
                                            </React.Fragment>
                                        </div>

                                        :

                                        value !== "all" && value !== "videos" && value !== "ambience" ?

                                            <div className="row">
                                                <div className="col-sm-12 pl-0 pr-0">
                                                    <div className="col-sm-12 pl-0 pr-0">
                                                        <h4 className="text-uppercase mb-4 brandon-Bold txt-darkgreen"><b>Foods</b></h4>
                                                    </div>
                                                </div>
                                                {props.food&&props.food.length>0?
                                                    <React.Fragment>
                                                        {props.food&&props.food.map((data, index) => {
                                                            return (
                                                                <div key={index} className="col-sm-4 col-md-4 col-lg-3 col-xl-2 pl-0 pr-0 gallery-imgblock">
                                                                    <div className="rsdish-gallery">
                                                                        <img src={`${SERVER_URL}/${data.url}`} alt="" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                        }
                                                    </React.Fragment>
                                                :
                                                    <React.Fragment>
                                                        <div className="w-100 d-flex align-items-center justify-content-center">
                                                            <img src={no_Data_Image} className="img-fluid" alt="img"/>
                                                        </div>
                                                    </React.Fragment>
                                                }
                                            </div>
                                            :

                                            value !== "all" && value !== "videos" && value !== "food" ?
    
                                                <div className="row">
                                                    <div className="col-sm-12 pl-0 pr-0">
                                                        <div className="col-sm-12 pl-0 pr-0">
                                                            <h4 className="text-uppercase mb-4 brandon-Bold txt-darkgreen"><b>Ambience</b></h4>
                                                        </div>
                                                    </div>
                                                    {props.ambience&&props.ambience.length>0?
                                                        <React.Fragment>
                                                            {props.ambience&&props.ambience.map((data, index) => {
                                                                return (
                                                                    <div key={index} className="col-sm-4 col-md-4 col-lg-3 col-xl-2 pl-0 pr-0 gallery-imgblock">
                                                                        <div className="rsdish-gallery">
                                                                            <img src={`${SERVER_URL}/${data.url}`} alt="" className="img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                            }
                                                        </React.Fragment>
                                                    :
                                                        <React.Fragment>
                                                            <div className="w-100 d-flex align-items-center justify-content-center">
                                                                <img src={no_Data_Image} className="img-fluid" alt="img"/>
                                                            </div>
                                                        </React.Fragment>
                                                    }
                                                </div>

                                            :

                                            <div className="row">
                                                <div className="col-sm-12 pl-0 pr-0">
                                                    <div className="col-sm-12 pl-0 pr-0">
                                                        <h4 className="text-uppercase mb-4 brandon-Bold txt-darkgreen"><b>Videos</b></h4>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                                    <Player
                                                        playsInline
                                                        // poster={restaurant_P1}
                                                        src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                                                    />
                                                </div>
                                            </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestaurantDiscGallery;


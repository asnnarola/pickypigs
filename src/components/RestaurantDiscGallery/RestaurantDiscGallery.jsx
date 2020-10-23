import React, { useState } from "react";
import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"

import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import "./RestaurantDiscGallery.scss";

const RestaurantDiscGallery = () => {

    let resturantData = [{ "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "food" }, { "image": restaurant_P4, "type": "food" }, { "image": restaurant_P5, "type": "ambience" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "ambience" }, { "image": restaurant_P8, "type": "ambience" }, { "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "ambience" }, { "image": restaurant_P4, "type": "ambience" }, { "image": restaurant_P5, "type": "food" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "food" }, { "image": restaurant_P8, "type": "food" }];
    let [value, setValue] = useState('all');

    return (
        <>
            <section>
                <div className="rsdishtabmain-content">
                    <div className="row">
                        <div className="col-lg-3 rsdish-filter">
                            <ul className="rsdish-ul">
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value==="all" ? 'rsdish-active' : null}`} onClick={() => { setValue("all") }}>
                                        <h6 class="mb-1 brandon-Bold "><b>All</b></h6>
                                        <small className="txt-lightgray">(159)</small>
                                    </button>
                                </li>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value==="food" ? 'rsdish-active' : null}`} onClick={() => { setValue("food") }}>
                                        <h6 class="mb-1 brandon-Bold "><b>Food</b></h6>
                                        <small className="txt-lightgray">(159)</small>
                                    </button>
                                </li>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value==="ambience" ? 'rsdish-active' : null}`} onClick={() => { setValue("ambience") }}>
                                        <h6 class="mb-1 brandon-Bold"><b>Ambience</b></h6>
                                        <small className="txt-lightgray">(159)</small>
                                    </button>
                                </li>
                                <li className="rsdish-li">
                                    <button className={`d-flex flex-wrap justify-content-between align-items-center ${value==="videos" ? 'rsdish-active' : null}`} onClick={() => { setValue("videos") }}>
                                        <h6 class="mb-1 brandon-Bold"><b>videos</b></h6>
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
                                            {resturantData.map((data, index) => {
                                                return (
                                                    <div key={index} className="col-sm-4 col-md-4 col-lg-3 col-xl-2 pl-0 pr-0">
                                                        <div className="rsdish-gallery">
                                                            <img src={data.image} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>

                                        :

                                        value !== "all" && value !== "videos" ?

                                            <div className="row">
                                                {
                                                    resturantData.filter((data) => {
                                                        return data.type === value
                                                    }).map((data, index) => {
                                                        return (
                                                            <div key={index} className="col-sm-4 col-md-4 col-lg-3 col-xl-2 pl-0 pr-0">
                                                                <div className="rsdish-gallery">
                                                                    <img src={data.image} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            :

                                            <div className="row">
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
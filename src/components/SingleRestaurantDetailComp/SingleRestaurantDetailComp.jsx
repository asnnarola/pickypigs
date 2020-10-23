import React, { useState } from "react";
import { Button, Collapse, Form } from "react-bootstrap"
import './SingleRestaurantDetailComp.scss'

// import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import restaurant_banner from "../../assets/images/restaurant-dish/restaurant-banner.jpg"
import accessible_icon from "../../assets/images/accessible.svg"
import locationgray_icon from "../../assets/images/location-gray.svg"
import nonveg from "../../assets/images/non-veg.svg"
import veg from "../../assets/images/veg.svg"
import clockicon from "../../assets/images/restaurant-dish/clock-icon.svg"

const SingleRestaurantDetailComp = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="container">

                <div className="breadcrumb-wrapper">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>

                <div class="row">
                    <div className="col-sm-12">
                        <div className="rsbanner-wrapper">
                            <img src={restaurant_banner} alt={"restaurant_banner"} className="w-100 img-fluid" />
                        </div>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="col-md-9">
                        <div className="rs-name">
                            <h2 className="mb-2 brandon-Medium">The Barrio Brothers Express</h2>
                            <p className="rs-dediction d-flex flex-wrap align-items-center mb-2">
                                <span className="rsdediction-location">
                                    <img src={locationgray_icon} alt={"locationgray_icon"} className="img-fluid mr-2" />
                                </span>
                                <span className="rsdediction-km"> 1.5 km from you </span>
                                <div class="rs-bordertyle ml-2 mr-2"></div>
                                <span className="ml-2 txt-gray">
                                    Manukau
                                </span>
                            </p>
                            <p className="txt-lightgray mb-2"><span>Steak, American, Italian</span></p>
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
                    <div className="col-md-3">
                        <div className="rs-opendropdown w-100">
                            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className="d-flex rs-opendropdown-btn w-100">
                                <div className="rs-timeimg mr-3">
                                    <img src={clockicon} alt={"clockicon"} className="img-fluid" />
                                </div>
                                <div className="text-left">
                                    <p className="mb-1 text-dark">Open now</p>
                                    <p className="txt-lightgray mb-0">Friday 9:00 am to 11:00 pm</p>
                                </div>
                                {/* {open ? "11111" : "22222"} */}
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <p>Monday  9am–7pm</p>
                                    <p>Tuesday  9am–7pm</p>
                                    <p>Wednesday  9am–7pm</p>
                                    <p>thrusday  9am–7pm</p>
                                    <p>Friday  9am–7pm</p>
                                    <p>Saturday  9am–7pm</p>
                                    <p>Sunday  9am–7pm</p>
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
import React from "react";
import './RestaurantInfoMobileComponent.scss';
import Diningtable from "../../../assets/images/restaurant-dish/diningtable.svg";
import Cuisineicon from "../../../assets/images/restaurant-dish/cuisine-icon.svg";
import infoicon from "../../../assets/images/restaurant-dish/info-icon.svg";
import checkgray from "../../../assets/images/restaurant-dish/check-gray.svg";
import walleticon from "../../../assets/images/restaurant-dish/wallet-icon.svg";
import websiteicon from "../../../assets/images/restaurant-dish/website-icon.svg";
import phoneicon from "../../../assets/images/restaurant-dish/phone-icon.svg";
import location from "../../../assets/images/restaurant-dish/location.svg";
import mapimg from "../../../assets/images/restaurant-dish/map-img.jpg";
import shareicon from "../../../assets/images/restaurant-dish/share-icon.svg";
import getdirection from "../../../assets/images/restaurant-dish/getdirection.svg";
import GoogleMapTestComp from "../../../components/GoogleMapTestComp/GoogleMapTestComp";
import OpentimeMobileComp from "../OpentimeMobileComp/OpentimeMobileComp";
import { SERVER_URL,API_KEY } from '../../../shared/constant'


const RestaurantInfoMobileComponent = () => {
   
    
    return (
        <>
            <section >
                <div className="restaurantDiscInfoMobile-content">
                     <div className="row">
                        <div className="col-sm-12 mb-3">
                            <div className="rs-infoblock d-flex flex-column">
                                <OpentimeMobileComp/>
                                <div className="d-block w-100">
                                    <div className="rs-infoicon mr-3">
                                        <img src={location} className="img-fluid" alt="Diningtable" />
                                    </div>
                                    <div className="rs-infosubwrap pt-1">
                                        <p className="brandon-Medium text-uppercase mb-2">Address</p>
                                    </div>
                                </div>
                                <div className="map-wrapper mb-1 mt-2">
                                    {/* <GoogleMapTestComp/> */}
                                    <GoogleMapTestComp
                                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `100%` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                    {/* <img src={mapimg} className="img-fluid" alt="mapimg" /> */}
                                </div>
                                <p className="address-label mt-2 mb-4 pt-1">
                                    20 Domain Road, Papamoa Beach,
                                        <br></br>
                                        Tauranga 3118, New Zealand
                                    </p>
                                <div className="location-wrapper d-flex justify-content-between align-items-center">
                                    <div className="share-location location-btn">
                                        <a href="#" className="d-inline-flex align-items-center pink-txt">
                                            <img src={shareicon} className="img-fluid mr-3" alt="walleticon" />
                                            <span>Share Location</span>
                                        </a>
                                    </div>
                                    <div className="location-borderstyle"></div>
                                    <div className="get-directions location-btn d-flex justify-content-end pr-2">
                                        <a href="https://www.google.com/maps/dir/21.2072044,72.7522558/21.1593458,72.7522558" target="_blank" className="d-inline-flex align-items-center pink-txt justify-content-end">
                                            <img src={getdirection} className="img-fluid mr-3" alt="walleticon" />
                                            <span>Get Directions</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <div className="rs-infoblock d-flex">
                                <div className="rs-infoicon mr-3">
                                    <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                                </div>
                                <div className="rs-infosubwrap pt-1">
                                    <p className="brandon-Medium text-uppercase mb-2">Book a table</p>
                                    <p className="txt-lightgray mb-2">Reserve your table</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <div className="rs-infoblock d-flex flex-column">
                                    <div className="rs-infoicon mr-3">
                                        <img src={websiteicon} className="img-fluid" alt="websiteicon" />
                                    </div>
                                    <div className="rs-infosubwrap pt-1">
                                        <p className="brandon-Medium text-uppercase mb-2">Website</p>
                                        <p className="txt-lightgray mb-1 d-flex flex-wrap align-items-center">
                                            <span className="txt-lightgray">http://pickypigs.com</span>
                                        </p>
                                    </div>
                                <div className="d-block">
                                    <hr />
                                </div>
                                <div className="mt-1 pt-1">
                                    <div className="rs-infoicon mr-3">
                                        <img src={phoneicon} className="img-fluid" alt="phoneicon" />
                                    </div>
                                    <div className="rs-infosubwrap pt-1">
                                        <p className="brandon-Medium text-uppercase mb-2 pb-1">Contact</p>
                                        <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-start position-relative">
                                            <span className="txt-lightgray mopo-number position-absolute">Mo:</span>
                                            <span className="pl-5 mb-2">+44 793 184 7339</span><span className="pl-5">+91 994 535 2904</span>
                                        </p>
                                        <p className="txt-lightgray mb-0 d-flex flex-wrap align-items-start position-relative">
                                            <span className="txt-lightgray mopo-number position-absolute">Ph:</span>
                                            <span className="pl-5 mb-2">+44 1234 567 890</span>
                                            <span className="pl-5">+44 1234 567 890</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <div className="rs-infoblock d-flex flex-column">
                                <div>
                                    <div className="rs-infoicon mr-3">
                                        <img src={Cuisineicon} className="img-fluid" alt="Cuisine" />
                                    </div>
                                    <div className="rs-infosubwrap pt-1">
                                        <p className="brandon-Medium text-uppercase mb-2">Cuisine</p>
                                        <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3">
                                            <span className="cuisine-label">Steak</span>
                                            <span className="cuisine-label">Fast Food</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <hr />
                                </div>
                                <div className="mt-1 pt-1">
                                    <div className="rs-infoicon mr-3">
                                        <img src={infoicon} className="img-fluid" alt="infoicon" />
                                    </div>
                                    <div className="rs-infosubwrap pt-1">
                                        <p className="brandon-Medium text-uppercase mb-2">Other info</p>
                                        <ul className="otherinfo-list pt-1 pl-0 mb-0">
                                            <li className="otherinfo-li postion-relative d-flex align-items-center mt-1 mb-2">
                                                <img width="15px" src={checkgray} className="img-fluid position-absolute" alt="checkgray" />
                                                <span className="pl-4 txt-lightgray">Home Delivery</span>
                                            </li>
                                            <li className="otherinfo-li postion-relative d-flex align-items-center mt-1 mb-2">
                                                <img width="15px" src={checkgray} className="img-fluid position-absolute" alt="checkgray" />
                                                <span className="pl-4 txt-lightgray">Free Parking</span>
                                            </li>
                                            <li className="otherinfo-li postion-relative d-flex align-items-center mt-1 mb-2">
                                                <img width="15px" src={checkgray} className="img-fluid position-absolute" alt="checkgray" />
                                                <span className="pl-4 txt-lightgray">Indoor Seating</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <div className="rs-infoblock d-flex flex-column">
                                <div className="rs-infoicon mr-3">
                                    <img src={walleticon} className="img-fluid" alt="walleticon" />
                                </div>
                                <div className="rs-infosubwrap pt-1">
                                    <p className="brandon-Medium text-uppercase mb-2 pb-1">Avg.Cost</p>
                                    <p className="txt-lightgray mb-2 pb-1">$100 for two people (approx.)</p>
                                    <p className="txt-lightgray mb-2 pb-1">Excl. taxes and charges if any.</p>
                                    <p className="txt-lightgray mb-2 pb-1">Cash and Card accepted.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <div className="rs-infoblock d-flex flex-column">
                                <p>Have You Been To This Restaurant</p>
                                <div>
                                                
                                </div>
                                <p>How Would You like to rate the Restaurant</p>
                                <div className="location-wrapper d-flex justify-content-between align-items-center">
                                    <div className="share-location location-btn">
                                        <a href="#" className="d-inline-flex align-items-center pink-txt">
                                            <img src={shareicon} className="img-fluid mr-3" alt="walleticon" />
                                            <span>Share Location</span>
                                        </a>
                                    </div>
                                    <div className="location-borderstyle"></div>
                                    <div className="get-directions location-btn d-flex justify-content-end pr-2">
                                        <a href="https://www.google.com/maps/dir/21.2072044,72.7522558/21.1593458,72.7522558" target="_blank" className="d-inline-flex align-items-center pink-txt justify-content-end">
                                            <img src={getdirection} className="img-fluid mr-3" alt="walleticon" />
                                            <span>Get Directions</span>
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}

export default RestaurantInfoMobileComponent;

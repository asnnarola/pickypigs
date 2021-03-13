import React from "react";
import './RestaurantDiscInfo.scss';
import Diningtable from "../../assets/images/restaurant-dish/diningtable.svg";
import Cuisineicon from "../../assets/images/restaurant-dish/cuisine-icon.svg";
import infoicon from "../../assets/images/restaurant-dish/info-icon.svg";
import checkgray from "../../assets/images/restaurant-dish/check-gray.svg";
import walleticon from "../../assets/images/restaurant-dish/wallet-icon.svg";
import websiteicon from "../../assets/images/restaurant-dish/website-icon.svg";
import phoneicon from "../../assets/images/restaurant-dish/phone-icon.svg";
import location from "../../assets/images/restaurant-dish/location.svg";
import mapimg from "../../assets/images/restaurant-dish/map-img.jpg";
import shareicon from "../../assets/images/restaurant-dish/share-icon.svg";
import socialshareicon from "../../assets/images/share.svg";
import getdirection from "../../assets/images/restaurant-dish/getdirection.svg";
import GoogleMapTestComp from "../GoogleMapTestComp/GoogleMapTestComp";
import {FacebookShareButton,TwitterShareButton} from "react-share";
import { SERVER_URL,API_KEY } from '../../shared/constant'


const RestaurantDiscInfo = ({rest_about,rest_address,rest_cuisine,rest_other,rest_cost,rest_website,rest_contact,rest_booking,rest_social,rest_applies}) => {
    const shareUrl = window.location.href;
    const shareTitle = "Share Restaurant Location";

    return (
        <>
            <section >
                <div className="tabmain-content">
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <p className="rs-infosdetail">
                                {rest_about&&rest_about?rest_about:"Currently Restaurant Info Not Available"}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
                            <div className="row">
                                <div className="col-sm-12 mb-3">
                                    <div className="rs-infoblock d-flex">
                                        <div className="rs-infoicon mr-3">
                                            <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                                        </div>
                                        <div className="rs-infosubwrap pt-1">
                                            <p className="brandon-Medium text-uppercase mb-2">Book a table</p>
                                            {rest_booking&&rest_booking.isAvailable?
                                                <React.Fragment>
                                                    <p className="txt-lightgray mb-2">Reserve your table</p>
                                                    {rest_booking&&rest_booking.isWebsite?
                                                        <React.Fragment>
                                                            {rest_booking&&rest_booking.websiteUrl&&rest_booking.websiteUrl.length>0?
                                                                <React.Fragment>
                                                                    {rest_booking&&rest_booking.websiteUrl&&rest_booking.websiteUrl.map((data,index)=>{
                                                                        return(
                                                                            <React.Fragment key={index}>
                                                                                <span className="cuisine-label">{data?data:'Na'}</span>
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </React.Fragment>
                                                            :
                                                                null
                                                            }
                                                            
                                                        </React.Fragment>
                                                    :
                                                        null
                                                    }
                                                </React.Fragment>
                                            :
                                                <p className="txt-lightgray mb-2">Not Available</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="rs-infoblock d-flex flex-column">
                                        <div>
                                            <div className="rs-infoicon mr-3">
                                                <img src={Cuisineicon} className="img-fluid" alt="Cuisine" />
                                            </div>
                                            <div className="rs-infosubwrap pt-1">
                                                <p className="brandon-Medium text-uppercase mb-2">Cuisine</p>
                                                    {rest_cuisine&&rest_cuisine.length>0?
                                                        <React.Fragment>
                                                            <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3">
                                                                {rest_cuisine&&rest_cuisine.map((data,index)=>{
                                                                    return(
                                                                        <React.Fragment key={index}>
                                                                            <span className="cuisine-label text-capitalize">{data.name?data.name:'Na'}</span>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </p>
                                                        </React.Fragment>
                                                    :
                                                        <React.Fragment>
                                                            <p className="txt-lightgray mb-2">Not Available</p>
                                                        </React.Fragment>
                                                    }
                                                
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
                                                    {rest_other&&rest_other.length>0?
                                                        <React.Fragment>
                                                            {rest_other&&rest_other.map((data,index)=>{
                                                                return(
                                                                    <React.Fragment key={index}>
                                                                        <li className="otherinfo-li postion-relative d-flex align-items-center mt-1 mb-2">
                                                                            <img width="15px" src={checkgray} className="img-fluid position-absolute" alt="checkgray" />
                                                                            <span className="pl-4 txt-lightgray text-capitalize">{data.name?data.name:'Unknown'}</span>
                                                                        </li>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                            {rest_applies&&rest_applies.length>0?
                                                                <React.Fragment>
                                                                    {rest_applies&&rest_applies.map((data,index)=>{
                                                                        return(
                                                                            <React.Fragment key={index}>
                                                                                {data&&data?
                                                                                    <li className="otherinfo-li postion-relative d-flex align-items-center mt-1 mb-2">
                                                                                        <img width="15px" src={checkgray} className="img-fluid position-absolute" alt="checkgray" />
                                                                                        <span className="pl-4 txt-lightgray text-capitalize">{data?data:''}</span>
                                                                                    </li>
                                                                                :
                                                                                    null
                                                                                }
                                                                            </React.Fragment>
                                                                        )
                                                                    })}
                                                                </React.Fragment>
                                                                :
                                                                null
                                                            }
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <li className="otherinfo-li postion-relative d-flex align-items-center mt-1 mb-2">
                                                                <span className="txt-lightgray">Not Available</span>
                                                            </li>
                                                        </React.Fragment>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
                            <div className="row">
                                <div className="col-sm-12 mb-3">
                                    <div className="rs-infoblock d-flex flex-column">
                                        <div className="rs-infoicon mr-3">
                                            <img src={walleticon} className="img-fluid" alt="walleticon" />
                                        </div>
                                        <div className="rs-infosubwrap pt-1">
                                            <p className="brandon-Medium text-uppercase mb-2 pb-1">Avg.Cost</p>
                                                {rest_cost?
                                                    <React.Fragment>
                                                        {rest_cost&&rest_cost.averageCostOfTwoPerson?
                                                            <p className="txt-lightgray mb-2 pb-1">${rest_cost.averageCostOfTwoPerson} for two people (approx.)</p>
                                                        :
                                                            <p className="txt-lightgray mb-2 pb-1">Average Cost not available.</p>

                                                        }
                                                        {rest_cost&&rest_cost.inclusiveTaxesAndCharges?
                                                            <p className="txt-lightgray mb-2 pb-1">Excl. taxes and charges if any.</p>
                                                        :
                                                            null
                                                        }
                                                        {rest_cost&&rest_cost.cardAccept?
                                                            <p className="txt-lightgray mb-2 pb-1">Card accepted.</p>
                                                        :
                                                            null
                                                        }
                                                        {rest_cost&&rest_cost.cashAccept?
                                                            <p className="txt-lightgray mb-2 pb-1">Cash accepted.</p>
                                                        :
                                                            null
                                                        }
                                                    </React.Fragment>
                                                :
                                                <p className="txt-lightgray mb-2">Not Available</p>

                                                }
                                        </div>
                                        <div className="d-block">
                                            <hr />
                                        </div>
                                        <div className="mt-1 pt-1">
                                            <div className="rs-infoicon mr-3">
                                                <img src={websiteicon} className="img-fluid" alt="websiteicon" />
                                            </div>
                                            <div className="rs-infosubwrap pt-1">
                                                <p className="brandon-Medium text-uppercase mb-2">Website</p>
                                                {rest_website&&rest_website.isAddToProfilePage?
                                                    <React.Fragment>
                                                        {rest_website&&rest_website.websiteUrl&&rest_website.websiteUrl.length>0?
                                                            <React.Fragment>
                                                                {rest_website&&rest_website.websiteUrl&&rest_website.websiteUrl.map((data,index)=>{
                                                                    return(
                                                                        <React.Fragment key={index}>
                                                                            <p className="txt-lightgray mb-1 d-flex flex-wrap align-items-center">
                                                                                <span className="txt-lightgray">{data?data:'-'}</span>
                                                                            </p>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                                
                                                            </React.Fragment>
                                                            :
                                                            <p className="txt-lightgray mb-1 d-flex flex-wrap align-items-center">
                                                                <span className="txt-lightgray">Not Available</span>
                                                            </p>
                                                        }

                                                    </React.Fragment>
                                                    :
                                                    <p className="txt-lightgray mb-1 d-flex flex-wrap align-items-center">
                                                        <span className="txt-lightgray">Not Available</span>
                                                    </p>
                                                }
                                                
                                            </div>
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
                                                {rest_booking&&rest_booking.isCall?
                                                    <React.Fragment>
                                                        <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-start position-relative">
                                                            <span className="txt-lightgray mopo-number position-absolute">Mo:</span>
                                                            {rest_contact&&rest_contact.mobileNumber?
                                                                <span className="pl-5 mb-2">{rest_contact.mobileNumber}</span>
                                                            :
                                                                <span className="pl-5 mb-2">Not Available</span>
                                                            }
                                                        </p>
                                                        <p className="txt-lightgray mb-0 d-flex flex-wrap align-items-start position-relative">
                                                            <span className="txt-lightgray mopo-number position-absolute">Ph:</span>
                                                            {/* {rest_contact&&rest_contact.phoneNumber?
                                                                <span className="pl-5 mb-2">{rest_contact.phoneNumber}</span>
                                                            :
                                                                null
                                                            } */}
                                                            {rest_booking&&rest_booking.isCall?
                                                                <React.Fragment>
                                                                    {rest_booking&&rest_booking.phoneNumber&&rest_booking.phoneNumber.length>0?
                                                                        <React.Fragment>
                                                                            {rest_booking&&rest_booking.phoneNumber&&rest_booking.phoneNumber.map((data,index)=>{
                                                                                return(
                                                                                    <React.Fragment key={index}>
                                                                                        <span className="pl-5 mb-2">+44 {data?data:'-'}</span>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })}
                                                                        </React.Fragment>
                                                                        :
                                                                        <span className="pl-5 mb-2">Not Available</span>
                                                                }
                                                                </React.Fragment>
                                                            :
                                                                null
                                                            }
                                                        
                                                        </p>
                                                    </React.Fragment>
                                                :
                                                    <p className="txt-lightgray mb-2">Reserve your table</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
                            <div className="row">
                                <div className="col-sm-12 mb-3">
                                    <div className="rs-infoblock d-flex flex-column">
                                        <div className="d-block w-100">
                                            <div className="rs-infoicon mr-3">
                                                <img src={location} className="img-fluid" alt="Diningtable" />
                                            </div>
                                            <div className="rs-infosubwrap pt-1">
                                                <p className="brandon-Medium text-uppercase mb-2">Address</p>
                                            </div>
                                        </div>
                                        {rest_address&&rest_address.addLocationMap&&rest_address.addLocationMap?
                                       
                                            <div className="map-wrapper mb-1 mt-2">
                                                {/* <GoogleMapTestComp/> */}
                                                <GoogleMapTestComp
                                                    coordinate={rest_address&&rest_address.map&&rest_address.map.coordinates?rest_address.map.coordinates:''}
                                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                                    loadingElement={<div style={{ height: `100%` }} />}
                                                    containerElement={<div style={{ height: `100%` }} />}
                                                    mapElement={<div style={{ height: `100%` }} />}
                                                />
                                                {/* <img src={mapimg} className="img-fluid" alt="mapimg" /> */}
                                            </div>
                                        :
                                            <p className="txt-lightgray mb-2">Address not Available</p>
                                        }
                                        {rest_address&&rest_address.googleAddress?
                                            <p className="address-label mt-2 mb-4 pt-1"><br></br>{rest_address.googleAddress}</p>
                                            :
                                            null

                                        }
                                            
                                        <div className="location-wrapper d-flex justify-content-between align-items-center">
                                            {rest_address&&rest_address.shareLocationOption&&rest_address.shareLocationOption?
                                                <React.Fragment>
                                                    <div className="share-location location-btn">
                                                        <a href="#" className="d-inline-flex align-items-center pink-txt">
                                                            <img src={shareicon} className="img-fluid mr-3" alt="walleticon" />
                                                            <span>Share Location</span>
                                                        </a>
                                                    </div>
                                                </React.Fragment>
                                            :
                                                <small>Location Share Not available</small>
                                            }
                                            <div className="location-borderstyle"></div>
                                            {rest_address&&rest_address.getDirectionOption&&rest_address.getDirectionOption?
                                                <div className="get-directions location-btn d-flex justify-content-end pr-2">
                                                    <a href="https://www.google.com/maps/dir/21.2072044,72.7522558/21.1593458,72.7522558" target="_blank" className="d-inline-flex align-items-center pink-txt justify-content-end">
                                                        <img src={getdirection} className="img-fluid mr-3" alt="walleticon" />
                                                        <span>Get Directions</span>
                                                    </a>
                                                </div>
                                            :
                                                <small >Direction Not available</small>
                                            }
                                        </div>
                                            
                                        {/* <div className="social-wrapper">
                                            <div className="d-block w-100 mb-3">
                                                <div className="rs-infoicon mr-3">
                                                    <img src={location} className="img-fluid" alt="Diningtable" />
                                                </div>
                                                <div className="rs-infosubwrap pt-1">
                                                    <p className="brandon-Medium text-uppercase mb-2">Social</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <FacebookShareButton className="btn-twitter" url={shareUrl} title={shareTitle}>
                                                        <span>Facebook</span>
                                                    </FacebookShareButton>
                                                </div>
                                                <div>
                                                    <TwitterShareButton className="btn-twitter" url={shareUrl} title={shareTitle}>
                                                        <span>Twitter</span>
                                                    </TwitterShareButton>
                                                </div>
                                            </div>
                                        </div> */}
                                        

                                        <div className="sharesocial-link">
                                            <div className="sharesocial-title">
                                                <img src={socialshareicon} className="img-fluid" />
                                                <h6 className="mb-0">SOCIAL</h6>
                                            </div>
                                            {rest_social&&rest_social.isAvailable?
                                                <React.Fragment>
                                                    <div className="sharesocial-linkbtn">
                                                        <p className="brandon-Medium mb-0">Facebook</p>
                                                        {rest_social&&rest_social.isFacebook?
                                                            <React.Fragment>
                                                                {rest_social&&rest_social.facebookUrl&&rest_social.facebookUrl.length>0?
                                                                    <React.Fragment>
                                                                        {rest_social&&rest_social.facebookUrl&&rest_social.facebookUrl.map((data,index)=>{
                                                                            return(
                                                                                <React.Fragment key={index}>
                                                                                    <span className="txt-lightgray">{data?data:"www.facebook.com"}</span>
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </React.Fragment>
                                                                :
                                                                    <p className="txt-lightgray mb-2">Not Available</p>
                                                                }
                                                            </React.Fragment>
                                                        :
                                                            <p className="txt-lightgray mb-2">Not Available</p>
                                                        }
                                                    </div>
                                                    <div className="sharesocial-linkbtn">
                                                        <p className="brandon-Medium mb-0 mt-2">Twitter</p>
                                                        {rest_social&&rest_social.isTwitter?
                                                            <React.Fragment>
                                                                {rest_social&&rest_social.twitterUrl&&rest_social.twitterUrl.length>0?
                                                                    <React.Fragment>
                                                                        {rest_social&&rest_social.twitterUrl&&rest_social.twitterUrl.map((data,index)=>{
                                                                            return(
                                                                                <React.Fragment key={index}>
                                                                                    <span className="txt-lightgray">{data?data:"www.twitter.com"}</span>
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </React.Fragment>
                                                                :
                                                                    <p className="txt-lightgray mb-2">Not Available</p>
                                                                }
                                                            </React.Fragment>
                                                        :
                                                            <p className="txt-lightgray mb-2">Not Available</p>
                                                        }
                                                    </div>
                                                    <div className="sharesocial-linkbtn">
                                                        <p className="brandon-Medium mb-0 mt-2">Instagram</p>
                                                        {rest_social&&rest_social.isInstagram?
                                                            <React.Fragment>
                                                                {rest_social&&rest_social.instagramUrl&&rest_social.instagramUrl.length>0?
                                                                    <React.Fragment>
                                                                        {rest_social&&rest_social.instagramUrl&&rest_social.instagramUrl.map((data,index)=>{
                                                                            return(
                                                                                <React.Fragment key={index}>
                                                                                    <span className="txt-lightgray">{data?data:"www.instagram.com"}</span>
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </React.Fragment>
                                                                :
                                                                    <p className="txt-lightgray mb-2">Not Available</p>
                                                                }
                                                            </React.Fragment>
                                                        :
                                                            <p className="txt-lightgray mb-2">Not Available</p>
                                                        }
                                                    </div>

                                                </React.Fragment>
                                            :
                                                <p className="txt-lightgray mb-2">Not Available</p>
                                            }

                                            
                                        </div>
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

export default RestaurantDiscInfo;

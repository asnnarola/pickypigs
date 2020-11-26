import React from "react";
import disc_1 from "../../../assets/images/restaurant/r1.png";
import disc_2 from "../../../assets/images/restaurant/r2.png";
import disc_3 from "../../../assets/images/restaurant/r3.png";
import disc_4 from "../../../assets/images/restaurant/r4.png";
import disc_5 from "../../../assets/images/restaurant/r5.png";
import './SingleGalleryMobileComp.scss';


const SingleGalleryMobileComp=(props)=>{
    return(
        <>
        <section>
            <div className="singleGalleryMobile-content">
               <div className="rs-infoblock">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="d-flex align-items-center">
                            <img src={props.icon} className="img-fluid mr-3" alt="Diningtable" />
                            <span>{props.heading}</span>
                        </div>
                        <button>Sell All</button>
                    </div>
                    <div className="border-bottom mt-2 mb-2"></div>
                    <div>
                        <div className="row">
                            <div className="col-6 pl-0 pr-0 ">
                                <div className="rsdish-gallery">
                                    <img src={disc_2} className="img-fluid" alt="img" />
                                </div>
                            </div>
                            <div  className="col-6 pl-0 pr-0">
                                <div className="d-flex flex-wrap">
                                    <div className="">
                                        <div className="rsdish-gallery-small">
                                            <img src={disc_1} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="rsdish-gallery-small">
                                            <img src={disc_3} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="rsdish-gallery-small">
                                            <img src={disc_4} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="rsdish-gallery-small">
                                            <img src={disc_5} className="img-fluid" alt="img" />
                                        </div>
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

export default SingleGalleryMobileComp;
import React from "react";
import SingleGalleryMobileComp from "../SingleGalleryMobileComp/SingleGalleryMobileComp";
import Diningtable from "../../../assets/images/restaurant-dish/diningtable.svg";

import './RestaurantGalleeryMobileComp.scss';

const RestaurantGalleeryMobileComp=()=>{
    return(
        <>
        <section>
            <div className="">
                <div className="row">
                    <div className="col-12 mb-3">
                        <SingleGalleryMobileComp icon={Diningtable} heading={"Restaurant Ambience"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <SingleGalleryMobileComp icon={Diningtable} heading={"Foods"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <SingleGalleryMobileComp icon={Diningtable} heading={"Videos"}/>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default RestaurantGalleeryMobileComp;
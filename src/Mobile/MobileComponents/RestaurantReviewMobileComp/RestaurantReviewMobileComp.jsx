import React from "react";
import SingleReviewMobileComp from "../SingleReviewMobileComp/SingleReviewMobileComp";
import './RestaurantReviewMobileComp.scss';

const RestaurantReviewMobileComp=()=>{
    return(
        <>
        <section>
            <div className="">
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <SingleReviewMobileComp/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <SingleReviewMobileComp/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <SingleReviewMobileComp/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <SingleReviewMobileComp/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mb-3">
                        <SingleReviewMobileComp/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default RestaurantReviewMobileComp;
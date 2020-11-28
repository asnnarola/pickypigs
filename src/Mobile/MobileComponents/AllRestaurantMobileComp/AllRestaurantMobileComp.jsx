import React from "react";
import RestaurantFilterBlockMobileComp from "../RestaurantFilterBlockMobileComp/RestaurantFilterBlockMobileComp";
import './AllRestaurantMobileComp.scss';

const AllRestaurantMobileComp=()=>{
    return(
        <>
        <section >
            <div className="">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <p className="mb-0">54 Restaurant</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mr-1">Short&nbsp;by</p>
                        <select className="custom-select">
                            <option value="">Short by</option>
                            <option value="1">Distance</option>
                            <option value="2">Relevance</option>
                            <option value="3">Low Price</option>
                            <option value="4">High Price</option>
                            <option value="5" >Top Rated</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <RestaurantFilterBlockMobileComp/>
                    </div>
                </div>
               
            </div>
        </section>
        </>
    )
}

export default AllRestaurantMobileComp;
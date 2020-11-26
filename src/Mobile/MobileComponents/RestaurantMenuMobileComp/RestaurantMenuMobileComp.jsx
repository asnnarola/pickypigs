import React from "react";
import './RestaurantMenuMobileComp.scss';
import walleticon from "../../../assets/images/restaurant-dish/wallet-icon.svg";
import MenuAccordianMobileComp from "../MenuAccordianMobileComp/MenuAccordianMobileComp";
import TopPickSliderMobileComp from "../TopPickSliderMobileComp/TopPickSliderMobileComp";
import MenuRecommMobileComp from "../MenuRecommMobileComp/MenuRecommMobileComp";

const RestaurantMenuMobileComp=()=>{
    return(
        <>
            <section>
                <div className="restaurantMenuMobile-content">
                    <div>
                        <p>Top Picks</p>
                        <TopPickSliderMobileComp/>
                    </div>
                    <div>
                        <p>Recommended</p>
                        <MenuRecommMobileComp/>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <MenuAccordianMobileComp/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <MenuAccordianMobileComp/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <MenuAccordianMobileComp/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestaurantMenuMobileComp;
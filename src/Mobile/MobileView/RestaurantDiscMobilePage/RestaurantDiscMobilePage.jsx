import React, { useState } from "react";
import RestaurantDetailMobileComp from "../../MobileComponents/RestaurantDetailMobileComp/RestaurantDetailMobileComp";
import RestaurantGalleeryMobileComp from "../../MobileComponents/RestaurantGalleeryMobileComp/RestaurantGalleeryMobileComp";
import RestaurantInfoMobileComponent from "../../MobileComponents/RestaurantInfoMobileComponent/RestaurantInfoMobileComponent";
import RestaurantMenuMobileComp from "../../MobileComponents/RestaurantMenuMobileComp/RestaurantMenuMobileComp";
import RestaurantReviewMobileComp from "../../MobileComponents/RestaurantReviewMobileComp/RestaurantReviewMobileComp";
import './RestaurantDiscMobilePage.scss';




const RestaurantDiscMobilePage = () => {

    let [mobileTabs, setMobileTabs] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    });

    return (
            <>
                <section style={{marginTop:90}}>
                    <div className="container">
                        <RestaurantDetailMobileComp/>
                        <div className="row mt-5">
                            <div className="col-sm-12">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <button className={`mr-2 brandon-Bold text-uppercase ${mobileTabs.tab1 ? 'active' : null}`} onClick={() => { setMobileTabs({ tab1: true, tab2: false, tab3: false,tab4: false }) }}>Restaurant Info</button>
                                        <button className={`mr-2 brandon-Bold text-uppercase ${mobileTabs.tab2 ? 'active' : null}`} onClick={() => { setMobileTabs({ tab1: false, tab2: true, tab3: false,tab4: false }) }}>Menu</button>
                                        <button className={`mr-2 brandon-Bold text-uppercase ${mobileTabs.tab3 ? 'active' : null}`} onClick={() => { setMobileTabs({ tab1: false, tab2: false, tab3: true,tab4: false }) }}>Review</button>
                                        <button className={`mr-2 brandon-Bold text-uppercase ${mobileTabs.tab4 ? 'active' : null}`} onClick={() => { setMobileTabs({ tab1: false, tab2: false, tab3: false,tab4: true }) }}>Gallery</button>
                                    </div>
                                    
                                </div>
                                <br></br>
                                {mobileTabs.tab1 ?
                                    <section> <RestaurantInfoMobileComponent/> </section>
                                    :

                                    mobileTabs.tab2 ?
                                        <section> <RestaurantMenuMobileComp/> </section>
                                        :
                                        mobileTabs.tab3 ?
                                        <section> <RestaurantReviewMobileComp/> </section>
                                        :
                                        <section> <RestaurantGalleeryMobileComp/> </section>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

export default RestaurantDiscMobilePage;
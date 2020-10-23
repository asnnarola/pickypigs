import React, { useState } from "react";
import './RestaurantDiscPage.scss';

import SingleRestaurantDetailComp from "../../components/SingleRestaurantDetailComp/SingleRestaurantDetailComp";
import RestaurantDiscInfo from "../../components/RestaurantDiscInfo/RestaurantDiscInfo";
import RestaurantDiscMenu from "../../components/RestaurantDiscMenu/RestaurantDiscMenu";
import RestaurantDiscGallery from "../../components/RestaurantDiscGallery/RestaurantDiscGallery";

const RestaurantDiscPage = () => {
    let [tabs, setTabs] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
    });
    return (
        <>
            <section className="restaurantdisc-wrapper">
                <SingleRestaurantDetailComp />
                {/* <small>{JSON.stringify(tabs)}</small> */}
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <div className="rstab-subhead d-flex justifu-content-between align-items-center">
                                <div className="rstab-lists d-flex flex-wrap align-items-center">
                                    <button className={`rstab-btn mr-5 brandon-Bold text-uppercase ${tabs.tab1 ? 'active' : null}`} onClick={() => { setTabs({ tab1: true, tab2: false, tab3: false }) }}>Info</button>
                                    <button  className={`rstab-btn mr-5 brandon-Bold text-uppercase ${tabs.tab2 ? 'active' : null}`} onClick={() => { setTabs({ tab1: false, tab2: true, tab3: false }) }}>Menu</button>
                                    <button  className={`rstab-btn mr-5 brandon-Bold text-uppercase ${tabs.tab3 ? 'active' : null}`} onClick={() => { setTabs({ tab1: false, tab2: false, tab3: true }) }}>Gallery</button>
                                </div>
                            </div>
                            <br></br>
                            {tabs.tab1 ?
                                    <section><RestaurantDiscInfo/></section>
                                :

                                tabs.tab2 ?
                                    <section><RestaurantDiscMenu/></section>
                                    :

                                    <section><RestaurantDiscGallery/></section>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
        </>
    )
}

export default RestaurantDiscPage;
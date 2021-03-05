import React, { useEffect, useState } from "react";
import './RestaurantDiscPage.scss';

import SingleRestaurantDetailComp from "../../components/SingleRestaurantDetailComp/SingleRestaurantDetailComp";
import RestaurantDiscInfo from "../../components/RestaurantDiscInfo/RestaurantDiscInfo";
import RestaurantDiscMenu from "../../components/RestaurantDiscMenu/RestaurantDiscMenu";
import RestaurantDiscGallery from "../../components/RestaurantDiscGallery/RestaurantDiscGallery"; 

import { Button, Nav, Form, Navbar, Modal } from 'react-bootstrap'
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import search_icon from "../../assets/images/search_icon.svg"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRestaurantDetailInfoData } from "../../redux/actions/dishAction";
import CustomLoadingComp from "../../components/CustomLoadingComp/CustomLoadingComp";


const RestaurantDiscPage = () => {
    const dispatch=useDispatch();
    const params=useParams();
    let restaurantId=params.restId;

    let [tabs, setTabs] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
    });

    useEffect(()=>{
        dispatch(getSelectedRestaurantDetailInfoData(restaurantId,{userCoordinates:[21.096612, 72.650754]} ))
    },[dispatch]);

    const restaurant_data=useSelector((state)=>{
        return state.dishes.selectedRestaurantDetail_Data
    })

    let myLoading = useSelector((state) => {
        return state.dishes.isResturantLoading
    });

    return (
        <><React.Fragment>
                <React.Fragment>
                    {myLoading&&myLoading?
                        <CustomLoadingComp/>
                    :
                        null
                    }
                </React.Fragment>
                {JSON.stringify(restaurant_data&&restaurant_data)}
                
                <section className="restaurantdisc-wrapper">
                    <div className="container">
                        <div className="breadcrumb-wrapper">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Restaurants</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">The Barrio Brothers Express</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <SingleRestaurantDetailComp
                            restaurant_name={restaurant_data&&restaurant_data.name?restaurant_data.name:''} 
                            restaurant_location={restaurant_data&&restaurant_data.address&&restaurant_data.address.street?restaurant_data.address.street:''} 
                            restaurant_distance={restaurant_data&&restaurant_data.distance&&restaurant_data.distance.text?restaurant_data.distance.text:''} 
                            restaurant_cuisine={restaurant_data&&restaurant_data.restaurantFeatures&&restaurant_data.restaurantFeatures.cuisineTypeList?restaurant_data.restaurantFeatures.cuisineTypeList:[]}
                            
                     />
                    {/* <small>{JSON.stringify(tabs)}</small> */}
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-sm-12">
                                <div className="rstab-subhead d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="rstab-lists d-flex flex-wrap align-items-center">
                                        <button className={`rstab-btn mr-5 brandon-Bold text-uppercase ${tabs.tab1 ? 'active' : null}`} onClick={() => { setTabs({ tab1: true, tab2: false, tab3: false }) }}>Info</button>
                                        <button className={`rstab-btn mr-5 brandon-Bold text-uppercase ${tabs.tab2 ? 'active' : null}`} onClick={() => { setTabs({ tab1: false, tab2: true, tab3: false }) }}>Menu</button>
                                        <button className={`rstab-btn mr-5 brandon-Bold text-uppercase ${tabs.tab3 ? 'active' : null}`} onClick={() => { setTabs({ tab1: false, tab2: false, tab3: true }) }}>Gallery</button>
                                    </div>
                                    {tabs.tab2?
                                    <div className="ml-auto filter-formlist">
                                        <div className="ml-auto d-flex shortby-btn align-items-center">
                                            <form>
                                                <div className="search-input position-relative d-flex align-items-center mr-3">
                                                    <div className="search-icon">
                                                        <img src={search_icon} className="img-fluid" />
                                                    </div>
                                                    <input className="search-inputbox" type="text" placeholder="Search For Dishes" />
                                                </div>
                                            </form>
                                            <Form inline className="mr-4">
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label className="mr-2 txt-lightgray">Short By:</Form.Label>
                                                    <Form.Control className="select-shortby" as="select" name="dropboxValue" custom>
                                                        <option >Recommended</option>
                                                        <option >2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                            <Button className="filtershort-btn ml-2 p-0 filtershort-lightbtn">
                                                Filters<img width="20" src={filtershorticonpink} className="img-fluid ml-2" alt="filterIcon" />
                                            </Button>
                                            {/* <AllRestaurantFilterModal show={filterModalShow} onHide={filterModalClose}/> */}
                                        </div>
                                    </div>
                                    :null}
                                </div>
                                <br></br>
                                {tabs.tab1 ?
                                    <section><RestaurantDiscInfo /></section>
                                    :

                                    tabs.tab2 ?
                                        <section><RestaurantDiscMenu /></section>
                                        :

                                        <section>
                                            <RestaurantDiscGallery 
                                                food={restaurant_data&&restaurant_data.restaurant_galleries&&restaurant_data.restaurant_galleries.food?restaurant_data.restaurant_galleries.food:[]} 
                                                ambience={restaurant_data&&restaurant_data.restaurant_galleries&&restaurant_data.restaurant_galleries.ambience?restaurant_data.restaurant_galleries.ambience:[]} 
                                                />
                                        </section>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            <br></br>
            <br></br>
            </React.Fragment>
        </>
    )
}

export default RestaurantDiscPage;
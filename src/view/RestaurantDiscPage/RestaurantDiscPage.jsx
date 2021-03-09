import React, { useEffect, useState } from "react";
import './RestaurantDiscPage.scss';

import SingleRestaurantDetailComp from "../../components/SingleRestaurantDetailComp/SingleRestaurantDetailComp";
import RestaurantDiscInfo from "../../components/RestaurantDiscInfo/RestaurantDiscInfo";
import RestaurantDiscMenu from "../../components/RestaurantDiscMenu/RestaurantDiscMenu";
import RestaurantDiscGallery from "../../components/RestaurantDiscGallery/RestaurantDiscGallery"; 

import { Button, Nav, Form, Navbar, Modal } from 'react-bootstrap'
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import search_icon from "../../assets/images/search_icon.svg"
import { useHistory, useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRestaurantDetailInfoData } from "../../redux/actions/dishAction";
import CustomLoadingComp from "../../components/CustomLoadingComp/CustomLoadingComp";
import { getCategorySubcategoryDishesList, getmenuTabTopPickList, getRestaurantMenuTabList } from "../../redux/actions/restaurantMenuTabAction";
import RestaurantInfoMenuFilterModal from "../../components/RestaurantInfoMenuFilterModal/RestaurantInfoMenuFilterModal";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";


const RestaurantDiscPage = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const params=useParams();
    let restaurantId=params.restId;

    let [tabs, setTabs] = useState({
        tab1: false,
        tab2: true,
        tab3: false,
    });
    const [searchData,setSearchData]=useState('');
    const [selectData,setSelectData]=useState('');
    const [filterData,setFilterData]=useState({});
    const [filterModalShow, setFilterModalShow] = useState(false)
    const filterModalClose = () => {
        setFilterModalShow(false)
    }

    useEffect(()=>{
        dispatch(getSelectedRestaurantDetailInfoData(restaurantId,{userCoordinates:[21.096612, 72.650754]} ))
    },[dispatch,restaurantId]);
    const restaurant_data=useSelector((state)=>{
        return state.dishes.selectedRestaurantDetail_Data
    })
    let myLoading = useSelector((state) => {
        return state.dishes.isResturantLoading
    });


    useEffect(()=>{
        dispatch(getRestaurantMenuTabList(restaurantId))
    },[dispatch,restaurantId]);
    useEffect(()=>{
        dispatch(getmenuTabTopPickList( 
            {restaurantId:restaurantId,sort:selectData,search:searchData,
            allergen:filterData&&filterData.allergenId?filterData.allergenId:[],
            dietary:filterData&&filterData.dietaryId?filterData.dietaryId:[],
            lifestyle:filterData&&filterData.lifestyleId?filterData.lifestyleId:[],
        }
        ))
    },[dispatch,restaurantId,searchData,selectData,filterData]);
    useEffect(()=>{
        dispatch(getCategorySubcategoryDishesList(
            {restaurantId:restaurantId,sort:selectData,search:searchData,
                allergen:filterData&&filterData.allergenId?filterData.allergenId:[],
                dietary:filterData&&filterData.dietaryId?filterData.dietaryId:[],
                lifestyle:filterData&&filterData.lifestyleId?filterData.lifestyleId:[],
            }
            ))
    },[dispatch,restaurantId,searchData,selectData,filterData]);
    
    const MenuTab_data=useSelector((state)=>{
        return state.restaurantMenuTab
    })
    let {isLoading,restaurantMenuTab_Data,menuTabTopPick_Data,menuTabCategory_Data}=MenuTab_data;
    return (
        <><React.Fragment>
                <React.Fragment>
                    {myLoading&&myLoading?
                        <CustomLoadingComp/>
                    :
                        null
                    }
                </React.Fragment>
                <React.Fragment>
                    {isLoading&&isLoading?
                        <CustomLoadingComp/>
                    :
                        null
                    }
                </React.Fragment>
                {/* {JSON.stringify(restaurantMenuTab_Data&&restaurantMenuTab_Data)} */}
                <section className="restaurantdisc-wrapper">
                    <div className="container">
                        <div className="breadcrumb-wrapper">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li class="breadcrumb-item text-capitalize"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item text-capitalize"><Link to="/restaurant_list">Restaurants</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">{restaurant_data&&restaurant_data.name?restaurant_data.name:'Unknown'}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* <div className="container">
                        <Breadcrumbs/>
                    </div> */}
                    <SingleRestaurantDetailComp
                            restaurant_image={restaurant_data&&restaurant_data.restaurantCoverPhoto?restaurant_data.restaurantCoverPhoto:''} 
                            restaurant_name={restaurant_data&&restaurant_data.name?restaurant_data.name:''} 
                            restaurant_location={restaurant_data&&restaurant_data.address&&restaurant_data.address.street?restaurant_data.address.street:''} 
                            restaurant_distance={restaurant_data&&restaurant_data.distance&&restaurant_data.distance.text?restaurant_data.distance.text:''} 
                            restaurant_cuisine={restaurant_data&&restaurant_data.restaurantFeatures&&restaurant_data.restaurantFeatures.cuisineTypeList?restaurant_data.restaurantFeatures.cuisineTypeList:[]}
                            restaurant_feature={restaurant_data&&restaurant_data.restaurantFeatures&&restaurant_data.restaurantFeatures.restaurantFeaturesOptionsList?restaurant_data.restaurantFeatures.restaurantFeaturesOptionsList:[]}
                            restaurant_time={restaurant_data&&restaurant_data.restaurantDetails&&restaurant_data.restaurantDetails.openingTimings?restaurant_data.restaurantDetails.openingTimings:''}
                     />
                    {/* <small>{JSON.stringify(tabs)}</small> */}
                    <div className="container" >
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
                                                    <input className="search-inputbox" name="searchData" value={searchData} onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="Search For Dishes" />
                                                </div>
                                            </form>
                                            <Form inline className="mr-4" value={selectData} onChange={(e)=>setSelectData(e.target.value)}>
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label className="mr-2 txt-lightgray">Short By:</Form.Label>
                                                    <Form.Control className="select-shortby" as="select" name="dropboxValue" custom>
                                                        <option value="">Please Select</option>
                                                        <option value="priceh2l">Price High To Low</option>
                                                        <option value="pricel2h">Price Low To High</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                            
                                            <Button className="filtershort-btn ml-2 p-0 filtershort-lightbtn" onClick={() => { setFilterModalShow(true) }}>
                                                    Filters<img width="20" src={filtershorticonpink} className="img-fluid ml-2" alt="filterIcon" />
                                            </Button>
                                            <RestaurantInfoMenuFilterModal
                                                show={filterModalShow} 
                                                onHide={filterModalClose} 
                                                name="filterData"
                                                onChangeData={(value) => { setFilterData( value); }}
                                                value={filterData}
                                            />
                                            {/* <AllRestaurantFilterModal show={filterModalShow} onHide={filterModalClose}/> */}
                                        </div>
                                    </div>
                                    :null}
                                </div>
                                <br></br>
                                {tabs.tab1 ?
                                    <section>
                                        <RestaurantDiscInfo 
                                            rest_about={restaurant_data&&restaurant_data.about?restaurant_data.about:'' }
                                            rest_address={restaurant_data&&restaurant_data.address?restaurant_data.address:{}} 
                                            rest_cuisine={restaurant_data&&restaurant_data.restaurantFeatures&&restaurant_data.restaurantFeatures.cuisineTypeList?restaurant_data.restaurantFeatures.cuisineTypeList:[]}
                                            rest_other={restaurant_data&&restaurant_data.restaurantFeatures&&restaurant_data.restaurantFeatures.restaurantFeaturesOptionsList?restaurant_data.restaurantFeatures.restaurantFeaturesOptionsList:[]}
                                            rest_cost={restaurant_data&&restaurant_data.restaurantFeatures?restaurant_data.restaurantFeatures:{}}
                                            rest_website={restaurant_data&&restaurant_data.restaurantDetails&&restaurant_data.restaurantDetails.website?restaurant_data.restaurantDetails.website:{}}
                                            rest_contact={restaurant_data&&restaurant_data.info?restaurant_data.info:{}}
                                            rest_booking={restaurant_data&&restaurant_data.restaurantDetails&&restaurant_data.restaurantDetails.bookings?restaurant_data.restaurantDetails.bookings:{}}
                                            rest_social = {restaurant_data&&restaurant_data.restaurantDetails&&restaurant_data.restaurantDetails.socialMedia?restaurant_data.restaurantDetails.socialMedia:{}}
                                        />
                                    </section>
                                    :

                                    tabs.tab2 ?
                                        <section>
                                            <RestaurantDiscMenu 
                                                lefttabmenu_data={menuTabCategory_Data&&menuTabCategory_Data.menuList?menuTabCategory_Data.menuList:[]}
                                                menutab_toppicks={menuTabTopPick_Data&&menuTabTopPick_Data.dishList?menuTabTopPick_Data.dishList:[]}
                                                all_menudata={menuTabCategory_Data&&menuTabCategory_Data.menuList?menuTabCategory_Data.menuList:[]}

                                        />
                                            </section>
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
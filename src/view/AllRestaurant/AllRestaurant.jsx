import React, { useEffect, useState } from 'react';
import DishBlock from '../../components/DishBlock/DishBlock';
import './AllRestaurant.scss';
import FilterList from '../../components/FilterList/FilterList'
import { Link, NavLink } from 'react-router-dom';


import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import AllResturantNav from '../AllResturantNav/AllResturantNav';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedDishList, getSearchedRestaurantsList } from '../../redux/actions/restaurantSearchPageAction';
import AllRestaurantFilterModal from '../AllRestaurantFilterModal/AllRestaurantFilterModal';
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import { Button, Nav, Form, Navbar, Modal, Collapse } from 'react-bootstrap'
import menuline from "../../assets/images/menu-line.svg"
import search_icon from "../../assets/images/search_icon.svg"
import no_Data_Image from "../../assets/images/no_data_found.png"
import DiscDescriptionComp from '../../components/DiscDescriptionComp/DiscDescriptionComp';




const AllRestaurant = (props) => {
    const dispatch = useDispatch();
    const [allergen, setAllergen] = useState([])
    const [lifestyle, setLifestyle] = useState([])
    const [dietary, setDietary] = useState([])
    const [features, setfeatures] = useState([])
    const [shortBy, setShortBy] = useState('popularity')
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [filterModalShow, setFilterModalShow] = useState(false)
    const [filterData, setFilterData] = useState({
        allergenId: [],
        dietaryId: [],
        lifestyleId: [],
        featuresId: [],
        toggle: false,
        distance: ''
    });
    const [distance, setDistance] = useState('')
    const [nearby, setNearby] = useState(false)
    const [firstTab, setFirstTab] = useState(true)

    const filterModalClose = () => {
        setFilterModalShow(false)
    }

    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let ele = document.getElementById("top_navbar")
            if (window.scrollY > 170) {
                ele && ele.classList.add("allrsfilter-sticky")
            } else {
                ele && ele.classList.remove("allrsfilter-sticky")
            }
        });
    }, [window.scrollY])


    useEffect(() => {
        window.addEventListener('scroll', () => {
            let ele = document.getElementById("selected_search_bar")
            if (window.scrollY > 170) {
                ele && ele.classList.add("d-block")
            } else {
                ele && ele.classList.remove("d-block")
            }
        });
    }, [window.scrollY]);

    useEffect(() => {
        setAllergen(props.location.state && props.location.state.allergendata ? props.location.state.allergendata : allergen);
        setDietary(props.location.state && props.location.state.dietarydata ? props.location.state.dietarydata : dietary);
        setLifestyle(props.location.state && props.location.state.lifestyledata ? props.location.state.lifestyledata : lifestyle);
        setfeatures(props.location.state && props.location.state.featuredata ? props.location.state.featuredata : features);
        setFilterData({
            ...filterData,
            allergenId: props.location.state && props.location.state.allergendata ? props.location.state.allergendata : allergen,
            dietaryId: props.location.state && props.location.state.dietarydata ? props.location.state.dietarydata : dietary,
            lifestyleId: props.location.state && props.location.state.lifestyledata ? props.location.state.lifestyledata : lifestyle,
            featuresId: props.location.state && props.location.state.featuredata ? props.location.state.featuredata : features,
        });
    }, [props.location.state]);


    // get Restaurant Data start

    useEffect(() => {
        dispatch(getSearchedRestaurantsList(
            {
                userCoordinates: [21.096612, 72.650754],
                styleOfmenu: parsed && parsed.menu ? parsed.menu : '',
                search: parsed && parsed.search ? parsed.search : '',
                sort: shortBy,
                features: features && features.length > 0 ? features : [],
                allergen: allergen && allergen.length > 0 ? allergen : [],
                dietary: dietary && dietary.length > 0 ? dietary : [],
                lifestyle: lifestyle && lifestyle.length > 0 ? lifestyle : [],
                distance: nearby ? "20" : (distance * 1609.34),
            }
        ))
        setOpenSearchBar(false)

    }, [dispatch, props.location.search, props.location.menu, shortBy, allergen, dietary, lifestyle, features, distance, nearby]);

    useEffect(() => {
        dispatch(getSearchedDishList(
            {
                userCoordinates: [21.096612, 72.650754],
                styleOfmenu: parsed && parsed.menu ? parsed.menu : '',
                search: parsed && parsed.search ? parsed.search : '',
                sort: shortBy,
                features: features && features.length > 0 ? features : [],
                allergen: allergen && allergen.length > 0 ? allergen : [],
                dietary: dietary && dietary.length > 0 ? dietary : [],
                lifestyle: lifestyle && lifestyle.length > 0 ? lifestyle : [],
                distance: nearby ? "20" : (distance * 1609.34),
            }
        ))
        setOpenSearchBar(false)

    }, [dispatch, props.location.search, props.location.menu, shortBy, allergen, dietary, lifestyle, features, distance, nearby]);


    const searchRestaurant_Data = useSelector((state) => {
        return state.restaurantSearch
    });

    let { isLoading, searchedRestaurantsList_Data, searchedDishList_Data } = searchRestaurant_Data
    // get Restaurant Data Ends





    return (
        <>
            {/* All restaurantlist  Start */}
            {/* {JSON.stringify(props.location.search)} */}
            {/* {JSON.stringify(props.location.state&&props.location.state.allergendata)} */}
            {/* {JSON.stringify(props.location.state&&props.location.state.dietarydata)} */}

            {/* {JSON.stringify(parsed.search)} */}
            {/* {JSON.stringify(filterData)} */}

            {/* {JSON.stringify(allergen)} */}

            <section className="fr-section allrestaurant-section">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-sm-12 pt-4">
                            <h1 className="text-center brandon-Bold text-uppercase text-white allrestaurant-label">{firstTab ? "All Restaurants" : "All Dishes"}</h1>
                        </div>
                    </div>
                    <div className="allrestaurant-wrapper position-relative p-3">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="mb-5 allrestaurant-filter" id="top_navbar" >
                                    {/* <AllResturantNav totalrestaurant={searchedRestaurantsList_Data&&searchedRestaurantsList_Data.totalRecords?searchedRestaurantsList_Data.totalRecords:"All"}/> */}
                                    <section className="AllResturantNav">
                                        <Navbar bg="light" variant="light" className="align-items-center pl-0 pr-0 pb-3 allrestaurant-nav container">
                                            <NavLink to="/" className="pt-0 pb-0 menurestaurant-btn">
                                                <img src={menuline} className="img-fluid" alt="menuline" />
                                            </NavLink>
                                            {firstTab ?
                                                <h4 className="brandon-Bold restaurant-no mb-0">
                                                    {searchedRestaurantsList_Data && searchedRestaurantsList_Data.totalRecords ? searchedRestaurantsList_Data.totalRecords : "0"}&nbsp;Restaurants
                                                </h4>
                                                :
                                                <h4 className="brandon-Bold restaurant-no mb-0">
                                                    {searchedDishList_Data && searchedDishList_Data.totalRecords ? searchedDishList_Data.totalRecords : "0"}&nbsp;Dishes
                                                </h4>
                                            }
                                            {/* <h4 className="brandon-Bold restaurant-no mb-0">
                                                {searchedRestaurantsList_Data&&searchedRestaurantsList_Data.totalRecords?searchedRestaurantsList_Data.totalRecords:"0"}&nbsp;Restaurants
                                            </h4> */}
                                            <div className="ml-auto d-flex shortby-btn">
                                                <div className="d-none" id="selected_search_bar">
                                                    <div type="button" className="search-topnav mr-5 position-relative d-flex" onClick={() => setOpenSearchBar(!openSearchBar)}>
                                                        <span className="w-100  brandon-Medium mt-1">Search for restaurant or dish&nbsp;</span>
                                                        <div className="search-navicon" >
                                                            <img src={search_icon} className="img-fluid ml-2" alt="search_icon" />
                                                        </div>
                                                    </div>
                                                    {/* <Button onClick={() => setOpenSearchBar(!openSearchBar)}>Search for restaurant or dish</Button> */}
                                                    <Collapse in={openSearchBar}>
                                                        <div style={{ position: 'absolute', top: '8rem', left: 0, width: '100%' }}>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <div className="fr-wrapper fr-rl-wrapper">
                                                                        <FilterList
                                                                            showautosuggestion={false}
                                                                            myallergydata={allergen && allergen.length > 0 ? allergen : []}
                                                                            mydietarydata={dietary && dietary.length > 0 ? dietary : []}
                                                                            mylifestyledata={lifestyle && lifestyle.length > 0 ? lifestyle : []}
                                                                            myfeaturedata={features && features.length > 0 ? features : []}
                                                                            mysearchdata={parsed && parsed.search ? parsed.search : ''}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <Form inline className="mr-5" onChange={(e) => { setShortBy(e.target.value) }}>
                                                    <Form.Group controlId="exampleForm.SelectCustom">
                                                        <Form.Label className="mr-2">Short By:</Form.Label>
                                                        <Form.Control as="select" custom>
                                                            <option value="popularity">Popularity</option>
                                                            <option value="relevance">Relevance</option>
                                                            <option value="priceh2l">Price High to Low</option>
                                                            <option value="pricel2h">Price Low to High</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form>

                                                <button className="filtershort-btn ml-2 p-0 filtershort-lightbtn" onClick={() => { setFilterModalShow(true) }}>
                                                    Filters<img width="20" src={filtershorticonpink} className="img-fluid" alt="filterIcon" />
                                                </button>
                                                <AllRestaurantFilterModal
                                                    show={filterModalShow}
                                                    onHide={filterModalClose}
                                                    name="filterData"
                                                    onChangeData={(value) => {
                                                        setFilterData(value);
                                                        setAllergen(value && value.allergenId && value.allergenId.length > 0 ? value.allergenId : []);
                                                        setDietary(value && value.dietaryId && value.dietaryId.length > 0 ? value.dietaryId : []);
                                                        setLifestyle(value && value.lifestyleId && value.lifestyleId.length > 0 ? value.lifestyleId : []);
                                                        setfeatures(value && value.featuresId && value.featuresId.length > 0 ? value.featuresId : []);
                                                        setDistance(value && value.distance ? value.distance : '');
                                                        setNearby(value && value.toggle ? value.toggle : false);

                                                    }}
                                                    value={filterData}
                                                />
                                            </div>
                                        </Navbar>
                                    </section>

                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-12 mb-5">
                                        <div className="rstab-subhead d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="rstab-lists d-flex flex-wrap align-items-center">
                                                <button className="rstab-btn mr-5 brandon-Bold active" onClick={() => { setFirstTab(true) }}>Restaurants</button>
                                                <button className="rstab-btn mr-5 brandon-Bold" onClick={() => { setFirstTab(false) }}>Dishes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {firstTab ?
                                <React.Fragment>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            {isLoading ?
                                                <React.Fragment>
                                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                                        <div className="spinner-border m-3" role="status"></div>
                                                        <div className="visually-hidden">Please Wait Loading...</div>
                                                    </div>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                    {searchedRestaurantsList_Data && searchedRestaurantsList_Data.data && searchedRestaurantsList_Data.data.length > 0 ?
                                                        <React.Fragment>
                                                            {
                                                                searchedRestaurantsList_Data.data && searchedRestaurantsList_Data.data.map((data, index) => {
                                                                    return (
                                                                        <React.Fragment key={index}>
                                                                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                                                                <Link to={'/restaurant/' + data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                                    <DishBlock
                                                                                        restaurant_name={data.name ? data.name : ''}
                                                                                        restaurant_pic={data.restaurantProfilePhoto ? data.restaurantProfilePhoto : ''}
                                                                                        kmvalue={data.distance && data.distance.text ? data.distance.text : ""}
                                                                                        rating={4.5}
                                                                                        restaurantfeature={data.restaurantFeaturesOptionsList ? data.restaurantFeaturesOptionsList : []}
                                                                                    />
                                                                                </Link>
                                                                            </div>
                                                                        </React.Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="w-100 d-flex align-items-center justify-content-center ">
                                                                <img src={no_Data_Image} className="img-fluid" alt="img" />
                                                            </div>
                                                        </React.Fragment>
                                                    }

                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            {isLoading ?
                                                <React.Fragment>
                                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                                        <div className="spinner-border m-3" role="status"></div>
                                                        <div className="visually-hidden">Please Wait Loading...</div>
                                                    </div>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                    {searchedDishList_Data && searchedDishList_Data.data && searchedDishList_Data.data.length > 0 ?
                                                        <React.Fragment>
                                                            {
                                                                searchedDishList_Data.data && searchedDishList_Data.data.map((data, index) => {
                                                                    return (
                                                                        <React.Fragment key={index}>
                                                                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                                                                <Link to={'/restaurant_dish_info/' + data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                                    <DiscDescriptionComp
                                                                                        dish_name={data.name ? data.name : ''}
                                                                                        dish_image={data.dishPhoto ? data.dishPhoto : ''}
                                                                                        dish_priceunit={data.dishPriceUnit ? data.dishPriceUnit : ''}
                                                                                        dish_price={data.dishPrice ? data.dishPrice : '-'}
                                                                                        dish_description={data.dishDescription ? data.dishDescription : ''}
                                                                                        dish_menu={data.menuList ? data.menuList : []}
                                                                                        dish_allergy={data.allergensList ? data.allergensList : []}
                                                                                    />
                                                                                </Link>
                                                                            </div>
                                                                        </React.Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="w-100 d-flex align-items-center justify-content-center ">
                                                                <img src={no_Data_Image} className="img-fluid" alt="img" />
                                                            </div>
                                                        </React.Fragment>
                                                    }

                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            }


                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </section>
            {/* All restaurantlist  End */}
        </>
    )
}
export default AllRestaurant;

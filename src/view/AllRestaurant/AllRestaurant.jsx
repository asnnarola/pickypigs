import React,{useEffect, useState} from 'react';
import DishBlock from '../../components/DishBlock/DishBlock';
import './AllRestaurant.scss';
import FilterList from '../../components/FilterList/FilterList'
import {Link,NavLink} from 'react-router-dom';


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
import { getSearchedRestaurantsList } from '../../redux/actions/restaurantSearchPageAction';
import AllRestaurantFilterModal from '../AllRestaurantFilterModal/AllRestaurantFilterModal';
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import { Button, Nav, Form, Navbar, Modal, Collapse } from 'react-bootstrap'
import menuline from "../../assets/images/menu-line.svg"
import search_icon from "../../assets/images/search_icon.svg"



let resturantData = [{ "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }];

const AllRestaurant = (props) => {
    const dispatch=useDispatch();
    const [allergen, setAllergen] = useState([])
    const [lifestyle, setLifestyle] = useState([])
    const [dietary, setDietary] = useState([])
    const [features, setfeatures] = useState([])
    const [shortBy, setShortBy] = useState('')
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [filterModalShow, setFilterModalShow] = useState(false)


    const filterModalClose = () => {
        setFilterModalShow(false)
    }

    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);

    useEffect(() => {
        window.addEventListener('scroll', () => {
                let ele = document.getElementById("top_navbar")
                if (window.scrollY > 170 ) {
                    ele&&ele.classList.add("allrsfilter-sticky")
                } else {
                    ele&&ele.classList.remove("allrsfilter-sticky")
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


    // get Restaurant Data start

    useEffect(()=>{
        setAllergen(props.location.state&&props.location.state.allergendata?props.location.state.allergendata:allergen);

        dispatch(getSearchedRestaurantsList(
                {
                    userCoordinates:[ 21.096612, 72.650754],
                    styleOfmenu:parsed&&parsed.menu?parsed.menu:'',
                    search:parsed&&parsed.search?parsed.search:'',
                    sort:shortBy,
                    // features:props.location.state.featuresValue,
                    allergen:props.location.state&&props.location.state.allergendata?props.location.state.allergendata:allergen,
                    // dietary:props.location.state.dietaryValue ,
                    // lifestyle:props.location.state.lifeStyleValue,
                }
            ))
    },[dispatch,props.location.state,props.location.search,shortBy]);

    const searchRestaurant_Data=useSelector((state)=>{
        return state.restaurantSearch
    });

    let {isLoading,searchedRestaurantsList_Data}=searchRestaurant_Data
    // get Restaurant Data Ends



    

    return (
        <>
            {/* All restaurantlist  Start */}
            {/* {JSON.stringify(props.location.search)} */}
            {/* {JSON.stringify(props.location.state&&props.location.state.allergendata)} */}

            {/* {JSON.stringify(parsed.search)} */}

            <section className="fr-section allrestaurant-section">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-sm-12 pt-4">
                            <h1 className="text-center brandon-Bold text-uppercase text-white allrestaurant-label">All Restaurants</h1>
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
                                            <h4 className="brandon-Bold restaurant-no mb-0">
                                                {searchedRestaurantsList_Data&&searchedRestaurantsList_Data.totalRecords?searchedRestaurantsList_Data.totalRecords:"0"}&nbsp;Restaurants
                                            </h4>
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
                                                        <div style={{ position: 'absolute', top:'8rem', left: 0, width: '100%' }}>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <div className="fr-wrapper fr-rl-wrapper">
                                                                        <FilterList showautosuggestion={false}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                
                                                <Form inline className="mr-5" onChange={(e)=>{setShortBy(e.target.value)}}>
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
                                                <AllRestaurantFilterModal show={filterModalShow} onHide={filterModalClose} />
                                            </div>
                                        </Navbar>
                                    </section>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    {isLoading?
                                        <React.Fragment>
                                            <div className="w-100 d-flex align-items-center justify-content-center">
                                                <div className="spinner-border m-3" role="status"></div>
                                                <div className="visually-hidden">Please Wait Loading...</div>
                                            </div>
                                        </React.Fragment>
                                    :
                                        <React.Fragment>
                                            {searchedRestaurantsList_Data&&searchedRestaurantsList_Data.data&&searchedRestaurantsList_Data.data.length>0?
                                                <React.Fragment>
                                                    {
                                                        searchedRestaurantsList_Data.data&&searchedRestaurantsList_Data.data.map((data,index)=>{
                                                            return(
                                                                <React.Fragment key={index}>
                                                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                                                        <Link to={'/restaurant_dish/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                            <DishBlock 
                                                                                restaurant_name={data.name?data.name:''} 
                                                                                restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                                kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                                rating={4.5} 
                                                                                restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
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
                                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                                        <p>Something Went Wrong...Unable to Fetch data</p>
                                                    </div>
                                                </React.Fragment>
                                            }

                                        </React.Fragment>
                                    }
                                </div>
                            </div>
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

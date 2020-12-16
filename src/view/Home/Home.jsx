import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./Home.scss"
import mainimg from "../../assets/images/main-img.png"
import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import whatmenuicon1 from "../../assets/images/micon1.svg"
import whatmenuicon2 from "../../assets/images/micon2.svg"
import whatmenuicon3 from "../../assets/images/micon3.svg"
import { geolocated } from "react-geolocated";
import FilterByFeature from '../../components/FilterByFeature';
import ExploreCategories from '../../components/ExploreCategories';
import FilterList from '../../components/FilterList/FilterList';
import DishBlock from "../../components/DishBlock/DishBlock"
import OurVisionComponent from '../../components/OurVisionComponent/OurVisionComponent';
import KnowWhatYouEatComponent from '../../components/KnowWhatYouEatComponent/KnowWhatYouEatComponent';

function Home({ coords }) {
    return (
        <>
            {/* Home main section start */}
            <section className="fr-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="fr-wrapper">
                                <h1 className="brandon-Bold text-uppercase mb-4 pb-2 sectionhead-txt">
                                    FIND YOUR FAVOURITE
                                <br className="d-md-none d-lg-block" /> RESTAURANTS AND DISHES
                            </h1>
                                <FilterList filterIcon={false} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="mainright-img mt-5 pt-5">
                                <img src={mainimg} className="img-fluid mr-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTER BY FEATURES section start */}
            <section className="ff-section mb-4 pb-4">
                <div className="container pr-0 filter-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="brandon-Medium fw-600">FILTER BY FEATURES</h3>
                            <FilterByFeature />
                        </div>
                    </div>
                </div>
            </section>

            {/* FIND A RESTAURANT YOU WILL LOVE section start */}
            <section className="mt-5 section3 mb-5">
                <div className="container">
                    <div className="row mb-4 pb-3">
                        <div className="col-sm-12">
                            <div className="fn-restaurant-detail d-flex justify-content-between align-items-end">
                                <h1 className="sectionhead-txt">
                                    FIND A RESTAURANT <br className="d-lg-block d-none" /> YOU WILL LOVE
                                </h1>
                                <Link to="/restaurant_list" style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="" className="theme-light-btn w-140 h-48 f-14">VIEW ALL</Link>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P1} kmValue={1.5} rating={4.5} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P2} kmValue={1.5} rating={4.5} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P3} kmValue={1.5} rating={4.5} /></div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">

                            <DishBlock restaurant_Pic={restaurant_P4} kmValue={1.5} rating={4.5} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P5} kmValue={1.5} rating={4.5} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P7} kmValue={1.5} rating={4.2} />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <DishBlock restaurant_Pic={restaurant_P6} kmValue={1.5} rating={4.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPLORE OUR CATEGORIES section start */}
            {/* <section className="mt-5 pt-5 mb-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="sectionhead-txt text-center">EXPLORE OUR CATEGORIES</h1>
                        </div>
                    </div>
                </div>
            </section> */}
            <ExploreCategories />

            {/* WHAT ON THE MENU? section start */}
            <section className="section5 mt-5 pt-2 mb-5">
                <div className="container">
                    <div className="row mb-4 pb-3">
                        <div className="col-sm-12">
                            <div className="whatmenu-wrapper d-flex justify-content-between align-items-end">
                                <h1 className="sectionhead-txt text-center">WHAT ON THE MENU?</h1>
                                <Link to="/restaurant_list" style={{display:'flex',justifyContent:'center',alignItems:'center'}} type="button" className="theme-light-btn w-140 h-48 f-14 btn btn-">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P2} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P3} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P4} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P5} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P6} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P7} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P8} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                            <div className="whatmenu-wrap mb-4">
                                <div className="whatmenu-img">
                                    <img src={restaurant_P2} className="img-fluid w-100" />
                                </div>
                                <div className="whatmenu-details p-3">
                                    <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                                    <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                        <span className="txt-lightgray">£ 5.00</span>
                                        <div className="whatmenu-daydetail txt-lightgray">
                                            <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                                <li className="ml-2 ml-xs-0">Lunch</li>
                                                <li className="dot-icon ml-2"></li>
                                                <li className="ml-2">Dinner</li>
                                            </ul>
                                        </div>
                                    </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

                                    <div className="whatmeu-types d-flex">
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon1} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon2} className="img-fluid" />
                                        </div>
                                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                            <img src={whatmenuicon3} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

            <KnowWhatYouEatComponent/>
            <OurVisionComponent/>
           
           
        </>
    )
}

// export default Home;
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Home);

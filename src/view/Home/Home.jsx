import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.scss"
import "./HomeSecond.scss"
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
import pattern_img from "../../assets/images/Pattern.png"
import WorkWithUsFooterComp from '../../components/WorkWithUsFooterComp/WorkWithUsFooterComp'
import HomePageRandomRestaurantList from '../../components/HomePageRandomRestaurantList/HomePageRandomRestaurantList';
import HomePageRandomDishList from '../../components/HomePageRandomDishList/HomePageRandomDishList';


function Home({ coords }) {

    // const myRedirect=()=>{
    //     window.open(
    //         'https://support.wwf.org.uk/earth_hour/index.php?type=individual',
    //         '_blank' // <- This is what makes it open in a new window.
    //       );
    // }
    return (
        <>
            <div className="HomeSecond_container ">
                {/* Home main section start */}
                <section className="fr-section ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <div className="fr-wrapper pt-5 pb-5">
                                    <h1 className="brandon-Medium text-uppercase mb-4 pb-2 sectionhead-txt pt-5">
                                        FIND YOUR FAVOURITE
                                        <br className="d-md-none d-lg-block" /> RESTAURANTS AND DISHES
                                    </h1>
                                    <FilterList showautosuggestion={true} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <div className="mainright-img">
                                    <img src={mainimg} className="img-fluid mr-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FILTER BY FEATURES section start */}
                <section className="ff-section pb-4 position-relative ">
                    <div className="container  pr-0 position-relative ">
                        {/* filter-container */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="brandon-Medium fw-600">FILTER BY FEATURES</h3>
                                    <FilterByFeature />
                            </div>
                        </div>
                    </div>
                    {/* <div className="container">
                        <div className="mb-5 pb-5 row">
                            <div className="col-sm-12 position-absolute">
                                    <FilterByFeature />
                            </div>
                        </div>
                    </div> */}
                </section>

                {/* FIND A RESTAURANT YOU WILL LOVE section start */}
                <React.Fragment>
                    <HomePageRandomRestaurantList/>
                </React.Fragment>


                {/* EXPLORE OUR CATEGORIES section start */}
                <React.Fragment>
                    <ExploreCategories />
                </React.Fragment>


                {/* WHAT ON THE MENU? section start */}
                <React.Fragment>
                    <HomePageRandomDishList />
                </React.Fragment>


                <section className="">
                    <KnowWhatYouEatComponent />
                </section>
                {/* <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="patternimg-wrapper">
                                    <img src={pattern_img} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section>
                    <WorkWithUsFooterComp/>
                </section>
                <section className="">
                    <OurVisionComponent />
                </section>
            </div>
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

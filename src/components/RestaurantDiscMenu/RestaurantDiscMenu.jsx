import React from "react";
import Scroll from 'react-scroll';
import DishBlock from '../../components/DishBlock/DishBlock';
import Slider from 'react-slick';
import "./RestaurantDiscMenu.scss"

import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import MenuAccordianCommonComp from "../MenuAccordianCommonComp/MenuAccordianCommonComp";

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ScrollLink = Scroll.ScrollLink

const RestaurantDiscMenu=(props)=>{
    let menudata=[{"type":"buns",restaurant:[{"name":"Denny's Benny Famil","desc":"freshly made every day with avocados, lime & coriander with trealy Farm choriz","tags":["CUSTOMISABLE","ve","v","gf"],"price":17.80}]}]
    let resturantData = [{ "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }];
    var settings = {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return(
        <>
        <section className="restaurant-discmenu">
            <div>
                 {/* restaurantlist-tab content Start */}
                <section className="restaurant-tabfilter">
                    <div className="position-relative">
                        <div className="row">
                            <div className="col-md-3 tab-filter">
                                <ul  style={{ position: 'sticky', top: 50,}}>
                                    <li >
                                        <Link to="section-1" activeClass="tabfilter-active bg-prime" spy={true}  smooth={true}  offset={-50}  >
                                            <h6 className="mb-1 brandon-Bold "><b>Top Picks</b></h6>
                                            <p className="mb-0">6 Options</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="section-2" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                            <h6 className="mb-1 brandon-Bold "><b>What's new</b></h6>
                                            <p className="mb-0">15 Options</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="section-3" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                            <h6 className="mb-1 brandon-Bold"><b>Top Picks</b></h6>
                                            <p className="mb-0">6 Options</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <div >
                                    <Element name="section-1" style={{ paddingTop: 60 }}>
                                        <h4 className="text-uppercase mb-4 brandon-Bold"><b>Top Picks</b></h4>
                                        <section className="restaurantlist-slider">
                                            <Slider {...settings}>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P1} kmValue={1.5} rating={4.5} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P2} kmValue={1.5} rating={4.5} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P3} kmValue={1.5} rating={4.5} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P4} kmValue={1.5} rating={4.5} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P5} kmValue={1.5} rating={4.5} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P6} kmValue={1.5} rating={4.5} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P7} kmValue={1.5} rating={4.2} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <DishBlock restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                                                </div>
                                            </Slider>
                                        </section>
                                    </Element>
                                    <div className="row mt-3">
                                        <div className="col-sm-12">
                                            <hr className="borderstyle-dotted" />
                                        </div>
                                    </div>
                                    <Element name="section-2" className="pt-3">
                                        <h1>bbbbbb</h1>
                                        <div>
                                           <MenuAccordianCommonComp value={menudata}/>
                                        </div>
                                    </Element>
                                    <Element name="section-3" className="pt-3">
                                        <h1>ccccccc</h1>
                                        <div>
                                           <MenuAccordianCommonComp value="bbbb"/>
                                        </div>
                                    </Element>
                                    <Element name="section-4" className="pt-3">
                                        <h1>ccccccc</h1>
                                        <div>
                                           <MenuAccordianCommonComp value="cccc"/>
                                        </div>
                                    </Element>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>
                <br></br>
                {/* restaurantlist-tab content End */}
            </div>
        </section>
        </>
    )
}

export default RestaurantDiscMenu;

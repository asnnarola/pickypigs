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
import RestaurantDiscSquareCardComp from "../RestaurantDiscSquareCardComp/RestaurantDiscSquareCardComp";

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ScrollLink = Scroll.ScrollLink

const RestaurantDiscMenu = (props) => {
    let menudata = [{ "type": "buns", restaurant: [{ "name": "Denny's Benny Famil", "desc": "freshly made every day with avocados, lime & coriander with trealy Farm choriz", "tags": ["CUSTOMISABLE", "ve", "v", "gf"], "price": 17.80 }] }]
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
    return (
        <>
            <section className="restaurant-discmenu">
                <div>
                    {/* restaurantlist-tab content Start */}
                    <section className="restaurant-tabfilter">
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-md-3 tab-filter">
                                    <ul style={{ position: 'sticky', top: 110, }}>
                                        <li >
                                            <Link to="section-1" activeClass="tabfilter-active bg-prime" spy={true} smooth={true} offset={-110}  >
                                                <h6 className="mb-1 brandon-Bold "><b>Top Picks</b></h6>
                                                <p className="mb-0">6 Options</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="section-2" activeClass="tabfilter-active" spy={true} smooth={true} offset={-90}>
                                                <h6 className="mb-1 brandon-Bold "><b>Breakfast</b></h6>
                                                <p className="mb-0">15 Options</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="section-3" activeClass="tabfilter-active" spy={true} smooth={true} offset={-90}>
                                                <h6 className="mb-1 brandon-Bold"><b>Lunch</b></h6>
                                                <p className="mb-0">112 Options</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="section-4" activeClass="tabfilter-active" spy={true} smooth={true} offset={-90}>
                                                <h6 className="mb-1 brandon-Bold"><b>Dinner</b></h6>
                                                <p className="mb-0">40 Options</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="section-5" activeClass="tabfilter-active" spy={true} smooth={true} offset={-90}>
                                                <h6 className="mb-1 brandon-Bold"><b>Drinks</b></h6>
                                                <p className="mb-0">56 OPTIONS</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="section-6" activeClass="tabfilter-active" spy={true} smooth={true} offset={-90}>
                                                <h6 className="mb-1 brandon-Bold"><b>Vegan</b></h6>
                                                <p className="mb-0">611 RESTAURANTS</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-9 discmenu-content">
                                    <Element className="row" name="section-1">
                                        <div className="col-sm-12">
                                            <div className="col-sm-12">
                                                <h4 className="text-uppercase mb-4 brandon-Bold txt-darkgreen"><b>Top Picks</b></h4>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="restaurantlist-slider">
                                                <Slider {...settings}>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                         <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <RestaurantDiscSquareCardComp/>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </Element>
                                    <div className="row mt-3">
                                        <div className="col-sm-12">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                    </div>
                                    <Element name="section-2" className="pt-4">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <h4 className="brandon-Bold txt-darkgreen text-uppercase">Breakfast</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <MenuAccordianCommonComp value={menudata} />
                                    </Element>
                                    <Element name="section-3" className="pt-3">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <h4 className="brandon-Bold txt-darkgreen text-uppercase">Lunch</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <MenuAccordianCommonComp/>
                                        </div>
                                    </Element>
                                    <Element name="section-4" className="pt-3">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <h4 className="brandon-Bold txt-darkgreen text-uppercase">Dinner</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <MenuAccordianCommonComp  />
                                        </div>
                                    </Element>
                                    <Element name="section-5" className="pt-3">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <h4 className="brandon-Bold txt-darkgreen text-uppercase">Drinks</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <MenuAccordianCommonComp  />
                                        </div>
                                    </Element>
                                    <Element name="section-6" className="pt-3">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <h4 className="brandon-Bold txt-darkgreen text-uppercase">Vegan</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <MenuAccordianCommonComp  />
                                        </div>
                                    </Element>
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

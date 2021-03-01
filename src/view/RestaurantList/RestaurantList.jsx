import React, { useState,useEffect} from 'react'
import Slider from 'react-slick';
import DishBlock from '../../components/DishBlock/DishBlock';
import FilterList from '../../components/FilterList/FilterList'
import "./Restaurant.scss"
import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import Scroll from 'react-scroll';
import { useSelector } from 'react-redux';
import {Link as MyLink} from 'react-router-dom';

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ScrollLink = Scroll.ScrollLink

const RestaurantList = () => {
    let resturantData = [{ "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "food" }, { "image": restaurant_P4, "type": "food" }, { "image": restaurant_P5, "type": "ambience" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "ambience" }, { "image": restaurant_P8, "type": "ambience" }, { "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "ambience" }, { "image": restaurant_P4, "type": "ambience" }, { "image": restaurant_P5, "type": "food" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "food" }, { "image": restaurant_P8, "type": "food" }];
    let [visible, setVisible] = useState(5);
    const loadMore = () => {
        setVisible(
            visible + 3
        );
    }

    var settings = {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3.951,
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
    // const next = (slider) => {
    //     console.log('slider pres=> ',slider);

    //    slider.slickNext();
    // }
    // const previous=(slider)=> {
    //     slider.slickPrev();
    //     console.log('slider next=> ', slider);

    // }
    // useEffect(() => {

    //     window.addEventListener('scroll', () => {
    //             let ele = document.getElementById("restdiv")
    //             if (window.scrollY !== 0) {
    //             ele.classList.add("rest_div")
    //             } else {
    //                 ele.classList.remove("rest_div")
    //             }
    //         });
    // }, [])
    const resturantData2 = useSelector((state) => state.general.restaurant_Search_Data);

    return (
        <>
            <section className="fr-section rl-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="fr-wrapper fr-rl-wrapper">
                                <FilterList filterIcon={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* restaurantlist-slider section 2 start content */}
            <section className="restaurantlist-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="rl-list-slider">
                                <Slider {...settings}>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P1} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P2} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P3} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P4} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P5} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P6} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P7} kmValue={1.5} rating={4.2} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                                        </MyLink>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* restaurantlist-tab content Start */}
            <section className="restaurant-tabfilter">
                <div className="container position-relative">
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
                        <div className="col-md-9 tabfilter-content">
                            <div >
                                <Element name="section-1" style={{ paddingTop: 60 }}>
                                    <h4 className="text-uppercase mb-4 brandon-Bold"><b>Top Picks</b></h4>
                                    <div className="row">
                                        {
                                            resturantData&&resturantData.length>6?
                                            resturantData.slice(0, visible).map((data, index) => {
                                                    return (
                                                        <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                            <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                                                <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={data.image} kmValue={10} rating={4.5} />
                                                            </MyLink>
                                                        </div>
                                                    )
                                                })
                                                :
                                                resturantData.map((data, index) => {
                                                    return (
                                                        <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                           <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                                                <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={data.image} kmValue={10} rating={4.5} />
                                                            </MyLink>
                                                        </div>
                                                    )
                                                })
                                            }
                                        {visible+1 < resturantData.length &&
                                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                <button onClick={loadMore.bind(this)} className="btn filter-morebtn w-100" style={{ maxHeight: 270 }}>
                                                    <h4 className="brandon-Bold"><b>+{resturantData.length - visible} MORE</b></h4>
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </Element>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <hr className="borderstyle-dotted" />
                                    </div>
                                </div>
                                <Element name="section-2" className="pt-3">
                                    <h1>bbbbbb</h1>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                                <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                                            </MyLink>

                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                                <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={restaurant_P2} kmValue={1.5} rating={4.3} />
                                            </MyLink>

                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                                <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={restaurant_P5} kmValue={1.5} rating={4.3} />
                                            </MyLink>

                                        </div>
                                    </div>
                                </Element>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <hr className="borderstyle-dotted" />
                                    </div>
                                </div>
                                <Element name="section-3" className="pt-3">
                                    <h1>ccccccc</h1>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <MyLink to="/restaurant_dish" style={{textDecoration:'none',color:'initial'}}>    
                                                <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                                            </MyLink>
                                        </div>
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



            {/* restaurantlist-slider section 2 end content */}
            {/* <div style={{ textAlign: "center" }}>
                <button className="button" onClick={previous}>
                    Previous
          </button>
                <button className="button" onClick={next}>
                    Next
          </button>
            </div> */}
        </>
    )
}

export default RestaurantList

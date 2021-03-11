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
import { useDispatch, useSelector } from 'react-redux';
import {Link as MyLink} from 'react-router-dom';
import { getSubscribedRestaurantData, gettopPicksRestaurantList,getWhatsNewRestaurantList } from '../../redux/actions/restaurantListPageAction';
import CustomLoadingComp from '../../components/CustomLoadingComp/CustomLoadingComp';

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ScrollLink = Scroll.ScrollLink

const RestaurantList = () => {
    const dispatch=useDispatch();
    let [visible, setVisible] = useState(5);
    let [visible2, setVisible2] = useState(5);
    const loadMore = () => {
        setVisible(
            visible + 3
        );
    }
    const loadMore2 = () => {
        setVisible2(
            visible2 + 3
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

    useEffect(() => {
        dispatch(getSubscribedRestaurantData());
    }, [dispatch])

    useEffect(() => {
        dispatch(gettopPicksRestaurantList({userCoordinates: [21.096612,72.650754],search:"",option:"toppick",start:0,length:visible}));
    }, [dispatch,visible])

    useEffect(() => {
        dispatch(getWhatsNewRestaurantList({userCoordinates: [21.096612,72.650754],search:"",option:"new",start:0,length:visible2}));
    }, [dispatch,visible2])

    let subscribedRest_Data = useSelector((state)=>{
        return state.restaurantList
    });
    let {isLoading,subscribedRestaurantDetail_Data,topPicksRestaurant_List,whatsNewRestaurant_List}=subscribedRest_Data
    

    return (
        <>
            {isLoading?
                    <React.Fragment>
                        <CustomLoadingComp/>
                    </React.Fragment>
            :
                null
            }
            <section className="fr-section rl-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="fr-wrapper fr-rl-wrapper">
                                <FilterList showautosuggestion={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
{/* {JSON.stringify(subscribedRestaurantDetail_Data&&subscribedRestaurantDetail_Data.data)} */}
            {/* restaurantlist-slider section 2 start content */}
            <section className="restaurantlist-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="rl-list-slider">
                                {subscribedRestaurantDetail_Data&&subscribedRestaurantDetail_Data.data&&subscribedRestaurantDetail_Data.data.length>0?
                                    <React.Fragment>
                                        {subscribedRestaurantDetail_Data&&subscribedRestaurantDetail_Data.data&&subscribedRestaurantDetail_Data.data.length<=3?
                                            <React.Fragment>
                                                {subscribedRestaurantDetail_Data&&subscribedRestaurantDetail_Data.data&&subscribedRestaurantDetail_Data.data.map((data,index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <div className="col-sm-3">
                                                                <MyLink to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                    <DishBlock 
                                                                        restaurant_name={data.name?data.name:''} 
                                                                        restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                        kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                        restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                    />
                                                                </MyLink>
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </React.Fragment>
                                        :
                                            <React.Fragment>
                                                <Slider {...settings}>
                                                    {subscribedRestaurantDetail_Data&&subscribedRestaurantDetail_Data.data&&subscribedRestaurantDetail_Data.data.map((data,index)=>{
                                                        return(
                                                            <React.Fragment key={index}>
                                                                <div className="col-sm-12">
                                                                    <MyLink to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                        <DishBlock 
                                                                            restaurant_name={data.name?data.name:''} 
                                                                            restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                            kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                            restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                        />
                                                                    </MyLink>
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </Slider>
                                            </React.Fragment>
                                        }

                                    </React.Fragment>
                                    :
                                    <p>No Restaurants Available</p>
                                }
                              
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
                                        <p className="mb-0">{topPicksRestaurant_List&&topPicksRestaurant_List.totalRecords?topPicksRestaurant_List.totalRecords:'0'} Options</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="section-2" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                        <h6 className="mb-1 brandon-Bold "><b>What's new</b></h6>
                                        <p className="mb-0">{whatsNewRestaurant_List&&whatsNewRestaurant_List.totalRecords?whatsNewRestaurant_List.totalRecords:'0'} Options</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-9 tabfilter-content">
                            <div >
                                <Element name="section-1" style={{ paddingTop: 60 }}>
                                    <h4 className="text-uppercase mb-4 brandon-Bold"><b>Top Picks</b></h4>
                                    <div className="row">
                                        {topPicksRestaurant_List&&topPicksRestaurant_List.data&&topPicksRestaurant_List.data.length>0?
                                            <React.Fragment>
                                                {
                                                    topPicksRestaurant_List&&topPicksRestaurant_List.data&&topPicksRestaurant_List.data.length>6?
                                                        <React.Fragment>
                                                            {topPicksRestaurant_List&&topPicksRestaurant_List.data&&topPicksRestaurant_List.data.slice(0, visible).map((data, index) => {
                                                                return (
                                                                    <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                                        <MyLink to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                            <DishBlock 
                                                                                restaurant_name={data.name?data.name:''} 
                                                                                restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                                kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                                restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                            />
                                                                        </MyLink>
                                                                    </div>
                                                                )
                                                            })}
                                                        </React.Fragment>
                                                :
                                                    <React.Fragment>
                                                        {topPicksRestaurant_List&&topPicksRestaurant_List.data&&topPicksRestaurant_List.data.map((data, index) => {
                                                            return (
                                                                <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                                    <MyLink to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                        <DishBlock 
                                                                            restaurant_name={data.name?data.name:''} 
                                                                            restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                            kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                            restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                        />
                                                                    </MyLink>
                                                                </div>
                                                            )
                                                        })}
                                                    </React.Fragment>
                                                }
                                                {topPicksRestaurant_List&&topPicksRestaurant_List.totalRecords>(visible+1) ?
                                                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                        <button onClick={loadMore.bind(this)} className="btn filter-morebtn w-100" style={{ maxHeight: 270 }}>
                                                            <h4 className="brandon-Bold"><b>+{topPicksRestaurant_List&&topPicksRestaurant_List.totalRecords&&topPicksRestaurant_List.totalRecords - visible} MORE</b></h4>
                                                        </button>
                                                    </div>
                                                    :
                                                    null
                                                }
                                            </React.Fragment>
                                        :
                                            <p>No Data Available</p>
                                        }
                                        
                                    </div>
                                </Element>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <hr className="borderstyle-dotted" />
                                    </div>
                                </div>
                                <Element name="section-2" className="pt-3">
                                    <h4 className="text-uppercase mb-4 brandon-Bold"><b>What's new</b></h4>    
                                    <div className="row">
                                        {whatsNewRestaurant_List&&whatsNewRestaurant_List.data&&whatsNewRestaurant_List.data.length>0?
                                            <React.Fragment>
                                                {
                                                    whatsNewRestaurant_List&&whatsNewRestaurant_List.data&&whatsNewRestaurant_List.data.length>6?
                                                        <React.Fragment>
                                                            {whatsNewRestaurant_List&&whatsNewRestaurant_List.data&&whatsNewRestaurant_List.data.slice(0, visible2).map((data, index) => {
                                                                return (
                                                                    <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                                        <MyLink to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                            <DishBlock 
                                                                                restaurant_name={data.name?data.name:''} 
                                                                                restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                                kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                                restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                            />
                                                                        </MyLink>
                                                                    </div>
                                                                )
                                                            })}
                                                        </React.Fragment>
                                                :
                                                    <React.Fragment>
                                                        {whatsNewRestaurant_List&&whatsNewRestaurant_List.data&&whatsNewRestaurant_List.data.map((data, index) => {
                                                            return (
                                                                <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                                    <MyLink to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                        <DishBlock 
                                                                            restaurant_name={data.name?data.name:''} 
                                                                            restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                            kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                            restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                        />
                                                                    </MyLink>
                                                                </div>
                                                            )
                                                        })}
                                                    </React.Fragment>
                                                }
                                                {topPicksRestaurant_List&&topPicksRestaurant_List.totalRecords>(visible2+1) ?
                                                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                        <button onClick={loadMore2.bind(this)} className="btn filter-morebtn w-100" style={{ maxHeight: 270 }}>
                                                            <h4 className="brandon-Bold"><b>+{topPicksRestaurant_List&&topPicksRestaurant_List.totalRecords&&topPicksRestaurant_List.totalRecords - visible2} MORE</b></h4>
                                                        </button>
                                                    </div>
                                                    :
                                                    null
                                                }
                                            </React.Fragment>
                                        :
                                            <p>No Data Available</p>
                                        }
                                    </div>
                                </Element>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <hr className="borderstyle-dotted" />
                                    </div>
                                </div>
                                
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

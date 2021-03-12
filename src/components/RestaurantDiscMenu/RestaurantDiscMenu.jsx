import React from "react";
import Scroll from 'react-scroll';
import DishBlock from '../../components/DishBlock/DishBlock';
import Slider from 'react-slick';
import "./RestaurantDiscMenu.scss"
import no_Data_Image from "../../assets/images/no_data_found.png"
import MenuAccordianCommonComp from "../MenuAccordianCommonComp/MenuAccordianCommonComp";
import RestaurantDiscSquareCardComp from "../RestaurantDiscSquareCardComp/RestaurantDiscSquareCardComp";
import { NavLink } from "react-router-dom";

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ScrollLink = Scroll.ScrollLink

const RestaurantDiscMenu = ({lefttabmenu_data,menutab_toppicks,all_menudata}) => {
    
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
    const selectedMenuData=(all_menudata,id)=>{
          return all_menudata&&all_menudata.filter((data)=>data._id == id);
    }
    return (
        <>
        {/* {JSON.stringify(all_menudata&&all_menudata)} */}
            <section className="restaurant-discmenu">
                <div>
                    {/* restaurantlist-tab content Start */}
                    <section className="restaurant-tabfilter">
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-md-3 tab-filter">
                                    <ul style={{ position: 'sticky', top: 110, }}>
                                        <li >
                                            <Link to="section-1" activeClass="tabfilter-active " spy={true} smooth={true} offset={-110}  >
                                                <h6 className="mb-1 brandon-Bold "><b>Top Picks</b></h6>
                                                <p className="mb-0">{menutab_toppicks&&menutab_toppicks.length} options</p>
                                            </Link>
                                        </li>
                                        {lefttabmenu_data&&lefttabmenu_data.length>0?
                                            <React.Fragment>
                                                {lefttabmenu_data&&lefttabmenu_data.map((data,index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <li>
                                                                <Link to={data._id}   isDynamic={true} activeClass="tabfilter-active" spy={true} smooth={true} offset={-90}>
                                                                    <h6 className="mb-1 brandon-Bold "><b>{data.menuName?data.menuName:''}</b></h6>
                                                                    <p className="mb-0">{data.countDishes?data.countDishes:'0'} Options</p>
                                                                </Link>
                                                            </li>
                                                        </React.Fragment>
                                                    )
                                                })}

                                            </React.Fragment>
                                        :
                                            null
                                        }
                                        {/* <li>
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
                                        </li>*/}
                                    
                                    </ul>
                                </div>
                                <div className="col-md-9 discmenu-content">
                                    <Element className="row flex-column" name="section-1">
                                        <div className="col-sm-12">
                                            <div className="col-sm-12">
                                                <h4 className="text-uppercase mb-4 brandon-Bold txt-darkgreen"><b>Top Picks</b></h4>
                                            </div>
                                        </div>
                                        {menutab_toppicks&&menutab_toppicks.length>0?
                                            <div className="col-sm-12">
                                                <div className="restaurantlist-slider">
                                                <React.Fragment>
                                                    {menutab_toppicks&&menutab_toppicks.length>=3?
                                                        <React.Fragment>
                                                            <Slider {...settings}>
                                                                {menutab_toppicks&&menutab_toppicks.map((data,index)=>{
                                                                    return(
                                                                        <React.Fragment key={index}>
                                                                            <div className="col-sm-12">
                                                                                <NavLink to={'/restaurant_dish_info/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                                    <RestaurantDiscSquareCardComp 
                                                                                        name={data.name?data.name:'Unknown'}
                                                                                        image={data.image?data.image:''}
                                                                                        price={data.price?data.price:''}
                                                                                        priceUnit={data.priceUnit?data.priceUnit:''}
                                                                                        dish_new_tag={data.new?data.new:false}
                                                                                    />
                                                                                </NavLink>
                                                                            </div>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </Slider>
                                                        </React.Fragment>
                                                    :
                                                        <React.Fragment>
                                                            <div className="row">
                                                                {menutab_toppicks&&menutab_toppicks.map((data,index)=>{
                                                                    return(
                                                                        <React.Fragment key={index}>
                                                                            <div className="col-sm-4">
                                                                            <NavLink to={'/restaurant_dish_info/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>

                                                                                <RestaurantDiscSquareCardComp 
                                                                                    name={data.name?data.name:'Unknown'}
                                                                                    image={data.image?data.image:''}
                                                                                    price={data.price?data.price:''}
                                                                                    priceUnit={data.priceUnit?data.priceUnit:''}
                                                                                />
                                                                                </NavLink>

                                                                            </div>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </div>
                                                        </React.Fragment>
                                                    }
                                                </React.Fragment>
                                            </div>
                                            </div>
                                        :
                                            <img src={no_Data_Image} className="img-fluid" alt="img"/>
                                        }
                                        
                                    </Element>
                                    <div className="row mt-3">
                                        <div className="col-sm-12">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                    </div>
                                    {lefttabmenu_data&&lefttabmenu_data.length>0?
                                            <React.Fragment>
                                                {lefttabmenu_data&&lefttabmenu_data.map((data,index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <Element name={data._id} className="pt-4">
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="col-sm-12">
                                                                            <h4 className="brandon-Bold txt-darkgreen text-uppercase">{data.menuName?data.menuName:''}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <MenuAccordianCommonComp menuid={data._id}  value={selectedMenuData(all_menudata,data._id)} />
                                                            </Element>
                                                           
                                                        </React.Fragment>
                                                    )
                                                })}

                                            </React.Fragment>
                                    :
                                        null
                                    }
                               
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

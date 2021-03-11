import React, { useState,useEffect} from 'react'
import Slider from 'react-slick';
import DishBlock from '../../components/DishBlock/DishBlock';
import FilterList from '../../components/FilterList/FilterList'
import "./DishtListPage.scss"
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
import {getBreakfastMenuDishList, getFavouriteDishListData, 
        getWhatsNewDishList,getLunchMenuDishList,getDinnerMenuDishList,
        getDessertMenuDishList,getBuffetMenuDishList,getDrinksMenuDishList,
        getNibbleMenuDishList,getSetmenuMenuDishList} from '../../redux/actions/dishListPageAction';
import CustomLoadingComp from '../../components/CustomLoadingComp/CustomLoadingComp';
import DiscDescriptionComp from '../../components/DiscDescriptionComp/DiscDescriptionComp';
import DishListCommonComp from '../../components/DishListCommonComp/DishListCommonComp';

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ScrollLink = Scroll.ScrollLink

const DishtListPage = () => {
    const dispatch=useDispatch();
    let resturantData = [{ "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "food" }, { "image": restaurant_P4, "type": "food" }, { "image": restaurant_P5, "type": "ambience" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "ambience" }, { "image": restaurant_P8, "type": "ambience" }, { "image": restaurant_P1, "type": "food" }, { "image": restaurant_P2, "type": "food" }, { "image": restaurant_P3, "type": "ambience" }, { "image": restaurant_P4, "type": "ambience" }, { "image": restaurant_P5, "type": "food" }, { "image": restaurant_P6, "type": "ambience" }, { "image": restaurant_P7, "type": "food" }, { "image": restaurant_P8, "type": "food" }];
    let [visible, setVisible] = useState(5);
    let [visible2, setVisible2] = useState(5);
    let [visible3, setVisible3] = useState(5);
    let [visible4, setVisible4] = useState(5);
    let [visible5, setVisible5] = useState(5);
    let [visible6, setVisible6] = useState(5);
    let [visible7, setVisible7] = useState(5);
    let [visible8, setVisible8] = useState(5);
    let [visible9, setVisible9] = useState(5);
    let [visible10, setVisible10] = useState(5);

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

   
    useEffect(() => {
        dispatch(getFavouriteDishListData({search:"",option:"favorite",styleOfmenu:"",start:0,length:visible}));
    }, [dispatch,visible])

    useEffect(() => {
        dispatch(getWhatsNewDishList({search:"",option:"new",styleOfmenu:"",start:0,length:visible2}));
    }, [dispatch,visible2])

    useEffect(() => {
        dispatch(getBreakfastMenuDishList({search:"",option:"",styleOfmenu:"breakfast",start:0,length:visible3}));
    }, [dispatch,visible3])

    useEffect(() => {
        dispatch(getLunchMenuDishList({search:"",option:"",styleOfmenu:"lunch",start:0,length:visible4}));
    }, [dispatch,visible4])

    useEffect(() => {
        dispatch(getDinnerMenuDishList({search:"",option:"",styleOfmenu:"dinner",start:0,length:visible5}));
    }, [dispatch,visible5])

    useEffect(() => {
        dispatch(getDessertMenuDishList({search:"",option:"",styleOfmenu:"dessert",start:0,length:visible6}));
    }, [dispatch,visible6])

    useEffect(() => {
        dispatch(getBuffetMenuDishList({search:"",option:"",styleOfmenu:"buffet",start:0,length:visible7}));
    }, [dispatch,visible7])

    useEffect(() => {
        dispatch(getDrinksMenuDishList({search:"",option:"",styleOfmenu:"drinks",start:0,length:visible8}));
    }, [dispatch,visible8])

    useEffect(() => {
        dispatch(getNibbleMenuDishList({search:"",option:"",styleOfmenu:"nibble",start:0,length:visible9}));
    }, [dispatch,visible9])

    useEffect(() => {
        dispatch(getSetmenuMenuDishList({search:"",option:"",styleOfmenu:"setmenu",start:0,length:visible10}));
    }, [dispatch,visible10])

    let dishRelated_Data = useSelector((state)=>{
        return state.dishList
    });
    let {isLoading,favouriteDishDetail_Data,whatsNewDish_List,breakfastMenuDish_List,
        lunchMenuDish_List,
        dinnerMenuDish_List,
        dessertMenuDish_List,
        buffetMenuDish_List,
        drinksMenuDish_List,
        nibbleMenuDish_List,
        setmenuMenuDish_List}=dishRelated_Data
    
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

            {/* restaurantlist-slider section 2 start content */}
            <section className="dishtListPage-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="rl-list-slider">
                                <Slider {...settings}>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P1} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P2} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P3} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P4} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P5} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P6} kmValue={1.5} rating={4.5} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
                                           <DishBlock restaurant_Name={"The Barrio Express"} restaurant_Pic={restaurant_P7} kmValue={1.5} rating={4.2} />
                                        </MyLink>
                                    </div>
                                    <div className="col-sm-12">
                                        <MyLink to="/restaurant/602cdb19a906cd356498c676" style={{textDecoration:'none',color:'initial'}}>    
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
            <section className="dishtListPage-tabfilter">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-3 tab-filter">
                            <ul  style={{ position: 'sticky', top: 50,}}>
                                {favouriteDishDetail_Data&&favouriteDishDetail_Data.totalRecords&&favouriteDishDetail_Data.totalRecords>0?
                                    <React.Fragment>
                                        <li >
                                            <Link to="section-1" activeClass="tabfilter-active bg-prime" spy={true}  smooth={true}  offset={-50}  >
                                                <h6 className="mb-1 brandon-Bold "><b>Favourite</b></h6>
                                                <p className="mb-0">{favouriteDishDetail_Data&&favouriteDishDetail_Data.totalRecords?favouriteDishDetail_Data.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }
                                {whatsNewDish_List&&whatsNewDish_List.totalRecords&&whatsNewDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-2" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold "><b>What's new</b></h6>
                                                <p className="mb-0">{whatsNewDish_List&&whatsNewDish_List.totalRecords?whatsNewDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }        
                                {breakfastMenuDish_List&&breakfastMenuDish_List.totalRecords&&breakfastMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-3" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Breakfast</b></h6>
                                                <p className="mb-0">{breakfastMenuDish_List&&breakfastMenuDish_List.totalRecords?breakfastMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }       
                                {lunchMenuDish_List&&lunchMenuDish_List.totalRecords&&lunchMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-4" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Lunch</b></h6>
                                                <p className="mb-0">{lunchMenuDish_List&&lunchMenuDish_List.totalRecords?lunchMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }    
                                {dinnerMenuDish_List&&dinnerMenuDish_List.totalRecords&&dinnerMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-5" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Dinner</b></h6>
                                                <p className="mb-0">{dinnerMenuDish_List&&dinnerMenuDish_List.totalRecords?dinnerMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }    
                                {dessertMenuDish_List&&dessertMenuDish_List.totalRecords&&dessertMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-6" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Dessert</b></h6>
                                                <p className="mb-0">{dessertMenuDish_List&&dessertMenuDish_List.totalRecords?dessertMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }    
                                {buffetMenuDish_List&&buffetMenuDish_List.totalRecords&&buffetMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-7" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Buffet</b></h6>
                                                <p className="mb-0">{buffetMenuDish_List&&buffetMenuDish_List.totalRecords?buffetMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }  
                                {drinksMenuDish_List&&drinksMenuDish_List.totalRecords&&drinksMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-8" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Drinks</b></h6>
                                                <p className="mb-0">{drinksMenuDish_List&&drinksMenuDish_List.totalRecords?drinksMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }  
                                {nibbleMenuDish_List&&nibbleMenuDish_List.totalRecords&&nibbleMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-9" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Nibble</b></h6>
                                                <p className="mb-0">{nibbleMenuDish_List&&nibbleMenuDish_List.totalRecords?nibbleMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }
                                {setmenuMenuDish_List&&setmenuMenuDish_List.totalRecords&&setmenuMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <li>
                                            <Link to="section-10" activeClass="tabfilter-active" spy={true}  smooth={true}   offset={-80}>
                                                <h6 className="mb-1 brandon-Bold"><b>Set Menu</b></h6>
                                                <p className="mb-0">{setmenuMenuDish_List&&setmenuMenuDish_List.totalRecords?setmenuMenuDish_List.totalRecords:'0'} Options</p>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                :
                                    null
                                }
                            </ul>
                        </div>
                        <div className="col-md-9 tabfilter-content">
                            <div >
                                {favouriteDishDetail_Data&&favouriteDishDetail_Data.totalRecords&&favouriteDishDetail_Data.totalRecords>0?
                                    <React.Fragment>
                                        <Element name="section-1" style={{ paddingTop: 60 }}>
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Favourite</b></h4>
                                            <DishListCommonComp 
                                                selected_data={favouriteDishDetail_Data?favouriteDishDetail_Data:{}}
                                                datatoshow={visible}
                                                handleDataToShow={(value) => { setVisible(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }
                               
                                {whatsNewDish_List&&whatsNewDish_List.totalRecords&&whatsNewDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-2" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>What's new</b></h4>
                                            <DishListCommonComp 
                                                selected_data={whatsNewDish_List?whatsNewDish_List:{}}
                                                datatoshow={visible2}
                                                handleDataToShow={(value) => { setVisible2(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }

                                {breakfastMenuDish_List&&breakfastMenuDish_List.totalRecords&&breakfastMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-3" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Breakfast</b></h4>
                                            <DishListCommonComp 
                                                selected_data={breakfastMenuDish_List?breakfastMenuDish_List:{}}
                                                datatoshow={visible3}
                                                handleDataToShow={(value) => { setVisible3(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }
                                
                                {lunchMenuDish_List&&lunchMenuDish_List.totalRecords&&lunchMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-4" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Lunch</b></h4>
                                            <DishListCommonComp 
                                                selected_data={lunchMenuDish_List?lunchMenuDish_List:{}}
                                                datatoshow={visible4}
                                                handleDataToShow={(value) => { setVisible4(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }

                                {dinnerMenuDish_List&&dinnerMenuDish_List.totalRecords&&dinnerMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-5" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Dinner</b></h4>
                                            <DishListCommonComp 
                                                selected_data={dinnerMenuDish_List?dinnerMenuDish_List:{}}
                                                datatoshow={visible5}
                                                handleDataToShow={(value) => { setVisible5(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }
                                
                                {dessertMenuDish_List&&dessertMenuDish_List.totalRecords&&dessertMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-6" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Dessert</b></h4>
                                            <DishListCommonComp 
                                                selected_data={dessertMenuDish_List?dessertMenuDish_List:{}}
                                                datatoshow={visible6}
                                                handleDataToShow={(value) => { setVisible6(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }

                                {buffetMenuDish_List&&buffetMenuDish_List.totalRecords&&buffetMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-7" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Buffet</b></h4>
                                            <DishListCommonComp 
                                                selected_data={buffetMenuDish_List?buffetMenuDish_List:{}}
                                                datatoshow={visible7}
                                                handleDataToShow={(value) => { setVisible7(value) }}

                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }

                                {drinksMenuDish_List&&drinksMenuDish_List.totalRecords&&drinksMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-8" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Drinks</b></h4>
                                            <DishListCommonComp 
                                                selected_data={drinksMenuDish_List?drinksMenuDish_List:{}}
                                                datatoshow={visible8}
                                                handleDataToShow={(value) => { setVisible8(value) }}
                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }

                                {nibbleMenuDish_List&&nibbleMenuDish_List.totalRecords&&nibbleMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-9" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Nibble</b></h4>
                                            <DishListCommonComp 
                                                selected_data={nibbleMenuDish_List?nibbleMenuDish_List:{}}
                                                datatoshow={visible9}
                                                handleDataToShow={(value) => { setVisible9(value) }}
                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }

                                {setmenuMenuDish_List&&setmenuMenuDish_List.totalRecords&&setmenuMenuDish_List.totalRecords>0?
                                    <React.Fragment>
                                        <div className="row mt-3">
                                            <div className="col-sm-12">
                                                <hr className="borderstyle-dotted" />
                                            </div>
                                        </div>
                                        <Element name="section-10" className="pt-3">
                                            <h4 className="text-uppercase mb-4 brandon-Bold"><b>Set Menu</b></h4>
                                            <DishListCommonComp 
                                                selected_data={setmenuMenuDish_List?setmenuMenuDish_List:{}}
                                                datatoshow={visible10}
                                                handleDataToShow={(value) => { setVisible10(value) }}
                                            />
                                        </Element>
                                    </React.Fragment>
                                :
                                    null
                                }
                                
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

export default DishtListPage;

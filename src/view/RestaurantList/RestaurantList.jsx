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
import Scrollspy from 'react-scrollspy'

const RestaurantList = () => {
    let resturantData = [{ "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }];
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
        slidesToShow: 3.95,
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

    return (
        <>
            <section className="fr-section rl-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div class="fr-wrapper fr-rl-wrapper">
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
                            <Scrollspy items={['section-1', 'section-2', 'section-3']}
                                currentClassName="tabfilter-active" style={{ position: 'sticky', top: 50,}}>
                                <li>
                                    <a href="#section-1">
                                        <h6 class="mb-1 brandon-Bold "><b>Top Picks</b></h6>
                                        <p class="mb-0">6 Options</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#section-2">
                                        <h6 class="mb-1 brandon-Bold "><b>What's new</b></h6>
                                        <p class="mb-0">15 Options</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#section-3">
                                        <h6 class="mb-1 brandon-Bold"><b>Top Picks</b></h6>
                                        <p class="mb-0">6 Options</p>
                                    </a>
                                </li>
                            </Scrollspy>
                        </div>
                        <div className="col-md-9 tabfilter-content">
                            <div >
                                <section id="section-1" style={{ paddingTop: 60 }}>
                                    <h4 className="text-uppercase mb-4 brandon-Bold"><b>Top Picks</b></h4>
                                    <div className="row">
                                        {resturantData.slice(0, visible).map((data, index) => {
                                            return (
                                                <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                    <DishBlock restaurant_Pic={data.image} kmValue={data.dist} rating={data.stars} />
                                                </div>
                                            )
                                        })}
                                        {visible+1 < resturantData.length &&
                                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                <button onClick={loadMore.bind(this)} className="btn filter-morebtn w-100" style={{ maxHeight: 270 }}>
                                                    <h4 className="brandon-Bold"><b>+{resturantData.length - visible} MORE</b></h4>
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </section>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <hr className="borderstyle-dotted" />
                                    </div>
                                </div>
                                <section id="section-2" className="pt-3">
                                    <h1>bbbbbb</h1>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <DishBlock restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <DishBlock restaurant_Pic={restaurant_P2} kmValue={1.5} rating={4.3} />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <DishBlock restaurant_Pic={restaurant_P5} kmValue={1.5} rating={4.3} />
                                        </div>
                                    </div>
                                </section>
                                <section id="section-3" style={{ paddingTop: 80 }}>
                                    <h1>ccccccc</h1>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <DishBlock restaurant_Pic={restaurant_P8} kmValue={1.5} rating={4.3} />
                                        </div>
                                    </div>
                                </section>
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

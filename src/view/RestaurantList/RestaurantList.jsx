import React from 'react'
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

const RestaurantList = () => {
    var settings = {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
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
            <section className="restaurantlist-slider mb-4">
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

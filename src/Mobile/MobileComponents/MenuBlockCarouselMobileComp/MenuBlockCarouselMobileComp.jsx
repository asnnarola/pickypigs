import React, { useState } from "react";
import restaurant_P1 from "../../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../../assets/images/restaurant/r8.png"
import Slider from 'react-slick';
import MenuBlockMobileComp from "../MenuBlockMobileComp/MenuBlockMobileComp";
let resturantData = [{ "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }];

const MenuBlockCarouselMobileComp=()=>{

    var settings = {
        arrows: false,
        centerMode: false,
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,


    };
    return(
        <>
        <section >
            <div className="">
                <div className="row">
                     <div className="col-sm-12">
                         <div className="rl-list-slider">
                             <Slider {...settings}>
                                 {resturantData.map((data, index) => {
                                     return (
                                         <div key={index} className="pr-3" >
                                             <MenuBlockMobileComp  restaurant_Pic={data.image} kmValue={data.dist} rating={data.stars} />
                                         </div>
                                     )
                                 })}
                             </Slider>
                         </div>
                     </div>
                 </div>
            </div>
        </section>
        </>
    )
}

export default MenuBlockCarouselMobileComp;
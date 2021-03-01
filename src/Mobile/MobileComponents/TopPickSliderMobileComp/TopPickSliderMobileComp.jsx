import React from "react";
import restaurant_P1 from "../../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../../assets/images/restaurant/r8.png"
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import './TopPickSliderMobileComp.scss';
const resturantData = [{ "image": restaurant_P2, "name":"chocklate","type":"cake"}, { "image": restaurant_P3, "name":"chocklate","type":"cake"}, { "image": restaurant_P1, "name":"chocklate","type":"cake"}, { "image": restaurant_P4, "name":"chocklate","type":"cake"}];

const TopPickSliderMobileComp=()=>{
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
           
      };
    return(
        <>
        <section>
            <div className="">
                <Slider {...settings}>
                    {resturantData&&resturantData.map((data, index) => {
                         return (
                             <div key={index} >
                                 <Link to='/restaurant_dish_info' style={{textDecoration:'none',color:'initial'}}>
                                    <div className="pr-3" style={{position:'relative'}}>
                                        <img src={data.image} className="img_fluid w-100"   alt="disc_img"/>
                                        <div style={{position:'absolute',bottom:0}}>
                                            <h3>{data.name}</h3>
                                            <h3>{data.type}</h3>
                                        </div>
                                    </div>    
                                </Link>
                             </div>
                         )
                     })}
                </Slider>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </section>
        </>
    )
}

export default TopPickSliderMobileComp;
import React from "react";
import disc_1 from "../../../assets/images/restaurant/r1.png";
import disc_2 from "../../../assets/images/restaurant/r2.png";
import disc_3 from "../../../assets/images/restaurant/r3.png";
import disc_4 from "../../../assets/images/restaurant/r4.png";
import Slider from "react-slick";
import './TopPickSliderMobileComp.scss';

const TopPickSliderMobileComp=()=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
            // appendDots: dots => (
            //   <div
            //     style={{
            //       backgroundColor: "#ddd",
            //       borderRadius: "10px",
            //       padding: "10px"
            //     }}
            //   >
            //     <ul style={{ margin:10}}> {dots} </ul>
            //   </div>
            // ),
            // customPaging: i => (
            //   <div
            //     style={{
            //       width: "30px",
            //       color: "blue",
            //       border: "1px blue solid"
            //     }}
            //   >
            //     {i + 1}
            //   </div>
            // )
      };
    return(
        <>
        <section>
            <div className="">
                <Slider {...settings}>
                    <div style={{position:'relative'}}>
                        <img src={disc_1} className="img_fluid w-100"   alt="disc_img"/>
                        <div style={{position:'absolute',bottom:0}}>
                            <h3>chocolate</h3>
                            <h3>cake</h3>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <img src={disc_2} className="img_fluid w-100"   alt="disc_img"/>
                        <div style={{position:'absolute',bottom:0}}>
                            <h3>chocolate</h3>
                            <h3>cake</h3>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <img src={disc_3} className="img_fluid w-100"   alt="disc_img"/>
                        <div style={{position:'absolute',bottom:0}}>
                            <h3>chocolate</h3>
                            <h3>cake</h3>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <img src={disc_4} className="img_fluid w-100"   alt="disc_img"/>
                        <div style={{position:'absolute',bottom:0}}>
                            <h3>chocolate</h3>
                            <h3>cake</h3>
                        </div>
                    </div>
                    
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
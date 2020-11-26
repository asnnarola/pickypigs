import React from "react";
import disc_1 from "../../../assets/images/restaurant/r1.png";
import disc_2 from "../../../assets/images/restaurant/r2.png";
import disc_3 from "../../../assets/images/restaurant/r3.png";
import disc_4 from "../../../assets/images/restaurant/r4.png";
import heart from "../../../assets/images/filtershort-icon.svg"

import './MenuRecommMobileComp.scss';

const MenuRecommMobileComp=()=>{
    return(
        <>
        <section>
            <div className="">
                <div className="row justify-content-between align-items-center flex-wrap m-2">
                    <div className="col-xs-6">
                        <div  style={{position:"relative"}}>
                            <img src={disc_2} className="img_fluid" width="180px"   alt="disc_img"/>
                            <span style={{position:"absolute",top:0,right:0}}>
                                <button>
                                    <img src={heart}  className="img_fluid"   alt="disc_img"/>
                                </button>
                            </span>
                        </div>
                        <div>
                            <div className="row justify-content-between">
                                <div className="col-xs-8">
                                    <p>Signature Hot chocklate</p>
                                </div>
                                <div className="col-xs-4">
                                    <p>&#8364; 17.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 ">
                        <div  style={{position:"relative"}}>
                            <img src={disc_1} className="img_fluid" width="180px"   alt="disc_img"/>
                            <span style={{position:"absolute",top:0,right:0}}>
                                <button>
                                    <img src={heart}  className="img_fluid"   alt="disc_img"/>
                                </button>
                            </span>
                        </div>
                        <div>
                            <div className="row justify-content-between">
                                <div className="col-xs-8">
                                    <p>Hot chocklate</p>
                                </div>
                                <div className="col-xs-4">
                                    <p>&#8364; 17.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 ">
                        <div  style={{position:"relative"}}>
                            <img src={disc_3} className="img_fluid" width="180px"   alt="disc_img"/>
                            <span style={{position:"absolute",top:0,right:0}}>
                                <button>
                                    <img src={heart}  className="img_fluid"   alt="disc_img"/>
                                </button>
                            </span>
                        </div>
                        <div>
                            <div className="row justify-content-between">
                                <div className="col-xs-8">
                                    <p>Signature Hot chocklate</p>
                                </div>
                                <div className="col-xs-4">
                                    <p>&#8364; 17.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 ">
                        <div  style={{position:"relative"}}>
                            <img src={disc_4} className="img_fluid" width="180px"   alt="disc_img"/>
                            <span style={{position:"absolute",top:0,right:0}}>
                                <button>
                                    <img src={heart}  className="img_fluid"   alt="disc_img"/>
                                </button>
                            </span>
                        </div>
                        <div>
                            <div className="row justify-content-between">
                                <div className="col-xs-8">
                                    <p>Signature Hot chocklate</p>
                                </div>
                                <div className="col-xs-4">
                                    <p>&#8364; 17.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default MenuRecommMobileComp;
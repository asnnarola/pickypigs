import React,{useState} from "react";
import walleticon from "../../../assets/images/restaurant-dish/wallet-icon.svg";
import disc_1 from "../../../assets/images/restaurant/r1.png";
import disc_2 from "../../../assets/images/restaurant/r2.png";
import disc_3 from "../../../assets/images/restaurant/r3.png";
import disc_4 from "../../../assets/images/restaurant/r4.png";

import './MenuAccordianMobileComp.scss';

const MenuAccordianMobileComp=()=>{
    const [card,setcard]=useState("")
    return(
        <>
            <section >
                {card}
                <div className="menuAccordianMobile-content">
                    <div className="rs-infoblock d-flex flex-column">
                        <div>
                            <div className="rs-infoicon mr-3">
                                <img src={walleticon} className="img-fluid" alt="walleticon" />
                            </div>
                            <div className="rs-infosubwrap pt-1">
                                <p className="brandon-Medium mb-2 pb-1">Breakfast</p>
                            </div>
                        </div>
                        <div>
                            <div className="accordion" id="accordionExample">

                                <div className="card">
                                    <div className="card-header p-0" id="headingOne">
                                        <h2 className="mb-0">
                                            <button onClick={()=>{ card===""||card!==1?setcard(1):setcard("")}} className="btn btn-block text-left d-flex justify-content-between" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Buns
                                                <div className={`accordian-arrow ml-auto ${card===1?"active":null}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                                        <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ul className="list-unstyled">
                                                <li className="media">
                                                    <img src={disc_1} className="img_fluid mr-3" width="80px"  alt="disc_img"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-1">List-based media object</h5>
                                                        <p>&#8364; 17.5</p>                                                    
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img src={disc_2} className="img_fluid mr-3" width="80px" alt="disc_img"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-1">List-based media object</h5>
                                                        <p>&#8364; 17.5</p>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img src={disc_3} className="img_fluid mr-3" width="80px" alt="disc_img"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-1">List-based media object</h5>
                                                        <p>&#8364; 17.5</p>                                                    
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img src={disc_4} className="img_fluid mr-3" width="80px" alt="disc_img"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-1">List-based media object</h5>
                                                        <p>&#8364; 17.5</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header  p-0" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button onClick={()=>{ card===""||card!==2?setcard(2):setcard("")}} className="btn btn-block text-left collapsed d-flex justify-content-between" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Shakes
                                            <div className={`accordian-arrow ml-auto ${card===2?"active":null}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                                    <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                                </svg>
                                            </div>    
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header p-0" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block text-left collapsed d-flex justify-content-between" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Hot Drinks
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                                    <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                                </svg>
                                            </div>
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header p-0" id="headingfour">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block text-left collapsed d-flex justify-content-between" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Cold Drinks
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                                    <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                                </svg>
                                            </div>
                                        </button>
                                    </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
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

export default MenuAccordianMobileComp;
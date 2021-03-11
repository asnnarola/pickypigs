import React from 'react'
import { number } from 'yup'
import whatmenuicon1 from "../../assets/images/micon1.svg"
import whatmenuicon2 from "../../assets/images/micon2.svg"
import whatmenuicon3 from "../../assets/images/micon3.svg"
import Dummy_Icon from "../../assets/images/dummy_icon.svg"
import Dummy_Image from "../../assets/images/restaurant_default.jpg"
import {SERVER_URL} from '../../shared/constant'
import "./DiscDescriptionComp.scss"


let defaultIcon=[{name:"Unknown",image:Dummy_Icon},{name:"Unknown",image:Dummy_Icon}]

const DiscDescriptionComp=({dish_name,dish_image,dish_priceunit,dish_price,dish_menu,dish_description,dish_allergy})=>{
    
    return(
        <React.Fragment>
            <section className="section5">
                    <div className="whatmenu-wrap">
                        <div className="whatmenu-img">
                            {dish_image?
                                <img src={`${SERVER_URL}/${dish_image}`} className="img-fluid w-100" />
                            :
                                <img src={Dummy_Image} className="img-fluid w-100" />
                            }
                        </div>
                        <div className="whatmenu-details p-3">
                            {dish_name?
                                <p className="whatmenu-label f-15 mb-2 brandon-Medium">{dish_name}</p>
                            :
                                <p className="whatmenu-label f-15 mb-2 brandon-Medium">Unknown</p>
                            }
                            <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                <span className="txt-lightgray">{dish_priceunit?dish_priceunit:'$'} {dish_price?dish_price.toFixed(2):'00.00'}</span>
                                <div className="whatmenu-daydetail txt-lightgray">
                                    <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                        <li className="ml-xs-0"></li>
                                        {dish_menu&&dish_menu.length>0?
                                            <React.Fragment>
                                                {dish_menu&&dish_menu.map((data,index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            {index?<li className="dot-icon ml-2"></li>:''}
                                                            <li className="ml-2 ml-xs-0 text-capitalize">{data.name}</li>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </React.Fragment>
                                        :
                                            <React.Fragment>
                                                <li className="ml-xs-0"></li>
                                                <li className="ml-2 ml-xs-0 text-capitalize">Na</li>
                                            </React.Fragment>
                                        }
                                        {/* <li className="ml-2 ml-xs-0">Lunch</li>
                                        <li className="ml-2">Dinner</li> */}
                                    </ul>
                                </div>
                            </div><p className="f-14 whatmenu-intro txt-lightgray">{dish_description?dish_description:'Description Not Available'}</p>

                            <div className="whatmeu-types d-flex flex-wrap">
                                {dish_allergy&&dish_allergy.length>0?
                                    <React.Fragment>
                                        {dish_allergy&&dish_allergy.map((data,index)=>{
                                            return(
                                                <React.Fragment key={index}>
                                                    <div className="whatmenu-list mr-3 mb-2 d-flex justify-content-center align-items-center">
                                                        <img src={`${SERVER_URL}/${data.image}`} alt={"icon"} className="img-fluid" title={data.name} />
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        {defaultIcon&&defaultIcon.map((data,index)=>{
                                            return(
                                                <React.Fragment key={index}>
                                                    <div className="whatmenu-list mr-3 mb-2 d-flex justify-content-center align-items-center">
                                                        <img src={data.image} alt={"icon"} className="img-fluid" title={data.name} />
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </React.Fragment>
                                }
                               
                            </div>
                        </div>
                    </div>
            </section>

        </React.Fragment>
    )
}

export default DiscDescriptionComp;
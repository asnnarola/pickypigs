import React from "react";
import "./RestaurantDiscSquareCardComp.scss"
import Dummy_Image from "../../assets/images/restaurant_default.jpg"
import {SERVER_URL} from '../../shared/constant'

const RestaurantDiscSquareCardComp=({name,price,priceUnit,image,dish_new_tag})=>{
    return(
        <>
        <section className="restdisc-squarecard">
                <div className="whatmenu-wrap mb-4">
                    <div className="whatmenu-img position-relative">
                    {image?
                        <img src={`${SERVER_URL}/${image}`} alt={name?name:'unknown'} className="img-fluid w-100" />
                    :
                        <img src={Dummy_Image} alt={name?name:'unknown'} className="img-fluid w-100" />
                    }
                    {dish_new_tag&&dish_new_tag?
                                <label className="newdish-label">New</label>
                            :
                                null
                            }
                    </div>
                    <div className="whatmenu-details p-3">
                        <p className="whatmenu-label f-15 mb-2 brandon-Medium">{name?name:'Unknown'}</p>
                        <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                            <span className="txt-lightgray">{priceUnit?priceUnit:'£'} {price?price.toFixed(2):'Na'}</span>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default RestaurantDiscSquareCardComp;
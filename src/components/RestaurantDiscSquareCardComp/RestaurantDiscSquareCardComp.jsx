import React from "react";
import "./RestaurantDiscSquareCardComp.scss"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"

const RestaurantDiscSquareCardComp=()=>{
    return(
        <>
        <section className="restdisc-squarecard">
                <div className="whatmenu-wrap mb-4">
                    <div className="whatmenu-img">
                        <img src={restaurant_P2} className="img-fluid w-100" />
                    </div>
                    <div className="whatmenu-details p-3">
                        <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                        <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                            <span className="txt-lightgray">£ 5.00</span>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default RestaurantDiscSquareCardComp;
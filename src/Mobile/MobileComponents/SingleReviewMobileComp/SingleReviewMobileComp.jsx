import React from "react";
import img1 from "../../../assets/images/restaurant/r2.png";
import './SingleReviewMobileComp.scss';

const SingleReviewMobileComp=()=>{
    return(
        <>
        <section>
            <div className="singleReviewMobile-content">
               <div className="rs-infoblock">
                    <div>
                        <div className="media">
                            <img src={img1} className="img-fluid rounded-circle mr-3" width="60px" height="60px" alt="user_img"/>
                            <div className="media-body">
                                <h5 className="mt-0">Joe</h5>
                                <p>4/5</p>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nesciunt optio voluptatum nihil atque? Quasi odio ut saepe non neque.</p>
                    <div className="border-top">
                        <p>30 Minutes ago</p>
                    </div>
               </div>
            </div>
        </section>
        </>
    )
}

export default SingleReviewMobileComp;
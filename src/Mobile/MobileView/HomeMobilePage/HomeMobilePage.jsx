import React from "react";
import { Link } from "react-router-dom";
import AllRestaurantMobileComp from "../../MobileComponents/AllRestaurantMobileComp/AllRestaurantMobileComp";
import DiscBlockCarouselMobileComp from "../../MobileComponents/DiscBlockCarouselMobileComp/DiscBlockCarouselMobileComp";
import FilterByFeatureMobileComp from "../../MobileComponents/FilterByFeatureMobileComp/FilterByFeatureMobileComp";
import MenuBlockCarouselMobileComp from "../../MobileComponents/MenuBlockCarouselMobileComp/MenuBlockCarouselMobileComp";
import {ReactComponent as Filter} from "../../../assets/images/filtershort-icon.svg"
import logo from "../../../assets/images/logo.svg"
import {ReactComponent as Location} from "../../../assets/images/location-gray.svg"
import SubMenuModalMobileComp from "../../MobileComponents/SubMenuModalMobileComp/SubMenuModalMobileComp";

const HomeMobilePage=()=>{
    const [submenuModalShow, setSubmenuModalShow] = React.useState(false);

    return(
        <>
        <section style={{marginTop:90}}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5>Hello Bingi
                            <p className="mb-0">
                                <span className="mr-3"><Location/></span>
                                Gujurat
                            </p>
                        </h5>
                    </div>
                    <div role="button" onClick={() => setSubmenuModalShow(true)}>
                        <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" width="50px" className="userprofile-img img-fluid  rounded-circle" alt="logo" />
                    </div>
                </div>
                <SubMenuModalMobileComp show={submenuModalShow}  onHide={() => setSubmenuModalShow(false)} />

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <input type="text" placeholder="search for restaurant Or receipy" className="w-100 mr-3 rounded-pill p-2" />
                    <Link to="allergy_mobile"><Filter/></Link>
                </div>
                <div>
                    <FilterByFeatureMobileComp/>
                </div>
                <div>
                    <h5>It's BreakFirst Time!</h5>
                    <DiscBlockCarouselMobileComp/>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Your favorites</h5>
                        <button>Sell All</button>
                    </div>
                    <MenuBlockCarouselMobileComp/>
                </div>

                <div>
                   <AllRestaurantMobileComp/>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomeMobilePage;
import React from "react";
import dishimg1 from "../../assets/images/dishinfo_img/dishimg1.jpg";
import './SingleDiscDetalDescComp.scss';

const SingleDiscDetalDescComp = () => {
    return (
        <>
            <div className="dishinfo-imgcontent">
                <div className="dishinfo-img">
                    <img src={dishimg1} alt="" className="img-fluid w-100" />
                </div>
                <div>
                    <div className="d-flex">
                        <h3>disc info</h3>
                        <h3 className="ml-auto">disc info</h3>
                    </div>
                    <p>Sea dolor at dolor eirmod voluptua rebum magna, sed lorem et et dolor et diam. Diam erat ipsum aliquyam labore sed est ut est. Amet diam eos stet eos nonumy.</p>
                    <div className="d-flex">
                        <h3>disc</h3>
                        <h3 className="mx-2">disc</h3>
                        <h3>disc</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleDiscDetalDescComp;

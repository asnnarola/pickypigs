import React from "react";
import Diningtable from "../../../assets/images/restaurant-dish/diningtable.svg";

import './UserPersonalDetailMobileComp.scss';

const UserPersonalDetailMobileComp=()=>{
    return(
        <>
        <section>
            <div className="userPersonalDetailMobileComp-content">
                <div className="rs-infoblock">
                    <div className="border-bottom d-flex">
                        <div className="rs-infoicon mr-3">
                            <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                        </div>
                        <div className="rs-infosubwrap pt-1">
                            <p className="brandon-Medium text-uppercase mb-2">Email</p>
                            <p className="brandon-Medium mb-2">User@gmail.com</p>
                        </div>
                    </div>
                    <div className="border-bottom d-flex">
                        <div className="rs-infoicon mr-3">
                            <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                        </div>
                        <div className="rs-infosubwrap pt-1">
                            <p className="brandon-Medium text-uppercase mb-2">Phone</p>
                            <p className="brandon-Medium mb-2">+91 1234567890</p>
                        </div>
                    </div>
                    <div>
                        <p>ADDRESS</p>
                        <div>
                            <img src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" className="img-fluid rounded" height="40px"  alt="Diningtable" />
                        </div>
                        <div className="d-flex">
                            <div className="rs-infoicon mr-3">
                                <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                            </div>
                            <div className="rs-infosubwrap pt-1">
                                <p className="brandon-Medium text-uppercase mb-2">20 Domain Road Beach</p>
                                <p className="brandon-Medium mb-2">Tauranga,New Zeland</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default UserPersonalDetailMobileComp;
import React from "react";
import dishimg1 from "../../assets/images/dishinfo_img/dishimg1.jpg";
import whatmenuicon1 from "../../assets/images/micon1.svg"
import whatmenuicon2 from "../../assets/images/micon2.svg"
import whatmenuicon3 from "../../assets/images/micon3.svg"
import './SingleDiscDetalDescComp.scss';

const SingleDiscDetalDescComp = () => {
    return (
        <>
            <div className="dishinfo-imgcontent">
                <div className="dishinfo-img">
                    <img src={dishimg1} alt="" className="img-fluid w-100" />
                </div>
                <div className="dishinfo-detail">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <p className="brandon-Medium">Dish info</p>
                        <p className="brandon-Medium">£2.50</p>
                    </div>
                    <p className="txt-lightgray dishinfo-txt">Es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde g el año texto de relleno de.</p>
                    <div className="whatmeu-types d-flex">
                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                            <img src={whatmenuicon1} className="img-fluid" />
                        </div>
                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                            <img src={whatmenuicon2} className="img-fluid" />
                        </div>
                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                            <img src={whatmenuicon3} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleDiscDetalDescComp;

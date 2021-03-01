import React from 'react'
import whatmenuicon1 from "../../assets/images/micon1.svg"
import whatmenuicon2 from "../../assets/images/micon2.svg"
import whatmenuicon3 from "../../assets/images/micon3.svg"
import "./DiscDescriptionComp.scss"


const DiscDescriptionComp=(props)=>{
    

    return(
        <React.Fragment>
            <section className="section5">
                    <div className="whatmenu-wrap">
                        <div className="whatmenu-img">
                            <img src={props.discpick} className="img-fluid w-100" />
                        </div>
                        <div className="whatmenu-details p-3">
                            <p className="whatmenu-label f-15 mb-2 brandon-Medium">Lebanese Falafel Salad</p>
                            <div className="whatmenu-price f-14 d-flex justify-content-between pt-1 pb-1">
                                <span className="txt-lightgray">£ 5.00</span>
                                <div className="whatmenu-daydetail txt-lightgray">
                                    <ul className="list-style-none pl-0 d-flex flex-wrap align-items-center mb-2">
                                        <li className="ml-2 ml-xs-0">Lunch</li>
                                        <li className="dot-icon ml-2"></li>
                                        <li className="ml-2">Dinner</li>
                                    </ul>
                                </div>
                            </div><p className="f-14 whatmenu-intro txt-lightgray">Es simplemente el texto de relleno de las
                    imprentas y archivos de texto. LoremIpsum ha sido el texto de relleno</p>

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
            </section>

        </React.Fragment>
    )
}

export default DiscDescriptionComp;
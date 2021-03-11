import React from "react";
import dishimg1 from "../../assets/images/dummy_img.jpg";
import whatmenuicon1 from "../../assets/images/micon1.svg"
import whatmenuicon2 from "../../assets/images/micon2.svg"
import whatmenuicon3 from "../../assets/images/micon3.svg"
import './SingleDiscDetalDescComp.scss';
import {SERVER_URL} from '../../shared/constant'


const SingleDiscDetalDescComp = (props) => {
    return (
        <>
            <div className="dishinfo-imgcontent">
                <div className="dishinfo-img">
                    {props.itemimage&&props.itemimage?
                        <img src={`${SERVER_URL}/${props.itemimage}`} alt="Dish_image" className="img-fluid w-100" />
                    :
                        <img src={dishimg1} alt="" className="img-fluid w-100" />
                    }
                </div>
                <div className="dishinfo-detail">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <p className="brandon-Medium">{props.name}</p>
                        <p className="brandon-Medium">{props.priceunit}{props.price?parseFloat(props.price).toFixed(2):'Na'}</p>
                    </div>
                    <p className="txt-lightgray dishinfo-txt">{props.description}</p>
                    <div className="whatmeu-types d-flex">
                        {props.allergydetail&&props.allergydetail.length>0?
                            <React.Fragment>
                                {
                                    props.allergydetail&&props.allergydetail.map((data,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                                                    <img src={`${SERVER_URL}/${data.image}`} className="img-fluid allergy_icon_image" alt="img" title={data.name}/>
                                                </div>
                                            </React.Fragment>  
                                        )
                                    })
                                }
                            </React.Fragment>   
                            :
                            null
                        }
                        {/* <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                            <img src={whatmenuicon1} className="img-fluid" />
                        </div>
                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                            <img src={whatmenuicon2} className="img-fluid" />
                        </div>
                        <div className="whatmenu-list mr-3 d-flex justify-content-center align-items-center">
                            <img src={whatmenuicon3} className="img-fluid" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleDiscDetalDescComp;

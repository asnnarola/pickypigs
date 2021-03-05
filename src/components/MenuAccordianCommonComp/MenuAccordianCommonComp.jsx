import React, { useContext,useEffect,useState } from "react";
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import dishimg from "../../assets/images/restaurant-dish/dish-img.png";
import Diningtable from "../../assets/images/restaurant-dish/diningtable.svg";
import "./MenuAccordianCommonComp.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySubcategoryDishesList } from "../../redux/actions/restaurantMenuTabAction";

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            className="text-uppercase d-flex btn-block"
            style={{ textAlign: "left", backgroundColor: isCurrentEventKey ? 'pink' : 'lavender', color: isCurrentEventKey ? '#2e482b' : 'black' }}
            onClick={decoratedOnClick}
        >
             {children}
            <div className={`accordian-arrow ml-auto ${isCurrentEventKey?"active":null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                    <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                </svg>
            </div>
           
        </button>
    );
}

const MenuAccordianCommonComp = ({menuid}) => {
    const dispatch=useDispatch();
    const [subCate1,setSubCate1]=useState(true);
    const [subCate2,setSubCate2]=useState(false);
    const [subCate3,setSubCate3]=useState(false);

    useEffect(()=>{
        dispatch(getCategorySubcategoryDishesList({menuId:menuid}))
    },[dispatch,menuid]);
    const MenuTab_data=useSelector((state)=>{
        return state.restaurantMenuTab
    })
    let {menuTabCategory_Data}=MenuTab_data;
    return (
        <>
        {/* {JSON.stringify(menuTabCategory_Data&&menuTabCategory_Data)} */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-12">
                        <Accordion defaultActiveKey="0" className="menudisc-accordian mt-3">
                            {/* {menuTabCategory_Data&&menuTabCategory_Data.length>0?
                                <React.Fragment>
                                    {menuTabCategory_Data&&menuTabCategory_Data.map((data,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                                        <ContextAwareToggle eventKey="1">{data.categoryName?data.categoryName:'Unknown'}</ContextAwareToggle>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="1">
                                                        <Card.Body>Hello! I'm the body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </React.Fragment>
                                        )
                                    })}
                                    
                                </React.Fragment>
                                :
                                null
                            } */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="txt-darkgreen flex-wrap align-items-center brandon-Bold card-header d-flex justify-content-between">
                                    <ContextAwareToggle eventKey="0">buns</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="d-flex sub-cate">
                                            <button className={`rstab-btn mr-5  text-uppercase ${subCate1? 'active' : null}`} onClick={()=>{setSubCate1(true);setSubCate2(false);setSubCate3(false)}} >SUB CATEGORY - 1</button>
                                            <button className={`rstab-btn mr-5  text-uppercase ${subCate2? 'active' : null}`} onClick={()=>{setSubCate1(false);setSubCate2(true);setSubCate3(false)}} >SUB CATEGORY - 2</button>
                                            <button className={`rstab-btn mr-5  text-uppercase ${subCate3? 'active' : null}`} onClick={()=>{setSubCate1(false);setSubCate2(false);setSubCate3(true)}} >SUB CATEGORY - 3</button>
                                        </div>
                                        {subCate1&&
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="d-flex mb-3">
                                                        <div className="mr-3 dishimg-block">
                                                            <img src={dishimg} className="img-fluid" alt="Diningtable" />
                                                        </div>
                                                        <div className="dish-details">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="pt-1">
                                                                    <p className="dish-title mb-2">Denny's Benny Family</p>
                                                                    <p className="dish-info">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                                    <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                        <span class="cuisine-label">CUSTOMISABLE</span>
                                                                        <span class="cuisine-label">VE</span>
                                                                        <span class="cuisine-label">V</span>
                                                                        <span class="cuisine-label">GF</span>
                                                                    </p>
                                                                </div>
                                                                <div className="dish-price">
                                                                    <p>£17.80</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-block">
                                                                <hr className="mt-0 mb-0"></hr>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="d-flex mb-3">
                                                        <div className="mr-3 dishimg-block">
                                                            <img src={dishimg} className="img-fluid" alt="Diningtable" />
                                                        </div>
                                                        <div className="d-flex border-bottom justify-content-between dish-details">
                                                            <div className="pt-1">
                                                                <p className="dish-title mb-2">Denny's Benny Family</p>
                                                                <p className="dish-info">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                                <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                    <span class="cuisine-label">CUSTOMISABLE</span>
                                                                    <span class="cuisine-label">VE</span>
                                                                    <span class="cuisine-label">V</span>
                                                                    <span class="cuisine-label">GF</span>
                                                                </p>
                                                            </div>
                                                            <div className="dish-price">
                                                                <p>£17.80</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            subCate2&&
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="d-flex mb-3">
                                                        <div className="mr-3 dishimg-block">
                                                            <img src={dishimg} className="img-fluid" alt="Diningtable" />
                                                        </div>
                                                        <div className="dish-details">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="pt-1">
                                                                    <p className="dish-title mb-2">Denny's Benny Family</p>
                                                                    <p className="dish-info">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                                    <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                        <span class="cuisine-label">CUSTOMISABLE</span>
                                                                        <span class="cuisine-label">VE</span>
                                                                        <span class="cuisine-label">V</span>
                                                                        <span class="cuisine-label">GF</span>
                                                                    </p>
                                                                </div>
                                                                <div className="dish-price">
                                                                    <p>£17.80</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-block">
                                                                <hr className="mt-0 mb-0"></hr>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {   
                                            subCate3&&
                                            <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="d-flex mb-3">
                                                    <div className="mr-3 dishimg-block">
                                                        <img src={dishimg} className="img-fluid" alt="Diningtable" />
                                                    </div>
                                                    <div className="dish-details">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="pt-1">
                                                                <p className="dish-title mb-2">Denny's Benny Family</p>
                                                                <p className="dish-info">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                                <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                    <span class="cuisine-label">CUSTOMISABLE</span>
                                                                    <span class="cuisine-label">VE</span>
                                                                    <span class="cuisine-label">V</span>
                                                                    <span class="cuisine-label">GF</span>
                                                                </p>
                                                            </div>
                                                            <div className="dish-price">
                                                                <p>£17.80</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-block">
                                                            <hr className="mt-0 mb-0"></hr>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="d-flex mb-3">
                                                    <div className="mr-3 dishimg-block">
                                                        <img src={dishimg} className="img-fluid" alt="Diningtable" />
                                                    </div>
                                                    <div className="d-flex border-bottom justify-content-between dish-details">
                                                        <div className="pt-1">
                                                            <p className="dish-title mb-2">Denny's Benny Family</p>
                                                            <p className="dish-info">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                            <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                <span class="cuisine-label">CUSTOMISABLE</span>
                                                                <span class="cuisine-label">VE</span>
                                                                <span class="cuisine-label">V</span>
                                                                <span class="cuisine-label">GF</span>
                                                            </p>
                                                        </div>
                                                        <div className="dish-price">
                                                            <p>£17.80</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="d-flex mb-3">
                                                    <div className="mr-3 dishimg-block">
                                                        <img src={dishimg} className="img-fluid" alt="Diningtable" />
                                                    </div>
                                                    <div className="d-flex border-bottom justify-content-between dish-details">
                                                        <div className="pt-1">
                                                            <p className="dish-title mb-2">Denny's Benny Family</p>
                                                            <p className="dish-info">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                            <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                <span class="cuisine-label">CUSTOMISABLE</span>
                                                                <span class="cuisine-label">VE</span>
                                                                <span class="cuisine-label">V</span>
                                                                <span class="cuisine-label">GF</span>
                                                            </p>
                                                        </div>
                                                        <div className="dish-price">
                                                            <p>£17.80</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <ContextAwareToggle eventKey="1">SHAKES</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <ContextAwareToggle eventKey="2">BIGGER PLATES</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <ContextAwareToggle eventKey="3">DESSERTS</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuAccordianCommonComp;
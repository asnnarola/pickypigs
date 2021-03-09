import React, { useContext,useState } from "react";
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import dishimg from "../../assets/images/restaurant-dish/dish-img.png";
import Diningtable from "../../assets/images/restaurant-dish/diningtable.svg";
import "./MenuAccordianCommonComp.scss";
import Dummy_Icon from "../../assets/images/dummy_icon.svg"
import Dummy_Image from "../../assets/images/restaurant_default.jpg"
import {SERVER_URL} from '../../shared/constant'
import { useSelector } from "react-redux";
import CustomLoadingComp from "../CustomLoadingComp/CustomLoadingComp";
import { NavLink } from "react-router-dom";



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

const MenuAccordianCommonComp = ({value,menuid}) => {
    const [selectedTab,setSelectedTab]=useState(0);
   
    
    
    return (
        <>
        {/* {JSON.stringify(value&&value.filter(menu => menu._id.includes(menuid) ))} */}
        {/* {JSON.stringify(value&&value)} */}
        {/* {JSON.stringify(selectedTab)} */}
           
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-12">
                        <Accordion defaultActiveKey="0" className="menudisc-accordian mt-3">
                            {value&&value.length>0?
                                <React.Fragment>
                                    {value&&value[0].categories&&value[0].categories.map((data,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey={`${index}`} className="txt-darkgreen flex-wrap align-items-center brandon-Bold card-header d-flex justify-content-between">
                                                        <ContextAwareToggle eventKey={`${index}`}>{data.name?data.name:'Unknown'}</ContextAwareToggle>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey={`${index}`}>
                                                        {data&&data.subcategories&&data.subcategories.length>0?
                                                            <React.Fragment>
                                                                <Card.Body>
                                                                    <div className="d-flex sub-cate">
                                                                        {data&&data.subcategories&&data.subcategories.map((data2,index2)=>{
                                                                            return(
                                                                                <React.Fragment key={index2}>
                                                                                    <button onClick={()=>{setSelectedTab(index2);}} className={`rstab-btn mr-5  text-uppercase ${selectedTab==index2? 'active' : null}`}  >{data2.name}</button>
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    {data&&data.subcategories&&data.subcategories.map((data2,index2)=>{
                                                                            return(
                                                                                <React.Fragment key={index2}>
                                                                    <React.Fragment>
                                                                        {selectedTab==index2&&
                                                                            <React.Fragment>
                                                                                {data2&&data2.dishes&&data2.dishes.length>0?
                                                                                    <React.Fragment>
                                                                                        <div className="row">
                                                                                            {data2&&data2.dishes&&data2.dishes.map((data3,index3)=>{
                                                                                                return(

                                                                                                    <React.Fragment key={index3}>

                                                                                                        <div className="col-sm-12 col-md-6">
                                                                                                        <NavLink to={'/restaurant_dish_info/'+data3._id} style={{ textDecoration: 'none', color: 'initial' }}>

                                                                                                            <div className="d-flex mb-3">
                                                                                                                <div className="mr-3 dishimg-block">
                                                                                                                {data3.image?
                                                                                                                    <img src={`${SERVER_URL}/${data3.image}`} className="img-fluid" alt={data3.name?data3.name:"Not Available"}  />
                                                                                                                :
                                                                                                                    <img src={Dummy_Image} className="img-fluid"  alt={data3.name?data3.name:"Not Available"} />
                                                                                                                }
                                                                                                                </div>
                                                                                                                <div className="dish-details">
                                                                                                                    <div className="d-flex justify-content-between">
                                                                                                                        <div className="pt-1">
                                                                                                                            <p className="dish-title mb-2">{data3.name?data3.name:"Not Available"}</p>
                                                                                                                            <p className="dish-info">{data3.description?data3.description:"No Description"}</p>
                                                                                                                            <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3 dish-tag">
                                                                                                                                {data3.customisable&&<span class="cuisine-label">CUSTOMISABLE</span>}
                                                                                                                                {data3&&data3.allergenList&&data3.allergenList.length>0?
                                                                                                                                    <React.Fragment>
                                                                                                                                        {data3&&data3.allergenList&&data3.allergenList.map((allergy,index)=>{
                                                                                                                                            return(
                                                                                                                                                <React.Fragment key={index}>
                                                                                                                                                    <span class="cuisine-label">{allergy.name?allergy.name:''}</span>
                                                                                                                                                </React.Fragment>
                                                                                                                                            )
                                                                                                                                        })}
                                                                                                                                    </React.Fragment>
                                                                                                                                :
                                                                                                                                    null
                                                                                                                                }
                                                                                                                                {data3&&data3.dietaryList&&data3.dietaryList.length>0?
                                                                                                                                    <React.Fragment>
                                                                                                                                        {data3&&data3.dietaryList&&data3.dietaryList.map((dietry,index)=>{
                                                                                                                                            return(
                                                                                                                                                <React.Fragment key={index}>
                                                                                                                                                    <span class="cuisine-label">{dietry.name?dietry.name:''}</span>
                                                                                                                                                </React.Fragment>
                                                                                                                                            )
                                                                                                                                        })}
                                                                                                                                    </React.Fragment>
                                                                                                                                :
                                                                                                                                    null
                                                                                                                                }
                                                                                                                               
                                                                                                                            </p>
                                                                                                                        </div>
                                                                                                                        <div className="dish-price">
                                                                                                                            <p>{data3.priceUnit?data3.priceUnit:"$"}{data3.price?data3.price.toFixed(2):"-"}</p>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="d-block">
                                                                                                                        <hr className="mt-0 mb-0"></hr>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            </NavLink>

                                                                                                        </div>

                                                                                                    </React.Fragment>
                                                                                                )
                                                                                            })}
                                                                                        </div>
                                                                                    </React.Fragment>
                                                                                :
                                                                                    <p>no Dish Available</p>
                                                                                }
                                                                            </React.Fragment>
                                                                        }
                                                                    </React.Fragment>

                                                                    </React.Fragment>
                                                                            )
                                                                        })}

                                                                </Card.Body>
                                                            </React.Fragment>
                                                        :
                                                            <p>no Sub Categories</p>
                                                        }
                                                    </Accordion.Collapse>
                                                </Card>
                                            </React.Fragment>
                                        )
                                    })}
                                    
                                </React.Fragment>
                                :
                                <p>no Categories</p>
                            }
                            
                            {/* <Card>
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
                            </Card> */}

                            {/* <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <ContextAwareToggle eventKey="1">SHAKES</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card> */}

                            {/* <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <ContextAwareToggle eventKey="2">BIGGER PLATES</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card> */}
{/* 
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <ContextAwareToggle eventKey="3">DESSERTS</ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card> */}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuAccordianCommonComp;
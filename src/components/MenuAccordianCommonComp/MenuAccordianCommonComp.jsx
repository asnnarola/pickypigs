import React, { useContext,useState } from "react";
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import dishimg from "../../assets/images/restaurant-dish/dish-img.png";
import Diningtable from "../../assets/images/restaurant-dish/diningtable.svg";
import "./MenuAccordianCommonComp.scss";

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

const MenuAccordianCommonComp = (props) => {

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-12">
                        <Accordion defaultActiveKey="0" className="menudisc-accordian mt-3">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="txt-darkgreen flex-wrap align-items-center brandon-Bold card-header d-flex justify-content-between">
                                    <ContextAwareToggle eventKey="0">buns</ContextAwareToggle>
                                    
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
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
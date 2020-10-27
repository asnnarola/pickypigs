import React ,{ useContext } from "react";
import {Accordion,Card} from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Diningtable from "../../assets/images/restaurant-dish/diningtable.svg";

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        className="text-uppercase"
        style={{ textAlign:"left",backgroundColor: isCurrentEventKey ? 'pink' : 'lavender',color: isCurrentEventKey ? 'red' : 'black'}}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

const MenuAccordianCommonComp=(props)=>{

    return(
        <>
        <section>
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <ContextAwareToggle eventKey="0">buns</ContextAwareToggle>
                        </Accordion.Toggle>        
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="d-flex">
                                            <div className="mr-3">
                                                <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                                            </div>
                                            <div  className="d-flex border-bottom">
                                                <div className="pt-1">
                                                    <p className="">Denny's Benny Family</p>
                                                    <p className="">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                    <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3">
                                                        <span class="cuisine-label">CUSTOMISABLE</span>
                                                        <span class="cuisine-label">VE</span>
                                                        <span class="cuisine-label">V</span>
                                                        <span class="cuisine-label">GF</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>£17.80</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="d-flex">
                                            <div className="mr-3">
                                                <img src={Diningtable} className="img-fluid" alt="Diningtable" />
                                            </div>
                                            <div  className="d-flex border-bottom">
                                                <div className="pt-1">
                                                    <p className="">Denny's Benny Family</p>
                                                    <p className="">freshly made every day with avocados, lime & coriander with trealy Farm chorizo</p>
                                                    <p className="txt-lightgray mb-2 d-flex flex-wrap align-items-center mt-3">
                                                        <span class="cuisine-label">CUSTOMISABLE</span>
                                                        <span class="cuisine-label">VE</span>
                                                        <span class="cuisine-label">V</span>
                                                        <span class="cuisine-label">GF</span>
                                                    </p>
                                                </div>
                                                <div>
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
                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                        </Accordion.Toggle>    
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </section>
        </>
    )
}

export default MenuAccordianCommonComp;
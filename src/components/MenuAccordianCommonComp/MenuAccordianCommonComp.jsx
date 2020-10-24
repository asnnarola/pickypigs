import React ,{ useContext } from "react";
import {Accordion,Card} from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
       
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

const MenuAccordianCommonComp=()=>{
    return(
        <>
        <section>
            <div>
                <h1>RestaurantDiscPage</h1>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                        </Card.Header>
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
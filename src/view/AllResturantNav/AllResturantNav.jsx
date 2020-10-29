import React,{useState} from 'react';
import { Button, Nav, Form, Navbar, Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import menuline from "../../assets/images/menu-line.svg"
import AllRestaurantFilterModal from '../AllRestaurantFilterModal/AllRestaurantFilterModal';

const AllResturantNav = () => {
  
    let[filterModalShow,setFilterModalShow]=useState(false)
    const filterModalClose=()=>{
        setFilterModalShow(false)
    }

    return (
        <>
            <Navbar bg="light" variant="light" className="align-items-center pl-0 pr-0 pb-3 allrestaurant-nav">
                <Navbar.Brand href="#home" className="pt-0 pb-0 menurestaurant-btn">
                    <img src={menuline} className="img-fluid" alt="menuline" />
                </Navbar.Brand>
                <h4 className="brandon-Bold restaurant-no mb-0">520 Restaurants</h4>
                <div className="ml-auto d-flex shortby-btn">
                    <Form inline className="mr-5">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label className="mr-2">Short By:</Form.Label>
                            <Form.Control as="select" custom>
                                <option onClick={(e)=>{alert('aaaa')}}>Recommended</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    
                    <Button className="filtershort-btn ml-2 p-0 filtershort-lightbtn" onClick={()=>{setFilterModalShow(true)}}>
                            Filters<img width="20" src={filtershorticonpink} className="img-fluid" alt="filterIcon" />
                    </Button>
                    <AllRestaurantFilterModal show={filterModalShow} onHide={filterModalClose}/>
                </div>
                
            </Navbar>
        </>
    )
}

export default withRouter(AllResturantNav)

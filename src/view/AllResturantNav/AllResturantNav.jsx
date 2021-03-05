import React, { useState, useEffect } from 'react';
import { Button, Nav, Form, Navbar, Modal, Collapse } from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'
import search_icon from "../../assets/images/search_icon.svg"
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import menuline from "../../assets/images/menu-line.svg"
import FilterList from '../../components/FilterList/FilterList';
import AllRestaurantFilterModal from '../AllRestaurantFilterModal/AllRestaurantFilterModal';
import './AllResturantNav.scss';

const AllResturantNav = (props) => {

    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [filterModalShow, setFilterModalShow] = useState(false)
    const filterModalClose = () => {
        setFilterModalShow(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let ele = document.getElementById("selected_search_bar")
            if (window.scrollY > 170) {
                ele && ele.classList.add("d-block")
            } else {
                ele && ele.classList.remove("d-block")
            }
        });
    }, [window.scrollY]);

    return (
        <>
        <section className="AllResturantNav">
            <Navbar bg="light" variant="light" className="align-items-center pl-0 pr-0 pb-3 allrestaurant-nav container">
                <NavLink to="/" className="pt-0 pb-0 menurestaurant-btn">
                    <img src={menuline} className="img-fluid" alt="menuline" />
                </NavLink>
                <h4 className="brandon-Bold restaurant-no mb-0">{props.totalrestaurant}&nbsp;Restaurants</h4>
                <div className="ml-auto d-flex shortby-btn">
                    <div className="d-none" id="selected_search_bar">
                        <div className="search-topnav mr-5 position-relative">
                            <div className="search-navicon" onClick={() => setOpenSearchBar(!openSearchBar)}>
                                <img src={search_icon} className="img-fluid" alt="search_icon" />
                            </div>
                            <Form.Control type="text" className="w-100 search-input brandon-Medium" placeholder="Search for restaurant or dish" />
                        </div>
                        {/* <Button onClick={() => setOpenSearchBar(!openSearchBar)}>Search for restaurant or dish</Button> */}
                        <Collapse in={openSearchBar}>
                            <div style={{ position: 'absolute', top: 20, left: 0, width: '100%' }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="fr-wrapper fr-rl-wrapper">
                                            <FilterList showautosuggestion={false}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <Form inline className="mr-5">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label className="mr-2">Short By:</Form.Label>
                            <Form.Control as="select" custom>
                                <option onClick={(e) => { alert('aaaa') }}>Popularity</option>
                                <option selected>Relevance</option>
                                <option>Price High to Low</option>
                                <option>Price Low to High</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>

                    <Button className="filtershort-btn ml-2 p-0 filtershort-lightbtn" onClick={() => { setFilterModalShow(true) }}>
                        Filters<img width="20" src={filtershorticonpink} className="img-fluid" alt="filterIcon" />
                    </Button>
                    <AllRestaurantFilterModal show={filterModalShow} onHide={filterModalClose} />
                </div>

            </Navbar>
        </section>
        </>
    )
}

export default withRouter(AllResturantNav)

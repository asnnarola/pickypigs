import React,{useState,useEffect} from 'react';
import { Button, Nav, Form, Navbar, Modal,Collapse} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import filtershorticonpink from "../../assets/images/filtershort-pinkicon.svg"
import menuline from "../../assets/images/menu-line.svg"
import FilterList from '../../components/FilterList/FilterList';
import AllRestaurantFilterModal from '../AllRestaurantFilterModal/AllRestaurantFilterModal';

const AllResturantNav = () => {

    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [filterModalShow,setFilterModalShow]=useState(false)
    const filterModalClose=()=>{
        setFilterModalShow(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
                let ele = document.getElementById("selected_search_bar")
                if (window.scrollY > 170 ) {
                    ele&&ele.classList.add("d-block")
                } else {
                    ele&&ele.classList.remove("d-block")
                }
            });
    }, [window.scrollY]);

    return (
        <>
            <Navbar bg="light" variant="light" className="align-items-center pl-0 pr-0 pb-3 allrestaurant-nav">
                <Navbar.Brand href="#home" className="pt-0 pb-0 menurestaurant-btn">
                    <img src={menuline} className="img-fluid" alt="menuline" />
                </Navbar.Brand>
                <h4 className="brandon-Bold restaurant-no mb-0">520 Restaurants</h4>
                <div className="ml-auto d-flex shortby-btn">
                    <div className="d-none" id="selected_search_bar">
                        <Button onClick={() => setOpenSearchBar(!openSearchBar)}>Search for restaurant or dish</Button>
                        <Collapse in={openSearchBar}>
                            <div style={{position:'absolute',top:20,left:0,width:'100%'}}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="fr-wrapper fr-rl-wrapper">
                                                <FilterList filterIcon={true} />
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
                                <option onClick={(e)=>{alert('aaaa')}}>Popularity</option>
                                <option selected>Relevance</option>
                                <option>Price High to Low</option>
                                <option>Price Low to High</option>
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

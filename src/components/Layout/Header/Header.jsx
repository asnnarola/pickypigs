import React, { useEffect, useState } from 'react'
import { Button, Nav, Form, Navbar, Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import "./Header.scss"
import logo from "../../../assets/images/logo.svg"
import cart from "../../../assets/images/cart.svg"
import search_icon from "../../../assets/images/search_icon.svg"
import { useAppState } from '../../../context'
import Signup from "../../../view/Signup/Signup"

const Header = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getUser } = useAppState("useGlobal")

    useEffect(() => {
        window.addEventListener('scroll', () => {
                let ele = document.getElementById("navbar")
                if (window.scrollY !== 0) {
                ele.classList.add("navsticky")
                } else {
                    ele.classList.remove("navsticky")
                }
            });
    }, [])

    return (
        <Navbar bg="transparent" id="navbar" expand="lg" className="container main-header">
            <Navbar.Brand href="#home" className="pr-lg-5 mr-lg-5">
                <img src={logo} className="img-fluid mr-2" alt="logo" />
                <span className="logo-txt">Picky Pigs</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="menu-list">
                <Nav className="mr-auto">
                    <Nav.Link className="menu-link mr-lg-5" href="#home">Who</Nav.Link>
                    <Nav.Link className="menu-link mr-lg-5" href="#link">What</Nav.Link>
                    <Nav.Link className="menu-link" href="#link">How</Nav.Link>
                </Nav>
                <Form inline className="navright-btn">
                    <div className="search-topnav mr-3 position-relative">
                        <div class="search-navicon">
                            <img src={search_icon} className="img-fluid" alt="search_icon" />
                        </div>
                        <Form.Control type="text" className="w-100 search-input brandon-Medium" placeholder="Search"/>
                    </div>
                    <Button variant="outline-success" className="mr-3 theme-light-btn pt-2 pb-2 pl-4 pr-4 radius-50">Partner with us</Button>
                    <Link onClick={!getUser() && handleShow} variant="" className="outline-success theme-light-btn pt-2 pb-2 pl-4 pr-4 mr-4">
                        {getUser() ? getUser().email: "Login"}
                         <svg className="user-icon ml-2" fill="#333" xmlns="http://www.w3.org/2000/svg" width="10.672" height="14" viewBox="0 0 10.672 14">
                            <path id="Path_372" data-name="Path 372" d="M5.336.264H4V-1.064a1.959,1.959,0,0,0-.268-1A1.986,1.986,0,0,0,3-2.8a1.959,1.959,0,0,0-1-.268H-2A1.959,1.959,0,0,0-3-2.8a1.986,1.986,0,0,0-.728.728,1.959,1.959,0,0,0-.268,1V.264H-5.336V-1.064A3.273,3.273,0,0,1-4.88-2.752a3.257,3.257,0,0,1,1.2-1.192A3.258,3.258,0,0,1-2-4.4H2a3.258,3.258,0,0,1,1.68.456,3.257,3.257,0,0,1,1.2,1.192,3.273,3.273,0,0,1,.456,1.688ZM0-5.736A3.916,3.916,0,0,1-2.016-6.28a3.985,3.985,0,0,1-1.44-1.432A3.952,3.952,0,0,1-4-9.732a3.952,3.952,0,0,1,.544-2.02,3.985,3.985,0,0,1,1.44-1.432A3.873,3.873,0,0,1,0-13.736a3.873,3.873,0,0,1,2.016.552,3.985,3.985,0,0,1,1.44,1.432A3.952,3.952,0,0,1,4-9.732a3.952,3.952,0,0,1-.544,2.02A3.985,3.985,0,0,1,2.016-6.28,3.916,3.916,0,0,1,0-5.736ZM0-7.064a2.573,2.573,0,0,0,1.344-.368,2.609,2.609,0,0,0,.96-.952,2.652,2.652,0,0,0,.36-1.348A2.652,2.652,0,0,0,2.3-11.08a2.609,2.609,0,0,0-.96-.952A2.573,2.573,0,0,0,0-12.4a2.573,2.573,0,0,0-1.344.368,2.609,2.609,0,0,0-.96.952,2.652,2.652,0,0,0-.36,1.348A2.652,2.652,0,0,0-2.3-8.384a2.609,2.609,0,0,0,.96.952A2.573,2.573,0,0,0,0-7.064Z" transform="translate(5.336 13.736)" />
                        </svg>
                    </Link>
                   <img src={cart} className="img-fluid" alt="cart"/>
                </Form>
                <Modal show={show} onHide={handleClose} className="signup-modal">
                    <Modal.Body className="p-0">
                        <Signup handleClose={handleClose} show={show}/>
                    </Modal.Body>
                </Modal>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)

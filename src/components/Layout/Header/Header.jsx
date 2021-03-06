import React, { useEffect, useRef, useState } from 'react'
import {Button, Nav, Form, Navbar, Modal} from 'react-bootstrap'
import {Link,NavLink,useHistory, withRouter} from 'react-router-dom'
import "./Header.scss"
import logo from "../../../assets/images/logo.svg"
import cart from "../../../assets/images/cart.svg"
import search_icon from "../../../assets/images/search_icon.svg"
import { useAppState } from '../../../context'
import Signup from "../../../view/Signup/Signup"
import SignInPage from '../../../view/SignInPage/SignInPage'
import { useDispatch, useSelector } from 'react-redux';
import {showSignUpPopup,showSignInPopup, logoutUser, showVerificationPopup} from '../../../redux/actions/generalActions'
import ForgotPasswordPage from '../../../view/ForgotPasswordPage/ForgotPasswordPage'
import RegistrationSuccessScreen from '../../RegistrationSuccessScreen/RegistrationSuccessScreen'
import AdminLoginPage from '../../../view/AdminLoginPage/AdminLoginPage'
import SignUpModalComp from '../../SignUpModalComp/SignUpModalComp'
import { showAdminSignUpPopup } from '../../../redux/actions/restaurantAdminAction'
import {SERVER_URL} from '../../../shared/constant'
import CustomLoadingComp from '../../CustomLoadingComp/CustomLoadingComp'
import EmailverificationSuccessScreen from '../../EmailverificationSuccessScreen/EmailverificationSuccessScreen'
import SearchResultDisplayComp from '../../SearchResultDisplayComp/SearchResultDisplayComp'


function useOutsideAlerter(ref,setUserTextFocus) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                        setUserTextFocus(false)
                    }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Header = (props) => {
    const dispatch=useDispatch();
    const history = useHistory();

    const [headerSearchText, setHeaderSearchText] = useState("")
    const [headerTextFocus, setHeaderTextFocus] = useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,setHeaderTextFocus);

    const [showDropDown, setShowDropDown] = useState(false);

    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => dispatch(showSignUpPopup(false));

    const [showLogIn, setShowLogIn] = useState(false);
    const handleCloseLogIn = () => dispatch(showSignInPopup(false));
    
    const [forgotPassword, setForgotPassword] = useState(false);
    const handleCloseForgotPassword = () => setForgotPassword(false);

    const [registration, setRegistration] = useState(false);
    const handleCloseRegistration = () => setRegistration(false);

    const [verification, setVerification] = useState(false);
    const handleCloseVerification = () => setVerification(false);

    const signUpSuccess = useSelector((state) => state.general.isSignedUp);
    const signUpModal = useSelector((state) => state.general.showSignUpPopup);
    useEffect(() => {
        setShowSignUp(signUpModal);
      },[signUpSuccess,signUpModal])

    const signInSuccess = useSelector((state) => state.general.isSignedIn);
    const signInModal = useSelector((state) => state.general.showSignInPopup);
    useEffect(() => {
        setShowLogIn(signInModal);
      },[signInSuccess,signInModal])

    const registerSuccess = useSelector((state) => state.general.isRegisterSuccess);
    const registerModal = useSelector((state) => state.general.showSignUpSuccessPopup);
    useEffect(() => {
            setRegistration(registerModal);
      },[registerModal])  


    const verificationModal = useSelector((state) => state.general.showVerificationPopup);
    useEffect(() => {
        setVerification(verificationModal);
      },[verificationModal])  
    

    const [showAdminSignUp, setAdminSignUp] = useState(false);
    const handleCloseAdminSignUp = () => dispatch(showAdminSignUpPopup(false));
    const adminSignUpSuccess = useSelector((state) => state.restaurantAdmin.isAdminSignedUp);
    const adminSignUpModal = useSelector((state) => state.restaurantAdmin.showAdminSignUpPopup);
    useEffect(() => {
        setAdminSignUp(adminSignUpModal);
      },[adminSignUpSuccess,adminSignUpModal])

      let User_Data=useSelector((state)=>{
        return state.userProfile
    });
    let {userProfile_Data,isLoading}=User_Data;


    const token = localStorage.getItem("access_token");

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let ele = document.getElementById("navbar")
            if (window.scrollY !== 0) {
                ele&&ele.classList.add("navsticky")
            } else {
                ele&&ele.classList.remove("navsticky")
            }
        });
    }, [])
    const current_page = props.location.pathname;

    return (
        <Navbar bg="transparent" id="navbar" expand="lg" className=" main-header">
            <div className="container">
            <Link to="/" className="navbar-brand pr-lg-5 mr-lg-5">
                <img src={logo} className="img-fluid mr-2" alt="logo" />
                <span className="logo-txt">Picky Pigs</span>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="menu-list">
                <Nav className="mr-auto">
                    <NavLink className="menu-link mr-lg-5" activeStyle={{color:'#cb007b'}} to="/who">Who</NavLink>
                    <NavLink className="menu-link mr-lg-5" activeStyle={{color:'#cb007b'}} to="/how">What</NavLink>
                    {/* <NavLink className="menu-link" activeStyle={{color:'#cb007b'}} to="/how">How</NavLink> */}
                </Nav>
                
                <Form inline className="navright-btn userlogin-after ">
                    {current_page!=="/restaurant_login"&&current_page!=="/allrestaurant"&&
                        <div ref={wrapperRef} className="search-topnav mr-5 position-relative">
                            <NavLink to={{ pathname: "/allrestaurant", search: `?search=${headerSearchText}` }} className="search-navicon">
                                    <img src={search_icon} className="img-fluid" alt="search_icon" />
                            </NavLink>
                            <Form.Control value={headerSearchText} onFocus={()=>{setHeaderTextFocus(true)}} onChange={(e)=>{setHeaderSearchText(e.target.value)}}  type="text" className="w-100 search-input brandon-Medium" placeholder="Search for restaurant or dish" />
                            {true?
                                <React.Fragment>
                                    {headerSearchText&&headerSearchText!==" "&&headerTextFocus&&
                                        <div  className="position-absolute fr-rsdish-filterwrapper">
                                            <SearchResultDisplayComp searchtext={headerSearchText}/>
                                        </div>
                                    }
                                </React.Fragment>
                            :
                                null
                            }
                        </div>
                    }
                    
                    {   token&&userProfile_Data&&userProfile_Data.role==="user"
                    ?
                        <div className="btn-group userprofile-dropdown">
                            <button type="button" className="btn btn-secondary dropdown-toggle userprofile-dropbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="user-name">
                                    {userProfile_Data&&userProfile_Data.userDetail?
                                        <img src={`${SERVER_URL}/${userProfile_Data.userDetail.profileImage}`} className="userprofile-img img-fluid mr-2 border" alt="logo" />
                                    :       
                                        <img src={logo} className="userprofile-img img-fluid mr-2" alt="logo" />
                                    }
                                    {userProfile_Data&&userProfile_Data.userDetail&&userProfile_Data.userDetail.name?
                                    <span>{userProfile_Data.userDetail.name}</span>
                                    :
                                    <span>Hello</span>
                                    }
                                </div>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <NavLink to="/user_detail" type="button" className="dropdown-item" type="button">My Profile</NavLink>
                                <button className="dropdown-item" type="button">My Favorites</button>
                                <button className="dropdown-item" type="button" onClick={()=>{dispatch(logoutUser(history))}}>Logout</button>
                            </div>
                        </div>
                    :
                        <React.Fragment>
                        <div className="partner-nav-dropdown">  
                            <div id="nav">
                                <li>
                                    <Button 
                                        onClick={()=>{setShowDropDown(!showDropDown)}} variant="outline-success" 
                                        className="theme-light-btn pt-2 pb-2 pl-4 pr-4 radius-50 position-relative"
                                    >
                                            Partner with us
                                    </Button>
                                    <ul>
                                        <li><NavLink className="menu-link mr-lg-5" activeStyle={{color:'#cb007b'}} to="/restaurant_login">Sign In</NavLink></li>
                                        <li><NavLink onClick={()=>{dispatch(showAdminSignUpPopup(true))}} className="menu-link mr-lg-5"  to="/restaurant_login">Sign Up</NavLink></li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        {current_page!=="/restaurant_login"&&
                            <Button onClick={()=>{setShowLogIn(true)}}  variant="outline-success" className="ml-3 outline-success theme-light-btn pt-2 pb-2 pl-4 pr-4 ">
                                Login
                                <svg className="user-icon ml-2" fill="#333" xmlns="http://www.w3.org/2000/svg" width="10.672" height="14" viewBox="0 0 10.672 14">
                                    <path id="Path_372" data-name="Path 372" d="M5.336.264H4V-1.064a1.959,1.959,0,0,0-.268-1A1.986,1.986,0,0,0,3-2.8a1.959,1.959,0,0,0-1-.268H-2A1.959,1.959,0,0,0-3-2.8a1.986,1.986,0,0,0-.728.728,1.959,1.959,0,0,0-.268,1V.264H-5.336V-1.064A3.273,3.273,0,0,1-4.88-2.752a3.257,3.257,0,0,1,1.2-1.192A3.258,3.258,0,0,1-2-4.4H2a3.258,3.258,0,0,1,1.68.456,3.257,3.257,0,0,1,1.2,1.192,3.273,3.273,0,0,1,.456,1.688ZM0-5.736A3.916,3.916,0,0,1-2.016-6.28a3.985,3.985,0,0,1-1.44-1.432A3.952,3.952,0,0,1-4-9.732a3.952,3.952,0,0,1,.544-2.02,3.985,3.985,0,0,1,1.44-1.432A3.873,3.873,0,0,1,0-13.736a3.873,3.873,0,0,1,2.016.552,3.985,3.985,0,0,1,1.44,1.432A3.952,3.952,0,0,1,4-9.732a3.952,3.952,0,0,1-.544,2.02A3.985,3.985,0,0,1,2.016-6.28,3.916,3.916,0,0,1,0-5.736ZM0-7.064a2.573,2.573,0,0,0,1.344-.368,2.609,2.609,0,0,0,.96-.952,2.652,2.652,0,0,0,.36-1.348A2.652,2.652,0,0,0,2.3-11.08a2.609,2.609,0,0,0-.96-.952A2.573,2.573,0,0,0,0-12.4a2.573,2.573,0,0,0-1.344.368,2.609,2.609,0,0,0-.96.952,2.652,2.652,0,0,0-.36,1.348A2.652,2.652,0,0,0-2.3-8.384a2.609,2.609,0,0,0,.96.952A2.573,2.573,0,0,0,0-7.064Z" transform="translate(5.336 13.736)" />
                                </svg>
                            </Button>
                        }
                        {/* <img src={cart} className="img-fluid" alt="cart" /> */}

                        </React.Fragment>
                    }
                </Form>
                    
                
                <Modal centered show={showSignUp} onHide={handleCloseSignUp} className="signup-modal">
                    <Modal.Body className="p-0 position-relative">
                        <Signup  
                            gotoLogin={() => {dispatch(showSignUpPopup(false));dispatch(showSignInPopup(true));}} 
                            onHide={handleCloseSignUp} show={showSignUp} 
                        />
                    </Modal.Body>
                </Modal>

                <Modal centered show={showLogIn} onHide={handleCloseLogIn} className="SignInPage-modal">
                    <Modal.Body className="p-0 position-relative">
                        <SignInPage 
                            openForgotPass={() => { setShowLogIn(false); setForgotPassword(true); }}
                            gotoSignup={() => { dispatch(showSignUpPopup(true)); setShowLogIn(false); }}
                            onHide={()=>{setShowLogIn(false)}} show={showLogIn} 
                        />
                    </Modal.Body>
                </Modal>

                <Modal centered show={forgotPassword} onHide={handleCloseForgotPassword} className="ForgotPasswordPage-modal">
                    <Modal.Body className="p-0 position-relative">
                        <ForgotPasswordPage 
                            gotoLogin={() => { setForgotPassword(false); setShowLogIn(true); }} 
                            onHide={handleCloseForgotPassword} show={forgotPassword} 
                        />
                    </Modal.Body>
                </Modal>

                <Modal centered show={registration} onHide={handleCloseRegistration} className="RegistrationSuccessScreen-modal">
                    <Modal.Body className="p-0 position-relative">
                        <RegistrationSuccessScreen 
                            onHide={handleCloseRegistration} show={registration} 
                        />
                    </Modal.Body>
                </Modal>

                <Modal centered show={showAdminSignUp} onHide={handleCloseAdminSignUp} className="SignUpModalComp-modal">
                    <Modal.Body className="p-0 position-relative">
                        <SignUpModalComp 
                            onHide={handleCloseAdminSignUp} show={showAdminSignUp} 
                        />
                    </Modal.Body>
                </Modal>

                <Modal centered show={verification} onHide={handleCloseVerification} className="EmailverificationSuccessScreen-modal">
                    <Modal.Body className="p-0 position-relative">
                        <EmailverificationSuccessScreen 
                            gotoLogin={() => {dispatch(showVerificationPopup(false));dispatch(showSignInPopup(true));}}
                            onHide={handleCloseVerification} show={verification} 
                        />
                    </Modal.Body>
                </Modal>
                



            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default withRouter(Header)

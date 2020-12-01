import React from "react";
import { Button,Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {ReactComponent as Location} from "../../../assets/images/location-gray.svg"
import './SubMenuModalMobileComp.scss';

const SubMenuModalMobileComp=(props)=>{
    return(
        <>
        <section >
            <div className="subMenuModalMobileComp-container">
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    
                    // style={{ bottom:0,flexDirection:'row',alignItems:'flex-end',display:'flex'}}
                >
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                        </Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body style={{}}>
                        <div className="mb-3">
                            <Link to='/preference_mobile' className="w-100 d-flex justify-content-between align-items-center">
                                Preference
                                <Location/>
                            </Link>
                        </div>
                        <div className="mb-3">
                            <Link to='/mobile_user' className="w-100 d-flex justify-content-between align-items-center">
                                Account
                                <Location/>
                            </Link>
                        </div>
                        <div className="mb-3">
                            <Link className="w-100 d-flex justify-content-between align-items-center">
                                Help Center
                                <Location/>
                            </Link>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </section>
        </>
    )
}

export default SubMenuModalMobileComp;
import React, { useState } from "react";
import { Modal, Button, } from "react-bootstrap";
import './RestaurantCookingMethodModal.scss';
import cookingicon from "../../assets/images/dishinfo_img/cooking.svg";
import rightarrow from "../../assets/images/dishinfo_img/right-arrow.svg";

const RestaurantCookingMethodModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="rs-cookingbtn">
                <Button variant="primary" onClick={handleShow}>
                    <p className="d-flex align-items-center mb-0 icontext-content">
                        <div className="d-flex align-items-center w-100">
                            <img src={cookingicon} alt="" className="img-fluid mr-2 position-absolute" />
                            <div className="d-flex align-items-center w-100 justify-content-between rs-infomodal-sub">
                                <span className="pl-4 ml-2 text-left rs-infomodal-name">Cooking method</span>
                                <div><img src={rightarrow} alt="" className="img-fluid" /></div>
                            </div>
                        </div>
                    </p>
                    <p className="rs-infomodalbtn-detail mb-0 text-left">See how we cook</p>
                </Button>
            </div>
            <Modal show={show} onHide={handleClose} animation={false} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }}>
                <Modal.Header closeButton>
                    <Modal.Title>RestaurentDiscCaloriesInfoModal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <p>Voluptua sed diam lorem sanctus ipsum sed sanctus nonumy. Accusam sea tempor labore accusam diam labore no sea amet, at sed et et takimata et et voluptua duo. Aliquyam et.</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RestaurantCookingMethodModal;
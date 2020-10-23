import React,{useState} from "react";
import {Modal,Button,} from "react-bootstrap";

const RestaurentDiscAllergiesInfoModal=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <section >
            <Button variant="primary" onClick={handleShow}>
                RestaurentDiscAllergiesInfoModal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }}>
                <Modal.Header closeButton>
                    <Modal.Title>RestaurentDiscAllergiesInfoModal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                   <p>Voluptua sed diam lorem sanctus ipsum sed sanctus nonumy. Accusam sea tempor labore accusam diam labore no sea amet, at sed et et takimata et et voluptua duo. Aliquyam et.</p>
                </Modal.Footer>
            </Modal>
        </section>
        </>
    )
}

export default RestaurentDiscAllergiesInfoModal;
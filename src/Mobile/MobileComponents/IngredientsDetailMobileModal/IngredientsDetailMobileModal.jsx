import React from "react";
import { Button,Modal} from 'react-bootstrap';
import Ingredientsicon from "../../../assets/images/dishinfo_img/Ingredients-icon.svg";
import './IngredientsDetailMobileModal.scss';

const IngredientsDetailMobileModal=(props)=>{
    const ingredient = [{ "serving": 36.9, "ingredient": "raw broccoli", "allergies": "", "amend": "no" }, { "serving": 12.9, "ingredient": "cheese", "allergies": "dairy", "amend": "yes" }, { "serving": 15.5, "ingredient": "potatoes", "allergies": "", "amend": "yes" }, { "serving": 20.5, "ingredient": "lenties", "allergies": "", "amend": "yes" }, { "serving": 15.5, "ingredient": "olives", "allergies": "", "amend": "yes" }, { "serving": 50.5, "ingredient": "peanuts", "allergies": "peanuts", "amend": "yes" }, { "serving": 15.5, "ingredient": "housing dressing", "allergies": "", "amend": "yes" }]
    const {onHide,show,data} = props;

    return(
        <>
        <section >
            <div className="" >
                <Modal
                    show={show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    style={{position:'relative'}}
                >
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                        </Modal.Title>
                    </Modal.Header> */}

                    <Modal.Body>
                        {data}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="d-flex align-items-start mb-3">
                                    <div className="position-absolute">
                                        <img src={Ingredientsicon} alt="" className="img-fluid " />
                                    </div>
                                    <h4 className="pl-4 ml-3 mb-0 txt-darkgreen mb-0">Ingredients</h4>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="txt-lightgray fw-400">Serving</th>
                                        <th scope="col" className="txt-lightgray fw-400">Ingredient</th>
                                        <th scope="col" className="txt-lightgray fw-400">Allergies</th>
                                        <th scope="col" width="50px" className="txt-lightgray fw-400">Amend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ingredient.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{data.serving}</th>
                                                <td><span>{data.ingredient}</span></td>
                                                <td>{data.allergies}</td>
                                                <td>{data.amend}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer> */}
                    <div style={{position:'absolute',bottom:-50,left:'40%'}}>
                        <Button onClick={onHide}>Close</Button>
                    </div>
                </Modal>
            </div>
        </section>
        </>
    )
}

export default IngredientsDetailMobileModal;
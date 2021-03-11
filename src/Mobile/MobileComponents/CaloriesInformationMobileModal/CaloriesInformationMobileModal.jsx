import React from "react";
import { Button,Modal} from 'react-bootstrap';
import nutritionFactsicon from "../../../assets/images/dishinfo_img/NutritionFacts-icon.svg";
import './CaloriesInformationMobileModal.scss';

const CaloriesInformationMobileModal=(props)=>{
    return(
        <>
        <section >
            <div className="">
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    {/* <Modal.Header>
                        <Modal.Title className="w-100">
                           
                        </Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                    <p className="d-flex align-items-center mb-0 rsd-icontext-content">
                                <div className="d-flex align-items-center w-100">
                                    <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                                    <div className="d-flex align-items-center w-100 justify-content-between rsd-allergiesinfomodal-sub">
                                        <span className="pl-4 ml-2 text-left rsd-allergiesinfomodal-name">Amount per serving<br></br><b>Calories & Macros</b></span>
                                        <div className="mt-3"><span><b>507</b></span></div>
                                    </div>
                                </div>
                            </p>
                        <div>
                            <hr className="mt-0 mb-0"></hr>
                        </div>
                        <div className="total-fat d-flex justify-content-between flex-wrap mt-3">
                            <p className="mb-1 brandon-Medium">Total Fat</p><p className="mb-1 brandon-Medium">20.84 g</p>
                        </div>
                        <div className="table-responsive rscategory-detail">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td scope="col" colSpan="3" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1 text-right">% Daily Values *</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Total Fat</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">20.84 g</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">32%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Saturated Fat</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">2.88 g</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">14%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Trans Fat</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">-</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Cholesterol</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>0 g</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>0%</b></td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Sodium</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>377 g</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>16%</b></td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Total Carbohydrate</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>65.17 g</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>22%</b></td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Dietary Fiber</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">3.2 g</td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">13%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left pb-3">Sugars</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-3">2.06 g</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Protien</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>16.84 g</b></td>
                                        <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>22%</b></td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin D</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">-</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Calcium</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">130 mg</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">13%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Iron</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">5 mg</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">30%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Potassium</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">667 mg</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">19%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin A</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">0 I U</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">0%</td>
                                    </tr>
                                    <tr>
                                        <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin C</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">7 mg</td>
                                        <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">12%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <hr className="mt-0 mb-0"></hr>
                        </div>
                        <p className="contributes-detailtxt txt-lightgray">
                            * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                        </p>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer> */}
                    <div style={{position:'absolute',bottom:-50,left:'40%'}}>
                        <Button onClick={props.onHide}>Close</Button>
                    </div>
                </Modal>
            </div>
        </section>
        </>
    )
}

export default CaloriesInformationMobileModal;
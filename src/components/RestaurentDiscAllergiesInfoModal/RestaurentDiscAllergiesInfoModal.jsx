import React, { useState } from "react";
import { Modal, Button, } from "react-bootstrap";
import './RestaurentDiscAllergiesInfoModal.scss';
import nutritionFactsicon from "../../assets/images/dishinfo_img/NutritionFacts-icon.svg";
import rightarrow from "../../assets/images/dishinfo_img/right-arrow.svg";

const RestaurentDiscAllergiesInfoModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let {}=props.caloriesandmacrosdetail

    return (
        <>
            <div className="rs-allergiesinfomodalbtn">
                <Button variant="primary" onClick={handleShow}>
                    <p className="d-flex align-items-center mb-0 icontext-content">
                        <div className="d-flex align-items-center w-100">
                            <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                            <div className="d-flex align-items-center w-100 justify-content-between rs-allergiesinfomodal-sub">
                                <span className="pl-4 ml-2 text-left rs-allergiesinfomodal-name">Nutrition Facts<br></br>Calories & Macros</span>
                                <div><img src={rightarrow} alt="" className="img-fluid" /></div>
                            </div>
                        </div>
                    </p>
                    <p className="rs-allergiesinfomodalbtn-detail mb-0 text-left">View additional details</p>
                </Button>
            </div>
            <Modal className="rs-discallergiesinfomadel" show={show} onHide={handleClose} animation={false} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }}>
                <Modal.Header closeButton className="border-bottom-0 align-items-center">
                    <Modal.Title className="w-100">
                        <p className="d-flex align-items-center mb-0 rsd-icontext-content">
                            <div className="d-flex align-items-center w-100">
                                <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                                <div className="d-flex align-items-center w-100 justify-content-between rsd-allergiesinfomodal-sub">
                                    <span className="pl-4 ml-2 text-left rsd-allergiesinfomodal-name">Amount per serving<br></br><b>Calories & Macros</b></span>
                                    <div className="mt-3"><span><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.total?props.caloriesandmacrosdetail.total:'-'}
                                    </b></span></div>
                                </div>
                            </div>
                        </p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <hr className="mt-0 mb-0"></hr>
                    </div>
                    <div className="total-fat d-flex justify-content-between flex-wrap mt-3">
                        <p className="mb-1 brandon-Medium">Total Fat</p><p className="mb-1 brandon-Medium">
                            {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.weight?props.caloriesandmacrosdetail.fat.weight:'-'}
                            &nbsp;
                            {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.fatUnit?props.caloriesandmacrosdetail.fat.fatUnit:'-'}
                        </p>
                    </div>
                    <div className="table-responsive rscategory-detail">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td scope="col" colSpan="3" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1 text-right">% Daily Values *</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Total Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.totalFat&&props.caloriesandmacrosdetail.fat.totalFat.weight?props.caloriesandmacrosdetail.fat.totalFat.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.totalFat&&props.caloriesandmacrosdetail.fat.totalFat.weightUnit?props.caloriesandmacrosdetail.fat.totalFat.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.totalFat&&props.caloriesandmacrosdetail.fat.totalFat.percentage?props.caloriesandmacrosdetail.fat.totalFat.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Saturated Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.saturatedFat&&props.caloriesandmacrosdetail.fat.saturatedFat.weight?props.caloriesandmacrosdetail.fat.saturatedFat.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.saturatedFat&&props.caloriesandmacrosdetail.fat.saturatedFat.weightUnit?props.caloriesandmacrosdetail.fat.saturatedFat.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.saturatedFat&&props.caloriesandmacrosdetail.fat.saturatedFat.percentage?props.caloriesandmacrosdetail.fat.saturatedFat.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Trans Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.transFat&&props.caloriesandmacrosdetail.fat.transFat.weight?props.caloriesandmacrosdetail.fat.transFat.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.transFat&&props.caloriesandmacrosdetail.fat.transFat.weightUnit?props.caloriesandmacrosdetail.fat.transFat.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.transFat&&props.caloriesandmacrosdetail.fat.transFat.percentage?props.caloriesandmacrosdetail.fat.transFat.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Polyunsaturated Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.polyunsaturatedFat&&props.caloriesandmacrosdetail.fat.polyunsaturatedFat.weight?props.caloriesandmacrosdetail.fat.polyunsaturatedFat.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.polyunsaturatedFat&&props.caloriesandmacrosdetail.fat.polyunsaturatedFat.weightUnit?props.caloriesandmacrosdetail.fat.polyunsaturatedFat.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.polyunsaturatedFat&&props.caloriesandmacrosdetail.fat.polyunsaturatedFat.percentage?props.caloriesandmacrosdetail.fat.polyunsaturatedFat.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Monounsaturated Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.monounsaturatedFat&&props.caloriesandmacrosdetail.fat.monounsaturatedFat.weight?props.caloriesandmacrosdetail.fat.monounsaturatedFat.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.monounsaturatedFat&&props.caloriesandmacrosdetail.fat.monounsaturatedFat.weightUnit?props.caloriesandmacrosdetail.fat.monounsaturatedFat.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.fat&&props.caloriesandmacrosdetail.fat.monounsaturatedFat&&props.caloriesandmacrosdetail.fat.monounsaturatedFat.percentage?props.caloriesandmacrosdetail.fat.monounsaturatedFat.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Cholesterol</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.cholesterol&&props.caloriesandmacrosdetail.cholesterol.weight?props.caloriesandmacrosdetail.cholesterol.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.cholesterol&&props.caloriesandmacrosdetail.cholesterol.weightUnit?props.caloriesandmacrosdetail.cholesterol.weightUnit:'-'}
                                    </b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.cholesterol&&props.caloriesandmacrosdetail.cholesterol.percentage?props.caloriesandmacrosdetail.cholesterol.percentage+` %`:'-'}
                                   </b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Sodium</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.sodium&&props.caloriesandmacrosdetail.sodium.weight?props.caloriesandmacrosdetail.sodium.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.sodium&&props.caloriesandmacrosdetail.sodium.weightUnit?props.caloriesandmacrosdetail.sodium.weightUnit:'-'}
                                    </b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.sodium&&props.caloriesandmacrosdetail.sodium.percentage?props.caloriesandmacrosdetail.sodium.percentage+` %`:'-'}
                                   </b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Total Carbohydrate</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.totalWeight?props.caloriesandmacrosdetail.totalCarbohydrate.totalWeight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.weightUnit?props.caloriesandmacrosdetail.totalCarbohydrate.weightUnit:'-'}
                                    </b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.totalPercentage?props.caloriesandmacrosdetail.totalCarbohydrate.totalPercentage+` %`:'-'}
                                    </b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Dietary Fiber</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber&&props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber.weight?props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber&&props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber.weightUnit?props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber&&props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber.percentage?props.caloriesandmacrosdetail.totalCarbohydrate.dietaryFiber.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left pb-3">Sugars</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-3">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.sugars&&props.caloriesandmacrosdetail.totalCarbohydrate.sugars.weight?props.caloriesandmacrosdetail.totalCarbohydrate.sugars.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.sugars&&props.caloriesandmacrosdetail.totalCarbohydrate.sugars.weightUnit?props.caloriesandmacrosdetail.totalCarbohydrate.sugars.weightUnit:'-'}
                                   </td>
                                   <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.totalCarbohydrate&&props.caloriesandmacrosdetail.totalCarbohydrate.sugars&&props.caloriesandmacrosdetail.totalCarbohydrate.sugars.percentage?props.caloriesandmacrosdetail.totalCarbohydrate.sugars.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Protien</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.totalWeight?props.caloriesandmacrosdetail.protien.totalWeight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.weightUnit?props.caloriesandmacrosdetail.protien.weightUnit:'-'}
                                    </b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.totalPercentage?props.caloriesandmacrosdetail.protien.totalPercentage+` %`:'-'}
                                    </b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin D</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminD&&props.caloriesandmacrosdetail.protien.vitaminD.weight?props.caloriesandmacrosdetail.protien.vitaminD.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminD&&props.caloriesandmacrosdetail.protien.vitaminD.weightUnit?props.caloriesandmacrosdetail.protien.vitaminD.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminD&&props.caloriesandmacrosdetail.protien.vitaminD.percentage?props.caloriesandmacrosdetail.protien.vitaminD.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Calcium</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.calcium&&props.caloriesandmacrosdetail.protien.calcium.weight?props.caloriesandmacrosdetail.protien.calcium.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.calcium&&props.caloriesandmacrosdetail.protien.calcium.weightUnit?props.caloriesandmacrosdetail.protien.calcium.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.calcium&&props.caloriesandmacrosdetail.protien.calcium.percentage?props.caloriesandmacrosdetail.protien.calcium.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Iron</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.iron&&props.caloriesandmacrosdetail.protien.iron.weight?props.caloriesandmacrosdetail.protien.iron.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.iron&&props.caloriesandmacrosdetail.protien.iron.weightUnit?props.caloriesandmacrosdetail.protien.iron.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.iron&&props.caloriesandmacrosdetail.protien.iron.percentage?props.caloriesandmacrosdetail.protien.iron.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Potassium</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.potassium&&props.caloriesandmacrosdetail.protien.potassium.weight?props.caloriesandmacrosdetail.protien.potassium.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.potassium&&props.caloriesandmacrosdetail.protien.potassium.weightUnit?props.caloriesandmacrosdetail.protien.potassium.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.potassium&&props.caloriesandmacrosdetail.protien.potassium.percentage?props.caloriesandmacrosdetail.protien.potassium.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin A</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminA&&props.caloriesandmacrosdetail.protien.vitaminA.weight?props.caloriesandmacrosdetail.protien.vitaminA.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminA&&props.caloriesandmacrosdetail.protien.vitaminA.weightUnit?props.caloriesandmacrosdetail.protien.vitaminA.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminA&&props.caloriesandmacrosdetail.protien.vitaminA.percentage?props.caloriesandmacrosdetail.protien.vitaminA.percentage+` %`:'-'}                                  
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin C</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminC&&props.caloriesandmacrosdetail.protien.vitaminC.weight?props.caloriesandmacrosdetail.protien.vitaminC.weight:'-'}
                                        &nbsp;
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminC&&props.caloriesandmacrosdetail.protien.vitaminC.weightUnit?props.caloriesandmacrosdetail.protien.vitaminC.weightUnit:'-'}
                                    </td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">
                                        {props.caloriesandmacrosdetail&&props.caloriesandmacrosdetail.protien&&props.caloriesandmacrosdetail.protien.vitaminC&&props.caloriesandmacrosdetail.protien.vitaminC.percentage?props.caloriesandmacrosdetail.protien.vitaminC.percentage+` %`:'-'}                                  
                                    </td>
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
                    <p>Voluptua sed diam lorem sanctus ipsum sed sanctus nonumy. Accusam sea tempor labore accusam diam labore no sea amet, at sed et et takimata et et voluptua duo. Aliquyam et.</p>
                </Modal.Footer> */}
            </Modal>

        </>
    )
}

export default RestaurentDiscAllergiesInfoModal;
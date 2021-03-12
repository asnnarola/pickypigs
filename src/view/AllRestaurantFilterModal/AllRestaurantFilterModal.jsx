import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AllRestaurantFilterModal.scss';
import { Formik, Field, Form } from 'formik';
import { Accordion, AccordionItem } from 'react-sanfona';
import { getAllAllergyData, getAllDietaryData, getAllLifestyleData, getAllRestaurantFeaturesData } from '../../redux/actions/allergyAction';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';





const AllRestaurantFilterModal = (props) => {
    const dispatch = useDispatch();
    let [opened, setOpened] = useState(true);
    let [reset,setReset]=useState(false);
    const clickOpen = () => {
        setOpened(!opened)
    }
    useEffect(() => {
        dispatch(getAllAllergyData())
        dispatch(getAllDietaryData())
        dispatch(getAllLifestyleData())
        dispatch(getAllRestaurantFeaturesData())

    }, [dispatch])

    let allAllergy_data = useSelector((state) => {
        return state.allergy
    });

    let { isLoading, allergy_Data, dietary_Data, lifestyle_Data, restaurantFeatures_Data } = allAllergy_data;

    const initialValues = {
        allergenId:props.value&&props.value.allergenId?props.value.allergenId:[],
        dietaryId: props.value&&props.value.dietaryId?props.value.dietaryId:[],
        lifestyleId: props.value&&props.value.lifestyleId?props.value.lifestyleId:[],
        featuresId: props.value&&props.value.featuresId?props.value.featuresId:[],
        toggle: props.value&&props.value.toggle?props.value.toggle:false,
        distance: props.value&&props.value.distance?props.value.distance:0,
    }
    const initialValues2 = {
        allergenId:[],
        dietaryId: [],
        lifestyleId: [],
        featuresId:[],
        toggle:false,
        distance:0,
    }
    
    const validationSchema = Yup.object().shape({
      
        // allergenId: Yup.array().required('Please Select Allergen'),
        // dietaryId: Yup.array().required('Please Select  Dietary'),
        // lifestyleId: Yup.array().required('Please Select Lifestyle'),
        // featuresId: Yup.array().required('Please Select Restaurant Feature'),
        // toggle: Yup.boolean().oneOf([true, false]),
        // distance: Yup.string().required('distance is required'),

    });

    const onSubmit = (fields) => {

        props.onChangeData(fields);
        props.onHide();
    }


    return (
        <>
            <Modal className="filter-modal bg-white" backdrop="static" {...props} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="brandon-Bold filter-title">
                        <button className="filtermodal-closebtn fw-600 brandon-Medium pl-0 pr-0 mr-3" onClick={()=>{props.onHide();setReset(false)}}>x</button>
                        <span>Filters</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='filtermodal-wrapper mt-4'>
                        <ul className='accordion-list'>
                            <Formik enableReinitialize={true} initialValues={!reset?initialValues:initialValues2} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ values, resetForm }) => (
                                    <Form>
                                        <button className="clearall-btn" type="reset" onClick={()=>{setReset(true)}}>Clear All</button>
                                        {/* {JSON.stringify(values)} */}
                                        <div className="main-accordion-wrapper ">
                                            <div class="accordion accordion-main " id="accordionExample">
                                                <div class="accordion-item">
                                                    <div id="headingOne">
                                                        <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">Allergen</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                                                        <div className="accordion-body">
                                                            <section className="accordion-list__item ">
                                                                <div className="row">
                                                                    {allergy_Data&&allergy_Data.data.map((data,index) => {
                                                                        return (
                                                                            <div className="col-md-6" key={index}>
                                                                                <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                                    <Field type="checkbox" name="allergenId" value={data._id} className="form-check-input custom-control-input" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{ zIndex: -1 }}>
                                                                                        {data.name}
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-accordion-wrapper ">
                                            <div className="accordion accordion-main " id="accordionExample2">
                                                <div className="accordion-item">
                                                    <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" id="headingTwo">
                                                        <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">Dietary Preference</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                                        <div className="accordion-body">
                                                            <section className="accordion-list__item ">
                                                                <div className="row">
                                                                    {dietary_Data&&dietary_Data.data.map((data,index) => {
                                                                        return (
                                                                            <div className="col-md-6" key={index}>
                                                                                <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                                    <Field type="checkbox" name="dietaryId" value={data._id} className="form-check-input custom-control-input" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{ zIndex: -1 }}>
                                                                                        {data.name}
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-accordion-wrapper ">
                                            <div className="accordion accordion-main " id="accordionExample3">
                                                <div className="accordion-item">
                                                    <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" id="headingThree">
                                                        <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">Lifestyle Choices</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
                                                        <div className="accordion-body">
                                                            <section className="accordion-list__item ">
                                                                <div className="row">
                                                                    {lifestyle_Data&&lifestyle_Data.data.map((data,index) => {
                                                                        return (
                                                                            <div className="col-md-6" key={index}>
                                                                                <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                                    <Field type="checkbox" name="lifestyleId" value={data._id} className="form-check-input custom-control-input" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{ zIndex: -1 }}>
                                                                                        {data.name}
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-accordion-wrapper ">
                                            <div className="accordion accordion-main " id="accordionExample4">
                                                <div className="accordion-item">
                                                    <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" id="headingFour">
                                                        <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">Restaurant Features</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample4">
                                                        <div className="accordion-body">
                                                            <section className="accordion-list__item ">
                                                                <div className="row">
                                                                    {restaurantFeatures_Data&&restaurantFeatures_Data.data.map((data,index) => {
                                                                        return (
                                                                            <div className="col-md-6" key={index}>
                                                                                <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                                    <Field type="checkbox" name="featuresId" value={data._id} className="form-check-input custom-control-input" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{ zIndex: -1 }}>
                                                                                        {data.name}
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-accordion-wrapper ">
                                            <div className="accordion accordion-main " id="accordionExample5">
                                                <div className="accordion-item">
                                                    <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" id="headingFive">
                                                        <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">RESTAURANT DISTANCE</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample5">
                                                        <div className="accordion-body">
                                                            <section className="accordion-list__item mb-0 pb-0">
                                                                <div className="form-check custom-control custom-checkbox filter-checkbox mb-4" >
                                                                    <Field type="checkbox" name="toggle" className="form-check-input custom-control-input" id="exampleCheck15" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck15" style={{ zIndex: -1 }}>
                                                                        Near you (optional)
                                                                    </label>
                                                                </div>
                                                                <div className="form-check custom-control custom-checkbox filter-checkbox pl-0 mb-0">
                                                                    <Field type="range" disabled={values.toggle} name="distance"  class="form-control-range" id="formControlRange" />
                                                                    <label for="formControlRange" className="ranage-txt" style={{ left: values.distance * 2.45 }}> {values.distance}mi</label>

                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                        

                                        <Modal.Footer className="justify-content-center border-top-0 mb-4">
                                            {/* style={{position:"sticky",bottom:0,zIndex:99}} */}
                                            <Button variant="secondary" className="lightgray-btn btn cancel-btn mr-4" type="reset" onClick={()=>{props.onHide();resetForm();setReset(false)}}>Cancel</Button>
                                            <Button type="submit"  variant="primary" className="theme-pink-btn apply-btn brandon-Bold">Apply</Button>
                                        </Modal.Footer>
                                    </Form>
                                )}
                            </Formik>
                        </ul>
                    </div>
                </Modal.Body>


            </Modal>

        </>
    )
}

export default AllRestaurantFilterModal;



import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './RestaurantInfoMenuFilterModal.scss';
import { Formik, Field, Form } from 'formik';
import { getAllAllergyData, getAllDietaryData, getAllLifestyleData } from '../../redux/actions/allergyAction';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';






const RestaurantInfoMenuFilterModal = (props) => {
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

    }, [dispatch])

    let allAllergy_data = useSelector((state) => {
        return state.allergy
    });

    let { isLoading, allergy_Data, dietary_Data, lifestyle_Data,} = allAllergy_data;

    const initialValues = {
        allergenId:props.value&&props.value.allergenId?props.value.allergenId:[],
        dietaryId: props.value&&props.value.dietaryId?props.value.dietaryId:[],
        lifestyleId: props.value&&props.value.lifestyleId?props.value.lifestyleId:[],
       
    }
    const initialValues2 = {
        allergenId:[],
        dietaryId: [],
        lifestyleId: [],
        
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
            <Modal className="filter-modal bg-white dish-filter-modal" backdrop="static" {...props} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }} aria-labelledby="contained-modal-title-vcenter" >
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
                                            <div className="accordion accordion-main " id="accordionExample">
                                                <div className="accordion-item">
                                                    <div id="headingOne">
                                                        <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">ALLERGY</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                                            <div className="accordion accordion-main " id="accordionExample">
                                                <div className="accordion-item">
                                                    <div id="headingOne">
                                                        <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0 text-uppercase">Dietary Preference</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                                            <div className="accordion accordion-main " id="accordionExample">
                                                <div className="accordion-item">
                                                    <div id="headingOne">
                                                        <div className="mb-3 mt-3 pt-1 pb-1 w-100 accordion-button d-flex justify-content-between align-items-center accordion-header position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0 text-uppercase">LifeStyle</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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

export default RestaurantInfoMenuFilterModal;



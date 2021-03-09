import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AllRestaurantFilterModal.scss';
import { Formik, Field, Form } from 'formik';
import { Accordion, AccordionItem } from 'react-sanfona';
import { getAllAllergyData } from '../../redux/actions/allergyAction';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

const data = [
    {
        title: 'ALLERGENS',
        category: ["celery", "crustaceans", "egg", "fish", "gluten", "lupin", "Milk", "Soya", "Mustard", "Chicken", "Tree Nuts"],
    },
    {
        title: 'DIETARY PREFERENCES',
        category: ["pescatarian", "vegetarian", "plant based", "low gluten", "lactose free", "halal", "kosher", "low sugar"],
    },
    {
        title: 'LIFESTYLE CHOICES',
        category: ["pregnant", "ordinary", "rich"],
    },
    {
        title: 'RESTAURANT TYPE',
        category: ["disabled access", "pet friendly", "loud music", "child friendly", "seating space", "reservation"],
    },
    // {
    //     title: 'RESTAURANT DISTANCE',
    //     category: ["Near you (optional)"],
    // }
]




const AllRestaurantFilterModal = (props) => {
    const dispatch = useDispatch();
    let [opened, setOpened] = useState(true);
    let [reset,setReset]=useState(false);
    const clickOpen = () => {
        setOpened(!opened)
    }
    useEffect(() => {
        dispatch(getAllAllergyData())
        // dispatch(getAllDietaryData())
        // dispatch(getAllLifestyleData())
        // dispatch(getAllRestaurantFeaturesData())

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
        distance: props.value&&props.value.distance?props.value.distance:'',
    }
    const initialValues2 = {
        allergenId:[],
        dietaryId: [],
        lifestyleId: [],
        featuresId:[],
        toggle:false,
        distance:'',
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
                    <Modal.Title id="contained-modal-title-vcenter" className="brandon-Bold">
                        <button onClick={()=>{props.onHide();setReset(false)}}>x</button>
                        Filters
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='wrapper mt-4 pt-2'>
                        <ul className='accordion-list'>
                            <Formik enableReinitialize={true} initialValues={!reset?initialValues:initialValues2} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ values, resetForm }) => (
                                    <Form>
                                        <button style={{ position: 'absolute', top: -27, right: 0 }} type="reset" onClick={()=>{setReset(true)}}>Reset All</button>
                                        {JSON.stringify(values)}
                                        <div className="main-accordion-wrapper ">
                                            <div className="accordion accordion-main " id="accordionExample">
                                                <div className="accordion-item">
                                                    <div className="d-flex justify-content-between align-items-center accordion-header " id="headingOne">
                                                        <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">INFO</h5>
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
                                                    <div className="d-flex justify-content-between align-items-center accordion-header " id="headingOne">
                                                        <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">RESTAURANT DISTANCE</h5>
                                                            </div>
                                                            <div className="expand-button position-absolute top-0 right-0"></div>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <section className="accordion-list__item ">
                                                                <div className="form-check custom-control custom-checkbox filter-checkbox mb-4" >
                                                                    <Field type="checkbox" name="toggle" className="form-check-input custom-control-input" id="exampleCheck15" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck15" style={{ zIndex: -1 }}>
                                                                        Near you (optional)
                                                                    </label>
                                                                </div>
                                                                <div className="form-check custom-control custom-checkbox filter-checkbox pl-0">
                                                                    <Field type="range" name="distance"  className="form-control-range" id="formControlRange" />
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



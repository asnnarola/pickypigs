import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AllRestaurantFilterModal.scss';
import { Formik, Field, Form } from 'formik';
import { Accordion, AccordionItem } from 'react-sanfona';
import { getAllAllergyData } from '../../redux/actions/allergyAction';
import { useDispatch, useSelector } from 'react-redux';

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
    // let [distance,setDistance]=useState(0);
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


    return (
        <>
            <Modal className="filter-modal bg-white" {...props} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="brandon-Bold">
                        Filters
                        {/* <button onClick={()=>{alert(values)}}>Clear all</button> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='wrapper mt-4 pt-2'>
                        <ul className='accordion-list'>
                            <Formik
                                initialValues={{
                                    // checked: [],
                                    toggle: false,
                                    distance: 5,
                                }}
                                onSubmit={(values) => {
                                    console.log(values)

                                }}
                            >
                                {({ values, resetForm }) => (
                                    <Form>
                                        <button style={{ position: 'absolute', top: -27, right: 0 }} type="reset" onClick={resetForm}>Reset All</button>

                                        <div class="accordion " id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Accordion Item #1
                                                </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                                </div>
                                            </div>
                                        </div>


                                        <Accordion allowMultiple={true}>

                                            <AccordionItem title="Allergen" expanded={1}
                                                className="accordion-list__item " expandedClassName="">
                                                <div className="row">
                                                    {allergy_Data&&allergy_Data.data.map((boxdata,index) => {
                                                        return (
                                                            <div className="col-md-6" key={index}>
                                                                <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                    <Field type="checkbox" name="Allergen" value={boxdata._id} className="form-check-input custom-control-input" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{ zIndex: -1 }}>
                                                                        {boxdata.name}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </AccordionItem>

                                        </Accordion>


                                        <Accordion allowMultiple={true}>
                                            {data && data.map((singleData, index) => {
                                                return (
                                                    <AccordionItem title={singleData.title} expanded={1} key={index}
                                                        className="accordion-list__item " expandedClassName="">
                                                        <div className="row">
                                                            {singleData && singleData.category.map((boxdata, index) => {
                                                                return (
                                                                    <div className="col-md-6" key={index}>
                                                                        <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                            <Field type="checkbox" name={singleData.title} value={boxdata} className="form-check-input custom-control-input" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                                            <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{ zIndex: -1 }}>
                                                                                {boxdata}
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </AccordionItem>
                                                );
                                            })}
                                        </Accordion>

                                        <Accordion allowMultiple={true}>
                                            <AccordionItem title="RESTAURANT DISTANCE" className="accordion-list__item border-bottom-0 mb-0" expanded={1}>
                                                <div className="form-check custom-control custom-checkbox filter-checkbox mb-4" >
                                                    <Field type="checkbox" name="toggle" className="form-check-input custom-control-input" id="exampleCheck15" style={{ marginLeft: 2, zIndex: 1, cursor: "pointer" }} />
                                                    <label className="form-check-label custom-control-label" htmlFor="exampleCheck15" style={{ zIndex: -1 }}>
                                                        Near you (optional)
                                                    </label>
                                                </div>
                                                <div className="form-check custom-control custom-checkbox filter-checkbox pl-0">
                                                    <Field type="range" name="distance" value={values.distance} class="form-control-range" id="formControlRange" />
                                                    <label for="formControlRange" className="ranage-txt" style={{ left: values.distance * 2.45 }}> {values.distance}mi</label>

                                                </div>
                                            </AccordionItem>
                                        </Accordion>

                                        <Modal.Footer className="justify-content-center border-top-0 mb-4">
                                            {/* style={{position:"sticky",bottom:0,zIndex:99}} */}
                                            <Button variant="secondary" className="lightgray-btn btn cancel-btn mr-4" onClick={props.onHide}>Cancel</Button>
                                            <Button type="submit" onClick={props.onHide} variant="primary" className="theme-pink-btn apply-btn brandon-Bold">Apply</Button>
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



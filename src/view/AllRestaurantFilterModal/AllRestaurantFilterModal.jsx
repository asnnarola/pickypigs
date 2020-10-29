import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AllRestaurantFilterModal.scss';
import { Formik, Field, Form } from 'formik';

const data = [
    {
        title: 'ALLERGENS',
        category: ["celery","crustaceans","egg", "fish","gluten","lupin","Milk", "Soya", "Mustard", "Chicken", "Tree Nuts"],
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
    {
        title: 'RESTAURANT DISTANCE',
        category: ["Near you (optional)"],
    }
]




const AllRestaurantFilterModal = (props) => {

    let [opened, setOpened] = useState(true);
    const clickOpen=()=>{
        setOpened(!opened) 
    }

    return (
        <>
            <Modal className="filter-modal bg-white" {...props} style={{ width: 400, marginLeft: 'auto', right: 0, top: 0 }} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="brandon-Bold">
                        Filters
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='wrapper mt-4 pt-2'>
                        <ul className='accordion-list'>
                            <Formik
                                initialValues={{
                                    // checked: [],
                                }}
                                onSubmit={(values) => {
                                    console.log(values)
                                }}
                                >
                                {({ values }) => (
                                    <Form>
                                        {data && data.map((singleData,index) => {
                                            return (
                                                <li className='accordion-list__item' key={index}>

                                                    
                                                        <div {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}` }} >

                                                            <div className='accordion-item__line'>
                                                                <button className='btn btn-block accordion-item__title text-left' onClick={clickOpen}>
                                                                    {singleData.title}
                                                                </button>
                                                                {opened ? <span className='accordion-item__icon' /> : <span className='accordion-item__icon' />}
                                                            </div>

                                                            {opened &&
                                                                <div className='accordion-item__inner'>
                                                                    <div className='accordion-item__content'>
                                                                        <div className='accordion-item__paragraph'>
                                                                            <div className="row">
                                                                                {singleData && singleData.category.map((boxdata, index) => {
                                                                                    return (
                                                                                        <div className="col-md-6" key={index}>
                                                                                            <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                                                                 <Field type="checkbox" name={singleData.title} value={boxdata} className="form-check-input custom-control-input" id="exampleCheck1" style={{marginLeft:2,zIndex:1,cursor:"pointer"}} />
                                                                                                <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{zIndex:-1}}>
                                                                                                    {boxdata}
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    

                                                </li>
                                            )
                                        })}
                                        <div className="form-check custom-control custom-checkbox filter-checkbox">
                                            <label for="formControlRange">Example Range input</label>
                                            <input type="range" class="form-control-range" id="formControlRange"/>
                                        </div>
                                        
                                      
                                        <Modal.Footer className="justify-content-center border-top-0 mb-3">
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



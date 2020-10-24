import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AllRestaurantFilterModal.scss';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'
const data = [
    {
        title: 'Pricing plans',
        category: ["Celery", "Egg", "Fish", "Milk", "Soya", "Mustard", "Fish", "Tree Nuts"],
    },
    {
        title: 'How to apply',
        category: ["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh Nuts"],
    },
    {
        title: 'Purchasing process',
        category: ["Celery", "Egg", "Fish", "Milk", "Soya", "Mustard", "Fish", "Tree Nuts"],
    },
    {
        title: 'Usage guides',
        category: ["Celery", "Egg", "Fish", "Milk", "Soya", "Mustard", "Fish", "Tree Nuts"],
    }
]

const MyCard = (props) => {
    let [opened, setOpened] = useState(true);
    
    return (
        <div>
            <div {...{ className: `accordion-item, ${opened && 'accordion-item--opened'}` }} >
                <div className='accordion-item__line'>
                    <button className='btn btn-block accordion-item__title text-left' onClick={() => { setOpened(!opened) }}>
                        {props.title}
                    </button>
                    {opened ? <span className='accordion-item__icon' /> : <span className='accordion-item__icon' />}
                </div>

                {opened &&
                    <div className='accordion-item__inner'>
                        <div className='accordion-item__content'>
                            <p className='accordion-item__paragraph'>
                                <form>
                                    <div className="row">
                                        {props.category.map((data, index) => {
                                            return (
                                                <div className="col-md-6">
                                                    <div className="form-check custom-control custom-checkbox filter-checkbox">
                                                        <input type="checkbox" className="form-check-input custom-control-input" id="exampleCheck1" style={{marginLeft:0,zIndex:1,cursor:"pointer"}} />
                                                        <label className="form-check-label custom-control-label" htmlFor="exampleCheck1" style={{zIndex:-1}}>{data}</label>
                                                    </div>
                                                    {/* <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                    <label className="form-check-label" for="exampleCheck1">{data}</label>
                                                </div> */}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </form>
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}



const AllRestaurantFilterModal = (props) => {


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
                            {data.map((data, key) => {
                                return (
                                    <li className='accordion-list__item' key={key}>
                                        <MyCard {...data} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-top-0 mb-3">
                    {/* style={{position:"sticky",bottom:0,zIndex:99}} */}
                    <Button variant="secondary" className="lightgray-btn btn cancel-btn mr-4" onClick={props.onHide}>Cancel</Button>
                    <Button variant="primary" className="theme-pink-btn apply-btn brandon-Bold">Apply</Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

export default AllRestaurantFilterModal;



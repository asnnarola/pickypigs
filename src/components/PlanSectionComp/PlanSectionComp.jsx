import React from 'react';
import './PlanSectionComp.scss';
import tickimg from "../../assets/images/tick_1.svg"


const PlanSectionComp = () => {
    return (
        <React.Fragment>
            <section className="PlanSectionComp ">
                <section className="plan-section">
                    <div className="container pl-0 pr-0">
                        <div className="plan-wrapper">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper pr-0">
                                    <div className="plan-details">
                                        <div className="plan-head">
                                        </div>
                                        <div className="plan-listing">
                                            <ul className="mb-0">
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">Allergy Declaration</p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">Integrated Menu Build</p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">Calories and Macro Calculator</p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">POS Integration</p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">Reports</p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">
                                                        Multisite log ins
                                                    <br />
                                                        <span className="f-13">(£80 month for every additional site)</span>
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">
                                                        KDS Software
                                                    <br />
                                                        <span className="f-13">(£30 monthly for every additional)</span></p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">
                                                        Inhouse ordering software
                                                    <br />
                                                        <span className="f-13">(£30 monthly for every additional)</span>
                                                    </p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <p className="mb-0 f-15">
                                                        Set up support
                                                    <br />
                                                        <span className="f-13">(£ based on venue)</span>
                                                    </p>
                                                </li>
                                            </ul>
                                            <div className="plan-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper plan-month-wrapper pl-0 pr-0">
                                    <div className="plan-details bg-white">
                                        <div className="plan-head d-flex align-items-center justify-content-center flex-column">
                                            <h5 className="brandon-Medium text-center mb-1 text-uppercase">Basic</h5>
                                            <p className="text-center mb-0 f-15 gray-txt">(Free 3 month trial) </p>
                                        </div>
                                        <div className="plan-listing">
                                            <ul className="mb-0">
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">Yes</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">-</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">-</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                            </ul>
                                            <div className="plan-footer flex-column d-flex align-items-center justify-content-center">
                                                <p className="gray-txt mb-0 price-label">$99.99<span className="month-label">/ month</span></p>
                                                <p className="f-15 gray-txt mb-3 pb-1">dolor text dummy lorem</p>
                                                <button className="f-15 text-uppercase btn pinkline-btn min-height-50 min-width-170 border-radius-25">Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper plan-month-wrapper active-view pl-0 pr-0">
                                    <div className="plan-details bg-white">
                                        <div className="plan-head d-flex align-items-center justify-content-center flex-column">
                                            <h5 className="brandon-Medium text-center mb-1 text-uppercase">Basic</h5>
                                            <p className="text-center mb-0 f-15 gray-txt">(Free 3 month trial) </p>
                                        </div>
                                        <div className="plan-listing">
                                            <ul className="mb-0">
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">Yes</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">-</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">-</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                            </ul>
                                            <div className="plan-footer flex-column d-flex align-items-center justify-content-center">
                                                <p className="mb-0 price-label">$99.99<span className="month-label">/ month</span></p>
                                                <p className="f-15 mb-3 pb-1">dolor text dummy lorem</p>
                                                <button className="f-15 text-uppercase btn pinkline-btn min-height-50 min-width-170 border-radius-25">Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 plan-details-wrapper plan-month-wrapper pl-0 pr-0">
                                    <div className="plan-details bg-white">
                                        <div className="plan-head d-flex align-items-center justify-content-center flex-column">
                                            <h5 className="brandon-Medium text-center mb-1 text-uppercase">Basic</h5>
                                            <p className="text-center mb-0 f-15 gray-txt">(Free 3 month trial) </p>
                                        </div>
                                        <div className="plan-listing">
                                            <ul className="mb-0">
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">Yes</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">-</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 f-15">-</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                                <li className="d-flex align-items-center justify-content-center">
                                                    <img src={tickimg} className="img-fluid" />
                                                </li>
                                            </ul>
                                            <div className="plan-footer flex-column d-flex align-items-center justify-content-center">
                                                <p className="gray-txt mb-0 price-label">$99.99<span className="month-label">/ month</span></p>
                                                <p className="f-15 gray-txt mb-3 pb-1">dolor text dummy lorem</p>
                                                <button className="f-15 text-uppercase btn pinkline-btn min-height-50 min-width-170 border-radius-25">Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}


export default PlanSectionComp;
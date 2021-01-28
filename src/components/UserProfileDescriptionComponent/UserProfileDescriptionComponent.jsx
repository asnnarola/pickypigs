import React, { useState } from "react";
import './UserProfileDescriptionComponent.scss';

const UserProfileDescriptionComponent = () => {
    const [editForm, setEditForm] = useState(true);
    const [restInfo, setRestInfo] = useState({
        name: "Naresh Bingi",
        password: 'Naresh',
        dob: "2020-12-29",
        gender: 'male',
        email: "Michael.Joe@gmail.com",
        phone_number: "+44 1234567890",
        address: "Street, Area, Country",
    });
    const [editRestInfo, setEditRestInfo] = useState({
        name: "Naresh Bingi",
        password: 'Naresh',
        dob: '2020-12-29',
        gender: 'male',
        email: "Michael.Joe@gmail.com",
        phone_number: "+44 1234567890",
        address: "Street, Area, Country",
    });
    const handleChange = (e) => {
        setEditRestInfo({ ...editRestInfo, [e.target.name]: e.target.value });
    }
    const handleCancleEdit = (e) => {
        setEditRestInfo({ ...restInfo })
        setEditForm(true)
    }

    return (
        <>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="userform-btn-main d-flex justify-content-end">
                            {editForm
                                ?
                                <button className="btn darkgray-btn w-120 h-36 mr-5 d-inline-flex align-items-center justify-content-center" onClick={() => { setEditForm(false) }}>Edit</button>
                                :
                                <div className="mr-5">
                                    <button className="btn graytxt-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center" onClick={handleCancleEdit}>Cancel</button>
                                    <button className="btn ml-4 pinkline-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center" onClick={() => { alert(JSON.stringify(editRestInfo)) }}>Save</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12 mt-2 pl-0 pr-0 mb-2">
                        <div className="border mt-4 mb-4">
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-5 pb-2">
                    <div className="col-md-6">
                            <div class="form-group row align-items-center mb-1">
                                <label class="col-sm-2 col-form-label tabs-form-label">Full name</label>
                                <div class="col-sm-10 tabs-form-input">
                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="name" onChange={handleChange} value={editRestInfo.name} />
                                </div>
                            </div>
                            <div class="form-group row align-items-center mb-1">
                                <label class="col-sm-2 col-form-label tabs-form-label">Password</label>
                                <div class="col-sm-10 tabs-form-input">
                                <input type="password" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="password" onChange={handleChange} value={editRestInfo.password} />
                                </div>
                            </div>
                            <div class="form-group row align-items-center mb-1">
                                <label class="col-sm-2 col-form-label tabs-form-label">Date of Birth</label>
                                <div class="col-sm-10 tabs-form-input">
                                <input type="date" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="dob" onChange={handleChange} value={editRestInfo.dob} />
                                </div>
                            </div>
                            <div class="form-group row align-items-center mb-1">
                                <label class="col-sm-2 col-form-label tabs-form-label">Gender</label>
                                <div class="col-sm-10 tabs-form-input">
                                {editForm
                                    ?
                                    <p className="form-control-plaintext">Male</p>
                                    :
                                    <select name="gender" className="form-control-inputtext form-control" onChange={handleChange} value={editRestInfo.gender} >
                                        <option>male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                }
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <p>Full name</p>
                                <p>Password</p>
                                <p>Date of Birth</p>
                                <p>Gender</p>
                            </div> */}
                            {/* <div className="col-md-4">
                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="name" onChange={handleChange} value={editRestInfo.name} />
                                <input type="password" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="password" onChange={handleChange} value={editRestInfo.password} />
                                <input type="date" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="dob" onChange={handleChange} value={editRestInfo.dob} />
                                {editForm
                                    ?
                                    <p>Male</p>
                                    :
                                    <select name="gender" onChange={handleChange} value={editRestInfo.gender} >
                                        <option>male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                }
                            </div> */}
                       
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Email</p>
                                <p>Phone number</p>
                                <p>Address</p>
                            </div>
                            <div className="col-md-4">
                                <input type="email" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="email" onChange={handleChange} value={editRestInfo.email} />
                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="phone_number" onChange={handleChange} value={editRestInfo.phone_number} />
                                <input type="text" readOnly={editForm} className={` ${editForm ? "form-control-plaintext" : "form-control-inputtext form-control"}`} name="address" onChange={handleChange} value={editRestInfo.address} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default UserProfileDescriptionComponent;
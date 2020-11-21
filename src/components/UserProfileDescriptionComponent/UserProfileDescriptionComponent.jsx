import React, { useState } from "react";
import './UserProfileDescriptionComponent.scss';

const UserProfileDescriptionComponent = () => {
    

    return (
        <>
            <section>
                <div className="row">
                   <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Full name</p>
                                <p>Password</p>
                                <p>Date of Birth</p>
                                <p>Gender</p>
                            </div>
                            <div className="col-md-4">
                                <p>Naresh Bingi</p>
                                <p>*************</p>
                                <p>01 January, 2020</p>
                                <p>Male</p>
                            </div>
                        </div>
                   </div>
                   <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Email</p>
                                <p>Phone number</p>
                                <p>Address</p>
                            </div>
                            <div className="col-md-4">
                                <p>naresh@pickypigs.com</p>
                                <p>+44 994 535 2904</p>
                                <p>A 11, Tato Building,</p>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </>
    )
}


export default UserProfileDescriptionComponent;
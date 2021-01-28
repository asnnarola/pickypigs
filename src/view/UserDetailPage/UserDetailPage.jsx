import React, { useState } from "react";
import UserPreferenceComponent from "../../components/UserPreferenceComponent/UserPreferenceComponent";
import UserProfileDescriptionComponent from "../../components/UserProfileDescriptionComponent/UserProfileDescriptionComponent";
import user_img from "../../assets/images/user-img.png";

import './UserDetailPage.scss';

const UserDetailPage = () => {

    let [profile, setProfile] = useState(true);
    let [preferences, setPreferences] = useState(false);

    return (
        <>
            <section className="userdetail-section">
                <div className="container">
                    <div className="row">
                        <div class="col-sm-12">
                            <div className="userprofile-block">
                                <div className="userprofile-select">
                                    <img src={user_img} alt="" width="200px" className="img-fluid img-thumbnil" />
                                    <form>
                                        <div class="form-group">
                                            <input type="file" class="form-control-file userprofile-control" id="exampleFormControlFile1" />
                                        </div>
                                    </form>
                                </div>
                                <h5 className="username-txt">Naresh Bingi</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="userdetails-tabs d-flex align-items-center justify-content-center">
                                <div className="userdetail-btncenter d-flex align-items-center justify-content-between">
                                    <button className={`btn usertabs-btn w-120 h-40 border-radius-20 position-relative zindex-1 ${profile?"pinkline-btn":null}`} onClick={() => { setProfile(true); setPreferences(false) }}>Profile</button>
                                    <button className={`btn usertabs-btn txt-lightgray w-150 h-40 border-radius-20 position-relative zindex-1 ${preferences?"pinkline-btn":null}`} onClick={() => { setProfile(false); setPreferences(true) }}>My Preferences</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {profile ? <UserProfileDescriptionComponent /> : null}
                {preferences ? <UserPreferenceComponent /> : null}

            </section>
        </>
    )
}

export default UserDetailPage;
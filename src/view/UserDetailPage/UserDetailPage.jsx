import React, { useState } from "react";
import UserPreferenceComponent from "../../components/UserPreferenceComponent/UserPreferenceComponent";
import UserProfileDescriptionComponent from "../../components/UserProfileDescriptionComponent/UserProfileDescriptionComponent";
import dishimg1 from "../../assets/images/dishinfo_img/dishimg1.jpg";

import './UserDetailPage.scss';

const UserDetailPage = () => {

    let [profile, setProfile] = useState(true);
    let [preferences, setPreferences] = useState(false);

    return (
        <>
            <section className="userdetail-section">
                <div className="container">
                    <div className="userprofile-block">
                        <div className="userprofile-select">
                            <img src={dishimg1} alt="" width="200px" className="img-fluid img-thumbnil" />
                            <form>
                                <div class="form-group">
                                    <input type="file" class="form-control-file userprofile-control" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                        <h5 className="username-txt">Naresh Bingi</h5>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center userdetails-tabs">
                                <div className="userdetail-btncenter">
                                    <button onClick={() => { setProfile(true); setPreferences(false) }}>Profile</button>
                                    <button onClick={() => { setProfile(false); setPreferences(true) }}>My Preferences</button>
                                </div>
                                <div className="userdetail-btnedit">
                                    <button>edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 pl-0 pr-0">
                            <div className="border-seprater">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>
                        {profile ? <UserProfileDescriptionComponent /> : null}
                        {preferences ? <UserPreferenceComponent /> : null}

                    </div>
                </div>


            </section>
        </>
    )
}

export default UserDetailPage;
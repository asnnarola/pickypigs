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
            <section style={{marginTop:90}}>
                <div className="container">
                    <div className="text-center">
                        <img src={dishimg1} alt="" width="200px" className="img-fluid img-thumbnil" />
                        <p>Naresh Bingi</p>
                        <form>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <button onClick={()=>{setProfile(true);setPreferences(false)}}>Profile</button>
                        <button onClick={()=>{setProfile(false);setPreferences(true)}}>My Preferences</button>
                        <button>edit</button>
                    </div>
                    <div>
                        {profile? <UserProfileDescriptionComponent/>:null}
                        {preferences? <UserPreferenceComponent/>:null}
                        
                    </div>
                </div>

            </section>
        </>
    )
}

export default UserDetailPage;
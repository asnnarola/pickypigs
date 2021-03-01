import React, { useEffect, useState } from "react";
import UserPreferenceComponent from "../../components/UserPreferenceComponent/UserPreferenceComponent";
import UserProfileDescriptionComponent from "../../components/UserProfileDescriptionComponent/UserProfileDescriptionComponent";
import user_img from "../../assets/images/user_profile_image.png";
import {SERVER_URL} from '../../shared/constant'
import LazyLoad from 'react-lazyload';

import './UserDetailPage.scss';
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileDetail, updateUserProfileImage } from "../../redux/actions/userProfileAction";
import CustomLoadingComp from "../../components/CustomLoadingComp/CustomLoadingComp";
import loading_img from "../../assets/images/Loading_2.gif";
import { useHistory } from "react-router-dom";

const UserDetailPage = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    let [profile, setProfile] = useState(true);
    let [preferences, setPreferences] = useState(false);
    let [imageLoading, setImageLoading] = useState(false);


    useEffect(()=>{
        if (!localStorage.getItem("access_token")) {
            history.push("/");
          }else{
            dispatch(getUserProfileDetail())
          }
    },[dispatch]);

    let User_Data=useSelector((state)=>{
        return state.userProfile
    });

    let {userProfile_Data,isLoading}=User_Data;

    const ImageUploadHandeler=(e)=>{
        e.preventDefault();
        if(e.target.files[0]){
            dispatch(updateUserProfileImage(e.target.files[0]))
        }
    }
    
   

    return (
        <>
            {isLoading&&isLoading?
                <CustomLoadingComp/>
            :
                null
            }
            <section className="userdetail-section">
                <div className="container">
                    <div className="row">
                        {/* {JSON.stringify(userProfile_Data.userDetail&&userProfile_Data.userDetail.name)} */}
                        <div className="col-sm-12">
                            <div className="userprofile-block">
                                <div className="userprofile-select">
                                {userProfile_Data&&userProfile_Data.userDetail&&userProfile_Data.userDetail.profileImage?
                                <LazyLoad height={200}>
                                    <img loading="lazy" onLoad={() => {
                                        setImageLoading(true);
                                      }}
                                      src={`${SERVER_URL}/${userProfile_Data.userDetail.profileImage}`} alt="" width="200px" className="img-fluid img-thumbnil" />
                                  </LazyLoad>
                                    :
                                    <img  src={user_img} alt="" width="200px" className="img-fluid img-thumbnil" />
                                } 
                                    <form>
                                        <div className="form-group">
                                            <input 
                                                type="file" 
                                                accept="image/*" 
                                                name="uploadedfile"
                                                className="form-control-file userprofile-control" 
                                                onChange={ImageUploadHandeler}
                                            />

                                        </div>
                                    </form>
                                </div>
                                {userProfile_Data&&userProfile_Data.userDetail&&userProfile_Data.userDetail.name?
                                    <h5 className="username-txt text-capitalize">{userProfile_Data.userDetail.name}</h5>
                                :
                                    <h5 className="username-txt">Unknown User</h5>
                                }    
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

                {profile ? 
                    userProfile_Data&&
                    <UserProfileDescriptionComponent userdata={userProfile_Data}/>
                : 
                    null
                }
                {preferences ? 
                userProfile_Data&&
                <UserPreferenceComponent userdata={userProfile_Data}/> 
                : null}

            </section>
        </>
    )
}

export default UserDetailPage;
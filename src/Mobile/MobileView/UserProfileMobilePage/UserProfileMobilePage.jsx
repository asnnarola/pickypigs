import React,{useState} from "react";
import UserPersonalDetailMobileComp from "../../MobileComponents/UserPersonalDetailMobileComp/UserPersonalDetailMobileComp";
import {ReactComponent as Location} from "../../../assets/images/location-gray.svg"

import './UserProfileMobilePage.scss';

const UserProfileMobilePage=()=>{
    const [tab1,setTab1]=useState(true);
    const [tab2,setTab2]=useState(false);
    const [tab3,setTab3]=useState(false);

    return(
        <>
        <section style={{marginTop:90}}>
            <div className="container">
                <div style={{backgroundColor:'greenyellow',width:'100%',height:200}}></div>
                <div className="pl-5" style={{backgroundColor:'white',marginTop:-70,borderTopLeftRadius:35,borderTopRightRadius:35}}>
                    <div style={{position:'relative',top:-50}}>
                        <div  className="mb-3">
                            <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" width="100px" className="userprofile-img img-fluid  rounded-circle" alt="logo" />
                        </div>
                        <div>
                            <h5>Hello Bingi
                                <p className="mb-0">
                                    <span className="mr-3"><Location/></span>
                                    Gujurat
                                </p>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button onClick={()=>{setTab1(true);setTab2(false);setTab3(false)}}>Personal Detail</button>
                    <button onClick={()=>{setTab1(false);setTab2(true);setTab3(false)}}>Your Favorite</button>
                    <button onClick={()=>{setTab1(false);setTab2(false);setTab3(true)}}>Preference</button>
                </div>
                <div  className="mb-3">
                    {
                        tab1? <React.Fragment> <UserPersonalDetailMobileComp/> </React.Fragment>
                        : tab2?"bbbb"
                        :"cccc"
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default UserProfileMobilePage;
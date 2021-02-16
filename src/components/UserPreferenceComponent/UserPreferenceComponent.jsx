import React, { useEffect, useState } from "react";
import './UserPreferenceComponent.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"
import {useDispatch,useSelector} from "react-redux";
import {getAllAllergyData,getAllDietaryData,getAllLifestyleData,getAllRestaurantFeaturesData} from '../../redux/actions/allergyAction';
import {SERVER_URL} from '../../shared/constant'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { updateUserProfileDetail } from "../../redux/actions/userProfileAction";


const UserPreferenceComponent = (props) => {

    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState(true);

    let {userDetail}=props.userdata

    useEffect(() => {
        dispatch(getAllAllergyData())
        dispatch(getAllDietaryData())
        dispatch(getAllLifestyleData())
        dispatch(getAllRestaurantFeaturesData())

    },[dispatch])

    let allAllergy_data = useSelector((state)=>{
        return state.allergy
    });
    let {isLoading,allergy_Data,dietary_Data,lifestyle_Data,restaurantFeatures_Data}=allAllergy_data;

    const initialValues = {
        allergenInformation:userDetail&&userDetail.myPreferences&&userDetail.myPreferences.allergenInformation,
        dietaryPreferences:userDetail&&userDetail.myPreferences&&userDetail.myPreferences.dietaryPreferences,
        lifestyleChoice:userDetail&&userDetail.myPreferences&&userDetail.myPreferences.lifestyleChoice,
        restaurantFeatures:userDetail&&userDetail.myPreferences&&userDetail.myPreferences.restaurantFeatures,
    }

    const validationSchema  = Yup.object().shape({
       
    });

    const handleAlergy = (e,alergy,setFieldValue) => {
        e.preventDefault();
        if (alergy.indexOf(e.target.id) !== -1) {
            var Index = alergy.indexOf(e.target.id);
            if (Index > -1) {
                // setAlergy(alergy.slice(0,Index).concat(alergy.slice(Index+ 1, alergy.length)));
                setFieldValue("allergenInformation",alergy.filter(myallergy => myallergy !== e.target.id));
            }
        } else {
            setFieldValue("allergenInformation",[...alergy, e.target.id]);
        }
    }

    const handleDietaryPreference = (e,dietary,setFieldValue) => {
        e.preventDefault();
        if (dietary.indexOf(e.target.id) !== -1) {
            var Index = dietary.indexOf(e.target.id);
            if (Index > -1) {
                setFieldValue("dietaryPreferences",dietary.filter(mydietary => mydietary !== e.target.id));
            }
        } else {
            setFieldValue("dietaryPreferences",[...dietary, e.target.id]);
        }
    }

    const handleLifestyle = (e,lifestyle,setFieldValue) => {
        e.preventDefault();
        if (lifestyle.indexOf(e.target.id) !== -1) {
            var Index = lifestyle.indexOf(e.target.id);
            if (Index > -1) {
                setFieldValue("lifestyleChoice",lifestyle.filter(mylifestyle => mylifestyle !== e.target.id));
            }
        } else {
            setFieldValue("lifestyleChoice",[...lifestyle, e.target.id]);
        }
    }

    const handleRestaurant = (e,restaurant,setFieldValue) => {
        e.preventDefault();
        if (restaurant.indexOf(e.target.id) !== -1) {
            var Index = restaurant.indexOf(e.target.id);
            if (Index > -1) {
                setFieldValue("restaurantFeatures",restaurant.filter(myrestaurant => myrestaurant !== e.target.id));
            }
        } else {
            setFieldValue("restaurantFeatures",[...restaurant, e.target.id]);
        }
    }
    const onSubmit=(fields)=>{
        dispatch(updateUserProfileDetail({myPreferences:fields}));
        setEditForm(true)
    }
    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
    }
   

    return (
        <>
            <section className="UserPreferenceComponent">
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, setFieldValue,handleChange,values,resetForm}) => {
                            return (
                                <Form>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="userform-btn-main d-flex justify-content-end">
                                                    {editForm
                                                        ?
                                                        <button className="btn darkgray-btn w-120 h-36 mr-5 d-inline-flex align-items-center justify-content-center" type="button" onClick={() => { setEditForm(false) }}>Edit</button>
                                                        :
                                                        <div className="mr-5">
                                                            <button className="btn graytxt-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center" type="reset" onClick={()=>{handleCancleEdit(resetForm);}}>Cancel</button>
                                                            <button className="btn ml-4 pinkline-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center" type="submit">Save</button>
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
                                        <div className="row mt-2">
                                            <div className="col-sm-12 mb-4">
                                                <h3 className="txt-darkgreen brandon-Bold">You don't have set your preferences</h3>
                                                <p className="f-14 txt-lightgray">Please set your preferences, so we can show you the best results according to your preferences</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <p className="brandon-Medium txt-darkgreen">ALLERGEN INFORMATION</p>
                                                {/* {JSON.stringify(values.allergenInformation)} */}
                                                <div className="allergen-btn-wrapper d-flex align-items-start flex-wrap">
                                                    {allergy_Data&&allergy_Data.data&&allergy_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                {editForm?
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            className={`allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center ${userDetail&&userDetail.myPreferences&&userDetail.myPreferences.allergenInformation.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
                                                                                <img src={`${SERVER_URL}/${data.image}`} className="img-fluid" />
                                                                            </div>
                                                                            <span className="mb-0 f-12 txt-lightgray">{data.name}</span>
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                :
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            onClick={(e)=>{handleAlergy(e,values.allergenInformation,setFieldValue)}}
                                                                            type="button"
                                                                            className={`allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center ${values.allergenInformation&&values.allergenInformation.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
                                                                                <img src={`${SERVER_URL}/${data.image}`} className="img-fluid" />
                                                                            </div>
                                                                            <span className="mb-0 f-12 txt-lightgray">{data.name}</span>
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-2">
                                                <p className="brandon-Medium txt-darkgreen">DIETARY PREFERENCES</p>
                                                <div className="dietary-wrapper d-flex flex-wrap">
                                                    {dietary_Data&&dietary_Data.data&&dietary_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                {editForm?
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            className={`tags-btn mr-4 mb-4 ${userDetail&&userDetail.myPreferences&&userDetail.myPreferences.dietaryPreferences.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                :
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            onClick={(e)=>{handleDietaryPreference(e,values.dietaryPreferences,setFieldValue)}}
                                                                            className={`tags-btn mr-4 mb-4 ${values.dietaryPreferences&&values.dietaryPreferences.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <p className="brandon-Medium txt-darkgreen">LIFESTYLE CHOICE</p>
                                                <div className="lifestyle-wrapper d-flex flex-wrap">
                                                    {lifestyle_Data&&lifestyle_Data.data&&lifestyle_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                {editForm?
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            className={`tags-btn mr-4 mb-4 ${userDetail&&userDetail.myPreferences&&userDetail.myPreferences.lifestyleChoice.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                :
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            onClick={(e)=>{handleLifestyle(e,values.lifestyleChoice,setFieldValue)}}
                                                                            className={`tags-btn mr-4 mb-4 ${values.lifestyleChoice&&values.lifestyleChoice.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                           
                                                                    </React.Fragment>
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3">
                                                <p className="brandon-Medium txt-darkgreen">RESTAURANT FEATURES</p>
                                                <div className="rsfeatures-wrapper d-flex flex-wrap">
                                                    {restaurantFeatures_Data&&restaurantFeatures_Data.data&&restaurantFeatures_Data.data.map((data, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                {editForm?
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            className={`tags-btn mr-4 mb-4 ${userDetail&&userDetail.myPreferences&&userDetail.myPreferences.restaurantFeatures.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                             
                                                                    </React.Fragment>
                                                                :
                                                                    <React.Fragment>
                                                                        <button
                                                                            id={data._id}
                                                                            type="button"
                                                                            onClick={(e)=>{handleRestaurant(e,values.restaurantFeatures,setFieldValue)}}
                                                                            className={`tags-btn mr-4 mb-4 ${values.restaurantFeatures&&values.restaurantFeatures.indexOf(data._id) !== -1 && "active"}`}
                                                                        >
                                                                            {data.name}
                                                                        </button>                           
                                                                    </React.Fragment>
                                                                }
                                                                
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </React.Fragment>
                
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    )
}

export default UserPreferenceComponent;
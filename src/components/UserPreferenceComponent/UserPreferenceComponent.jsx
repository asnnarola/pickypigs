import React, { useState } from "react";
import './UserPreferenceComponent.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"

const alergy_information = [{ name: "Egg", image: Nonveg_icon }, { name: "Milk", image: Nonveg_icon }, { name: "Celery", image: Nonveg_icon }, { name: "Mustard", image: Nonveg_icon }, { name: "Lupin", image: Nonveg_icon }, { name: "Nuts", image: Nonveg_icon }, { name: "Peanuts", image: Nonveg_icon }, { name: "Sesame", image: Nonveg_icon }, { name: "Molluscs", image: Nonveg_icon }, { name: "Crustaceans", image: Nonveg_icon }, { name: "Fish", image: Nonveg_icon }, { name: "Cereals (Wheat)", image: Nonveg_icon }, { name: "Soya", image: Nonveg_icon }, { name: "Sulphur dioxide", image: Nonveg_icon }];
const dietary_preference = ["Pescatarian", "Vegetarian", "Plant Based", "Low gluten", "Lactose free", "Halal", "Kosher", "Low sugar"];
const lifestyle_choice = ["Organic", "Vegan", "Pregnant"];
const restaurant_features = ["Pet Friendly", "Child friendly", "Live music", "Outside sitting", "Disabled access", "Reservations needed", "Bring your own", "Large parties accepted", "Private dining room", "Table service", "Bar service", "Holding bar", "R20", "Take away"];

const UserPreferenceComponent = () => {

    const [editForm, setEditForm] = useState(true);
    let [alergy, setAlergy] = useState([]);
    let [dietary, setDietary] = useState([]);
    let [lifestyle, setLifestyle] = useState([]);
    let [restaurant, setRestaurant] = useState([]);

    const handleAlergy = (e) => {
        e.preventDefault();
        if (alergy.indexOf(e.target.id) !== -1) {
            var Index = alergy.indexOf(e.target.id);
            if (Index > -1) {
                // setAlergy(alergy.slice(0,Index).concat(alergy.slice(Index+ 1, alergy.length)));
                setAlergy(alergy.filter(myallergy => myallergy !== e.target.id));

            }
        } else {
            setAlergy([...alergy, e.target.id]);
        }
    }

    const handleDietaryPreference = (e) => {
        e.preventDefault();
        if (dietary.indexOf(e.target.id) !== -1) {
            var Index = dietary.indexOf(e.target.id);
            if (Index > -1) {
                setDietary(dietary.slice(0, Index).concat(dietary.slice(Index + 1, dietary.length)));
            }
        } else {
            setDietary([...dietary, e.target.id]);
        }
    }

    const handleLifestyle = (e) => {
        e.preventDefault();
        if (lifestyle.indexOf(e.target.id) !== -1) {
            var Index = lifestyle.indexOf(e.target.id);
            if (Index > -1) {
                setLifestyle(lifestyle.slice(0, Index).concat(lifestyle.slice(Index + 1, lifestyle.length)));
            }
        } else {
            setLifestyle([...lifestyle, e.target.id]);
        }
    }

    const handleRestaurant = (e) => {
        e.preventDefault();
        if (restaurant.indexOf(e.target.id) !== -1) {
            var Index = restaurant.indexOf(e.target.id);
            if (Index > -1) {
                setRestaurant(restaurant.slice(0, Index).concat(restaurant.slice(Index + 1, restaurant.length)));
            }
        } else {
            setRestaurant([...restaurant, e.target.id]);
        }
    }
    const handleCancleEdit = (e) => {
        // setEditRestInfo({ ...restInfo })
        setEditForm(true)
    }


    return (
        <>
            <section >
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
                                        <button className="btn ml-4 pinkline-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center">Save</button>
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
                {alergy}{dietary}{lifestyle}{restaurant}
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-sm-12 mb-4">
                            <h3 class="txt-darkgreen brandon-Bold">You don't have set your preferences</h3>
                            <p className="f-14 txt-lightgray">Please set your preferences, so we can show you the best results according to your preferences</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="brandon-Medium txt-darkgreen">ALLERGEN INFORMATION</p>

                            <div className="allergen-btn-wrapper d-flex align-items-start flex-wrap">
                                {alergy_information && alergy_information.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <button
                                                id={data.name}
                                                onClick={handleAlergy}
                                                className={`allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center ${alergy.indexOf(data.name) !== -1 && "active"}`}
                                            >
                                                <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
                                                    <img src={data.image} className="img-fluid" />
                                                </div>
                                                <p className="mb-0 f-12 txt-lightgray">{data.name}</p>
                                            </button>
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
                                {dietary_preference && dietary_preference.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <button
                                                id={data}
                                                onClick={handleDietaryPreference}
                                                className={`tags-btn mr-4 mb-4 ${dietary.indexOf(data) !== -1 && "active"}`}
                                            >
                                                {data}

                                            </button>
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
                                {lifestyle_choice && lifestyle_choice.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <button
                                                id={data}
                                                onClick={handleLifestyle}
                                                className={`tags-btn mr-4 mb-4 ${lifestyle.indexOf(data) !== -1 && "active"}`}
                                            >

                                                {data}

                                            </button>
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
                                {restaurant_features && restaurant_features.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <button
                                                id={data}
                                                onClick={handleRestaurant}
                                                className={`tags-btn mr-4 mb-4 ${restaurant.indexOf(data) !== -1 && "active"}`}
                                            >

                                                {data}

                                            </button>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
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
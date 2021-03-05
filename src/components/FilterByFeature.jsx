import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import Breakfast_icon from "../assets/images/filterfeature/Accessible_icon.svg"
import Accessible_icon from "../assets/images/filterfeature/Accessible_icon.svg"
import Veg_icon from "../assets/images/filterfeature/Veg_icon.svg"
import Petlove_icon from "../assets/images/filterfeature/Petlove_icon.svg"
import Nonveg_icon from "../assets/images/filterfeature/Nonveg_icon.svg"
import ChildLove_icon from "../assets/images/filterfeature/ChildLove_icon.svg"
import Nuts_icon from "../assets/images/filterfeature/Nuts_icon.svg"
import Peanuts_icon from "../assets/images/filterfeature/Peanuts_icon.svg"
import Sesame_icon from "../assets/images/filterfeature/Sesame_icon.svg"
import Molluscs_icon from "../assets/images/filterfeature/Molluscs_icon.svg"
import Crustaceans_icon from "../assets/images/filterfeature/Crustaceans_icon.svg"
import Fish_icon from "../assets/images/filterfeature/Fish_icon.svg"
import Cereals_icon from "../assets/images/filterfeature/Cereals_icon.svg"
import Soya_icon from "../assets/images/filterfeature/Cereals_icon.svg"
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantFeaturesData } from '../redux/actions/allergyAction';
import {SERVER_URL} from '../shared/constant'


const features_information = [{ name: "Accessible", image: Accessible_icon }, { name: "Veg", image: Veg_icon }, { name: "Pet love", image: Petlove_icon }, { name: "Non veg", image: Nonveg_icon }, { name: "Child love", image: ChildLove_icon }, { name: "Nuts", image: Nuts_icon }, { name: "Peanuts", image: Peanuts_icon }, { name: "Sesame", image: Sesame_icon }, { name: "Molluscs", image: Molluscs_icon }, { name: "Crustaceans", image: Crustaceans_icon }, { name: "Fish", image: Fish_icon }, { name: "Cereals (Wheat)", image: Cereals_icon }, { name: "Soya", image: Soya_icon }, { name: "Sulphur dioxide", image: Nonveg_icon }];

function FilterByFeature() {
    const dispatch=useDispatch();
    var settings = {
        arrows: false,
        infinite: true,
        swipeToSlide: true,
        centerPadding: '5px',
        slidesToShow: 13,
        slidesToScroll:2.5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    infinite: true,
                    swipeToSlide: true,
                    // centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    infinite: true,
                    swipeToSlide: true,
                    // centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    let [features, setFeatures] = useState([]);
    const handleFeatures = (e) => {
        e.preventDefault();
        if (features.indexOf(e.target.id) !== -1) {
            var Index = features.indexOf(e.target.id);
            if (Index > -1) {
                setFeatures(features.filter(myfeatures => myfeatures !== e.target.id));
            }
        } else {
            setFeatures([...features, e.target.id]);
        }
    }

    useEffect(() => {
        dispatch(getAllRestaurantFeaturesData())

    },[dispatch]);

    let allAllergy_data = useSelector((state)=>{
        return state.allergy
    });

    let {isLoading,restaurantFeatures_Data}=allAllergy_data;


    return (
        <React.Fragment>
            {/* {JSON.stringify(features)} */}
            <Slider {...settings} className="filterfeature-wrapper">
                {restaurantFeatures_Data&&restaurantFeatures_Data.data&&restaurantFeatures_Data.data.map((data, index) => {
                    return (
                        <React.Fragment key={index}>
                            <button id={data._id}
                                onClick={handleFeatures}
                                className={`btn filter-subwrapper ${features.indexOf(data._id) !== -1 && "active"}`}
                            >
                                <div className="filter-icon">
                                    <img src={`${SERVER_URL}/${data.image}`} className="img-fluid" />
                                </div>
                                <p className="mt-2 text-dark text-link f-14 brandon-Medium text-capitalize">{data.name?data.name:''}</p>
                            </button>
                        </React.Fragment>
                    )
                })}
            </Slider>
        </React.Fragment>
    )
}

export default FilterByFeature

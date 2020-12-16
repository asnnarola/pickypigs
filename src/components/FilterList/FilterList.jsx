import React, { useEffect, useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import axios from 'axios';
import { API_KEY, GOOGLE_MAP_API_URL, HOST_URL, GOOGLE_PLACE_API_URL } from '../../shared/constant';
import location from "../../assets/images/location-icon.svg"
import nearlocation from "../../assets/images/nearlocaion-icon.svg"
import serachwhite from "../../assets/images/serach-white.svg"
import filtershorticon from "../../assets/images/filtershort-icon.svg"
import downarrow from "../../assets/images/down-arrow.svg"
import dropdownarrow from "../../assets/images/dropdown-arrow.svg"
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import "./FilterList.scss"
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantSearchData } from '../../redux/actions/generalActions';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


const alergy_information = ["Egg", "Milk", "Celery", "Mustard", "Lupin", "Nuts", "Peanuts", "Sesame", "Molluscs", "Crustaceans", "Fish", "Cereals (Wheat)", "Soya", "Sulphur dioxide"];
const dietary_preference = ["Gluten Free", "Dairy Free", "Meat Lover", "Fodmap", "Low Sugar", "Low Carb", "Plant Based", "Vegetarian", "Pescatarian", "Keto"];
const lifestyle_choice = ["Pregnant", "Vegan", "Halal", "Kosher", "Organic", "Locally Sourced"];
const restaurant_features = ["Pet Friendly", "Child friendly", "Live music", "Outside sitting", "Disabled access", "Reservations needed", "Bring your own", "Large parties accepted", "Private dining room", "Table service", "Bar service", "Holding bar", "R20", "Take away"];

function FilterList({ filterIcon = "false" }) {
    const dispatch = useDispatch();
    const [places, setPlaces] = useState(null)
    const [selectedPlace, setSelectedPlace] = useState(null)
    const [allergen, setAllergen] = useState([])
    const [lifestyle, setLifestyle] = useState([])
    const [dietary, setDietary] = useState([])
    const [dietaryValue, setDietaryValue] = useState([])
    const [lifeStyleValue, setLifeStyleValue] = useState([])
    const [allergenValue, setAllergenValue] = useState([])
    const [featuresValue, setFeaturesValue] = useState([])
    const [userSearchText, setUserSearchText] = useState("")
    const [userSearchDetails, setUserSearchDetails] = useState("")
    const [address, setAddress] = useState()

    useEffect(() => {

        getMyLocation()

    }, [])

    const clearAll=()=>{
        setAllergenValue([])
    }

    const getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition((position) => {
                console.log('Lat => ', {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                axios.get(
                    `${GOOGLE_MAP_API_URL}?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`).then(res => {
                        console.log('res sejal => ', res)
                        setPlaces(res.data.results)
                        setAddress(res.data.results[0].address_components[0].short_name);
                    }).catch(err => console.log('err => ', err))
            }, (error) => {
                console.log('error => ', error);
            })
        }
    }

    const getAllRestaurant = () => {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition((position) => {
                dispatch(getRestaurantSearchData(position.coords.latitude, position.coords.longitude, userSearchText));
            });
        }
    }

    const handleSearch = (e) => {
        setUserSearchText(e.target.value)
    }



    // ssssssssssss

    const handleChange = address => {
        setAddress(address);
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(setAddress(address))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };


    return (
        <div className="restaurant-find w-100 p-2 p-xl-3">
            {/* {JSON.stringify(userSearchDetails&&userSearchDetails)} */}
            <div className="fr-search d-flex align-items-center flex-wrap pb-3">

                <PlacesAutocomplete
                    value={address}
                    onSelect={handleSelect}
                    onChange={handleChange}

                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div style={{ position: 'relative' }} className="fr-location">
                            <label className="d-block text-left w-100 txt-location brandon-regular mb-0">Location</label>
                            <div className="d-flex justify-content-start align-items-center w-100 position-relative">
                                {/* w-100 flex-column position-relative */}
                                <div className="location-input d-flex align-items-center w-100">
                                    <img src={location} className="img-fluid mr-2" alt="marker" />
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Where are you?',
                                            className: 'location-search-input brandon-regular',
                                        })}
                                    />
                                    <img src={dropdownarrow} className="img-fluid mr-2 downarrow-icon" alt="marker" />
                                </div>
                                <div style={{ borderRadius: 20, position: "absolute", top: 50, width: 400, backgroundColor: 'white', zIndex: 99, boxShadow: "2px 4px 20px 0px #0000001a", }} className="autocomplete-dropdown-container">
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
                                        const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                        // inline style for demonstration purpose
                                        const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: 10 }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer', padding: 10 };
                                        return (
                                            <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                })}
                                            >
                                                <span className="location-nearicon"><img src={nearlocation} className="img-fluid mr-2" alt="marker" /> <span className="location-address">{suggestion.description}</span></span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>

                {/* <Dropdown className="fr-location mr-2">
                    <Dropdown.Toggle className="d-flex justify-content-between align-items-center w-100" variant="Secondary" id="dropdown-basic">
                        <span className="d-flex align-items-center">
                            <img src={location} className="img-fluid mr-2" alt="marker" /> 
                            {selectedPlace !== null ? (selectedPlace && selectedPlace.address_components[1].long_name) : (places && places[0].address_components[0].short_name)}
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {places && places.map((data, i) =>
                            <Dropdown.Item onSelect={() => setSelectedPlace(data)}>
                                {data.address_components[1] && data.address_components[1].long_name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown> */}
                <div className="fr-input d-flex justify-content-between align-items-center">
                    <input onChange={handleSearch} className="w-100 fr-search-box rl-fl-searchbox brandon-regular" placeholder="Search for restaurant or dish" />
                    <Button variant="primary" onClick={getAllRestaurant} className="fr-search-btn theme-pink-btn">
                        <img src={serachwhite} className="img-fluid" alt="serachwhite" />
                    </Button>
                    {filterIcon && <Button className="filtershort-btn ml-2 p-0">
                        <img src={filtershorticon} className="img-fluid" alt="filterIcon" />
                    </Button>}
                </div>
            </div>
            <div className="fr-category-select d-flex justify-content-between align-items-center mt-3 flex-wrap pr-4">
                <CustomDropdown placeholder={"Allergen"} options={alergy_information} value={allergenValue} onChangeData={setAllergenValue} />

                <CustomDropdown placeholder={"Dietary Preference"} options={dietary_preference} value={dietaryValue} onChangeData={setDietaryValue} />

                <CustomDropdown placeholder={"Lifestyle Choices"} options={lifestyle_choice} value={lifeStyleValue} onChangeData={setLifeStyleValue} />

                <CustomDropdown placeholder={"Restaurant Features"} options={restaurant_features} value={featuresValue} onChangeData={setFeaturesValue} />


            </div>
{allergenValue}
<button onClick={clearAll}>ssss</button>
        </div>
    )
}

export default FilterList

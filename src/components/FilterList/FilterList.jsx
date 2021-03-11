import React, { useEffect, useRef, useState } from 'react'
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

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import MyfilterListExample from './MyfilterListExample';
import { getAllAllergyData,getAllDietaryData,getAllLifestyleData,getAllRestaurantFeaturesData} from '../../redux/actions/allergyAction';
import SearchResultDisplayComp from '../SearchResultDisplayComp/SearchResultDisplayComp';
import { NavLink, Redirect, useHistory,Link } from 'react-router-dom';
import { getSearchedRestaurantsList } from '../../redux/actions/restaurantSearchPageAction';


function useOutsideAlerter(ref,setUserTextFocus) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                        setUserTextFocus(false)
                    }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function FilterList(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [places, setPlaces] = useState(null)
    const [selectedPlace, setSelectedPlace] = useState(null)
    const [allergen, setAllergen] = useState([])
    const [lifestyle, setLifestyle] = useState([])
    const [dietary, setDietary] = useState([])
    const [dietaryValue, setDietaryValue] = useState([])
    const [lifeStyleValue, setLifeStyleValue] = useState([])
    const [allergenValue, setAllergenValue] = useState([])
    const [featuresValue, setFeaturesValue] = useState([])
    const [userTextFocus, setUserTextFocus] = useState(false)
    const [userSearchText, setUserSearchText] = useState("")

    const [userSearchDetails, setUserSearchDetails] = useState("")
    const [address, setAddress] = useState()

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,setUserTextFocus);

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


    const clearAllAllergy=()=>{
        setAllergenValue([])
    }
    const clearAllDietary=()=>{
        setDietaryValue([])
    }
    const clearAllLifeStyle=()=>{
        setLifeStyleValue([])
    }
    const clearAllFeature=()=>{
        setFeaturesValue([])
    }
    useEffect(()=>{
        if(props.myallergydata){
            setAllergenValue(props.myallergydata)
        }
    },[props.myallergydata]);
    useEffect(()=>{
        if(props.mydietarydata){
            setDietaryValue(props.mydietarydata)
        }
    },[props.mydietarydata]);
    useEffect(()=>{
        if(props.mylifestyledata){
            setLifeStyleValue(props.mylifestyledata)
        }
    },[props.mylifestyledata]);
    useEffect(()=>{
        if(props.myfeaturedata){
            setFeaturesValue(props.myfeaturedata)
        }
    },[props.myfeaturedata]);
    useEffect(()=>{
        if(props.mysearchdata){
            setUserSearchText(props.mysearchdata)
        }
    },[props.mysearchdata]);

    // const getMyLocation = () => {
    //     const location = window.navigator && window.navigator.geolocation
    //     if (location) {
    //         location.getCurrentPosition((position) => {
    //             console.log('Lat => ', {
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //             });
    //             axios.get(
    //                 `${GOOGLE_MAP_API_URL}?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`).then(res => {
    //                     console.log('res sejal => ', res)
    //                     setPlaces(res.data.results)
    //                     setAddress(res.data.results[0].formatted_address);
    //                 }).catch(err => console.log('err => ', err))
    //         }, (error) => {
    //             console.log('error => ', error);
    //         })
    //     }
    // }

    const geoLocation = useSelector((state) => state.googledata.location_data);

    

    const handleSearch = (e) => {
        setUserSearchText(e.target.value)
    }


    return (
        <div className="restaurant-find w-100 p-2 p-xl-3 mb-5">
            {JSON.stringify(props.mydata)}
            {/* {JSON.stringify(userSearchDetails&&userSearchDetails)} */}
          
            <div className="fr-search d-flex align-items-center  pb-3">
                <MyfilterListExample />

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
                <div ref={wrapperRef} className="fr-input d-flex justify-content-between align-items-center position-relative">
                    <input 
                        type="text" 
                        value={userSearchText} 
                        onChange={handleSearch} 
                        onFocus={()=>{setUserTextFocus(true)}}
                        // onBlur={()=>{setUserTextFocus(false)}} 
                        className="w-100 fr-search-box rl-fl-searchbox brandon-regular" 
                        placeholder="Search for restaurant or dish" 
                    />
                    {(allergenValue.length<=0&&dietaryValue.length<=0&&lifeStyleValue.length<=0&&featuresValue.length<=0&&userSearchText==='')?
                        <NavLink  to="/restaurant_list" className="fr-search-btn theme-pink-btn">
                            <img src={serachwhite} className="img-fluid" alt="serachwhite" />
                        </NavLink>
                        :
                        <Link  to={{pathname: "/allrestaurant",
                                search: `?search=${userSearchText}`,
                                state: {allergendata: allergenValue,dietarydata: dietaryValue,lifestyledata: lifeStyleValue,featuredata: featuresValue,}
                            }}
                         className="fr-search-btn theme-pink-btn">
                            <img src={serachwhite} className="img-fluid" alt="serachwhite" />
                        </Link>
                    }
                    
                    {/* {filterIcon && <Button className="filtershort-btn ml-2 p-0">
                        <img src={filtershorticon} className="img-fluid" alt="filterIcon" />
                    </Button>} */}
                    {props.showautosuggestion&&props.showautosuggestion?
                        <React.Fragment>
                            {userSearchText&&userSearchText!==" "&&userTextFocus&&
                                <div  className="position-absolute fr-rsdish-filterwrapper">
                                    <SearchResultDisplayComp searchtext={userSearchText}/>
                                </div>
                            }
                        </React.Fragment>
                    :
                        null
                    }
                    
                    
                </div>
            </div>
            {/* {userSearchText} || {JSON.stringify()} */}

            <div className="fr-category-select d-flex justify-content-between align-items-center mt-3 flex-wrap pr-4">
                <CustomDropdown placeholder={"Allergen"} clearAll={clearAllAllergy} options={allergy_Data&&allergy_Data.data} value={allergenValue} onChangeData={setAllergenValue} />

                <CustomDropdown placeholder={"Dietary Preference"} clearAll={clearAllDietary} options={dietary_Data&&dietary_Data.data} value={dietaryValue} onChangeData={setDietaryValue} />

                <CustomDropdown placeholder={"Lifestyle Choices"} clearAll={clearAllLifeStyle} options={lifestyle_Data&&lifestyle_Data.data} value={lifeStyleValue} onChangeData={setLifeStyleValue} />

                <CustomDropdown placeholder={"Restaurant Features"} clearAll={clearAllFeature} options={restaurantFeatures_Data&&restaurantFeatures_Data.data} value={featuresValue} onChangeData={setFeaturesValue} />


            </div>
        </div>
    )
}

export default FilterList

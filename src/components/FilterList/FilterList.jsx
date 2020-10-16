import React, { useEffect, useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import axios from 'axios';
import { API_KEY, GOOGLE_MAP_API_URL, HOST_URL } from '../../shared/constant';
import location from "../../assets/images/location-icon.svg"
import serachwhite from "../../assets/images/serach-white.svg"
import filtershorticon from "../../assets/images/filtershort-icon.svg"
import downarrow from "../../assets/images/down-arrow.svg"
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import "./FilterList.scss"

function FilterList({ filterIcon ="false"}) {
    const [places, setPlaces] = useState(null)
    const [selectedPlace, setSelectedPlace] = useState(null)
    const [allergen, setAllergen] = useState([])
    const [lifestyle, setLifestyle] = useState([])
    const [dietary, setDietary] = useState([])
    const [dietaryValue, setDietaryValue] = useState([])
    const [lifeStyleValue, setLifeStyleValue] = useState([])
    const [allergenValue, setAllergenValue] = useState([])

    useEffect(() => {
        getMyLocation()
        axios.get(`${HOST_URL}/list/allergen`).then(res => {
            console.log('res allergen => ', res.data.data);
            setAllergen(res.data.data)
        }).catch(err => {
            console.log('err => ', err);
        })

        axios.get(`${HOST_URL}/list/dietary`).then(res => {
            console.log('res dietary => ', res);
            setDietary(res.data.data)
        }).catch(err => {
            console.log('err => ', err);
        })

        axios.get(`${HOST_URL}/list/lifeStyle`).then(res => {
            console.log('res lifestyle=> ', res);
            setLifestyle(res.data.data)
        }).catch(err => {
            console.log('err => ', err.response);
        })

    }, [])


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
                    }).catch(err => console.log('err => ', err))
            }, (error) => {
                console.log('error => ', error);
            })
        }
    }

    const handleSearch = (e) => {
        console.log('e.target.value => ', e.target.value)
    }

    return (
        <div className="restaurant-find w-100 p-2 p-xl-3">
            <div className="fr-search d-flex align-items-center flex-wrap pb-3">
                <Dropdown className="fr-location mr-2">
                    <Dropdown.Toggle className="d-flex justify-content-between align-items-center w-100" variant="Secondary" id="dropdown-basic">
                        <span className="d-flex align-items-center">
                            <img src={location} className="img-fluid mr-2" alt="marker" /> {selectedPlace !== null ? (selectedPlace && selectedPlace.address_components[1].long_name) : (places && places[0].address_components[0].short_name)}
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {places && places.map((data, i) =>
                            <Dropdown.Item onSelect={() => setSelectedPlace(data)}>
                                {data.address_components[1] && data.address_components[1].long_name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <div className="fr-input d-flex justify-content-between align-items-center">
                    <input onChange={(e) => handleSearch(e)} className="w-100 fr-search-box rl-fl-searchbox" placeholder="Type here for restaurant or dishe" />
                    <Button variant="primary" className="fr-search-btn theme-pink-btn">
                        <img src={serachwhite} className="img-fluid" alt="serachwhite" />
                    </Button>
                   {filterIcon && <Button className="filtershort-btn ml-2 p-0">
                        <img src={filtershorticon} className="img-fluid" alt="filterIcon" />
                    </Button>}
                </div>
            </div>
            <div className="fr-category-select d-flex justify-content-between align-items-center mt-3 flex-wrap">
                <CustomDropdown placeholder={"Allergen"} options={allergen} value={allergenValue} onChangeData={setAllergenValue} />

                <CustomDropdown placeholder={"Dietary Preference"} options={dietary} value={dietaryValue} onChangeData={setDietaryValue} />

                <CustomDropdown placeholder={"Lifestyle Choices"} options={lifestyle} value={lifeStyleValue} onChangeData={setLifeStyleValue} />

                {/* <CustomDropdown placeholder={"Dietary Preference"} labelKey={"name"} valueKey={"_id"} options={dietary} value={dietaryValue} onChangeData={setDietaryValue} /> */}

                <Dropdown>
                    <Dropdown.Toggle className="d-flex fr-dropicon-none justify-content-between align-items-center w-100 fr-dropdown-btn" variant="Secondary" id="dropdown-basic">
                        Restaurant Features
                            <img src={downarrow} className="img-fluid ml-3" alt="downarrow" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default FilterList

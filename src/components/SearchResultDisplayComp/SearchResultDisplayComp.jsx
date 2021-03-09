import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAllergyData } from '../../redux/actions/allergyAction';
import { getSearchSuggestionList } from '../../redux/actions/homePageAction';
import './SearchResultDisplayComp.scss';
import Dummy_Image from "../../assets/images/restaurant_default.jpg"
import { SERVER_URL } from '../../shared/constant'
import { Link } from 'react-router-dom';


const SearchResultDisplayComp = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchSuggestionList({ search: props.searchtext }))
    }, [dispatch, props.searchtext])

    let suggestion_Data = useSelector((state) => {
        return state.homePage
    });

    let { isSearchLoading, searchSuggestion_Data } = suggestion_Data

    return (
        <React.Fragment>
            <div className="SearchResultDisplayComp-comp">
                {props.searchtex}
                <div className="autoSearch-outline">
                    {isSearchLoading ?
                        <React.Fragment>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <div className="spinner-border m-3" role="status"></div>
                                <div className="visually-hidden">Please Wait Loading...</div>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <React.Fragment>
                                {searchSuggestion_Data && searchSuggestion_Data.restaurant_search_resp && searchSuggestion_Data.restaurant_search_resp.length > 0 ?
                                    <React.Fragment>
                                        <div className="fr-rsdish-viewall d-flex align-items-center justify-content-between flex-wrap mb-2">
                                            <p className="brandon-Medium mb-0 f-18">Restaurants</p>
                                            <Link to={{ pathname: "/allrestaurant", search: `?search=${props.searchtext}` }} variant="" className="f-14 pink-txt">VIEW ALL</Link>
                                        </div>
                                        {
                                            searchSuggestion_Data && searchSuggestion_Data.restaurant_search_resp && searchSuggestion_Data.restaurant_search_resp.slice(0, 3).map((data, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <Link to={'/restaurant/' + data._id} className="text-decoration-none">
                                                            <div className="fr-rsdish-viewmain d-flex align-items-center mt-1 mb-1 p-2">
                                                                <div className="fr-rsdish-img mr-3">
                                                                    {data.restaurantProfilePhoto ?
                                                                        <img src={`${SERVER_URL}/${data.restaurantProfilePhoto}`} alt={data.name?data.name:'Na'} className="img-fluid" />
                                                                        :
                                                                        <img src={Dummy_Image} alt={"restaurant_name"} className="img-fluid" />
                                                                    }
                                                                </div>
                                                                <div className="fr-rsdish-name">
                                                                    <h5 className="brandon-Medium mb-0">{data.name?data.name:'Na'}</h5>
                                                                    {/* <p className="mb-0 txt-lightgray">Surat</p> */}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                    :
                                    null
                                }
                            </React.Fragment>
                            <React.Fragment>
                                {searchSuggestion_Data && searchSuggestion_Data.dish_search_resp && searchSuggestion_Data.dish_search_resp.length > 0 ?
                                    <React.Fragment>
                                        <div className="fr-rsdish-viewall d-flex align-items-center justify-content-between flex-wrap mb-2 mt-3">
                                            <p className="brandon-Medium mb-0 f-18">Dishes</p>
                                            <Link to={{ pathname: "/allrestaurant", search: `?search=${props.searchtext}` }} variant="" className="f-14 pink-txt">VIEW ALL</Link>
                                        </div>
                                        {
                                            searchSuggestion_Data && searchSuggestion_Data.dish_search_resp && searchSuggestion_Data.dish_search_resp.slice(0, 3).map((data, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <Link to={'/restaurant_dish_info/' + data._id} className="text-decoration-none">
                                                            <div className="fr-rsdish-viewmain d-flex align-items-center mt-1 mb-1 p-2">
                                                                <div className="fr-rsdish-img mr-3">
                                                                    {data.image ?
                                                                        <img src={`${SERVER_URL}/${data.image}`} alt={data.name?data.name:'Na'} className="img-fluid" />
                                                                        :
                                                                        <img src={Dummy_Image} alt={"restaurant_name"} className="img-fluid" />
                                                                    }
                                                                </div>
                                                                <div className="fr-rsdish-name">
                                                                    <h5 className="brandon-Medium mb-0">{data.name?data.name:'Na'}</h5>
                                                                    {/* <p className="mb-0 txt-lightgray">Surat</p> */}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                    :
                                    null
                                }
                            </React.Fragment>
                        </React.Fragment>
                    }
                    {isSearchLoading || searchSuggestion_Data && searchSuggestion_Data.restaurant_search_resp && searchSuggestion_Data.restaurant_search_resp.length > 0
                        || searchSuggestion_Data && searchSuggestion_Data.dish_search_resp && searchSuggestion_Data.dish_search_resp.length > 0 ?
                        null
                        :
                        <React.Fragment>
                            <div className="default-text">
                                <p className="mb-0 oop-text">Oops!</p>
                                <p className="mb-0 desc-text">We could not understand what you mean, try rephrasing the query.</p>
                            </div>
                        </React.Fragment>
                    }



                </div>
            </div >
        </React.Fragment >
    )
}

export default SearchResultDisplayComp;
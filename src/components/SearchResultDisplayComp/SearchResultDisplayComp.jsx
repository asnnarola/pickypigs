import React, { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getAllAllergyData } from '../../redux/actions/allergyAction';
import { getSearchSuggestionList } from '../../redux/actions/homePageAction';
import './SearchResultDisplayComp.scss';
import Dummy_Image from "../../assets/images/restaurant_default.jpg"
import {SERVER_URL} from '../../shared/constant'
import { Link } from 'react-router-dom';


const SearchResultDisplayComp=(props)=>{
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getSearchSuggestionList({search:props.searchtext}))
    },[dispatch,props.searchtext])

    let suggestion_Data = useSelector((state)=>{
        return state.homePage
    });

    let {isSearchLoading,searchSuggestion_Data}=suggestion_Data
    
    return(
        <React.Fragment>
            <section className="SearchResultDisplayComp-comp">
                {props.searchtex}
                <div className="autoSearch-outline">
                    {isSearchLoading?
                        <React.Fragment>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <div className="spinner-border m-3" role="status"></div>
                                <div className="visually-hidden">Please Wait Loading...</div>
                            </div>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <React.Fragment>
                                {searchSuggestion_Data&&searchSuggestion_Data.restaurant_search_resp&&searchSuggestion_Data.restaurant_search_resp.length>0?
                                    <React.Fragment>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p>Restaurants</p>
                                            <Link to={{pathname: "/allrestaurant",search: `?search=${props.searchtext}`}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="" className="">VIEW ALL</Link>
                                        </div>
                                        {
                                            searchSuggestion_Data&&searchSuggestion_Data.restaurant_search_resp&&searchSuggestion_Data.restaurant_search_resp.slice(0,3).map((data,index)=>{
                                                return(
                                                    <React.Fragment key={index}>
                                                        <Link to={'/restaurant_dish/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                            <div className="d-flex flex-column">
                                                                <div class="card mb-3" >
                                                                    <div class="row g-0">
                                                                        <div class="col-md-4">
                                                                        {data.restaurantProfilePhoto?
                                                                            <img src={`${SERVER_URL}/${data.restaurantProfilePhoto}`} alt={data.name?data.name:'Na'} className="img-fluid w-100" />
                                                                        :
                                                                            <img src={Dummy_Image} alt={"restaurant_name"} className="img-fluid w-100" />
                                                                        }
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                        <div class="card-body">
                                                                            <h5 class="card-title">{data.name?data.name:'Na'}</h5>
                                                                        </div>
                                                                        </div>
                                                                    </div>
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
                                {searchSuggestion_Data&&searchSuggestion_Data.dish_search_resp&&searchSuggestion_Data.dish_search_resp.length>0?
                                    <React.Fragment>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p>Dishes</p>
                                            <Link to={{pathname: "/allrestaurant",search: `?search=${props.searchtext}`}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="" className="">VIEW ALL</Link>
                                        </div>
                                        {
                                            searchSuggestion_Data&&searchSuggestion_Data.dish_search_resp&&searchSuggestion_Data.dish_search_resp.slice(0,3).map((data,index)=>{
                                                return(
                                                    <React.Fragment key={index}>
                                                        <Link to={'/restaurant_dish_info/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                            <div className="d-flex flex-column">
                                                                <div class="card mb-3" >
                                                                    <div class="row g-0">
                                                                        <div class="col-md-4">
                                                                        {data.image?
                                                                            <img src={`${SERVER_URL}/${data.image}`} alt={data.name?data.name:'Na'} className="img-fluid w-100" />
                                                                        :
                                                                            <img src={Dummy_Image} alt={"restaurant_name"} className="img-fluid w-100" />
                                                                        }
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                        <div class="card-body">
                                                                            <h5 class="card-title">{data.name}</h5>
                                                                        </div>
                                                                        </div>
                                                                    </div>
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
                    {isSearchLoading||searchSuggestion_Data&&searchSuggestion_Data.restaurant_search_resp&&searchSuggestion_Data.restaurant_search_resp.length>0
                    ||searchSuggestion_Data&&searchSuggestion_Data.dish_search_resp&&searchSuggestion_Data.dish_search_resp.length>0?
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
            </section>
        </React.Fragment>
    )
}

export default SearchResultDisplayComp;
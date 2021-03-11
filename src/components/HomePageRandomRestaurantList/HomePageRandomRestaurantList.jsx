import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DishBlock from "../DishBlock/DishBlock"
import './HomePageRandomRestaurantList.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomRestaurantsList } from '../../redux/actions/homePageAction';
import {SERVER_URL} from '../../shared/constant'

const HomePageRandomRestaurantList=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getRandomRestaurantsList({start: 0,length:8}))
    },[dispatch]);

    const randomRestaurantData=useSelector((state)=>{
        return state.homePage
    });
    let {isLoading,randomRestaurantsList_Data}=randomRestaurantData;
    return(
        <React.Fragment>
            
                <section className="section3 mb-5 pt-5 rs-love-section position-relative zindex-1">
                    <div className="container">
                        <div className="row mb-4 pb-3">
                            <div className="col-sm-12">
                                <div className="fn-restaurant-detail d-flex justify-content-between align-items-end">
                                    <h1 className="sectionhead-txt">
                                        FIND A RESTAURANT <br className="d-lg-block d-none" /> YOU WILL LOVE
                                </h1>
                                    <Link to="/restaurant_list" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="" className="theme-light-btn w-140 h-48 f-14">VIEW ALL</Link>{' '}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {isLoading?
                                <React.Fragment>
                                    <div className="d-flex align-items-center">
                                        <div className="spinner-border m-3" role="status"></div>
                                        <div className="visually-hidden">Please Wait Loading...</div>
                                    </div>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    {randomRestaurantsList_Data&&randomRestaurantsList_Data.data&&randomRestaurantsList_Data.data.length>0?
                                        <React.Fragment>
                                            {
                                                randomRestaurantsList_Data.data&&randomRestaurantsList_Data.data.map((data,index)=>{
                                                    return(
                                                        <React.Fragment key={index}>
                                                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                                                <Link to={'/restaurant/'+data._id} style={{ textDecoration: 'none', color: 'initial' }}>
                                                                    <DishBlock 
                                                                        restaurant_name={data.name?data.name:''} 
                                                                        restaurant_pic={data.restaurantProfilePhoto?data.restaurantProfilePhoto:''} 
                                                                        kmvalue={data.distance&&data.distance.text?data.distance.text:""} 
                                                                        rating={4.5} 
                                                                        restaurantfeature={data.restaurantFeaturesOptionsList?data.restaurantFeaturesOptionsList:[]}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                    :
                                        <React.Fragment>
                                            <p>Something Went Wrong...</p>
                                        </React.Fragment>
                                    }

                                </React.Fragment>
                            }
                        </div>
                    </div>
                </section>

        </React.Fragment>
    )
}

export default HomePageRandomRestaurantList;
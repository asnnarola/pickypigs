import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DiscDescriptionComp from '../DiscDescriptionComp/DiscDescriptionComp';
import './HomePageRandomDishList.scss'
import restaurant_P1 from "../../assets/images/restaurant_default.jpg"

import { useDispatch, useSelector } from 'react-redux';
import { getRandomDishList } from '../../redux/actions/homePageAction';
import {SERVER_URL} from '../../shared/constant'

const HomePageRandomDishList=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getRandomDishList( {userCoordinates:[21.096612,72.650754]} ))
    },[dispatch]);

    const randomDishData=useSelector((state)=>{
        return state.homePage
    });
    let {isLoading,randomDishsList_Data}=randomDishData;
    return(
        <React.Fragment>
            <section className="HomePageRandomDishList mb-5 pt-5">
                <div className="container">
                    <div className="row mb-4 pb-3">
                        <div className="col-sm-12">
                            <div className="whatmenu-wrapper d-flex justify-content-between align-items-end">
                                <h1 className="sectionhead-txt text-center">WHAT ON THE MENU?</h1>
                                <Link to="/dish_list" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="button" className="theme-light-btn w-140 h-48 f-14 btn btn-">VIEW ALL</Link>
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
                                {randomDishsList_Data&&randomDishsList_Data.dishesList&&randomDishsList_Data.dishesList.length>0?
                                    <React.Fragment>
                                        {
                                            randomDishsList_Data.dishesList&&randomDishsList_Data.dishesList.map((data,index)=>{
                                                return(
                                                    <React.Fragment key={index}>
                                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-2">
                                                            <Link to={'/restaurant_dish_info/' + data._id} style={{textDecoration:'none',color:'initial'}}>
                                                                <DiscDescriptionComp
                                                                    dish_name={data.name?data.name:''}
                                                                    dish_image={data.image?data.image:''}
                                                                    dish_priceunit={data.priceUnit?data.priceUnit:''}
                                                                    dish_price={data.price?data.price:'-'}
                                                                    dish_description={data.description?data.description:''}
                                                                    dish_menu={data.menusDetail?data.menusDetail:[]}
                                                                    dish_allergy={data.allergensList?data.allergensList:[]}
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

export default HomePageRandomDishList;